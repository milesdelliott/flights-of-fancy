module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/EdX":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"glide":"glide__17thx"};

/***/ }),

/***/ "/QC5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribers", function() { return subscribers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentUrl", function() { return getCurrentUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "route", function() { return route; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return Router; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Route", function() { return Route; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return Link; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("KM04");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);


var EMPTY$1 = {};

function assign(obj, props) {
	// eslint-disable-next-line guard-for-in
	for (var i in props) {
		obj[i] = props[i];
	}
	return obj;
}

function exec(url, route, opts) {
	if (opts === void 0) opts = EMPTY$1;

	var reg = /(?:\?([^#]*))?(#.*)?$/,
	    c = url.match(reg),
	    matches = {},
	    ret;
	if (c && c[1]) {
		var p = c[1].split('&');
		for (var i = 0; i < p.length; i++) {
			var r = p[i].split('=');
			matches[decodeURIComponent(r[0])] = decodeURIComponent(r.slice(1).join('='));
		}
	}
	url = segmentize(url.replace(reg, ''));
	route = segmentize(route || '');
	var max = Math.max(url.length, route.length);
	for (var i$1 = 0; i$1 < max; i$1++) {
		if (route[i$1] && route[i$1].charAt(0) === ':') {
			var param = route[i$1].replace(/(^\:|[+*?]+$)/g, ''),
			    flags = (route[i$1].match(/[+*?]+$/) || EMPTY$1)[0] || '',
			    plus = ~flags.indexOf('+'),
			    star = ~flags.indexOf('*'),
			    val = url[i$1] || '';
			if (!val && !star && (flags.indexOf('?') < 0 || plus)) {
				ret = false;
				break;
			}
			matches[param] = decodeURIComponent(val);
			if (plus || star) {
				matches[param] = url.slice(i$1).map(decodeURIComponent).join('/');
				break;
			}
		} else if (route[i$1] !== url[i$1]) {
			ret = false;
			break;
		}
	}
	if (opts.default !== true && ret === false) {
		return false;
	}
	return matches;
}

function pathRankSort(a, b) {
	var aAttr = a.attributes || EMPTY$1,
	    bAttr = b.attributes || EMPTY$1;
	if (aAttr.default) {
		return 1;
	}
	if (bAttr.default) {
		return -1;
	}
	var diff = rank(aAttr.path) - rank(bAttr.path);
	return diff || aAttr.path.length - bAttr.path.length;
}

function segmentize(url) {
	return strip(url).split('/');
}

function rank(url) {
	return (strip(url).match(/\/+/g) || '').length;
}

function strip(url) {
	return url.replace(/(^\/+|\/+$)/g, '');
}

var customHistory = null;

var ROUTERS = [];

var subscribers = [];

var EMPTY = {};

function isPreactElement(node) {
	return node.__preactattr_ != null || typeof Symbol !== 'undefined' && node[Symbol.for('preactattr')] != null;
}

function setUrl(url, type) {
	if (type === void 0) type = 'push';

	if (customHistory && customHistory[type]) {
		customHistory[type](url);
	} else if (typeof history !== 'undefined' && history[type + 'State']) {
		history[type + 'State'](null, null, url);
	}
}

function getCurrentUrl() {
	var url;
	if (customHistory && customHistory.location) {
		url = customHistory.location;
	} else if (customHistory && customHistory.getCurrentLocation) {
		url = customHistory.getCurrentLocation();
	} else {
		url = typeof location !== 'undefined' ? location : EMPTY;
	}
	return "" + (url.pathname || '') + (url.search || '');
}

function route(url, replace) {
	if (replace === void 0) replace = false;

	if (typeof url !== 'string' && url.url) {
		replace = url.replace;
		url = url.url;
	}

	// only push URL into history if we can handle it
	if (canRoute(url)) {
		setUrl(url, replace ? 'replace' : 'push');
	}

	return routeTo(url);
}

/** Check if the given URL can be handled by any router instances. */
function canRoute(url) {
	for (var i = ROUTERS.length; i--;) {
		if (ROUTERS[i].canRoute(url)) {
			return true;
		}
	}
	return false;
}

/** Tell all router instances to handle the given URL.  */
function routeTo(url) {
	var didRoute = false;
	for (var i = 0; i < ROUTERS.length; i++) {
		if (ROUTERS[i].routeTo(url) === true) {
			didRoute = true;
		}
	}
	for (var i$1 = subscribers.length; i$1--;) {
		subscribers[i$1](url);
	}
	return didRoute;
}

function routeFromLink(node) {
	// only valid elements
	if (!node || !node.getAttribute) {
		return;
	}

	var href = node.getAttribute('href'),
	    target = node.getAttribute('target');

	// ignore links with targets and non-path URLs
	if (!href || !href.match(/^\//g) || target && !target.match(/^_?self$/i)) {
		return;
	}

	// attempt to route, if no match simply cede control to browser
	return route(href);
}

function handleLinkClick(e) {
	if (e.button == 0) {
		routeFromLink(e.currentTarget || e.target || this);
		return prevent(e);
	}
}

function prevent(e) {
	if (e) {
		if (e.stopImmediatePropagation) {
			e.stopImmediatePropagation();
		}
		if (e.stopPropagation) {
			e.stopPropagation();
		}
		e.preventDefault();
	}
	return false;
}

function delegateLinkHandler(e) {
	// ignore events the browser takes care of already:
	if (e.ctrlKey || e.metaKey || e.altKey || e.shiftKey || e.button !== 0) {
		return;
	}

	var t = e.target;
	do {
		if (String(t.nodeName).toUpperCase() === 'A' && t.getAttribute('href') && isPreactElement(t)) {
			if (t.hasAttribute('native')) {
				return;
			}
			// if link is handled by the router, prevent browser defaults
			if (routeFromLink(t)) {
				return prevent(e);
			}
		}
	} while (t = t.parentNode);
}

var eventListenersInitialized = false;

function initEventListeners() {
	if (eventListenersInitialized) {
		return;
	}

	if (typeof addEventListener === 'function') {
		if (!customHistory) {
			addEventListener('popstate', function () {
				return routeTo(getCurrentUrl());
			});
		}
		addEventListener('click', delegateLinkHandler);
	}
	eventListenersInitialized = true;
}

var Router = function (Component$$1) {
	function Router(props) {
		Component$$1.call(this, props);
		if (props.history) {
			customHistory = props.history;
		}

		this.state = {
			url: props.url || getCurrentUrl()
		};

		initEventListeners();
	}

	if (Component$$1) Router.__proto__ = Component$$1;
	Router.prototype = Object.create(Component$$1 && Component$$1.prototype);
	Router.prototype.constructor = Router;

	Router.prototype.shouldComponentUpdate = function shouldComponentUpdate(props) {
		if (props.static !== true) {
			return true;
		}
		return props.url !== this.props.url || props.onChange !== this.props.onChange;
	};

	/** Check if the given URL can be matched against any children */
	Router.prototype.canRoute = function canRoute(url) {
		return this.getMatchingChildren(this.props.children, url, false).length > 0;
	};

	/** Re-render children with a new URL to match against. */
	Router.prototype.routeTo = function routeTo(url) {
		this._didRoute = false;
		this.setState({ url: url });

		// if we're in the middle of an update, don't synchronously re-route.
		if (this.updating) {
			return this.canRoute(url);
		}

		this.forceUpdate();
		return this._didRoute;
	};

	Router.prototype.componentWillMount = function componentWillMount() {
		ROUTERS.push(this);
		this.updating = true;
	};

	Router.prototype.componentDidMount = function componentDidMount() {
		var this$1 = this;

		if (customHistory) {
			this.unlisten = customHistory.listen(function (location) {
				this$1.routeTo("" + (location.pathname || '') + (location.search || ''));
			});
		}
		this.updating = false;
	};

	Router.prototype.componentWillUnmount = function componentWillUnmount() {
		if (typeof this.unlisten === 'function') {
			this.unlisten();
		}
		ROUTERS.splice(ROUTERS.indexOf(this), 1);
	};

	Router.prototype.componentWillUpdate = function componentWillUpdate() {
		this.updating = true;
	};

	Router.prototype.componentDidUpdate = function componentDidUpdate() {
		this.updating = false;
	};

	Router.prototype.getMatchingChildren = function getMatchingChildren(children, url, invoke) {
		return children.slice().sort(pathRankSort).map(function (vnode) {
			var attrs = vnode.attributes || {},
			    path = attrs.path,
			    matches = exec(url, path, attrs);
			if (matches) {
				if (invoke !== false) {
					var newProps = { url: url, matches: matches };
					assign(newProps, matches);
					return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["cloneElement"])(vnode, newProps);
				}
				return vnode;
			}
			return false;
		}).filter(Boolean);
	};

	Router.prototype.render = function render(ref, ref$1) {
		var children = ref.children;
		var onChange = ref.onChange;
		var url = ref$1.url;

		var active = this.getMatchingChildren(children, url, true);

		var current = active[0] || null;
		this._didRoute = !!current;

		var previous = this.previousUrl;
		if (url !== previous) {
			this.previousUrl = url;
			if (typeof onChange === 'function') {
				onChange({
					router: this,
					url: url,
					previous: previous,
					active: active,
					current: current
				});
			}
		}

		return current;
	};

	return Router;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);

var Link = function Link(props) {
	return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('a', assign({ onClick: handleLinkClick }, props));
};

var Route = function Route(props) {
	return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(props.component, props);
};

Router.subscribers = subscribers;
Router.getCurrentUrl = getCurrentUrl;
Router.route = route;
Router.Router = Router;
Router.Route = Route;
Router.Link = Link;

/* harmony default export */ __webpack_exports__["default"] = (Router);
//# sourceMappingURL=preact-router.es.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("JkW7");


/***/ }),

/***/ "5QBQ":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"link":"link__3zo5C","cubeRight":"cubeRight__1KGVg","cubeTop":"cubeTop__385th","cubeLeft":"cubeLeft__1flTb","cubeBG":"cubeBG__kQMEx"};

/***/ }),

/***/ "8Q4f":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"typewriter":"typewriter__1JQVa","letter":"letter__f4V_n","up":"up__1B39F","word":"word__2rXSW","phrase":"phrase__2zSgr"};

/***/ }),

/***/ "AAY/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Typewriter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("KM04");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style__ = __webpack_require__("8Q4f");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style__);


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




function Word(props) {
	function getRotation() {
		return (Math.random() * 2 - 1) * 20;
	}
	function getStyle(currentWord, text, letter, i, splitWord, rotation, axis, sign) {
		if (!currentWord) return '';
		if (splitWord) return 'transform: translateX(' + (i < text.length / 2 ? '-' : '+') + '1em) rotateZ(' + rotation + 'deg)';
		if (i !== letter) return '';
		return 'transform: translate' + axis + '(' + sign + '1em) rotateZ(' + rotation + 'deg)';
	}

	return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
		'span',
		{ 'class': __WEBPACK_IMPORTED_MODULE_1__style___default.a.word },
		' ',
		props.text.split('').map(function (l, i) {
			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				'span',
				{ style: getStyle(props.currentWord, props.text, props.letter, i, props.splitWord, getRotation(), props.axis, props.sign), 'class': __WEBPACK_IMPORTED_MODULE_1__style___default.a.letter },
				l
			);
		})
	);
}

