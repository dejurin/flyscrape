package main

import (
	"flag"
	"fmt"
	"log"
	"os"
	"time"

	"flyscrape"
)

type RunCommand struct{}

func (c *RunCommand) Run(args []string) error {
	fs := flag.NewFlagSet("flyscrape-run", flag.ContinueOnError)
	concurrent := fs.Int("concurrent", 0, "concurrency")
	noPrettyPrint := fs.Bool("no-pretty-print", false, "no-pretty-print")
	fs.Usage = c.Usage

	if err := fs.Parse(args); err != nil {
		return err
	} else if fs.NArg() == 0 || fs.Arg(0) == "" {
		return fmt.Errorf("script path required")
	} else if fs.NArg() > 1 {
		return fmt.Errorf("too many arguments")
	}

	script := fs.Arg(0)
	src, err := os.ReadFile(script)
	if err != nil {
		return fmt.Errorf("failed to read script %q: %w", script, err)
	}

	opts, scrape, err := flyscrape.Compile(string(src))
	if err != nil {
		return fmt.Errorf("failed to compile script: %w", err)
	}

	svc := flyscrape.Scraper{
		ScrapeOptions: opts,
		ScrapeFunc:    scrape,
		Concurrency:   *concurrent,
	}

	count := 0
	start := time.Now()

	for result := range svc.Scrape() {
		if count > 0 {
			fmt.Println(",")
		}
		if count == 0 {
			fmt.Println("[")
		}
		if *noPrettyPrint {
			fmt.Print(flyscrape.Print(result, "  "))
		} else {
			fmt.Print(flyscrape.PrettyPrint(result, "  "))
		}
		count++
	}
	fmt.Println("\n]")

	log.Printf("Scraped %d websites in %v\n", count, time.Since(start))
	return nil
}

func (c *RunCommand) Usage() {
	fmt.Println(`
The run command runs the scraping script.

Usage:

    flyscrape run SCRIPT

Arguments:

    -concurrent NUM
        Determines the number of concurrent requests.

    -no-pretty-print
        Disables pretty printing of scrape results.


Examples:

    # Run the script.
    $ flyscrape run example.js

    # Run the script with 10 concurrent requests.
    $ flyscrape run -concurrent 10 example.js

    # Run the script with pretty printing disabled.
    $ flyscrape run -no-pretty-print example.js
`[1:])
}