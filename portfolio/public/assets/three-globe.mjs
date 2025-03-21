import { Mesh, BackSide, BufferAttribute, ShaderMaterial, Color, TextureLoader, SRGBColorSpace, SphereGeometry, MeshPhongMaterial, Group, LineSegments, LineBasicMaterial, CylinderGeometry, Matrix4, Object3D, BufferGeometry, MeshLambertMaterial, Vector3, Line, NormalBlending, TubeGeometry, CubicBezierCurve3, Curve, DoubleSide, MeshBasicMaterial, CircleGeometry, Euler, Points, PointsMaterial, BoxGeometry, Camera, Vector2 } from 'three';
import Kapsule from 'kapsule';
import { Tween, Easing, Group as Group$1 } from '@tweenjs/tween.js';
import SlippyMap from 'three-slippy-map-globe';
import GeoJsonGeometry from 'three-geojson-geometry';
import { geoGraticule10, geoDistance as geoDistance$1, geoInterpolate } from 'd3-geo';
import * as _bfg from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import accessorFn from 'accessor-fn';
import { color } from 'd3-color';
import tinyColor from 'tinycolor2';
import DataBindMapper from 'data-bind-mapper';
import _FrameTicker from 'frame-ticker';
import { scaleLinear, scaleQuantize } from 'd3-scale';
import ConicPolygonGeometry from 'three-conic-polygon-geometry';
import indexBy from 'index-array-by';
import { latLngToCell, cellToLatLng, cellToBoundary, polygonToCells } from 'h3-js';
import { interpolateTurbo } from 'd3-scale-chromatic';
import { sum, max } from 'd3-array';
import { StorageInstancedBufferAttribute, WebGPURenderer } from 'three/webgpu';
import * as tsl from 'three/tsl';
import { Line2 } from 'three/examples/jsm/lines/Line2.js';
import { LineGeometry } from 'three/examples/jsm/lines/LineGeometry.js';
import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial.js';
import { interpolateArray } from 'd3-interpolate';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
import { Font } from 'three/examples/jsm/loaders/FontLoader.js';
import { CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer.js';

function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray(r);
}
function _assertClassBrand(e, t, n) {
  if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n;
  throw new TypeError("Private element is not present on this object");
}
function _assertThisInitialized(e) {
  if (undefined === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c),
      u = i.value;
  } catch (n) {
    return void e(n);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function () {
    var t = this,
      e = arguments;
    return new Promise(function (r, o) {
      var a = n.apply(t, e);
      function _next(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
      }
      function _throw(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
      }
      _next(undefined);
    });
  };
}
function _callSuper(t, o, e) {
  return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
}
function _checkPrivateRedeclaration(e, t) {
  if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _classPrivateFieldGet2(s, a) {
  return s.get(_assertClassBrand(s, a));
}
function _classPrivateFieldInitSpec(e, t, a) {
  _checkPrivateRedeclaration(e, t), t.set(e, a);
}
function _classPrivateFieldSet2(s, a, r) {
  return s.set(_assertClassBrand(s, a), r), r;
}
function _construct(t, e, r) {
  if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments);
  var o = [null];
  o.push.apply(o, e);
  var p = new (t.bind.apply(t, o))();
  return p;
}
function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(e, _toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), Object.defineProperty(e, "prototype", {
    writable: false
  }), e;
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[r] = t, e;
}
function _get() {
  return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) {
    var p = _superPropBase(e, t);
    if (p) {
      var n = Object.getOwnPropertyDescriptor(p, t);
      return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value;
    }
  }, _get.apply(null, arguments);
}
function _getPrototypeOf(t) {
  return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, _getPrototypeOf(t);
}
function _inherits(t, e) {
  if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      writable: true,
      configurable: true
    }
  }), Object.defineProperty(t, "prototype", {
    writable: false
  }), e && _setPrototypeOf(t, e);
}
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (t) {}
  return (_isNativeReflectConstruct = function () {
    return !!t;
  })();
}
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = true,
      o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = true, n = r;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _objectWithoutProperties(e, t) {
  if (null == e) return {};
  var o,
    r,
    i = _objectWithoutPropertiesLoose(e, t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}
function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}
function _possibleConstructorReturn(t, e) {
  if (e && ("object" == typeof e || "function" == typeof e)) return e;
  if (undefined !== e) throw new TypeError("Derived constructors may only return object or undefined");
  return _assertThisInitialized(t);
}
function _regeneratorRuntime() {
  _regeneratorRuntime = function () {
    return e;
  };
  var t,
    e = {},
    r = Object.prototype,
    n = r.hasOwnProperty,
    o = Object.defineProperty || function (t, e, r) {
      t[e] = r.value;
    },
    i = "function" == typeof Symbol ? Symbol : {},
    a = i.iterator || "@@iterator",
    c = i.asyncIterator || "@@asyncIterator",
    u = i.toStringTag || "@@toStringTag";
  function define(t, e, r) {
    return Object.defineProperty(t, e, {
      value: r,
      enumerable: true,
      configurable: true,
      writable: true
    }), t[e];
  }
  try {
    define({}, "");
  } catch (t) {
    define = function (t, e, r) {
      return t[e] = r;
    };
  }
  function wrap(t, e, r, n) {
    var i = e && e.prototype instanceof Generator ? e : Generator,
      a = Object.create(i.prototype),
      c = new Context(n || []);
    return o(a, "_invoke", {
      value: makeInvokeMethod(t, r, c)
    }), a;
  }
  function tryCatch(t, e, r) {
    try {
      return {
        type: "normal",
        arg: t.call(e, r)
      };
    } catch (t) {
      return {
        type: "throw",
        arg: t
      };
    }
  }
  e.wrap = wrap;
  var h = "suspendedStart",
    l = "suspendedYield",
    f = "executing",
    s = "completed",
    y = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var p = {};
  define(p, a, function () {
    return this;
  });
  var d = Object.getPrototypeOf,
    v = d && d(d(values([])));
  v && v !== r && n.call(v, a) && (p = v);
  var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
  function defineIteratorMethods(t) {
    ["next", "throw", "return"].forEach(function (e) {
      define(t, e, function (t) {
        return this._invoke(e, t);
      });
    });
  }
  function AsyncIterator(t, e) {
    function invoke(r, o, i, a) {
      var c = tryCatch(t[r], t, o);
      if ("throw" !== c.type) {
        var u = c.arg,
          h = u.value;
        return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
          invoke("next", t, i, a);
        }, function (t) {
          invoke("throw", t, i, a);
        }) : e.resolve(h).then(function (t) {
          u.value = t, i(u);
        }, function (t) {
          return invoke("throw", t, i, a);
        });
      }
      a(c.arg);
    }
    var r;
    o(this, "_invoke", {
      value: function (t, n) {
        function callInvokeWithMethodAndArg() {
          return new e(function (e, r) {
            invoke(t, n, e, r);
          });
        }
        return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(e, r, n) {
    var o = h;
    return function (i, a) {
      if (o === f) throw Error("Generator is already running");
      if (o === s) {
        if ("throw" === i) throw a;
        return {
          value: t,
          done: true
        };
      }
      for (n.method = i, n.arg = a;;) {
        var c = n.delegate;
        if (c) {
          var u = maybeInvokeDelegate(c, n);
          if (u) {
            if (u === y) continue;
            return u;
          }
        }
        if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
          if (o === h) throw o = s, n.arg;
          n.dispatchException(n.arg);
        } else "return" === n.method && n.abrupt("return", n.arg);
        o = f;
        var p = tryCatch(e, r, n);
        if ("normal" === p.type) {
          if (o = n.done ? s : l, p.arg === y) continue;
          return {
            value: p.arg,
            done: n.done
          };
        }
        "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
      }
    };
  }
  function maybeInvokeDelegate(e, r) {
    var n = r.method,
      o = e.iterator[n];
    if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
    var i = tryCatch(o, e.iterator, r.arg);
    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
    var a = i.arg;
    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
  }
  function pushTryEntry(t) {
    var e = {
      tryLoc: t[0]
    };
    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
  }
  function resetTryEntry(t) {
    var e = t.completion || {};
    e.type = "normal", delete e.arg, t.completion = e;
  }
  function Context(t) {
    this.tryEntries = [{
      tryLoc: "root"
    }], t.forEach(pushTryEntry, this), this.reset(true);
  }
  function values(e) {
    if (e || "" === e) {
      var r = e[a];
      if (r) return r.call(e);
      if ("function" == typeof e.next) return e;
      if (!isNaN(e.length)) {
        var o = -1,
          i = function next() {
            for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = false, next;
            return next.value = t, next.done = true, next;
          };
        return i.next = i;
      }
    }
    throw new TypeError(typeof e + " is not iterable");
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: true
  }), o(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: true
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
    var e = "function" == typeof t && t.constructor;
    return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
  }, e.mark = function (t) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
  }, e.awrap = function (t) {
    return {
      __await: t
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
    return this;
  }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
    undefined === i && (i = Promise);
    var a = new AsyncIterator(wrap(t, r, n, o), i);
    return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
      return t.done ? t.value : a.next();
    });
  }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
    return this;
  }), define(g, "toString", function () {
    return "[object Generator]";
  }), e.keys = function (t) {
    var e = Object(t),
      r = [];
    for (var n in e) r.push(n);
    return r.reverse(), function next() {
      for (; r.length;) {
        var t = r.pop();
        if (t in e) return next.value = t, next.done = false, next;
      }
      return next.done = true, next;
    };
  }, e.values = values, Context.prototype = {
    constructor: Context,
    reset: function (e) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = false, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
    },
    stop: function () {
      this.done = true;
      var t = this.tryEntries[0].completion;
      if ("throw" === t.type) throw t.arg;
      return this.rval;
    },
    dispatchException: function (e) {
      if (this.done) throw e;
      var r = this;
      function handle(n, o) {
        return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
      }
      for (var o = this.tryEntries.length - 1; o >= 0; --o) {
        var i = this.tryEntries[o],
          a = i.completion;
        if ("root" === i.tryLoc) return handle("end");
        if (i.tryLoc <= this.prev) {
          var c = n.call(i, "catchLoc"),
            u = n.call(i, "finallyLoc");
          if (c && u) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, true);
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          } else if (c) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, true);
          } else {
            if (!u) throw Error("try statement without catch or finally");
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          }
        }
      }
    },
    abrupt: function (t, e) {
      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
        var o = this.tryEntries[r];
        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
          var i = o;
          break;
        }
      }
      i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
      var a = i ? i.completion : {};
      return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
    },
    complete: function (t, e) {
      if ("throw" === t.type) throw t.arg;
      return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
    },
    finish: function (t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
      }
    },
    catch: function (t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.tryLoc === t) {
          var n = r.completion;
          if ("throw" === n.type) {
            var o = n.arg;
            resetTryEntry(r);
          }
          return o;
        }
      }
      throw Error("illegal catch attempt");
    },
    delegateYield: function (e, r, n) {
      return this.delegate = {
        iterator: values(e),
        resultName: r,
        nextLoc: n
      }, "next" === this.method && (this.arg = t), y;
    }
  }, e;
}
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, _setPrototypeOf(t, e);
}
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _superPropBase(t, o) {
  for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t)););
  return t;
}
function _superPropGet(t, o, e, r) {
  var p = _get(_getPrototypeOf(t.prototype ), o, e);
  return "function" == typeof p ? function (t) {
    return p.apply(e, t);
  } : p;
}
function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (undefined !== e) {
    var i = e.call(t, r);
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : undefined;
  }
}

var _materialDispose = function materialDispose(material) {
  if (material instanceof Array) {
    material.forEach(_materialDispose);
  } else {
    if (material.map) {
      material.map.dispose();
    }
    material.dispose();
  }
};
var _deallocate = function deallocate(obj) {
  if (obj.geometry) {
    obj.geometry.dispose();
  }
  if (obj.material) {
    _materialDispose(obj.material);
  }
  if (obj.texture) {
    obj.texture.dispose();
  }
  if (obj.children) {
    obj.children.forEach(_deallocate);
  }
};
var emptyObject = function emptyObject(obj) {
  if (obj && obj.children) while (obj.children.length) {
    var childObj = obj.children[0];
    obj.remove(childObj);
    _deallocate(childObj);
  }
};

function linkKapsule (kapsulePropName, kapsuleType) {
  var dummyK = new kapsuleType(); // To extract defaults

  return {
    linkProp: function linkProp(prop) {
      // link property config
      return {
        "default": dummyK[prop](),
        onChange: function onChange(v, state) {
          state[kapsulePropName][prop](v);
        },
        triggerUpdate: false
      };
    },
    linkMethod: function linkMethod(method) {
      // link method pass-through
      return function (state) {
        var kapsuleInstance = state[kapsulePropName];
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }
        var returnVal = kapsuleInstance[method].apply(kapsuleInstance, args);
        return returnVal === kapsuleInstance ? this // chain based on the parent object, not the inner kapsule
        : returnVal;
      };
    }
  };
}

var GLOBE_RADIUS = 100;

function getGlobeRadius() {
  return GLOBE_RADIUS;
}
function polar2Cartesian(lat, lng) {
  var relAltitude = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var phi = (90 - lat) * Math.PI / 180;
  var theta = (90 - lng) * Math.PI / 180;
  var r = GLOBE_RADIUS * (1 + relAltitude);
  var phiSin = Math.sin(phi);
  return {
    x: r * phiSin * Math.cos(theta),
    y: r * Math.cos(phi),
    z: r * phiSin * Math.sin(theta)
  };
}
function cartesian2Polar(_ref) {
  var x = _ref.x,
    y = _ref.y,
    z = _ref.z;
  var r = Math.sqrt(x * x + y * y + z * z);
  var phi = Math.acos(y / r);
  var theta = Math.atan2(z, x);
  return {
    lat: 90 - phi * 180 / Math.PI,
    lng: 90 - theta * 180 / Math.PI - (theta < -Math.PI / 2 ? 360 : 0),
    // keep within [-180, 180] boundaries
    altitude: r / GLOBE_RADIUS - 1
  };
}
function deg2Rad$1(deg) {
  return deg * Math.PI / 180;
}

var THREE$i = window.THREE ? window.THREE // Prefer consumption from global THREE, if exists
: {
  BackSide: BackSide,
  BufferAttribute: BufferAttribute,
  Color: Color,
  Mesh: Mesh,
  ShaderMaterial: ShaderMaterial
};
var vertexShader = "\nuniform float hollowRadius;\n\nvarying vec3 vVertexWorldPosition;\nvarying vec3 vVertexNormal;\nvarying float vCameraDistanceToObjCenter;\nvarying float vVertexAngularDistanceToHollowRadius;\n\nvoid main() {    \n  vVertexNormal\t= normalize(normalMatrix * normal);\n  vVertexWorldPosition = (modelMatrix * vec4(position, 1.0)).xyz;\n  \n  vec4 objCenterViewPosition = modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0);\n  vCameraDistanceToObjCenter = length(objCenterViewPosition);\n  \n  float edgeAngle = atan(hollowRadius / vCameraDistanceToObjCenter);\n  float vertexAngle = acos(dot(normalize(modelViewMatrix * vec4(position, 1.0)), normalize(objCenterViewPosition)));\n  vVertexAngularDistanceToHollowRadius = vertexAngle - edgeAngle;\n\n  gl_Position\t= projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}";
var fragmentShader = "\nuniform vec3 color;\nuniform float coefficient;\nuniform float power;\nuniform float hollowRadius;\n\nvarying vec3 vVertexNormal;\nvarying vec3 vVertexWorldPosition;\nvarying float vCameraDistanceToObjCenter;\nvarying float vVertexAngularDistanceToHollowRadius;\n\nvoid main() {\n  if (vCameraDistanceToObjCenter < hollowRadius) discard; // inside the hollowRadius\n  if (vVertexAngularDistanceToHollowRadius < 0.0) discard; // frag position is within the hollow radius\n\n  vec3 worldCameraToVertex = vVertexWorldPosition - cameraPosition;\n  vec3 viewCameraToVertex\t= (viewMatrix * vec4(worldCameraToVertex, 0.0)).xyz;\n  viewCameraToVertex = normalize(viewCameraToVertex);\n  float intensity\t= pow(\n    coefficient + dot(vVertexNormal, viewCameraToVertex),\n    power\n  );\n  gl_FragColor = vec4(color, intensity);\n}";

// Based off: http://stemkoski.blogspot.fr/2013/07/shaders-in-threejs-glow-and-halo.html
function createGlowMaterial(coefficient, color, power, hollowRadius) {
  return new THREE$i.ShaderMaterial({
    depthWrite: false,
    transparent: true,
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
    uniforms: {
      coefficient: {
        value: coefficient
      },
      color: {
        value: new THREE$i.Color(color)
      },
      power: {
        value: power
      },
      hollowRadius: {
        value: hollowRadius
      }
    }
  });
}
function createGlowGeometry(geometry, size) {
  var glowGeometry = geometry.clone();

  // Resize vertex positions according to normals
  var position = new Float32Array(geometry.attributes.position.count * 3);
  for (var idx = 0, len = position.length; idx < len; idx++) {
    var normal = geometry.attributes.normal.array[idx];
    var curPos = geometry.attributes.position.array[idx];
    position[idx] = curPos + normal * size;
  }
  glowGeometry.setAttribute('position', new THREE$i.BufferAttribute(position, 3));
  return glowGeometry;
}
var GlowMesh = /*#__PURE__*/function (_THREE$Mesh) {
  function GlowMesh(geometry) {
    var _this;
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$color = _ref.color,
      color = _ref$color === undefined ? 'gold' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === undefined ? 2 : _ref$size,
      _ref$coefficient = _ref.coefficient,
      coefficient = _ref$coefficient === undefined ? 0.5 : _ref$coefficient,
      _ref$power = _ref.power,
      power = _ref$power === undefined ? 1 : _ref$power,
      _ref$hollowRadius = _ref.hollowRadius,
      hollowRadius = _ref$hollowRadius === undefined ? 0 : _ref$hollowRadius,
      _ref$backside = _ref.backside,
      backside = _ref$backside === undefined ? true : _ref$backside;
    _classCallCheck(this, GlowMesh);
    _this = _callSuper(this, GlowMesh);
    var glowGeometry = createGlowGeometry(geometry, size);
    var glowMaterial = createGlowMaterial(coefficient, color, power, hollowRadius);
    backside && (glowMaterial.side = THREE$i.BackSide);
    _this.geometry = glowGeometry;
    _this.material = glowMaterial;
    return _this;
  }
  _inherits(GlowMesh, _THREE$Mesh);
  return _createClass(GlowMesh);
}(THREE$i.Mesh);

var THREE$h = window.THREE ? window.THREE // Prefer consumption from global THREE, if exists
: {
  Color: Color,
  Group: Group,
  LineBasicMaterial: LineBasicMaterial,
  LineSegments: LineSegments,
  Mesh: Mesh,
  MeshPhongMaterial: MeshPhongMaterial,
  SphereGeometry: SphereGeometry,
  SRGBColorSpace: SRGBColorSpace,
  TextureLoader: TextureLoader
};

//

var GlobeLayerKapsule = Kapsule({
  props: {
    globeImageUrl: {},
    bumpImageUrl: {},
    showGlobe: {
      "default": true,
      onChange: function onChange(showGlobe, state) {
        state.globeGroup.visible = !!showGlobe;
      },
      triggerUpdate: false
    },
    showGraticules: {
      "default": false,
      onChange: function onChange(showGraticules, state) {
        state.graticulesObj.visible = !!showGraticules;
      },
      triggerUpdate: false
    },
    showAtmosphere: {
      "default": true,
      onChange: function onChange(showAtmosphere, state) {
        state.atmosphereObj && (state.atmosphereObj.visible = !!showAtmosphere);
      },
      triggerUpdate: false
    },
    atmosphereColor: {
      "default": 'lightskyblue'
    },
    atmosphereAltitude: {
      "default": 0.15
    },
    globeTileEngineUrl: {
      onChange: function onChange(v, state) {
        state.tileEngine.tileUrl = v;
      }
    },
    globeTileEngineMaxLevel: {
      "default": 17,
      onChange: function onChange(v, state) {
        state.tileEngine.maxLevel = v;
      },
      triggerUpdate: false
    },
    updatePov: {
      onChange: function onChange(v, state) {
        state.tileEngine.updatePov(v);
      },
      triggerUpdate: false
    },
    onReady: {
      "default": function _default() {},
      triggerUpdate: false
    }
  },
  methods: {
    globeMaterial: function globeMaterial(state, _globeMaterial) {
      if (_globeMaterial !== undefined) {
        state.globeObj.material = _globeMaterial || state.defaultGlobeMaterial;
        return this;
      }
      return state.globeObj.material;
    },
    _destructor: function _destructor(state) {
      emptyObject(state.globeObj);
      emptyObject(state.tileEngine);
      emptyObject(state.graticulesObj);
    }
  },
  stateInit: function stateInit() {
    // create globe
    var globeGeometry = new THREE$h.SphereGeometry(GLOBE_RADIUS, 75, 75);
    var defaultGlobeMaterial = new THREE$h.MeshPhongMaterial({
      color: 0x000000
    });
    var globeObj = new THREE$h.Mesh(globeGeometry, defaultGlobeMaterial);
    globeObj.rotation.y = -Math.PI / 2; // face prime meridian along Z axis

    // Create empty tile engine
    var tileEngine = new SlippyMap(GLOBE_RADIUS);

    // Group including globe and tile engine
    var globeGroup = new THREE$h.Group();
    globeGroup.__globeObjType = 'globe'; // Add object type
    globeGroup.add(globeObj);
    globeGroup.add(tileEngine);

    // create graticules
    var graticulesObj = new THREE$h.LineSegments(new GeoJsonGeometry(geoGraticule10(), GLOBE_RADIUS, 2), new THREE$h.LineBasicMaterial({
      color: 'lightgrey',
      transparent: true,
      opacity: 0.1
    }));
    return {
      globeGroup: globeGroup,
      globeObj: globeObj,
      graticulesObj: graticulesObj,
      defaultGlobeMaterial: defaultGlobeMaterial,
      tileEngine: tileEngine
    };
  },
  init: function init(threeObj, state) {
    // Clear the scene
    emptyObject(threeObj);

    // Main three object to manipulate
    state.scene = threeObj;
    state.scene.add(state.globeGroup); // add globe
    state.scene.add(state.graticulesObj); // add graticules

    state.ready = false;
  },
  update: function update(state, changedProps) {
    var globeMaterial = state.globeObj.material;

    // Hide globeObj if it's representing tiles
    state.tileEngine.visible = !(state.globeObj.visible = !state.globeTileEngineUrl);
    if (changedProps.hasOwnProperty('globeImageUrl')) {
      if (!state.globeImageUrl) {
        // Black globe if no image
        !globeMaterial.color && (globeMaterial.color = new THREE$h.Color(0x000000));
      } else {
        new THREE$h.TextureLoader().load(state.globeImageUrl, function (texture) {
          texture.colorSpace = THREE$h.SRGBColorSpace;
          globeMaterial.map = texture;
          globeMaterial.color = null;
          globeMaterial.needsUpdate = true;

          // ready when first globe image finishes loading (asynchronously to allow 1 frame to load texture)
          !state.ready && (state.ready = true) && setTimeout(state.onReady);
        });
      }
    }
    if (changedProps.hasOwnProperty('bumpImageUrl')) {
      if (!state.bumpImageUrl) {
        globeMaterial.bumpMap = null;
        globeMaterial.needsUpdate = true;
      } else {
        state.bumpImageUrl && new THREE$h.TextureLoader().load(state.bumpImageUrl, function (texture) {
          globeMaterial.bumpMap = texture;
          globeMaterial.needsUpdate = true;
        });
      }
    }
    if (changedProps.hasOwnProperty('atmosphereColor') || changedProps.hasOwnProperty('atmosphereAltitude')) {
      if (state.atmosphereObj) {
        // recycle previous atmosphere object
        state.scene.remove(state.atmosphereObj);
        emptyObject(state.atmosphereObj);
      }
      if (state.atmosphereColor && state.atmosphereAltitude) {
        var obj = state.atmosphereObj = new GlowMesh(state.globeObj.geometry, {
          color: state.atmosphereColor,
          size: GLOBE_RADIUS * state.atmosphereAltitude,
          hollowRadius: GLOBE_RADIUS,
          coefficient: 0.1,
          power: 3.5 // dispersion
        });
        obj.visible = !!state.showAtmosphere;
        obj.__globeObjType = 'atmosphere'; // Add object type
        state.scene.add(obj);
      }
    }
    if (!state.ready && (!state.globeImageUrl || state.globeTileEngineUrl)) {
      // ready immediately if there's no globe image
      state.ready = true;
      state.onReady();
    }
  }
});

var colorStr2Hex = function colorStr2Hex(str) {
  return isNaN(str) ? parseInt(tinyColor(str).toHex(), 16) : str;
};
var colorAlpha = function colorAlpha(str) {
  return str && isNaN(str) ? color(str).opacity : 1;
};
var color2ShaderArr = function color2ShaderArr(str) {
  var includeAlpha = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var sRGBColorSpace = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var color;
  var alpha = 1;
  var rgbaMatch = /^rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d.eE+-]+)\s*\)$/.exec(str.trim().toLowerCase());
  if (rgbaMatch) {
    var _rgbaMatch$slice = rgbaMatch.slice(1),
      _rgbaMatch$slice2 = _slicedToArray(_rgbaMatch$slice, 4),
      r = _rgbaMatch$slice2[0],
      g = _rgbaMatch$slice2[1],
      b = _rgbaMatch$slice2[2],
      a = _rgbaMatch$slice2[3];
    color = new Color("rgb(".concat(+r, ",").concat(+g, ",").concat(+b, ")"));
    alpha = Math.min(+a, 1);
  } else {
    color = new Color(str);
  }
  sRGBColorSpace && color.convertLinearToSRGB(); // vertexColors expects linear, but shaders expect sRGB

  var rgbArr = color.toArray();
  return includeAlpha ? [].concat(_toConsumableArray(rgbArr), [alpha]) : rgbArr;
};
function setMaterialOpacity(material, opacity, depthWrite) {
  material.opacity = opacity;
  material.transparent = opacity < 1;
  material.depthWrite = opacity >= 1 ; // depthWrite=false recommended for transparent materials, to prevent transparency issues https://discourse.threejs.org/t/threejs-and-the-transparent-problem/11553/31

  return material;
}

var THREE$g = window.THREE ? window.THREE // Prefer consumption from global THREE, if exists
: {
  BufferAttribute: BufferAttribute
};
function array2BufferAttr(data) {
  var itemSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var ArrayClass = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Float32Array;
  if (itemSize === 1) {
    // edge case handle for improved performance
    return new THREE$g.BufferAttribute(new ArrayClass(data), itemSize);
  }
  var ba = new THREE$g.BufferAttribute(new ArrayClass(data.length * itemSize), itemSize);
  for (var idx = 0, l = data.length; idx < l; idx++) {
    ba.set(data[idx], idx * itemSize);
  }
  return ba;
}
function bufferAttr2Array(ba) {
  var itemSize = ba.itemSize;
  var res = [];
  for (var i = 0; i < ba.count; i++) {
    res.push(ba.array.slice(i * itemSize, (i + 1) * itemSize));
  }
  return res;
}

var _dataBindAttr = /*#__PURE__*/new WeakMap();
var _objBindAttr = /*#__PURE__*/new WeakMap();
var _removeDelay = /*#__PURE__*/new WeakMap();
var ThreeDigest = /*#__PURE__*/function (_DataBindMapper) {
  function ThreeDigest(scene) {
    var _this;
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$dataBindAttr = _ref.dataBindAttr,
      dataBindAttr = _ref$dataBindAttr === undefined ? '__data' : _ref$dataBindAttr,
      _ref$objBindAttr = _ref.objBindAttr,
      objBindAttr = _ref$objBindAttr === undefined ? '__threeObj' : _ref$objBindAttr,
      _ref$removeDelay = _ref.removeDelay,
      removeDelay = _ref$removeDelay === undefined ? 0 : _ref$removeDelay;
    _classCallCheck(this, ThreeDigest);
    _this = _callSuper(this, ThreeDigest);
    _defineProperty(_this, "scene", undefined);
    _classPrivateFieldInitSpec(_this, _dataBindAttr, undefined);
    _classPrivateFieldInitSpec(_this, _objBindAttr, undefined);
    _classPrivateFieldInitSpec(_this, _removeDelay, undefined);
    _this.scene = scene;
    _classPrivateFieldSet2(_dataBindAttr, _this, dataBindAttr);
    _classPrivateFieldSet2(_objBindAttr, _this, objBindAttr);
    _classPrivateFieldSet2(_removeDelay, _this, removeDelay);
    _this.onRemoveObj(function () {});
    return _this;
  }
  _inherits(ThreeDigest, _DataBindMapper);
  return _createClass(ThreeDigest, [{
    key: "onCreateObj",
    value: function onCreateObj(fn) {
      var _this2 = this;
      _superPropGet(ThreeDigest, "onCreateObj", this)([function (d) {
        var obj = fn(d);
        d[_classPrivateFieldGet2(_objBindAttr, _this2)] = obj;
        obj[_classPrivateFieldGet2(_dataBindAttr, _this2)] = d;
        _this2.scene.add(obj);
        return obj;
      }]);
      return this;
    }
  }, {
    key: "onRemoveObj",
    value: function onRemoveObj(fn) {
      var _this3 = this;
      _superPropGet(ThreeDigest, "onRemoveObj", this)([function (obj, dId) {
        var d = _superPropGet(ThreeDigest, "getData", _this3)([obj]);
        fn(obj, dId);
        var removeFn = function removeFn() {
          _this3.scene.remove(obj);
          emptyObject(obj);
          delete d[_classPrivateFieldGet2(_objBindAttr, _this3)];
        };
        _classPrivateFieldGet2(_removeDelay, _this3) ? setTimeout(removeFn, _classPrivateFieldGet2(_removeDelay, _this3)) : removeFn();
      }]);
      return this;
    }
  }]);
}(DataBindMapper);

var THREE$f = window.THREE ? window.THREE // Prefer consumption from global THREE, if exists
: {
  BufferGeometry: BufferGeometry,
  CylinderGeometry: CylinderGeometry,
  Matrix4: Matrix4,
  Mesh: Mesh,
  MeshLambertMaterial: MeshLambertMaterial,
  Object3D: Object3D,
  Vector3: Vector3
};
var bfg$2 = Object.assign({}, _bfg);
var BufferGeometryUtils$2 = bfg$2.BufferGeometryUtils || bfg$2;

//