var Typewriter = function (_Component) {
	_inherits(Typewriter, _Component);

	function Typewriter() {
		_classCallCheck(this, Typewriter);

		var _this = _possibleConstructorReturn(this, _Component.call(this));

		_this.state = {
			phrase: 'flights of fancy',
			current: [0, 0],
			splitWord: 1
		};
		return _this;
	}

	Typewriter.prototype.createWordMap = function createWordMap(phrase, splitWord) {
		return phrase.split(' ').map(function (word, i) {
			return i == splitWord ? 1 : word.length;
		});
	};

	Typewriter.prototype.getNextLetter = function getNextLetter(current, wordMap) {
		var word = current[0];
		var letter = current[1];
		var nextWord = letter === wordMap[word] - 1;
		var restart = word === wordMap.length - 1;
		letter = nextWord ? 0 : letter + 1;
		word = nextWord ? word + 1 : word;
		word = restart && nextWord ? 0 : word;
		return [word, letter];
	};

	Typewriter.prototype.componentDidMount = function componentDidMount() {
		var _this2 = this;

		this.setState({
			wordMap: this.createWordMap(this.state.phrase, this.state.splitWord)
		});
		this.letterTimer = setInterval(function () {
			_this2.setState({ current: _this2.getNextLetter(_this2.state.current, _this2.state.wordMap) });
		}, 750);
	};

	Typewriter.prototype.componentWillUnmount = function componentWillUnmount() {
		clearInterval(this.letterTimer);
	};

	Typewriter.prototype.render = function render() {
		var _this3 = this;

		return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
			'section',
			{ 'class': __WEBPACK_IMPORTED_MODULE_1__style___default.a.typewriter + ' flight' },
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				'h1',
				{ 'class': __WEBPACK_IMPORTED_MODULE_1__style___default.a.phrase },
				this.state.phrase.split(' ').map(function (word, i) {
					return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(Word, { text: word, currentWord: i === _this3.state.current[0], letter: _this3.state.current[1], splitWord: i == _this3.state.splitWord, axis: 'Y', sign: i === 0 ? '-' : '+', key: i });
				})
			)
		);
	};

	return Typewriter;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);



/***/ }),

/***/ "BPLy":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Destination; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("KM04");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style__ = __webpack_require__("n1zh");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style__);


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Destination = function (_Component) {
	_inherits(Destination, _Component);

	function Destination() {
		_classCallCheck(this, Destination);

		var _this = _possibleConstructorReturn(this, _Component.call(this));

		_this.state = {
			phrase: 'flights of fancy',
			current: [0, 0],
			splitWord: 1
		};
		return _this;
	}

	Destination.prototype.componentDidMount = function componentDidMount() {};

	Destination.prototype.componentWillUnmount = function componentWillUnmount() {};

	Destination.prototype.render = function render() {
		return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
			'section',
			{ 'class': __WEBPACK_IMPORTED_MODULE_1__style___default.a.destination + ' flight' },
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('h1', { 'class': __WEBPACK_IMPORTED_MODULE_1__style___default.a.phrase })
		);
	};

	return Destination;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);



/***/ }),

/***/ "E1C8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("KM04");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style__ = __webpack_require__("ZAL5");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style__);


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var _ref = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'h1',
	null,
	'Home'
);

var _ref2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'p',
	null,
	'This is the Home component.'
);

var Home = function (_Component) {
	_inherits(Home, _Component);

	function Home() {
		_classCallCheck(this, Home);

		return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	}

	Home.prototype.render = function render() {
		return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
			'div',
			{ 'class': __WEBPACK_IMPORTED_MODULE_1__style___default.a.home },
			_ref,
			_ref2
		);
	};

	return Home;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);



/***/ }),

/***/ "JkW7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style__ = __webpack_require__("rq4c");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_app__ = __webpack_require__("qLaj");



/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_1__components_app__["a" /* default */]);

/***/ }),

/***/ "KM04":
/***/ (function(module, exports, __webpack_require__) {

!function () {
  "use strict";
  function e() {}function t(t, n) {
    var o,
        r,
        i,
        l,
        a = E;for (l = arguments.length; l-- > 2;) {
      W.push(arguments[l]);
    }n && null != n.children && (W.length || W.push(n.children), delete n.children);while (W.length) {
      if ((r = W.pop()) && void 0 !== r.pop) for (l = r.length; l--;) {
        W.push(r[l]);
      } else "boolean" == typeof r && (r = null), (i = "function" != typeof t) && (null == r ? r = "" : "number" == typeof r ? r += "" : "string" != typeof r && (i = !1)), i && o ? a[a.length - 1] += r : a === E ? a = [r] : a.push(r), o = i;
    }var u = new e();return u.nodeName = t, u.children = a, u.attributes = null == n ? void 0 : n, u.key = null == n ? void 0 : n.key, void 0 !== S.vnode && S.vnode(u), u;
  }function n(e, t) {
    for (var n in t) {
      e[n] = t[n];
    }return e;
  }function o(e, o) {
    return t(e.nodeName, n(n({}, e.attributes), o), arguments.length > 2 ? [].slice.call(arguments, 2) : e.children);
  }function r(e) {
    !e.__d && (e.__d = !0) && 1 == A.push(e) && (S.debounceRendering || P)(i);
  }function i() {
    var e,
        t = A;A = [];while (e = t.pop()) {
      e.__d && k(e);
    }
  }function l(e, t, n) {
    return "string" == typeof t || "number" == typeof t ? void 0 !== e.splitText : "string" == typeof t.nodeName ? !e._componentConstructor && a(e, t.nodeName) : n || e._componentConstructor === t.nodeName;
  }function a(e, t) {
    return e.__n === t || e.nodeName.toLowerCase() === t.toLowerCase();
  }function u(e) {
    var t = n({}, e.attributes);t.children = e.children;var o = e.nodeName.defaultProps;if (void 0 !== o) for (var r in o) {
      void 0 === t[r] && (t[r] = o[r]);
    }return t;
  }function _(e, t) {
    var n = t ? document.createElementNS("http://www.w3.org/2000/svg", e) : document.createElement(e);return n.__n = e, n;
  }function p(e) {
    var t = e.parentNode;t && t.removeChild(e);
  }function c(e, t, n, o, r) {
    if ("className" === t && (t = "class"), "key" === t) ;else if ("ref" === t) n && n(null), o && o(e);else if ("class" !== t || r) {
      if ("style" === t) {
        if (o && "string" != typeof o && "string" != typeof n || (e.style.cssText = o || ""), o && "object" == typeof o) {
          if ("string" != typeof n) for (var i in n) {
            i in o || (e.style[i] = "");
          }for (var i in o) {
            e.style[i] = "number" == typeof o[i] && !1 === V.test(i) ? o[i] + "px" : o[i];
          }
        }
      } else if ("dangerouslySetInnerHTML" === t) o && (e.innerHTML = o.__html || "");else if ("o" == t[0] && "n" == t[1]) {
        var l = t !== (t = t.replace(/Capture$/, ""));t = t.toLowerCase().substring(2), o ? n || e.addEventListener(t, f, l) : e.removeEventListener(t, f, l), (e.__l || (e.__l = {}))[t] = o;
      } else if ("list" !== t && "type" !== t && !r && t in e) s(e, t, null == o ? "" : o), null != o && !1 !== o || e.removeAttribute(t);else {
        var a = r && t !== (t = t.replace(/^xlink\:?/, ""));null == o || !1 === o ? a ? e.removeAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase()) : e.removeAttribute(t) : "function" != typeof o && (a ? e.setAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase(), o) : e.setAttribute(t, o));
      }
    } else e.className = o || "";
  }function s(e, t, n) {
    try {
      e[t] = n;
    } catch (e) {}
  }function f(e) {
    return this.__l[e.type](S.event && S.event(e) || e);
  }function d() {
    var e;while (e = D.pop()) {
      S.afterMount && S.afterMount(e), e.componentDidMount && e.componentDidMount();
    }
  }function h(e, t, n, o, r, i) {
    H++ || (R = null != r && void 0 !== r.ownerSVGElement, j = null != e && !("__preactattr_" in e));var l = m(e, t, n, o, i);return r && l.parentNode !== r && r.appendChild(l), --H || (j = !1, i || d()), l;
  }function m(e, t, n, o, r) {
    var i = e,
        l = R;if (null != t && "boolean" != typeof t || (t = ""), "string" == typeof t || "number" == typeof t) return e && void 0 !== e.splitText && e.parentNode && (!e._component || r) ? e.nodeValue != t && (e.nodeValue = t) : (i = document.createTextNode(t), e && (e.parentNode && e.parentNode.replaceChild(i, e), b(e, !0))), i.__preactattr_ = !0, i;var u = t.nodeName;if ("function" == typeof u) return U(e, t, n, o);if (R = "svg" === u || "foreignObject" !== u && R, u += "", (!e || !a(e, u)) && (i = _(u, R), e)) {
      while (e.firstChild) {
        i.appendChild(e.firstChild);
      }e.parentNode && e.parentNode.replaceChild(i, e), b(e, !0);
    }var p = i.firstChild,
        c = i.__preactattr_,
        s = t.children;if (null == c) {
      c = i.__preactattr_ = {};for (var f = i.attributes, d = f.length; d--;) {
        c[f[d].name] = f[d].value;
      }
    }return !j && s && 1 === s.length && "string" == typeof s[0] && null != p && void 0 !== p.splitText && null == p.nextSibling ? p.nodeValue != s[0] && (p.nodeValue = s[0]) : (s && s.length || null != p) && v(i, s, n, o, j || null != c.dangerouslySetInnerHTML), g(i, t.attributes, c), R = l, i;
  }function v(e, t, n, o, r) {
    var i,
        a,
        u,
        _,
        c,
        s = e.childNodes,
        f = [],
        d = {},
        h = 0,
        v = 0,
        y = s.length,
        g = 0,
        w = t ? t.length : 0;if (0 !== y) for (var C = 0; C < y; C++) {
      var x = s[C],
          N = x.__preactattr_,
          k = w && N ? x._component ? x._component.__k : N.key : null;null != k ? (h++, d[k] = x) : (N || (void 0 !== x.splitText ? !r || x.nodeValue.trim() : r)) && (f[g++] = x);
    }if (0 !== w) for (var C = 0; C < w; C++) {
      _ = t[C], c = null;var k = _.key;if (null != k) h && void 0 !== d[k] && (c = d[k], d[k] = void 0, h--);else if (!c && v < g) for (i = v; i < g; i++) {
        if (void 0 !== f[i] && l(a = f[i], _, r)) {
          c = a, f[i] = void 0, i === g - 1 && g--, i === v && v++;break;
        }
      }c = m(c, _, n, o), u = s[C], c && c !== e && c !== u && (null == u ? e.appendChild(c) : c === u.nextSibling ? p(u) : e.insertBefore(c, u));
    }if (h) for (var C in d) {
      void 0 !== d[C] && b(d[C], !1);
    }while (v <= g) {
      void 0 !== (c = f[g--]) && b(c, !1);
    }
  }function b(e, t) {
    var n = e._component;n ? L(n) : (null != e.__preactattr_ && e.__preactattr_.ref && e.__preactattr_.ref(null), !1 !== t && null != e.__preactattr_ || p(e), y(e));
  }function y(e) {
    e = e.lastChild;while (e) {
      var t = e.previousSibling;b(e, !0), e = t;
    }
  }function g(e, t, n) {
    var o;for (o in n) {
      t && null != t[o] || null == n[o] || c(e, o, n[o], n[o] = void 0, R);
    }for (o in t) {
      "children" === o || "innerHTML" === o || o in n && t[o] === ("value" === o || "checked" === o ? e[o] : n[o]) || c(e, o, n[o], n[o] = t[o], R);
    }
  }function w(e) {
    var t = e.constructor.name;(I[t] || (I[t] = [])).push(e);
  }function C(e, t, n) {
    var o,
        r = I[e.name];if (e.prototype && e.prototype.render ? (o = new e(t, n), T.call(o, t, n)) : (o = new T(t, n), o.constructor = e, o.render = x), r) for (var i = r.length; i--;) {
      if (r[i].constructor === e) {
        o.__b = r[i].__b, r.splice(i, 1);break;
      }
    }return o;
  }function x(e, t, n) {
    return this.constructor(e, n);
  }function N(e, t, n, o, i) {
    e.__x || (e.__x = !0, (e.__r = t.ref) && delete t.ref, (e.__k = t.key) && delete t.key, !e.base || i ? e.componentWillMount && e.componentWillMount() : e.componentWillReceiveProps && e.componentWillReceiveProps(t, o), o && o !== e.context && (e.__c || (e.__c = e.context), e.context = o), e.__p || (e.__p = e.props), e.props = t, e.__x = !1, 0 !== n && (1 !== n && !1 === S.syncComponentUpdates && e.base ? r(e) : k(e, 1, i)), e.__r && e.__r(e));
  }function k(e, t, o, r) {
    if (!e.__x) {
      var i,
          l,
          a,
          _ = e.props,
          p = e.state,
          c = e.context,
          s = e.__p || _,
          f = e.__s || p,
          m = e.__c || c,
          v = e.base,
          y = e.__b,
          g = v || y,
          w = e._component,
          x = !1;if (v && (e.props = s, e.state = f, e.context = m, 2 !== t && e.shouldComponentUpdate && !1 === e.shouldComponentUpdate(_, p, c) ? x = !0 : e.componentWillUpdate && e.componentWillUpdate(_, p, c), e.props = _, e.state = p, e.context = c), e.__p = e.__s = e.__c = e.__b = null, e.__d = !1, !x) {
        i = e.render(_, p, c), e.getChildContext && (c = n(n({}, c), e.getChildContext()));var U,
            T,
            M = i && i.nodeName;if ("function" == typeof M) {
          var W = u(i);l = w, l && l.constructor === M && W.key == l.__k ? N(l, W, 1, c, !1) : (U = l, e._component = l = C(M, W, c), l.__b = l.__b || y, l.__u = e, N(l, W, 0, c, !1), k(l, 1, o, !0)), T = l.base;
        } else a = g, U = w, U && (a = e._component = null), (g || 1 === t) && (a && (a._component = null), T = h(a, i, c, o || !v, g && g.parentNode, !0));if (g && T !== g && l !== w) {
          var E = g.parentNode;E && T !== E && (E.replaceChild(T, g), U || (g._component = null, b(g, !1)));
        }if (U && L(U), e.base = T, T && !r) {
          var P = e,
              V = e;while (V = V.__u) {
            (P = V).base = T;
          }T._component = P, T._componentConstructor = P.constructor;
        }
      }if (!v || o ? D.unshift(e) : x || (e.componentDidUpdate && e.componentDidUpdate(s, f, m), S.afterUpdate && S.afterUpdate(e)), null != e.__h) while (e.__h.length) {
        e.__h.pop().call(e);
      }H || r || d();
    }
  }function U(e, t, n, o) {
    var r = e && e._component,
        i = r,
        l = e,
        a = r && e._componentConstructor === t.nodeName,
        _ = a,
        p = u(t);while (r && !_ && (r = r.__u)) {
      _ = r.constructor === t.nodeName;
    }return r && _ && (!o || r._component) ? (N(r, p, 3, n, o), e = r.base) : (i && !a && (L(i), e = l = null), r = C(t.nodeName, p, n), e && !r.__b && (r.__b = e, l = null), N(r, p, 1, n, o), e = r.base, l && e !== l && (l._component = null, b(l, !1))), e;
  }function L(e) {
    S.beforeUnmount && S.beforeUnmount(e);var t = e.base;e.__x = !0, e.componentWillUnmount && e.componentWillUnmount(), e.base = null;var n = e._component;n ? L(n) : t && (t.__preactattr_ && t.__preactattr_.ref && t.__preactattr_.ref(null), e.__b = t, p(t), w(e), y(t)), e.__r && e.__r(null);
  }function T(e, t) {
    this.__d = !0, this.context = t, this.props = e, this.state = this.state || {};
  }function M(e, t, n) {
    return h(n, e, {}, !1, t, !1);
  }var S = {},
      W = [],
      E = [],
      P = "function" == typeof Promise ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout,
      V = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,
      A = [],
      D = [],
      H = 0,
      R = !1,
      j = !1,
      I = {};n(T.prototype, { setState: function setState(e, t) {
      var o = this.state;this.__s || (this.__s = n({}, o)), n(o, "function" == typeof e ? e(o, this.props) : e), t && (this.__h = this.__h || []).push(t), r(this);
    }, forceUpdate: function forceUpdate(e) {
      e && (this.__h = this.__h || []).push(e), k(this, 2);
    }, render: function render() {} });var $ = { h: t, createElement: t, cloneElement: o, Component: T, render: M, rerender: i, options: S }; true ? module.exports = $ : self.preact = $;
}();
//# sourceMappingURL=preact.min.js.map

