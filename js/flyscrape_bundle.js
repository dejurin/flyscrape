(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // node_modules/cheerio/lib/types.js
  var require_types = __commonJS({
    "node_modules/cheerio/lib/types.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/cheerio/lib/options.js
  var require_options = __commonJS({
    "node_modules/cheerio/lib/options.js"(exports) {
      "use strict";
      var __assign = exports && exports.__assign || function() {
        __assign = Object.assign || function(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s)
              if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
          }
          return t;
        };
        return __assign.apply(this, arguments);
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.flatten = void 0;
      var defaultOpts = {
        xml: false,
        decodeEntities: true
      };
      exports.default = defaultOpts;
      var xmlModeDefault = {
        _useHtmlParser2: true,
        xmlMode: true
      };
      function flatten(options) {
        return (options === null || options === void 0 ? void 0 : options.xml) ? typeof options.xml === "boolean" ? xmlModeDefault : __assign(__assign({}, xmlModeDefault), options.xml) : options !== null && options !== void 0 ? options : void 0;
      }
      exports.flatten = flatten;
    }
  });

  // node_modules/domelementtype/lib/index.js
  var require_lib = __commonJS({
    "node_modules/domelementtype/lib/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Doctype = exports.CDATA = exports.Tag = exports.Style = exports.Script = exports.Comment = exports.Directive = exports.Text = exports.Root = exports.isTag = exports.ElementType = void 0;
      var ElementType;
      (function(ElementType2) {
        ElementType2["Root"] = "root";
        ElementType2["Text"] = "text";
        ElementType2["Directive"] = "directive";
        ElementType2["Comment"] = "comment";
        ElementType2["Script"] = "script";
        ElementType2["Style"] = "style";
        ElementType2["Tag"] = "tag";
        ElementType2["CDATA"] = "cdata";
        ElementType2["Doctype"] = "doctype";
      })(ElementType = exports.ElementType || (exports.ElementType = {}));
      function isTag(elem) {
        return elem.type === ElementType.Tag || elem.type === ElementType.Script || elem.type === ElementType.Style;
      }
      exports.isTag = isTag;
      exports.Root = ElementType.Root;
      exports.Text = ElementType.Text;
      exports.Directive = ElementType.Directive;
      exports.Comment = ElementType.Comment;
      exports.Script = ElementType.Script;
      exports.Style = ElementType.Style;
      exports.Tag = ElementType.Tag;
      exports.CDATA = ElementType.CDATA;
      exports.Doctype = ElementType.Doctype;
    }
  });

  // node_modules/domhandler/lib/node.js
  var require_node = __commonJS({
    "node_modules/domhandler/lib/node.js"(exports) {
      "use strict";
      var __extends = exports && exports.__extends || function() {
        var extendStatics = function(d, b) {
          extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
            d2.__proto__ = b2;
          } || function(d2, b2) {
            for (var p in b2)
              if (Object.prototype.hasOwnProperty.call(b2, p))
                d2[p] = b2[p];
          };
          return extendStatics(d, b);
        };
        return function(d, b) {
          if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
          extendStatics(d, b);
          function __() {
            this.constructor = d;
          }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      }();
      var __assign = exports && exports.__assign || function() {
        __assign = Object.assign || function(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s)
              if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
          }
          return t;
        };
        return __assign.apply(this, arguments);
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.cloneNode = exports.hasChildren = exports.isDocument = exports.isDirective = exports.isComment = exports.isText = exports.isCDATA = exports.isTag = exports.Element = exports.Document = exports.CDATA = exports.NodeWithChildren = exports.ProcessingInstruction = exports.Comment = exports.Text = exports.DataNode = exports.Node = void 0;
      var domelementtype_1 = require_lib();
      var Node = (
        /** @class */
        function() {
          function Node2() {
            this.parent = null;
            this.prev = null;
            this.next = null;
            this.startIndex = null;
            this.endIndex = null;
          }
          Object.defineProperty(Node2.prototype, "parentNode", {
            // Read-write aliases for properties
            /**
             * Same as {@link parent}.
             * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
             */
            get: function() {
              return this.parent;
            },
            set: function(parent) {
              this.parent = parent;
            },
            enumerable: false,
            configurable: true
          });
          Object.defineProperty(Node2.prototype, "previousSibling", {
            /**
             * Same as {@link prev}.
             * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
             */
            get: function() {
              return this.prev;
            },
            set: function(prev) {
              this.prev = prev;
            },
            enumerable: false,
            configurable: true
          });
          Object.defineProperty(Node2.prototype, "nextSibling", {
            /**
             * Same as {@link next}.
             * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
             */
            get: function() {
              return this.next;
            },
            set: function(next) {
              this.next = next;
            },
            enumerable: false,
            configurable: true
          });
          Node2.prototype.cloneNode = function(recursive) {
            if (recursive === void 0) {
              recursive = false;
            }
            return cloneNode(this, recursive);
          };
          return Node2;
        }()
      );
      exports.Node = Node;
      var DataNode = (
        /** @class */
        function(_super) {
          __extends(DataNode2, _super);
          function DataNode2(data) {
            var _this = _super.call(this) || this;
            _this.data = data;
            return _this;
          }
          Object.defineProperty(DataNode2.prototype, "nodeValue", {
            /**
             * Same as {@link data}.
             * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
             */
            get: function() {
              return this.data;
            },
            set: function(data) {
              this.data = data;
            },
            enumerable: false,
            configurable: true
          });
          return DataNode2;
        }(Node)
      );
      exports.DataNode = DataNode;
      var Text = (
        /** @class */
        function(_super) {
          __extends(Text2, _super);
          function Text2() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.type = domelementtype_1.ElementType.Text;
            return _this;
          }
          Object.defineProperty(Text2.prototype, "nodeType", {
            get: function() {
              return 3;
            },
            enumerable: false,
            configurable: true
          });
          return Text2;
        }(DataNode)
      );
      exports.Text = Text;
      var Comment = (
        /** @class */
        function(_super) {
          __extends(Comment2, _super);
          function Comment2() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.type = domelementtype_1.ElementType.Comment;
            return _this;
          }
          Object.defineProperty(Comment2.prototype, "nodeType", {
            get: function() {
              return 8;
            },
            enumerable: false,
            configurable: true
          });
          return Comment2;
        }(DataNode)
      );
      exports.Comment = Comment;
      var ProcessingInstruction = (
        /** @class */
        function(_super) {
          __extends(ProcessingInstruction2, _super);
          function ProcessingInstruction2(name, data) {
            var _this = _super.call(this, data) || this;
            _this.name = name;
            _this.type = domelementtype_1.ElementType.Directive;
            return _this;
          }
          Object.defineProperty(ProcessingInstruction2.prototype, "nodeType", {
            get: function() {
              return 1;
            },
            enumerable: false,
            configurable: true
          });
          return ProcessingInstruction2;
        }(DataNode)
      );
      exports.ProcessingInstruction = ProcessingInstruction;
      var NodeWithChildren = (
        /** @class */
        function(_super) {
          __extends(NodeWithChildren2, _super);
          function NodeWithChildren2(children) {
            var _this = _super.call(this) || this;
            _this.children = children;
            return _this;
          }
          Object.defineProperty(NodeWithChildren2.prototype, "firstChild", {
            // Aliases
            /** First child of the node. */
            get: function() {
              var _a;
              return (_a = this.children[0]) !== null && _a !== void 0 ? _a : null;
            },
            enumerable: false,
            configurable: true
          });
          Object.defineProperty(NodeWithChildren2.prototype, "lastChild", {
            /** Last child of the node. */
            get: function() {
              return this.children.length > 0 ? this.children[this.children.length - 1] : null;
            },
            enumerable: false,
            configurable: true
          });
          Object.defineProperty(NodeWithChildren2.prototype, "childNodes", {
            /**
             * Same as {@link children}.
             * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
             */
            get: function() {
              return this.children;
            },
            set: function(children) {
              this.children = children;
            },
            enumerable: false,
            configurable: true
          });
          return NodeWithChildren2;
        }(Node)
      );
      exports.NodeWithChildren = NodeWithChildren;
      var CDATA = (
        /** @class */
        function(_super) {
          __extends(CDATA2, _super);
          function CDATA2() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.type = domelementtype_1.ElementType.CDATA;
            return _this;
          }
          Object.defineProperty(CDATA2.prototype, "nodeType", {
            get: function() {
              return 4;
            },
            enumerable: false,
            configurable: true
          });
          return CDATA2;
        }(NodeWithChildren)
      );
      exports.CDATA = CDATA;
      var Document = (
        /** @class */
        function(_super) {
          __extends(Document2, _super);
          function Document2() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.type = domelementtype_1.ElementType.Root;
            return _this;
          }
          Object.defineProperty(Document2.prototype, "nodeType", {
            get: function() {
              return 9;
            },
            enumerable: false,
            configurable: true
          });
          return Document2;
        }(NodeWithChildren)
      );
      exports.Document = Document;
      var Element = (
        /** @class */
        function(_super) {
          __extends(Element2, _super);
          function Element2(name, attribs, children, type) {
            if (children === void 0) {
              children = [];
            }
            if (type === void 0) {
              type = name === "script" ? domelementtype_1.ElementType.Script : name === "style" ? domelementtype_1.ElementType.Style : domelementtype_1.ElementType.Tag;
            }
            var _this = _super.call(this, children) || this;
            _this.name = name;
            _this.attribs = attribs;
            _this.type = type;
            return _this;
          }
          Object.defineProperty(Element2.prototype, "nodeType", {
            get: function() {
              return 1;
            },
            enumerable: false,
            configurable: true
          });
          Object.defineProperty(Element2.prototype, "tagName", {
            // DOM Level 1 aliases
            /**
             * Same as {@link name}.
             * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
             */
            get: function() {
              return this.name;
            },
            set: function(name) {
              this.name = name;
            },
            enumerable: false,
            configurable: true
          });
          Object.defineProperty(Element2.prototype, "attributes", {
            get: function() {
              var _this = this;
              return Object.keys(this.attribs).map(function(name) {
                var _a, _b;
                return {
                  name,
                  value: _this.attribs[name],
                  namespace: (_a = _this["x-attribsNamespace"]) === null || _a === void 0 ? void 0 : _a[name],
                  prefix: (_b = _this["x-attribsPrefix"]) === null || _b === void 0 ? void 0 : _b[name]
                };
              });
            },
            enumerable: false,
            configurable: true
          });
          return Element2;
        }(NodeWithChildren)
      );
      exports.Element = Element;
      function isTag(node) {
        return (0, domelementtype_1.isTag)(node);
      }
      exports.isTag = isTag;
      function isCDATA(node) {
        return node.type === domelementtype_1.ElementType.CDATA;
      }
      exports.isCDATA = isCDATA;
      function isText(node) {
        return node.type === domelementtype_1.ElementType.Text;
      }
      exports.isText = isText;
      function isComment(node) {
        return node.type === domelementtype_1.ElementType.Comment;
      }
      exports.isComment = isComment;
      function isDirective(node) {
        return node.type === domelementtype_1.ElementType.Directive;
      }
      exports.isDirective = isDirective;
      function isDocument(node) {
        return node.type === domelementtype_1.ElementType.Root;
      }
      exports.isDocument = isDocument;
      function hasChildren(node) {
        return Object.prototype.hasOwnProperty.call(node, "children");
      }
      exports.hasChildren = hasChildren;
      function cloneNode(node, recursive) {
        if (recursive === void 0) {
          recursive = false;
        }
        var result;
        if (isText(node)) {
          result = new Text(node.data);
        } else if (isComment(node)) {
          result = new Comment(node.data);
        } else if (isTag(node)) {
          var children = recursive ? cloneChildren(node.children) : [];
          var clone_1 = new Element(node.name, __assign({}, node.attribs), children);
          children.forEach(function(child) {
            return child.parent = clone_1;
          });
          if (node.namespace != null) {
            clone_1.namespace = node.namespace;
          }
          if (node["x-attribsNamespace"]) {
            clone_1["x-attribsNamespace"] = __assign({}, node["x-attribsNamespace"]);
          }
          if (node["x-attribsPrefix"]) {
            clone_1["x-attribsPrefix"] = __assign({}, node["x-attribsPrefix"]);
          }
          result = clone_1;
        } else if (isCDATA(node)) {
          var children = recursive ? cloneChildren(node.children) : [];
          var clone_2 = new CDATA(children);
          children.forEach(function(child) {
            return child.parent = clone_2;
          });
          result = clone_2;
        } else if (isDocument(node)) {
          var children = recursive ? cloneChildren(node.children) : [];
          var clone_3 = new Document(children);
          children.forEach(function(child) {
            return child.parent = clone_3;
          });
          if (node["x-mode"]) {
            clone_3["x-mode"] = node["x-mode"];
          }
          result = clone_3;
        } else if (isDirective(node)) {
          var instruction = new ProcessingInstruction(node.name, node.data);
          if (node["x-name"] != null) {
            instruction["x-name"] = node["x-name"];
            instruction["x-publicId"] = node["x-publicId"];
            instruction["x-systemId"] = node["x-systemId"];
          }
          result = instruction;
        } else {
          throw new Error("Not implemented yet: ".concat(node.type));
        }
        result.startIndex = node.startIndex;
        result.endIndex = node.endIndex;
        if (node.sourceCodeLocation != null) {
          result.sourceCodeLocation = node.sourceCodeLocation;
        }
        return result;
      }
      exports.cloneNode = cloneNode;
      function cloneChildren(childs) {
        var children = childs.map(function(child) {
          return cloneNode(child, true);
        });
        for (var i = 1; i < children.length; i++) {
          children[i].prev = children[i - 1];
          children[i - 1].next = children[i];
        }
        return children;
      }
    }
  });

  // node_modules/domhandler/lib/index.js
  var require_lib2 = __commonJS({
    "node_modules/domhandler/lib/index.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __exportStar = exports && exports.__exportStar || function(m, exports2) {
        for (var p in m)
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
            __createBinding(exports2, m, p);
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.DomHandler = void 0;
      var domelementtype_1 = require_lib();
      var node_js_1 = require_node();
      __exportStar(require_node(), exports);
      var defaultOpts = {
        withStartIndices: false,
        withEndIndices: false,
        xmlMode: false
      };
      var DomHandler = (
        /** @class */
        function() {
          function DomHandler2(callback, options, elementCB) {
            this.dom = [];
            this.root = new node_js_1.Document(this.dom);
            this.done = false;
            this.tagStack = [this.root];
            this.lastNode = null;
            this.parser = null;
            if (typeof options === "function") {
              elementCB = options;
              options = defaultOpts;
            }
            if (typeof callback === "object") {
              options = callback;
              callback = void 0;
            }
            this.callback = callback !== null && callback !== void 0 ? callback : null;
            this.options = options !== null && options !== void 0 ? options : defaultOpts;
            this.elementCB = elementCB !== null && elementCB !== void 0 ? elementCB : null;
          }
          DomHandler2.prototype.onparserinit = function(parser) {
            this.parser = parser;
          };
          DomHandler2.prototype.onreset = function() {
            this.dom = [];
            this.root = new node_js_1.Document(this.dom);
            this.done = false;
            this.tagStack = [this.root];
            this.lastNode = null;
            this.parser = null;
          };
          DomHandler2.prototype.onend = function() {
            if (this.done)
              return;
            this.done = true;
            this.parser = null;
            this.handleCallback(null);
          };
          DomHandler2.prototype.onerror = function(error) {
            this.handleCallback(error);
          };
          DomHandler2.prototype.onclosetag = function() {
            this.lastNode = null;
            var elem = this.tagStack.pop();
            if (this.options.withEndIndices) {
              elem.endIndex = this.parser.endIndex;
            }
            if (this.elementCB)
              this.elementCB(elem);
          };
          DomHandler2.prototype.onopentag = function(name, attribs) {
            var type = this.options.xmlMode ? domelementtype_1.ElementType.Tag : void 0;
            var element = new node_js_1.Element(name, attribs, void 0, type);
            this.addNode(element);
            this.tagStack.push(element);
          };
          DomHandler2.prototype.ontext = function(data) {
            var lastNode = this.lastNode;
            if (lastNode && lastNode.type === domelementtype_1.ElementType.Text) {
              lastNode.data += data;
              if (this.options.withEndIndices) {
                lastNode.endIndex = this.parser.endIndex;
              }
            } else {
              var node = new node_js_1.Text(data);
              this.addNode(node);
              this.lastNode = node;
            }
          };
          DomHandler2.prototype.oncomment = function(data) {
            if (this.lastNode && this.lastNode.type === domelementtype_1.ElementType.Comment) {
              this.lastNode.data += data;
              return;
            }
            var node = new node_js_1.Comment(data);
            this.addNode(node);
            this.lastNode = node;
          };
          DomHandler2.prototype.oncommentend = function() {
            this.lastNode = null;
          };
          DomHandler2.prototype.oncdatastart = function() {
            var text = new node_js_1.Text("");
            var node = new node_js_1.CDATA([text]);
            this.addNode(node);
            text.parent = node;
            this.lastNode = text;
          };
          DomHandler2.prototype.oncdataend = function() {
            this.lastNode = null;
          };
          DomHandler2.prototype.onprocessinginstruction = function(name, data) {
            var node = new node_js_1.ProcessingInstruction(name, data);
            this.addNode(node);
          };
          DomHandler2.prototype.handleCallback = function(error) {
            if (typeof this.callback === "function") {
              this.callback(error, this.dom);
            } else if (error) {
              throw error;
            }
          };
          DomHandler2.prototype.addNode = function(node) {
            var parent = this.tagStack[this.tagStack.length - 1];
            var previousSibling = parent.children[parent.children.length - 1];
            if (this.options.withStartIndices) {
              node.startIndex = this.parser.startIndex;
            }
            if (this.options.withEndIndices) {
              node.endIndex = this.parser.endIndex;
            }
            parent.children.push(node);
            if (previousSibling) {
              node.prev = previousSibling;
              previousSibling.next = node;
            }
            node.parent = parent;
            this.lastNode = null;
          };
          return DomHandler2;
        }()
      );
      exports.DomHandler = DomHandler;
      exports.default = DomHandler;
    }
  });

  // node_modules/entities/lib/generated/decode-data-html.js
  var require_decode_data_html = __commonJS({
    "node_modules/entities/lib/generated/decode-data-html.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.default = new Uint16Array(
        // prettier-ignore
        '\u1D41<\xD5\u0131\u028A\u049D\u057B\u05D0\u0675\u06DE\u07A2\u07D6\u080F\u0A4A\u0A91\u0DA1\u0E6D\u0F09\u0F26\u10CA\u1228\u12E1\u1415\u149D\u14C3\u14DF\u1525\0\0\0\0\0\0\u156B\u16CD\u198D\u1C12\u1DDD\u1F7E\u2060\u21B0\u228D\u23C0\u23FB\u2442\u2824\u2912\u2D08\u2E48\u2FCE\u3016\u32BA\u3639\u37AC\u38FE\u3A28\u3A71\u3AE0\u3B2E\u0800EMabcfglmnoprstu\\bfms\x7F\x84\x8B\x90\x95\x98\xA6\xB3\xB9\xC8\xCFlig\u803B\xC6\u40C6P\u803B&\u4026cute\u803B\xC1\u40C1reve;\u4102\u0100iyx}rc\u803B\xC2\u40C2;\u4410r;\uC000\u{1D504}rave\u803B\xC0\u40C0pha;\u4391acr;\u4100d;\u6A53\u0100gp\x9D\xA1on;\u4104f;\uC000\u{1D538}plyFunction;\u6061ing\u803B\xC5\u40C5\u0100cs\xBE\xC3r;\uC000\u{1D49C}ign;\u6254ilde\u803B\xC3\u40C3ml\u803B\xC4\u40C4\u0400aceforsu\xE5\xFB\xFE\u0117\u011C\u0122\u0127\u012A\u0100cr\xEA\xF2kslash;\u6216\u0176\xF6\xF8;\u6AE7ed;\u6306y;\u4411\u0180crt\u0105\u010B\u0114ause;\u6235noullis;\u612Ca;\u4392r;\uC000\u{1D505}pf;\uC000\u{1D539}eve;\u42D8c\xF2\u0113mpeq;\u624E\u0700HOacdefhilorsu\u014D\u0151\u0156\u0180\u019E\u01A2\u01B5\u01B7\u01BA\u01DC\u0215\u0273\u0278\u027Ecy;\u4427PY\u803B\xA9\u40A9\u0180cpy\u015D\u0162\u017Aute;\u4106\u0100;i\u0167\u0168\u62D2talDifferentialD;\u6145leys;\u612D\u0200aeio\u0189\u018E\u0194\u0198ron;\u410Cdil\u803B\xC7\u40C7rc;\u4108nint;\u6230ot;\u410A\u0100dn\u01A7\u01ADilla;\u40B8terDot;\u40B7\xF2\u017Fi;\u43A7rcle\u0200DMPT\u01C7\u01CB\u01D1\u01D6ot;\u6299inus;\u6296lus;\u6295imes;\u6297o\u0100cs\u01E2\u01F8kwiseContourIntegral;\u6232eCurly\u0100DQ\u0203\u020FoubleQuote;\u601Duote;\u6019\u0200lnpu\u021E\u0228\u0247\u0255on\u0100;e\u0225\u0226\u6237;\u6A74\u0180git\u022F\u0236\u023Aruent;\u6261nt;\u622FourIntegral;\u622E\u0100fr\u024C\u024E;\u6102oduct;\u6210nterClockwiseContourIntegral;\u6233oss;\u6A2Fcr;\uC000\u{1D49E}p\u0100;C\u0284\u0285\u62D3ap;\u624D\u0580DJSZacefios\u02A0\u02AC\u02B0\u02B4\u02B8\u02CB\u02D7\u02E1\u02E6\u0333\u048D\u0100;o\u0179\u02A5trahd;\u6911cy;\u4402cy;\u4405cy;\u440F\u0180grs\u02BF\u02C4\u02C7ger;\u6021r;\u61A1hv;\u6AE4\u0100ay\u02D0\u02D5ron;\u410E;\u4414l\u0100;t\u02DD\u02DE\u6207a;\u4394r;\uC000\u{1D507}\u0100af\u02EB\u0327\u0100cm\u02F0\u0322ritical\u0200ADGT\u0300\u0306\u0316\u031Ccute;\u40B4o\u0174\u030B\u030D;\u42D9bleAcute;\u42DDrave;\u4060ilde;\u42DCond;\u62C4ferentialD;\u6146\u0470\u033D\0\0\0\u0342\u0354\0\u0405f;\uC000\u{1D53B}\u0180;DE\u0348\u0349\u034D\u40A8ot;\u60DCqual;\u6250ble\u0300CDLRUV\u0363\u0372\u0382\u03CF\u03E2\u03F8ontourIntegra\xEC\u0239o\u0274\u0379\0\0\u037B\xBB\u0349nArrow;\u61D3\u0100eo\u0387\u03A4ft\u0180ART\u0390\u0396\u03A1rrow;\u61D0ightArrow;\u61D4e\xE5\u02CAng\u0100LR\u03AB\u03C4eft\u0100AR\u03B3\u03B9rrow;\u67F8ightArrow;\u67FAightArrow;\u67F9ight\u0100AT\u03D8\u03DErrow;\u61D2ee;\u62A8p\u0241\u03E9\0\0\u03EFrrow;\u61D1ownArrow;\u61D5erticalBar;\u6225n\u0300ABLRTa\u0412\u042A\u0430\u045E\u047F\u037Crrow\u0180;BU\u041D\u041E\u0422\u6193ar;\u6913pArrow;\u61F5reve;\u4311eft\u02D2\u043A\0\u0446\0\u0450ightVector;\u6950eeVector;\u695Eector\u0100;B\u0459\u045A\u61BDar;\u6956ight\u01D4\u0467\0\u0471eeVector;\u695Fector\u0100;B\u047A\u047B\u61C1ar;\u6957ee\u0100;A\u0486\u0487\u62A4rrow;\u61A7\u0100ct\u0492\u0497r;\uC000\u{1D49F}rok;\u4110\u0800NTacdfglmopqstux\u04BD\u04C0\u04C4\u04CB\u04DE\u04E2\u04E7\u04EE\u04F5\u0521\u052F\u0536\u0552\u055D\u0560\u0565G;\u414AH\u803B\xD0\u40D0cute\u803B\xC9\u40C9\u0180aiy\u04D2\u04D7\u04DCron;\u411Arc\u803B\xCA\u40CA;\u442Dot;\u4116r;\uC000\u{1D508}rave\u803B\xC8\u40C8ement;\u6208\u0100ap\u04FA\u04FEcr;\u4112ty\u0253\u0506\0\0\u0512mallSquare;\u65FBerySmallSquare;\u65AB\u0100gp\u0526\u052Aon;\u4118f;\uC000\u{1D53C}silon;\u4395u\u0100ai\u053C\u0549l\u0100;T\u0542\u0543\u6A75ilde;\u6242librium;\u61CC\u0100ci\u0557\u055Ar;\u6130m;\u6A73a;\u4397ml\u803B\xCB\u40CB\u0100ip\u056A\u056Fsts;\u6203onentialE;\u6147\u0280cfios\u0585\u0588\u058D\u05B2\u05CCy;\u4424r;\uC000\u{1D509}lled\u0253\u0597\0\0\u05A3mallSquare;\u65FCerySmallSquare;\u65AA\u0370\u05BA\0\u05BF\0\0\u05C4f;\uC000\u{1D53D}All;\u6200riertrf;\u6131c\xF2\u05CB\u0600JTabcdfgorst\u05E8\u05EC\u05EF\u05FA\u0600\u0612\u0616\u061B\u061D\u0623\u066C\u0672cy;\u4403\u803B>\u403Emma\u0100;d\u05F7\u05F8\u4393;\u43DCreve;\u411E\u0180eiy\u0607\u060C\u0610dil;\u4122rc;\u411C;\u4413ot;\u4120r;\uC000\u{1D50A};\u62D9pf;\uC000\u{1D53E}eater\u0300EFGLST\u0635\u0644\u064E\u0656\u065B\u0666qual\u0100;L\u063E\u063F\u6265ess;\u62DBullEqual;\u6267reater;\u6AA2ess;\u6277lantEqual;\u6A7Eilde;\u6273cr;\uC000\u{1D4A2};\u626B\u0400Aacfiosu\u0685\u068B\u0696\u069B\u069E\u06AA\u06BE\u06CARDcy;\u442A\u0100ct\u0690\u0694ek;\u42C7;\u405Eirc;\u4124r;\u610ClbertSpace;\u610B\u01F0\u06AF\0\u06B2f;\u610DizontalLine;\u6500\u0100ct\u06C3\u06C5\xF2\u06A9rok;\u4126mp\u0144\u06D0\u06D8ownHum\xF0\u012Fqual;\u624F\u0700EJOacdfgmnostu\u06FA\u06FE\u0703\u0707\u070E\u071A\u071E\u0721\u0728\u0744\u0778\u078B\u078F\u0795cy;\u4415lig;\u4132cy;\u4401cute\u803B\xCD\u40CD\u0100iy\u0713\u0718rc\u803B\xCE\u40CE;\u4418ot;\u4130r;\u6111rave\u803B\xCC\u40CC\u0180;ap\u0720\u072F\u073F\u0100cg\u0734\u0737r;\u412AinaryI;\u6148lie\xF3\u03DD\u01F4\u0749\0\u0762\u0100;e\u074D\u074E\u622C\u0100gr\u0753\u0758ral;\u622Bsection;\u62C2isible\u0100CT\u076C\u0772omma;\u6063imes;\u6062\u0180gpt\u077F\u0783\u0788on;\u412Ef;\uC000\u{1D540}a;\u4399cr;\u6110ilde;\u4128\u01EB\u079A\0\u079Ecy;\u4406l\u803B\xCF\u40CF\u0280cfosu\u07AC\u07B7\u07BC\u07C2\u07D0\u0100iy\u07B1\u07B5rc;\u4134;\u4419r;\uC000\u{1D50D}pf;\uC000\u{1D541}\u01E3\u07C7\0\u07CCr;\uC000\u{1D4A5}rcy;\u4408kcy;\u4404\u0380HJacfos\u07E4\u07E8\u07EC\u07F1\u07FD\u0802\u0808cy;\u4425cy;\u440Cppa;\u439A\u0100ey\u07F6\u07FBdil;\u4136;\u441Ar;\uC000\u{1D50E}pf;\uC000\u{1D542}cr;\uC000\u{1D4A6}\u0580JTaceflmost\u0825\u0829\u082C\u0850\u0863\u09B3\u09B8\u09C7\u09CD\u0A37\u0A47cy;\u4409\u803B<\u403C\u0280cmnpr\u0837\u083C\u0841\u0844\u084Dute;\u4139bda;\u439Bg;\u67EAlacetrf;\u6112r;\u619E\u0180aey\u0857\u085C\u0861ron;\u413Ddil;\u413B;\u441B\u0100fs\u0868\u0970t\u0500ACDFRTUVar\u087E\u08A9\u08B1\u08E0\u08E6\u08FC\u092F\u095B\u0390\u096A\u0100nr\u0883\u088FgleBracket;\u67E8row\u0180;BR\u0899\u089A\u089E\u6190ar;\u61E4ightArrow;\u61C6eiling;\u6308o\u01F5\u08B7\0\u08C3bleBracket;\u67E6n\u01D4\u08C8\0\u08D2eeVector;\u6961ector\u0100;B\u08DB\u08DC\u61C3ar;\u6959loor;\u630Aight\u0100AV\u08EF\u08F5rrow;\u6194ector;\u694E\u0100er\u0901\u0917e\u0180;AV\u0909\u090A\u0910\u62A3rrow;\u61A4ector;\u695Aiangle\u0180;BE\u0924\u0925\u0929\u62B2ar;\u69CFqual;\u62B4p\u0180DTV\u0937\u0942\u094CownVector;\u6951eeVector;\u6960ector\u0100;B\u0956\u0957\u61BFar;\u6958ector\u0100;B\u0965\u0966\u61BCar;\u6952ight\xE1\u039Cs\u0300EFGLST\u097E\u098B\u0995\u099D\u09A2\u09ADqualGreater;\u62DAullEqual;\u6266reater;\u6276ess;\u6AA1lantEqual;\u6A7Dilde;\u6272r;\uC000\u{1D50F}\u0100;e\u09BD\u09BE\u62D8ftarrow;\u61DAidot;\u413F\u0180npw\u09D4\u0A16\u0A1Bg\u0200LRlr\u09DE\u09F7\u0A02\u0A10eft\u0100AR\u09E6\u09ECrrow;\u67F5ightArrow;\u67F7ightArrow;\u67F6eft\u0100ar\u03B3\u0A0Aight\xE1\u03BFight\xE1\u03CAf;\uC000\u{1D543}er\u0100LR\u0A22\u0A2CeftArrow;\u6199ightArrow;\u6198\u0180cht\u0A3E\u0A40\u0A42\xF2\u084C;\u61B0rok;\u4141;\u626A\u0400acefiosu\u0A5A\u0A5D\u0A60\u0A77\u0A7C\u0A85\u0A8B\u0A8Ep;\u6905y;\u441C\u0100dl\u0A65\u0A6FiumSpace;\u605Flintrf;\u6133r;\uC000\u{1D510}nusPlus;\u6213pf;\uC000\u{1D544}c\xF2\u0A76;\u439C\u0480Jacefostu\u0AA3\u0AA7\u0AAD\u0AC0\u0B14\u0B19\u0D91\u0D97\u0D9Ecy;\u440Acute;\u4143\u0180aey\u0AB4\u0AB9\u0ABEron;\u4147dil;\u4145;\u441D\u0180gsw\u0AC7\u0AF0\u0B0Eative\u0180MTV\u0AD3\u0ADF\u0AE8ediumSpace;\u600Bhi\u0100cn\u0AE6\u0AD8\xEB\u0AD9eryThi\xEE\u0AD9ted\u0100GL\u0AF8\u0B06reaterGreate\xF2\u0673essLes\xF3\u0A48Line;\u400Ar;\uC000\u{1D511}\u0200Bnpt\u0B22\u0B28\u0B37\u0B3Areak;\u6060BreakingSpace;\u40A0f;\u6115\u0680;CDEGHLNPRSTV\u0B55\u0B56\u0B6A\u0B7C\u0BA1\u0BEB\u0C04\u0C5E\u0C84\u0CA6\u0CD8\u0D61\u0D85\u6AEC\u0100ou\u0B5B\u0B64ngruent;\u6262pCap;\u626DoubleVerticalBar;\u6226\u0180lqx\u0B83\u0B8A\u0B9Bement;\u6209ual\u0100;T\u0B92\u0B93\u6260ilde;\uC000\u2242\u0338ists;\u6204reater\u0380;EFGLST\u0BB6\u0BB7\u0BBD\u0BC9\u0BD3\u0BD8\u0BE5\u626Fqual;\u6271ullEqual;\uC000\u2267\u0338reater;\uC000\u226B\u0338ess;\u6279lantEqual;\uC000\u2A7E\u0338ilde;\u6275ump\u0144\u0BF2\u0BFDownHump;\uC000\u224E\u0338qual;\uC000\u224F\u0338e\u0100fs\u0C0A\u0C27tTriangle\u0180;BE\u0C1A\u0C1B\u0C21\u62EAar;\uC000\u29CF\u0338qual;\u62ECs\u0300;EGLST\u0C35\u0C36\u0C3C\u0C44\u0C4B\u0C58\u626Equal;\u6270reater;\u6278ess;\uC000\u226A\u0338lantEqual;\uC000\u2A7D\u0338ilde;\u6274ested\u0100GL\u0C68\u0C79reaterGreater;\uC000\u2AA2\u0338essLess;\uC000\u2AA1\u0338recedes\u0180;ES\u0C92\u0C93\u0C9B\u6280qual;\uC000\u2AAF\u0338lantEqual;\u62E0\u0100ei\u0CAB\u0CB9verseElement;\u620CghtTriangle\u0180;BE\u0CCB\u0CCC\u0CD2\u62EBar;\uC000\u29D0\u0338qual;\u62ED\u0100qu\u0CDD\u0D0CuareSu\u0100bp\u0CE8\u0CF9set\u0100;E\u0CF0\u0CF3\uC000\u228F\u0338qual;\u62E2erset\u0100;E\u0D03\u0D06\uC000\u2290\u0338qual;\u62E3\u0180bcp\u0D13\u0D24\u0D4Eset\u0100;E\u0D1B\u0D1E\uC000\u2282\u20D2qual;\u6288ceeds\u0200;EST\u0D32\u0D33\u0D3B\u0D46\u6281qual;\uC000\u2AB0\u0338lantEqual;\u62E1ilde;\uC000\u227F\u0338erset\u0100;E\u0D58\u0D5B\uC000\u2283\u20D2qual;\u6289ilde\u0200;EFT\u0D6E\u0D6F\u0D75\u0D7F\u6241qual;\u6244ullEqual;\u6247ilde;\u6249erticalBar;\u6224cr;\uC000\u{1D4A9}ilde\u803B\xD1\u40D1;\u439D\u0700Eacdfgmoprstuv\u0DBD\u0DC2\u0DC9\u0DD5\u0DDB\u0DE0\u0DE7\u0DFC\u0E02\u0E20\u0E22\u0E32\u0E3F\u0E44lig;\u4152cute\u803B\xD3\u40D3\u0100iy\u0DCE\u0DD3rc\u803B\xD4\u40D4;\u441Eblac;\u4150r;\uC000\u{1D512}rave\u803B\xD2\u40D2\u0180aei\u0DEE\u0DF2\u0DF6cr;\u414Cga;\u43A9cron;\u439Fpf;\uC000\u{1D546}enCurly\u0100DQ\u0E0E\u0E1AoubleQuote;\u601Cuote;\u6018;\u6A54\u0100cl\u0E27\u0E2Cr;\uC000\u{1D4AA}ash\u803B\xD8\u40D8i\u016C\u0E37\u0E3Cde\u803B\xD5\u40D5es;\u6A37ml\u803B\xD6\u40D6er\u0100BP\u0E4B\u0E60\u0100ar\u0E50\u0E53r;\u603Eac\u0100ek\u0E5A\u0E5C;\u63DEet;\u63B4arenthesis;\u63DC\u0480acfhilors\u0E7F\u0E87\u0E8A\u0E8F\u0E92\u0E94\u0E9D\u0EB0\u0EFCrtialD;\u6202y;\u441Fr;\uC000\u{1D513}i;\u43A6;\u43A0usMinus;\u40B1\u0100ip\u0EA2\u0EADncareplan\xE5\u069Df;\u6119\u0200;eio\u0EB9\u0EBA\u0EE0\u0EE4\u6ABBcedes\u0200;EST\u0EC8\u0EC9\u0ECF\u0EDA\u627Aqual;\u6AAFlantEqual;\u627Cilde;\u627Eme;\u6033\u0100dp\u0EE9\u0EEEuct;\u620Fortion\u0100;a\u0225\u0EF9l;\u621D\u0100ci\u0F01\u0F06r;\uC000\u{1D4AB};\u43A8\u0200Ufos\u0F11\u0F16\u0F1B\u0F1FOT\u803B"\u4022r;\uC000\u{1D514}pf;\u611Acr;\uC000\u{1D4AC}\u0600BEacefhiorsu\u0F3E\u0F43\u0F47\u0F60\u0F73\u0FA7\u0FAA\u0FAD\u1096\u10A9\u10B4\u10BEarr;\u6910G\u803B\xAE\u40AE\u0180cnr\u0F4E\u0F53\u0F56ute;\u4154g;\u67EBr\u0100;t\u0F5C\u0F5D\u61A0l;\u6916\u0180aey\u0F67\u0F6C\u0F71ron;\u4158dil;\u4156;\u4420\u0100;v\u0F78\u0F79\u611Cerse\u0100EU\u0F82\u0F99\u0100lq\u0F87\u0F8Eement;\u620Builibrium;\u61CBpEquilibrium;\u696Fr\xBB\u0F79o;\u43A1ght\u0400ACDFTUVa\u0FC1\u0FEB\u0FF3\u1022\u1028\u105B\u1087\u03D8\u0100nr\u0FC6\u0FD2gleBracket;\u67E9row\u0180;BL\u0FDC\u0FDD\u0FE1\u6192ar;\u61E5eftArrow;\u61C4eiling;\u6309o\u01F5\u0FF9\0\u1005bleBracket;\u67E7n\u01D4\u100A\0\u1014eeVector;\u695Dector\u0100;B\u101D\u101E\u61C2ar;\u6955loor;\u630B\u0100er\u102D\u1043e\u0180;AV\u1035\u1036\u103C\u62A2rrow;\u61A6ector;\u695Biangle\u0180;BE\u1050\u1051\u1055\u62B3ar;\u69D0qual;\u62B5p\u0180DTV\u1063\u106E\u1078ownVector;\u694FeeVector;\u695Cector\u0100;B\u1082\u1083\u61BEar;\u6954ector\u0100;B\u1091\u1092\u61C0ar;\u6953\u0100pu\u109B\u109Ef;\u611DndImplies;\u6970ightarrow;\u61DB\u0100ch\u10B9\u10BCr;\u611B;\u61B1leDelayed;\u69F4\u0680HOacfhimoqstu\u10E4\u10F1\u10F7\u10FD\u1119\u111E\u1151\u1156\u1161\u1167\u11B5\u11BB\u11BF\u0100Cc\u10E9\u10EEHcy;\u4429y;\u4428FTcy;\u442Ccute;\u415A\u0280;aeiy\u1108\u1109\u110E\u1113\u1117\u6ABCron;\u4160dil;\u415Erc;\u415C;\u4421r;\uC000\u{1D516}ort\u0200DLRU\u112A\u1134\u113E\u1149ownArrow\xBB\u041EeftArrow\xBB\u089AightArrow\xBB\u0FDDpArrow;\u6191gma;\u43A3allCircle;\u6218pf;\uC000\u{1D54A}\u0272\u116D\0\0\u1170t;\u621Aare\u0200;ISU\u117B\u117C\u1189\u11AF\u65A1ntersection;\u6293u\u0100bp\u118F\u119Eset\u0100;E\u1197\u1198\u628Fqual;\u6291erset\u0100;E\u11A8\u11A9\u6290qual;\u6292nion;\u6294cr;\uC000\u{1D4AE}ar;\u62C6\u0200bcmp\u11C8\u11DB\u1209\u120B\u0100;s\u11CD\u11CE\u62D0et\u0100;E\u11CD\u11D5qual;\u6286\u0100ch\u11E0\u1205eeds\u0200;EST\u11ED\u11EE\u11F4\u11FF\u627Bqual;\u6AB0lantEqual;\u627Dilde;\u627FTh\xE1\u0F8C;\u6211\u0180;es\u1212\u1213\u1223\u62D1rset\u0100;E\u121C\u121D\u6283qual;\u6287et\xBB\u1213\u0580HRSacfhiors\u123E\u1244\u1249\u1255\u125E\u1271\u1276\u129F\u12C2\u12C8\u12D1ORN\u803B\xDE\u40DEADE;\u6122\u0100Hc\u124E\u1252cy;\u440By;\u4426\u0100bu\u125A\u125C;\u4009;\u43A4\u0180aey\u1265\u126A\u126Fron;\u4164dil;\u4162;\u4422r;\uC000\u{1D517}\u0100ei\u127B\u1289\u01F2\u1280\0\u1287efore;\u6234a;\u4398\u0100cn\u128E\u1298kSpace;\uC000\u205F\u200ASpace;\u6009lde\u0200;EFT\u12AB\u12AC\u12B2\u12BC\u623Cqual;\u6243ullEqual;\u6245ilde;\u6248pf;\uC000\u{1D54B}ipleDot;\u60DB\u0100ct\u12D6\u12DBr;\uC000\u{1D4AF}rok;\u4166\u0AE1\u12F7\u130E\u131A\u1326\0\u132C\u1331\0\0\0\0\0\u1338\u133D\u1377\u1385\0\u13FF\u1404\u140A\u1410\u0100cr\u12FB\u1301ute\u803B\xDA\u40DAr\u0100;o\u1307\u1308\u619Fcir;\u6949r\u01E3\u1313\0\u1316y;\u440Eve;\u416C\u0100iy\u131E\u1323rc\u803B\xDB\u40DB;\u4423blac;\u4170r;\uC000\u{1D518}rave\u803B\xD9\u40D9acr;\u416A\u0100di\u1341\u1369er\u0100BP\u1348\u135D\u0100ar\u134D\u1350r;\u405Fac\u0100ek\u1357\u1359;\u63DFet;\u63B5arenthesis;\u63DDon\u0100;P\u1370\u1371\u62C3lus;\u628E\u0100gp\u137B\u137Fon;\u4172f;\uC000\u{1D54C}\u0400ADETadps\u1395\u13AE\u13B8\u13C4\u03E8\u13D2\u13D7\u13F3rrow\u0180;BD\u1150\u13A0\u13A4ar;\u6912ownArrow;\u61C5ownArrow;\u6195quilibrium;\u696Eee\u0100;A\u13CB\u13CC\u62A5rrow;\u61A5own\xE1\u03F3er\u0100LR\u13DE\u13E8eftArrow;\u6196ightArrow;\u6197i\u0100;l\u13F9\u13FA\u43D2on;\u43A5ing;\u416Ecr;\uC000\u{1D4B0}ilde;\u4168ml\u803B\xDC\u40DC\u0480Dbcdefosv\u1427\u142C\u1430\u1433\u143E\u1485\u148A\u1490\u1496ash;\u62ABar;\u6AEBy;\u4412ash\u0100;l\u143B\u143C\u62A9;\u6AE6\u0100er\u1443\u1445;\u62C1\u0180bty\u144C\u1450\u147Aar;\u6016\u0100;i\u144F\u1455cal\u0200BLST\u1461\u1465\u146A\u1474ar;\u6223ine;\u407Ceparator;\u6758ilde;\u6240ThinSpace;\u600Ar;\uC000\u{1D519}pf;\uC000\u{1D54D}cr;\uC000\u{1D4B1}dash;\u62AA\u0280cefos\u14A7\u14AC\u14B1\u14B6\u14BCirc;\u4174dge;\u62C0r;\uC000\u{1D51A}pf;\uC000\u{1D54E}cr;\uC000\u{1D4B2}\u0200fios\u14CB\u14D0\u14D2\u14D8r;\uC000\u{1D51B};\u439Epf;\uC000\u{1D54F}cr;\uC000\u{1D4B3}\u0480AIUacfosu\u14F1\u14F5\u14F9\u14FD\u1504\u150F\u1514\u151A\u1520cy;\u442Fcy;\u4407cy;\u442Ecute\u803B\xDD\u40DD\u0100iy\u1509\u150Drc;\u4176;\u442Br;\uC000\u{1D51C}pf;\uC000\u{1D550}cr;\uC000\u{1D4B4}ml;\u4178\u0400Hacdefos\u1535\u1539\u153F\u154B\u154F\u155D\u1560\u1564cy;\u4416cute;\u4179\u0100ay\u1544\u1549ron;\u417D;\u4417ot;\u417B\u01F2\u1554\0\u155BoWidt\xE8\u0AD9a;\u4396r;\u6128pf;\u6124cr;\uC000\u{1D4B5}\u0BE1\u1583\u158A\u1590\0\u15B0\u15B6\u15BF\0\0\0\0\u15C6\u15DB\u15EB\u165F\u166D\0\u1695\u169B\u16B2\u16B9\0\u16BEcute\u803B\xE1\u40E1reve;\u4103\u0300;Ediuy\u159C\u159D\u15A1\u15A3\u15A8\u15AD\u623E;\uC000\u223E\u0333;\u623Frc\u803B\xE2\u40E2te\u80BB\xB4\u0306;\u4430lig\u803B\xE6\u40E6\u0100;r\xB2\u15BA;\uC000\u{1D51E}rave\u803B\xE0\u40E0\u0100ep\u15CA\u15D6\u0100fp\u15CF\u15D4sym;\u6135\xE8\u15D3ha;\u43B1\u0100ap\u15DFc\u0100cl\u15E4\u15E7r;\u4101g;\u6A3F\u0264\u15F0\0\0\u160A\u0280;adsv\u15FA\u15FB\u15FF\u1601\u1607\u6227nd;\u6A55;\u6A5Clope;\u6A58;\u6A5A\u0380;elmrsz\u1618\u1619\u161B\u161E\u163F\u164F\u1659\u6220;\u69A4e\xBB\u1619sd\u0100;a\u1625\u1626\u6221\u0461\u1630\u1632\u1634\u1636\u1638\u163A\u163C\u163E;\u69A8;\u69A9;\u69AA;\u69AB;\u69AC;\u69AD;\u69AE;\u69AFt\u0100;v\u1645\u1646\u621Fb\u0100;d\u164C\u164D\u62BE;\u699D\u0100pt\u1654\u1657h;\u6222\xBB\xB9arr;\u637C\u0100gp\u1663\u1667on;\u4105f;\uC000\u{1D552}\u0380;Eaeiop\u12C1\u167B\u167D\u1682\u1684\u1687\u168A;\u6A70cir;\u6A6F;\u624Ad;\u624Bs;\u4027rox\u0100;e\u12C1\u1692\xF1\u1683ing\u803B\xE5\u40E5\u0180cty\u16A1\u16A6\u16A8r;\uC000\u{1D4B6};\u402Amp\u0100;e\u12C1\u16AF\xF1\u0288ilde\u803B\xE3\u40E3ml\u803B\xE4\u40E4\u0100ci\u16C2\u16C8onin\xF4\u0272nt;\u6A11\u0800Nabcdefiklnoprsu\u16ED\u16F1\u1730\u173C\u1743\u1748\u1778\u177D\u17E0\u17E6\u1839\u1850\u170D\u193D\u1948\u1970ot;\u6AED\u0100cr\u16F6\u171Ek\u0200ceps\u1700\u1705\u170D\u1713ong;\u624Cpsilon;\u43F6rime;\u6035im\u0100;e\u171A\u171B\u623Dq;\u62CD\u0176\u1722\u1726ee;\u62BDed\u0100;g\u172C\u172D\u6305e\xBB\u172Drk\u0100;t\u135C\u1737brk;\u63B6\u0100oy\u1701\u1741;\u4431quo;\u601E\u0280cmprt\u1753\u175B\u1761\u1764\u1768aus\u0100;e\u010A\u0109ptyv;\u69B0s\xE9\u170Cno\xF5\u0113\u0180ahw\u176F\u1771\u1773;\u43B2;\u6136een;\u626Cr;\uC000\u{1D51F}g\u0380costuvw\u178D\u179D\u17B3\u17C1\u17D5\u17DB\u17DE\u0180aiu\u1794\u1796\u179A\xF0\u0760rc;\u65EFp\xBB\u1371\u0180dpt\u17A4\u17A8\u17ADot;\u6A00lus;\u6A01imes;\u6A02\u0271\u17B9\0\0\u17BEcup;\u6A06ar;\u6605riangle\u0100du\u17CD\u17D2own;\u65BDp;\u65B3plus;\u6A04e\xE5\u1444\xE5\u14ADarow;\u690D\u0180ako\u17ED\u1826\u1835\u0100cn\u17F2\u1823k\u0180lst\u17FA\u05AB\u1802ozenge;\u69EBriangle\u0200;dlr\u1812\u1813\u1818\u181D\u65B4own;\u65BEeft;\u65C2ight;\u65B8k;\u6423\u01B1\u182B\0\u1833\u01B2\u182F\0\u1831;\u6592;\u65914;\u6593ck;\u6588\u0100eo\u183E\u184D\u0100;q\u1843\u1846\uC000=\u20E5uiv;\uC000\u2261\u20E5t;\u6310\u0200ptwx\u1859\u185E\u1867\u186Cf;\uC000\u{1D553}\u0100;t\u13CB\u1863om\xBB\u13CCtie;\u62C8\u0600DHUVbdhmptuv\u1885\u1896\u18AA\u18BB\u18D7\u18DB\u18EC\u18FF\u1905\u190A\u1910\u1921\u0200LRlr\u188E\u1890\u1892\u1894;\u6557;\u6554;\u6556;\u6553\u0280;DUdu\u18A1\u18A2\u18A4\u18A6\u18A8\u6550;\u6566;\u6569;\u6564;\u6567\u0200LRlr\u18B3\u18B5\u18B7\u18B9;\u655D;\u655A;\u655C;\u6559\u0380;HLRhlr\u18CA\u18CB\u18CD\u18CF\u18D1\u18D3\u18D5\u6551;\u656C;\u6563;\u6560;\u656B;\u6562;\u655Fox;\u69C9\u0200LRlr\u18E4\u18E6\u18E8\u18EA;\u6555;\u6552;\u6510;\u650C\u0280;DUdu\u06BD\u18F7\u18F9\u18FB\u18FD;\u6565;\u6568;\u652C;\u6534inus;\u629Flus;\u629Eimes;\u62A0\u0200LRlr\u1919\u191B\u191D\u191F;\u655B;\u6558;\u6518;\u6514\u0380;HLRhlr\u1930\u1931\u1933\u1935\u1937\u1939\u193B\u6502;\u656A;\u6561;\u655E;\u653C;\u6524;\u651C\u0100ev\u0123\u1942bar\u803B\xA6\u40A6\u0200ceio\u1951\u1956\u195A\u1960r;\uC000\u{1D4B7}mi;\u604Fm\u0100;e\u171A\u171Cl\u0180;bh\u1968\u1969\u196B\u405C;\u69C5sub;\u67C8\u016C\u1974\u197El\u0100;e\u1979\u197A\u6022t\xBB\u197Ap\u0180;Ee\u012F\u1985\u1987;\u6AAE\u0100;q\u06DC\u06DB\u0CE1\u19A7\0\u19E8\u1A11\u1A15\u1A32\0\u1A37\u1A50\0\0\u1AB4\0\0\u1AC1\0\0\u1B21\u1B2E\u1B4D\u1B52\0\u1BFD\0\u1C0C\u0180cpr\u19AD\u19B2\u19DDute;\u4107\u0300;abcds\u19BF\u19C0\u19C4\u19CA\u19D5\u19D9\u6229nd;\u6A44rcup;\u6A49\u0100au\u19CF\u19D2p;\u6A4Bp;\u6A47ot;\u6A40;\uC000\u2229\uFE00\u0100eo\u19E2\u19E5t;\u6041\xEE\u0693\u0200aeiu\u19F0\u19FB\u1A01\u1A05\u01F0\u19F5\0\u19F8s;\u6A4Don;\u410Ddil\u803B\xE7\u40E7rc;\u4109ps\u0100;s\u1A0C\u1A0D\u6A4Cm;\u6A50ot;\u410B\u0180dmn\u1A1B\u1A20\u1A26il\u80BB\xB8\u01ADptyv;\u69B2t\u8100\xA2;e\u1A2D\u1A2E\u40A2r\xE4\u01B2r;\uC000\u{1D520}\u0180cei\u1A3D\u1A40\u1A4Dy;\u4447ck\u0100;m\u1A47\u1A48\u6713ark\xBB\u1A48;\u43C7r\u0380;Ecefms\u1A5F\u1A60\u1A62\u1A6B\u1AA4\u1AAA\u1AAE\u65CB;\u69C3\u0180;el\u1A69\u1A6A\u1A6D\u42C6q;\u6257e\u0261\u1A74\0\0\u1A88rrow\u0100lr\u1A7C\u1A81eft;\u61BAight;\u61BB\u0280RSacd\u1A92\u1A94\u1A96\u1A9A\u1A9F\xBB\u0F47;\u64C8st;\u629Birc;\u629Aash;\u629Dnint;\u6A10id;\u6AEFcir;\u69C2ubs\u0100;u\u1ABB\u1ABC\u6663it\xBB\u1ABC\u02EC\u1AC7\u1AD4\u1AFA\0\u1B0Aon\u0100;e\u1ACD\u1ACE\u403A\u0100;q\xC7\xC6\u026D\u1AD9\0\0\u1AE2a\u0100;t\u1ADE\u1ADF\u402C;\u4040\u0180;fl\u1AE8\u1AE9\u1AEB\u6201\xEE\u1160e\u0100mx\u1AF1\u1AF6ent\xBB\u1AE9e\xF3\u024D\u01E7\u1AFE\0\u1B07\u0100;d\u12BB\u1B02ot;\u6A6Dn\xF4\u0246\u0180fry\u1B10\u1B14\u1B17;\uC000\u{1D554}o\xE4\u0254\u8100\xA9;s\u0155\u1B1Dr;\u6117\u0100ao\u1B25\u1B29rr;\u61B5ss;\u6717\u0100cu\u1B32\u1B37r;\uC000\u{1D4B8}\u0100bp\u1B3C\u1B44\u0100;e\u1B41\u1B42\u6ACF;\u6AD1\u0100;e\u1B49\u1B4A\u6AD0;\u6AD2dot;\u62EF\u0380delprvw\u1B60\u1B6C\u1B77\u1B82\u1BAC\u1BD4\u1BF9arr\u0100lr\u1B68\u1B6A;\u6938;\u6935\u0270\u1B72\0\0\u1B75r;\u62DEc;\u62DFarr\u0100;p\u1B7F\u1B80\u61B6;\u693D\u0300;bcdos\u1B8F\u1B90\u1B96\u1BA1\u1BA5\u1BA8\u622Arcap;\u6A48\u0100au\u1B9B\u1B9Ep;\u6A46p;\u6A4Aot;\u628Dr;\u6A45;\uC000\u222A\uFE00\u0200alrv\u1BB5\u1BBF\u1BDE\u1BE3rr\u0100;m\u1BBC\u1BBD\u61B7;\u693Cy\u0180evw\u1BC7\u1BD4\u1BD8q\u0270\u1BCE\0\0\u1BD2re\xE3\u1B73u\xE3\u1B75ee;\u62CEedge;\u62CFen\u803B\xA4\u40A4earrow\u0100lr\u1BEE\u1BF3eft\xBB\u1B80ight\xBB\u1BBDe\xE4\u1BDD\u0100ci\u1C01\u1C07onin\xF4\u01F7nt;\u6231lcty;\u632D\u0980AHabcdefhijlorstuwz\u1C38\u1C3B\u1C3F\u1C5D\u1C69\u1C75\u1C8A\u1C9E\u1CAC\u1CB7\u1CFB\u1CFF\u1D0D\u1D7B\u1D91\u1DAB\u1DBB\u1DC6\u1DCDr\xF2\u0381ar;\u6965\u0200glrs\u1C48\u1C4D\u1C52\u1C54ger;\u6020eth;\u6138\xF2\u1133h\u0100;v\u1C5A\u1C5B\u6010\xBB\u090A\u016B\u1C61\u1C67arow;\u690Fa\xE3\u0315\u0100ay\u1C6E\u1C73ron;\u410F;\u4434\u0180;ao\u0332\u1C7C\u1C84\u0100gr\u02BF\u1C81r;\u61CAtseq;\u6A77\u0180glm\u1C91\u1C94\u1C98\u803B\xB0\u40B0ta;\u43B4ptyv;\u69B1\u0100ir\u1CA3\u1CA8sht;\u697F;\uC000\u{1D521}ar\u0100lr\u1CB3\u1CB5\xBB\u08DC\xBB\u101E\u0280aegsv\u1CC2\u0378\u1CD6\u1CDC\u1CE0m\u0180;os\u0326\u1CCA\u1CD4nd\u0100;s\u0326\u1CD1uit;\u6666amma;\u43DDin;\u62F2\u0180;io\u1CE7\u1CE8\u1CF8\u40F7de\u8100\xF7;o\u1CE7\u1CF0ntimes;\u62C7n\xF8\u1CF7cy;\u4452c\u026F\u1D06\0\0\u1D0Arn;\u631Eop;\u630D\u0280lptuw\u1D18\u1D1D\u1D22\u1D49\u1D55lar;\u4024f;\uC000\u{1D555}\u0280;emps\u030B\u1D2D\u1D37\u1D3D\u1D42q\u0100;d\u0352\u1D33ot;\u6251inus;\u6238lus;\u6214quare;\u62A1blebarwedg\xE5\xFAn\u0180adh\u112E\u1D5D\u1D67ownarrow\xF3\u1C83arpoon\u0100lr\u1D72\u1D76ef\xF4\u1CB4igh\xF4\u1CB6\u0162\u1D7F\u1D85karo\xF7\u0F42\u026F\u1D8A\0\0\u1D8Ern;\u631Fop;\u630C\u0180cot\u1D98\u1DA3\u1DA6\u0100ry\u1D9D\u1DA1;\uC000\u{1D4B9};\u4455l;\u69F6rok;\u4111\u0100dr\u1DB0\u1DB4ot;\u62F1i\u0100;f\u1DBA\u1816\u65BF\u0100ah\u1DC0\u1DC3r\xF2\u0429a\xF2\u0FA6angle;\u69A6\u0100ci\u1DD2\u1DD5y;\u445Fgrarr;\u67FF\u0900Dacdefglmnopqrstux\u1E01\u1E09\u1E19\u1E38\u0578\u1E3C\u1E49\u1E61\u1E7E\u1EA5\u1EAF\u1EBD\u1EE1\u1F2A\u1F37\u1F44\u1F4E\u1F5A\u0100Do\u1E06\u1D34o\xF4\u1C89\u0100cs\u1E0E\u1E14ute\u803B\xE9\u40E9ter;\u6A6E\u0200aioy\u1E22\u1E27\u1E31\u1E36ron;\u411Br\u0100;c\u1E2D\u1E2E\u6256\u803B\xEA\u40EAlon;\u6255;\u444Dot;\u4117\u0100Dr\u1E41\u1E45ot;\u6252;\uC000\u{1D522}\u0180;rs\u1E50\u1E51\u1E57\u6A9Aave\u803B\xE8\u40E8\u0100;d\u1E5C\u1E5D\u6A96ot;\u6A98\u0200;ils\u1E6A\u1E6B\u1E72\u1E74\u6A99nters;\u63E7;\u6113\u0100;d\u1E79\u1E7A\u6A95ot;\u6A97\u0180aps\u1E85\u1E89\u1E97cr;\u4113ty\u0180;sv\u1E92\u1E93\u1E95\u6205et\xBB\u1E93p\u01001;\u1E9D\u1EA4\u0133\u1EA1\u1EA3;\u6004;\u6005\u6003\u0100gs\u1EAA\u1EAC;\u414Bp;\u6002\u0100gp\u1EB4\u1EB8on;\u4119f;\uC000\u{1D556}\u0180als\u1EC4\u1ECE\u1ED2r\u0100;s\u1ECA\u1ECB\u62D5l;\u69E3us;\u6A71i\u0180;lv\u1EDA\u1EDB\u1EDF\u43B5on\xBB\u1EDB;\u43F5\u0200csuv\u1EEA\u1EF3\u1F0B\u1F23\u0100io\u1EEF\u1E31rc\xBB\u1E2E\u0269\u1EF9\0\0\u1EFB\xED\u0548ant\u0100gl\u1F02\u1F06tr\xBB\u1E5Dess\xBB\u1E7A\u0180aei\u1F12\u1F16\u1F1Als;\u403Dst;\u625Fv\u0100;D\u0235\u1F20D;\u6A78parsl;\u69E5\u0100Da\u1F2F\u1F33ot;\u6253rr;\u6971\u0180cdi\u1F3E\u1F41\u1EF8r;\u612Fo\xF4\u0352\u0100ah\u1F49\u1F4B;\u43B7\u803B\xF0\u40F0\u0100mr\u1F53\u1F57l\u803B\xEB\u40EBo;\u60AC\u0180cip\u1F61\u1F64\u1F67l;\u4021s\xF4\u056E\u0100eo\u1F6C\u1F74ctatio\xEE\u0559nential\xE5\u0579\u09E1\u1F92\0\u1F9E\0\u1FA1\u1FA7\0\0\u1FC6\u1FCC\0\u1FD3\0\u1FE6\u1FEA\u2000\0\u2008\u205Allingdotse\xF1\u1E44y;\u4444male;\u6640\u0180ilr\u1FAD\u1FB3\u1FC1lig;\u8000\uFB03\u0269\u1FB9\0\0\u1FBDg;\u8000\uFB00ig;\u8000\uFB04;\uC000\u{1D523}lig;\u8000\uFB01lig;\uC000fj\u0180alt\u1FD9\u1FDC\u1FE1t;\u666Dig;\u8000\uFB02ns;\u65B1of;\u4192\u01F0\u1FEE\0\u1FF3f;\uC000\u{1D557}\u0100ak\u05BF\u1FF7\u0100;v\u1FFC\u1FFD\u62D4;\u6AD9artint;\u6A0D\u0100ao\u200C\u2055\u0100cs\u2011\u2052\u03B1\u201A\u2030\u2038\u2045\u2048\0\u2050\u03B2\u2022\u2025\u2027\u202A\u202C\0\u202E\u803B\xBD\u40BD;\u6153\u803B\xBC\u40BC;\u6155;\u6159;\u615B\u01B3\u2034\0\u2036;\u6154;\u6156\u02B4\u203E\u2041\0\0\u2043\u803B\xBE\u40BE;\u6157;\u615C5;\u6158\u01B6\u204C\0\u204E;\u615A;\u615D8;\u615El;\u6044wn;\u6322cr;\uC000\u{1D4BB}\u0880Eabcdefgijlnorstv\u2082\u2089\u209F\u20A5\u20B0\u20B4\u20F0\u20F5\u20FA\u20FF\u2103\u2112\u2138\u0317\u213E\u2152\u219E\u0100;l\u064D\u2087;\u6A8C\u0180cmp\u2090\u2095\u209Dute;\u41F5ma\u0100;d\u209C\u1CDA\u43B3;\u6A86reve;\u411F\u0100iy\u20AA\u20AErc;\u411D;\u4433ot;\u4121\u0200;lqs\u063E\u0642\u20BD\u20C9\u0180;qs\u063E\u064C\u20C4lan\xF4\u0665\u0200;cdl\u0665\u20D2\u20D5\u20E5c;\u6AA9ot\u0100;o\u20DC\u20DD\u6A80\u0100;l\u20E2\u20E3\u6A82;\u6A84\u0100;e\u20EA\u20ED\uC000\u22DB\uFE00s;\u6A94r;\uC000\u{1D524}\u0100;g\u0673\u061Bmel;\u6137cy;\u4453\u0200;Eaj\u065A\u210C\u210E\u2110;\u6A92;\u6AA5;\u6AA4\u0200Eaes\u211B\u211D\u2129\u2134;\u6269p\u0100;p\u2123\u2124\u6A8Arox\xBB\u2124\u0100;q\u212E\u212F\u6A88\u0100;q\u212E\u211Bim;\u62E7pf;\uC000\u{1D558}\u0100ci\u2143\u2146r;\u610Am\u0180;el\u066B\u214E\u2150;\u6A8E;\u6A90\u8300>;cdlqr\u05EE\u2160\u216A\u216E\u2173\u2179\u0100ci\u2165\u2167;\u6AA7r;\u6A7Aot;\u62D7Par;\u6995uest;\u6A7C\u0280adels\u2184\u216A\u2190\u0656\u219B\u01F0\u2189\0\u218Epro\xF8\u209Er;\u6978q\u0100lq\u063F\u2196les\xF3\u2088i\xED\u066B\u0100en\u21A3\u21ADrtneqq;\uC000\u2269\uFE00\xC5\u21AA\u0500Aabcefkosy\u21C4\u21C7\u21F1\u21F5\u21FA\u2218\u221D\u222F\u2268\u227Dr\xF2\u03A0\u0200ilmr\u21D0\u21D4\u21D7\u21DBrs\xF0\u1484f\xBB\u2024il\xF4\u06A9\u0100dr\u21E0\u21E4cy;\u444A\u0180;cw\u08F4\u21EB\u21EFir;\u6948;\u61ADar;\u610Firc;\u4125\u0180alr\u2201\u220E\u2213rts\u0100;u\u2209\u220A\u6665it\xBB\u220Alip;\u6026con;\u62B9r;\uC000\u{1D525}s\u0100ew\u2223\u2229arow;\u6925arow;\u6926\u0280amopr\u223A\u223E\u2243\u225E\u2263rr;\u61FFtht;\u623Bk\u0100lr\u2249\u2253eftarrow;\u61A9ightarrow;\u61AAf;\uC000\u{1D559}bar;\u6015\u0180clt\u226F\u2274\u2278r;\uC000\u{1D4BD}as\xE8\u21F4rok;\u4127\u0100bp\u2282\u2287ull;\u6043hen\xBB\u1C5B\u0AE1\u22A3\0\u22AA\0\u22B8\u22C5\u22CE\0\u22D5\u22F3\0\0\u22F8\u2322\u2367\u2362\u237F\0\u2386\u23AA\u23B4cute\u803B\xED\u40ED\u0180;iy\u0771\u22B0\u22B5rc\u803B\xEE\u40EE;\u4438\u0100cx\u22BC\u22BFy;\u4435cl\u803B\xA1\u40A1\u0100fr\u039F\u22C9;\uC000\u{1D526}rave\u803B\xEC\u40EC\u0200;ino\u073E\u22DD\u22E9\u22EE\u0100in\u22E2\u22E6nt;\u6A0Ct;\u622Dfin;\u69DCta;\u6129lig;\u4133\u0180aop\u22FE\u231A\u231D\u0180cgt\u2305\u2308\u2317r;\u412B\u0180elp\u071F\u230F\u2313in\xE5\u078Ear\xF4\u0720h;\u4131f;\u62B7ed;\u41B5\u0280;cfot\u04F4\u232C\u2331\u233D\u2341are;\u6105in\u0100;t\u2338\u2339\u621Eie;\u69DDdo\xF4\u2319\u0280;celp\u0757\u234C\u2350\u235B\u2361al;\u62BA\u0100gr\u2355\u2359er\xF3\u1563\xE3\u234Darhk;\u6A17rod;\u6A3C\u0200cgpt\u236F\u2372\u2376\u237By;\u4451on;\u412Ff;\uC000\u{1D55A}a;\u43B9uest\u803B\xBF\u40BF\u0100ci\u238A\u238Fr;\uC000\u{1D4BE}n\u0280;Edsv\u04F4\u239B\u239D\u23A1\u04F3;\u62F9ot;\u62F5\u0100;v\u23A6\u23A7\u62F4;\u62F3\u0100;i\u0777\u23AElde;\u4129\u01EB\u23B8\0\u23BCcy;\u4456l\u803B\xEF\u40EF\u0300cfmosu\u23CC\u23D7\u23DC\u23E1\u23E7\u23F5\u0100iy\u23D1\u23D5rc;\u4135;\u4439r;\uC000\u{1D527}ath;\u4237pf;\uC000\u{1D55B}\u01E3\u23EC\0\u23F1r;\uC000\u{1D4BF}rcy;\u4458kcy;\u4454\u0400acfghjos\u240B\u2416\u2422\u2427\u242D\u2431\u2435\u243Bppa\u0100;v\u2413\u2414\u43BA;\u43F0\u0100ey\u241B\u2420dil;\u4137;\u443Ar;\uC000\u{1D528}reen;\u4138cy;\u4445cy;\u445Cpf;\uC000\u{1D55C}cr;\uC000\u{1D4C0}\u0B80ABEHabcdefghjlmnoprstuv\u2470\u2481\u2486\u248D\u2491\u250E\u253D\u255A\u2580\u264E\u265E\u2665\u2679\u267D\u269A\u26B2\u26D8\u275D\u2768\u278B\u27C0\u2801\u2812\u0180art\u2477\u247A\u247Cr\xF2\u09C6\xF2\u0395ail;\u691Barr;\u690E\u0100;g\u0994\u248B;\u6A8Bar;\u6962\u0963\u24A5\0\u24AA\0\u24B1\0\0\0\0\0\u24B5\u24BA\0\u24C6\u24C8\u24CD\0\u24F9ute;\u413Amptyv;\u69B4ra\xEE\u084Cbda;\u43BBg\u0180;dl\u088E\u24C1\u24C3;\u6991\xE5\u088E;\u6A85uo\u803B\xAB\u40ABr\u0400;bfhlpst\u0899\u24DE\u24E6\u24E9\u24EB\u24EE\u24F1\u24F5\u0100;f\u089D\u24E3s;\u691Fs;\u691D\xEB\u2252p;\u61ABl;\u6939im;\u6973l;\u61A2\u0180;ae\u24FF\u2500\u2504\u6AABil;\u6919\u0100;s\u2509\u250A\u6AAD;\uC000\u2AAD\uFE00\u0180abr\u2515\u2519\u251Drr;\u690Crk;\u6772\u0100ak\u2522\u252Cc\u0100ek\u2528\u252A;\u407B;\u405B\u0100es\u2531\u2533;\u698Bl\u0100du\u2539\u253B;\u698F;\u698D\u0200aeuy\u2546\u254B\u2556\u2558ron;\u413E\u0100di\u2550\u2554il;\u413C\xEC\u08B0\xE2\u2529;\u443B\u0200cqrs\u2563\u2566\u256D\u257Da;\u6936uo\u0100;r\u0E19\u1746\u0100du\u2572\u2577har;\u6967shar;\u694Bh;\u61B2\u0280;fgqs\u258B\u258C\u0989\u25F3\u25FF\u6264t\u0280ahlrt\u2598\u25A4\u25B7\u25C2\u25E8rrow\u0100;t\u0899\u25A1a\xE9\u24F6arpoon\u0100du\u25AF\u25B4own\xBB\u045Ap\xBB\u0966eftarrows;\u61C7ight\u0180ahs\u25CD\u25D6\u25DErrow\u0100;s\u08F4\u08A7arpoon\xF3\u0F98quigarro\xF7\u21F0hreetimes;\u62CB\u0180;qs\u258B\u0993\u25FAlan\xF4\u09AC\u0280;cdgs\u09AC\u260A\u260D\u261D\u2628c;\u6AA8ot\u0100;o\u2614\u2615\u6A7F\u0100;r\u261A\u261B\u6A81;\u6A83\u0100;e\u2622\u2625\uC000\u22DA\uFE00s;\u6A93\u0280adegs\u2633\u2639\u263D\u2649\u264Bppro\xF8\u24C6ot;\u62D6q\u0100gq\u2643\u2645\xF4\u0989gt\xF2\u248C\xF4\u099Bi\xED\u09B2\u0180ilr\u2655\u08E1\u265Asht;\u697C;\uC000\u{1D529}\u0100;E\u099C\u2663;\u6A91\u0161\u2669\u2676r\u0100du\u25B2\u266E\u0100;l\u0965\u2673;\u696Alk;\u6584cy;\u4459\u0280;acht\u0A48\u2688\u268B\u2691\u2696r\xF2\u25C1orne\xF2\u1D08ard;\u696Bri;\u65FA\u0100io\u269F\u26A4dot;\u4140ust\u0100;a\u26AC\u26AD\u63B0che\xBB\u26AD\u0200Eaes\u26BB\u26BD\u26C9\u26D4;\u6268p\u0100;p\u26C3\u26C4\u6A89rox\xBB\u26C4\u0100;q\u26CE\u26CF\u6A87\u0100;q\u26CE\u26BBim;\u62E6\u0400abnoptwz\u26E9\u26F4\u26F7\u271A\u272F\u2741\u2747\u2750\u0100nr\u26EE\u26F1g;\u67ECr;\u61FDr\xEB\u08C1g\u0180lmr\u26FF\u270D\u2714eft\u0100ar\u09E6\u2707ight\xE1\u09F2apsto;\u67FCight\xE1\u09FDparrow\u0100lr\u2725\u2729ef\xF4\u24EDight;\u61AC\u0180afl\u2736\u2739\u273Dr;\u6985;\uC000\u{1D55D}us;\u6A2Dimes;\u6A34\u0161\u274B\u274Fst;\u6217\xE1\u134E\u0180;ef\u2757\u2758\u1800\u65CAnge\xBB\u2758ar\u0100;l\u2764\u2765\u4028t;\u6993\u0280achmt\u2773\u2776\u277C\u2785\u2787r\xF2\u08A8orne\xF2\u1D8Car\u0100;d\u0F98\u2783;\u696D;\u600Eri;\u62BF\u0300achiqt\u2798\u279D\u0A40\u27A2\u27AE\u27BBquo;\u6039r;\uC000\u{1D4C1}m\u0180;eg\u09B2\u27AA\u27AC;\u6A8D;\u6A8F\u0100bu\u252A\u27B3o\u0100;r\u0E1F\u27B9;\u601Arok;\u4142\u8400<;cdhilqr\u082B\u27D2\u2639\u27DC\u27E0\u27E5\u27EA\u27F0\u0100ci\u27D7\u27D9;\u6AA6r;\u6A79re\xE5\u25F2mes;\u62C9arr;\u6976uest;\u6A7B\u0100Pi\u27F5\u27F9ar;\u6996\u0180;ef\u2800\u092D\u181B\u65C3r\u0100du\u2807\u280Dshar;\u694Ahar;\u6966\u0100en\u2817\u2821rtneqq;\uC000\u2268\uFE00\xC5\u281E\u0700Dacdefhilnopsu\u2840\u2845\u2882\u288E\u2893\u28A0\u28A5\u28A8\u28DA\u28E2\u28E4\u0A83\u28F3\u2902Dot;\u623A\u0200clpr\u284E\u2852\u2863\u287Dr\u803B\xAF\u40AF\u0100et\u2857\u2859;\u6642\u0100;e\u285E\u285F\u6720se\xBB\u285F\u0100;s\u103B\u2868to\u0200;dlu\u103B\u2873\u2877\u287Bow\xEE\u048Cef\xF4\u090F\xF0\u13D1ker;\u65AE\u0100oy\u2887\u288Cmma;\u6A29;\u443Cash;\u6014asuredangle\xBB\u1626r;\uC000\u{1D52A}o;\u6127\u0180cdn\u28AF\u28B4\u28C9ro\u803B\xB5\u40B5\u0200;acd\u1464\u28BD\u28C0\u28C4s\xF4\u16A7ir;\u6AF0ot\u80BB\xB7\u01B5us\u0180;bd\u28D2\u1903\u28D3\u6212\u0100;u\u1D3C\u28D8;\u6A2A\u0163\u28DE\u28E1p;\u6ADB\xF2\u2212\xF0\u0A81\u0100dp\u28E9\u28EEels;\u62A7f;\uC000\u{1D55E}\u0100ct\u28F8\u28FDr;\uC000\u{1D4C2}pos\xBB\u159D\u0180;lm\u2909\u290A\u290D\u43BCtimap;\u62B8\u0C00GLRVabcdefghijlmoprstuvw\u2942\u2953\u297E\u2989\u2998\u29DA\u29E9\u2A15\u2A1A\u2A58\u2A5D\u2A83\u2A95\u2AA4\u2AA8\u2B04\u2B07\u2B44\u2B7F\u2BAE\u2C34\u2C67\u2C7C\u2CE9\u0100gt\u2947\u294B;\uC000\u22D9\u0338\u0100;v\u2950\u0BCF\uC000\u226B\u20D2\u0180elt\u295A\u2972\u2976ft\u0100ar\u2961\u2967rrow;\u61CDightarrow;\u61CE;\uC000\u22D8\u0338\u0100;v\u297B\u0C47\uC000\u226A\u20D2ightarrow;\u61CF\u0100Dd\u298E\u2993ash;\u62AFash;\u62AE\u0280bcnpt\u29A3\u29A7\u29AC\u29B1\u29CCla\xBB\u02DEute;\u4144g;\uC000\u2220\u20D2\u0280;Eiop\u0D84\u29BC\u29C0\u29C5\u29C8;\uC000\u2A70\u0338d;\uC000\u224B\u0338s;\u4149ro\xF8\u0D84ur\u0100;a\u29D3\u29D4\u666El\u0100;s\u29D3\u0B38\u01F3\u29DF\0\u29E3p\u80BB\xA0\u0B37mp\u0100;e\u0BF9\u0C00\u0280aeouy\u29F4\u29FE\u2A03\u2A10\u2A13\u01F0\u29F9\0\u29FB;\u6A43on;\u4148dil;\u4146ng\u0100;d\u0D7E\u2A0Aot;\uC000\u2A6D\u0338p;\u6A42;\u443Dash;\u6013\u0380;Aadqsx\u0B92\u2A29\u2A2D\u2A3B\u2A41\u2A45\u2A50rr;\u61D7r\u0100hr\u2A33\u2A36k;\u6924\u0100;o\u13F2\u13F0ot;\uC000\u2250\u0338ui\xF6\u0B63\u0100ei\u2A4A\u2A4Ear;\u6928\xED\u0B98ist\u0100;s\u0BA0\u0B9Fr;\uC000\u{1D52B}\u0200Eest\u0BC5\u2A66\u2A79\u2A7C\u0180;qs\u0BBC\u2A6D\u0BE1\u0180;qs\u0BBC\u0BC5\u2A74lan\xF4\u0BE2i\xED\u0BEA\u0100;r\u0BB6\u2A81\xBB\u0BB7\u0180Aap\u2A8A\u2A8D\u2A91r\xF2\u2971rr;\u61AEar;\u6AF2\u0180;sv\u0F8D\u2A9C\u0F8C\u0100;d\u2AA1\u2AA2\u62FC;\u62FAcy;\u445A\u0380AEadest\u2AB7\u2ABA\u2ABE\u2AC2\u2AC5\u2AF6\u2AF9r\xF2\u2966;\uC000\u2266\u0338rr;\u619Ar;\u6025\u0200;fqs\u0C3B\u2ACE\u2AE3\u2AEFt\u0100ar\u2AD4\u2AD9rro\xF7\u2AC1ightarro\xF7\u2A90\u0180;qs\u0C3B\u2ABA\u2AEAlan\xF4\u0C55\u0100;s\u0C55\u2AF4\xBB\u0C36i\xED\u0C5D\u0100;r\u0C35\u2AFEi\u0100;e\u0C1A\u0C25i\xE4\u0D90\u0100pt\u2B0C\u2B11f;\uC000\u{1D55F}\u8180\xAC;in\u2B19\u2B1A\u2B36\u40ACn\u0200;Edv\u0B89\u2B24\u2B28\u2B2E;\uC000\u22F9\u0338ot;\uC000\u22F5\u0338\u01E1\u0B89\u2B33\u2B35;\u62F7;\u62F6i\u0100;v\u0CB8\u2B3C\u01E1\u0CB8\u2B41\u2B43;\u62FE;\u62FD\u0180aor\u2B4B\u2B63\u2B69r\u0200;ast\u0B7B\u2B55\u2B5A\u2B5Flle\xEC\u0B7Bl;\uC000\u2AFD\u20E5;\uC000\u2202\u0338lint;\u6A14\u0180;ce\u0C92\u2B70\u2B73u\xE5\u0CA5\u0100;c\u0C98\u2B78\u0100;e\u0C92\u2B7D\xF1\u0C98\u0200Aait\u2B88\u2B8B\u2B9D\u2BA7r\xF2\u2988rr\u0180;cw\u2B94\u2B95\u2B99\u619B;\uC000\u2933\u0338;\uC000\u219D\u0338ghtarrow\xBB\u2B95ri\u0100;e\u0CCB\u0CD6\u0380chimpqu\u2BBD\u2BCD\u2BD9\u2B04\u0B78\u2BE4\u2BEF\u0200;cer\u0D32\u2BC6\u0D37\u2BC9u\xE5\u0D45;\uC000\u{1D4C3}ort\u026D\u2B05\0\0\u2BD6ar\xE1\u2B56m\u0100;e\u0D6E\u2BDF\u0100;q\u0D74\u0D73su\u0100bp\u2BEB\u2BED\xE5\u0CF8\xE5\u0D0B\u0180bcp\u2BF6\u2C11\u2C19\u0200;Ees\u2BFF\u2C00\u0D22\u2C04\u6284;\uC000\u2AC5\u0338et\u0100;e\u0D1B\u2C0Bq\u0100;q\u0D23\u2C00c\u0100;e\u0D32\u2C17\xF1\u0D38\u0200;Ees\u2C22\u2C23\u0D5F\u2C27\u6285;\uC000\u2AC6\u0338et\u0100;e\u0D58\u2C2Eq\u0100;q\u0D60\u2C23\u0200gilr\u2C3D\u2C3F\u2C45\u2C47\xEC\u0BD7lde\u803B\xF1\u40F1\xE7\u0C43iangle\u0100lr\u2C52\u2C5Ceft\u0100;e\u0C1A\u2C5A\xF1\u0C26ight\u0100;e\u0CCB\u2C65\xF1\u0CD7\u0100;m\u2C6C\u2C6D\u43BD\u0180;es\u2C74\u2C75\u2C79\u4023ro;\u6116p;\u6007\u0480DHadgilrs\u2C8F\u2C94\u2C99\u2C9E\u2CA3\u2CB0\u2CB6\u2CD3\u2CE3ash;\u62ADarr;\u6904p;\uC000\u224D\u20D2ash;\u62AC\u0100et\u2CA8\u2CAC;\uC000\u2265\u20D2;\uC000>\u20D2nfin;\u69DE\u0180Aet\u2CBD\u2CC1\u2CC5rr;\u6902;\uC000\u2264\u20D2\u0100;r\u2CCA\u2CCD\uC000<\u20D2ie;\uC000\u22B4\u20D2\u0100At\u2CD8\u2CDCrr;\u6903rie;\uC000\u22B5\u20D2im;\uC000\u223C\u20D2\u0180Aan\u2CF0\u2CF4\u2D02rr;\u61D6r\u0100hr\u2CFA\u2CFDk;\u6923\u0100;o\u13E7\u13E5ear;\u6927\u1253\u1A95\0\0\0\0\0\0\0\0\0\0\0\0\0\u2D2D\0\u2D38\u2D48\u2D60\u2D65\u2D72\u2D84\u1B07\0\0\u2D8D\u2DAB\0\u2DC8\u2DCE\0\u2DDC\u2E19\u2E2B\u2E3E\u2E43\u0100cs\u2D31\u1A97ute\u803B\xF3\u40F3\u0100iy\u2D3C\u2D45r\u0100;c\u1A9E\u2D42\u803B\xF4\u40F4;\u443E\u0280abios\u1AA0\u2D52\u2D57\u01C8\u2D5Alac;\u4151v;\u6A38old;\u69BClig;\u4153\u0100cr\u2D69\u2D6Dir;\u69BF;\uC000\u{1D52C}\u036F\u2D79\0\0\u2D7C\0\u2D82n;\u42DBave\u803B\xF2\u40F2;\u69C1\u0100bm\u2D88\u0DF4ar;\u69B5\u0200acit\u2D95\u2D98\u2DA5\u2DA8r\xF2\u1A80\u0100ir\u2D9D\u2DA0r;\u69BEoss;\u69BBn\xE5\u0E52;\u69C0\u0180aei\u2DB1\u2DB5\u2DB9cr;\u414Dga;\u43C9\u0180cdn\u2DC0\u2DC5\u01CDron;\u43BF;\u69B6pf;\uC000\u{1D560}\u0180ael\u2DD4\u2DD7\u01D2r;\u69B7rp;\u69B9\u0380;adiosv\u2DEA\u2DEB\u2DEE\u2E08\u2E0D\u2E10\u2E16\u6228r\xF2\u1A86\u0200;efm\u2DF7\u2DF8\u2E02\u2E05\u6A5Dr\u0100;o\u2DFE\u2DFF\u6134f\xBB\u2DFF\u803B\xAA\u40AA\u803B\xBA\u40BAgof;\u62B6r;\u6A56lope;\u6A57;\u6A5B\u0180clo\u2E1F\u2E21\u2E27\xF2\u2E01ash\u803B\xF8\u40F8l;\u6298i\u016C\u2E2F\u2E34de\u803B\xF5\u40F5es\u0100;a\u01DB\u2E3As;\u6A36ml\u803B\xF6\u40F6bar;\u633D\u0AE1\u2E5E\0\u2E7D\0\u2E80\u2E9D\0\u2EA2\u2EB9\0\0\u2ECB\u0E9C\0\u2F13\0\0\u2F2B\u2FBC\0\u2FC8r\u0200;ast\u0403\u2E67\u2E72\u0E85\u8100\xB6;l\u2E6D\u2E6E\u40B6le\xEC\u0403\u0269\u2E78\0\0\u2E7Bm;\u6AF3;\u6AFDy;\u443Fr\u0280cimpt\u2E8B\u2E8F\u2E93\u1865\u2E97nt;\u4025od;\u402Eil;\u6030enk;\u6031r;\uC000\u{1D52D}\u0180imo\u2EA8\u2EB0\u2EB4\u0100;v\u2EAD\u2EAE\u43C6;\u43D5ma\xF4\u0A76ne;\u660E\u0180;tv\u2EBF\u2EC0\u2EC8\u43C0chfork\xBB\u1FFD;\u43D6\u0100au\u2ECF\u2EDFn\u0100ck\u2ED5\u2EDDk\u0100;h\u21F4\u2EDB;\u610E\xF6\u21F4s\u0480;abcdemst\u2EF3\u2EF4\u1908\u2EF9\u2EFD\u2F04\u2F06\u2F0A\u2F0E\u402Bcir;\u6A23ir;\u6A22\u0100ou\u1D40\u2F02;\u6A25;\u6A72n\u80BB\xB1\u0E9Dim;\u6A26wo;\u6A27\u0180ipu\u2F19\u2F20\u2F25ntint;\u6A15f;\uC000\u{1D561}nd\u803B\xA3\u40A3\u0500;Eaceinosu\u0EC8\u2F3F\u2F41\u2F44\u2F47\u2F81\u2F89\u2F92\u2F7E\u2FB6;\u6AB3p;\u6AB7u\xE5\u0ED9\u0100;c\u0ECE\u2F4C\u0300;acens\u0EC8\u2F59\u2F5F\u2F66\u2F68\u2F7Eppro\xF8\u2F43urlye\xF1\u0ED9\xF1\u0ECE\u0180aes\u2F6F\u2F76\u2F7Approx;\u6AB9qq;\u6AB5im;\u62E8i\xED\u0EDFme\u0100;s\u2F88\u0EAE\u6032\u0180Eas\u2F78\u2F90\u2F7A\xF0\u2F75\u0180dfp\u0EEC\u2F99\u2FAF\u0180als\u2FA0\u2FA5\u2FAAlar;\u632Eine;\u6312urf;\u6313\u0100;t\u0EFB\u2FB4\xEF\u0EFBrel;\u62B0\u0100ci\u2FC0\u2FC5r;\uC000\u{1D4C5};\u43C8ncsp;\u6008\u0300fiopsu\u2FDA\u22E2\u2FDF\u2FE5\u2FEB\u2FF1r;\uC000\u{1D52E}pf;\uC000\u{1D562}rime;\u6057cr;\uC000\u{1D4C6}\u0180aeo\u2FF8\u3009\u3013t\u0100ei\u2FFE\u3005rnion\xF3\u06B0nt;\u6A16st\u0100;e\u3010\u3011\u403F\xF1\u1F19\xF4\u0F14\u0A80ABHabcdefhilmnoprstux\u3040\u3051\u3055\u3059\u30E0\u310E\u312B\u3147\u3162\u3172\u318E\u3206\u3215\u3224\u3229\u3258\u326E\u3272\u3290\u32B0\u32B7\u0180art\u3047\u304A\u304Cr\xF2\u10B3\xF2\u03DDail;\u691Car\xF2\u1C65ar;\u6964\u0380cdenqrt\u3068\u3075\u3078\u307F\u308F\u3094\u30CC\u0100eu\u306D\u3071;\uC000\u223D\u0331te;\u4155i\xE3\u116Emptyv;\u69B3g\u0200;del\u0FD1\u3089\u308B\u308D;\u6992;\u69A5\xE5\u0FD1uo\u803B\xBB\u40BBr\u0580;abcfhlpstw\u0FDC\u30AC\u30AF\u30B7\u30B9\u30BC\u30BE\u30C0\u30C3\u30C7\u30CAp;\u6975\u0100;f\u0FE0\u30B4s;\u6920;\u6933s;\u691E\xEB\u225D\xF0\u272El;\u6945im;\u6974l;\u61A3;\u619D\u0100ai\u30D1\u30D5il;\u691Ao\u0100;n\u30DB\u30DC\u6236al\xF3\u0F1E\u0180abr\u30E7\u30EA\u30EEr\xF2\u17E5rk;\u6773\u0100ak\u30F3\u30FDc\u0100ek\u30F9\u30FB;\u407D;\u405D\u0100es\u3102\u3104;\u698Cl\u0100du\u310A\u310C;\u698E;\u6990\u0200aeuy\u3117\u311C\u3127\u3129ron;\u4159\u0100di\u3121\u3125il;\u4157\xEC\u0FF2\xE2\u30FA;\u4440\u0200clqs\u3134\u3137\u313D\u3144a;\u6937dhar;\u6969uo\u0100;r\u020E\u020Dh;\u61B3\u0180acg\u314E\u315F\u0F44l\u0200;ips\u0F78\u3158\u315B\u109Cn\xE5\u10BBar\xF4\u0FA9t;\u65AD\u0180ilr\u3169\u1023\u316Esht;\u697D;\uC000\u{1D52F}\u0100ao\u3177\u3186r\u0100du\u317D\u317F\xBB\u047B\u0100;l\u1091\u3184;\u696C\u0100;v\u318B\u318C\u43C1;\u43F1\u0180gns\u3195\u31F9\u31FCht\u0300ahlrst\u31A4\u31B0\u31C2\u31D8\u31E4\u31EErrow\u0100;t\u0FDC\u31ADa\xE9\u30C8arpoon\u0100du\u31BB\u31BFow\xEE\u317Ep\xBB\u1092eft\u0100ah\u31CA\u31D0rrow\xF3\u0FEAarpoon\xF3\u0551ightarrows;\u61C9quigarro\xF7\u30CBhreetimes;\u62CCg;\u42DAingdotse\xF1\u1F32\u0180ahm\u320D\u3210\u3213r\xF2\u0FEAa\xF2\u0551;\u600Foust\u0100;a\u321E\u321F\u63B1che\xBB\u321Fmid;\u6AEE\u0200abpt\u3232\u323D\u3240\u3252\u0100nr\u3237\u323Ag;\u67EDr;\u61FEr\xEB\u1003\u0180afl\u3247\u324A\u324Er;\u6986;\uC000\u{1D563}us;\u6A2Eimes;\u6A35\u0100ap\u325D\u3267r\u0100;g\u3263\u3264\u4029t;\u6994olint;\u6A12ar\xF2\u31E3\u0200achq\u327B\u3280\u10BC\u3285quo;\u603Ar;\uC000\u{1D4C7}\u0100bu\u30FB\u328Ao\u0100;r\u0214\u0213\u0180hir\u3297\u329B\u32A0re\xE5\u31F8mes;\u62CAi\u0200;efl\u32AA\u1059\u1821\u32AB\u65B9tri;\u69CEluhar;\u6968;\u611E\u0D61\u32D5\u32DB\u32DF\u332C\u3338\u3371\0\u337A\u33A4\0\0\u33EC\u33F0\0\u3428\u3448\u345A\u34AD\u34B1\u34CA\u34F1\0\u3616\0\0\u3633cute;\u415Bqu\xEF\u27BA\u0500;Eaceinpsy\u11ED\u32F3\u32F5\u32FF\u3302\u330B\u330F\u331F\u3326\u3329;\u6AB4\u01F0\u32FA\0\u32FC;\u6AB8on;\u4161u\xE5\u11FE\u0100;d\u11F3\u3307il;\u415Frc;\u415D\u0180Eas\u3316\u3318\u331B;\u6AB6p;\u6ABAim;\u62E9olint;\u6A13i\xED\u1204;\u4441ot\u0180;be\u3334\u1D47\u3335\u62C5;\u6A66\u0380Aacmstx\u3346\u334A\u3357\u335B\u335E\u3363\u336Drr;\u61D8r\u0100hr\u3350\u3352\xEB\u2228\u0100;o\u0A36\u0A34t\u803B\xA7\u40A7i;\u403Bwar;\u6929m\u0100in\u3369\xF0nu\xF3\xF1t;\u6736r\u0100;o\u3376\u2055\uC000\u{1D530}\u0200acoy\u3382\u3386\u3391\u33A0rp;\u666F\u0100hy\u338B\u338Fcy;\u4449;\u4448rt\u026D\u3399\0\0\u339Ci\xE4\u1464ara\xEC\u2E6F\u803B\xAD\u40AD\u0100gm\u33A8\u33B4ma\u0180;fv\u33B1\u33B2\u33B2\u43C3;\u43C2\u0400;deglnpr\u12AB\u33C5\u33C9\u33CE\u33D6\u33DE\u33E1\u33E6ot;\u6A6A\u0100;q\u12B1\u12B0\u0100;E\u33D3\u33D4\u6A9E;\u6AA0\u0100;E\u33DB\u33DC\u6A9D;\u6A9Fe;\u6246lus;\u6A24arr;\u6972ar\xF2\u113D\u0200aeit\u33F8\u3408\u340F\u3417\u0100ls\u33FD\u3404lsetm\xE9\u336Ahp;\u6A33parsl;\u69E4\u0100dl\u1463\u3414e;\u6323\u0100;e\u341C\u341D\u6AAA\u0100;s\u3422\u3423\u6AAC;\uC000\u2AAC\uFE00\u0180flp\u342E\u3433\u3442tcy;\u444C\u0100;b\u3438\u3439\u402F\u0100;a\u343E\u343F\u69C4r;\u633Ff;\uC000\u{1D564}a\u0100dr\u344D\u0402es\u0100;u\u3454\u3455\u6660it\xBB\u3455\u0180csu\u3460\u3479\u349F\u0100au\u3465\u346Fp\u0100;s\u1188\u346B;\uC000\u2293\uFE00p\u0100;s\u11B4\u3475;\uC000\u2294\uFE00u\u0100bp\u347F\u348F\u0180;es\u1197\u119C\u3486et\u0100;e\u1197\u348D\xF1\u119D\u0180;es\u11A8\u11AD\u3496et\u0100;e\u11A8\u349D\xF1\u11AE\u0180;af\u117B\u34A6\u05B0r\u0165\u34AB\u05B1\xBB\u117Car\xF2\u1148\u0200cemt\u34B9\u34BE\u34C2\u34C5r;\uC000\u{1D4C8}tm\xEE\xF1i\xEC\u3415ar\xE6\u11BE\u0100ar\u34CE\u34D5r\u0100;f\u34D4\u17BF\u6606\u0100an\u34DA\u34EDight\u0100ep\u34E3\u34EApsilo\xEE\u1EE0h\xE9\u2EAFs\xBB\u2852\u0280bcmnp\u34FB\u355E\u1209\u358B\u358E\u0480;Edemnprs\u350E\u350F\u3511\u3515\u351E\u3523\u352C\u3531\u3536\u6282;\u6AC5ot;\u6ABD\u0100;d\u11DA\u351Aot;\u6AC3ult;\u6AC1\u0100Ee\u3528\u352A;\u6ACB;\u628Alus;\u6ABFarr;\u6979\u0180eiu\u353D\u3552\u3555t\u0180;en\u350E\u3545\u354Bq\u0100;q\u11DA\u350Feq\u0100;q\u352B\u3528m;\u6AC7\u0100bp\u355A\u355C;\u6AD5;\u6AD3c\u0300;acens\u11ED\u356C\u3572\u3579\u357B\u3326ppro\xF8\u32FAurlye\xF1\u11FE\xF1\u11F3\u0180aes\u3582\u3588\u331Bppro\xF8\u331Aq\xF1\u3317g;\u666A\u0680123;Edehlmnps\u35A9\u35AC\u35AF\u121C\u35B2\u35B4\u35C0\u35C9\u35D5\u35DA\u35DF\u35E8\u35ED\u803B\xB9\u40B9\u803B\xB2\u40B2\u803B\xB3\u40B3;\u6AC6\u0100os\u35B9\u35BCt;\u6ABEub;\u6AD8\u0100;d\u1222\u35C5ot;\u6AC4s\u0100ou\u35CF\u35D2l;\u67C9b;\u6AD7arr;\u697Bult;\u6AC2\u0100Ee\u35E4\u35E6;\u6ACC;\u628Blus;\u6AC0\u0180eiu\u35F4\u3609\u360Ct\u0180;en\u121C\u35FC\u3602q\u0100;q\u1222\u35B2eq\u0100;q\u35E7\u35E4m;\u6AC8\u0100bp\u3611\u3613;\u6AD4;\u6AD6\u0180Aan\u361C\u3620\u362Drr;\u61D9r\u0100hr\u3626\u3628\xEB\u222E\u0100;o\u0A2B\u0A29war;\u692Alig\u803B\xDF\u40DF\u0BE1\u3651\u365D\u3660\u12CE\u3673\u3679\0\u367E\u36C2\0\0\0\0\0\u36DB\u3703\0\u3709\u376C\0\0\0\u3787\u0272\u3656\0\0\u365Bget;\u6316;\u43C4r\xEB\u0E5F\u0180aey\u3666\u366B\u3670ron;\u4165dil;\u4163;\u4442lrec;\u6315r;\uC000\u{1D531}\u0200eiko\u3686\u369D\u36B5\u36BC\u01F2\u368B\0\u3691e\u01004f\u1284\u1281a\u0180;sv\u3698\u3699\u369B\u43B8ym;\u43D1\u0100cn\u36A2\u36B2k\u0100as\u36A8\u36AEppro\xF8\u12C1im\xBB\u12ACs\xF0\u129E\u0100as\u36BA\u36AE\xF0\u12C1rn\u803B\xFE\u40FE\u01EC\u031F\u36C6\u22E7es\u8180\xD7;bd\u36CF\u36D0\u36D8\u40D7\u0100;a\u190F\u36D5r;\u6A31;\u6A30\u0180eps\u36E1\u36E3\u3700\xE1\u2A4D\u0200;bcf\u0486\u36EC\u36F0\u36F4ot;\u6336ir;\u6AF1\u0100;o\u36F9\u36FC\uC000\u{1D565}rk;\u6ADA\xE1\u3362rime;\u6034\u0180aip\u370F\u3712\u3764d\xE5\u1248\u0380adempst\u3721\u374D\u3740\u3751\u3757\u375C\u375Fngle\u0280;dlqr\u3730\u3731\u3736\u3740\u3742\u65B5own\xBB\u1DBBeft\u0100;e\u2800\u373E\xF1\u092E;\u625Cight\u0100;e\u32AA\u374B\xF1\u105Aot;\u65ECinus;\u6A3Alus;\u6A39b;\u69CDime;\u6A3Bezium;\u63E2\u0180cht\u3772\u377D\u3781\u0100ry\u3777\u377B;\uC000\u{1D4C9};\u4446cy;\u445Brok;\u4167\u0100io\u378B\u378Ex\xF4\u1777head\u0100lr\u3797\u37A0eftarro\xF7\u084Fightarrow\xBB\u0F5D\u0900AHabcdfghlmoprstuw\u37D0\u37D3\u37D7\u37E4\u37F0\u37FC\u380E\u381C\u3823\u3834\u3851\u385D\u386B\u38A9\u38CC\u38D2\u38EA\u38F6r\xF2\u03EDar;\u6963\u0100cr\u37DC\u37E2ute\u803B\xFA\u40FA\xF2\u1150r\u01E3\u37EA\0\u37EDy;\u445Eve;\u416D\u0100iy\u37F5\u37FArc\u803B\xFB\u40FB;\u4443\u0180abh\u3803\u3806\u380Br\xF2\u13ADlac;\u4171a\xF2\u13C3\u0100ir\u3813\u3818sht;\u697E;\uC000\u{1D532}rave\u803B\xF9\u40F9\u0161\u3827\u3831r\u0100lr\u382C\u382E\xBB\u0957\xBB\u1083lk;\u6580\u0100ct\u3839\u384D\u026F\u383F\0\0\u384Arn\u0100;e\u3845\u3846\u631Cr\xBB\u3846op;\u630Fri;\u65F8\u0100al\u3856\u385Acr;\u416B\u80BB\xA8\u0349\u0100gp\u3862\u3866on;\u4173f;\uC000\u{1D566}\u0300adhlsu\u114B\u3878\u387D\u1372\u3891\u38A0own\xE1\u13B3arpoon\u0100lr\u3888\u388Cef\xF4\u382Digh\xF4\u382Fi\u0180;hl\u3899\u389A\u389C\u43C5\xBB\u13FAon\xBB\u389Aparrows;\u61C8\u0180cit\u38B0\u38C4\u38C8\u026F\u38B6\0\0\u38C1rn\u0100;e\u38BC\u38BD\u631Dr\xBB\u38BDop;\u630Eng;\u416Fri;\u65F9cr;\uC000\u{1D4CA}\u0180dir\u38D9\u38DD\u38E2ot;\u62F0lde;\u4169i\u0100;f\u3730\u38E8\xBB\u1813\u0100am\u38EF\u38F2r\xF2\u38A8l\u803B\xFC\u40FCangle;\u69A7\u0780ABDacdeflnoprsz\u391C\u391F\u3929\u392D\u39B5\u39B8\u39BD\u39DF\u39E4\u39E8\u39F3\u39F9\u39FD\u3A01\u3A20r\xF2\u03F7ar\u0100;v\u3926\u3927\u6AE8;\u6AE9as\xE8\u03E1\u0100nr\u3932\u3937grt;\u699C\u0380eknprst\u34E3\u3946\u394B\u3952\u395D\u3964\u3996app\xE1\u2415othin\xE7\u1E96\u0180hir\u34EB\u2EC8\u3959op\xF4\u2FB5\u0100;h\u13B7\u3962\xEF\u318D\u0100iu\u3969\u396Dgm\xE1\u33B3\u0100bp\u3972\u3984setneq\u0100;q\u397D\u3980\uC000\u228A\uFE00;\uC000\u2ACB\uFE00setneq\u0100;q\u398F\u3992\uC000\u228B\uFE00;\uC000\u2ACC\uFE00\u0100hr\u399B\u399Fet\xE1\u369Ciangle\u0100lr\u39AA\u39AFeft\xBB\u0925ight\xBB\u1051y;\u4432ash\xBB\u1036\u0180elr\u39C4\u39D2\u39D7\u0180;be\u2DEA\u39CB\u39CFar;\u62BBq;\u625Alip;\u62EE\u0100bt\u39DC\u1468a\xF2\u1469r;\uC000\u{1D533}tr\xE9\u39AEsu\u0100bp\u39EF\u39F1\xBB\u0D1C\xBB\u0D59pf;\uC000\u{1D567}ro\xF0\u0EFBtr\xE9\u39B4\u0100cu\u3A06\u3A0Br;\uC000\u{1D4CB}\u0100bp\u3A10\u3A18n\u0100Ee\u3980\u3A16\xBB\u397En\u0100Ee\u3992\u3A1E\xBB\u3990igzag;\u699A\u0380cefoprs\u3A36\u3A3B\u3A56\u3A5B\u3A54\u3A61\u3A6Airc;\u4175\u0100di\u3A40\u3A51\u0100bg\u3A45\u3A49ar;\u6A5Fe\u0100;q\u15FA\u3A4F;\u6259erp;\u6118r;\uC000\u{1D534}pf;\uC000\u{1D568}\u0100;e\u1479\u3A66at\xE8\u1479cr;\uC000\u{1D4CC}\u0AE3\u178E\u3A87\0\u3A8B\0\u3A90\u3A9B\0\0\u3A9D\u3AA8\u3AAB\u3AAF\0\0\u3AC3\u3ACE\0\u3AD8\u17DC\u17DFtr\xE9\u17D1r;\uC000\u{1D535}\u0100Aa\u3A94\u3A97r\xF2\u03C3r\xF2\u09F6;\u43BE\u0100Aa\u3AA1\u3AA4r\xF2\u03B8r\xF2\u09EBa\xF0\u2713is;\u62FB\u0180dpt\u17A4\u3AB5\u3ABE\u0100fl\u3ABA\u17A9;\uC000\u{1D569}im\xE5\u17B2\u0100Aa\u3AC7\u3ACAr\xF2\u03CEr\xF2\u0A01\u0100cq\u3AD2\u17B8r;\uC000\u{1D4CD}\u0100pt\u17D6\u3ADCr\xE9\u17D4\u0400acefiosu\u3AF0\u3AFD\u3B08\u3B0C\u3B11\u3B15\u3B1B\u3B21c\u0100uy\u3AF6\u3AFBte\u803B\xFD\u40FD;\u444F\u0100iy\u3B02\u3B06rc;\u4177;\u444Bn\u803B\xA5\u40A5r;\uC000\u{1D536}cy;\u4457pf;\uC000\u{1D56A}cr;\uC000\u{1D4CE}\u0100cm\u3B26\u3B29y;\u444El\u803B\xFF\u40FF\u0500acdefhiosw\u3B42\u3B48\u3B54\u3B58\u3B64\u3B69\u3B6D\u3B74\u3B7A\u3B80cute;\u417A\u0100ay\u3B4D\u3B52ron;\u417E;\u4437ot;\u417C\u0100et\u3B5D\u3B61tr\xE6\u155Fa;\u43B6r;\uC000\u{1D537}cy;\u4436grarr;\u61DDpf;\uC000\u{1D56B}cr;\uC000\u{1D4CF}\u0100jn\u3B85\u3B87;\u600Dj;\u600C'.split("").map(function(c) {
          return c.charCodeAt(0);
        })
      );
    }
  });

  // node_modules/entities/lib/generated/decode-data-xml.js
  var require_decode_data_xml = __commonJS({
    "node_modules/entities/lib/generated/decode-data-xml.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.default = new Uint16Array(
        // prettier-ignore
        "\u0200aglq	\x1B\u026D\0\0p;\u4026os;\u4027t;\u403Et;\u403Cuot;\u4022".split("").map(function(c) {
          return c.charCodeAt(0);
        })
      );
    }
  });

  // node_modules/entities/lib/decode_codepoint.js
  var require_decode_codepoint = __commonJS({
    "node_modules/entities/lib/decode_codepoint.js"(exports) {
      "use strict";
      var _a;
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.replaceCodePoint = exports.fromCodePoint = void 0;
      var decodeMap = /* @__PURE__ */ new Map([
        [0, 65533],
        // C1 Unicode control character reference replacements
        [128, 8364],
        [130, 8218],
        [131, 402],
        [132, 8222],
        [133, 8230],
        [134, 8224],
        [135, 8225],
        [136, 710],
        [137, 8240],
        [138, 352],
        [139, 8249],
        [140, 338],
        [142, 381],
        [145, 8216],
        [146, 8217],
        [147, 8220],
        [148, 8221],
        [149, 8226],
        [150, 8211],
        [151, 8212],
        [152, 732],
        [153, 8482],
        [154, 353],
        [155, 8250],
        [156, 339],
        [158, 382],
        [159, 376]
      ]);
      exports.fromCodePoint = // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition, node/no-unsupported-features/es-builtins
      (_a = String.fromCodePoint) !== null && _a !== void 0 ? _a : function(codePoint) {
        var output = "";
        if (codePoint > 65535) {
          codePoint -= 65536;
          output += String.fromCharCode(codePoint >>> 10 & 1023 | 55296);
          codePoint = 56320 | codePoint & 1023;
        }
        output += String.fromCharCode(codePoint);
        return output;
      };
      function replaceCodePoint(codePoint) {
        var _a2;
        if (codePoint >= 55296 && codePoint <= 57343 || codePoint > 1114111) {
          return 65533;
        }
        return (_a2 = decodeMap.get(codePoint)) !== null && _a2 !== void 0 ? _a2 : codePoint;
      }
      exports.replaceCodePoint = replaceCodePoint;
      function decodeCodePoint(codePoint) {
        return (0, exports.fromCodePoint)(replaceCodePoint(codePoint));
      }
      exports.default = decodeCodePoint;
    }
  });

  // node_modules/entities/lib/decode.js
  var require_decode = __commonJS({
    "node_modules/entities/lib/decode.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports && exports.__importStar || function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.decodeXML = exports.decodeHTMLStrict = exports.decodeHTMLAttribute = exports.decodeHTML = exports.determineBranch = exports.EntityDecoder = exports.DecodingMode = exports.BinTrieFlags = exports.fromCodePoint = exports.replaceCodePoint = exports.decodeCodePoint = exports.xmlDecodeTree = exports.htmlDecodeTree = void 0;
      var decode_data_html_js_1 = __importDefault(require_decode_data_html());
      exports.htmlDecodeTree = decode_data_html_js_1.default;
      var decode_data_xml_js_1 = __importDefault(require_decode_data_xml());
      exports.xmlDecodeTree = decode_data_xml_js_1.default;
      var decode_codepoint_js_1 = __importStar(require_decode_codepoint());
      exports.decodeCodePoint = decode_codepoint_js_1.default;
      var decode_codepoint_js_2 = require_decode_codepoint();
      Object.defineProperty(exports, "replaceCodePoint", { enumerable: true, get: function() {
        return decode_codepoint_js_2.replaceCodePoint;
      } });
      Object.defineProperty(exports, "fromCodePoint", { enumerable: true, get: function() {
        return decode_codepoint_js_2.fromCodePoint;
      } });
      var CharCodes;
      (function(CharCodes2) {
        CharCodes2[CharCodes2["NUM"] = 35] = "NUM";
        CharCodes2[CharCodes2["SEMI"] = 59] = "SEMI";
        CharCodes2[CharCodes2["EQUALS"] = 61] = "EQUALS";
        CharCodes2[CharCodes2["ZERO"] = 48] = "ZERO";
        CharCodes2[CharCodes2["NINE"] = 57] = "NINE";
        CharCodes2[CharCodes2["LOWER_A"] = 97] = "LOWER_A";
        CharCodes2[CharCodes2["LOWER_F"] = 102] = "LOWER_F";
        CharCodes2[CharCodes2["LOWER_X"] = 120] = "LOWER_X";
        CharCodes2[CharCodes2["LOWER_Z"] = 122] = "LOWER_Z";
        CharCodes2[CharCodes2["UPPER_A"] = 65] = "UPPER_A";
        CharCodes2[CharCodes2["UPPER_F"] = 70] = "UPPER_F";
        CharCodes2[CharCodes2["UPPER_Z"] = 90] = "UPPER_Z";
      })(CharCodes || (CharCodes = {}));
      var TO_LOWER_BIT = 32;
      var BinTrieFlags;
      (function(BinTrieFlags2) {
        BinTrieFlags2[BinTrieFlags2["VALUE_LENGTH"] = 49152] = "VALUE_LENGTH";
        BinTrieFlags2[BinTrieFlags2["BRANCH_LENGTH"] = 16256] = "BRANCH_LENGTH";
        BinTrieFlags2[BinTrieFlags2["JUMP_TABLE"] = 127] = "JUMP_TABLE";
      })(BinTrieFlags = exports.BinTrieFlags || (exports.BinTrieFlags = {}));
      function isNumber(code) {
        return code >= CharCodes.ZERO && code <= CharCodes.NINE;
      }
      function isHexadecimalCharacter(code) {
        return code >= CharCodes.UPPER_A && code <= CharCodes.UPPER_F || code >= CharCodes.LOWER_A && code <= CharCodes.LOWER_F;
      }
      function isAsciiAlphaNumeric(code) {
        return code >= CharCodes.UPPER_A && code <= CharCodes.UPPER_Z || code >= CharCodes.LOWER_A && code <= CharCodes.LOWER_Z || isNumber(code);
      }
      function isEntityInAttributeInvalidEnd(code) {
        return code === CharCodes.EQUALS || isAsciiAlphaNumeric(code);
      }
      var EntityDecoderState;
      (function(EntityDecoderState2) {
        EntityDecoderState2[EntityDecoderState2["EntityStart"] = 0] = "EntityStart";
        EntityDecoderState2[EntityDecoderState2["NumericStart"] = 1] = "NumericStart";
        EntityDecoderState2[EntityDecoderState2["NumericDecimal"] = 2] = "NumericDecimal";
        EntityDecoderState2[EntityDecoderState2["NumericHex"] = 3] = "NumericHex";
        EntityDecoderState2[EntityDecoderState2["NamedEntity"] = 4] = "NamedEntity";
      })(EntityDecoderState || (EntityDecoderState = {}));
      var DecodingMode;
      (function(DecodingMode2) {
        DecodingMode2[DecodingMode2["Legacy"] = 0] = "Legacy";
        DecodingMode2[DecodingMode2["Strict"] = 1] = "Strict";
        DecodingMode2[DecodingMode2["Attribute"] = 2] = "Attribute";
      })(DecodingMode = exports.DecodingMode || (exports.DecodingMode = {}));
      var EntityDecoder = (
        /** @class */
        function() {
          function EntityDecoder2(decodeTree, emitCodePoint, errors) {
            this.decodeTree = decodeTree;
            this.emitCodePoint = emitCodePoint;
            this.errors = errors;
            this.state = EntityDecoderState.EntityStart;
            this.consumed = 1;
            this.result = 0;
            this.treeIndex = 0;
            this.excess = 1;
            this.decodeMode = DecodingMode.Strict;
          }
          EntityDecoder2.prototype.startEntity = function(decodeMode) {
            this.decodeMode = decodeMode;
            this.state = EntityDecoderState.EntityStart;
            this.result = 0;
            this.treeIndex = 0;
            this.excess = 1;
            this.consumed = 1;
          };
          EntityDecoder2.prototype.write = function(str, offset) {
            switch (this.state) {
              case EntityDecoderState.EntityStart: {
                if (str.charCodeAt(offset) === CharCodes.NUM) {
                  this.state = EntityDecoderState.NumericStart;
                  this.consumed += 1;
                  return this.stateNumericStart(str, offset + 1);
                }
                this.state = EntityDecoderState.NamedEntity;
                return this.stateNamedEntity(str, offset);
              }
              case EntityDecoderState.NumericStart: {
                return this.stateNumericStart(str, offset);
              }
              case EntityDecoderState.NumericDecimal: {
                return this.stateNumericDecimal(str, offset);
              }
              case EntityDecoderState.NumericHex: {
                return this.stateNumericHex(str, offset);
              }
              case EntityDecoderState.NamedEntity: {
                return this.stateNamedEntity(str, offset);
              }
            }
          };
          EntityDecoder2.prototype.stateNumericStart = function(str, offset) {
            if (offset >= str.length) {
              return -1;
            }
            if ((str.charCodeAt(offset) | TO_LOWER_BIT) === CharCodes.LOWER_X) {
              this.state = EntityDecoderState.NumericHex;
              this.consumed += 1;
              return this.stateNumericHex(str, offset + 1);
            }
            this.state = EntityDecoderState.NumericDecimal;
            return this.stateNumericDecimal(str, offset);
          };
          EntityDecoder2.prototype.addToNumericResult = function(str, start, end, base) {
            if (start !== end) {
              var digitCount = end - start;
              this.result = this.result * Math.pow(base, digitCount) + parseInt(str.substr(start, digitCount), base);
              this.consumed += digitCount;
            }
          };
          EntityDecoder2.prototype.stateNumericHex = function(str, offset) {
            var startIdx = offset;
            while (offset < str.length) {
              var char = str.charCodeAt(offset);
              if (isNumber(char) || isHexadecimalCharacter(char)) {
                offset += 1;
              } else {
                this.addToNumericResult(str, startIdx, offset, 16);
                return this.emitNumericEntity(char, 3);
              }
            }
            this.addToNumericResult(str, startIdx, offset, 16);
            return -1;
          };
          EntityDecoder2.prototype.stateNumericDecimal = function(str, offset) {
            var startIdx = offset;
            while (offset < str.length) {
              var char = str.charCodeAt(offset);
              if (isNumber(char)) {
                offset += 1;
              } else {
                this.addToNumericResult(str, startIdx, offset, 10);
                return this.emitNumericEntity(char, 2);
              }
            }
            this.addToNumericResult(str, startIdx, offset, 10);
            return -1;
          };
          EntityDecoder2.prototype.emitNumericEntity = function(lastCp, expectedLength) {
            var _a;
            if (this.consumed <= expectedLength) {
              (_a = this.errors) === null || _a === void 0 ? void 0 : _a.absenceOfDigitsInNumericCharacterReference(this.consumed);
              return 0;
            }
            if (lastCp === CharCodes.SEMI) {
              this.consumed += 1;
            } else if (this.decodeMode === DecodingMode.Strict) {
              return 0;
            }
            this.emitCodePoint((0, decode_codepoint_js_1.replaceCodePoint)(this.result), this.consumed);
            if (this.errors) {
              if (lastCp !== CharCodes.SEMI) {
                this.errors.missingSemicolonAfterCharacterReference();
              }
              this.errors.validateNumericCharacterReference(this.result);
            }
            return this.consumed;
          };
          EntityDecoder2.prototype.stateNamedEntity = function(str, offset) {
            var decodeTree = this.decodeTree;
            var current = decodeTree[this.treeIndex];
            var valueLength = (current & BinTrieFlags.VALUE_LENGTH) >> 14;
            for (; offset < str.length; offset++, this.excess++) {
              var char = str.charCodeAt(offset);
              this.treeIndex = determineBranch(decodeTree, current, this.treeIndex + Math.max(1, valueLength), char);
              if (this.treeIndex < 0) {
                return this.result === 0 || // If we are parsing an attribute
                this.decodeMode === DecodingMode.Attribute && // We shouldn't have consumed any characters after the entity,
                (valueLength === 0 || // And there should be no invalid characters.
                isEntityInAttributeInvalidEnd(char)) ? 0 : this.emitNotTerminatedNamedEntity();
              }
              current = decodeTree[this.treeIndex];
              valueLength = (current & BinTrieFlags.VALUE_LENGTH) >> 14;
              if (valueLength !== 0) {
                if (char === CharCodes.SEMI) {
                  return this.emitNamedEntityData(this.treeIndex, valueLength, this.consumed + this.excess);
                }
                if (this.decodeMode !== DecodingMode.Strict) {
                  this.result = this.treeIndex;
                  this.consumed += this.excess;
                  this.excess = 0;
                }
              }
            }
            return -1;
          };
          EntityDecoder2.prototype.emitNotTerminatedNamedEntity = function() {
            var _a;
            var _b = this, result = _b.result, decodeTree = _b.decodeTree;
            var valueLength = (decodeTree[result] & BinTrieFlags.VALUE_LENGTH) >> 14;
            this.emitNamedEntityData(result, valueLength, this.consumed);
            (_a = this.errors) === null || _a === void 0 ? void 0 : _a.missingSemicolonAfterCharacterReference();
            return this.consumed;
          };
          EntityDecoder2.prototype.emitNamedEntityData = function(result, valueLength, consumed) {
            var decodeTree = this.decodeTree;
            this.emitCodePoint(valueLength === 1 ? decodeTree[result] & ~BinTrieFlags.VALUE_LENGTH : decodeTree[result + 1], consumed);
            if (valueLength === 3) {
              this.emitCodePoint(decodeTree[result + 2], consumed);
            }
            return consumed;
          };
          EntityDecoder2.prototype.end = function() {
            var _a;
            switch (this.state) {
              case EntityDecoderState.NamedEntity: {
                return this.result !== 0 && (this.decodeMode !== DecodingMode.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
              }
              case EntityDecoderState.NumericDecimal: {
                return this.emitNumericEntity(0, 2);
              }
              case EntityDecoderState.NumericHex: {
                return this.emitNumericEntity(0, 3);
              }
              case EntityDecoderState.NumericStart: {
                (_a = this.errors) === null || _a === void 0 ? void 0 : _a.absenceOfDigitsInNumericCharacterReference(this.consumed);
                return 0;
              }
              case EntityDecoderState.EntityStart: {
                return 0;
              }
            }
          };
          return EntityDecoder2;
        }()
      );
      exports.EntityDecoder = EntityDecoder;
      function getDecoder(decodeTree) {
        var ret = "";
        var decoder = new EntityDecoder(decodeTree, function(str) {
          return ret += (0, decode_codepoint_js_1.fromCodePoint)(str);
        });
        return function decodeWithTrie(str, decodeMode) {
          var lastIndex = 0;
          var offset = 0;
          while ((offset = str.indexOf("&", offset)) >= 0) {
            ret += str.slice(lastIndex, offset);
            decoder.startEntity(decodeMode);
            var len = decoder.write(
              str,
              // Skip the "&"
              offset + 1
            );
            if (len < 0) {
              lastIndex = offset + decoder.end();
              break;
            }
            lastIndex = offset + len;
            offset = len === 0 ? lastIndex + 1 : lastIndex;
          }
          var result = ret + str.slice(lastIndex);
          ret = "";
          return result;
        };
      }
      function determineBranch(decodeTree, current, nodeIdx, char) {
        var branchCount = (current & BinTrieFlags.BRANCH_LENGTH) >> 7;
        var jumpOffset = current & BinTrieFlags.JUMP_TABLE;
        if (branchCount === 0) {
          return jumpOffset !== 0 && char === jumpOffset ? nodeIdx : -1;
        }
        if (jumpOffset) {
          var value = char - jumpOffset;
          return value < 0 || value >= branchCount ? -1 : decodeTree[nodeIdx + value] - 1;
        }
        var lo = nodeIdx;
        var hi = lo + branchCount - 1;
        while (lo <= hi) {
          var mid = lo + hi >>> 1;
          var midVal = decodeTree[mid];
          if (midVal < char) {
            lo = mid + 1;
          } else if (midVal > char) {
            hi = mid - 1;
          } else {
            return decodeTree[mid + branchCount];
          }
        }
        return -1;
      }
      exports.determineBranch = determineBranch;
      var htmlDecoder = getDecoder(decode_data_html_js_1.default);
      var xmlDecoder = getDecoder(decode_data_xml_js_1.default);
      function decodeHTML(str, mode) {
        if (mode === void 0) {
          mode = DecodingMode.Legacy;
        }
        return htmlDecoder(str, mode);
      }
      exports.decodeHTML = decodeHTML;
      function decodeHTMLAttribute(str) {
        return htmlDecoder(str, DecodingMode.Attribute);
      }
      exports.decodeHTMLAttribute = decodeHTMLAttribute;
      function decodeHTMLStrict(str) {
        return htmlDecoder(str, DecodingMode.Strict);
      }
      exports.decodeHTMLStrict = decodeHTMLStrict;
      function decodeXML(str) {
        return xmlDecoder(str, DecodingMode.Strict);
      }
      exports.decodeXML = decodeXML;
    }
  });

  // node_modules/entities/lib/generated/encode-html.js
  var require_encode_html = __commonJS({
    "node_modules/entities/lib/generated/encode-html.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      function restoreDiff(arr) {
        for (var i = 1; i < arr.length; i++) {
          arr[i][0] += arr[i - 1][0] + 1;
        }
        return arr;
      }
      exports.default = new Map(/* @__PURE__ */ restoreDiff([[9, "&Tab;"], [0, "&NewLine;"], [22, "&excl;"], [0, "&quot;"], [0, "&num;"], [0, "&dollar;"], [0, "&percnt;"], [0, "&amp;"], [0, "&apos;"], [0, "&lpar;"], [0, "&rpar;"], [0, "&ast;"], [0, "&plus;"], [0, "&comma;"], [1, "&period;"], [0, "&sol;"], [10, "&colon;"], [0, "&semi;"], [0, { v: "&lt;", n: 8402, o: "&nvlt;" }], [0, { v: "&equals;", n: 8421, o: "&bne;" }], [0, { v: "&gt;", n: 8402, o: "&nvgt;" }], [0, "&quest;"], [0, "&commat;"], [26, "&lbrack;"], [0, "&bsol;"], [0, "&rbrack;"], [0, "&Hat;"], [0, "&lowbar;"], [0, "&DiacriticalGrave;"], [5, { n: 106, o: "&fjlig;" }], [20, "&lbrace;"], [0, "&verbar;"], [0, "&rbrace;"], [34, "&nbsp;"], [0, "&iexcl;"], [0, "&cent;"], [0, "&pound;"], [0, "&curren;"], [0, "&yen;"], [0, "&brvbar;"], [0, "&sect;"], [0, "&die;"], [0, "&copy;"], [0, "&ordf;"], [0, "&laquo;"], [0, "&not;"], [0, "&shy;"], [0, "&circledR;"], [0, "&macr;"], [0, "&deg;"], [0, "&PlusMinus;"], [0, "&sup2;"], [0, "&sup3;"], [0, "&acute;"], [0, "&micro;"], [0, "&para;"], [0, "&centerdot;"], [0, "&cedil;"], [0, "&sup1;"], [0, "&ordm;"], [0, "&raquo;"], [0, "&frac14;"], [0, "&frac12;"], [0, "&frac34;"], [0, "&iquest;"], [0, "&Agrave;"], [0, "&Aacute;"], [0, "&Acirc;"], [0, "&Atilde;"], [0, "&Auml;"], [0, "&angst;"], [0, "&AElig;"], [0, "&Ccedil;"], [0, "&Egrave;"], [0, "&Eacute;"], [0, "&Ecirc;"], [0, "&Euml;"], [0, "&Igrave;"], [0, "&Iacute;"], [0, "&Icirc;"], [0, "&Iuml;"], [0, "&ETH;"], [0, "&Ntilde;"], [0, "&Ograve;"], [0, "&Oacute;"], [0, "&Ocirc;"], [0, "&Otilde;"], [0, "&Ouml;"], [0, "&times;"], [0, "&Oslash;"], [0, "&Ugrave;"], [0, "&Uacute;"], [0, "&Ucirc;"], [0, "&Uuml;"], [0, "&Yacute;"], [0, "&THORN;"], [0, "&szlig;"], [0, "&agrave;"], [0, "&aacute;"], [0, "&acirc;"], [0, "&atilde;"], [0, "&auml;"], [0, "&aring;"], [0, "&aelig;"], [0, "&ccedil;"], [0, "&egrave;"], [0, "&eacute;"], [0, "&ecirc;"], [0, "&euml;"], [0, "&igrave;"], [0, "&iacute;"], [0, "&icirc;"], [0, "&iuml;"], [0, "&eth;"], [0, "&ntilde;"], [0, "&ograve;"], [0, "&oacute;"], [0, "&ocirc;"], [0, "&otilde;"], [0, "&ouml;"], [0, "&div;"], [0, "&oslash;"], [0, "&ugrave;"], [0, "&uacute;"], [0, "&ucirc;"], [0, "&uuml;"], [0, "&yacute;"], [0, "&thorn;"], [0, "&yuml;"], [0, "&Amacr;"], [0, "&amacr;"], [0, "&Abreve;"], [0, "&abreve;"], [0, "&Aogon;"], [0, "&aogon;"], [0, "&Cacute;"], [0, "&cacute;"], [0, "&Ccirc;"], [0, "&ccirc;"], [0, "&Cdot;"], [0, "&cdot;"], [0, "&Ccaron;"], [0, "&ccaron;"], [0, "&Dcaron;"], [0, "&dcaron;"], [0, "&Dstrok;"], [0, "&dstrok;"], [0, "&Emacr;"], [0, "&emacr;"], [2, "&Edot;"], [0, "&edot;"], [0, "&Eogon;"], [0, "&eogon;"], [0, "&Ecaron;"], [0, "&ecaron;"], [0, "&Gcirc;"], [0, "&gcirc;"], [0, "&Gbreve;"], [0, "&gbreve;"], [0, "&Gdot;"], [0, "&gdot;"], [0, "&Gcedil;"], [1, "&Hcirc;"], [0, "&hcirc;"], [0, "&Hstrok;"], [0, "&hstrok;"], [0, "&Itilde;"], [0, "&itilde;"], [0, "&Imacr;"], [0, "&imacr;"], [2, "&Iogon;"], [0, "&iogon;"], [0, "&Idot;"], [0, "&imath;"], [0, "&IJlig;"], [0, "&ijlig;"], [0, "&Jcirc;"], [0, "&jcirc;"], [0, "&Kcedil;"], [0, "&kcedil;"], [0, "&kgreen;"], [0, "&Lacute;"], [0, "&lacute;"], [0, "&Lcedil;"], [0, "&lcedil;"], [0, "&Lcaron;"], [0, "&lcaron;"], [0, "&Lmidot;"], [0, "&lmidot;"], [0, "&Lstrok;"], [0, "&lstrok;"], [0, "&Nacute;"], [0, "&nacute;"], [0, "&Ncedil;"], [0, "&ncedil;"], [0, "&Ncaron;"], [0, "&ncaron;"], [0, "&napos;"], [0, "&ENG;"], [0, "&eng;"], [0, "&Omacr;"], [0, "&omacr;"], [2, "&Odblac;"], [0, "&odblac;"], [0, "&OElig;"], [0, "&oelig;"], [0, "&Racute;"], [0, "&racute;"], [0, "&Rcedil;"], [0, "&rcedil;"], [0, "&Rcaron;"], [0, "&rcaron;"], [0, "&Sacute;"], [0, "&sacute;"], [0, "&Scirc;"], [0, "&scirc;"], [0, "&Scedil;"], [0, "&scedil;"], [0, "&Scaron;"], [0, "&scaron;"], [0, "&Tcedil;"], [0, "&tcedil;"], [0, "&Tcaron;"], [0, "&tcaron;"], [0, "&Tstrok;"], [0, "&tstrok;"], [0, "&Utilde;"], [0, "&utilde;"], [0, "&Umacr;"], [0, "&umacr;"], [0, "&Ubreve;"], [0, "&ubreve;"], [0, "&Uring;"], [0, "&uring;"], [0, "&Udblac;"], [0, "&udblac;"], [0, "&Uogon;"], [0, "&uogon;"], [0, "&Wcirc;"], [0, "&wcirc;"], [0, "&Ycirc;"], [0, "&ycirc;"], [0, "&Yuml;"], [0, "&Zacute;"], [0, "&zacute;"], [0, "&Zdot;"], [0, "&zdot;"], [0, "&Zcaron;"], [0, "&zcaron;"], [19, "&fnof;"], [34, "&imped;"], [63, "&gacute;"], [65, "&jmath;"], [142, "&circ;"], [0, "&caron;"], [16, "&breve;"], [0, "&DiacriticalDot;"], [0, "&ring;"], [0, "&ogon;"], [0, "&DiacriticalTilde;"], [0, "&dblac;"], [51, "&DownBreve;"], [127, "&Alpha;"], [0, "&Beta;"], [0, "&Gamma;"], [0, "&Delta;"], [0, "&Epsilon;"], [0, "&Zeta;"], [0, "&Eta;"], [0, "&Theta;"], [0, "&Iota;"], [0, "&Kappa;"], [0, "&Lambda;"], [0, "&Mu;"], [0, "&Nu;"], [0, "&Xi;"], [0, "&Omicron;"], [0, "&Pi;"], [0, "&Rho;"], [1, "&Sigma;"], [0, "&Tau;"], [0, "&Upsilon;"], [0, "&Phi;"], [0, "&Chi;"], [0, "&Psi;"], [0, "&ohm;"], [7, "&alpha;"], [0, "&beta;"], [0, "&gamma;"], [0, "&delta;"], [0, "&epsi;"], [0, "&zeta;"], [0, "&eta;"], [0, "&theta;"], [0, "&iota;"], [0, "&kappa;"], [0, "&lambda;"], [0, "&mu;"], [0, "&nu;"], [0, "&xi;"], [0, "&omicron;"], [0, "&pi;"], [0, "&rho;"], [0, "&sigmaf;"], [0, "&sigma;"], [0, "&tau;"], [0, "&upsi;"], [0, "&phi;"], [0, "&chi;"], [0, "&psi;"], [0, "&omega;"], [7, "&thetasym;"], [0, "&Upsi;"], [2, "&phiv;"], [0, "&piv;"], [5, "&Gammad;"], [0, "&digamma;"], [18, "&kappav;"], [0, "&rhov;"], [3, "&epsiv;"], [0, "&backepsilon;"], [10, "&IOcy;"], [0, "&DJcy;"], [0, "&GJcy;"], [0, "&Jukcy;"], [0, "&DScy;"], [0, "&Iukcy;"], [0, "&YIcy;"], [0, "&Jsercy;"], [0, "&LJcy;"], [0, "&NJcy;"], [0, "&TSHcy;"], [0, "&KJcy;"], [1, "&Ubrcy;"], [0, "&DZcy;"], [0, "&Acy;"], [0, "&Bcy;"], [0, "&Vcy;"], [0, "&Gcy;"], [0, "&Dcy;"], [0, "&IEcy;"], [0, "&ZHcy;"], [0, "&Zcy;"], [0, "&Icy;"], [0, "&Jcy;"], [0, "&Kcy;"], [0, "&Lcy;"], [0, "&Mcy;"], [0, "&Ncy;"], [0, "&Ocy;"], [0, "&Pcy;"], [0, "&Rcy;"], [0, "&Scy;"], [0, "&Tcy;"], [0, "&Ucy;"], [0, "&Fcy;"], [0, "&KHcy;"], [0, "&TScy;"], [0, "&CHcy;"], [0, "&SHcy;"], [0, "&SHCHcy;"], [0, "&HARDcy;"], [0, "&Ycy;"], [0, "&SOFTcy;"], [0, "&Ecy;"], [0, "&YUcy;"], [0, "&YAcy;"], [0, "&acy;"], [0, "&bcy;"], [0, "&vcy;"], [0, "&gcy;"], [0, "&dcy;"], [0, "&iecy;"], [0, "&zhcy;"], [0, "&zcy;"], [0, "&icy;"], [0, "&jcy;"], [0, "&kcy;"], [0, "&lcy;"], [0, "&mcy;"], [0, "&ncy;"], [0, "&ocy;"], [0, "&pcy;"], [0, "&rcy;"], [0, "&scy;"], [0, "&tcy;"], [0, "&ucy;"], [0, "&fcy;"], [0, "&khcy;"], [0, "&tscy;"], [0, "&chcy;"], [0, "&shcy;"], [0, "&shchcy;"], [0, "&hardcy;"], [0, "&ycy;"], [0, "&softcy;"], [0, "&ecy;"], [0, "&yucy;"], [0, "&yacy;"], [1, "&iocy;"], [0, "&djcy;"], [0, "&gjcy;"], [0, "&jukcy;"], [0, "&dscy;"], [0, "&iukcy;"], [0, "&yicy;"], [0, "&jsercy;"], [0, "&ljcy;"], [0, "&njcy;"], [0, "&tshcy;"], [0, "&kjcy;"], [1, "&ubrcy;"], [0, "&dzcy;"], [7074, "&ensp;"], [0, "&emsp;"], [0, "&emsp13;"], [0, "&emsp14;"], [1, "&numsp;"], [0, "&puncsp;"], [0, "&ThinSpace;"], [0, "&hairsp;"], [0, "&NegativeMediumSpace;"], [0, "&zwnj;"], [0, "&zwj;"], [0, "&lrm;"], [0, "&rlm;"], [0, "&dash;"], [2, "&ndash;"], [0, "&mdash;"], [0, "&horbar;"], [0, "&Verbar;"], [1, "&lsquo;"], [0, "&CloseCurlyQuote;"], [0, "&lsquor;"], [1, "&ldquo;"], [0, "&CloseCurlyDoubleQuote;"], [0, "&bdquo;"], [1, "&dagger;"], [0, "&Dagger;"], [0, "&bull;"], [2, "&nldr;"], [0, "&hellip;"], [9, "&permil;"], [0, "&pertenk;"], [0, "&prime;"], [0, "&Prime;"], [0, "&tprime;"], [0, "&backprime;"], [3, "&lsaquo;"], [0, "&rsaquo;"], [3, "&oline;"], [2, "&caret;"], [1, "&hybull;"], [0, "&frasl;"], [10, "&bsemi;"], [7, "&qprime;"], [7, { v: "&MediumSpace;", n: 8202, o: "&ThickSpace;" }], [0, "&NoBreak;"], [0, "&af;"], [0, "&InvisibleTimes;"], [0, "&ic;"], [72, "&euro;"], [46, "&tdot;"], [0, "&DotDot;"], [37, "&complexes;"], [2, "&incare;"], [4, "&gscr;"], [0, "&hamilt;"], [0, "&Hfr;"], [0, "&Hopf;"], [0, "&planckh;"], [0, "&hbar;"], [0, "&imagline;"], [0, "&Ifr;"], [0, "&lagran;"], [0, "&ell;"], [1, "&naturals;"], [0, "&numero;"], [0, "&copysr;"], [0, "&weierp;"], [0, "&Popf;"], [0, "&Qopf;"], [0, "&realine;"], [0, "&real;"], [0, "&reals;"], [0, "&rx;"], [3, "&trade;"], [1, "&integers;"], [2, "&mho;"], [0, "&zeetrf;"], [0, "&iiota;"], [2, "&bernou;"], [0, "&Cayleys;"], [1, "&escr;"], [0, "&Escr;"], [0, "&Fouriertrf;"], [1, "&Mellintrf;"], [0, "&order;"], [0, "&alefsym;"], [0, "&beth;"], [0, "&gimel;"], [0, "&daleth;"], [12, "&CapitalDifferentialD;"], [0, "&dd;"], [0, "&ee;"], [0, "&ii;"], [10, "&frac13;"], [0, "&frac23;"], [0, "&frac15;"], [0, "&frac25;"], [0, "&frac35;"], [0, "&frac45;"], [0, "&frac16;"], [0, "&frac56;"], [0, "&frac18;"], [0, "&frac38;"], [0, "&frac58;"], [0, "&frac78;"], [49, "&larr;"], [0, "&ShortUpArrow;"], [0, "&rarr;"], [0, "&darr;"], [0, "&harr;"], [0, "&updownarrow;"], [0, "&nwarr;"], [0, "&nearr;"], [0, "&LowerRightArrow;"], [0, "&LowerLeftArrow;"], [0, "&nlarr;"], [0, "&nrarr;"], [1, { v: "&rarrw;", n: 824, o: "&nrarrw;" }], [0, "&Larr;"], [0, "&Uarr;"], [0, "&Rarr;"], [0, "&Darr;"], [0, "&larrtl;"], [0, "&rarrtl;"], [0, "&LeftTeeArrow;"], [0, "&mapstoup;"], [0, "&map;"], [0, "&DownTeeArrow;"], [1, "&hookleftarrow;"], [0, "&hookrightarrow;"], [0, "&larrlp;"], [0, "&looparrowright;"], [0, "&harrw;"], [0, "&nharr;"], [1, "&lsh;"], [0, "&rsh;"], [0, "&ldsh;"], [0, "&rdsh;"], [1, "&crarr;"], [0, "&cularr;"], [0, "&curarr;"], [2, "&circlearrowleft;"], [0, "&circlearrowright;"], [0, "&leftharpoonup;"], [0, "&DownLeftVector;"], [0, "&RightUpVector;"], [0, "&LeftUpVector;"], [0, "&rharu;"], [0, "&DownRightVector;"], [0, "&dharr;"], [0, "&dharl;"], [0, "&RightArrowLeftArrow;"], [0, "&udarr;"], [0, "&LeftArrowRightArrow;"], [0, "&leftleftarrows;"], [0, "&upuparrows;"], [0, "&rightrightarrows;"], [0, "&ddarr;"], [0, "&leftrightharpoons;"], [0, "&Equilibrium;"], [0, "&nlArr;"], [0, "&nhArr;"], [0, "&nrArr;"], [0, "&DoubleLeftArrow;"], [0, "&DoubleUpArrow;"], [0, "&DoubleRightArrow;"], [0, "&dArr;"], [0, "&DoubleLeftRightArrow;"], [0, "&DoubleUpDownArrow;"], [0, "&nwArr;"], [0, "&neArr;"], [0, "&seArr;"], [0, "&swArr;"], [0, "&lAarr;"], [0, "&rAarr;"], [1, "&zigrarr;"], [6, "&larrb;"], [0, "&rarrb;"], [15, "&DownArrowUpArrow;"], [7, "&loarr;"], [0, "&roarr;"], [0, "&hoarr;"], [0, "&forall;"], [0, "&comp;"], [0, { v: "&part;", n: 824, o: "&npart;" }], [0, "&exist;"], [0, "&nexist;"], [0, "&empty;"], [1, "&Del;"], [0, "&Element;"], [0, "&NotElement;"], [1, "&ni;"], [0, "&notni;"], [2, "&prod;"], [0, "&coprod;"], [0, "&sum;"], [0, "&minus;"], [0, "&MinusPlus;"], [0, "&dotplus;"], [1, "&Backslash;"], [0, "&lowast;"], [0, "&compfn;"], [1, "&radic;"], [2, "&prop;"], [0, "&infin;"], [0, "&angrt;"], [0, { v: "&ang;", n: 8402, o: "&nang;" }], [0, "&angmsd;"], [0, "&angsph;"], [0, "&mid;"], [0, "&nmid;"], [0, "&DoubleVerticalBar;"], [0, "&NotDoubleVerticalBar;"], [0, "&and;"], [0, "&or;"], [0, { v: "&cap;", n: 65024, o: "&caps;" }], [0, { v: "&cup;", n: 65024, o: "&cups;" }], [0, "&int;"], [0, "&Int;"], [0, "&iiint;"], [0, "&conint;"], [0, "&Conint;"], [0, "&Cconint;"], [0, "&cwint;"], [0, "&ClockwiseContourIntegral;"], [0, "&awconint;"], [0, "&there4;"], [0, "&becaus;"], [0, "&ratio;"], [0, "&Colon;"], [0, "&dotminus;"], [1, "&mDDot;"], [0, "&homtht;"], [0, { v: "&sim;", n: 8402, o: "&nvsim;" }], [0, { v: "&backsim;", n: 817, o: "&race;" }], [0, { v: "&ac;", n: 819, o: "&acE;" }], [0, "&acd;"], [0, "&VerticalTilde;"], [0, "&NotTilde;"], [0, { v: "&eqsim;", n: 824, o: "&nesim;" }], [0, "&sime;"], [0, "&NotTildeEqual;"], [0, "&cong;"], [0, "&simne;"], [0, "&ncong;"], [0, "&ap;"], [0, "&nap;"], [0, "&ape;"], [0, { v: "&apid;", n: 824, o: "&napid;" }], [0, "&backcong;"], [0, { v: "&asympeq;", n: 8402, o: "&nvap;" }], [0, { v: "&bump;", n: 824, o: "&nbump;" }], [0, { v: "&bumpe;", n: 824, o: "&nbumpe;" }], [0, { v: "&doteq;", n: 824, o: "&nedot;" }], [0, "&doteqdot;"], [0, "&efDot;"], [0, "&erDot;"], [0, "&Assign;"], [0, "&ecolon;"], [0, "&ecir;"], [0, "&circeq;"], [1, "&wedgeq;"], [0, "&veeeq;"], [1, "&triangleq;"], [2, "&equest;"], [0, "&ne;"], [0, { v: "&Congruent;", n: 8421, o: "&bnequiv;" }], [0, "&nequiv;"], [1, { v: "&le;", n: 8402, o: "&nvle;" }], [0, { v: "&ge;", n: 8402, o: "&nvge;" }], [0, { v: "&lE;", n: 824, o: "&nlE;" }], [0, { v: "&gE;", n: 824, o: "&ngE;" }], [0, { v: "&lnE;", n: 65024, o: "&lvertneqq;" }], [0, { v: "&gnE;", n: 65024, o: "&gvertneqq;" }], [0, { v: "&ll;", n: new Map(/* @__PURE__ */ restoreDiff([[824, "&nLtv;"], [7577, "&nLt;"]])) }], [0, { v: "&gg;", n: new Map(/* @__PURE__ */ restoreDiff([[824, "&nGtv;"], [7577, "&nGt;"]])) }], [0, "&between;"], [0, "&NotCupCap;"], [0, "&nless;"], [0, "&ngt;"], [0, "&nle;"], [0, "&nge;"], [0, "&lesssim;"], [0, "&GreaterTilde;"], [0, "&nlsim;"], [0, "&ngsim;"], [0, "&LessGreater;"], [0, "&gl;"], [0, "&NotLessGreater;"], [0, "&NotGreaterLess;"], [0, "&pr;"], [0, "&sc;"], [0, "&prcue;"], [0, "&sccue;"], [0, "&PrecedesTilde;"], [0, { v: "&scsim;", n: 824, o: "&NotSucceedsTilde;" }], [0, "&NotPrecedes;"], [0, "&NotSucceeds;"], [0, { v: "&sub;", n: 8402, o: "&NotSubset;" }], [0, { v: "&sup;", n: 8402, o: "&NotSuperset;" }], [0, "&nsub;"], [0, "&nsup;"], [0, "&sube;"], [0, "&supe;"], [0, "&NotSubsetEqual;"], [0, "&NotSupersetEqual;"], [0, { v: "&subne;", n: 65024, o: "&varsubsetneq;" }], [0, { v: "&supne;", n: 65024, o: "&varsupsetneq;" }], [1, "&cupdot;"], [0, "&UnionPlus;"], [0, { v: "&sqsub;", n: 824, o: "&NotSquareSubset;" }], [0, { v: "&sqsup;", n: 824, o: "&NotSquareSuperset;" }], [0, "&sqsube;"], [0, "&sqsupe;"], [0, { v: "&sqcap;", n: 65024, o: "&sqcaps;" }], [0, { v: "&sqcup;", n: 65024, o: "&sqcups;" }], [0, "&CirclePlus;"], [0, "&CircleMinus;"], [0, "&CircleTimes;"], [0, "&osol;"], [0, "&CircleDot;"], [0, "&circledcirc;"], [0, "&circledast;"], [1, "&circleddash;"], [0, "&boxplus;"], [0, "&boxminus;"], [0, "&boxtimes;"], [0, "&dotsquare;"], [0, "&RightTee;"], [0, "&dashv;"], [0, "&DownTee;"], [0, "&bot;"], [1, "&models;"], [0, "&DoubleRightTee;"], [0, "&Vdash;"], [0, "&Vvdash;"], [0, "&VDash;"], [0, "&nvdash;"], [0, "&nvDash;"], [0, "&nVdash;"], [0, "&nVDash;"], [0, "&prurel;"], [1, "&LeftTriangle;"], [0, "&RightTriangle;"], [0, { v: "&LeftTriangleEqual;", n: 8402, o: "&nvltrie;" }], [0, { v: "&RightTriangleEqual;", n: 8402, o: "&nvrtrie;" }], [0, "&origof;"], [0, "&imof;"], [0, "&multimap;"], [0, "&hercon;"], [0, "&intcal;"], [0, "&veebar;"], [1, "&barvee;"], [0, "&angrtvb;"], [0, "&lrtri;"], [0, "&bigwedge;"], [0, "&bigvee;"], [0, "&bigcap;"], [0, "&bigcup;"], [0, "&diam;"], [0, "&sdot;"], [0, "&sstarf;"], [0, "&divideontimes;"], [0, "&bowtie;"], [0, "&ltimes;"], [0, "&rtimes;"], [0, "&leftthreetimes;"], [0, "&rightthreetimes;"], [0, "&backsimeq;"], [0, "&curlyvee;"], [0, "&curlywedge;"], [0, "&Sub;"], [0, "&Sup;"], [0, "&Cap;"], [0, "&Cup;"], [0, "&fork;"], [0, "&epar;"], [0, "&lessdot;"], [0, "&gtdot;"], [0, { v: "&Ll;", n: 824, o: "&nLl;" }], [0, { v: "&Gg;", n: 824, o: "&nGg;" }], [0, { v: "&leg;", n: 65024, o: "&lesg;" }], [0, { v: "&gel;", n: 65024, o: "&gesl;" }], [2, "&cuepr;"], [0, "&cuesc;"], [0, "&NotPrecedesSlantEqual;"], [0, "&NotSucceedsSlantEqual;"], [0, "&NotSquareSubsetEqual;"], [0, "&NotSquareSupersetEqual;"], [2, "&lnsim;"], [0, "&gnsim;"], [0, "&precnsim;"], [0, "&scnsim;"], [0, "&nltri;"], [0, "&NotRightTriangle;"], [0, "&nltrie;"], [0, "&NotRightTriangleEqual;"], [0, "&vellip;"], [0, "&ctdot;"], [0, "&utdot;"], [0, "&dtdot;"], [0, "&disin;"], [0, "&isinsv;"], [0, "&isins;"], [0, { v: "&isindot;", n: 824, o: "&notindot;" }], [0, "&notinvc;"], [0, "&notinvb;"], [1, { v: "&isinE;", n: 824, o: "&notinE;" }], [0, "&nisd;"], [0, "&xnis;"], [0, "&nis;"], [0, "&notnivc;"], [0, "&notnivb;"], [6, "&barwed;"], [0, "&Barwed;"], [1, "&lceil;"], [0, "&rceil;"], [0, "&LeftFloor;"], [0, "&rfloor;"], [0, "&drcrop;"], [0, "&dlcrop;"], [0, "&urcrop;"], [0, "&ulcrop;"], [0, "&bnot;"], [1, "&profline;"], [0, "&profsurf;"], [1, "&telrec;"], [0, "&target;"], [5, "&ulcorn;"], [0, "&urcorn;"], [0, "&dlcorn;"], [0, "&drcorn;"], [2, "&frown;"], [0, "&smile;"], [9, "&cylcty;"], [0, "&profalar;"], [7, "&topbot;"], [6, "&ovbar;"], [1, "&solbar;"], [60, "&angzarr;"], [51, "&lmoustache;"], [0, "&rmoustache;"], [2, "&OverBracket;"], [0, "&bbrk;"], [0, "&bbrktbrk;"], [37, "&OverParenthesis;"], [0, "&UnderParenthesis;"], [0, "&OverBrace;"], [0, "&UnderBrace;"], [2, "&trpezium;"], [4, "&elinters;"], [59, "&blank;"], [164, "&circledS;"], [55, "&boxh;"], [1, "&boxv;"], [9, "&boxdr;"], [3, "&boxdl;"], [3, "&boxur;"], [3, "&boxul;"], [3, "&boxvr;"], [7, "&boxvl;"], [7, "&boxhd;"], [7, "&boxhu;"], [7, "&boxvh;"], [19, "&boxH;"], [0, "&boxV;"], [0, "&boxdR;"], [0, "&boxDr;"], [0, "&boxDR;"], [0, "&boxdL;"], [0, "&boxDl;"], [0, "&boxDL;"], [0, "&boxuR;"], [0, "&boxUr;"], [0, "&boxUR;"], [0, "&boxuL;"], [0, "&boxUl;"], [0, "&boxUL;"], [0, "&boxvR;"], [0, "&boxVr;"], [0, "&boxVR;"], [0, "&boxvL;"], [0, "&boxVl;"], [0, "&boxVL;"], [0, "&boxHd;"], [0, "&boxhD;"], [0, "&boxHD;"], [0, "&boxHu;"], [0, "&boxhU;"], [0, "&boxHU;"], [0, "&boxvH;"], [0, "&boxVh;"], [0, "&boxVH;"], [19, "&uhblk;"], [3, "&lhblk;"], [3, "&block;"], [8, "&blk14;"], [0, "&blk12;"], [0, "&blk34;"], [13, "&square;"], [8, "&blacksquare;"], [0, "&EmptyVerySmallSquare;"], [1, "&rect;"], [0, "&marker;"], [2, "&fltns;"], [1, "&bigtriangleup;"], [0, "&blacktriangle;"], [0, "&triangle;"], [2, "&blacktriangleright;"], [0, "&rtri;"], [3, "&bigtriangledown;"], [0, "&blacktriangledown;"], [0, "&dtri;"], [2, "&blacktriangleleft;"], [0, "&ltri;"], [6, "&loz;"], [0, "&cir;"], [32, "&tridot;"], [2, "&bigcirc;"], [8, "&ultri;"], [0, "&urtri;"], [0, "&lltri;"], [0, "&EmptySmallSquare;"], [0, "&FilledSmallSquare;"], [8, "&bigstar;"], [0, "&star;"], [7, "&phone;"], [49, "&female;"], [1, "&male;"], [29, "&spades;"], [2, "&clubs;"], [1, "&hearts;"], [0, "&diamondsuit;"], [3, "&sung;"], [2, "&flat;"], [0, "&natural;"], [0, "&sharp;"], [163, "&check;"], [3, "&cross;"], [8, "&malt;"], [21, "&sext;"], [33, "&VerticalSeparator;"], [25, "&lbbrk;"], [0, "&rbbrk;"], [84, "&bsolhsub;"], [0, "&suphsol;"], [28, "&LeftDoubleBracket;"], [0, "&RightDoubleBracket;"], [0, "&lang;"], [0, "&rang;"], [0, "&Lang;"], [0, "&Rang;"], [0, "&loang;"], [0, "&roang;"], [7, "&longleftarrow;"], [0, "&longrightarrow;"], [0, "&longleftrightarrow;"], [0, "&DoubleLongLeftArrow;"], [0, "&DoubleLongRightArrow;"], [0, "&DoubleLongLeftRightArrow;"], [1, "&longmapsto;"], [2, "&dzigrarr;"], [258, "&nvlArr;"], [0, "&nvrArr;"], [0, "&nvHarr;"], [0, "&Map;"], [6, "&lbarr;"], [0, "&bkarow;"], [0, "&lBarr;"], [0, "&dbkarow;"], [0, "&drbkarow;"], [0, "&DDotrahd;"], [0, "&UpArrowBar;"], [0, "&DownArrowBar;"], [2, "&Rarrtl;"], [2, "&latail;"], [0, "&ratail;"], [0, "&lAtail;"], [0, "&rAtail;"], [0, "&larrfs;"], [0, "&rarrfs;"], [0, "&larrbfs;"], [0, "&rarrbfs;"], [2, "&nwarhk;"], [0, "&nearhk;"], [0, "&hksearow;"], [0, "&hkswarow;"], [0, "&nwnear;"], [0, "&nesear;"], [0, "&seswar;"], [0, "&swnwar;"], [8, { v: "&rarrc;", n: 824, o: "&nrarrc;" }], [1, "&cudarrr;"], [0, "&ldca;"], [0, "&rdca;"], [0, "&cudarrl;"], [0, "&larrpl;"], [2, "&curarrm;"], [0, "&cularrp;"], [7, "&rarrpl;"], [2, "&harrcir;"], [0, "&Uarrocir;"], [0, "&lurdshar;"], [0, "&ldrushar;"], [2, "&LeftRightVector;"], [0, "&RightUpDownVector;"], [0, "&DownLeftRightVector;"], [0, "&LeftUpDownVector;"], [0, "&LeftVectorBar;"], [0, "&RightVectorBar;"], [0, "&RightUpVectorBar;"], [0, "&RightDownVectorBar;"], [0, "&DownLeftVectorBar;"], [0, "&DownRightVectorBar;"], [0, "&LeftUpVectorBar;"], [0, "&LeftDownVectorBar;"], [0, "&LeftTeeVector;"], [0, "&RightTeeVector;"], [0, "&RightUpTeeVector;"], [0, "&RightDownTeeVector;"], [0, "&DownLeftTeeVector;"], [0, "&DownRightTeeVector;"], [0, "&LeftUpTeeVector;"], [0, "&LeftDownTeeVector;"], [0, "&lHar;"], [0, "&uHar;"], [0, "&rHar;"], [0, "&dHar;"], [0, "&luruhar;"], [0, "&ldrdhar;"], [0, "&ruluhar;"], [0, "&rdldhar;"], [0, "&lharul;"], [0, "&llhard;"], [0, "&rharul;"], [0, "&lrhard;"], [0, "&udhar;"], [0, "&duhar;"], [0, "&RoundImplies;"], [0, "&erarr;"], [0, "&simrarr;"], [0, "&larrsim;"], [0, "&rarrsim;"], [0, "&rarrap;"], [0, "&ltlarr;"], [1, "&gtrarr;"], [0, "&subrarr;"], [1, "&suplarr;"], [0, "&lfisht;"], [0, "&rfisht;"], [0, "&ufisht;"], [0, "&dfisht;"], [5, "&lopar;"], [0, "&ropar;"], [4, "&lbrke;"], [0, "&rbrke;"], [0, "&lbrkslu;"], [0, "&rbrksld;"], [0, "&lbrksld;"], [0, "&rbrkslu;"], [0, "&langd;"], [0, "&rangd;"], [0, "&lparlt;"], [0, "&rpargt;"], [0, "&gtlPar;"], [0, "&ltrPar;"], [3, "&vzigzag;"], [1, "&vangrt;"], [0, "&angrtvbd;"], [6, "&ange;"], [0, "&range;"], [0, "&dwangle;"], [0, "&uwangle;"], [0, "&angmsdaa;"], [0, "&angmsdab;"], [0, "&angmsdac;"], [0, "&angmsdad;"], [0, "&angmsdae;"], [0, "&angmsdaf;"], [0, "&angmsdag;"], [0, "&angmsdah;"], [0, "&bemptyv;"], [0, "&demptyv;"], [0, "&cemptyv;"], [0, "&raemptyv;"], [0, "&laemptyv;"], [0, "&ohbar;"], [0, "&omid;"], [0, "&opar;"], [1, "&operp;"], [1, "&olcross;"], [0, "&odsold;"], [1, "&olcir;"], [0, "&ofcir;"], [0, "&olt;"], [0, "&ogt;"], [0, "&cirscir;"], [0, "&cirE;"], [0, "&solb;"], [0, "&bsolb;"], [3, "&boxbox;"], [3, "&trisb;"], [0, "&rtriltri;"], [0, { v: "&LeftTriangleBar;", n: 824, o: "&NotLeftTriangleBar;" }], [0, { v: "&RightTriangleBar;", n: 824, o: "&NotRightTriangleBar;" }], [11, "&iinfin;"], [0, "&infintie;"], [0, "&nvinfin;"], [4, "&eparsl;"], [0, "&smeparsl;"], [0, "&eqvparsl;"], [5, "&blacklozenge;"], [8, "&RuleDelayed;"], [1, "&dsol;"], [9, "&bigodot;"], [0, "&bigoplus;"], [0, "&bigotimes;"], [1, "&biguplus;"], [1, "&bigsqcup;"], [5, "&iiiint;"], [0, "&fpartint;"], [2, "&cirfnint;"], [0, "&awint;"], [0, "&rppolint;"], [0, "&scpolint;"], [0, "&npolint;"], [0, "&pointint;"], [0, "&quatint;"], [0, "&intlarhk;"], [10, "&pluscir;"], [0, "&plusacir;"], [0, "&simplus;"], [0, "&plusdu;"], [0, "&plussim;"], [0, "&plustwo;"], [1, "&mcomma;"], [0, "&minusdu;"], [2, "&loplus;"], [0, "&roplus;"], [0, "&Cross;"], [0, "&timesd;"], [0, "&timesbar;"], [1, "&smashp;"], [0, "&lotimes;"], [0, "&rotimes;"], [0, "&otimesas;"], [0, "&Otimes;"], [0, "&odiv;"], [0, "&triplus;"], [0, "&triminus;"], [0, "&tritime;"], [0, "&intprod;"], [2, "&amalg;"], [0, "&capdot;"], [1, "&ncup;"], [0, "&ncap;"], [0, "&capand;"], [0, "&cupor;"], [0, "&cupcap;"], [0, "&capcup;"], [0, "&cupbrcap;"], [0, "&capbrcup;"], [0, "&cupcup;"], [0, "&capcap;"], [0, "&ccups;"], [0, "&ccaps;"], [2, "&ccupssm;"], [2, "&And;"], [0, "&Or;"], [0, "&andand;"], [0, "&oror;"], [0, "&orslope;"], [0, "&andslope;"], [1, "&andv;"], [0, "&orv;"], [0, "&andd;"], [0, "&ord;"], [1, "&wedbar;"], [6, "&sdote;"], [3, "&simdot;"], [2, { v: "&congdot;", n: 824, o: "&ncongdot;" }], [0, "&easter;"], [0, "&apacir;"], [0, { v: "&apE;", n: 824, o: "&napE;" }], [0, "&eplus;"], [0, "&pluse;"], [0, "&Esim;"], [0, "&Colone;"], [0, "&Equal;"], [1, "&ddotseq;"], [0, "&equivDD;"], [0, "&ltcir;"], [0, "&gtcir;"], [0, "&ltquest;"], [0, "&gtquest;"], [0, { v: "&leqslant;", n: 824, o: "&nleqslant;" }], [0, { v: "&geqslant;", n: 824, o: "&ngeqslant;" }], [0, "&lesdot;"], [0, "&gesdot;"], [0, "&lesdoto;"], [0, "&gesdoto;"], [0, "&lesdotor;"], [0, "&gesdotol;"], [0, "&lap;"], [0, "&gap;"], [0, "&lne;"], [0, "&gne;"], [0, "&lnap;"], [0, "&gnap;"], [0, "&lEg;"], [0, "&gEl;"], [0, "&lsime;"], [0, "&gsime;"], [0, "&lsimg;"], [0, "&gsiml;"], [0, "&lgE;"], [0, "&glE;"], [0, "&lesges;"], [0, "&gesles;"], [0, "&els;"], [0, "&egs;"], [0, "&elsdot;"], [0, "&egsdot;"], [0, "&el;"], [0, "&eg;"], [2, "&siml;"], [0, "&simg;"], [0, "&simlE;"], [0, "&simgE;"], [0, { v: "&LessLess;", n: 824, o: "&NotNestedLessLess;" }], [0, { v: "&GreaterGreater;", n: 824, o: "&NotNestedGreaterGreater;" }], [1, "&glj;"], [0, "&gla;"], [0, "&ltcc;"], [0, "&gtcc;"], [0, "&lescc;"], [0, "&gescc;"], [0, "&smt;"], [0, "&lat;"], [0, { v: "&smte;", n: 65024, o: "&smtes;" }], [0, { v: "&late;", n: 65024, o: "&lates;" }], [0, "&bumpE;"], [0, { v: "&PrecedesEqual;", n: 824, o: "&NotPrecedesEqual;" }], [0, { v: "&sce;", n: 824, o: "&NotSucceedsEqual;" }], [2, "&prE;"], [0, "&scE;"], [0, "&precneqq;"], [0, "&scnE;"], [0, "&prap;"], [0, "&scap;"], [0, "&precnapprox;"], [0, "&scnap;"], [0, "&Pr;"], [0, "&Sc;"], [0, "&subdot;"], [0, "&supdot;"], [0, "&subplus;"], [0, "&supplus;"], [0, "&submult;"], [0, "&supmult;"], [0, "&subedot;"], [0, "&supedot;"], [0, { v: "&subE;", n: 824, o: "&nsubE;" }], [0, { v: "&supE;", n: 824, o: "&nsupE;" }], [0, "&subsim;"], [0, "&supsim;"], [2, { v: "&subnE;", n: 65024, o: "&varsubsetneqq;" }], [0, { v: "&supnE;", n: 65024, o: "&varsupsetneqq;" }], [2, "&csub;"], [0, "&csup;"], [0, "&csube;"], [0, "&csupe;"], [0, "&subsup;"], [0, "&supsub;"], [0, "&subsub;"], [0, "&supsup;"], [0, "&suphsub;"], [0, "&supdsub;"], [0, "&forkv;"], [0, "&topfork;"], [0, "&mlcp;"], [8, "&Dashv;"], [1, "&Vdashl;"], [0, "&Barv;"], [0, "&vBar;"], [0, "&vBarv;"], [1, "&Vbar;"], [0, "&Not;"], [0, "&bNot;"], [0, "&rnmid;"], [0, "&cirmid;"], [0, "&midcir;"], [0, "&topcir;"], [0, "&nhpar;"], [0, "&parsim;"], [9, { v: "&parsl;", n: 8421, o: "&nparsl;" }], [44343, { n: new Map(/* @__PURE__ */ restoreDiff([[56476, "&Ascr;"], [1, "&Cscr;"], [0, "&Dscr;"], [2, "&Gscr;"], [2, "&Jscr;"], [0, "&Kscr;"], [2, "&Nscr;"], [0, "&Oscr;"], [0, "&Pscr;"], [0, "&Qscr;"], [1, "&Sscr;"], [0, "&Tscr;"], [0, "&Uscr;"], [0, "&Vscr;"], [0, "&Wscr;"], [0, "&Xscr;"], [0, "&Yscr;"], [0, "&Zscr;"], [0, "&ascr;"], [0, "&bscr;"], [0, "&cscr;"], [0, "&dscr;"], [1, "&fscr;"], [1, "&hscr;"], [0, "&iscr;"], [0, "&jscr;"], [0, "&kscr;"], [0, "&lscr;"], [0, "&mscr;"], [0, "&nscr;"], [1, "&pscr;"], [0, "&qscr;"], [0, "&rscr;"], [0, "&sscr;"], [0, "&tscr;"], [0, "&uscr;"], [0, "&vscr;"], [0, "&wscr;"], [0, "&xscr;"], [0, "&yscr;"], [0, "&zscr;"], [52, "&Afr;"], [0, "&Bfr;"], [1, "&Dfr;"], [0, "&Efr;"], [0, "&Ffr;"], [0, "&Gfr;"], [2, "&Jfr;"], [0, "&Kfr;"], [0, "&Lfr;"], [0, "&Mfr;"], [0, "&Nfr;"], [0, "&Ofr;"], [0, "&Pfr;"], [0, "&Qfr;"], [1, "&Sfr;"], [0, "&Tfr;"], [0, "&Ufr;"], [0, "&Vfr;"], [0, "&Wfr;"], [0, "&Xfr;"], [0, "&Yfr;"], [1, "&afr;"], [0, "&bfr;"], [0, "&cfr;"], [0, "&dfr;"], [0, "&efr;"], [0, "&ffr;"], [0, "&gfr;"], [0, "&hfr;"], [0, "&ifr;"], [0, "&jfr;"], [0, "&kfr;"], [0, "&lfr;"], [0, "&mfr;"], [0, "&nfr;"], [0, "&ofr;"], [0, "&pfr;"], [0, "&qfr;"], [0, "&rfr;"], [0, "&sfr;"], [0, "&tfr;"], [0, "&ufr;"], [0, "&vfr;"], [0, "&wfr;"], [0, "&xfr;"], [0, "&yfr;"], [0, "&zfr;"], [0, "&Aopf;"], [0, "&Bopf;"], [1, "&Dopf;"], [0, "&Eopf;"], [0, "&Fopf;"], [0, "&Gopf;"], [1, "&Iopf;"], [0, "&Jopf;"], [0, "&Kopf;"], [0, "&Lopf;"], [0, "&Mopf;"], [1, "&Oopf;"], [3, "&Sopf;"], [0, "&Topf;"], [0, "&Uopf;"], [0, "&Vopf;"], [0, "&Wopf;"], [0, "&Xopf;"], [0, "&Yopf;"], [1, "&aopf;"], [0, "&bopf;"], [0, "&copf;"], [0, "&dopf;"], [0, "&eopf;"], [0, "&fopf;"], [0, "&gopf;"], [0, "&hopf;"], [0, "&iopf;"], [0, "&jopf;"], [0, "&kopf;"], [0, "&lopf;"], [0, "&mopf;"], [0, "&nopf;"], [0, "&oopf;"], [0, "&popf;"], [0, "&qopf;"], [0, "&ropf;"], [0, "&sopf;"], [0, "&topf;"], [0, "&uopf;"], [0, "&vopf;"], [0, "&wopf;"], [0, "&xopf;"], [0, "&yopf;"], [0, "&zopf;"]])) }], [8906, "&fflig;"], [0, "&filig;"], [0, "&fllig;"], [0, "&ffilig;"], [0, "&ffllig;"]]));
    }
  });

  // node_modules/entities/lib/escape.js
  var require_escape = __commonJS({
    "node_modules/entities/lib/escape.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.escapeText = exports.escapeAttribute = exports.escapeUTF8 = exports.escape = exports.encodeXML = exports.getCodePoint = exports.xmlReplacer = void 0;
      exports.xmlReplacer = /["&'<>$\x80-\uFFFF]/g;
      var xmlCodeMap = /* @__PURE__ */ new Map([
        [34, "&quot;"],
        [38, "&amp;"],
        [39, "&apos;"],
        [60, "&lt;"],
        [62, "&gt;"]
      ]);
      exports.getCodePoint = // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      String.prototype.codePointAt != null ? function(str, index) {
        return str.codePointAt(index);
      } : (
        // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
        function(c, index) {
          return (c.charCodeAt(index) & 64512) === 55296 ? (c.charCodeAt(index) - 55296) * 1024 + c.charCodeAt(index + 1) - 56320 + 65536 : c.charCodeAt(index);
        }
      );
      function encodeXML(str) {
        var ret = "";
        var lastIdx = 0;
        var match;
        while ((match = exports.xmlReplacer.exec(str)) !== null) {
          var i = match.index;
          var char = str.charCodeAt(i);
          var next = xmlCodeMap.get(char);
          if (next !== void 0) {
            ret += str.substring(lastIdx, i) + next;
            lastIdx = i + 1;
          } else {
            ret += "".concat(str.substring(lastIdx, i), "&#x").concat((0, exports.getCodePoint)(str, i).toString(16), ";");
            lastIdx = exports.xmlReplacer.lastIndex += Number((char & 64512) === 55296);
          }
        }
        return ret + str.substr(lastIdx);
      }
      exports.encodeXML = encodeXML;
      exports.escape = encodeXML;
      function getEscaper(regex, map) {
        return function escape(data) {
          var match;
          var lastIdx = 0;
          var result = "";
          while (match = regex.exec(data)) {
            if (lastIdx !== match.index) {
              result += data.substring(lastIdx, match.index);
            }
            result += map.get(match[0].charCodeAt(0));
            lastIdx = match.index + 1;
          }
          return result + data.substring(lastIdx);
        };
      }
      exports.escapeUTF8 = getEscaper(/[&<>'"]/g, xmlCodeMap);
      exports.escapeAttribute = getEscaper(/["&\u00A0]/g, /* @__PURE__ */ new Map([
        [34, "&quot;"],
        [38, "&amp;"],
        [160, "&nbsp;"]
      ]));
      exports.escapeText = getEscaper(/[&<>\u00A0]/g, /* @__PURE__ */ new Map([
        [38, "&amp;"],
        [60, "&lt;"],
        [62, "&gt;"],
        [160, "&nbsp;"]
      ]));
    }
  });

  // node_modules/entities/lib/encode.js
  var require_encode = __commonJS({
    "node_modules/entities/lib/encode.js"(exports) {
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.encodeNonAsciiHTML = exports.encodeHTML = void 0;
      var encode_html_js_1 = __importDefault(require_encode_html());
      var escape_js_1 = require_escape();
      var htmlReplacer = /[\t\n!-,./:-@[-`\f{-}$\x80-\uFFFF]/g;
      function encodeHTML(data) {
        return encodeHTMLTrieRe(htmlReplacer, data);
      }
      exports.encodeHTML = encodeHTML;
      function encodeNonAsciiHTML(data) {
        return encodeHTMLTrieRe(escape_js_1.xmlReplacer, data);
      }
      exports.encodeNonAsciiHTML = encodeNonAsciiHTML;
      function encodeHTMLTrieRe(regExp, str) {
        var ret = "";
        var lastIdx = 0;
        var match;
        while ((match = regExp.exec(str)) !== null) {
          var i = match.index;
          ret += str.substring(lastIdx, i);
          var char = str.charCodeAt(i);
          var next = encode_html_js_1.default.get(char);
          if (typeof next === "object") {
            if (i + 1 < str.length) {
              var nextChar = str.charCodeAt(i + 1);
              var value = typeof next.n === "number" ? next.n === nextChar ? next.o : void 0 : next.n.get(nextChar);
              if (value !== void 0) {
                ret += value;
                lastIdx = regExp.lastIndex += 1;
                continue;
              }
            }
            next = next.v;
          }
          if (next !== void 0) {
            ret += next;
            lastIdx = i + 1;
          } else {
            var cp = (0, escape_js_1.getCodePoint)(str, i);
            ret += "&#x".concat(cp.toString(16), ";");
            lastIdx = regExp.lastIndex += Number(cp !== char);
          }
        }
        return ret + str.substr(lastIdx);
      }
    }
  });

  // node_modules/entities/lib/index.js
  var require_lib3 = __commonJS({
    "node_modules/entities/lib/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.decodeXMLStrict = exports.decodeHTML5Strict = exports.decodeHTML4Strict = exports.decodeHTML5 = exports.decodeHTML4 = exports.decodeHTMLAttribute = exports.decodeHTMLStrict = exports.decodeHTML = exports.decodeXML = exports.DecodingMode = exports.EntityDecoder = exports.encodeHTML5 = exports.encodeHTML4 = exports.encodeNonAsciiHTML = exports.encodeHTML = exports.escapeText = exports.escapeAttribute = exports.escapeUTF8 = exports.escape = exports.encodeXML = exports.encode = exports.decodeStrict = exports.decode = exports.EncodingMode = exports.EntityLevel = void 0;
      var decode_js_1 = require_decode();
      var encode_js_1 = require_encode();
      var escape_js_1 = require_escape();
      var EntityLevel;
      (function(EntityLevel2) {
        EntityLevel2[EntityLevel2["XML"] = 0] = "XML";
        EntityLevel2[EntityLevel2["HTML"] = 1] = "HTML";
      })(EntityLevel = exports.EntityLevel || (exports.EntityLevel = {}));
      var EncodingMode;
      (function(EncodingMode2) {
        EncodingMode2[EncodingMode2["UTF8"] = 0] = "UTF8";
        EncodingMode2[EncodingMode2["ASCII"] = 1] = "ASCII";
        EncodingMode2[EncodingMode2["Extensive"] = 2] = "Extensive";
        EncodingMode2[EncodingMode2["Attribute"] = 3] = "Attribute";
        EncodingMode2[EncodingMode2["Text"] = 4] = "Text";
      })(EncodingMode = exports.EncodingMode || (exports.EncodingMode = {}));
      function decode(data, options) {
        if (options === void 0) {
          options = EntityLevel.XML;
        }
        var level = typeof options === "number" ? options : options.level;
        if (level === EntityLevel.HTML) {
          var mode = typeof options === "object" ? options.mode : void 0;
          return (0, decode_js_1.decodeHTML)(data, mode);
        }
        return (0, decode_js_1.decodeXML)(data);
      }
      exports.decode = decode;
      function decodeStrict(data, options) {
        var _a;
        if (options === void 0) {
          options = EntityLevel.XML;
        }
        var opts = typeof options === "number" ? { level: options } : options;
        (_a = opts.mode) !== null && _a !== void 0 ? _a : opts.mode = decode_js_1.DecodingMode.Strict;
        return decode(data, opts);
      }
      exports.decodeStrict = decodeStrict;
      function encode(data, options) {
        if (options === void 0) {
          options = EntityLevel.XML;
        }
        var opts = typeof options === "number" ? { level: options } : options;
        if (opts.mode === EncodingMode.UTF8)
          return (0, escape_js_1.escapeUTF8)(data);
        if (opts.mode === EncodingMode.Attribute)
          return (0, escape_js_1.escapeAttribute)(data);
        if (opts.mode === EncodingMode.Text)
          return (0, escape_js_1.escapeText)(data);
        if (opts.level === EntityLevel.HTML) {
          if (opts.mode === EncodingMode.ASCII) {
            return (0, encode_js_1.encodeNonAsciiHTML)(data);
          }
          return (0, encode_js_1.encodeHTML)(data);
        }
        return (0, escape_js_1.encodeXML)(data);
      }
      exports.encode = encode;
      var escape_js_2 = require_escape();
      Object.defineProperty(exports, "encodeXML", { enumerable: true, get: function() {
        return escape_js_2.encodeXML;
      } });
      Object.defineProperty(exports, "escape", { enumerable: true, get: function() {
        return escape_js_2.escape;
      } });
      Object.defineProperty(exports, "escapeUTF8", { enumerable: true, get: function() {
        return escape_js_2.escapeUTF8;
      } });
      Object.defineProperty(exports, "escapeAttribute", { enumerable: true, get: function() {
        return escape_js_2.escapeAttribute;
      } });
      Object.defineProperty(exports, "escapeText", { enumerable: true, get: function() {
        return escape_js_2.escapeText;
      } });
      var encode_js_2 = require_encode();
      Object.defineProperty(exports, "encodeHTML", { enumerable: true, get: function() {
        return encode_js_2.encodeHTML;
      } });
      Object.defineProperty(exports, "encodeNonAsciiHTML", { enumerable: true, get: function() {
        return encode_js_2.encodeNonAsciiHTML;
      } });
      Object.defineProperty(exports, "encodeHTML4", { enumerable: true, get: function() {
        return encode_js_2.encodeHTML;
      } });
      Object.defineProperty(exports, "encodeHTML5", { enumerable: true, get: function() {
        return encode_js_2.encodeHTML;
      } });
      var decode_js_2 = require_decode();
      Object.defineProperty(exports, "EntityDecoder", { enumerable: true, get: function() {
        return decode_js_2.EntityDecoder;
      } });
      Object.defineProperty(exports, "DecodingMode", { enumerable: true, get: function() {
        return decode_js_2.DecodingMode;
      } });
      Object.defineProperty(exports, "decodeXML", { enumerable: true, get: function() {
        return decode_js_2.decodeXML;
      } });
      Object.defineProperty(exports, "decodeHTML", { enumerable: true, get: function() {
        return decode_js_2.decodeHTML;
      } });
      Object.defineProperty(exports, "decodeHTMLStrict", { enumerable: true, get: function() {
        return decode_js_2.decodeHTMLStrict;
      } });
      Object.defineProperty(exports, "decodeHTMLAttribute", { enumerable: true, get: function() {
        return decode_js_2.decodeHTMLAttribute;
      } });
      Object.defineProperty(exports, "decodeHTML4", { enumerable: true, get: function() {
        return decode_js_2.decodeHTML;
      } });
      Object.defineProperty(exports, "decodeHTML5", { enumerable: true, get: function() {
        return decode_js_2.decodeHTML;
      } });
      Object.defineProperty(exports, "decodeHTML4Strict", { enumerable: true, get: function() {
        return decode_js_2.decodeHTMLStrict;
      } });
      Object.defineProperty(exports, "decodeHTML5Strict", { enumerable: true, get: function() {
        return decode_js_2.decodeHTMLStrict;
      } });
      Object.defineProperty(exports, "decodeXMLStrict", { enumerable: true, get: function() {
        return decode_js_2.decodeXML;
      } });
    }
  });

  // node_modules/dom-serializer/lib/foreignNames.js
  var require_foreignNames = __commonJS({
    "node_modules/dom-serializer/lib/foreignNames.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.attributeNames = exports.elementNames = void 0;
      exports.elementNames = new Map([
        "altGlyph",
        "altGlyphDef",
        "altGlyphItem",
        "animateColor",
        "animateMotion",
        "animateTransform",
        "clipPath",
        "feBlend",
        "feColorMatrix",
        "feComponentTransfer",
        "feComposite",
        "feConvolveMatrix",
        "feDiffuseLighting",
        "feDisplacementMap",
        "feDistantLight",
        "feDropShadow",
        "feFlood",
        "feFuncA",
        "feFuncB",
        "feFuncG",
        "feFuncR",
        "feGaussianBlur",
        "feImage",
        "feMerge",
        "feMergeNode",
        "feMorphology",
        "feOffset",
        "fePointLight",
        "feSpecularLighting",
        "feSpotLight",
        "feTile",
        "feTurbulence",
        "foreignObject",
        "glyphRef",
        "linearGradient",
        "radialGradient",
        "textPath"
      ].map(function(val) {
        return [val.toLowerCase(), val];
      }));
      exports.attributeNames = new Map([
        "definitionURL",
        "attributeName",
        "attributeType",
        "baseFrequency",
        "baseProfile",
        "calcMode",
        "clipPathUnits",
        "diffuseConstant",
        "edgeMode",
        "filterUnits",
        "glyphRef",
        "gradientTransform",
        "gradientUnits",
        "kernelMatrix",
        "kernelUnitLength",
        "keyPoints",
        "keySplines",
        "keyTimes",
        "lengthAdjust",
        "limitingConeAngle",
        "markerHeight",
        "markerUnits",
        "markerWidth",
        "maskContentUnits",
        "maskUnits",
        "numOctaves",
        "pathLength",
        "patternContentUnits",
        "patternTransform",
        "patternUnits",
        "pointsAtX",
        "pointsAtY",
        "pointsAtZ",
        "preserveAlpha",
        "preserveAspectRatio",
        "primitiveUnits",
        "refX",
        "refY",
        "repeatCount",
        "repeatDur",
        "requiredExtensions",
        "requiredFeatures",
        "specularConstant",
        "specularExponent",
        "spreadMethod",
        "startOffset",
        "stdDeviation",
        "stitchTiles",
        "surfaceScale",
        "systemLanguage",
        "tableValues",
        "targetX",
        "targetY",
        "textLength",
        "viewBox",
        "viewTarget",
        "xChannelSelector",
        "yChannelSelector",
        "zoomAndPan"
      ].map(function(val) {
        return [val.toLowerCase(), val];
      }));
    }
  });

  // node_modules/dom-serializer/lib/index.js
  var require_lib4 = __commonJS({
    "node_modules/dom-serializer/lib/index.js"(exports) {
      "use strict";
      var __assign = exports && exports.__assign || function() {
        __assign = Object.assign || function(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s)
              if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
          }
          return t;
        };
        return __assign.apply(this, arguments);
      };
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports && exports.__importStar || function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.render = void 0;
      var ElementType = __importStar(require_lib());
      var entities_1 = require_lib3();
      var foreignNames_js_1 = require_foreignNames();
      var unencodedElements = /* @__PURE__ */ new Set([
        "style",
        "script",
        "xmp",
        "iframe",
        "noembed",
        "noframes",
        "plaintext",
        "noscript"
      ]);
      function replaceQuotes(value) {
        return value.replace(/"/g, "&quot;");
      }
      function formatAttributes(attributes, opts) {
        var _a;
        if (!attributes)
          return;
        var encode = ((_a = opts.encodeEntities) !== null && _a !== void 0 ? _a : opts.decodeEntities) === false ? replaceQuotes : opts.xmlMode || opts.encodeEntities !== "utf8" ? entities_1.encodeXML : entities_1.escapeAttribute;
        return Object.keys(attributes).map(function(key) {
          var _a2, _b;
          var value = (_a2 = attributes[key]) !== null && _a2 !== void 0 ? _a2 : "";
          if (opts.xmlMode === "foreign") {
            key = (_b = foreignNames_js_1.attributeNames.get(key)) !== null && _b !== void 0 ? _b : key;
          }
          if (!opts.emptyAttrs && !opts.xmlMode && value === "") {
            return key;
          }
          return "".concat(key, '="').concat(encode(value), '"');
        }).join(" ");
      }
      var singleTag = /* @__PURE__ */ new Set([
        "area",
        "base",
        "basefont",
        "br",
        "col",
        "command",
        "embed",
        "frame",
        "hr",
        "img",
        "input",
        "isindex",
        "keygen",
        "link",
        "meta",
        "param",
        "source",
        "track",
        "wbr"
      ]);
      function render(node, options) {
        if (options === void 0) {
          options = {};
        }
        var nodes = "length" in node ? node : [node];
        var output = "";
        for (var i = 0; i < nodes.length; i++) {
          output += renderNode(nodes[i], options);
        }
        return output;
      }
      exports.render = render;
      exports.default = render;
      function renderNode(node, options) {
        switch (node.type) {
          case ElementType.Root:
            return render(node.children, options);
          case ElementType.Doctype:
          case ElementType.Directive:
            return renderDirective(node);
          case ElementType.Comment:
            return renderComment(node);
          case ElementType.CDATA:
            return renderCdata(node);
          case ElementType.Script:
          case ElementType.Style:
          case ElementType.Tag:
            return renderTag(node, options);
          case ElementType.Text:
            return renderText(node, options);
        }
      }
      var foreignModeIntegrationPoints = /* @__PURE__ */ new Set([
        "mi",
        "mo",
        "mn",
        "ms",
        "mtext",
        "annotation-xml",
        "foreignObject",
        "desc",
        "title"
      ]);
      var foreignElements = /* @__PURE__ */ new Set(["svg", "math"]);
      function renderTag(elem, opts) {
        var _a;
        if (opts.xmlMode === "foreign") {
          elem.name = (_a = foreignNames_js_1.elementNames.get(elem.name)) !== null && _a !== void 0 ? _a : elem.name;
          if (elem.parent && foreignModeIntegrationPoints.has(elem.parent.name)) {
            opts = __assign(__assign({}, opts), { xmlMode: false });
          }
        }
        if (!opts.xmlMode && foreignElements.has(elem.name)) {
          opts = __assign(__assign({}, opts), { xmlMode: "foreign" });
        }
        var tag = "<".concat(elem.name);
        var attribs = formatAttributes(elem.attribs, opts);
        if (attribs) {
          tag += " ".concat(attribs);
        }
        if (elem.children.length === 0 && (opts.xmlMode ? (
          // In XML mode or foreign mode, and user hasn't explicitly turned off self-closing tags
          opts.selfClosingTags !== false
        ) : (
          // User explicitly asked for self-closing tags, even in HTML mode
          opts.selfClosingTags && singleTag.has(elem.name)
        ))) {
          if (!opts.xmlMode)
            tag += " ";
          tag += "/>";
        } else {
          tag += ">";
          if (elem.children.length > 0) {
            tag += render(elem.children, opts);
          }
          if (opts.xmlMode || !singleTag.has(elem.name)) {
            tag += "</".concat(elem.name, ">");
          }
        }
        return tag;
      }
      function renderDirective(elem) {
        return "<".concat(elem.data, ">");
      }
      function renderText(elem, opts) {
        var _a;
        var data = elem.data || "";
        if (((_a = opts.encodeEntities) !== null && _a !== void 0 ? _a : opts.decodeEntities) !== false && !(!opts.xmlMode && elem.parent && unencodedElements.has(elem.parent.name))) {
          data = opts.xmlMode || opts.encodeEntities !== "utf8" ? (0, entities_1.encodeXML)(data) : (0, entities_1.escapeText)(data);
        }
        return data;
      }
      function renderCdata(elem) {
        return "<![CDATA[".concat(elem.children[0].data, "]]>");
      }
      function renderComment(elem) {
        return "<!--".concat(elem.data, "-->");
      }
    }
  });

  // node_modules/domutils/lib/stringify.js
  var require_stringify = __commonJS({
    "node_modules/domutils/lib/stringify.js"(exports) {
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.innerText = exports.textContent = exports.getText = exports.getInnerHTML = exports.getOuterHTML = void 0;
      var domhandler_1 = require_lib2();
      var dom_serializer_1 = __importDefault(require_lib4());
      var domelementtype_1 = require_lib();
      function getOuterHTML(node, options) {
        return (0, dom_serializer_1.default)(node, options);
      }
      exports.getOuterHTML = getOuterHTML;
      function getInnerHTML(node, options) {
        return (0, domhandler_1.hasChildren)(node) ? node.children.map(function(node2) {
          return getOuterHTML(node2, options);
        }).join("") : "";
      }
      exports.getInnerHTML = getInnerHTML;
      function getText(node) {
        if (Array.isArray(node))
          return node.map(getText).join("");
        if ((0, domhandler_1.isTag)(node))
          return node.name === "br" ? "\n" : getText(node.children);
        if ((0, domhandler_1.isCDATA)(node))
          return getText(node.children);
        if ((0, domhandler_1.isText)(node))
          return node.data;
        return "";
      }
      exports.getText = getText;
      function textContent(node) {
        if (Array.isArray(node))
          return node.map(textContent).join("");
        if ((0, domhandler_1.hasChildren)(node) && !(0, domhandler_1.isComment)(node)) {
          return textContent(node.children);
        }
        if ((0, domhandler_1.isText)(node))
          return node.data;
        return "";
      }
      exports.textContent = textContent;
      function innerText(node) {
        if (Array.isArray(node))
          return node.map(innerText).join("");
        if ((0, domhandler_1.hasChildren)(node) && (node.type === domelementtype_1.ElementType.Tag || (0, domhandler_1.isCDATA)(node))) {
          return innerText(node.children);
        }
        if ((0, domhandler_1.isText)(node))
          return node.data;
        return "";
      }
      exports.innerText = innerText;
    }
  });

  // node_modules/domutils/lib/traversal.js
  var require_traversal = __commonJS({
    "node_modules/domutils/lib/traversal.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.prevElementSibling = exports.nextElementSibling = exports.getName = exports.hasAttrib = exports.getAttributeValue = exports.getSiblings = exports.getParent = exports.getChildren = void 0;
      var domhandler_1 = require_lib2();
      function getChildren(elem) {
        return (0, domhandler_1.hasChildren)(elem) ? elem.children : [];
      }
      exports.getChildren = getChildren;
      function getParent(elem) {
        return elem.parent || null;
      }
      exports.getParent = getParent;
      function getSiblings(elem) {
        var _a, _b;
        var parent = getParent(elem);
        if (parent != null)
          return getChildren(parent);
        var siblings = [elem];
        var prev = elem.prev, next = elem.next;
        while (prev != null) {
          siblings.unshift(prev);
          _a = prev, prev = _a.prev;
        }
        while (next != null) {
          siblings.push(next);
          _b = next, next = _b.next;
        }
        return siblings;
      }
      exports.getSiblings = getSiblings;
      function getAttributeValue(elem, name) {
        var _a;
        return (_a = elem.attribs) === null || _a === void 0 ? void 0 : _a[name];
      }
      exports.getAttributeValue = getAttributeValue;
      function hasAttrib(elem, name) {
        return elem.attribs != null && Object.prototype.hasOwnProperty.call(elem.attribs, name) && elem.attribs[name] != null;
      }
      exports.hasAttrib = hasAttrib;
      function getName(elem) {
        return elem.name;
      }
      exports.getName = getName;
      function nextElementSibling(elem) {
        var _a;
        var next = elem.next;
        while (next !== null && !(0, domhandler_1.isTag)(next))
          _a = next, next = _a.next;
        return next;
      }
      exports.nextElementSibling = nextElementSibling;
      function prevElementSibling(elem) {
        var _a;
        var prev = elem.prev;
        while (prev !== null && !(0, domhandler_1.isTag)(prev))
          _a = prev, prev = _a.prev;
        return prev;
      }
      exports.prevElementSibling = prevElementSibling;
    }
  });

  // node_modules/domutils/lib/manipulation.js
  var require_manipulation = __commonJS({
    "node_modules/domutils/lib/manipulation.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.prepend = exports.prependChild = exports.append = exports.appendChild = exports.replaceElement = exports.removeElement = void 0;
      function removeElement(elem) {
        if (elem.prev)
          elem.prev.next = elem.next;
        if (elem.next)
          elem.next.prev = elem.prev;
        if (elem.parent) {
          var childs = elem.parent.children;
          var childsIndex = childs.lastIndexOf(elem);
          if (childsIndex >= 0) {
            childs.splice(childsIndex, 1);
          }
        }
        elem.next = null;
        elem.prev = null;
        elem.parent = null;
      }
      exports.removeElement = removeElement;
      function replaceElement(elem, replacement) {
        var prev = replacement.prev = elem.prev;
        if (prev) {
          prev.next = replacement;
        }
        var next = replacement.next = elem.next;
        if (next) {
          next.prev = replacement;
        }
        var parent = replacement.parent = elem.parent;
        if (parent) {
          var childs = parent.children;
          childs[childs.lastIndexOf(elem)] = replacement;
          elem.parent = null;
        }
      }
      exports.replaceElement = replaceElement;
      function appendChild(parent, child) {
        removeElement(child);
        child.next = null;
        child.parent = parent;
        if (parent.children.push(child) > 1) {
          var sibling = parent.children[parent.children.length - 2];
          sibling.next = child;
          child.prev = sibling;
        } else {
          child.prev = null;
        }
      }
      exports.appendChild = appendChild;
      function append(elem, next) {
        removeElement(next);
        var parent = elem.parent;
        var currNext = elem.next;
        next.next = currNext;
        next.prev = elem;
        elem.next = next;
        next.parent = parent;
        if (currNext) {
          currNext.prev = next;
          if (parent) {
            var childs = parent.children;
            childs.splice(childs.lastIndexOf(currNext), 0, next);
          }
        } else if (parent) {
          parent.children.push(next);
        }
      }
      exports.append = append;
      function prependChild(parent, child) {
        removeElement(child);
        child.parent = parent;
        child.prev = null;
        if (parent.children.unshift(child) !== 1) {
          var sibling = parent.children[1];
          sibling.prev = child;
          child.next = sibling;
        } else {
          child.next = null;
        }
      }
      exports.prependChild = prependChild;
      function prepend(elem, prev) {
        removeElement(prev);
        var parent = elem.parent;
        if (parent) {
          var childs = parent.children;
          childs.splice(childs.indexOf(elem), 0, prev);
        }
        if (elem.prev) {
          elem.prev.next = prev;
        }
        prev.parent = parent;
        prev.prev = elem.prev;
        prev.next = elem;
        elem.prev = prev;
      }
      exports.prepend = prepend;
    }
  });

  // node_modules/domutils/lib/querying.js
  var require_querying = __commonJS({
    "node_modules/domutils/lib/querying.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.findAll = exports.existsOne = exports.findOne = exports.findOneChild = exports.find = exports.filter = void 0;
      var domhandler_1 = require_lib2();
      function filter(test, node, recurse, limit) {
        if (recurse === void 0) {
          recurse = true;
        }
        if (limit === void 0) {
          limit = Infinity;
        }
        return find(test, Array.isArray(node) ? node : [node], recurse, limit);
      }
      exports.filter = filter;
      function find(test, nodes, recurse, limit) {
        var result = [];
        var nodeStack = [nodes];
        var indexStack = [0];
        for (; ; ) {
          if (indexStack[0] >= nodeStack[0].length) {
            if (indexStack.length === 1) {
              return result;
            }
            nodeStack.shift();
            indexStack.shift();
            continue;
          }
          var elem = nodeStack[0][indexStack[0]++];
          if (test(elem)) {
            result.push(elem);
            if (--limit <= 0)
              return result;
          }
          if (recurse && (0, domhandler_1.hasChildren)(elem) && elem.children.length > 0) {
            indexStack.unshift(0);
            nodeStack.unshift(elem.children);
          }
        }
      }
      exports.find = find;
      function findOneChild(test, nodes) {
        return nodes.find(test);
      }
      exports.findOneChild = findOneChild;
      function findOne(test, nodes, recurse) {
        if (recurse === void 0) {
          recurse = true;
        }
        var elem = null;
        for (var i = 0; i < nodes.length && !elem; i++) {
          var node = nodes[i];
          if (!(0, domhandler_1.isTag)(node)) {
            continue;
          } else if (test(node)) {
            elem = node;
          } else if (recurse && node.children.length > 0) {
            elem = findOne(test, node.children, true);
          }
        }
        return elem;
      }
      exports.findOne = findOne;
      function existsOne(test, nodes) {
        return nodes.some(function(checked) {
          return (0, domhandler_1.isTag)(checked) && (test(checked) || existsOne(test, checked.children));
        });
      }
      exports.existsOne = existsOne;
      function findAll(test, nodes) {
        var result = [];
        var nodeStack = [nodes];
        var indexStack = [0];
        for (; ; ) {
          if (indexStack[0] >= nodeStack[0].length) {
            if (nodeStack.length === 1) {
              return result;
            }
            nodeStack.shift();
            indexStack.shift();
            continue;
          }
          var elem = nodeStack[0][indexStack[0]++];
          if (!(0, domhandler_1.isTag)(elem))
            continue;
          if (test(elem))
            result.push(elem);
          if (elem.children.length > 0) {
            indexStack.unshift(0);
            nodeStack.unshift(elem.children);
          }
        }
      }
      exports.findAll = findAll;
    }
  });

  // node_modules/domutils/lib/legacy.js
  var require_legacy = __commonJS({
    "node_modules/domutils/lib/legacy.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.getElementsByTagType = exports.getElementsByTagName = exports.getElementById = exports.getElements = exports.testElement = void 0;
      var domhandler_1 = require_lib2();
      var querying_js_1 = require_querying();
      var Checks = {
        tag_name: function(name) {
          if (typeof name === "function") {
            return function(elem) {
              return (0, domhandler_1.isTag)(elem) && name(elem.name);
            };
          } else if (name === "*") {
            return domhandler_1.isTag;
          }
          return function(elem) {
            return (0, domhandler_1.isTag)(elem) && elem.name === name;
          };
        },
        tag_type: function(type) {
          if (typeof type === "function") {
            return function(elem) {
              return type(elem.type);
            };
          }
          return function(elem) {
            return elem.type === type;
          };
        },
        tag_contains: function(data) {
          if (typeof data === "function") {
            return function(elem) {
              return (0, domhandler_1.isText)(elem) && data(elem.data);
            };
          }
          return function(elem) {
            return (0, domhandler_1.isText)(elem) && elem.data === data;
          };
        }
      };
      function getAttribCheck(attrib, value) {
        if (typeof value === "function") {
          return function(elem) {
            return (0, domhandler_1.isTag)(elem) && value(elem.attribs[attrib]);
          };
        }
        return function(elem) {
          return (0, domhandler_1.isTag)(elem) && elem.attribs[attrib] === value;
        };
      }
      function combineFuncs(a, b) {
        return function(elem) {
          return a(elem) || b(elem);
        };
      }
      function compileTest(options) {
        var funcs = Object.keys(options).map(function(key) {
          var value = options[key];
          return Object.prototype.hasOwnProperty.call(Checks, key) ? Checks[key](value) : getAttribCheck(key, value);
        });
        return funcs.length === 0 ? null : funcs.reduce(combineFuncs);
      }
      function testElement(options, node) {
        var test = compileTest(options);
        return test ? test(node) : true;
      }
      exports.testElement = testElement;
      function getElements(options, nodes, recurse, limit) {
        if (limit === void 0) {
          limit = Infinity;
        }
        var test = compileTest(options);
        return test ? (0, querying_js_1.filter)(test, nodes, recurse, limit) : [];
      }
      exports.getElements = getElements;
      function getElementById(id, nodes, recurse) {
        if (recurse === void 0) {
          recurse = true;
        }
        if (!Array.isArray(nodes))
          nodes = [nodes];
        return (0, querying_js_1.findOne)(getAttribCheck("id", id), nodes, recurse);
      }
      exports.getElementById = getElementById;
      function getElementsByTagName(tagName, nodes, recurse, limit) {
        if (recurse === void 0) {
          recurse = true;
        }
        if (limit === void 0) {
          limit = Infinity;
        }
        return (0, querying_js_1.filter)(Checks["tag_name"](tagName), nodes, recurse, limit);
      }
      exports.getElementsByTagName = getElementsByTagName;
      function getElementsByTagType(type, nodes, recurse, limit) {
        if (recurse === void 0) {
          recurse = true;
        }
        if (limit === void 0) {
          limit = Infinity;
        }
        return (0, querying_js_1.filter)(Checks["tag_type"](type), nodes, recurse, limit);
      }
      exports.getElementsByTagType = getElementsByTagType;
    }
  });

  // node_modules/domutils/lib/helpers.js
  var require_helpers = __commonJS({
    "node_modules/domutils/lib/helpers.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.uniqueSort = exports.compareDocumentPosition = exports.DocumentPosition = exports.removeSubsets = void 0;
      var domhandler_1 = require_lib2();
      function removeSubsets(nodes) {
        var idx = nodes.length;
        while (--idx >= 0) {
          var node = nodes[idx];
          if (idx > 0 && nodes.lastIndexOf(node, idx - 1) >= 0) {
            nodes.splice(idx, 1);
            continue;
          }
          for (var ancestor = node.parent; ancestor; ancestor = ancestor.parent) {
            if (nodes.includes(ancestor)) {
              nodes.splice(idx, 1);
              break;
            }
          }
        }
        return nodes;
      }
      exports.removeSubsets = removeSubsets;
      var DocumentPosition;
      (function(DocumentPosition2) {
        DocumentPosition2[DocumentPosition2["DISCONNECTED"] = 1] = "DISCONNECTED";
        DocumentPosition2[DocumentPosition2["PRECEDING"] = 2] = "PRECEDING";
        DocumentPosition2[DocumentPosition2["FOLLOWING"] = 4] = "FOLLOWING";
        DocumentPosition2[DocumentPosition2["CONTAINS"] = 8] = "CONTAINS";
        DocumentPosition2[DocumentPosition2["CONTAINED_BY"] = 16] = "CONTAINED_BY";
      })(DocumentPosition = exports.DocumentPosition || (exports.DocumentPosition = {}));
      function compareDocumentPosition(nodeA, nodeB) {
        var aParents = [];
        var bParents = [];
        if (nodeA === nodeB) {
          return 0;
        }
        var current = (0, domhandler_1.hasChildren)(nodeA) ? nodeA : nodeA.parent;
        while (current) {
          aParents.unshift(current);
          current = current.parent;
        }
        current = (0, domhandler_1.hasChildren)(nodeB) ? nodeB : nodeB.parent;
        while (current) {
          bParents.unshift(current);
          current = current.parent;
        }
        var maxIdx = Math.min(aParents.length, bParents.length);
        var idx = 0;
        while (idx < maxIdx && aParents[idx] === bParents[idx]) {
          idx++;
        }
        if (idx === 0) {
          return DocumentPosition.DISCONNECTED;
        }
        var sharedParent = aParents[idx - 1];
        var siblings = sharedParent.children;
        var aSibling = aParents[idx];
        var bSibling = bParents[idx];
        if (siblings.indexOf(aSibling) > siblings.indexOf(bSibling)) {
          if (sharedParent === nodeB) {
            return DocumentPosition.FOLLOWING | DocumentPosition.CONTAINED_BY;
          }
          return DocumentPosition.FOLLOWING;
        }
        if (sharedParent === nodeA) {
          return DocumentPosition.PRECEDING | DocumentPosition.CONTAINS;
        }
        return DocumentPosition.PRECEDING;
      }
      exports.compareDocumentPosition = compareDocumentPosition;
      function uniqueSort(nodes) {
        nodes = nodes.filter(function(node, i, arr) {
          return !arr.includes(node, i + 1);
        });
        nodes.sort(function(a, b) {
          var relative = compareDocumentPosition(a, b);
          if (relative & DocumentPosition.PRECEDING) {
            return -1;
          } else if (relative & DocumentPosition.FOLLOWING) {
            return 1;
          }
          return 0;
        });
        return nodes;
      }
      exports.uniqueSort = uniqueSort;
    }
  });

  // node_modules/domutils/lib/feeds.js
  var require_feeds = __commonJS({
    "node_modules/domutils/lib/feeds.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.getFeed = void 0;
      var stringify_js_1 = require_stringify();
      var legacy_js_1 = require_legacy();
      function getFeed(doc) {
        var feedRoot = getOneElement(isValidFeed, doc);
        return !feedRoot ? null : feedRoot.name === "feed" ? getAtomFeed(feedRoot) : getRssFeed(feedRoot);
      }
      exports.getFeed = getFeed;
      function getAtomFeed(feedRoot) {
        var _a;
        var childs = feedRoot.children;
        var feed = {
          type: "atom",
          items: (0, legacy_js_1.getElementsByTagName)("entry", childs).map(function(item) {
            var _a2;
            var children = item.children;
            var entry = { media: getMediaElements(children) };
            addConditionally(entry, "id", "id", children);
            addConditionally(entry, "title", "title", children);
            var href2 = (_a2 = getOneElement("link", children)) === null || _a2 === void 0 ? void 0 : _a2.attribs["href"];
            if (href2) {
              entry.link = href2;
            }
            var description = fetch("summary", children) || fetch("content", children);
            if (description) {
              entry.description = description;
            }
            var pubDate = fetch("updated", children);
            if (pubDate) {
              entry.pubDate = new Date(pubDate);
            }
            return entry;
          })
        };
        addConditionally(feed, "id", "id", childs);
        addConditionally(feed, "title", "title", childs);
        var href = (_a = getOneElement("link", childs)) === null || _a === void 0 ? void 0 : _a.attribs["href"];
        if (href) {
          feed.link = href;
        }
        addConditionally(feed, "description", "subtitle", childs);
        var updated = fetch("updated", childs);
        if (updated) {
          feed.updated = new Date(updated);
        }
        addConditionally(feed, "author", "email", childs, true);
        return feed;
      }
      function getRssFeed(feedRoot) {
        var _a, _b;
        var childs = (_b = (_a = getOneElement("channel", feedRoot.children)) === null || _a === void 0 ? void 0 : _a.children) !== null && _b !== void 0 ? _b : [];
        var feed = {
          type: feedRoot.name.substr(0, 3),
          id: "",
          items: (0, legacy_js_1.getElementsByTagName)("item", feedRoot.children).map(function(item) {
            var children = item.children;
            var entry = { media: getMediaElements(children) };
            addConditionally(entry, "id", "guid", children);
            addConditionally(entry, "title", "title", children);
            addConditionally(entry, "link", "link", children);
            addConditionally(entry, "description", "description", children);
            var pubDate = fetch("pubDate", children) || fetch("dc:date", children);
            if (pubDate)
              entry.pubDate = new Date(pubDate);
            return entry;
          })
        };
        addConditionally(feed, "title", "title", childs);
        addConditionally(feed, "link", "link", childs);
        addConditionally(feed, "description", "description", childs);
        var updated = fetch("lastBuildDate", childs);
        if (updated) {
          feed.updated = new Date(updated);
        }
        addConditionally(feed, "author", "managingEditor", childs, true);
        return feed;
      }
      var MEDIA_KEYS_STRING = ["url", "type", "lang"];
      var MEDIA_KEYS_INT = [
        "fileSize",
        "bitrate",
        "framerate",
        "samplingrate",
        "channels",
        "duration",
        "height",
        "width"
      ];
      function getMediaElements(where) {
        return (0, legacy_js_1.getElementsByTagName)("media:content", where).map(function(elem) {
          var attribs = elem.attribs;
          var media = {
            medium: attribs["medium"],
            isDefault: !!attribs["isDefault"]
          };
          for (var _i = 0, MEDIA_KEYS_STRING_1 = MEDIA_KEYS_STRING; _i < MEDIA_KEYS_STRING_1.length; _i++) {
            var attrib = MEDIA_KEYS_STRING_1[_i];
            if (attribs[attrib]) {
              media[attrib] = attribs[attrib];
            }
          }
          for (var _a = 0, MEDIA_KEYS_INT_1 = MEDIA_KEYS_INT; _a < MEDIA_KEYS_INT_1.length; _a++) {
            var attrib = MEDIA_KEYS_INT_1[_a];
            if (attribs[attrib]) {
              media[attrib] = parseInt(attribs[attrib], 10);
            }
          }
          if (attribs["expression"]) {
            media.expression = attribs["expression"];
          }
          return media;
        });
      }
      function getOneElement(tagName, node) {
        return (0, legacy_js_1.getElementsByTagName)(tagName, node, true, 1)[0];
      }
      function fetch(tagName, where, recurse) {
        if (recurse === void 0) {
          recurse = false;
        }
        return (0, stringify_js_1.textContent)((0, legacy_js_1.getElementsByTagName)(tagName, where, recurse, 1)).trim();
      }
      function addConditionally(obj, prop, tagName, where, recurse) {
        if (recurse === void 0) {
          recurse = false;
        }
        var val = fetch(tagName, where, recurse);
        if (val)
          obj[prop] = val;
      }
      function isValidFeed(value) {
        return value === "rss" || value === "feed" || value === "rdf:RDF";
      }
    }
  });

  // node_modules/domutils/lib/index.js
  var require_lib5 = __commonJS({
    "node_modules/domutils/lib/index.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __exportStar = exports && exports.__exportStar || function(m, exports2) {
        for (var p in m)
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
            __createBinding(exports2, m, p);
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.hasChildren = exports.isDocument = exports.isComment = exports.isText = exports.isCDATA = exports.isTag = void 0;
      __exportStar(require_stringify(), exports);
      __exportStar(require_traversal(), exports);
      __exportStar(require_manipulation(), exports);
      __exportStar(require_querying(), exports);
      __exportStar(require_legacy(), exports);
      __exportStar(require_helpers(), exports);
      __exportStar(require_feeds(), exports);
      var domhandler_1 = require_lib2();
      Object.defineProperty(exports, "isTag", { enumerable: true, get: function() {
        return domhandler_1.isTag;
      } });
      Object.defineProperty(exports, "isCDATA", { enumerable: true, get: function() {
        return domhandler_1.isCDATA;
      } });
      Object.defineProperty(exports, "isText", { enumerable: true, get: function() {
        return domhandler_1.isText;
      } });
      Object.defineProperty(exports, "isComment", { enumerable: true, get: function() {
        return domhandler_1.isComment;
      } });
      Object.defineProperty(exports, "isDocument", { enumerable: true, get: function() {
        return domhandler_1.isDocument;
      } });
      Object.defineProperty(exports, "hasChildren", { enumerable: true, get: function() {
        return domhandler_1.hasChildren;
      } });
    }
  });

  // node_modules/cheerio/lib/static.js
  var require_static = __commonJS({
    "node_modules/cheerio/lib/static.js"(exports) {
      "use strict";
      var __assign = exports && exports.__assign || function() {
        __assign = Object.assign || function(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s)
              if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
          }
          return t;
        };
        return __assign.apply(this, arguments);
      };
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports && exports.__importStar || function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.merge = exports.contains = exports.root = exports.parseHTML = exports.text = exports.xml = exports.html = void 0;
      var domutils_1 = require_lib5();
      var options_js_1 = __importStar(require_options());
      function render(that, dom, options) {
        if (!that)
          return "";
        return that(dom !== null && dom !== void 0 ? dom : that._root.children, null, void 0, options).toString();
      }
      function isOptions(dom, options) {
        return !options && typeof dom === "object" && dom != null && !("length" in dom) && !("type" in dom);
      }
      function html(dom, options) {
        var toRender = isOptions(dom) ? (options = dom, void 0) : dom;
        var opts = __assign(__assign(__assign({}, options_js_1.default), this === null || this === void 0 ? void 0 : this._options), (0, options_js_1.flatten)(options !== null && options !== void 0 ? options : {}));
        return render(this, toRender, opts);
      }
      exports.html = html;
      function xml(dom) {
        var options = __assign(__assign({}, this._options), { xmlMode: true });
        return render(this, dom, options);
      }
      exports.xml = xml;
      function text(elements) {
        var elems = elements ? elements : this ? this.root() : [];
        var ret = "";
        for (var i = 0; i < elems.length; i++) {
          ret += (0, domutils_1.textContent)(elems[i]);
        }
        return ret;
      }
      exports.text = text;
      function parseHTML(data, context, keepScripts) {
        if (keepScripts === void 0) {
          keepScripts = typeof context === "boolean" ? context : false;
        }
        if (!data || typeof data !== "string") {
          return null;
        }
        if (typeof context === "boolean") {
          keepScripts = context;
        }
        var parsed = this.load(data, options_js_1.default, false);
        if (!keepScripts) {
          parsed("script").remove();
        }
        return parsed.root()[0].children.slice();
      }
      exports.parseHTML = parseHTML;
      function root() {
        return this(this._root);
      }
      exports.root = root;
      function contains(container, contained) {
        if (contained === container) {
          return false;
        }
        var next = contained;
        while (next && next !== next.parent) {
          next = next.parent;
          if (next === container) {
            return true;
          }
        }
        return false;
      }
      exports.contains = contains;
      function merge(arr1, arr2) {
        if (!isArrayLike(arr1) || !isArrayLike(arr2)) {
          return;
        }
        var newLength = arr1.length;
        var len = +arr2.length;
        for (var i = 0; i < len; i++) {
          arr1[newLength++] = arr2[i];
        }
        arr1.length = newLength;
        return arr1;
      }
      exports.merge = merge;
      function isArrayLike(item) {
        if (Array.isArray(item)) {
          return true;
        }
        if (typeof item !== "object" || !Object.prototype.hasOwnProperty.call(item, "length") || typeof item.length !== "number" || item.length < 0) {
          return false;
        }
        for (var i = 0; i < item.length; i++) {
          if (!(i in item)) {
            return false;
          }
        }
        return true;
      }
    }
  });

  // node_modules/cheerio/lib/utils.js
  var require_utils = __commonJS({
    "node_modules/cheerio/lib/utils.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.isHtml = exports.cloneDom = exports.domEach = exports.cssCase = exports.camelCase = exports.isCheerio = exports.isTag = void 0;
      var domhandler_1 = require_lib2();
      var domhandler_2 = require_lib2();
      Object.defineProperty(exports, "isTag", { enumerable: true, get: function() {
        return domhandler_2.isTag;
      } });
      function isCheerio(maybeCheerio) {
        return maybeCheerio.cheerio != null;
      }
      exports.isCheerio = isCheerio;
      function camelCase(str) {
        return str.replace(/[_.-](\w|$)/g, function(_, x) {
          return x.toUpperCase();
        });
      }
      exports.camelCase = camelCase;
      function cssCase(str) {
        return str.replace(/[A-Z]/g, "-$&").toLowerCase();
      }
      exports.cssCase = cssCase;
      function domEach(array, fn) {
        var len = array.length;
        for (var i = 0; i < len; i++)
          fn(array[i], i);
        return array;
      }
      exports.domEach = domEach;
      function cloneDom(dom) {
        var clone = "length" in dom ? Array.prototype.map.call(dom, function(el) {
          return (0, domhandler_1.cloneNode)(el, true);
        }) : [(0, domhandler_1.cloneNode)(dom, true)];
        var root = new domhandler_1.Document(clone);
        clone.forEach(function(node) {
          node.parent = root;
        });
        return clone;
      }
      exports.cloneDom = cloneDom;
      var CharacterCodes;
      (function(CharacterCodes2) {
        CharacterCodes2[CharacterCodes2["LowerA"] = 97] = "LowerA";
        CharacterCodes2[CharacterCodes2["LowerZ"] = 122] = "LowerZ";
        CharacterCodes2[CharacterCodes2["UpperA"] = 65] = "UpperA";
        CharacterCodes2[CharacterCodes2["UpperZ"] = 90] = "UpperZ";
        CharacterCodes2[CharacterCodes2["Exclamation"] = 33] = "Exclamation";
      })(CharacterCodes || (CharacterCodes = {}));
      function isHtml(str) {
        var tagStart = str.indexOf("<");
        if (tagStart < 0 || tagStart > str.length - 3)
          return false;
        var tagChar = str.charCodeAt(tagStart + 1);
        return (tagChar >= CharacterCodes.LowerA && tagChar <= CharacterCodes.LowerZ || tagChar >= CharacterCodes.UpperA && tagChar <= CharacterCodes.UpperZ || tagChar === CharacterCodes.Exclamation) && str.includes(">", tagStart + 2);
      }
      exports.isHtml = isHtml;
    }
  });

  // node_modules/cheerio/lib/api/attributes.js
  var require_attributes = __commonJS({
    "node_modules/cheerio/lib/api/attributes.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.toggleClass = exports.removeClass = exports.addClass = exports.hasClass = exports.removeAttr = exports.val = exports.data = exports.prop = exports.attr = void 0;
      var static_js_1 = require_static();
      var utils_js_1 = require_utils();
      var domutils_1 = require_lib5();
      var hasOwn = Object.prototype.hasOwnProperty;
      var rspace = /\s+/;
      var dataAttrPrefix = "data-";
      var primitives = {
        null: null,
        true: true,
        false: false
      };
      var rboolean = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i;
      var rbrace = /^{[^]*}$|^\[[^]*]$/;
      function getAttr(elem, name, xmlMode) {
        var _a;
        if (!elem || !(0, utils_js_1.isTag)(elem))
          return void 0;
        (_a = elem.attribs) !== null && _a !== void 0 ? _a : elem.attribs = {};
        if (!name) {
          return elem.attribs;
        }
        if (hasOwn.call(elem.attribs, name)) {
          return !xmlMode && rboolean.test(name) ? name : elem.attribs[name];
        }
        if (elem.name === "option" && name === "value") {
          return (0, static_js_1.text)(elem.children);
        }
        if (elem.name === "input" && (elem.attribs["type"] === "radio" || elem.attribs["type"] === "checkbox") && name === "value") {
          return "on";
        }
        return void 0;
      }
      function setAttr(el, name, value) {
        if (value === null) {
          removeAttribute(el, name);
        } else {
          el.attribs[name] = "".concat(value);
        }
      }
      function attr(name, value) {
        if (typeof name === "object" || value !== void 0) {
          if (typeof value === "function") {
            if (typeof name !== "string") {
              {
                throw new Error("Bad combination of arguments.");
              }
            }
            return (0, utils_js_1.domEach)(this, function(el, i) {
              if ((0, utils_js_1.isTag)(el))
                setAttr(el, name, value.call(el, i, el.attribs[name]));
            });
          }
          return (0, utils_js_1.domEach)(this, function(el) {
            if (!(0, utils_js_1.isTag)(el))
              return;
            if (typeof name === "object") {
              Object.keys(name).forEach(function(objName) {
                var objValue = name[objName];
                setAttr(el, objName, objValue);
              });
            } else {
              setAttr(el, name, value);
            }
          });
        }
        return arguments.length > 1 ? this : getAttr(this[0], name, this.options.xmlMode);
      }
      exports.attr = attr;
      function getProp(el, name, xmlMode) {
        return name in el ? (
          // @ts-expect-error TS doesn't like us accessing the value directly here.
          el[name]
        ) : !xmlMode && rboolean.test(name) ? getAttr(el, name, false) !== void 0 : getAttr(el, name, xmlMode);
      }
      function setProp(el, name, value, xmlMode) {
        if (name in el) {
          el[name] = value;
        } else {
          setAttr(el, name, !xmlMode && rboolean.test(name) ? value ? "" : null : "".concat(value));
        }
      }
      function prop(name, value) {
        var _this = this;
        var _a;
        if (typeof name === "string" && value === void 0) {
          var el = this[0];
          if (!el || !(0, utils_js_1.isTag)(el))
            return void 0;
          switch (name) {
            case "style": {
              var property_1 = this.css();
              var keys = Object.keys(property_1);
              keys.forEach(function(p, i) {
                property_1[i] = p;
              });
              property_1.length = keys.length;
              return property_1;
            }
            case "tagName":
            case "nodeName": {
              return el.name.toUpperCase();
            }
            case "href":
            case "src": {
              var prop_1 = (_a = el.attribs) === null || _a === void 0 ? void 0 : _a[name];
              if (typeof URL !== "undefined" && (name === "href" && (el.tagName === "a" || el.name === "link") || name === "src" && (el.tagName === "img" || el.tagName === "iframe" || el.tagName === "audio" || el.tagName === "video" || el.tagName === "source")) && prop_1 !== void 0 && this.options.baseURI) {
                return new URL(prop_1, this.options.baseURI).href;
              }
              return prop_1;
            }
            case "innerText": {
              return (0, domutils_1.innerText)(el);
            }
            case "textContent": {
              return (0, domutils_1.textContent)(el);
            }
            case "outerHTML":
              return this.clone().wrap("<container />").parent().html();
            case "innerHTML":
              return this.html();
            default:
              return getProp(el, name, this.options.xmlMode);
          }
        }
        if (typeof name === "object" || value !== void 0) {
          if (typeof value === "function") {
            if (typeof name === "object") {
              throw new Error("Bad combination of arguments.");
            }
            return (0, utils_js_1.domEach)(this, function(el2, i) {
              if ((0, utils_js_1.isTag)(el2)) {
                setProp(el2, name, value.call(el2, i, getProp(el2, name, _this.options.xmlMode)), _this.options.xmlMode);
              }
            });
          }
          return (0, utils_js_1.domEach)(this, function(el2) {
            if (!(0, utils_js_1.isTag)(el2))
              return;
            if (typeof name === "object") {
              Object.keys(name).forEach(function(key) {
                var val2 = name[key];
                setProp(el2, key, val2, _this.options.xmlMode);
              });
            } else {
              setProp(el2, name, value, _this.options.xmlMode);
            }
          });
        }
        return void 0;
      }
      exports.prop = prop;
      function setData(el, name, value) {
        var _a;
        var elem = el;
        (_a = elem.data) !== null && _a !== void 0 ? _a : elem.data = {};
        if (typeof name === "object")
          Object.assign(elem.data, name);
        else if (typeof name === "string" && value !== void 0) {
          elem.data[name] = value;
        }
      }
      function readData(el, name) {
        var domNames;
        var jsNames;
        var value;
        if (name == null) {
          domNames = Object.keys(el.attribs).filter(function(attrName) {
            return attrName.startsWith(dataAttrPrefix);
          });
          jsNames = domNames.map(function(domName2) {
            return (0, utils_js_1.camelCase)(domName2.slice(dataAttrPrefix.length));
          });
        } else {
          domNames = [dataAttrPrefix + (0, utils_js_1.cssCase)(name)];
          jsNames = [name];
        }
        for (var idx = 0; idx < domNames.length; ++idx) {
          var domName = domNames[idx];
          var jsName = jsNames[idx];
          if (hasOwn.call(el.attribs, domName) && !hasOwn.call(el.data, jsName)) {
            value = el.attribs[domName];
            if (hasOwn.call(primitives, value)) {
              value = primitives[value];
            } else if (value === String(Number(value))) {
              value = Number(value);
            } else if (rbrace.test(value)) {
              try {
                value = JSON.parse(value);
              } catch (e) {
              }
            }
            el.data[jsName] = value;
          }
        }
        return name == null ? el.data : value;
      }
      function data(name, value) {
        var _a;
        var elem = this[0];
        if (!elem || !(0, utils_js_1.isTag)(elem))
          return;
        var dataEl = elem;
        (_a = dataEl.data) !== null && _a !== void 0 ? _a : dataEl.data = {};
        if (!name) {
          return readData(dataEl);
        }
        if (typeof name === "object" || value !== void 0) {
          (0, utils_js_1.domEach)(this, function(el) {
            if ((0, utils_js_1.isTag)(el)) {
              if (typeof name === "object")
                setData(el, name);
              else
                setData(el, name, value);
            }
          });
          return this;
        }
        if (hasOwn.call(dataEl.data, name)) {
          return dataEl.data[name];
        }
        return readData(dataEl, name);
      }
      exports.data = data;
      function val(value) {
        var querying = arguments.length === 0;
        var element = this[0];
        if (!element || !(0, utils_js_1.isTag)(element))
          return querying ? void 0 : this;
        switch (element.name) {
          case "textarea":
            return this.text(value);
          case "select": {
            var option = this.find("option:selected");
            if (!querying) {
              if (this.attr("multiple") == null && typeof value === "object") {
                return this;
              }
              this.find("option").removeAttr("selected");
              var values = typeof value !== "object" ? [value] : value;
              for (var i = 0; i < values.length; i++) {
                this.find('option[value="'.concat(values[i], '"]')).attr("selected", "");
              }
              return this;
            }
            return this.attr("multiple") ? option.toArray().map(function(el) {
              return (0, static_js_1.text)(el.children);
            }) : option.attr("value");
          }
          case "input":
          case "option":
            return querying ? this.attr("value") : this.attr("value", value);
        }
        return void 0;
      }
      exports.val = val;
      function removeAttribute(elem, name) {
        if (!elem.attribs || !hasOwn.call(elem.attribs, name))
          return;
        delete elem.attribs[name];
      }
      function splitNames(names) {
        return names ? names.trim().split(rspace) : [];
      }
      function removeAttr(name) {
        var attrNames = splitNames(name);
        var _loop_1 = function(i2) {
          (0, utils_js_1.domEach)(this_1, function(elem) {
            if ((0, utils_js_1.isTag)(elem))
              removeAttribute(elem, attrNames[i2]);
          });
        };
        var this_1 = this;
        for (var i = 0; i < attrNames.length; i++) {
          _loop_1(i);
        }
        return this;
      }
      exports.removeAttr = removeAttr;
      function hasClass(className) {
        return this.toArray().some(function(elem) {
          var clazz = (0, utils_js_1.isTag)(elem) && elem.attribs["class"];
          var idx = -1;
          if (clazz && className.length) {
            while ((idx = clazz.indexOf(className, idx + 1)) > -1) {
              var end = idx + className.length;
              if ((idx === 0 || rspace.test(clazz[idx - 1])) && (end === clazz.length || rspace.test(clazz[end]))) {
                return true;
              }
            }
          }
          return false;
        });
      }
      exports.hasClass = hasClass;
      function addClass(value) {
        if (typeof value === "function") {
          return (0, utils_js_1.domEach)(this, function(el2, i2) {
            if ((0, utils_js_1.isTag)(el2)) {
              var className2 = el2.attribs["class"] || "";
              addClass.call([el2], value.call(el2, i2, className2));
            }
          });
        }
        if (!value || typeof value !== "string")
          return this;
        var classNames = value.split(rspace);
        var numElements = this.length;
        for (var i = 0; i < numElements; i++) {
          var el = this[i];
          if (!(0, utils_js_1.isTag)(el))
            continue;
          var className = getAttr(el, "class", false);
          if (!className) {
            setAttr(el, "class", classNames.join(" ").trim());
          } else {
            var setClass = " ".concat(className, " ");
            for (var j = 0; j < classNames.length; j++) {
              var appendClass = "".concat(classNames[j], " ");
              if (!setClass.includes(" ".concat(appendClass)))
                setClass += appendClass;
            }
            setAttr(el, "class", setClass.trim());
          }
        }
        return this;
      }
      exports.addClass = addClass;
      function removeClass(name) {
        if (typeof name === "function") {
          return (0, utils_js_1.domEach)(this, function(el, i) {
            if ((0, utils_js_1.isTag)(el)) {
              removeClass.call([el], name.call(el, i, el.attribs["class"] || ""));
            }
          });
        }
        var classes = splitNames(name);
        var numClasses = classes.length;
        var removeAll = arguments.length === 0;
        return (0, utils_js_1.domEach)(this, function(el) {
          if (!(0, utils_js_1.isTag)(el))
            return;
          if (removeAll) {
            el.attribs["class"] = "";
          } else {
            var elClasses = splitNames(el.attribs["class"]);
            var changed = false;
            for (var j = 0; j < numClasses; j++) {
              var index = elClasses.indexOf(classes[j]);
              if (index >= 0) {
                elClasses.splice(index, 1);
                changed = true;
                j--;
              }
            }
            if (changed) {
              el.attribs["class"] = elClasses.join(" ");
            }
          }
        });
      }
      exports.removeClass = removeClass;
      function toggleClass(value, stateVal) {
        if (typeof value === "function") {
          return (0, utils_js_1.domEach)(this, function(el2, i2) {
            if ((0, utils_js_1.isTag)(el2)) {
              toggleClass.call([el2], value.call(el2, i2, el2.attribs["class"] || "", stateVal), stateVal);
            }
          });
        }
        if (!value || typeof value !== "string")
          return this;
        var classNames = value.split(rspace);
        var numClasses = classNames.length;
        var state = typeof stateVal === "boolean" ? stateVal ? 1 : -1 : 0;
        var numElements = this.length;
        for (var i = 0; i < numElements; i++) {
          var el = this[i];
          if (!(0, utils_js_1.isTag)(el))
            continue;
          var elementClasses = splitNames(el.attribs["class"]);
          for (var j = 0; j < numClasses; j++) {
            var index = elementClasses.indexOf(classNames[j]);
            if (state >= 0 && index < 0) {
              elementClasses.push(classNames[j]);
            } else if (state <= 0 && index >= 0) {
              elementClasses.splice(index, 1);
            }
          }
          el.attribs["class"] = elementClasses.join(" ");
        }
        return this;
      }
      exports.toggleClass = toggleClass;
    }
  });

  // node_modules/css-what/lib/commonjs/types.js
  var require_types2 = __commonJS({
    "node_modules/css-what/lib/commonjs/types.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.AttributeAction = exports.IgnoreCaseMode = exports.SelectorType = void 0;
      var SelectorType;
      (function(SelectorType2) {
        SelectorType2["Attribute"] = "attribute";
        SelectorType2["Pseudo"] = "pseudo";
        SelectorType2["PseudoElement"] = "pseudo-element";
        SelectorType2["Tag"] = "tag";
        SelectorType2["Universal"] = "universal";
        SelectorType2["Adjacent"] = "adjacent";
        SelectorType2["Child"] = "child";
        SelectorType2["Descendant"] = "descendant";
        SelectorType2["Parent"] = "parent";
        SelectorType2["Sibling"] = "sibling";
        SelectorType2["ColumnCombinator"] = "column-combinator";
      })(SelectorType = exports.SelectorType || (exports.SelectorType = {}));
      exports.IgnoreCaseMode = {
        Unknown: null,
        QuirksMode: "quirks",
        IgnoreCase: true,
        CaseSensitive: false
      };
      var AttributeAction;
      (function(AttributeAction2) {
        AttributeAction2["Any"] = "any";
        AttributeAction2["Element"] = "element";
        AttributeAction2["End"] = "end";
        AttributeAction2["Equals"] = "equals";
        AttributeAction2["Exists"] = "exists";
        AttributeAction2["Hyphen"] = "hyphen";
        AttributeAction2["Not"] = "not";
        AttributeAction2["Start"] = "start";
      })(AttributeAction = exports.AttributeAction || (exports.AttributeAction = {}));
    }
  });

  // node_modules/css-what/lib/commonjs/parse.js
  var require_parse = __commonJS({
    "node_modules/css-what/lib/commonjs/parse.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.parse = exports.isTraversal = void 0;
      var types_1 = require_types2();
      var reName = /^[^\\#]?(?:\\(?:[\da-f]{1,6}\s?|.)|[\w\-\u00b0-\uFFFF])+/;
      var reEscape = /\\([\da-f]{1,6}\s?|(\s)|.)/gi;
      var actionTypes = /* @__PURE__ */ new Map([
        [126, types_1.AttributeAction.Element],
        [94, types_1.AttributeAction.Start],
        [36, types_1.AttributeAction.End],
        [42, types_1.AttributeAction.Any],
        [33, types_1.AttributeAction.Not],
        [124, types_1.AttributeAction.Hyphen]
      ]);
      var unpackPseudos = /* @__PURE__ */ new Set([
        "has",
        "not",
        "matches",
        "is",
        "where",
        "host",
        "host-context"
      ]);
      function isTraversal(selector) {
        switch (selector.type) {
          case types_1.SelectorType.Adjacent:
          case types_1.SelectorType.Child:
          case types_1.SelectorType.Descendant:
          case types_1.SelectorType.Parent:
          case types_1.SelectorType.Sibling:
          case types_1.SelectorType.ColumnCombinator:
            return true;
          default:
            return false;
        }
      }
      exports.isTraversal = isTraversal;
      var stripQuotesFromPseudos = /* @__PURE__ */ new Set(["contains", "icontains"]);
      function funescape(_, escaped, escapedWhitespace) {
        var high = parseInt(escaped, 16) - 65536;
        return high !== high || escapedWhitespace ? escaped : high < 0 ? (
          // BMP codepoint
          String.fromCharCode(high + 65536)
        ) : (
          // Supplemental Plane codepoint (surrogate pair)
          String.fromCharCode(high >> 10 | 55296, high & 1023 | 56320)
        );
      }
      function unescapeCSS(str) {
        return str.replace(reEscape, funescape);
      }
      function isQuote(c) {
        return c === 39 || c === 34;
      }
      function isWhitespace(c) {
        return c === 32 || c === 9 || c === 10 || c === 12 || c === 13;
      }
      function parse(selector) {
        var subselects = [];
        var endIndex = parseSelector(subselects, "".concat(selector), 0);
        if (endIndex < selector.length) {
          throw new Error("Unmatched selector: ".concat(selector.slice(endIndex)));
        }
        return subselects;
      }
      exports.parse = parse;
      function parseSelector(subselects, selector, selectorIndex) {
        var tokens = [];
        function getName(offset) {
          var match = selector.slice(selectorIndex + offset).match(reName);
          if (!match) {
            throw new Error("Expected name, found ".concat(selector.slice(selectorIndex)));
          }
          var name = match[0];
          selectorIndex += offset + name.length;
          return unescapeCSS(name);
        }
        function stripWhitespace(offset) {
          selectorIndex += offset;
          while (selectorIndex < selector.length && isWhitespace(selector.charCodeAt(selectorIndex))) {
            selectorIndex++;
          }
        }
        function readValueWithParenthesis() {
          selectorIndex += 1;
          var start = selectorIndex;
          var counter = 1;
          for (; counter > 0 && selectorIndex < selector.length; selectorIndex++) {
            if (selector.charCodeAt(selectorIndex) === 40 && !isEscaped(selectorIndex)) {
              counter++;
            } else if (selector.charCodeAt(selectorIndex) === 41 && !isEscaped(selectorIndex)) {
              counter--;
            }
          }
          if (counter) {
            throw new Error("Parenthesis not matched");
          }
          return unescapeCSS(selector.slice(start, selectorIndex - 1));
        }
        function isEscaped(pos) {
          var slashCount = 0;
          while (selector.charCodeAt(--pos) === 92)
            slashCount++;
          return (slashCount & 1) === 1;
        }
        function ensureNotTraversal() {
          if (tokens.length > 0 && isTraversal(tokens[tokens.length - 1])) {
            throw new Error("Did not expect successive traversals.");
          }
        }
        function addTraversal(type) {
          if (tokens.length > 0 && tokens[tokens.length - 1].type === types_1.SelectorType.Descendant) {
            tokens[tokens.length - 1].type = type;
            return;
          }
          ensureNotTraversal();
          tokens.push({ type });
        }
        function addSpecialAttribute(name, action2) {
          tokens.push({
            type: types_1.SelectorType.Attribute,
            name,
            action: action2,
            value: getName(1),
            namespace: null,
            ignoreCase: "quirks"
          });
        }
        function finalizeSubselector() {
          if (tokens.length && tokens[tokens.length - 1].type === types_1.SelectorType.Descendant) {
            tokens.pop();
          }
          if (tokens.length === 0) {
            throw new Error("Empty sub-selector");
          }
          subselects.push(tokens);
        }
        stripWhitespace(0);
        if (selector.length === selectorIndex) {
          return selectorIndex;
        }
        loop:
          while (selectorIndex < selector.length) {
            var firstChar = selector.charCodeAt(selectorIndex);
            switch (firstChar) {
              case 32:
              case 9:
              case 10:
              case 12:
              case 13: {
                if (tokens.length === 0 || tokens[0].type !== types_1.SelectorType.Descendant) {
                  ensureNotTraversal();
                  tokens.push({ type: types_1.SelectorType.Descendant });
                }
                stripWhitespace(1);
                break;
              }
              case 62: {
                addTraversal(types_1.SelectorType.Child);
                stripWhitespace(1);
                break;
              }
              case 60: {
                addTraversal(types_1.SelectorType.Parent);
                stripWhitespace(1);
                break;
              }
              case 126: {
                addTraversal(types_1.SelectorType.Sibling);
                stripWhitespace(1);
                break;
              }
              case 43: {
                addTraversal(types_1.SelectorType.Adjacent);
                stripWhitespace(1);
                break;
              }
              case 46: {
                addSpecialAttribute("class", types_1.AttributeAction.Element);
                break;
              }
              case 35: {
                addSpecialAttribute("id", types_1.AttributeAction.Equals);
                break;
              }
              case 91: {
                stripWhitespace(1);
                var name_1 = void 0;
                var namespace = null;
                if (selector.charCodeAt(selectorIndex) === 124) {
                  name_1 = getName(1);
                } else if (selector.startsWith("*|", selectorIndex)) {
                  namespace = "*";
                  name_1 = getName(2);
                } else {
                  name_1 = getName(0);
                  if (selector.charCodeAt(selectorIndex) === 124 && selector.charCodeAt(selectorIndex + 1) !== 61) {
                    namespace = name_1;
                    name_1 = getName(1);
                  }
                }
                stripWhitespace(0);
                var action = types_1.AttributeAction.Exists;
                var possibleAction = actionTypes.get(selector.charCodeAt(selectorIndex));
                if (possibleAction) {
                  action = possibleAction;
                  if (selector.charCodeAt(selectorIndex + 1) !== 61) {
                    throw new Error("Expected `=`");
                  }
                  stripWhitespace(2);
                } else if (selector.charCodeAt(selectorIndex) === 61) {
                  action = types_1.AttributeAction.Equals;
                  stripWhitespace(1);
                }
                var value = "";
                var ignoreCase = null;
                if (action !== "exists") {
                  if (isQuote(selector.charCodeAt(selectorIndex))) {
                    var quote = selector.charCodeAt(selectorIndex);
                    var sectionEnd = selectorIndex + 1;
                    while (sectionEnd < selector.length && (selector.charCodeAt(sectionEnd) !== quote || isEscaped(sectionEnd))) {
                      sectionEnd += 1;
                    }
                    if (selector.charCodeAt(sectionEnd) !== quote) {
                      throw new Error("Attribute value didn't end");
                    }
                    value = unescapeCSS(selector.slice(selectorIndex + 1, sectionEnd));
                    selectorIndex = sectionEnd + 1;
                  } else {
                    var valueStart = selectorIndex;
                    while (selectorIndex < selector.length && (!isWhitespace(selector.charCodeAt(selectorIndex)) && selector.charCodeAt(selectorIndex) !== 93 || isEscaped(selectorIndex))) {
                      selectorIndex += 1;
                    }
                    value = unescapeCSS(selector.slice(valueStart, selectorIndex));
                  }
                  stripWhitespace(0);
                  var forceIgnore = selector.charCodeAt(selectorIndex) | 32;
                  if (forceIgnore === 115) {
                    ignoreCase = false;
                    stripWhitespace(1);
                  } else if (forceIgnore === 105) {
                    ignoreCase = true;
                    stripWhitespace(1);
                  }
                }
                if (selector.charCodeAt(selectorIndex) !== 93) {
                  throw new Error("Attribute selector didn't terminate");
                }
                selectorIndex += 1;
                var attributeSelector = {
                  type: types_1.SelectorType.Attribute,
                  name: name_1,
                  action,
                  value,
                  namespace,
                  ignoreCase
                };
                tokens.push(attributeSelector);
                break;
              }
              case 58: {
                if (selector.charCodeAt(selectorIndex + 1) === 58) {
                  tokens.push({
                    type: types_1.SelectorType.PseudoElement,
                    name: getName(2).toLowerCase(),
                    data: selector.charCodeAt(selectorIndex) === 40 ? readValueWithParenthesis() : null
                  });
                  continue;
                }
                var name_2 = getName(1).toLowerCase();
                var data = null;
                if (selector.charCodeAt(selectorIndex) === 40) {
                  if (unpackPseudos.has(name_2)) {
                    if (isQuote(selector.charCodeAt(selectorIndex + 1))) {
                      throw new Error("Pseudo-selector ".concat(name_2, " cannot be quoted"));
                    }
                    data = [];
                    selectorIndex = parseSelector(data, selector, selectorIndex + 1);
                    if (selector.charCodeAt(selectorIndex) !== 41) {
                      throw new Error("Missing closing parenthesis in :".concat(name_2, " (").concat(selector, ")"));
                    }
                    selectorIndex += 1;
                  } else {
                    data = readValueWithParenthesis();
                    if (stripQuotesFromPseudos.has(name_2)) {
                      var quot = data.charCodeAt(0);
                      if (quot === data.charCodeAt(data.length - 1) && isQuote(quot)) {
                        data = data.slice(1, -1);
                      }
                    }
                    data = unescapeCSS(data);
                  }
                }
                tokens.push({ type: types_1.SelectorType.Pseudo, name: name_2, data });
                break;
              }
              case 44: {
                finalizeSubselector();
                tokens = [];
                stripWhitespace(1);
                break;
              }
              default: {
                if (selector.startsWith("/*", selectorIndex)) {
                  var endIndex = selector.indexOf("*/", selectorIndex + 2);
                  if (endIndex < 0) {
                    throw new Error("Comment was not terminated");
                  }
                  selectorIndex = endIndex + 2;
                  if (tokens.length === 0) {
                    stripWhitespace(0);
                  }
                  break;
                }
                var namespace = null;
                var name_3 = void 0;
                if (firstChar === 42) {
                  selectorIndex += 1;
                  name_3 = "*";
                } else if (firstChar === 124) {
                  name_3 = "";
                  if (selector.charCodeAt(selectorIndex + 1) === 124) {
                    addTraversal(types_1.SelectorType.ColumnCombinator);
                    stripWhitespace(2);
                    break;
                  }
                } else if (reName.test(selector.slice(selectorIndex))) {
                  name_3 = getName(0);
                } else {
                  break loop;
                }
                if (selector.charCodeAt(selectorIndex) === 124 && selector.charCodeAt(selectorIndex + 1) !== 124) {
                  namespace = name_3;
                  if (selector.charCodeAt(selectorIndex + 1) === 42) {
                    name_3 = "*";
                    selectorIndex += 2;
                  } else {
                    name_3 = getName(1);
                  }
                }
                tokens.push(name_3 === "*" ? { type: types_1.SelectorType.Universal, namespace } : { type: types_1.SelectorType.Tag, name: name_3, namespace });
              }
            }
          }
        finalizeSubselector();
        return selectorIndex;
      }
    }
  });

  // node_modules/css-what/lib/commonjs/stringify.js
  var require_stringify2 = __commonJS({
    "node_modules/css-what/lib/commonjs/stringify.js"(exports) {
      "use strict";
      var __spreadArray = exports && exports.__spreadArray || function(to, from, pack) {
        if (pack || arguments.length === 2)
          for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
              if (!ar)
                ar = Array.prototype.slice.call(from, 0, i);
              ar[i] = from[i];
            }
          }
        return to.concat(ar || Array.prototype.slice.call(from));
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.stringify = void 0;
      var types_1 = require_types2();
      var attribValChars = ["\\", '"'];
      var pseudoValChars = __spreadArray(__spreadArray([], attribValChars, true), ["(", ")"], false);
      var charsToEscapeInAttributeValue = new Set(attribValChars.map(function(c) {
        return c.charCodeAt(0);
      }));
      var charsToEscapeInPseudoValue = new Set(pseudoValChars.map(function(c) {
        return c.charCodeAt(0);
      }));
      var charsToEscapeInName = new Set(__spreadArray(__spreadArray([], pseudoValChars, true), [
        "~",
        "^",
        "$",
        "*",
        "+",
        "!",
        "|",
        ":",
        "[",
        "]",
        " ",
        "."
      ], false).map(function(c) {
        return c.charCodeAt(0);
      }));
      function stringify(selector) {
        return selector.map(function(token) {
          return token.map(stringifyToken).join("");
        }).join(", ");
      }
      exports.stringify = stringify;
      function stringifyToken(token, index, arr) {
        switch (token.type) {
          case types_1.SelectorType.Child:
            return index === 0 ? "> " : " > ";
          case types_1.SelectorType.Parent:
            return index === 0 ? "< " : " < ";
          case types_1.SelectorType.Sibling:
            return index === 0 ? "~ " : " ~ ";
          case types_1.SelectorType.Adjacent:
            return index === 0 ? "+ " : " + ";
          case types_1.SelectorType.Descendant:
            return " ";
          case types_1.SelectorType.ColumnCombinator:
            return index === 0 ? "|| " : " || ";
          case types_1.SelectorType.Universal:
            return token.namespace === "*" && index + 1 < arr.length && "name" in arr[index + 1] ? "" : "".concat(getNamespace(token.namespace), "*");
          case types_1.SelectorType.Tag:
            return getNamespacedName(token);
          case types_1.SelectorType.PseudoElement:
            return "::".concat(escapeName(token.name, charsToEscapeInName)).concat(token.data === null ? "" : "(".concat(escapeName(token.data, charsToEscapeInPseudoValue), ")"));
          case types_1.SelectorType.Pseudo:
            return ":".concat(escapeName(token.name, charsToEscapeInName)).concat(token.data === null ? "" : "(".concat(typeof token.data === "string" ? escapeName(token.data, charsToEscapeInPseudoValue) : stringify(token.data), ")"));
          case types_1.SelectorType.Attribute: {
            if (token.name === "id" && token.action === types_1.AttributeAction.Equals && token.ignoreCase === "quirks" && !token.namespace) {
              return "#".concat(escapeName(token.value, charsToEscapeInName));
            }
            if (token.name === "class" && token.action === types_1.AttributeAction.Element && token.ignoreCase === "quirks" && !token.namespace) {
              return ".".concat(escapeName(token.value, charsToEscapeInName));
            }
            var name_1 = getNamespacedName(token);
            if (token.action === types_1.AttributeAction.Exists) {
              return "[".concat(name_1, "]");
            }
            return "[".concat(name_1).concat(getActionValue(token.action), '="').concat(escapeName(token.value, charsToEscapeInAttributeValue), '"').concat(token.ignoreCase === null ? "" : token.ignoreCase ? " i" : " s", "]");
          }
        }
      }
      function getActionValue(action) {
        switch (action) {
          case types_1.AttributeAction.Equals:
            return "";
          case types_1.AttributeAction.Element:
            return "~";
          case types_1.AttributeAction.Start:
            return "^";
          case types_1.AttributeAction.End:
            return "$";
          case types_1.AttributeAction.Any:
            return "*";
          case types_1.AttributeAction.Not:
            return "!";
          case types_1.AttributeAction.Hyphen:
            return "|";
          case types_1.AttributeAction.Exists:
            throw new Error("Shouldn't be here");
        }
      }
      function getNamespacedName(token) {
        return "".concat(getNamespace(token.namespace)).concat(escapeName(token.name, charsToEscapeInName));
      }
      function getNamespace(namespace) {
        return namespace !== null ? "".concat(namespace === "*" ? "*" : escapeName(namespace, charsToEscapeInName), "|") : "";
      }
      function escapeName(str, charsToEscape) {
        var lastIdx = 0;
        var ret = "";
        for (var i = 0; i < str.length; i++) {
          if (charsToEscape.has(str.charCodeAt(i))) {
            ret += "".concat(str.slice(lastIdx, i), "\\").concat(str.charAt(i));
            lastIdx = i + 1;
          }
        }
        return ret.length > 0 ? ret + str.slice(lastIdx) : str;
      }
    }
  });

  // node_modules/css-what/lib/commonjs/index.js
  var require_commonjs = __commonJS({
    "node_modules/css-what/lib/commonjs/index.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __exportStar = exports && exports.__exportStar || function(m, exports2) {
        for (var p in m)
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
            __createBinding(exports2, m, p);
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.stringify = exports.parse = exports.isTraversal = void 0;
      __exportStar(require_types2(), exports);
      var parse_1 = require_parse();
      Object.defineProperty(exports, "isTraversal", { enumerable: true, get: function() {
        return parse_1.isTraversal;
      } });
      Object.defineProperty(exports, "parse", { enumerable: true, get: function() {
        return parse_1.parse;
      } });
      var stringify_1 = require_stringify2();
      Object.defineProperty(exports, "stringify", { enumerable: true, get: function() {
        return stringify_1.stringify;
      } });
    }
  });

  // node_modules/boolbase/index.js
  var require_boolbase = __commonJS({
    "node_modules/boolbase/index.js"(exports, module) {
      module.exports = {
        trueFunc: function trueFunc() {
          return true;
        },
        falseFunc: function falseFunc() {
          return false;
        }
      };
    }
  });

  // node_modules/css-select/lib/sort.js
  var require_sort = __commonJS({
    "node_modules/css-select/lib/sort.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.isTraversal = void 0;
      var css_what_1 = require_commonjs();
      var procedure = /* @__PURE__ */ new Map([
        [css_what_1.SelectorType.Universal, 50],
        [css_what_1.SelectorType.Tag, 30],
        [css_what_1.SelectorType.Attribute, 1],
        [css_what_1.SelectorType.Pseudo, 0]
      ]);
      function isTraversal(token) {
        return !procedure.has(token.type);
      }
      exports.isTraversal = isTraversal;
      var attributes = /* @__PURE__ */ new Map([
        [css_what_1.AttributeAction.Exists, 10],
        [css_what_1.AttributeAction.Equals, 8],
        [css_what_1.AttributeAction.Not, 7],
        [css_what_1.AttributeAction.Start, 6],
        [css_what_1.AttributeAction.End, 6],
        [css_what_1.AttributeAction.Any, 5]
      ]);
      function sortByProcedure(arr) {
        var procs = arr.map(getProcedure);
        for (var i = 1; i < arr.length; i++) {
          var procNew = procs[i];
          if (procNew < 0)
            continue;
          for (var j = i - 1; j >= 0 && procNew < procs[j]; j--) {
            var token = arr[j + 1];
            arr[j + 1] = arr[j];
            arr[j] = token;
            procs[j + 1] = procs[j];
            procs[j] = procNew;
          }
        }
      }
      exports.default = sortByProcedure;
      function getProcedure(token) {
        var _a, _b;
        var proc = (_a = procedure.get(token.type)) !== null && _a !== void 0 ? _a : -1;
        if (token.type === css_what_1.SelectorType.Attribute) {
          proc = (_b = attributes.get(token.action)) !== null && _b !== void 0 ? _b : 4;
          if (token.action === css_what_1.AttributeAction.Equals && token.name === "id") {
            proc = 9;
          }
          if (token.ignoreCase) {
            proc >>= 1;
          }
        } else if (token.type === css_what_1.SelectorType.Pseudo) {
          if (!token.data) {
            proc = 3;
          } else if (token.name === "has" || token.name === "contains") {
            proc = 0;
          } else if (Array.isArray(token.data)) {
            proc = Math.min.apply(Math, token.data.map(function(d) {
              return Math.min.apply(Math, d.map(getProcedure));
            }));
            if (proc < 0) {
              proc = 0;
            }
          } else {
            proc = 2;
          }
        }
        return proc;
      }
    }
  });

  // node_modules/css-select/lib/attributes.js
  var require_attributes2 = __commonJS({
    "node_modules/css-select/lib/attributes.js"(exports) {
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.attributeRules = void 0;
      var boolbase_1 = __importDefault(require_boolbase());
      var reChars = /[-[\]{}()*+?.,\\^$|#\s]/g;
      function escapeRegex(value) {
        return value.replace(reChars, "\\$&");
      }
      var caseInsensitiveAttributes = /* @__PURE__ */ new Set([
        "accept",
        "accept-charset",
        "align",
        "alink",
        "axis",
        "bgcolor",
        "charset",
        "checked",
        "clear",
        "codetype",
        "color",
        "compact",
        "declare",
        "defer",
        "dir",
        "direction",
        "disabled",
        "enctype",
        "face",
        "frame",
        "hreflang",
        "http-equiv",
        "lang",
        "language",
        "link",
        "media",
        "method",
        "multiple",
        "nohref",
        "noresize",
        "noshade",
        "nowrap",
        "readonly",
        "rel",
        "rev",
        "rules",
        "scope",
        "scrolling",
        "selected",
        "shape",
        "target",
        "text",
        "type",
        "valign",
        "valuetype",
        "vlink"
      ]);
      function shouldIgnoreCase(selector, options) {
        return typeof selector.ignoreCase === "boolean" ? selector.ignoreCase : selector.ignoreCase === "quirks" ? !!options.quirksMode : !options.xmlMode && caseInsensitiveAttributes.has(selector.name);
      }
      exports.attributeRules = {
        equals: function(next, data, options) {
          var adapter = options.adapter;
          var name = data.name;
          var value = data.value;
          if (shouldIgnoreCase(data, options)) {
            value = value.toLowerCase();
            return function(elem) {
              var attr = adapter.getAttributeValue(elem, name);
              return attr != null && attr.length === value.length && attr.toLowerCase() === value && next(elem);
            };
          }
          return function(elem) {
            return adapter.getAttributeValue(elem, name) === value && next(elem);
          };
        },
        hyphen: function(next, data, options) {
          var adapter = options.adapter;
          var name = data.name;
          var value = data.value;
          var len = value.length;
          if (shouldIgnoreCase(data, options)) {
            value = value.toLowerCase();
            return function hyphenIC(elem) {
              var attr = adapter.getAttributeValue(elem, name);
              return attr != null && (attr.length === len || attr.charAt(len) === "-") && attr.substr(0, len).toLowerCase() === value && next(elem);
            };
          }
          return function hyphen(elem) {
            var attr = adapter.getAttributeValue(elem, name);
            return attr != null && (attr.length === len || attr.charAt(len) === "-") && attr.substr(0, len) === value && next(elem);
          };
        },
        element: function(next, data, options) {
          var adapter = options.adapter;
          var name = data.name, value = data.value;
          if (/\s/.test(value)) {
            return boolbase_1.default.falseFunc;
          }
          var regex = new RegExp("(?:^|\\s)".concat(escapeRegex(value), "(?:$|\\s)"), shouldIgnoreCase(data, options) ? "i" : "");
          return function element(elem) {
            var attr = adapter.getAttributeValue(elem, name);
            return attr != null && attr.length >= value.length && regex.test(attr) && next(elem);
          };
        },
        exists: function(next, _a, _b) {
          var name = _a.name;
          var adapter = _b.adapter;
          return function(elem) {
            return adapter.hasAttrib(elem, name) && next(elem);
          };
        },
        start: function(next, data, options) {
          var adapter = options.adapter;
          var name = data.name;
          var value = data.value;
          var len = value.length;
          if (len === 0) {
            return boolbase_1.default.falseFunc;
          }
          if (shouldIgnoreCase(data, options)) {
            value = value.toLowerCase();
            return function(elem) {
              var attr = adapter.getAttributeValue(elem, name);
              return attr != null && attr.length >= len && attr.substr(0, len).toLowerCase() === value && next(elem);
            };
          }
          return function(elem) {
            var _a;
            return !!((_a = adapter.getAttributeValue(elem, name)) === null || _a === void 0 ? void 0 : _a.startsWith(value)) && next(elem);
          };
        },
        end: function(next, data, options) {
          var adapter = options.adapter;
          var name = data.name;
          var value = data.value;
          var len = -value.length;
          if (len === 0) {
            return boolbase_1.default.falseFunc;
          }
          if (shouldIgnoreCase(data, options)) {
            value = value.toLowerCase();
            return function(elem) {
              var _a;
              return ((_a = adapter.getAttributeValue(elem, name)) === null || _a === void 0 ? void 0 : _a.substr(len).toLowerCase()) === value && next(elem);
            };
          }
          return function(elem) {
            var _a;
            return !!((_a = adapter.getAttributeValue(elem, name)) === null || _a === void 0 ? void 0 : _a.endsWith(value)) && next(elem);
          };
        },
        any: function(next, data, options) {
          var adapter = options.adapter;
          var name = data.name, value = data.value;
          if (value === "") {
            return boolbase_1.default.falseFunc;
          }
          if (shouldIgnoreCase(data, options)) {
            var regex_1 = new RegExp(escapeRegex(value), "i");
            return function anyIC(elem) {
              var attr = adapter.getAttributeValue(elem, name);
              return attr != null && attr.length >= value.length && regex_1.test(attr) && next(elem);
            };
          }
          return function(elem) {
            var _a;
            return !!((_a = adapter.getAttributeValue(elem, name)) === null || _a === void 0 ? void 0 : _a.includes(value)) && next(elem);
          };
        },
        not: function(next, data, options) {
          var adapter = options.adapter;
          var name = data.name;
          var value = data.value;
          if (value === "") {
            return function(elem) {
              return !!adapter.getAttributeValue(elem, name) && next(elem);
            };
          } else if (shouldIgnoreCase(data, options)) {
            value = value.toLowerCase();
            return function(elem) {
              var attr = adapter.getAttributeValue(elem, name);
              return (attr == null || attr.length !== value.length || attr.toLowerCase() !== value) && next(elem);
            };
          }
          return function(elem) {
            return adapter.getAttributeValue(elem, name) !== value && next(elem);
          };
        }
      };
    }
  });

  // node_modules/nth-check/lib/parse.js
  var require_parse2 = __commonJS({
    "node_modules/nth-check/lib/parse.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.parse = void 0;
      var whitespace = /* @__PURE__ */ new Set([9, 10, 12, 13, 32]);
      var ZERO = "0".charCodeAt(0);
      var NINE = "9".charCodeAt(0);
      function parse(formula) {
        formula = formula.trim().toLowerCase();
        if (formula === "even") {
          return [2, 0];
        } else if (formula === "odd") {
          return [2, 1];
        }
        var idx = 0;
        var a = 0;
        var sign = readSign();
        var number = readNumber();
        if (idx < formula.length && formula.charAt(idx) === "n") {
          idx++;
          a = sign * (number !== null && number !== void 0 ? number : 1);
          skipWhitespace();
          if (idx < formula.length) {
            sign = readSign();
            skipWhitespace();
            number = readNumber();
          } else {
            sign = number = 0;
          }
        }
        if (number === null || idx < formula.length) {
          throw new Error("n-th rule couldn't be parsed ('".concat(formula, "')"));
        }
        return [a, sign * number];
        function readSign() {
          if (formula.charAt(idx) === "-") {
            idx++;
            return -1;
          }
          if (formula.charAt(idx) === "+") {
            idx++;
          }
          return 1;
        }
        function readNumber() {
          var start = idx;
          var value = 0;
          while (idx < formula.length && formula.charCodeAt(idx) >= ZERO && formula.charCodeAt(idx) <= NINE) {
            value = value * 10 + (formula.charCodeAt(idx) - ZERO);
            idx++;
          }
          return idx === start ? null : value;
        }
        function skipWhitespace() {
          while (idx < formula.length && whitespace.has(formula.charCodeAt(idx))) {
            idx++;
          }
        }
      }
      exports.parse = parse;
    }
  });

  // node_modules/nth-check/lib/compile.js
  var require_compile = __commonJS({
    "node_modules/nth-check/lib/compile.js"(exports) {
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.generate = exports.compile = void 0;
      var boolbase_1 = __importDefault(require_boolbase());
      function compile(parsed) {
        var a = parsed[0];
        var b = parsed[1] - 1;
        if (b < 0 && a <= 0)
          return boolbase_1.default.falseFunc;
        if (a === -1)
          return function(index) {
            return index <= b;
          };
        if (a === 0)
          return function(index) {
            return index === b;
          };
        if (a === 1)
          return b < 0 ? boolbase_1.default.trueFunc : function(index) {
            return index >= b;
          };
        var absA = Math.abs(a);
        var bMod = (b % absA + absA) % absA;
        return a > 1 ? function(index) {
          return index >= b && index % absA === bMod;
        } : function(index) {
          return index <= b && index % absA === bMod;
        };
      }
      exports.compile = compile;
      function generate(parsed) {
        var a = parsed[0];
        var b = parsed[1] - 1;
        var n = 0;
        if (a < 0) {
          var aPos_1 = -a;
          var minValue_1 = (b % aPos_1 + aPos_1) % aPos_1;
          return function() {
            var val = minValue_1 + aPos_1 * n++;
            return val > b ? null : val;
          };
        }
        if (a === 0)
          return b < 0 ? (
            // There are no result — always return `null`
            function() {
              return null;
            }
          ) : (
            // Return `b` exactly once
            function() {
              return n++ === 0 ? b : null;
            }
          );
        if (b < 0) {
          b += a * Math.ceil(-b / a);
        }
        return function() {
          return a * n++ + b;
        };
      }
      exports.generate = generate;
    }
  });

  // node_modules/nth-check/lib/index.js
  var require_lib6 = __commonJS({
    "node_modules/nth-check/lib/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.sequence = exports.generate = exports.compile = exports.parse = void 0;
      var parse_js_1 = require_parse2();
      Object.defineProperty(exports, "parse", { enumerable: true, get: function() {
        return parse_js_1.parse;
      } });
      var compile_js_1 = require_compile();
      Object.defineProperty(exports, "compile", { enumerable: true, get: function() {
        return compile_js_1.compile;
      } });
      Object.defineProperty(exports, "generate", { enumerable: true, get: function() {
        return compile_js_1.generate;
      } });
      function nthCheck(formula) {
        return (0, compile_js_1.compile)((0, parse_js_1.parse)(formula));
      }
      exports.default = nthCheck;
      function sequence(formula) {
        return (0, compile_js_1.generate)((0, parse_js_1.parse)(formula));
      }
      exports.sequence = sequence;
    }
  });

  // node_modules/css-select/lib/pseudo-selectors/filters.js
  var require_filters = __commonJS({
    "node_modules/css-select/lib/pseudo-selectors/filters.js"(exports) {
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.filters = void 0;
      var nth_check_1 = __importDefault(require_lib6());
      var boolbase_1 = __importDefault(require_boolbase());
      function getChildFunc(next, adapter) {
        return function(elem) {
          var parent = adapter.getParent(elem);
          return parent != null && adapter.isTag(parent) && next(elem);
        };
      }
      exports.filters = {
        contains: function(next, text, _a) {
          var adapter = _a.adapter;
          return function contains(elem) {
            return next(elem) && adapter.getText(elem).includes(text);
          };
        },
        icontains: function(next, text, _a) {
          var adapter = _a.adapter;
          var itext = text.toLowerCase();
          return function icontains(elem) {
            return next(elem) && adapter.getText(elem).toLowerCase().includes(itext);
          };
        },
        // Location specific methods
        "nth-child": function(next, rule, _a) {
          var adapter = _a.adapter, equals = _a.equals;
          var func = (0, nth_check_1.default)(rule);
          if (func === boolbase_1.default.falseFunc)
            return boolbase_1.default.falseFunc;
          if (func === boolbase_1.default.trueFunc)
            return getChildFunc(next, adapter);
          return function nthChild(elem) {
            var siblings = adapter.getSiblings(elem);
            var pos = 0;
            for (var i = 0; i < siblings.length; i++) {
              if (equals(elem, siblings[i]))
                break;
              if (adapter.isTag(siblings[i])) {
                pos++;
              }
            }
            return func(pos) && next(elem);
          };
        },
        "nth-last-child": function(next, rule, _a) {
          var adapter = _a.adapter, equals = _a.equals;
          var func = (0, nth_check_1.default)(rule);
          if (func === boolbase_1.default.falseFunc)
            return boolbase_1.default.falseFunc;
          if (func === boolbase_1.default.trueFunc)
            return getChildFunc(next, adapter);
          return function nthLastChild(elem) {
            var siblings = adapter.getSiblings(elem);
            var pos = 0;
            for (var i = siblings.length - 1; i >= 0; i--) {
              if (equals(elem, siblings[i]))
                break;
              if (adapter.isTag(siblings[i])) {
                pos++;
              }
            }
            return func(pos) && next(elem);
          };
        },
        "nth-of-type": function(next, rule, _a) {
          var adapter = _a.adapter, equals = _a.equals;
          var func = (0, nth_check_1.default)(rule);
          if (func === boolbase_1.default.falseFunc)
            return boolbase_1.default.falseFunc;
          if (func === boolbase_1.default.trueFunc)
            return getChildFunc(next, adapter);
          return function nthOfType(elem) {
            var siblings = adapter.getSiblings(elem);
            var pos = 0;
            for (var i = 0; i < siblings.length; i++) {
              var currentSibling = siblings[i];
              if (equals(elem, currentSibling))
                break;
              if (adapter.isTag(currentSibling) && adapter.getName(currentSibling) === adapter.getName(elem)) {
                pos++;
              }
            }
            return func(pos) && next(elem);
          };
        },
        "nth-last-of-type": function(next, rule, _a) {
          var adapter = _a.adapter, equals = _a.equals;
          var func = (0, nth_check_1.default)(rule);
          if (func === boolbase_1.default.falseFunc)
            return boolbase_1.default.falseFunc;
          if (func === boolbase_1.default.trueFunc)
            return getChildFunc(next, adapter);
          return function nthLastOfType(elem) {
            var siblings = adapter.getSiblings(elem);
            var pos = 0;
            for (var i = siblings.length - 1; i >= 0; i--) {
              var currentSibling = siblings[i];
              if (equals(elem, currentSibling))
                break;
              if (adapter.isTag(currentSibling) && adapter.getName(currentSibling) === adapter.getName(elem)) {
                pos++;
              }
            }
            return func(pos) && next(elem);
          };
        },
        // TODO determine the actual root element
        root: function(next, _rule, _a) {
          var adapter = _a.adapter;
          return function(elem) {
            var parent = adapter.getParent(elem);
            return (parent == null || !adapter.isTag(parent)) && next(elem);
          };
        },
        scope: function(next, rule, options, context) {
          var equals = options.equals;
          if (!context || context.length === 0) {
            return exports.filters["root"](next, rule, options);
          }
          if (context.length === 1) {
            return function(elem) {
              return equals(context[0], elem) && next(elem);
            };
          }
          return function(elem) {
            return context.includes(elem) && next(elem);
          };
        },
        hover: dynamicStatePseudo("isHovered"),
        visited: dynamicStatePseudo("isVisited"),
        active: dynamicStatePseudo("isActive")
      };
      function dynamicStatePseudo(name) {
        return function dynamicPseudo(next, _rule, _a) {
          var adapter = _a.adapter;
          var func = adapter[name];
          if (typeof func !== "function") {
            return boolbase_1.default.falseFunc;
          }
          return function active(elem) {
            return func(elem) && next(elem);
          };
        };
      }
    }
  });

  // node_modules/css-select/lib/pseudo-selectors/pseudos.js
  var require_pseudos = __commonJS({
    "node_modules/css-select/lib/pseudo-selectors/pseudos.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.verifyPseudoArgs = exports.pseudos = void 0;
      exports.pseudos = {
        empty: function(elem, _a) {
          var adapter = _a.adapter;
          return !adapter.getChildren(elem).some(function(elem2) {
            return adapter.isTag(elem2) || adapter.getText(elem2) !== "";
          });
        },
        "first-child": function(elem, _a) {
          var adapter = _a.adapter, equals = _a.equals;
          if (adapter.prevElementSibling) {
            return adapter.prevElementSibling(elem) == null;
          }
          var firstChild = adapter.getSiblings(elem).find(function(elem2) {
            return adapter.isTag(elem2);
          });
          return firstChild != null && equals(elem, firstChild);
        },
        "last-child": function(elem, _a) {
          var adapter = _a.adapter, equals = _a.equals;
          var siblings = adapter.getSiblings(elem);
          for (var i = siblings.length - 1; i >= 0; i--) {
            if (equals(elem, siblings[i]))
              return true;
            if (adapter.isTag(siblings[i]))
              break;
          }
          return false;
        },
        "first-of-type": function(elem, _a) {
          var adapter = _a.adapter, equals = _a.equals;
          var siblings = adapter.getSiblings(elem);
          var elemName = adapter.getName(elem);
          for (var i = 0; i < siblings.length; i++) {
            var currentSibling = siblings[i];
            if (equals(elem, currentSibling))
              return true;
            if (adapter.isTag(currentSibling) && adapter.getName(currentSibling) === elemName) {
              break;
            }
          }
          return false;
        },
        "last-of-type": function(elem, _a) {
          var adapter = _a.adapter, equals = _a.equals;
          var siblings = adapter.getSiblings(elem);
          var elemName = adapter.getName(elem);
          for (var i = siblings.length - 1; i >= 0; i--) {
            var currentSibling = siblings[i];
            if (equals(elem, currentSibling))
              return true;
            if (adapter.isTag(currentSibling) && adapter.getName(currentSibling) === elemName) {
              break;
            }
          }
          return false;
        },
        "only-of-type": function(elem, _a) {
          var adapter = _a.adapter, equals = _a.equals;
          var elemName = adapter.getName(elem);
          return adapter.getSiblings(elem).every(function(sibling) {
            return equals(elem, sibling) || !adapter.isTag(sibling) || adapter.getName(sibling) !== elemName;
          });
        },
        "only-child": function(elem, _a) {
          var adapter = _a.adapter, equals = _a.equals;
          return adapter.getSiblings(elem).every(function(sibling) {
            return equals(elem, sibling) || !adapter.isTag(sibling);
          });
        }
      };
      function verifyPseudoArgs(func, name, subselect, argIndex) {
        if (subselect === null) {
          if (func.length > argIndex) {
            throw new Error("Pseudo-class :".concat(name, " requires an argument"));
          }
        } else if (func.length === argIndex) {
          throw new Error("Pseudo-class :".concat(name, " doesn't have any arguments"));
        }
      }
      exports.verifyPseudoArgs = verifyPseudoArgs;
    }
  });

  // node_modules/css-select/lib/pseudo-selectors/aliases.js
  var require_aliases = __commonJS({
    "node_modules/css-select/lib/pseudo-selectors/aliases.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.aliases = void 0;
      exports.aliases = {
        // Links
        "any-link": ":is(a, area, link)[href]",
        link: ":any-link:not(:visited)",
        // Forms
        // https://html.spec.whatwg.org/multipage/scripting.html#disabled-elements
        disabled: ":is(\n        :is(button, input, select, textarea, optgroup, option)[disabled],\n        optgroup[disabled] > option,\n        fieldset[disabled]:not(fieldset[disabled] legend:first-of-type *)\n    )",
        enabled: ":not(:disabled)",
        checked: ":is(:is(input[type=radio], input[type=checkbox])[checked], option:selected)",
        required: ":is(input, select, textarea)[required]",
        optional: ":is(input, select, textarea):not([required])",
        // JQuery extensions
        // https://html.spec.whatwg.org/multipage/form-elements.html#concept-option-selectedness
        selected: "option:is([selected], select:not([multiple]):not(:has(> option[selected])) > :first-of-type)",
        checkbox: "[type=checkbox]",
        file: "[type=file]",
        password: "[type=password]",
        radio: "[type=radio]",
        reset: "[type=reset]",
        image: "[type=image]",
        submit: "[type=submit]",
        parent: ":not(:empty)",
        header: ":is(h1, h2, h3, h4, h5, h6)",
        button: ":is(button, input[type=button])",
        input: ":is(input, textarea, select, button)",
        text: "input:is(:not([type!='']), [type=text])"
      };
    }
  });

  // node_modules/css-select/lib/pseudo-selectors/subselects.js
  var require_subselects = __commonJS({
    "node_modules/css-select/lib/pseudo-selectors/subselects.js"(exports) {
      "use strict";
      var __spreadArray = exports && exports.__spreadArray || function(to, from, pack) {
        if (pack || arguments.length === 2)
          for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
              if (!ar)
                ar = Array.prototype.slice.call(from, 0, i);
              ar[i] = from[i];
            }
          }
        return to.concat(ar || Array.prototype.slice.call(from));
      };
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.subselects = exports.getNextSiblings = exports.ensureIsTag = exports.PLACEHOLDER_ELEMENT = void 0;
      var boolbase_1 = __importDefault(require_boolbase());
      var sort_js_1 = require_sort();
      exports.PLACEHOLDER_ELEMENT = {};
      function ensureIsTag(next, adapter) {
        if (next === boolbase_1.default.falseFunc)
          return boolbase_1.default.falseFunc;
        return function(elem) {
          return adapter.isTag(elem) && next(elem);
        };
      }
      exports.ensureIsTag = ensureIsTag;
      function getNextSiblings(elem, adapter) {
        var siblings = adapter.getSiblings(elem);
        if (siblings.length <= 1)
          return [];
        var elemIndex = siblings.indexOf(elem);
        if (elemIndex < 0 || elemIndex === siblings.length - 1)
          return [];
        return siblings.slice(elemIndex + 1).filter(adapter.isTag);
      }
      exports.getNextSiblings = getNextSiblings;
      function copyOptions(options) {
        return {
          xmlMode: !!options.xmlMode,
          lowerCaseAttributeNames: !!options.lowerCaseAttributeNames,
          lowerCaseTags: !!options.lowerCaseTags,
          quirksMode: !!options.quirksMode,
          cacheResults: !!options.cacheResults,
          pseudos: options.pseudos,
          adapter: options.adapter,
          equals: options.equals
        };
      }
      var is = function(next, token, options, context, compileToken) {
        var func = compileToken(token, copyOptions(options), context);
        return func === boolbase_1.default.trueFunc ? next : func === boolbase_1.default.falseFunc ? boolbase_1.default.falseFunc : function(elem) {
          return func(elem) && next(elem);
        };
      };
      exports.subselects = {
        is,
        /**
         * `:matches` and `:where` are aliases for `:is`.
         */
        matches: is,
        where: is,
        not: function(next, token, options, context, compileToken) {
          var func = compileToken(token, copyOptions(options), context);
          return func === boolbase_1.default.falseFunc ? next : func === boolbase_1.default.trueFunc ? boolbase_1.default.falseFunc : function(elem) {
            return !func(elem) && next(elem);
          };
        },
        has: function(next, subselect, options, _context, compileToken) {
          var adapter = options.adapter;
          var opts = copyOptions(options);
          opts.relativeSelector = true;
          var context = subselect.some(function(s) {
            return s.some(sort_js_1.isTraversal);
          }) ? (
            // Used as a placeholder. Will be replaced with the actual element.
            [exports.PLACEHOLDER_ELEMENT]
          ) : void 0;
          var compiled = compileToken(subselect, opts, context);
          if (compiled === boolbase_1.default.falseFunc)
            return boolbase_1.default.falseFunc;
          var hasElement = ensureIsTag(compiled, adapter);
          if (context && compiled !== boolbase_1.default.trueFunc) {
            var _a = compiled.shouldTestNextSiblings, shouldTestNextSiblings_1 = _a === void 0 ? false : _a;
            return function(elem) {
              if (!next(elem))
                return false;
              context[0] = elem;
              var childs = adapter.getChildren(elem);
              var nextElements = shouldTestNextSiblings_1 ? __spreadArray(__spreadArray([], childs, true), getNextSiblings(elem, adapter), true) : childs;
              return adapter.existsOne(hasElement, nextElements);
            };
          }
          return function(elem) {
            return next(elem) && adapter.existsOne(hasElement, adapter.getChildren(elem));
          };
        }
      };
    }
  });

  // node_modules/css-select/lib/pseudo-selectors/index.js
  var require_pseudo_selectors = __commonJS({
    "node_modules/css-select/lib/pseudo-selectors/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.compilePseudoSelector = exports.aliases = exports.pseudos = exports.filters = void 0;
      var css_what_1 = require_commonjs();
      var filters_js_1 = require_filters();
      Object.defineProperty(exports, "filters", { enumerable: true, get: function() {
        return filters_js_1.filters;
      } });
      var pseudos_js_1 = require_pseudos();
      Object.defineProperty(exports, "pseudos", { enumerable: true, get: function() {
        return pseudos_js_1.pseudos;
      } });
      var aliases_js_1 = require_aliases();
      Object.defineProperty(exports, "aliases", { enumerable: true, get: function() {
        return aliases_js_1.aliases;
      } });
      var subselects_js_1 = require_subselects();
      function compilePseudoSelector(next, selector, options, context, compileToken) {
        var _a;
        var name = selector.name, data = selector.data;
        if (Array.isArray(data)) {
          if (!(name in subselects_js_1.subselects)) {
            throw new Error("Unknown pseudo-class :".concat(name, "(").concat(data, ")"));
          }
          return subselects_js_1.subselects[name](next, data, options, context, compileToken);
        }
        var userPseudo = (_a = options.pseudos) === null || _a === void 0 ? void 0 : _a[name];
        var stringPseudo = typeof userPseudo === "string" ? userPseudo : aliases_js_1.aliases[name];
        if (typeof stringPseudo === "string") {
          if (data != null) {
            throw new Error("Pseudo ".concat(name, " doesn't have any arguments"));
          }
          var alias = (0, css_what_1.parse)(stringPseudo);
          return subselects_js_1.subselects["is"](next, alias, options, context, compileToken);
        }
        if (typeof userPseudo === "function") {
          (0, pseudos_js_1.verifyPseudoArgs)(userPseudo, name, data, 1);
          return function(elem) {
            return userPseudo(elem, data) && next(elem);
          };
        }
        if (name in filters_js_1.filters) {
          return filters_js_1.filters[name](next, data, options, context);
        }
        if (name in pseudos_js_1.pseudos) {
          var pseudo_1 = pseudos_js_1.pseudos[name];
          (0, pseudos_js_1.verifyPseudoArgs)(pseudo_1, name, data, 2);
          return function(elem) {
            return pseudo_1(elem, options, data) && next(elem);
          };
        }
        throw new Error("Unknown pseudo-class :".concat(name));
      }
      exports.compilePseudoSelector = compilePseudoSelector;
    }
  });

  // node_modules/css-select/lib/general.js
  var require_general = __commonJS({
    "node_modules/css-select/lib/general.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.compileGeneralSelector = void 0;
      var attributes_js_1 = require_attributes2();
      var index_js_1 = require_pseudo_selectors();
      var css_what_1 = require_commonjs();
      function getElementParent(node, adapter) {
        var parent = adapter.getParent(node);
        if (parent && adapter.isTag(parent)) {
          return parent;
        }
        return null;
      }
      function compileGeneralSelector(next, selector, options, context, compileToken) {
        var adapter = options.adapter, equals = options.equals;
        switch (selector.type) {
          case css_what_1.SelectorType.PseudoElement: {
            throw new Error("Pseudo-elements are not supported by css-select");
          }
          case css_what_1.SelectorType.ColumnCombinator: {
            throw new Error("Column combinators are not yet supported by css-select");
          }
          case css_what_1.SelectorType.Attribute: {
            if (selector.namespace != null) {
              throw new Error("Namespaced attributes are not yet supported by css-select");
            }
            if (!options.xmlMode || options.lowerCaseAttributeNames) {
              selector.name = selector.name.toLowerCase();
            }
            return attributes_js_1.attributeRules[selector.action](next, selector, options);
          }
          case css_what_1.SelectorType.Pseudo: {
            return (0, index_js_1.compilePseudoSelector)(next, selector, options, context, compileToken);
          }
          case css_what_1.SelectorType.Tag: {
            if (selector.namespace != null) {
              throw new Error("Namespaced tag names are not yet supported by css-select");
            }
            var name_1 = selector.name;
            if (!options.xmlMode || options.lowerCaseTags) {
              name_1 = name_1.toLowerCase();
            }
            return function tag(elem) {
              return adapter.getName(elem) === name_1 && next(elem);
            };
          }
          case css_what_1.SelectorType.Descendant: {
            if (options.cacheResults === false || typeof WeakSet === "undefined") {
              return function descendant(elem) {
                var current = elem;
                while (current = getElementParent(current, adapter)) {
                  if (next(current)) {
                    return true;
                  }
                }
                return false;
              };
            }
            var isFalseCache_1 = /* @__PURE__ */ new WeakSet();
            return function cachedDescendant(elem) {
              var current = elem;
              while (current = getElementParent(current, adapter)) {
                if (!isFalseCache_1.has(current)) {
                  if (adapter.isTag(current) && next(current)) {
                    return true;
                  }
                  isFalseCache_1.add(current);
                }
              }
              return false;
            };
          }
          case "_flexibleDescendant": {
            return function flexibleDescendant(elem) {
              var current = elem;
              do {
                if (next(current))
                  return true;
              } while (current = getElementParent(current, adapter));
              return false;
            };
          }
          case css_what_1.SelectorType.Parent: {
            return function parent(elem) {
              return adapter.getChildren(elem).some(function(elem2) {
                return adapter.isTag(elem2) && next(elem2);
              });
            };
          }
          case css_what_1.SelectorType.Child: {
            return function child(elem) {
              var parent = adapter.getParent(elem);
              return parent != null && adapter.isTag(parent) && next(parent);
            };
          }
          case css_what_1.SelectorType.Sibling: {
            return function sibling(elem) {
              var siblings = adapter.getSiblings(elem);
              for (var i = 0; i < siblings.length; i++) {
                var currentSibling = siblings[i];
                if (equals(elem, currentSibling))
                  break;
                if (adapter.isTag(currentSibling) && next(currentSibling)) {
                  return true;
                }
              }
              return false;
            };
          }
          case css_what_1.SelectorType.Adjacent: {
            if (adapter.prevElementSibling) {
              return function adjacent(elem) {
                var previous = adapter.prevElementSibling(elem);
                return previous != null && next(previous);
              };
            }
            return function adjacent(elem) {
              var siblings = adapter.getSiblings(elem);
              var lastElement;
              for (var i = 0; i < siblings.length; i++) {
                var currentSibling = siblings[i];
                if (equals(elem, currentSibling))
                  break;
                if (adapter.isTag(currentSibling)) {
                  lastElement = currentSibling;
                }
              }
              return !!lastElement && next(lastElement);
            };
          }
          case css_what_1.SelectorType.Universal: {
            if (selector.namespace != null && selector.namespace !== "*") {
              throw new Error("Namespaced universal selectors are not yet supported by css-select");
            }
            return next;
          }
        }
      }
      exports.compileGeneralSelector = compileGeneralSelector;
    }
  });

  // node_modules/css-select/lib/compile.js
  var require_compile2 = __commonJS({
    "node_modules/css-select/lib/compile.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports && exports.__importStar || function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.compileToken = exports.compileUnsafe = exports.compile = void 0;
      var css_what_1 = require_commonjs();
      var boolbase_1 = __importDefault(require_boolbase());
      var sort_js_1 = __importStar(require_sort());
      var general_js_1 = require_general();
      var subselects_js_1 = require_subselects();
      function compile(selector, options, context) {
        var next = compileUnsafe(selector, options, context);
        return (0, subselects_js_1.ensureIsTag)(next, options.adapter);
      }
      exports.compile = compile;
      function compileUnsafe(selector, options, context) {
        var token = typeof selector === "string" ? (0, css_what_1.parse)(selector) : selector;
        return compileToken(token, options, context);
      }
      exports.compileUnsafe = compileUnsafe;
      function includesScopePseudo(t) {
        return t.type === css_what_1.SelectorType.Pseudo && (t.name === "scope" || Array.isArray(t.data) && t.data.some(function(data) {
          return data.some(includesScopePseudo);
        }));
      }
      var DESCENDANT_TOKEN = { type: css_what_1.SelectorType.Descendant };
      var FLEXIBLE_DESCENDANT_TOKEN = {
        type: "_flexibleDescendant"
      };
      var SCOPE_TOKEN = {
        type: css_what_1.SelectorType.Pseudo,
        name: "scope",
        data: null
      };
      function absolutize(token, _a, context) {
        var adapter = _a.adapter;
        var hasContext = !!(context === null || context === void 0 ? void 0 : context.every(function(e) {
          var parent = adapter.isTag(e) && adapter.getParent(e);
          return e === subselects_js_1.PLACEHOLDER_ELEMENT || parent && adapter.isTag(parent);
        }));
        for (var _i = 0, token_1 = token; _i < token_1.length; _i++) {
          var t = token_1[_i];
          if (t.length > 0 && (0, sort_js_1.isTraversal)(t[0]) && t[0].type !== css_what_1.SelectorType.Descendant) {
          } else if (hasContext && !t.some(includesScopePseudo)) {
            t.unshift(DESCENDANT_TOKEN);
          } else {
            continue;
          }
          t.unshift(SCOPE_TOKEN);
        }
      }
      function compileToken(token, options, context) {
        var _a;
        token.forEach(sort_js_1.default);
        context = (_a = options.context) !== null && _a !== void 0 ? _a : context;
        var isArrayContext = Array.isArray(context);
        var finalContext = context && (Array.isArray(context) ? context : [context]);
        if (options.relativeSelector !== false) {
          absolutize(token, options, finalContext);
        } else if (token.some(function(t) {
          return t.length > 0 && (0, sort_js_1.isTraversal)(t[0]);
        })) {
          throw new Error("Relative selectors are not allowed when the `relativeSelector` option is disabled");
        }
        var shouldTestNextSiblings = false;
        var query = token.map(function(rules) {
          if (rules.length >= 2) {
            var first = rules[0], second = rules[1];
            if (first.type !== css_what_1.SelectorType.Pseudo || first.name !== "scope") {
            } else if (isArrayContext && second.type === css_what_1.SelectorType.Descendant) {
              rules[1] = FLEXIBLE_DESCENDANT_TOKEN;
            } else if (second.type === css_what_1.SelectorType.Adjacent || second.type === css_what_1.SelectorType.Sibling) {
              shouldTestNextSiblings = true;
            }
          }
          return compileRules(rules, options, finalContext);
        }).reduce(reduceRules, boolbase_1.default.falseFunc);
        query.shouldTestNextSiblings = shouldTestNextSiblings;
        return query;
      }
      exports.compileToken = compileToken;
      function compileRules(rules, options, context) {
        var _a;
        return rules.reduce(function(previous, rule) {
          return previous === boolbase_1.default.falseFunc ? boolbase_1.default.falseFunc : (0, general_js_1.compileGeneralSelector)(previous, rule, options, context, compileToken);
        }, (_a = options.rootFunc) !== null && _a !== void 0 ? _a : boolbase_1.default.trueFunc);
      }
      function reduceRules(a, b) {
        if (b === boolbase_1.default.falseFunc || a === boolbase_1.default.trueFunc) {
          return a;
        }
        if (a === boolbase_1.default.falseFunc || b === boolbase_1.default.trueFunc) {
          return b;
        }
        return function combine(elem) {
          return a(elem) || b(elem);
        };
      }
    }
  });

  // node_modules/css-select/lib/index.js
  var require_lib7 = __commonJS({
    "node_modules/css-select/lib/index.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports && exports.__importStar || function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.aliases = exports.pseudos = exports.filters = exports.is = exports.selectOne = exports.selectAll = exports.prepareContext = exports._compileToken = exports._compileUnsafe = exports.compile = void 0;
      var DomUtils = __importStar(require_lib5());
      var boolbase_1 = __importDefault(require_boolbase());
      var compile_js_1 = require_compile2();
      var subselects_js_1 = require_subselects();
      var defaultEquals = function(a, b) {
        return a === b;
      };
      var defaultOptions = {
        adapter: DomUtils,
        equals: defaultEquals
      };
      function convertOptionFormats(options) {
        var _a, _b, _c, _d;
        var opts = options !== null && options !== void 0 ? options : defaultOptions;
        (_a = opts.adapter) !== null && _a !== void 0 ? _a : opts.adapter = DomUtils;
        (_b = opts.equals) !== null && _b !== void 0 ? _b : opts.equals = (_d = (_c = opts.adapter) === null || _c === void 0 ? void 0 : _c.equals) !== null && _d !== void 0 ? _d : defaultEquals;
        return opts;
      }
      function wrapCompile(func) {
        return function addAdapter(selector, options, context) {
          var opts = convertOptionFormats(options);
          return func(selector, opts, context);
        };
      }
      exports.compile = wrapCompile(compile_js_1.compile);
      exports._compileUnsafe = wrapCompile(compile_js_1.compileUnsafe);
      exports._compileToken = wrapCompile(compile_js_1.compileToken);
      function getSelectorFunc(searchFunc) {
        return function select(query, elements, options) {
          var opts = convertOptionFormats(options);
          if (typeof query !== "function") {
            query = (0, compile_js_1.compileUnsafe)(query, opts, elements);
          }
          var filteredElements = prepareContext(elements, opts.adapter, query.shouldTestNextSiblings);
          return searchFunc(query, filteredElements, opts);
        };
      }
      function prepareContext(elems, adapter, shouldTestNextSiblings) {
        if (shouldTestNextSiblings === void 0) {
          shouldTestNextSiblings = false;
        }
        if (shouldTestNextSiblings) {
          elems = appendNextSiblings(elems, adapter);
        }
        return Array.isArray(elems) ? adapter.removeSubsets(elems) : adapter.getChildren(elems);
      }
      exports.prepareContext = prepareContext;
      function appendNextSiblings(elem, adapter) {
        var elems = Array.isArray(elem) ? elem.slice(0) : [elem];
        var elemsLength = elems.length;
        for (var i = 0; i < elemsLength; i++) {
          var nextSiblings = (0, subselects_js_1.getNextSiblings)(elems[i], adapter);
          elems.push.apply(elems, nextSiblings);
        }
        return elems;
      }
      exports.selectAll = getSelectorFunc(function(query, elems, options) {
        return query === boolbase_1.default.falseFunc || !elems || elems.length === 0 ? [] : options.adapter.findAll(query, elems);
      });
      exports.selectOne = getSelectorFunc(function(query, elems, options) {
        return query === boolbase_1.default.falseFunc || !elems || elems.length === 0 ? null : options.adapter.findOne(query, elems);
      });
      function is(elem, query, options) {
        var opts = convertOptionFormats(options);
        return (typeof query === "function" ? query : (0, compile_js_1.compile)(query, opts))(elem);
      }
      exports.is = is;
      exports.default = exports.selectAll;
      var index_js_1 = require_pseudo_selectors();
      Object.defineProperty(exports, "filters", { enumerable: true, get: function() {
        return index_js_1.filters;
      } });
      Object.defineProperty(exports, "pseudos", { enumerable: true, get: function() {
        return index_js_1.pseudos;
      } });
      Object.defineProperty(exports, "aliases", { enumerable: true, get: function() {
        return index_js_1.aliases;
      } });
    }
  });

  // node_modules/cheerio-select/lib/positionals.js
  var require_positionals = __commonJS({
    "node_modules/cheerio-select/lib/positionals.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.getLimit = exports.isFilter = exports.filterNames = void 0;
      exports.filterNames = /* @__PURE__ */ new Set([
        "first",
        "last",
        "eq",
        "gt",
        "nth",
        "lt",
        "even",
        "odd"
      ]);
      function isFilter(s) {
        if (s.type !== "pseudo")
          return false;
        if (exports.filterNames.has(s.name))
          return true;
        if (s.name === "not" && Array.isArray(s.data)) {
          return s.data.some(function(s2) {
            return s2.some(isFilter);
          });
        }
        return false;
      }
      exports.isFilter = isFilter;
      function getLimit(filter, data, partLimit) {
        var num = data != null ? parseInt(data, 10) : NaN;
        switch (filter) {
          case "first":
            return 1;
          case "nth":
          case "eq":
            return isFinite(num) ? num >= 0 ? num + 1 : Infinity : 0;
          case "lt":
            return isFinite(num) ? num >= 0 ? Math.min(num, partLimit) : Infinity : 0;
          case "gt":
            return isFinite(num) ? Infinity : 0;
          case "odd":
            return 2 * partLimit;
          case "even":
            return 2 * partLimit - 1;
          case "last":
          case "not":
            return Infinity;
        }
      }
      exports.getLimit = getLimit;
    }
  });

  // node_modules/cheerio-select/lib/helpers.js
  var require_helpers2 = __commonJS({
    "node_modules/cheerio-select/lib/helpers.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.groupSelectors = exports.getDocumentRoot = void 0;
      var positionals_js_1 = require_positionals();
      function getDocumentRoot(node) {
        while (node.parent)
          node = node.parent;
        return node;
      }
      exports.getDocumentRoot = getDocumentRoot;
      function groupSelectors(selectors) {
        var filteredSelectors = [];
        var plainSelectors = [];
        for (var _i = 0, selectors_1 = selectors; _i < selectors_1.length; _i++) {
          var selector = selectors_1[_i];
          if (selector.some(positionals_js_1.isFilter)) {
            filteredSelectors.push(selector);
          } else {
            plainSelectors.push(selector);
          }
        }
        return [plainSelectors, filteredSelectors];
      }
      exports.groupSelectors = groupSelectors;
    }
  });

  // node_modules/cheerio-select/lib/index.js
  var require_lib8 = __commonJS({
    "node_modules/cheerio-select/lib/index.js"(exports) {
      "use strict";
      var __assign = exports && exports.__assign || function() {
        __assign = Object.assign || function(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s)
              if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
          }
          return t;
        };
        return __assign.apply(this, arguments);
      };
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports && exports.__importStar || function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      var __spreadArray = exports && exports.__spreadArray || function(to, from, pack) {
        if (pack || arguments.length === 2)
          for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
              if (!ar)
                ar = Array.prototype.slice.call(from, 0, i);
              ar[i] = from[i];
            }
          }
        return to.concat(ar || Array.prototype.slice.call(from));
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.select = exports.filter = exports.some = exports.is = exports.aliases = exports.pseudos = exports.filters = void 0;
      var css_what_1 = require_commonjs();
      var css_select_1 = require_lib7();
      var DomUtils = __importStar(require_lib5());
      var boolbase = __importStar(require_boolbase());
      var helpers_js_1 = require_helpers2();
      var positionals_js_1 = require_positionals();
      var css_select_2 = require_lib7();
      Object.defineProperty(exports, "filters", { enumerable: true, get: function() {
        return css_select_2.filters;
      } });
      Object.defineProperty(exports, "pseudos", { enumerable: true, get: function() {
        return css_select_2.pseudos;
      } });
      Object.defineProperty(exports, "aliases", { enumerable: true, get: function() {
        return css_select_2.aliases;
      } });
      var UNIVERSAL_SELECTOR = {
        type: css_what_1.SelectorType.Universal,
        namespace: null
      };
      var SCOPE_PSEUDO = {
        type: css_what_1.SelectorType.Pseudo,
        name: "scope",
        data: null
      };
      function is(element, selector, options) {
        if (options === void 0) {
          options = {};
        }
        return some([element], selector, options);
      }
      exports.is = is;
      function some(elements, selector, options) {
        if (options === void 0) {
          options = {};
        }
        if (typeof selector === "function")
          return elements.some(selector);
        var _a = (0, helpers_js_1.groupSelectors)((0, css_what_1.parse)(selector)), plain = _a[0], filtered = _a[1];
        return plain.length > 0 && elements.some((0, css_select_1._compileToken)(plain, options)) || filtered.some(function(sel) {
          return filterBySelector(sel, elements, options).length > 0;
        });
      }
      exports.some = some;
      function filterByPosition(filter2, elems, data, options) {
        var num = typeof data === "string" ? parseInt(data, 10) : NaN;
        switch (filter2) {
          case "first":
          case "lt":
            return elems;
          case "last":
            return elems.length > 0 ? [elems[elems.length - 1]] : elems;
          case "nth":
          case "eq":
            return isFinite(num) && Math.abs(num) < elems.length ? [num < 0 ? elems[elems.length + num] : elems[num]] : [];
          case "gt":
            return isFinite(num) ? elems.slice(num + 1) : [];
          case "even":
            return elems.filter(function(_, i) {
              return i % 2 === 0;
            });
          case "odd":
            return elems.filter(function(_, i) {
              return i % 2 === 1;
            });
          case "not": {
            var filtered_1 = new Set(filterParsed(data, elems, options));
            return elems.filter(function(e) {
              return !filtered_1.has(e);
            });
          }
        }
      }
      function filter(selector, elements, options) {
        if (options === void 0) {
          options = {};
        }
        return filterParsed((0, css_what_1.parse)(selector), elements, options);
      }
      exports.filter = filter;
      function filterParsed(selector, elements, options) {
        if (elements.length === 0)
          return [];
        var _a = (0, helpers_js_1.groupSelectors)(selector), plainSelectors = _a[0], filteredSelectors = _a[1];
        var found;
        if (plainSelectors.length) {
          var filtered = filterElements(elements, plainSelectors, options);
          if (filteredSelectors.length === 0) {
            return filtered;
          }
          if (filtered.length) {
            found = new Set(filtered);
          }
        }
        for (var i = 0; i < filteredSelectors.length && (found === null || found === void 0 ? void 0 : found.size) !== elements.length; i++) {
          var filteredSelector = filteredSelectors[i];
          var missing = found ? elements.filter(function(e) {
            return DomUtils.isTag(e) && !found.has(e);
          }) : elements;
          if (missing.length === 0)
            break;
          var filtered = filterBySelector(filteredSelector, elements, options);
          if (filtered.length) {
            if (!found) {
              if (i === filteredSelectors.length - 1) {
                return filtered;
              }
              found = new Set(filtered);
            } else {
              filtered.forEach(function(el) {
                return found.add(el);
              });
            }
          }
        }
        return typeof found !== "undefined" ? found.size === elements.length ? elements : (
          // Filter elements to preserve order
          elements.filter(function(el) {
            return found.has(el);
          })
        ) : [];
      }
      function filterBySelector(selector, elements, options) {
        var _a;
        if (selector.some(css_what_1.isTraversal)) {
          var root = (_a = options.root) !== null && _a !== void 0 ? _a : (0, helpers_js_1.getDocumentRoot)(elements[0]);
          var opts = __assign(__assign({}, options), { context: elements, relativeSelector: false });
          selector.push(SCOPE_PSEUDO);
          return findFilterElements(root, selector, opts, true, elements.length);
        }
        return findFilterElements(elements, selector, options, false, elements.length);
      }
      function select(selector, root, options, limit) {
        if (options === void 0) {
          options = {};
        }
        if (limit === void 0) {
          limit = Infinity;
        }
        if (typeof selector === "function") {
          return find(root, selector);
        }
        var _a = (0, helpers_js_1.groupSelectors)((0, css_what_1.parse)(selector)), plain = _a[0], filtered = _a[1];
        var results = filtered.map(function(sel) {
          return findFilterElements(root, sel, options, true, limit);
        });
        if (plain.length) {
          results.push(findElements(root, plain, options, limit));
        }
        if (results.length === 0) {
          return [];
        }
        if (results.length === 1) {
          return results[0];
        }
        return DomUtils.uniqueSort(results.reduce(function(a, b) {
          return __spreadArray(__spreadArray([], a, true), b, true);
        }));
      }
      exports.select = select;
      function findFilterElements(root, selector, options, queryForSelector, totalLimit) {
        var filterIndex = selector.findIndex(positionals_js_1.isFilter);
        var sub = selector.slice(0, filterIndex);
        var filter2 = selector[filterIndex];
        var partLimit = selector.length - 1 === filterIndex ? totalLimit : Infinity;
        var limit = (0, positionals_js_1.getLimit)(filter2.name, filter2.data, partLimit);
        if (limit === 0)
          return [];
        var elemsNoLimit = sub.length === 0 && !Array.isArray(root) ? DomUtils.getChildren(root).filter(DomUtils.isTag) : sub.length === 0 ? (Array.isArray(root) ? root : [root]).filter(DomUtils.isTag) : queryForSelector || sub.some(css_what_1.isTraversal) ? findElements(root, [sub], options, limit) : filterElements(root, [sub], options);
        var elems = elemsNoLimit.slice(0, limit);
        var result = filterByPosition(filter2.name, elems, filter2.data, options);
        if (result.length === 0 || selector.length === filterIndex + 1) {
          return result;
        }
        var remainingSelector = selector.slice(filterIndex + 1);
        var remainingHasTraversal = remainingSelector.some(css_what_1.isTraversal);
        if (remainingHasTraversal) {
          if ((0, css_what_1.isTraversal)(remainingSelector[0])) {
            var type = remainingSelector[0].type;
            if (type === css_what_1.SelectorType.Sibling || type === css_what_1.SelectorType.Adjacent) {
              result = (0, css_select_1.prepareContext)(result, DomUtils, true);
            }
            remainingSelector.unshift(UNIVERSAL_SELECTOR);
          }
          options = __assign(__assign({}, options), {
            // Avoid absolutizing the selector
            relativeSelector: false,
            /*
             * Add a custom root func, to make sure traversals don't match elements
             * that aren't a part of the considered tree.
             */
            rootFunc: function(el) {
              return result.includes(el);
            }
          });
        } else if (options.rootFunc && options.rootFunc !== boolbase.trueFunc) {
          options = __assign(__assign({}, options), { rootFunc: boolbase.trueFunc });
        }
        return remainingSelector.some(positionals_js_1.isFilter) ? findFilterElements(result, remainingSelector, options, false, totalLimit) : remainingHasTraversal ? (
          // Query existing elements to resolve traversal.
          findElements(result, [remainingSelector], options, totalLimit)
        ) : (
          // If we don't have any more traversals, simply filter elements.
          filterElements(result, [remainingSelector], options)
        );
      }
      function findElements(root, sel, options, limit) {
        var query = (0, css_select_1._compileToken)(sel, options, root);
        return find(root, query, limit);
      }
      function find(root, query, limit) {
        if (limit === void 0) {
          limit = Infinity;
        }
        var elems = (0, css_select_1.prepareContext)(root, DomUtils, query.shouldTestNextSiblings);
        return DomUtils.find(function(node) {
          return DomUtils.isTag(node) && query(node);
        }, elems, true, limit);
      }
      function filterElements(elements, sel, options) {
        var els = (Array.isArray(elements) ? elements : [elements]).filter(DomUtils.isTag);
        if (els.length === 0)
          return els;
        var query = (0, css_select_1._compileToken)(sel, options);
        return query === boolbase.trueFunc ? els : els.filter(query);
      }
    }
  });

  // node_modules/cheerio/lib/api/traversing.js
  var require_traversing = __commonJS({
    "node_modules/cheerio/lib/api/traversing.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports && exports.__importStar || function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      var __spreadArray = exports && exports.__spreadArray || function(to, from, pack) {
        if (pack || arguments.length === 2)
          for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
              if (!ar)
                ar = Array.prototype.slice.call(from, 0, i);
              ar[i] = from[i];
            }
          }
        return to.concat(ar || Array.prototype.slice.call(from));
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.addBack = exports.add = exports.end = exports.slice = exports.index = exports.toArray = exports.get = exports.eq = exports.last = exports.first = exports.has = exports.not = exports.is = exports.filterArray = exports.filter = exports.map = exports.each = exports.contents = exports.children = exports.siblings = exports.prevUntil = exports.prevAll = exports.prev = exports.nextUntil = exports.nextAll = exports.next = exports.closest = exports.parentsUntil = exports.parents = exports.parent = exports.find = void 0;
      var domhandler_1 = require_lib2();
      var select = __importStar(require_lib8());
      var utils_js_1 = require_utils();
      var static_js_1 = require_static();
      var domutils_1 = require_lib5();
      var reSiblingSelector = /^\s*[~+]/;
      function find(selectorOrHaystack) {
        var _a;
        if (!selectorOrHaystack) {
          return this._make([]);
        }
        var context = this.toArray();
        if (typeof selectorOrHaystack !== "string") {
          var haystack = (0, utils_js_1.isCheerio)(selectorOrHaystack) ? selectorOrHaystack.toArray() : [selectorOrHaystack];
          return this._make(haystack.filter(function(elem) {
            return context.some(function(node) {
              return (0, static_js_1.contains)(node, elem);
            });
          }));
        }
        var elems = reSiblingSelector.test(selectorOrHaystack) ? context : this.children().toArray();
        var options = {
          context,
          root: (_a = this._root) === null || _a === void 0 ? void 0 : _a[0],
          // Pass options that are recognized by `cheerio-select`
          xmlMode: this.options.xmlMode,
          lowerCaseTags: this.options.lowerCaseTags,
          lowerCaseAttributeNames: this.options.lowerCaseAttributeNames,
          pseudos: this.options.pseudos,
          quirksMode: this.options.quirksMode
        };
        return this._make(select.select(selectorOrHaystack, elems, options));
      }
      exports.find = find;
      function _getMatcher(matchMap) {
        return function(fn) {
          var postFns = [];
          for (var _i = 1; _i < arguments.length; _i++) {
            postFns[_i - 1] = arguments[_i];
          }
          return function(selector) {
            var _a;
            var matched = matchMap(fn, this);
            if (selector) {
              matched = filterArray(matched, selector, this.options.xmlMode, (_a = this._root) === null || _a === void 0 ? void 0 : _a[0]);
            }
            return this._make(
              // Post processing is only necessary if there is more than one element.
              this.length > 1 && matched.length > 1 ? postFns.reduce(function(elems, fn2) {
                return fn2(elems);
              }, matched) : matched
            );
          };
        };
      }
      var _matcher = _getMatcher(function(fn, elems) {
        var _a;
        var ret = [];
        for (var i = 0; i < elems.length; i++) {
          var value = fn(elems[i]);
          ret.push(value);
        }
        return (_a = new Array()).concat.apply(_a, ret);
      });
      var _singleMatcher = _getMatcher(function(fn, elems) {
        var ret = [];
        for (var i = 0; i < elems.length; i++) {
          var value = fn(elems[i]);
          if (value !== null) {
            ret.push(value);
          }
        }
        return ret;
      });
      function _matchUntil(nextElem) {
        var postFns = [];
        for (var _i = 1; _i < arguments.length; _i++) {
          postFns[_i - 1] = arguments[_i];
        }
        var matches = null;
        var innerMatcher = _getMatcher(function(nextElem2, elems) {
          var matched = [];
          (0, utils_js_1.domEach)(elems, function(elem) {
            for (var next_1; next_1 = nextElem2(elem); elem = next_1) {
              if (matches === null || matches === void 0 ? void 0 : matches(next_1, matched.length))
                break;
              matched.push(next_1);
            }
          });
          return matched;
        }).apply(void 0, __spreadArray([nextElem], postFns, false));
        return function(selector, filterSelector) {
          var _this = this;
          matches = typeof selector === "string" ? function(elem) {
            return select.is(elem, selector, _this.options);
          } : selector ? getFilterFn(selector) : null;
          var ret = innerMatcher.call(this, filterSelector);
          matches = null;
          return ret;
        };
      }
      function _removeDuplicates(elems) {
        return Array.from(new Set(elems));
      }
      exports.parent = _singleMatcher(function(_a) {
        var parent = _a.parent;
        return parent && !(0, domhandler_1.isDocument)(parent) ? parent : null;
      }, _removeDuplicates);
      exports.parents = _matcher(function(elem) {
        var matched = [];
        while (elem.parent && !(0, domhandler_1.isDocument)(elem.parent)) {
          matched.push(elem.parent);
          elem = elem.parent;
        }
        return matched;
      }, domutils_1.uniqueSort, function(elems) {
        return elems.reverse();
      });
      exports.parentsUntil = _matchUntil(function(_a) {
        var parent = _a.parent;
        return parent && !(0, domhandler_1.isDocument)(parent) ? parent : null;
      }, domutils_1.uniqueSort, function(elems) {
        return elems.reverse();
      });
      function closest(selector) {
        var _a;
        var set = [];
        if (!selector) {
          return this._make(set);
        }
        var selectOpts = {
          xmlMode: this.options.xmlMode,
          root: (_a = this._root) === null || _a === void 0 ? void 0 : _a[0]
        };
        var selectFn = typeof selector === "string" ? function(elem) {
          return select.is(elem, selector, selectOpts);
        } : getFilterFn(selector);
        (0, utils_js_1.domEach)(this, function(elem) {
          while (elem && (0, utils_js_1.isTag)(elem)) {
            if (selectFn(elem, 0)) {
              if (!set.includes(elem)) {
                set.push(elem);
              }
              break;
            }
            elem = elem.parent;
          }
        });
        return this._make(set);
      }
      exports.closest = closest;
      exports.next = _singleMatcher(function(elem) {
        return (0, domutils_1.nextElementSibling)(elem);
      });
      exports.nextAll = _matcher(function(elem) {
        var matched = [];
        while (elem.next) {
          elem = elem.next;
          if ((0, utils_js_1.isTag)(elem))
            matched.push(elem);
        }
        return matched;
      }, _removeDuplicates);
      exports.nextUntil = _matchUntil(function(el) {
        return (0, domutils_1.nextElementSibling)(el);
      }, _removeDuplicates);
      exports.prev = _singleMatcher(function(elem) {
        return (0, domutils_1.prevElementSibling)(elem);
      });
      exports.prevAll = _matcher(function(elem) {
        var matched = [];
        while (elem.prev) {
          elem = elem.prev;
          if ((0, utils_js_1.isTag)(elem))
            matched.push(elem);
        }
        return matched;
      }, _removeDuplicates);
      exports.prevUntil = _matchUntil(function(el) {
        return (0, domutils_1.prevElementSibling)(el);
      }, _removeDuplicates);
      exports.siblings = _matcher(function(elem) {
        return (0, domutils_1.getSiblings)(elem).filter(function(el) {
          return (0, utils_js_1.isTag)(el) && el !== elem;
        });
      }, domutils_1.uniqueSort);
      exports.children = _matcher(function(elem) {
        return (0, domutils_1.getChildren)(elem).filter(utils_js_1.isTag);
      }, _removeDuplicates);
      function contents() {
        var elems = this.toArray().reduce(function(newElems, elem) {
          return (0, domhandler_1.hasChildren)(elem) ? newElems.concat(elem.children) : newElems;
        }, []);
        return this._make(elems);
      }
      exports.contents = contents;
      function each(fn) {
        var i = 0;
        var len = this.length;
        while (i < len && fn.call(this[i], i, this[i]) !== false)
          ++i;
        return this;
      }
      exports.each = each;
      function map(fn) {
        var elems = [];
        for (var i = 0; i < this.length; i++) {
          var el = this[i];
          var val = fn.call(el, i, el);
          if (val != null) {
            elems = elems.concat(val);
          }
        }
        return this._make(elems);
      }
      exports.map = map;
      function getFilterFn(match) {
        if (typeof match === "function") {
          return function(el, i) {
            return match.call(el, i, el);
          };
        }
        if ((0, utils_js_1.isCheerio)(match)) {
          return function(el) {
            return Array.prototype.includes.call(match, el);
          };
        }
        return function(el) {
          return match === el;
        };
      }
      function filter(match) {
        var _a;
        return this._make(filterArray(this.toArray(), match, this.options.xmlMode, (_a = this._root) === null || _a === void 0 ? void 0 : _a[0]));
      }
      exports.filter = filter;
      function filterArray(nodes, match, xmlMode, root) {
        return typeof match === "string" ? select.filter(match, nodes, { xmlMode, root }) : nodes.filter(getFilterFn(match));
      }
      exports.filterArray = filterArray;
      function is(selector) {
        var nodes = this.toArray();
        return typeof selector === "string" ? select.some(nodes.filter(utils_js_1.isTag), selector, this.options) : selector ? nodes.some(getFilterFn(selector)) : false;
      }
      exports.is = is;
      function not(match) {
        var nodes = this.toArray();
        if (typeof match === "string") {
          var matches_1 = new Set(select.filter(match, nodes, this.options));
          nodes = nodes.filter(function(el) {
            return !matches_1.has(el);
          });
        } else {
          var filterFn_1 = getFilterFn(match);
          nodes = nodes.filter(function(el, i) {
            return !filterFn_1(el, i);
          });
        }
        return this._make(nodes);
      }
      exports.not = not;
      function has(selectorOrHaystack) {
        var _this = this;
        return this.filter(typeof selectorOrHaystack === "string" ? (
          // Using the `:has` selector here short-circuits searches.
          ":has(".concat(selectorOrHaystack, ")")
        ) : function(_, el) {
          return _this._make(el).find(selectorOrHaystack).length > 0;
        });
      }
      exports.has = has;
      function first() {
        return this.length > 1 ? this._make(this[0]) : this;
      }
      exports.first = first;
      function last() {
        return this.length > 0 ? this._make(this[this.length - 1]) : this;
      }
      exports.last = last;
      function eq(i) {
        var _a;
        i = +i;
        if (i === 0 && this.length <= 1)
          return this;
        if (i < 0)
          i = this.length + i;
        return this._make((_a = this[i]) !== null && _a !== void 0 ? _a : []);
      }
      exports.eq = eq;
      function get(i) {
        if (i == null) {
          return this.toArray();
        }
        return this[i < 0 ? this.length + i : i];
      }
      exports.get = get;
      function toArray() {
        return Array.prototype.slice.call(this);
      }
      exports.toArray = toArray;
      function index(selectorOrNeedle) {
        var $haystack;
        var needle;
        if (selectorOrNeedle == null) {
          $haystack = this.parent().children();
          needle = this[0];
        } else if (typeof selectorOrNeedle === "string") {
          $haystack = this._make(selectorOrNeedle);
          needle = this[0];
        } else {
          $haystack = this;
          needle = (0, utils_js_1.isCheerio)(selectorOrNeedle) ? selectorOrNeedle[0] : selectorOrNeedle;
        }
        return Array.prototype.indexOf.call($haystack, needle);
      }
      exports.index = index;
      function slice(start, end2) {
        return this._make(Array.prototype.slice.call(this, start, end2));
      }
      exports.slice = slice;
      function end() {
        var _a;
        return (_a = this.prevObject) !== null && _a !== void 0 ? _a : this._make([]);
      }
      exports.end = end;
      function add(other, context) {
        var selection = this._make(other, context);
        var contents2 = (0, domutils_1.uniqueSort)(__spreadArray(__spreadArray([], this.get(), true), selection.get(), true));
        return this._make(contents2);
      }
      exports.add = add;
      function addBack(selector) {
        return this.prevObject ? this.add(selector ? this.prevObject.filter(selector) : this.prevObject) : this;
      }
      exports.addBack = addBack;
    }
  });

  // node_modules/cheerio/lib/parse.js
  var require_parse3 = __commonJS({
    "node_modules/cheerio/lib/parse.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.update = exports.getParse = void 0;
      var domutils_1 = require_lib5();
      var domhandler_1 = require_lib2();
      function getParse(parser) {
        return function parse(content, options, isDocument, context) {
          if (typeof Buffer !== "undefined" && Buffer.isBuffer(content)) {
            content = content.toString();
          }
          if (typeof content === "string") {
            return parser(content, options, isDocument, context);
          }
          var doc = content;
          if (!Array.isArray(doc) && (0, domhandler_1.isDocument)(doc)) {
            return doc;
          }
          var root = new domhandler_1.Document([]);
          update(doc, root);
          return root;
        };
      }
      exports.getParse = getParse;
      function update(newChilds, parent) {
        var arr = Array.isArray(newChilds) ? newChilds : [newChilds];
        if (parent) {
          parent.children = arr;
        } else {
          parent = null;
        }
        for (var i = 0; i < arr.length; i++) {
          var node = arr[i];
          if (node.parent && node.parent.children !== arr) {
            (0, domutils_1.removeElement)(node);
          }
          if (parent) {
            node.prev = arr[i - 1] || null;
            node.next = arr[i + 1] || null;
          } else {
            node.prev = node.next = null;
          }
          node.parent = parent;
        }
        return parent;
      }
      exports.update = update;
    }
  });

  // node_modules/cheerio/lib/api/manipulation.js
  var require_manipulation2 = __commonJS({
    "node_modules/cheerio/lib/api/manipulation.js"(exports) {
      "use strict";
      var __spreadArray = exports && exports.__spreadArray || function(to, from, pack) {
        if (pack || arguments.length === 2)
          for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
              if (!ar)
                ar = Array.prototype.slice.call(from, 0, i);
              ar[i] = from[i];
            }
          }
        return to.concat(ar || Array.prototype.slice.call(from));
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.clone = exports.text = exports.toString = exports.html = exports.empty = exports.replaceWith = exports.remove = exports.insertBefore = exports.before = exports.insertAfter = exports.after = exports.wrapAll = exports.unwrap = exports.wrapInner = exports.wrap = exports.prepend = exports.append = exports.prependTo = exports.appendTo = exports._makeDomArray = void 0;
      var domhandler_1 = require_lib2();
      var parse_js_1 = require_parse3();
      var static_js_1 = require_static();
      var utils_js_1 = require_utils();
      var domutils_1 = require_lib5();
      function _makeDomArray(elem, clone2) {
        var _this = this;
        if (elem == null) {
          return [];
        }
        if ((0, utils_js_1.isCheerio)(elem)) {
          return clone2 ? (0, utils_js_1.cloneDom)(elem.get()) : elem.get();
        }
        if (Array.isArray(elem)) {
          return elem.reduce(function(newElems, el) {
            return newElems.concat(_this._makeDomArray(el, clone2));
          }, []);
        }
        if (typeof elem === "string") {
          return this._parse(elem, this.options, false, null).children;
        }
        return clone2 ? (0, utils_js_1.cloneDom)([elem]) : [elem];
      }
      exports._makeDomArray = _makeDomArray;
      function _insert(concatenator) {
        return function() {
          var _this = this;
          var elems = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            elems[_i] = arguments[_i];
          }
          var lastIdx = this.length - 1;
          return (0, utils_js_1.domEach)(this, function(el, i) {
            if (!(0, domhandler_1.hasChildren)(el))
              return;
            var domSrc = typeof elems[0] === "function" ? elems[0].call(el, i, _this._render(el.children)) : elems;
            var dom = _this._makeDomArray(domSrc, i < lastIdx);
            concatenator(dom, el.children, el);
          });
        };
      }
      function uniqueSplice(array, spliceIdx, spliceCount, newElems, parent) {
        var _a, _b;
        var spliceArgs = __spreadArray([
          spliceIdx,
          spliceCount
        ], newElems, true);
        var prev = spliceIdx === 0 ? null : array[spliceIdx - 1];
        var next = spliceIdx + spliceCount >= array.length ? null : array[spliceIdx + spliceCount];
        for (var idx = 0; idx < newElems.length; ++idx) {
          var node = newElems[idx];
          var oldParent = node.parent;
          if (oldParent) {
            var oldSiblings = oldParent.children;
            var prevIdx = oldSiblings.indexOf(node);
            if (prevIdx > -1) {
              oldParent.children.splice(prevIdx, 1);
              if (parent === oldParent && spliceIdx > prevIdx) {
                spliceArgs[0]--;
              }
            }
          }
          node.parent = parent;
          if (node.prev) {
            node.prev.next = (_a = node.next) !== null && _a !== void 0 ? _a : null;
          }
          if (node.next) {
            node.next.prev = (_b = node.prev) !== null && _b !== void 0 ? _b : null;
          }
          node.prev = idx === 0 ? prev : newElems[idx - 1];
          node.next = idx === newElems.length - 1 ? next : newElems[idx + 1];
        }
        if (prev) {
          prev.next = newElems[0];
        }
        if (next) {
          next.prev = newElems[newElems.length - 1];
        }
        return array.splice.apply(array, spliceArgs);
      }
      function appendTo(target) {
        var appendTarget = (0, utils_js_1.isCheerio)(target) ? target : this._make(target);
        appendTarget.append(this);
        return this;
      }
      exports.appendTo = appendTo;
      function prependTo(target) {
        var prependTarget = (0, utils_js_1.isCheerio)(target) ? target : this._make(target);
        prependTarget.prepend(this);
        return this;
      }
      exports.prependTo = prependTo;
      exports.append = _insert(function(dom, children, parent) {
        uniqueSplice(children, children.length, 0, dom, parent);
      });
      exports.prepend = _insert(function(dom, children, parent) {
        uniqueSplice(children, 0, 0, dom, parent);
      });
      function _wrap(insert) {
        return function(wrapper) {
          var lastIdx = this.length - 1;
          var lastParent = this.parents().last();
          for (var i = 0; i < this.length; i++) {
            var el = this[i];
            var wrap_1 = typeof wrapper === "function" ? wrapper.call(el, i, el) : typeof wrapper === "string" && !(0, utils_js_1.isHtml)(wrapper) ? lastParent.find(wrapper).clone() : wrapper;
            var wrapperDom = this._makeDomArray(wrap_1, i < lastIdx)[0];
            if (!wrapperDom || !(0, domhandler_1.hasChildren)(wrapperDom))
              continue;
            var elInsertLocation = wrapperDom;
            var j = 0;
            while (j < elInsertLocation.children.length) {
              var child = elInsertLocation.children[j];
              if ((0, utils_js_1.isTag)(child)) {
                elInsertLocation = child;
                j = 0;
              } else {
                j++;
              }
            }
            insert(el, elInsertLocation, [wrapperDom]);
          }
          return this;
        };
      }
      exports.wrap = _wrap(function(el, elInsertLocation, wrapperDom) {
        var parent = el.parent;
        if (!parent)
          return;
        var siblings = parent.children;
        var index = siblings.indexOf(el);
        (0, parse_js_1.update)([el], elInsertLocation);
        uniqueSplice(siblings, index, 0, wrapperDom, parent);
      });
      exports.wrapInner = _wrap(function(el, elInsertLocation, wrapperDom) {
        if (!(0, domhandler_1.hasChildren)(el))
          return;
        (0, parse_js_1.update)(el.children, elInsertLocation);
        (0, parse_js_1.update)(wrapperDom, el);
      });
      function unwrap(selector) {
        var _this = this;
        this.parent(selector).not("body").each(function(_, el) {
          _this._make(el).replaceWith(el.children);
        });
        return this;
      }
      exports.unwrap = unwrap;
      function wrapAll(wrapper) {
        var el = this[0];
        if (el) {
          var wrap_2 = this._make(typeof wrapper === "function" ? wrapper.call(el, 0, el) : wrapper).insertBefore(el);
          var elInsertLocation = void 0;
          for (var i = 0; i < wrap_2.length; i++) {
            if (wrap_2[i].type === "tag")
              elInsertLocation = wrap_2[i];
          }
          var j = 0;
          while (elInsertLocation && j < elInsertLocation.children.length) {
            var child = elInsertLocation.children[j];
            if (child.type === "tag") {
              elInsertLocation = child;
              j = 0;
            } else {
              j++;
            }
          }
          if (elInsertLocation)
            this._make(elInsertLocation).append(this);
        }
        return this;
      }
      exports.wrapAll = wrapAll;
      function after() {
        var _this = this;
        var elems = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          elems[_i] = arguments[_i];
        }
        var lastIdx = this.length - 1;
        return (0, utils_js_1.domEach)(this, function(el, i) {
          var parent = el.parent;
          if (!(0, domhandler_1.hasChildren)(el) || !parent) {
            return;
          }
          var siblings = parent.children;
          var index = siblings.indexOf(el);
          if (index < 0)
            return;
          var domSrc = typeof elems[0] === "function" ? elems[0].call(el, i, _this._render(el.children)) : elems;
          var dom = _this._makeDomArray(domSrc, i < lastIdx);
          uniqueSplice(siblings, index + 1, 0, dom, parent);
        });
      }
      exports.after = after;
      function insertAfter(target) {
        var _this = this;
        if (typeof target === "string") {
          target = this._make(target);
        }
        this.remove();
        var clones = [];
        this._makeDomArray(target).forEach(function(el) {
          var clonedSelf = _this.clone().toArray();
          var parent = el.parent;
          if (!parent) {
            return;
          }
          var siblings = parent.children;
          var index = siblings.indexOf(el);
          if (index < 0)
            return;
          uniqueSplice(siblings, index + 1, 0, clonedSelf, parent);
          clones.push.apply(clones, clonedSelf);
        });
        return this._make(clones);
      }
      exports.insertAfter = insertAfter;
      function before() {
        var _this = this;
        var elems = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          elems[_i] = arguments[_i];
        }
        var lastIdx = this.length - 1;
        return (0, utils_js_1.domEach)(this, function(el, i) {
          var parent = el.parent;
          if (!(0, domhandler_1.hasChildren)(el) || !parent) {
            return;
          }
          var siblings = parent.children;
          var index = siblings.indexOf(el);
          if (index < 0)
            return;
          var domSrc = typeof elems[0] === "function" ? elems[0].call(el, i, _this._render(el.children)) : elems;
          var dom = _this._makeDomArray(domSrc, i < lastIdx);
          uniqueSplice(siblings, index, 0, dom, parent);
        });
      }
      exports.before = before;
      function insertBefore(target) {
        var _this = this;
        var targetArr = this._make(target);
        this.remove();
        var clones = [];
        (0, utils_js_1.domEach)(targetArr, function(el) {
          var clonedSelf = _this.clone().toArray();
          var parent = el.parent;
          if (!parent) {
            return;
          }
          var siblings = parent.children;
          var index = siblings.indexOf(el);
          if (index < 0)
            return;
          uniqueSplice(siblings, index, 0, clonedSelf, parent);
          clones.push.apply(clones, clonedSelf);
        });
        return this._make(clones);
      }
      exports.insertBefore = insertBefore;
      function remove(selector) {
        var elems = selector ? this.filter(selector) : this;
        (0, utils_js_1.domEach)(elems, function(el) {
          (0, domutils_1.removeElement)(el);
          el.prev = el.next = el.parent = null;
        });
        return this;
      }
      exports.remove = remove;
      function replaceWith(content) {
        var _this = this;
        return (0, utils_js_1.domEach)(this, function(el, i) {
          var parent = el.parent;
          if (!parent) {
            return;
          }
          var siblings = parent.children;
          var cont = typeof content === "function" ? content.call(el, i, el) : content;
          var dom = _this._makeDomArray(cont);
          (0, parse_js_1.update)(dom, null);
          var index = siblings.indexOf(el);
          uniqueSplice(siblings, index, 1, dom, parent);
          if (!dom.includes(el)) {
            el.parent = el.prev = el.next = null;
          }
        });
      }
      exports.replaceWith = replaceWith;
      function empty() {
        return (0, utils_js_1.domEach)(this, function(el) {
          if (!(0, domhandler_1.hasChildren)(el))
            return;
          el.children.forEach(function(child) {
            child.next = child.prev = child.parent = null;
          });
          el.children.length = 0;
        });
      }
      exports.empty = empty;
      function html(str) {
        var _this = this;
        if (str === void 0) {
          var el = this[0];
          if (!el || !(0, domhandler_1.hasChildren)(el))
            return null;
          return this._render(el.children);
        }
        return (0, utils_js_1.domEach)(this, function(el2) {
          if (!(0, domhandler_1.hasChildren)(el2))
            return;
          el2.children.forEach(function(child) {
            child.next = child.prev = child.parent = null;
          });
          var content = (0, utils_js_1.isCheerio)(str) ? str.toArray() : _this._parse("".concat(str), _this.options, false, el2).children;
          (0, parse_js_1.update)(content, el2);
        });
      }
      exports.html = html;
      function toString() {
        return this._render(this);
      }
      exports.toString = toString;
      function text(str) {
        var _this = this;
        if (str === void 0) {
          return (0, static_js_1.text)(this);
        }
        if (typeof str === "function") {
          return (0, utils_js_1.domEach)(this, function(el, i) {
            return _this._make(el).text(str.call(el, i, (0, static_js_1.text)([el])));
          });
        }
        return (0, utils_js_1.domEach)(this, function(el) {
          if (!(0, domhandler_1.hasChildren)(el))
            return;
          el.children.forEach(function(child) {
            child.next = child.prev = child.parent = null;
          });
          var textNode = new domhandler_1.Text("".concat(str));
          (0, parse_js_1.update)(textNode, el);
        });
      }
      exports.text = text;
      function clone() {
        return this._make((0, utils_js_1.cloneDom)(this.get()));
      }
      exports.clone = clone;
    }
  });

  // node_modules/cheerio/lib/api/css.js
  var require_css = __commonJS({
    "node_modules/cheerio/lib/api/css.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.css = void 0;
      var utils_js_1 = require_utils();
      function css(prop, val) {
        if (prop != null && val != null || // When `prop` is a "plain" object
        typeof prop === "object" && !Array.isArray(prop)) {
          return (0, utils_js_1.domEach)(this, function(el, i) {
            if ((0, utils_js_1.isTag)(el)) {
              setCss(el, prop, val, i);
            }
          });
        }
        if (this.length === 0) {
          return void 0;
        }
        return getCss(this[0], prop);
      }
      exports.css = css;
      function setCss(el, prop, value, idx) {
        if (typeof prop === "string") {
          var styles = getCss(el);
          var val = typeof value === "function" ? value.call(el, idx, styles[prop]) : value;
          if (val === "") {
            delete styles[prop];
          } else if (val != null) {
            styles[prop] = val;
          }
          el.attribs["style"] = stringify(styles);
        } else if (typeof prop === "object") {
          Object.keys(prop).forEach(function(k, i) {
            setCss(el, k, prop[k], i);
          });
        }
      }
      function getCss(el, prop) {
        if (!el || !(0, utils_js_1.isTag)(el))
          return;
        var styles = parse(el.attribs["style"]);
        if (typeof prop === "string") {
          return styles[prop];
        }
        if (Array.isArray(prop)) {
          var newStyles_1 = {};
          prop.forEach(function(item) {
            if (styles[item] != null) {
              newStyles_1[item] = styles[item];
            }
          });
          return newStyles_1;
        }
        return styles;
      }
      function stringify(obj) {
        return Object.keys(obj).reduce(function(str, prop) {
          return "".concat(str).concat(str ? " " : "").concat(prop, ": ").concat(obj[prop], ";");
        }, "");
      }
      function parse(styles) {
        styles = (styles || "").trim();
        if (!styles)
          return {};
        var obj = {};
        var key;
        for (var _i = 0, _a = styles.split(";"); _i < _a.length; _i++) {
          var str = _a[_i];
          var n = str.indexOf(":");
          if (n < 1 || n === str.length - 1) {
            var trimmed = str.trimEnd();
            if (trimmed.length > 0 && key !== void 0) {
              obj[key] += ";".concat(trimmed);
            }
          } else {
            key = str.slice(0, n).trim();
            obj[key] = str.slice(n + 1).trim();
          }
        }
        return obj;
      }
    }
  });

  // node_modules/cheerio/lib/api/forms.js
  var require_forms = __commonJS({
    "node_modules/cheerio/lib/api/forms.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.serializeArray = exports.serialize = void 0;
      var utils_js_1 = require_utils();
      var submittableSelector = "input,select,textarea,keygen";
      var r20 = /%20/g;
      var rCRLF = /\r?\n/g;
      function serialize() {
        var arr = this.serializeArray();
        var retArr = arr.map(function(data) {
          return "".concat(encodeURIComponent(data.name), "=").concat(encodeURIComponent(data.value));
        });
        return retArr.join("&").replace(r20, "+");
      }
      exports.serialize = serialize;
      function serializeArray() {
        var _this = this;
        return this.map(function(_, elem) {
          var $elem = _this._make(elem);
          if ((0, utils_js_1.isTag)(elem) && elem.name === "form") {
            return $elem.find(submittableSelector).toArray();
          }
          return $elem.filter(submittableSelector).toArray();
        }).filter(
          // Verify elements have a name (`attr.name`) and are not disabled (`:enabled`)
          '[name!=""]:enabled:not(:submit, :button, :image, :reset, :file):matches([checked], :not(:checkbox, :radio))'
          // Convert each of the elements to its value(s)
        ).map(function(_, elem) {
          var _a;
          var $elem = _this._make(elem);
          var name = $elem.attr("name");
          var value = (_a = $elem.val()) !== null && _a !== void 0 ? _a : "";
          if (Array.isArray(value)) {
            return value.map(function(val) {
              return { name, value: val.replace(rCRLF, "\r\n") };
            });
          }
          return { name, value: value.replace(rCRLF, "\r\n") };
        }).toArray();
      }
      exports.serializeArray = serializeArray;
    }
  });

  // node_modules/cheerio/lib/cheerio.js
  var require_cheerio = __commonJS({
    "node_modules/cheerio/lib/cheerio.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports && exports.__importStar || function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Cheerio = void 0;
      var Attributes = __importStar(require_attributes());
      var Traversing = __importStar(require_traversing());
      var Manipulation = __importStar(require_manipulation2());
      var Css = __importStar(require_css());
      var Forms = __importStar(require_forms());
      var Cheerio = (
        /** @class */
        function() {
          function Cheerio2(elements, root, options) {
            this.length = 0;
            this.options = options;
            this._root = root;
            if (elements) {
              for (var idx = 0; idx < elements.length; idx++) {
                this[idx] = elements[idx];
              }
              this.length = elements.length;
            }
          }
          return Cheerio2;
        }()
      );
      exports.Cheerio = Cheerio;
      Cheerio.prototype.cheerio = "[cheerio object]";
      Cheerio.prototype.splice = Array.prototype.splice;
      Cheerio.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator];
      Object.assign(Cheerio.prototype, Attributes, Traversing, Manipulation, Css, Forms);
    }
  });

  // node_modules/cheerio/lib/load.js
  var require_load = __commonJS({
    "node_modules/cheerio/lib/load.js"(exports) {
      "use strict";
      var __extends = exports && exports.__extends || function() {
        var extendStatics = function(d, b) {
          extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
            d2.__proto__ = b2;
          } || function(d2, b2) {
            for (var p in b2)
              if (Object.prototype.hasOwnProperty.call(b2, p))
                d2[p] = b2[p];
          };
          return extendStatics(d, b);
        };
        return function(d, b) {
          if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
          extendStatics(d, b);
          function __() {
            this.constructor = d;
          }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      }();
      var __assign = exports && exports.__assign || function() {
        __assign = Object.assign || function(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s)
              if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
          }
          return t;
        };
        return __assign.apply(this, arguments);
      };
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports && exports.__importStar || function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.getLoad = void 0;
      var options_js_1 = __importStar(require_options());
      var staticMethods = __importStar(require_static());
      var cheerio_js_1 = require_cheerio();
      var utils_js_1 = require_utils();
      function getLoad(parse, render) {
        return function load(content, options, isDocument) {
          if (isDocument === void 0) {
            isDocument = true;
          }
          if (content == null) {
            throw new Error("cheerio.load() expects a string");
          }
          var internalOpts = __assign(__assign({}, options_js_1.default), (0, options_js_1.flatten)(options));
          var initialRoot = parse(content, internalOpts, isDocument, null);
          var LoadedCheerio = (
            /** @class */
            function(_super) {
              __extends(LoadedCheerio2, _super);
              function LoadedCheerio2() {
                return _super !== null && _super.apply(this, arguments) || this;
              }
              LoadedCheerio2.prototype._make = function(selector, context) {
                var cheerio = initialize(selector, context);
                cheerio.prevObject = this;
                return cheerio;
              };
              LoadedCheerio2.prototype._parse = function(content2, options2, isDocument2, context) {
                return parse(content2, options2, isDocument2, context);
              };
              LoadedCheerio2.prototype._render = function(dom) {
                return render(dom, this.options);
              };
              return LoadedCheerio2;
            }(cheerio_js_1.Cheerio)
          );
          function initialize(selector, context, root, opts) {
            if (root === void 0) {
              root = initialRoot;
            }
            if (selector && (0, utils_js_1.isCheerio)(selector))
              return selector;
            var options2 = __assign(__assign({}, internalOpts), (0, options_js_1.flatten)(opts));
            var r = typeof root === "string" ? [parse(root, options2, false, null)] : "length" in root ? root : [root];
            var rootInstance = (0, utils_js_1.isCheerio)(r) ? r : new LoadedCheerio(r, null, options2);
            rootInstance._root = rootInstance;
            if (!selector) {
              return new LoadedCheerio(void 0, rootInstance, options2);
            }
            var elements = typeof selector === "string" && (0, utils_js_1.isHtml)(selector) ? (
              // $(<html>)
              parse(selector, options2, false, null).children
            ) : isNode(selector) ? (
              // $(dom)
              [selector]
            ) : Array.isArray(selector) ? (
              // $([dom])
              selector
            ) : void 0;
            var instance = new LoadedCheerio(elements, rootInstance, options2);
            if (elements) {
              return instance;
            }
            if (typeof selector !== "string") {
              throw new Error("Unexpected type of selector");
            }
            var search = selector;
            var searchContext = !context ? (
              // If we don't have a context, maybe we have a root, from loading
              rootInstance
            ) : typeof context === "string" ? (0, utils_js_1.isHtml)(context) ? (
              // $('li', '<ul>...</ul>')
              new LoadedCheerio([parse(context, options2, false, null)], rootInstance, options2)
            ) : (
              // $('li', 'ul')
              (search = "".concat(context, " ").concat(search), rootInstance)
            ) : (0, utils_js_1.isCheerio)(context) ? (
              // $('li', $)
              context
            ) : (
              // $('li', node), $('li', [nodes])
              new LoadedCheerio(Array.isArray(context) ? context : [context], rootInstance, options2)
            );
            if (!searchContext)
              return instance;
            return searchContext.find(search);
          }
          Object.assign(initialize, staticMethods, {
            load,
            // `_root` and `_options` are used in static methods.
            _root: initialRoot,
            _options: internalOpts,
            // Add `fn` for plugins
            fn: LoadedCheerio.prototype,
            // Add the prototype here to maintain `instanceof` behavior.
            prototype: LoadedCheerio.prototype
          });
          return initialize;
        };
      }
      exports.getLoad = getLoad;
      function isNode(obj) {
        return !!obj.name || obj.type === "root" || obj.type === "text" || obj.type === "comment";
      }
    }
  });

  // node_modules/parse5/dist/cjs/common/unicode.js
  var require_unicode = __commonJS({
    "node_modules/parse5/dist/cjs/common/unicode.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.isUndefinedCodePoint = exports.isControlCodePoint = exports.getSurrogatePairCodePoint = exports.isSurrogatePair = exports.isSurrogate = exports.SEQUENCES = exports.CODE_POINTS = exports.REPLACEMENT_CHARACTER = void 0;
      var UNDEFINED_CODE_POINTS = /* @__PURE__ */ new Set([
        65534,
        65535,
        131070,
        131071,
        196606,
        196607,
        262142,
        262143,
        327678,
        327679,
        393214,
        393215,
        458750,
        458751,
        524286,
        524287,
        589822,
        589823,
        655358,
        655359,
        720894,
        720895,
        786430,
        786431,
        851966,
        851967,
        917502,
        917503,
        983038,
        983039,
        1048574,
        1048575,
        1114110,
        1114111
      ]);
      exports.REPLACEMENT_CHARACTER = "\uFFFD";
      var CODE_POINTS;
      (function(CODE_POINTS2) {
        CODE_POINTS2[CODE_POINTS2["EOF"] = -1] = "EOF";
        CODE_POINTS2[CODE_POINTS2["NULL"] = 0] = "NULL";
        CODE_POINTS2[CODE_POINTS2["TABULATION"] = 9] = "TABULATION";
        CODE_POINTS2[CODE_POINTS2["CARRIAGE_RETURN"] = 13] = "CARRIAGE_RETURN";
        CODE_POINTS2[CODE_POINTS2["LINE_FEED"] = 10] = "LINE_FEED";
        CODE_POINTS2[CODE_POINTS2["FORM_FEED"] = 12] = "FORM_FEED";
        CODE_POINTS2[CODE_POINTS2["SPACE"] = 32] = "SPACE";
        CODE_POINTS2[CODE_POINTS2["EXCLAMATION_MARK"] = 33] = "EXCLAMATION_MARK";
        CODE_POINTS2[CODE_POINTS2["QUOTATION_MARK"] = 34] = "QUOTATION_MARK";
        CODE_POINTS2[CODE_POINTS2["NUMBER_SIGN"] = 35] = "NUMBER_SIGN";
        CODE_POINTS2[CODE_POINTS2["AMPERSAND"] = 38] = "AMPERSAND";
        CODE_POINTS2[CODE_POINTS2["APOSTROPHE"] = 39] = "APOSTROPHE";
        CODE_POINTS2[CODE_POINTS2["HYPHEN_MINUS"] = 45] = "HYPHEN_MINUS";
        CODE_POINTS2[CODE_POINTS2["SOLIDUS"] = 47] = "SOLIDUS";
        CODE_POINTS2[CODE_POINTS2["DIGIT_0"] = 48] = "DIGIT_0";
        CODE_POINTS2[CODE_POINTS2["DIGIT_9"] = 57] = "DIGIT_9";
        CODE_POINTS2[CODE_POINTS2["SEMICOLON"] = 59] = "SEMICOLON";
        CODE_POINTS2[CODE_POINTS2["LESS_THAN_SIGN"] = 60] = "LESS_THAN_SIGN";
        CODE_POINTS2[CODE_POINTS2["EQUALS_SIGN"] = 61] = "EQUALS_SIGN";
        CODE_POINTS2[CODE_POINTS2["GREATER_THAN_SIGN"] = 62] = "GREATER_THAN_SIGN";
        CODE_POINTS2[CODE_POINTS2["QUESTION_MARK"] = 63] = "QUESTION_MARK";
        CODE_POINTS2[CODE_POINTS2["LATIN_CAPITAL_A"] = 65] = "LATIN_CAPITAL_A";
        CODE_POINTS2[CODE_POINTS2["LATIN_CAPITAL_F"] = 70] = "LATIN_CAPITAL_F";
        CODE_POINTS2[CODE_POINTS2["LATIN_CAPITAL_X"] = 88] = "LATIN_CAPITAL_X";
        CODE_POINTS2[CODE_POINTS2["LATIN_CAPITAL_Z"] = 90] = "LATIN_CAPITAL_Z";
        CODE_POINTS2[CODE_POINTS2["RIGHT_SQUARE_BRACKET"] = 93] = "RIGHT_SQUARE_BRACKET";
        CODE_POINTS2[CODE_POINTS2["GRAVE_ACCENT"] = 96] = "GRAVE_ACCENT";
        CODE_POINTS2[CODE_POINTS2["LATIN_SMALL_A"] = 97] = "LATIN_SMALL_A";
        CODE_POINTS2[CODE_POINTS2["LATIN_SMALL_F"] = 102] = "LATIN_SMALL_F";
        CODE_POINTS2[CODE_POINTS2["LATIN_SMALL_X"] = 120] = "LATIN_SMALL_X";
        CODE_POINTS2[CODE_POINTS2["LATIN_SMALL_Z"] = 122] = "LATIN_SMALL_Z";
        CODE_POINTS2[CODE_POINTS2["REPLACEMENT_CHARACTER"] = 65533] = "REPLACEMENT_CHARACTER";
      })(CODE_POINTS = exports.CODE_POINTS || (exports.CODE_POINTS = {}));
      exports.SEQUENCES = {
        DASH_DASH: "--",
        CDATA_START: "[CDATA[",
        DOCTYPE: "doctype",
        SCRIPT: "script",
        PUBLIC: "public",
        SYSTEM: "system"
      };
      function isSurrogate(cp) {
        return cp >= 55296 && cp <= 57343;
      }
      exports.isSurrogate = isSurrogate;
      function isSurrogatePair(cp) {
        return cp >= 56320 && cp <= 57343;
      }
      exports.isSurrogatePair = isSurrogatePair;
      function getSurrogatePairCodePoint(cp1, cp2) {
        return (cp1 - 55296) * 1024 + 9216 + cp2;
      }
      exports.getSurrogatePairCodePoint = getSurrogatePairCodePoint;
      function isControlCodePoint(cp) {
        return cp !== 32 && cp !== 10 && cp !== 13 && cp !== 9 && cp !== 12 && cp >= 1 && cp <= 31 || cp >= 127 && cp <= 159;
      }
      exports.isControlCodePoint = isControlCodePoint;
      function isUndefinedCodePoint(cp) {
        return cp >= 64976 && cp <= 65007 || UNDEFINED_CODE_POINTS.has(cp);
      }
      exports.isUndefinedCodePoint = isUndefinedCodePoint;
    }
  });

  // node_modules/parse5/dist/cjs/common/error-codes.js
  var require_error_codes = __commonJS({
    "node_modules/parse5/dist/cjs/common/error-codes.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.ERR = void 0;
      var ERR;
      (function(ERR2) {
        ERR2["controlCharacterInInputStream"] = "control-character-in-input-stream";
        ERR2["noncharacterInInputStream"] = "noncharacter-in-input-stream";
        ERR2["surrogateInInputStream"] = "surrogate-in-input-stream";
        ERR2["nonVoidHtmlElementStartTagWithTrailingSolidus"] = "non-void-html-element-start-tag-with-trailing-solidus";
        ERR2["endTagWithAttributes"] = "end-tag-with-attributes";
        ERR2["endTagWithTrailingSolidus"] = "end-tag-with-trailing-solidus";
        ERR2["unexpectedSolidusInTag"] = "unexpected-solidus-in-tag";
        ERR2["unexpectedNullCharacter"] = "unexpected-null-character";
        ERR2["unexpectedQuestionMarkInsteadOfTagName"] = "unexpected-question-mark-instead-of-tag-name";
        ERR2["invalidFirstCharacterOfTagName"] = "invalid-first-character-of-tag-name";
        ERR2["unexpectedEqualsSignBeforeAttributeName"] = "unexpected-equals-sign-before-attribute-name";
        ERR2["missingEndTagName"] = "missing-end-tag-name";
        ERR2["unexpectedCharacterInAttributeName"] = "unexpected-character-in-attribute-name";
        ERR2["unknownNamedCharacterReference"] = "unknown-named-character-reference";
        ERR2["missingSemicolonAfterCharacterReference"] = "missing-semicolon-after-character-reference";
        ERR2["unexpectedCharacterAfterDoctypeSystemIdentifier"] = "unexpected-character-after-doctype-system-identifier";
        ERR2["unexpectedCharacterInUnquotedAttributeValue"] = "unexpected-character-in-unquoted-attribute-value";
        ERR2["eofBeforeTagName"] = "eof-before-tag-name";
        ERR2["eofInTag"] = "eof-in-tag";
        ERR2["missingAttributeValue"] = "missing-attribute-value";
        ERR2["missingWhitespaceBetweenAttributes"] = "missing-whitespace-between-attributes";
        ERR2["missingWhitespaceAfterDoctypePublicKeyword"] = "missing-whitespace-after-doctype-public-keyword";
        ERR2["missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers"] = "missing-whitespace-between-doctype-public-and-system-identifiers";
        ERR2["missingWhitespaceAfterDoctypeSystemKeyword"] = "missing-whitespace-after-doctype-system-keyword";
        ERR2["missingQuoteBeforeDoctypePublicIdentifier"] = "missing-quote-before-doctype-public-identifier";
        ERR2["missingQuoteBeforeDoctypeSystemIdentifier"] = "missing-quote-before-doctype-system-identifier";
        ERR2["missingDoctypePublicIdentifier"] = "missing-doctype-public-identifier";
        ERR2["missingDoctypeSystemIdentifier"] = "missing-doctype-system-identifier";
        ERR2["abruptDoctypePublicIdentifier"] = "abrupt-doctype-public-identifier";
        ERR2["abruptDoctypeSystemIdentifier"] = "abrupt-doctype-system-identifier";
        ERR2["cdataInHtmlContent"] = "cdata-in-html-content";
        ERR2["incorrectlyOpenedComment"] = "incorrectly-opened-comment";
        ERR2["eofInScriptHtmlCommentLikeText"] = "eof-in-script-html-comment-like-text";
        ERR2["eofInDoctype"] = "eof-in-doctype";
        ERR2["nestedComment"] = "nested-comment";
        ERR2["abruptClosingOfEmptyComment"] = "abrupt-closing-of-empty-comment";
        ERR2["eofInComment"] = "eof-in-comment";
        ERR2["incorrectlyClosedComment"] = "incorrectly-closed-comment";
        ERR2["eofInCdata"] = "eof-in-cdata";
        ERR2["absenceOfDigitsInNumericCharacterReference"] = "absence-of-digits-in-numeric-character-reference";
        ERR2["nullCharacterReference"] = "null-character-reference";
        ERR2["surrogateCharacterReference"] = "surrogate-character-reference";
        ERR2["characterReferenceOutsideUnicodeRange"] = "character-reference-outside-unicode-range";
        ERR2["controlCharacterReference"] = "control-character-reference";
        ERR2["noncharacterCharacterReference"] = "noncharacter-character-reference";
        ERR2["missingWhitespaceBeforeDoctypeName"] = "missing-whitespace-before-doctype-name";
        ERR2["missingDoctypeName"] = "missing-doctype-name";
        ERR2["invalidCharacterSequenceAfterDoctypeName"] = "invalid-character-sequence-after-doctype-name";
        ERR2["duplicateAttribute"] = "duplicate-attribute";
        ERR2["nonConformingDoctype"] = "non-conforming-doctype";
        ERR2["missingDoctype"] = "missing-doctype";
        ERR2["misplacedDoctype"] = "misplaced-doctype";
        ERR2["endTagWithoutMatchingOpenElement"] = "end-tag-without-matching-open-element";
        ERR2["closingOfElementWithOpenChildElements"] = "closing-of-element-with-open-child-elements";
        ERR2["disallowedContentInNoscriptInHead"] = "disallowed-content-in-noscript-in-head";
        ERR2["openElementsLeftAfterEof"] = "open-elements-left-after-eof";
        ERR2["abandonedHeadElementChild"] = "abandoned-head-element-child";
        ERR2["misplacedStartTagForHeadElement"] = "misplaced-start-tag-for-head-element";
        ERR2["nestedNoscriptInHead"] = "nested-noscript-in-head";
        ERR2["eofInElementThatCanContainOnlyText"] = "eof-in-element-that-can-contain-only-text";
      })(ERR = exports.ERR || (exports.ERR = {}));
    }
  });

  // node_modules/parse5/dist/cjs/tokenizer/preprocessor.js
  var require_preprocessor = __commonJS({
    "node_modules/parse5/dist/cjs/tokenizer/preprocessor.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Preprocessor = void 0;
      var unicode_js_1 = require_unicode();
      var error_codes_js_1 = require_error_codes();
      var DEFAULT_BUFFER_WATERLINE = 1 << 16;
      var Preprocessor = class {
        constructor(handler) {
          this.handler = handler;
          this.html = "";
          this.pos = -1;
          this.lastGapPos = -2;
          this.gapStack = [];
          this.skipNextNewLine = false;
          this.lastChunkWritten = false;
          this.endOfChunkHit = false;
          this.bufferWaterline = DEFAULT_BUFFER_WATERLINE;
          this.isEol = false;
          this.lineStartPos = 0;
          this.droppedBufferSize = 0;
          this.line = 1;
          this.lastErrOffset = -1;
        }
        /** The column on the current line. If we just saw a gap (eg. a surrogate pair), return the index before. */
        get col() {
          return this.pos - this.lineStartPos + Number(this.lastGapPos !== this.pos);
        }
        get offset() {
          return this.droppedBufferSize + this.pos;
        }
        getError(code) {
          const { line, col, offset } = this;
          return {
            code,
            startLine: line,
            endLine: line,
            startCol: col,
            endCol: col,
            startOffset: offset,
            endOffset: offset
          };
        }
        _err(code) {
          if (this.handler.onParseError && this.lastErrOffset !== this.offset) {
            this.lastErrOffset = this.offset;
            this.handler.onParseError(this.getError(code));
          }
        }
        _addGap() {
          this.gapStack.push(this.lastGapPos);
          this.lastGapPos = this.pos;
        }
        _processSurrogate(cp) {
          if (this.pos !== this.html.length - 1) {
            const nextCp = this.html.charCodeAt(this.pos + 1);
            if ((0, unicode_js_1.isSurrogatePair)(nextCp)) {
              this.pos++;
              this._addGap();
              return (0, unicode_js_1.getSurrogatePairCodePoint)(cp, nextCp);
            }
          } else if (!this.lastChunkWritten) {
            this.endOfChunkHit = true;
            return unicode_js_1.CODE_POINTS.EOF;
          }
          this._err(error_codes_js_1.ERR.surrogateInInputStream);
          return cp;
        }
        willDropParsedChunk() {
          return this.pos > this.bufferWaterline;
        }
        dropParsedChunk() {
          if (this.willDropParsedChunk()) {
            this.html = this.html.substring(this.pos);
            this.lineStartPos -= this.pos;
            this.droppedBufferSize += this.pos;
            this.pos = 0;
            this.lastGapPos = -2;
            this.gapStack.length = 0;
          }
        }
        write(chunk, isLastChunk) {
          if (this.html.length > 0) {
            this.html += chunk;
          } else {
            this.html = chunk;
          }
          this.endOfChunkHit = false;
          this.lastChunkWritten = isLastChunk;
        }
        insertHtmlAtCurrentPos(chunk) {
          this.html = this.html.substring(0, this.pos + 1) + chunk + this.html.substring(this.pos + 1);
          this.endOfChunkHit = false;
        }
        startsWith(pattern, caseSensitive) {
          if (this.pos + pattern.length > this.html.length) {
            this.endOfChunkHit = !this.lastChunkWritten;
            return false;
          }
          if (caseSensitive) {
            return this.html.startsWith(pattern, this.pos);
          }
          for (let i = 0; i < pattern.length; i++) {
            const cp = this.html.charCodeAt(this.pos + i) | 32;
            if (cp !== pattern.charCodeAt(i)) {
              return false;
            }
          }
          return true;
        }
        peek(offset) {
          const pos = this.pos + offset;
          if (pos >= this.html.length) {
            this.endOfChunkHit = !this.lastChunkWritten;
            return unicode_js_1.CODE_POINTS.EOF;
          }
          const code = this.html.charCodeAt(pos);
          return code === unicode_js_1.CODE_POINTS.CARRIAGE_RETURN ? unicode_js_1.CODE_POINTS.LINE_FEED : code;
        }
        advance() {
          this.pos++;
          if (this.isEol) {
            this.isEol = false;
            this.line++;
            this.lineStartPos = this.pos;
          }
          if (this.pos >= this.html.length) {
            this.endOfChunkHit = !this.lastChunkWritten;
            return unicode_js_1.CODE_POINTS.EOF;
          }
          let cp = this.html.charCodeAt(this.pos);
          if (cp === unicode_js_1.CODE_POINTS.CARRIAGE_RETURN) {
            this.isEol = true;
            this.skipNextNewLine = true;
            return unicode_js_1.CODE_POINTS.LINE_FEED;
          }
          if (cp === unicode_js_1.CODE_POINTS.LINE_FEED) {
            this.isEol = true;
            if (this.skipNextNewLine) {
              this.line--;
              this.skipNextNewLine = false;
              this._addGap();
              return this.advance();
            }
          }
          this.skipNextNewLine = false;
          if ((0, unicode_js_1.isSurrogate)(cp)) {
            cp = this._processSurrogate(cp);
          }
          const isCommonValidRange = this.handler.onParseError === null || cp > 31 && cp < 127 || cp === unicode_js_1.CODE_POINTS.LINE_FEED || cp === unicode_js_1.CODE_POINTS.CARRIAGE_RETURN || cp > 159 && cp < 64976;
          if (!isCommonValidRange) {
            this._checkForProblematicCharacters(cp);
          }
          return cp;
        }
        _checkForProblematicCharacters(cp) {
          if ((0, unicode_js_1.isControlCodePoint)(cp)) {
            this._err(error_codes_js_1.ERR.controlCharacterInInputStream);
          } else if ((0, unicode_js_1.isUndefinedCodePoint)(cp)) {
            this._err(error_codes_js_1.ERR.noncharacterInInputStream);
          }
        }
        retreat(count) {
          this.pos -= count;
          while (this.pos < this.lastGapPos) {
            this.lastGapPos = this.gapStack.pop();
            this.pos--;
          }
          this.isEol = false;
        }
      };
      exports.Preprocessor = Preprocessor;
    }
  });

  // node_modules/parse5/dist/cjs/common/token.js
  var require_token = __commonJS({
    "node_modules/parse5/dist/cjs/common/token.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.getTokenAttr = exports.TokenType = void 0;
      var TokenType;
      (function(TokenType2) {
        TokenType2[TokenType2["CHARACTER"] = 0] = "CHARACTER";
        TokenType2[TokenType2["NULL_CHARACTER"] = 1] = "NULL_CHARACTER";
        TokenType2[TokenType2["WHITESPACE_CHARACTER"] = 2] = "WHITESPACE_CHARACTER";
        TokenType2[TokenType2["START_TAG"] = 3] = "START_TAG";
        TokenType2[TokenType2["END_TAG"] = 4] = "END_TAG";
        TokenType2[TokenType2["COMMENT"] = 5] = "COMMENT";
        TokenType2[TokenType2["DOCTYPE"] = 6] = "DOCTYPE";
        TokenType2[TokenType2["EOF"] = 7] = "EOF";
        TokenType2[TokenType2["HIBERNATION"] = 8] = "HIBERNATION";
      })(TokenType = exports.TokenType || (exports.TokenType = {}));
      function getTokenAttr(token, attrName) {
        for (let i = token.attrs.length - 1; i >= 0; i--) {
          if (token.attrs[i].name === attrName) {
            return token.attrs[i].value;
          }
        }
        return null;
      }
      exports.getTokenAttr = getTokenAttr;
    }
  });

  // node_modules/parse5/dist/cjs/common/html.js
  var require_html = __commonJS({
    "node_modules/parse5/dist/cjs/common/html.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.hasUnescapedText = exports.isNumberedHeader = exports.SPECIAL_ELEMENTS = exports.getTagID = exports.TAG_ID = exports.TAG_NAMES = exports.DOCUMENT_MODE = exports.ATTRS = exports.NS = void 0;
      var NS;
      (function(NS2) {
        NS2["HTML"] = "http://www.w3.org/1999/xhtml";
        NS2["MATHML"] = "http://www.w3.org/1998/Math/MathML";
        NS2["SVG"] = "http://www.w3.org/2000/svg";
        NS2["XLINK"] = "http://www.w3.org/1999/xlink";
        NS2["XML"] = "http://www.w3.org/XML/1998/namespace";
        NS2["XMLNS"] = "http://www.w3.org/2000/xmlns/";
      })(NS = exports.NS || (exports.NS = {}));
      var ATTRS;
      (function(ATTRS2) {
        ATTRS2["TYPE"] = "type";
        ATTRS2["ACTION"] = "action";
        ATTRS2["ENCODING"] = "encoding";
        ATTRS2["PROMPT"] = "prompt";
        ATTRS2["NAME"] = "name";
        ATTRS2["COLOR"] = "color";
        ATTRS2["FACE"] = "face";
        ATTRS2["SIZE"] = "size";
      })(ATTRS = exports.ATTRS || (exports.ATTRS = {}));
      var DOCUMENT_MODE;
      (function(DOCUMENT_MODE2) {
        DOCUMENT_MODE2["NO_QUIRKS"] = "no-quirks";
        DOCUMENT_MODE2["QUIRKS"] = "quirks";
        DOCUMENT_MODE2["LIMITED_QUIRKS"] = "limited-quirks";
      })(DOCUMENT_MODE = exports.DOCUMENT_MODE || (exports.DOCUMENT_MODE = {}));
      var TAG_NAMES;
      (function(TAG_NAMES2) {
        TAG_NAMES2["A"] = "a";
        TAG_NAMES2["ADDRESS"] = "address";
        TAG_NAMES2["ANNOTATION_XML"] = "annotation-xml";
        TAG_NAMES2["APPLET"] = "applet";
        TAG_NAMES2["AREA"] = "area";
        TAG_NAMES2["ARTICLE"] = "article";
        TAG_NAMES2["ASIDE"] = "aside";
        TAG_NAMES2["B"] = "b";
        TAG_NAMES2["BASE"] = "base";
        TAG_NAMES2["BASEFONT"] = "basefont";
        TAG_NAMES2["BGSOUND"] = "bgsound";
        TAG_NAMES2["BIG"] = "big";
        TAG_NAMES2["BLOCKQUOTE"] = "blockquote";
        TAG_NAMES2["BODY"] = "body";
        TAG_NAMES2["BR"] = "br";
        TAG_NAMES2["BUTTON"] = "button";
        TAG_NAMES2["CAPTION"] = "caption";
        TAG_NAMES2["CENTER"] = "center";
        TAG_NAMES2["CODE"] = "code";
        TAG_NAMES2["COL"] = "col";
        TAG_NAMES2["COLGROUP"] = "colgroup";
        TAG_NAMES2["DD"] = "dd";
        TAG_NAMES2["DESC"] = "desc";
        TAG_NAMES2["DETAILS"] = "details";
        TAG_NAMES2["DIALOG"] = "dialog";
        TAG_NAMES2["DIR"] = "dir";
        TAG_NAMES2["DIV"] = "div";
        TAG_NAMES2["DL"] = "dl";
        TAG_NAMES2["DT"] = "dt";
        TAG_NAMES2["EM"] = "em";
        TAG_NAMES2["EMBED"] = "embed";
        TAG_NAMES2["FIELDSET"] = "fieldset";
        TAG_NAMES2["FIGCAPTION"] = "figcaption";
        TAG_NAMES2["FIGURE"] = "figure";
        TAG_NAMES2["FONT"] = "font";
        TAG_NAMES2["FOOTER"] = "footer";
        TAG_NAMES2["FOREIGN_OBJECT"] = "foreignObject";
        TAG_NAMES2["FORM"] = "form";
        TAG_NAMES2["FRAME"] = "frame";
        TAG_NAMES2["FRAMESET"] = "frameset";
        TAG_NAMES2["H1"] = "h1";
        TAG_NAMES2["H2"] = "h2";
        TAG_NAMES2["H3"] = "h3";
        TAG_NAMES2["H4"] = "h4";
        TAG_NAMES2["H5"] = "h5";
        TAG_NAMES2["H6"] = "h6";
        TAG_NAMES2["HEAD"] = "head";
        TAG_NAMES2["HEADER"] = "header";
        TAG_NAMES2["HGROUP"] = "hgroup";
        TAG_NAMES2["HR"] = "hr";
        TAG_NAMES2["HTML"] = "html";
        TAG_NAMES2["I"] = "i";
        TAG_NAMES2["IMG"] = "img";
        TAG_NAMES2["IMAGE"] = "image";
        TAG_NAMES2["INPUT"] = "input";
        TAG_NAMES2["IFRAME"] = "iframe";
        TAG_NAMES2["KEYGEN"] = "keygen";
        TAG_NAMES2["LABEL"] = "label";
        TAG_NAMES2["LI"] = "li";
        TAG_NAMES2["LINK"] = "link";
        TAG_NAMES2["LISTING"] = "listing";
        TAG_NAMES2["MAIN"] = "main";
        TAG_NAMES2["MALIGNMARK"] = "malignmark";
        TAG_NAMES2["MARQUEE"] = "marquee";
        TAG_NAMES2["MATH"] = "math";
        TAG_NAMES2["MENU"] = "menu";
        TAG_NAMES2["META"] = "meta";
        TAG_NAMES2["MGLYPH"] = "mglyph";
        TAG_NAMES2["MI"] = "mi";
        TAG_NAMES2["MO"] = "mo";
        TAG_NAMES2["MN"] = "mn";
        TAG_NAMES2["MS"] = "ms";
        TAG_NAMES2["MTEXT"] = "mtext";
        TAG_NAMES2["NAV"] = "nav";
        TAG_NAMES2["NOBR"] = "nobr";
        TAG_NAMES2["NOFRAMES"] = "noframes";
        TAG_NAMES2["NOEMBED"] = "noembed";
        TAG_NAMES2["NOSCRIPT"] = "noscript";
        TAG_NAMES2["OBJECT"] = "object";
        TAG_NAMES2["OL"] = "ol";
        TAG_NAMES2["OPTGROUP"] = "optgroup";
        TAG_NAMES2["OPTION"] = "option";
        TAG_NAMES2["P"] = "p";
        TAG_NAMES2["PARAM"] = "param";
        TAG_NAMES2["PLAINTEXT"] = "plaintext";
        TAG_NAMES2["PRE"] = "pre";
        TAG_NAMES2["RB"] = "rb";
        TAG_NAMES2["RP"] = "rp";
        TAG_NAMES2["RT"] = "rt";
        TAG_NAMES2["RTC"] = "rtc";
        TAG_NAMES2["RUBY"] = "ruby";
        TAG_NAMES2["S"] = "s";
        TAG_NAMES2["SCRIPT"] = "script";
        TAG_NAMES2["SECTION"] = "section";
        TAG_NAMES2["SELECT"] = "select";
        TAG_NAMES2["SOURCE"] = "source";
        TAG_NAMES2["SMALL"] = "small";
        TAG_NAMES2["SPAN"] = "span";
        TAG_NAMES2["STRIKE"] = "strike";
        TAG_NAMES2["STRONG"] = "strong";
        TAG_NAMES2["STYLE"] = "style";
        TAG_NAMES2["SUB"] = "sub";
        TAG_NAMES2["SUMMARY"] = "summary";
        TAG_NAMES2["SUP"] = "sup";
        TAG_NAMES2["TABLE"] = "table";
        TAG_NAMES2["TBODY"] = "tbody";
        TAG_NAMES2["TEMPLATE"] = "template";
        TAG_NAMES2["TEXTAREA"] = "textarea";
        TAG_NAMES2["TFOOT"] = "tfoot";
        TAG_NAMES2["TD"] = "td";
        TAG_NAMES2["TH"] = "th";
        TAG_NAMES2["THEAD"] = "thead";
        TAG_NAMES2["TITLE"] = "title";
        TAG_NAMES2["TR"] = "tr";
        TAG_NAMES2["TRACK"] = "track";
        TAG_NAMES2["TT"] = "tt";
        TAG_NAMES2["U"] = "u";
        TAG_NAMES2["UL"] = "ul";
        TAG_NAMES2["SVG"] = "svg";
        TAG_NAMES2["VAR"] = "var";
        TAG_NAMES2["WBR"] = "wbr";
        TAG_NAMES2["XMP"] = "xmp";
      })(TAG_NAMES = exports.TAG_NAMES || (exports.TAG_NAMES = {}));
      var TAG_ID;
      (function(TAG_ID2) {
        TAG_ID2[TAG_ID2["UNKNOWN"] = 0] = "UNKNOWN";
        TAG_ID2[TAG_ID2["A"] = 1] = "A";
        TAG_ID2[TAG_ID2["ADDRESS"] = 2] = "ADDRESS";
        TAG_ID2[TAG_ID2["ANNOTATION_XML"] = 3] = "ANNOTATION_XML";
        TAG_ID2[TAG_ID2["APPLET"] = 4] = "APPLET";
        TAG_ID2[TAG_ID2["AREA"] = 5] = "AREA";
        TAG_ID2[TAG_ID2["ARTICLE"] = 6] = "ARTICLE";
        TAG_ID2[TAG_ID2["ASIDE"] = 7] = "ASIDE";
        TAG_ID2[TAG_ID2["B"] = 8] = "B";
        TAG_ID2[TAG_ID2["BASE"] = 9] = "BASE";
        TAG_ID2[TAG_ID2["BASEFONT"] = 10] = "BASEFONT";
        TAG_ID2[TAG_ID2["BGSOUND"] = 11] = "BGSOUND";
        TAG_ID2[TAG_ID2["BIG"] = 12] = "BIG";
        TAG_ID2[TAG_ID2["BLOCKQUOTE"] = 13] = "BLOCKQUOTE";
        TAG_ID2[TAG_ID2["BODY"] = 14] = "BODY";
        TAG_ID2[TAG_ID2["BR"] = 15] = "BR";
        TAG_ID2[TAG_ID2["BUTTON"] = 16] = "BUTTON";
        TAG_ID2[TAG_ID2["CAPTION"] = 17] = "CAPTION";
        TAG_ID2[TAG_ID2["CENTER"] = 18] = "CENTER";
        TAG_ID2[TAG_ID2["CODE"] = 19] = "CODE";
        TAG_ID2[TAG_ID2["COL"] = 20] = "COL";
        TAG_ID2[TAG_ID2["COLGROUP"] = 21] = "COLGROUP";
        TAG_ID2[TAG_ID2["DD"] = 22] = "DD";
        TAG_ID2[TAG_ID2["DESC"] = 23] = "DESC";
        TAG_ID2[TAG_ID2["DETAILS"] = 24] = "DETAILS";
        TAG_ID2[TAG_ID2["DIALOG"] = 25] = "DIALOG";
        TAG_ID2[TAG_ID2["DIR"] = 26] = "DIR";
        TAG_ID2[TAG_ID2["DIV"] = 27] = "DIV";
        TAG_ID2[TAG_ID2["DL"] = 28] = "DL";
        TAG_ID2[TAG_ID2["DT"] = 29] = "DT";
        TAG_ID2[TAG_ID2["EM"] = 30] = "EM";
        TAG_ID2[TAG_ID2["EMBED"] = 31] = "EMBED";
        TAG_ID2[TAG_ID2["FIELDSET"] = 32] = "FIELDSET";
        TAG_ID2[TAG_ID2["FIGCAPTION"] = 33] = "FIGCAPTION";
        TAG_ID2[TAG_ID2["FIGURE"] = 34] = "FIGURE";
        TAG_ID2[TAG_ID2["FONT"] = 35] = "FONT";
        TAG_ID2[TAG_ID2["FOOTER"] = 36] = "FOOTER";
        TAG_ID2[TAG_ID2["FOREIGN_OBJECT"] = 37] = "FOREIGN_OBJECT";
        TAG_ID2[TAG_ID2["FORM"] = 38] = "FORM";
        TAG_ID2[TAG_ID2["FRAME"] = 39] = "FRAME";
        TAG_ID2[TAG_ID2["FRAMESET"] = 40] = "FRAMESET";
        TAG_ID2[TAG_ID2["H1"] = 41] = "H1";
        TAG_ID2[TAG_ID2["H2"] = 42] = "H2";
        TAG_ID2[TAG_ID2["H3"] = 43] = "H3";
        TAG_ID2[TAG_ID2["H4"] = 44] = "H4";
        TAG_ID2[TAG_ID2["H5"] = 45] = "H5";
        TAG_ID2[TAG_ID2["H6"] = 46] = "H6";
        TAG_ID2[TAG_ID2["HEAD"] = 47] = "HEAD";
        TAG_ID2[TAG_ID2["HEADER"] = 48] = "HEADER";
        TAG_ID2[TAG_ID2["HGROUP"] = 49] = "HGROUP";
        TAG_ID2[TAG_ID2["HR"] = 50] = "HR";
        TAG_ID2[TAG_ID2["HTML"] = 51] = "HTML";
        TAG_ID2[TAG_ID2["I"] = 52] = "I";
        TAG_ID2[TAG_ID2["IMG"] = 53] = "IMG";
        TAG_ID2[TAG_ID2["IMAGE"] = 54] = "IMAGE";
        TAG_ID2[TAG_ID2["INPUT"] = 55] = "INPUT";
        TAG_ID2[TAG_ID2["IFRAME"] = 56] = "IFRAME";
        TAG_ID2[TAG_ID2["KEYGEN"] = 57] = "KEYGEN";
        TAG_ID2[TAG_ID2["LABEL"] = 58] = "LABEL";
        TAG_ID2[TAG_ID2["LI"] = 59] = "LI";
        TAG_ID2[TAG_ID2["LINK"] = 60] = "LINK";
        TAG_ID2[TAG_ID2["LISTING"] = 61] = "LISTING";
        TAG_ID2[TAG_ID2["MAIN"] = 62] = "MAIN";
        TAG_ID2[TAG_ID2["MALIGNMARK"] = 63] = "MALIGNMARK";
        TAG_ID2[TAG_ID2["MARQUEE"] = 64] = "MARQUEE";
        TAG_ID2[TAG_ID2["MATH"] = 65] = "MATH";
        TAG_ID2[TAG_ID2["MENU"] = 66] = "MENU";
        TAG_ID2[TAG_ID2["META"] = 67] = "META";
        TAG_ID2[TAG_ID2["MGLYPH"] = 68] = "MGLYPH";
        TAG_ID2[TAG_ID2["MI"] = 69] = "MI";
        TAG_ID2[TAG_ID2["MO"] = 70] = "MO";
        TAG_ID2[TAG_ID2["MN"] = 71] = "MN";
        TAG_ID2[TAG_ID2["MS"] = 72] = "MS";
        TAG_ID2[TAG_ID2["MTEXT"] = 73] = "MTEXT";
        TAG_ID2[TAG_ID2["NAV"] = 74] = "NAV";
        TAG_ID2[TAG_ID2["NOBR"] = 75] = "NOBR";
        TAG_ID2[TAG_ID2["NOFRAMES"] = 76] = "NOFRAMES";
        TAG_ID2[TAG_ID2["NOEMBED"] = 77] = "NOEMBED";
        TAG_ID2[TAG_ID2["NOSCRIPT"] = 78] = "NOSCRIPT";
        TAG_ID2[TAG_ID2["OBJECT"] = 79] = "OBJECT";
        TAG_ID2[TAG_ID2["OL"] = 80] = "OL";
        TAG_ID2[TAG_ID2["OPTGROUP"] = 81] = "OPTGROUP";
        TAG_ID2[TAG_ID2["OPTION"] = 82] = "OPTION";
        TAG_ID2[TAG_ID2["P"] = 83] = "P";
        TAG_ID2[TAG_ID2["PARAM"] = 84] = "PARAM";
        TAG_ID2[TAG_ID2["PLAINTEXT"] = 85] = "PLAINTEXT";
        TAG_ID2[TAG_ID2["PRE"] = 86] = "PRE";
        TAG_ID2[TAG_ID2["RB"] = 87] = "RB";
        TAG_ID2[TAG_ID2["RP"] = 88] = "RP";
        TAG_ID2[TAG_ID2["RT"] = 89] = "RT";
        TAG_ID2[TAG_ID2["RTC"] = 90] = "RTC";
        TAG_ID2[TAG_ID2["RUBY"] = 91] = "RUBY";
        TAG_ID2[TAG_ID2["S"] = 92] = "S";
        TAG_ID2[TAG_ID2["SCRIPT"] = 93] = "SCRIPT";
        TAG_ID2[TAG_ID2["SECTION"] = 94] = "SECTION";
        TAG_ID2[TAG_ID2["SELECT"] = 95] = "SELECT";
        TAG_ID2[TAG_ID2["SOURCE"] = 96] = "SOURCE";
        TAG_ID2[TAG_ID2["SMALL"] = 97] = "SMALL";
        TAG_ID2[TAG_ID2["SPAN"] = 98] = "SPAN";
        TAG_ID2[TAG_ID2["STRIKE"] = 99] = "STRIKE";
        TAG_ID2[TAG_ID2["STRONG"] = 100] = "STRONG";
        TAG_ID2[TAG_ID2["STYLE"] = 101] = "STYLE";
        TAG_ID2[TAG_ID2["SUB"] = 102] = "SUB";
        TAG_ID2[TAG_ID2["SUMMARY"] = 103] = "SUMMARY";
        TAG_ID2[TAG_ID2["SUP"] = 104] = "SUP";
        TAG_ID2[TAG_ID2["TABLE"] = 105] = "TABLE";
        TAG_ID2[TAG_ID2["TBODY"] = 106] = "TBODY";
        TAG_ID2[TAG_ID2["TEMPLATE"] = 107] = "TEMPLATE";
        TAG_ID2[TAG_ID2["TEXTAREA"] = 108] = "TEXTAREA";
        TAG_ID2[TAG_ID2["TFOOT"] = 109] = "TFOOT";
        TAG_ID2[TAG_ID2["TD"] = 110] = "TD";
        TAG_ID2[TAG_ID2["TH"] = 111] = "TH";
        TAG_ID2[TAG_ID2["THEAD"] = 112] = "THEAD";
        TAG_ID2[TAG_ID2["TITLE"] = 113] = "TITLE";
        TAG_ID2[TAG_ID2["TR"] = 114] = "TR";
        TAG_ID2[TAG_ID2["TRACK"] = 115] = "TRACK";
        TAG_ID2[TAG_ID2["TT"] = 116] = "TT";
        TAG_ID2[TAG_ID2["U"] = 117] = "U";
        TAG_ID2[TAG_ID2["UL"] = 118] = "UL";
        TAG_ID2[TAG_ID2["SVG"] = 119] = "SVG";
        TAG_ID2[TAG_ID2["VAR"] = 120] = "VAR";
        TAG_ID2[TAG_ID2["WBR"] = 121] = "WBR";
        TAG_ID2[TAG_ID2["XMP"] = 122] = "XMP";
      })(TAG_ID = exports.TAG_ID || (exports.TAG_ID = {}));
      var TAG_NAME_TO_ID = /* @__PURE__ */ new Map([
        [TAG_NAMES.A, TAG_ID.A],
        [TAG_NAMES.ADDRESS, TAG_ID.ADDRESS],
        [TAG_NAMES.ANNOTATION_XML, TAG_ID.ANNOTATION_XML],
        [TAG_NAMES.APPLET, TAG_ID.APPLET],
        [TAG_NAMES.AREA, TAG_ID.AREA],
        [TAG_NAMES.ARTICLE, TAG_ID.ARTICLE],
        [TAG_NAMES.ASIDE, TAG_ID.ASIDE],
        [TAG_NAMES.B, TAG_ID.B],
        [TAG_NAMES.BASE, TAG_ID.BASE],
        [TAG_NAMES.BASEFONT, TAG_ID.BASEFONT],
        [TAG_NAMES.BGSOUND, TAG_ID.BGSOUND],
        [TAG_NAMES.BIG, TAG_ID.BIG],
        [TAG_NAMES.BLOCKQUOTE, TAG_ID.BLOCKQUOTE],
        [TAG_NAMES.BODY, TAG_ID.BODY],
        [TAG_NAMES.BR, TAG_ID.BR],
        [TAG_NAMES.BUTTON, TAG_ID.BUTTON],
        [TAG_NAMES.CAPTION, TAG_ID.CAPTION],
        [TAG_NAMES.CENTER, TAG_ID.CENTER],
        [TAG_NAMES.CODE, TAG_ID.CODE],
        [TAG_NAMES.COL, TAG_ID.COL],
        [TAG_NAMES.COLGROUP, TAG_ID.COLGROUP],
        [TAG_NAMES.DD, TAG_ID.DD],
        [TAG_NAMES.DESC, TAG_ID.DESC],
        [TAG_NAMES.DETAILS, TAG_ID.DETAILS],
        [TAG_NAMES.DIALOG, TAG_ID.DIALOG],
        [TAG_NAMES.DIR, TAG_ID.DIR],
        [TAG_NAMES.DIV, TAG_ID.DIV],
        [TAG_NAMES.DL, TAG_ID.DL],
        [TAG_NAMES.DT, TAG_ID.DT],
        [TAG_NAMES.EM, TAG_ID.EM],
        [TAG_NAMES.EMBED, TAG_ID.EMBED],
        [TAG_NAMES.FIELDSET, TAG_ID.FIELDSET],
        [TAG_NAMES.FIGCAPTION, TAG_ID.FIGCAPTION],
        [TAG_NAMES.FIGURE, TAG_ID.FIGURE],
        [TAG_NAMES.FONT, TAG_ID.FONT],
        [TAG_NAMES.FOOTER, TAG_ID.FOOTER],
        [TAG_NAMES.FOREIGN_OBJECT, TAG_ID.FOREIGN_OBJECT],
        [TAG_NAMES.FORM, TAG_ID.FORM],
        [TAG_NAMES.FRAME, TAG_ID.FRAME],
        [TAG_NAMES.FRAMESET, TAG_ID.FRAMESET],
        [TAG_NAMES.H1, TAG_ID.H1],
        [TAG_NAMES.H2, TAG_ID.H2],
        [TAG_NAMES.H3, TAG_ID.H3],
        [TAG_NAMES.H4, TAG_ID.H4],
        [TAG_NAMES.H5, TAG_ID.H5],
        [TAG_NAMES.H6, TAG_ID.H6],
        [TAG_NAMES.HEAD, TAG_ID.HEAD],
        [TAG_NAMES.HEADER, TAG_ID.HEADER],
        [TAG_NAMES.HGROUP, TAG_ID.HGROUP],
        [TAG_NAMES.HR, TAG_ID.HR],
        [TAG_NAMES.HTML, TAG_ID.HTML],
        [TAG_NAMES.I, TAG_ID.I],
        [TAG_NAMES.IMG, TAG_ID.IMG],
        [TAG_NAMES.IMAGE, TAG_ID.IMAGE],
        [TAG_NAMES.INPUT, TAG_ID.INPUT],
        [TAG_NAMES.IFRAME, TAG_ID.IFRAME],
        [TAG_NAMES.KEYGEN, TAG_ID.KEYGEN],
        [TAG_NAMES.LABEL, TAG_ID.LABEL],
        [TAG_NAMES.LI, TAG_ID.LI],
        [TAG_NAMES.LINK, TAG_ID.LINK],
        [TAG_NAMES.LISTING, TAG_ID.LISTING],
        [TAG_NAMES.MAIN, TAG_ID.MAIN],
        [TAG_NAMES.MALIGNMARK, TAG_ID.MALIGNMARK],
        [TAG_NAMES.MARQUEE, TAG_ID.MARQUEE],
        [TAG_NAMES.MATH, TAG_ID.MATH],
        [TAG_NAMES.MENU, TAG_ID.MENU],
        [TAG_NAMES.META, TAG_ID.META],
        [TAG_NAMES.MGLYPH, TAG_ID.MGLYPH],
        [TAG_NAMES.MI, TAG_ID.MI],
        [TAG_NAMES.MO, TAG_ID.MO],
        [TAG_NAMES.MN, TAG_ID.MN],
        [TAG_NAMES.MS, TAG_ID.MS],
        [TAG_NAMES.MTEXT, TAG_ID.MTEXT],
        [TAG_NAMES.NAV, TAG_ID.NAV],
        [TAG_NAMES.NOBR, TAG_ID.NOBR],
        [TAG_NAMES.NOFRAMES, TAG_ID.NOFRAMES],
        [TAG_NAMES.NOEMBED, TAG_ID.NOEMBED],
        [TAG_NAMES.NOSCRIPT, TAG_ID.NOSCRIPT],
        [TAG_NAMES.OBJECT, TAG_ID.OBJECT],
        [TAG_NAMES.OL, TAG_ID.OL],
        [TAG_NAMES.OPTGROUP, TAG_ID.OPTGROUP],
        [TAG_NAMES.OPTION, TAG_ID.OPTION],
        [TAG_NAMES.P, TAG_ID.P],
        [TAG_NAMES.PARAM, TAG_ID.PARAM],
        [TAG_NAMES.PLAINTEXT, TAG_ID.PLAINTEXT],
        [TAG_NAMES.PRE, TAG_ID.PRE],
        [TAG_NAMES.RB, TAG_ID.RB],
        [TAG_NAMES.RP, TAG_ID.RP],
        [TAG_NAMES.RT, TAG_ID.RT],
        [TAG_NAMES.RTC, TAG_ID.RTC],
        [TAG_NAMES.RUBY, TAG_ID.RUBY],
        [TAG_NAMES.S, TAG_ID.S],
        [TAG_NAMES.SCRIPT, TAG_ID.SCRIPT],
        [TAG_NAMES.SECTION, TAG_ID.SECTION],
        [TAG_NAMES.SELECT, TAG_ID.SELECT],
        [TAG_NAMES.SOURCE, TAG_ID.SOURCE],
        [TAG_NAMES.SMALL, TAG_ID.SMALL],
        [TAG_NAMES.SPAN, TAG_ID.SPAN],
        [TAG_NAMES.STRIKE, TAG_ID.STRIKE],
        [TAG_NAMES.STRONG, TAG_ID.STRONG],
        [TAG_NAMES.STYLE, TAG_ID.STYLE],
        [TAG_NAMES.SUB, TAG_ID.SUB],
        [TAG_NAMES.SUMMARY, TAG_ID.SUMMARY],
        [TAG_NAMES.SUP, TAG_ID.SUP],
        [TAG_NAMES.TABLE, TAG_ID.TABLE],
        [TAG_NAMES.TBODY, TAG_ID.TBODY],
        [TAG_NAMES.TEMPLATE, TAG_ID.TEMPLATE],
        [TAG_NAMES.TEXTAREA, TAG_ID.TEXTAREA],
        [TAG_NAMES.TFOOT, TAG_ID.TFOOT],
        [TAG_NAMES.TD, TAG_ID.TD],
        [TAG_NAMES.TH, TAG_ID.TH],
        [TAG_NAMES.THEAD, TAG_ID.THEAD],
        [TAG_NAMES.TITLE, TAG_ID.TITLE],
        [TAG_NAMES.TR, TAG_ID.TR],
        [TAG_NAMES.TRACK, TAG_ID.TRACK],
        [TAG_NAMES.TT, TAG_ID.TT],
        [TAG_NAMES.U, TAG_ID.U],
        [TAG_NAMES.UL, TAG_ID.UL],
        [TAG_NAMES.SVG, TAG_ID.SVG],
        [TAG_NAMES.VAR, TAG_ID.VAR],
        [TAG_NAMES.WBR, TAG_ID.WBR],
        [TAG_NAMES.XMP, TAG_ID.XMP]
      ]);
      function getTagID(tagName) {
        var _a;
        return (_a = TAG_NAME_TO_ID.get(tagName)) !== null && _a !== void 0 ? _a : TAG_ID.UNKNOWN;
      }
      exports.getTagID = getTagID;
      var $ = TAG_ID;
      exports.SPECIAL_ELEMENTS = {
        [NS.HTML]: /* @__PURE__ */ new Set([
          $.ADDRESS,
          $.APPLET,
          $.AREA,
          $.ARTICLE,
          $.ASIDE,
          $.BASE,
          $.BASEFONT,
          $.BGSOUND,
          $.BLOCKQUOTE,
          $.BODY,
          $.BR,
          $.BUTTON,
          $.CAPTION,
          $.CENTER,
          $.COL,
          $.COLGROUP,
          $.DD,
          $.DETAILS,
          $.DIR,
          $.DIV,
          $.DL,
          $.DT,
          $.EMBED,
          $.FIELDSET,
          $.FIGCAPTION,
          $.FIGURE,
          $.FOOTER,
          $.FORM,
          $.FRAME,
          $.FRAMESET,
          $.H1,
          $.H2,
          $.H3,
          $.H4,
          $.H5,
          $.H6,
          $.HEAD,
          $.HEADER,
          $.HGROUP,
          $.HR,
          $.HTML,
          $.IFRAME,
          $.IMG,
          $.INPUT,
          $.LI,
          $.LINK,
          $.LISTING,
          $.MAIN,
          $.MARQUEE,
          $.MENU,
          $.META,
          $.NAV,
          $.NOEMBED,
          $.NOFRAMES,
          $.NOSCRIPT,
          $.OBJECT,
          $.OL,
          $.P,
          $.PARAM,
          $.PLAINTEXT,
          $.PRE,
          $.SCRIPT,
          $.SECTION,
          $.SELECT,
          $.SOURCE,
          $.STYLE,
          $.SUMMARY,
          $.TABLE,
          $.TBODY,
          $.TD,
          $.TEMPLATE,
          $.TEXTAREA,
          $.TFOOT,
          $.TH,
          $.THEAD,
          $.TITLE,
          $.TR,
          $.TRACK,
          $.UL,
          $.WBR,
          $.XMP
        ]),
        [NS.MATHML]: /* @__PURE__ */ new Set([$.MI, $.MO, $.MN, $.MS, $.MTEXT, $.ANNOTATION_XML]),
        [NS.SVG]: /* @__PURE__ */ new Set([$.TITLE, $.FOREIGN_OBJECT, $.DESC]),
        [NS.XLINK]: /* @__PURE__ */ new Set(),
        [NS.XML]: /* @__PURE__ */ new Set(),
        [NS.XMLNS]: /* @__PURE__ */ new Set()
      };
      function isNumberedHeader(tn) {
        return tn === $.H1 || tn === $.H2 || tn === $.H3 || tn === $.H4 || tn === $.H5 || tn === $.H6;
      }
      exports.isNumberedHeader = isNumberedHeader;
      var UNESCAPED_TEXT = /* @__PURE__ */ new Set([
        TAG_NAMES.STYLE,
        TAG_NAMES.SCRIPT,
        TAG_NAMES.XMP,
        TAG_NAMES.IFRAME,
        TAG_NAMES.NOEMBED,
        TAG_NAMES.NOFRAMES,
        TAG_NAMES.PLAINTEXT
      ]);
      function hasUnescapedText(tn, scriptingEnabled) {
        return UNESCAPED_TEXT.has(tn) || scriptingEnabled && tn === TAG_NAMES.NOSCRIPT;
      }
      exports.hasUnescapedText = hasUnescapedText;
    }
  });

  // node_modules/parse5/dist/cjs/tokenizer/index.js
  var require_tokenizer = __commonJS({
    "node_modules/parse5/dist/cjs/tokenizer/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Tokenizer = exports.TokenizerMode = void 0;
      var preprocessor_js_1 = require_preprocessor();
      var unicode_js_1 = require_unicode();
      var token_js_1 = require_token();
      var decode_js_1 = require_decode();
      var error_codes_js_1 = require_error_codes();
      var html_js_1 = require_html();
      var C1_CONTROLS_REFERENCE_REPLACEMENTS = /* @__PURE__ */ new Map([
        [128, 8364],
        [130, 8218],
        [131, 402],
        [132, 8222],
        [133, 8230],
        [134, 8224],
        [135, 8225],
        [136, 710],
        [137, 8240],
        [138, 352],
        [139, 8249],
        [140, 338],
        [142, 381],
        [145, 8216],
        [146, 8217],
        [147, 8220],
        [148, 8221],
        [149, 8226],
        [150, 8211],
        [151, 8212],
        [152, 732],
        [153, 8482],
        [154, 353],
        [155, 8250],
        [156, 339],
        [158, 382],
        [159, 376]
      ]);
      var State;
      (function(State2) {
        State2[State2["DATA"] = 0] = "DATA";
        State2[State2["RCDATA"] = 1] = "RCDATA";
        State2[State2["RAWTEXT"] = 2] = "RAWTEXT";
        State2[State2["SCRIPT_DATA"] = 3] = "SCRIPT_DATA";
        State2[State2["PLAINTEXT"] = 4] = "PLAINTEXT";
        State2[State2["TAG_OPEN"] = 5] = "TAG_OPEN";
        State2[State2["END_TAG_OPEN"] = 6] = "END_TAG_OPEN";
        State2[State2["TAG_NAME"] = 7] = "TAG_NAME";
        State2[State2["RCDATA_LESS_THAN_SIGN"] = 8] = "RCDATA_LESS_THAN_SIGN";
        State2[State2["RCDATA_END_TAG_OPEN"] = 9] = "RCDATA_END_TAG_OPEN";
        State2[State2["RCDATA_END_TAG_NAME"] = 10] = "RCDATA_END_TAG_NAME";
        State2[State2["RAWTEXT_LESS_THAN_SIGN"] = 11] = "RAWTEXT_LESS_THAN_SIGN";
        State2[State2["RAWTEXT_END_TAG_OPEN"] = 12] = "RAWTEXT_END_TAG_OPEN";
        State2[State2["RAWTEXT_END_TAG_NAME"] = 13] = "RAWTEXT_END_TAG_NAME";
        State2[State2["SCRIPT_DATA_LESS_THAN_SIGN"] = 14] = "SCRIPT_DATA_LESS_THAN_SIGN";
        State2[State2["SCRIPT_DATA_END_TAG_OPEN"] = 15] = "SCRIPT_DATA_END_TAG_OPEN";
        State2[State2["SCRIPT_DATA_END_TAG_NAME"] = 16] = "SCRIPT_DATA_END_TAG_NAME";
        State2[State2["SCRIPT_DATA_ESCAPE_START"] = 17] = "SCRIPT_DATA_ESCAPE_START";
        State2[State2["SCRIPT_DATA_ESCAPE_START_DASH"] = 18] = "SCRIPT_DATA_ESCAPE_START_DASH";
        State2[State2["SCRIPT_DATA_ESCAPED"] = 19] = "SCRIPT_DATA_ESCAPED";
        State2[State2["SCRIPT_DATA_ESCAPED_DASH"] = 20] = "SCRIPT_DATA_ESCAPED_DASH";
        State2[State2["SCRIPT_DATA_ESCAPED_DASH_DASH"] = 21] = "SCRIPT_DATA_ESCAPED_DASH_DASH";
        State2[State2["SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN"] = 22] = "SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN";
        State2[State2["SCRIPT_DATA_ESCAPED_END_TAG_OPEN"] = 23] = "SCRIPT_DATA_ESCAPED_END_TAG_OPEN";
        State2[State2["SCRIPT_DATA_ESCAPED_END_TAG_NAME"] = 24] = "SCRIPT_DATA_ESCAPED_END_TAG_NAME";
        State2[State2["SCRIPT_DATA_DOUBLE_ESCAPE_START"] = 25] = "SCRIPT_DATA_DOUBLE_ESCAPE_START";
        State2[State2["SCRIPT_DATA_DOUBLE_ESCAPED"] = 26] = "SCRIPT_DATA_DOUBLE_ESCAPED";
        State2[State2["SCRIPT_DATA_DOUBLE_ESCAPED_DASH"] = 27] = "SCRIPT_DATA_DOUBLE_ESCAPED_DASH";
        State2[State2["SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH"] = 28] = "SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH";
        State2[State2["SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN"] = 29] = "SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN";
        State2[State2["SCRIPT_DATA_DOUBLE_ESCAPE_END"] = 30] = "SCRIPT_DATA_DOUBLE_ESCAPE_END";
        State2[State2["BEFORE_ATTRIBUTE_NAME"] = 31] = "BEFORE_ATTRIBUTE_NAME";
        State2[State2["ATTRIBUTE_NAME"] = 32] = "ATTRIBUTE_NAME";
        State2[State2["AFTER_ATTRIBUTE_NAME"] = 33] = "AFTER_ATTRIBUTE_NAME";
        State2[State2["BEFORE_ATTRIBUTE_VALUE"] = 34] = "BEFORE_ATTRIBUTE_VALUE";
        State2[State2["ATTRIBUTE_VALUE_DOUBLE_QUOTED"] = 35] = "ATTRIBUTE_VALUE_DOUBLE_QUOTED";
        State2[State2["ATTRIBUTE_VALUE_SINGLE_QUOTED"] = 36] = "ATTRIBUTE_VALUE_SINGLE_QUOTED";
        State2[State2["ATTRIBUTE_VALUE_UNQUOTED"] = 37] = "ATTRIBUTE_VALUE_UNQUOTED";
        State2[State2["AFTER_ATTRIBUTE_VALUE_QUOTED"] = 38] = "AFTER_ATTRIBUTE_VALUE_QUOTED";
        State2[State2["SELF_CLOSING_START_TAG"] = 39] = "SELF_CLOSING_START_TAG";
        State2[State2["BOGUS_COMMENT"] = 40] = "BOGUS_COMMENT";
        State2[State2["MARKUP_DECLARATION_OPEN"] = 41] = "MARKUP_DECLARATION_OPEN";
        State2[State2["COMMENT_START"] = 42] = "COMMENT_START";
        State2[State2["COMMENT_START_DASH"] = 43] = "COMMENT_START_DASH";
        State2[State2["COMMENT"] = 44] = "COMMENT";
        State2[State2["COMMENT_LESS_THAN_SIGN"] = 45] = "COMMENT_LESS_THAN_SIGN";
        State2[State2["COMMENT_LESS_THAN_SIGN_BANG"] = 46] = "COMMENT_LESS_THAN_SIGN_BANG";
        State2[State2["COMMENT_LESS_THAN_SIGN_BANG_DASH"] = 47] = "COMMENT_LESS_THAN_SIGN_BANG_DASH";
        State2[State2["COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH"] = 48] = "COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH";
        State2[State2["COMMENT_END_DASH"] = 49] = "COMMENT_END_DASH";
        State2[State2["COMMENT_END"] = 50] = "COMMENT_END";
        State2[State2["COMMENT_END_BANG"] = 51] = "COMMENT_END_BANG";
        State2[State2["DOCTYPE"] = 52] = "DOCTYPE";
        State2[State2["BEFORE_DOCTYPE_NAME"] = 53] = "BEFORE_DOCTYPE_NAME";
        State2[State2["DOCTYPE_NAME"] = 54] = "DOCTYPE_NAME";
        State2[State2["AFTER_DOCTYPE_NAME"] = 55] = "AFTER_DOCTYPE_NAME";
        State2[State2["AFTER_DOCTYPE_PUBLIC_KEYWORD"] = 56] = "AFTER_DOCTYPE_PUBLIC_KEYWORD";
        State2[State2["BEFORE_DOCTYPE_PUBLIC_IDENTIFIER"] = 57] = "BEFORE_DOCTYPE_PUBLIC_IDENTIFIER";
        State2[State2["DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED"] = 58] = "DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED";
        State2[State2["DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED"] = 59] = "DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED";
        State2[State2["AFTER_DOCTYPE_PUBLIC_IDENTIFIER"] = 60] = "AFTER_DOCTYPE_PUBLIC_IDENTIFIER";
        State2[State2["BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS"] = 61] = "BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS";
        State2[State2["AFTER_DOCTYPE_SYSTEM_KEYWORD"] = 62] = "AFTER_DOCTYPE_SYSTEM_KEYWORD";
        State2[State2["BEFORE_DOCTYPE_SYSTEM_IDENTIFIER"] = 63] = "BEFORE_DOCTYPE_SYSTEM_IDENTIFIER";
        State2[State2["DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED"] = 64] = "DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED";
        State2[State2["DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED"] = 65] = "DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED";
        State2[State2["AFTER_DOCTYPE_SYSTEM_IDENTIFIER"] = 66] = "AFTER_DOCTYPE_SYSTEM_IDENTIFIER";
        State2[State2["BOGUS_DOCTYPE"] = 67] = "BOGUS_DOCTYPE";
        State2[State2["CDATA_SECTION"] = 68] = "CDATA_SECTION";
        State2[State2["CDATA_SECTION_BRACKET"] = 69] = "CDATA_SECTION_BRACKET";
        State2[State2["CDATA_SECTION_END"] = 70] = "CDATA_SECTION_END";
        State2[State2["CHARACTER_REFERENCE"] = 71] = "CHARACTER_REFERENCE";
        State2[State2["NAMED_CHARACTER_REFERENCE"] = 72] = "NAMED_CHARACTER_REFERENCE";
        State2[State2["AMBIGUOUS_AMPERSAND"] = 73] = "AMBIGUOUS_AMPERSAND";
        State2[State2["NUMERIC_CHARACTER_REFERENCE"] = 74] = "NUMERIC_CHARACTER_REFERENCE";
        State2[State2["HEXADEMICAL_CHARACTER_REFERENCE_START"] = 75] = "HEXADEMICAL_CHARACTER_REFERENCE_START";
        State2[State2["HEXADEMICAL_CHARACTER_REFERENCE"] = 76] = "HEXADEMICAL_CHARACTER_REFERENCE";
        State2[State2["DECIMAL_CHARACTER_REFERENCE"] = 77] = "DECIMAL_CHARACTER_REFERENCE";
        State2[State2["NUMERIC_CHARACTER_REFERENCE_END"] = 78] = "NUMERIC_CHARACTER_REFERENCE_END";
      })(State || (State = {}));
      exports.TokenizerMode = {
        DATA: State.DATA,
        RCDATA: State.RCDATA,
        RAWTEXT: State.RAWTEXT,
        SCRIPT_DATA: State.SCRIPT_DATA,
        PLAINTEXT: State.PLAINTEXT,
        CDATA_SECTION: State.CDATA_SECTION
      };
      function isAsciiDigit(cp) {
        return cp >= unicode_js_1.CODE_POINTS.DIGIT_0 && cp <= unicode_js_1.CODE_POINTS.DIGIT_9;
      }
      function isAsciiUpper(cp) {
        return cp >= unicode_js_1.CODE_POINTS.LATIN_CAPITAL_A && cp <= unicode_js_1.CODE_POINTS.LATIN_CAPITAL_Z;
      }
      function isAsciiLower(cp) {
        return cp >= unicode_js_1.CODE_POINTS.LATIN_SMALL_A && cp <= unicode_js_1.CODE_POINTS.LATIN_SMALL_Z;
      }
      function isAsciiLetter(cp) {
        return isAsciiLower(cp) || isAsciiUpper(cp);
      }
      function isAsciiAlphaNumeric(cp) {
        return isAsciiLetter(cp) || isAsciiDigit(cp);
      }
      function isAsciiUpperHexDigit(cp) {
        return cp >= unicode_js_1.CODE_POINTS.LATIN_CAPITAL_A && cp <= unicode_js_1.CODE_POINTS.LATIN_CAPITAL_F;
      }
      function isAsciiLowerHexDigit(cp) {
        return cp >= unicode_js_1.CODE_POINTS.LATIN_SMALL_A && cp <= unicode_js_1.CODE_POINTS.LATIN_SMALL_F;
      }
      function isAsciiHexDigit(cp) {
        return isAsciiDigit(cp) || isAsciiUpperHexDigit(cp) || isAsciiLowerHexDigit(cp);
      }
      function toAsciiLower(cp) {
        return cp + 32;
      }
      function isWhitespace(cp) {
        return cp === unicode_js_1.CODE_POINTS.SPACE || cp === unicode_js_1.CODE_POINTS.LINE_FEED || cp === unicode_js_1.CODE_POINTS.TABULATION || cp === unicode_js_1.CODE_POINTS.FORM_FEED;
      }
      function isEntityInAttributeInvalidEnd(nextCp) {
        return nextCp === unicode_js_1.CODE_POINTS.EQUALS_SIGN || isAsciiAlphaNumeric(nextCp);
      }
      function isScriptDataDoubleEscapeSequenceEnd(cp) {
        return isWhitespace(cp) || cp === unicode_js_1.CODE_POINTS.SOLIDUS || cp === unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN;
      }
      var Tokenizer = class {
        constructor(options, handler) {
          this.options = options;
          this.handler = handler;
          this.paused = false;
          this.inLoop = false;
          this.inForeignNode = false;
          this.lastStartTagName = "";
          this.active = false;
          this.state = State.DATA;
          this.returnState = State.DATA;
          this.charRefCode = -1;
          this.consumedAfterSnapshot = -1;
          this.currentCharacterToken = null;
          this.currentToken = null;
          this.currentAttr = { name: "", value: "" };
          this.preprocessor = new preprocessor_js_1.Preprocessor(handler);
          this.currentLocation = this.getCurrentLocation(-1);
        }
        //Errors
        _err(code) {
          var _a, _b;
          (_b = (_a = this.handler).onParseError) === null || _b === void 0 ? void 0 : _b.call(_a, this.preprocessor.getError(code));
        }
        // NOTE: `offset` may never run across line boundaries.
        getCurrentLocation(offset) {
          if (!this.options.sourceCodeLocationInfo) {
            return null;
          }
          return {
            startLine: this.preprocessor.line,
            startCol: this.preprocessor.col - offset,
            startOffset: this.preprocessor.offset - offset,
            endLine: -1,
            endCol: -1,
            endOffset: -1
          };
        }
        _runParsingLoop() {
          if (this.inLoop)
            return;
          this.inLoop = true;
          while (this.active && !this.paused) {
            this.consumedAfterSnapshot = 0;
            const cp = this._consume();
            if (!this._ensureHibernation()) {
              this._callState(cp);
            }
          }
          this.inLoop = false;
        }
        //API
        pause() {
          this.paused = true;
        }
        resume(writeCallback) {
          if (!this.paused) {
            throw new Error("Parser was already resumed");
          }
          this.paused = false;
          if (this.inLoop)
            return;
          this._runParsingLoop();
          if (!this.paused) {
            writeCallback === null || writeCallback === void 0 ? void 0 : writeCallback();
          }
        }
        write(chunk, isLastChunk, writeCallback) {
          this.active = true;
          this.preprocessor.write(chunk, isLastChunk);
          this._runParsingLoop();
          if (!this.paused) {
            writeCallback === null || writeCallback === void 0 ? void 0 : writeCallback();
          }
        }
        insertHtmlAtCurrentPos(chunk) {
          this.active = true;
          this.preprocessor.insertHtmlAtCurrentPos(chunk);
          this._runParsingLoop();
        }
        //Hibernation
        _ensureHibernation() {
          if (this.preprocessor.endOfChunkHit) {
            this._unconsume(this.consumedAfterSnapshot);
            this.active = false;
            return true;
          }
          return false;
        }
        //Consumption
        _consume() {
          this.consumedAfterSnapshot++;
          return this.preprocessor.advance();
        }
        _unconsume(count) {
          this.consumedAfterSnapshot -= count;
          this.preprocessor.retreat(count);
        }
        _reconsumeInState(state, cp) {
          this.state = state;
          this._callState(cp);
        }
        _advanceBy(count) {
          this.consumedAfterSnapshot += count;
          for (let i = 0; i < count; i++) {
            this.preprocessor.advance();
          }
        }
        _consumeSequenceIfMatch(pattern, caseSensitive) {
          if (this.preprocessor.startsWith(pattern, caseSensitive)) {
            this._advanceBy(pattern.length - 1);
            return true;
          }
          return false;
        }
        //Token creation
        _createStartTagToken() {
          this.currentToken = {
            type: token_js_1.TokenType.START_TAG,
            tagName: "",
            tagID: html_js_1.TAG_ID.UNKNOWN,
            selfClosing: false,
            ackSelfClosing: false,
            attrs: [],
            location: this.getCurrentLocation(1)
          };
        }
        _createEndTagToken() {
          this.currentToken = {
            type: token_js_1.TokenType.END_TAG,
            tagName: "",
            tagID: html_js_1.TAG_ID.UNKNOWN,
            selfClosing: false,
            ackSelfClosing: false,
            attrs: [],
            location: this.getCurrentLocation(2)
          };
        }
        _createCommentToken(offset) {
          this.currentToken = {
            type: token_js_1.TokenType.COMMENT,
            data: "",
            location: this.getCurrentLocation(offset)
          };
        }
        _createDoctypeToken(initialName) {
          this.currentToken = {
            type: token_js_1.TokenType.DOCTYPE,
            name: initialName,
            forceQuirks: false,
            publicId: null,
            systemId: null,
            location: this.currentLocation
          };
        }
        _createCharacterToken(type, chars) {
          this.currentCharacterToken = {
            type,
            chars,
            location: this.currentLocation
          };
        }
        //Tag attributes
        _createAttr(attrNameFirstCh) {
          this.currentAttr = {
            name: attrNameFirstCh,
            value: ""
          };
          this.currentLocation = this.getCurrentLocation(0);
        }
        _leaveAttrName() {
          var _a;
          var _b;
          const token = this.currentToken;
          if ((0, token_js_1.getTokenAttr)(token, this.currentAttr.name) === null) {
            token.attrs.push(this.currentAttr);
            if (token.location && this.currentLocation) {
              const attrLocations = (_a = (_b = token.location).attrs) !== null && _a !== void 0 ? _a : _b.attrs = /* @__PURE__ */ Object.create(null);
              attrLocations[this.currentAttr.name] = this.currentLocation;
              this._leaveAttrValue();
            }
          } else {
            this._err(error_codes_js_1.ERR.duplicateAttribute);
          }
        }
        _leaveAttrValue() {
          if (this.currentLocation) {
            this.currentLocation.endLine = this.preprocessor.line;
            this.currentLocation.endCol = this.preprocessor.col;
            this.currentLocation.endOffset = this.preprocessor.offset;
          }
        }
        //Token emission
        prepareToken(ct) {
          this._emitCurrentCharacterToken(ct.location);
          this.currentToken = null;
          if (ct.location) {
            ct.location.endLine = this.preprocessor.line;
            ct.location.endCol = this.preprocessor.col + 1;
            ct.location.endOffset = this.preprocessor.offset + 1;
          }
          this.currentLocation = this.getCurrentLocation(-1);
        }
        emitCurrentTagToken() {
          const ct = this.currentToken;
          this.prepareToken(ct);
          ct.tagID = (0, html_js_1.getTagID)(ct.tagName);
          if (ct.type === token_js_1.TokenType.START_TAG) {
            this.lastStartTagName = ct.tagName;
            this.handler.onStartTag(ct);
          } else {
            if (ct.attrs.length > 0) {
              this._err(error_codes_js_1.ERR.endTagWithAttributes);
            }
            if (ct.selfClosing) {
              this._err(error_codes_js_1.ERR.endTagWithTrailingSolidus);
            }
            this.handler.onEndTag(ct);
          }
          this.preprocessor.dropParsedChunk();
        }
        emitCurrentComment(ct) {
          this.prepareToken(ct);
          this.handler.onComment(ct);
          this.preprocessor.dropParsedChunk();
        }
        emitCurrentDoctype(ct) {
          this.prepareToken(ct);
          this.handler.onDoctype(ct);
          this.preprocessor.dropParsedChunk();
        }
        _emitCurrentCharacterToken(nextLocation) {
          if (this.currentCharacterToken) {
            if (nextLocation && this.currentCharacterToken.location) {
              this.currentCharacterToken.location.endLine = nextLocation.startLine;
              this.currentCharacterToken.location.endCol = nextLocation.startCol;
              this.currentCharacterToken.location.endOffset = nextLocation.startOffset;
            }
            switch (this.currentCharacterToken.type) {
              case token_js_1.TokenType.CHARACTER: {
                this.handler.onCharacter(this.currentCharacterToken);
                break;
              }
              case token_js_1.TokenType.NULL_CHARACTER: {
                this.handler.onNullCharacter(this.currentCharacterToken);
                break;
              }
              case token_js_1.TokenType.WHITESPACE_CHARACTER: {
                this.handler.onWhitespaceCharacter(this.currentCharacterToken);
                break;
              }
            }
            this.currentCharacterToken = null;
          }
        }
        _emitEOFToken() {
          const location = this.getCurrentLocation(0);
          if (location) {
            location.endLine = location.startLine;
            location.endCol = location.startCol;
            location.endOffset = location.startOffset;
          }
          this._emitCurrentCharacterToken(location);
          this.handler.onEof({ type: token_js_1.TokenType.EOF, location });
          this.active = false;
        }
        //Characters emission
        //OPTIMIZATION: specification uses only one type of character tokens (one token per character).
        //This causes a huge memory overhead and a lot of unnecessary parser loops. parse5 uses 3 groups of characters.
        //If we have a sequence of characters that belong to the same group, the parser can process it
        //as a single solid character token.
        //So, there are 3 types of character tokens in parse5:
        //1)TokenType.NULL_CHARACTER - \u0000-character sequences (e.g. '\u0000\u0000\u0000')
        //2)TokenType.WHITESPACE_CHARACTER - any whitespace/new-line character sequences (e.g. '\n  \r\t   \f')
        //3)TokenType.CHARACTER - any character sequence which don't belong to groups 1 and 2 (e.g. 'abcdef1234@@#$%^')
        _appendCharToCurrentCharacterToken(type, ch) {
          if (this.currentCharacterToken) {
            if (this.currentCharacterToken.type !== type) {
              this.currentLocation = this.getCurrentLocation(0);
              this._emitCurrentCharacterToken(this.currentLocation);
              this.preprocessor.dropParsedChunk();
            } else {
              this.currentCharacterToken.chars += ch;
              return;
            }
          }
          this._createCharacterToken(type, ch);
        }
        _emitCodePoint(cp) {
          const type = isWhitespace(cp) ? token_js_1.TokenType.WHITESPACE_CHARACTER : cp === unicode_js_1.CODE_POINTS.NULL ? token_js_1.TokenType.NULL_CHARACTER : token_js_1.TokenType.CHARACTER;
          this._appendCharToCurrentCharacterToken(type, String.fromCodePoint(cp));
        }
        //NOTE: used when we emit characters explicitly.
        //This is always for non-whitespace and non-null characters, which allows us to avoid additional checks.
        _emitChars(ch) {
          this._appendCharToCurrentCharacterToken(token_js_1.TokenType.CHARACTER, ch);
        }
        // Character reference helpers
        _matchNamedCharacterReference(cp) {
          let result = null;
          let excess = 0;
          let withoutSemicolon = false;
          for (let i = 0, current = decode_js_1.htmlDecodeTree[0]; i >= 0; cp = this._consume()) {
            i = (0, decode_js_1.determineBranch)(decode_js_1.htmlDecodeTree, current, i + 1, cp);
            if (i < 0)
              break;
            excess += 1;
            current = decode_js_1.htmlDecodeTree[i];
            const masked = current & decode_js_1.BinTrieFlags.VALUE_LENGTH;
            if (masked) {
              const valueLength = (masked >> 14) - 1;
              if (cp !== unicode_js_1.CODE_POINTS.SEMICOLON && this._isCharacterReferenceInAttribute() && isEntityInAttributeInvalidEnd(this.preprocessor.peek(1))) {
                result = [unicode_js_1.CODE_POINTS.AMPERSAND];
                i += valueLength;
              } else {
                result = valueLength === 0 ? [decode_js_1.htmlDecodeTree[i] & ~decode_js_1.BinTrieFlags.VALUE_LENGTH] : valueLength === 1 ? [decode_js_1.htmlDecodeTree[++i]] : [decode_js_1.htmlDecodeTree[++i], decode_js_1.htmlDecodeTree[++i]];
                excess = 0;
                withoutSemicolon = cp !== unicode_js_1.CODE_POINTS.SEMICOLON;
              }
              if (valueLength === 0) {
                this._consume();
                break;
              }
            }
          }
          this._unconsume(excess);
          if (withoutSemicolon && !this.preprocessor.endOfChunkHit) {
            this._err(error_codes_js_1.ERR.missingSemicolonAfterCharacterReference);
          }
          this._unconsume(1);
          return result;
        }
        _isCharacterReferenceInAttribute() {
          return this.returnState === State.ATTRIBUTE_VALUE_DOUBLE_QUOTED || this.returnState === State.ATTRIBUTE_VALUE_SINGLE_QUOTED || this.returnState === State.ATTRIBUTE_VALUE_UNQUOTED;
        }
        _flushCodePointConsumedAsCharacterReference(cp) {
          if (this._isCharacterReferenceInAttribute()) {
            this.currentAttr.value += String.fromCodePoint(cp);
          } else {
            this._emitCodePoint(cp);
          }
        }
        // Calling states this way turns out to be much faster than any other approach.
        _callState(cp) {
          switch (this.state) {
            case State.DATA: {
              this._stateData(cp);
              break;
            }
            case State.RCDATA: {
              this._stateRcdata(cp);
              break;
            }
            case State.RAWTEXT: {
              this._stateRawtext(cp);
              break;
            }
            case State.SCRIPT_DATA: {
              this._stateScriptData(cp);
              break;
            }
            case State.PLAINTEXT: {
              this._statePlaintext(cp);
              break;
            }
            case State.TAG_OPEN: {
              this._stateTagOpen(cp);
              break;
            }
            case State.END_TAG_OPEN: {
              this._stateEndTagOpen(cp);
              break;
            }
            case State.TAG_NAME: {
              this._stateTagName(cp);
              break;
            }
            case State.RCDATA_LESS_THAN_SIGN: {
              this._stateRcdataLessThanSign(cp);
              break;
            }
            case State.RCDATA_END_TAG_OPEN: {
              this._stateRcdataEndTagOpen(cp);
              break;
            }
            case State.RCDATA_END_TAG_NAME: {
              this._stateRcdataEndTagName(cp);
              break;
            }
            case State.RAWTEXT_LESS_THAN_SIGN: {
              this._stateRawtextLessThanSign(cp);
              break;
            }
            case State.RAWTEXT_END_TAG_OPEN: {
              this._stateRawtextEndTagOpen(cp);
              break;
            }
            case State.RAWTEXT_END_TAG_NAME: {
              this._stateRawtextEndTagName(cp);
              break;
            }
            case State.SCRIPT_DATA_LESS_THAN_SIGN: {
              this._stateScriptDataLessThanSign(cp);
              break;
            }
            case State.SCRIPT_DATA_END_TAG_OPEN: {
              this._stateScriptDataEndTagOpen(cp);
              break;
            }
            case State.SCRIPT_DATA_END_TAG_NAME: {
              this._stateScriptDataEndTagName(cp);
              break;
            }
            case State.SCRIPT_DATA_ESCAPE_START: {
              this._stateScriptDataEscapeStart(cp);
              break;
            }
            case State.SCRIPT_DATA_ESCAPE_START_DASH: {
              this._stateScriptDataEscapeStartDash(cp);
              break;
            }
            case State.SCRIPT_DATA_ESCAPED: {
              this._stateScriptDataEscaped(cp);
              break;
            }
            case State.SCRIPT_DATA_ESCAPED_DASH: {
              this._stateScriptDataEscapedDash(cp);
              break;
            }
            case State.SCRIPT_DATA_ESCAPED_DASH_DASH: {
              this._stateScriptDataEscapedDashDash(cp);
              break;
            }
            case State.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN: {
              this._stateScriptDataEscapedLessThanSign(cp);
              break;
            }
            case State.SCRIPT_DATA_ESCAPED_END_TAG_OPEN: {
              this._stateScriptDataEscapedEndTagOpen(cp);
              break;
            }
            case State.SCRIPT_DATA_ESCAPED_END_TAG_NAME: {
              this._stateScriptDataEscapedEndTagName(cp);
              break;
            }
            case State.SCRIPT_DATA_DOUBLE_ESCAPE_START: {
              this._stateScriptDataDoubleEscapeStart(cp);
              break;
            }
            case State.SCRIPT_DATA_DOUBLE_ESCAPED: {
              this._stateScriptDataDoubleEscaped(cp);
              break;
            }
            case State.SCRIPT_DATA_DOUBLE_ESCAPED_DASH: {
              this._stateScriptDataDoubleEscapedDash(cp);
              break;
            }
            case State.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH: {
              this._stateScriptDataDoubleEscapedDashDash(cp);
              break;
            }
            case State.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN: {
              this._stateScriptDataDoubleEscapedLessThanSign(cp);
              break;
            }
            case State.SCRIPT_DATA_DOUBLE_ESCAPE_END: {
              this._stateScriptDataDoubleEscapeEnd(cp);
              break;
            }
            case State.BEFORE_ATTRIBUTE_NAME: {
              this._stateBeforeAttributeName(cp);
              break;
            }
            case State.ATTRIBUTE_NAME: {
              this._stateAttributeName(cp);
              break;
            }
            case State.AFTER_ATTRIBUTE_NAME: {
              this._stateAfterAttributeName(cp);
              break;
            }
            case State.BEFORE_ATTRIBUTE_VALUE: {
              this._stateBeforeAttributeValue(cp);
              break;
            }
            case State.ATTRIBUTE_VALUE_DOUBLE_QUOTED: {
              this._stateAttributeValueDoubleQuoted(cp);
              break;
            }
            case State.ATTRIBUTE_VALUE_SINGLE_QUOTED: {
              this._stateAttributeValueSingleQuoted(cp);
              break;
            }
            case State.ATTRIBUTE_VALUE_UNQUOTED: {
              this._stateAttributeValueUnquoted(cp);
              break;
            }
            case State.AFTER_ATTRIBUTE_VALUE_QUOTED: {
              this._stateAfterAttributeValueQuoted(cp);
              break;
            }
            case State.SELF_CLOSING_START_TAG: {
              this._stateSelfClosingStartTag(cp);
              break;
            }
            case State.BOGUS_COMMENT: {
              this._stateBogusComment(cp);
              break;
            }
            case State.MARKUP_DECLARATION_OPEN: {
              this._stateMarkupDeclarationOpen(cp);
              break;
            }
            case State.COMMENT_START: {
              this._stateCommentStart(cp);
              break;
            }
            case State.COMMENT_START_DASH: {
              this._stateCommentStartDash(cp);
              break;
            }
            case State.COMMENT: {
              this._stateComment(cp);
              break;
            }
            case State.COMMENT_LESS_THAN_SIGN: {
              this._stateCommentLessThanSign(cp);
              break;
            }
            case State.COMMENT_LESS_THAN_SIGN_BANG: {
              this._stateCommentLessThanSignBang(cp);
              break;
            }
            case State.COMMENT_LESS_THAN_SIGN_BANG_DASH: {
              this._stateCommentLessThanSignBangDash(cp);
              break;
            }
            case State.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH: {
              this._stateCommentLessThanSignBangDashDash(cp);
              break;
            }
            case State.COMMENT_END_DASH: {
              this._stateCommentEndDash(cp);
              break;
            }
            case State.COMMENT_END: {
              this._stateCommentEnd(cp);
              break;
            }
            case State.COMMENT_END_BANG: {
              this._stateCommentEndBang(cp);
              break;
            }
            case State.DOCTYPE: {
              this._stateDoctype(cp);
              break;
            }
            case State.BEFORE_DOCTYPE_NAME: {
              this._stateBeforeDoctypeName(cp);
              break;
            }
            case State.DOCTYPE_NAME: {
              this._stateDoctypeName(cp);
              break;
            }
            case State.AFTER_DOCTYPE_NAME: {
              this._stateAfterDoctypeName(cp);
              break;
            }
            case State.AFTER_DOCTYPE_PUBLIC_KEYWORD: {
              this._stateAfterDoctypePublicKeyword(cp);
              break;
            }
            case State.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER: {
              this._stateBeforeDoctypePublicIdentifier(cp);
              break;
            }
            case State.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED: {
              this._stateDoctypePublicIdentifierDoubleQuoted(cp);
              break;
            }
            case State.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED: {
              this._stateDoctypePublicIdentifierSingleQuoted(cp);
              break;
            }
            case State.AFTER_DOCTYPE_PUBLIC_IDENTIFIER: {
              this._stateAfterDoctypePublicIdentifier(cp);
              break;
            }
            case State.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS: {
              this._stateBetweenDoctypePublicAndSystemIdentifiers(cp);
              break;
            }
            case State.AFTER_DOCTYPE_SYSTEM_KEYWORD: {
              this._stateAfterDoctypeSystemKeyword(cp);
              break;
            }
            case State.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER: {
              this._stateBeforeDoctypeSystemIdentifier(cp);
              break;
            }
            case State.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED: {
              this._stateDoctypeSystemIdentifierDoubleQuoted(cp);
              break;
            }
            case State.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED: {
              this._stateDoctypeSystemIdentifierSingleQuoted(cp);
              break;
            }
            case State.AFTER_DOCTYPE_SYSTEM_IDENTIFIER: {
              this._stateAfterDoctypeSystemIdentifier(cp);
              break;
            }
            case State.BOGUS_DOCTYPE: {
              this._stateBogusDoctype(cp);
              break;
            }
            case State.CDATA_SECTION: {
              this._stateCdataSection(cp);
              break;
            }
            case State.CDATA_SECTION_BRACKET: {
              this._stateCdataSectionBracket(cp);
              break;
            }
            case State.CDATA_SECTION_END: {
              this._stateCdataSectionEnd(cp);
              break;
            }
            case State.CHARACTER_REFERENCE: {
              this._stateCharacterReference(cp);
              break;
            }
            case State.NAMED_CHARACTER_REFERENCE: {
              this._stateNamedCharacterReference(cp);
              break;
            }
            case State.AMBIGUOUS_AMPERSAND: {
              this._stateAmbiguousAmpersand(cp);
              break;
            }
            case State.NUMERIC_CHARACTER_REFERENCE: {
              this._stateNumericCharacterReference(cp);
              break;
            }
            case State.HEXADEMICAL_CHARACTER_REFERENCE_START: {
              this._stateHexademicalCharacterReferenceStart(cp);
              break;
            }
            case State.HEXADEMICAL_CHARACTER_REFERENCE: {
              this._stateHexademicalCharacterReference(cp);
              break;
            }
            case State.DECIMAL_CHARACTER_REFERENCE: {
              this._stateDecimalCharacterReference(cp);
              break;
            }
            case State.NUMERIC_CHARACTER_REFERENCE_END: {
              this._stateNumericCharacterReferenceEnd(cp);
              break;
            }
            default: {
              throw new Error("Unknown state");
            }
          }
        }
        // State machine
        // Data state
        //------------------------------------------------------------------
        _stateData(cp) {
          switch (cp) {
            case unicode_js_1.CODE_POINTS.LESS_THAN_SIGN: {
              this.state = State.TAG_OPEN;
              break;
            }
            case unicode_js_1.CODE_POINTS.AMPERSAND: {
              this.returnState = State.DATA;
              this.state = State.CHARACTER_REFERENCE;
              break;
            }
            case unicode_js_1.CODE_POINTS.NULL: {
              this._err(error_codes_js_1.ERR.unexpectedNullCharacter);
              this._emitCodePoint(cp);
              break;
            }
            case unicode_js_1.CODE_POINTS.EOF: {
              this._emitEOFToken();
              break;
            }
            default: {
              this._emitCodePoint(cp);
            }
          }
        }
        //  RCDATA state
        //------------------------------------------------------------------
        _stateRcdata(cp) {
          switch (cp) {
            case unicode_js_1.CODE_POINTS.AMPERSAND: {
              this.returnState = State.RCDATA;
              this.state = State.CHARACTER_REFERENCE;
              break;
            }
            case unicode_js_1.CODE_POINTS.LESS_THAN_SIGN: {
              this.state = State.RCDATA_LESS_THAN_SIGN;
              break;
            }
            case unicode_js_1.CODE_POINTS.NULL: {
              this._err(error_codes_js_1.ERR.unexpectedNullCharacter);
              this._emitChars(unicode_js_1.REPLACEMENT_CHARACTER);
              break;
            }
            case unicode_js_1.CODE_POINTS.EOF: {
              this._emitEOFToken();
              break;
            }
            default: {
              this._emitCodePoint(cp);
            }
          }
        }
        // RAWTEXT state
        //------------------------------------------------------------------
        _stateRawtext(cp) {
          switch (cp) {
            case unicode_js_1.CODE_POINTS.LESS_THAN_SIGN: {
              this.state = State.RAWTEXT_LESS_THAN_SIGN;
              break;
            }
            case unicode_js_1.CODE_POINTS.NULL: {
              this._err(error_codes_js_1.ERR.unexpectedNullCharacter);
              this._emitChars(unicode_js_1.REPLACEMENT_CHARACTER);
              break;
            }
            case unicode_js_1.CODE_POINTS.EOF: {
              this._emitEOFToken();
              break;
            }
            default: {
              this._emitCodePoint(cp);
            }
          }
        }
        // Script data state
        //------------------------------------------------------------------
        _stateScriptData(cp) {
          switch (cp) {
            case unicode_js_1.CODE_POINTS.LESS_THAN_SIGN: {
              this.state = State.SCRIPT_DATA_LESS_THAN_SIGN;
              break;
            }
            case unicode_js_1.CODE_POINTS.NULL: {
              this._err(error_codes_js_1.ERR.unexpectedNullCharacter);
              this._emitChars(unicode_js_1.REPLACEMENT_CHARACTER);
              break;
            }
            case unicode_js_1.CODE_POINTS.EOF: {
              this._emitEOFToken();
              break;
            }
            default: {
              this._emitCodePoint(cp);
            }
          }
        }
        // PLAINTEXT state
        //------------------------------------------------------------------
        _statePlaintext(cp) {
          switch (cp) {
            case unicode_js_1.CODE_POINTS.NULL: {
              this._err(error_codes_js_1.ERR.unexpectedNullCharacter);
              this._emitChars(unicode_js_1.REPLACEMENT_CHARACTER);
              break;
            }
            case unicode_js_1.CODE_POINTS.EOF: {
              this._emitEOFToken();
              break;
            }
            default: {
              this._emitCodePoint(cp);
            }
          }
        }
        // Tag open state
        //------------------------------------------------------------------
        _stateTagOpen(cp) {
          if (isAsciiLetter(cp)) {
            this._createStartTagToken();
            this.state = State.TAG_NAME;
            this._stateTagName(cp);
          } else
            switch (cp) {
              case unicode_js_1.CODE_POINTS.EXCLAMATION_MARK: {
                this.state = State.MARKUP_DECLARATION_OPEN;
                break;
              }
              case unicode_js_1.CODE_POINTS.SOLIDUS: {
                this.state = State.END_TAG_OPEN;
                break;
              }
              case unicode_js_1.CODE_POINTS.QUESTION_MARK: {
                this._err(error_codes_js_1.ERR.unexpectedQuestionMarkInsteadOfTagName);
                this._createCommentToken(1);
                this.state = State.BOGUS_COMMENT;
                this._stateBogusComment(cp);
                break;
              }
              case unicode_js_1.CODE_POINTS.EOF: {
                this._err(error_codes_js_1.ERR.eofBeforeTagName);
                this._emitChars("<");
                this._emitEOFToken();
                break;
              }
              default: {
                this._err(error_codes_js_1.ERR.invalidFirstCharacterOfTagName);
                this._emitChars("<");
                this.state = State.DATA;
                this._stateData(cp);
              }
            }
        }
        // End tag open state
        //------------------------------------------------------------------
        _stateEndTagOpen(cp) {
          if (isAsciiLetter(cp)) {
            this._createEndTagToken();
            this.state = State.TAG_NAME;
            this._stateTagName(cp);
          } else
            switch (cp) {
              case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
                this._err(error_codes_js_1.ERR.missingEndTagName);
                this.state = State.DATA;
                break;
              }
              case unicode_js_1.CODE_POINTS.EOF: {
                this._err(error_codes_js_1.ERR.eofBeforeTagName);
                this._emitChars("</");
                this._emitEOFToken();
                break;
              }
              default: {
                this._err(error_codes_js_1.ERR.invalidFirstCharacterOfTagName);
                this._createCommentToken(2);
                this.state = State.BOGUS_COMMENT;
                this._stateBogusComment(cp);
              }
            }
        }
        // Tag name state
        //------------------------------------------------------------------
        _stateTagName(cp) {
          const token = this.currentToken;
          switch (cp) {
            case unicode_js_1.CODE_POINTS.SPACE:
            case unicode_js_1.CODE_POINTS.LINE_FEED:
            case unicode_js_1.CODE_POINTS.TABULATION:
            case unicode_js_1.CODE_POINTS.FORM_FEED: {
              this.state = State.BEFORE_ATTRIBUTE_NAME;
              break;
            }
            case unicode_js_1.CODE_POINTS.SOLIDUS: {
              this.state = State.SELF_CLOSING_START_TAG;
              break;
            }
            case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
              this.state = State.DATA;
              this.emitCurrentTagToken();
              break;
            }
            case unicode_js_1.CODE_POINTS.NULL: {
              this._err(error_codes_js_1.ERR.unexpectedNullCharacter);
              token.tagName += unicode_js_1.REPLACEMENT_CHARACTER;
              break;
            }
            case unicode_js_1.CODE_POINTS.EOF: {
              this._err(error_codes_js_1.ERR.eofInTag);
              this._emitEOFToken();
              break;
            }
            default: {
              token.tagName += String.fromCodePoint(isAsciiUpper(cp) ? toAsciiLower(cp) : cp);
            }
          }
        }
        // RCDATA less-than sign state
        //------------------------------------------------------------------
        _stateRcdataLessThanSign(cp) {
          if (cp === unicode_js_1.CODE_POINTS.SOLIDUS) {
            this.state = State.RCDATA_END_TAG_OPEN;
          } else {
            this._emitChars("<");
            this.state = State.RCDATA;
            this._stateRcdata(cp);
          }
        }
        // RCDATA end tag open state
        //------------------------------------------------------------------
        _stateRcdataEndTagOpen(cp) {
          if (isAsciiLetter(cp)) {
            this.state = State.RCDATA_END_TAG_NAME;
            this._stateRcdataEndTagName(cp);
          } else {
            this._emitChars("</");
            this.state = State.RCDATA;
            this._stateRcdata(cp);
          }
        }
        handleSpecialEndTag(_cp) {
          if (!this.preprocessor.startsWith(this.lastStartTagName, false)) {
            return !this._ensureHibernation();
          }
          this._createEndTagToken();
          const token = this.currentToken;
          token.tagName = this.lastStartTagName;
          const cp = this.preprocessor.peek(this.lastStartTagName.length);
          switch (cp) {
            case unicode_js_1.CODE_POINTS.SPACE:
            case unicode_js_1.CODE_POINTS.LINE_FEED:
            case unicode_js_1.CODE_POINTS.TABULATION:
            case unicode_js_1.CODE_POINTS.FORM_FEED: {
              this._advanceBy(this.lastStartTagName.length);
              this.state = State.BEFORE_ATTRIBUTE_NAME;
              return false;
            }
            case unicode_js_1.CODE_POINTS.SOLIDUS: {
              this._advanceBy(this.lastStartTagName.length);
              this.state = State.SELF_CLOSING_START_TAG;
              return false;
            }
            case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
              this._advanceBy(this.lastStartTagName.length);
              this.emitCurrentTagToken();
              this.state = State.DATA;
              return false;
            }
            default: {
              return !this._ensureHibernation();
            }
          }
        }
        // RCDATA end tag name state
        //------------------------------------------------------------------
        _stateRcdataEndTagName(cp) {
          if (this.handleSpecialEndTag(cp)) {
            this._emitChars("</");
            this.state = State.RCDATA;
            this._stateRcdata(cp);
          }
        }
        // RAWTEXT less-than sign state
        //------------------------------------------------------------------
        _stateRawtextLessThanSign(cp) {
          if (cp === unicode_js_1.CODE_POINTS.SOLIDUS) {
            this.state = State.RAWTEXT_END_TAG_OPEN;
          } else {
            this._emitChars("<");
            this.state = State.RAWTEXT;
            this._stateRawtext(cp);
          }
        }
        // RAWTEXT end tag open state
        //------------------------------------------------------------------
        _stateRawtextEndTagOpen(cp) {
          if (isAsciiLetter(cp)) {
            this.state = State.RAWTEXT_END_TAG_NAME;
            this._stateRawtextEndTagName(cp);
          } else {
            this._emitChars("</");
            this.state = State.RAWTEXT;
            this._stateRawtext(cp);
          }
        }
        // RAWTEXT end tag name state
        //------------------------------------------------------------------
        _stateRawtextEndTagName(cp) {
          if (this.handleSpecialEndTag(cp)) {
            this._emitChars("</");
            this.state = State.RAWTEXT;
            this._stateRawtext(cp);
          }
        }
        // Script data less-than sign state
        //------------------------------------------------------------------
        _stateScriptDataLessThanSign(cp) {
          switch (cp) {
            case unicode_js_1.CODE_POINTS.SOLIDUS: {
              this.state = State.SCRIPT_DATA_END_TAG_OPEN;
              break;
            }
            case unicode_js_1.CODE_POINTS.EXCLAMATION_MARK: {
              this.state = State.SCRIPT_DATA_ESCAPE_START;
              this._emitChars("<!");
              break;
            }
            default: {
              this._emitChars("<");
              this.state = State.SCRIPT_DATA;
              this._stateScriptData(cp);
            }
          }
        }
        // Script data end tag open state
        //------------------------------------------------------------------
        _stateScriptDataEndTagOpen(cp) {
          if (isAsciiLetter(cp)) {
            this.state = State.SCRIPT_DATA_END_TAG_NAME;
            this._stateScriptDataEndTagName(cp);
          } else {
            this._emitChars("</");
            this.state = State.SCRIPT_DATA;
            this._stateScriptData(cp);
          }
        }
        // Script data end tag name state
        //------------------------------------------------------------------
        _stateScriptDataEndTagName(cp) {
          if (this.handleSpecialEndTag(cp)) {
            this._emitChars("</");
            this.state = State.SCRIPT_DATA;
            this._stateScriptData(cp);
          }
        }
        // Script data escape start state
        //------------------------------------------------------------------
        _stateScriptDataEscapeStart(cp) {
          if (cp === unicode_js_1.CODE_POINTS.HYPHEN_MINUS) {
            this.state = State.SCRIPT_DATA_ESCAPE_START_DASH;
            this._emitChars("-");
          } else {
            this.state = State.SCRIPT_DATA;
            this._stateScriptData(cp);
          }
        }
        // Script data escape start dash state
        //------------------------------------------------------------------
        _stateScriptDataEscapeStartDash(cp) {
          if (cp === unicode_js_1.CODE_POINTS.HYPHEN_MINUS) {
            this.state = State.SCRIPT_DATA_ESCAPED_DASH_DASH;
            this._emitChars("-");
          } else {
            this.state = State.SCRIPT_DATA;
            this._stateScriptData(cp);
          }
        }
        // Script data escaped state
        //------------------------------------------------------------------
        _stateScriptDataEscaped(cp) {
          switch (cp) {
            case unicode_js_1.CODE_POINTS.HYPHEN_MINUS: {
              this.state = State.SCRIPT_DATA_ESCAPED_DASH;
              this._emitChars("-");
              break;
            }
            case unicode_js_1.CODE_POINTS.LESS_THAN_SIGN: {
              this.state = State.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
              break;
            }
            case unicode_js_1.CODE_POINTS.NULL: {
              this._err(error_codes_js_1.ERR.unexpectedNullCharacter);
              this._emitChars(unicode_js_1.REPLACEMENT_CHARACTER);
              break;
            }
            case unicode_js_1.CODE_POINTS.EOF: {
              this._err(error_codes_js_1.ERR.eofInScriptHtmlCommentLikeText);
              this._emitEOFToken();
              break;
            }
            default: {
              this._emitCodePoint(cp);
            }
          }
        }
        // Script data escaped dash state
        //------------------------------------------------------------------
        _stateScriptDataEscapedDash(cp) {
          switch (cp) {
            case unicode_js_1.CODE_POINTS.HYPHEN_MINUS: {
              this.state = State.SCRIPT_DATA_ESCAPED_DASH_DASH;
              this._emitChars("-");
              break;
            }
            case unicode_js_1.CODE_POINTS.LESS_THAN_SIGN: {
              this.state = State.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
              break;
            }
            case unicode_js_1.CODE_POINTS.NULL: {
              this._err(error_codes_js_1.ERR.unexpectedNullCharacter);
              this.state = State.SCRIPT_DATA_ESCAPED;
              this._emitChars(unicode_js_1.REPLACEMENT_CHARACTER);
              break;
            }
            case unicode_js_1.CODE_POINTS.EOF: {
              this._err(error_codes_js_1.ERR.eofInScriptHtmlCommentLikeText);
              this._emitEOFToken();
              break;
            }
            default: {
              this.state = State.SCRIPT_DATA_ESCAPED;
              this._emitCodePoint(cp);
            }
          }
        }
        // Script data escaped dash dash state
        //------------------------------------------------------------------
        _stateScriptDataEscapedDashDash(cp) {
          switch (cp) {
            case unicode_js_1.CODE_POINTS.HYPHEN_MINUS: {
              this._emitChars("-");
              break;
            }
            case unicode_js_1.CODE_POINTS.LESS_THAN_SIGN: {
              this.state = State.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
              break;
            }
            case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
              this.state = State.SCRIPT_DATA;
              this._emitChars(">");
              break;
            }
            case unicode_js_1.CODE_POINTS.NULL: {
              this._err(error_codes_js_1.ERR.unexpectedNullCharacter);
              this.state = State.SCRIPT_DATA_ESCAPED;
              this._emitChars(unicode_js_1.REPLACEMENT_CHARACTER);
              break;
            }
            case unicode_js_1.CODE_POINTS.EOF: {
              this._err(error_codes_js_1.ERR.eofInScriptHtmlCommentLikeText);
              this._emitEOFToken();
              break;
            }
            default: {
              this.state = State.SCRIPT_DATA_ESCAPED;
              this._emitCodePoint(cp);
            }
          }
        }
        // Script data escaped less-than sign state
        //------------------------------------------------------------------
        _stateScriptDataEscapedLessThanSign(cp) {
          if (cp === unicode_js_1.CODE_POINTS.SOLIDUS) {
            this.state = State.SCRIPT_DATA_ESCAPED_END_TAG_OPEN;
          } else if (isAsciiLetter(cp)) {
            this._emitChars("<");
            this.state = State.SCRIPT_DATA_DOUBLE_ESCAPE_START;
            this._stateScriptDataDoubleEscapeStart(cp);
          } else {
            this._emitChars("<");
            this.state = State.SCRIPT_DATA_ESCAPED;
            this._stateScriptDataEscaped(cp);
          }
        }
        // Script data escaped end tag open state
        //------------------------------------------------------------------
        _stateScriptDataEscapedEndTagOpen(cp) {
          if (isAsciiLetter(cp)) {
            this.state = State.SCRIPT_DATA_ESCAPED_END_TAG_NAME;
            this._stateScriptDataEscapedEndTagName(cp);
          } else {
            this._emitChars("</");
            this.state = State.SCRIPT_DATA_ESCAPED;
            this._stateScriptDataEscaped(cp);
          }
        }
        // Script data escaped end tag name state
        //------------------------------------------------------------------
        _stateScriptDataEscapedEndTagName(cp) {
          if (this.handleSpecialEndTag(cp)) {
            this._emitChars("</");
            this.state = State.SCRIPT_DATA_ESCAPED;
            this._stateScriptDataEscaped(cp);
          }
        }
        // Script data double escape start state
        //------------------------------------------------------------------
        _stateScriptDataDoubleEscapeStart(cp) {
          if (this.preprocessor.startsWith(unicode_js_1.SEQUENCES.SCRIPT, false) && isScriptDataDoubleEscapeSequenceEnd(this.preprocessor.peek(unicode_js_1.SEQUENCES.SCRIPT.length))) {
            this._emitCodePoint(cp);
            for (let i = 0; i < unicode_js_1.SEQUENCES.SCRIPT.length; i++) {
              this._emitCodePoint(this._consume());
            }
            this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED;
          } else if (!this._ensureHibernation()) {
            this.state = State.SCRIPT_DATA_ESCAPED;
            this._stateScriptDataEscaped(cp);
          }
        }
        // Script data double escaped state
        //------------------------------------------------------------------
        _stateScriptDataDoubleEscaped(cp) {
          switch (cp) {
            case unicode_js_1.CODE_POINTS.HYPHEN_MINUS: {
              this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED_DASH;
              this._emitChars("-");
              break;
            }
            case unicode_js_1.CODE_POINTS.LESS_THAN_SIGN: {
              this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN;
              this._emitChars("<");
              break;
            }
            case unicode_js_1.CODE_POINTS.NULL: {
              this._err(error_codes_js_1.ERR.unexpectedNullCharacter);
              this._emitChars(unicode_js_1.REPLACEMENT_CHARACTER);
              break;
            }
            case unicode_js_1.CODE_POINTS.EOF: {
              this._err(error_codes_js_1.ERR.eofInScriptHtmlCommentLikeText);
              this._emitEOFToken();
              break;
            }
            default: {
              this._emitCodePoint(cp);
            }
          }
        }
        // Script data double escaped dash state
        //------------------------------------------------------------------
        _stateScriptDataDoubleEscapedDash(cp) {
          switch (cp) {
            case unicode_js_1.CODE_POINTS.HYPHEN_MINUS: {
              this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH;
              this._emitChars("-");
              break;
            }
            case unicode_js_1.CODE_POINTS.LESS_THAN_SIGN: {
              this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN;
              this._emitChars("<");
              break;
            }
            case unicode_js_1.CODE_POINTS.NULL: {
              this._err(error_codes_js_1.ERR.unexpectedNullCharacter);
              this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED;
              this._emitChars(unicode_js_1.REPLACEMENT_CHARACTER);
              break;
            }
            case unicode_js_1.CODE_POINTS.EOF: {
              this._err(error_codes_js_1.ERR.eofInScriptHtmlCommentLikeText);
              this._emitEOFToken();
              break;
            }
            default: {
              this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED;
              this._emitCodePoint(cp);
            }
          }
        }
        // Script data double escaped dash dash state
        //------------------------------------------------------------------
        _stateScriptDataDoubleEscapedDashDash(cp) {
          switch (cp) {
            case unicode_js_1.CODE_POINTS.HYPHEN_MINUS: {
              this._emitChars("-");
              break;
            }
            case unicode_js_1.CODE_POINTS.LESS_THAN_SIGN: {
              this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN;
              this._emitChars("<");
              break;
            }
            case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
              this.state = State.SCRIPT_DATA;
              this._emitChars(">");
              break;
            }
            case unicode_js_1.CODE_POINTS.NULL: {
              this._err(error_codes_js_1.ERR.unexpectedNullCharacter);
              this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED;
              this._emitChars(unicode_js_1.REPLACEMENT_CHARACTER);
              break;
            }
            case unicode_js_1.CODE_POINTS.EOF: {
              this._err(error_codes_js_1.ERR.eofInScriptHtmlCommentLikeText);
              this._emitEOFToken();
              break;
            }
            default: {
              this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED;
              this._emitCodePoint(cp);
            }
          }
        }
        // Script data double escaped less-than sign state
        //------------------------------------------------------------------
        _stateScriptDataDoubleEscapedLessThanSign(cp) {
          if (cp === unicode_js_1.CODE_POINTS.SOLIDUS) {
            this.state = State.SCRIPT_DATA_DOUBLE_ESCAPE_END;
            this._emitChars("/");
          } else {
            this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED;
            this._stateScriptDataDoubleEscaped(cp);
          }
        }
        // Script data double escape end state
        //------------------------------------------------------------------
        _stateScriptDataDoubleEscapeEnd(cp) {
          if (this.preprocessor.startsWith(unicode_js_1.SEQUENCES.SCRIPT, false) && isScriptDataDoubleEscapeSequenceEnd(this.preprocessor.peek(unicode_js_1.SEQUENCES.SCRIPT.length))) {
            this._emitCodePoint(cp);
            for (let i = 0; i < unicode_js_1.SEQUENCES.SCRIPT.length; i++) {
              this._emitCodePoint(this._consume());
            }
            this.state = State.SCRIPT_DATA_ESCAPED;
          } else if (!this._ensureHibernation()) {
            this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED;
            this._stateScriptDataDoubleEscaped(cp);
          }
        }
        // Before attribute name state
        //------------------------------------------------------------------
        _stateBeforeAttributeName(cp) {
          switch (cp) {
            case unicode_js_1.CODE_POINTS.SPACE:
            case unicode_js_1.CODE_POINTS.LINE_FEED:
            case unicode_js_1.CODE_POINTS.TABULATION:
            case unicode_js_1.CODE_POINTS.FORM_FEED: {
              break;
            }
            case unicode_js_1.CODE_POINTS.SOLIDUS:
            case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN:
            case unicode_js_1.CODE_POINTS.EOF: {
              this.state = State.AFTER_ATTRIBUTE_NAME;
              this._stateAfterAttributeName(cp);
              break;
            }
            case unicode_js_1.CODE_POINTS.EQUALS_SIGN: {
              this._err(error_codes_js_1.ERR.unexpectedEqualsSignBeforeAttributeName);
              this._createAttr("=");
              this.state = State.ATTRIBUTE_NAME;
              break;
            }
            default: {
              this._createAttr("");
              this.state = State.ATTRIBUTE_NAME;
              this._stateAttributeName(cp);
            }
          }
        }
        // Attribute name state
        //------------------------------------------------------------------
        _stateAttributeName(cp) {
          switch (cp) {
            case unicode_js_1.CODE_POINTS.SPACE:
            case unicode_js_1.CODE_POINTS.LINE_FEED:
            case unicode_js_1.CODE_POINTS.TABULATION:
            case unicode_js_1.CODE_POINTS.FORM_FEED:
            case unicode_js_1.CODE_POINTS.SOLIDUS:
            case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN:
            case unicode_js_1.CODE_POINTS.EOF: {
              this._leaveAttrName();
              this.state = State.AFTER_ATTRIBUTE_NAME;
              this._stateAfterAttributeName(cp);
              break;
            }
            case unicode_js_1.CODE_POINTS.EQUALS_SIGN: {
              this._leaveAttrName();
              this.state = State.BEFORE_ATTRIBUTE_VALUE;
              break;
            }
            case unicode_js_1.CODE_POINTS.QUOTATION_MARK:
            case unicode_js_1.CODE_POINTS.APOSTROPHE:
            case unicode_js_1.CODE_POINTS.LESS_THAN_SIGN: {
              this._err(error_codes_js_1.ERR.unexpectedCharacterInAttributeName);
              this.currentAttr.name += String.fromCodePoint(cp);
              break;
            }
            case unicode_js_1.CODE_POINTS.NULL: {
              this._err(error_codes_js_1.ERR.unexpectedNullCharacter);
              this.currentAttr.name += unicode_js_1.REPLACEMENT_CHARACTER;
              break;
            }
            default: {
              this.currentAttr.name += String.fromCodePoint(isAsciiUpper(cp) ? toAsciiLower(cp) : cp);
            }
          }
        }
        // After attribute name state
        //------------------------------------------------------------------
        _stateAfterAttributeName(cp) {
          switch (cp) {
            case unicode_js_1.CODE_POINTS.SPACE:
            case unicode_js_1.CODE_POINTS.LINE_FEED:
            case unicode_js_1.CODE_POINTS.TABULATION:
            case unicode_js_1.CODE_POINTS.FORM_FEED: {
              break;
            }
            case unicode_js_1.CODE_POINTS.SOLIDUS: {
              this.state = State.SELF_CLOSING_START_TAG;
              break;
            }
            case unicode_js_1.CODE_POINTS.EQUALS_SIGN: {
              this.state = State.BEFORE_ATTRIBUTE_VALUE;
              break;
            }
            case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
              this.state = State.DATA;
              this.emitCurrentTagToken();
              break;
            }
            case unicode_js_1.CODE_POINTS.EOF: {
              this._err(error_codes_js_1.ERR.eofInTag);
              this._emitEOFToken();
              break;
            }
            default: {
              this._createAttr("");
              this.state = State.ATTRIBUTE_NAME;
              this._stateAttributeName(cp);
            }
          }
        }
        // Before attribute value state
        //------------------------------------------------------------------
        _stateBeforeAttributeValue(cp) {
          switch (cp) {
            case unicode_js_1.CODE_POINTS.SPACE:
            case unicode_js_1.CODE_POINTS.LINE_FEED:
            case unicode_js_1.CODE_POINTS.TABULATION:
            case unicode_js_1.CODE_POINTS.FORM_FEED: {
              break;
            }
            case unicode_js_1.CODE_POINTS.QUOTATION_MARK: {
              this.state = State.ATTRIBUTE_VALUE_DOUBLE_QUOTED;
              break;
            }
            case unicode_js_1.CODE_POINTS.APOSTROPHE: {
              this.state = State.ATTRIBUTE_VALUE_SINGLE_QUOTED;
              break;
            }
            case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
              this._err(error_codes_js_1.ERR.missingAttributeValue);
              this.state = State.DATA;
              this.emitCurrentTagToken();
              break;
            }
            default: {
              this.state = State.ATTRIBUTE_VALUE_UNQUOTED;
              this._stateAttributeValueUnquoted(cp);
            }
          }
        }
        // Attribute value (double-quoted) state
        //------------------------------------------------------------------
        _stateAttributeValueDoubleQuoted(cp) {
          switch (cp) {
            case unicode_js_1.CODE_POINTS.QUOTATION_MARK: {
              this.state = State.AFTER_ATTRIBUTE_VALUE_QUOTED;
              break;
            }
            case unicode_js_1.CODE_POINTS.AMPERSAND: {
              this.returnState = State.ATTRIBUTE_VALUE_DOUBLE_QUOTED;
              this.state = State.CHARACTER_REFERENCE;
              break;
            }
            case unicode_js_1.CODE_POINTS.NULL: {
              this._err(error_codes_js_1.ERR.unexpectedNullCharacter);
              this.currentAttr.value += unicode_js_1.REPLACEMENT_CHARACTER;
              break;
            }
            case unicode_js_1.CODE_POINTS.EOF: {
              this._err(error_codes_js_1.ERR.eofInTag);
              this._emitEOFToken();
              break;
            }
            default: {
              this.currentAttr.value += String.fromCodePoint(cp);
            }
          }
        }
        // Attribute value (single-quoted) state
        //------------------------------------------------------------------
        _stateAttributeValueSingleQuoted(cp) {
          switch (cp) {
            case unicode_js_1.CODE_POINTS.APOSTROPHE: {
              this.state = State.AFTER_ATTRIBUTE_VALUE_QUOTED;
              break;
            }
            case unicode_js_1.CODE_POINTS.AMPERSAND: {
              this.returnState = State.ATTRIBUTE_VALUE_SINGLE_QUOTED;
              this.state = State.CHARACTER_REFERENCE;
              break;
            }
            case unicode_js_1.CODE_POINTS.NULL: {
              this._err(error_codes_js_1.ERR.unexpectedNullCharacter);
              this.currentAttr.value += unicode_js_1.REPLACEMENT_CHARACTER;
              break;
            }
            case unicode_js_1.CODE_POINTS.EOF: {
              this._err(error_codes_js_1.ERR.eofInTag);
              this._emitEOFToken();
              break;
            }
            default: {
              this.currentAttr.value += String.fromCodePoint(cp);
            }
          }
        }
        // Attribute value (unquoted) state
        //------------------------------------------------------------------
        _stateAttributeValueUnquoted(cp) {
          switch (cp) {
            case unicode_js_1.CODE_POINTS.SPACE:
            case unicode_js_1.CODE_POINTS.LINE_FEED:
            case unicode_js_1.CODE_POINTS.TABULATION:
            case unicode_js_1.CODE_POINTS.FORM_FEED: {
              this._leaveAttrValue();
              this.state = State.BEFORE_ATTRIBUTE_NAME;
              break;
            }
            case unicode_js_1.CODE_POINTS.AMPERSAND: {
              this.returnState = State.ATTRIBUTE_VALUE_UNQUOTED;
              this.state = State.CHARACTER_REFERENCE;
              break;
            }
            case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
              this._leaveAttrValue();
              this.state = State.DATA;
              this.emitCurrentTagToken();
              break;
            }
            case unicode_js_1.CODE_POINTS.NULL: {
              this._err(error_codes_js_1.ERR.unexpectedNullCharacter);
              this.currentAttr.value += unicode_js_1.REPLACEMENT_CHARACTER;
              break;
            }
            case unicode_js_1.CODE_POINTS.QUOTATION_MARK:
            case unicode_js_1.CODE_POINTS.APOSTROPHE:
            case unicode_js_1.CODE_POINTS.LESS_THAN_SIGN:
            case unicode_js_1.CODE_POINTS.EQUALS_SIGN:
            case unicode_js_1.CODE_POINTS.GRAVE_ACCENT: {
              this._err(error_codes_js_1.ERR.unexpectedCharacterInUnquotedAttributeValue);
              this.currentAttr.value += String.fromCodePoint(cp);
              break;
            }
            case unicode_js_1.CODE_POINTS.EOF: {
              this._err(error_codes_js_1.ERR.eofInTag);
              this._emitEOFToken();
              break;
            }
            default: {
              this.currentAttr.value += String.fromCodePoint(cp);
            }
          }
        }
        // After attribute value (quoted) state
        //------------------------------------------------------------------
        _stateAfterAttributeValueQuoted(cp) {
          switch (cp) {
            case unicode_js_1.CODE_POINTS.SPACE:
            case unicode_js_1.CODE_POINTS.LINE_FEED:
            case unicode_js_1.CODE_POINTS.TABULATION:
            case unicode_js_1.CODE_POINTS.FORM_FEED: {
              this._leaveAttrValue();
              this.state = State.BEFORE_ATTRIBUTE_NAME;
              break;
            }
            case unicode_js_1.CODE_POINTS.SOLIDUS: {
              this._leaveAttrValue();
              this.state = State.SELF_CLOSING_START_TAG;
              break;
            }
            case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
              this._leaveAttrValue();
              this.state = State.DATA;
              this.emitCurrentTagToken();
              break;
            }
            case unicode_js_1.CODE_POINTS.EOF: {
              this._err(error_codes_js_1.ERR.eofInTag);
              this._emitEOFToken();
              break;
            }
            default: {
              this._err(error_codes_js_1.ERR.missingWhitespaceBetweenAttributes);
              this.state = State.BEFORE_ATTRIBUTE_NAME;
              this._stateBeforeAttributeName(cp);
            }
          }
        }
        // Self-closing start tag state
        //------------------------------------------------------------------
        _stateSelfClosingStartTag(cp) {
          switch (cp) {
            case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
              const token = this.currentToken;
              token.selfClosing = true;
              this.state = State.DATA;
              this.emitCurrentTagToken();
              break;
            }
            case unicode_js_1.CODE_POINTS.EOF: {
              this._err(error_codes_js_1.ERR.eofInTag);
              this._emitEOFToken();
              break;
            }
            default: {
              this._err(error_codes_js_1.ERR.unexpectedSolidusInTag);
              this.state = State.BEFORE_ATTRIBUTE_NAME;
              this._stateBeforeAttributeName(cp);
            }
          }
        }
        // Bogus comment state
        //------------------------------------------------------------------
        _stateBogusComment(cp) {
          const token = this.currentToken;
          switch (cp) {
            case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
              this.state = State.DATA;
              this.emitCurrentComment(token);
              break;
            }
            case unicode_js_1.CODE_POINTS.EOF: {
              this.emitCurrentComment(token);
              this._emitEOFToken();
              break;
            }
            case unicode_js_1.CODE_POINTS.NULL: {
              this._err(error_codes_js_1.ERR.unexpectedNullCharacter);
              token.data += unicode_js_1.REPLACEMENT_CHARACTER;
              break;
            }
            default: {
              token.data += String.fromCodePoint(cp);
            }
          }
        }
        // Markup declaration open state
        //------------------------------------------------------------------
        _stateMarkupDeclarationOpen(cp) {
          if (this._consumeSequenceIfMatch(unicode_js_1.SEQUENCES.DASH_DASH, true)) {
            this._createCommentToken(unicode_js_1.SEQUENCES.DASH_DASH.length + 1);
            this.state = State.COMMENT_START;
          } else if (this._consumeSequenceIfMatch(unicode_js_1.SEQUENCES.DOCTYPE, false)) {
            this.currentLocation = this.getCurrentLocation(unicode_js_1.SEQUENCES.DOCTYPE.length + 1);
            this.state = State.DOCTYPE;
          } else if (this._consumeSequenceIfMatch(unicode_js_1.SEQUENCES.CDATA_START, true)) {
            if (this.inForeignNode) {
              this.state = State.CDATA_SECTION;
            } else {
              this._err(error_codes_js_1.ERR.cdataInHtmlContent);
              this._createCommentToken(unicode_js_1.SEQUENCES.CDATA_START.length + 1);
              this.currentToken.data = "[CDATA[";
              this.state = State.BOGUS_COMMENT;
            }
          } else if (!this._ensureHibernation()) {
            this._err(error_codes_js_1.ERR.incorrectlyOpenedComment);
            this._createCommentToken(2);
            this.state = State.BOGUS_COMMENT;
            this._stateBogusComment(cp);
          }
        }
        // Comment start state
        //------------------------------------------------------------------
        _stateCommentStart(cp) {
          switch (cp) {
            case unicode_js_1.CODE_POINTS.HYPHEN_MINUS: {
              this.state = State.COMMENT_START_DASH;
              break;
            }
            case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
              this._err(error_codes_js_1.ERR.abruptClosingOfEmptyComment);
              this.state = State.DATA;
              const token = this.currentToken;
              this.emitCurrentComment(token);
              break;
            }
            default: {
              this.state = State.COMMENT;
              this._stateComment(cp);
            }
          }
        }
        // Comment start dash state
        //------------------------------------------------------------------
        _stateCommentStartDash(cp) {
          const token = this.currentToken;
          switch (cp) {
            case unicode_js_1.CODE_POINTS.HYPHEN_MINUS: {
              this.state = State.COMMENT_END;
              break;
            }
            case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
              this._err(error_codes_js_1.ERR.abruptClosingOfEmptyComment);
              this.state = State.DATA;
              this.emitCurrentComment(token);
              break;
            }
            case unicode_js_1.CODE_POINTS.EOF: {
              this._err(error_codes_js_1.ERR.eofInComment);
              this.emitCurrentComment(token);
              this._emitEOFToken();
              break;
            }
            default: {
              token.data += "-";
              this.state = State.COMMENT;
              this._stateComment(cp);
            }
          }
        }
        // Comment state
        //------------------------------------------------------------------
        _stateComment(cp) {
          const token = this.currentToken;
          switch (cp) {
            case unicode_js_1.CODE_POINTS.HYPHEN_MINUS: {
              this.state = State.COMMENT_END_DASH;
              break;
            }
            case unicode_js_1.CODE_POINTS.LESS_THAN_SIGN: {
              token.data += "<";
              this.state = State.COMMENT_LESS_THAN_SIGN;
              break;
            }
            case unicode_js_1.CODE_POINTS.NULL: {
              this._err(error_codes_js_1.ERR.unexpectedNullCharacter);
              token.data += unicode_js_1.REPLACEMENT_CHARACTER;
              break;
            }
            case unicode_js_1.CODE_POINTS.EOF: {
              this._err(error_codes_js_1.ERR.eofInComment);
              this.emitCurrentComment(token);
              this._emitEOFToken();
              break;
            }
            default: {
              token.data += String.fromCodePoint(cp);
            }
          }
        }
        // Comment less-than sign state
        //------------------------------------------------------------------
        _stateCommentLessThanSign(cp) {
          const token = this.currentToken;
          switch (cp) {
            case unicode_js_1.CODE_POINTS.EXCLAMATION_MARK: {
              token.data += "!";
              this.state = State.COMMENT_LESS_THAN_SIGN_BANG;
              break;
            }
            case unicode_js_1.CODE_POINTS.LESS_THAN_SIGN: {
              token.data += "<";
              break;
            }
            default: {
              this.state = State.COMMENT;
              this._stateComment(cp);
            }
          }
        }
        // Comment less-than sign bang state
        //------------------------------------------------------------------
        _stateCommentLessThanSignBang(cp) {
          if (cp === unicode_js_1.CODE_POINTS.HYPHEN_MINUS) {
            this.state = State.COMMENT_LESS_THAN_SIGN_BANG_DASH;
          } else {
            this.state = State.COMMENT;
            this._stateComment(cp);
          }
        }
        // Comment less-than sign bang dash state
        //------------------------------------------------------------------
        _stateCommentLessThanSignBangDash(cp) {
          if (cp === unicode_js_1.CODE_POINTS.HYPHEN_MINUS) {
            this.state = State.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH;
          } else {
            this.state = State.COMMENT_END_DASH;
            this._stateCommentEndDash(cp);
          }
        }
        // Comment less-than sign bang dash dash state
        //------------------------------------------------------------------
        _stateCommentLessThanSignBangDashDash(cp) {
          if (cp !== unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN && cp !== unicode_js_1.CODE_POINTS.EOF) {
            this._err(error_codes_js_1.ERR.nestedComment);
          }
          this.state = State.COMMENT_END;
          this._stateCommentEnd(cp);
        }
        // Comment end dash state
        //------------------------------------------------------------------
        _stateCommentEndDash(cp) {
          const token = this.currentToken;
          switch (cp) {
            case unicode_js_1.CODE_POINTS.HYPHEN_MINUS: {
              this.state = State.COMMENT_END;
              break;
            }
            case unicode_js_1.CODE_POINTS.EOF: {
              this._err(error_codes_js_1.ERR.eofInComment);
              this.emitCurrentComment(token);
              this._emitEOFToken();
              break;
            }
            default: {
              token.data += "-";
              this.state = State.COMMENT;
              this._stateComment(cp);
            }
          }
        }
        // Comment end state
        //------------------------------------------------------------------
        _stateCommentEnd(cp) {
          const token = this.currentToken;
          switch (cp) {
            case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
              this.state = State.DATA;
              this.emitCurrentComment(token);
              break;
            }
            case unicode_js_1.CODE_POINTS.EXCLAMATION_MARK: {
              this.state = State.COMMENT_END_BANG;
              break;
            }
            case unicode_js_1.CODE_POINTS.HYPHEN_MINUS: {
              token.data += "-";
              break;
            }
            case unicode_js_1.CODE_POINTS.EOF: {
              this._err(error_codes_js_1.ERR.eofInComment);
              this.emitCurrentComment(token);
              this._emitEOFToken();
              break;
            }
            default: {
              token.data += "--";
              this.state = State.COMMENT;
              this._stateComment(cp);
            }
          }
        }
        // Comment end bang state
        //------------------------------------------------------------------
        _stateCommentEndBang(cp) {
          const token = this.currentToken;
          switch (cp) {
            case unicode_js_1.CODE_POINTS.HYPHEN_MINUS: {
              token.data += "--!";
              this.state = State.COMMENT_END_DASH;
              break;
            }
            case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
              this._err(error_codes_js_1.ERR.incorrectlyClosedComment);
              this.state = State.DATA;
              this.emitCurrentComment(token);
              break;
            }
            case unicode_js_1.CODE_POINTS.EOF: {
              this._err(error_codes_js_1.ERR.eofInComment);
              this.emitCurrentComment(token);
              this._emitEOFToken();
              break;
            }
            default: {
              token.data += "--!";
              this.state = State.COMMENT;
              this._stateComment(cp);
            }
          }
        }
        // DOCTYPE state
        //------------------------------------------------------------------
        _stateDoctype(cp) {
          switch (cp) {
            case unicode_js_1.CODE_POINTS.SPACE:
            case unicode_js_1.CODE_POINTS.LINE_FEED:
            case unicode_js_1.CODE_POINTS.TABULATION:
            case unicode_js_1.CODE_POINTS.FORM_FEED: {
              this.state = State.BEFORE_DOCTYPE_NAME;
              break;
            }
            case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
              this.state = State.BEFORE_DOCTYPE_NAME;
              this._stateBeforeDoctypeName(cp);
              break;
            }
            case unicode_js_1.CODE_POINTS.EOF: {
              this._err(error_codes_js_1.ERR.eofInDoctype);
              this._createDoctypeToken(null);
              const token = this.currentToken;
              token.forceQuirks = true;
              this.emitCurrentDoctype(token);
              this._emitEOFToken();
              break;
            }
            default: {
              this._err(error_codes_js_1.ERR.missingWhitespaceBeforeDoctypeName);
              this.state = State.BEFORE_DOCTYPE_NAME;
              this._stateBeforeDoctypeName(cp);
            }
          }
        }
        // Before DOCTYPE name state
        //------------------------------------------------------------------
        _stateBeforeDoctypeName(cp) {
          if (isAsciiUpper(cp)) {
            this._createDoctypeToken(String.fromCharCode(toAsciiLower(cp)));
            this.state = State.DOCTYPE_NAME;
          } else
            switch (cp) {
              case unicode_js_1.CODE_POINTS.SPACE:
              case unicode_js_1.CODE_POINTS.LINE_FEED:
              case unicode_js_1.CODE_POINTS.TABULATION:
              case unicode_js_1.CODE_POINTS.FORM_FEED: {
                break;
              }
              case unicode_js_1.CODE_POINTS.NULL: {
                this._err(error_codes_js_1.ERR.unexpectedNullCharacter);
                this._createDoctypeToken(unicode_js_1.REPLACEMENT_CHARACTER);
                this.state = State.DOCTYPE_NAME;
                break;
              }
              case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
                this._err(error_codes_js_1.ERR.missingDoctypeName);
                this._createDoctypeToken(null);
                const token = this.currentToken;
                token.forceQuirks = true;
                this.emitCurrentDoctype(token);
                this.state = State.DATA;
                break;
              }
              case unicode_js_1.CODE_POINTS.EOF: {
                this._err(error_codes_js_1.ERR.eofInDoctype);
                this._createDoctypeToken(null);
                const token = this.currentToken;
                token.forceQuirks = true;
                this.emitCurrentDoctype(token);
                this._emitEOFToken();
                break;
              }
              default: {
                this._createDoctypeToken(String.fromCodePoint(cp));
                this.state = State.DOCTYPE_NAME;
              }
            }
        }
        // DOCTYPE name state
        //------------------------------------------------------------------
        _stateDoctypeName(cp) {
          const token = this.currentToken;
          switch (cp) {
            case unicode_js_1.CODE_POINTS.SPACE:
            case unicode_js_1.CODE_POINTS.LINE_FEED:
            case unicode_js_1.CODE_POINTS.TABULATION:
            case unicode_js_1.CODE_POINTS.FORM_FEED: {
              this.state = State.AFTER_DOCTYPE_NAME;
              break;
            }
            case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
              this.state = State.DATA;
              this.emitCurrentDoctype(token);
              break;
            }
            case unicode_js_1.CODE_POINTS.NULL: {
              this._err(error_codes_js_1.ERR.unexpectedNullCharacter);
              token.name += unicode_js_1.REPLACEMENT_CHARACTER;
              break;
            }
            case unicode_js_1.CODE_POINTS.EOF: {
              this._err(error_codes_js_1.ERR.eofInDoctype);
              token.forceQuirks = true;
              this.emitCurrentDoctype(token);
              this._emitEOFToken();
              break;
            }
            default: {
              token.name += String.fromCodePoint(isAsciiUpper(cp) ? toAsciiLower(cp) : cp);
            }
          }
        }
        // After DOCTYPE name state
        //------------------------------------------------------------------
        _stateAfterDoctypeName(cp) {
          const token = this.currentToken;
          switch (cp) {
            case unicode_js_1.CODE_POINTS.SPACE:
            case unicode_js_1.CODE_POINTS.LINE_FEED:
            case unicode_js_1.CODE_POINTS.TABULATION:
            case unicode_js_1.CODE_POINTS.FORM_FEED: {
              break;
            }
            case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
              this.state = State.DATA;
              this.emitCurrentDoctype(token);
              break;
            }
            case unicode_js_1.CODE_POINTS.EOF: {
              this._err(error_codes_js_1.ERR.eofInDoctype);
              token.forceQuirks = true;
              this.emitCurrentDoctype(token);
              this._emitEOFToken();
              break;
            }
            default: {
              if (this._consumeSequenceIfMatch(unicode_js_1.SEQUENCES.PUBLIC, false)) {
                this.state = State.AFTER_DOCTYPE_PUBLIC_KEYWORD;
              } else if (this._consumeSequenceIfMatch(unicode_js_1.SEQUENCES.SYSTEM, false)) {
                this.state = State.AFTER_DOCTYPE_SYSTEM_KEYWORD;
              } else if (!this._ensureHibernation()) {
                this._err(error_codes_js_1.ERR.invalidCharacterSequenceAfterDoctypeName);
                token.forceQuirks = true;
                this.state = State.BOGUS_DOCTYPE;
                this._stateBogusDoctype(cp);
              }
            }
          }
        }
        // After DOCTYPE public keyword state
        //------------------------------------------------------------------
        _stateAfterDoctypePublicKeyword(cp) {
          const token = this.currentToken;
          switch (cp) {
            case unicode_js_1.CODE_POINTS.SPACE:
            case unicode_js_1.CODE_POINTS.LINE_FEED:
            case unicode_js_1.CODE_POINTS.TABULATION:
            case unicode_js_1.CODE_POINTS.FORM_FEED: {
              this.state = State.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER;
              break;
            }
            case unicode_js_1.CODE_POINTS.QUOTATION_MARK: {
              this._err(error_codes_js_1.ERR.missingWhitespaceAfterDoctypePublicKeyword);
              token.publicId = "";
              this.state = State.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED;
              break;
            }
            case unicode_js_1.CODE_POINTS.APOSTROPHE: {
              this._err(error_codes_js_1.ERR.missingWhitespaceAfterDoctypePublicKeyword);
              token.publicId = "";
              this.state = State.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED;
              break;
            }
            case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
              this._err(error_codes_js_1.ERR.missingDoctypePublicIdentifier);
              token.forceQuirks = true;
              this.state = State.DATA;
              this.emitCurrentDoctype(token);
              break;
            }
            case unicode_js_1.CODE_POINTS.EOF: {
              this._err(error_codes_js_1.ERR.eofInDoctype);
              token.forceQuirks = true;
              this.emitCurrentDoctype(token);
              this._emitEOFToken();
              break;
            }
            default: {
              this._err(error_codes_js_1.ERR.missingQuoteBeforeDoctypePublicIdentifier);
              token.forceQuirks = true;
              this.state = State.BOGUS_DOCTYPE;
              this._stateBogusDoctype(cp);
            }
          }
        }
        // Before DOCTYPE public identifier state
        //------------------------------------------------------------------
        _stateBeforeDoctypePublicIdentifier(cp) {
          const token = this.currentToken;
          switch (cp) {
            case unicode_js_1.CODE_POINTS.SPACE:
            case unicode_js_1.CODE_POINTS.LINE_FEED:
            case unicode_js_1.CODE_POINTS.TABULATION:
            case unicode_js_1.CODE_POINTS.FORM_FEED: {
              break;
            }
            case unicode_js_1.CODE_POINTS.QUOTATION_MARK: {
              token.publicId = "";
              this.state = State.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED;
              break;
            }
            case unicode_js_1.CODE_POINTS.APOSTROPHE: {
              token.publicId = "";
              this.state = State.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED;
              break;
            }
            case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
              this._err(error_codes_js_1.ERR.missingDoctypePublicIdentifier);
              token.forceQuirks = true;
              this.state = State.DATA;
              this.emitCurrentDoctype(token);
              break;
            }
            case unicode_js_1.CODE_POINTS.EOF: {
              this._err(error_codes_js_1.ERR.eofInDoctype);
              token.forceQuirks = true;
              this.emitCurrentDoctype(token);
              this._emitEOFToken();
              break;
            }
            default: {
              this._err(error_codes_js_1.ERR.missingQuoteBeforeDoctypePublicIdentifier);
              token.forceQuirks = true;
              this.state = State.BOGUS_DOCTYPE;
              this._stateBogusDoctype(cp);
            }
          }
        }
        // DOCTYPE public identifier (double-quoted) state
        //------------------------------------------------------------------
        _stateDoctypePublicIdentifierDoubleQuoted(cp) {
          const token = this.currentToken;
          switch (cp) {
            case unicode_js_1.CODE_POINTS.QUOTATION_MARK: {
              this.state = State.AFTER_DOCTYPE_PUBLIC_IDENTIFIER;
              break;
            }
            case unicode_js_1.CODE_POINTS.NULL: {
              this._err(error_codes_js_1.ERR.unexpectedNullCharacter);
              token.publicId += unicode_js_1.REPLACEMENT_CHARACTER;
              break;
            }
            case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
              this._err(error_codes_js_1.ERR.abruptDoctypePublicIdentifier);
              token.forceQuirks = true;
              this.emitCurrentDoctype(token);
              this.state = State.DATA;
              break;
            }
            case unicode_js_1.CODE_POINTS.EOF: {
              this._err(error_codes_js_1.ERR.eofInDoctype);
              token.forceQuirks = true;
              this.emitCurrentDoctype(token);
              this._emitEOFToken();
              break;
            }
            default: {
              token.publicId += String.fromCodePoint(cp);
            }
          }
        }
        // DOCTYPE public identifier (single-quoted) state
        //------------------------------------------------------------------
        _stateDoctypePublicIdentifierSingleQuoted(cp) {
          const token = this.currentToken;
          switch (cp) {
            case unicode_js_1.CODE_POINTS.APOSTROPHE: {
              this.state = State.AFTER_DOCTYPE_PUBLIC_IDENTIFIER;
              break;
            }
            case unicode_js_1.CODE_POINTS.NULL: {
              this._err(error_codes_js_1.ERR.unexpectedNullCharacter);
              token.publicId += unicode_js_1.REPLACEMENT_CHARACTER;
              break;
            }
            case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
              this._err(error_codes_js_1.ERR.abruptDoctypePublicIdentifier);
              token.forceQuirks = true;
              this.emitCurrentDoctype(token);
              this.state = State.DATA;
              break;
            }
            case unicode_js_1.CODE_POINTS.EOF: {
              this._err(error_codes_js_1.ERR.eofInDoctype);
              token.forceQuirks = true;
              this.emitCurrentDoctype(token);
              this._emitEOFToken();
              break;
            }
            default: {
              token.publicId += String.fromCodePoint(cp);
            }
          }
        }
        // After DOCTYPE public identifier state
        //------------------------------------------------------------------
        _stateAfterDoctypePublicIdentifier(cp) {
          const token = this.currentToken;
          switch (cp) {
            case unicode_js_1.CODE_POINTS.SPACE:
            case unicode_js_1.CODE_POINTS.LINE_FEED:
            case unicode_js_1.CODE_POINTS.TABULATION:
            case unicode_js_1.CODE_POINTS.FORM_FEED: {
              this.state = State.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS;
              break;
            }
            case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
              this.state = State.DATA;
              this.emitCurrentDoctype(token);
              break;
            }
            case unicode_js_1.CODE_POINTS.QUOTATION_MARK: {
              this._err(error_codes_js_1.ERR.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers);
              token.systemId = "";
              this.state = State.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
              break;
            }
            case unicode_js_1.CODE_POINTS.APOSTROPHE: {
              this._err(error_codes_js_1.ERR.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers);
              token.systemId = "";
              this.state = State.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
              break;
            }
            case unicode_js_1.CODE_POINTS.EOF: {
              this._err(error_codes_js_1.ERR.eofInDoctype);
              token.forceQuirks = true;
              this.emitCurrentDoctype(token);
              this._emitEOFToken();
              break;
            }
            default: {
              this._err(error_codes_js_1.ERR.missingQuoteBeforeDoctypeSystemIdentifier);
              token.forceQuirks = true;
              this.state = State.BOGUS_DOCTYPE;
              this._stateBogusDoctype(cp);
            }
          }
        }
        // Between DOCTYPE public and system identifiers state
        //------------------------------------------------------------------
        _stateBetweenDoctypePublicAndSystemIdentifiers(cp) {
          const token = this.currentToken;
          switch (cp) {
            case unicode_js_1.CODE_POINTS.SPACE:
            case unicode_js_1.CODE_POINTS.LINE_FEED:
            case unicode_js_1.CODE_POINTS.TABULATION:
            case unicode_js_1.CODE_POINTS.FORM_FEED: {
              break;
            }
            case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
              this.emitCurrentDoctype(token);
              this.state = State.DATA;
              break;
            }
            case unicode_js_1.CODE_POINTS.QUOTATION_MARK: {
              token.systemId = "";
              this.state = State.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
              break;
            }
            case unicode_js_1.CODE_POINTS.APOSTROPHE: {
              token.systemId = "";
              this.state = State.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
              break;
            }
            case unicode_js_1.CODE_POINTS.EOF: {
              this._err(error_codes_js_1.ERR.eofInDoctype);
              token.forceQuirks = true;
              this.emitCurrentDoctype(token);
              this._emitEOFToken();
              break;
            }
            default: {
              this._err(error_codes_js_1.ERR.missingQuoteBeforeDoctypeSystemIdentifier);
              token.forceQuirks = true;
              this.state = State.BOGUS_DOCTYPE;
              this._stateBogusDoctype(cp);
            }
          }
        }
        // After DOCTYPE system keyword state
        //------------------------------------------------------------------
        _stateAfterDoctypeSystemKeyword(cp) {
          const token = this.currentToken;
          switch (cp) {
            case unicode_js_1.CODE_POINTS.SPACE:
            case unicode_js_1.CODE_POINTS.LINE_FEED:
            case unicode_js_1.CODE_POINTS.TABULATION:
            case unicode_js_1.CODE_POINTS.FORM_FEED: {
              this.state = State.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER;
              break;
            }
            case unicode_js_1.CODE_POINTS.QUOTATION_MARK: {
              this._err(error_codes_js_1.ERR.missingWhitespaceAfterDoctypeSystemKeyword);
              token.systemId = "";
              this.state = State.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
              break;
            }
            case unicode_js_1.CODE_POINTS.APOSTROPHE: {
              this._err(error_codes_js_1.ERR.missingWhitespaceAfterDoctypeSystemKeyword);
              token.systemId = "";
              this.state = State.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
              break;
            }
            case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
              this._err(error_codes_js_1.ERR.missingDoctypeSystemIdentifier);
              token.forceQuirks = true;
              this.state = State.DATA;
              this.emitCurrentDoctype(token);
              break;
            }
            case unicode_js_1.CODE_POINTS.EOF: {
              this._err(error_codes_js_1.ERR.eofInDoctype);
              token.forceQuirks = true;
              this.emitCurrentDoctype(token);
              this._emitEOFToken();
              break;
            }
            default: {
              this._err(error_codes_js_1.ERR.missingQuoteBeforeDoctypeSystemIdentifier);
              token.forceQuirks = true;
              this.state = State.BOGUS_DOCTYPE;
              this._stateBogusDoctype(cp);
            }
          }
        }
        // Before DOCTYPE system identifier state
        //------------------------------------------------------------------
        _stateBeforeDoctypeSystemIdentifier(cp) {
          const token = this.currentToken;
          switch (cp) {
            case unicode_js_1.CODE_POINTS.SPACE:
            case unicode_js_1.CODE_POINTS.LINE_FEED:
            case unicode_js_1.CODE_POINTS.TABULATION:
            case unicode_js_1.CODE_POINTS.FORM_FEED: {
              break;
            }
            case unicode_js_1.CODE_POINTS.QUOTATION_MARK: {
              token.systemId = "";
              this.state = State.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
              break;
            }
            case unicode_js_1.CODE_POINTS.APOSTROPHE: {
              token.systemId = "";
              this.state = State.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
              break;
            }
            case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
              this._err(error_codes_js_1.ERR.missingDoctypeSystemIdentifier);
              token.forceQuirks = true;
              this.state = State.DATA;
              this.emitCurrentDoctype(token);
              break;
            }
            case unicode_js_1.CODE_POINTS.EOF: {
              this._err(error_codes_js_1.ERR.eofInDoctype);
              token.forceQuirks = true;
              this.emitCurrentDoctype(token);
              this._emitEOFToken();
              break;
            }
            default: {
              this._err(error_codes_js_1.ERR.missingQuoteBeforeDoctypeSystemIdentifier);
              token.forceQuirks = true;
              this.state = State.BOGUS_DOCTYPE;
              this._stateBogusDoctype(cp);
            }
          }
        }
        // DOCTYPE system identifier (double-quoted) state
        //------------------------------------------------------------------
        _stateDoctypeSystemIdentifierDoubleQuoted(cp) {
          const token = this.currentToken;
          switch (cp) {
            case unicode_js_1.CODE_POINTS.QUOTATION_MARK: {
              this.state = State.AFTER_DOCTYPE_SYSTEM_IDENTIFIER;
              break;
            }
            case unicode_js_1.CODE_POINTS.NULL: {
              this._err(error_codes_js_1.ERR.unexpectedNullCharacter);
              token.systemId += unicode_js_1.REPLACEMENT_CHARACTER;
              break;
            }
            case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
              this._err(error_codes_js_1.ERR.abruptDoctypeSystemIdentifier);
              token.forceQuirks = true;
              this.emitCurrentDoctype(token);
              this.state = State.DATA;
              break;
            }
            case unicode_js_1.CODE_POINTS.EOF: {
              this._err(error_codes_js_1.ERR.eofInDoctype);
              token.forceQuirks = true;
              this.emitCurrentDoctype(token);
              this._emitEOFToken();
              break;
            }
            default: {
              token.systemId += String.fromCodePoint(cp);
            }
          }
        }
        // DOCTYPE system identifier (single-quoted) state
        //------------------------------------------------------------------
        _stateDoctypeSystemIdentifierSingleQuoted(cp) {
          const token = this.currentToken;
          switch (cp) {
            case unicode_js_1.CODE_POINTS.APOSTROPHE: {
              this.state = State.AFTER_DOCTYPE_SYSTEM_IDENTIFIER;
              break;
            }
            case unicode_js_1.CODE_POINTS.NULL: {
              this._err(error_codes_js_1.ERR.unexpectedNullCharacter);
              token.systemId += unicode_js_1.REPLACEMENT_CHARACTER;
              break;
            }
            case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
              this._err(error_codes_js_1.ERR.abruptDoctypeSystemIdentifier);
              token.forceQuirks = true;
              this.emitCurrentDoctype(token);
              this.state = State.DATA;
              break;
            }
            case unicode_js_1.CODE_POINTS.EOF: {
              this._err(error_codes_js_1.ERR.eofInDoctype);
              token.forceQuirks = true;
              this.emitCurrentDoctype(token);
              this._emitEOFToken();
              break;
            }
            default: {
              token.systemId += String.fromCodePoint(cp);
            }
          }
        }
        // After DOCTYPE system identifier state
        //------------------------------------------------------------------
        _stateAfterDoctypeSystemIdentifier(cp) {
          const token = this.currentToken;
          switch (cp) {
            case unicode_js_1.CODE_POINTS.SPACE:
            case unicode_js_1.CODE_POINTS.LINE_FEED:
            case unicode_js_1.CODE_POINTS.TABULATION:
            case unicode_js_1.CODE_POINTS.FORM_FEED: {
              break;
            }
            case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
              this.emitCurrentDoctype(token);
              this.state = State.DATA;
              break;
            }
            case unicode_js_1.CODE_POINTS.EOF: {
              this._err(error_codes_js_1.ERR.eofInDoctype);
              token.forceQuirks = true;
              this.emitCurrentDoctype(token);
              this._emitEOFToken();
              break;
            }
            default: {
              this._err(error_codes_js_1.ERR.unexpectedCharacterAfterDoctypeSystemIdentifier);
              this.state = State.BOGUS_DOCTYPE;
              this._stateBogusDoctype(cp);
            }
          }
        }
        // Bogus DOCTYPE state
        //------------------------------------------------------------------
        _stateBogusDoctype(cp) {
          const token = this.currentToken;
          switch (cp) {
            case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
              this.emitCurrentDoctype(token);
              this.state = State.DATA;
              break;
            }
            case unicode_js_1.CODE_POINTS.NULL: {
              this._err(error_codes_js_1.ERR.unexpectedNullCharacter);
              break;
            }
            case unicode_js_1.CODE_POINTS.EOF: {
              this.emitCurrentDoctype(token);
              this._emitEOFToken();
              break;
            }
            default:
          }
        }
        // CDATA section state
        //------------------------------------------------------------------
        _stateCdataSection(cp) {
          switch (cp) {
            case unicode_js_1.CODE_POINTS.RIGHT_SQUARE_BRACKET: {
              this.state = State.CDATA_SECTION_BRACKET;
              break;
            }
            case unicode_js_1.CODE_POINTS.EOF: {
              this._err(error_codes_js_1.ERR.eofInCdata);
              this._emitEOFToken();
              break;
            }
            default: {
              this._emitCodePoint(cp);
            }
          }
        }
        // CDATA section bracket state
        //------------------------------------------------------------------
        _stateCdataSectionBracket(cp) {
          if (cp === unicode_js_1.CODE_POINTS.RIGHT_SQUARE_BRACKET) {
            this.state = State.CDATA_SECTION_END;
          } else {
            this._emitChars("]");
            this.state = State.CDATA_SECTION;
            this._stateCdataSection(cp);
          }
        }
        // CDATA section end state
        //------------------------------------------------------------------
        _stateCdataSectionEnd(cp) {
          switch (cp) {
            case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
              this.state = State.DATA;
              break;
            }
            case unicode_js_1.CODE_POINTS.RIGHT_SQUARE_BRACKET: {
              this._emitChars("]");
              break;
            }
            default: {
              this._emitChars("]]");
              this.state = State.CDATA_SECTION;
              this._stateCdataSection(cp);
            }
          }
        }
        // Character reference state
        //------------------------------------------------------------------
        _stateCharacterReference(cp) {
          if (cp === unicode_js_1.CODE_POINTS.NUMBER_SIGN) {
            this.state = State.NUMERIC_CHARACTER_REFERENCE;
          } else if (isAsciiAlphaNumeric(cp)) {
            this.state = State.NAMED_CHARACTER_REFERENCE;
            this._stateNamedCharacterReference(cp);
          } else {
            this._flushCodePointConsumedAsCharacterReference(unicode_js_1.CODE_POINTS.AMPERSAND);
            this._reconsumeInState(this.returnState, cp);
          }
        }
        // Named character reference state
        //------------------------------------------------------------------
        _stateNamedCharacterReference(cp) {
          const matchResult = this._matchNamedCharacterReference(cp);
          if (this._ensureHibernation()) {
          } else if (matchResult) {
            for (let i = 0; i < matchResult.length; i++) {
              this._flushCodePointConsumedAsCharacterReference(matchResult[i]);
            }
            this.state = this.returnState;
          } else {
            this._flushCodePointConsumedAsCharacterReference(unicode_js_1.CODE_POINTS.AMPERSAND);
            this.state = State.AMBIGUOUS_AMPERSAND;
          }
        }
        // Ambiguos ampersand state
        //------------------------------------------------------------------
        _stateAmbiguousAmpersand(cp) {
          if (isAsciiAlphaNumeric(cp)) {
            this._flushCodePointConsumedAsCharacterReference(cp);
          } else {
            if (cp === unicode_js_1.CODE_POINTS.SEMICOLON) {
              this._err(error_codes_js_1.ERR.unknownNamedCharacterReference);
            }
            this._reconsumeInState(this.returnState, cp);
          }
        }
        // Numeric character reference state
        //------------------------------------------------------------------
        _stateNumericCharacterReference(cp) {
          this.charRefCode = 0;
          if (cp === unicode_js_1.CODE_POINTS.LATIN_SMALL_X || cp === unicode_js_1.CODE_POINTS.LATIN_CAPITAL_X) {
            this.state = State.HEXADEMICAL_CHARACTER_REFERENCE_START;
          } else if (isAsciiDigit(cp)) {
            this.state = State.DECIMAL_CHARACTER_REFERENCE;
            this._stateDecimalCharacterReference(cp);
          } else {
            this._err(error_codes_js_1.ERR.absenceOfDigitsInNumericCharacterReference);
            this._flushCodePointConsumedAsCharacterReference(unicode_js_1.CODE_POINTS.AMPERSAND);
            this._flushCodePointConsumedAsCharacterReference(unicode_js_1.CODE_POINTS.NUMBER_SIGN);
            this._reconsumeInState(this.returnState, cp);
          }
        }
        // Hexademical character reference start state
        //------------------------------------------------------------------
        _stateHexademicalCharacterReferenceStart(cp) {
          if (isAsciiHexDigit(cp)) {
            this.state = State.HEXADEMICAL_CHARACTER_REFERENCE;
            this._stateHexademicalCharacterReference(cp);
          } else {
            this._err(error_codes_js_1.ERR.absenceOfDigitsInNumericCharacterReference);
            this._flushCodePointConsumedAsCharacterReference(unicode_js_1.CODE_POINTS.AMPERSAND);
            this._flushCodePointConsumedAsCharacterReference(unicode_js_1.CODE_POINTS.NUMBER_SIGN);
            this._unconsume(2);
            this.state = this.returnState;
          }
        }
        // Hexademical character reference state
        //------------------------------------------------------------------
        _stateHexademicalCharacterReference(cp) {
          if (isAsciiUpperHexDigit(cp)) {
            this.charRefCode = this.charRefCode * 16 + cp - 55;
          } else if (isAsciiLowerHexDigit(cp)) {
            this.charRefCode = this.charRefCode * 16 + cp - 87;
          } else if (isAsciiDigit(cp)) {
            this.charRefCode = this.charRefCode * 16 + cp - 48;
          } else if (cp === unicode_js_1.CODE_POINTS.SEMICOLON) {
            this.state = State.NUMERIC_CHARACTER_REFERENCE_END;
          } else {
            this._err(error_codes_js_1.ERR.missingSemicolonAfterCharacterReference);
            this.state = State.NUMERIC_CHARACTER_REFERENCE_END;
            this._stateNumericCharacterReferenceEnd(cp);
          }
        }
        // Decimal character reference state
        //------------------------------------------------------------------
        _stateDecimalCharacterReference(cp) {
          if (isAsciiDigit(cp)) {
            this.charRefCode = this.charRefCode * 10 + cp - 48;
          } else if (cp === unicode_js_1.CODE_POINTS.SEMICOLON) {
            this.state = State.NUMERIC_CHARACTER_REFERENCE_END;
          } else {
            this._err(error_codes_js_1.ERR.missingSemicolonAfterCharacterReference);
            this.state = State.NUMERIC_CHARACTER_REFERENCE_END;
            this._stateNumericCharacterReferenceEnd(cp);
          }
        }
        // Numeric character reference end state
        //------------------------------------------------------------------
        _stateNumericCharacterReferenceEnd(cp) {
          if (this.charRefCode === unicode_js_1.CODE_POINTS.NULL) {
            this._err(error_codes_js_1.ERR.nullCharacterReference);
            this.charRefCode = unicode_js_1.CODE_POINTS.REPLACEMENT_CHARACTER;
          } else if (this.charRefCode > 1114111) {
            this._err(error_codes_js_1.ERR.characterReferenceOutsideUnicodeRange);
            this.charRefCode = unicode_js_1.CODE_POINTS.REPLACEMENT_CHARACTER;
          } else if ((0, unicode_js_1.isSurrogate)(this.charRefCode)) {
            this._err(error_codes_js_1.ERR.surrogateCharacterReference);
            this.charRefCode = unicode_js_1.CODE_POINTS.REPLACEMENT_CHARACTER;
          } else if ((0, unicode_js_1.isUndefinedCodePoint)(this.charRefCode)) {
            this._err(error_codes_js_1.ERR.noncharacterCharacterReference);
          } else if ((0, unicode_js_1.isControlCodePoint)(this.charRefCode) || this.charRefCode === unicode_js_1.CODE_POINTS.CARRIAGE_RETURN) {
            this._err(error_codes_js_1.ERR.controlCharacterReference);
            const replacement = C1_CONTROLS_REFERENCE_REPLACEMENTS.get(this.charRefCode);
            if (replacement !== void 0) {
              this.charRefCode = replacement;
            }
          }
          this._flushCodePointConsumedAsCharacterReference(this.charRefCode);
          this._reconsumeInState(this.returnState, cp);
        }
      };
      exports.Tokenizer = Tokenizer;
    }
  });

  // node_modules/parse5/dist/cjs/parser/open-element-stack.js
  var require_open_element_stack = __commonJS({
    "node_modules/parse5/dist/cjs/parser/open-element-stack.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.OpenElementStack = void 0;
      var html_js_1 = require_html();
      var IMPLICIT_END_TAG_REQUIRED = /* @__PURE__ */ new Set([html_js_1.TAG_ID.DD, html_js_1.TAG_ID.DT, html_js_1.TAG_ID.LI, html_js_1.TAG_ID.OPTGROUP, html_js_1.TAG_ID.OPTION, html_js_1.TAG_ID.P, html_js_1.TAG_ID.RB, html_js_1.TAG_ID.RP, html_js_1.TAG_ID.RT, html_js_1.TAG_ID.RTC]);
      var IMPLICIT_END_TAG_REQUIRED_THOROUGHLY = /* @__PURE__ */ new Set([
        ...IMPLICIT_END_TAG_REQUIRED,
        html_js_1.TAG_ID.CAPTION,
        html_js_1.TAG_ID.COLGROUP,
        html_js_1.TAG_ID.TBODY,
        html_js_1.TAG_ID.TD,
        html_js_1.TAG_ID.TFOOT,
        html_js_1.TAG_ID.TH,
        html_js_1.TAG_ID.THEAD,
        html_js_1.TAG_ID.TR
      ]);
      var SCOPING_ELEMENT_NS = /* @__PURE__ */ new Map([
        [html_js_1.TAG_ID.APPLET, html_js_1.NS.HTML],
        [html_js_1.TAG_ID.CAPTION, html_js_1.NS.HTML],
        [html_js_1.TAG_ID.HTML, html_js_1.NS.HTML],
        [html_js_1.TAG_ID.MARQUEE, html_js_1.NS.HTML],
        [html_js_1.TAG_ID.OBJECT, html_js_1.NS.HTML],
        [html_js_1.TAG_ID.TABLE, html_js_1.NS.HTML],
        [html_js_1.TAG_ID.TD, html_js_1.NS.HTML],
        [html_js_1.TAG_ID.TEMPLATE, html_js_1.NS.HTML],
        [html_js_1.TAG_ID.TH, html_js_1.NS.HTML],
        [html_js_1.TAG_ID.ANNOTATION_XML, html_js_1.NS.MATHML],
        [html_js_1.TAG_ID.MI, html_js_1.NS.MATHML],
        [html_js_1.TAG_ID.MN, html_js_1.NS.MATHML],
        [html_js_1.TAG_ID.MO, html_js_1.NS.MATHML],
        [html_js_1.TAG_ID.MS, html_js_1.NS.MATHML],
        [html_js_1.TAG_ID.MTEXT, html_js_1.NS.MATHML],
        [html_js_1.TAG_ID.DESC, html_js_1.NS.SVG],
        [html_js_1.TAG_ID.FOREIGN_OBJECT, html_js_1.NS.SVG],
        [html_js_1.TAG_ID.TITLE, html_js_1.NS.SVG]
      ]);
      var NAMED_HEADERS = [html_js_1.TAG_ID.H1, html_js_1.TAG_ID.H2, html_js_1.TAG_ID.H3, html_js_1.TAG_ID.H4, html_js_1.TAG_ID.H5, html_js_1.TAG_ID.H6];
      var TABLE_ROW_CONTEXT = [html_js_1.TAG_ID.TR, html_js_1.TAG_ID.TEMPLATE, html_js_1.TAG_ID.HTML];
      var TABLE_BODY_CONTEXT = [html_js_1.TAG_ID.TBODY, html_js_1.TAG_ID.TFOOT, html_js_1.TAG_ID.THEAD, html_js_1.TAG_ID.TEMPLATE, html_js_1.TAG_ID.HTML];
      var TABLE_CONTEXT = [html_js_1.TAG_ID.TABLE, html_js_1.TAG_ID.TEMPLATE, html_js_1.TAG_ID.HTML];
      var TABLE_CELLS = [html_js_1.TAG_ID.TD, html_js_1.TAG_ID.TH];
      var OpenElementStack = class {
        get currentTmplContentOrNode() {
          return this._isInTemplate() ? this.treeAdapter.getTemplateContent(this.current) : this.current;
        }
        constructor(document, treeAdapter, handler) {
          this.treeAdapter = treeAdapter;
          this.handler = handler;
          this.items = [];
          this.tagIDs = [];
          this.stackTop = -1;
          this.tmplCount = 0;
          this.currentTagId = html_js_1.TAG_ID.UNKNOWN;
          this.current = document;
        }
        //Index of element
        _indexOf(element) {
          return this.items.lastIndexOf(element, this.stackTop);
        }
        //Update current element
        _isInTemplate() {
          return this.currentTagId === html_js_1.TAG_ID.TEMPLATE && this.treeAdapter.getNamespaceURI(this.current) === html_js_1.NS.HTML;
        }
        _updateCurrentElement() {
          this.current = this.items[this.stackTop];
          this.currentTagId = this.tagIDs[this.stackTop];
        }
        //Mutations
        push(element, tagID) {
          this.stackTop++;
          this.items[this.stackTop] = element;
          this.current = element;
          this.tagIDs[this.stackTop] = tagID;
          this.currentTagId = tagID;
          if (this._isInTemplate()) {
            this.tmplCount++;
          }
          this.handler.onItemPush(element, tagID, true);
        }
        pop() {
          const popped = this.current;
          if (this.tmplCount > 0 && this._isInTemplate()) {
            this.tmplCount--;
          }
          this.stackTop--;
          this._updateCurrentElement();
          this.handler.onItemPop(popped, true);
        }
        replace(oldElement, newElement) {
          const idx = this._indexOf(oldElement);
          this.items[idx] = newElement;
          if (idx === this.stackTop) {
            this.current = newElement;
          }
        }
        insertAfter(referenceElement, newElement, newElementID) {
          const insertionIdx = this._indexOf(referenceElement) + 1;
          this.items.splice(insertionIdx, 0, newElement);
          this.tagIDs.splice(insertionIdx, 0, newElementID);
          this.stackTop++;
          if (insertionIdx === this.stackTop) {
            this._updateCurrentElement();
          }
          this.handler.onItemPush(this.current, this.currentTagId, insertionIdx === this.stackTop);
        }
        popUntilTagNamePopped(tagName) {
          let targetIdx = this.stackTop + 1;
          do {
            targetIdx = this.tagIDs.lastIndexOf(tagName, targetIdx - 1);
          } while (targetIdx > 0 && this.treeAdapter.getNamespaceURI(this.items[targetIdx]) !== html_js_1.NS.HTML);
          this.shortenToLength(targetIdx < 0 ? 0 : targetIdx);
        }
        shortenToLength(idx) {
          while (this.stackTop >= idx) {
            const popped = this.current;
            if (this.tmplCount > 0 && this._isInTemplate()) {
              this.tmplCount -= 1;
            }
            this.stackTop--;
            this._updateCurrentElement();
            this.handler.onItemPop(popped, this.stackTop < idx);
          }
        }
        popUntilElementPopped(element) {
          const idx = this._indexOf(element);
          this.shortenToLength(idx < 0 ? 0 : idx);
        }
        popUntilPopped(tagNames, targetNS) {
          const idx = this._indexOfTagNames(tagNames, targetNS);
          this.shortenToLength(idx < 0 ? 0 : idx);
        }
        popUntilNumberedHeaderPopped() {
          this.popUntilPopped(NAMED_HEADERS, html_js_1.NS.HTML);
        }
        popUntilTableCellPopped() {
          this.popUntilPopped(TABLE_CELLS, html_js_1.NS.HTML);
        }
        popAllUpToHtmlElement() {
          this.tmplCount = 0;
          this.shortenToLength(1);
        }
        _indexOfTagNames(tagNames, namespace) {
          for (let i = this.stackTop; i >= 0; i--) {
            if (tagNames.includes(this.tagIDs[i]) && this.treeAdapter.getNamespaceURI(this.items[i]) === namespace) {
              return i;
            }
          }
          return -1;
        }
        clearBackTo(tagNames, targetNS) {
          const idx = this._indexOfTagNames(tagNames, targetNS);
          this.shortenToLength(idx + 1);
        }
        clearBackToTableContext() {
          this.clearBackTo(TABLE_CONTEXT, html_js_1.NS.HTML);
        }
        clearBackToTableBodyContext() {
          this.clearBackTo(TABLE_BODY_CONTEXT, html_js_1.NS.HTML);
        }
        clearBackToTableRowContext() {
          this.clearBackTo(TABLE_ROW_CONTEXT, html_js_1.NS.HTML);
        }
        remove(element) {
          const idx = this._indexOf(element);
          if (idx >= 0) {
            if (idx === this.stackTop) {
              this.pop();
            } else {
              this.items.splice(idx, 1);
              this.tagIDs.splice(idx, 1);
              this.stackTop--;
              this._updateCurrentElement();
              this.handler.onItemPop(element, false);
            }
          }
        }
        //Search
        tryPeekProperlyNestedBodyElement() {
          return this.stackTop >= 1 && this.tagIDs[1] === html_js_1.TAG_ID.BODY ? this.items[1] : null;
        }
        contains(element) {
          return this._indexOf(element) > -1;
        }
        getCommonAncestor(element) {
          const elementIdx = this._indexOf(element) - 1;
          return elementIdx >= 0 ? this.items[elementIdx] : null;
        }
        isRootHtmlElementCurrent() {
          return this.stackTop === 0 && this.tagIDs[0] === html_js_1.TAG_ID.HTML;
        }
        //Element in scope
        hasInScope(tagName) {
          for (let i = this.stackTop; i >= 0; i--) {
            const tn = this.tagIDs[i];
            const ns = this.treeAdapter.getNamespaceURI(this.items[i]);
            if (tn === tagName && ns === html_js_1.NS.HTML) {
              return true;
            }
            if (SCOPING_ELEMENT_NS.get(tn) === ns) {
              return false;
            }
          }
          return true;
        }
        hasNumberedHeaderInScope() {
          for (let i = this.stackTop; i >= 0; i--) {
            const tn = this.tagIDs[i];
            const ns = this.treeAdapter.getNamespaceURI(this.items[i]);
            if ((0, html_js_1.isNumberedHeader)(tn) && ns === html_js_1.NS.HTML) {
              return true;
            }
            if (SCOPING_ELEMENT_NS.get(tn) === ns) {
              return false;
            }
          }
          return true;
        }
        hasInListItemScope(tagName) {
          for (let i = this.stackTop; i >= 0; i--) {
            const tn = this.tagIDs[i];
            const ns = this.treeAdapter.getNamespaceURI(this.items[i]);
            if (tn === tagName && ns === html_js_1.NS.HTML) {
              return true;
            }
            if ((tn === html_js_1.TAG_ID.UL || tn === html_js_1.TAG_ID.OL) && ns === html_js_1.NS.HTML || SCOPING_ELEMENT_NS.get(tn) === ns) {
              return false;
            }
          }
          return true;
        }
        hasInButtonScope(tagName) {
          for (let i = this.stackTop; i >= 0; i--) {
            const tn = this.tagIDs[i];
            const ns = this.treeAdapter.getNamespaceURI(this.items[i]);
            if (tn === tagName && ns === html_js_1.NS.HTML) {
              return true;
            }
            if (tn === html_js_1.TAG_ID.BUTTON && ns === html_js_1.NS.HTML || SCOPING_ELEMENT_NS.get(tn) === ns) {
              return false;
            }
          }
          return true;
        }
        hasInTableScope(tagName) {
          for (let i = this.stackTop; i >= 0; i--) {
            const tn = this.tagIDs[i];
            const ns = this.treeAdapter.getNamespaceURI(this.items[i]);
            if (ns !== html_js_1.NS.HTML) {
              continue;
            }
            if (tn === tagName) {
              return true;
            }
            if (tn === html_js_1.TAG_ID.TABLE || tn === html_js_1.TAG_ID.TEMPLATE || tn === html_js_1.TAG_ID.HTML) {
              return false;
            }
          }
          return true;
        }
        hasTableBodyContextInTableScope() {
          for (let i = this.stackTop; i >= 0; i--) {
            const tn = this.tagIDs[i];
            const ns = this.treeAdapter.getNamespaceURI(this.items[i]);
            if (ns !== html_js_1.NS.HTML) {
              continue;
            }
            if (tn === html_js_1.TAG_ID.TBODY || tn === html_js_1.TAG_ID.THEAD || tn === html_js_1.TAG_ID.TFOOT) {
              return true;
            }
            if (tn === html_js_1.TAG_ID.TABLE || tn === html_js_1.TAG_ID.HTML) {
              return false;
            }
          }
          return true;
        }
        hasInSelectScope(tagName) {
          for (let i = this.stackTop; i >= 0; i--) {
            const tn = this.tagIDs[i];
            const ns = this.treeAdapter.getNamespaceURI(this.items[i]);
            if (ns !== html_js_1.NS.HTML) {
              continue;
            }
            if (tn === tagName) {
              return true;
            }
            if (tn !== html_js_1.TAG_ID.OPTION && tn !== html_js_1.TAG_ID.OPTGROUP) {
              return false;
            }
          }
          return true;
        }
        //Implied end tags
        generateImpliedEndTags() {
          while (IMPLICIT_END_TAG_REQUIRED.has(this.currentTagId)) {
            this.pop();
          }
        }
        generateImpliedEndTagsThoroughly() {
          while (IMPLICIT_END_TAG_REQUIRED_THOROUGHLY.has(this.currentTagId)) {
            this.pop();
          }
        }
        generateImpliedEndTagsWithExclusion(exclusionId) {
          while (this.currentTagId !== exclusionId && IMPLICIT_END_TAG_REQUIRED_THOROUGHLY.has(this.currentTagId)) {
            this.pop();
          }
        }
      };
      exports.OpenElementStack = OpenElementStack;
    }
  });

  // node_modules/parse5/dist/cjs/parser/formatting-element-list.js
  var require_formatting_element_list = __commonJS({
    "node_modules/parse5/dist/cjs/parser/formatting-element-list.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.FormattingElementList = exports.EntryType = void 0;
      var NOAH_ARK_CAPACITY = 3;
      var EntryType;
      (function(EntryType2) {
        EntryType2[EntryType2["Marker"] = 0] = "Marker";
        EntryType2[EntryType2["Element"] = 1] = "Element";
      })(EntryType = exports.EntryType || (exports.EntryType = {}));
      var MARKER = { type: EntryType.Marker };
      var FormattingElementList = class {
        constructor(treeAdapter) {
          this.treeAdapter = treeAdapter;
          this.entries = [];
          this.bookmark = null;
        }
        //Noah Ark's condition
        //OPTIMIZATION: at first we try to find possible candidates for exclusion using
        //lightweight heuristics without thorough attributes check.
        _getNoahArkConditionCandidates(newElement, neAttrs) {
          const candidates = [];
          const neAttrsLength = neAttrs.length;
          const neTagName = this.treeAdapter.getTagName(newElement);
          const neNamespaceURI = this.treeAdapter.getNamespaceURI(newElement);
          for (let i = 0; i < this.entries.length; i++) {
            const entry = this.entries[i];
            if (entry.type === EntryType.Marker) {
              break;
            }
            const { element } = entry;
            if (this.treeAdapter.getTagName(element) === neTagName && this.treeAdapter.getNamespaceURI(element) === neNamespaceURI) {
              const elementAttrs = this.treeAdapter.getAttrList(element);
              if (elementAttrs.length === neAttrsLength) {
                candidates.push({ idx: i, attrs: elementAttrs });
              }
            }
          }
          return candidates;
        }
        _ensureNoahArkCondition(newElement) {
          if (this.entries.length < NOAH_ARK_CAPACITY)
            return;
          const neAttrs = this.treeAdapter.getAttrList(newElement);
          const candidates = this._getNoahArkConditionCandidates(newElement, neAttrs);
          if (candidates.length < NOAH_ARK_CAPACITY)
            return;
          const neAttrsMap = new Map(neAttrs.map((neAttr) => [neAttr.name, neAttr.value]));
          let validCandidates = 0;
          for (let i = 0; i < candidates.length; i++) {
            const candidate = candidates[i];
            if (candidate.attrs.every((cAttr) => neAttrsMap.get(cAttr.name) === cAttr.value)) {
              validCandidates += 1;
              if (validCandidates >= NOAH_ARK_CAPACITY) {
                this.entries.splice(candidate.idx, 1);
              }
            }
          }
        }
        //Mutations
        insertMarker() {
          this.entries.unshift(MARKER);
        }
        pushElement(element, token) {
          this._ensureNoahArkCondition(element);
          this.entries.unshift({
            type: EntryType.Element,
            element,
            token
          });
        }
        insertElementAfterBookmark(element, token) {
          const bookmarkIdx = this.entries.indexOf(this.bookmark);
          this.entries.splice(bookmarkIdx, 0, {
            type: EntryType.Element,
            element,
            token
          });
        }
        removeEntry(entry) {
          const entryIndex = this.entries.indexOf(entry);
          if (entryIndex >= 0) {
            this.entries.splice(entryIndex, 1);
          }
        }
        /**
         * Clears the list of formatting elements up to the last marker.
         *
         * @see https://html.spec.whatwg.org/multipage/parsing.html#clear-the-list-of-active-formatting-elements-up-to-the-last-marker
         */
        clearToLastMarker() {
          const markerIdx = this.entries.indexOf(MARKER);
          if (markerIdx >= 0) {
            this.entries.splice(0, markerIdx + 1);
          } else {
            this.entries.length = 0;
          }
        }
        //Search
        getElementEntryInScopeWithTagName(tagName) {
          const entry = this.entries.find((entry2) => entry2.type === EntryType.Marker || this.treeAdapter.getTagName(entry2.element) === tagName);
          return entry && entry.type === EntryType.Element ? entry : null;
        }
        getElementEntry(element) {
          return this.entries.find((entry) => entry.type === EntryType.Element && entry.element === element);
        }
      };
      exports.FormattingElementList = FormattingElementList;
    }
  });

  // node_modules/parse5/dist/cjs/tree-adapters/default.js
  var require_default = __commonJS({
    "node_modules/parse5/dist/cjs/tree-adapters/default.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.defaultTreeAdapter = void 0;
      var html_js_1 = require_html();
      function createTextNode(value) {
        return {
          nodeName: "#text",
          value,
          parentNode: null
        };
      }
      exports.defaultTreeAdapter = {
        //Node construction
        createDocument() {
          return {
            nodeName: "#document",
            mode: html_js_1.DOCUMENT_MODE.NO_QUIRKS,
            childNodes: []
          };
        },
        createDocumentFragment() {
          return {
            nodeName: "#document-fragment",
            childNodes: []
          };
        },
        createElement(tagName, namespaceURI, attrs) {
          return {
            nodeName: tagName,
            tagName,
            attrs,
            namespaceURI,
            childNodes: [],
            parentNode: null
          };
        },
        createCommentNode(data) {
          return {
            nodeName: "#comment",
            data,
            parentNode: null
          };
        },
        //Tree mutation
        appendChild(parentNode, newNode) {
          parentNode.childNodes.push(newNode);
          newNode.parentNode = parentNode;
        },
        insertBefore(parentNode, newNode, referenceNode) {
          const insertionIdx = parentNode.childNodes.indexOf(referenceNode);
          parentNode.childNodes.splice(insertionIdx, 0, newNode);
          newNode.parentNode = parentNode;
        },
        setTemplateContent(templateElement, contentElement) {
          templateElement.content = contentElement;
        },
        getTemplateContent(templateElement) {
          return templateElement.content;
        },
        setDocumentType(document, name, publicId, systemId) {
          const doctypeNode = document.childNodes.find((node) => node.nodeName === "#documentType");
          if (doctypeNode) {
            doctypeNode.name = name;
            doctypeNode.publicId = publicId;
            doctypeNode.systemId = systemId;
          } else {
            const node = {
              nodeName: "#documentType",
              name,
              publicId,
              systemId,
              parentNode: null
            };
            exports.defaultTreeAdapter.appendChild(document, node);
          }
        },
        setDocumentMode(document, mode) {
          document.mode = mode;
        },
        getDocumentMode(document) {
          return document.mode;
        },
        detachNode(node) {
          if (node.parentNode) {
            const idx = node.parentNode.childNodes.indexOf(node);
            node.parentNode.childNodes.splice(idx, 1);
            node.parentNode = null;
          }
        },
        insertText(parentNode, text) {
          if (parentNode.childNodes.length > 0) {
            const prevNode = parentNode.childNodes[parentNode.childNodes.length - 1];
            if (exports.defaultTreeAdapter.isTextNode(prevNode)) {
              prevNode.value += text;
              return;
            }
          }
          exports.defaultTreeAdapter.appendChild(parentNode, createTextNode(text));
        },
        insertTextBefore(parentNode, text, referenceNode) {
          const prevNode = parentNode.childNodes[parentNode.childNodes.indexOf(referenceNode) - 1];
          if (prevNode && exports.defaultTreeAdapter.isTextNode(prevNode)) {
            prevNode.value += text;
          } else {
            exports.defaultTreeAdapter.insertBefore(parentNode, createTextNode(text), referenceNode);
          }
        },
        adoptAttributes(recipient, attrs) {
          const recipientAttrsMap = new Set(recipient.attrs.map((attr) => attr.name));
          for (let j = 0; j < attrs.length; j++) {
            if (!recipientAttrsMap.has(attrs[j].name)) {
              recipient.attrs.push(attrs[j]);
            }
          }
        },
        //Tree traversing
        getFirstChild(node) {
          return node.childNodes[0];
        },
        getChildNodes(node) {
          return node.childNodes;
        },
        getParentNode(node) {
          return node.parentNode;
        },
        getAttrList(element) {
          return element.attrs;
        },
        //Node data
        getTagName(element) {
          return element.tagName;
        },
        getNamespaceURI(element) {
          return element.namespaceURI;
        },
        getTextNodeContent(textNode) {
          return textNode.value;
        },
        getCommentNodeContent(commentNode) {
          return commentNode.data;
        },
        getDocumentTypeNodeName(doctypeNode) {
          return doctypeNode.name;
        },
        getDocumentTypeNodePublicId(doctypeNode) {
          return doctypeNode.publicId;
        },
        getDocumentTypeNodeSystemId(doctypeNode) {
          return doctypeNode.systemId;
        },
        //Node types
        isTextNode(node) {
          return node.nodeName === "#text";
        },
        isCommentNode(node) {
          return node.nodeName === "#comment";
        },
        isDocumentTypeNode(node) {
          return node.nodeName === "#documentType";
        },
        isElementNode(node) {
          return Object.prototype.hasOwnProperty.call(node, "tagName");
        },
        // Source code location
        setNodeSourceCodeLocation(node, location) {
          node.sourceCodeLocation = location;
        },
        getNodeSourceCodeLocation(node) {
          return node.sourceCodeLocation;
        },
        updateNodeSourceCodeLocation(node, endLocation) {
          node.sourceCodeLocation = Object.assign(Object.assign({}, node.sourceCodeLocation), endLocation);
        }
      };
    }
  });

  // node_modules/parse5/dist/cjs/common/doctype.js
  var require_doctype = __commonJS({
    "node_modules/parse5/dist/cjs/common/doctype.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.getDocumentMode = exports.isConforming = void 0;
      var html_js_1 = require_html();
      var VALID_DOCTYPE_NAME = "html";
      var VALID_SYSTEM_ID = "about:legacy-compat";
      var QUIRKS_MODE_SYSTEM_ID = "http://www.ibm.com/data/dtd/v11/ibmxhtml1-transitional.dtd";
      var QUIRKS_MODE_PUBLIC_ID_PREFIXES = [
        "+//silmaril//dtd html pro v0r11 19970101//",
        "-//as//dtd html 3.0 aswedit + extensions//",
        "-//advasoft ltd//dtd html 3.0 aswedit + extensions//",
        "-//ietf//dtd html 2.0 level 1//",
        "-//ietf//dtd html 2.0 level 2//",
        "-//ietf//dtd html 2.0 strict level 1//",
        "-//ietf//dtd html 2.0 strict level 2//",
        "-//ietf//dtd html 2.0 strict//",
        "-//ietf//dtd html 2.0//",
        "-//ietf//dtd html 2.1e//",
        "-//ietf//dtd html 3.0//",
        "-//ietf//dtd html 3.2 final//",
        "-//ietf//dtd html 3.2//",
        "-//ietf//dtd html 3//",
        "-//ietf//dtd html level 0//",
        "-//ietf//dtd html level 1//",
        "-//ietf//dtd html level 2//",
        "-//ietf//dtd html level 3//",
        "-//ietf//dtd html strict level 0//",
        "-//ietf//dtd html strict level 1//",
        "-//ietf//dtd html strict level 2//",
        "-//ietf//dtd html strict level 3//",
        "-//ietf//dtd html strict//",
        "-//ietf//dtd html//",
        "-//metrius//dtd metrius presentational//",
        "-//microsoft//dtd internet explorer 2.0 html strict//",
        "-//microsoft//dtd internet explorer 2.0 html//",
        "-//microsoft//dtd internet explorer 2.0 tables//",
        "-//microsoft//dtd internet explorer 3.0 html strict//",
        "-//microsoft//dtd internet explorer 3.0 html//",
        "-//microsoft//dtd internet explorer 3.0 tables//",
        "-//netscape comm. corp.//dtd html//",
        "-//netscape comm. corp.//dtd strict html//",
        "-//o'reilly and associates//dtd html 2.0//",
        "-//o'reilly and associates//dtd html extended 1.0//",
        "-//o'reilly and associates//dtd html extended relaxed 1.0//",
        "-//sq//dtd html 2.0 hotmetal + extensions//",
        "-//softquad software//dtd hotmetal pro 6.0::19990601::extensions to html 4.0//",
        "-//softquad//dtd hotmetal pro 4.0::19971010::extensions to html 4.0//",
        "-//spyglass//dtd html 2.0 extended//",
        "-//sun microsystems corp.//dtd hotjava html//",
        "-//sun microsystems corp.//dtd hotjava strict html//",
        "-//w3c//dtd html 3 1995-03-24//",
        "-//w3c//dtd html 3.2 draft//",
        "-//w3c//dtd html 3.2 final//",
        "-//w3c//dtd html 3.2//",
        "-//w3c//dtd html 3.2s draft//",
        "-//w3c//dtd html 4.0 frameset//",
        "-//w3c//dtd html 4.0 transitional//",
        "-//w3c//dtd html experimental 19960712//",
        "-//w3c//dtd html experimental 970421//",
        "-//w3c//dtd w3 html//",
        "-//w3o//dtd w3 html 3.0//",
        "-//webtechs//dtd mozilla html 2.0//",
        "-//webtechs//dtd mozilla html//"
      ];
      var QUIRKS_MODE_NO_SYSTEM_ID_PUBLIC_ID_PREFIXES = [
        ...QUIRKS_MODE_PUBLIC_ID_PREFIXES,
        "-//w3c//dtd html 4.01 frameset//",
        "-//w3c//dtd html 4.01 transitional//"
      ];
      var QUIRKS_MODE_PUBLIC_IDS = /* @__PURE__ */ new Set([
        "-//w3o//dtd w3 html strict 3.0//en//",
        "-/w3c/dtd html 4.0 transitional/en",
        "html"
      ]);
      var LIMITED_QUIRKS_PUBLIC_ID_PREFIXES = ["-//w3c//dtd xhtml 1.0 frameset//", "-//w3c//dtd xhtml 1.0 transitional//"];
      var LIMITED_QUIRKS_WITH_SYSTEM_ID_PUBLIC_ID_PREFIXES = [
        ...LIMITED_QUIRKS_PUBLIC_ID_PREFIXES,
        "-//w3c//dtd html 4.01 frameset//",
        "-//w3c//dtd html 4.01 transitional//"
      ];
      function hasPrefix(publicId, prefixes) {
        return prefixes.some((prefix) => publicId.startsWith(prefix));
      }
      function isConforming(token) {
        return token.name === VALID_DOCTYPE_NAME && token.publicId === null && (token.systemId === null || token.systemId === VALID_SYSTEM_ID);
      }
      exports.isConforming = isConforming;
      function getDocumentMode(token) {
        if (token.name !== VALID_DOCTYPE_NAME) {
          return html_js_1.DOCUMENT_MODE.QUIRKS;
        }
        const { systemId } = token;
        if (systemId && systemId.toLowerCase() === QUIRKS_MODE_SYSTEM_ID) {
          return html_js_1.DOCUMENT_MODE.QUIRKS;
        }
        let { publicId } = token;
        if (publicId !== null) {
          publicId = publicId.toLowerCase();
          if (QUIRKS_MODE_PUBLIC_IDS.has(publicId)) {
            return html_js_1.DOCUMENT_MODE.QUIRKS;
          }
          let prefixes = systemId === null ? QUIRKS_MODE_NO_SYSTEM_ID_PUBLIC_ID_PREFIXES : QUIRKS_MODE_PUBLIC_ID_PREFIXES;
          if (hasPrefix(publicId, prefixes)) {
            return html_js_1.DOCUMENT_MODE.QUIRKS;
          }
          prefixes = systemId === null ? LIMITED_QUIRKS_PUBLIC_ID_PREFIXES : LIMITED_QUIRKS_WITH_SYSTEM_ID_PUBLIC_ID_PREFIXES;
          if (hasPrefix(publicId, prefixes)) {
            return html_js_1.DOCUMENT_MODE.LIMITED_QUIRKS;
          }
        }
        return html_js_1.DOCUMENT_MODE.NO_QUIRKS;
      }
      exports.getDocumentMode = getDocumentMode;
    }
  });

  // node_modules/parse5/dist/cjs/common/foreign-content.js
  var require_foreign_content = __commonJS({
    "node_modules/parse5/dist/cjs/common/foreign-content.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.isIntegrationPoint = exports.adjustTokenSVGTagName = exports.adjustTokenXMLAttrs = exports.adjustTokenSVGAttrs = exports.adjustTokenMathMLAttrs = exports.causesExit = exports.SVG_TAG_NAMES_ADJUSTMENT_MAP = void 0;
      var html_js_1 = require_html();
      var MIME_TYPES = {
        TEXT_HTML: "text/html",
        APPLICATION_XML: "application/xhtml+xml"
      };
      var DEFINITION_URL_ATTR = "definitionurl";
      var ADJUSTED_DEFINITION_URL_ATTR = "definitionURL";
      var SVG_ATTRS_ADJUSTMENT_MAP = new Map([
        "attributeName",
        "attributeType",
        "baseFrequency",
        "baseProfile",
        "calcMode",
        "clipPathUnits",
        "diffuseConstant",
        "edgeMode",
        "filterUnits",
        "glyphRef",
        "gradientTransform",
        "gradientUnits",
        "kernelMatrix",
        "kernelUnitLength",
        "keyPoints",
        "keySplines",
        "keyTimes",
        "lengthAdjust",
        "limitingConeAngle",
        "markerHeight",
        "markerUnits",
        "markerWidth",
        "maskContentUnits",
        "maskUnits",
        "numOctaves",
        "pathLength",
        "patternContentUnits",
        "patternTransform",
        "patternUnits",
        "pointsAtX",
        "pointsAtY",
        "pointsAtZ",
        "preserveAlpha",
        "preserveAspectRatio",
        "primitiveUnits",
        "refX",
        "refY",
        "repeatCount",
        "repeatDur",
        "requiredExtensions",
        "requiredFeatures",
        "specularConstant",
        "specularExponent",
        "spreadMethod",
        "startOffset",
        "stdDeviation",
        "stitchTiles",
        "surfaceScale",
        "systemLanguage",
        "tableValues",
        "targetX",
        "targetY",
        "textLength",
        "viewBox",
        "viewTarget",
        "xChannelSelector",
        "yChannelSelector",
        "zoomAndPan"
      ].map((attr) => [attr.toLowerCase(), attr]));
      var XML_ATTRS_ADJUSTMENT_MAP = /* @__PURE__ */ new Map([
        ["xlink:actuate", { prefix: "xlink", name: "actuate", namespace: html_js_1.NS.XLINK }],
        ["xlink:arcrole", { prefix: "xlink", name: "arcrole", namespace: html_js_1.NS.XLINK }],
        ["xlink:href", { prefix: "xlink", name: "href", namespace: html_js_1.NS.XLINK }],
        ["xlink:role", { prefix: "xlink", name: "role", namespace: html_js_1.NS.XLINK }],
        ["xlink:show", { prefix: "xlink", name: "show", namespace: html_js_1.NS.XLINK }],
        ["xlink:title", { prefix: "xlink", name: "title", namespace: html_js_1.NS.XLINK }],
        ["xlink:type", { prefix: "xlink", name: "type", namespace: html_js_1.NS.XLINK }],
        ["xml:base", { prefix: "xml", name: "base", namespace: html_js_1.NS.XML }],
        ["xml:lang", { prefix: "xml", name: "lang", namespace: html_js_1.NS.XML }],
        ["xml:space", { prefix: "xml", name: "space", namespace: html_js_1.NS.XML }],
        ["xmlns", { prefix: "", name: "xmlns", namespace: html_js_1.NS.XMLNS }],
        ["xmlns:xlink", { prefix: "xmlns", name: "xlink", namespace: html_js_1.NS.XMLNS }]
      ]);
      exports.SVG_TAG_NAMES_ADJUSTMENT_MAP = new Map([
        "altGlyph",
        "altGlyphDef",
        "altGlyphItem",
        "animateColor",
        "animateMotion",
        "animateTransform",
        "clipPath",
        "feBlend",
        "feColorMatrix",
        "feComponentTransfer",
        "feComposite",
        "feConvolveMatrix",
        "feDiffuseLighting",
        "feDisplacementMap",
        "feDistantLight",
        "feFlood",
        "feFuncA",
        "feFuncB",
        "feFuncG",
        "feFuncR",
        "feGaussianBlur",
        "feImage",
        "feMerge",
        "feMergeNode",
        "feMorphology",
        "feOffset",
        "fePointLight",
        "feSpecularLighting",
        "feSpotLight",
        "feTile",
        "feTurbulence",
        "foreignObject",
        "glyphRef",
        "linearGradient",
        "radialGradient",
        "textPath"
      ].map((tn) => [tn.toLowerCase(), tn]));
      var EXITS_FOREIGN_CONTENT = /* @__PURE__ */ new Set([
        html_js_1.TAG_ID.B,
        html_js_1.TAG_ID.BIG,
        html_js_1.TAG_ID.BLOCKQUOTE,
        html_js_1.TAG_ID.BODY,
        html_js_1.TAG_ID.BR,
        html_js_1.TAG_ID.CENTER,
        html_js_1.TAG_ID.CODE,
        html_js_1.TAG_ID.DD,
        html_js_1.TAG_ID.DIV,
        html_js_1.TAG_ID.DL,
        html_js_1.TAG_ID.DT,
        html_js_1.TAG_ID.EM,
        html_js_1.TAG_ID.EMBED,
        html_js_1.TAG_ID.H1,
        html_js_1.TAG_ID.H2,
        html_js_1.TAG_ID.H3,
        html_js_1.TAG_ID.H4,
        html_js_1.TAG_ID.H5,
        html_js_1.TAG_ID.H6,
        html_js_1.TAG_ID.HEAD,
        html_js_1.TAG_ID.HR,
        html_js_1.TAG_ID.I,
        html_js_1.TAG_ID.IMG,
        html_js_1.TAG_ID.LI,
        html_js_1.TAG_ID.LISTING,
        html_js_1.TAG_ID.MENU,
        html_js_1.TAG_ID.META,
        html_js_1.TAG_ID.NOBR,
        html_js_1.TAG_ID.OL,
        html_js_1.TAG_ID.P,
        html_js_1.TAG_ID.PRE,
        html_js_1.TAG_ID.RUBY,
        html_js_1.TAG_ID.S,
        html_js_1.TAG_ID.SMALL,
        html_js_1.TAG_ID.SPAN,
        html_js_1.TAG_ID.STRONG,
        html_js_1.TAG_ID.STRIKE,
        html_js_1.TAG_ID.SUB,
        html_js_1.TAG_ID.SUP,
        html_js_1.TAG_ID.TABLE,
        html_js_1.TAG_ID.TT,
        html_js_1.TAG_ID.U,
        html_js_1.TAG_ID.UL,
        html_js_1.TAG_ID.VAR
      ]);
      function causesExit(startTagToken) {
        const tn = startTagToken.tagID;
        const isFontWithAttrs = tn === html_js_1.TAG_ID.FONT && startTagToken.attrs.some(({ name }) => name === html_js_1.ATTRS.COLOR || name === html_js_1.ATTRS.SIZE || name === html_js_1.ATTRS.FACE);
        return isFontWithAttrs || EXITS_FOREIGN_CONTENT.has(tn);
      }
      exports.causesExit = causesExit;
      function adjustTokenMathMLAttrs(token) {
        for (let i = 0; i < token.attrs.length; i++) {
          if (token.attrs[i].name === DEFINITION_URL_ATTR) {
            token.attrs[i].name = ADJUSTED_DEFINITION_URL_ATTR;
            break;
          }
        }
      }
      exports.adjustTokenMathMLAttrs = adjustTokenMathMLAttrs;
      function adjustTokenSVGAttrs(token) {
        for (let i = 0; i < token.attrs.length; i++) {
          const adjustedAttrName = SVG_ATTRS_ADJUSTMENT_MAP.get(token.attrs[i].name);
          if (adjustedAttrName != null) {
            token.attrs[i].name = adjustedAttrName;
          }
        }
      }
      exports.adjustTokenSVGAttrs = adjustTokenSVGAttrs;
      function adjustTokenXMLAttrs(token) {
        for (let i = 0; i < token.attrs.length; i++) {
          const adjustedAttrEntry = XML_ATTRS_ADJUSTMENT_MAP.get(token.attrs[i].name);
          if (adjustedAttrEntry) {
            token.attrs[i].prefix = adjustedAttrEntry.prefix;
            token.attrs[i].name = adjustedAttrEntry.name;
            token.attrs[i].namespace = adjustedAttrEntry.namespace;
          }
        }
      }
      exports.adjustTokenXMLAttrs = adjustTokenXMLAttrs;
      function adjustTokenSVGTagName(token) {
        const adjustedTagName = exports.SVG_TAG_NAMES_ADJUSTMENT_MAP.get(token.tagName);
        if (adjustedTagName != null) {
          token.tagName = adjustedTagName;
          token.tagID = (0, html_js_1.getTagID)(token.tagName);
        }
      }
      exports.adjustTokenSVGTagName = adjustTokenSVGTagName;
      function isMathMLTextIntegrationPoint(tn, ns) {
        return ns === html_js_1.NS.MATHML && (tn === html_js_1.TAG_ID.MI || tn === html_js_1.TAG_ID.MO || tn === html_js_1.TAG_ID.MN || tn === html_js_1.TAG_ID.MS || tn === html_js_1.TAG_ID.MTEXT);
      }
      function isHtmlIntegrationPoint(tn, ns, attrs) {
        if (ns === html_js_1.NS.MATHML && tn === html_js_1.TAG_ID.ANNOTATION_XML) {
          for (let i = 0; i < attrs.length; i++) {
            if (attrs[i].name === html_js_1.ATTRS.ENCODING) {
              const value = attrs[i].value.toLowerCase();
              return value === MIME_TYPES.TEXT_HTML || value === MIME_TYPES.APPLICATION_XML;
            }
          }
        }
        return ns === html_js_1.NS.SVG && (tn === html_js_1.TAG_ID.FOREIGN_OBJECT || tn === html_js_1.TAG_ID.DESC || tn === html_js_1.TAG_ID.TITLE);
      }
      function isIntegrationPoint(tn, ns, attrs, foreignNS) {
        return (!foreignNS || foreignNS === html_js_1.NS.HTML) && isHtmlIntegrationPoint(tn, ns, attrs) || (!foreignNS || foreignNS === html_js_1.NS.MATHML) && isMathMLTextIntegrationPoint(tn, ns);
      }
      exports.isIntegrationPoint = isIntegrationPoint;
    }
  });

  // node_modules/parse5/dist/cjs/parser/index.js
  var require_parser = __commonJS({
    "node_modules/parse5/dist/cjs/parser/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Parser = void 0;
      var index_js_1 = require_tokenizer();
      var open_element_stack_js_1 = require_open_element_stack();
      var formatting_element_list_js_1 = require_formatting_element_list();
      var default_js_1 = require_default();
      var doctype = require_doctype();
      var foreignContent = require_foreign_content();
      var error_codes_js_1 = require_error_codes();
      var unicode = require_unicode();
      var html_js_1 = require_html();
      var token_js_1 = require_token();
      var HIDDEN_INPUT_TYPE = "hidden";
      var AA_OUTER_LOOP_ITER = 8;
      var AA_INNER_LOOP_ITER = 3;
      var InsertionMode;
      (function(InsertionMode2) {
        InsertionMode2[InsertionMode2["INITIAL"] = 0] = "INITIAL";
        InsertionMode2[InsertionMode2["BEFORE_HTML"] = 1] = "BEFORE_HTML";
        InsertionMode2[InsertionMode2["BEFORE_HEAD"] = 2] = "BEFORE_HEAD";
        InsertionMode2[InsertionMode2["IN_HEAD"] = 3] = "IN_HEAD";
        InsertionMode2[InsertionMode2["IN_HEAD_NO_SCRIPT"] = 4] = "IN_HEAD_NO_SCRIPT";
        InsertionMode2[InsertionMode2["AFTER_HEAD"] = 5] = "AFTER_HEAD";
        InsertionMode2[InsertionMode2["IN_BODY"] = 6] = "IN_BODY";
        InsertionMode2[InsertionMode2["TEXT"] = 7] = "TEXT";
        InsertionMode2[InsertionMode2["IN_TABLE"] = 8] = "IN_TABLE";
        InsertionMode2[InsertionMode2["IN_TABLE_TEXT"] = 9] = "IN_TABLE_TEXT";
        InsertionMode2[InsertionMode2["IN_CAPTION"] = 10] = "IN_CAPTION";
        InsertionMode2[InsertionMode2["IN_COLUMN_GROUP"] = 11] = "IN_COLUMN_GROUP";
        InsertionMode2[InsertionMode2["IN_TABLE_BODY"] = 12] = "IN_TABLE_BODY";
        InsertionMode2[InsertionMode2["IN_ROW"] = 13] = "IN_ROW";
        InsertionMode2[InsertionMode2["IN_CELL"] = 14] = "IN_CELL";
        InsertionMode2[InsertionMode2["IN_SELECT"] = 15] = "IN_SELECT";
        InsertionMode2[InsertionMode2["IN_SELECT_IN_TABLE"] = 16] = "IN_SELECT_IN_TABLE";
        InsertionMode2[InsertionMode2["IN_TEMPLATE"] = 17] = "IN_TEMPLATE";
        InsertionMode2[InsertionMode2["AFTER_BODY"] = 18] = "AFTER_BODY";
        InsertionMode2[InsertionMode2["IN_FRAMESET"] = 19] = "IN_FRAMESET";
        InsertionMode2[InsertionMode2["AFTER_FRAMESET"] = 20] = "AFTER_FRAMESET";
        InsertionMode2[InsertionMode2["AFTER_AFTER_BODY"] = 21] = "AFTER_AFTER_BODY";
        InsertionMode2[InsertionMode2["AFTER_AFTER_FRAMESET"] = 22] = "AFTER_AFTER_FRAMESET";
      })(InsertionMode || (InsertionMode = {}));
      var BASE_LOC = {
        startLine: -1,
        startCol: -1,
        startOffset: -1,
        endLine: -1,
        endCol: -1,
        endOffset: -1
      };
      var TABLE_STRUCTURE_TAGS = /* @__PURE__ */ new Set([html_js_1.TAG_ID.TABLE, html_js_1.TAG_ID.TBODY, html_js_1.TAG_ID.TFOOT, html_js_1.TAG_ID.THEAD, html_js_1.TAG_ID.TR]);
      var defaultParserOptions = {
        scriptingEnabled: true,
        sourceCodeLocationInfo: false,
        treeAdapter: default_js_1.defaultTreeAdapter,
        onParseError: null
      };
      var Parser = class {
        constructor(options, document, fragmentContext = null, scriptHandler = null) {
          this.fragmentContext = fragmentContext;
          this.scriptHandler = scriptHandler;
          this.currentToken = null;
          this.stopped = false;
          this.insertionMode = InsertionMode.INITIAL;
          this.originalInsertionMode = InsertionMode.INITIAL;
          this.headElement = null;
          this.formElement = null;
          this.currentNotInHTML = false;
          this.tmplInsertionModeStack = [];
          this.pendingCharacterTokens = [];
          this.hasNonWhitespacePendingCharacterToken = false;
          this.framesetOk = true;
          this.skipNextNewLine = false;
          this.fosterParentingEnabled = false;
          this.options = Object.assign(Object.assign({}, defaultParserOptions), options);
          this.treeAdapter = this.options.treeAdapter;
          this.onParseError = this.options.onParseError;
          if (this.onParseError) {
            this.options.sourceCodeLocationInfo = true;
          }
          this.document = document !== null && document !== void 0 ? document : this.treeAdapter.createDocument();
          this.tokenizer = new index_js_1.Tokenizer(this.options, this);
          this.activeFormattingElements = new formatting_element_list_js_1.FormattingElementList(this.treeAdapter);
          this.fragmentContextID = fragmentContext ? (0, html_js_1.getTagID)(this.treeAdapter.getTagName(fragmentContext)) : html_js_1.TAG_ID.UNKNOWN;
          this._setContextModes(fragmentContext !== null && fragmentContext !== void 0 ? fragmentContext : this.document, this.fragmentContextID);
          this.openElements = new open_element_stack_js_1.OpenElementStack(this.document, this.treeAdapter, this);
        }
        // API
        static parse(html, options) {
          const parser = new this(options);
          parser.tokenizer.write(html, true);
          return parser.document;
        }
        static getFragmentParser(fragmentContext, options) {
          const opts = Object.assign(Object.assign({}, defaultParserOptions), options);
          fragmentContext !== null && fragmentContext !== void 0 ? fragmentContext : fragmentContext = opts.treeAdapter.createElement(html_js_1.TAG_NAMES.TEMPLATE, html_js_1.NS.HTML, []);
          const documentMock = opts.treeAdapter.createElement("documentmock", html_js_1.NS.HTML, []);
          const parser = new this(opts, documentMock, fragmentContext);
          if (parser.fragmentContextID === html_js_1.TAG_ID.TEMPLATE) {
            parser.tmplInsertionModeStack.unshift(InsertionMode.IN_TEMPLATE);
          }
          parser._initTokenizerForFragmentParsing();
          parser._insertFakeRootElement();
          parser._resetInsertionMode();
          parser._findFormInFragmentContext();
          return parser;
        }
        getFragment() {
          const rootElement = this.treeAdapter.getFirstChild(this.document);
          const fragment = this.treeAdapter.createDocumentFragment();
          this._adoptNodes(rootElement, fragment);
          return fragment;
        }
        //Errors
        _err(token, code, beforeToken) {
          var _a;
          if (!this.onParseError)
            return;
          const loc = (_a = token.location) !== null && _a !== void 0 ? _a : BASE_LOC;
          const err = {
            code,
            startLine: loc.startLine,
            startCol: loc.startCol,
            startOffset: loc.startOffset,
            endLine: beforeToken ? loc.startLine : loc.endLine,
            endCol: beforeToken ? loc.startCol : loc.endCol,
            endOffset: beforeToken ? loc.startOffset : loc.endOffset
          };
          this.onParseError(err);
        }
        //Stack events
        onItemPush(node, tid, isTop) {
          var _a, _b;
          (_b = (_a = this.treeAdapter).onItemPush) === null || _b === void 0 ? void 0 : _b.call(_a, node);
          if (isTop && this.openElements.stackTop > 0)
            this._setContextModes(node, tid);
        }
        onItemPop(node, isTop) {
          var _a, _b;
          if (this.options.sourceCodeLocationInfo) {
            this._setEndLocation(node, this.currentToken);
          }
          (_b = (_a = this.treeAdapter).onItemPop) === null || _b === void 0 ? void 0 : _b.call(_a, node, this.openElements.current);
          if (isTop) {
            let current;
            let currentTagId;
            if (this.openElements.stackTop === 0 && this.fragmentContext) {
              current = this.fragmentContext;
              currentTagId = this.fragmentContextID;
            } else {
              ({ current, currentTagId } = this.openElements);
            }
            this._setContextModes(current, currentTagId);
          }
        }
        _setContextModes(current, tid) {
          const isHTML = current === this.document || this.treeAdapter.getNamespaceURI(current) === html_js_1.NS.HTML;
          this.currentNotInHTML = !isHTML;
          this.tokenizer.inForeignNode = !isHTML && !this._isIntegrationPoint(tid, current);
        }
        _switchToTextParsing(currentToken, nextTokenizerState) {
          this._insertElement(currentToken, html_js_1.NS.HTML);
          this.tokenizer.state = nextTokenizerState;
          this.originalInsertionMode = this.insertionMode;
          this.insertionMode = InsertionMode.TEXT;
        }
        switchToPlaintextParsing() {
          this.insertionMode = InsertionMode.TEXT;
          this.originalInsertionMode = InsertionMode.IN_BODY;
          this.tokenizer.state = index_js_1.TokenizerMode.PLAINTEXT;
        }
        //Fragment parsing
        _getAdjustedCurrentElement() {
          return this.openElements.stackTop === 0 && this.fragmentContext ? this.fragmentContext : this.openElements.current;
        }
        _findFormInFragmentContext() {
          let node = this.fragmentContext;
          while (node) {
            if (this.treeAdapter.getTagName(node) === html_js_1.TAG_NAMES.FORM) {
              this.formElement = node;
              break;
            }
            node = this.treeAdapter.getParentNode(node);
          }
        }
        _initTokenizerForFragmentParsing() {
          if (!this.fragmentContext || this.treeAdapter.getNamespaceURI(this.fragmentContext) !== html_js_1.NS.HTML) {
            return;
          }
          switch (this.fragmentContextID) {
            case html_js_1.TAG_ID.TITLE:
            case html_js_1.TAG_ID.TEXTAREA: {
              this.tokenizer.state = index_js_1.TokenizerMode.RCDATA;
              break;
            }
            case html_js_1.TAG_ID.STYLE:
            case html_js_1.TAG_ID.XMP:
            case html_js_1.TAG_ID.IFRAME:
            case html_js_1.TAG_ID.NOEMBED:
            case html_js_1.TAG_ID.NOFRAMES:
            case html_js_1.TAG_ID.NOSCRIPT: {
              this.tokenizer.state = index_js_1.TokenizerMode.RAWTEXT;
              break;
            }
            case html_js_1.TAG_ID.SCRIPT: {
              this.tokenizer.state = index_js_1.TokenizerMode.SCRIPT_DATA;
              break;
            }
            case html_js_1.TAG_ID.PLAINTEXT: {
              this.tokenizer.state = index_js_1.TokenizerMode.PLAINTEXT;
              break;
            }
            default:
          }
        }
        //Tree mutation
        _setDocumentType(token) {
          const name = token.name || "";
          const publicId = token.publicId || "";
          const systemId = token.systemId || "";
          this.treeAdapter.setDocumentType(this.document, name, publicId, systemId);
          if (token.location) {
            const documentChildren = this.treeAdapter.getChildNodes(this.document);
            const docTypeNode = documentChildren.find((node) => this.treeAdapter.isDocumentTypeNode(node));
            if (docTypeNode) {
              this.treeAdapter.setNodeSourceCodeLocation(docTypeNode, token.location);
            }
          }
        }
        _attachElementToTree(element, location) {
          if (this.options.sourceCodeLocationInfo) {
            const loc = location && Object.assign(Object.assign({}, location), { startTag: location });
            this.treeAdapter.setNodeSourceCodeLocation(element, loc);
          }
          if (this._shouldFosterParentOnInsertion()) {
            this._fosterParentElement(element);
          } else {
            const parent = this.openElements.currentTmplContentOrNode;
            this.treeAdapter.appendChild(parent, element);
          }
        }
        _appendElement(token, namespaceURI) {
          const element = this.treeAdapter.createElement(token.tagName, namespaceURI, token.attrs);
          this._attachElementToTree(element, token.location);
        }
        _insertElement(token, namespaceURI) {
          const element = this.treeAdapter.createElement(token.tagName, namespaceURI, token.attrs);
          this._attachElementToTree(element, token.location);
          this.openElements.push(element, token.tagID);
        }
        _insertFakeElement(tagName, tagID) {
          const element = this.treeAdapter.createElement(tagName, html_js_1.NS.HTML, []);
          this._attachElementToTree(element, null);
          this.openElements.push(element, tagID);
        }
        _insertTemplate(token) {
          const tmpl = this.treeAdapter.createElement(token.tagName, html_js_1.NS.HTML, token.attrs);
          const content = this.treeAdapter.createDocumentFragment();
          this.treeAdapter.setTemplateContent(tmpl, content);
          this._attachElementToTree(tmpl, token.location);
          this.openElements.push(tmpl, token.tagID);
          if (this.options.sourceCodeLocationInfo)
            this.treeAdapter.setNodeSourceCodeLocation(content, null);
        }
        _insertFakeRootElement() {
          const element = this.treeAdapter.createElement(html_js_1.TAG_NAMES.HTML, html_js_1.NS.HTML, []);
          if (this.options.sourceCodeLocationInfo)
            this.treeAdapter.setNodeSourceCodeLocation(element, null);
          this.treeAdapter.appendChild(this.openElements.current, element);
          this.openElements.push(element, html_js_1.TAG_ID.HTML);
        }
        _appendCommentNode(token, parent) {
          const commentNode = this.treeAdapter.createCommentNode(token.data);
          this.treeAdapter.appendChild(parent, commentNode);
          if (this.options.sourceCodeLocationInfo) {
            this.treeAdapter.setNodeSourceCodeLocation(commentNode, token.location);
          }
        }
        _insertCharacters(token) {
          let parent;
          let beforeElement;
          if (this._shouldFosterParentOnInsertion()) {
            ({ parent, beforeElement } = this._findFosterParentingLocation());
            if (beforeElement) {
              this.treeAdapter.insertTextBefore(parent, token.chars, beforeElement);
            } else {
              this.treeAdapter.insertText(parent, token.chars);
            }
          } else {
            parent = this.openElements.currentTmplContentOrNode;
            this.treeAdapter.insertText(parent, token.chars);
          }
          if (!token.location)
            return;
          const siblings = this.treeAdapter.getChildNodes(parent);
          const textNodeIdx = beforeElement ? siblings.lastIndexOf(beforeElement) : siblings.length;
          const textNode = siblings[textNodeIdx - 1];
          const tnLoc = this.treeAdapter.getNodeSourceCodeLocation(textNode);
          if (tnLoc) {
            const { endLine, endCol, endOffset } = token.location;
            this.treeAdapter.updateNodeSourceCodeLocation(textNode, { endLine, endCol, endOffset });
          } else if (this.options.sourceCodeLocationInfo) {
            this.treeAdapter.setNodeSourceCodeLocation(textNode, token.location);
          }
        }
        _adoptNodes(donor, recipient) {
          for (let child = this.treeAdapter.getFirstChild(donor); child; child = this.treeAdapter.getFirstChild(donor)) {
            this.treeAdapter.detachNode(child);
            this.treeAdapter.appendChild(recipient, child);
          }
        }
        _setEndLocation(element, closingToken) {
          if (this.treeAdapter.getNodeSourceCodeLocation(element) && closingToken.location) {
            const ctLoc = closingToken.location;
            const tn = this.treeAdapter.getTagName(element);
            const endLoc = (
              // NOTE: For cases like <p> <p> </p> - First 'p' closes without a closing
              // tag and for cases like <td> <p> </td> - 'p' closes without a closing tag.
              closingToken.type === token_js_1.TokenType.END_TAG && tn === closingToken.tagName ? {
                endTag: Object.assign({}, ctLoc),
                endLine: ctLoc.endLine,
                endCol: ctLoc.endCol,
                endOffset: ctLoc.endOffset
              } : {
                endLine: ctLoc.startLine,
                endCol: ctLoc.startCol,
                endOffset: ctLoc.startOffset
              }
            );
            this.treeAdapter.updateNodeSourceCodeLocation(element, endLoc);
          }
        }
        //Token processing
        shouldProcessStartTagTokenInForeignContent(token) {
          if (!this.currentNotInHTML)
            return false;
          let current;
          let currentTagId;
          if (this.openElements.stackTop === 0 && this.fragmentContext) {
            current = this.fragmentContext;
            currentTagId = this.fragmentContextID;
          } else {
            ({ current, currentTagId } = this.openElements);
          }
          if (token.tagID === html_js_1.TAG_ID.SVG && this.treeAdapter.getTagName(current) === html_js_1.TAG_NAMES.ANNOTATION_XML && this.treeAdapter.getNamespaceURI(current) === html_js_1.NS.MATHML) {
            return false;
          }
          return (
            // Check that `current` is not an integration point for HTML or MathML elements.
            this.tokenizer.inForeignNode || // If it _is_ an integration point, then we might have to check that it is not an HTML
            // integration point.
            (token.tagID === html_js_1.TAG_ID.MGLYPH || token.tagID === html_js_1.TAG_ID.MALIGNMARK) && !this._isIntegrationPoint(currentTagId, current, html_js_1.NS.HTML)
          );
        }
        _processToken(token) {
          switch (token.type) {
            case token_js_1.TokenType.CHARACTER: {
              this.onCharacter(token);
              break;
            }
            case token_js_1.TokenType.NULL_CHARACTER: {
              this.onNullCharacter(token);
              break;
            }
            case token_js_1.TokenType.COMMENT: {
              this.onComment(token);
              break;
            }
            case token_js_1.TokenType.DOCTYPE: {
              this.onDoctype(token);
              break;
            }
            case token_js_1.TokenType.START_TAG: {
              this._processStartTag(token);
              break;
            }
            case token_js_1.TokenType.END_TAG: {
              this.onEndTag(token);
              break;
            }
            case token_js_1.TokenType.EOF: {
              this.onEof(token);
              break;
            }
            case token_js_1.TokenType.WHITESPACE_CHARACTER: {
              this.onWhitespaceCharacter(token);
              break;
            }
          }
        }
        //Integration points
        _isIntegrationPoint(tid, element, foreignNS) {
          const ns = this.treeAdapter.getNamespaceURI(element);
          const attrs = this.treeAdapter.getAttrList(element);
          return foreignContent.isIntegrationPoint(tid, ns, attrs, foreignNS);
        }
        //Active formatting elements reconstruction
        _reconstructActiveFormattingElements() {
          const listLength = this.activeFormattingElements.entries.length;
          if (listLength) {
            const endIndex = this.activeFormattingElements.entries.findIndex((entry) => entry.type === formatting_element_list_js_1.EntryType.Marker || this.openElements.contains(entry.element));
            const unopenIdx = endIndex < 0 ? listLength - 1 : endIndex - 1;
            for (let i = unopenIdx; i >= 0; i--) {
              const entry = this.activeFormattingElements.entries[i];
              this._insertElement(entry.token, this.treeAdapter.getNamespaceURI(entry.element));
              entry.element = this.openElements.current;
            }
          }
        }
        //Close elements
        _closeTableCell() {
          this.openElements.generateImpliedEndTags();
          this.openElements.popUntilTableCellPopped();
          this.activeFormattingElements.clearToLastMarker();
          this.insertionMode = InsertionMode.IN_ROW;
        }
        _closePElement() {
          this.openElements.generateImpliedEndTagsWithExclusion(html_js_1.TAG_ID.P);
          this.openElements.popUntilTagNamePopped(html_js_1.TAG_ID.P);
        }
        //Insertion modes
        _resetInsertionMode() {
          for (let i = this.openElements.stackTop; i >= 0; i--) {
            switch (i === 0 && this.fragmentContext ? this.fragmentContextID : this.openElements.tagIDs[i]) {
              case html_js_1.TAG_ID.TR: {
                this.insertionMode = InsertionMode.IN_ROW;
                return;
              }
              case html_js_1.TAG_ID.TBODY:
              case html_js_1.TAG_ID.THEAD:
              case html_js_1.TAG_ID.TFOOT: {
                this.insertionMode = InsertionMode.IN_TABLE_BODY;
                return;
              }
              case html_js_1.TAG_ID.CAPTION: {
                this.insertionMode = InsertionMode.IN_CAPTION;
                return;
              }
              case html_js_1.TAG_ID.COLGROUP: {
                this.insertionMode = InsertionMode.IN_COLUMN_GROUP;
                return;
              }
              case html_js_1.TAG_ID.TABLE: {
                this.insertionMode = InsertionMode.IN_TABLE;
                return;
              }
              case html_js_1.TAG_ID.BODY: {
                this.insertionMode = InsertionMode.IN_BODY;
                return;
              }
              case html_js_1.TAG_ID.FRAMESET: {
                this.insertionMode = InsertionMode.IN_FRAMESET;
                return;
              }
              case html_js_1.TAG_ID.SELECT: {
                this._resetInsertionModeForSelect(i);
                return;
              }
              case html_js_1.TAG_ID.TEMPLATE: {
                this.insertionMode = this.tmplInsertionModeStack[0];
                return;
              }
              case html_js_1.TAG_ID.HTML: {
                this.insertionMode = this.headElement ? InsertionMode.AFTER_HEAD : InsertionMode.BEFORE_HEAD;
                return;
              }
              case html_js_1.TAG_ID.TD:
              case html_js_1.TAG_ID.TH: {
                if (i > 0) {
                  this.insertionMode = InsertionMode.IN_CELL;
                  return;
                }
                break;
              }
              case html_js_1.TAG_ID.HEAD: {
                if (i > 0) {
                  this.insertionMode = InsertionMode.IN_HEAD;
                  return;
                }
                break;
              }
            }
          }
          this.insertionMode = InsertionMode.IN_BODY;
        }
        _resetInsertionModeForSelect(selectIdx) {
          if (selectIdx > 0) {
            for (let i = selectIdx - 1; i > 0; i--) {
              const tn = this.openElements.tagIDs[i];
              if (tn === html_js_1.TAG_ID.TEMPLATE) {
                break;
              } else if (tn === html_js_1.TAG_ID.TABLE) {
                this.insertionMode = InsertionMode.IN_SELECT_IN_TABLE;
                return;
              }
            }
          }
          this.insertionMode = InsertionMode.IN_SELECT;
        }
        //Foster parenting
        _isElementCausesFosterParenting(tn) {
          return TABLE_STRUCTURE_TAGS.has(tn);
        }
        _shouldFosterParentOnInsertion() {
          return this.fosterParentingEnabled && this._isElementCausesFosterParenting(this.openElements.currentTagId);
        }
        _findFosterParentingLocation() {
          for (let i = this.openElements.stackTop; i >= 0; i--) {
            const openElement = this.openElements.items[i];
            switch (this.openElements.tagIDs[i]) {
              case html_js_1.TAG_ID.TEMPLATE: {
                if (this.treeAdapter.getNamespaceURI(openElement) === html_js_1.NS.HTML) {
                  return { parent: this.treeAdapter.getTemplateContent(openElement), beforeElement: null };
                }
                break;
              }
              case html_js_1.TAG_ID.TABLE: {
                const parent = this.treeAdapter.getParentNode(openElement);
                if (parent) {
                  return { parent, beforeElement: openElement };
                }
                return { parent: this.openElements.items[i - 1], beforeElement: null };
              }
              default:
            }
          }
          return { parent: this.openElements.items[0], beforeElement: null };
        }
        _fosterParentElement(element) {
          const location = this._findFosterParentingLocation();
          if (location.beforeElement) {
            this.treeAdapter.insertBefore(location.parent, element, location.beforeElement);
          } else {
            this.treeAdapter.appendChild(location.parent, element);
          }
        }
        //Special elements
        _isSpecialElement(element, id) {
          const ns = this.treeAdapter.getNamespaceURI(element);
          return html_js_1.SPECIAL_ELEMENTS[ns].has(id);
        }
        onCharacter(token) {
          this.skipNextNewLine = false;
          if (this.tokenizer.inForeignNode) {
            characterInForeignContent(this, token);
            return;
          }
          switch (this.insertionMode) {
            case InsertionMode.INITIAL: {
              tokenInInitialMode(this, token);
              break;
            }
            case InsertionMode.BEFORE_HTML: {
              tokenBeforeHtml(this, token);
              break;
            }
            case InsertionMode.BEFORE_HEAD: {
              tokenBeforeHead(this, token);
              break;
            }
            case InsertionMode.IN_HEAD: {
              tokenInHead(this, token);
              break;
            }
            case InsertionMode.IN_HEAD_NO_SCRIPT: {
              tokenInHeadNoScript(this, token);
              break;
            }
            case InsertionMode.AFTER_HEAD: {
              tokenAfterHead(this, token);
              break;
            }
            case InsertionMode.IN_BODY:
            case InsertionMode.IN_CAPTION:
            case InsertionMode.IN_CELL:
            case InsertionMode.IN_TEMPLATE: {
              characterInBody(this, token);
              break;
            }
            case InsertionMode.TEXT:
            case InsertionMode.IN_SELECT:
            case InsertionMode.IN_SELECT_IN_TABLE: {
              this._insertCharacters(token);
              break;
            }
            case InsertionMode.IN_TABLE:
            case InsertionMode.IN_TABLE_BODY:
            case InsertionMode.IN_ROW: {
              characterInTable(this, token);
              break;
            }
            case InsertionMode.IN_TABLE_TEXT: {
              characterInTableText(this, token);
              break;
            }
            case InsertionMode.IN_COLUMN_GROUP: {
              tokenInColumnGroup(this, token);
              break;
            }
            case InsertionMode.AFTER_BODY: {
              tokenAfterBody(this, token);
              break;
            }
            case InsertionMode.AFTER_AFTER_BODY: {
              tokenAfterAfterBody(this, token);
              break;
            }
            default:
          }
        }
        onNullCharacter(token) {
          this.skipNextNewLine = false;
          if (this.tokenizer.inForeignNode) {
            nullCharacterInForeignContent(this, token);
            return;
          }
          switch (this.insertionMode) {
            case InsertionMode.INITIAL: {
              tokenInInitialMode(this, token);
              break;
            }
            case InsertionMode.BEFORE_HTML: {
              tokenBeforeHtml(this, token);
              break;
            }
            case InsertionMode.BEFORE_HEAD: {
              tokenBeforeHead(this, token);
              break;
            }
            case InsertionMode.IN_HEAD: {
              tokenInHead(this, token);
              break;
            }
            case InsertionMode.IN_HEAD_NO_SCRIPT: {
              tokenInHeadNoScript(this, token);
              break;
            }
            case InsertionMode.AFTER_HEAD: {
              tokenAfterHead(this, token);
              break;
            }
            case InsertionMode.TEXT: {
              this._insertCharacters(token);
              break;
            }
            case InsertionMode.IN_TABLE:
            case InsertionMode.IN_TABLE_BODY:
            case InsertionMode.IN_ROW: {
              characterInTable(this, token);
              break;
            }
            case InsertionMode.IN_COLUMN_GROUP: {
              tokenInColumnGroup(this, token);
              break;
            }
            case InsertionMode.AFTER_BODY: {
              tokenAfterBody(this, token);
              break;
            }
            case InsertionMode.AFTER_AFTER_BODY: {
              tokenAfterAfterBody(this, token);
              break;
            }
            default:
          }
        }
        onComment(token) {
          this.skipNextNewLine = false;
          if (this.currentNotInHTML) {
            appendComment(this, token);
            return;
          }
          switch (this.insertionMode) {
            case InsertionMode.INITIAL:
            case InsertionMode.BEFORE_HTML:
            case InsertionMode.BEFORE_HEAD:
            case InsertionMode.IN_HEAD:
            case InsertionMode.IN_HEAD_NO_SCRIPT:
            case InsertionMode.AFTER_HEAD:
            case InsertionMode.IN_BODY:
            case InsertionMode.IN_TABLE:
            case InsertionMode.IN_CAPTION:
            case InsertionMode.IN_COLUMN_GROUP:
            case InsertionMode.IN_TABLE_BODY:
            case InsertionMode.IN_ROW:
            case InsertionMode.IN_CELL:
            case InsertionMode.IN_SELECT:
            case InsertionMode.IN_SELECT_IN_TABLE:
            case InsertionMode.IN_TEMPLATE:
            case InsertionMode.IN_FRAMESET:
            case InsertionMode.AFTER_FRAMESET: {
              appendComment(this, token);
              break;
            }
            case InsertionMode.IN_TABLE_TEXT: {
              tokenInTableText(this, token);
              break;
            }
            case InsertionMode.AFTER_BODY: {
              appendCommentToRootHtmlElement(this, token);
              break;
            }
            case InsertionMode.AFTER_AFTER_BODY:
            case InsertionMode.AFTER_AFTER_FRAMESET: {
              appendCommentToDocument(this, token);
              break;
            }
            default:
          }
        }
        onDoctype(token) {
          this.skipNextNewLine = false;
          switch (this.insertionMode) {
            case InsertionMode.INITIAL: {
              doctypeInInitialMode(this, token);
              break;
            }
            case InsertionMode.BEFORE_HEAD:
            case InsertionMode.IN_HEAD:
            case InsertionMode.IN_HEAD_NO_SCRIPT:
            case InsertionMode.AFTER_HEAD: {
              this._err(token, error_codes_js_1.ERR.misplacedDoctype);
              break;
            }
            case InsertionMode.IN_TABLE_TEXT: {
              tokenInTableText(this, token);
              break;
            }
            default:
          }
        }
        onStartTag(token) {
          this.skipNextNewLine = false;
          this.currentToken = token;
          this._processStartTag(token);
          if (token.selfClosing && !token.ackSelfClosing) {
            this._err(token, error_codes_js_1.ERR.nonVoidHtmlElementStartTagWithTrailingSolidus);
          }
        }
        /**
         * Processes a given start tag.
         *
         * `onStartTag` checks if a self-closing tag was recognized. When a token
         * is moved inbetween multiple insertion modes, this check for self-closing
         * could lead to false positives. To avoid this, `_processStartTag` is used
         * for nested calls.
         *
         * @param token The token to process.
         */
        _processStartTag(token) {
          if (this.shouldProcessStartTagTokenInForeignContent(token)) {
            startTagInForeignContent(this, token);
          } else {
            this._startTagOutsideForeignContent(token);
          }
        }
        _startTagOutsideForeignContent(token) {
          switch (this.insertionMode) {
            case InsertionMode.INITIAL: {
              tokenInInitialMode(this, token);
              break;
            }
            case InsertionMode.BEFORE_HTML: {
              startTagBeforeHtml(this, token);
              break;
            }
            case InsertionMode.BEFORE_HEAD: {
              startTagBeforeHead(this, token);
              break;
            }
            case InsertionMode.IN_HEAD: {
              startTagInHead(this, token);
              break;
            }
            case InsertionMode.IN_HEAD_NO_SCRIPT: {
              startTagInHeadNoScript(this, token);
              break;
            }
            case InsertionMode.AFTER_HEAD: {
              startTagAfterHead(this, token);
              break;
            }
            case InsertionMode.IN_BODY: {
              startTagInBody(this, token);
              break;
            }
            case InsertionMode.IN_TABLE: {
              startTagInTable(this, token);
              break;
            }
            case InsertionMode.IN_TABLE_TEXT: {
              tokenInTableText(this, token);
              break;
            }
            case InsertionMode.IN_CAPTION: {
              startTagInCaption(this, token);
              break;
            }
            case InsertionMode.IN_COLUMN_GROUP: {
              startTagInColumnGroup(this, token);
              break;
            }
            case InsertionMode.IN_TABLE_BODY: {
              startTagInTableBody(this, token);
              break;
            }
            case InsertionMode.IN_ROW: {
              startTagInRow(this, token);
              break;
            }
            case InsertionMode.IN_CELL: {
              startTagInCell(this, token);
              break;
            }
            case InsertionMode.IN_SELECT: {
              startTagInSelect(this, token);
              break;
            }
            case InsertionMode.IN_SELECT_IN_TABLE: {
              startTagInSelectInTable(this, token);
              break;
            }
            case InsertionMode.IN_TEMPLATE: {
              startTagInTemplate(this, token);
              break;
            }
            case InsertionMode.AFTER_BODY: {
              startTagAfterBody(this, token);
              break;
            }
            case InsertionMode.IN_FRAMESET: {
              startTagInFrameset(this, token);
              break;
            }
            case InsertionMode.AFTER_FRAMESET: {
              startTagAfterFrameset(this, token);
              break;
            }
            case InsertionMode.AFTER_AFTER_BODY: {
              startTagAfterAfterBody(this, token);
              break;
            }
            case InsertionMode.AFTER_AFTER_FRAMESET: {
              startTagAfterAfterFrameset(this, token);
              break;
            }
            default:
          }
        }
        onEndTag(token) {
          this.skipNextNewLine = false;
          this.currentToken = token;
          if (this.currentNotInHTML) {
            endTagInForeignContent(this, token);
          } else {
            this._endTagOutsideForeignContent(token);
          }
        }
        _endTagOutsideForeignContent(token) {
          switch (this.insertionMode) {
            case InsertionMode.INITIAL: {
              tokenInInitialMode(this, token);
              break;
            }
            case InsertionMode.BEFORE_HTML: {
              endTagBeforeHtml(this, token);
              break;
            }
            case InsertionMode.BEFORE_HEAD: {
              endTagBeforeHead(this, token);
              break;
            }
            case InsertionMode.IN_HEAD: {
              endTagInHead(this, token);
              break;
            }
            case InsertionMode.IN_HEAD_NO_SCRIPT: {
              endTagInHeadNoScript(this, token);
              break;
            }
            case InsertionMode.AFTER_HEAD: {
              endTagAfterHead(this, token);
              break;
            }
            case InsertionMode.IN_BODY: {
              endTagInBody(this, token);
              break;
            }
            case InsertionMode.TEXT: {
              endTagInText(this, token);
              break;
            }
            case InsertionMode.IN_TABLE: {
              endTagInTable(this, token);
              break;
            }
            case InsertionMode.IN_TABLE_TEXT: {
              tokenInTableText(this, token);
              break;
            }
            case InsertionMode.IN_CAPTION: {
              endTagInCaption(this, token);
              break;
            }
            case InsertionMode.IN_COLUMN_GROUP: {
              endTagInColumnGroup(this, token);
              break;
            }
            case InsertionMode.IN_TABLE_BODY: {
              endTagInTableBody(this, token);
              break;
            }
            case InsertionMode.IN_ROW: {
              endTagInRow(this, token);
              break;
            }
            case InsertionMode.IN_CELL: {
              endTagInCell(this, token);
              break;
            }
            case InsertionMode.IN_SELECT: {
              endTagInSelect(this, token);
              break;
            }
            case InsertionMode.IN_SELECT_IN_TABLE: {
              endTagInSelectInTable(this, token);
              break;
            }
            case InsertionMode.IN_TEMPLATE: {
              endTagInTemplate(this, token);
              break;
            }
            case InsertionMode.AFTER_BODY: {
              endTagAfterBody(this, token);
              break;
            }
            case InsertionMode.IN_FRAMESET: {
              endTagInFrameset(this, token);
              break;
            }
            case InsertionMode.AFTER_FRAMESET: {
              endTagAfterFrameset(this, token);
              break;
            }
            case InsertionMode.AFTER_AFTER_BODY: {
              tokenAfterAfterBody(this, token);
              break;
            }
            default:
          }
        }
        onEof(token) {
          switch (this.insertionMode) {
            case InsertionMode.INITIAL: {
              tokenInInitialMode(this, token);
              break;
            }
            case InsertionMode.BEFORE_HTML: {
              tokenBeforeHtml(this, token);
              break;
            }
            case InsertionMode.BEFORE_HEAD: {
              tokenBeforeHead(this, token);
              break;
            }
            case InsertionMode.IN_HEAD: {
              tokenInHead(this, token);
              break;
            }
            case InsertionMode.IN_HEAD_NO_SCRIPT: {
              tokenInHeadNoScript(this, token);
              break;
            }
            case InsertionMode.AFTER_HEAD: {
              tokenAfterHead(this, token);
              break;
            }
            case InsertionMode.IN_BODY:
            case InsertionMode.IN_TABLE:
            case InsertionMode.IN_CAPTION:
            case InsertionMode.IN_COLUMN_GROUP:
            case InsertionMode.IN_TABLE_BODY:
            case InsertionMode.IN_ROW:
            case InsertionMode.IN_CELL:
            case InsertionMode.IN_SELECT:
            case InsertionMode.IN_SELECT_IN_TABLE: {
              eofInBody(this, token);
              break;
            }
            case InsertionMode.TEXT: {
              eofInText(this, token);
              break;
            }
            case InsertionMode.IN_TABLE_TEXT: {
              tokenInTableText(this, token);
              break;
            }
            case InsertionMode.IN_TEMPLATE: {
              eofInTemplate(this, token);
              break;
            }
            case InsertionMode.AFTER_BODY:
            case InsertionMode.IN_FRAMESET:
            case InsertionMode.AFTER_FRAMESET:
            case InsertionMode.AFTER_AFTER_BODY:
            case InsertionMode.AFTER_AFTER_FRAMESET: {
              stopParsing(this, token);
              break;
            }
            default:
          }
        }
        onWhitespaceCharacter(token) {
          if (this.skipNextNewLine) {
            this.skipNextNewLine = false;
            if (token.chars.charCodeAt(0) === unicode.CODE_POINTS.LINE_FEED) {
              if (token.chars.length === 1) {
                return;
              }
              token.chars = token.chars.substr(1);
            }
          }
          if (this.tokenizer.inForeignNode) {
            this._insertCharacters(token);
            return;
          }
          switch (this.insertionMode) {
            case InsertionMode.IN_HEAD:
            case InsertionMode.IN_HEAD_NO_SCRIPT:
            case InsertionMode.AFTER_HEAD:
            case InsertionMode.TEXT:
            case InsertionMode.IN_COLUMN_GROUP:
            case InsertionMode.IN_SELECT:
            case InsertionMode.IN_SELECT_IN_TABLE:
            case InsertionMode.IN_FRAMESET:
            case InsertionMode.AFTER_FRAMESET: {
              this._insertCharacters(token);
              break;
            }
            case InsertionMode.IN_BODY:
            case InsertionMode.IN_CAPTION:
            case InsertionMode.IN_CELL:
            case InsertionMode.IN_TEMPLATE:
            case InsertionMode.AFTER_BODY:
            case InsertionMode.AFTER_AFTER_BODY:
            case InsertionMode.AFTER_AFTER_FRAMESET: {
              whitespaceCharacterInBody(this, token);
              break;
            }
            case InsertionMode.IN_TABLE:
            case InsertionMode.IN_TABLE_BODY:
            case InsertionMode.IN_ROW: {
              characterInTable(this, token);
              break;
            }
            case InsertionMode.IN_TABLE_TEXT: {
              whitespaceCharacterInTableText(this, token);
              break;
            }
            default:
          }
        }
      };
      exports.Parser = Parser;
      function aaObtainFormattingElementEntry(p, token) {
        let formattingElementEntry = p.activeFormattingElements.getElementEntryInScopeWithTagName(token.tagName);
        if (formattingElementEntry) {
          if (!p.openElements.contains(formattingElementEntry.element)) {
            p.activeFormattingElements.removeEntry(formattingElementEntry);
            formattingElementEntry = null;
          } else if (!p.openElements.hasInScope(token.tagID)) {
            formattingElementEntry = null;
          }
        } else {
          genericEndTagInBody(p, token);
        }
        return formattingElementEntry;
      }
      function aaObtainFurthestBlock(p, formattingElementEntry) {
        let furthestBlock = null;
        let idx = p.openElements.stackTop;
        for (; idx >= 0; idx--) {
          const element = p.openElements.items[idx];
          if (element === formattingElementEntry.element) {
            break;
          }
          if (p._isSpecialElement(element, p.openElements.tagIDs[idx])) {
            furthestBlock = element;
          }
        }
        if (!furthestBlock) {
          p.openElements.shortenToLength(idx < 0 ? 0 : idx);
          p.activeFormattingElements.removeEntry(formattingElementEntry);
        }
        return furthestBlock;
      }
      function aaInnerLoop(p, furthestBlock, formattingElement) {
        let lastElement = furthestBlock;
        let nextElement = p.openElements.getCommonAncestor(furthestBlock);
        for (let i = 0, element = nextElement; element !== formattingElement; i++, element = nextElement) {
          nextElement = p.openElements.getCommonAncestor(element);
          const elementEntry = p.activeFormattingElements.getElementEntry(element);
          const counterOverflow = elementEntry && i >= AA_INNER_LOOP_ITER;
          const shouldRemoveFromOpenElements = !elementEntry || counterOverflow;
          if (shouldRemoveFromOpenElements) {
            if (counterOverflow) {
              p.activeFormattingElements.removeEntry(elementEntry);
            }
            p.openElements.remove(element);
          } else {
            element = aaRecreateElementFromEntry(p, elementEntry);
            if (lastElement === furthestBlock) {
              p.activeFormattingElements.bookmark = elementEntry;
            }
            p.treeAdapter.detachNode(lastElement);
            p.treeAdapter.appendChild(element, lastElement);
            lastElement = element;
          }
        }
        return lastElement;
      }
      function aaRecreateElementFromEntry(p, elementEntry) {
        const ns = p.treeAdapter.getNamespaceURI(elementEntry.element);
        const newElement = p.treeAdapter.createElement(elementEntry.token.tagName, ns, elementEntry.token.attrs);
        p.openElements.replace(elementEntry.element, newElement);
        elementEntry.element = newElement;
        return newElement;
      }
      function aaInsertLastNodeInCommonAncestor(p, commonAncestor, lastElement) {
        const tn = p.treeAdapter.getTagName(commonAncestor);
        const tid = (0, html_js_1.getTagID)(tn);
        if (p._isElementCausesFosterParenting(tid)) {
          p._fosterParentElement(lastElement);
        } else {
          const ns = p.treeAdapter.getNamespaceURI(commonAncestor);
          if (tid === html_js_1.TAG_ID.TEMPLATE && ns === html_js_1.NS.HTML) {
            commonAncestor = p.treeAdapter.getTemplateContent(commonAncestor);
          }
          p.treeAdapter.appendChild(commonAncestor, lastElement);
        }
      }
      function aaReplaceFormattingElement(p, furthestBlock, formattingElementEntry) {
        const ns = p.treeAdapter.getNamespaceURI(formattingElementEntry.element);
        const { token } = formattingElementEntry;
        const newElement = p.treeAdapter.createElement(token.tagName, ns, token.attrs);
        p._adoptNodes(furthestBlock, newElement);
        p.treeAdapter.appendChild(furthestBlock, newElement);
        p.activeFormattingElements.insertElementAfterBookmark(newElement, token);
        p.activeFormattingElements.removeEntry(formattingElementEntry);
        p.openElements.remove(formattingElementEntry.element);
        p.openElements.insertAfter(furthestBlock, newElement, token.tagID);
      }
      function callAdoptionAgency(p, token) {
        for (let i = 0; i < AA_OUTER_LOOP_ITER; i++) {
          const formattingElementEntry = aaObtainFormattingElementEntry(p, token);
          if (!formattingElementEntry) {
            break;
          }
          const furthestBlock = aaObtainFurthestBlock(p, formattingElementEntry);
          if (!furthestBlock) {
            break;
          }
          p.activeFormattingElements.bookmark = formattingElementEntry;
          const lastElement = aaInnerLoop(p, furthestBlock, formattingElementEntry.element);
          const commonAncestor = p.openElements.getCommonAncestor(formattingElementEntry.element);
          p.treeAdapter.detachNode(lastElement);
          if (commonAncestor)
            aaInsertLastNodeInCommonAncestor(p, commonAncestor, lastElement);
          aaReplaceFormattingElement(p, furthestBlock, formattingElementEntry);
        }
      }
      function appendComment(p, token) {
        p._appendCommentNode(token, p.openElements.currentTmplContentOrNode);
      }
      function appendCommentToRootHtmlElement(p, token) {
        p._appendCommentNode(token, p.openElements.items[0]);
      }
      function appendCommentToDocument(p, token) {
        p._appendCommentNode(token, p.document);
      }
      function stopParsing(p, token) {
        p.stopped = true;
        if (token.location) {
          const target = p.fragmentContext ? 0 : 2;
          for (let i = p.openElements.stackTop; i >= target; i--) {
            p._setEndLocation(p.openElements.items[i], token);
          }
          if (!p.fragmentContext && p.openElements.stackTop >= 0) {
            const htmlElement = p.openElements.items[0];
            const htmlLocation = p.treeAdapter.getNodeSourceCodeLocation(htmlElement);
            if (htmlLocation && !htmlLocation.endTag) {
              p._setEndLocation(htmlElement, token);
              if (p.openElements.stackTop >= 1) {
                const bodyElement = p.openElements.items[1];
                const bodyLocation = p.treeAdapter.getNodeSourceCodeLocation(bodyElement);
                if (bodyLocation && !bodyLocation.endTag) {
                  p._setEndLocation(bodyElement, token);
                }
              }
            }
          }
        }
      }
      function doctypeInInitialMode(p, token) {
        p._setDocumentType(token);
        const mode = token.forceQuirks ? html_js_1.DOCUMENT_MODE.QUIRKS : doctype.getDocumentMode(token);
        if (!doctype.isConforming(token)) {
          p._err(token, error_codes_js_1.ERR.nonConformingDoctype);
        }
        p.treeAdapter.setDocumentMode(p.document, mode);
        p.insertionMode = InsertionMode.BEFORE_HTML;
      }
      function tokenInInitialMode(p, token) {
        p._err(token, error_codes_js_1.ERR.missingDoctype, true);
        p.treeAdapter.setDocumentMode(p.document, html_js_1.DOCUMENT_MODE.QUIRKS);
        p.insertionMode = InsertionMode.BEFORE_HTML;
        p._processToken(token);
      }
      function startTagBeforeHtml(p, token) {
        if (token.tagID === html_js_1.TAG_ID.HTML) {
          p._insertElement(token, html_js_1.NS.HTML);
          p.insertionMode = InsertionMode.BEFORE_HEAD;
        } else {
          tokenBeforeHtml(p, token);
        }
      }
      function endTagBeforeHtml(p, token) {
        const tn = token.tagID;
        if (tn === html_js_1.TAG_ID.HTML || tn === html_js_1.TAG_ID.HEAD || tn === html_js_1.TAG_ID.BODY || tn === html_js_1.TAG_ID.BR) {
          tokenBeforeHtml(p, token);
        }
      }
      function tokenBeforeHtml(p, token) {
        p._insertFakeRootElement();
        p.insertionMode = InsertionMode.BEFORE_HEAD;
        p._processToken(token);
      }
      function startTagBeforeHead(p, token) {
        switch (token.tagID) {
          case html_js_1.TAG_ID.HTML: {
            startTagInBody(p, token);
            break;
          }
          case html_js_1.TAG_ID.HEAD: {
            p._insertElement(token, html_js_1.NS.HTML);
            p.headElement = p.openElements.current;
            p.insertionMode = InsertionMode.IN_HEAD;
            break;
          }
          default: {
            tokenBeforeHead(p, token);
          }
        }
      }
      function endTagBeforeHead(p, token) {
        const tn = token.tagID;
        if (tn === html_js_1.TAG_ID.HEAD || tn === html_js_1.TAG_ID.BODY || tn === html_js_1.TAG_ID.HTML || tn === html_js_1.TAG_ID.BR) {
          tokenBeforeHead(p, token);
        } else {
          p._err(token, error_codes_js_1.ERR.endTagWithoutMatchingOpenElement);
        }
      }
      function tokenBeforeHead(p, token) {
        p._insertFakeElement(html_js_1.TAG_NAMES.HEAD, html_js_1.TAG_ID.HEAD);
        p.headElement = p.openElements.current;
        p.insertionMode = InsertionMode.IN_HEAD;
        p._processToken(token);
      }
      function startTagInHead(p, token) {
        switch (token.tagID) {
          case html_js_1.TAG_ID.HTML: {
            startTagInBody(p, token);
            break;
          }
          case html_js_1.TAG_ID.BASE:
          case html_js_1.TAG_ID.BASEFONT:
          case html_js_1.TAG_ID.BGSOUND:
          case html_js_1.TAG_ID.LINK:
          case html_js_1.TAG_ID.META: {
            p._appendElement(token, html_js_1.NS.HTML);
            token.ackSelfClosing = true;
            break;
          }
          case html_js_1.TAG_ID.TITLE: {
            p._switchToTextParsing(token, index_js_1.TokenizerMode.RCDATA);
            break;
          }
          case html_js_1.TAG_ID.NOSCRIPT: {
            if (p.options.scriptingEnabled) {
              p._switchToTextParsing(token, index_js_1.TokenizerMode.RAWTEXT);
            } else {
              p._insertElement(token, html_js_1.NS.HTML);
              p.insertionMode = InsertionMode.IN_HEAD_NO_SCRIPT;
            }
            break;
          }
          case html_js_1.TAG_ID.NOFRAMES:
          case html_js_1.TAG_ID.STYLE: {
            p._switchToTextParsing(token, index_js_1.TokenizerMode.RAWTEXT);
            break;
          }
          case html_js_1.TAG_ID.SCRIPT: {
            p._switchToTextParsing(token, index_js_1.TokenizerMode.SCRIPT_DATA);
            break;
          }
          case html_js_1.TAG_ID.TEMPLATE: {
            p._insertTemplate(token);
            p.activeFormattingElements.insertMarker();
            p.framesetOk = false;
            p.insertionMode = InsertionMode.IN_TEMPLATE;
            p.tmplInsertionModeStack.unshift(InsertionMode.IN_TEMPLATE);
            break;
          }
          case html_js_1.TAG_ID.HEAD: {
            p._err(token, error_codes_js_1.ERR.misplacedStartTagForHeadElement);
            break;
          }
          default: {
            tokenInHead(p, token);
          }
        }
      }
      function endTagInHead(p, token) {
        switch (token.tagID) {
          case html_js_1.TAG_ID.HEAD: {
            p.openElements.pop();
            p.insertionMode = InsertionMode.AFTER_HEAD;
            break;
          }
          case html_js_1.TAG_ID.BODY:
          case html_js_1.TAG_ID.BR:
          case html_js_1.TAG_ID.HTML: {
            tokenInHead(p, token);
            break;
          }
          case html_js_1.TAG_ID.TEMPLATE: {
            templateEndTagInHead(p, token);
            break;
          }
          default: {
            p._err(token, error_codes_js_1.ERR.endTagWithoutMatchingOpenElement);
          }
        }
      }
      function templateEndTagInHead(p, token) {
        if (p.openElements.tmplCount > 0) {
          p.openElements.generateImpliedEndTagsThoroughly();
          if (p.openElements.currentTagId !== html_js_1.TAG_ID.TEMPLATE) {
            p._err(token, error_codes_js_1.ERR.closingOfElementWithOpenChildElements);
          }
          p.openElements.popUntilTagNamePopped(html_js_1.TAG_ID.TEMPLATE);
          p.activeFormattingElements.clearToLastMarker();
          p.tmplInsertionModeStack.shift();
          p._resetInsertionMode();
        } else {
          p._err(token, error_codes_js_1.ERR.endTagWithoutMatchingOpenElement);
        }
      }
      function tokenInHead(p, token) {
        p.openElements.pop();
        p.insertionMode = InsertionMode.AFTER_HEAD;
        p._processToken(token);
      }
      function startTagInHeadNoScript(p, token) {
        switch (token.tagID) {
          case html_js_1.TAG_ID.HTML: {
            startTagInBody(p, token);
            break;
          }
          case html_js_1.TAG_ID.BASEFONT:
          case html_js_1.TAG_ID.BGSOUND:
          case html_js_1.TAG_ID.HEAD:
          case html_js_1.TAG_ID.LINK:
          case html_js_1.TAG_ID.META:
          case html_js_1.TAG_ID.NOFRAMES:
          case html_js_1.TAG_ID.STYLE: {
            startTagInHead(p, token);
            break;
          }
          case html_js_1.TAG_ID.NOSCRIPT: {
            p._err(token, error_codes_js_1.ERR.nestedNoscriptInHead);
            break;
          }
          default: {
            tokenInHeadNoScript(p, token);
          }
        }
      }
      function endTagInHeadNoScript(p, token) {
        switch (token.tagID) {
          case html_js_1.TAG_ID.NOSCRIPT: {
            p.openElements.pop();
            p.insertionMode = InsertionMode.IN_HEAD;
            break;
          }
          case html_js_1.TAG_ID.BR: {
            tokenInHeadNoScript(p, token);
            break;
          }
          default: {
            p._err(token, error_codes_js_1.ERR.endTagWithoutMatchingOpenElement);
          }
        }
      }
      function tokenInHeadNoScript(p, token) {
        const errCode = token.type === token_js_1.TokenType.EOF ? error_codes_js_1.ERR.openElementsLeftAfterEof : error_codes_js_1.ERR.disallowedContentInNoscriptInHead;
        p._err(token, errCode);
        p.openElements.pop();
        p.insertionMode = InsertionMode.IN_HEAD;
        p._processToken(token);
      }
      function startTagAfterHead(p, token) {
        switch (token.tagID) {
          case html_js_1.TAG_ID.HTML: {
            startTagInBody(p, token);
            break;
          }
          case html_js_1.TAG_ID.BODY: {
            p._insertElement(token, html_js_1.NS.HTML);
            p.framesetOk = false;
            p.insertionMode = InsertionMode.IN_BODY;
            break;
          }
          case html_js_1.TAG_ID.FRAMESET: {
            p._insertElement(token, html_js_1.NS.HTML);
            p.insertionMode = InsertionMode.IN_FRAMESET;
            break;
          }
          case html_js_1.TAG_ID.BASE:
          case html_js_1.TAG_ID.BASEFONT:
          case html_js_1.TAG_ID.BGSOUND:
          case html_js_1.TAG_ID.LINK:
          case html_js_1.TAG_ID.META:
          case html_js_1.TAG_ID.NOFRAMES:
          case html_js_1.TAG_ID.SCRIPT:
          case html_js_1.TAG_ID.STYLE:
          case html_js_1.TAG_ID.TEMPLATE:
          case html_js_1.TAG_ID.TITLE: {
            p._err(token, error_codes_js_1.ERR.abandonedHeadElementChild);
            p.openElements.push(p.headElement, html_js_1.TAG_ID.HEAD);
            startTagInHead(p, token);
            p.openElements.remove(p.headElement);
            break;
          }
          case html_js_1.TAG_ID.HEAD: {
            p._err(token, error_codes_js_1.ERR.misplacedStartTagForHeadElement);
            break;
          }
          default: {
            tokenAfterHead(p, token);
          }
        }
      }
      function endTagAfterHead(p, token) {
        switch (token.tagID) {
          case html_js_1.TAG_ID.BODY:
          case html_js_1.TAG_ID.HTML:
          case html_js_1.TAG_ID.BR: {
            tokenAfterHead(p, token);
            break;
          }
          case html_js_1.TAG_ID.TEMPLATE: {
            templateEndTagInHead(p, token);
            break;
          }
          default: {
            p._err(token, error_codes_js_1.ERR.endTagWithoutMatchingOpenElement);
          }
        }
      }
      function tokenAfterHead(p, token) {
        p._insertFakeElement(html_js_1.TAG_NAMES.BODY, html_js_1.TAG_ID.BODY);
        p.insertionMode = InsertionMode.IN_BODY;
        modeInBody(p, token);
      }
      function modeInBody(p, token) {
        switch (token.type) {
          case token_js_1.TokenType.CHARACTER: {
            characterInBody(p, token);
            break;
          }
          case token_js_1.TokenType.WHITESPACE_CHARACTER: {
            whitespaceCharacterInBody(p, token);
            break;
          }
          case token_js_1.TokenType.COMMENT: {
            appendComment(p, token);
            break;
          }
          case token_js_1.TokenType.START_TAG: {
            startTagInBody(p, token);
            break;
          }
          case token_js_1.TokenType.END_TAG: {
            endTagInBody(p, token);
            break;
          }
          case token_js_1.TokenType.EOF: {
            eofInBody(p, token);
            break;
          }
          default:
        }
      }
      function whitespaceCharacterInBody(p, token) {
        p._reconstructActiveFormattingElements();
        p._insertCharacters(token);
      }
      function characterInBody(p, token) {
        p._reconstructActiveFormattingElements();
        p._insertCharacters(token);
        p.framesetOk = false;
      }
      function htmlStartTagInBody(p, token) {
        if (p.openElements.tmplCount === 0) {
          p.treeAdapter.adoptAttributes(p.openElements.items[0], token.attrs);
        }
      }
      function bodyStartTagInBody(p, token) {
        const bodyElement = p.openElements.tryPeekProperlyNestedBodyElement();
        if (bodyElement && p.openElements.tmplCount === 0) {
          p.framesetOk = false;
          p.treeAdapter.adoptAttributes(bodyElement, token.attrs);
        }
      }
      function framesetStartTagInBody(p, token) {
        const bodyElement = p.openElements.tryPeekProperlyNestedBodyElement();
        if (p.framesetOk && bodyElement) {
          p.treeAdapter.detachNode(bodyElement);
          p.openElements.popAllUpToHtmlElement();
          p._insertElement(token, html_js_1.NS.HTML);
          p.insertionMode = InsertionMode.IN_FRAMESET;
        }
      }
      function addressStartTagInBody(p, token) {
        if (p.openElements.hasInButtonScope(html_js_1.TAG_ID.P)) {
          p._closePElement();
        }
        p._insertElement(token, html_js_1.NS.HTML);
      }
      function numberedHeaderStartTagInBody(p, token) {
        if (p.openElements.hasInButtonScope(html_js_1.TAG_ID.P)) {
          p._closePElement();
        }
        if ((0, html_js_1.isNumberedHeader)(p.openElements.currentTagId)) {
          p.openElements.pop();
        }
        p._insertElement(token, html_js_1.NS.HTML);
      }
      function preStartTagInBody(p, token) {
        if (p.openElements.hasInButtonScope(html_js_1.TAG_ID.P)) {
          p._closePElement();
        }
        p._insertElement(token, html_js_1.NS.HTML);
        p.skipNextNewLine = true;
        p.framesetOk = false;
      }
      function formStartTagInBody(p, token) {
        const inTemplate = p.openElements.tmplCount > 0;
        if (!p.formElement || inTemplate) {
          if (p.openElements.hasInButtonScope(html_js_1.TAG_ID.P)) {
            p._closePElement();
          }
          p._insertElement(token, html_js_1.NS.HTML);
          if (!inTemplate) {
            p.formElement = p.openElements.current;
          }
        }
      }
      function listItemStartTagInBody(p, token) {
        p.framesetOk = false;
        const tn = token.tagID;
        for (let i = p.openElements.stackTop; i >= 0; i--) {
          const elementId = p.openElements.tagIDs[i];
          if (tn === html_js_1.TAG_ID.LI && elementId === html_js_1.TAG_ID.LI || (tn === html_js_1.TAG_ID.DD || tn === html_js_1.TAG_ID.DT) && (elementId === html_js_1.TAG_ID.DD || elementId === html_js_1.TAG_ID.DT)) {
            p.openElements.generateImpliedEndTagsWithExclusion(elementId);
            p.openElements.popUntilTagNamePopped(elementId);
            break;
          }
          if (elementId !== html_js_1.TAG_ID.ADDRESS && elementId !== html_js_1.TAG_ID.DIV && elementId !== html_js_1.TAG_ID.P && p._isSpecialElement(p.openElements.items[i], elementId)) {
            break;
          }
        }
        if (p.openElements.hasInButtonScope(html_js_1.TAG_ID.P)) {
          p._closePElement();
        }
        p._insertElement(token, html_js_1.NS.HTML);
      }
      function plaintextStartTagInBody(p, token) {
        if (p.openElements.hasInButtonScope(html_js_1.TAG_ID.P)) {
          p._closePElement();
        }
        p._insertElement(token, html_js_1.NS.HTML);
        p.tokenizer.state = index_js_1.TokenizerMode.PLAINTEXT;
      }
      function buttonStartTagInBody(p, token) {
        if (p.openElements.hasInScope(html_js_1.TAG_ID.BUTTON)) {
          p.openElements.generateImpliedEndTags();
          p.openElements.popUntilTagNamePopped(html_js_1.TAG_ID.BUTTON);
        }
        p._reconstructActiveFormattingElements();
        p._insertElement(token, html_js_1.NS.HTML);
        p.framesetOk = false;
      }
      function aStartTagInBody(p, token) {
        const activeElementEntry = p.activeFormattingElements.getElementEntryInScopeWithTagName(html_js_1.TAG_NAMES.A);
        if (activeElementEntry) {
          callAdoptionAgency(p, token);
          p.openElements.remove(activeElementEntry.element);
          p.activeFormattingElements.removeEntry(activeElementEntry);
        }
        p._reconstructActiveFormattingElements();
        p._insertElement(token, html_js_1.NS.HTML);
        p.activeFormattingElements.pushElement(p.openElements.current, token);
      }
      function bStartTagInBody(p, token) {
        p._reconstructActiveFormattingElements();
        p._insertElement(token, html_js_1.NS.HTML);
        p.activeFormattingElements.pushElement(p.openElements.current, token);
      }
      function nobrStartTagInBody(p, token) {
        p._reconstructActiveFormattingElements();
        if (p.openElements.hasInScope(html_js_1.TAG_ID.NOBR)) {
          callAdoptionAgency(p, token);
          p._reconstructActiveFormattingElements();
        }
        p._insertElement(token, html_js_1.NS.HTML);
        p.activeFormattingElements.pushElement(p.openElements.current, token);
      }
      function appletStartTagInBody(p, token) {
        p._reconstructActiveFormattingElements();
        p._insertElement(token, html_js_1.NS.HTML);
        p.activeFormattingElements.insertMarker();
        p.framesetOk = false;
      }
      function tableStartTagInBody(p, token) {
        if (p.treeAdapter.getDocumentMode(p.document) !== html_js_1.DOCUMENT_MODE.QUIRKS && p.openElements.hasInButtonScope(html_js_1.TAG_ID.P)) {
          p._closePElement();
        }
        p._insertElement(token, html_js_1.NS.HTML);
        p.framesetOk = false;
        p.insertionMode = InsertionMode.IN_TABLE;
      }
      function areaStartTagInBody(p, token) {
        p._reconstructActiveFormattingElements();
        p._appendElement(token, html_js_1.NS.HTML);
        p.framesetOk = false;
        token.ackSelfClosing = true;
      }
      function isHiddenInput(token) {
        const inputType = (0, token_js_1.getTokenAttr)(token, html_js_1.ATTRS.TYPE);
        return inputType != null && inputType.toLowerCase() === HIDDEN_INPUT_TYPE;
      }
      function inputStartTagInBody(p, token) {
        p._reconstructActiveFormattingElements();
        p._appendElement(token, html_js_1.NS.HTML);
        if (!isHiddenInput(token)) {
          p.framesetOk = false;
        }
        token.ackSelfClosing = true;
      }
      function paramStartTagInBody(p, token) {
        p._appendElement(token, html_js_1.NS.HTML);
        token.ackSelfClosing = true;
      }
      function hrStartTagInBody(p, token) {
        if (p.openElements.hasInButtonScope(html_js_1.TAG_ID.P)) {
          p._closePElement();
        }
        p._appendElement(token, html_js_1.NS.HTML);
        p.framesetOk = false;
        token.ackSelfClosing = true;
      }
      function imageStartTagInBody(p, token) {
        token.tagName = html_js_1.TAG_NAMES.IMG;
        token.tagID = html_js_1.TAG_ID.IMG;
        areaStartTagInBody(p, token);
      }
      function textareaStartTagInBody(p, token) {
        p._insertElement(token, html_js_1.NS.HTML);
        p.skipNextNewLine = true;
        p.tokenizer.state = index_js_1.TokenizerMode.RCDATA;
        p.originalInsertionMode = p.insertionMode;
        p.framesetOk = false;
        p.insertionMode = InsertionMode.TEXT;
      }
      function xmpStartTagInBody(p, token) {
        if (p.openElements.hasInButtonScope(html_js_1.TAG_ID.P)) {
          p._closePElement();
        }
        p._reconstructActiveFormattingElements();
        p.framesetOk = false;
        p._switchToTextParsing(token, index_js_1.TokenizerMode.RAWTEXT);
      }
      function iframeStartTagInBody(p, token) {
        p.framesetOk = false;
        p._switchToTextParsing(token, index_js_1.TokenizerMode.RAWTEXT);
      }
      function noembedStartTagInBody(p, token) {
        p._switchToTextParsing(token, index_js_1.TokenizerMode.RAWTEXT);
      }
      function selectStartTagInBody(p, token) {
        p._reconstructActiveFormattingElements();
        p._insertElement(token, html_js_1.NS.HTML);
        p.framesetOk = false;
        p.insertionMode = p.insertionMode === InsertionMode.IN_TABLE || p.insertionMode === InsertionMode.IN_CAPTION || p.insertionMode === InsertionMode.IN_TABLE_BODY || p.insertionMode === InsertionMode.IN_ROW || p.insertionMode === InsertionMode.IN_CELL ? InsertionMode.IN_SELECT_IN_TABLE : InsertionMode.IN_SELECT;
      }
      function optgroupStartTagInBody(p, token) {
        if (p.openElements.currentTagId === html_js_1.TAG_ID.OPTION) {
          p.openElements.pop();
        }
        p._reconstructActiveFormattingElements();
        p._insertElement(token, html_js_1.NS.HTML);
      }
      function rbStartTagInBody(p, token) {
        if (p.openElements.hasInScope(html_js_1.TAG_ID.RUBY)) {
          p.openElements.generateImpliedEndTags();
        }
        p._insertElement(token, html_js_1.NS.HTML);
      }
      function rtStartTagInBody(p, token) {
        if (p.openElements.hasInScope(html_js_1.TAG_ID.RUBY)) {
          p.openElements.generateImpliedEndTagsWithExclusion(html_js_1.TAG_ID.RTC);
        }
        p._insertElement(token, html_js_1.NS.HTML);
      }
      function mathStartTagInBody(p, token) {
        p._reconstructActiveFormattingElements();
        foreignContent.adjustTokenMathMLAttrs(token);
        foreignContent.adjustTokenXMLAttrs(token);
        if (token.selfClosing) {
          p._appendElement(token, html_js_1.NS.MATHML);
        } else {
          p._insertElement(token, html_js_1.NS.MATHML);
        }
        token.ackSelfClosing = true;
      }
      function svgStartTagInBody(p, token) {
        p._reconstructActiveFormattingElements();
        foreignContent.adjustTokenSVGAttrs(token);
        foreignContent.adjustTokenXMLAttrs(token);
        if (token.selfClosing) {
          p._appendElement(token, html_js_1.NS.SVG);
        } else {
          p._insertElement(token, html_js_1.NS.SVG);
        }
        token.ackSelfClosing = true;
      }
      function genericStartTagInBody(p, token) {
        p._reconstructActiveFormattingElements();
        p._insertElement(token, html_js_1.NS.HTML);
      }
      function startTagInBody(p, token) {
        switch (token.tagID) {
          case html_js_1.TAG_ID.I:
          case html_js_1.TAG_ID.S:
          case html_js_1.TAG_ID.B:
          case html_js_1.TAG_ID.U:
          case html_js_1.TAG_ID.EM:
          case html_js_1.TAG_ID.TT:
          case html_js_1.TAG_ID.BIG:
          case html_js_1.TAG_ID.CODE:
          case html_js_1.TAG_ID.FONT:
          case html_js_1.TAG_ID.SMALL:
          case html_js_1.TAG_ID.STRIKE:
          case html_js_1.TAG_ID.STRONG: {
            bStartTagInBody(p, token);
            break;
          }
          case html_js_1.TAG_ID.A: {
            aStartTagInBody(p, token);
            break;
          }
          case html_js_1.TAG_ID.H1:
          case html_js_1.TAG_ID.H2:
          case html_js_1.TAG_ID.H3:
          case html_js_1.TAG_ID.H4:
          case html_js_1.TAG_ID.H5:
          case html_js_1.TAG_ID.H6: {
            numberedHeaderStartTagInBody(p, token);
            break;
          }
          case html_js_1.TAG_ID.P:
          case html_js_1.TAG_ID.DL:
          case html_js_1.TAG_ID.OL:
          case html_js_1.TAG_ID.UL:
          case html_js_1.TAG_ID.DIV:
          case html_js_1.TAG_ID.DIR:
          case html_js_1.TAG_ID.NAV:
          case html_js_1.TAG_ID.MAIN:
          case html_js_1.TAG_ID.MENU:
          case html_js_1.TAG_ID.ASIDE:
          case html_js_1.TAG_ID.CENTER:
          case html_js_1.TAG_ID.FIGURE:
          case html_js_1.TAG_ID.FOOTER:
          case html_js_1.TAG_ID.HEADER:
          case html_js_1.TAG_ID.HGROUP:
          case html_js_1.TAG_ID.DIALOG:
          case html_js_1.TAG_ID.DETAILS:
          case html_js_1.TAG_ID.ADDRESS:
          case html_js_1.TAG_ID.ARTICLE:
          case html_js_1.TAG_ID.SECTION:
          case html_js_1.TAG_ID.SUMMARY:
          case html_js_1.TAG_ID.FIELDSET:
          case html_js_1.TAG_ID.BLOCKQUOTE:
          case html_js_1.TAG_ID.FIGCAPTION: {
            addressStartTagInBody(p, token);
            break;
          }
          case html_js_1.TAG_ID.LI:
          case html_js_1.TAG_ID.DD:
          case html_js_1.TAG_ID.DT: {
            listItemStartTagInBody(p, token);
            break;
          }
          case html_js_1.TAG_ID.BR:
          case html_js_1.TAG_ID.IMG:
          case html_js_1.TAG_ID.WBR:
          case html_js_1.TAG_ID.AREA:
          case html_js_1.TAG_ID.EMBED:
          case html_js_1.TAG_ID.KEYGEN: {
            areaStartTagInBody(p, token);
            break;
          }
          case html_js_1.TAG_ID.HR: {
            hrStartTagInBody(p, token);
            break;
          }
          case html_js_1.TAG_ID.RB:
          case html_js_1.TAG_ID.RTC: {
            rbStartTagInBody(p, token);
            break;
          }
          case html_js_1.TAG_ID.RT:
          case html_js_1.TAG_ID.RP: {
            rtStartTagInBody(p, token);
            break;
          }
          case html_js_1.TAG_ID.PRE:
          case html_js_1.TAG_ID.LISTING: {
            preStartTagInBody(p, token);
            break;
          }
          case html_js_1.TAG_ID.XMP: {
            xmpStartTagInBody(p, token);
            break;
          }
          case html_js_1.TAG_ID.SVG: {
            svgStartTagInBody(p, token);
            break;
          }
          case html_js_1.TAG_ID.HTML: {
            htmlStartTagInBody(p, token);
            break;
          }
          case html_js_1.TAG_ID.BASE:
          case html_js_1.TAG_ID.LINK:
          case html_js_1.TAG_ID.META:
          case html_js_1.TAG_ID.STYLE:
          case html_js_1.TAG_ID.TITLE:
          case html_js_1.TAG_ID.SCRIPT:
          case html_js_1.TAG_ID.BGSOUND:
          case html_js_1.TAG_ID.BASEFONT:
          case html_js_1.TAG_ID.TEMPLATE: {
            startTagInHead(p, token);
            break;
          }
          case html_js_1.TAG_ID.BODY: {
            bodyStartTagInBody(p, token);
            break;
          }
          case html_js_1.TAG_ID.FORM: {
            formStartTagInBody(p, token);
            break;
          }
          case html_js_1.TAG_ID.NOBR: {
            nobrStartTagInBody(p, token);
            break;
          }
          case html_js_1.TAG_ID.MATH: {
            mathStartTagInBody(p, token);
            break;
          }
          case html_js_1.TAG_ID.TABLE: {
            tableStartTagInBody(p, token);
            break;
          }
          case html_js_1.TAG_ID.INPUT: {
            inputStartTagInBody(p, token);
            break;
          }
          case html_js_1.TAG_ID.PARAM:
          case html_js_1.TAG_ID.TRACK:
          case html_js_1.TAG_ID.SOURCE: {
            paramStartTagInBody(p, token);
            break;
          }
          case html_js_1.TAG_ID.IMAGE: {
            imageStartTagInBody(p, token);
            break;
          }
          case html_js_1.TAG_ID.BUTTON: {
            buttonStartTagInBody(p, token);
            break;
          }
          case html_js_1.TAG_ID.APPLET:
          case html_js_1.TAG_ID.OBJECT:
          case html_js_1.TAG_ID.MARQUEE: {
            appletStartTagInBody(p, token);
            break;
          }
          case html_js_1.TAG_ID.IFRAME: {
            iframeStartTagInBody(p, token);
            break;
          }
          case html_js_1.TAG_ID.SELECT: {
            selectStartTagInBody(p, token);
            break;
          }
          case html_js_1.TAG_ID.OPTION:
          case html_js_1.TAG_ID.OPTGROUP: {
            optgroupStartTagInBody(p, token);
            break;
          }
          case html_js_1.TAG_ID.NOEMBED: {
            noembedStartTagInBody(p, token);
            break;
          }
          case html_js_1.TAG_ID.FRAMESET: {
            framesetStartTagInBody(p, token);
            break;
          }
          case html_js_1.TAG_ID.TEXTAREA: {
            textareaStartTagInBody(p, token);
            break;
          }
          case html_js_1.TAG_ID.NOSCRIPT: {
            if (p.options.scriptingEnabled) {
              noembedStartTagInBody(p, token);
            } else {
              genericStartTagInBody(p, token);
            }
            break;
          }
          case html_js_1.TAG_ID.PLAINTEXT: {
            plaintextStartTagInBody(p, token);
            break;
          }
          case html_js_1.TAG_ID.COL:
          case html_js_1.TAG_ID.TH:
          case html_js_1.TAG_ID.TD:
          case html_js_1.TAG_ID.TR:
          case html_js_1.TAG_ID.HEAD:
          case html_js_1.TAG_ID.FRAME:
          case html_js_1.TAG_ID.TBODY:
          case html_js_1.TAG_ID.TFOOT:
          case html_js_1.TAG_ID.THEAD:
          case html_js_1.TAG_ID.CAPTION:
          case html_js_1.TAG_ID.COLGROUP: {
            break;
          }
          default: {
            genericStartTagInBody(p, token);
          }
        }
      }
      function bodyEndTagInBody(p, token) {
        if (p.openElements.hasInScope(html_js_1.TAG_ID.BODY)) {
          p.insertionMode = InsertionMode.AFTER_BODY;
          if (p.options.sourceCodeLocationInfo) {
            const bodyElement = p.openElements.tryPeekProperlyNestedBodyElement();
            if (bodyElement) {
              p._setEndLocation(bodyElement, token);
            }
          }
        }
      }
      function htmlEndTagInBody(p, token) {
        if (p.openElements.hasInScope(html_js_1.TAG_ID.BODY)) {
          p.insertionMode = InsertionMode.AFTER_BODY;
          endTagAfterBody(p, token);
        }
      }
      function addressEndTagInBody(p, token) {
        const tn = token.tagID;
        if (p.openElements.hasInScope(tn)) {
          p.openElements.generateImpliedEndTags();
          p.openElements.popUntilTagNamePopped(tn);
        }
      }
      function formEndTagInBody(p) {
        const inTemplate = p.openElements.tmplCount > 0;
        const { formElement } = p;
        if (!inTemplate) {
          p.formElement = null;
        }
        if ((formElement || inTemplate) && p.openElements.hasInScope(html_js_1.TAG_ID.FORM)) {
          p.openElements.generateImpliedEndTags();
          if (inTemplate) {
            p.openElements.popUntilTagNamePopped(html_js_1.TAG_ID.FORM);
          } else if (formElement) {
            p.openElements.remove(formElement);
          }
        }
      }
      function pEndTagInBody(p) {
        if (!p.openElements.hasInButtonScope(html_js_1.TAG_ID.P)) {
          p._insertFakeElement(html_js_1.TAG_NAMES.P, html_js_1.TAG_ID.P);
        }
        p._closePElement();
      }
      function liEndTagInBody(p) {
        if (p.openElements.hasInListItemScope(html_js_1.TAG_ID.LI)) {
          p.openElements.generateImpliedEndTagsWithExclusion(html_js_1.TAG_ID.LI);
          p.openElements.popUntilTagNamePopped(html_js_1.TAG_ID.LI);
        }
      }
      function ddEndTagInBody(p, token) {
        const tn = token.tagID;
        if (p.openElements.hasInScope(tn)) {
          p.openElements.generateImpliedEndTagsWithExclusion(tn);
          p.openElements.popUntilTagNamePopped(tn);
        }
      }
      function numberedHeaderEndTagInBody(p) {
        if (p.openElements.hasNumberedHeaderInScope()) {
          p.openElements.generateImpliedEndTags();
          p.openElements.popUntilNumberedHeaderPopped();
        }
      }
      function appletEndTagInBody(p, token) {
        const tn = token.tagID;
        if (p.openElements.hasInScope(tn)) {
          p.openElements.generateImpliedEndTags();
          p.openElements.popUntilTagNamePopped(tn);
          p.activeFormattingElements.clearToLastMarker();
        }
      }
      function brEndTagInBody(p) {
        p._reconstructActiveFormattingElements();
        p._insertFakeElement(html_js_1.TAG_NAMES.BR, html_js_1.TAG_ID.BR);
        p.openElements.pop();
        p.framesetOk = false;
      }
      function genericEndTagInBody(p, token) {
        const tn = token.tagName;
        const tid = token.tagID;
        for (let i = p.openElements.stackTop; i > 0; i--) {
          const element = p.openElements.items[i];
          const elementId = p.openElements.tagIDs[i];
          if (tid === elementId && (tid !== html_js_1.TAG_ID.UNKNOWN || p.treeAdapter.getTagName(element) === tn)) {
            p.openElements.generateImpliedEndTagsWithExclusion(tid);
            if (p.openElements.stackTop >= i)
              p.openElements.shortenToLength(i);
            break;
          }
          if (p._isSpecialElement(element, elementId)) {
            break;
          }
        }
      }
      function endTagInBody(p, token) {
        switch (token.tagID) {
          case html_js_1.TAG_ID.A:
          case html_js_1.TAG_ID.B:
          case html_js_1.TAG_ID.I:
          case html_js_1.TAG_ID.S:
          case html_js_1.TAG_ID.U:
          case html_js_1.TAG_ID.EM:
          case html_js_1.TAG_ID.TT:
          case html_js_1.TAG_ID.BIG:
          case html_js_1.TAG_ID.CODE:
          case html_js_1.TAG_ID.FONT:
          case html_js_1.TAG_ID.NOBR:
          case html_js_1.TAG_ID.SMALL:
          case html_js_1.TAG_ID.STRIKE:
          case html_js_1.TAG_ID.STRONG: {
            callAdoptionAgency(p, token);
            break;
          }
          case html_js_1.TAG_ID.P: {
            pEndTagInBody(p);
            break;
          }
          case html_js_1.TAG_ID.DL:
          case html_js_1.TAG_ID.UL:
          case html_js_1.TAG_ID.OL:
          case html_js_1.TAG_ID.DIR:
          case html_js_1.TAG_ID.DIV:
          case html_js_1.TAG_ID.NAV:
          case html_js_1.TAG_ID.PRE:
          case html_js_1.TAG_ID.MAIN:
          case html_js_1.TAG_ID.MENU:
          case html_js_1.TAG_ID.ASIDE:
          case html_js_1.TAG_ID.BUTTON:
          case html_js_1.TAG_ID.CENTER:
          case html_js_1.TAG_ID.FIGURE:
          case html_js_1.TAG_ID.FOOTER:
          case html_js_1.TAG_ID.HEADER:
          case html_js_1.TAG_ID.HGROUP:
          case html_js_1.TAG_ID.DIALOG:
          case html_js_1.TAG_ID.ADDRESS:
          case html_js_1.TAG_ID.ARTICLE:
          case html_js_1.TAG_ID.DETAILS:
          case html_js_1.TAG_ID.SECTION:
          case html_js_1.TAG_ID.SUMMARY:
          case html_js_1.TAG_ID.LISTING:
          case html_js_1.TAG_ID.FIELDSET:
          case html_js_1.TAG_ID.BLOCKQUOTE:
          case html_js_1.TAG_ID.FIGCAPTION: {
            addressEndTagInBody(p, token);
            break;
          }
          case html_js_1.TAG_ID.LI: {
            liEndTagInBody(p);
            break;
          }
          case html_js_1.TAG_ID.DD:
          case html_js_1.TAG_ID.DT: {
            ddEndTagInBody(p, token);
            break;
          }
          case html_js_1.TAG_ID.H1:
          case html_js_1.TAG_ID.H2:
          case html_js_1.TAG_ID.H3:
          case html_js_1.TAG_ID.H4:
          case html_js_1.TAG_ID.H5:
          case html_js_1.TAG_ID.H6: {
            numberedHeaderEndTagInBody(p);
            break;
          }
          case html_js_1.TAG_ID.BR: {
            brEndTagInBody(p);
            break;
          }
          case html_js_1.TAG_ID.BODY: {
            bodyEndTagInBody(p, token);
            break;
          }
          case html_js_1.TAG_ID.HTML: {
            htmlEndTagInBody(p, token);
            break;
          }
          case html_js_1.TAG_ID.FORM: {
            formEndTagInBody(p);
            break;
          }
          case html_js_1.TAG_ID.APPLET:
          case html_js_1.TAG_ID.OBJECT:
          case html_js_1.TAG_ID.MARQUEE: {
            appletEndTagInBody(p, token);
            break;
          }
          case html_js_1.TAG_ID.TEMPLATE: {
            templateEndTagInHead(p, token);
            break;
          }
          default: {
            genericEndTagInBody(p, token);
          }
        }
      }
      function eofInBody(p, token) {
        if (p.tmplInsertionModeStack.length > 0) {
          eofInTemplate(p, token);
        } else {
          stopParsing(p, token);
        }
      }
      function endTagInText(p, token) {
        var _a;
        if (token.tagID === html_js_1.TAG_ID.SCRIPT) {
          (_a = p.scriptHandler) === null || _a === void 0 ? void 0 : _a.call(p, p.openElements.current);
        }
        p.openElements.pop();
        p.insertionMode = p.originalInsertionMode;
      }
      function eofInText(p, token) {
        p._err(token, error_codes_js_1.ERR.eofInElementThatCanContainOnlyText);
        p.openElements.pop();
        p.insertionMode = p.originalInsertionMode;
        p.onEof(token);
      }
      function characterInTable(p, token) {
        if (TABLE_STRUCTURE_TAGS.has(p.openElements.currentTagId)) {
          p.pendingCharacterTokens.length = 0;
          p.hasNonWhitespacePendingCharacterToken = false;
          p.originalInsertionMode = p.insertionMode;
          p.insertionMode = InsertionMode.IN_TABLE_TEXT;
          switch (token.type) {
            case token_js_1.TokenType.CHARACTER: {
              characterInTableText(p, token);
              break;
            }
            case token_js_1.TokenType.WHITESPACE_CHARACTER: {
              whitespaceCharacterInTableText(p, token);
              break;
            }
          }
        } else {
          tokenInTable(p, token);
        }
      }
      function captionStartTagInTable(p, token) {
        p.openElements.clearBackToTableContext();
        p.activeFormattingElements.insertMarker();
        p._insertElement(token, html_js_1.NS.HTML);
        p.insertionMode = InsertionMode.IN_CAPTION;
      }
      function colgroupStartTagInTable(p, token) {
        p.openElements.clearBackToTableContext();
        p._insertElement(token, html_js_1.NS.HTML);
        p.insertionMode = InsertionMode.IN_COLUMN_GROUP;
      }
      function colStartTagInTable(p, token) {
        p.openElements.clearBackToTableContext();
        p._insertFakeElement(html_js_1.TAG_NAMES.COLGROUP, html_js_1.TAG_ID.COLGROUP);
        p.insertionMode = InsertionMode.IN_COLUMN_GROUP;
        startTagInColumnGroup(p, token);
      }
      function tbodyStartTagInTable(p, token) {
        p.openElements.clearBackToTableContext();
        p._insertElement(token, html_js_1.NS.HTML);
        p.insertionMode = InsertionMode.IN_TABLE_BODY;
      }
      function tdStartTagInTable(p, token) {
        p.openElements.clearBackToTableContext();
        p._insertFakeElement(html_js_1.TAG_NAMES.TBODY, html_js_1.TAG_ID.TBODY);
        p.insertionMode = InsertionMode.IN_TABLE_BODY;
        startTagInTableBody(p, token);
      }
      function tableStartTagInTable(p, token) {
        if (p.openElements.hasInTableScope(html_js_1.TAG_ID.TABLE)) {
          p.openElements.popUntilTagNamePopped(html_js_1.TAG_ID.TABLE);
          p._resetInsertionMode();
          p._processStartTag(token);
        }
      }
      function inputStartTagInTable(p, token) {
        if (isHiddenInput(token)) {
          p._appendElement(token, html_js_1.NS.HTML);
        } else {
          tokenInTable(p, token);
        }
        token.ackSelfClosing = true;
      }
      function formStartTagInTable(p, token) {
        if (!p.formElement && p.openElements.tmplCount === 0) {
          p._insertElement(token, html_js_1.NS.HTML);
          p.formElement = p.openElements.current;
          p.openElements.pop();
        }
      }
      function startTagInTable(p, token) {
        switch (token.tagID) {
          case html_js_1.TAG_ID.TD:
          case html_js_1.TAG_ID.TH:
          case html_js_1.TAG_ID.TR: {
            tdStartTagInTable(p, token);
            break;
          }
          case html_js_1.TAG_ID.STYLE:
          case html_js_1.TAG_ID.SCRIPT:
          case html_js_1.TAG_ID.TEMPLATE: {
            startTagInHead(p, token);
            break;
          }
          case html_js_1.TAG_ID.COL: {
            colStartTagInTable(p, token);
            break;
          }
          case html_js_1.TAG_ID.FORM: {
            formStartTagInTable(p, token);
            break;
          }
          case html_js_1.TAG_ID.TABLE: {
            tableStartTagInTable(p, token);
            break;
          }
          case html_js_1.TAG_ID.TBODY:
          case html_js_1.TAG_ID.TFOOT:
          case html_js_1.TAG_ID.THEAD: {
            tbodyStartTagInTable(p, token);
            break;
          }
          case html_js_1.TAG_ID.INPUT: {
            inputStartTagInTable(p, token);
            break;
          }
          case html_js_1.TAG_ID.CAPTION: {
            captionStartTagInTable(p, token);
            break;
          }
          case html_js_1.TAG_ID.COLGROUP: {
            colgroupStartTagInTable(p, token);
            break;
          }
          default: {
            tokenInTable(p, token);
          }
        }
      }
      function endTagInTable(p, token) {
        switch (token.tagID) {
          case html_js_1.TAG_ID.TABLE: {
            if (p.openElements.hasInTableScope(html_js_1.TAG_ID.TABLE)) {
              p.openElements.popUntilTagNamePopped(html_js_1.TAG_ID.TABLE);
              p._resetInsertionMode();
            }
            break;
          }
          case html_js_1.TAG_ID.TEMPLATE: {
            templateEndTagInHead(p, token);
            break;
          }
          case html_js_1.TAG_ID.BODY:
          case html_js_1.TAG_ID.CAPTION:
          case html_js_1.TAG_ID.COL:
          case html_js_1.TAG_ID.COLGROUP:
          case html_js_1.TAG_ID.HTML:
          case html_js_1.TAG_ID.TBODY:
          case html_js_1.TAG_ID.TD:
          case html_js_1.TAG_ID.TFOOT:
          case html_js_1.TAG_ID.TH:
          case html_js_1.TAG_ID.THEAD:
          case html_js_1.TAG_ID.TR: {
            break;
          }
          default: {
            tokenInTable(p, token);
          }
        }
      }
      function tokenInTable(p, token) {
        const savedFosterParentingState = p.fosterParentingEnabled;
        p.fosterParentingEnabled = true;
        modeInBody(p, token);
        p.fosterParentingEnabled = savedFosterParentingState;
      }
      function whitespaceCharacterInTableText(p, token) {
        p.pendingCharacterTokens.push(token);
      }
      function characterInTableText(p, token) {
        p.pendingCharacterTokens.push(token);
        p.hasNonWhitespacePendingCharacterToken = true;
      }
      function tokenInTableText(p, token) {
        let i = 0;
        if (p.hasNonWhitespacePendingCharacterToken) {
          for (; i < p.pendingCharacterTokens.length; i++) {
            tokenInTable(p, p.pendingCharacterTokens[i]);
          }
        } else {
          for (; i < p.pendingCharacterTokens.length; i++) {
            p._insertCharacters(p.pendingCharacterTokens[i]);
          }
        }
        p.insertionMode = p.originalInsertionMode;
        p._processToken(token);
      }
      var TABLE_VOID_ELEMENTS = /* @__PURE__ */ new Set([html_js_1.TAG_ID.CAPTION, html_js_1.TAG_ID.COL, html_js_1.TAG_ID.COLGROUP, html_js_1.TAG_ID.TBODY, html_js_1.TAG_ID.TD, html_js_1.TAG_ID.TFOOT, html_js_1.TAG_ID.TH, html_js_1.TAG_ID.THEAD, html_js_1.TAG_ID.TR]);
      function startTagInCaption(p, token) {
        const tn = token.tagID;
        if (TABLE_VOID_ELEMENTS.has(tn)) {
          if (p.openElements.hasInTableScope(html_js_1.TAG_ID.CAPTION)) {
            p.openElements.generateImpliedEndTags();
            p.openElements.popUntilTagNamePopped(html_js_1.TAG_ID.CAPTION);
            p.activeFormattingElements.clearToLastMarker();
            p.insertionMode = InsertionMode.IN_TABLE;
            startTagInTable(p, token);
          }
        } else {
          startTagInBody(p, token);
        }
      }
      function endTagInCaption(p, token) {
        const tn = token.tagID;
        switch (tn) {
          case html_js_1.TAG_ID.CAPTION:
          case html_js_1.TAG_ID.TABLE: {
            if (p.openElements.hasInTableScope(html_js_1.TAG_ID.CAPTION)) {
              p.openElements.generateImpliedEndTags();
              p.openElements.popUntilTagNamePopped(html_js_1.TAG_ID.CAPTION);
              p.activeFormattingElements.clearToLastMarker();
              p.insertionMode = InsertionMode.IN_TABLE;
              if (tn === html_js_1.TAG_ID.TABLE) {
                endTagInTable(p, token);
              }
            }
            break;
          }
          case html_js_1.TAG_ID.BODY:
          case html_js_1.TAG_ID.COL:
          case html_js_1.TAG_ID.COLGROUP:
          case html_js_1.TAG_ID.HTML:
          case html_js_1.TAG_ID.TBODY:
          case html_js_1.TAG_ID.TD:
          case html_js_1.TAG_ID.TFOOT:
          case html_js_1.TAG_ID.TH:
          case html_js_1.TAG_ID.THEAD:
          case html_js_1.TAG_ID.TR: {
            break;
          }
          default: {
            endTagInBody(p, token);
          }
        }
      }
      function startTagInColumnGroup(p, token) {
        switch (token.tagID) {
          case html_js_1.TAG_ID.HTML: {
            startTagInBody(p, token);
            break;
          }
          case html_js_1.TAG_ID.COL: {
            p._appendElement(token, html_js_1.NS.HTML);
            token.ackSelfClosing = true;
            break;
          }
          case html_js_1.TAG_ID.TEMPLATE: {
            startTagInHead(p, token);
            break;
          }
          default: {
            tokenInColumnGroup(p, token);
          }
        }
      }
      function endTagInColumnGroup(p, token) {
        switch (token.tagID) {
          case html_js_1.TAG_ID.COLGROUP: {
            if (p.openElements.currentTagId === html_js_1.TAG_ID.COLGROUP) {
              p.openElements.pop();
              p.insertionMode = InsertionMode.IN_TABLE;
            }
            break;
          }
          case html_js_1.TAG_ID.TEMPLATE: {
            templateEndTagInHead(p, token);
            break;
          }
          case html_js_1.TAG_ID.COL: {
            break;
          }
          default: {
            tokenInColumnGroup(p, token);
          }
        }
      }
      function tokenInColumnGroup(p, token) {
        if (p.openElements.currentTagId === html_js_1.TAG_ID.COLGROUP) {
          p.openElements.pop();
          p.insertionMode = InsertionMode.IN_TABLE;
          p._processToken(token);
        }
      }
      function startTagInTableBody(p, token) {
        switch (token.tagID) {
          case html_js_1.TAG_ID.TR: {
            p.openElements.clearBackToTableBodyContext();
            p._insertElement(token, html_js_1.NS.HTML);
            p.insertionMode = InsertionMode.IN_ROW;
            break;
          }
          case html_js_1.TAG_ID.TH:
          case html_js_1.TAG_ID.TD: {
            p.openElements.clearBackToTableBodyContext();
            p._insertFakeElement(html_js_1.TAG_NAMES.TR, html_js_1.TAG_ID.TR);
            p.insertionMode = InsertionMode.IN_ROW;
            startTagInRow(p, token);
            break;
          }
          case html_js_1.TAG_ID.CAPTION:
          case html_js_1.TAG_ID.COL:
          case html_js_1.TAG_ID.COLGROUP:
          case html_js_1.TAG_ID.TBODY:
          case html_js_1.TAG_ID.TFOOT:
          case html_js_1.TAG_ID.THEAD: {
            if (p.openElements.hasTableBodyContextInTableScope()) {
              p.openElements.clearBackToTableBodyContext();
              p.openElements.pop();
              p.insertionMode = InsertionMode.IN_TABLE;
              startTagInTable(p, token);
            }
            break;
          }
          default: {
            startTagInTable(p, token);
          }
        }
      }
      function endTagInTableBody(p, token) {
        const tn = token.tagID;
        switch (token.tagID) {
          case html_js_1.TAG_ID.TBODY:
          case html_js_1.TAG_ID.TFOOT:
          case html_js_1.TAG_ID.THEAD: {
            if (p.openElements.hasInTableScope(tn)) {
              p.openElements.clearBackToTableBodyContext();
              p.openElements.pop();
              p.insertionMode = InsertionMode.IN_TABLE;
            }
            break;
          }
          case html_js_1.TAG_ID.TABLE: {
            if (p.openElements.hasTableBodyContextInTableScope()) {
              p.openElements.clearBackToTableBodyContext();
              p.openElements.pop();
              p.insertionMode = InsertionMode.IN_TABLE;
              endTagInTable(p, token);
            }
            break;
          }
          case html_js_1.TAG_ID.BODY:
          case html_js_1.TAG_ID.CAPTION:
          case html_js_1.TAG_ID.COL:
          case html_js_1.TAG_ID.COLGROUP:
          case html_js_1.TAG_ID.HTML:
          case html_js_1.TAG_ID.TD:
          case html_js_1.TAG_ID.TH:
          case html_js_1.TAG_ID.TR: {
            break;
          }
          default: {
            endTagInTable(p, token);
          }
        }
      }
      function startTagInRow(p, token) {
        switch (token.tagID) {
          case html_js_1.TAG_ID.TH:
          case html_js_1.TAG_ID.TD: {
            p.openElements.clearBackToTableRowContext();
            p._insertElement(token, html_js_1.NS.HTML);
            p.insertionMode = InsertionMode.IN_CELL;
            p.activeFormattingElements.insertMarker();
            break;
          }
          case html_js_1.TAG_ID.CAPTION:
          case html_js_1.TAG_ID.COL:
          case html_js_1.TAG_ID.COLGROUP:
          case html_js_1.TAG_ID.TBODY:
          case html_js_1.TAG_ID.TFOOT:
          case html_js_1.TAG_ID.THEAD:
          case html_js_1.TAG_ID.TR: {
            if (p.openElements.hasInTableScope(html_js_1.TAG_ID.TR)) {
              p.openElements.clearBackToTableRowContext();
              p.openElements.pop();
              p.insertionMode = InsertionMode.IN_TABLE_BODY;
              startTagInTableBody(p, token);
            }
            break;
          }
          default: {
            startTagInTable(p, token);
          }
        }
      }
      function endTagInRow(p, token) {
        switch (token.tagID) {
          case html_js_1.TAG_ID.TR: {
            if (p.openElements.hasInTableScope(html_js_1.TAG_ID.TR)) {
              p.openElements.clearBackToTableRowContext();
              p.openElements.pop();
              p.insertionMode = InsertionMode.IN_TABLE_BODY;
            }
            break;
          }
          case html_js_1.TAG_ID.TABLE: {
            if (p.openElements.hasInTableScope(html_js_1.TAG_ID.TR)) {
              p.openElements.clearBackToTableRowContext();
              p.openElements.pop();
              p.insertionMode = InsertionMode.IN_TABLE_BODY;
              endTagInTableBody(p, token);
            }
            break;
          }
          case html_js_1.TAG_ID.TBODY:
          case html_js_1.TAG_ID.TFOOT:
          case html_js_1.TAG_ID.THEAD: {
            if (p.openElements.hasInTableScope(token.tagID) || p.openElements.hasInTableScope(html_js_1.TAG_ID.TR)) {
              p.openElements.clearBackToTableRowContext();
              p.openElements.pop();
              p.insertionMode = InsertionMode.IN_TABLE_BODY;
              endTagInTableBody(p, token);
            }
            break;
          }
          case html_js_1.TAG_ID.BODY:
          case html_js_1.TAG_ID.CAPTION:
          case html_js_1.TAG_ID.COL:
          case html_js_1.TAG_ID.COLGROUP:
          case html_js_1.TAG_ID.HTML:
          case html_js_1.TAG_ID.TD:
          case html_js_1.TAG_ID.TH: {
            break;
          }
          default: {
            endTagInTable(p, token);
          }
        }
      }
      function startTagInCell(p, token) {
        const tn = token.tagID;
        if (TABLE_VOID_ELEMENTS.has(tn)) {
          if (p.openElements.hasInTableScope(html_js_1.TAG_ID.TD) || p.openElements.hasInTableScope(html_js_1.TAG_ID.TH)) {
            p._closeTableCell();
            startTagInRow(p, token);
          }
        } else {
          startTagInBody(p, token);
        }
      }
      function endTagInCell(p, token) {
        const tn = token.tagID;
        switch (tn) {
          case html_js_1.TAG_ID.TD:
          case html_js_1.TAG_ID.TH: {
            if (p.openElements.hasInTableScope(tn)) {
              p.openElements.generateImpliedEndTags();
              p.openElements.popUntilTagNamePopped(tn);
              p.activeFormattingElements.clearToLastMarker();
              p.insertionMode = InsertionMode.IN_ROW;
            }
            break;
          }
          case html_js_1.TAG_ID.TABLE:
          case html_js_1.TAG_ID.TBODY:
          case html_js_1.TAG_ID.TFOOT:
          case html_js_1.TAG_ID.THEAD:
          case html_js_1.TAG_ID.TR: {
            if (p.openElements.hasInTableScope(tn)) {
              p._closeTableCell();
              endTagInRow(p, token);
            }
            break;
          }
          case html_js_1.TAG_ID.BODY:
          case html_js_1.TAG_ID.CAPTION:
          case html_js_1.TAG_ID.COL:
          case html_js_1.TAG_ID.COLGROUP:
          case html_js_1.TAG_ID.HTML: {
            break;
          }
          default: {
            endTagInBody(p, token);
          }
        }
      }
      function startTagInSelect(p, token) {
        switch (token.tagID) {
          case html_js_1.TAG_ID.HTML: {
            startTagInBody(p, token);
            break;
          }
          case html_js_1.TAG_ID.OPTION: {
            if (p.openElements.currentTagId === html_js_1.TAG_ID.OPTION) {
              p.openElements.pop();
            }
            p._insertElement(token, html_js_1.NS.HTML);
            break;
          }
          case html_js_1.TAG_ID.OPTGROUP: {
            if (p.openElements.currentTagId === html_js_1.TAG_ID.OPTION) {
              p.openElements.pop();
            }
            if (p.openElements.currentTagId === html_js_1.TAG_ID.OPTGROUP) {
              p.openElements.pop();
            }
            p._insertElement(token, html_js_1.NS.HTML);
            break;
          }
          case html_js_1.TAG_ID.INPUT:
          case html_js_1.TAG_ID.KEYGEN:
          case html_js_1.TAG_ID.TEXTAREA:
          case html_js_1.TAG_ID.SELECT: {
            if (p.openElements.hasInSelectScope(html_js_1.TAG_ID.SELECT)) {
              p.openElements.popUntilTagNamePopped(html_js_1.TAG_ID.SELECT);
              p._resetInsertionMode();
              if (token.tagID !== html_js_1.TAG_ID.SELECT) {
                p._processStartTag(token);
              }
            }
            break;
          }
          case html_js_1.TAG_ID.SCRIPT:
          case html_js_1.TAG_ID.TEMPLATE: {
            startTagInHead(p, token);
            break;
          }
          default:
        }
      }
      function endTagInSelect(p, token) {
        switch (token.tagID) {
          case html_js_1.TAG_ID.OPTGROUP: {
            if (p.openElements.stackTop > 0 && p.openElements.currentTagId === html_js_1.TAG_ID.OPTION && p.openElements.tagIDs[p.openElements.stackTop - 1] === html_js_1.TAG_ID.OPTGROUP) {
              p.openElements.pop();
            }
            if (p.openElements.currentTagId === html_js_1.TAG_ID.OPTGROUP) {
              p.openElements.pop();
            }
            break;
          }
          case html_js_1.TAG_ID.OPTION: {
            if (p.openElements.currentTagId === html_js_1.TAG_ID.OPTION) {
              p.openElements.pop();
            }
            break;
          }
          case html_js_1.TAG_ID.SELECT: {
            if (p.openElements.hasInSelectScope(html_js_1.TAG_ID.SELECT)) {
              p.openElements.popUntilTagNamePopped(html_js_1.TAG_ID.SELECT);
              p._resetInsertionMode();
            }
            break;
          }
          case html_js_1.TAG_ID.TEMPLATE: {
            templateEndTagInHead(p, token);
            break;
          }
          default:
        }
      }
      function startTagInSelectInTable(p, token) {
        const tn = token.tagID;
        if (tn === html_js_1.TAG_ID.CAPTION || tn === html_js_1.TAG_ID.TABLE || tn === html_js_1.TAG_ID.TBODY || tn === html_js_1.TAG_ID.TFOOT || tn === html_js_1.TAG_ID.THEAD || tn === html_js_1.TAG_ID.TR || tn === html_js_1.TAG_ID.TD || tn === html_js_1.TAG_ID.TH) {
          p.openElements.popUntilTagNamePopped(html_js_1.TAG_ID.SELECT);
          p._resetInsertionMode();
          p._processStartTag(token);
        } else {
          startTagInSelect(p, token);
        }
      }
      function endTagInSelectInTable(p, token) {
        const tn = token.tagID;
        if (tn === html_js_1.TAG_ID.CAPTION || tn === html_js_1.TAG_ID.TABLE || tn === html_js_1.TAG_ID.TBODY || tn === html_js_1.TAG_ID.TFOOT || tn === html_js_1.TAG_ID.THEAD || tn === html_js_1.TAG_ID.TR || tn === html_js_1.TAG_ID.TD || tn === html_js_1.TAG_ID.TH) {
          if (p.openElements.hasInTableScope(tn)) {
            p.openElements.popUntilTagNamePopped(html_js_1.TAG_ID.SELECT);
            p._resetInsertionMode();
            p.onEndTag(token);
          }
        } else {
          endTagInSelect(p, token);
        }
      }
      function startTagInTemplate(p, token) {
        switch (token.tagID) {
          case html_js_1.TAG_ID.BASE:
          case html_js_1.TAG_ID.BASEFONT:
          case html_js_1.TAG_ID.BGSOUND:
          case html_js_1.TAG_ID.LINK:
          case html_js_1.TAG_ID.META:
          case html_js_1.TAG_ID.NOFRAMES:
          case html_js_1.TAG_ID.SCRIPT:
          case html_js_1.TAG_ID.STYLE:
          case html_js_1.TAG_ID.TEMPLATE:
          case html_js_1.TAG_ID.TITLE: {
            startTagInHead(p, token);
            break;
          }
          case html_js_1.TAG_ID.CAPTION:
          case html_js_1.TAG_ID.COLGROUP:
          case html_js_1.TAG_ID.TBODY:
          case html_js_1.TAG_ID.TFOOT:
          case html_js_1.TAG_ID.THEAD: {
            p.tmplInsertionModeStack[0] = InsertionMode.IN_TABLE;
            p.insertionMode = InsertionMode.IN_TABLE;
            startTagInTable(p, token);
            break;
          }
          case html_js_1.TAG_ID.COL: {
            p.tmplInsertionModeStack[0] = InsertionMode.IN_COLUMN_GROUP;
            p.insertionMode = InsertionMode.IN_COLUMN_GROUP;
            startTagInColumnGroup(p, token);
            break;
          }
          case html_js_1.TAG_ID.TR: {
            p.tmplInsertionModeStack[0] = InsertionMode.IN_TABLE_BODY;
            p.insertionMode = InsertionMode.IN_TABLE_BODY;
            startTagInTableBody(p, token);
            break;
          }
          case html_js_1.TAG_ID.TD:
          case html_js_1.TAG_ID.TH: {
            p.tmplInsertionModeStack[0] = InsertionMode.IN_ROW;
            p.insertionMode = InsertionMode.IN_ROW;
            startTagInRow(p, token);
            break;
          }
          default: {
            p.tmplInsertionModeStack[0] = InsertionMode.IN_BODY;
            p.insertionMode = InsertionMode.IN_BODY;
            startTagInBody(p, token);
          }
        }
      }
      function endTagInTemplate(p, token) {
        if (token.tagID === html_js_1.TAG_ID.TEMPLATE) {
          templateEndTagInHead(p, token);
        }
      }
      function eofInTemplate(p, token) {
        if (p.openElements.tmplCount > 0) {
          p.openElements.popUntilTagNamePopped(html_js_1.TAG_ID.TEMPLATE);
          p.activeFormattingElements.clearToLastMarker();
          p.tmplInsertionModeStack.shift();
          p._resetInsertionMode();
          p.onEof(token);
        } else {
          stopParsing(p, token);
        }
      }
      function startTagAfterBody(p, token) {
        if (token.tagID === html_js_1.TAG_ID.HTML) {
          startTagInBody(p, token);
        } else {
          tokenAfterBody(p, token);
        }
      }
      function endTagAfterBody(p, token) {
        var _a;
        if (token.tagID === html_js_1.TAG_ID.HTML) {
          if (!p.fragmentContext) {
            p.insertionMode = InsertionMode.AFTER_AFTER_BODY;
          }
          if (p.options.sourceCodeLocationInfo && p.openElements.tagIDs[0] === html_js_1.TAG_ID.HTML) {
            p._setEndLocation(p.openElements.items[0], token);
            const bodyElement = p.openElements.items[1];
            if (bodyElement && !((_a = p.treeAdapter.getNodeSourceCodeLocation(bodyElement)) === null || _a === void 0 ? void 0 : _a.endTag)) {
              p._setEndLocation(bodyElement, token);
            }
          }
        } else {
          tokenAfterBody(p, token);
        }
      }
      function tokenAfterBody(p, token) {
        p.insertionMode = InsertionMode.IN_BODY;
        modeInBody(p, token);
      }
      function startTagInFrameset(p, token) {
        switch (token.tagID) {
          case html_js_1.TAG_ID.HTML: {
            startTagInBody(p, token);
            break;
          }
          case html_js_1.TAG_ID.FRAMESET: {
            p._insertElement(token, html_js_1.NS.HTML);
            break;
          }
          case html_js_1.TAG_ID.FRAME: {
            p._appendElement(token, html_js_1.NS.HTML);
            token.ackSelfClosing = true;
            break;
          }
          case html_js_1.TAG_ID.NOFRAMES: {
            startTagInHead(p, token);
            break;
          }
          default:
        }
      }
      function endTagInFrameset(p, token) {
        if (token.tagID === html_js_1.TAG_ID.FRAMESET && !p.openElements.isRootHtmlElementCurrent()) {
          p.openElements.pop();
          if (!p.fragmentContext && p.openElements.currentTagId !== html_js_1.TAG_ID.FRAMESET) {
            p.insertionMode = InsertionMode.AFTER_FRAMESET;
          }
        }
      }
      function startTagAfterFrameset(p, token) {
        switch (token.tagID) {
          case html_js_1.TAG_ID.HTML: {
            startTagInBody(p, token);
            break;
          }
          case html_js_1.TAG_ID.NOFRAMES: {
            startTagInHead(p, token);
            break;
          }
          default:
        }
      }
      function endTagAfterFrameset(p, token) {
        if (token.tagID === html_js_1.TAG_ID.HTML) {
          p.insertionMode = InsertionMode.AFTER_AFTER_FRAMESET;
        }
      }
      function startTagAfterAfterBody(p, token) {
        if (token.tagID === html_js_1.TAG_ID.HTML) {
          startTagInBody(p, token);
        } else {
          tokenAfterAfterBody(p, token);
        }
      }
      function tokenAfterAfterBody(p, token) {
        p.insertionMode = InsertionMode.IN_BODY;
        modeInBody(p, token);
      }
      function startTagAfterAfterFrameset(p, token) {
        switch (token.tagID) {
          case html_js_1.TAG_ID.HTML: {
            startTagInBody(p, token);
            break;
          }
          case html_js_1.TAG_ID.NOFRAMES: {
            startTagInHead(p, token);
            break;
          }
          default:
        }
      }
      function nullCharacterInForeignContent(p, token) {
        token.chars = unicode.REPLACEMENT_CHARACTER;
        p._insertCharacters(token);
      }
      function characterInForeignContent(p, token) {
        p._insertCharacters(token);
        p.framesetOk = false;
      }
      function popUntilHtmlOrIntegrationPoint(p) {
        while (p.treeAdapter.getNamespaceURI(p.openElements.current) !== html_js_1.NS.HTML && !p._isIntegrationPoint(p.openElements.currentTagId, p.openElements.current)) {
          p.openElements.pop();
        }
      }
      function startTagInForeignContent(p, token) {
        if (foreignContent.causesExit(token)) {
          popUntilHtmlOrIntegrationPoint(p);
          p._startTagOutsideForeignContent(token);
        } else {
          const current = p._getAdjustedCurrentElement();
          const currentNs = p.treeAdapter.getNamespaceURI(current);
          if (currentNs === html_js_1.NS.MATHML) {
            foreignContent.adjustTokenMathMLAttrs(token);
          } else if (currentNs === html_js_1.NS.SVG) {
            foreignContent.adjustTokenSVGTagName(token);
            foreignContent.adjustTokenSVGAttrs(token);
          }
          foreignContent.adjustTokenXMLAttrs(token);
          if (token.selfClosing) {
            p._appendElement(token, currentNs);
          } else {
            p._insertElement(token, currentNs);
          }
          token.ackSelfClosing = true;
        }
      }
      function endTagInForeignContent(p, token) {
        if (token.tagID === html_js_1.TAG_ID.P || token.tagID === html_js_1.TAG_ID.BR) {
          popUntilHtmlOrIntegrationPoint(p);
          p._endTagOutsideForeignContent(token);
          return;
        }
        for (let i = p.openElements.stackTop; i > 0; i--) {
          const element = p.openElements.items[i];
          if (p.treeAdapter.getNamespaceURI(element) === html_js_1.NS.HTML) {
            p._endTagOutsideForeignContent(token);
            break;
          }
          const tagName = p.treeAdapter.getTagName(element);
          if (tagName.toLowerCase() === token.tagName) {
            token.tagName = tagName;
            p.openElements.shortenToLength(i);
            break;
          }
        }
      }
    }
  });

  // node_modules/parse5/dist/cjs/serializer/index.js
  var require_serializer = __commonJS({
    "node_modules/parse5/dist/cjs/serializer/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.serializeOuter = exports.serialize = void 0;
      var html_js_1 = require_html();
      var escape_js_1 = require_escape();
      var default_js_1 = require_default();
      var VOID_ELEMENTS = /* @__PURE__ */ new Set([
        html_js_1.TAG_NAMES.AREA,
        html_js_1.TAG_NAMES.BASE,
        html_js_1.TAG_NAMES.BASEFONT,
        html_js_1.TAG_NAMES.BGSOUND,
        html_js_1.TAG_NAMES.BR,
        html_js_1.TAG_NAMES.COL,
        html_js_1.TAG_NAMES.EMBED,
        html_js_1.TAG_NAMES.FRAME,
        html_js_1.TAG_NAMES.HR,
        html_js_1.TAG_NAMES.IMG,
        html_js_1.TAG_NAMES.INPUT,
        html_js_1.TAG_NAMES.KEYGEN,
        html_js_1.TAG_NAMES.LINK,
        html_js_1.TAG_NAMES.META,
        html_js_1.TAG_NAMES.PARAM,
        html_js_1.TAG_NAMES.SOURCE,
        html_js_1.TAG_NAMES.TRACK,
        html_js_1.TAG_NAMES.WBR
      ]);
      function isVoidElement(node, options) {
        return options.treeAdapter.isElementNode(node) && options.treeAdapter.getNamespaceURI(node) === html_js_1.NS.HTML && VOID_ELEMENTS.has(options.treeAdapter.getTagName(node));
      }
      var defaultOpts = { treeAdapter: default_js_1.defaultTreeAdapter, scriptingEnabled: true };
      function serialize(node, options) {
        const opts = Object.assign(Object.assign({}, defaultOpts), options);
        if (isVoidElement(node, opts)) {
          return "";
        }
        return serializeChildNodes(node, opts);
      }
      exports.serialize = serialize;
      function serializeOuter(node, options) {
        const opts = Object.assign(Object.assign({}, defaultOpts), options);
        return serializeNode(node, opts);
      }
      exports.serializeOuter = serializeOuter;
      function serializeChildNodes(parentNode, options) {
        let html = "";
        const container = options.treeAdapter.isElementNode(parentNode) && options.treeAdapter.getTagName(parentNode) === html_js_1.TAG_NAMES.TEMPLATE && options.treeAdapter.getNamespaceURI(parentNode) === html_js_1.NS.HTML ? options.treeAdapter.getTemplateContent(parentNode) : parentNode;
        const childNodes = options.treeAdapter.getChildNodes(container);
        if (childNodes) {
          for (const currentNode of childNodes) {
            html += serializeNode(currentNode, options);
          }
        }
        return html;
      }
      function serializeNode(node, options) {
        if (options.treeAdapter.isElementNode(node)) {
          return serializeElement(node, options);
        }
        if (options.treeAdapter.isTextNode(node)) {
          return serializeTextNode(node, options);
        }
        if (options.treeAdapter.isCommentNode(node)) {
          return serializeCommentNode(node, options);
        }
        if (options.treeAdapter.isDocumentTypeNode(node)) {
          return serializeDocumentTypeNode(node, options);
        }
        return "";
      }
      function serializeElement(node, options) {
        const tn = options.treeAdapter.getTagName(node);
        return `<${tn}${serializeAttributes(node, options)}>${isVoidElement(node, options) ? "" : `${serializeChildNodes(node, options)}</${tn}>`}`;
      }
      function serializeAttributes(node, { treeAdapter }) {
        let html = "";
        for (const attr of treeAdapter.getAttrList(node)) {
          html += " ";
          if (!attr.namespace) {
            html += attr.name;
          } else
            switch (attr.namespace) {
              case html_js_1.NS.XML: {
                html += `xml:${attr.name}`;
                break;
              }
              case html_js_1.NS.XMLNS: {
                if (attr.name !== "xmlns") {
                  html += "xmlns:";
                }
                html += attr.name;
                break;
              }
              case html_js_1.NS.XLINK: {
                html += `xlink:${attr.name}`;
                break;
              }
              default: {
                html += `${attr.prefix}:${attr.name}`;
              }
            }
          html += `="${(0, escape_js_1.escapeAttribute)(attr.value)}"`;
        }
        return html;
      }
      function serializeTextNode(node, options) {
        const { treeAdapter } = options;
        const content = treeAdapter.getTextNodeContent(node);
        const parent = treeAdapter.getParentNode(node);
        const parentTn = parent && treeAdapter.isElementNode(parent) && treeAdapter.getTagName(parent);
        return parentTn && treeAdapter.getNamespaceURI(parent) === html_js_1.NS.HTML && (0, html_js_1.hasUnescapedText)(parentTn, options.scriptingEnabled) ? content : (0, escape_js_1.escapeText)(content);
      }
      function serializeCommentNode(node, { treeAdapter }) {
        return `<!--${treeAdapter.getCommentNodeContent(node)}-->`;
      }
      function serializeDocumentTypeNode(node, { treeAdapter }) {
        return `<!DOCTYPE ${treeAdapter.getDocumentTypeNodeName(node)}>`;
      }
    }
  });

  // node_modules/parse5/dist/cjs/index.js
  var require_cjs = __commonJS({
    "node_modules/parse5/dist/cjs/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.parseFragment = exports.parse = exports.TokenizerMode = exports.Tokenizer = exports.Token = exports.html = exports.foreignContent = exports.ErrorCodes = exports.serializeOuter = exports.serialize = exports.Parser = exports.defaultTreeAdapter = void 0;
      var index_js_1 = require_parser();
      var default_js_1 = require_default();
      Object.defineProperty(exports, "defaultTreeAdapter", { enumerable: true, get: function() {
        return default_js_1.defaultTreeAdapter;
      } });
      var index_js_2 = require_parser();
      Object.defineProperty(exports, "Parser", { enumerable: true, get: function() {
        return index_js_2.Parser;
      } });
      var index_js_3 = require_serializer();
      Object.defineProperty(exports, "serialize", { enumerable: true, get: function() {
        return index_js_3.serialize;
      } });
      Object.defineProperty(exports, "serializeOuter", { enumerable: true, get: function() {
        return index_js_3.serializeOuter;
      } });
      var error_codes_js_1 = require_error_codes();
      Object.defineProperty(exports, "ErrorCodes", { enumerable: true, get: function() {
        return error_codes_js_1.ERR;
      } });
      exports.foreignContent = require_foreign_content();
      exports.html = require_html();
      exports.Token = require_token();
      var index_js_4 = require_tokenizer();
      Object.defineProperty(exports, "Tokenizer", { enumerable: true, get: function() {
        return index_js_4.Tokenizer;
      } });
      Object.defineProperty(exports, "TokenizerMode", { enumerable: true, get: function() {
        return index_js_4.TokenizerMode;
      } });
      function parse(html, options) {
        return index_js_1.Parser.parse(html, options);
      }
      exports.parse = parse;
      function parseFragment(fragmentContext, html, options) {
        if (typeof fragmentContext === "string") {
          options = html;
          html = fragmentContext;
          fragmentContext = null;
        }
        const parser = index_js_1.Parser.getFragmentParser(fragmentContext, options);
        parser.tokenizer.write(html, true);
        return parser.getFragment();
      }
      exports.parseFragment = parseFragment;
    }
  });

  // node_modules/parse5-htmlparser2-tree-adapter/dist/cjs/index.js
  var require_cjs2 = __commonJS({
    "node_modules/parse5-htmlparser2-tree-adapter/dist/cjs/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.adapter = exports.serializeDoctypeContent = void 0;
      var parse5_1 = require_cjs();
      var domhandler_1 = require_lib2();
      function createTextNode(value) {
        return new domhandler_1.Text(value);
      }
      function enquoteDoctypeId(id) {
        const quote = id.includes('"') ? "'" : '"';
        return quote + id + quote;
      }
      function serializeDoctypeContent(name, publicId, systemId) {
        let str = "!DOCTYPE ";
        if (name) {
          str += name;
        }
        if (publicId) {
          str += ` PUBLIC ${enquoteDoctypeId(publicId)}`;
        } else if (systemId) {
          str += " SYSTEM";
        }
        if (systemId) {
          str += ` ${enquoteDoctypeId(systemId)}`;
        }
        return str;
      }
      exports.serializeDoctypeContent = serializeDoctypeContent;
      exports.adapter = {
        // Re-exports from domhandler
        isCommentNode: domhandler_1.isComment,
        isElementNode: domhandler_1.isTag,
        isTextNode: domhandler_1.isText,
        //Node construction
        createDocument() {
          const node = new domhandler_1.Document([]);
          node["x-mode"] = parse5_1.html.DOCUMENT_MODE.NO_QUIRKS;
          return node;
        },
        createDocumentFragment() {
          return new domhandler_1.Document([]);
        },
        createElement(tagName, namespaceURI, attrs) {
          const attribs = /* @__PURE__ */ Object.create(null);
          const attribsNamespace = /* @__PURE__ */ Object.create(null);
          const attribsPrefix = /* @__PURE__ */ Object.create(null);
          for (let i = 0; i < attrs.length; i++) {
            const attrName = attrs[i].name;
            attribs[attrName] = attrs[i].value;
            attribsNamespace[attrName] = attrs[i].namespace;
            attribsPrefix[attrName] = attrs[i].prefix;
          }
          const node = new domhandler_1.Element(tagName, attribs, []);
          node.namespace = namespaceURI;
          node["x-attribsNamespace"] = attribsNamespace;
          node["x-attribsPrefix"] = attribsPrefix;
          return node;
        },
        createCommentNode(data) {
          return new domhandler_1.Comment(data);
        },
        //Tree mutation
        appendChild(parentNode, newNode) {
          const prev = parentNode.children[parentNode.children.length - 1];
          if (prev) {
            prev.next = newNode;
            newNode.prev = prev;
          }
          parentNode.children.push(newNode);
          newNode.parent = parentNode;
        },
        insertBefore(parentNode, newNode, referenceNode) {
          const insertionIdx = parentNode.children.indexOf(referenceNode);
          const { prev } = referenceNode;
          if (prev) {
            prev.next = newNode;
            newNode.prev = prev;
          }
          referenceNode.prev = newNode;
          newNode.next = referenceNode;
          parentNode.children.splice(insertionIdx, 0, newNode);
          newNode.parent = parentNode;
        },
        setTemplateContent(templateElement, contentElement) {
          exports.adapter.appendChild(templateElement, contentElement);
        },
        getTemplateContent(templateElement) {
          return templateElement.children[0];
        },
        setDocumentType(document, name, publicId, systemId) {
          const data = serializeDoctypeContent(name, publicId, systemId);
          let doctypeNode = document.children.find((node) => (0, domhandler_1.isDirective)(node) && node.name === "!doctype");
          if (doctypeNode) {
            doctypeNode.data = data !== null && data !== void 0 ? data : null;
          } else {
            doctypeNode = new domhandler_1.ProcessingInstruction("!doctype", data);
            exports.adapter.appendChild(document, doctypeNode);
          }
          doctypeNode["x-name"] = name !== null && name !== void 0 ? name : void 0;
          doctypeNode["x-publicId"] = publicId !== null && publicId !== void 0 ? publicId : void 0;
          doctypeNode["x-systemId"] = systemId !== null && systemId !== void 0 ? systemId : void 0;
        },
        setDocumentMode(document, mode) {
          document["x-mode"] = mode;
        },
        getDocumentMode(document) {
          return document["x-mode"];
        },
        detachNode(node) {
          if (node.parent) {
            const idx = node.parent.children.indexOf(node);
            const { prev, next } = node;
            node.prev = null;
            node.next = null;
            if (prev) {
              prev.next = next;
            }
            if (next) {
              next.prev = prev;
            }
            node.parent.children.splice(idx, 1);
            node.parent = null;
          }
        },
        insertText(parentNode, text) {
          const lastChild = parentNode.children[parentNode.children.length - 1];
          if (lastChild && (0, domhandler_1.isText)(lastChild)) {
            lastChild.data += text;
          } else {
            exports.adapter.appendChild(parentNode, createTextNode(text));
          }
        },
        insertTextBefore(parentNode, text, referenceNode) {
          const prevNode = parentNode.children[parentNode.children.indexOf(referenceNode) - 1];
          if (prevNode && (0, domhandler_1.isText)(prevNode)) {
            prevNode.data += text;
          } else {
            exports.adapter.insertBefore(parentNode, createTextNode(text), referenceNode);
          }
        },
        adoptAttributes(recipient, attrs) {
          for (let i = 0; i < attrs.length; i++) {
            const attrName = attrs[i].name;
            if (typeof recipient.attribs[attrName] === "undefined") {
              recipient.attribs[attrName] = attrs[i].value;
              recipient["x-attribsNamespace"][attrName] = attrs[i].namespace;
              recipient["x-attribsPrefix"][attrName] = attrs[i].prefix;
            }
          }
        },
        //Tree traversing
        getFirstChild(node) {
          return node.children[0];
        },
        getChildNodes(node) {
          return node.children;
        },
        getParentNode(node) {
          return node.parent;
        },
        getAttrList(element) {
          return element.attributes;
        },
        //Node data
        getTagName(element) {
          return element.name;
        },
        getNamespaceURI(element) {
          return element.namespace;
        },
        getTextNodeContent(textNode) {
          return textNode.data;
        },
        getCommentNodeContent(commentNode) {
          return commentNode.data;
        },
        getDocumentTypeNodeName(doctypeNode) {
          var _a;
          return (_a = doctypeNode["x-name"]) !== null && _a !== void 0 ? _a : "";
        },
        getDocumentTypeNodePublicId(doctypeNode) {
          var _a;
          return (_a = doctypeNode["x-publicId"]) !== null && _a !== void 0 ? _a : "";
        },
        getDocumentTypeNodeSystemId(doctypeNode) {
          var _a;
          return (_a = doctypeNode["x-systemId"]) !== null && _a !== void 0 ? _a : "";
        },
        //Node types
        isDocumentTypeNode(node) {
          return (0, domhandler_1.isDirective)(node) && node.name === "!doctype";
        },
        // Source code location
        setNodeSourceCodeLocation(node, location) {
          if (location) {
            node.startIndex = location.startOffset;
            node.endIndex = location.endOffset;
          }
          node.sourceCodeLocation = location;
        },
        getNodeSourceCodeLocation(node) {
          return node.sourceCodeLocation;
        },
        updateNodeSourceCodeLocation(node, endLocation) {
          if (endLocation.endOffset != null)
            node.endIndex = endLocation.endOffset;
          node.sourceCodeLocation = Object.assign(Object.assign({}, node.sourceCodeLocation), endLocation);
        }
      };
    }
  });

  // node_modules/cheerio/lib/parsers/parse5-adapter.js
  var require_parse5_adapter = __commonJS({
    "node_modules/cheerio/lib/parsers/parse5-adapter.js"(exports) {
      "use strict";
      var __spreadArray = exports && exports.__spreadArray || function(to, from, pack) {
        if (pack || arguments.length === 2)
          for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
              if (!ar)
                ar = Array.prototype.slice.call(from, 0, i);
              ar[i] = from[i];
            }
          }
        return to.concat(ar || Array.prototype.slice.call(from));
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.renderWithParse5 = exports.parseWithParse5 = void 0;
      var domhandler_1 = require_lib2();
      var parse5_1 = require_cjs();
      var parse5_htmlparser2_tree_adapter_1 = require_cjs2();
      function parseWithParse5(content, options, isDocument, context) {
        var opts = {
          scriptingEnabled: typeof options.scriptingEnabled === "boolean" ? options.scriptingEnabled : true,
          treeAdapter: parse5_htmlparser2_tree_adapter_1.adapter,
          sourceCodeLocationInfo: options.sourceCodeLocationInfo
        };
        return isDocument ? (0, parse5_1.parse)(content, opts) : (0, parse5_1.parseFragment)(context, content, opts);
      }
      exports.parseWithParse5 = parseWithParse5;
      var renderOpts = { treeAdapter: parse5_htmlparser2_tree_adapter_1.adapter };
      function renderWithParse5(dom) {
        var _a;
        var nodes = "length" in dom ? dom : [dom];
        for (var index = 0; index < nodes.length; index += 1) {
          var node = nodes[index];
          if ((0, domhandler_1.isDocument)(node)) {
            (_a = Array.prototype.splice).call.apply(_a, __spreadArray([nodes, index, 1], node.children, false));
          }
        }
        var result = "";
        for (var index = 0; index < nodes.length; index += 1) {
          var node = nodes[index];
          result += (0, parse5_1.serializeOuter)(node, renderOpts);
        }
        return result;
      }
      exports.renderWithParse5 = renderWithParse5;
    }
  });

  // node_modules/htmlparser2/lib/Tokenizer.js
  var require_Tokenizer = __commonJS({
    "node_modules/htmlparser2/lib/Tokenizer.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.QuoteType = void 0;
      var decode_js_1 = require_decode();
      var CharCodes;
      (function(CharCodes2) {
        CharCodes2[CharCodes2["Tab"] = 9] = "Tab";
        CharCodes2[CharCodes2["NewLine"] = 10] = "NewLine";
        CharCodes2[CharCodes2["FormFeed"] = 12] = "FormFeed";
        CharCodes2[CharCodes2["CarriageReturn"] = 13] = "CarriageReturn";
        CharCodes2[CharCodes2["Space"] = 32] = "Space";
        CharCodes2[CharCodes2["ExclamationMark"] = 33] = "ExclamationMark";
        CharCodes2[CharCodes2["Number"] = 35] = "Number";
        CharCodes2[CharCodes2["Amp"] = 38] = "Amp";
        CharCodes2[CharCodes2["SingleQuote"] = 39] = "SingleQuote";
        CharCodes2[CharCodes2["DoubleQuote"] = 34] = "DoubleQuote";
        CharCodes2[CharCodes2["Dash"] = 45] = "Dash";
        CharCodes2[CharCodes2["Slash"] = 47] = "Slash";
        CharCodes2[CharCodes2["Zero"] = 48] = "Zero";
        CharCodes2[CharCodes2["Nine"] = 57] = "Nine";
        CharCodes2[CharCodes2["Semi"] = 59] = "Semi";
        CharCodes2[CharCodes2["Lt"] = 60] = "Lt";
        CharCodes2[CharCodes2["Eq"] = 61] = "Eq";
        CharCodes2[CharCodes2["Gt"] = 62] = "Gt";
        CharCodes2[CharCodes2["Questionmark"] = 63] = "Questionmark";
        CharCodes2[CharCodes2["UpperA"] = 65] = "UpperA";
        CharCodes2[CharCodes2["LowerA"] = 97] = "LowerA";
        CharCodes2[CharCodes2["UpperF"] = 70] = "UpperF";
        CharCodes2[CharCodes2["LowerF"] = 102] = "LowerF";
        CharCodes2[CharCodes2["UpperZ"] = 90] = "UpperZ";
        CharCodes2[CharCodes2["LowerZ"] = 122] = "LowerZ";
        CharCodes2[CharCodes2["LowerX"] = 120] = "LowerX";
        CharCodes2[CharCodes2["OpeningSquareBracket"] = 91] = "OpeningSquareBracket";
      })(CharCodes || (CharCodes = {}));
      var State;
      (function(State2) {
        State2[State2["Text"] = 1] = "Text";
        State2[State2["BeforeTagName"] = 2] = "BeforeTagName";
        State2[State2["InTagName"] = 3] = "InTagName";
        State2[State2["InSelfClosingTag"] = 4] = "InSelfClosingTag";
        State2[State2["BeforeClosingTagName"] = 5] = "BeforeClosingTagName";
        State2[State2["InClosingTagName"] = 6] = "InClosingTagName";
        State2[State2["AfterClosingTagName"] = 7] = "AfterClosingTagName";
        State2[State2["BeforeAttributeName"] = 8] = "BeforeAttributeName";
        State2[State2["InAttributeName"] = 9] = "InAttributeName";
        State2[State2["AfterAttributeName"] = 10] = "AfterAttributeName";
        State2[State2["BeforeAttributeValue"] = 11] = "BeforeAttributeValue";
        State2[State2["InAttributeValueDq"] = 12] = "InAttributeValueDq";
        State2[State2["InAttributeValueSq"] = 13] = "InAttributeValueSq";
        State2[State2["InAttributeValueNq"] = 14] = "InAttributeValueNq";
        State2[State2["BeforeDeclaration"] = 15] = "BeforeDeclaration";
        State2[State2["InDeclaration"] = 16] = "InDeclaration";
        State2[State2["InProcessingInstruction"] = 17] = "InProcessingInstruction";
        State2[State2["BeforeComment"] = 18] = "BeforeComment";
        State2[State2["CDATASequence"] = 19] = "CDATASequence";
        State2[State2["InSpecialComment"] = 20] = "InSpecialComment";
        State2[State2["InCommentLike"] = 21] = "InCommentLike";
        State2[State2["BeforeSpecialS"] = 22] = "BeforeSpecialS";
        State2[State2["SpecialStartSequence"] = 23] = "SpecialStartSequence";
        State2[State2["InSpecialTag"] = 24] = "InSpecialTag";
        State2[State2["BeforeEntity"] = 25] = "BeforeEntity";
        State2[State2["BeforeNumericEntity"] = 26] = "BeforeNumericEntity";
        State2[State2["InNamedEntity"] = 27] = "InNamedEntity";
        State2[State2["InNumericEntity"] = 28] = "InNumericEntity";
        State2[State2["InHexEntity"] = 29] = "InHexEntity";
      })(State || (State = {}));
      function isWhitespace(c) {
        return c === CharCodes.Space || c === CharCodes.NewLine || c === CharCodes.Tab || c === CharCodes.FormFeed || c === CharCodes.CarriageReturn;
      }
      function isEndOfTagSection(c) {
        return c === CharCodes.Slash || c === CharCodes.Gt || isWhitespace(c);
      }
      function isNumber(c) {
        return c >= CharCodes.Zero && c <= CharCodes.Nine;
      }
      function isASCIIAlpha(c) {
        return c >= CharCodes.LowerA && c <= CharCodes.LowerZ || c >= CharCodes.UpperA && c <= CharCodes.UpperZ;
      }
      function isHexDigit(c) {
        return c >= CharCodes.UpperA && c <= CharCodes.UpperF || c >= CharCodes.LowerA && c <= CharCodes.LowerF;
      }
      var QuoteType;
      (function(QuoteType2) {
        QuoteType2[QuoteType2["NoValue"] = 0] = "NoValue";
        QuoteType2[QuoteType2["Unquoted"] = 1] = "Unquoted";
        QuoteType2[QuoteType2["Single"] = 2] = "Single";
        QuoteType2[QuoteType2["Double"] = 3] = "Double";
      })(QuoteType = exports.QuoteType || (exports.QuoteType = {}));
      var Sequences = {
        Cdata: new Uint8Array([67, 68, 65, 84, 65, 91]),
        CdataEnd: new Uint8Array([93, 93, 62]),
        CommentEnd: new Uint8Array([45, 45, 62]),
        ScriptEnd: new Uint8Array([60, 47, 115, 99, 114, 105, 112, 116]),
        StyleEnd: new Uint8Array([60, 47, 115, 116, 121, 108, 101]),
        TitleEnd: new Uint8Array([60, 47, 116, 105, 116, 108, 101])
        // `</title`
      };
      var Tokenizer = (
        /** @class */
        function() {
          function Tokenizer2(_a, cbs) {
            var _b = _a.xmlMode, xmlMode = _b === void 0 ? false : _b, _c = _a.decodeEntities, decodeEntities = _c === void 0 ? true : _c;
            this.cbs = cbs;
            this.state = State.Text;
            this.buffer = "";
            this.sectionStart = 0;
            this.index = 0;
            this.baseState = State.Text;
            this.isSpecial = false;
            this.running = true;
            this.offset = 0;
            this.currentSequence = void 0;
            this.sequenceIndex = 0;
            this.trieIndex = 0;
            this.trieCurrent = 0;
            this.entityResult = 0;
            this.entityExcess = 0;
            this.xmlMode = xmlMode;
            this.decodeEntities = decodeEntities;
            this.entityTrie = xmlMode ? decode_js_1.xmlDecodeTree : decode_js_1.htmlDecodeTree;
          }
          Tokenizer2.prototype.reset = function() {
            this.state = State.Text;
            this.buffer = "";
            this.sectionStart = 0;
            this.index = 0;
            this.baseState = State.Text;
            this.currentSequence = void 0;
            this.running = true;
            this.offset = 0;
          };
          Tokenizer2.prototype.write = function(chunk) {
            this.offset += this.buffer.length;
            this.buffer = chunk;
            this.parse();
          };
          Tokenizer2.prototype.end = function() {
            if (this.running)
              this.finish();
          };
          Tokenizer2.prototype.pause = function() {
            this.running = false;
          };
          Tokenizer2.prototype.resume = function() {
            this.running = true;
            if (this.index < this.buffer.length + this.offset) {
              this.parse();
            }
          };
          Tokenizer2.prototype.getIndex = function() {
            return this.index;
          };
          Tokenizer2.prototype.getSectionStart = function() {
            return this.sectionStart;
          };
          Tokenizer2.prototype.stateText = function(c) {
            if (c === CharCodes.Lt || !this.decodeEntities && this.fastForwardTo(CharCodes.Lt)) {
              if (this.index > this.sectionStart) {
                this.cbs.ontext(this.sectionStart, this.index);
              }
              this.state = State.BeforeTagName;
              this.sectionStart = this.index;
            } else if (this.decodeEntities && c === CharCodes.Amp) {
              this.state = State.BeforeEntity;
            }
          };
          Tokenizer2.prototype.stateSpecialStartSequence = function(c) {
            var isEnd = this.sequenceIndex === this.currentSequence.length;
            var isMatch = isEnd ? (
              // If we are at the end of the sequence, make sure the tag name has ended
              isEndOfTagSection(c)
            ) : (
              // Otherwise, do a case-insensitive comparison
              (c | 32) === this.currentSequence[this.sequenceIndex]
            );
            if (!isMatch) {
              this.isSpecial = false;
            } else if (!isEnd) {
              this.sequenceIndex++;
              return;
            }
            this.sequenceIndex = 0;
            this.state = State.InTagName;
            this.stateInTagName(c);
          };
          Tokenizer2.prototype.stateInSpecialTag = function(c) {
            if (this.sequenceIndex === this.currentSequence.length) {
              if (c === CharCodes.Gt || isWhitespace(c)) {
                var endOfText = this.index - this.currentSequence.length;
                if (this.sectionStart < endOfText) {
                  var actualIndex = this.index;
                  this.index = endOfText;
                  this.cbs.ontext(this.sectionStart, endOfText);
                  this.index = actualIndex;
                }
                this.isSpecial = false;
                this.sectionStart = endOfText + 2;
                this.stateInClosingTagName(c);
                return;
              }
              this.sequenceIndex = 0;
            }
            if ((c | 32) === this.currentSequence[this.sequenceIndex]) {
              this.sequenceIndex += 1;
            } else if (this.sequenceIndex === 0) {
              if (this.currentSequence === Sequences.TitleEnd) {
                if (this.decodeEntities && c === CharCodes.Amp) {
                  this.state = State.BeforeEntity;
                }
              } else if (this.fastForwardTo(CharCodes.Lt)) {
                this.sequenceIndex = 1;
              }
            } else {
              this.sequenceIndex = Number(c === CharCodes.Lt);
            }
          };
          Tokenizer2.prototype.stateCDATASequence = function(c) {
            if (c === Sequences.Cdata[this.sequenceIndex]) {
              if (++this.sequenceIndex === Sequences.Cdata.length) {
                this.state = State.InCommentLike;
                this.currentSequence = Sequences.CdataEnd;
                this.sequenceIndex = 0;
                this.sectionStart = this.index + 1;
              }
            } else {
              this.sequenceIndex = 0;
              this.state = State.InDeclaration;
              this.stateInDeclaration(c);
            }
          };
          Tokenizer2.prototype.fastForwardTo = function(c) {
            while (++this.index < this.buffer.length + this.offset) {
              if (this.buffer.charCodeAt(this.index - this.offset) === c) {
                return true;
              }
            }
            this.index = this.buffer.length + this.offset - 1;
            return false;
          };
          Tokenizer2.prototype.stateInCommentLike = function(c) {
            if (c === this.currentSequence[this.sequenceIndex]) {
              if (++this.sequenceIndex === this.currentSequence.length) {
                if (this.currentSequence === Sequences.CdataEnd) {
                  this.cbs.oncdata(this.sectionStart, this.index, 2);
                } else {
                  this.cbs.oncomment(this.sectionStart, this.index, 2);
                }
                this.sequenceIndex = 0;
                this.sectionStart = this.index + 1;
                this.state = State.Text;
              }
            } else if (this.sequenceIndex === 0) {
              if (this.fastForwardTo(this.currentSequence[0])) {
                this.sequenceIndex = 1;
              }
            } else if (c !== this.currentSequence[this.sequenceIndex - 1]) {
              this.sequenceIndex = 0;
            }
          };
          Tokenizer2.prototype.isTagStartChar = function(c) {
            return this.xmlMode ? !isEndOfTagSection(c) : isASCIIAlpha(c);
          };
          Tokenizer2.prototype.startSpecial = function(sequence, offset) {
            this.isSpecial = true;
            this.currentSequence = sequence;
            this.sequenceIndex = offset;
            this.state = State.SpecialStartSequence;
          };
          Tokenizer2.prototype.stateBeforeTagName = function(c) {
            if (c === CharCodes.ExclamationMark) {
              this.state = State.BeforeDeclaration;
              this.sectionStart = this.index + 1;
            } else if (c === CharCodes.Questionmark) {
              this.state = State.InProcessingInstruction;
              this.sectionStart = this.index + 1;
            } else if (this.isTagStartChar(c)) {
              var lower = c | 32;
              this.sectionStart = this.index;
              if (!this.xmlMode && lower === Sequences.TitleEnd[2]) {
                this.startSpecial(Sequences.TitleEnd, 3);
              } else {
                this.state = !this.xmlMode && lower === Sequences.ScriptEnd[2] ? State.BeforeSpecialS : State.InTagName;
              }
            } else if (c === CharCodes.Slash) {
              this.state = State.BeforeClosingTagName;
            } else {
              this.state = State.Text;
              this.stateText(c);
            }
          };
          Tokenizer2.prototype.stateInTagName = function(c) {
            if (isEndOfTagSection(c)) {
              this.cbs.onopentagname(this.sectionStart, this.index);
              this.sectionStart = -1;
              this.state = State.BeforeAttributeName;
              this.stateBeforeAttributeName(c);
            }
          };
          Tokenizer2.prototype.stateBeforeClosingTagName = function(c) {
            if (isWhitespace(c)) {
            } else if (c === CharCodes.Gt) {
              this.state = State.Text;
            } else {
              this.state = this.isTagStartChar(c) ? State.InClosingTagName : State.InSpecialComment;
              this.sectionStart = this.index;
            }
          };
          Tokenizer2.prototype.stateInClosingTagName = function(c) {
            if (c === CharCodes.Gt || isWhitespace(c)) {
              this.cbs.onclosetag(this.sectionStart, this.index);
              this.sectionStart = -1;
              this.state = State.AfterClosingTagName;
              this.stateAfterClosingTagName(c);
            }
          };
          Tokenizer2.prototype.stateAfterClosingTagName = function(c) {
            if (c === CharCodes.Gt || this.fastForwardTo(CharCodes.Gt)) {
              this.state = State.Text;
              this.baseState = State.Text;
              this.sectionStart = this.index + 1;
            }
          };
          Tokenizer2.prototype.stateBeforeAttributeName = function(c) {
            if (c === CharCodes.Gt) {
              this.cbs.onopentagend(this.index);
              if (this.isSpecial) {
                this.state = State.InSpecialTag;
                this.sequenceIndex = 0;
              } else {
                this.state = State.Text;
              }
              this.baseState = this.state;
              this.sectionStart = this.index + 1;
            } else if (c === CharCodes.Slash) {
              this.state = State.InSelfClosingTag;
            } else if (!isWhitespace(c)) {
              this.state = State.InAttributeName;
              this.sectionStart = this.index;
            }
          };
          Tokenizer2.prototype.stateInSelfClosingTag = function(c) {
            if (c === CharCodes.Gt) {
              this.cbs.onselfclosingtag(this.index);
              this.state = State.Text;
              this.baseState = State.Text;
              this.sectionStart = this.index + 1;
              this.isSpecial = false;
            } else if (!isWhitespace(c)) {
              this.state = State.BeforeAttributeName;
              this.stateBeforeAttributeName(c);
            }
          };
          Tokenizer2.prototype.stateInAttributeName = function(c) {
            if (c === CharCodes.Eq || isEndOfTagSection(c)) {
              this.cbs.onattribname(this.sectionStart, this.index);
              this.sectionStart = -1;
              this.state = State.AfterAttributeName;
              this.stateAfterAttributeName(c);
            }
          };
          Tokenizer2.prototype.stateAfterAttributeName = function(c) {
            if (c === CharCodes.Eq) {
              this.state = State.BeforeAttributeValue;
            } else if (c === CharCodes.Slash || c === CharCodes.Gt) {
              this.cbs.onattribend(QuoteType.NoValue, this.index);
              this.state = State.BeforeAttributeName;
              this.stateBeforeAttributeName(c);
            } else if (!isWhitespace(c)) {
              this.cbs.onattribend(QuoteType.NoValue, this.index);
              this.state = State.InAttributeName;
              this.sectionStart = this.index;
            }
          };
          Tokenizer2.prototype.stateBeforeAttributeValue = function(c) {
            if (c === CharCodes.DoubleQuote) {
              this.state = State.InAttributeValueDq;
              this.sectionStart = this.index + 1;
            } else if (c === CharCodes.SingleQuote) {
              this.state = State.InAttributeValueSq;
              this.sectionStart = this.index + 1;
            } else if (!isWhitespace(c)) {
              this.sectionStart = this.index;
              this.state = State.InAttributeValueNq;
              this.stateInAttributeValueNoQuotes(c);
            }
          };
          Tokenizer2.prototype.handleInAttributeValue = function(c, quote) {
            if (c === quote || !this.decodeEntities && this.fastForwardTo(quote)) {
              this.cbs.onattribdata(this.sectionStart, this.index);
              this.sectionStart = -1;
              this.cbs.onattribend(quote === CharCodes.DoubleQuote ? QuoteType.Double : QuoteType.Single, this.index);
              this.state = State.BeforeAttributeName;
            } else if (this.decodeEntities && c === CharCodes.Amp) {
              this.baseState = this.state;
              this.state = State.BeforeEntity;
            }
          };
          Tokenizer2.prototype.stateInAttributeValueDoubleQuotes = function(c) {
            this.handleInAttributeValue(c, CharCodes.DoubleQuote);
          };
          Tokenizer2.prototype.stateInAttributeValueSingleQuotes = function(c) {
            this.handleInAttributeValue(c, CharCodes.SingleQuote);
          };
          Tokenizer2.prototype.stateInAttributeValueNoQuotes = function(c) {
            if (isWhitespace(c) || c === CharCodes.Gt) {
              this.cbs.onattribdata(this.sectionStart, this.index);
              this.sectionStart = -1;
              this.cbs.onattribend(QuoteType.Unquoted, this.index);
              this.state = State.BeforeAttributeName;
              this.stateBeforeAttributeName(c);
            } else if (this.decodeEntities && c === CharCodes.Amp) {
              this.baseState = this.state;
              this.state = State.BeforeEntity;
            }
          };
          Tokenizer2.prototype.stateBeforeDeclaration = function(c) {
            if (c === CharCodes.OpeningSquareBracket) {
              this.state = State.CDATASequence;
              this.sequenceIndex = 0;
            } else {
              this.state = c === CharCodes.Dash ? State.BeforeComment : State.InDeclaration;
            }
          };
          Tokenizer2.prototype.stateInDeclaration = function(c) {
            if (c === CharCodes.Gt || this.fastForwardTo(CharCodes.Gt)) {
              this.cbs.ondeclaration(this.sectionStart, this.index);
              this.state = State.Text;
              this.sectionStart = this.index + 1;
            }
          };
          Tokenizer2.prototype.stateInProcessingInstruction = function(c) {
            if (c === CharCodes.Gt || this.fastForwardTo(CharCodes.Gt)) {
              this.cbs.onprocessinginstruction(this.sectionStart, this.index);
              this.state = State.Text;
              this.sectionStart = this.index + 1;
            }
          };
          Tokenizer2.prototype.stateBeforeComment = function(c) {
            if (c === CharCodes.Dash) {
              this.state = State.InCommentLike;
              this.currentSequence = Sequences.CommentEnd;
              this.sequenceIndex = 2;
              this.sectionStart = this.index + 1;
            } else {
              this.state = State.InDeclaration;
            }
          };
          Tokenizer2.prototype.stateInSpecialComment = function(c) {
            if (c === CharCodes.Gt || this.fastForwardTo(CharCodes.Gt)) {
              this.cbs.oncomment(this.sectionStart, this.index, 0);
              this.state = State.Text;
              this.sectionStart = this.index + 1;
            }
          };
          Tokenizer2.prototype.stateBeforeSpecialS = function(c) {
            var lower = c | 32;
            if (lower === Sequences.ScriptEnd[3]) {
              this.startSpecial(Sequences.ScriptEnd, 4);
            } else if (lower === Sequences.StyleEnd[3]) {
              this.startSpecial(Sequences.StyleEnd, 4);
            } else {
              this.state = State.InTagName;
              this.stateInTagName(c);
            }
          };
          Tokenizer2.prototype.stateBeforeEntity = function(c) {
            this.entityExcess = 1;
            this.entityResult = 0;
            if (c === CharCodes.Number) {
              this.state = State.BeforeNumericEntity;
            } else if (c === CharCodes.Amp) {
            } else {
              this.trieIndex = 0;
              this.trieCurrent = this.entityTrie[0];
              this.state = State.InNamedEntity;
              this.stateInNamedEntity(c);
            }
          };
          Tokenizer2.prototype.stateInNamedEntity = function(c) {
            this.entityExcess += 1;
            this.trieIndex = (0, decode_js_1.determineBranch)(this.entityTrie, this.trieCurrent, this.trieIndex + 1, c);
            if (this.trieIndex < 0) {
              this.emitNamedEntity();
              this.index--;
              return;
            }
            this.trieCurrent = this.entityTrie[this.trieIndex];
            var masked = this.trieCurrent & decode_js_1.BinTrieFlags.VALUE_LENGTH;
            if (masked) {
              var valueLength = (masked >> 14) - 1;
              if (!this.allowLegacyEntity() && c !== CharCodes.Semi) {
                this.trieIndex += valueLength;
              } else {
                var entityStart = this.index - this.entityExcess + 1;
                if (entityStart > this.sectionStart) {
                  this.emitPartial(this.sectionStart, entityStart);
                }
                this.entityResult = this.trieIndex;
                this.trieIndex += valueLength;
                this.entityExcess = 0;
                this.sectionStart = this.index + 1;
                if (valueLength === 0) {
                  this.emitNamedEntity();
                }
              }
            }
          };
          Tokenizer2.prototype.emitNamedEntity = function() {
            this.state = this.baseState;
            if (this.entityResult === 0) {
              return;
            }
            var valueLength = (this.entityTrie[this.entityResult] & decode_js_1.BinTrieFlags.VALUE_LENGTH) >> 14;
            switch (valueLength) {
              case 1: {
                this.emitCodePoint(this.entityTrie[this.entityResult] & ~decode_js_1.BinTrieFlags.VALUE_LENGTH);
                break;
              }
              case 2: {
                this.emitCodePoint(this.entityTrie[this.entityResult + 1]);
                break;
              }
              case 3: {
                this.emitCodePoint(this.entityTrie[this.entityResult + 1]);
                this.emitCodePoint(this.entityTrie[this.entityResult + 2]);
              }
            }
          };
          Tokenizer2.prototype.stateBeforeNumericEntity = function(c) {
            if ((c | 32) === CharCodes.LowerX) {
              this.entityExcess++;
              this.state = State.InHexEntity;
            } else {
              this.state = State.InNumericEntity;
              this.stateInNumericEntity(c);
            }
          };
          Tokenizer2.prototype.emitNumericEntity = function(strict) {
            var entityStart = this.index - this.entityExcess - 1;
            var numberStart = entityStart + 2 + Number(this.state === State.InHexEntity);
            if (numberStart !== this.index) {
              if (entityStart > this.sectionStart) {
                this.emitPartial(this.sectionStart, entityStart);
              }
              this.sectionStart = this.index + Number(strict);
              this.emitCodePoint((0, decode_js_1.replaceCodePoint)(this.entityResult));
            }
            this.state = this.baseState;
          };
          Tokenizer2.prototype.stateInNumericEntity = function(c) {
            if (c === CharCodes.Semi) {
              this.emitNumericEntity(true);
            } else if (isNumber(c)) {
              this.entityResult = this.entityResult * 10 + (c - CharCodes.Zero);
              this.entityExcess++;
            } else {
              if (this.allowLegacyEntity()) {
                this.emitNumericEntity(false);
              } else {
                this.state = this.baseState;
              }
              this.index--;
            }
          };
          Tokenizer2.prototype.stateInHexEntity = function(c) {
            if (c === CharCodes.Semi) {
              this.emitNumericEntity(true);
            } else if (isNumber(c)) {
              this.entityResult = this.entityResult * 16 + (c - CharCodes.Zero);
              this.entityExcess++;
            } else if (isHexDigit(c)) {
              this.entityResult = this.entityResult * 16 + ((c | 32) - CharCodes.LowerA + 10);
              this.entityExcess++;
            } else {
              if (this.allowLegacyEntity()) {
                this.emitNumericEntity(false);
              } else {
                this.state = this.baseState;
              }
              this.index--;
            }
          };
          Tokenizer2.prototype.allowLegacyEntity = function() {
            return !this.xmlMode && (this.baseState === State.Text || this.baseState === State.InSpecialTag);
          };
          Tokenizer2.prototype.cleanup = function() {
            if (this.running && this.sectionStart !== this.index) {
              if (this.state === State.Text || this.state === State.InSpecialTag && this.sequenceIndex === 0) {
                this.cbs.ontext(this.sectionStart, this.index);
                this.sectionStart = this.index;
              } else if (this.state === State.InAttributeValueDq || this.state === State.InAttributeValueSq || this.state === State.InAttributeValueNq) {
                this.cbs.onattribdata(this.sectionStart, this.index);
                this.sectionStart = this.index;
              }
            }
          };
          Tokenizer2.prototype.shouldContinue = function() {
            return this.index < this.buffer.length + this.offset && this.running;
          };
          Tokenizer2.prototype.parse = function() {
            while (this.shouldContinue()) {
              var c = this.buffer.charCodeAt(this.index - this.offset);
              switch (this.state) {
                case State.Text: {
                  this.stateText(c);
                  break;
                }
                case State.SpecialStartSequence: {
                  this.stateSpecialStartSequence(c);
                  break;
                }
                case State.InSpecialTag: {
                  this.stateInSpecialTag(c);
                  break;
                }
                case State.CDATASequence: {
                  this.stateCDATASequence(c);
                  break;
                }
                case State.InAttributeValueDq: {
                  this.stateInAttributeValueDoubleQuotes(c);
                  break;
                }
                case State.InAttributeName: {
                  this.stateInAttributeName(c);
                  break;
                }
                case State.InCommentLike: {
                  this.stateInCommentLike(c);
                  break;
                }
                case State.InSpecialComment: {
                  this.stateInSpecialComment(c);
                  break;
                }
                case State.BeforeAttributeName: {
                  this.stateBeforeAttributeName(c);
                  break;
                }
                case State.InTagName: {
                  this.stateInTagName(c);
                  break;
                }
                case State.InClosingTagName: {
                  this.stateInClosingTagName(c);
                  break;
                }
                case State.BeforeTagName: {
                  this.stateBeforeTagName(c);
                  break;
                }
                case State.AfterAttributeName: {
                  this.stateAfterAttributeName(c);
                  break;
                }
                case State.InAttributeValueSq: {
                  this.stateInAttributeValueSingleQuotes(c);
                  break;
                }
                case State.BeforeAttributeValue: {
                  this.stateBeforeAttributeValue(c);
                  break;
                }
                case State.BeforeClosingTagName: {
                  this.stateBeforeClosingTagName(c);
                  break;
                }
                case State.AfterClosingTagName: {
                  this.stateAfterClosingTagName(c);
                  break;
                }
                case State.BeforeSpecialS: {
                  this.stateBeforeSpecialS(c);
                  break;
                }
                case State.InAttributeValueNq: {
                  this.stateInAttributeValueNoQuotes(c);
                  break;
                }
                case State.InSelfClosingTag: {
                  this.stateInSelfClosingTag(c);
                  break;
                }
                case State.InDeclaration: {
                  this.stateInDeclaration(c);
                  break;
                }
                case State.BeforeDeclaration: {
                  this.stateBeforeDeclaration(c);
                  break;
                }
                case State.BeforeComment: {
                  this.stateBeforeComment(c);
                  break;
                }
                case State.InProcessingInstruction: {
                  this.stateInProcessingInstruction(c);
                  break;
                }
                case State.InNamedEntity: {
                  this.stateInNamedEntity(c);
                  break;
                }
                case State.BeforeEntity: {
                  this.stateBeforeEntity(c);
                  break;
                }
                case State.InHexEntity: {
                  this.stateInHexEntity(c);
                  break;
                }
                case State.InNumericEntity: {
                  this.stateInNumericEntity(c);
                  break;
                }
                default: {
                  this.stateBeforeNumericEntity(c);
                }
              }
              this.index++;
            }
            this.cleanup();
          };
          Tokenizer2.prototype.finish = function() {
            if (this.state === State.InNamedEntity) {
              this.emitNamedEntity();
            }
            if (this.sectionStart < this.index) {
              this.handleTrailingData();
            }
            this.cbs.onend();
          };
          Tokenizer2.prototype.handleTrailingData = function() {
            var endIndex = this.buffer.length + this.offset;
            if (this.state === State.InCommentLike) {
              if (this.currentSequence === Sequences.CdataEnd) {
                this.cbs.oncdata(this.sectionStart, endIndex, 0);
              } else {
                this.cbs.oncomment(this.sectionStart, endIndex, 0);
              }
            } else if (this.state === State.InNumericEntity && this.allowLegacyEntity()) {
              this.emitNumericEntity(false);
            } else if (this.state === State.InHexEntity && this.allowLegacyEntity()) {
              this.emitNumericEntity(false);
            } else if (this.state === State.InTagName || this.state === State.BeforeAttributeName || this.state === State.BeforeAttributeValue || this.state === State.AfterAttributeName || this.state === State.InAttributeName || this.state === State.InAttributeValueSq || this.state === State.InAttributeValueDq || this.state === State.InAttributeValueNq || this.state === State.InClosingTagName) {
            } else {
              this.cbs.ontext(this.sectionStart, endIndex);
            }
          };
          Tokenizer2.prototype.emitPartial = function(start, endIndex) {
            if (this.baseState !== State.Text && this.baseState !== State.InSpecialTag) {
              this.cbs.onattribdata(start, endIndex);
            } else {
              this.cbs.ontext(start, endIndex);
            }
          };
          Tokenizer2.prototype.emitCodePoint = function(cp) {
            if (this.baseState !== State.Text && this.baseState !== State.InSpecialTag) {
              this.cbs.onattribentity(cp);
            } else {
              this.cbs.ontextentity(cp);
            }
          };
          return Tokenizer2;
        }()
      );
      exports.default = Tokenizer;
    }
  });

  // node_modules/htmlparser2/lib/Parser.js
  var require_Parser = __commonJS({
    "node_modules/htmlparser2/lib/Parser.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports && exports.__importStar || function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Parser = void 0;
      var Tokenizer_js_1 = __importStar(require_Tokenizer());
      var decode_js_1 = require_decode();
      var formTags = /* @__PURE__ */ new Set([
        "input",
        "option",
        "optgroup",
        "select",
        "button",
        "datalist",
        "textarea"
      ]);
      var pTag = /* @__PURE__ */ new Set(["p"]);
      var tableSectionTags = /* @__PURE__ */ new Set(["thead", "tbody"]);
      var ddtTags = /* @__PURE__ */ new Set(["dd", "dt"]);
      var rtpTags = /* @__PURE__ */ new Set(["rt", "rp"]);
      var openImpliesClose = /* @__PURE__ */ new Map([
        ["tr", /* @__PURE__ */ new Set(["tr", "th", "td"])],
        ["th", /* @__PURE__ */ new Set(["th"])],
        ["td", /* @__PURE__ */ new Set(["thead", "th", "td"])],
        ["body", /* @__PURE__ */ new Set(["head", "link", "script"])],
        ["li", /* @__PURE__ */ new Set(["li"])],
        ["p", pTag],
        ["h1", pTag],
        ["h2", pTag],
        ["h3", pTag],
        ["h4", pTag],
        ["h5", pTag],
        ["h6", pTag],
        ["select", formTags],
        ["input", formTags],
        ["output", formTags],
        ["button", formTags],
        ["datalist", formTags],
        ["textarea", formTags],
        ["option", /* @__PURE__ */ new Set(["option"])],
        ["optgroup", /* @__PURE__ */ new Set(["optgroup", "option"])],
        ["dd", ddtTags],
        ["dt", ddtTags],
        ["address", pTag],
        ["article", pTag],
        ["aside", pTag],
        ["blockquote", pTag],
        ["details", pTag],
        ["div", pTag],
        ["dl", pTag],
        ["fieldset", pTag],
        ["figcaption", pTag],
        ["figure", pTag],
        ["footer", pTag],
        ["form", pTag],
        ["header", pTag],
        ["hr", pTag],
        ["main", pTag],
        ["nav", pTag],
        ["ol", pTag],
        ["pre", pTag],
        ["section", pTag],
        ["table", pTag],
        ["ul", pTag],
        ["rt", rtpTags],
        ["rp", rtpTags],
        ["tbody", tableSectionTags],
        ["tfoot", tableSectionTags]
      ]);
      var voidElements = /* @__PURE__ */ new Set([
        "area",
        "base",
        "basefont",
        "br",
        "col",
        "command",
        "embed",
        "frame",
        "hr",
        "img",
        "input",
        "isindex",
        "keygen",
        "link",
        "meta",
        "param",
        "source",
        "track",
        "wbr"
      ]);
      var foreignContextElements = /* @__PURE__ */ new Set(["math", "svg"]);
      var htmlIntegrationElements = /* @__PURE__ */ new Set([
        "mi",
        "mo",
        "mn",
        "ms",
        "mtext",
        "annotation-xml",
        "foreignobject",
        "desc",
        "title"
      ]);
      var reNameEnd = /\s|\//;
      var Parser = (
        /** @class */
        function() {
          function Parser2(cbs, options) {
            if (options === void 0) {
              options = {};
            }
            var _a, _b, _c, _d, _e;
            this.options = options;
            this.startIndex = 0;
            this.endIndex = 0;
            this.openTagStart = 0;
            this.tagname = "";
            this.attribname = "";
            this.attribvalue = "";
            this.attribs = null;
            this.stack = [];
            this.foreignContext = [];
            this.buffers = [];
            this.bufferOffset = 0;
            this.writeIndex = 0;
            this.ended = false;
            this.cbs = cbs !== null && cbs !== void 0 ? cbs : {};
            this.lowerCaseTagNames = (_a = options.lowerCaseTags) !== null && _a !== void 0 ? _a : !options.xmlMode;
            this.lowerCaseAttributeNames = (_b = options.lowerCaseAttributeNames) !== null && _b !== void 0 ? _b : !options.xmlMode;
            this.tokenizer = new ((_c = options.Tokenizer) !== null && _c !== void 0 ? _c : Tokenizer_js_1.default)(this.options, this);
            (_e = (_d = this.cbs).onparserinit) === null || _e === void 0 ? void 0 : _e.call(_d, this);
          }
          Parser2.prototype.ontext = function(start, endIndex) {
            var _a, _b;
            var data = this.getSlice(start, endIndex);
            this.endIndex = endIndex - 1;
            (_b = (_a = this.cbs).ontext) === null || _b === void 0 ? void 0 : _b.call(_a, data);
            this.startIndex = endIndex;
          };
          Parser2.prototype.ontextentity = function(cp) {
            var _a, _b;
            var index = this.tokenizer.getSectionStart();
            this.endIndex = index - 1;
            (_b = (_a = this.cbs).ontext) === null || _b === void 0 ? void 0 : _b.call(_a, (0, decode_js_1.fromCodePoint)(cp));
            this.startIndex = index;
          };
          Parser2.prototype.isVoidElement = function(name) {
            return !this.options.xmlMode && voidElements.has(name);
          };
          Parser2.prototype.onopentagname = function(start, endIndex) {
            this.endIndex = endIndex;
            var name = this.getSlice(start, endIndex);
            if (this.lowerCaseTagNames) {
              name = name.toLowerCase();
            }
            this.emitOpenTag(name);
          };
          Parser2.prototype.emitOpenTag = function(name) {
            var _a, _b, _c, _d;
            this.openTagStart = this.startIndex;
            this.tagname = name;
            var impliesClose = !this.options.xmlMode && openImpliesClose.get(name);
            if (impliesClose) {
              while (this.stack.length > 0 && impliesClose.has(this.stack[this.stack.length - 1])) {
                var element = this.stack.pop();
                (_b = (_a = this.cbs).onclosetag) === null || _b === void 0 ? void 0 : _b.call(_a, element, true);
              }
            }
            if (!this.isVoidElement(name)) {
              this.stack.push(name);
              if (foreignContextElements.has(name)) {
                this.foreignContext.push(true);
              } else if (htmlIntegrationElements.has(name)) {
                this.foreignContext.push(false);
              }
            }
            (_d = (_c = this.cbs).onopentagname) === null || _d === void 0 ? void 0 : _d.call(_c, name);
            if (this.cbs.onopentag)
              this.attribs = {};
          };
          Parser2.prototype.endOpenTag = function(isImplied) {
            var _a, _b;
            this.startIndex = this.openTagStart;
            if (this.attribs) {
              (_b = (_a = this.cbs).onopentag) === null || _b === void 0 ? void 0 : _b.call(_a, this.tagname, this.attribs, isImplied);
              this.attribs = null;
            }
            if (this.cbs.onclosetag && this.isVoidElement(this.tagname)) {
              this.cbs.onclosetag(this.tagname, true);
            }
            this.tagname = "";
          };
          Parser2.prototype.onopentagend = function(endIndex) {
            this.endIndex = endIndex;
            this.endOpenTag(false);
            this.startIndex = endIndex + 1;
          };
          Parser2.prototype.onclosetag = function(start, endIndex) {
            var _a, _b, _c, _d, _e, _f;
            this.endIndex = endIndex;
            var name = this.getSlice(start, endIndex);
            if (this.lowerCaseTagNames) {
              name = name.toLowerCase();
            }
            if (foreignContextElements.has(name) || htmlIntegrationElements.has(name)) {
              this.foreignContext.pop();
            }
            if (!this.isVoidElement(name)) {
              var pos = this.stack.lastIndexOf(name);
              if (pos !== -1) {
                if (this.cbs.onclosetag) {
                  var count = this.stack.length - pos;
                  while (count--) {
                    this.cbs.onclosetag(this.stack.pop(), count !== 0);
                  }
                } else
                  this.stack.length = pos;
              } else if (!this.options.xmlMode && name === "p") {
                this.emitOpenTag("p");
                this.closeCurrentTag(true);
              }
            } else if (!this.options.xmlMode && name === "br") {
              (_b = (_a = this.cbs).onopentagname) === null || _b === void 0 ? void 0 : _b.call(_a, "br");
              (_d = (_c = this.cbs).onopentag) === null || _d === void 0 ? void 0 : _d.call(_c, "br", {}, true);
              (_f = (_e = this.cbs).onclosetag) === null || _f === void 0 ? void 0 : _f.call(_e, "br", false);
            }
            this.startIndex = endIndex + 1;
          };
          Parser2.prototype.onselfclosingtag = function(endIndex) {
            this.endIndex = endIndex;
            if (this.options.xmlMode || this.options.recognizeSelfClosing || this.foreignContext[this.foreignContext.length - 1]) {
              this.closeCurrentTag(false);
              this.startIndex = endIndex + 1;
            } else {
              this.onopentagend(endIndex);
            }
          };
          Parser2.prototype.closeCurrentTag = function(isOpenImplied) {
            var _a, _b;
            var name = this.tagname;
            this.endOpenTag(isOpenImplied);
            if (this.stack[this.stack.length - 1] === name) {
              (_b = (_a = this.cbs).onclosetag) === null || _b === void 0 ? void 0 : _b.call(_a, name, !isOpenImplied);
              this.stack.pop();
            }
          };
          Parser2.prototype.onattribname = function(start, endIndex) {
            this.startIndex = start;
            var name = this.getSlice(start, endIndex);
            this.attribname = this.lowerCaseAttributeNames ? name.toLowerCase() : name;
          };
          Parser2.prototype.onattribdata = function(start, endIndex) {
            this.attribvalue += this.getSlice(start, endIndex);
          };
          Parser2.prototype.onattribentity = function(cp) {
            this.attribvalue += (0, decode_js_1.fromCodePoint)(cp);
          };
          Parser2.prototype.onattribend = function(quote, endIndex) {
            var _a, _b;
            this.endIndex = endIndex;
            (_b = (_a = this.cbs).onattribute) === null || _b === void 0 ? void 0 : _b.call(_a, this.attribname, this.attribvalue, quote === Tokenizer_js_1.QuoteType.Double ? '"' : quote === Tokenizer_js_1.QuoteType.Single ? "'" : quote === Tokenizer_js_1.QuoteType.NoValue ? void 0 : null);
            if (this.attribs && !Object.prototype.hasOwnProperty.call(this.attribs, this.attribname)) {
              this.attribs[this.attribname] = this.attribvalue;
            }
            this.attribvalue = "";
          };
          Parser2.prototype.getInstructionName = function(value) {
            var index = value.search(reNameEnd);
            var name = index < 0 ? value : value.substr(0, index);
            if (this.lowerCaseTagNames) {
              name = name.toLowerCase();
            }
            return name;
          };
          Parser2.prototype.ondeclaration = function(start, endIndex) {
            this.endIndex = endIndex;
            var value = this.getSlice(start, endIndex);
            if (this.cbs.onprocessinginstruction) {
              var name = this.getInstructionName(value);
              this.cbs.onprocessinginstruction("!".concat(name), "!".concat(value));
            }
            this.startIndex = endIndex + 1;
          };
          Parser2.prototype.onprocessinginstruction = function(start, endIndex) {
            this.endIndex = endIndex;
            var value = this.getSlice(start, endIndex);
            if (this.cbs.onprocessinginstruction) {
              var name = this.getInstructionName(value);
              this.cbs.onprocessinginstruction("?".concat(name), "?".concat(value));
            }
            this.startIndex = endIndex + 1;
          };
          Parser2.prototype.oncomment = function(start, endIndex, offset) {
            var _a, _b, _c, _d;
            this.endIndex = endIndex;
            (_b = (_a = this.cbs).oncomment) === null || _b === void 0 ? void 0 : _b.call(_a, this.getSlice(start, endIndex - offset));
            (_d = (_c = this.cbs).oncommentend) === null || _d === void 0 ? void 0 : _d.call(_c);
            this.startIndex = endIndex + 1;
          };
          Parser2.prototype.oncdata = function(start, endIndex, offset) {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
            this.endIndex = endIndex;
            var value = this.getSlice(start, endIndex - offset);
            if (this.options.xmlMode || this.options.recognizeCDATA) {
              (_b = (_a = this.cbs).oncdatastart) === null || _b === void 0 ? void 0 : _b.call(_a);
              (_d = (_c = this.cbs).ontext) === null || _d === void 0 ? void 0 : _d.call(_c, value);
              (_f = (_e = this.cbs).oncdataend) === null || _f === void 0 ? void 0 : _f.call(_e);
            } else {
              (_h = (_g = this.cbs).oncomment) === null || _h === void 0 ? void 0 : _h.call(_g, "[CDATA[".concat(value, "]]"));
              (_k = (_j = this.cbs).oncommentend) === null || _k === void 0 ? void 0 : _k.call(_j);
            }
            this.startIndex = endIndex + 1;
          };
          Parser2.prototype.onend = function() {
            var _a, _b;
            if (this.cbs.onclosetag) {
              this.endIndex = this.startIndex;
              for (var index = this.stack.length; index > 0; this.cbs.onclosetag(this.stack[--index], true))
                ;
            }
            (_b = (_a = this.cbs).onend) === null || _b === void 0 ? void 0 : _b.call(_a);
          };
          Parser2.prototype.reset = function() {
            var _a, _b, _c, _d;
            (_b = (_a = this.cbs).onreset) === null || _b === void 0 ? void 0 : _b.call(_a);
            this.tokenizer.reset();
            this.tagname = "";
            this.attribname = "";
            this.attribs = null;
            this.stack.length = 0;
            this.startIndex = 0;
            this.endIndex = 0;
            (_d = (_c = this.cbs).onparserinit) === null || _d === void 0 ? void 0 : _d.call(_c, this);
            this.buffers.length = 0;
            this.bufferOffset = 0;
            this.writeIndex = 0;
            this.ended = false;
          };
          Parser2.prototype.parseComplete = function(data) {
            this.reset();
            this.end(data);
          };
          Parser2.prototype.getSlice = function(start, end) {
            while (start - this.bufferOffset >= this.buffers[0].length) {
              this.shiftBuffer();
            }
            var slice = this.buffers[0].slice(start - this.bufferOffset, end - this.bufferOffset);
            while (end - this.bufferOffset > this.buffers[0].length) {
              this.shiftBuffer();
              slice += this.buffers[0].slice(0, end - this.bufferOffset);
            }
            return slice;
          };
          Parser2.prototype.shiftBuffer = function() {
            this.bufferOffset += this.buffers[0].length;
            this.writeIndex--;
            this.buffers.shift();
          };
          Parser2.prototype.write = function(chunk) {
            var _a, _b;
            if (this.ended) {
              (_b = (_a = this.cbs).onerror) === null || _b === void 0 ? void 0 : _b.call(_a, new Error(".write() after done!"));
              return;
            }
            this.buffers.push(chunk);
            if (this.tokenizer.running) {
              this.tokenizer.write(chunk);
              this.writeIndex++;
            }
          };
          Parser2.prototype.end = function(chunk) {
            var _a, _b;
            if (this.ended) {
              (_b = (_a = this.cbs).onerror) === null || _b === void 0 ? void 0 : _b.call(_a, new Error(".end() after done!"));
              return;
            }
            if (chunk)
              this.write(chunk);
            this.ended = true;
            this.tokenizer.end();
          };
          Parser2.prototype.pause = function() {
            this.tokenizer.pause();
          };
          Parser2.prototype.resume = function() {
            this.tokenizer.resume();
            while (this.tokenizer.running && this.writeIndex < this.buffers.length) {
              this.tokenizer.write(this.buffers[this.writeIndex++]);
            }
            if (this.ended)
              this.tokenizer.end();
          };
          Parser2.prototype.parseChunk = function(chunk) {
            this.write(chunk);
          };
          Parser2.prototype.done = function(chunk) {
            this.end(chunk);
          };
          return Parser2;
        }()
      );
      exports.Parser = Parser;
    }
  });

  // node_modules/htmlparser2/lib/index.js
  var require_lib9 = __commonJS({
    "node_modules/htmlparser2/lib/index.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports && exports.__importStar || function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.DomUtils = exports.parseFeed = exports.getFeed = exports.ElementType = exports.Tokenizer = exports.createDomStream = exports.parseDOM = exports.parseDocument = exports.DefaultHandler = exports.DomHandler = exports.Parser = void 0;
      var Parser_js_1 = require_Parser();
      var Parser_js_2 = require_Parser();
      Object.defineProperty(exports, "Parser", { enumerable: true, get: function() {
        return Parser_js_2.Parser;
      } });
      var domhandler_1 = require_lib2();
      var domhandler_2 = require_lib2();
      Object.defineProperty(exports, "DomHandler", { enumerable: true, get: function() {
        return domhandler_2.DomHandler;
      } });
      Object.defineProperty(exports, "DefaultHandler", { enumerable: true, get: function() {
        return domhandler_2.DomHandler;
      } });
      function parseDocument(data, options) {
        var handler = new domhandler_1.DomHandler(void 0, options);
        new Parser_js_1.Parser(handler, options).end(data);
        return handler.root;
      }
      exports.parseDocument = parseDocument;
      function parseDOM(data, options) {
        return parseDocument(data, options).children;
      }
      exports.parseDOM = parseDOM;
      function createDomStream(callback, options, elementCallback) {
        var handler = new domhandler_1.DomHandler(callback, options, elementCallback);
        return new Parser_js_1.Parser(handler, options);
      }
      exports.createDomStream = createDomStream;
      var Tokenizer_js_1 = require_Tokenizer();
      Object.defineProperty(exports, "Tokenizer", { enumerable: true, get: function() {
        return __importDefault(Tokenizer_js_1).default;
      } });
      exports.ElementType = __importStar(require_lib());
      var domutils_1 = require_lib5();
      var domutils_2 = require_lib5();
      Object.defineProperty(exports, "getFeed", { enumerable: true, get: function() {
        return domutils_2.getFeed;
      } });
      var parseFeedDefaultOptions = { xmlMode: true };
      function parseFeed(feed, options) {
        if (options === void 0) {
          options = parseFeedDefaultOptions;
        }
        return (0, domutils_1.getFeed)(parseDOM(feed, options));
      }
      exports.parseFeed = parseFeed;
      exports.DomUtils = __importStar(require_lib5());
    }
  });

  // node_modules/cheerio/lib/index.js
  var require_lib10 = __commonJS({
    "node_modules/cheerio/lib/index.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      });
      var __exportStar = exports && exports.__exportStar || function(m, exports2) {
        for (var p in m)
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
            __createBinding(exports2, m, p);
      };
      var __importStar = exports && exports.__importStar || function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.root = exports.parseHTML = exports.merge = exports.contains = exports.text = exports.xml = exports.html = exports.load = void 0;
      __exportStar(require_types(), exports);
      var load_js_1 = require_load();
      var parse_js_1 = require_parse3();
      var parse5_adapter_js_1 = require_parse5_adapter();
      var dom_serializer_1 = __importDefault(require_lib4());
      var htmlparser2_1 = require_lib9();
      var parse = (0, parse_js_1.getParse)(function(content, options, isDocument, context) {
        return options.xmlMode || options._useHtmlParser2 ? (0, htmlparser2_1.parseDocument)(content, options) : (0, parse5_adapter_js_1.parseWithParse5)(content, options, isDocument, context);
      });
      exports.load = (0, load_js_1.getLoad)(parse, function(dom, options) {
        return options.xmlMode || options._useHtmlParser2 ? (0, dom_serializer_1.default)(dom, options) : (0, parse5_adapter_js_1.renderWithParse5)(dom);
      });
      exports.default = (0, exports.load)([]);
      var static_js_1 = require_static();
      Object.defineProperty(exports, "html", { enumerable: true, get: function() {
        return static_js_1.html;
      } });
      Object.defineProperty(exports, "xml", { enumerable: true, get: function() {
        return static_js_1.xml;
      } });
      Object.defineProperty(exports, "text", { enumerable: true, get: function() {
        return static_js_1.text;
      } });
      var staticMethods = __importStar(require_static());
      exports.contains = staticMethods.contains;
      exports.merge = staticMethods.merge;
      exports.parseHTML = staticMethods.parseHTML;
      exports.root = staticMethods.root;
    }
  });

  // flyscrape.js
  var require_flyscrape = __commonJS({
    "flyscrape.js"(exports, module) {
      var cheerio = require_lib10();
      module.exports = {
        parse: cheerio.load
      };
    }
  });
  require_flyscrape();
})();