var PointsLayerKapsule = Kapsule({
  props: {
    pointsData: {
      "default": []
    },
    pointLat: {
      "default": 'lat'
    },
    pointLng: {
      "default": 'lng'
    },
    pointColor: {
      "default": function _default() {
        return '#ffffaa';
      }
    },
    pointAltitude: {
      "default": 0.1
    },
    // in units of globe radius
    pointRadius: {
      "default": 0.25
    },
    // in deg
    pointResolution: {
      "default": 12,
      triggerUpdate: false
    },
    // how many slice segments in the cylinder's circumference
    pointsMerge: {
      "default": false
    },
    // boolean. Whether to merge all points into a single mesh for rendering performance
    pointsTransitionDuration: {
      "default": 1000,
      triggerUpdate: false
    } // ms
  },
  init: function init(threeObj, state, _ref) {
    var tweenGroup = _ref.tweenGroup;
    // Clear the scene
    emptyObject(threeObj);

    // Main three object to manipulate
    state.scene = threeObj;
    state.tweenGroup = tweenGroup;
    state.dataMapper = new ThreeDigest(threeObj, {
      objBindAttr: '__threeObjPoint'
    });
  },
  update: function update(state, changedProps) {
    // Data accessors
    var latAccessor = accessorFn(state.pointLat);
    var lngAccessor = accessorFn(state.pointLng);
    var altitudeAccessor = accessorFn(state.pointAltitude);
    var radiusAccessor = accessorFn(state.pointRadius);
    var colorAccessor = accessorFn(state.pointColor);

    // shared geometry
    var pointGeometry = new THREE$f.CylinderGeometry(1, 1, 1, state.pointResolution);
    pointGeometry.applyMatrix4(new THREE$f.Matrix4().makeRotationX(Math.PI / 2));
    pointGeometry.applyMatrix4(new THREE$f.Matrix4().makeTranslation(0, 0, -0.5));
    var pxPerDeg = 2 * Math.PI * GLOBE_RADIUS / 360;
    var pointMaterials = {}; // indexed by color

    if (!state.pointsMerge && changedProps.hasOwnProperty('pointsMerge')) {
      emptyObject(state.scene); // Empty trailing merged objects
    }
    state.dataMapper.scene = state.pointsMerge ? new THREE$f.Object3D() : state.scene; // use fake scene if merging points

    state.dataMapper.onCreateObj(createObj).onUpdateObj(updateObj).digest(state.pointsData);
    if (state.pointsMerge) {
      // merge points into a single mesh
      var pointsGeometry = !state.pointsData.length ? new THREE$f.BufferGeometry() : (BufferGeometryUtils$2.mergeGeometries || BufferGeometryUtils$2.mergeBufferGeometries)(state.pointsData.map(function (d) {
        var obj = state.dataMapper.getObj(d);
        var geom = obj.geometry.clone();

        // apply mesh world transform to vertices
        obj.updateMatrix();
        geom.applyMatrix4(obj.matrix);

        // color vertices
        var color = color2ShaderArr(colorAccessor(d));
        geom.setAttribute('color', array2BufferAttr(Array(geom.getAttribute('position').count).fill(color), 4));
        return geom;
      }));
      var points = new THREE$f.Mesh(pointsGeometry, new THREE$f.MeshLambertMaterial({
        color: 0xffffff,
        transparent: true,
        vertexColors: true
      }));
      points.__globeObjType = 'points'; // Add object type
      points.__data = state.pointsData; // Attach obj data

      state.dataMapper.clear(); // Unbind merged points
      emptyObject(state.scene);
      state.scene.add(points);
    }

    //

    function createObj() {
      var obj = new THREE$f.Mesh(pointGeometry);
      obj.__globeObjType = 'point'; // Add object type
      return obj;
    }
    function updateObj(obj, d) {
      var applyUpdate = function applyUpdate(td) {
        var _obj$__currentTargetD = obj.__currentTargetD = td,
          r = _obj$__currentTargetD.r,
          alt = _obj$__currentTargetD.alt,
          lat = _obj$__currentTargetD.lat,
          lng = _obj$__currentTargetD.lng;

        // position cylinder ground
        Object.assign(obj.position, polar2Cartesian(lat, lng));

        // orientate outwards
        var globeCenter = state.pointsMerge ? new THREE$f.Vector3(0, 0, 0) : state.scene.localToWorld(new THREE$f.Vector3(0, 0, 0)); // translate from local to world coords
        obj.lookAt(globeCenter);

        // scale radius and altitude
        obj.scale.x = obj.scale.y = Math.min(30, r) * pxPerDeg;
        obj.scale.z = Math.max(alt * GLOBE_RADIUS, 0.1); // avoid non-invertible matrix
      };
      var targetD = {
        alt: +altitudeAccessor(d),
        r: +radiusAccessor(d),
        lat: +latAccessor(d),
        lng: +lngAccessor(d)
      };
      var currentTargetD = obj.__currentTargetD || Object.assign({}, targetD, {
        alt: -1e-3
      });
      if (Object.keys(targetD).some(function (k) {
        return currentTargetD[k] !== targetD[k];
      })) {
        if (state.pointsMerge || !state.pointsTransitionDuration || state.pointsTransitionDuration < 0) {
          // set final position
          applyUpdate(targetD);
        } else {
          // animate
          state.tweenGroup.add(new Tween(currentTargetD).to(targetD, state.pointsTransitionDuration).easing(Easing.Quadratic.InOut).onUpdate(applyUpdate).start());
        }
      }
      if (!state.pointsMerge) {
        // Update materials on individual points
        var color = colorAccessor(d);
        var opacity = color ? colorAlpha(color) : 0;
        var showCyl = !!opacity;
        obj.visible = showCyl;
        if (showCyl) {
          if (!pointMaterials.hasOwnProperty(color)) {
            pointMaterials[color] = new THREE$f.MeshLambertMaterial({
              color: colorStr2Hex(color),
              transparent: opacity < 1,
              opacity: opacity
            });
          }
          obj.material = pointMaterials[color];
        }
      }
    }
  }
});

var dashedLineShaders = function dashedLineShaders() {
  return {
    uniforms: {
      // dash param defaults, all relative to full length
      dashOffset: {
        value: 0
      },
      dashSize: {
        value: 1
      },
      gapSize: {
        value: 0
      },
      dashTranslate: {
        value: 0
      } // used for animating the dash
    },
    vertexShader: "\n    uniform float dashTranslate; \n\n    attribute vec4 color;\n    varying vec4 vColor;\n    \n    attribute float relDistance;\n    varying float vRelDistance;\n\n    void main() {\n      // pass through colors and distances\n      vColor = color;\n      vRelDistance = relDistance + dashTranslate;\n      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n    }\n  ",
    fragmentShader: "\n    uniform float dashOffset; \n    uniform float dashSize;\n    uniform float gapSize; \n    \n    varying vec4 vColor;\n    varying float vRelDistance;\n    \n    void main() {\n      // ignore pixels in the gap\n      if (vRelDistance < dashOffset) discard;\n      if (mod(vRelDistance - dashOffset, dashSize + gapSize) > dashSize) discard;\n    \n      // set px color: [r, g, b, a], interpolated between vertices \n      gl_FragColor = vColor; \n    }\n  "
  };
};
var invisibleUndergroundShaderExtend = function invisibleUndergroundShaderExtend(shader) {
  shader.uniforms.surfaceRadius = {
    type: 'float',
    value: 0
  };
  shader.vertexShader = ('attribute float surfaceRadius;\nvarying float vSurfaceRadius;\nvarying vec3 vPos;\n' + shader.vertexShader).replace('void main() {', ['void main() {', 'vSurfaceRadius = surfaceRadius;', 'vPos = position;'].join('\n'));
  shader.fragmentShader = ('uniform float surfaceRadius;\nvarying float vSurfaceRadius;\nvarying vec3 vPos;\n' + shader.fragmentShader).replace('void main() {', ['void main() {', 'if (length(vPos) < max(surfaceRadius, vSurfaceRadius)) discard;'].join('\n'));
  return shader;
};
var setRadiusShaderExtend = function setRadiusShaderExtend(shader) {
  shader.vertexShader = "\n    attribute float r;\n    \n    const float PI = 3.1415926535897932384626433832795;\n    float toRad(in float a) {\n      return a * PI / 180.0;\n    }\n    \n    vec3 Polar2Cartesian(in vec3 c) { // [lat, lng, r]\n      float phi = toRad(90.0 - c.x);\n      float theta = toRad(90.0 - c.y);\n      float r = c.z;\n      return vec3( // x,y,z\n        r * sin(phi) * cos(theta),\n        r * cos(phi),\n        r * sin(phi) * sin(theta)\n      );\n    }\n    \n    vec2 Cartesian2Polar(in vec3 p) {\n      float r = sqrt(p.x * p.x + p.y * p.y + p.z * p.z);\n      float phi = acos(p.y / r);\n      float theta = atan(p.z, p.x);\n      return vec2( // lat,lng\n        90.0 - phi * 180.0 / PI,\n        90.0 - theta * 180.0 / PI - (theta < -PI / 2.0 ? 360.0 : 0.0)\n      );\n    }\n    ".concat(shader.vertexShader.replace('}', "                  \n        vec3 pos = Polar2Cartesian(vec3(Cartesian2Polar(position), r));\n        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);\n      }\n    "), "\n  ");
  return shader;
};

//

var applyShaderExtensionToMaterial = function applyShaderExtensionToMaterial(material, extensionFn) {
  material.onBeforeCompile = function (shader) {
    material.userData.shader = extensionFn(shader);
  };
  return material;
};
var setExtendedMaterialUniforms = function setExtendedMaterialUniforms(material) {
  var uniformsFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (u) {
    return u;
  };
  if (material.userData.shader) {
    uniformsFn(material.userData.shader.uniforms);
  } else {
    var curFn = material.onBeforeCompile;
    material.onBeforeCompile = function (shader) {
      curFn(shader);
      uniformsFn(shader.uniforms);
    };
  }
};

var _excluded = ["stroke"];
var THREE$e = window.THREE ? window.THREE // Prefer consumption from global THREE, if exists
: {
  BufferGeometry: BufferGeometry,
  CubicBezierCurve3: CubicBezierCurve3,
  Curve: Curve,
  Group: Group,
  Line: Line,
  Mesh: Mesh,
  NormalBlending: NormalBlending,
  ShaderMaterial: ShaderMaterial,
  TubeGeometry: TubeGeometry,
  Vector3: Vector3
};
var FrameTicker$2 = _FrameTicker["default"] || _FrameTicker;

//

var ArcsLayerKapsule = Kapsule({
  props: {
    arcsData: {
      "default": []
    },
    arcStartLat: {
      "default": 'startLat'
    },
    arcStartLng: {
      "default": 'startLng'
    },
    arcEndLat: {
      "default": 'endLat'
    },
    arcEndLng: {
      "default": 'endLng'
    },
    arcColor: {
      "default": function _default() {
        return '#ffffaa';
      }
    },
    // single color, array of colors or color interpolation fn
    arcAltitude: {},
    // in units of globe radius
    arcAltitudeAutoScale: {
      "default": 0.5
    },
    // scale altitude proportional to great-arc distance between the two points
    arcStroke: {},
    // in deg
    arcCurveResolution: {
      "default": 64,
      triggerUpdate: false
    },
    // how many straight segments in the curve
    arcCircularResolution: {
      "default": 6,
      triggerUpdate: false
    },
    // how many slice segments in the tube's circumference
    arcDashLength: {
      "default": 1
    },
    // in units of line length
    arcDashGap: {
      "default": 0
    },
    arcDashInitialGap: {
      "default": 0
    },
    arcDashAnimateTime: {
      "default": 0
    },
    // ms
    arcsTransitionDuration: {
      "default": 1000,
      triggerUpdate: false
    } // ms
  },
  methods: {
    pauseAnimation: function pauseAnimation(state) {
      var _state$ticker;
      (_state$ticker = state.ticker) === null || _state$ticker === undefined || _state$ticker.pause();
    },
    resumeAnimation: function resumeAnimation(state) {
      var _state$ticker2;
      (_state$ticker2 = state.ticker) === null || _state$ticker2 === undefined || _state$ticker2.resume();
    },
    _destructor: function _destructor(state) {
      var _state$ticker3;
      state.sharedMaterial.dispose();
      (_state$ticker3 = state.ticker) === null || _state$ticker3 === undefined || _state$ticker3.dispose();
    }
  },
  stateInit: function stateInit(_ref) {
    var tweenGroup = _ref.tweenGroup;
    return {
      tweenGroup: tweenGroup,
      ticker: new FrameTicker$2(),
      sharedMaterial: new THREE$e.ShaderMaterial(_objectSpread2(_objectSpread2({}, dashedLineShaders()), {}, {
        transparent: true,
        blending: THREE$e.NormalBlending
      }))
    };
  },
  init: function init(threeObj, state) {
    // Clear the scene
    emptyObject(threeObj);

    // Main three object to manipulate
    state.scene = threeObj;
    state.dataMapper = new ThreeDigest(threeObj, {
      objBindAttr: '__threeObjArc'
    }).onCreateObj(function () {
      var obj = new THREE$e.Group(); // populated in updateObj

      obj.__globeObjType = 'arc'; // Add object type
      return obj;
    });

    // Kick-off dash animations
    state.ticker.onTick.add(function (_, timeDelta) {
      state.dataMapper.entries().map(function (_ref2) {
        var _ref3 = _slicedToArray(_ref2, 2),
          obj = _ref3[1];
        return obj;
      }).filter(function (o) {
        return o.children.length && o.children[0].material && o.children[0].__dashAnimateStep;
      }).forEach(function (o) {
        var obj = o.children[0];
        var step = obj.__dashAnimateStep * timeDelta;
        var curTranslate = obj.material.uniforms.dashTranslate.value % 1e9; // reset after 1B loops
        obj.material.uniforms.dashTranslate.value = curTranslate + step;
      });
    });
  },
  update: function update(state) {
    // Data accessors
    var startLatAccessor = accessorFn(state.arcStartLat);
    var startLngAccessor = accessorFn(state.arcStartLng);
    var endLatAccessor = accessorFn(state.arcEndLat);
    var endLngAccessor = accessorFn(state.arcEndLng);
    var altitudeAccessor = accessorFn(state.arcAltitude);
    var altitudeAutoScaleAccessor = accessorFn(state.arcAltitudeAutoScale);
    var strokeAccessor = accessorFn(state.arcStroke);
    var colorAccessor = accessorFn(state.arcColor);
    var dashLengthAccessor = accessorFn(state.arcDashLength);
    var dashGapAccessor = accessorFn(state.arcDashGap);
    var dashInitialGapAccessor = accessorFn(state.arcDashInitialGap);
    var dashAnimateTimeAccessor = accessorFn(state.arcDashAnimateTime);
    state.dataMapper.onUpdateObj(function (group, arc) {
      var stroke = strokeAccessor(arc);
      var useTube = stroke !== null && stroke !== undefined;
      if (!group.children.length || useTube !== (group.children[0].type === 'Mesh')) {
        // create or swap object types
        emptyObject(group);
        var _obj = useTube ? new THREE$e.Mesh() : new THREE$e.Line(new THREE$e.BufferGeometry());
        _obj.material = state.sharedMaterial.clone(); // Separate material instance per object to have dedicated uniforms (but shared shaders)

        group.add(_obj);
      }
      var obj = group.children[0];

      // set dash uniforms
      Object.assign(obj.material.uniforms, {
        dashSize: {
          value: dashLengthAccessor(arc)
        },
        gapSize: {
          value: dashGapAccessor(arc)
        },
        dashOffset: {
          value: dashInitialGapAccessor(arc)
        }
      });

      // set dash animation step
      var dashAnimateTime = dashAnimateTimeAccessor(arc);
      obj.__dashAnimateStep = dashAnimateTime > 0 ? 1000 / dashAnimateTime : 0; // per second

      // calculate vertex colors (to create gradient)
      var vertexColorArray = calcColorVertexArray(colorAccessor(arc),
      // single, array of colors or interpolator
      state.arcCurveResolution,
      // numSegments
      useTube ? state.arcCircularResolution + 1 : 1 // num vertices per segment
      );

      // calculate vertex relative distances (for dashed lines)
      var vertexRelDistanceArray = calcVertexRelDistances(state.arcCurveResolution,
      // numSegments
      useTube ? state.arcCircularResolution + 1 : 1,
      // num vertices per segment
      true // run from end to start, to animate in the correct direction
      );
      obj.geometry.setAttribute('color', vertexColorArray);
      obj.geometry.setAttribute('relDistance', vertexRelDistanceArray);
      var applyUpdate = function applyUpdate(td) {
        var _group$__currentTarge = group.__currentTargetD = td,
          stroke = _group$__currentTarge.stroke,
          curveD = _objectWithoutProperties(_group$__currentTarge, _excluded);
        var curve = calcCurve(curveD);
        if (useTube) {
          obj.geometry && obj.geometry.dispose();
          obj.geometry = new THREE$e.TubeGeometry(curve, state.arcCurveResolution, stroke / 2, state.arcCircularResolution);
          obj.geometry.setAttribute('color', vertexColorArray);
          obj.geometry.setAttribute('relDistance', vertexRelDistanceArray);
        } else {
          obj.geometry.setFromPoints(curve.getPoints(state.arcCurveResolution));
        }
      };
      var targetD = {
        stroke: stroke,
        alt: altitudeAccessor(arc),
        altAutoScale: +altitudeAutoScaleAccessor(arc),
        startLat: +startLatAccessor(arc),
        startLng: +startLngAccessor(arc),
        endLat: +endLatAccessor(arc),
        endLng: +endLngAccessor(arc)
      };
      var currentTargetD = group.__currentTargetD || Object.assign({}, targetD, {
        altAutoScale: -1e-3
      });
      if (Object.keys(targetD).some(function (k) {
        return currentTargetD[k] !== targetD[k];
      })) {
        if (!state.arcsTransitionDuration || state.arcsTransitionDuration < 0) {
          // set final position
          applyUpdate(targetD);
        } else {
          // animate
          state.tweenGroup.add(new Tween(currentTargetD).to(targetD, state.arcsTransitionDuration).easing(Easing.Quadratic.InOut).onUpdate(applyUpdate).start());
        }
      }
    }).digest(state.arcsData);

    //

    function calcCurve(_ref4) {
      var alt = _ref4.alt,
        altAutoScale = _ref4.altAutoScale,
        startLat = _ref4.startLat,
        startLng = _ref4.startLng,
        endLat = _ref4.endLat,
        endLng = _ref4.endLng;
      var getVec = function getVec(_ref5) {
        var _ref6 = _slicedToArray(_ref5, 3),
          lng = _ref6[0],
          lat = _ref6[1],
          alt = _ref6[2];
        var _polar2Cartesian = polar2Cartesian(lat, lng, alt),
          x = _polar2Cartesian.x,
          y = _polar2Cartesian.y,
          z = _polar2Cartesian.z;
        return new THREE$e.Vector3(x, y, z);
      };

      //calculate curve
      var startPnt = [startLng, startLat];
      var endPnt = [endLng, endLat];
      var altitude = alt;
      (altitude === null || altitude === undefined) && (
      // by default set altitude proportional to the great-arc distance
      altitude = geoDistance$1(startPnt, endPnt) / 2 * altAutoScale);
      if (altitude) {
        var interpolate = geoInterpolate(startPnt, endPnt);
        var _map = [0.25, 0.75].map(function (t) {
            return [].concat(_toConsumableArray(interpolate(t)), [altitude * 1.5]);
          }),
          _map2 = _slicedToArray(_map, 2),
          m1Pnt = _map2[0],
          m2Pnt = _map2[1];
        var curve = _construct(THREE$e.CubicBezierCurve3, _toConsumableArray([startPnt, m1Pnt, m2Pnt, endPnt].map(getVec)));

        //const mPnt = [...interpolate(0.5), altitude * 2];
        //curve = new THREE.QuadraticBezierCurve3(...[startPnt, mPnt, endPnt].map(getVec));

        return curve;
      } else {
        // ground line
        var _alt = 0.001; // slightly above the ground to prevent occlusion
        return calcSphereArc.apply(undefined, _toConsumableArray([[].concat(startPnt, [_alt]), [].concat(endPnt, [_alt])].map(getVec)));
      }

      //

      function calcSphereArc(startVec, endVec) {
        var angle = startVec.angleTo(endVec);
        var getGreatCirclePoint = angle === 0 ? function () {
          return startVec.clone();
        } // points exactly overlap
        : function (t) {
          return new THREE$e.Vector3().addVectors(startVec.clone().multiplyScalar(Math.sin((1 - t) * angle)), endVec.clone().multiplyScalar(Math.sin(t * angle))).divideScalar(Math.sin(angle));
        };
        var sphereArc = new THREE$e.Curve();
        sphereArc.getPoint = getGreatCirclePoint;
        return sphereArc;
      }
    }
    function calcColorVertexArray(colors, numSegments) {
      var numVerticesPerSegment = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
      var numVerticesGroup = numSegments + 1; // one between every two segments and two at the ends

      var getVertexColor;
      if (colors instanceof Array || colors instanceof Function) {
        var colorInterpolator = colors instanceof Array ? scaleLinear() // array of colors, interpolate at each step
        .domain(colors.map(function (_, idx) {
          return idx / (colors.length - 1);
        })) // same number of stops as colors
        .range(colors) : colors; // already interpolator fn

        getVertexColor = function getVertexColor(t) {
          return color2ShaderArr(colorInterpolator(t), true, true);
        };
      } else {
        // single color, use constant
        var vertexColor = color2ShaderArr(colors, true, true);
        getVertexColor = function getVertexColor() {
          return vertexColor;
        };
      }
      var vertexColors = [];
      for (var v = 0, l = numVerticesGroup; v < l; v++) {
        var _vertexColor = getVertexColor(v / (l - 1));
        for (var s = 0; s < numVerticesPerSegment; s++) {
          vertexColors.push(_vertexColor);
        }
      }
      return array2BufferAttr(vertexColors, 4);
    }
    function calcVertexRelDistances(numSegments) {
      var numVerticesPerSegment = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var invert = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var numVerticesGroup = numSegments + 1; // one between every two segments and two at the ends

      var vertexDistances = [];
      for (var v = 0, l = numVerticesGroup; v < l; v++) {
        var relDistance = v / (l - 1);
        for (var s = 0; s < numVerticesPerSegment; s++) {
          vertexDistances.push(relDistance);
        }
      }
      invert && vertexDistances.reverse();
      return array2BufferAttr(vertexDistances, 1);
    }
  }
});

var THREE$d = window.THREE ? window.THREE // Prefer consumption from global THREE, if exists
: {
  BufferGeometry: BufferGeometry,
  DoubleSide: DoubleSide,
  Mesh: Mesh,
  MeshLambertMaterial: MeshLambertMaterial,
  Object3D: Object3D
};
var bfg$1 = Object.assign({}, _bfg);
var BufferGeometryUtils$1 = bfg$1.BufferGeometryUtils || bfg$1;

//

var HexBinLayerKapsule = Kapsule({
  props: {
    hexBinPointsData: {
      "default": []
    },
    hexBinPointLat: {
      "default": 'lat'
    },
    hexBinPointLng: {
      "default": 'lng'
    },
    hexBinPointWeight: {
      "default": 1
    },
    hexBinResolution: {
      "default": 4
    },
    // 0-15. Level 0 partitions the earth in 122 (mostly) hexagonal cells. Each subsequent level sub-divides the previous in roughly 7 hexagons.
    hexMargin: {
      "default": 0.2
    },
    // in fraction of diameter
    hexTopCurvatureResolution: {
      "default": 5
    },
    // in angular degrees
    hexTopColor: {
      "default": function _default() {
        return '#ffffaa';
      }
    },
    hexSideColor: {
      "default": function _default() {
        return '#ffffaa';
      }
    },
    hexAltitude: {
      "default": function _default(_ref) {
        var sumWeight = _ref.sumWeight;
        return sumWeight * 0.01;
      }
    },
    // in units of globe radius
    hexBinMerge: {
      "default": false
    },
    // boolean. Whether to merge all hex geometries into a single mesh for rendering performance
    hexTransitionDuration: {
      "default": 1000,
      triggerUpdate: false
    } // ms
  },
  init: function init(threeObj, state, _ref2) {
    var tweenGroup = _ref2.tweenGroup;
    // Clear the scene
    emptyObject(threeObj);

    // Main three object to manipulate
    state.scene = threeObj;
    state.tweenGroup = tweenGroup;
    state.dataMapper = new ThreeDigest(threeObj, {
      objBindAttr: '__threeObjHexbin'
    });
  },
  update: function update(state, changedProps) {
    // Accessors
    var latAccessor = accessorFn(state.hexBinPointLat);
    var lngAccessor = accessorFn(state.hexBinPointLng);
    var weightAccessor = accessorFn(state.hexBinPointWeight);
    var altitudeAccessor = accessorFn(state.hexAltitude);
    var topColorAccessor = accessorFn(state.hexTopColor);
    var sideColorAccessor = accessorFn(state.hexSideColor);
    var marginAccessor = accessorFn(state.hexMargin);
    var byH3Idx = indexBy(state.hexBinPointsData.map(function (d) {
      return _objectSpread2(_objectSpread2({}, d), {}, {
        h3Idx: latLngToCell(latAccessor(d), lngAccessor(d), state.hexBinResolution)
      });
    }), 'h3Idx');
    var hexBins = Object.entries(byH3Idx).map(function (_ref3) {
      var _ref4 = _slicedToArray(_ref3, 2),
        h3Idx = _ref4[0],
        points = _ref4[1];
      return {
        h3Idx: h3Idx,
        points: points,
        sumWeight: points.reduce(function (agg, d) {
          return agg + +weightAccessor(d);
        }, 0)
      };
    });
    var hexMaterials = {}; // indexed by color

    if (!state.hexBinMerge && changedProps.hasOwnProperty('hexBinMerge')) {
      emptyObject(state.scene); // Empty trailing merged objects
    }
    state.dataMapper.scene = state.hexBinMerge ? new THREE$d.Object3D() : state.scene; // use fake scene if merging hex points

    state.dataMapper.id(function (d) {
      return d.h3Idx;
    }).onCreateObj(createObj).onUpdateObj(updateObj).digest(hexBins);
    if (state.hexBinMerge) {
      // merge points into a single mesh
      var hexPointsGeometry = !hexBins.length ? new THREE$d.BufferGeometry() : (BufferGeometryUtils$1.mergeGeometries || BufferGeometryUtils$1.mergeBufferGeometries)(hexBins.map(function (d) {
        var obj = state.dataMapper.getObj(d);

        // use non-indexed geometry so that groups can be colored separately, otherwise different groups share vertices
        var geom = obj.geometry.toNonIndexed();

        // apply mesh world transform to vertices
        obj.updateMatrix();
        geom.applyMatrix4(obj.matrix);

        // color vertices
        var topColor = color2ShaderArr(topColorAccessor(d));
        var sideColor = color2ShaderArr(sideColorAccessor(d));
        var nVertices = geom.getAttribute('position').count;
        var topFaceIdx = geom.groups[0].count; // starting vertex index of top group
        geom.setAttribute('color', array2BufferAttr(_toConsumableArray(new Array(nVertices)).map(function (_, idx) {
          return idx >= topFaceIdx ? topColor : sideColor;
        }), 4));
        return geom;
      }));
      var hexMaterial = new THREE$d.MeshLambertMaterial({
        color: 0xffffff,
        transparent: true,
        vertexColors: true,
        side: THREE$d.DoubleSide
      });
      hexMaterial.onBeforeCompile = function (shader) {
        hexMaterial.userData.shader = invisibleUndergroundShaderExtend(shader);
      };
      var hexPoints = new THREE$d.Mesh(hexPointsGeometry, hexMaterial);
      hexPoints.__globeObjType = 'hexBinPoints'; // Add object type
      hexPoints.__data = hexBins; // Attach obj data

      state.dataMapper.clear(); // Unbind merged points
      emptyObject(state.scene);
      state.scene.add(hexPoints);
    }

    //

    function createObj(d) {
      var obj = new THREE$d.Mesh();
      obj.__hexCenter = cellToLatLng(d.h3Idx);
      obj.__hexGeoJson = cellToBoundary(d.h3Idx, true).reverse(); // correct polygon winding

      // stitch longitudes at the anti-meridian
      var centerLng = obj.__hexCenter[1];
      obj.__hexGeoJson.forEach(function (d) {
        var edgeLng = d[0];
        if (Math.abs(centerLng - edgeLng) > 170) {
          // normalize large lng distances
          d[0] += centerLng > edgeLng ? 360 : -360;
        }
      });
      obj.__globeObjType = 'hexbin'; // Add object type
      return obj;
    }
    function updateObj(obj, d) {
      // compute new geojson with relative margin
      var relNum = function relNum(st, end, rat) {
        return st - (st - end) * rat;
      };
      var margin = Math.max(0, Math.min(1, +marginAccessor(d)));
      var _obj$__hexCenter = _slicedToArray(obj.__hexCenter, 2),
        clat = _obj$__hexCenter[0],
        clng = _obj$__hexCenter[1];
      var geoJson = margin === 0 ? obj.__hexGeoJson : obj.__hexGeoJson.map(function (_ref5) {
        var _ref6 = _slicedToArray(_ref5, 2),
          elng = _ref6[0],
          elat = _ref6[1];
        return [[elng, clng], [elat, clat]].map(function (_ref7) {
          var _ref8 = _slicedToArray(_ref7, 2),
            st = _ref8[0],
            end = _ref8[1];
          return relNum(st, end, margin);
        });
      });
      var topCurvatureResolution = state.hexTopCurvatureResolution;
      obj.geometry && obj.geometry.dispose();
      obj.geometry = new ConicPolygonGeometry([geoJson], 0, GLOBE_RADIUS, false, true, true, topCurvatureResolution);
      var targetD = {
        alt: +altitudeAccessor(d)
      };
      var applyUpdate = function applyUpdate(td) {
        var _obj$__currentTargetD = obj.__currentTargetD = td,
          alt = _obj$__currentTargetD.alt;
        obj.scale.x = obj.scale.y = obj.scale.z = 1 + alt; // scale according to altitude

        // update surfaceRadius per vertex
        var vertexSurfaceRadius = GLOBE_RADIUS / (alt + 1);
        obj.geometry.setAttribute('surfaceRadius', array2BufferAttr(Array(obj.geometry.getAttribute('position').count).fill(vertexSurfaceRadius), 1));
      };
      var currentTargetD = obj.__currentTargetD || Object.assign({}, targetD, {
        alt: -1e-3
      });
      if (Object.keys(targetD).some(function (k) {
        return currentTargetD[k] !== targetD[k];
      })) {
        if (state.hexBinMerge || !state.hexTransitionDuration || state.hexTransitionDuration < 0) {
          // set final position
          applyUpdate(targetD);
        } else {
          // animate
          state.tweenGroup.add(new Tween(currentTargetD).to(targetD, state.hexTransitionDuration).easing(Easing.Quadratic.InOut).onUpdate(applyUpdate).start());
        }
      }
      if (!state.hexBinMerge) {
        // Update materials on individual hex points
        var sideColor = sideColorAccessor(d);
        var topColor = topColorAccessor(d);
        [sideColor, topColor].forEach(function (color) {
          if (!hexMaterials.hasOwnProperty(color)) {
            var opacity = colorAlpha(color);
            hexMaterials[color] = applyShaderExtensionToMaterial(new THREE$d.MeshLambertMaterial({
              color: colorStr2Hex(color),
              transparent: opacity < 1,
              opacity: opacity,
              side: THREE$d.DoubleSide
            }), invisibleUndergroundShaderExtend);
          }
        });
        obj.material = [sideColor, topColor].map(function (color) {
          return hexMaterials[color];
        });
      }
    }
  }
});