/***/ }),

/***/ "Ld2f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Glide; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("KM04");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style__ = __webpack_require__("/EdX");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style__);


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




function Path(props) {
	return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('path', { 'class': 'letter', id: props.id, fill: 'none', stroke: '#22313F', 'stroke-miterlimit': '10', d: props.d });
}

var _ref = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('script', { src: 'assets/js/TweenLite.min.js' });

var Glide = function (_Component) {
	_inherits(Glide, _Component);

	function Glide() {
		_classCallCheck(this, Glide);

		var _this = _possibleConstructorReturn(this, _Component.call(this));

		_this.state = {
			inPlace: true,
			paths: [{ id: "f1_top", pointA: '00', pointB: '100', d: "M118.4 142.2c-11.8 2-23.8 3-35.7 3" }, { id: "f1_crossbar", pointA: '00', pointB: '100', d: "M114 173.3c-10 1.6-21 2.4-31.3 2.3" }, { id: "f1_stem", pointA: '00', pointB: '70', d: "M83.2 145.3V206c0 37-90 142.2-200.7 39.2S-213.8-33.2-59-33.2c90.4 0 239.3-24.8 314.5-60.2" }, { id: "f2_top", pointA: '00', pointB: '60', d: "M264.8 197c10.3-4 20.5-8.2 30.7-12.5 124.8-52.3 341.4-284.7 352-308" }, { id: "f2_crossbar", pointA: '00', pointB: '30', d: "M264.8 225l27-11c87.6-43.6 570-277 637-290" }, { id: "f2_stem", pointA: '00', pointB: '80', d: "M265.2 196.8v55.8c0 93.3 5.4 164-6 212C248 513 91.7 695 91.7 695" }, { id: "f3_top_right", pointA: '00', pointB: '40', d: "M118 349.8c12.4-3 24.6-7 36.5-11.4 32-16.6 53.7-37.7 61.2-58s12.8-91-58-79.7C87.2 212 54.8 298.5 45 349S90 486.5 135 499.2c45 12.8 229.4 20.8 269.3 17.6" }, { id: "a1_crossbar", pointA: '00', pointB: '80', d: "M198 358.2c-11 5-21.7 9.7-32.6 14.3" }, { id: "f3_stem", pointA: '00', pointB: '60', d: "M118.6 410.2v-60.4c-174 30-402 70.8-402 70.8" }, { id: "n1_left", pointA: '00', pointB: '80', d: "M219.3 311c0 19.6.2 39 .3 58.7 0 102.6-83.7 171-198.8 244.7" }, { id: "n1_right", pointA: '00', pointB: '80', d: "M261 354v-58.8c0-111 0-275 17-329.2 15-47.4 68.6-182 68.6-182" }, { id: "y1_stem", pointA: '00', pointB: '80', d: "M344 291.6v26.6c0 99-65 230.7-161.4 307.5" }, { id: "a1_left", pointA: '00', pointB: '80', d: "M181.3 327.6L156 397.4C130.6 464 45 552-92.8 650.4" }, { id: "a1_right", pointA: '00', pointB: '80', d: "M181.7 327.4c8.6 15.7 17.2 31.5 25.6 47.4 41.6 73.4 125 131.3 321.4 94.4S768 456.4 768 456.4" }, { id: "n1_diagonal", pointA: '00', pointB: '80', d: "M219.3 311c15 13.3 28.5 27.8 41.8 42.7" }, { id: "t1_top", pointA: '210', pointB: '260', d: "M307.5-65.6S386.2-67 399.3-22c14.3 49-27.8 80.5-43.6 86C342 67 329 71 316 76c-13.7 5-70.8 44.2-1.6 94S504.7 271.3 616 281c111.3 9.8 155.7 18 155.7 18" }, { id: "t1_stem", pointA: '600', pointB: '675', d: "M843.8 399.3s-143-6-314.4-75.2-194-149.6-194-195.8v-59C335.5-5 345-91 360-158" }, { id: "h1_crossbar", pointA: '00', pointB: '80', d: "M305.2 110l-37.7 15" }, { id: "g1_crossbar", pointA: '00', pointB: '80', d: "M250.8 136c-5.5 1.8-8.5 2.8-14.2 5" }, { id: "h1_left", pointA: '330', pointB: '430', d: "M484.2-161C400-129 267.6-23.6 268 95.3v59c0 69.6 20.6 126.7 60.5 226s216 219.6 216 219.6" }, { id: "g1_right", pointA: '00', pointB: '80', d: "M250.5 135.7v19" }, { id: "h1_right", pointA: '250', pointB: '360', d: "M253.3-203.2c15 25.6 51.2 225 52 283.4v59.2C305.3 200 327.8 430 227 564" }, { id: "l1_bottom", pointA: '00', pointB: '40', d: "M133.6 199.4c11-2.7 21.5-5.7 32.2-9 29.5-10.7 89.7 15.6 50.6 100.6S43.4 472.3 17 488.8C-9 505.3-219.7 606-320.5 409" }, { id: "l1_stem", pointA: '00', pointB: '80', d: "M134 199.5v-60C133.6 74.2 67.4-47 3.5-73.2" }, { id: "i1_stem", pointA: '250', pointB: '350', d: "M93-134C137.6-58 181 46.5 181 126.5c0 19.7.2 39.4.4 59 0 96.4 38.3 236.4 216.6 266.5 178.2 30 209.8-74.5 376-24" }, { id: "o1_stem", pointA: '00', pointB: '200', d: "M242.4 252c-4.8 7.5-12 13.4-20 16.6-8 3.2-16 3.5-21-.2-4.5-3.3-6.7-9.8-6.7-17.2 0-7.4 2-15.7 6.3-22.5 5-7.8 13-13.8 21-16.8s15.2-3 20 1c4.4 3.4 6.8 10 6.8 17.4 0 7.2-2 15-6.4 21.7z" }, { id: "c1_stem", pointA: '255', pointB: '380', d: "M294 522c66-219 33-242 22.6-245.3-4.5-1.5-9.8-2-16.4 1-6.8 3-13.6 9.5-18 17.2-3.7 6.7-5.5 15-5.5 22.8 0 7.7 2 14.7 5.7 18.5 4.4 4.3 11 4.8 17.8 1.7 6.4-3 14-8.6 17.4-16.5 65.2-158.3 125.2-283.3 117.7-421" }, { id: "g1_stem", pointA: '00', pointB: '140', d: "M250.7 154.5c-5.2 6-13.8 11-22.8 14.4-8 2.8-16 2.6-21-1.4-4.5-3.6-6.7-10.3-6.7-18s2-16 6.3-23c4.7-7.6 13.7-14.8 22-17.7 9-3.3 15.3-3.3 20-.8" }, { id: "y1_right", pointA: '00', pointB: '100', d: "M344.3 291.8c6.3-13.6 12.8-27 19.6-40.5C427 141.3 581 12 618.7-7S816-78.3 816-78.3" }, { id: "y1_left", pointA: '00', pointB: '70', d: "M344 292l-18.8-25.2c-18.4-30-147-21.7-309.6 29.5S-238 455.8-238 455.8" }, { id: "s1_stem", pointA: '500', pointB: '630', d: "M873 145c-243.6 61.7-418-33-480.3-80.7-3-2.2-8.2-5.4-13.4-5-6.4.6-14.8 6.6-15 17.2 0 6.8 6.4 11 15 11.8 13.7 1.4 15.4 9.4 15.4 12.2 0 10-9.2 16.7-18.5 18-7.2.8-12.2-2.5-14.4-4.8C284 33.5 215.6-79.3 138-241" }, { id: "f3_stem_low", pointA: '00', pointB: '70', d: "M118.6 410.2c0 66.6-12 172.7-133 324.6" }, { id: "f3_crossbar", pointA: '478', pointB: '510', d: "M-344 501S63 396 118 380c11-3 21.4-6.2 32-10 44.6-17.3 213-54.2 357.5-152.7s292-229.5 292-229.5" }]
		};
		return _this;
	}

	Glide.prototype.componentDidMount = function componentDidMount() {/*
                                                                   this.state.paths.forEach(function(e, i) {
                                                                   this.draw(e, i);
                                                                   }, this);
                                                                   this.setState({inPlace:true});
                                                                   */};

	Glide.prototype.draw = function draw(e) {
		var pointA = e.pointA || '10%';
		var pointB = e.pointB || '40%';
		return TweenLite.fromTo("#" + e.id, 2, { drawSVG: "100% 100%" }, { drawSVG: pointA + " " + pointB });
	};

	Glide.prototype.dedraw = function dedraw(e) {
		var pointA = e.pointA || '10%';
		var pointB = e.pointB || '40%';
		return TweenLite.fromTo("#" + e.id, 2, { drawSVG: "0% 100%" }, { drawSVG: pointA + " " + pointB });
	};

	Glide.prototype.undraw = function undraw(e) {
		var pointA = e.pointA || '10%';
		var pointB = e.pointB || '40%';
		TweenLite.fromTo("#" + e.id, 2, { drawSVG: pointA + " " + pointB }, { drawSVG: "100% 100%" });
	};

	Glide.prototype.componentWillUnmount = function componentWillUnmount() {};

	Glide.prototype.tweensInit = function tweensInit() {};

	Glide.prototype.runAnim = function runAnim() {
		var newState = this.state;
		if (!newState.tweens) {
			newState.tweens = newState.paths.map(function (e, i) {
				return this.draw(e, i);
			}, this);
		} else {
			newState.tweens.map(function (e, i) {
				e.reversed() ? e.play() : e.reverse();
			});
		}
		this.setState(newState);
	};

	Glide.prototype.render = function render() {
		return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
			'section',
			{ 'class': __WEBPACK_IMPORTED_MODULE_1__style___default.a.glide + ' flight', onClick: this.runAnim.bind(this) },
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				'svg',
				{ 'class': __WEBPACK_IMPORTED_MODULE_1__style___default.a.glide, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 465 532.5' },
				this.state.paths.map(function (e, i) {
					return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(Path, { id: e.id, d: e.d, key: i });
				})
			),
			_ref,
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('script', { onLoad: this.runAnim.bind(this), src: 'assets/js/DrawSVGPlugin.min.js' })
		);
	};

	return Glide;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);



/***/ }),

/***/ "Lzq3":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"svg":"svg__1Pqhm","wrapper":"wrapper__2A82i","shine":"shine__EnKdY","f_stem":"f_stem__1DqwS","f_stem_stroke":"f_stem_stroke__sCUk_","i_stem":"i_stem__3xYPk","i_stem_stroke":"i_stem_stroke__3__A5","h_crossbar":"h_crossbar__2evCp","h_crossbar_stroke":"h_crossbar_stroke__2ShEX","h_leftstem":"h_leftstem__2QEs7","h_leftstem_stroke":"h_leftstem_stroke__Urlfv","h_rightstem":"h_rightstem__s6Hqc","h_rightstem_stroke":"h_rightstem_stroke__3_pdM","t_crossbar":"t_crossbar__15sN3","t_crossbar_stroke":"t_crossbar_stroke__3IIQH","t_stem":"t_stem__2OnFU","t_stem_stroke":"t_stem_stroke__4o8iG","l_stem":"l_stem__3cb6_","l_stem_stroke":"l_stem_stroke__wEr-U","s_bottom":"s_bottom__3zBeP","s_bottom_stroke":"s_bottom_stroke__3pr6K","s_top":"s_top__m2Vgm","s_top_stroke":"s_top_stroke__2IBaB","g_stem":"g_stem__m2U1Y","g_stem_stroke":"g_stem_stroke__141JZ","f_crossbar":"f_crossbar__11GOu","f_crossbar_stroke":"f_crossbar_stroke__1ZJp3","g_crossbar":"g_crossbar__2UY54","g_crossbar_stroke":"g_crossbar_stroke__1Frh9","i_crossbar":"i_crossbar__1F1aE","i_crossbar_stroke":"i_crossbar_stroke__3odAi","fa_main":"fa_main__2NVB1","fa_main_stroke":"fa_main_stroke__bhoMh","c_main":"c_main__3PZGA","c_main_stroke":"c_main_stroke__1Ke23","n_main":"n_main__RQ350","n_main_stroke":"n_main_stroke__1bHpW","a_main":"a_main__2dPYW","a_main_stroke":"a_main_stroke__3uMIi","y_main":"y_main__2QcDP","y_main_stroke":"y_main_stroke__1-537","o_main":"o_main__1hhmZ","o_main_stroke":"o_main_stroke__1hIdo","o_dot":"o_dot__3g6tN","of_main":"of_main__y_V3a","of_main_stroke":"of_main_stroke__1cZfO","right_dot_main":"right_dot_main__ofZFc","right_dot_stroke":"right_dot_stroke__hQb_6","lower_dot_main":"lower_dot_main__5X5rB","lower_dot_stroke":"lower_dot_stroke__3Zx-y"};

/***/ }),

/***/ "ZAL5":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"home":"home__MseGd"};

/***/ }),

/***/ "iUxa":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Shine; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("KM04");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style__ = __webpack_require__("Lzq3");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style__);


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




function SVGWrapper(props) {
	return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
		'svg',
		{ 'class': __WEBPACK_IMPORTED_MODULE_1__style___default.a.svg + ' ' + props.class, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 100 960 860' },
		props.children
	);
}

function Path(props) {
	return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
		SVGWrapper,
		{ 'class': props.class },
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('path', { fill: props.fill ? props.fill : '#333', d: props.d })
	);
}

function Circle(props) {
	return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
		SVGWrapper,
		{ 'class': props.class },
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('circle', { fill: props.fill, cx: props.cx, cy: props.cy, r: props.r })
	);
}

function Polygon(props) {
	return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
		SVGWrapper,
		{ 'class': props.class },
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('polygon', { fill: props.fill, points: props.points })
	);
}

function Rect(props) {
	return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
		SVGWrapper,
		{ 'class': props.class },
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('rect', { x: props.x, y: props.y, fill: props.fill, width: props.width, height: props.height })
	);
}

var _ref = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'h2',
	{ 'class': 'extra-text' },
	'Flights of Fancy'
);

var _ref2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'p',
	{ 'class': 'extra-text' },
	'Points Come into view ',
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('br', null),
	' Shapes latching onto you ',
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('br', null),
	' There\'s nothing you can do. ',
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('br', null),
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('br', null),
	' Hold True.'
);