var sq = function sq(x) {
  return x * x;
};
var toRad = function toRad(x) {
  return x * Math.PI / 180;
};
function geoDistance(a, b) {
  // on sphere surface, in radians
  var sqrt = Math.sqrt;
  var cos = Math.cos;
  var hav = function hav(x) {
    return sq(Math.sin(x / 2));
  };
  var latA = toRad(a[1]);
  var latB = toRad(b[1]);
  var lngA = toRad(a[0]);
  var lngB = toRad(b[0]);

  // Haversine formula
  return 2 * Math.asin(sqrt(hav(latB - latA) + cos(latA) * cos(latB) * hav(lngB - lngA)));
}
var sqrt2PI = Math.sqrt(2 * Math.PI);
function gaussianKernel(x, bw) {
  return Math.exp(-sq(x / bw) / 2) / (bw * sqrt2PI);
}
var getGeoKDE = function getGeoKDE(_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
    lng = _ref2[0],
    lat = _ref2[1];
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var _ref3 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
    _ref3$lngAccessor = _ref3.lngAccessor,
    lngAccessor = _ref3$lngAccessor === undefined ? function (d) {
      return d[0];
    } : _ref3$lngAccessor,
    _ref3$latAccessor = _ref3.latAccessor,
    latAccessor = _ref3$latAccessor === undefined ? function (d) {
      return d[1];
    } : _ref3$latAccessor,
    _ref3$weightAccessor = _ref3.weightAccessor,
    weightAccessor = _ref3$weightAccessor === undefined ? function () {
      return 1;
    } : _ref3$weightAccessor,
    bandwidth = _ref3.bandwidth;
  var pnt = [lng, lat];
  var bwRad = bandwidth * Math.PI / 180;
  return sum(data.map(function (d) {
    var weight = weightAccessor(d);
    if (!weight) return 0;
    var dist = geoDistance(pnt, [lngAccessor(d), latAccessor(d)]);
    return gaussianKernel(dist, bwRad) * weight;
  }));
};

// use WebGPU to accelerate computation of kde vals per every coord pair
var computeGeoKde = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(vertexGeoCoords) {
    var _navigator;
    var data,
      _ref5,
      _ref5$lngAccessor,
      lngAccessor,
      _ref5$latAccessor,
      latAccessor,
      _ref5$weightAccessor,
      weightAccessor,
      bandwidth,
      BW_RADIUS_INFLUENCE,
      Fn,
      If,
      uniform,
      storage,
      _float,
      instanceIndex,
      Loop,
      sqrt,
      sin,
      cos,
      asin,
      exp,
      negate,
      sCoords,
      sData,
      res,
      sRes,
      PI,
      sqrt2PI,
      sq,
      hav,
      geoDistance,
      gaussianKernel,
      bwRad,
      maxRRad,
      n,
      computeShaderFn,
      computeNode,
      renderer,
      _args = arguments;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          data = _args.length > 1 && _args[1] !== undefined ? _args[1] : [];
          _ref5 = _args.length > 2 && _args[2] !== undefined ? _args[2] : {}, _ref5$lngAccessor = _ref5.lngAccessor, lngAccessor = _ref5$lngAccessor === undefined ? function (d) {
            return d[0];
          } : _ref5$lngAccessor, _ref5$latAccessor = _ref5.latAccessor, latAccessor = _ref5$latAccessor === undefined ? function (d) {
            return d[1];
          } : _ref5$latAccessor, _ref5$weightAccessor = _ref5.weightAccessor, weightAccessor = _ref5$weightAccessor === undefined ? function () {
            return 1;
          } : _ref5$weightAccessor, bandwidth = _ref5.bandwidth;
          if ((_navigator = navigator) !== null && _navigator !== undefined && _navigator.gpu) {
            _context.next = 5;
            break;
          }
          console.warn('WebGPU not enabled in browser. Please consider enabling it to improve performance.');
          return _context.abrupt("return", vertexGeoCoords.map(function (coords) {
            return getGeoKDE(coords, data, {
              lngAccessor: lngAccessor,
              latAccessor: latAccessor,
              weightAccessor: weightAccessor,
              bandwidth: bandwidth
            });
          }));
        case 5:
          BW_RADIUS_INFLUENCE = 4; // multiplier of bandwidth to set max radius of point influence (exclude points to improve performance)
          Fn = tsl.Fn, If = tsl.If, uniform = tsl.uniform, storage = tsl.storage, _float = tsl["float"], instanceIndex = tsl.instanceIndex, Loop = tsl.Loop, sqrt = tsl.sqrt, sin = tsl.sin, cos = tsl.cos, asin = tsl.asin, exp = tsl.exp, negate = tsl.negate;
          sCoords = storage(new StorageInstancedBufferAttribute(new Float32Array(vertexGeoCoords.flat().map(toRad)), 2), 'vec2', vertexGeoCoords.length);
          sData = storage(new StorageInstancedBufferAttribute(new Float32Array(data.map(function (d) {
            return [toRad(lngAccessor(d)), toRad(latAccessor(d)), weightAccessor(d)];
          }).flat()), 3), 'vec3', data.length);
          res = new StorageInstancedBufferAttribute(vertexGeoCoords.length, 1);
          sRes = storage(res, 'float', vertexGeoCoords.length);
          PI = _float(Math.PI);
          sqrt2PI = sqrt(PI.mul(2));
          sq = function sq(x) {
            return x.mul(x);
          };
          hav = function hav(x) {
            return sq(sin(x.div(2)));
          };
          geoDistance = function geoDistance(a, b) {
            // on sphere surface, in radians
            var latA = _float(a[1]);
            var latB = _float(b[1]);
            var lngA = _float(a[0]);
            var lngB = _float(b[0]);

            // Haversine formula
            return _float(2).mul(asin(sqrt(hav(latB.sub(latA)).add(cos(latA).mul(cos(latB)).mul(hav(lngB.sub(lngA)))))));
          };
          gaussianKernel = function gaussianKernel(x, bw) {
            return exp(negate(sq(x.div(bw)).div(2))).div(bw.mul(sqrt2PI));
          };
          bwRad = uniform(toRad(bandwidth));
          maxRRad = uniform(toRad(bandwidth * BW_RADIUS_INFLUENCE));
          n = uniform(data.length);
          computeShaderFn = Fn(function () {
            var coords = sCoords.element(instanceIndex);
            var res = sRes.element(instanceIndex);
            res.assign(0);
            Loop(n, function (_ref6) {
              var i = _ref6.i;
              var d = sData.element(i);
              var weight = d.z;
              If(weight, function () {
                var dist = geoDistance(d.xy, coords.xy);
                If(dist && dist.lessThan(maxRRad), function () {
                  // max degree of influence, beyond is negligible
                  res.addAssign(gaussianKernel(dist, bwRad).mul(weight));
                });
              });
            });
          });
          computeNode = computeShaderFn().compute(vertexGeoCoords.length);
          renderer = new WebGPURenderer();
          _context.next = 25;
          return renderer.computeAsync(computeNode);
        case 25:
          _context.t0 = Array;
          _context.t1 = Float32Array;
          _context.next = 29;
          return renderer.getArrayBufferAsync(res);
        case 29:
          _context.t2 = _context.sent;
          _context.t3 = new _context.t1(_context.t2);
          return _context.abrupt("return", _context.t0.from.call(_context.t0, _context.t3));
        case 32:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function computeGeoKde(_x) {
    return _ref4.apply(this, arguments);
  };
}();

/*
const basicGpuCompute = async (n = 1000) => {
  const res = new StorageInstancedBufferAttribute(n, 1);
  const sRes = storage(res, 'float', n);

  const computeShaderFn = Fn(() => {
    const uN = uniform(n);
    const r = sRes.element(instanceIndex);
    r.assign(float(instanceIndex).div(uN));
  });

  const computeNode = computeShaderFn().compute(n);

  const renderer = new WebGPURenderer();
  await renderer.computeAsync(computeNode);

  return Array.from(new Float32Array(await renderer.getArrayBufferAsync(res)));
}
*/

var THREE$c = window.THREE ? window.THREE // Prefer consumption from global THREE, if exists
: {
  Mesh: Mesh,
  MeshLambertMaterial: MeshLambertMaterial,
  SphereGeometry: SphereGeometry
};

//

var RES_BW_FACTOR = 3.5; // divider of bandwidth to use in geometry resolution
var MIN_RESOLUTION = 0.1; // degrees
var NUM_COLORS = 100; // to sample in shader

var defaultColorInterpolator = function defaultColorInterpolator(t) {
  var c = color(interpolateTurbo(t)); // turbo, inferno
  c.opacity = Math.cbrt(t);
  return c.formatRgb();
};
var HeatmapsLayerKapsule = Kapsule({
  props: {
    heatmapsData: {
      "default": []
    },
    heatmapPoints: {
      "default": function _default(pnts) {
        return pnts;
      }
    },
    heatmapPointLat: {
      "default": function _default(d) {
        return d[0];
      }
    },
    heatmapPointLng: {
      "default": function _default(d) {
        return d[1];
      }
    },
    heatmapPointWeight: {
      "default": 1
    },
    heatmapBandwidth: {
      "default": 2.5
    },
    // Gaussian kernel bandwidth, in angular degrees
    heatmapColorFn: {
      "default": function _default() {
        return defaultColorInterpolator;
      }
    },
    heatmapColorSaturation: {
      "default": 1.5
    },
    // multiplier for color scale max
    heatmapBaseAltitude: {
      "default": 0.01
    },
    // in units of globe radius
    heatmapTopAltitude: {},
    // in units of globe radius
    heatmapsTransitionDuration: {
      "default": 0,
      triggerUpdate: false
    } // ms
  },
  init: function init(threeObj, state, _ref) {
    var tweenGroup = _ref.tweenGroup;
    // Clear the scene
    emptyObject(threeObj);

    // Main three object to manipulate
    state.scene = threeObj;
    state.tweenGroup = tweenGroup;
    state.dataMapper = new ThreeDigest(threeObj, {
      objBindAttr: '__threeObjHeatmap'
    }).onCreateObj(function () {
      var obj = new THREE$c.Mesh(new THREE$c.SphereGeometry(GLOBE_RADIUS), applyShaderExtensionToMaterial(new THREE$c.MeshLambertMaterial({
        vertexColors: true,
        transparent: true
      }), setRadiusShaderExtend));
      obj.__globeObjType = 'heatmap'; // Add object type
      return obj;
    });
  },
  update: function update(state) {
    // Accessors
    var pointsAccessor = accessorFn(state.heatmapPoints);
    var latPntAccessor = accessorFn(state.heatmapPointLat);
    var lngPntAccessor = accessorFn(state.heatmapPointLng);
    var weightPntAccessor = accessorFn(state.heatmapPointWeight);
    var bandwidthAccessor = accessorFn(state.heatmapBandwidth);
    var colorFnAccessor = accessorFn(state.heatmapColorFn);
    var saturationAccessor = accessorFn(state.heatmapColorSaturation);
    var baseAltitudeAccessor = accessorFn(state.heatmapBaseAltitude);
    var topAltitudeAccessor = accessorFn(state.heatmapTopAltitude);
    state.dataMapper.onUpdateObj(function (obj, d) {
      // Accessors
      var bandwidth = bandwidthAccessor(d);
      var colorFn = colorFnAccessor(d);
      var saturation = saturationAccessor(d);
      var baseAlt = baseAltitudeAccessor(d);
      var topAlt = topAltitudeAccessor(d);
      var pnts = pointsAccessor(d).map(function (pnt) {
        var lat = latPntAccessor(pnt);
        var lng = lngPntAccessor(pnt);
        var _polar2Cartesian = polar2Cartesian(lat, lng),
          x = _polar2Cartesian.x,
          y = _polar2Cartesian.y,
          z = _polar2Cartesian.z;
        return {
          x: x,
          y: y,
          z: z,
          lat: lat,
          lng: lng,
          weight: weightPntAccessor(pnt)
        };
      });

      // Check resolution
      var resolution = Math.max(MIN_RESOLUTION, bandwidth / RES_BW_FACTOR);
      var equatorNumSegments = Math.ceil(360 / (resolution || -1));
      if (obj.geometry.parameters.widthSegments !== equatorNumSegments) {
        obj.geometry.dispose();
        obj.geometry = new THREE$c.SphereGeometry(GLOBE_RADIUS, equatorNumSegments, equatorNumSegments / 2);
      }

      // Get vertex polar coordinates
      var vertexCoords = bufferAttr2Array(obj.geometry.getAttribute('position'));
      var vertexGeoCoords = vertexCoords.map(function (_ref2) {
        var _ref3 = _slicedToArray(_ref2, 3),
          x = _ref3[0],
          y = _ref3[1],
          z = _ref3[2];
        var _cartesian2Polar = cartesian2Polar({
            x: x,
            y: y,
            z: z
          }),
          lng = _cartesian2Polar.lng,
          lat = _cartesian2Polar.lat;
        return [lng, lat];
      });

      // Compute KDE
      computeGeoKde(vertexGeoCoords, pnts, {
        latAccessor: function latAccessor(d) {
          return d.lat;
        },
        lngAccessor: function lngAccessor(d) {
          return d.lng;
        },
        weightAccessor: function weightAccessor(d) {
          return d.weight;
        },
        bandwidth: bandwidth
      }).then(function (kdeVals) {
        // Animations
        var colors = _toConsumableArray(new Array(NUM_COLORS)).map(function (_, idx) {
          return color2ShaderArr(colorFn(idx / (NUM_COLORS - 1)));
        });
        var applyUpdate = function applyUpdate(td) {
          var _obj$__currentTargetD = obj.__currentTargetD = td,
            kdeVals = _obj$__currentTargetD.kdeVals,
            topAlt = _obj$__currentTargetD.topAlt,
            saturation = _obj$__currentTargetD.saturation;
          var maxVal = max(kdeVals.map(Math.abs)) || 1e-15;

          // Set vertex colors
          var colorScale = scaleQuantize([0, maxVal / saturation], colors);
          obj.geometry.setAttribute('color', array2BufferAttr(kdeVals.map(function (v) {
            return colorScale(Math.abs(v));
          }), 4));

          // Set altitudes
          var rScale = scaleLinear([0, maxVal], [GLOBE_RADIUS * (1 + baseAlt), GLOBE_RADIUS * (1 + (topAlt || baseAlt))]);
          obj.geometry.setAttribute('r', array2BufferAttr(kdeVals.map(rScale)));
        };
        var targetD = {
          kdeVals: kdeVals,
          topAlt: topAlt,
          saturation: saturation
        };
        var currentTargetD = obj.__currentTargetD || Object.assign({}, targetD, {
          kdeVals: kdeVals.map(function () {
            return 0;
          }),
          topAlt: !topAlt ? topAlt : baseAlt,
          saturation: 0.5
        });
        // do not interpolate between different length arrays
        currentTargetD.kdeVals.length !== kdeVals.length && (currentTargetD.kdeVals = kdeVals.slice());
        if (Object.keys(targetD).some(function (k) {
          return currentTargetD[k] !== targetD[k];
        })) {
          if (!state.heatmapsTransitionDuration || state.heatmapsTransitionDuration < 0) {
            // set final position
            applyUpdate(targetD);
          } else {
            // animate
            state.tweenGroup.add(new Tween(currentTargetD).to(targetD, state.heatmapsTransitionDuration).easing(Easing.Quadratic.InOut).onUpdate(applyUpdate).start());
          }
        }
      });
    }).digest(state.heatmapsData);
  }
});

var THREE$b = window.THREE ? window.THREE // Prefer consumption from global THREE, if exists
: {
  DoubleSide: DoubleSide,
  Group: Group,
  LineBasicMaterial: LineBasicMaterial,
  LineSegments: LineSegments,
  Mesh: Mesh,
  MeshBasicMaterial: MeshBasicMaterial
};

//

var PolygonsLayerKapsule = Kapsule({
  props: {
    polygonsData: {
      "default": []
    },
    polygonGeoJsonGeometry: {
      "default": 'geometry'
    },
    polygonSideColor: {
      "default": function _default() {
        return '#ffffaa';
      }
    },
    polygonSideMaterial: {},
    polygonCapColor: {
      "default": function _default() {
        return '#ffffaa';
      }
    },
    polygonCapMaterial: {},
    polygonStrokeColor: {},
    polygonAltitude: {
      "default": 0.01
    },
    // in units of globe radius
    polygonCapCurvatureResolution: {
      "default": 5
    },
    // in angular degrees
    polygonsTransitionDuration: {
      "default": 1000,
      triggerUpdate: false
    } // ms
  },
  init: function init(threeObj, state, _ref) {
    var tweenGroup = _ref.tweenGroup;
    // Clear the scene
    emptyObject(threeObj);

    // Main three object to manipulate
    state.scene = threeObj;
    state.tweenGroup = tweenGroup;
    state.dataMapper = new ThreeDigest(threeObj, {
      objBindAttr: '__threeObjPolygon'
    }).id(function (d) {
      return d.id;
    }).onCreateObj(function () {
      var obj = new THREE$b.Group();
      obj.__defaultSideMaterial = applyShaderExtensionToMaterial(new THREE$b.MeshBasicMaterial({
        side: THREE$b.DoubleSide,
        depthWrite: true
      }), invisibleUndergroundShaderExtend);
      obj.__defaultCapMaterial = new THREE$b.MeshBasicMaterial({
        side: THREE$b.DoubleSide,
        depthWrite: true
      });

      // conic geometry
      obj.add(new THREE$b.Mesh(undefined, [obj.__defaultSideMaterial,
      // side material
      obj.__defaultCapMaterial // cap material
      ]));

      // polygon stroke
      obj.add(new THREE$b.LineSegments(undefined, new THREE$b.LineBasicMaterial()));
      obj.__globeObjType = 'polygon'; // Add object type

      return obj;
    });
  },
  update: function update(state) {
    // Data accessors
    var geoJsonAccessor = accessorFn(state.polygonGeoJsonGeometry);
    var altitudeAccessor = accessorFn(state.polygonAltitude);
    var capCurvatureResolutionAccessor = accessorFn(state.polygonCapCurvatureResolution);
    var capColorAccessor = accessorFn(state.polygonCapColor);
    var capMaterialAccessor = accessorFn(state.polygonCapMaterial);
    var sideColorAccessor = accessorFn(state.polygonSideColor);
    var sideMaterialAccessor = accessorFn(state.polygonSideMaterial);
    var strokeColorAccessor = accessorFn(state.polygonStrokeColor);
    var singlePolygons = [];
    state.polygonsData.forEach(function (polygon) {
      var objAttrs = {
        data: polygon,
        capColor: capColorAccessor(polygon),
        capMaterial: capMaterialAccessor(polygon),
        sideColor: sideColorAccessor(polygon),
        sideMaterial: sideMaterialAccessor(polygon),
        strokeColor: strokeColorAccessor(polygon),
        altitude: +altitudeAccessor(polygon),
        capCurvatureResolution: +capCurvatureResolutionAccessor(polygon)
      };
      var geoJson = geoJsonAccessor(polygon);
      var geoId = polygon.__id || "".concat(Math.round(Math.random() * 1e9)); // generate and stamp polygon ids to keep track in digest
      polygon.__id = geoId;
      if (geoJson.type === 'Polygon') {
        singlePolygons.push(_objectSpread2({
          id: "".concat(geoId, "_0"),
          coords: geoJson.coordinates
        }, objAttrs));
      } else if (geoJson.type === 'MultiPolygon') {
        singlePolygons.push.apply(singlePolygons, _toConsumableArray(geoJson.coordinates.map(function (coords, idx) {
          return _objectSpread2({
            id: "".concat(geoId, "_").concat(idx),
            coords: coords
          }, objAttrs);
        })));
      } else {
        console.warn("Unsupported GeoJson geometry type: ".concat(geoJson.type, ". Skipping geometry..."));
      }
    });
    state.dataMapper.onUpdateObj(function (obj, _ref2) {
      var coords = _ref2.coords,
        capColor = _ref2.capColor,
        capMaterial = _ref2.capMaterial,
        sideColor = _ref2.sideColor,
        sideMaterial = _ref2.sideMaterial,
        strokeColor = _ref2.strokeColor,
        altitude = _ref2.altitude,
        capCurvatureResolution = _ref2.capCurvatureResolution;
      var _obj$children = _slicedToArray(obj.children, 2),
        conicObj = _obj$children[0],
        strokeObj = _obj$children[1];

      // hide stroke if no color set
      var addStroke = !!strokeColor;
      strokeObj.visible = addStroke;

      // regenerate geometries if needed
      if (!objMatch(conicObj.geometry.parameters || {}, {
        polygonGeoJson: coords,
        curvatureResolution: capCurvatureResolution
      })) {
        conicObj.geometry && conicObj.geometry.dispose();
        conicObj.geometry = new ConicPolygonGeometry(coords, 0, GLOBE_RADIUS, false, true, true, capCurvatureResolution);
      }
      if (addStroke && (!strokeObj.geometry.parameters || strokeObj.geometry.parameters.geoJson.coordinates !== coords || strokeObj.geometry.parameters.resolution !== capCurvatureResolution)) {
        strokeObj.geometry && strokeObj.geometry.dispose();
        strokeObj.geometry = new GeoJsonGeometry({
          type: 'Polygon',
          coordinates: coords
        }, GLOBE_RADIUS, capCurvatureResolution);
      }

      // replace side/cap materials if defined
      conicObj.material[0] = sideMaterial || obj.__defaultSideMaterial;
      conicObj.material[1] = capMaterial || obj.__defaultCapMaterial;

      // update default material colors
      [!sideMaterial && sideColor, !capMaterial && capColor].forEach(function (color, materialIdx) {
        if (!color) return; // skip custom materials

        // conic object
        var material = conicObj.material[materialIdx];
        var opacity = colorAlpha(color);
        material.color.set(colorStr2Hex(color));
        material.transparent = opacity < 1;
        material.opacity = opacity;
      });
      if (addStroke) {
        // stroke object
        var material = strokeObj.material;
        var opacity = colorAlpha(strokeColor);
        material.color.set(colorStr2Hex(strokeColor));
        material.transparent = opacity < 1;
        material.opacity = opacity;
      }
      var targetD = {
        alt: altitude
      };
      var applyUpdate = function applyUpdate(td) {
        var _obj$__currentTargetD = obj.__currentTargetD = td,
          alt = _obj$__currentTargetD.alt;
        conicObj.scale.x = conicObj.scale.y = conicObj.scale.z = 1 + alt;
        addStroke && (strokeObj.scale.x = strokeObj.scale.y = strokeObj.scale.z = 1 + alt + 1e-4); // stroke slightly above the conic mesh
        setExtendedMaterialUniforms(obj.__defaultSideMaterial, function (uniforms) {
          return uniforms.surfaceRadius.value = GLOBE_RADIUS / (alt + 1);
        }); // update side material scale uniform
      };
      var currentTargetD = obj.__currentTargetD || Object.assign({}, targetD, {
        alt: -1e-3
      });
      if (Object.keys(targetD).some(function (k) {
        return currentTargetD[k] !== targetD[k];
      })) {
        if (!state.polygonsTransitionDuration || state.polygonsTransitionDuration < 0 || currentTargetD.alt === targetD.alt) {
          // set final position
          applyUpdate(targetD);
        } else {
          // animate
          state.tweenGroup.add(new Tween(currentTargetD).to(targetD, state.polygonsTransitionDuration).easing(Easing.Quadratic.InOut).onUpdate(applyUpdate).start());
        }
      }
    }).digest(singlePolygons);
  }
});
function objMatch(obj, attrs) {
  var compFn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {
    return function (a, b) {
      return a === b;
    };
  };
  return Object.entries(attrs).every(function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
      k = _ref4[0],
      v = _ref4[1];
    return obj.hasOwnProperty(k) && compFn(k)(obj[k], v);
  });
}

var THREE$a = window.THREE ? window.THREE // Prefer consumption from global THREE, if exists
: {
  BufferGeometry: BufferGeometry,
  DoubleSide: DoubleSide,
  Mesh: Mesh,
  MeshLambertMaterial: MeshLambertMaterial,
  Vector3: Vector3
};
var bfg = Object.assign({}, _bfg);
var BufferGeometryUtils = bfg.BufferGeometryUtils || bfg;

//

var HexedPolygonsLayerKapsule = Kapsule({
  props: {
    hexPolygonsData: {
      "default": []
    },
    hexPolygonGeoJsonGeometry: {
      "default": 'geometry'
    },
    hexPolygonColor: {
      "default": function _default() {
        return '#ffffaa';
      }
    },
    hexPolygonAltitude: {
      "default": 0.001
    },
    // in units of globe radius
    hexPolygonResolution: {
      "default": 3
    },
    // 0-15. Level 0 partitions the earth in 122 (mostly) hexagonal cells. Each subsequent level sub-divides the previous in roughly 7 hexagons.
    hexPolygonMargin: {
      "default": 0.2
    },
    // in fraction of hex diameter
    hexPolygonUseDots: {
      "default": false
    },
    // if points should be circular instead of hexagonal
    hexPolygonCurvatureResolution: {
      "default": 5
    },
    // in angular degrees, only relevant for hex tops
    hexPolygonDotResolution: {
      "default": 12
    },
    // how many slice segments in the dot circle's circumference
    hexPolygonsTransitionDuration: {
      "default": 0,
      triggerUpdate: false
    } // ms
  },
  init: function init(threeObj, state, _ref) {
    var tweenGroup = _ref.tweenGroup;
    // Clear the scene
    emptyObject(threeObj);

    // Main three object to manipulate
    state.scene = threeObj;
    state.tweenGroup = tweenGroup;
    state.dataMapper = new ThreeDigest(threeObj, {
      objBindAttr: '__threeObjHexPolygon'
    }).onCreateObj(function () {
      var obj = new THREE$a.Mesh(undefined, new THREE$a.MeshLambertMaterial({
        side: THREE$a.DoubleSide
      }));
      obj.__globeObjType = 'hexPolygon'; // Add object type

      return obj;
    });
  },
  update: function update(state) {
    // Accessors
    var geoJsonAccessor = accessorFn(state.hexPolygonGeoJsonGeometry);
    var colorAccessor = accessorFn(state.hexPolygonColor);
    var altitudeAccessor = accessorFn(state.hexPolygonAltitude);
    var resolutionAccessor = accessorFn(state.hexPolygonResolution);
    var marginAccessor = accessorFn(state.hexPolygonMargin);
    var useDotsAccessor = accessorFn(state.hexPolygonUseDots);
    var curvatureResolutionAccessor = accessorFn(state.hexPolygonCurvatureResolution);
    var dotResolutionAccessor = accessorFn(state.hexPolygonDotResolution);
    state.dataMapper.onUpdateObj(function (obj, d) {
      var geoJson = geoJsonAccessor(d);
      var h3Res = resolutionAccessor(d);
      var alt = altitudeAccessor(d);
      var margin = Math.max(0, Math.min(1, +marginAccessor(d)));
      var useDots = useDotsAccessor(d);
      var curvatureResolution = curvatureResolutionAccessor(d);
      var dotResolution = dotResolutionAccessor(d);

      // update material
      var color = colorAccessor(d);
      var opacity = colorAlpha(color);
      obj.material.color.set(colorStr2Hex(color));
      obj.material.transparent = opacity < 1;
      obj.material.opacity = opacity;
      var targetD = {
        alt: alt,
        margin: margin,
        curvatureResolution: curvatureResolution
      };
      var memD = {
        geoJson: geoJson,
        h3Res: h3Res
      };
      var currentTargetD = obj.__currentTargetD || Object.assign({}, targetD, {
        alt: -1e-3
      });
      var currentMemD = obj.__currentMemD || memD;
      if (Object.keys(targetD).some(function (k) {
        return currentTargetD[k] !== targetD[k];
      }) || Object.keys(memD).some(function (k) {
        return currentMemD[k] !== memD[k];
      })) {
        obj.__currentMemD = memD;
        var h3Idxs = [];
        if (geoJson.type === 'Polygon') {
          polygonToCells(geoJson.coordinates, h3Res, true).forEach(function (idx) {
            return h3Idxs.push(idx);
          });
        } else if (geoJson.type === 'MultiPolygon') {
          geoJson.coordinates.forEach(function (coords) {
            return polygonToCells(coords, h3Res, true).forEach(function (idx) {
              return h3Idxs.push(idx);
            });
          });
        } else {
          console.warn("Unsupported GeoJson geometry type: ".concat(geoJson.type, ". Skipping geometry..."));
        }
        var hexBins = h3Idxs.map(function (h3Idx) {
          var hexCenter = cellToLatLng(h3Idx);
          var hexGeoJson = cellToBoundary(h3Idx, true).reverse(); // correct polygon winding

          // stitch longitudes at the anti-meridian
          var centerLng = hexCenter[1];
          hexGeoJson.forEach(function (d) {
            var edgeLng = d[0];
            if (Math.abs(centerLng - edgeLng) > 170) {
              // normalize large lng distances
              d[0] += centerLng > edgeLng ? 360 : -360;
            }
          });
          return {
            h3Idx: h3Idx,
            hexCenter: hexCenter,
            hexGeoJson: hexGeoJson
          };
        });
        var applyUpdate = function applyUpdate(td) {
          var _obj$__currentTargetD = obj.__currentTargetD = td,
            alt = _obj$__currentTargetD.alt,
            margin = _obj$__currentTargetD.margin,
            curvatureResolution = _obj$__currentTargetD.curvatureResolution;
          obj.geometry && obj.geometry.dispose();
          obj.geometry = !hexBins.length ? new THREE$a.BufferGeometry() : (BufferGeometryUtils.mergeGeometries || BufferGeometryUtils.mergeBufferGeometries)(hexBins.map(function (h) {
            var _h$hexCenter = _slicedToArray(h.hexCenter, 2),
              clat = _h$hexCenter[0],
              clng = _h$hexCenter[1];
            if (useDots) {
              var centerPos = polar2Cartesian(clat, clng, alt);
              var edgePos = polar2Cartesian(h.hexGeoJson[0][1], h.hexGeoJson[0][0], alt);
              var r = 0.85 * (1 - margin) * new THREE$a.Vector3(centerPos.x, centerPos.y, centerPos.z).distanceTo(new THREE$a.Vector3(edgePos.x, edgePos.y, edgePos.z));
              var geometry = new CircleGeometry(r, dotResolution);
              geometry.rotateX(deg2Rad$1(-clat));
              geometry.rotateY(deg2Rad$1(clng));
              geometry.translate(centerPos.x, centerPos.y, centerPos.z);
              return geometry;
            } else {
              var relNum = function relNum(st, end, rat) {
                return st - (st - end) * rat;
              };

              // compute new geojson with relative margin
              var _geoJson = margin === 0 ? h.hexGeoJson : h.hexGeoJson.map(function (_ref2) {
                var _ref3 = _slicedToArray(_ref2, 2),
                  elng = _ref3[0],
                  elat = _ref3[1];
                return [[elng, clng], [elat, clat]].map(function (_ref4) {
                  var _ref5 = _slicedToArray(_ref4, 2),
                    st = _ref5[0],
                    end = _ref5[1];
                  return relNum(st, end, margin);
                });
              });
              return new ConicPolygonGeometry([_geoJson], GLOBE_RADIUS, GLOBE_RADIUS * (1 + alt), false, true, false, curvatureResolution);
            }
          }));
        };
        if (!state.hexPolygonsTransitionDuration || state.hexPolygonsTransitionDuration < 0) {
          // set final position
          applyUpdate(targetD);
        } else {
          // animate
          state.tweenGroup.add(new Tween(currentTargetD).to(targetD, state.hexPolygonsTransitionDuration).easing(Easing.Quadratic.InOut).onUpdate(applyUpdate).start());
        }
      }
    }).digest(state.hexPolygonsData);
  }
});