var Shine = function (_Component) {
	_inherits(Shine, _Component);

	function Shine() {
		_classCallCheck(this, Shine);

		var _this = _possibleConstructorReturn(this, _Component.call(this));

		_this.state = {};
		return _this;
	}

	Shine.prototype.componentDidMount = function componentDidMount() {
		document.getElementById('container').addEventListener('mousemove', this.onMouseMove);
	};

	Shine.prototype.componentWillUnmount = function componentWillUnmount() {};

	Shine.prototype.onMouseMove = function onMouseMove(e) {
		var height = window.innerHeight / 2;
		var width = window.innerWidth / 2;
		var x = e.clientX;
		var y = e.clientY;

		var xVal = (x - width) / width;
		var yVal = (y - height) / height * -1;
		var dVal = Math.sqrt(xVal * xVal + yVal * yVal) * 10;
		document.getElementById('container').setAttribute('style', 'transform: rotate3d(' + yVal + ',' + xVal + ',0,' + dVal + 'deg)');
	};

	Shine.prototype.render = function render() {
		return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
			'div',
			{ 'class': __WEBPACK_IMPORTED_MODULE_1__style___default.a.wrapper },
			_ref,
			_ref2,
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				'section',
				{ id: 'container', 'class': __WEBPACK_IMPORTED_MODULE_1__style___default.a.shine + ' flight', style: true },
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(Path, { 'class': __WEBPACK_IMPORTED_MODULE_1__style___default.a.f_stem, fill: '#0FF', d: 'M105 202v164h68.2l19.6-56h21l19-54h15l19.2-54' }),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(Path, { 'class': __WEBPACK_IMPORTED_MODULE_1__style___default.a.f_stem_stroke, d: 'M173.2 369h-67.5c-2 0-3.7-1.3-3.7-3.3v-164c0-2 1.8-3.7 3.7-3.7H267c1 0 2.2.7 3 1.6s.7 2.2.3 3.3L251 256.7c-.4 1.4-1.7 2.2-3.2 2.2h-12.5L217 310.7c-.4 1.4-1.7 2.3-3.2 2.3h-18.5l-18.7 53.7c-.5 1.4-2 2.3-3.4 2.3zm-64.2-7h61.8l18.7-53.7c.5-1.4 1.8-2.3 3.3-2.3h18.5l18.2-51.7c.5-1.4 1.8-2.3 3.3-2.3h12.5l16.7-47H109v157z' }),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(Path, { 'class': __WEBPACK_IMPORTED_MODULE_1__style___default.a.i_stem, fill: '#FCEE21', d: 'M348 188h56v191h-56z' }),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(Path, { 'class': __WEBPACK_IMPORTED_MODULE_1__style___default.a.i_stem_stroke, d: 'M408 378.5c0 2-1.6 3.5-3.5 3.5h-56c-2 0-3.5-1.6-3.5-3.5v-191c0-2 1.6-3.5 3.5-3.5h56c2 0 3.5 1.6 3.5 3.5v191zm-56-3.5h49V191h-49v184z' }),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(Path, { 'class': __WEBPACK_IMPORTED_MODULE_1__style___default.a.h_crossbar, fill: '#8CC63F', d: 'M539 253h82v70h-82z' }),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(Path, { 'class': __WEBPACK_IMPORTED_MODULE_1__style___default.a.h_crossbar_stroke, d: 'M625 322.5c0 2-1.6 3.5-3.5 3.5h-82c-2 0-3.5-1.6-3.5-3.5v-70c0-2 1.6-3.5 3.5-3.5h82c2 0 3.5 1.6 3.5 3.5v70zm-82-3.5h75v-63h-75v63z' }),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(Path, { 'class': __WEBPACK_IMPORTED_MODULE_1__style___default.a.h_leftstem, fill: '#8CC63F', d: 'M579.3 379l24.4-191H525v191' }),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(Path, { 'class': __WEBPACK_IMPORTED_MODULE_1__style___default.a.h_leftstem_stroke, d: 'M579.3 382h-53.5c-2 0-3.7-1.3-3.7-3.3v-191c0-2 2-3.7 3.8-3.7h78c1 0 2 .6 2.6 1.3.7.8 1 1.8.8 2.8l-24.5 191c-.2 1.8-1.7 3-3.4 3zm-50.3-7h47.2l23.6-184H529v184z' }),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(Path, { 'class': __WEBPACK_IMPORTED_MODULE_1__style___default.a.h_rightstem, fill: '#8CC63F', d: 'M685 379V188h-57.8l-25 191' }),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(Path, { 'class': __WEBPACK_IMPORTED_MODULE_1__style___default.a.h_rightstem_stroke, d: 'M685.7 382h-83.5c-1 0-2-.3-2.6-1-.7-1-1-1.8-.8-2.8l25-191c.2-1.8 1.7-3.2 3.5-3.2h58.5c2 0 3.3 1.8 3.3 3.7v191c0 2-1.3 3.3-3.3 3.3zm-79.5-7H682V191h-51.7l-24 184z' }),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(Path, { 'class': __WEBPACK_IMPORTED_MODULE_1__style___default.a.t_crossbar, fill: '#FF0', d: 'M647 183h155v57H647z' }),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(Path, { 'class': __WEBPACK_IMPORTED_MODULE_1__style___default.a.t_crossbar_stroke, d: 'M806 239.5c0 2-1.6 3.5-3.5 3.5h-155c-2 0-3.5-1.6-3.5-3.5v-57c0-2 1.6-3.5 3.5-3.5h155c2 0 3.5 1.6 3.5 3.5v57zM651 236h148v-50H651v50z' }),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(Path, { 'class': __WEBPACK_IMPORTED_MODULE_1__style___default.a.t_stem, fill: '#FF0', d: 'M695 216v163h56V216' }),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(Path, { 'class': __WEBPACK_IMPORTED_MODULE_1__style___default.a.t_stem_stroke, d: 'M751.7 382h-56c-2 0-3.7-1.3-3.7-3.3V216.2c0-2 1.6-3.5 3.5-3.5s3.5 1.6 3.5 3.5V375h49V216.2c0-2 1.6-3.5 3.5-3.5s3.5 1.6 3.5 3.5v162.5c0 2-1.3 3.3-3.3 3.3z' }),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(Path, { 'class': __WEBPACK_IMPORTED_MODULE_1__style___default.a.l_stem, fill: '#F7931E', d: 'M354.5 291H306l8-73h-95v147h151.7' }),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(Path, { 'class': __WEBPACK_IMPORTED_MODULE_1__style___default.a.l_stem_stroke, d: 'M370.7 368h-151c-2 0-3.7-1.3-3.7-3.3v-147c0-2 1.8-3.7 3.7-3.7H314c1 0 2 .5 2.6 1.3.7.7 1 1.7 1 2.7l-7.8 69h44.6c1.6 0 3 1.4 3.4 3l16.3 74c.3 1 0 2-.6 3-.6.6-1.6 1-2.7 1zM223 361h143.4l-14.8-67H306c-1 0-2-.3-2.7-1-.7-.7-1-1.8-1-2.8l7.8-69.2h-87v140z' }),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(Path, { 'class': __WEBPACK_IMPORTED_MODULE_1__style___default.a.s_bottom, fill: '#0071BC', d: 'M853 315.5c0 31.2-24.2 58.3-55.4 58.3S742.3 350 742.3 319H794v-60c32 0 59 25.3 59 56.5z' }),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(Path, { 'class': __WEBPACK_IMPORTED_MODULE_1__style___default.a.s_bottom_stroke, d: 'M797.7 377c-33 0-59-25.7-59-58.4 0-2 1.6-3.6 3.5-3.6H791v-56c0-2 1.7-3.5 3.6-3.5 34.2 0 62 27 62 60 0 34-26.3 61.6-59 61.6zM746 322c.7 13 6 24.4 14.8 33.2 9.7 9.5 22.8 15 37 15 28.7 0 52-24.6 52-54.7 0-28-22.7-51-51.7-53V319c0 2-1.2 3.3-3.2 3.3h-49z' }),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(Path, { 'class': __WEBPACK_IMPORTED_MODULE_1__style___default.a.s_top, fill: '#D4145A', d: 'M740 257c0-31.3 26.4-55 57.6-55 31.2 0 57.7 28 57.7 58H794v53.5c-31 0-54-25.4-54-56.6z' }),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(Path, { 'class': __WEBPACK_IMPORTED_MODULE_1__style___default.a.s_top_stroke, d: 'M794.6 317c-32.5 0-58-26.5-58-60 0-16 6.6-31 18.3-42 11.4-10.7 26.6-16.7 42.8-16.7 32.5 0 61 28.6 61 61.3 0 2-1.6 3.4-3.5 3.4H798v50.4c0 2-1.4 3.5-3.4 3.5zm3-111.7c-29.7 0-54 23-54 51.6 0 28.4 20.4 51 47.4 52.8v-50c0-2 1.8-3.7 3.7-3.7h57c-1-12-6.7-24.5-16-34-10.3-10.7-24.2-16.7-38-16.7z' }),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(Path, { 'class': __WEBPACK_IMPORTED_MODULE_1__style___default.a.g_stem, fill: '#D4145A', d: 'M433.7 315l18-64H542c-13-28-41.3-46.6-73.8-46.6-45.3 0-82 36.6-82 82s36.7 82 82 82c35.3 0 65.3-22.4 77-53.4H433.6z' }),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(Path, { 'class': __WEBPACK_IMPORTED_MODULE_1__style___default.a.g_stem_stroke, d: 'M468.2 371.7c-47 0-85.5-38.4-85.5-85.5s38.4-85.5 85.5-85.5c32.5 0 62.7 19 77 48.2.2.4.4 1 .4 1.6 0 2-1.6 3.4-3.5 3.4h-87.6l-16 57H545c1.2 0 2.3.7 3 1.6s.8 2.2.4 3.3c-12.3 33.3-44.6 55.7-80.2 55.7zm0-164c-43.3 0-78.5 35.2-78.5 78.5s35.2 78.4 78.5 78.4c31 0 59.2-18.6 71.7-46.6H433.6c-1 0-2-.4-2.8-1.3-.8-1-1-2-.7-3l18-64c.4-1.6 1.8-2.7 3.4-2.7h84.6c-13.8-24-40-39.4-68-39.4z' }),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(Path, { 'class': __WEBPACK_IMPORTED_MODULE_1__style___default.a.f_crossbar, fill: '#0FF', d: 'M161 310h52.8l19-54H161' }),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(Path, { 'class': __WEBPACK_IMPORTED_MODULE_1__style___default.a.f_crossbar_stroke, d: 'M213.8 313h-52.6c-2 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5h50l16.7-47h-66.7c-2 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5H233c1 0 2 .7 2.8 1.6.7 1 .8 2.2.4 3.2l-19 54c-.6 1.4-2 2.2-3.4 2.2z' }),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(Path, { 'class': __WEBPACK_IMPORTED_MODULE_1__style___default.a.g_crossbar, fill: '#D4145A', d: 'M537 322h21.7l13-43h-96l-13 43H510' }),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(Path, { 'class': __WEBPACK_IMPORTED_MODULE_1__style___default.a.g_crossbar_stroke, d: 'M558.7 325h-21.5c-2 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5h19l10.8-36h-88.7l-11 36h43c1.8 0 3.4 1.6 3.4 3.5s-1.6 3.5-3.5 3.5h-47.5c-1 0-2-.4-2.8-1.3-.8-1-1-2-.6-3l13-43c.4-1.6 1.8-2.7 3.4-2.7h96c1 0 2.2.6 2.8 1.5.7 1 1 2 .5 3.2l-13 43c-.4 1.4-1.7 2.3-3.3 2.3z' }),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(Polygon, { 'class': __WEBPACK_IMPORTED_MODULE_1__style___default.a.i_crossbar, fill: '#FCEE21', points: '408,198.1 408,171 344,171 344,221 \t' }),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(Path, { 'class': __WEBPACK_IMPORTED_MODULE_1__style___default.a.i_crossbar_stroke, d: 'M344.7,224.5c-0.7,0-1.5-0.2-2.1-0.6c-0.9-0.7-1.6-1.7-1.6-2.9v-50.3c0-1.9,1.8-3.7,3.7-3.7h64c1.9,0,3.3,1.8,3.3,3.7v27.4 c0,1.5-0.8,2.8-2.2,3.3l-63.9,22.9C345.5,224.5,345.1,224.5,344.7,224.5z M348,174v42.1l57-20.4V174H348z' }),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(Path, { 'class': __WEBPACK_IMPORTED_MODULE_1__style___default.a.fa_main, fill: '#FBB03B', d: 'M896 580H138V404h186v-38H100V1191h38V618h758' }),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(Path, { 'class': __WEBPACK_IMPORTED_MODULE_1__style___default.a.fa_main_stroke, d: 'M138.7 1194h-38c-2 0-3.7-1.3-3.7-3.3v-825c0-2 1.8-3.7 3.7-3.7h224c2 0 3.3 1.8 3.3 3.7v38c0 2-1.3 3.3-3.3 3.3H142v169h754.7c2 0 3.3 1.8 3.3 3.7v38c0 2-1.3 3.3-3.3 3.3H142v569.7c0 2-1.3 3.3-3.3 3.3zm-34.7-7h31V617.7c0-2 1.8-3.7 3.7-3.7H893v-31H138.7c-2 0-3.7-1.3-3.7-3.3v-176c0-2 1.8-3.7 3.7-3.7H321v-31H104v818z' }),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(Path, { 'class': __WEBPACK_IMPORTED_MODULE_1__style___default.a.c_main, fill: '#FBB03B', d: 'M720.7 547c-15 69-77.2 121.6-151.5 121.6-66 0-122.5-41.5-144.8-99.8-6.6-17.2-10.2-36-10.2-55.4 0-85.6 69.4-154.7 155-154.7 80.5 0 146.7 61.3 154.3 140.3h36c-7.6-99-90-176.4-190.3-176.4-105.5 0-191 85.3-191 190.8 0 35 9.4 68 26 96 33 57 94.5 95.2 165 95.2 94.2 0 172.5-68.7 188.2-157.7h-36.7z' }),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(Path, { 'class': __WEBPACK_IMPORTED_MODULE_1__style___default.a.c_main_stroke, d: 'M569.2 708c-34.6 0-68.6-9-98.3-26.6-29-17-53-41.2-70-70-17.2-29.7-26.3-63.6-26.3-98 0-52 20.2-100.8 57-137.5 36.7-36.8 85.6-57 137.5-57 49.3 0 96.4 18.4 132.4 52 35.8 33.2 57.6 78.3 61.5 127l.2.6c0 2-1.6 3.4-3.5 3.4h-36c-2 0-3.4-1.2-3.6-3-3.5-37.5-20.8-72-48.5-97.4-28-25.6-64.3-39.6-102.3-39.6-83.5 0-151.5 68-151.5 151.3 0 18.7 3.4 37 10 54.2 10.8 28.4 29.8 52.6 54.7 70 25.6 18 55.6 27.5 86.8 27.5 34.7 0 68.7-12 95.7-34.2 26.4-21.7 45-52 52.2-85 .4-1.5 1.8-2.8 3.4-2.8h36.7c1 0 2 .6 2.7 1.4s1 2 .8 3c-7.8 44.2-31 84.8-65.8 114.3-35 30-79.8 46.4-125.8 46.4zm0-382c-50 0-97.2 19.5-132.6 55-35.4 35.3-55 82.3-55 132.4 0 33.2 9 66 25.5 94.4 16.3 28 39.6 51.2 67.4 67.6 28.6 16.8 61.4 25.7 94.8 25.7 44.3 0 87.4-16 121.3-44.7C723 628.7 745 591 753.2 550h-29.7c-8 34-27 64-54 86-28.3 23.2-64 36-100.2 36-32.7 0-64-10-90.8-28.6-26-18.3-46-43.6-57.2-73.3-7-18-10.4-37-10.4-56.6 0-42.3 16.4-82 46.3-112 30-30 69.7-46.3 112-46.3 39.8 0 77.8 14.7 107 41.4 28.3 25.8 46.2 60.7 50.6 98.7h29c-4.3-45-25.2-87.7-59-119-35-32.3-80.2-50-127.8-50z' }),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(Path, { 'class': __WEBPACK_IMPORTED_MODULE_1__style___default.a.n_main, fill: '#FBB03B', d: 'M526 369v258.6l-160-209-38-49.7v371h38V481l160 209 38 49.7V369' }),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(Path, { 'class': __WEBPACK_IMPORTED_MODULE_1__style___default.a.n_main_stroke, d: 'M366.7 743h-38c-2 0-3.7-1.3-3.7-3.3V369c0-1.6 1-3 2.5-3.4 1.4-.5 3 0 3.8 1.2L523 617.2V368.7c0-2 1.8-3.7 3.7-3.7h38c2 0 3.3 1.8 3.3 3.7v371c0 1.5-.8 2.8-2.3 3.3-1.4.5-3 0-3.8-1.2l-38.2-49.6L370 491.4v248.4c0 2-1.3 3.2-3.3 3.2zm-34.7-7h31V481c0-1.5 1-2.8 2.5-3.3 1.4-.5 3 0 3.8 1.2L561 729.3V372h-31v255.6c0 1.5-.8 2.8-2.3 3.3-1.4.4-3 0-4-1.3L332 379.2V736z' }),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(Path, { 'class': __WEBPACK_IMPORTED_MODULE_1__style___default.a.a_main, fill: '#FBB03B', d: 'M229.6 419.2L191 369.5V432l.2 308.3 37.4.2 1-258.7L548 899v-62.4' }),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(Path, { 'class': __WEBPACK_IMPORTED_MODULE_1__style___default.a.a_main_stroke, d: 'M548 902.6c-1 0-2-.5-2.8-1.4L233.2 492l-1 248.4c0 2-1.6 3.5-3.5 3.5l-37.3-.2c-2 0-3.6-1.6-3.6-3.5L188 432v-62.5c0-1.5 1-2.8 2.5-3.3 1.4-.5 3 0 4 1.2l38.3 49.8L551 834.5c.5.6.7 1.4.7 2v62.6c0 1.6-1 3-2.5 3.4-.4.2-.8.2-1.2.2zM229.8 478.3c1 0 2 .5 2.8 1.4l312 409.2v-51L227.2 421.3l-32-41.6V737h30.3l1-255.2c0-1.5 1-2.8 2.4-3.3.4-.2.8-.2 1-.2z' }),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(Path, { 'class': __WEBPACK_IMPORTED_MODULE_1__style___default.a.y_main, fill: '#FBB03B', d: 'M826 339l-29.8-23.5-174 221.2-138-175.2-30 23.5L603 574v267h38V574' }),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(Path, { 'class': __WEBPACK_IMPORTED_MODULE_1__style___default.a.y_main_stroke, d: 'M641.7 844h-38c-2 0-3.7-1.3-3.7-3.3V575.2l-148.2-188c-1.2-1.6-1-3.8.6-5l29.7-23.5c.8-.6 1.8-.8 2.7-.7s1.8.6 2.3 1.3L622.3 531l171.3-217.7c1.2-1.5 3.4-1.8 5-.6l30 23.5c.6.6 1 1.4 1.2 2.3 0 1-.3 2-.8 2.6L645 575.3v265.5c0 2-1.3 3.3-3.3 3.3zm-34.7-7h31V574c0-.8.4-1.5 1-2.2l182.4-232.3-24.4-19-172 218.4c-.6.7-1.6 1.2-2.6 1.2s-2-.5-2.7-1.3l-136-172.6-24 19.2L606.3 572c.5.5.6 1.3.6 2v263z' }),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(Path, { 'class': __WEBPACK_IMPORTED_MODULE_1__style___default.a.o_main, fill: '#FF0', d: 'M387 348.4h80.6V429H387z' }),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(Path, { 'class': __WEBPACK_IMPORTED_MODULE_1__style___default.a.o_main_stroke, d: 'M467.7 432.5h-80.5c-2 0-3.5-1.6-3.5-3.5v-80.5c0-2 1.6-3.5 3.5-3.5h80.5c2 0 3.5 1.6 3.5 3.5V429c0 2-1.6 3.5-3.5 3.5zm-77-7H464V352h-73.4v73.5z' }),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(Path, { 'class': __WEBPACK_IMPORTED_MODULE_1__style___default.a.o_dot, d: 'M429.4 394.2h-4c-2 0-3.5-1.6-3.5-3.5v-4c0-2 1.5-3.5 3.4-3.5h4c2 0 3.5 1.6 3.5 3.5v4c0 2-1.7 3.5-3.6 3.5z' }),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(Path, { 'class': __WEBPACK_IMPORTED_MODULE_1__style___default.a.of_main, fill: '#FF0', d: 'M467 349v80h58v-10h23v-70' }),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(Path, { 'class': __WEBPACK_IMPORTED_MODULE_1__style___default.a.of_main_stroke, d: 'M525.7 432h-58c-2 0-3.7-1.3-3.7-3.3v-80c0-2 1.8-3.7 3.7-3.7h81c2 0 3.3 1.8 3.3 3.7v70c0 2-1.3 3.3-3.3 3.3H529v6.7c0 2-1.3 3.3-3.3 3.3zm-54.7-7h51v-6.3c0-2 1.8-3.7 3.7-3.7H545v-63h-74v73z' }),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(Path, { 'class': __WEBPACK_IMPORTED_MODULE_1__style___default.a.of_main_stroke, d: 'M527.5 382.7h17.7v4h-17.7z' }),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(Path, { 'class': __WEBPACK_IMPORTED_MODULE_1__style___default.a.of_main_stroke, d: 'M545.2 390.2h-17.8c-2 0-3.5-1.6-3.5-3.5v-4c0-2 1.5-3.5 3.4-3.5h17.8c2 0 3.5 1.6 3.5 3.5v4c0 2-1.5 3.5-3.5 3.5z' }),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(Circle, { 'class': __WEBPACK_IMPORTED_MODULE_1__style___default.a.right_dot_main, fill: '#FBB03B', cx: '937', cy: '597', r: '22.2' }),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(Path, { 'class': __WEBPACK_IMPORTED_MODULE_1__style___default.a.right_dot_stroke, d: 'M937 622.7c-14.2 0-25.7-11.5-25.7-25.7s11.5-25.7 25.7-25.7 25.7 11.5 25.7 25.7-11.6 25.7-25.7 25.7zm0-44.4c-10.3 0-18.7 8.4-18.7 18.7s8.4 18.7 18.7 18.7 18.7-8.4 18.7-18.7-8.4-18.7-18.7-18.7z' }),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(Circle, { 'class': __WEBPACK_IMPORTED_MODULE_1__style___default.a.lower_dot_main, fill: '#FBB03B', cx: '119', cy: '1241', r: '22.2' }),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(Path, { 'class': __WEBPACK_IMPORTED_MODULE_1__style___default.a.lower_dot_stroke, d: 'M119 1266.7c-14.2 0-25.7-11.5-25.7-25.7s11.5-25.7 25.7-25.7 25.7 11.5 25.7 25.7-11.6 25.7-25.7 25.7zm0-44.4c-10.3 0-18.7 8.4-18.7 18.7s8.4 18.7 18.7 18.7 18.7-8.4 18.7-18.7-8.4-18.7-18.7-18.7z' })
			)
		);
	};

	return Shine;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);



/***/ }),

/***/ "n1zh":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "pOUI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Link; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("KM04");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style__ = __webpack_require__("5QBQ");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style__);


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




function Polyline(props) {
	return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('polyline', { id: props.id, 'class': 'letter', fill: 'none', stroke: '#06FFF8', 'stroke-width': props.strokeWidth, 'stroke-miterlimit': '10', points: props.points });
}

var _ref = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'filter',
	{ id: 'f1', width: '100%', height: '100%' },
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('feGaussianBlur', { result: 'blur', stdDeviation: '4' })
);

var _ref2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('script', { src: 'assets/js/TweenLite.min.js' });

var Link = function (_Component) {
	_inherits(Link, _Component);

	function Link() {
		_classCallCheck(this, Link);

		var _this = _possibleConstructorReturn(this, _Component.call(this));

		_this.state = {
			inPlace: true,
			paths: [{ id: "f1_1", pointA: "0", pointB: "80", points: "254.9,180.7 221.4,199.9 221.4,237.9  187.4,257.2 187.4,295.4 154.4,314.5 120.4,295.4 120.4,257.2 87.4,238.1 53.4,257.2 53.4,295.4 20.4,314.5 -13.6,295.4  -46.6,314.5 -46.6,352.6 -80.6,371.7 -80.6,409.9 " }, { id: "f1_2", pointA: "0", pointB: "80", points: "254.9,142.7 221.4,161.9 221.4,199.9  221.4,238.1 254.4,257.2 254.4,295.4 288.4,314.5 288.4,352.6 254.4,371.7 254.4,409.9 221.4,429 187.4,409.9 187.4,371.7  154.4,352.6 120.4,371.7 87.4,352.6 87.4,314.5 53.4,295.4 53.4,257.2 20.4,238.1 -13.6,257.2 -46.6,238.1 -80.6,257.2  -113.6,238.1 " }, { id: "f3_1", pointA: "0", pointB: "80", points: "254.8,409.6 221.5,429 221.7,467  187.4,486.3 154.4,467.2 120.4,486.3 120.4,524.5 87.4,543.6 87.4,581.7 120.4,600.8 120.4,639 153.9,658.1 154.4,696.3 " }, { id: "f3_2", pointA: "0", pointB: "80", points: "221.5,429 221.2,391 254.6,371.6  288.4,352.6 321.4,371.7 355.4,352.6 355.4,314.5 321.4,295.4 321.4,257.2 288.4,238.1 288.4,199.9 321.4,180.8 321.4,142.6  287.9,121.9 288.4,85.4 254.4,66.3 221.4,85.4 221.4,123.5 187.4,142.6 187.4,180.8 154.4,199.9 120.4,180.8 120.4,142.6  87.4,123.5 87.4,85.4 53.4,66.3 53.4,28.1 20.4,9 20.4,-29.2 " }, { id: "f2_1", pointA: "0", pointB: "40", points: "555.9,314.9 589.4,295.7 623.4,314.5  656.4,295.4 690.4,314.5 690.4,352.6 723.4,371.7 723.4,409.9 757.4,429 757.4,467.2 790.4,486.3 824.4,467.2 857.4,486.3  891.4,467.2 924.4,486.3 958.4,467.2 " }, { id: "f2_2", pointA: "0", pointB: "115", points: "589.4,257.7 555.9,276.9 555.9,352.6  522.4,371.7 522.4,409.9 489.4,429 455.4,409.9 422.4,429 422.4,467.2 388.4,486.3 388.4,524.5 355.4,543.6 355.4,581.7  321.4,600.8 321.4,639 287.9,658.1 288.4,696.3 254.9,715.4 " }, { id: "l_1", pointA: "0", pointB: "118", points: "321.9,257.2 288.4,238.1 288.4,161.9  321.4,142.6 355.4,123.5 355.4,85.4 321.4,66.3 321.4,28.1 355.4,9 355.4,-29.2 321.4,-48.3 288.4,-29.2 288.4,9 254.4,28.1  221.4,9 187.4,28.1 154.4,9 154.4,-29.2 120.4,-48.3 " }, { id: "i_1", pointA: "0", pointB: "40", points: "355.4,199.9 355.4,237.9 321.4,257.2  321.4,295.4 288.4,314.5 254.4,295.4 221.4,314.5 221.4,352.6 187.4,371.7 187.4,409.9 154.4,429 120.4,409.9 120.4,371.7  87.4,352.6 53.4,371.7 53.4,409.9 87.4,429 87.4,467.2 53.4,486.3 53.4,524.5 20.4,543.6 -13.6,524.5 -13.6,486.3 -46.6,467.2  -80.6,486.3 " }, { id: "g_1", pointA: "0", pointB: "350", points: "388.8,295.4 423.1,314.5 455.9,295.4  455.9,218.2 422.4,199.1 388.9,218.2 388.9,256.9 421.9,276 455.4,256.9 489.4,238.1 489.4,199.9 455.4,180.8 455.4,142.6  422.4,123.5 422.4,85.4 388.4,66.3 388.4,28.1 422.4,9 422.4,-29.2 388.4,-48.3 388.4,-86.5 355.4,-105.6 355.4,-143.7 " }, { id: "h_1", pointA: "0", pointB: "155", points: "489.4,237.9 489.4,199.9 522.9,180.8  556.4,199.9 556.4,237.9 522.4,257.2 522.4,295.4 455.9,333.7 455.4,371.7 422.4,352.6 388.4,371.7 388.4,409.9 355.9,429.2  355.9,467.2 321.4,486.3 321.4,524.5 288.4,543.6 288.4,581.7 254.4,600.8 254.4,639 287.9,658.1 " }, { id: "h_2", pointA: "0", pointB: "40", points: "489.4,199.9 489.4,161.9 522.4,142.6  489.4,123.5 489.4,85.4 522.4,66.3 522.4,28.1 556.4,9 556.4,-29.2 589.4,-48.3 589.4,-86.5 556.4,-105.6 " }, { id: "t_1", pointA: "0", pointB: "75", points: "623.4,238 623.4,200 589.9,180.8  589.4,142.6 556.4,123.5 556.4,85.4 522.4,66.3 489.4,85.4 455.4,66.3 422.4,85.4 388.4,66.3 355.4,85.4 321.4,66.3 288.4,85.4  254.4,66.3 254.4,28.1 221.4,9 221.4,-29.2 254.4,-48.3 254.4,-86.5 221.4,-105.6 221.4,-143.7 187.9,-162.8 " }, { id: "t_2", pointA: "0", pointB: "75", points: "623.3,161.9 623.3,199.9 656.3,181.9  690.4,199.9 723.4,180.8 723.4,142.6 757.4,123.5 757.4,85.4 790.4,66.3 824.4,85.4 857.4,66.3 891.4,85.4 924.4,66.3 924.4,28.1  958.4,9 " }, { id: "s_1", pointA: "0", pointB: "310", points: "656.3,295.2 690.5,314.5 723.4,295.4  723.4,256.9 689.6,275.2 656.5,257.2 656.5,219.1 690.3,200 724.6,219.1 757.4,199.9 723.4,180.8 723.4,142.6 690.4,123.5  690.4,85.4 656.4,66.3 656.4,28.1 690.4,9 723.4,28.1 757.4,9 757.4,-29.2 790.4,-48.3 824.4,-29.2 857.4,-48.3 857.4,-86.5  891.4,-105.6 " }, { id: "o_1", pointA: "0", pointB: "79", points: "521.9,371.2 521.2,371.6 488.9,353.2  488.9,276.7 455.4,257.2 455.4,218.1 422.4,199.9 388.4,180.8 388.4,142.6 422.4,123.5 422.4,85.4 455.4,66.3 455.4,28.1 489.4,9  489.4,-29.2 455.4,-48.3 455.4,-86.5 " }, { id: "o_2", pointA: "0", pointB: "79", points: "489.6,314.6 521.9,333 522.4,409.9  556.4,427.9 589.4,409.9 589.4,371.7 623.4,352.6 656.4,371.7 690.4,352.6 723.4,371.7 757.4,352.6 790.4,371.7 824.4,352.6 " }, { id: "y_1", pointA: "1080", pointB: "1200", points: "-180.6,467.2 -147.6,486.3 -113.6,467.2  -80.6,486.3 -46.6,467.2 -46.6,429 -13.6,409.9 20.4,429 20.4,467.2 53.4,486.3 87.4,467.2 120.4,486.3 154.4,467.2 187.4,486.3  221.7,467 254.4,486.3 288.4,467.2 321.4,486.3 355.9,467.2 388.4,486.3 422.4,467.2 455.4,486.3 489.4,467.2 522.4,486.3  556.4,467.2 589.4,486.3 623.4,467.2 656.4,486.3 689.9,466.9 690.4,429 656.9,409.9 656.9,371.9 " }, { id: "c_1", pointA: "0", pointB: "41", points: "556.9,429 556.9,467.2 589.4,486.3  589.4,524.5 623.4,543.6 623.4,581.7 589.4,600.8 589.4,639 555.9,658.1 556.4,696.3 589.9,715.4 " }, { id: "c_2", pointA: "0", pointB: "41", points: "590.6,409.9 624.3,429 623.4,467.2  656.4,486.3 656.4,524.5 690.4,543.6 723.4,524.5 757.4,543.6 757.4,581.7 723.4,600.8 723.4,639 756.9,658.1 757.4,696.3  790.9,715.4 824.4,696.3 857.9,715.4 " }, { id: "c_3", pointA: "0", pointB: "41", points: "590.6,486.3 623.4,467.2 623.4,429  656.9,409.9 656.9,371.9 690.4,352.6 690.5,314.5 723.4,295.4 757.4,314.5 790.4,295.4 824.4,314.5 857.4,295.4 857.4,257.2  891.4,238.1 891.4,199.9 924.4,180.8 " }, { id: "c_4", pointA: "0", pointB: "41", points: "556.9,429 590.6,409.9 589.4,371.7  623.4,352.6 623.4,314.5 656.4,295.4 656.4,257.2 690.4,238.1 723.4,257.2 757.4,238.1 757.4,199.9 723.4,180.8 723.4,142.6  690.4,123.5 656.4,142.6 623.4,123.5 623.4,85.4 589.4,66.3 589.4,28.1 623.4,9 623.4,-29.2 " }, { id: "c_5", pointA: "0", pointB: "41", points: "590.6,486.3 556.9,467.2 522.4,486.3  522.4,524.5 489.4,543.6 489.4,581.7 455.4,600.8 455.4,639 421.9,658.1 388.4,639 354.9,658.1 355.4,696.3 321.9,715.4  288.4,696.3 " }, { id: "c_6", pointA: "0", pointB: "240", points: "456.4,409.9 489.9,429 489.9,467.2  455.6,486.3 455.5,449.3 422.4,429 422.4,467 388.4,486.3 388.4,524.5 422.4,543.6 455.4,524.5 489.4,543.6 522.4,524.5  522.4,486.3 489.9,467.2 489.4,429 455.4,409.9 455.4,371.7 422.4,352.6 423.1,314.5 455.9,295.4 521.9,333 522.4,409.9 556.9,429  556.9,467.2 590.6,486.3 589.4,524.5 556.4,543.6 556.4,581.7 522.4,600.8 522.4,639 488.9,658.1 489.4,696.3 " }, { id: "y_2", pointA: "0", pointB: "80", points: "723.9,371.9 723.9,409.9 690.4,429  689.9,466.9 656.4,486.3 623.4,467.2 589.4,486.3 556.4,467.2 522.4,486.3 489.4,467.2 455.4,486.3 422.4,467.2 388.4,486.3  355.9,467.2 321.4,486.3 288.4,467.2 254.4,486.3 221.7,467 187.4,486.3 154.4,467.2 120.4,486.3 87.4,467.2 53.4,486.3 20.4,467.2  20.4,429 -13.6,409.9 -46.6,429 -46.6,467.2 -80.6,486.3 -113.6,467.2 -147.6,486.3 -180.6,467.2 " }, { id: "a_1", pointA: "0", pointB: "120", points: "355.9,429.2 322.4,448.3 288.9,428.9  288.9,466.9 254.4,486.3 254.4,524.5 221.4,543.6 221.4,581.7 187.4,600.8 187.4,639 220.9,658.1 221.4,696.3 187.9,715.4  154.4,696.3 120.9,715.4 87.4,696.3 53.9,715.4 20.4,696.3 19.9,658.1 -13.6,639 -13.6,600.8 -46.6,581.7 -80.6,600.8 -80.6,639  -114.1,658.1 -113.6,696.3 -147.1,715.4 " }, { id: "a_2", pointA: "845", pointB: "1100", points: "-181.1,-29.1 -181.1,9 -147.9,28.1  -113.6,9 -81.1,27.9 -81.1,66.3 -47.1,84.9 -47.1,123.5 -13.9,142.6 20.4,123.5 52.9,142.9 52.9,180.8 87.1,199.9 120.4,180.8  153.9,199.9 153.9,238.1 186.9,256.9 186.9,295.4 220.9,314.9 220.9,352.6 253.9,371.9 253.9,409.9 288.9,429.2 288.9,391  322.4,371.9 355.9,391 355.9,428.9 355.9,466.9 " }]
		};
		return _this;
	}

	Link.prototype.componentDidMount = function componentDidMount() {
		//let a = document.getElementsByClassName('letter')
		//let polylines = [].map.call(a, (e,i)=> {return '{id: "a", pointA: "0", pointB: "40", points: "' + e.attributes.points.value + '"}'})
		//console.log(polylines.toString())
	};

	Link.prototype.draw = function draw(e) {
		var pointA = e.pointA || '10%';
		var pointB = e.pointB || '40%';
		return TweenLite.fromTo("#" + e.id, 3, { drawSVG: "100% 100%" }, { drawSVG: pointA + " " + pointB }, { ease: 'Power0' });
	};

	Link.prototype.componentWillUnmount = function componentWillUnmount() {};

	Link.prototype.tweensInit = function tweensInit() {};

	Link.prototype.runAnim = function runAnim() {
		var newState = this.state;
		if (!newState.tweens) {
			newState.tweens = newState.paths.map(function (e, i) {
				return this.draw(e, i);
			}, this);
		} else {
			newState.tweens.map(function (e, i) {
				e.reversed() ? e.play() : e.reverse();
			});
		}
		this.setState(newState);
	};

	Link.prototype.render = function render() {
		return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
			'section',
			{ 'class': __WEBPACK_IMPORTED_MODULE_1__style___default.a.link + ' flight', onClick: this.runAnim.bind(this) },
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				'svg',
				{ 'class': __WEBPACK_IMPORTED_MODULE_1__style___default.a.link, version: '1.1', id: 'Layer_4_copy', xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 918 636' },
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'defs',
					null,
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						'pattern',
						{ id: 'cubepat', x: '1.405', y: '0.7', width: '.0728', height: '.18', patternContentUnits: 'userSpaceOnUse' },
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							'g',
							null,
							__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('polygon', { 'class': __WEBPACK_IMPORTED_MODULE_1__style___default.a.cubeTop, points: '0,60 0,60 34.6,40 0,20.1 -34.6,40.1 0,60 \t\t' }),
							__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('polygon', { 'class': __WEBPACK_IMPORTED_MODULE_1__style___default.a.cubeRight, points: '34.6,40 34.6,40 0,60 -0.1,99.8 0,99.9 34.5,79.9 \t\t' })
						),
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							'g',
							null,
							__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('polygon', { 'class': __WEBPACK_IMPORTED_MODULE_1__style___default.a.cubeLeft, points: '34.5,119.7 34.5,119.7 0,99.8 0,99.9 -0.1,139.7 34.5,159.6 34.5,159.6 34.5,159.6 \t\t' }),
							__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('polygon', { 'class': __WEBPACK_IMPORTED_MODULE_1__style___default.a.cubeTop, points: '34.5,119.7 34.5,119.7 69.1,99.7 34.6,79.9 0,99.8 34.5,119.7 \t\t' }),
							__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('polygon', { 'class': __WEBPACK_IMPORTED_MODULE_1__style___default.a.cubeRight, points: '69.2,99.7 69.1,99.7 34.5,119.7 34.5,159.6 34.5,159.6 69.1,139.6 \t\t' })
						),
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							'g',
							null,
							__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('polygon', { 'class': __WEBPACK_IMPORTED_MODULE_1__style___default.a.cubeLeft, points: '103.7,119.6 103.7,119.6 69.2,99.7 69.1,99.8 69.1,139.6 103.6,159.5 103.7,159.5 103.7,159.5 \t\t' })
						),
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							'g',
							null,
							__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('polygon', { 'class': __WEBPACK_IMPORTED_MODULE_1__style___default.a.cubeLeft, points: '34.7,0.1 34.7,0.1 0.1,-19.8 0.1,-19.7 0,20.1 34.6,40 34.7,40 34.6,40 \t\t' }),
							__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('polygon', { 'class': __WEBPACK_IMPORTED_MODULE_1__style___default.a.cubeRight, points: '69.3,-19.9 69.3,-19.9 34.7,0.1 34.6,40 34.7,40 69.2,20 \t\t' })
						),
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							'g',
							null,
							__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('polygon', { 'class': __WEBPACK_IMPORTED_MODULE_1__style___default.a.cubeLeft, points: '69.2,59.8 69.2,59.9 34.6,40 34.6,40 34.5,79.9 69.1,99.8 69.2,99.7 69.1,99.7 \t\t' }),
							__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('polygon', { 'class': __WEBPACK_IMPORTED_MODULE_1__style___default.a.cubeTop, points: '69.2,59.8 69.2,59.8 103.8,39.9 69.3,20 34.6,40 69.2,59.9 \t\t' }),
							__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('polygon', { 'class': __WEBPACK_IMPORTED_MODULE_1__style___default.a.cubeTop, points: '34.5,4.7 34.5,4.7 69.1,-15.3 34.6,-35.1 0,-15.2 34.5,4.7 \t' })
						)
					)
				),
				_ref,
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('rect', { 'class': __WEBPACK_IMPORTED_MODULE_1__style___default.a.cubeBG, fill: 'url(#cubepat)', width: '100%', height: '100%' }),
				this.state.paths.map(function (e, i) {
					return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(Polyline, { id: e.id, strokeWidth: 2, points: e.points, key: i });
				}),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'g',
					{ filter: 'url(#f1)' },
					this.state.paths.map(function (e, i) {
						return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(Polyline, { id: e.id, strokeWidth: 3, points: e.points, key: i });
					})
				)
			),
			_ref2,
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('script', { onLoad: this.runAnim.bind(this), src: 'assets/js/DrawSVGPlugin.min.js' })
		);
	};

	return Link;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);