var THREE$9 = window.THREE ? window.THREE // Prefer consumption from global THREE, if exists
: {
  Vector3: Vector3
};
function interpolateVectors(fromPnts, toPnts) {
  var extendArr = function extendArr(arr, length) {
    var repeatItem = arr[arr.length - 1];
    return [].concat(_toConsumableArray(arr), _toConsumableArray(Array(length - arr.length).fill(repeatItem)));
  };
  var arrLength = Math.max(fromPnts.length, toPnts.length);
  var interpolator = interpolateArray.apply(undefined, _toConsumableArray([fromPnts, toPnts].map(function (pnts) {
    return pnts.map(function (_ref) {
      var x = _ref.x,
        y = _ref.y,
        z = _ref.z;
      return [x, y, z];
    });
  }).map(function (arr) {
    return extendArr(arr, arrLength);
  })));
  return function (k) {
    return k === 0 ? fromPnts : k === 1 ? toPnts : interpolator(k).map(function (_ref2) {
      var _ref3 = _slicedToArray(_ref2, 3),
        x = _ref3[0],
        y = _ref3[1],
        z = _ref3[2];
      return new THREE$9.Vector3(x, y, z);
    });
  };
}

var THREE$8 = window.THREE ? window.THREE // Prefer consumption from global THREE, if exists
: {
  BufferGeometry: BufferGeometry,
  Color: Color,
  Group: Group,
  Line: Line,
  NormalBlending: NormalBlending,
  ShaderMaterial: ShaderMaterial,
  Vector3: Vector3
};
var FrameTicker$1 = _FrameTicker["default"] || _FrameTicker;

//

var PathsLayerKapsule = Kapsule({
  props: {
    pathsData: {
      "default": []
    },
    pathPoints: {
      "default": function _default(pnts) {
        return pnts;
      }
    },
    pathPointLat: {
      "default": function _default(arr) {
        return arr[0];
      }
    },
    pathPointLng: {
      "default": function _default(arr) {
        return arr[1];
      }
    },
    pathPointAlt: {
      "default": 1e-3
    },
    pathResolution: {
      "default": 2
    },
    // in deg
    pathColor: {
      "default": function _default() {
        return '#ffffaa';
      }
    },
    // single color, array of colors or color interpolation fn
    pathStroke: {},
    // in deg
    pathDashLength: {
      "default": 1
    },
    // in units of line length
    pathDashGap: {
      "default": 0
    },
    pathDashInitialGap: {
      "default": 0
    },
    pathDashAnimateTime: {
      "default": 0
    },
    // ms
    pathTransitionDuration: {
      "default": 1000,
      triggerUpdate: false
    },
    // ms
    rendererSize: {} // necessary to set correct fatline proportions
  },
  methods: {
    pauseAnimation: function pauseAnimation(state) {
      var _state$ticker;
      (_state$ticker = state.ticker) === null || _state$ticker === undefined || _state$ticker.pause();
    },
    resumeAnimation: function resumeAnimation(state) {
      var _state$ticker2;
      (_state$ticker2 = state.ticker) === null || _state$ticker2 === undefined || _state$ticker2.resume();
    },
    _destructor: function _destructor(state) {
      var _state$ticker3;
      (_state$ticker3 = state.ticker) === null || _state$ticker3 === undefined || _state$ticker3.dispose();
    }
  },
  stateInit: function stateInit(_ref) {
    var tweenGroup = _ref.tweenGroup;
    return {
      tweenGroup: tweenGroup,
      ticker: new FrameTicker$1(),
      sharedMaterial: new THREE$8.ShaderMaterial(_objectSpread2(_objectSpread2({}, dashedLineShaders()), {}, {
        transparent: true,
        blending: THREE$8.NormalBlending
      }))
    };
  },
  init: function init(threeObj, state) {
    // Clear the scene
    emptyObject(threeObj);

    // Main three object to manipulate
    state.scene = threeObj;
    state.dataMapper = new ThreeDigest(threeObj, {
      objBindAttr: '__threeObjPath'
    }).onCreateObj(function () {
      var obj = new THREE$8.Group(); // populated in updateObj

      obj.__globeObjType = 'path'; // Add object type
      return obj;
    });

    // Kick-off dash animations
    state.ticker.onTick.add(function (_, timeDelta) {
      state.dataMapper.entries().map(function (_ref2) {
        var _ref3 = _slicedToArray(_ref2, 2),
          obj = _ref3[1];
        return obj;
      }).filter(function (o) {
        return o.children.length && o.children[0].material && o.children[0].__dashAnimateStep;
      }).forEach(function (o) {
        var obj = o.children[0];
        var step = obj.__dashAnimateStep * timeDelta;
        if (obj.type === 'Line') {
          var curTranslate = obj.material.uniforms.dashTranslate.value % 1e9; // reset after 1B loops
          obj.material.uniforms.dashTranslate.value = curTranslate + step;
        } else if (obj.type === 'Line2') {
          // fatline
          var offset = obj.material.dashOffset - step;
          var dashLength = obj.material.dashSize + obj.material.gapSize;
          while (offset <= -dashLength) offset += dashLength; // cycle within dash length
          obj.material.dashOffset = offset;
        }
      });
    });
  },
  update: function update(state) {
    // Data accessors
    var pointsAccessor = accessorFn(state.pathPoints);
    var pointLatAccessor = accessorFn(state.pathPointLat);
    var pointLngAccessor = accessorFn(state.pathPointLng);
    var pointAltAccessor = accessorFn(state.pathPointAlt);
    var strokeAccessor = accessorFn(state.pathStroke);
    var colorAccessor = accessorFn(state.pathColor);
    var dashLengthAccessor = accessorFn(state.pathDashLength);
    var dashGapAccessor = accessorFn(state.pathDashGap);
    var dashInitialGapAccessor = accessorFn(state.pathDashInitialGap);
    var dashAnimateTimeAccessor = accessorFn(state.pathDashAnimateTime);
    state.dataMapper.onUpdateObj(function (group, path) {
      var stroke = strokeAccessor(path);
      var useFatLine = stroke !== null && stroke !== undefined;
      if (!group.children.length || useFatLine === (group.children[0].type === 'Line')) {
        // create or swap object types
        emptyObject(group);
        var _obj = useFatLine ? new Line2(new LineGeometry(), new LineMaterial()) : new THREE$8.Line(new THREE$8.BufferGeometry(), state.sharedMaterial.clone() // Separate material instance per object to have dedicated uniforms (but shared shaders)
        );
        group.add(_obj);
      }
      var obj = group.children[0];
      var points = calcPath(pointsAccessor(path), pointLatAccessor, pointLngAccessor, pointAltAccessor, state.pathResolution);

      // set dash animation step
      var dashAnimateTime = dashAnimateTimeAccessor(path);
      obj.__dashAnimateStep = dashAnimateTime > 0 ? 1000 / dashAnimateTime : 0; // per second

      if (!useFatLine) {
        // set dash uniforms
        Object.assign(obj.material.uniforms, {
          dashSize: {
            value: dashLengthAccessor(path)
          },
          gapSize: {
            value: dashGapAccessor(path)
          },
          dashOffset: {
            value: dashInitialGapAccessor(path)
          }
        });

        // calculate vertex colors (to create gradient)
        var vertexColorArray = calcColorVertexArray(colorAccessor(path),
        // single, array of colors or interpolator
        points.length // numSegments
        );

        // calculate vertex relative distances (for dashed lines)
        var vertexRelDistanceArray = calcVertexRelDistances(points.length,
        // numSegments
        1,
        // num vertices per segment
        true // run from end to start, to animate in the correct direction
        );
        obj.geometry.setAttribute('color', vertexColorArray);
        obj.geometry.setAttribute('relDistance', vertexRelDistanceArray);
      } else {
        // fat lines
        obj.material.resolution = state.rendererSize;
        {
          // set dash styling
          var dashLength = dashLengthAccessor(path);
          var dashGap = dashGapAccessor(path);
          var dashInitialGap = dashInitialGapAccessor(path);
          obj.material.dashed = dashGap > 0;

          // temp hack to activate line dashes
          obj.material.dashed ? obj.material.defines.USE_DASH = "" : delete obj.material.defines.USE_DASH;
          if (obj.material.dashed) {
            obj.material.dashScale = 1 / calcLineDistance(points); // dash sizes relative to full line length

            obj.material.dashSize = dashLength;
            obj.material.gapSize = dashGap;
            obj.material.dashOffset = -dashInitialGap;
          }
        }
        {
          // set line colors
          var colors = colorAccessor(path);
          if (colors instanceof Array) {
            // calculate vertex colors (to create gradient)
            var _vertexColorArray = calcColorVertexArray(colorAccessor(path),
            // single, array of colors or interpolator
            points.length - 1,
            // numSegments
            1,
            // num vertices per segment
            false);
            obj.geometry.setColors(_vertexColorArray.array);
            obj.material.vertexColors = true;
          } else {
            // single color
            var color = colors;
            var opacity = colorAlpha(color);
            obj.material.color = new THREE$8.Color(colorStr2Hex(color));
            obj.material.transparent = opacity < 1;
            obj.material.opacity = opacity;
            obj.material.vertexColors = false;
          }
        }
        obj.material.needsUpdate = true;
      }

      // animate from start to finish by default
      var pointsInterpolator = interpolateVectors(group.__currentTargetD && group.__currentTargetD.points || [points[0]], points);
      var applyUpdate = function applyUpdate(td) {
        var _group$__currentTarge = group.__currentTargetD = td,
          stroke = _group$__currentTarge.stroke,
          interpolK = _group$__currentTarge.interpolK;
        var kPoints = group.__currentTargetD.points = pointsInterpolator(interpolK);
        if (useFatLine) {
          var _ref4;
          obj.geometry.setPositions((_ref4 = []).concat.apply(_ref4, _toConsumableArray(kPoints.map(function (_ref5) {
            var x = _ref5.x,
              y = _ref5.y,
              z = _ref5.z;
            return [x, y, z];
          }))));
          obj.material.linewidth = stroke;

          // necessary for dashed lines
          obj.material.dashed && obj.computeLineDistances();
        } else {
          obj.geometry.setFromPoints(kPoints);
          obj.geometry.computeBoundingSphere();
        }
      };
      var targetD = {
        stroke: stroke,
        interpolK: 1
      };
      var currentTargetD = Object.assign({}, group.__currentTargetD || targetD, {
        interpolK: 0
      });
      if (Object.keys(targetD).some(function (k) {
        return currentTargetD[k] !== targetD[k];
      })) {
        if (!state.pathTransitionDuration || state.pathTransitionDuration < 0) {
          // set final position
          applyUpdate(targetD);
        } else {
          // animate
          state.tweenGroup.add(new Tween(currentTargetD).to(targetD, state.pathTransitionDuration).easing(Easing.Quadratic.InOut).onUpdate(applyUpdate).start());
        }
      }
    }).digest(state.pathsData);

    //

    function calcLineDistance(pnts) {
      var totalDist = 0;
      var prevPnt;
      pnts.forEach(function (pnt) {
        prevPnt && (totalDist += prevPnt.distanceTo(pnt));
        prevPnt = pnt;
      });
      return totalDist;
    }
    function calcPath(points, latAccessor, lngAccessor, altAccessor, angularResolution) {
      var getInterpolatedVals = function getInterpolatedVals(start, end, numPnts) {
        var result = [];
        for (var i = 1; i <= numPnts; i++) {
          result.push(start + (end - start) * i / (numPnts + 1));
        }
        return result;
      };
      var interpolateLine = function interpolateLine() {
        var lineCoords = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var maxDegDistance = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
        var result = [];
        var prevPnt = null;
        lineCoords.forEach(function (pnt) {
          if (prevPnt) {
            // cross the anti-meridian if that's the closest distance between points
            while (Math.abs(prevPnt[1] - pnt[1]) > 180) prevPnt[1] += 360 * (prevPnt[1] < pnt[1] ? 1 : -1);
            var dist = Math.sqrt(Math.pow(pnt[0] - prevPnt[0], 2) + Math.pow(pnt[1] - prevPnt[1], 2));
            if (dist > maxDegDistance) {
              var numAdditionalPnts = Math.floor(dist / maxDegDistance);
              var lats = getInterpolatedVals(prevPnt[0], pnt[0], numAdditionalPnts);
              var lngs = getInterpolatedVals(prevPnt[1], pnt[1], numAdditionalPnts);
              var alts = getInterpolatedVals(prevPnt[2], pnt[2], numAdditionalPnts);
              for (var i = 0, len = lats.length; i < len; i++) {
                result.push([lats[i], lngs[i], alts[i]]);
              }
            }
          }
          result.push(prevPnt = pnt);
        });
        return result;
      };
      var getVec = function getVec(_ref6) {
        var _ref7 = _slicedToArray(_ref6, 3),
          lat = _ref7[0],
          lng = _ref7[1],
          alt = _ref7[2];
        var _polar2Cartesian = polar2Cartesian(lat, lng, alt),
          x = _polar2Cartesian.x,
          y = _polar2Cartesian.y,
          z = _polar2Cartesian.z;
        return new THREE$8.Vector3(x, y, z);
      };
      return interpolateLine(points.map(function (pnt) {
        return [latAccessor(pnt), lngAccessor(pnt), altAccessor(pnt)];
      }), angularResolution).map(getVec);
    }
    function calcColorVertexArray(colors, numSegments) {
      var numVerticesPerSegment = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
      var includeAlpha = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
      var numVerticesGroup = numSegments + 1; // one between every two segments and two at the ends

      var getVertexColor;
      if (colors instanceof Array || colors instanceof Function) {
        var colorInterpolator = colors instanceof Array ? scaleLinear() // array of colors, interpolate at each step
        .domain(colors.map(function (_, idx) {
          return idx / (colors.length - 1);
        })) // same number of stops as colors
        .range(colors) : colors; // already interpolator fn

        getVertexColor = function getVertexColor(t) {
          return color2ShaderArr(colorInterpolator(t), includeAlpha, true);
        };
      } else {
        // single color, use constant
        var vertexColor = color2ShaderArr(colors, includeAlpha, true);
        getVertexColor = function getVertexColor() {
          return vertexColor;
        };
      }
      var vertexColors = [];
      for (var v = 0, l = numVerticesGroup; v < l; v++) {
        var _vertexColor = getVertexColor(v / (l - 1));
        for (var s = 0; s < numVerticesPerSegment; s++) {
          vertexColors.push(_vertexColor);
        }
      }
      return array2BufferAttr(vertexColors, includeAlpha ? 4 : 3);
    }
    function calcVertexRelDistances(numSegments) {
      var numVerticesPerSegment = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var invert = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var numVerticesGroup = numSegments + 1; // one between every two segments and two at the ends

      var vertexDistances = [];
      for (var v = 0, l = numVerticesGroup; v < l; v++) {
        var relDistance = v / (l - 1);
        for (var s = 0; s < numVerticesPerSegment; s++) {
          vertexDistances.push(relDistance);
        }
      }
      invert && vertexDistances.reverse();
      return array2BufferAttr(vertexDistances, 1);
    }
  }
});

var THREE$7 = window.THREE ? window.THREE // Prefer consumption from global THREE, if exists
: {
  Euler: Euler,
  Mesh: Mesh,
  MeshLambertMaterial: MeshLambertMaterial,
  SphereGeometry: SphereGeometry
};

//

var TilesLayerKapsule = Kapsule({
  props: {
    tilesData: {
      "default": []
    },
    tileLat: {
      "default": 'lat'
    },
    // tile centroid
    tileLng: {
      "default": 'lng'
    },
    tileAltitude: {
      "default": 0.01
    },
    // in units of globe radius
    tileWidth: {
      "default": 1
    },
    // in lng degrees
    tileHeight: {
      "default": 1
    },
    // in lat degrees
    tileUseGlobeProjection: {
      "default": true
    },
    // whether to size tiles relative to the globe coordinate system, or independently
    tileMaterial: {
      "default": function _default() {
        return new THREE$7.MeshLambertMaterial({
          color: '#ffbb88',
          opacity: 0.4,
          transparent: true
        });
      }
    },
    tileCurvatureResolution: {
      "default": 5
    },
    // in angular degrees
    tilesTransitionDuration: {
      "default": 1000,
      triggerUpdate: false
    } // ms
  },
  init: function init(threeObj, state, _ref) {
    var tweenGroup = _ref.tweenGroup;
    // Clear the scene
    emptyObject(threeObj);

    // Main three object to manipulate
    state.scene = threeObj;
    state.tweenGroup = tweenGroup;
    state.dataMapper = new ThreeDigest(threeObj, {
      objBindAttr: '__threeObjTile'
    }).onCreateObj(function () {
      var obj = new THREE$7.Mesh();
      obj.__globeObjType = 'tile'; // Add object type

      return obj;
    });
  },
  update: function update(state) {
    // Data accessors
    var latAccessor = accessorFn(state.tileLat);
    var lngAccessor = accessorFn(state.tileLng);
    var altitudeAccessor = accessorFn(state.tileAltitude);
    var widthAccessor = accessorFn(state.tileWidth);
    var heightAccessor = accessorFn(state.tileHeight);
    var useGlobeProjectionAccessor = accessorFn(state.tileUseGlobeProjection);
    var materialAccessor = accessorFn(state.tileMaterial);
    var curvatureResolutionAccessor = accessorFn(state.tileCurvatureResolution);
    state.dataMapper.onUpdateObj(function (obj, d) {
      obj.material = materialAccessor(d); // set material

      var useGlobeProjection = useGlobeProjectionAccessor(d);
      var curvatureResolution = curvatureResolutionAccessor(d);

      // animations
      var applyPosition = function applyPosition(td) {
        var _obj$__currentTargetD = obj.__currentTargetD = td,
          lat = _obj$__currentTargetD.lat,
          lng = _obj$__currentTargetD.lng,
          alt = _obj$__currentTargetD.alt,
          width = _obj$__currentTargetD.width,
          height = _obj$__currentTargetD.height;
        var rotLng = deg2Rad(lng);
        var rotLat = deg2Rad(-lat);
        obj.geometry && obj.geometry.dispose();
        obj.geometry = new THREE$7.SphereGeometry(GLOBE_RADIUS * (1 + alt), Math.ceil(width / (curvatureResolution || -1)), Math.ceil(height / (curvatureResolution || -1)), deg2Rad(90 - width / 2) + (useGlobeProjection ? rotLng : 0), deg2Rad(width), deg2Rad(90 - height / 2) + (useGlobeProjection ? rotLat : 0), deg2Rad(height));
        if (!useGlobeProjection) {
          // rotate obj instead. order matters, rotate longitudinally first.
          obj.setRotationFromEuler(new THREE$7.Euler(rotLat, rotLng, 0, 'YXZ'));
        }
      };
      var targetD = {
        lat: +latAccessor(d),
        lng: +lngAccessor(d),
        alt: +altitudeAccessor(d),
        width: +widthAccessor(d),
        height: +heightAccessor(d)
      };
      var currentTargetD = obj.__currentTargetD || Object.assign({}, targetD, {
        width: 0,
        height: 0
      });
      if (Object.keys(targetD).some(function (k) {
        return currentTargetD[k] !== targetD[k];
      })) {
        if (!state.tilesTransitionDuration || state.tilesTransitionDuration < 0) {
          // set final position
          applyPosition(targetD);
        } else {
          // animate
          state.tweenGroup.add(new Tween(currentTargetD).to(targetD, state.tilesTransitionDuration).easing(Easing.Quadratic.InOut).onUpdate(applyPosition).start());
        }
      }
    }).digest(state.tilesData);
  }
});
var deg2Rad = function deg2Rad(deg) {
  return deg * Math.PI / 180;
};

var THREE$6 = window.THREE ? window.THREE // Prefer consumption from global THREE, if exists
: {
  BufferGeometry: BufferGeometry,
  Color: Color,
  Points: Points,
  PointsMaterial: PointsMaterial
};

//

var ParticlesLayerKapsule = Kapsule({
  props: {
    particlesData: {
      "default": []
    },
    particlesList: {
      "default": function _default(d) {
        return d;
      }
    },
    // arrays of arrays
    particleLat: {
      "default": 'lat'
    },
    particleLng: {
      "default": 'lng'
    },
    particleAltitude: {
      "default": 0.01
    },
    // in units of globe radius
    particlesSize: {
      "default": 0.5
    },
    particlesSizeAttenuation: {
      "default": true
    },
    particlesColor: {
      "default": function _default() {
        return 'white';
      }
    },
    particlesTexture: {}
  },
  init: function init(threeObj, state) {
    // Clear the scene
    emptyObject(threeObj);

    // Main three object to manipulate
    state.scene = threeObj;
    state.dataMapper = new ThreeDigest(threeObj, {
      objBindAttr: '__threeObjParticles'
    }).onCreateObj(function () {
      var obj = new THREE$6.Points(new THREE$6.BufferGeometry(), new THREE$6.PointsMaterial());
      obj.__globeObjType = 'particles'; // Add object type

      return obj;
    }).onUpdateObj(function (obj, d) {
      // Data accessors
      var particlesListAccessor = accessorFn(state.particlesList);
      var latAccessor = accessorFn(state.particleLat);
      var lngAccessor = accessorFn(state.particleLng);
      var altitudeAccessor = accessorFn(state.particleAltitude);
      obj.geometry.setAttribute('position', array2BufferAttr(particlesListAccessor(d).map(function (p) {
        return Object.values(polar2Cartesian(latAccessor(p), lngAccessor(p), altitudeAccessor(p)));
      }), 3));
    });
  },
  update: function update(state, changedProps) {
    if (['particlesData', 'particlesList', 'particleLat', 'particleLng', 'particleAltitude'].some(function (p) {
      return changedProps.hasOwnProperty(p);
    })) {
      state.dataMapper.digest(state.particlesData);
    }

    // Data accessors
    var colorAccessor = accessorFn(state.particlesColor);
    var sizeAccessor = accessorFn(state.particlesSize);
    var sizeAttenuationAccessor = accessorFn(state.particlesSizeAttenuation);
    var textureAccessor = accessorFn(state.particlesTexture);
    state.dataMapper.entries().forEach(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
        d = _ref2[0],
        obj = _ref2[1];
      obj.material.size = sizeAccessor(d);
      obj.material.sizeAttenuation = sizeAttenuationAccessor(d);
      if (!state.particlesTexture) {
        // Plain color
        var color = colorAccessor(d);
        var opacity = colorAlpha(color);
        obj.material.color = new THREE$6.Color(colorStr2Hex(color));
        obj.material.transparent = opacity < 1;
        obj.material.opacity = opacity;
        obj.material.alphaTest = 0;
      } else {
        obj.material.color = new THREE$6.Color(0xffffff);
        obj.material.transparent = false;
        obj.material.alphaTest = 0.5;
        obj.material.map = textureAccessor(d);
      }
    });
  }
});

var THREE$5 = window.THREE ? window.THREE // Prefer consumption from global THREE, if exists
: {
  BufferGeometry: BufferGeometry
};
var CircleLineGeometry = /*#__PURE__*/function (_THREE$BufferGeometry) {
  function CircleLineGeometry() {
    var _this;
    var radius = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    var segmentCount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 32;
    _classCallCheck(this, CircleLineGeometry);
    _this = _callSuper(this, CircleLineGeometry);
    _this.type = 'CircleLineGeometry';
    _this.parameters = {
      radius: radius,
      segmentCount: segmentCount
    };
    var points = [];
    for (var i = 0; i <= segmentCount; i++) {
      var theta = (i / segmentCount - 0.25) * Math.PI * 2;
      points.push({
        x: Math.cos(theta) * radius,
        y: Math.sin(theta) * radius,
        z: 0
      });
    }
    _this.setFromPoints(points);
    return _this;
  }
  _inherits(CircleLineGeometry, _THREE$BufferGeometry);
  return _createClass(CircleLineGeometry);
}(THREE$5.BufferGeometry);

var THREE$4 = window.THREE ? window.THREE // Prefer consumption from global THREE, if exists
: {
  Color: Color,
  Group: Group,
  Line: Line,
  LineBasicMaterial: LineBasicMaterial,
  Vector3: Vector3
};
var FrameTicker = _FrameTicker["default"] || _FrameTicker;
var RingsLayerKapsule = Kapsule({
  props: {
    ringsData: {
      "default": []
    },
    ringLat: {
      "default": 'lat'
    },
    ringLng: {
      "default": 'lng'
    },
    ringAltitude: {
      "default": 1.5e-3
    },
    ringColor: {
      "default": function _default() {
        return '#ffffaa';
      },
      triggerUpdate: false
    },
    // single color, array of colors or color interpolation fn
    ringResolution: {
      "default": 64,
      triggerUpdate: false
    },
    // how many slice segments in each circle's circumference
    ringMaxRadius: {
      "default": 2,
      triggerUpdate: false
    },
    // degrees
    ringPropagationSpeed: {
      "default": 1,
      triggerUpdate: false
    },
    // degrees/s
    ringRepeatPeriod: {
      "default": 700,
      triggerUpdate: false
    } // ms
  },
  methods: {
    pauseAnimation: function pauseAnimation(state) {
      var _state$ticker;
      (_state$ticker = state.ticker) === null || _state$ticker === undefined || _state$ticker.pause();
    },
    resumeAnimation: function resumeAnimation(state) {
      var _state$ticker2;
      (_state$ticker2 = state.ticker) === null || _state$ticker2 === undefined || _state$ticker2.resume();
    },
    _destructor: function _destructor(state) {
      var _state$ticker3;
      (_state$ticker3 = state.ticker) === null || _state$ticker3 === undefined || _state$ticker3.dispose();
    }
  },
  init: function init(threeObj, state, _ref) {
    var tweenGroup = _ref.tweenGroup;
    // Clear the scene
    emptyObject(threeObj);

    // Main three object to manipulate
    state.scene = threeObj;
    state.tweenGroup = tweenGroup;
    state.dataMapper = new ThreeDigest(threeObj, {
      objBindAttr: '__threeObjRing',
      removeDelay: 30000 // wait until all rings are gone
    }).onCreateObj(function () {
      var obj = new THREE$4.Group();
      obj.__globeObjType = 'ring'; // Add object type
      return obj;
    });
    state.ticker = new FrameTicker();
    state.ticker.onTick.add(function (time) {
      if (!state.ringsData.length) return;

      // Data accessors
      var colorAccessor = accessorFn(state.ringColor);
      var altitudeAccessor = accessorFn(state.ringAltitude);
      var maxRadiusAccessor = accessorFn(state.ringMaxRadius);
      var propagationSpeedAccessor = accessorFn(state.ringPropagationSpeed);
      var repeatPeriodAccessor = accessorFn(state.ringRepeatPeriod);
      state.dataMapper.entries().filter(function (_ref2) {
        var _ref3 = _slicedToArray(_ref2, 2),
          o = _ref3[1];
        return o;
      }).forEach(function (_ref4) {
        var _ref5 = _slicedToArray(_ref4, 2),
          d = _ref5[0],
          obj = _ref5[1];
        if ((obj.__nextRingTime || 0) <= time) {
          // time to add a new ring
          var periodSecs = repeatPeriodAccessor(d) / 1000;
          obj.__nextRingTime = time + (periodSecs <= 0 ? Infinity : periodSecs);
          var circleObj = new THREE$4.Line(new CircleLineGeometry(1, state.ringResolution), new THREE$4.LineBasicMaterial());
          var colors = colorAccessor(d);
          var isMultiColor = colors instanceof Array || colors instanceof Function;
          var colorInterpolator;
          if (!isMultiColor) {
            // set only once
            circleObj.material.color = new THREE$4.Color(colorStr2Hex(colors));
            setMaterialOpacity(circleObj.material, colorAlpha(colors));
          } else {
            if (colors instanceof Array) {
              colorInterpolator = scaleLinear().domain(colors.map(function (_, idx) {
                return idx / (colors.length - 1);
              })) // same number of stops as colors
              .range(colors);
              circleObj.material.transparent = colors.some(function (c) {
                return colorAlpha(c) < 1;
              });
            } else {
              colorInterpolator = colors;
              circleObj.material.transparent = true;
            }
          }
          var curveR = GLOBE_RADIUS * (1 + altitudeAccessor(d));
          var maxRadius = maxRadiusAccessor(d); // in degrees
          var maxAngle = maxRadius * Math.PI / 180; // in radians
          var propagationSpeed = propagationSpeedAccessor(d);
          var isReverse = propagationSpeed <= 0;
          var updateFn = function updateFn(_ref6) {
            var t = _ref6.t;
            var ang = (isReverse ? 1 - t : t) * maxAngle;
            circleObj.scale.x = circleObj.scale.y = curveR * Math.sin(ang);
            circleObj.position.z = curveR * (1 - Math.cos(ang));
            if (isMultiColor) {
              var color = colorInterpolator(t);
              circleObj.material.color = new THREE$4.Color(colorStr2Hex(color));
              circleObj.material.transparent && (circleObj.material.opacity = colorAlpha(color));
            }
          };
          if (propagationSpeed === 0) {
            updateFn({
              t: 0
            });
            obj.add(circleObj);
          } else {
            var transitionTime = Math.abs(maxRadius / propagationSpeed) * 1000;
            state.tweenGroup.add(new Tween({
              t: 0
            }).to({
              t: 1
            }, transitionTime).onUpdate(updateFn).onStart(function () {
              return obj.add(circleObj);
            }).onComplete(function () {
              obj.remove(circleObj);
              _deallocate(circleObj);
            }).start());
          }
        }
      });
    });
  },
  update: function update(state) {
    // Data accessors
    var latAccessor = accessorFn(state.ringLat);
    var lngAccessor = accessorFn(state.ringLng);
    var altitudeAccessor = accessorFn(state.ringAltitude);
    var globeCenter = state.scene.localToWorld(new THREE$4.Vector3(0, 0, 0)); // translate from local to world coords

    state.dataMapper.onUpdateObj(function (obj, d) {
      var lat = latAccessor(d);
      var lng = lngAccessor(d);
      var alt = altitudeAccessor(d);

      // position & orientate inwards
      Object.assign(obj.position, polar2Cartesian(lat, lng, alt));
      obj.lookAt(globeCenter);
    }).digest(state.ringsData);
  }
});

var glyphs={"0":{x_min:73,x_max:715,ha:792,o:"m 394 -29 q 153 129 242 -29 q 73 479 73 272 q 152 829 73 687 q 394 989 241 989 q 634 829 545 989 q 715 479 715 684 q 635 129 715 270 q 394 -29 546 -29 m 394 89 q 546 211 489 89 q 598 479 598 322 q 548 748 598 640 q 394 871 491 871 q 241 748 298 871 q 190 479 190 637 q 239 211 190 319 q 394 89 296 89 "},"1":{x_min:215.671875,x_max:574,ha:792,o:"m 574 0 l 442 0 l 442 697 l 215 697 l 215 796 q 386 833 330 796 q 475 986 447 875 l 574 986 l 574 0 "},"2":{x_min:59,x_max:731,ha:792,o:"m 731 0 l 59 0 q 197 314 59 188 q 457 487 199 315 q 598 691 598 580 q 543 819 598 772 q 411 867 488 867 q 272 811 328 867 q 209 630 209 747 l 81 630 q 182 901 81 805 q 408 986 271 986 q 629 909 536 986 q 731 694 731 826 q 613 449 731 541 q 378 316 495 383 q 201 122 235 234 l 731 122 l 731 0 "},"3":{x_min:54,x_max:737,ha:792,o:"m 737 284 q 635 55 737 141 q 399 -25 541 -25 q 156 52 248 -25 q 54 308 54 140 l 185 308 q 245 147 185 202 q 395 96 302 96 q 539 140 484 96 q 602 280 602 190 q 510 429 602 390 q 324 454 451 454 l 324 565 q 487 584 441 565 q 565 719 565 617 q 515 835 565 791 q 395 879 466 879 q 255 824 307 879 q 203 661 203 769 l 78 661 q 166 909 78 822 q 387 992 250 992 q 603 921 513 992 q 701 723 701 844 q 669 607 701 656 q 578 524 637 558 q 696 434 655 499 q 737 284 737 369 "},"4":{x_min:48,x_max:742.453125,ha:792,o:"m 742 243 l 602 243 l 602 0 l 476 0 l 476 243 l 48 243 l 48 368 l 476 958 l 602 958 l 602 354 l 742 354 l 742 243 m 476 354 l 476 792 l 162 354 l 476 354 "},"5":{x_min:54.171875,x_max:738,ha:792,o:"m 738 314 q 626 60 738 153 q 382 -23 526 -23 q 155 47 248 -23 q 54 256 54 125 l 183 256 q 259 132 204 174 q 382 91 314 91 q 533 149 471 91 q 602 314 602 213 q 538 469 602 411 q 386 528 475 528 q 284 506 332 528 q 197 439 237 484 l 81 439 l 159 958 l 684 958 l 684 840 l 254 840 l 214 579 q 306 627 258 612 q 407 643 354 643 q 636 552 540 643 q 738 314 738 457 "},"6":{x_min:53,x_max:739,ha:792,o:"m 739 312 q 633 62 739 162 q 400 -31 534 -31 q 162 78 257 -31 q 53 439 53 206 q 178 859 53 712 q 441 986 284 986 q 643 912 559 986 q 732 713 732 833 l 601 713 q 544 830 594 786 q 426 875 494 875 q 268 793 331 875 q 193 517 193 697 q 301 597 240 570 q 427 624 362 624 q 643 540 552 624 q 739 312 739 451 m 603 298 q 540 461 603 400 q 404 516 484 516 q 268 461 323 516 q 207 300 207 401 q 269 137 207 198 q 405 83 325 83 q 541 137 486 83 q 603 298 603 197 "},"7":{x_min:58.71875,x_max:730.953125,ha:792,o:"m 730 839 q 469 448 560 641 q 335 0 378 255 l 192 0 q 328 441 235 252 q 593 830 421 630 l 58 830 l 58 958 l 730 958 l 730 839 "},"8":{x_min:55,x_max:736,ha:792,o:"m 571 527 q 694 424 652 491 q 736 280 736 358 q 648 71 736 158 q 395 -26 551 -26 q 142 69 238 -26 q 55 279 55 157 q 96 425 55 359 q 220 527 138 491 q 120 615 153 562 q 88 726 88 668 q 171 904 88 827 q 395 986 261 986 q 618 905 529 986 q 702 727 702 830 q 670 616 702 667 q 571 527 638 565 m 394 565 q 519 610 475 565 q 563 717 563 655 q 521 823 563 781 q 392 872 474 872 q 265 824 312 872 q 224 720 224 783 q 265 613 224 656 q 394 565 312 565 m 395 91 q 545 150 488 91 q 597 280 597 204 q 546 408 597 355 q 395 465 492 465 q 244 408 299 465 q 194 280 194 356 q 244 150 194 203 q 395 91 299 91 "},"9":{x_min:53,x_max:739,ha:792,o:"m 739 524 q 619 94 739 241 q 362 -32 516 -32 q 150 47 242 -32 q 59 244 59 126 l 191 244 q 246 129 191 176 q 373 82 301 82 q 526 161 466 82 q 597 440 597 255 q 363 334 501 334 q 130 432 216 334 q 53 650 53 521 q 134 880 53 786 q 383 986 226 986 q 659 841 566 986 q 739 524 739 719 m 388 449 q 535 514 480 449 q 585 658 585 573 q 535 805 585 744 q 388 873 480 873 q 242 809 294 873 q 191 658 191 745 q 239 514 191 572 q 388 449 292 449 "},"ο":{x_min:0,x_max:712,ha:815,o:"m 356 -25 q 96 88 192 -25 q 0 368 0 201 q 92 642 0 533 q 356 761 192 761 q 617 644 517 761 q 712 368 712 533 q 619 91 712 201 q 356 -25 520 -25 m 356 85 q 527 175 465 85 q 583 369 583 255 q 528 562 583 484 q 356 651 466 651 q 189 560 250 651 q 135 369 135 481 q 187 177 135 257 q 356 85 250 85 "},S:{x_min:0,x_max:788,ha:890,o:"m 788 291 q 662 54 788 144 q 397 -26 550 -26 q 116 68 226 -26 q 0 337 0 168 l 131 337 q 200 152 131 220 q 384 85 269 85 q 557 129 479 85 q 650 270 650 183 q 490 429 650 379 q 194 513 341 470 q 33 739 33 584 q 142 964 33 881 q 388 1041 242 1041 q 644 957 543 1041 q 756 716 756 867 l 625 716 q 561 874 625 816 q 395 933 497 933 q 243 891 309 933 q 164 759 164 841 q 325 609 164 656 q 625 526 475 568 q 788 291 788 454 "},"¦":{x_min:343,x_max:449,ha:792,o:"m 449 462 l 343 462 l 343 986 l 449 986 l 449 462 m 449 -242 l 343 -242 l 343 280 l 449 280 l 449 -242 "},"/":{x_min:183.25,x_max:608.328125,ha:792,o:"m 608 1041 l 266 -129 l 183 -129 l 520 1041 l 608 1041 "},"Τ":{x_min:-0.4375,x_max:777.453125,ha:839,o:"m 777 893 l 458 893 l 458 0 l 319 0 l 319 892 l 0 892 l 0 1013 l 777 1013 l 777 893 "},y:{x_min:0,x_max:684.78125,ha:771,o:"m 684 738 l 388 -83 q 311 -216 356 -167 q 173 -279 252 -279 q 97 -266 133 -279 l 97 -149 q 132 -155 109 -151 q 168 -160 155 -160 q 240 -114 213 -160 q 274 -26 248 -98 l 0 738 l 137 737 l 341 139 l 548 737 l 684 738 "},"Π":{x_min:0,x_max:803,ha:917,o:"m 803 0 l 667 0 l 667 886 l 140 886 l 140 0 l 0 0 l 0 1012 l 803 1012 l 803 0 "},"ΐ":{x_min:-111,x_max:339,ha:361,o:"m 339 800 l 229 800 l 229 925 l 339 925 l 339 800 m -1 800 l -111 800 l -111 925 l -1 925 l -1 800 m 284 3 q 233 -10 258 -5 q 182 -15 207 -15 q 85 26 119 -15 q 42 200 42 79 l 42 737 l 167 737 l 168 215 q 172 141 168 157 q 226 101 183 101 q 248 103 239 101 q 284 112 257 104 l 284 3 m 302 1040 l 113 819 l 30 819 l 165 1040 l 302 1040 "},g:{x_min:0,x_max:686,ha:838,o:"m 686 34 q 586 -213 686 -121 q 331 -306 487 -306 q 131 -252 216 -306 q 31 -84 31 -190 l 155 -84 q 228 -174 166 -138 q 345 -207 284 -207 q 514 -109 454 -207 q 564 89 564 -27 q 461 6 521 36 q 335 -23 401 -23 q 88 100 184 -23 q 0 370 0 215 q 87 634 0 522 q 330 758 183 758 q 457 728 398 758 q 564 644 515 699 l 564 737 l 686 737 l 686 34 m 582 367 q 529 560 582 481 q 358 652 468 652 q 189 561 250 652 q 135 369 135 482 q 189 176 135 255 q 361 85 251 85 q 529 176 468 85 q 582 367 582 255 "},"²":{x_min:0,x_max:442,ha:539,o:"m 442 383 l 0 383 q 91 566 0 492 q 260 668 176 617 q 354 798 354 727 q 315 875 354 845 q 227 905 277 905 q 136 869 173 905 q 99 761 99 833 l 14 761 q 82 922 14 864 q 232 974 141 974 q 379 926 316 974 q 442 797 442 878 q 351 635 442 704 q 183 539 321 611 q 92 455 92 491 l 442 455 l 442 383 "},"–":{x_min:0,x_max:705.5625,ha:803,o:"m 705 334 l 0 334 l 0 410 l 705 410 l 705 334 "},"Κ":{x_min:0,x_max:819.5625,ha:893,o:"m 819 0 l 650 0 l 294 509 l 139 356 l 139 0 l 0 0 l 0 1013 l 139 1013 l 139 526 l 626 1013 l 809 1013 l 395 600 l 819 0 "},"ƒ":{x_min:-46.265625,x_max:392,ha:513,o:"m 392 651 l 259 651 l 79 -279 l -46 -278 l 134 651 l 14 651 l 14 751 l 135 751 q 151 948 135 900 q 304 1041 185 1041 q 334 1040 319 1041 q 392 1034 348 1039 l 392 922 q 337 931 360 931 q 271 883 287 931 q 260 793 260 853 l 260 751 l 392 751 l 392 651 "},e:{x_min:0,x_max:714,ha:813,o:"m 714 326 l 140 326 q 200 157 140 227 q 359 87 260 87 q 488 130 431 87 q 561 245 545 174 l 697 245 q 577 48 670 123 q 358 -26 484 -26 q 97 85 195 -26 q 0 363 0 197 q 94 642 0 529 q 358 765 195 765 q 626 627 529 765 q 714 326 714 503 m 576 429 q 507 583 564 522 q 355 650 445 650 q 206 583 266 650 q 140 429 152 522 l 576 429 "},"ό":{x_min:0,x_max:712,ha:815,o:"m 356 -25 q 94 91 194 -25 q 0 368 0 202 q 92 642 0 533 q 356 761 192 761 q 617 644 517 761 q 712 368 712 533 q 619 91 712 201 q 356 -25 520 -25 m 356 85 q 527 175 465 85 q 583 369 583 255 q 528 562 583 484 q 356 651 466 651 q 189 560 250 651 q 135 369 135 481 q 187 177 135 257 q 356 85 250 85 m 576 1040 l 387 819 l 303 819 l 438 1040 l 576 1040 "},J:{x_min:0,x_max:588,ha:699,o:"m 588 279 q 287 -26 588 -26 q 58 73 126 -26 q 0 327 0 158 l 133 327 q 160 172 133 227 q 288 96 198 96 q 426 171 391 96 q 449 336 449 219 l 449 1013 l 588 1013 l 588 279 "},"»":{x_min:-1,x_max:503,ha:601,o:"m 503 302 l 280 136 l 281 256 l 429 373 l 281 486 l 280 608 l 503 440 l 503 302 m 221 302 l 0 136 l 0 255 l 145 372 l 0 486 l -1 608 l 221 440 l 221 302 "},"©":{x_min:-3,x_max:1008,ha:1106,o:"m 502 -7 q 123 151 263 -7 q -3 501 -3 294 q 123 851 -3 706 q 502 1011 263 1011 q 881 851 739 1011 q 1008 501 1008 708 q 883 151 1008 292 q 502 -7 744 -7 m 502 60 q 830 197 709 60 q 940 501 940 322 q 831 805 940 681 q 502 944 709 944 q 174 805 296 944 q 65 501 65 680 q 173 197 65 320 q 502 60 294 60 m 741 394 q 661 246 731 302 q 496 190 591 190 q 294 285 369 190 q 228 497 228 370 q 295 714 228 625 q 499 813 370 813 q 656 762 588 813 q 733 625 724 711 l 634 625 q 589 704 629 673 q 498 735 550 735 q 377 666 421 735 q 334 504 334 597 q 374 340 334 408 q 490 272 415 272 q 589 304 549 272 q 638 394 628 337 l 741 394 "},"ώ":{x_min:0,x_max:922,ha:1030,o:"m 687 1040 l 498 819 l 415 819 l 549 1040 l 687 1040 m 922 339 q 856 97 922 203 q 650 -26 780 -26 q 538 9 587 -26 q 461 103 489 44 q 387 12 436 46 q 277 -22 339 -22 q 69 97 147 -22 q 0 338 0 202 q 45 551 0 444 q 161 737 84 643 l 302 737 q 175 552 219 647 q 124 336 124 446 q 155 179 124 248 q 275 88 197 88 q 375 163 341 88 q 400 294 400 219 l 400 572 l 524 572 l 524 294 q 561 135 524 192 q 643 88 591 88 q 762 182 719 88 q 797 341 797 257 q 745 555 797 450 q 619 737 705 637 l 760 737 q 874 551 835 640 q 922 339 922 444 "},"^":{x_min:193.0625,x_max:598.609375,ha:792,o:"m 598 772 l 515 772 l 395 931 l 277 772 l 193 772 l 326 1013 l 462 1013 l 598 772 "},"«":{x_min:0,x_max:507.203125,ha:604,o:"m 506 136 l 284 302 l 284 440 l 506 608 l 507 485 l 360 371 l 506 255 l 506 136 m 222 136 l 0 302 l 0 440 l 222 608 l 221 486 l 73 373 l 222 256 l 222 136 "},D:{x_min:0,x_max:828,ha:935,o:"m 389 1013 q 714 867 593 1013 q 828 521 828 729 q 712 161 828 309 q 382 0 587 0 l 0 0 l 0 1013 l 389 1013 m 376 124 q 607 247 523 124 q 681 510 681 355 q 607 771 681 662 q 376 896 522 896 l 139 896 l 139 124 l 376 124 "},"∙":{x_min:0,x_max:142,ha:239,o:"m 142 585 l 0 585 l 0 738 l 142 738 l 142 585 "},"ÿ":{x_min:0,x_max:47,ha:125,o:"m 47 3 q 37 -7 47 -7 q 28 0 30 -7 q 39 -4 32 -4 q 45 3 45 -1 l 37 0 q 28 9 28 0 q 39 19 28 19 l 47 16 l 47 19 l 47 3 m 37 1 q 44 8 44 1 q 37 16 44 16 q 30 8 30 16 q 37 1 30 1 m 26 1 l 23 22 l 14 0 l 3 22 l 3 3 l 0 25 l 13 1 l 22 25 l 26 1 "},w:{x_min:0,x_max:1009.71875,ha:1100,o:"m 1009 738 l 783 0 l 658 0 l 501 567 l 345 0 l 222 0 l 0 738 l 130 738 l 284 174 l 432 737 l 576 738 l 721 173 l 881 737 l 1009 738 "},$:{x_min:0,x_max:700,ha:793,o:"m 664 717 l 542 717 q 490 825 531 785 q 381 872 450 865 l 381 551 q 620 446 540 522 q 700 241 700 370 q 618 45 700 116 q 381 -25 536 -25 l 381 -152 l 307 -152 l 307 -25 q 81 62 162 -25 q 0 297 0 149 l 124 297 q 169 146 124 204 q 307 81 215 89 l 307 441 q 80 536 148 469 q 13 725 13 603 q 96 910 13 839 q 307 982 180 982 l 307 1077 l 381 1077 l 381 982 q 574 917 494 982 q 664 717 664 845 m 307 565 l 307 872 q 187 831 233 872 q 142 724 142 791 q 180 618 142 656 q 307 565 218 580 m 381 76 q 562 237 562 96 q 517 361 562 313 q 381 423 472 409 l 381 76 "},"\\":{x_min:-0.015625,x_max:425.0625,ha:522,o:"m 425 -129 l 337 -129 l 0 1041 l 83 1041 l 425 -129 "},"µ":{x_min:0,x_max:697.21875,ha:747,o:"m 697 -4 q 629 -14 658 -14 q 498 97 513 -14 q 422 9 470 41 q 313 -23 374 -23 q 207 4 258 -23 q 119 81 156 32 l 119 -278 l 0 -278 l 0 738 l 124 738 l 124 343 q 165 173 124 246 q 308 83 216 83 q 452 178 402 83 q 493 359 493 255 l 493 738 l 617 738 l 617 214 q 623 136 617 160 q 673 92 637 92 q 697 96 684 92 l 697 -4 "},"Ι":{x_min:42,x_max:181,ha:297,o:"m 181 0 l 42 0 l 42 1013 l 181 1013 l 181 0 "},"Ύ":{x_min:0,x_max:1144.5,ha:1214,o:"m 1144 1012 l 807 416 l 807 0 l 667 0 l 667 416 l 325 1012 l 465 1012 l 736 533 l 1004 1012 l 1144 1012 m 277 1040 l 83 799 l 0 799 l 140 1040 l 277 1040 "},"’":{x_min:0,x_max:139,ha:236,o:"m 139 851 q 102 737 139 784 q 0 669 65 690 l 0 734 q 59 787 42 741 q 72 873 72 821 l 0 873 l 0 1013 l 139 1013 l 139 851 "},"Ν":{x_min:0,x_max:801,ha:915,o:"m 801 0 l 651 0 l 131 822 l 131 0 l 0 0 l 0 1013 l 151 1013 l 670 191 l 670 1013 l 801 1013 l 801 0 "},"-":{x_min:8.71875,x_max:350.390625,ha:478,o:"m 350 317 l 8 317 l 8 428 l 350 428 l 350 317 "},Q:{x_min:0,x_max:968,ha:1072,o:"m 954 5 l 887 -79 l 744 35 q 622 -11 687 2 q 483 -26 556 -26 q 127 130 262 -26 q 0 504 0 279 q 127 880 0 728 q 484 1041 262 1041 q 841 884 708 1041 q 968 507 968 735 q 933 293 968 398 q 832 104 899 188 l 954 5 m 723 191 q 802 330 777 248 q 828 499 828 412 q 744 790 828 673 q 483 922 650 922 q 228 791 322 922 q 142 505 142 673 q 227 221 142 337 q 487 91 323 91 q 632 123 566 91 l 520 215 l 587 301 l 723 191 "},"ς":{x_min:1,x_max:676.28125,ha:740,o:"m 676 460 l 551 460 q 498 595 542 546 q 365 651 448 651 q 199 578 263 651 q 136 401 136 505 q 266 178 136 241 q 508 106 387 142 q 640 -50 640 62 q 625 -158 640 -105 q 583 -278 611 -211 l 465 -278 q 498 -182 490 -211 q 515 -80 515 -126 q 381 12 515 -15 q 134 91 197 51 q 1 388 1 179 q 100 651 1 542 q 354 761 199 761 q 587 680 498 761 q 676 460 676 599 "},M:{x_min:0,x_max:954,ha:1067,o:"m 954 0 l 819 0 l 819 869 l 537 0 l 405 0 l 128 866 l 128 0 l 0 0 l 0 1013 l 200 1013 l 472 160 l 757 1013 l 954 1013 l 954 0 "},"Ψ":{x_min:0,x_max:1006,ha:1094,o:"m 1006 678 q 914 319 1006 429 q 571 200 814 200 l 571 0 l 433 0 l 433 200 q 92 319 194 200 q 0 678 0 429 l 0 1013 l 139 1013 l 139 679 q 191 417 139 492 q 433 326 255 326 l 433 1013 l 571 1013 l 571 326 l 580 326 q 813 423 747 326 q 868 679 868 502 l 868 1013 l 1006 1013 l 1006 678 "},C:{x_min:0,x_max:886,ha:944,o:"m 886 379 q 760 87 886 201 q 455 -26 634 -26 q 112 136 236 -26 q 0 509 0 283 q 118 882 0 737 q 469 1041 245 1041 q 748 955 630 1041 q 879 708 879 859 l 745 708 q 649 862 724 805 q 473 920 573 920 q 219 791 312 920 q 136 509 136 675 q 217 229 136 344 q 470 99 311 99 q 672 179 591 99 q 753 379 753 259 l 886 379 "},"!":{x_min:0,x_max:138,ha:236,o:"m 138 684 q 116 409 138 629 q 105 244 105 299 l 33 244 q 16 465 33 313 q 0 684 0 616 l 0 1013 l 138 1013 l 138 684 m 138 0 l 0 0 l 0 151 l 138 151 l 138 0 "},"{":{x_min:0,x_max:480.5625,ha:578,o:"m 480 -286 q 237 -213 303 -286 q 187 -45 187 -159 q 194 48 187 -15 q 201 141 201 112 q 164 264 201 225 q 0 314 118 314 l 0 417 q 164 471 119 417 q 201 605 201 514 q 199 665 201 644 q 193 772 193 769 q 241 941 193 887 q 480 1015 308 1015 l 480 915 q 336 866 375 915 q 306 742 306 828 q 310 662 306 717 q 314 577 314 606 q 288 452 314 500 q 176 365 256 391 q 289 275 257 337 q 314 143 314 226 q 313 84 314 107 q 310 -11 310 -5 q 339 -131 310 -94 q 480 -182 377 -182 l 480 -286 "},X:{x_min:-0.015625,x_max:854.15625,ha:940,o:"m 854 0 l 683 0 l 423 409 l 166 0 l 0 0 l 347 519 l 18 1013 l 186 1013 l 428 637 l 675 1013 l 836 1013 l 504 520 l 854 0 "},"#":{x_min:0,x_max:963.890625,ha:1061,o:"m 963 690 l 927 590 l 719 590 l 655 410 l 876 410 l 840 310 l 618 310 l 508 -3 l 393 -2 l 506 309 l 329 310 l 215 -2 l 102 -3 l 212 310 l 0 310 l 36 410 l 248 409 l 312 590 l 86 590 l 120 690 l 347 690 l 459 1006 l 573 1006 l 462 690 l 640 690 l 751 1006 l 865 1006 l 754 690 l 963 690 m 606 590 l 425 590 l 362 410 l 543 410 l 606 590 "},"ι":{x_min:42,x_max:284,ha:361,o:"m 284 3 q 233 -10 258 -5 q 182 -15 207 -15 q 85 26 119 -15 q 42 200 42 79 l 42 738 l 167 738 l 168 215 q 172 141 168 157 q 226 101 183 101 q 248 103 239 101 q 284 112 257 104 l 284 3 "},"Ά":{x_min:0,x_max:906.953125,ha:982,o:"m 283 1040 l 88 799 l 5 799 l 145 1040 l 283 1040 m 906 0 l 756 0 l 650 303 l 251 303 l 143 0 l 0 0 l 376 1012 l 529 1012 l 906 0 m 609 421 l 452 866 l 293 421 l 609 421 "},")":{x_min:0,x_max:318,ha:415,o:"m 318 365 q 257 25 318 191 q 87 -290 197 -141 l 0 -290 q 140 21 93 -128 q 193 360 193 189 q 141 704 193 537 q 0 1024 97 850 l 87 1024 q 257 706 197 871 q 318 365 318 542 "},"ε":{x_min:0,x_max:634.71875,ha:714,o:"m 634 234 q 527 38 634 110 q 300 -25 433 -25 q 98 29 183 -25 q 0 204 0 93 q 37 314 0 265 q 128 390 67 353 q 56 460 82 419 q 26 555 26 505 q 114 712 26 654 q 295 763 191 763 q 499 700 416 763 q 589 515 589 631 l 478 515 q 419 618 464 580 q 307 657 374 657 q 207 630 253 657 q 151 547 151 598 q 238 445 151 469 q 389 434 280 434 l 389 331 l 349 331 q 206 315 255 331 q 125 210 125 287 q 183 107 125 145 q 302 76 233 76 q 436 117 379 76 q 509 234 493 159 l 634 234 "},"Δ":{x_min:0,x_max:952.78125,ha:1028,o:"m 952 0 l 0 0 l 400 1013 l 551 1013 l 952 0 m 762 124 l 476 867 l 187 124 l 762 124 "},"}":{x_min:0,x_max:481,ha:578,o:"m 481 314 q 318 262 364 314 q 282 136 282 222 q 284 65 282 97 q 293 -58 293 -48 q 241 -217 293 -166 q 0 -286 174 -286 l 0 -182 q 143 -130 105 -182 q 171 -2 171 -93 q 168 81 171 22 q 165 144 165 140 q 188 275 165 229 q 306 365 220 339 q 191 455 224 391 q 165 588 165 505 q 168 681 165 624 q 171 742 171 737 q 141 865 171 827 q 0 915 102 915 l 0 1015 q 243 942 176 1015 q 293 773 293 888 q 287 675 293 741 q 282 590 282 608 q 318 466 282 505 q 481 417 364 417 l 481 314 "},"‰":{x_min:-3,x_max:1672,ha:1821,o:"m 846 0 q 664 76 732 0 q 603 244 603 145 q 662 412 603 344 q 846 489 729 489 q 1027 412 959 489 q 1089 244 1089 343 q 1029 76 1089 144 q 846 0 962 0 m 845 103 q 945 143 910 103 q 981 243 981 184 q 947 340 981 301 q 845 385 910 385 q 745 342 782 385 q 709 243 709 300 q 742 147 709 186 q 845 103 781 103 m 888 986 l 284 -25 l 199 -25 l 803 986 l 888 986 m 241 468 q 58 545 126 468 q -3 715 -3 615 q 56 881 -3 813 q 238 958 124 958 q 421 881 353 958 q 483 712 483 813 q 423 544 483 612 q 241 468 356 468 m 241 855 q 137 811 175 855 q 100 710 100 768 q 136 612 100 653 q 240 572 172 572 q 344 614 306 572 q 382 713 382 656 q 347 810 382 771 q 241 855 308 855 m 1428 0 q 1246 76 1314 0 q 1185 244 1185 145 q 1244 412 1185 344 q 1428 489 1311 489 q 1610 412 1542 489 q 1672 244 1672 343 q 1612 76 1672 144 q 1428 0 1545 0 m 1427 103 q 1528 143 1492 103 q 1564 243 1564 184 q 1530 340 1564 301 q 1427 385 1492 385 q 1327 342 1364 385 q 1291 243 1291 300 q 1324 147 1291 186 q 1427 103 1363 103 "},a:{x_min:0,x_max:698.609375,ha:794,o:"m 698 0 q 661 -12 679 -7 q 615 -17 643 -17 q 536 12 564 -17 q 500 96 508 41 q 384 6 456 37 q 236 -25 312 -25 q 65 31 130 -25 q 0 194 0 88 q 118 390 0 334 q 328 435 180 420 q 488 483 476 451 q 495 523 495 504 q 442 619 495 584 q 325 654 389 654 q 209 617 257 654 q 152 513 161 580 l 33 513 q 123 705 33 633 q 332 772 207 772 q 528 712 448 772 q 617 531 617 645 l 617 163 q 624 108 617 126 q 664 90 632 90 l 698 94 l 698 0 m 491 262 l 491 372 q 272 329 350 347 q 128 201 128 294 q 166 113 128 144 q 264 83 205 83 q 414 130 346 83 q 491 262 491 183 "},"—":{x_min:0,x_max:941.671875,ha:1039,o:"m 941 334 l 0 334 l 0 410 l 941 410 l 941 334 "},"=":{x_min:8.71875,x_max:780.953125,ha:792,o:"m 780 510 l 8 510 l 8 606 l 780 606 l 780 510 m 780 235 l 8 235 l 8 332 l 780 332 l 780 235 "},N:{x_min:0,x_max:801,ha:914,o:"m 801 0 l 651 0 l 131 823 l 131 0 l 0 0 l 0 1013 l 151 1013 l 670 193 l 670 1013 l 801 1013 l 801 0 "},"ρ":{x_min:0,x_max:712,ha:797,o:"m 712 369 q 620 94 712 207 q 362 -26 521 -26 q 230 2 292 -26 q 119 83 167 30 l 119 -278 l 0 -278 l 0 362 q 91 643 0 531 q 355 764 190 764 q 617 647 517 764 q 712 369 712 536 m 583 366 q 530 559 583 480 q 359 651 469 651 q 190 562 252 651 q 135 370 135 483 q 189 176 135 257 q 359 85 250 85 q 528 175 466 85 q 583 366 583 254 "},"¯":{x_min:0,x_max:941.671875,ha:938,o:"m 941 1033 l 0 1033 l 0 1109 l 941 1109 l 941 1033 "},Z:{x_min:0,x_max:779,ha:849,o:"m 779 0 l 0 0 l 0 113 l 621 896 l 40 896 l 40 1013 l 779 1013 l 778 887 l 171 124 l 779 124 l 779 0 "},u:{x_min:0,x_max:617,ha:729,o:"m 617 0 l 499 0 l 499 110 q 391 10 460 45 q 246 -25 322 -25 q 61 58 127 -25 q 0 258 0 136 l 0 738 l 125 738 l 125 284 q 156 148 125 202 q 273 82 197 82 q 433 165 369 82 q 493 340 493 243 l 493 738 l 617 738 l 617 0 "},k:{x_min:0,x_max:612.484375,ha:697,o:"m 612 738 l 338 465 l 608 0 l 469 0 l 251 382 l 121 251 l 121 0 l 0 0 l 0 1013 l 121 1013 l 121 402 l 456 738 l 612 738 "},"Η":{x_min:0,x_max:803,ha:917,o:"m 803 0 l 667 0 l 667 475 l 140 475 l 140 0 l 0 0 l 0 1013 l 140 1013 l 140 599 l 667 599 l 667 1013 l 803 1013 l 803 0 "},"Α":{x_min:0,x_max:906.953125,ha:985,o:"m 906 0 l 756 0 l 650 303 l 251 303 l 143 0 l 0 0 l 376 1013 l 529 1013 l 906 0 m 609 421 l 452 866 l 293 421 l 609 421 "},s:{x_min:0,x_max:604,ha:697,o:"m 604 217 q 501 36 604 104 q 292 -23 411 -23 q 86 43 166 -23 q 0 238 0 114 l 121 237 q 175 122 121 164 q 300 85 223 85 q 415 112 363 85 q 479 207 479 147 q 361 309 479 276 q 140 372 141 370 q 21 544 21 426 q 111 708 21 647 q 298 761 190 761 q 492 705 413 761 q 583 531 583 643 l 462 531 q 412 625 462 594 q 298 657 363 657 q 199 636 242 657 q 143 558 143 608 q 262 454 143 486 q 484 394 479 397 q 604 217 604 341 "},B:{x_min:0,x_max:778,ha:876,o:"m 580 546 q 724 469 670 535 q 778 311 778 403 q 673 83 778 171 q 432 0 575 0 l 0 0 l 0 1013 l 411 1013 q 629 957 541 1013 q 732 768 732 892 q 691 633 732 693 q 580 546 650 572 m 393 899 l 139 899 l 139 588 l 379 588 q 521 624 462 588 q 592 744 592 667 q 531 859 592 819 q 393 899 471 899 m 419 124 q 566 169 504 124 q 635 303 635 219 q 559 436 635 389 q 402 477 494 477 l 139 477 l 139 124 l 419 124 "},"…":{x_min:0,x_max:614,ha:708,o:"m 142 0 l 0 0 l 0 151 l 142 151 l 142 0 m 378 0 l 236 0 l 236 151 l 378 151 l 378 0 m 614 0 l 472 0 l 472 151 l 614 151 l 614 0 "},"?":{x_min:0,x_max:607,ha:704,o:"m 607 777 q 543 599 607 674 q 422 474 482 537 q 357 272 357 391 l 236 272 q 297 487 236 395 q 411 619 298 490 q 474 762 474 691 q 422 885 474 838 q 301 933 371 933 q 179 880 228 933 q 124 706 124 819 l 0 706 q 94 963 0 872 q 302 1044 177 1044 q 511 973 423 1044 q 607 777 607 895 m 370 0 l 230 0 l 230 151 l 370 151 l 370 0 "},H:{x_min:0,x_max:803,ha:915,o:"m 803 0 l 667 0 l 667 475 l 140 475 l 140 0 l 0 0 l 0 1013 l 140 1013 l 140 599 l 667 599 l 667 1013 l 803 1013 l 803 0 "},"ν":{x_min:0,x_max:675,ha:761,o:"m 675 738 l 404 0 l 272 0 l 0 738 l 133 738 l 340 147 l 541 738 l 675 738 "},c:{x_min:1,x_max:701.390625,ha:775,o:"m 701 264 q 584 53 681 133 q 353 -26 487 -26 q 91 91 188 -26 q 1 370 1 201 q 92 645 1 537 q 353 761 190 761 q 572 688 479 761 q 690 493 666 615 l 556 493 q 487 606 545 562 q 356 650 428 650 q 186 563 246 650 q 134 372 134 487 q 188 179 134 258 q 359 88 250 88 q 492 136 437 88 q 566 264 548 185 l 701 264 "},"¶":{x_min:0,x_max:566.671875,ha:678,o:"m 21 892 l 52 892 l 98 761 l 145 892 l 176 892 l 178 741 l 157 741 l 157 867 l 108 741 l 88 741 l 40 871 l 40 741 l 21 741 l 21 892 m 308 854 l 308 731 q 252 691 308 691 q 227 691 240 691 q 207 696 213 695 l 207 712 l 253 706 q 288 733 288 706 l 288 763 q 244 741 279 741 q 193 797 193 741 q 261 860 193 860 q 287 860 273 860 q 308 854 302 855 m 288 842 l 263 843 q 213 796 213 843 q 248 756 213 756 q 288 796 288 756 l 288 842 m 566 988 l 502 988 l 502 -1 l 439 -1 l 439 988 l 317 988 l 317 -1 l 252 -1 l 252 602 q 81 653 155 602 q 0 805 0 711 q 101 989 0 918 q 309 1053 194 1053 l 566 1053 l 566 988 "},"β":{x_min:0,x_max:660,ha:745,o:"m 471 550 q 610 450 561 522 q 660 280 660 378 q 578 64 660 151 q 367 -22 497 -22 q 239 5 299 -22 q 126 82 178 32 l 126 -278 l 0 -278 l 0 593 q 54 903 0 801 q 318 1042 127 1042 q 519 964 436 1042 q 603 771 603 887 q 567 644 603 701 q 471 550 532 586 m 337 79 q 476 138 418 79 q 535 279 535 198 q 427 437 535 386 q 226 477 344 477 l 226 583 q 398 620 329 583 q 486 762 486 668 q 435 884 486 833 q 312 935 384 935 q 169 861 219 935 q 126 698 126 797 l 126 362 q 170 169 126 242 q 337 79 224 79 "},"Μ":{x_min:0,x_max:954,ha:1068,o:"m 954 0 l 819 0 l 819 868 l 537 0 l 405 0 l 128 865 l 128 0 l 0 0 l 0 1013 l 199 1013 l 472 158 l 758 1013 l 954 1013 l 954 0 "},"Ό":{x_min:0.109375,x_max:1120,ha:1217,o:"m 1120 505 q 994 132 1120 282 q 642 -29 861 -29 q 290 130 422 -29 q 167 505 167 280 q 294 883 167 730 q 650 1046 430 1046 q 999 882 868 1046 q 1120 505 1120 730 m 977 504 q 896 784 977 669 q 644 915 804 915 q 391 785 484 915 q 307 504 307 669 q 391 224 307 339 q 644 95 486 95 q 894 224 803 95 q 977 504 977 339 m 277 1040 l 83 799 l 0 799 l 140 1040 l 277 1040 "},"Ή":{x_min:0,x_max:1158,ha:1275,o:"m 1158 0 l 1022 0 l 1022 475 l 496 475 l 496 0 l 356 0 l 356 1012 l 496 1012 l 496 599 l 1022 599 l 1022 1012 l 1158 1012 l 1158 0 m 277 1040 l 83 799 l 0 799 l 140 1040 l 277 1040 "},"•":{x_min:0,x_max:663.890625,ha:775,o:"m 663 529 q 566 293 663 391 q 331 196 469 196 q 97 294 194 196 q 0 529 0 393 q 96 763 0 665 q 331 861 193 861 q 566 763 469 861 q 663 529 663 665 "},"¥":{x_min:0.1875,x_max:819.546875,ha:886,o:"m 563 561 l 697 561 l 696 487 l 520 487 l 482 416 l 482 380 l 697 380 l 695 308 l 482 308 l 482 0 l 342 0 l 342 308 l 125 308 l 125 380 l 342 380 l 342 417 l 303 487 l 125 487 l 125 561 l 258 561 l 0 1013 l 140 1013 l 411 533 l 679 1013 l 819 1013 l 563 561 "},"(":{x_min:0,x_max:318.0625,ha:415,o:"m 318 -290 l 230 -290 q 61 23 122 -142 q 0 365 0 190 q 62 712 0 540 q 230 1024 119 869 l 318 1024 q 175 705 219 853 q 125 360 125 542 q 176 22 125 187 q 318 -290 223 -127 "},U:{x_min:0,x_max:796,ha:904,o:"m 796 393 q 681 93 796 212 q 386 -25 566 -25 q 101 95 208 -25 q 0 393 0 211 l 0 1013 l 138 1013 l 138 391 q 204 191 138 270 q 394 107 276 107 q 586 191 512 107 q 656 391 656 270 l 656 1013 l 796 1013 l 796 393 "},"γ":{x_min:0.5,x_max:744.953125,ha:822,o:"m 744 737 l 463 54 l 463 -278 l 338 -278 l 338 54 l 154 495 q 104 597 124 569 q 13 651 67 651 l 0 651 l 0 751 l 39 753 q 168 711 121 753 q 242 594 207 676 l 403 208 l 617 737 l 744 737 "},"α":{x_min:0,x_max:765.5625,ha:809,o:"m 765 -4 q 698 -14 726 -14 q 564 97 586 -14 q 466 7 525 40 q 337 -26 407 -26 q 88 98 186 -26 q 0 369 0 212 q 88 637 0 525 q 337 760 184 760 q 465 728 407 760 q 563 637 524 696 l 563 739 l 685 739 l 685 222 q 693 141 685 168 q 748 94 708 94 q 765 96 760 94 l 765 -4 m 584 371 q 531 562 584 485 q 360 653 470 653 q 192 566 254 653 q 135 379 135 489 q 186 181 135 261 q 358 84 247 84 q 528 176 465 84 q 584 371 584 260 "},F:{x_min:0,x_max:683.328125,ha:717,o:"m 683 888 l 140 888 l 140 583 l 613 583 l 613 458 l 140 458 l 140 0 l 0 0 l 0 1013 l 683 1013 l 683 888 "},"­":{x_min:0,x_max:705.5625,ha:803,o:"m 705 334 l 0 334 l 0 410 l 705 410 l 705 334 "},":":{x_min:0,x_max:142,ha:239,o:"m 142 585 l 0 585 l 0 738 l 142 738 l 142 585 m 142 0 l 0 0 l 0 151 l 142 151 l 142 0 "},"Χ":{x_min:0,x_max:854.171875,ha:935,o:"m 854 0 l 683 0 l 423 409 l 166 0 l 0 0 l 347 519 l 18 1013 l 186 1013 l 427 637 l 675 1013 l 836 1013 l 504 521 l 854 0 "},"*":{x_min:116,x_max:674,ha:792,o:"m 674 768 l 475 713 l 610 544 l 517 477 l 394 652 l 272 478 l 178 544 l 314 713 l 116 766 l 153 876 l 341 812 l 342 1013 l 446 1013 l 446 811 l 635 874 l 674 768 "},"†":{x_min:0,x_max:777,ha:835,o:"m 458 804 l 777 804 l 777 683 l 458 683 l 458 0 l 319 0 l 319 681 l 0 683 l 0 804 l 319 804 l 319 1015 l 458 1013 l 458 804 "},"°":{x_min:0,x_max:347,ha:444,o:"m 173 802 q 43 856 91 802 q 0 977 0 905 q 45 1101 0 1049 q 173 1153 90 1153 q 303 1098 255 1153 q 347 977 347 1049 q 303 856 347 905 q 173 802 256 802 m 173 884 q 238 910 214 884 q 262 973 262 937 q 239 1038 262 1012 q 173 1064 217 1064 q 108 1037 132 1064 q 85 973 85 1010 q 108 910 85 937 q 173 884 132 884 "},V:{x_min:0,x_max:862.71875,ha:940,o:"m 862 1013 l 505 0 l 361 0 l 0 1013 l 143 1013 l 434 165 l 718 1012 l 862 1013 "},"Ξ":{x_min:0,x_max:734.71875,ha:763,o:"m 723 889 l 9 889 l 9 1013 l 723 1013 l 723 889 m 673 463 l 61 463 l 61 589 l 673 589 l 673 463 m 734 0 l 0 0 l 0 124 l 734 124 l 734 0 "}," ":{x_min:0,x_max:0,ha:853},"Ϋ":{x_min:0.328125,x_max:819.515625,ha:889,o:"m 588 1046 l 460 1046 l 460 1189 l 588 1189 l 588 1046 m 360 1046 l 232 1046 l 232 1189 l 360 1189 l 360 1046 m 819 1012 l 482 416 l 482 0 l 342 0 l 342 416 l 0 1012 l 140 1012 l 411 533 l 679 1012 l 819 1012 "},"”":{x_min:0,x_max:347,ha:454,o:"m 139 851 q 102 737 139 784 q 0 669 65 690 l 0 734 q 59 787 42 741 q 72 873 72 821 l 0 873 l 0 1013 l 139 1013 l 139 851 m 347 851 q 310 737 347 784 q 208 669 273 690 l 208 734 q 267 787 250 741 q 280 873 280 821 l 208 873 l 208 1013 l 347 1013 l 347 851 "},"@":{x_min:0,x_max:1260,ha:1357,o:"m 1098 -45 q 877 -160 1001 -117 q 633 -203 752 -203 q 155 -29 327 -203 q 0 360 0 127 q 176 802 0 616 q 687 1008 372 1008 q 1123 854 969 1008 q 1260 517 1260 718 q 1155 216 1260 341 q 868 82 1044 82 q 772 106 801 82 q 737 202 737 135 q 647 113 700 144 q 527 82 594 82 q 367 147 420 82 q 314 312 314 212 q 401 565 314 452 q 639 690 498 690 q 810 588 760 690 l 849 668 l 938 668 q 877 441 900 532 q 833 226 833 268 q 853 182 833 198 q 902 167 873 167 q 1088 272 1012 167 q 1159 512 1159 372 q 1051 793 1159 681 q 687 925 925 925 q 248 747 415 925 q 97 361 97 586 q 226 26 97 159 q 627 -122 370 -122 q 856 -87 737 -122 q 1061 8 976 -53 l 1098 -45 m 786 488 q 738 580 777 545 q 643 615 700 615 q 483 517 548 615 q 425 322 425 430 q 457 203 425 250 q 552 156 490 156 q 722 273 665 156 q 786 488 738 309 "},"Ί":{x_min:0,x_max:499,ha:613,o:"m 277 1040 l 83 799 l 0 799 l 140 1040 l 277 1040 m 499 0 l 360 0 l 360 1012 l 499 1012 l 499 0 "},i:{x_min:14,x_max:136,ha:275,o:"m 136 873 l 14 873 l 14 1013 l 136 1013 l 136 873 m 136 0 l 14 0 l 14 737 l 136 737 l 136 0 "},"Β":{x_min:0,x_max:778,ha:877,o:"m 580 545 q 724 468 671 534 q 778 310 778 402 q 673 83 778 170 q 432 0 575 0 l 0 0 l 0 1013 l 411 1013 q 629 957 541 1013 q 732 768 732 891 q 691 632 732 692 q 580 545 650 571 m 393 899 l 139 899 l 139 587 l 379 587 q 521 623 462 587 q 592 744 592 666 q 531 859 592 819 q 393 899 471 899 m 419 124 q 566 169 504 124 q 635 302 635 219 q 559 435 635 388 q 402 476 494 476 l 139 476 l 139 124 l 419 124 "},"υ":{x_min:0,x_max:617,ha:725,o:"m 617 352 q 540 94 617 199 q 308 -24 455 -24 q 76 94 161 -24 q 0 352 0 199 l 0 739 l 126 739 l 126 355 q 169 185 126 257 q 312 98 220 98 q 451 185 402 98 q 492 355 492 257 l 492 739 l 617 739 l 617 352 "},"]":{x_min:0,x_max:275,ha:372,o:"m 275 -281 l 0 -281 l 0 -187 l 151 -187 l 151 920 l 0 920 l 0 1013 l 275 1013 l 275 -281 "},m:{x_min:0,x_max:1019,ha:1128,o:"m 1019 0 l 897 0 l 897 454 q 860 591 897 536 q 739 660 816 660 q 613 586 659 660 q 573 436 573 522 l 573 0 l 447 0 l 447 455 q 412 591 447 535 q 294 657 372 657 q 165 586 213 657 q 122 437 122 521 l 122 0 l 0 0 l 0 738 l 117 738 l 117 640 q 202 730 150 697 q 316 763 254 763 q 437 730 381 763 q 525 642 494 697 q 621 731 559 700 q 753 763 682 763 q 943 694 867 763 q 1019 512 1019 625 l 1019 0 "},"χ":{x_min:8.328125,x_max:780.5625,ha:815,o:"m 780 -278 q 715 -294 747 -294 q 616 -257 663 -294 q 548 -175 576 -227 l 379 133 l 143 -277 l 9 -277 l 313 254 l 163 522 q 127 586 131 580 q 36 640 91 640 q 8 637 27 640 l 8 752 l 52 757 q 162 719 113 757 q 236 627 200 690 l 383 372 l 594 737 l 726 737 l 448 250 l 625 -69 q 670 -153 647 -110 q 743 -188 695 -188 q 780 -184 759 -188 l 780 -278 "},"ί":{x_min:42,x_max:326.71875,ha:361,o:"m 284 3 q 233 -10 258 -5 q 182 -15 207 -15 q 85 26 119 -15 q 42 200 42 79 l 42 737 l 167 737 l 168 215 q 172 141 168 157 q 226 101 183 101 q 248 102 239 101 q 284 112 257 104 l 284 3 m 326 1040 l 137 819 l 54 819 l 189 1040 l 326 1040 "},"Ζ":{x_min:0,x_max:779.171875,ha:850,o:"m 779 0 l 0 0 l 0 113 l 620 896 l 40 896 l 40 1013 l 779 1013 l 779 887 l 170 124 l 779 124 l 779 0 "},R:{x_min:0,x_max:781.953125,ha:907,o:"m 781 0 l 623 0 q 587 242 590 52 q 407 433 585 433 l 138 433 l 138 0 l 0 0 l 0 1013 l 396 1013 q 636 946 539 1013 q 749 731 749 868 q 711 597 749 659 q 608 502 674 534 q 718 370 696 474 q 729 207 722 352 q 781 26 736 62 l 781 0 m 373 551 q 533 594 465 551 q 614 731 614 645 q 532 859 614 815 q 373 896 465 896 l 138 896 l 138 551 l 373 551 "},o:{x_min:0,x_max:713,ha:821,o:"m 357 -25 q 94 91 194 -25 q 0 368 0 202 q 93 642 0 533 q 357 761 193 761 q 618 644 518 761 q 713 368 713 533 q 619 91 713 201 q 357 -25 521 -25 m 357 85 q 528 175 465 85 q 584 369 584 255 q 529 562 584 484 q 357 651 467 651 q 189 560 250 651 q 135 369 135 481 q 187 177 135 257 q 357 85 250 85 "},K:{x_min:0,x_max:819.46875,ha:906,o:"m 819 0 l 649 0 l 294 509 l 139 355 l 139 0 l 0 0 l 0 1013 l 139 1013 l 139 526 l 626 1013 l 809 1013 l 395 600 l 819 0 "},",":{x_min:0,x_max:142,ha:239,o:"m 142 -12 q 105 -132 142 -82 q 0 -205 68 -182 l 0 -138 q 57 -82 40 -124 q 70 0 70 -51 l 0 0 l 0 151 l 142 151 l 142 -12 "},d:{x_min:0,x_max:683,ha:796,o:"m 683 0 l 564 0 l 564 93 q 456 6 516 38 q 327 -25 395 -25 q 87 100 181 -25 q 0 365 0 215 q 90 639 0 525 q 343 763 187 763 q 564 647 486 763 l 564 1013 l 683 1013 l 683 0 m 582 373 q 529 562 582 484 q 361 653 468 653 q 190 561 253 653 q 135 365 135 479 q 189 175 135 254 q 358 85 251 85 q 529 178 468 85 q 582 373 582 258 "},"¨":{x_min:-109,x_max:247,ha:232,o:"m 247 1046 l 119 1046 l 119 1189 l 247 1189 l 247 1046 m 19 1046 l -109 1046 l -109 1189 l 19 1189 l 19 1046 "},E:{x_min:0,x_max:736.109375,ha:789,o:"m 736 0 l 0 0 l 0 1013 l 725 1013 l 725 889 l 139 889 l 139 585 l 677 585 l 677 467 l 139 467 l 139 125 l 736 125 l 736 0 "},Y:{x_min:0,x_max:820,ha:886,o:"m 820 1013 l 482 416 l 482 0 l 342 0 l 342 416 l 0 1013 l 140 1013 l 411 534 l 679 1012 l 820 1013 "},"\"":{x_min:0,x_max:299,ha:396,o:"m 299 606 l 203 606 l 203 988 l 299 988 l 299 606 m 96 606 l 0 606 l 0 988 l 96 988 l 96 606 "},"‹":{x_min:17.984375,x_max:773.609375,ha:792,o:"m 773 40 l 18 376 l 17 465 l 773 799 l 773 692 l 159 420 l 773 149 l 773 40 "},"„":{x_min:0,x_max:364,ha:467,o:"m 141 -12 q 104 -132 141 -82 q 0 -205 67 -182 l 0 -138 q 56 -82 40 -124 q 69 0 69 -51 l 0 0 l 0 151 l 141 151 l 141 -12 m 364 -12 q 327 -132 364 -82 q 222 -205 290 -182 l 222 -138 q 279 -82 262 -124 q 292 0 292 -51 l 222 0 l 222 151 l 364 151 l 364 -12 "},"δ":{x_min:1,x_max:710,ha:810,o:"m 710 360 q 616 87 710 196 q 356 -28 518 -28 q 99 82 197 -28 q 1 356 1 192 q 100 606 1 509 q 355 703 199 703 q 180 829 288 754 q 70 903 124 866 l 70 1012 l 643 1012 l 643 901 l 258 901 q 462 763 422 794 q 636 592 577 677 q 710 360 710 485 m 584 365 q 552 501 584 447 q 451 602 521 555 q 372 611 411 611 q 197 541 258 611 q 136 355 136 472 q 190 171 136 245 q 358 85 252 85 q 528 173 465 85 q 584 365 584 252 "},"έ":{x_min:0,x_max:634.71875,ha:714,o:"m 634 234 q 527 38 634 110 q 300 -25 433 -25 q 98 29 183 -25 q 0 204 0 93 q 37 313 0 265 q 128 390 67 352 q 56 459 82 419 q 26 555 26 505 q 114 712 26 654 q 295 763 191 763 q 499 700 416 763 q 589 515 589 631 l 478 515 q 419 618 464 580 q 307 657 374 657 q 207 630 253 657 q 151 547 151 598 q 238 445 151 469 q 389 434 280 434 l 389 331 l 349 331 q 206 315 255 331 q 125 210 125 287 q 183 107 125 145 q 302 76 233 76 q 436 117 379 76 q 509 234 493 159 l 634 234 m 520 1040 l 331 819 l 248 819 l 383 1040 l 520 1040 "},"ω":{x_min:0,x_max:922,ha:1031,o:"m 922 339 q 856 97 922 203 q 650 -26 780 -26 q 538 9 587 -26 q 461 103 489 44 q 387 12 436 46 q 277 -22 339 -22 q 69 97 147 -22 q 0 339 0 203 q 45 551 0 444 q 161 738 84 643 l 302 738 q 175 553 219 647 q 124 336 124 446 q 155 179 124 249 q 275 88 197 88 q 375 163 341 88 q 400 294 400 219 l 400 572 l 524 572 l 524 294 q 561 135 524 192 q 643 88 591 88 q 762 182 719 88 q 797 342 797 257 q 745 556 797 450 q 619 738 705 638 l 760 738 q 874 551 835 640 q 922 339 922 444 "},"´":{x_min:0,x_max:96,ha:251,o:"m 96 606 l 0 606 l 0 988 l 96 988 l 96 606 "},"±":{x_min:11,x_max:781,ha:792,o:"m 781 490 l 446 490 l 446 255 l 349 255 l 349 490 l 11 490 l 11 586 l 349 586 l 349 819 l 446 819 l 446 586 l 781 586 l 781 490 m 781 21 l 11 21 l 11 115 l 781 115 l 781 21 "},"|":{x_min:343,x_max:449,ha:792,o:"m 449 462 l 343 462 l 343 986 l 449 986 l 449 462 m 449 -242 l 343 -242 l 343 280 l 449 280 l 449 -242 "},"ϋ":{x_min:0,x_max:617,ha:725,o:"m 482 800 l 372 800 l 372 925 l 482 925 l 482 800 m 239 800 l 129 800 l 129 925 l 239 925 l 239 800 m 617 352 q 540 93 617 199 q 308 -24 455 -24 q 76 93 161 -24 q 0 352 0 199 l 0 738 l 126 738 l 126 354 q 169 185 126 257 q 312 98 220 98 q 451 185 402 98 q 492 354 492 257 l 492 738 l 617 738 l 617 352 "},"§":{x_min:0,x_max:593,ha:690,o:"m 593 425 q 554 312 593 369 q 467 233 516 254 q 537 83 537 172 q 459 -74 537 -12 q 288 -133 387 -133 q 115 -69 184 -133 q 47 96 47 -6 l 166 96 q 199 7 166 40 q 288 -26 232 -26 q 371 -5 332 -26 q 420 60 420 21 q 311 201 420 139 q 108 309 210 255 q 0 490 0 383 q 33 602 0 551 q 124 687 66 654 q 75 743 93 712 q 58 812 58 773 q 133 984 58 920 q 300 1043 201 1043 q 458 987 394 1043 q 529 814 529 925 l 411 814 q 370 908 404 877 q 289 939 336 939 q 213 911 246 939 q 180 841 180 883 q 286 720 180 779 q 484 612 480 615 q 593 425 593 534 m 467 409 q 355 544 467 473 q 196 630 228 612 q 146 587 162 609 q 124 525 124 558 q 239 387 124 462 q 398 298 369 315 q 448 345 429 316 q 467 409 467 375 "},b:{x_min:0,x_max:685,ha:783,o:"m 685 372 q 597 99 685 213 q 347 -25 501 -25 q 219 5 277 -25 q 121 93 161 36 l 121 0 l 0 0 l 0 1013 l 121 1013 l 121 634 q 214 723 157 692 q 341 754 272 754 q 591 637 493 754 q 685 372 685 526 m 554 356 q 499 550 554 470 q 328 644 437 644 q 162 556 223 644 q 108 369 108 478 q 160 176 108 256 q 330 83 221 83 q 498 169 435 83 q 554 356 554 245 "},q:{x_min:0,x_max:683,ha:876,o:"m 683 -278 l 564 -278 l 564 97 q 474 8 533 39 q 345 -23 415 -23 q 91 93 188 -23 q 0 364 0 203 q 87 635 0 522 q 337 760 184 760 q 466 727 408 760 q 564 637 523 695 l 564 737 l 683 737 l 683 -278 m 582 375 q 527 564 582 488 q 358 652 466 652 q 190 565 253 652 q 135 377 135 488 q 189 179 135 261 q 361 84 251 84 q 530 179 469 84 q 582 375 582 260 "},"Ω":{x_min:-0.171875,x_max:969.5625,ha:1068,o:"m 969 0 l 555 0 l 555 123 q 744 308 675 194 q 814 558 814 423 q 726 812 814 709 q 484 922 633 922 q 244 820 334 922 q 154 567 154 719 q 223 316 154 433 q 412 123 292 199 l 412 0 l 0 0 l 0 124 l 217 124 q 68 327 122 210 q 15 572 15 444 q 144 911 15 781 q 484 1041 274 1041 q 822 909 691 1041 q 953 569 953 777 q 899 326 953 443 q 750 124 846 210 l 969 124 l 969 0 "},"ύ":{x_min:0,x_max:617,ha:725,o:"m 617 352 q 540 93 617 199 q 308 -24 455 -24 q 76 93 161 -24 q 0 352 0 199 l 0 738 l 126 738 l 126 354 q 169 185 126 257 q 312 98 220 98 q 451 185 402 98 q 492 354 492 257 l 492 738 l 617 738 l 617 352 m 535 1040 l 346 819 l 262 819 l 397 1040 l 535 1040 "},z:{x_min:-0.015625,x_max:613.890625,ha:697,o:"m 613 0 l 0 0 l 0 100 l 433 630 l 20 630 l 20 738 l 594 738 l 593 636 l 163 110 l 613 110 l 613 0 "},"™":{x_min:0,x_max:894,ha:1000,o:"m 389 951 l 229 951 l 229 503 l 160 503 l 160 951 l 0 951 l 0 1011 l 389 1011 l 389 951 m 894 503 l 827 503 l 827 939 l 685 503 l 620 503 l 481 937 l 481 503 l 417 503 l 417 1011 l 517 1011 l 653 580 l 796 1010 l 894 1011 l 894 503 "},"ή":{x_min:0.78125,x_max:697,ha:810,o:"m 697 -278 l 572 -278 l 572 454 q 540 587 572 536 q 425 650 501 650 q 271 579 337 650 q 206 420 206 509 l 206 0 l 81 0 l 81 489 q 73 588 81 562 q 0 644 56 644 l 0 741 q 68 755 38 755 q 158 721 124 755 q 200 630 193 687 q 297 726 234 692 q 434 761 359 761 q 620 692 544 761 q 697 516 697 624 l 697 -278 m 479 1040 l 290 819 l 207 819 l 341 1040 l 479 1040 "},"Θ":{x_min:0,x_max:960,ha:1056,o:"m 960 507 q 833 129 960 280 q 476 -32 698 -32 q 123 129 255 -32 q 0 507 0 280 q 123 883 0 732 q 476 1045 255 1045 q 832 883 696 1045 q 960 507 960 732 m 817 500 q 733 789 817 669 q 476 924 639 924 q 223 792 317 924 q 142 507 142 675 q 222 222 142 339 q 476 89 315 89 q 730 218 636 89 q 817 500 817 334 m 716 449 l 243 449 l 243 571 l 716 571 l 716 449 "},"®":{x_min:-3,x_max:1008,ha:1106,o:"m 503 532 q 614 562 566 532 q 672 658 672 598 q 614 747 672 716 q 503 772 569 772 l 338 772 l 338 532 l 503 532 m 502 -7 q 123 151 263 -7 q -3 501 -3 294 q 123 851 -3 706 q 502 1011 263 1011 q 881 851 739 1011 q 1008 501 1008 708 q 883 151 1008 292 q 502 -7 744 -7 m 502 60 q 830 197 709 60 q 940 501 940 322 q 831 805 940 681 q 502 944 709 944 q 174 805 296 944 q 65 501 65 680 q 173 197 65 320 q 502 60 294 60 m 788 146 l 678 146 q 653 316 655 183 q 527 449 652 449 l 338 449 l 338 146 l 241 146 l 241 854 l 518 854 q 688 808 621 854 q 766 658 766 755 q 739 563 766 607 q 668 497 713 519 q 751 331 747 472 q 788 164 756 190 l 788 146 "},"~":{x_min:0,x_max:833,ha:931,o:"m 833 958 q 778 753 833 831 q 594 665 716 665 q 402 761 502 665 q 240 857 302 857 q 131 795 166 857 q 104 665 104 745 l 0 665 q 54 867 0 789 q 237 958 116 958 q 429 861 331 958 q 594 765 527 765 q 704 827 670 765 q 729 958 729 874 l 833 958 "},"Ε":{x_min:0,x_max:736.21875,ha:778,o:"m 736 0 l 0 0 l 0 1013 l 725 1013 l 725 889 l 139 889 l 139 585 l 677 585 l 677 467 l 139 467 l 139 125 l 736 125 l 736 0 "},"³":{x_min:0,x_max:450,ha:547,o:"m 450 552 q 379 413 450 464 q 220 366 313 366 q 69 414 130 366 q 0 567 0 470 l 85 567 q 126 470 85 504 q 225 437 168 437 q 320 467 280 437 q 360 552 360 498 q 318 632 360 608 q 213 657 276 657 q 195 657 203 657 q 176 657 181 657 l 176 722 q 279 733 249 722 q 334 815 334 752 q 300 881 334 856 q 220 907 267 907 q 133 875 169 907 q 97 781 97 844 l 15 781 q 78 926 15 875 q 220 972 135 972 q 364 930 303 972 q 426 817 426 888 q 344 697 426 733 q 421 642 392 681 q 450 552 450 603 "},"[":{x_min:0,x_max:273.609375,ha:371,o:"m 273 -281 l 0 -281 l 0 1013 l 273 1013 l 273 920 l 124 920 l 124 -187 l 273 -187 l 273 -281 "},L:{x_min:0,x_max:645.828125,ha:696,o:"m 645 0 l 0 0 l 0 1013 l 140 1013 l 140 126 l 645 126 l 645 0 "},"σ":{x_min:0,x_max:803.390625,ha:894,o:"m 803 628 l 633 628 q 713 368 713 512 q 618 93 713 204 q 357 -25 518 -25 q 94 91 194 -25 q 0 368 0 201 q 94 644 0 533 q 356 761 194 761 q 481 750 398 761 q 608 739 564 739 l 803 739 l 803 628 m 360 85 q 529 180 467 85 q 584 374 584 262 q 527 566 584 490 q 352 651 463 651 q 187 559 247 651 q 135 368 135 478 q 189 175 135 254 q 360 85 251 85 "},"ζ":{x_min:0,x_max:573,ha:642,o:"m 573 -40 q 553 -162 573 -97 q 510 -278 543 -193 l 400 -278 q 441 -187 428 -219 q 462 -90 462 -132 q 378 -14 462 -14 q 108 45 197 -14 q 0 290 0 117 q 108 631 0 462 q 353 901 194 767 l 55 901 l 55 1012 l 561 1012 l 561 924 q 261 669 382 831 q 128 301 128 489 q 243 117 128 149 q 458 98 350 108 q 573 -40 573 80 "},"θ":{x_min:0,x_max:674,ha:778,o:"m 674 496 q 601 160 674 304 q 336 -26 508 -26 q 73 153 165 -26 q 0 485 0 296 q 72 840 0 683 q 343 1045 166 1045 q 605 844 516 1045 q 674 496 674 692 m 546 579 q 498 798 546 691 q 336 935 437 935 q 178 798 237 935 q 126 579 137 701 l 546 579 m 546 475 l 126 475 q 170 233 126 348 q 338 80 230 80 q 504 233 447 80 q 546 475 546 346 "},"Ο":{x_min:0,x_max:958,ha:1054,o:"m 485 1042 q 834 883 703 1042 q 958 511 958 735 q 834 136 958 287 q 481 -26 701 -26 q 126 130 261 -26 q 0 504 0 279 q 127 880 0 729 q 485 1042 263 1042 m 480 98 q 731 225 638 98 q 815 504 815 340 q 733 783 815 670 q 480 913 640 913 q 226 785 321 913 q 142 504 142 671 q 226 224 142 339 q 480 98 319 98 "},"Γ":{x_min:0,x_max:705.28125,ha:749,o:"m 705 886 l 140 886 l 140 0 l 0 0 l 0 1012 l 705 1012 l 705 886 "}," ":{x_min:0,x_max:0,ha:375},"%":{x_min:-3,x_max:1089,ha:1186,o:"m 845 0 q 663 76 731 0 q 602 244 602 145 q 661 412 602 344 q 845 489 728 489 q 1027 412 959 489 q 1089 244 1089 343 q 1029 76 1089 144 q 845 0 962 0 m 844 103 q 945 143 909 103 q 981 243 981 184 q 947 340 981 301 q 844 385 909 385 q 744 342 781 385 q 708 243 708 300 q 741 147 708 186 q 844 103 780 103 m 888 986 l 284 -25 l 199 -25 l 803 986 l 888 986 m 241 468 q 58 545 126 468 q -3 715 -3 615 q 56 881 -3 813 q 238 958 124 958 q 421 881 353 958 q 483 712 483 813 q 423 544 483 612 q 241 468 356 468 m 241 855 q 137 811 175 855 q 100 710 100 768 q 136 612 100 653 q 240 572 172 572 q 344 614 306 572 q 382 713 382 656 q 347 810 382 771 q 241 855 308 855 "},P:{x_min:0,x_max:726,ha:806,o:"m 424 1013 q 640 931 555 1013 q 726 719 726 850 q 637 506 726 587 q 413 426 548 426 l 140 426 l 140 0 l 0 0 l 0 1013 l 424 1013 m 379 889 l 140 889 l 140 548 l 372 548 q 522 589 459 548 q 593 720 593 637 q 528 845 593 801 q 379 889 463 889 "},"Έ":{x_min:0,x_max:1078.21875,ha:1118,o:"m 1078 0 l 342 0 l 342 1013 l 1067 1013 l 1067 889 l 481 889 l 481 585 l 1019 585 l 1019 467 l 481 467 l 481 125 l 1078 125 l 1078 0 m 277 1040 l 83 799 l 0 799 l 140 1040 l 277 1040 "},"Ώ":{x_min:0.125,x_max:1136.546875,ha:1235,o:"m 1136 0 l 722 0 l 722 123 q 911 309 842 194 q 981 558 981 423 q 893 813 981 710 q 651 923 800 923 q 411 821 501 923 q 321 568 321 720 q 390 316 321 433 q 579 123 459 200 l 579 0 l 166 0 l 166 124 l 384 124 q 235 327 289 210 q 182 572 182 444 q 311 912 182 782 q 651 1042 441 1042 q 989 910 858 1042 q 1120 569 1120 778 q 1066 326 1120 443 q 917 124 1013 210 l 1136 124 l 1136 0 m 277 1040 l 83 800 l 0 800 l 140 1041 l 277 1040 "},_:{x_min:0,x_max:705.5625,ha:803,o:"m 705 -334 l 0 -334 l 0 -234 l 705 -234 l 705 -334 "},"Ϊ":{x_min:-110,x_max:246,ha:275,o:"m 246 1046 l 118 1046 l 118 1189 l 246 1189 l 246 1046 m 18 1046 l -110 1046 l -110 1189 l 18 1189 l 18 1046 m 136 0 l 0 0 l 0 1012 l 136 1012 l 136 0 "},"+":{x_min:23,x_max:768,ha:792,o:"m 768 372 l 444 372 l 444 0 l 347 0 l 347 372 l 23 372 l 23 468 l 347 468 l 347 840 l 444 840 l 444 468 l 768 468 l 768 372 "},"½":{x_min:0,x_max:1050,ha:1149,o:"m 1050 0 l 625 0 q 712 178 625 108 q 878 277 722 187 q 967 385 967 328 q 932 456 967 429 q 850 484 897 484 q 759 450 798 484 q 721 352 721 416 l 640 352 q 706 502 640 448 q 851 551 766 551 q 987 509 931 551 q 1050 385 1050 462 q 976 251 1050 301 q 829 179 902 215 q 717 68 740 133 l 1050 68 l 1050 0 m 834 985 l 215 -28 l 130 -28 l 750 984 l 834 985 m 224 422 l 142 422 l 142 811 l 0 811 l 0 867 q 104 889 62 867 q 164 973 157 916 l 224 973 l 224 422 "},"Ρ":{x_min:0,x_max:720,ha:783,o:"m 424 1013 q 637 933 554 1013 q 720 723 720 853 q 633 508 720 591 q 413 426 546 426 l 140 426 l 140 0 l 0 0 l 0 1013 l 424 1013 m 378 889 l 140 889 l 140 548 l 371 548 q 521 589 458 548 q 592 720 592 637 q 527 845 592 801 q 378 889 463 889 "},"'":{x_min:0,x_max:139,ha:236,o:"m 139 851 q 102 737 139 784 q 0 669 65 690 l 0 734 q 59 787 42 741 q 72 873 72 821 l 0 873 l 0 1013 l 139 1013 l 139 851 "},"ª":{x_min:0,x_max:350,ha:397,o:"m 350 625 q 307 616 328 616 q 266 631 281 616 q 247 673 251 645 q 190 628 225 644 q 116 613 156 613 q 32 641 64 613 q 0 722 0 669 q 72 826 0 800 q 247 866 159 846 l 247 887 q 220 934 247 916 q 162 953 194 953 q 104 934 129 953 q 76 882 80 915 l 16 882 q 60 976 16 941 q 166 1011 104 1011 q 266 979 224 1011 q 308 891 308 948 l 308 706 q 311 679 308 688 q 331 670 315 670 l 350 672 l 350 625 m 247 757 l 247 811 q 136 790 175 798 q 64 726 64 773 q 83 682 64 697 q 132 667 103 667 q 207 690 174 667 q 247 757 247 718 "},"΅":{x_min:0,x_max:450,ha:553,o:"m 450 800 l 340 800 l 340 925 l 450 925 l 450 800 m 406 1040 l 212 800 l 129 800 l 269 1040 l 406 1040 m 110 800 l 0 800 l 0 925 l 110 925 l 110 800 "},T:{x_min:0,x_max:777,ha:835,o:"m 777 894 l 458 894 l 458 0 l 319 0 l 319 894 l 0 894 l 0 1013 l 777 1013 l 777 894 "},"Φ":{x_min:0,x_max:915,ha:997,o:"m 527 0 l 389 0 l 389 122 q 110 231 220 122 q 0 509 0 340 q 110 785 0 677 q 389 893 220 893 l 389 1013 l 527 1013 l 527 893 q 804 786 693 893 q 915 509 915 679 q 805 231 915 341 q 527 122 696 122 l 527 0 m 527 226 q 712 310 641 226 q 779 507 779 389 q 712 705 779 627 q 527 787 641 787 l 527 226 m 389 226 l 389 787 q 205 698 275 775 q 136 505 136 620 q 206 308 136 391 q 389 226 276 226 "},"⁋":{x_min:0,x_max:0,ha:694},j:{x_min:-77.78125,x_max:167,ha:349,o:"m 167 871 l 42 871 l 42 1013 l 167 1013 l 167 871 m 167 -80 q 121 -231 167 -184 q -26 -278 76 -278 l -77 -278 l -77 -164 l -41 -164 q 26 -143 11 -164 q 42 -65 42 -122 l 42 737 l 167 737 l 167 -80 "},"Σ":{x_min:0,x_max:756.953125,ha:819,o:"m 756 0 l 0 0 l 0 107 l 395 523 l 22 904 l 22 1013 l 745 1013 l 745 889 l 209 889 l 566 523 l 187 125 l 756 125 l 756 0 "},"›":{x_min:18.0625,x_max:774,ha:792,o:"m 774 376 l 18 40 l 18 149 l 631 421 l 18 692 l 18 799 l 774 465 l 774 376 "},"<":{x_min:17.984375,x_max:773.609375,ha:792,o:"m 773 40 l 18 376 l 17 465 l 773 799 l 773 692 l 159 420 l 773 149 l 773 40 "},"£":{x_min:0,x_max:704.484375,ha:801,o:"m 704 41 q 623 -10 664 5 q 543 -26 583 -26 q 359 15 501 -26 q 243 36 288 36 q 158 23 197 36 q 73 -21 119 10 l 6 76 q 125 195 90 150 q 175 331 175 262 q 147 443 175 383 l 0 443 l 0 512 l 108 512 q 43 734 43 623 q 120 929 43 854 q 358 1010 204 1010 q 579 936 487 1010 q 678 729 678 857 l 678 684 l 552 684 q 504 838 552 780 q 362 896 457 896 q 216 852 263 896 q 176 747 176 815 q 199 627 176 697 q 248 512 217 574 l 468 512 l 468 443 l 279 443 q 297 356 297 398 q 230 194 297 279 q 153 107 211 170 q 227 133 190 125 q 293 142 264 142 q 410 119 339 142 q 516 96 482 96 q 579 105 550 96 q 648 142 608 115 l 704 41 "},t:{x_min:0,x_max:367,ha:458,o:"m 367 0 q 312 -5 339 -2 q 262 -8 284 -8 q 145 28 183 -8 q 108 143 108 64 l 108 638 l 0 638 l 0 738 l 108 738 l 108 944 l 232 944 l 232 738 l 367 738 l 367 638 l 232 638 l 232 185 q 248 121 232 140 q 307 102 264 102 q 345 104 330 102 q 367 107 360 107 l 367 0 "},"¬":{x_min:0,x_max:706,ha:803,o:"m 706 411 l 706 158 l 630 158 l 630 335 l 0 335 l 0 411 l 706 411 "},"λ":{x_min:0,x_max:750,ha:803,o:"m 750 -7 q 679 -15 716 -15 q 538 59 591 -15 q 466 214 512 97 l 336 551 l 126 0 l 0 0 l 270 705 q 223 837 247 770 q 116 899 190 899 q 90 898 100 899 l 90 1004 q 152 1011 125 1011 q 298 938 244 1011 q 373 783 326 901 l 605 192 q 649 115 629 136 q 716 95 669 95 l 736 95 q 750 97 745 97 l 750 -7 "},W:{x_min:0,x_max:1263.890625,ha:1351,o:"m 1263 1013 l 995 0 l 859 0 l 627 837 l 405 0 l 265 0 l 0 1013 l 136 1013 l 342 202 l 556 1013 l 701 1013 l 921 207 l 1133 1012 l 1263 1013 "},">":{x_min:18.0625,x_max:774,ha:792,o:"m 774 376 l 18 40 l 18 149 l 631 421 l 18 692 l 18 799 l 774 465 l 774 376 "},v:{x_min:0,x_max:675.15625,ha:761,o:"m 675 738 l 404 0 l 272 0 l 0 738 l 133 737 l 340 147 l 541 737 l 675 738 "},"τ":{x_min:0.28125,x_max:644.5,ha:703,o:"m 644 628 l 382 628 l 382 179 q 388 120 382 137 q 436 91 401 91 q 474 94 447 91 q 504 97 501 97 l 504 0 q 454 -9 482 -5 q 401 -14 426 -14 q 278 67 308 -14 q 260 233 260 118 l 260 628 l 0 628 l 0 739 l 644 739 l 644 628 "},"ξ":{x_min:0,x_max:624.9375,ha:699,o:"m 624 -37 q 608 -153 624 -96 q 563 -278 593 -211 l 454 -278 q 491 -183 486 -200 q 511 -83 511 -126 q 484 -23 511 -44 q 370 1 452 1 q 323 0 354 1 q 283 -1 293 -1 q 84 76 169 -1 q 0 266 0 154 q 56 431 0 358 q 197 538 108 498 q 94 613 134 562 q 54 730 54 665 q 77 823 54 780 q 143 901 101 867 l 27 901 l 27 1012 l 576 1012 l 576 901 l 380 901 q 244 863 303 901 q 178 745 178 820 q 312 600 178 636 q 532 582 380 582 l 532 479 q 276 455 361 479 q 118 281 118 410 q 165 173 118 217 q 274 120 208 133 q 494 101 384 110 q 624 -37 624 76 "},"&":{x_min:-3,x_max:894.25,ha:992,o:"m 894 0 l 725 0 l 624 123 q 471 0 553 40 q 306 -41 390 -41 q 168 -7 231 -41 q 62 92 105 26 q 14 187 31 139 q -3 276 -3 235 q 55 433 -3 358 q 248 581 114 508 q 170 689 196 640 q 137 817 137 751 q 214 985 137 922 q 384 1041 284 1041 q 548 988 483 1041 q 622 824 622 928 q 563 666 622 739 q 431 556 516 608 l 621 326 q 649 407 639 361 q 663 493 653 426 l 781 493 q 703 229 781 352 l 894 0 m 504 818 q 468 908 504 877 q 384 940 433 940 q 293 907 331 940 q 255 818 255 875 q 289 714 255 767 q 363 628 313 678 q 477 729 446 682 q 504 818 504 771 m 556 209 l 314 499 q 179 395 223 449 q 135 283 135 341 q 146 222 135 253 q 183 158 158 192 q 333 80 241 80 q 556 209 448 80 "},"Λ":{x_min:0,x_max:862.5,ha:942,o:"m 862 0 l 719 0 l 426 847 l 143 0 l 0 0 l 356 1013 l 501 1013 l 862 0 "},I:{x_min:41,x_max:180,ha:293,o:"m 180 0 l 41 0 l 41 1013 l 180 1013 l 180 0 "},G:{x_min:0,x_max:921,ha:1011,o:"m 921 0 l 832 0 l 801 136 q 655 15 741 58 q 470 -28 568 -28 q 126 133 259 -28 q 0 499 0 284 q 125 881 0 731 q 486 1043 259 1043 q 763 957 647 1043 q 905 709 890 864 l 772 709 q 668 866 747 807 q 486 926 589 926 q 228 795 322 926 q 142 507 142 677 q 228 224 142 342 q 483 94 323 94 q 712 195 625 94 q 796 435 796 291 l 477 435 l 477 549 l 921 549 l 921 0 "},"ΰ":{x_min:0,x_max:617,ha:725,o:"m 524 800 l 414 800 l 414 925 l 524 925 l 524 800 m 183 800 l 73 800 l 73 925 l 183 925 l 183 800 m 617 352 q 540 93 617 199 q 308 -24 455 -24 q 76 93 161 -24 q 0 352 0 199 l 0 738 l 126 738 l 126 354 q 169 185 126 257 q 312 98 220 98 q 451 185 402 98 q 492 354 492 257 l 492 738 l 617 738 l 617 352 m 489 1040 l 300 819 l 216 819 l 351 1040 l 489 1040 "},"`":{x_min:0,x_max:138.890625,ha:236,o:"m 138 699 l 0 699 l 0 861 q 36 974 0 929 q 138 1041 72 1020 l 138 977 q 82 931 95 969 q 69 839 69 893 l 138 839 l 138 699 "},"·":{x_min:0,x_max:142,ha:239,o:"m 142 585 l 0 585 l 0 738 l 142 738 l 142 585 "},"Υ":{x_min:0.328125,x_max:819.515625,ha:889,o:"m 819 1013 l 482 416 l 482 0 l 342 0 l 342 416 l 0 1013 l 140 1013 l 411 533 l 679 1013 l 819 1013 "},r:{x_min:0,x_max:355.5625,ha:432,o:"m 355 621 l 343 621 q 179 569 236 621 q 122 411 122 518 l 122 0 l 0 0 l 0 737 l 117 737 l 117 604 q 204 719 146 686 q 355 753 262 753 l 355 621 "},x:{x_min:0,x_max:675,ha:764,o:"m 675 0 l 525 0 l 331 286 l 144 0 l 0 0 l 256 379 l 12 738 l 157 737 l 336 473 l 516 738 l 661 738 l 412 380 l 675 0 "},"μ":{x_min:0,x_max:696.609375,ha:747,o:"m 696 -4 q 628 -14 657 -14 q 498 97 513 -14 q 422 8 470 41 q 313 -24 374 -24 q 207 3 258 -24 q 120 80 157 31 l 120 -278 l 0 -278 l 0 738 l 124 738 l 124 343 q 165 172 124 246 q 308 82 216 82 q 451 177 402 82 q 492 358 492 254 l 492 738 l 616 738 l 616 214 q 623 136 616 160 q 673 92 636 92 q 696 95 684 92 l 696 -4 "},h:{x_min:0,x_max:615,ha:724,o:"m 615 472 l 615 0 l 490 0 l 490 454 q 456 590 490 535 q 338 654 416 654 q 186 588 251 654 q 122 436 122 522 l 122 0 l 0 0 l 0 1013 l 122 1013 l 122 633 q 218 727 149 694 q 362 760 287 760 q 552 676 484 760 q 615 472 615 600 "},".":{x_min:0,x_max:142,ha:239,o:"m 142 0 l 0 0 l 0 151 l 142 151 l 142 0 "},"φ":{x_min:-2,x_max:878,ha:974,o:"m 496 -279 l 378 -279 l 378 -17 q 101 88 204 -17 q -2 367 -2 194 q 68 626 -2 510 q 283 758 151 758 l 283 646 q 167 537 209 626 q 133 373 133 462 q 192 177 133 254 q 378 93 259 93 l 378 758 q 445 764 426 763 q 476 765 464 765 q 765 659 653 765 q 878 377 878 553 q 771 96 878 209 q 496 -17 665 -17 l 496 -279 m 496 93 l 514 93 q 687 183 623 93 q 746 380 746 265 q 691 569 746 491 q 522 658 629 658 l 496 656 l 496 93 "},";":{x_min:0,x_max:142,ha:239,o:"m 142 585 l 0 585 l 0 738 l 142 738 l 142 585 m 142 -12 q 105 -132 142 -82 q 0 -206 68 -182 l 0 -138 q 58 -82 43 -123 q 68 0 68 -56 l 0 0 l 0 151 l 142 151 l 142 -12 "},f:{x_min:0,x_max:378,ha:472,o:"m 378 638 l 246 638 l 246 0 l 121 0 l 121 638 l 0 638 l 0 738 l 121 738 q 137 935 121 887 q 290 1028 171 1028 q 320 1027 305 1028 q 378 1021 334 1026 l 378 908 q 323 918 346 918 q 257 870 273 918 q 246 780 246 840 l 246 738 l 378 738 l 378 638 "},"“":{x_min:1,x_max:348.21875,ha:454,o:"m 140 670 l 1 670 l 1 830 q 37 943 1 897 q 140 1011 74 990 l 140 947 q 82 900 97 940 q 68 810 68 861 l 140 810 l 140 670 m 348 670 l 209 670 l 209 830 q 245 943 209 897 q 348 1011 282 990 l 348 947 q 290 900 305 940 q 276 810 276 861 l 348 810 l 348 670 "},A:{x_min:0.03125,x_max:906.953125,ha:1008,o:"m 906 0 l 756 0 l 648 303 l 251 303 l 142 0 l 0 0 l 376 1013 l 529 1013 l 906 0 m 610 421 l 452 867 l 293 421 l 610 421 "},"‘":{x_min:1,x_max:139.890625,ha:236,o:"m 139 670 l 1 670 l 1 830 q 37 943 1 897 q 139 1011 74 990 l 139 947 q 82 900 97 940 q 68 810 68 861 l 139 810 l 139 670 "},"ϊ":{x_min:-70,x_max:283,ha:361,o:"m 283 800 l 173 800 l 173 925 l 283 925 l 283 800 m 40 800 l -70 800 l -70 925 l 40 925 l 40 800 m 283 3 q 232 -10 257 -5 q 181 -15 206 -15 q 84 26 118 -15 q 41 200 41 79 l 41 737 l 166 737 l 167 215 q 171 141 167 157 q 225 101 182 101 q 247 103 238 101 q 283 112 256 104 l 283 3 "},"π":{x_min:-0.21875,x_max:773.21875,ha:857,o:"m 773 -7 l 707 -11 q 575 40 607 -11 q 552 174 552 77 l 552 226 l 552 626 l 222 626 l 222 0 l 97 0 l 97 626 l 0 626 l 0 737 l 773 737 l 773 626 l 676 626 l 676 171 q 695 103 676 117 q 773 90 714 90 l 773 -7 "},"ά":{x_min:0,x_max:765.5625,ha:809,o:"m 765 -4 q 698 -14 726 -14 q 564 97 586 -14 q 466 7 525 40 q 337 -26 407 -26 q 88 98 186 -26 q 0 369 0 212 q 88 637 0 525 q 337 760 184 760 q 465 727 407 760 q 563 637 524 695 l 563 738 l 685 738 l 685 222 q 693 141 685 168 q 748 94 708 94 q 765 95 760 94 l 765 -4 m 584 371 q 531 562 584 485 q 360 653 470 653 q 192 566 254 653 q 135 379 135 489 q 186 181 135 261 q 358 84 247 84 q 528 176 465 84 q 584 371 584 260 m 604 1040 l 415 819 l 332 819 l 466 1040 l 604 1040 "},O:{x_min:0,x_max:958,ha:1057,o:"m 485 1041 q 834 882 702 1041 q 958 512 958 734 q 834 136 958 287 q 481 -26 702 -26 q 126 130 261 -26 q 0 504 0 279 q 127 880 0 728 q 485 1041 263 1041 m 480 98 q 731 225 638 98 q 815 504 815 340 q 733 783 815 669 q 480 912 640 912 q 226 784 321 912 q 142 504 142 670 q 226 224 142 339 q 480 98 319 98 "},n:{x_min:0,x_max:615,ha:724,o:"m 615 463 l 615 0 l 490 0 l 490 454 q 453 592 490 537 q 331 656 410 656 q 178 585 240 656 q 117 421 117 514 l 117 0 l 0 0 l 0 738 l 117 738 l 117 630 q 218 728 150 693 q 359 764 286 764 q 552 675 484 764 q 615 463 615 593 "},l:{x_min:41,x_max:166,ha:279,o:"m 166 0 l 41 0 l 41 1013 l 166 1013 l 166 0 "},"¤":{x_min:40.09375,x_max:728.796875,ha:825,o:"m 728 304 l 649 224 l 512 363 q 383 331 458 331 q 256 363 310 331 l 119 224 l 40 304 l 177 441 q 150 553 150 493 q 184 673 150 621 l 40 818 l 119 898 l 267 749 q 321 766 291 759 q 384 773 351 773 q 447 766 417 773 q 501 749 477 759 l 649 898 l 728 818 l 585 675 q 612 618 604 648 q 621 553 621 587 q 591 441 621 491 l 728 304 m 384 682 q 280 643 318 682 q 243 551 243 604 q 279 461 243 499 q 383 423 316 423 q 487 461 449 423 q 525 553 525 500 q 490 641 525 605 q 384 682 451 682 "},"κ":{x_min:0,x_max:632.328125,ha:679,o:"m 632 0 l 482 0 l 225 384 l 124 288 l 124 0 l 0 0 l 0 738 l 124 738 l 124 446 l 433 738 l 596 738 l 312 466 l 632 0 "},p:{x_min:0,x_max:685,ha:786,o:"m 685 364 q 598 96 685 205 q 350 -23 504 -23 q 121 89 205 -23 l 121 -278 l 0 -278 l 0 738 l 121 738 l 121 633 q 220 726 159 691 q 351 761 280 761 q 598 636 504 761 q 685 364 685 522 m 557 371 q 501 560 557 481 q 330 651 437 651 q 162 559 223 651 q 108 366 108 479 q 162 177 108 254 q 333 87 224 87 q 502 178 441 87 q 557 371 557 258 "},"‡":{x_min:0,x_max:777,ha:835,o:"m 458 238 l 458 0 l 319 0 l 319 238 l 0 238 l 0 360 l 319 360 l 319 681 l 0 683 l 0 804 l 319 804 l 319 1015 l 458 1013 l 458 804 l 777 804 l 777 683 l 458 683 l 458 360 l 777 360 l 777 238 l 458 238 "},"ψ":{x_min:0,x_max:808,ha:907,o:"m 465 -278 l 341 -278 l 341 -15 q 87 102 180 -15 q 0 378 0 210 l 0 739 l 133 739 l 133 379 q 182 195 133 275 q 341 98 242 98 l 341 922 l 465 922 l 465 98 q 623 195 563 98 q 675 382 675 278 l 675 742 l 808 742 l 808 381 q 720 104 808 213 q 466 -13 627 -13 l 465 -278 "},"η":{x_min:0.78125,x_max:697,ha:810,o:"m 697 -278 l 572 -278 l 572 454 q 540 587 572 536 q 425 650 501 650 q 271 579 337 650 q 206 420 206 509 l 206 0 l 81 0 l 81 489 q 73 588 81 562 q 0 644 56 644 l 0 741 q 68 755 38 755 q 158 720 124 755 q 200 630 193 686 q 297 726 234 692 q 434 761 359 761 q 620 692 544 761 q 697 516 697 624 l 697 -278 "}};var cssFontWeight="normal";var ascender=1189;var underlinePosition=-100;var cssFontStyle="normal";var boundingBox={yMin:-334,xMin:-111,yMax:1189,xMax:1672};var resolution=1000;var original_font_information={postscript_name:"Helvetiker-Regular",version_string:"Version 1.00 2004 initial release",vendor_url:"http://www.magenta.gr/",full_font_name:"Helvetiker",font_family_name:"Helvetiker",copyright:"Copyright (c) Μagenta ltd, 2004",description:"",trademark:"",designer:"",designer_url:"",unique_font_identifier:"Μagenta ltd:Helvetiker:22-10-104",license_url:"http://www.ellak.gr/fonts/MgOpen/license.html",license_description:"Copyright (c) 2004 by MAGENTA Ltd. All Rights Reserved.\r\n\r\nPermission is hereby granted, free of charge, to any person obtaining a copy of the fonts accompanying this license (\"Fonts\") and associated documentation files (the \"Font Software\"), to reproduce and distribute the Font Software, including without limitation the rights to use, copy, merge, publish, distribute, and/or sell copies of the Font Software, and to permit persons to whom the Font Software is furnished to do so, subject to the following conditions: \r\n\r\nThe above copyright and this permission notice shall be included in all copies of one or more of the Font Software typefaces.\r\n\r\nThe Font Software may be modified, altered, or added to, and in particular the designs of glyphs or characters in the Fonts may be modified and additional glyphs or characters may be added to the Fonts, only if the fonts are renamed to names not containing the word \"MgOpen\", or if the modifications are accepted for inclusion in the Font Software itself by the each appointed Administrator.\r\n\r\nThis License becomes null and void to the extent applicable to Fonts or Font Software that has been modified and is distributed under the \"MgOpen\" name.\r\n\r\nThe Font Software may be sold as part of a larger software package but no copy of one or more of the Font Software typefaces may be sold by itself. \r\n\r\nTHE FONT SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT OF COPYRIGHT, PATENT, TRADEMARK, OR OTHER RIGHT. IN NO EVENT SHALL MAGENTA OR PERSONS OR BODIES IN CHARGE OF ADMINISTRATION AND MAINTENANCE OF THE FONT SOFTWARE BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, INCLUDING ANY GENERAL, SPECIAL, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL DAMAGES, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF THE USE OR INABILITY TO USE THE FONT SOFTWARE OR FROM OTHER DEALINGS IN THE FONT SOFTWARE.",manufacturer_name:"Μagenta ltd",font_sub_family_name:"Regular"};var descender=-334;var familyName="Helvetiker";var lineHeight=1522;var underlineThickness=50;var defaultTypeFace = {glyphs:glyphs,cssFontWeight:cssFontWeight,ascender:ascender,underlinePosition:underlinePosition,cssFontStyle:cssFontStyle,boundingBox:boundingBox,resolution:resolution,original_font_information:original_font_information,descender:descender,familyName:familyName,lineHeight:lineHeight,underlineThickness:underlineThickness};