/***/ }),

/***/ "qLaj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return App; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("KM04");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact_router__ = __webpack_require__("/QC5");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__header__ = __webpack_require__("sIAo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routes_home__ = __webpack_require__("E1C8");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__routes_typewriter__ = __webpack_require__("AAY/");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__routes_destination__ = __webpack_require__("BPLy");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__routes_shine__ = __webpack_require__("iUxa");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__routes_glide__ = __webpack_require__("Ld2f");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__routes_link__ = __webpack_require__("pOUI");


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }











// import Home from 'async!./home';
// import Profile from 'async!./profile';

function RandomRoute(props) {

	return props.children[Math.floor(Math.random() * props.children.length)];
}

var _ref = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_2__header__["a" /* default */], null);

var _ref2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	RandomRoute,
	{ path: '/' },
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_6__routes_shine__["a" /* default */], null),
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_4__routes_typewriter__["a" /* default */], null),
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_7__routes_glide__["a" /* default */], null)
);

var _ref3 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_4__routes_typewriter__["a" /* default */], { path: '/typewriter/' });

var _ref4 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_7__routes_glide__["a" /* default */], { path: '/glide/' });

var _ref5 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_8__routes_link__["a" /* default */], { path: '/link/' });

var _ref6 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_5__routes_destination__["a" /* default */], { path: '/destination/' });