var THREE$3 = _objectSpread2(_objectSpread2({}, window.THREE ? window.THREE // Prefer consumption from global THREE, if exists
: {
  BoxGeometry: BoxGeometry,
  CircleGeometry: CircleGeometry,
  DoubleSide: DoubleSide,
  Group: Group,
  Mesh: Mesh,
  MeshLambertMaterial: MeshLambertMaterial,
  TextGeometry: TextGeometry,
  Vector3: Vector3
}), {}, {
  Font: Font,
  TextGeometry: TextGeometry
});

//

var LabelsLayerKapsule = Kapsule({
  props: {
    labelsData: {
      "default": []
    },
    labelLat: {
      "default": 'lat'
    },
    labelLng: {
      "default": 'lng'
    },
    labelAltitude: {
      "default": 0
    },
    // in units of globe radius
    labelText: {
      "default": 'text'
    },
    labelSize: {
      "default": 0.5
    },
    // text height in deg
    labelTypeFace: {
      "default": defaultTypeFace,
      onChange: function onChange(tf, state) {
        state.font = new THREE$3.Font(tf);
      }
    },
    labelColor: {
      "default": function _default() {
        return 'lightgrey';
      }
    },
    labelRotation: {
      "default": 0
    },
    // clockwise degrees, relative to the latitute parallel plane
    labelResolution: {
      "default": 3
    },
    // how many segments in the text's curves
    labelIncludeDot: {
      "default": true
    },
    labelDotRadius: {
      "default": 0.1
    },
    // in deg
    labelDotOrientation: {
      "default": function _default() {
        return 'bottom';
      }
    },
    // right, top, bottom
    labelsTransitionDuration: {
      "default": 1000,
      triggerUpdate: false
    } // ms
  },
  init: function init(threeObj, state, _ref) {
    var tweenGroup = _ref.tweenGroup;
    // Clear the scene
    emptyObject(threeObj);

    // Main three object to manipulate
    state.scene = threeObj;
    state.tweenGroup = tweenGroup;
    var circleGeometry = new THREE$3.CircleGeometry(1, 32);
    state.dataMapper = new ThreeDigest(threeObj, {
      objBindAttr: '__threeObjLabel'
    }).onCreateObj(function () {
      var material = new THREE$3.MeshLambertMaterial();
      material.side = DoubleSide;
      var obj = new THREE$3.Group(); // container

      obj.add(new THREE$3.Mesh(circleGeometry, material)); // dot
      var textObj = new THREE$3.Mesh(undefined, material);
      obj.add(textObj); // text

      // text invisible bounding box (raycaster trap)
      var bbObj = new THREE$3.Mesh();
      bbObj.visible = false;
      textObj.add(bbObj);
      obj.__globeObjType = 'label'; // Add object type

      return obj;
    });
  },
  update: function update(state) {
    // Data accessors
    var latAccessor = accessorFn(state.labelLat);
    var lngAccessor = accessorFn(state.labelLng);
    var altitudeAccessor = accessorFn(state.labelAltitude);
    var textAccessor = accessorFn(state.labelText);
    var sizeAccessor = accessorFn(state.labelSize);
    var rotationAccessor = accessorFn(state.labelRotation);
    var colorAccessor = accessorFn(state.labelColor);
    var includeDotAccessor = accessorFn(state.labelIncludeDot);
    var dotRadiusAccessor = accessorFn(state.labelDotRadius);
    var dotOrientationAccessor = accessorFn(state.labelDotOrientation);
    var orientations = new Set(['right', 'top', 'bottom']);
    var pxPerDeg = 2 * Math.PI * GLOBE_RADIUS / 360;
    state.dataMapper.onUpdateObj(function (obj, d) {
      var _obj$children = _slicedToArray(obj.children, 2),
        dotObj = _obj$children[0],
        textObj = _obj$children[1];
      var _textObj$children = _slicedToArray(textObj.children, 1),
        bbObj = _textObj$children[0];

      // update color
      var color = colorAccessor(d);
      var opacity = colorAlpha(color);
      textObj.material.color.set(colorStr2Hex(color));
      textObj.material.transparent = opacity < 1;
      textObj.material.opacity = opacity;

      // update dot
      var includeDot = includeDotAccessor(d);
      var dotOrient = dotOrientationAccessor(d);
      !includeDot || !orientations.has(dotOrient) && (dotOrient = 'bottom');

      // size dot
      var dotR = includeDot ? +dotRadiusAccessor(d) * pxPerDeg : 1e-12;
      dotObj.scale.x = dotObj.scale.y = dotR;

      // create text geometry
      var textHeight = +sizeAccessor(d) * pxPerDeg;
      textObj.geometry && textObj.geometry.dispose();
      textObj.geometry = new THREE$3.TextGeometry(textAccessor(d), {
        font: state.font,
        size: textHeight,
        depth: 0,
        height: 0,
        curveSegments: state.labelResolution
      });

      // update text convex hull/bounding box
      bbObj.geometry && bbObj.geometry.dispose();
      textObj.geometry.computeBoundingBox();
      bbObj.geometry = _construct(THREE$3.BoxGeometry, _toConsumableArray(new THREE$3.Vector3().subVectors(textObj.geometry.boundingBox.max, textObj.geometry.boundingBox.min).toArray()));

      // center text (otherwise anchor is on bottom-left)
      dotOrient !== 'right' && textObj.geometry.center();
      if (includeDot) {
        // translate text
        var padding = dotR + textHeight / 2;
        dotOrient === 'right' && (textObj.position.x = padding);
        textObj.position.y = {
          right: -textHeight / 2,
          // center vertically
          top: padding + textHeight / 2,
          bottom: -padding - textHeight / 2
        }[dotOrient];
      }

      // animations
      var applyPosition = function applyPosition(td) {
        var _obj$__currentTargetD = obj.__currentTargetD = td,
          lat = _obj$__currentTargetD.lat,
          lng = _obj$__currentTargetD.lng,
          alt = _obj$__currentTargetD.alt,
          rot = _obj$__currentTargetD.rot,
          scale = _obj$__currentTargetD.scale;

        // position center
        Object.assign(obj.position, polar2Cartesian(lat, lng, alt));

        // rotate
        obj.lookAt(state.scene.localToWorld(new THREE$3.Vector3(0, 0, 0))); // face globe (local) center
        obj.rotateY(Math.PI); // face outwards

        // rotate clockwise relative to lat parallel
        obj.rotateZ(-rot * Math.PI / 180);

        // scale it
        obj.scale.x = obj.scale.y = obj.scale.z = scale;
      };
      var targetD = {
        lat: +latAccessor(d),
        lng: +lngAccessor(d),
        alt: +altitudeAccessor(d),
        rot: +rotationAccessor(d),
        scale: 1
      };
      var currentTargetD = obj.__currentTargetD || Object.assign({}, targetD, {
        scale: 1e-12
      });
      if (Object.keys(targetD).some(function (k) {
        return currentTargetD[k] !== targetD[k];
      })) {
        if (!state.labelsTransitionDuration || state.labelsTransitionDuration < 0) {
          // set final position
          applyPosition(targetD);
        } else {
          // animate
          state.tweenGroup.add(new Tween(currentTargetD).to(targetD, state.labelsTransitionDuration).easing(Easing.Quadratic.InOut).onUpdate(applyPosition).start());
        }
      }
    }).digest(state.labelsData);
  }
});

var THREE$2 = _objectSpread2(_objectSpread2({}, window.THREE ? window.THREE // Prefer consumption from global THREE, if exists
: {}), {}, {
  CSS2DObject: CSS2DObject
});

//

var HtmlElementsLayerKapsule = Kapsule({
  props: {
    htmlElementsData: {
      "default": []
    },
    htmlLat: {
      "default": 'lat'
    },
    htmlLng: {
      "default": 'lng'
    },
    htmlAltitude: {
      "default": 0
    },
    // in units of globe radius
    htmlElement: {},
    htmlElementVisibilityModifier: {
      triggerUpdate: false
    },
    htmlTransitionDuration: {
      "default": 1000,
      triggerUpdate: false
    },
    // ms
    isBehindGlobe: {
      onChange: function onChange() {
        this.updateObjVisibility();
      },
      triggerUpdate: false
    }
  },
  methods: {
    updateObjVisibility: function updateObjVisibility(state, obj) {
      if (!state.dataMapper) return;
      // default to all if no obj specified
      var objs = obj ? [obj] : state.dataMapper.entries().map(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
          o = _ref2[1];
        return o;
      }).filter(function (d) {
        return d;
      });
      // Hide elements on the far side of the globe
      objs.forEach(function (obj) {
        var isVisible = !state.isBehindGlobe || !state.isBehindGlobe(obj.position);
        if (state.htmlElementVisibilityModifier) {
          obj.visible = true;
          state.htmlElementVisibilityModifier(obj.element, isVisible);
        } else {
          obj.visible = isVisible;
        }
      });
    }
  },
  init: function init(threeObj, state, _ref3) {
    var tweenGroup = _ref3.tweenGroup;
    // Clear the scene
    emptyObject(threeObj);

    // Main three object to manipulate
    state.scene = threeObj;
    state.tweenGroup = tweenGroup;
    state.dataMapper = new ThreeDigest(threeObj, {
      objBindAttr: '__threeObjHtml'
    }).onCreateObj(function (d) {
      var elem = accessorFn(state.htmlElement)(d);
      var obj = new THREE$2.CSS2DObject(elem);
      obj.__globeObjType = 'html'; // Add object type

      return obj;
    });
  },
  update: function update(state, changedProps) {
    var _this = this;
    // Data accessors
    var latAccessor = accessorFn(state.htmlLat);
    var lngAccessor = accessorFn(state.htmlLng);
    var altitudeAccessor = accessorFn(state.htmlAltitude);

    // objs need to be recreated if this prop has changed
    changedProps.hasOwnProperty('htmlElement') && state.dataMapper.clear();
    state.dataMapper.onUpdateObj(function (obj, d) {
      var applyUpdate = function applyUpdate(td) {
        var _obj$__currentTargetD = obj.__currentTargetD = td,
          alt = _obj$__currentTargetD.alt,
          lat = _obj$__currentTargetD.lat,
          lng = _obj$__currentTargetD.lng;
        Object.assign(obj.position, polar2Cartesian(lat, lng, alt));
        _this.updateObjVisibility(obj);
      };
      var targetD = {
        lat: +latAccessor(d),
        lng: +lngAccessor(d),
        alt: +altitudeAccessor(d)
      };
      if (!state.htmlTransitionDuration || state.htmlTransitionDuration < 0 || !obj.__currentTargetD) {
        // set final position
        applyUpdate(targetD);
      } else {
        // animate
        state.tweenGroup.add(new Tween(obj.__currentTargetD).to(targetD, state.htmlTransitionDuration).easing(Easing.Quadratic.InOut).onUpdate(applyUpdate).start());
      }
    }).digest(state.htmlElementsData);
  }
});