var _ref7 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_6__routes_shine__["a" /* default */], { path: '/shine/' });

var App = function (_Component) {
	_inherits(App, _Component);

	function App() {
		var _temp, _this, _ret;

		_classCallCheck(this, App);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.handleRoute = function (e) {
			_this.currentUrl = e.url;
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}
	/** Gets fired when the route changes.
  *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
  *	@param {string} event.url	The newly routed URL
  */


	App.prototype.render = function render() {
		return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
			'div',
			{ id: 'app' },
			_ref,
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				__WEBPACK_IMPORTED_MODULE_1_preact_router__["Router"],
				{ onChange: this.handleRoute },
				_ref2,
				_ref3,
				_ref4,
				_ref5,
				_ref6,
				_ref7
			)
		);
	};

	return App;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);



/***/ }),

/***/ "rq4c":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "sIAo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Header; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("KM04");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact_router_match__ = __webpack_require__("sw5u");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact_router_match___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_preact_router_match__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style__ = __webpack_require__("u3et");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__style__);


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var _ref = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'a',
	{ href: 'https://mileselliott.me' },
	'Miles.'
);

var Header = function (_Component) {
	_inherits(Header, _Component);

	function Header() {
		_classCallCheck(this, Header);

		return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	}

	Header.prototype.componentDidMount = function componentDidMount() {};

	Header.prototype.render = function render() {
		return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
			'h1',
			{ 'class': __WEBPACK_IMPORTED_MODULE_2__style___default.a.name },
			_ref
		);
	};

	return Header;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);



/***/ }),

/***/ "sw5u":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Link = exports.Match = undefined;

var _extends = Object.assign || function (target) {
	for (var i = 1; i < arguments.length; i++) {
		var source = arguments[i];for (var key in source) {
			if (Object.prototype.hasOwnProperty.call(source, key)) {
				target[key] = source[key];
			}
		}
	}return target;
};

var _preact = __webpack_require__("KM04");

var _preactRouter = __webpack_require__("/QC5");

function _objectWithoutProperties(obj, keys) {
	var target = {};for (var i in obj) {
		if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	}return target;
}

function _classCallCheck(instance, Constructor) {
	if (!(instance instanceof Constructor)) {
		throw new TypeError("Cannot call a class as a function");
	}
}

function _possibleConstructorReturn(self, call) {
	if (!self) {
		throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	}return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
	if (typeof superClass !== "function" && superClass !== null) {
		throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Match = exports.Match = function (_Component) {
	_inherits(Match, _Component);

	function Match() {
		var _temp, _this, _ret;

		_classCallCheck(this, Match);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.update = function (url) {
			_this.nextUrl = url;
			_this.setState({});
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	Match.prototype.componentDidMount = function componentDidMount() {
		_preactRouter.subscribers.push(this.update);
	};

	Match.prototype.componentWillUnmount = function componentWillUnmount() {
		_preactRouter.subscribers.splice(_preactRouter.subscribers.indexOf(this.update) >>> 0, 1);
	};

	Match.prototype.render = function render(props) {
		var url = this.nextUrl || (0, _preactRouter.getCurrentUrl)(),
		    path = url.replace(/\?.+$/, '');
		this.nextUrl = null;
		return props.children[0] && props.children[0]({
			url: url,
			path: path,
			matches: path === props.path
		});
	};

	return Match;
}(_preact.Component);

var Link = function Link(_ref) {
	var activeClassName = _ref.activeClassName,
	    path = _ref.path,
	    props = _objectWithoutProperties(_ref, ['activeClassName', 'path']);

	return (0, _preact.h)(Match, { path: path || props.href }, function (_ref2) {
		var matches = _ref2.matches;
		return (0, _preact.h)(_preactRouter.Link, _extends({}, props, { 'class': [props.class || props.className, matches && activeClassName].filter(Boolean).join(' ') }));
	});
};

exports.Link = Link;
exports.default = Match;

Match.Link = Link;

/***/ }),

/***/ "u3et":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"name":"name__a5Wwb"};

/***/ })

/******/ });
//# sourceMappingURL=ssr-bundle.js.map