var THREE$1 = window.THREE ? window.THREE // Prefer consumption from global THREE, if exists
: {
  Group: Group,
  Mesh: Mesh,
  MeshLambertMaterial: MeshLambertMaterial,
  SphereGeometry: SphereGeometry
};

//

var ObjectsLayerKapsule = Kapsule({
  props: {
    objectsData: {
      "default": []
    },
    objectLat: {
      "default": 'lat'
    },
    objectLng: {
      "default": 'lng'
    },
    objectAltitude: {
      "default": 0.01
    },
    // in units of globe radius
    objectFacesSurface: {
      "default": true
    },
    objectRotation: {},
    objectThreeObject: {
      "default": new THREE$1.Mesh(
      // default object: yellow sphere
      new THREE$1.SphereGeometry(1, 16, 8), new THREE$1.MeshLambertMaterial({
        color: '#ffffaa',
        transparent: true,
        opacity: 0.7
      }))
    }
  },
  init: function init(threeObj, state) {
    // Clear the scene
    emptyObject(threeObj);

    // Main three object to manipulate
    state.scene = threeObj;
    state.dataMapper = new ThreeDigest(threeObj, {
      objBindAttr: '__threeObjObject'
    }).onCreateObj(function (d) {
      var obj = accessorFn(state.objectThreeObject)(d);
      if (state.objectThreeObject === obj) {
        // clone object if it's a shared object among all points
        obj = obj.clone();
      }
      var g = new THREE$1.Group();
      g.add(obj);
      g.__globeObjType = 'object'; // Add object type

      return g;
    });
  },
  update: function update(state, changedProps) {
    // Data accessors
    var latAccessor = accessorFn(state.objectLat);
    var lngAccessor = accessorFn(state.objectLng);
    var altitudeAccessor = accessorFn(state.objectAltitude);
    var parallelAccessor = accessorFn(state.objectFacesSurface);
    var rotationAccessor = accessorFn(state.objectRotation);

    // objs need to be recreated if this prop has changed
    changedProps.hasOwnProperty('objectThreeObject') && state.dataMapper.clear();
    state.dataMapper.onUpdateObj(function (objG, d) {
      var lat = +latAccessor(d);
      var lng = +lngAccessor(d);
      var alt = +altitudeAccessor(d);
      Object.assign(objG.position, polar2Cartesian(lat, lng, alt));
      parallelAccessor(d) ? objG.setRotationFromEuler(new Euler(deg2Rad$1(-lat), deg2Rad$1(lng), 0, 'YXZ')) : objG.rotation.set(0, 0, 0);
      var obj = objG.children[0];
      var rot = rotationAccessor(d);
      rot && obj.setRotationFromEuler(new Euler(deg2Rad$1(rot.x || 0), deg2Rad$1(rot.y || 0), deg2Rad$1(rot.z || 0)));
    }).digest(state.objectsData);
  }
});

//

var CustomLayerKapsule = Kapsule({
  props: {
    customLayerData: {
      "default": []
    },
    customThreeObject: {},
    customThreeObjectUpdate: {
      triggerUpdate: false
    }
  },
  init: function init(threeObj, state) {
    // Clear the scene
    emptyObject(threeObj);

    // Main three object to manipulate
    state.scene = threeObj;
    state.dataMapper = new ThreeDigest(threeObj, {
      objBindAttr: '__threeObjCustom'
    }).onCreateObj(function (d) {
      var obj = accessorFn(state.customThreeObject)(d, GLOBE_RADIUS);
      if (obj) {
        if (state.customThreeObject === obj) {
          // clone object if it's a shared object among all points
          obj = obj.clone();
        }
        obj.__globeObjType = 'custom'; // Add object type
      }
      return obj;
    });
  },
  update: function update(state, changedProps) {
    if (!state.customThreeObjectUpdate) {
      emptyObject(state.scene);
    } // Clear the existing objects to create all new, if there's no update method (brute-force)

    var customObjectUpdateAccessor = accessorFn(state.customThreeObjectUpdate);

    // objs need to be recreated if this prop has changed
    changedProps.hasOwnProperty('customThreeObject') && state.dataMapper.clear();
    state.dataMapper.onUpdateObj(function (obj, d) {
      return customObjectUpdateAccessor(obj, d, GLOBE_RADIUS);
    }).digest(state.customLayerData);
  }
});

var THREE = window.THREE ? window.THREE // Prefer consumption from global THREE, if exists
: {
  Camera: Camera,
  Group: Group,
  Vector2: Vector2,
  Vector3: Vector3
};

//

var layers = ['globeLayer', 'pointsLayer', 'arcsLayer', 'hexBinLayer', 'heatmapsLayer', 'polygonsLayer', 'hexedPolygonsLayer', 'pathsLayer', 'tilesLayer', 'particlesLayer', 'ringsLayer', 'labelsLayer', 'htmlElementsLayer', 'objectsLayer', 'customLayer'];

// Expose config from layers
var bindGlobeLayer = linkKapsule('globeLayer', GlobeLayerKapsule);
var linkedGlobeLayerProps = Object.assign.apply(Object, _toConsumableArray(['globeImageUrl', 'bumpImageUrl', 'globeTileEngineUrl', 'globeTileEngineMaxLevel', 'showGlobe', 'showGraticules', 'showAtmosphere', 'atmosphereColor', 'atmosphereAltitude'].map(function (p) {
  return _defineProperty({}, p, bindGlobeLayer.linkProp(p));
})));
var linkedGlobeLayerMethods = Object.assign.apply(Object, _toConsumableArray(['globeMaterial'].map(function (p) {
  return _defineProperty({}, p, bindGlobeLayer.linkMethod(p));
})));
var bindPointsLayer = linkKapsule('pointsLayer', PointsLayerKapsule);
var linkedPointsLayerProps = Object.assign.apply(Object, _toConsumableArray(['pointsData', 'pointLat', 'pointLng', 'pointColor', 'pointAltitude', 'pointRadius', 'pointResolution', 'pointsMerge', 'pointsTransitionDuration'].map(function (p) {
  return _defineProperty({}, p, bindPointsLayer.linkProp(p));
})));
var bindArcsLayer = linkKapsule('arcsLayer', ArcsLayerKapsule);
var linkedArcsLayerProps = Object.assign.apply(Object, _toConsumableArray(['arcsData', 'arcStartLat', 'arcStartLng', 'arcEndLat', 'arcEndLng', 'arcColor', 'arcAltitude', 'arcAltitudeAutoScale', 'arcStroke', 'arcCurveResolution', 'arcCircularResolution', 'arcDashLength', 'arcDashGap', 'arcDashInitialGap', 'arcDashAnimateTime', 'arcsTransitionDuration'].map(function (p) {
  return _defineProperty({}, p, bindArcsLayer.linkProp(p));
})));
var bindHexBinLayer = linkKapsule('hexBinLayer', HexBinLayerKapsule);
var linkedHexBinLayerProps = Object.assign.apply(Object, _toConsumableArray(['hexBinPointsData', 'hexBinPointLat', 'hexBinPointLng', 'hexBinPointWeight', 'hexBinResolution', 'hexMargin', 'hexTopCurvatureResolution', 'hexTopColor', 'hexSideColor', 'hexAltitude', 'hexBinMerge', 'hexTransitionDuration'].map(function (p) {
  return _defineProperty({}, p, bindHexBinLayer.linkProp(p));
})));
var bindHeatmapsLayer = linkKapsule('heatmapsLayer', HeatmapsLayerKapsule);
var linkedHeatmapsLayerProps = Object.assign.apply(Object, _toConsumableArray(['heatmapsData', 'heatmapPoints', 'heatmapPointLat', 'heatmapPointLng', 'heatmapPointWeight', 'heatmapBandwidth', 'heatmapColorFn', 'heatmapColorSaturation', 'heatmapBaseAltitude', 'heatmapTopAltitude', 'heatmapsTransitionDuration'].map(function (p) {
  return _defineProperty({}, p, bindHeatmapsLayer.linkProp(p));
})));
var bindHexedPolygonsLayer = linkKapsule('hexedPolygonsLayer', HexedPolygonsLayerKapsule);
var linkedHexedPolygonsLayerProps = Object.assign.apply(Object, _toConsumableArray(['hexPolygonsData', 'hexPolygonGeoJsonGeometry', 'hexPolygonColor', 'hexPolygonAltitude', 'hexPolygonResolution', 'hexPolygonMargin', 'hexPolygonUseDots', 'hexPolygonCurvatureResolution', 'hexPolygonDotResolution', 'hexPolygonsTransitionDuration'].map(function (p) {
  return _defineProperty({}, p, bindHexedPolygonsLayer.linkProp(p));
})));
var bindPolygonsLayer = linkKapsule('polygonsLayer', PolygonsLayerKapsule);
var linkedPolygonsLayerProps = Object.assign.apply(Object, _toConsumableArray(['polygonsData', 'polygonGeoJsonGeometry', 'polygonCapColor', 'polygonCapMaterial', 'polygonSideColor', 'polygonSideMaterial', 'polygonStrokeColor', 'polygonAltitude', 'polygonCapCurvatureResolution', 'polygonsTransitionDuration'].map(function (p) {
  return _defineProperty({}, p, bindPolygonsLayer.linkProp(p));
})));
var bindPathsLayer = linkKapsule('pathsLayer', PathsLayerKapsule);
var linkedPathsLayerProps = Object.assign.apply(Object, _toConsumableArray(['pathsData', 'pathPoints', 'pathPointLat', 'pathPointLng', 'pathPointAlt', 'pathResolution', 'pathColor', 'pathStroke', 'pathDashLength', 'pathDashGap', 'pathDashInitialGap', 'pathDashAnimateTime', 'pathTransitionDuration'].map(function (p) {
  return _defineProperty({}, p, bindPathsLayer.linkProp(p));
})));
var bindTilesLayer = linkKapsule('tilesLayer', TilesLayerKapsule);
var linkedTilesLayerProps = Object.assign.apply(Object, _toConsumableArray(['tilesData', 'tileLat', 'tileLng', 'tileAltitude', 'tileWidth', 'tileHeight', 'tileUseGlobeProjection', 'tileMaterial', 'tileCurvatureResolution', 'tilesTransitionDuration'].map(function (p) {
  return _defineProperty({}, p, bindTilesLayer.linkProp(p));
})));
var bindParticlesLayer = linkKapsule('particlesLayer', ParticlesLayerKapsule);
var linkedParticlesLayerProps = Object.assign.apply(Object, _toConsumableArray(['particlesData', 'particlesList', 'particleLat', 'particleLng', 'particleAltitude', 'particlesSize', 'particlesSizeAttenuation', 'particlesColor', 'particlesTexture'].map(function (p) {
  return _defineProperty({}, p, bindParticlesLayer.linkProp(p));
})));
var bindRingsLayer = linkKapsule('ringsLayer', RingsLayerKapsule);
var linkedRingsLayerProps = Object.assign.apply(Object, _toConsumableArray(['ringsData', 'ringLat', 'ringLng', 'ringAltitude', 'ringColor', 'ringResolution', 'ringMaxRadius', 'ringPropagationSpeed', 'ringRepeatPeriod'].map(function (p) {
  return _defineProperty({}, p, bindRingsLayer.linkProp(p));
})));
var bindLabelsLayer = linkKapsule('labelsLayer', LabelsLayerKapsule);
var linkedLabelsLayerProps = Object.assign.apply(Object, _toConsumableArray(['labelsData', 'labelLat', 'labelLng', 'labelAltitude', 'labelRotation', 'labelText', 'labelSize', 'labelTypeFace', 'labelColor', 'labelResolution', 'labelIncludeDot', 'labelDotRadius', 'labelDotOrientation', 'labelsTransitionDuration'].map(function (p) {
  return _defineProperty({}, p, bindLabelsLayer.linkProp(p));
})));
var bindHtmlElementsLayer = linkKapsule('htmlElementsLayer', HtmlElementsLayerKapsule);
var linkedHtmlElementsLayerProps = Object.assign.apply(Object, _toConsumableArray(['htmlElementsData', 'htmlLat', 'htmlLng', 'htmlAltitude', 'htmlElement', 'htmlElementVisibilityModifier', 'htmlTransitionDuration'].map(function (p) {
  return _defineProperty({}, p, bindHtmlElementsLayer.linkProp(p));
})));
var bindObjectsLayer = linkKapsule('objectsLayer', ObjectsLayerKapsule);
var linkedObjectsLayerProps = Object.assign.apply(Object, _toConsumableArray(['objectsData', 'objectLat', 'objectLng', 'objectAltitude', 'objectRotation', 'objectFacesSurface', 'objectThreeObject'].map(function (p) {
  return _defineProperty({}, p, bindObjectsLayer.linkProp(p));
})));
var bindCustomLayer = linkKapsule('customLayer', CustomLayerKapsule);
var linkedCustomLayerProps = Object.assign.apply(Object, _toConsumableArray(['customLayerData', 'customThreeObject', 'customThreeObjectUpdate'].map(function (p) {
  return _defineProperty({}, p, bindCustomLayer.linkProp(p));
})));

//

var Globe = Kapsule({
  props: _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({
    onGlobeReady: {
      triggerUpdate: false
    },
    rendererSize: {
      "default": new THREE.Vector2(window.innerWidth, window.innerHeight),
      onChange: function onChange(rendererSize, state) {
        state.pathsLayer.rendererSize(rendererSize);
      },
      triggerUpdate: false
    }
  }, linkedGlobeLayerProps), linkedPointsLayerProps), linkedArcsLayerProps), linkedHexBinLayerProps), linkedHeatmapsLayerProps), linkedPolygonsLayerProps), linkedHexedPolygonsLayerProps), linkedPathsLayerProps), linkedTilesLayerProps), linkedParticlesLayerProps), linkedRingsLayerProps), linkedLabelsLayerProps), linkedHtmlElementsLayerProps), linkedObjectsLayerProps), linkedCustomLayerProps),
  methods: _objectSpread2({
    getGlobeRadius: getGlobeRadius,
    getCoords: function getCoords(state) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      return polar2Cartesian.apply(undefined, args);
    },
    toGeoCoords: function toGeoCoords(state) {
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }
      return cartesian2Polar.apply(undefined, args);
    },
    setPointOfView: function setPointOfView(state, camera) {
      var globalPov = camera instanceof THREE.Camera ? camera.position : camera; // for backwards compatibility
      var globeRadius = getGlobeRadius();
      var isBehindGlobe = undefined;
      if (state.scene && globalPov) {
        var pov, povDist, povEdgeDist, povEdgeAngle;
        isBehindGlobe = function isBehindGlobe(pos) {
          pov === undefined && (pov = globalPov.clone().applyMatrix4(state.scene.matrixWorld.clone().invert())); // camera position in local space
          povDist === undefined && (povDist = pov.length());

          // check if it's behind plane of globe's visible area
          // maxSurfacePosAngle === undefined && (maxSurfacePosAngle = Math.acos(globeRadius / povDist));
          // return pov.angleTo(pos) > maxSurfacePosAngle;

          // more sophisticated method that checks also pos altitude
          povEdgeDist === undefined && (povEdgeDist = Math.sqrt(Math.pow(povDist, 2) - Math.pow(globeRadius, 2)));
          povEdgeAngle === undefined && (povEdgeAngle = Math.acos(povEdgeDist / povDist));
          var povPosDist = pov.distanceTo(pos);
          if (povPosDist < povEdgeDist) return false; // pos is closer than visible edge of globe

          var posDist = pos.length();
          var povPosAngle = Math.acos((Math.pow(povDist, 2) + Math.pow(povPosDist, 2) - Math.pow(posDist, 2)) / (2 * povDist * povPosDist)); // triangle solver
          return povPosAngle < povEdgeAngle; // pos is within globe's visible area cone
        };
      }

      // pass pov-related checker fns for layers that need it
      state.layersThatNeedUpdatePov.forEach(function (l) {
        return l.updatePov(camera);
      });
      state.layersThatNeedBehindGlobeChecker.forEach(function (l) {
        return l.isBehindGlobe(isBehindGlobe);
      });
    },
    pauseAnimation: function pauseAnimation(state) {
      if (state.animationFrameRequestId !== null) {
        cancelAnimationFrame(state.animationFrameRequestId);
        state.animationFrameRequestId = null;
      }
      state.pausableLayers.forEach(function (l) {
        var _l$pauseAnimation;
        return (_l$pauseAnimation = l.pauseAnimation) === null || _l$pauseAnimation === undefined ? undefined : _l$pauseAnimation.call(l);
      });
      return this;
    },
    resumeAnimation: function resumeAnimation(state) {
      if (state.animationFrameRequestId === null) {
        this._animationCycle();
      }
      state.pausableLayers.forEach(function (l) {
        var _l$resumeAnimation;
        return (_l$resumeAnimation = l.resumeAnimation) === null || _l$resumeAnimation === undefined ? undefined : _l$resumeAnimation.call(l);
      });
      return this;
    },
    _animationCycle: function _animationCycle(state) {
      state.animationFrameRequestId = requestAnimationFrame(this._animationCycle);
      state.tweenGroup.update(); // run tween updates
    },
    _destructor: function _destructor(state) {
      this.pauseAnimation();
      state.destructableLayers.forEach(function (l) {
        return l._destructor();
      });
    }
  }, linkedGlobeLayerMethods),
  stateInit: function stateInit() {
    var tweenGroup = new Group$1();
    var initProps = {
      tweenGroup: tweenGroup
    };
    var layers = {
      globeLayer: GlobeLayerKapsule(initProps),
      pointsLayer: PointsLayerKapsule(initProps),
      arcsLayer: ArcsLayerKapsule(initProps),
      hexBinLayer: HexBinLayerKapsule(initProps),
      heatmapsLayer: HeatmapsLayerKapsule(initProps),
      polygonsLayer: PolygonsLayerKapsule(initProps),
      hexedPolygonsLayer: HexedPolygonsLayerKapsule(initProps),
      pathsLayer: PathsLayerKapsule(initProps),
      tilesLayer: TilesLayerKapsule(initProps),
      particlesLayer: ParticlesLayerKapsule(initProps),
      ringsLayer: RingsLayerKapsule(initProps),
      labelsLayer: LabelsLayerKapsule(initProps),
      htmlElementsLayer: HtmlElementsLayerKapsule(initProps),
      objectsLayer: ObjectsLayerKapsule(initProps),
      customLayer: CustomLayerKapsule(initProps)
    };
    return _objectSpread2(_objectSpread2({
      tweenGroup: tweenGroup
    }, layers), {}, {
      layersThatNeedUpdatePov: Object.values(layers).filter(function (l) {
        return l.hasOwnProperty('updatePov');
      }),
      layersThatNeedBehindGlobeChecker: Object.values(layers).filter(function (l) {
        return l.hasOwnProperty('isBehindGlobe');
      }),
      destructableLayers: Object.values(layers).filter(function (l) {
        return l.hasOwnProperty('_destructor');
      }),
      pausableLayers: Object.values(layers).filter(function (l) {
        return l.hasOwnProperty('pauseAnimation');
      })
    });
  },
  init: function init(threeObj, state, _ref17) {
    var _ref17$animateIn = _ref17.animateIn,
      animateIn = _ref17$animateIn === undefined ? true : _ref17$animateIn,
      _ref17$waitForGlobeRe = _ref17.waitForGlobeReady,
      waitForGlobeReady = _ref17$waitForGlobeRe === undefined ? true : _ref17$waitForGlobeRe;
    // Clear the scene
    emptyObject(threeObj);

    // Main three object to manipulate
    state.scene = threeObj;
    state.scene.visible = false; // hide scene before globe initialization

    // Add all layers groups
    layers.forEach(function (layer) {
      var g = new THREE.Group();
      state.scene.add(g);
      state[layer](g);
    });
    var initGlobe = function initGlobe() {
      if (animateIn) {
        // Animate build-in just once
        state.scene.scale.set(1e-6, 1e-6, 1e-6);
        state.tweenGroup.add(new Tween({
          k: 1e-6
        }).to({
          k: 1
        }, 600).easing(Easing.Quadratic.Out).onUpdate(function (_ref18) {
          var k = _ref18.k;
          return state.scene.scale.set(k, k, k);
        }).start());
        var rotAxis = new THREE.Vector3(0, 1, 0);
        state.tweenGroup.add(new Tween({
          rot: Math.PI * 2
        }).to({
          rot: 0
        }, 1200).easing(Easing.Quintic.Out).onUpdate(function (_ref19) {
          var rot = _ref19.rot;
          return state.scene.setRotationFromAxisAngle(rotAxis, rot);
        }).start());
      }
      state.scene.visible = true;
      state.onGlobeReady && state.onGlobeReady();
    };
    waitForGlobeReady ? state.globeLayer.onReady(initGlobe) : initGlobe();

    // Kick-off animation cycle
    this._animationCycle();
  },
  update: function update(state) {}
});

function fromKapsule (kapsule) {
  var baseClass = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Object;
  var initKapsuleWithSelf = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var Globe = /*#__PURE__*/function (_baseClass) {
    function Globe() {
      var _this;
      _classCallCheck(this, Globe);
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _callSuper(this, Globe, [].concat(args));
      _this.__kapsuleInstance = _construct(kapsule, [].concat(_toConsumableArray(initKapsuleWithSelf ? [_this] : []), args));
      return _this;
    }
    _inherits(Globe, _baseClass);
    return _createClass(Globe);
  }(baseClass); // attach kapsule props/methods to class prototype
  Object.keys(kapsule()).forEach(function (m) {
    return Globe.prototype[m] = function () {
      var _this$__kapsuleInstan;
      var returnVal = (_this$__kapsuleInstan = this.__kapsuleInstance)[m].apply(_this$__kapsuleInstan, arguments);
      return returnVal === this.__kapsuleInstance ? this // chain based on this class, not the kapsule obj
      : returnVal;
    };
  });
  return Globe;
}

var three = window.THREE ? window.THREE : {
  Group: Group
}; // Prefer consumption from global THREE, if exists
var threeGlobe = fromKapsule(Globe, three.Group, true);

export { threeGlobe as default };
