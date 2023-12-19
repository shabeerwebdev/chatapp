/*! For license information please see main.f5cdb162.js.LICENSE.txt */
;(() => {
  var e = {
      142: (e, t) => {
        'use strict'
        var n = 'function' === typeof Symbol && Symbol.for,
          r = n ? Symbol.for('react.element') : 60103,
          o = n ? Symbol.for('react.portal') : 60106,
          a = n ? Symbol.for('react.fragment') : 60107,
          i = n ? Symbol.for('react.strict_mode') : 60108,
          l = n ? Symbol.for('react.profiler') : 60114,
          s = n ? Symbol.for('react.provider') : 60109,
          u = n ? Symbol.for('react.context') : 60110,
          c = n ? Symbol.for('react.async_mode') : 60111,
          f = n ? Symbol.for('react.concurrent_mode') : 60111,
          d = n ? Symbol.for('react.forward_ref') : 60112,
          p = n ? Symbol.for('react.suspense') : 60113,
          h = n ? Symbol.for('react.suspense_list') : 60120,
          m = n ? Symbol.for('react.memo') : 60115,
          v = n ? Symbol.for('react.lazy') : 60116,
          g = n ? Symbol.for('react.block') : 60121,
          y = n ? Symbol.for('react.fundamental') : 60117,
          b = n ? Symbol.for('react.responder') : 60118,
          w = n ? Symbol.for('react.scope') : 60119
        function k(e) {
          if ('object' === typeof e && null !== e) {
            var t = e.$$typeof
            switch (t) {
              case r:
                switch ((e = e.type)) {
                  case c:
                  case f:
                  case a:
                  case l:
                  case i:
                  case p:
                    return e
                  default:
                    switch ((e = e && e.$$typeof)) {
                      case u:
                      case d:
                      case v:
                      case m:
                      case s:
                        return e
                      default:
                        return t
                    }
                }
              case o:
                return t
            }
          }
        }
        function S(e) {
          return k(e) === f
        }
        t.isForwardRef = function (e) {
          return k(e) === d
        }
      },
      33: (e, t, n) => {
        'use strict'
        e.exports = n(142)
      },
      630: (e, t, n) => {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 })
        var r = n(618)
        n(7)
        var o = n(791)
        function a(e) {
          return (a =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (e) {
                  return typeof e
                }
              : function (e) {
                  return e &&
                    'function' == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e
                })(e)
        }
        function i(e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function')
        }
        function l(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n]
            ;(r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r)
          }
        }
        function s(e, t, n) {
          return t && l(e.prototype, t), n && l(e, n), e
        }
        function u(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          )
        }
        function c(e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError(
              'Super expression must either be null or a function',
            )
          ;(e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && d(e, t)
        }
        function f(e) {
          return (f = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
              })(e)
        }
        function d(e, t) {
          return (d =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e
            })(e, t)
        }
        function p(e, t) {
          return !t || ('object' != typeof t && 'function' != typeof t)
            ? (function (e) {
                if (void 0 === e)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called",
                  )
                return e
              })(e)
            : t
        }
        var h = (function () {
          function e(t) {
            i(this, e),
              u(this, 'handlers', void 0),
              (this.handlers = t.slice(0))
          }
          return (
            s(e, [
              {
                key: 'addHandlers',
                value: function (t) {
                  for (
                    var n = this.handlers.slice(0), r = t.length, o = 0;
                    o < r;
                    o += 1
                  )
                    n.push(t[o])
                  return new e(n)
                },
              },
              {
                key: 'dispatchEvent',
                value: function (e, t) {
                  var n = this.handlers.length - 1
                  if (t) {
                    for (var r = n; r >= 0; r -= 1)
                      this.handlers[r].called ||
                        ((this.handlers[r].called = !0), this.handlers[r](e))
                    for (var o = n; o >= 0; o -= 1) this.handlers[o].called = !1
                  } else (0, this.handlers[n])(e)
                },
              },
              {
                key: 'hasHandlers',
                value: function () {
                  return this.handlers.length > 0
                },
              },
              {
                key: 'removeHandlers',
                value: function (t) {
                  for (
                    var n = [], r = this.handlers.length, o = 0;
                    o < r;
                    o += 1
                  ) {
                    var a = this.handlers[o]
                    ;-1 === t.indexOf(a) && n.push(a)
                  }
                  return new e(n)
                },
              },
            ]),
            e
          )
        })()
        function m(e) {
          var t = new Map()
          return (
            e.forEach(function (e, n) {
              t.set(n, e)
            }),
            t
          )
        }
        function v(e) {
          return Array.isArray(e) ? e : [e]
        }
        function g(e) {
          return 'document' === e
            ? document
            : 'window' === e
              ? window
              : (function (e) {
                    return (
                      null !== e &&
                      'object' === a(e) &&
                      e.hasOwnProperty('current')
                    )
                  })(e)
                ? e.current || document
                : e || document
        }
        var y = (function () {
          function e(t, n) {
            i(this, e),
              u(this, 'handlerSets', void 0),
              u(this, 'poolName', void 0),
              (this.handlerSets = n),
              (this.poolName = t)
          }
          return (
            s(e, [
              {
                key: 'addHandlers',
                value: function (t, n) {
                  var r = m(this.handlerSets)
                  if (r.has(t)) {
                    var o = r.get(t)
                    r.set(t, o.addHandlers(n))
                  } else r.set(t, new h(n))
                  return new e(this.poolName, r)
                },
              },
              {
                key: 'dispatchEvent',
                value: function (e, t) {
                  var n = this.handlerSets.get(e),
                    r = 'default' === this.poolName
                  n && n.dispatchEvent(t, r)
                },
              },
              {
                key: 'hasHandlers',
                value: function (e) {
                  if (!e) return this.handlerSets.size > 0
                  var t = this.handlerSets.get(e)
                  return !!t && t.hasHandlers()
                },
              },
              {
                key: 'removeHandlers',
                value: function (t, n) {
                  var r = m(this.handlerSets)
                  if (!r.has(t)) return new e(this.poolName, r)
                  var o = r.get(t).removeHandlers(n)
                  return (
                    o.hasHandlers() ? r.set(t, o) : r.delete(t),
                    new e(this.poolName, r)
                  )
                },
              },
            ]),
            e
          )
        })()
        u(y, 'createByType', function (e, t, n) {
          var r = new Map()
          return r.set(t, new h(n)), new y(e, r)
        })
        var b = (function () {
            function e(t) {
              var n = this
              i(this, e),
                u(this, 'handlers', new Map()),
                u(this, 'pools', new Map()),
                u(this, 'target', void 0),
                u(this, 'createEmitter', function (e) {
                  return function (t) {
                    n.pools.forEach(function (n) {
                      n.dispatchEvent(e, t)
                    })
                  }
                }),
                (this.target = t)
            }
            return (
              s(e, [
                {
                  key: 'addHandlers',
                  value: function (e, t, n) {
                    if (this.pools.has(e)) {
                      var r = this.pools.get(e)
                      this.pools.set(e, r.addHandlers(t, n))
                    } else this.pools.set(e, y.createByType(e, t, n))
                    this.handlers.has(t) || this.addTargetHandler(t)
                  },
                },
                {
                  key: 'hasHandlers',
                  value: function () {
                    return this.handlers.size > 0
                  },
                },
                {
                  key: 'removeHandlers',
                  value: function (e, t, n) {
                    if (this.pools.has(e)) {
                      var r = this.pools.get(e).removeHandlers(t, n)
                      r.hasHandlers()
                        ? this.pools.set(e, r)
                        : this.pools.delete(e)
                      var o = !1
                      this.pools.forEach(function (e) {
                        return (o = o || e.hasHandlers(t))
                      }),
                        o || this.removeTargetHandler(t)
                    }
                  },
                },
                {
                  key: 'addTargetHandler',
                  value: function (e) {
                    var t = this.createEmitter(e)
                    this.handlers.set(e, t),
                      this.target.addEventListener(e, t, !0)
                  },
                },
                {
                  key: 'removeTargetHandler',
                  value: function (e) {
                    this.handlers.has(e) &&
                      (this.target.removeEventListener(
                        e,
                        this.handlers.get(e),
                        !0,
                      ),
                      this.handlers.delete(e))
                  },
                },
              ]),
              e
            )
          })(),
          w = new ((function () {
            function e() {
              var t = this
              i(this, e),
                u(this, 'targets', new Map()),
                u(this, 'getTarget', function (e) {
                  var n =
                      !(arguments.length > 1 && void 0 !== arguments[1]) ||
                      arguments[1],
                    r = g(e)
                  if (t.targets.has(r)) return t.targets.get(r)
                  if (!n) return null
                  var o = new b(r)
                  return t.targets.set(r, o), o
                }),
                u(this, 'removeTarget', function (e) {
                  t.targets.delete(g(e))
                })
            }
            return (
              s(e, [
                {
                  key: 'sub',
                  value: function (e, t) {
                    var n =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : {}
                    if (r.canUseDOM) {
                      var o = n.target,
                        a = void 0 === o ? document : o,
                        i = n.pool,
                        l = void 0 === i ? 'default' : i
                      this.getTarget(a).addHandlers(l, e, v(t))
                    }
                  },
                },
                {
                  key: 'unsub',
                  value: function (e, t) {
                    var n =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : {}
                    if (r.canUseDOM) {
                      var o = n.target,
                        a = void 0 === o ? document : o,
                        i = n.pool,
                        l = void 0 === i ? 'default' : i,
                        s = this.getTarget(a, !1)
                      s &&
                        (s.removeHandlers(l, e, v(t)),
                        s.hasHandlers() || this.removeTarget(a))
                    }
                  },
                },
              ]),
              e
            )
          })())(),
          k = (function (e) {
            function t() {
              return i(this, t), p(this, f(t).apply(this, arguments))
            }
            return (
              c(t, o.PureComponent),
              s(t, [
                {
                  key: 'componentDidMount',
                  value: function () {
                    this.subscribe(this.props)
                  },
                },
                {
                  key: 'componentDidUpdate',
                  value: function (e) {
                    this.unsubscribe(e), this.subscribe(this.props)
                  },
                },
                {
                  key: 'componentWillUnmount',
                  value: function () {
                    this.unsubscribe(this.props)
                  },
                },
                {
                  key: 'subscribe',
                  value: function (e) {
                    var t = e.name,
                      n = e.on,
                      r = e.pool,
                      o = e.target
                    w.sub(t, n, { pool: r, target: o })
                  },
                },
                {
                  key: 'unsubscribe',
                  value: function (e) {
                    var t = e.name,
                      n = e.on,
                      r = e.pool,
                      o = e.target
                    w.unsub(t, n, { pool: r, target: o })
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    return null
                  },
                },
              ]),
              t
            )
          })()
        u(k, 'defaultProps', { pool: 'default', target: 'document' }),
          (k.propTypes = {}),
          (t.instance = w),
          (t.default = k)
      },
      775: (e, t, n) => {
        'use strict'
        var r
        ;(r = n(630)),
          (e.exports = r.default),
          (e.exports.instance = r.instance)
      },
      618: (e, t, n) => {
        var r
        !(function () {
          'use strict'
          var o = !(
              'undefined' === typeof window ||
              !window.document ||
              !window.document.createElement
            ),
            a = {
              canUseDOM: o,
              canUseWorkers: 'undefined' !== typeof Worker,
              canUseEventListeners:
                o && !(!window.addEventListener && !window.attachEvent),
              canUseViewport: o && !!window.screen,
            }
          void 0 ===
            (r = function () {
              return a
            }.call(t, n, t, e)) || (e.exports = r)
        })()
      },
      854: (e) => {
        'use strict'
        for (
          var t = function (e) {
              return null !== e && !Array.isArray(e) && 'object' === typeof e
            },
            n = {
              3: 'Cancel',
              6: 'Help',
              8: 'Backspace',
              9: 'Tab',
              12: 'Clear',
              13: 'Enter',
              16: 'Shift',
              17: 'Control',
              18: 'Alt',
              19: 'Pause',
              20: 'CapsLock',
              27: 'Escape',
              28: 'Convert',
              29: 'NonConvert',
              30: 'Accept',
              31: 'ModeChange',
              32: ' ',
              33: 'PageUp',
              34: 'PageDown',
              35: 'End',
              36: 'Home',
              37: 'ArrowLeft',
              38: 'ArrowUp',
              39: 'ArrowRight',
              40: 'ArrowDown',
              41: 'Select',
              42: 'Print',
              43: 'Execute',
              44: 'PrintScreen',
              45: 'Insert',
              46: 'Delete',
              48: ['0', ')'],
              49: ['1', '!'],
              50: ['2', '@'],
              51: ['3', '#'],
              52: ['4', '$'],
              53: ['5', '%'],
              54: ['6', '^'],
              55: ['7', '&'],
              56: ['8', '*'],
              57: ['9', '('],
              91: 'OS',
              93: 'ContextMenu',
              144: 'NumLock',
              145: 'ScrollLock',
              181: 'VolumeMute',
              182: 'VolumeDown',
              183: 'VolumeUp',
              186: [';', ':'],
              187: ['=', '+'],
              188: [',', '<'],
              189: ['-', '_'],
              190: ['.', '>'],
              191: ['/', '?'],
              192: ['`', '~'],
              219: ['[', '{'],
              220: ['\\', '|'],
              221: [']', '}'],
              222: ["'", '"'],
              224: 'Meta',
              225: 'AltGraph',
              246: 'Attn',
              247: 'CrSel',
              248: 'ExSel',
              249: 'EraseEof',
              250: 'Play',
              251: 'ZoomOut',
            },
            r = 0;
          r < 24;
          r += 1
        )
          n[112 + r] = 'F' + (r + 1)
        for (var o = 0; o < 26; o += 1) {
          var a = o + 65
          n[a] = [String.fromCharCode(a + 32), String.fromCharCode(a)]
        }
        var i = {
          codes: n,
          getCode: function (e) {
            return t(e) ? e.keyCode || e.which || this[e.key] : this[e]
          },
          getKey: function (e) {
            var r = t(e)
            if (r && e.key) return e.key
            var o = n[r ? e.keyCode || e.which : e]
            return Array.isArray(o) && (o = r ? o[e.shiftKey ? 1 : 0] : o[0]), o
          },
          Cancel: 3,
          Help: 6,
          Backspace: 8,
          Tab: 9,
          Clear: 12,
          Enter: 13,
          Shift: 16,
          Control: 17,
          Alt: 18,
          Pause: 19,
          CapsLock: 20,
          Escape: 27,
          Convert: 28,
          NonConvert: 29,
          Accept: 30,
          ModeChange: 31,
          ' ': 32,
          PageUp: 33,
          PageDown: 34,
          End: 35,
          Home: 36,
          ArrowLeft: 37,
          ArrowUp: 38,
          ArrowRight: 39,
          ArrowDown: 40,
          Select: 41,
          Print: 42,
          Execute: 43,
          PrintScreen: 44,
          Insert: 45,
          Delete: 46,
          0: 48,
          ')': 48,
          1: 49,
          '!': 49,
          2: 50,
          '@': 50,
          3: 51,
          '#': 51,
          4: 52,
          $: 52,
          5: 53,
          '%': 53,
          6: 54,
          '^': 54,
          7: 55,
          '&': 55,
          8: 56,
          '*': 56,
          9: 57,
          '(': 57,
          a: 65,
          A: 65,
          b: 66,
          B: 66,
          c: 67,
          C: 67,
          d: 68,
          D: 68,
          e: 69,
          E: 69,
          f: 70,
          F: 70,
          g: 71,
          G: 71,
          h: 72,
          H: 72,
          i: 73,
          I: 73,
          j: 74,
          J: 74,
          k: 75,
          K: 75,
          l: 76,
          L: 76,
          m: 77,
          M: 77,
          n: 78,
          N: 78,
          o: 79,
          O: 79,
          p: 80,
          P: 80,
          q: 81,
          Q: 81,
          r: 82,
          R: 82,
          s: 83,
          S: 83,
          t: 84,
          T: 84,
          u: 85,
          U: 85,
          v: 86,
          V: 86,
          w: 87,
          W: 87,
          x: 88,
          X: 88,
          y: 89,
          Y: 89,
          z: 90,
          Z: 90,
          OS: 91,
          ContextMenu: 93,
          F1: 112,
          F2: 113,
          F3: 114,
          F4: 115,
          F5: 116,
          F6: 117,
          F7: 118,
          F8: 119,
          F9: 120,
          F10: 121,
          F11: 122,
          F12: 123,
          F13: 124,
          F14: 125,
          F15: 126,
          F16: 127,
          F17: 128,
          F18: 129,
          F19: 130,
          F20: 131,
          F21: 132,
          F22: 133,
          F23: 134,
          F24: 135,
          NumLock: 144,
          ScrollLock: 145,
          VolumeMute: 181,
          VolumeDown: 182,
          VolumeUp: 183,
          ';': 186,
          ':': 186,
          '=': 187,
          '+': 187,
          ',': 188,
          '<': 188,
          '-': 189,
          _: 189,
          '.': 190,
          '>': 190,
          '/': 191,
          '?': 191,
          '`': 192,
          '~': 192,
          '[': 219,
          '{': 219,
          '\\': 220,
          '|': 220,
          ']': 221,
          '}': 221,
          "'": 222,
          '"': 222,
          Meta: 224,
          AltGraph: 225,
          Attn: 246,
          CrSel: 247,
          ExSel: 248,
          EraseEof: 249,
          Play: 250,
          ZoomOut: 251,
        }
        ;(i.Spacebar = i[' ']),
          (i.Digit0 = i[0]),
          (i.Digit1 = i[1]),
          (i.Digit2 = i[2]),
          (i.Digit3 = i[3]),
          (i.Digit4 = i[4]),
          (i.Digit5 = i[5]),
          (i.Digit6 = i[6]),
          (i.Digit7 = i[7]),
          (i.Digit8 = i[8]),
          (i.Digit9 = i[9]),
          (i.Tilde = i['~']),
          (i.GraveAccent = i['`']),
          (i.ExclamationPoint = i['!']),
          (i.AtSign = i['@']),
          (i.PoundSign = i['#']),
          (i.PercentSign = i['%']),
          (i.Caret = i['^']),
          (i.Ampersand = i['&']),
          (i.PlusSign = i['+']),
          (i.MinusSign = i['-']),
          (i.EqualsSign = i['=']),
          (i.DivisionSign = i['/']),
          (i.MultiplicationSign = i['*']),
          (i.Comma = i[',']),
          (i.Decimal = i['.']),
          (i.Colon = i[':']),
          (i.Semicolon = i[';']),
          (i.Pipe = i['|']),
          (i.BackSlash = i['\\']),
          (i.QuestionMark = i['?']),
          (i.SingleQuote = i["'"]),
          (i.DoubleQuote = i['"']),
          (i.LeftCurlyBrace = i['{']),
          (i.RightCurlyBrace = i['}']),
          (i.LeftParenthesis = i['(']),
          (i.RightParenthesis = i[')']),
          (i.LeftAngleBracket = i['<']),
          (i.RightAngleBracket = i['>']),
          (i.LeftSquareBracket = i['[']),
          (i.RightSquareBracket = i[']']),
          (e.exports = i)
      },
      888: (e, t, n) => {
        'use strict'
        var r = n(47)
        function o() {}
        function a() {}
        ;(a.resetWarningCache = o),
          (e.exports = function () {
            function e(e, t, n, o, a, i) {
              if (i !== r) {
                var l = new Error(
                  'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types',
                )
                throw ((l.name = 'Invariant Violation'), l)
              }
            }
            function t() {
              return e
            }
            e.isRequired = e
            var n = {
              array: e,
              bigint: e,
              bool: e,
              func: e,
              number: e,
              object: e,
              string: e,
              symbol: e,
              any: e,
              arrayOf: t,
              element: e,
              elementType: e,
              instanceOf: t,
              node: e,
              objectOf: t,
              oneOf: t,
              oneOfType: t,
              shape: t,
              exact: t,
              checkPropTypes: a,
              resetWarningCache: o,
            }
            return (n.PropTypes = n), n
          })
      },
      7: (e, t, n) => {
        e.exports = n(888)()
      },
      47: (e) => {
        'use strict'
        e.exports = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED'
      },
      463: (e, t, n) => {
        'use strict'
        var r = n(791),
          o = n(296)
        function a(e) {
          for (
            var t =
                'https://reactjs.org/docs/error-decoder.html?invariant=' + e,
              n = 1;
            n < arguments.length;
            n++
          )
            t += '&args[]=' + encodeURIComponent(arguments[n])
          return (
            'Minified React error #' +
            e +
            '; visit ' +
            t +
            ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
          )
        }
        var i = new Set(),
          l = {}
        function s(e, t) {
          u(e, t), u(e + 'Capture', t)
        }
        function u(e, t) {
          for (l[e] = t, e = 0; e < t.length; e++) i.add(t[e])
        }
        var c = !(
            'undefined' === typeof window ||
            'undefined' === typeof window.document ||
            'undefined' === typeof window.document.createElement
          ),
          f = Object.prototype.hasOwnProperty,
          d =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          p = {},
          h = {}
        function m(e, t, n, r, o, a, i) {
          ;(this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = r),
            (this.attributeNamespace = o),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = a),
            (this.removeEmptyString = i)
        }
        var v = {}
        'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
          .split(' ')
          .forEach(function (e) {
            v[e] = new m(e, 0, !1, e, null, !1, !1)
          }),
          [
            ['acceptCharset', 'accept-charset'],
            ['className', 'class'],
            ['htmlFor', 'for'],
            ['httpEquiv', 'http-equiv'],
          ].forEach(function (e) {
            var t = e[0]
            v[t] = new m(t, 1, !1, e[1], null, !1, !1)
          }),
          ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(
            function (e) {
              v[e] = new m(e, 2, !1, e.toLowerCase(), null, !1, !1)
            },
          ),
          [
            'autoReverse',
            'externalResourcesRequired',
            'focusable',
            'preserveAlpha',
          ].forEach(function (e) {
            v[e] = new m(e, 2, !1, e, null, !1, !1)
          }),
          'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
            .split(' ')
            .forEach(function (e) {
              v[e] = new m(e, 3, !1, e.toLowerCase(), null, !1, !1)
            }),
          ['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
            v[e] = new m(e, 3, !0, e, null, !1, !1)
          }),
          ['capture', 'download'].forEach(function (e) {
            v[e] = new m(e, 4, !1, e, null, !1, !1)
          }),
          ['cols', 'rows', 'size', 'span'].forEach(function (e) {
            v[e] = new m(e, 6, !1, e, null, !1, !1)
          }),
          ['rowSpan', 'start'].forEach(function (e) {
            v[e] = new m(e, 5, !1, e.toLowerCase(), null, !1, !1)
          })
        var g = /[\-:]([a-z])/g
        function y(e) {
          return e[1].toUpperCase()
        }
        function b(e, t, n, r) {
          var o = v.hasOwnProperty(t) ? v[t] : null
          ;(null !== o
            ? 0 !== o.type
            : r ||
              !(2 < t.length) ||
              ('o' !== t[0] && 'O' !== t[0]) ||
              ('n' !== t[1] && 'N' !== t[1])) &&
            ((function (e, t, n, r) {
              if (
                null === t ||
                'undefined' === typeof t ||
                (function (e, t, n, r) {
                  if (null !== n && 0 === n.type) return !1
                  switch (typeof t) {
                    case 'function':
                    case 'symbol':
                      return !0
                    case 'boolean':
                      return (
                        !r &&
                        (null !== n
                          ? !n.acceptsBooleans
                          : 'data-' !== (e = e.toLowerCase().slice(0, 5)) &&
                            'aria-' !== e)
                      )
                    default:
                      return !1
                  }
                })(e, t, n, r)
              )
                return !0
              if (r) return !1
              if (null !== n)
                switch (n.type) {
                  case 3:
                    return !t
                  case 4:
                    return !1 === t
                  case 5:
                    return isNaN(t)
                  case 6:
                    return isNaN(t) || 1 > t
                }
              return !1
            })(t, n, o, r) && (n = null),
            r || null === o
              ? (function (e) {
                  return (
                    !!f.call(h, e) ||
                    (!f.call(p, e) &&
                      (d.test(e) ? (h[e] = !0) : ((p[e] = !0), !1)))
                  )
                })(t) &&
                (null === n ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
              : o.mustUseProperty
                ? (e[o.propertyName] = null === n ? 3 !== o.type && '' : n)
                : ((t = o.attributeName),
                  (r = o.attributeNamespace),
                  null === n
                    ? e.removeAttribute(t)
                    : ((n =
                        3 === (o = o.type) || (4 === o && !0 === n)
                          ? ''
                          : '' + n),
                      r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
        }
        'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
          .split(' ')
          .forEach(function (e) {
            var t = e.replace(g, y)
            v[t] = new m(t, 1, !1, e, null, !1, !1)
          }),
          'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
            .split(' ')
            .forEach(function (e) {
              var t = e.replace(g, y)
              v[t] = new m(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1)
            }),
          ['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
            var t = e.replace(g, y)
            v[t] = new m(
              t,
              1,
              !1,
              e,
              'http://www.w3.org/XML/1998/namespace',
              !1,
              !1,
            )
          }),
          ['tabIndex', 'crossOrigin'].forEach(function (e) {
            v[e] = new m(e, 1, !1, e.toLowerCase(), null, !1, !1)
          }),
          (v.xlinkHref = new m(
            'xlinkHref',
            1,
            !1,
            'xlink:href',
            'http://www.w3.org/1999/xlink',
            !0,
            !1,
          )),
          ['src', 'href', 'action', 'formAction'].forEach(function (e) {
            v[e] = new m(e, 1, !1, e.toLowerCase(), null, !0, !0)
          })
        var w = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          k = Symbol.for('react.element'),
          S = Symbol.for('react.portal'),
          _ = Symbol.for('react.fragment'),
          E = Symbol.for('react.strict_mode'),
          C = Symbol.for('react.profiler'),
          x = Symbol.for('react.provider'),
          N = Symbol.for('react.context'),
          P = Symbol.for('react.forward_ref'),
          T = Symbol.for('react.suspense'),
          O = Symbol.for('react.suspense_list'),
          R = Symbol.for('react.memo'),
          L = Symbol.for('react.lazy')
        Symbol.for('react.scope'), Symbol.for('react.debug_trace_mode')
        var A = Symbol.for('react.offscreen')
        Symbol.for('react.legacy_hidden'),
          Symbol.for('react.cache'),
          Symbol.for('react.tracing_marker')
        var j = Symbol.iterator
        function z(e) {
          return null === e || 'object' !== typeof e
            ? null
            : 'function' === typeof (e = (j && e[j]) || e['@@iterator'])
              ? e
              : null
        }
        var M,
          D = Object.assign
        function F(e) {
          if (void 0 === M)
            try {
              throw Error()
            } catch (n) {
              var t = n.stack.trim().match(/\n( *(at )?)/)
              M = (t && t[1]) || ''
            }
          return '\n' + M + e
        }
        var I = !1
        function B(e, t) {
          if (!e || I) return ''
          I = !0
          var n = Error.prepareStackTrace
          Error.prepareStackTrace = void 0
          try {
            if (t)
              if (
                ((t = function () {
                  throw Error()
                }),
                Object.defineProperty(t.prototype, 'props', {
                  set: function () {
                    throw Error()
                  },
                }),
                'object' === typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(t, [])
                } catch (u) {
                  var r = u
                }
                Reflect.construct(e, [], t)
              } else {
                try {
                  t.call()
                } catch (u) {
                  r = u
                }
                e.call(t.prototype)
              }
            else {
              try {
                throw Error()
              } catch (u) {
                r = u
              }
              e()
            }
          } catch (u) {
            if (u && r && 'string' === typeof u.stack) {
              for (
                var o = u.stack.split('\n'),
                  a = r.stack.split('\n'),
                  i = o.length - 1,
                  l = a.length - 1;
                1 <= i && 0 <= l && o[i] !== a[l];

              )
                l--
              for (; 1 <= i && 0 <= l; i--, l--)
                if (o[i] !== a[l]) {
                  if (1 !== i || 1 !== l)
                    do {
                      if ((i--, 0 > --l || o[i] !== a[l])) {
                        var s = '\n' + o[i].replace(' at new ', ' at ')
                        return (
                          e.displayName &&
                            s.includes('<anonymous>') &&
                            (s = s.replace('<anonymous>', e.displayName)),
                          s
                        )
                      }
                    } while (1 <= i && 0 <= l)
                  break
                }
            }
          } finally {
            ;(I = !1), (Error.prepareStackTrace = n)
          }
          return (e = e ? e.displayName || e.name : '') ? F(e) : ''
        }
        function U(e) {
          switch (e.tag) {
            case 5:
              return F(e.type)
            case 16:
              return F('Lazy')
            case 13:
              return F('Suspense')
            case 19:
              return F('SuspenseList')
            case 0:
            case 2:
            case 15:
              return (e = B(e.type, !1))
            case 11:
              return (e = B(e.type.render, !1))
            case 1:
              return (e = B(e.type, !0))
            default:
              return ''
          }
        }
        function V(e) {
          if (null == e) return null
          if ('function' === typeof e) return e.displayName || e.name || null
          if ('string' === typeof e) return e
          switch (e) {
            case _:
              return 'Fragment'
            case S:
              return 'Portal'
            case C:
              return 'Profiler'
            case E:
              return 'StrictMode'
            case T:
              return 'Suspense'
            case O:
              return 'SuspenseList'
          }
          if ('object' === typeof e)
            switch (e.$$typeof) {
              case N:
                return (e.displayName || 'Context') + '.Consumer'
              case x:
                return (e._context.displayName || 'Context') + '.Provider'
              case P:
                var t = e.render
                return (
                  (e = e.displayName) ||
                    (e =
                      '' !== (e = t.displayName || t.name || '')
                        ? 'ForwardRef(' + e + ')'
                        : 'ForwardRef'),
                  e
                )
              case R:
                return null !== (t = e.displayName || null)
                  ? t
                  : V(e.type) || 'Memo'
              case L:
                ;(t = e._payload), (e = e._init)
                try {
                  return V(e(t))
                } catch (n) {}
            }
          return null
        }
        function H(e) {
          var t = e.type
          switch (e.tag) {
            case 24:
              return 'Cache'
            case 9:
              return (t.displayName || 'Context') + '.Consumer'
            case 10:
              return (t._context.displayName || 'Context') + '.Provider'
            case 18:
              return 'DehydratedFragment'
            case 11:
              return (
                (e = (e = t.render).displayName || e.name || ''),
                t.displayName ||
                  ('' !== e ? 'ForwardRef(' + e + ')' : 'ForwardRef')
              )
            case 7:
              return 'Fragment'
            case 5:
              return t
            case 4:
              return 'Portal'
            case 3:
              return 'Root'
            case 6:
              return 'Text'
            case 16:
              return V(t)
            case 8:
              return t === E ? 'StrictMode' : 'Mode'
            case 22:
              return 'Offscreen'
            case 12:
              return 'Profiler'
            case 21:
              return 'Scope'
            case 13:
              return 'Suspense'
            case 19:
              return 'SuspenseList'
            case 25:
              return 'TracingMarker'
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
              if ('function' === typeof t)
                return t.displayName || t.name || null
              if ('string' === typeof t) return t
          }
          return null
        }
        function $(e) {
          switch (typeof e) {
            case 'boolean':
            case 'number':
            case 'string':
            case 'undefined':
            case 'object':
              return e
            default:
              return ''
          }
        }
        function q(e) {
          var t = e.type
          return (
            (e = e.nodeName) &&
            'input' === e.toLowerCase() &&
            ('checkbox' === t || 'radio' === t)
          )
        }
        function W(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = q(e) ? 'checked' : 'value',
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = '' + e[t]
              if (
                !e.hasOwnProperty(t) &&
                'undefined' !== typeof n &&
                'function' === typeof n.get &&
                'function' === typeof n.set
              ) {
                var o = n.get,
                  a = n.set
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return o.call(this)
                    },
                    set: function (e) {
                      ;(r = '' + e), a.call(this, e)
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: n.enumerable }),
                  {
                    getValue: function () {
                      return r
                    },
                    setValue: function (e) {
                      r = '' + e
                    },
                    stopTracking: function () {
                      ;(e._valueTracker = null), delete e[t]
                    },
                  }
                )
              }
            })(e))
        }
        function Q(e) {
          if (!e) return !1
          var t = e._valueTracker
          if (!t) return !0
          var n = t.getValue(),
            r = ''
          return (
            e && (r = q(e) ? (e.checked ? 'true' : 'false') : e.value),
            (e = r) !== n && (t.setValue(e), !0)
          )
        }
        function K(e) {
          if (
            'undefined' ===
            typeof (e =
              e || ('undefined' !== typeof document ? document : void 0))
          )
            return null
          try {
            return e.activeElement || e.body
          } catch (t) {
            return e.body
          }
        }
        function G(e, t) {
          var n = t.checked
          return D({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked,
          })
        }
        function Y(e, t) {
          var n = null == t.defaultValue ? '' : t.defaultValue,
            r = null != t.checked ? t.checked : t.defaultChecked
          ;(n = $(null != t.value ? t.value : n)),
            (e._wrapperState = {
              initialChecked: r,
              initialValue: n,
              controlled:
                'checkbox' === t.type || 'radio' === t.type
                  ? null != t.checked
                  : null != t.value,
            })
        }
        function X(e, t) {
          null != (t = t.checked) && b(e, 'checked', t, !1)
        }
        function J(e, t) {
          X(e, t)
          var n = $(t.value),
            r = t.type
          if (null != n)
            'number' === r
              ? ((0 === n && '' === e.value) || e.value != n) &&
                (e.value = '' + n)
              : e.value !== '' + n && (e.value = '' + n)
          else if ('submit' === r || 'reset' === r)
            return void e.removeAttribute('value')
          t.hasOwnProperty('value')
            ? ee(e, t.type, n)
            : t.hasOwnProperty('defaultValue') &&
              ee(e, t.type, $(t.defaultValue)),
            null == t.checked &&
              null != t.defaultChecked &&
              (e.defaultChecked = !!t.defaultChecked)
        }
        function Z(e, t, n) {
          if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
            var r = t.type
            if (
              !(
                ('submit' !== r && 'reset' !== r) ||
                (void 0 !== t.value && null !== t.value)
              )
            )
              return
            ;(t = '' + e._wrapperState.initialValue),
              n || t === e.value || (e.value = t),
              (e.defaultValue = t)
          }
          '' !== (n = e.name) && (e.name = ''),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            '' !== n && (e.name = n)
        }
        function ee(e, t, n) {
          ;('number' === t && K(e.ownerDocument) === e) ||
            (null == n
              ? (e.defaultValue = '' + e._wrapperState.initialValue)
              : e.defaultValue !== '' + n && (e.defaultValue = '' + n))
        }
        var te = Array.isArray
        function ne(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {}
            for (var o = 0; o < n.length; o++) t['$' + n[o]] = !0
            for (n = 0; n < e.length; n++)
              (o = t.hasOwnProperty('$' + e[n].value)),
                e[n].selected !== o && (e[n].selected = o),
                o && r && (e[n].defaultSelected = !0)
          } else {
            for (n = '' + $(n), t = null, o = 0; o < e.length; o++) {
              if (e[o].value === n)
                return (
                  (e[o].selected = !0), void (r && (e[o].defaultSelected = !0))
                )
              null !== t || e[o].disabled || (t = e[o])
            }
            null !== t && (t.selected = !0)
          }
        }
        function re(e, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(a(91))
          return D({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: '' + e._wrapperState.initialValue,
          })
        }
        function oe(e, t) {
          var n = t.value
          if (null == n) {
            if (((n = t.children), (t = t.defaultValue), null != n)) {
              if (null != t) throw Error(a(92))
              if (te(n)) {
                if (1 < n.length) throw Error(a(93))
                n = n[0]
              }
              t = n
            }
            null == t && (t = ''), (n = t)
          }
          e._wrapperState = { initialValue: $(n) }
        }
        function ae(e, t) {
          var n = $(t.value),
            r = $(t.defaultValue)
          null != n &&
            ((n = '' + n) !== e.value && (e.value = n),
            null == t.defaultValue &&
              e.defaultValue !== n &&
              (e.defaultValue = n)),
            null != r && (e.defaultValue = '' + r)
        }
        function ie(e) {
          var t = e.textContent
          t === e._wrapperState.initialValue &&
            '' !== t &&
            null !== t &&
            (e.value = t)
        }
        function le(e) {
          switch (e) {
            case 'svg':
              return 'http://www.w3.org/2000/svg'
            case 'math':
              return 'http://www.w3.org/1998/Math/MathML'
            default:
              return 'http://www.w3.org/1999/xhtml'
          }
        }
        function se(e, t) {
          return null == e || 'http://www.w3.org/1999/xhtml' === e
            ? le(t)
            : 'http://www.w3.org/2000/svg' === e && 'foreignObject' === t
              ? 'http://www.w3.org/1999/xhtml'
              : e
        }
        var ue,
          ce,
          fe =
            ((ce = function (e, t) {
              if (
                'http://www.w3.org/2000/svg' !== e.namespaceURI ||
                'innerHTML' in e
              )
                e.innerHTML = t
              else {
                for (
                  (ue = ue || document.createElement('div')).innerHTML =
                    '<svg>' + t.valueOf().toString() + '</svg>',
                    t = ue.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild)
                for (; t.firstChild; ) e.appendChild(t.firstChild)
              }
            }),
            'undefined' !== typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, t, n, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return ce(e, t)
                  })
                }
              : ce)
        function de(e, t) {
          if (t) {
            var n = e.firstChild
            if (n && n === e.lastChild && 3 === n.nodeType)
              return void (n.nodeValue = t)
          }
          e.textContent = t
        }
        var pe = {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0,
          },
          he = ['Webkit', 'ms', 'Moz', 'O']
        function me(e, t, n) {
          return null == t || 'boolean' === typeof t || '' === t
            ? ''
            : n ||
                'number' !== typeof t ||
                0 === t ||
                (pe.hasOwnProperty(e) && pe[e])
              ? ('' + t).trim()
              : t + 'px'
        }
        function ve(e, t) {
          for (var n in ((e = e.style), t))
            if (t.hasOwnProperty(n)) {
              var r = 0 === n.indexOf('--'),
                o = me(n, t[n], r)
              'float' === n && (n = 'cssFloat'),
                r ? e.setProperty(n, o) : (e[n] = o)
            }
        }
        Object.keys(pe).forEach(function (e) {
          he.forEach(function (t) {
            ;(t = t + e.charAt(0).toUpperCase() + e.substring(1)),
              (pe[t] = pe[e])
          })
        })
        var ge = D(
          { menuitem: !0 },
          {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0,
          },
        )
        function ye(e, t) {
          if (t) {
            if (
              ge[e] &&
              (null != t.children || null != t.dangerouslySetInnerHTML)
            )
              throw Error(a(137, e))
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(a(60))
              if (
                'object' !== typeof t.dangerouslySetInnerHTML ||
                !('__html' in t.dangerouslySetInnerHTML)
              )
                throw Error(a(61))
            }
            if (null != t.style && 'object' !== typeof t.style)
              throw Error(a(62))
          }
        }
        function be(e, t) {
          if (-1 === e.indexOf('-')) return 'string' === typeof t.is
          switch (e) {
            case 'annotation-xml':
            case 'color-profile':
            case 'font-face':
            case 'font-face-src':
            case 'font-face-uri':
            case 'font-face-format':
            case 'font-face-name':
            case 'missing-glyph':
              return !1
            default:
              return !0
          }
        }
        var we = null
        function ke(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          )
        }
        var Se = null,
          _e = null,
          Ee = null
        function Ce(e) {
          if ((e = wo(e))) {
            if ('function' !== typeof Se) throw Error(a(280))
            var t = e.stateNode
            t && ((t = So(t)), Se(e.stateNode, e.type, t))
          }
        }
        function xe(e) {
          _e ? (Ee ? Ee.push(e) : (Ee = [e])) : (_e = e)
        }
        function Ne() {
          if (_e) {
            var e = _e,
              t = Ee
            if (((Ee = _e = null), Ce(e), t))
              for (e = 0; e < t.length; e++) Ce(t[e])
          }
        }
        function Pe(e, t) {
          return e(t)
        }
        function Te() {}
        var Oe = !1
        function Re(e, t, n) {
          if (Oe) return e(t, n)
          Oe = !0
          try {
            return Pe(e, t, n)
          } finally {
            ;(Oe = !1), (null !== _e || null !== Ee) && (Te(), Ne())
          }
        }
        function Le(e, t) {
          var n = e.stateNode
          if (null === n) return null
          var r = So(n)
          if (null === r) return null
          n = r[t]
          e: switch (t) {
            case 'onClick':
            case 'onClickCapture':
            case 'onDoubleClick':
            case 'onDoubleClickCapture':
            case 'onMouseDown':
            case 'onMouseDownCapture':
            case 'onMouseMove':
            case 'onMouseMoveCapture':
            case 'onMouseUp':
            case 'onMouseUpCapture':
            case 'onMouseEnter':
              ;(r = !r.disabled) ||
                (r = !(
                  'button' === (e = e.type) ||
                  'input' === e ||
                  'select' === e ||
                  'textarea' === e
                )),
                (e = !r)
              break e
            default:
              e = !1
          }
          if (e) return null
          if (n && 'function' !== typeof n) throw Error(a(231, t, typeof n))
          return n
        }
        var Ae = !1
        if (c)
          try {
            var je = {}
            Object.defineProperty(je, 'passive', {
              get: function () {
                Ae = !0
              },
            }),
              window.addEventListener('test', je, je),
              window.removeEventListener('test', je, je)
          } catch (ce) {
            Ae = !1
          }
        function ze(e, t, n, r, o, a, i, l, s) {
          var u = Array.prototype.slice.call(arguments, 3)
          try {
            t.apply(n, u)
          } catch (c) {
            this.onError(c)
          }
        }
        var Me = !1,
          De = null,
          Fe = !1,
          Ie = null,
          Be = {
            onError: function (e) {
              ;(Me = !0), (De = e)
            },
          }
        function Ue(e, t, n, r, o, a, i, l, s) {
          ;(Me = !1), (De = null), ze.apply(Be, arguments)
        }
        function Ve(e) {
          var t = e,
            n = e
          if (e.alternate) for (; t.return; ) t = t.return
          else {
            e = t
            do {
              0 !== (4098 & (t = e).flags) && (n = t.return), (e = t.return)
            } while (e)
          }
          return 3 === t.tag ? n : null
        }
        function He(e) {
          if (13 === e.tag) {
            var t = e.memoizedState
            if (
              (null === t &&
                null !== (e = e.alternate) &&
                (t = e.memoizedState),
              null !== t)
            )
              return t.dehydrated
          }
          return null
        }
        function $e(e) {
          if (Ve(e) !== e) throw Error(a(188))
        }
        function qe(e) {
          return null !==
            (e = (function (e) {
              var t = e.alternate
              if (!t) {
                if (null === (t = Ve(e))) throw Error(a(188))
                return t !== e ? null : e
              }
              for (var n = e, r = t; ; ) {
                var o = n.return
                if (null === o) break
                var i = o.alternate
                if (null === i) {
                  if (null !== (r = o.return)) {
                    n = r
                    continue
                  }
                  break
                }
                if (o.child === i.child) {
                  for (i = o.child; i; ) {
                    if (i === n) return $e(o), e
                    if (i === r) return $e(o), t
                    i = i.sibling
                  }
                  throw Error(a(188))
                }
                if (n.return !== r.return) (n = o), (r = i)
                else {
                  for (var l = !1, s = o.child; s; ) {
                    if (s === n) {
                      ;(l = !0), (n = o), (r = i)
                      break
                    }
                    if (s === r) {
                      ;(l = !0), (r = o), (n = i)
                      break
                    }
                    s = s.sibling
                  }
                  if (!l) {
                    for (s = i.child; s; ) {
                      if (s === n) {
                        ;(l = !0), (n = i), (r = o)
                        break
                      }
                      if (s === r) {
                        ;(l = !0), (r = i), (n = o)
                        break
                      }
                      s = s.sibling
                    }
                    if (!l) throw Error(a(189))
                  }
                }
                if (n.alternate !== r) throw Error(a(190))
              }
              if (3 !== n.tag) throw Error(a(188))
              return n.stateNode.current === n ? e : t
            })(e))
            ? We(e)
            : null
        }
        function We(e) {
          if (5 === e.tag || 6 === e.tag) return e
          for (e = e.child; null !== e; ) {
            var t = We(e)
            if (null !== t) return t
            e = e.sibling
          }
          return null
        }
        var Qe = o.unstable_scheduleCallback,
          Ke = o.unstable_cancelCallback,
          Ge = o.unstable_shouldYield,
          Ye = o.unstable_requestPaint,
          Xe = o.unstable_now,
          Je = o.unstable_getCurrentPriorityLevel,
          Ze = o.unstable_ImmediatePriority,
          et = o.unstable_UserBlockingPriority,
          tt = o.unstable_NormalPriority,
          nt = o.unstable_LowPriority,
          rt = o.unstable_IdlePriority,
          ot = null,
          at = null
        var it = Math.clz32
            ? Math.clz32
            : function (e) {
                return (e >>>= 0), 0 === e ? 32 : (31 - ((lt(e) / st) | 0)) | 0
              },
          lt = Math.log,
          st = Math.LN2
        var ut = 64,
          ct = 4194304
        function ft(e) {
          switch (e & -e) {
            case 1:
              return 1
            case 2:
              return 2
            case 4:
              return 4
            case 8:
              return 8
            case 16:
              return 16
            case 32:
              return 32
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return 4194240 & e
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return 130023424 & e
            case 134217728:
              return 134217728
            case 268435456:
              return 268435456
            case 536870912:
              return 536870912
            case 1073741824:
              return 1073741824
            default:
              return e
          }
        }
        function dt(e, t) {
          var n = e.pendingLanes
          if (0 === n) return 0
          var r = 0,
            o = e.suspendedLanes,
            a = e.pingedLanes,
            i = 268435455 & n
          if (0 !== i) {
            var l = i & ~o
            0 !== l ? (r = ft(l)) : 0 !== (a &= i) && (r = ft(a))
          } else 0 !== (i = n & ~o) ? (r = ft(i)) : 0 !== a && (r = ft(a))
          if (0 === r) return 0
          if (
            0 !== t &&
            t !== r &&
            0 === (t & o) &&
            ((o = r & -r) >= (a = t & -t) || (16 === o && 0 !== (4194240 & a)))
          )
            return t
          if ((0 !== (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
            for (e = e.entanglements, t &= r; 0 < t; )
              (o = 1 << (n = 31 - it(t))), (r |= e[n]), (t &= ~o)
          return r
        }
        function pt(e, t) {
          switch (e) {
            case 1:
            case 2:
            case 4:
              return t + 250
            case 8:
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return t + 5e3
            default:
              return -1
          }
        }
        function ht(e) {
          return 0 !== (e = -1073741825 & e.pendingLanes)
            ? e
            : 1073741824 & e
              ? 1073741824
              : 0
        }
        function mt() {
          var e = ut
          return 0 === (4194240 & (ut <<= 1)) && (ut = 64), e
        }
        function vt(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e)
          return t
        }
        function gt(e, t, n) {
          ;(e.pendingLanes |= t),
            536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
            ((e = e.eventTimes)[(t = 31 - it(t))] = n)
        }
        function yt(e, t) {
          var n = (e.entangledLanes |= t)
          for (e = e.entanglements; n; ) {
            var r = 31 - it(n),
              o = 1 << r
            ;(o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o)
          }
        }
        var bt = 0
        function wt(e) {
          return 1 < (e &= -e)
            ? 4 < e
              ? 0 !== (268435455 & e)
                ? 16
                : 536870912
              : 4
            : 1
        }
        var kt,
          St,
          _t,
          Et,
          Ct,
          xt = !1,
          Nt = [],
          Pt = null,
          Tt = null,
          Ot = null,
          Rt = new Map(),
          Lt = new Map(),
          At = [],
          jt =
            'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
              ' ',
            )
        function zt(e, t) {
          switch (e) {
            case 'focusin':
            case 'focusout':
              Pt = null
              break
            case 'dragenter':
            case 'dragleave':
              Tt = null
              break
            case 'mouseover':
            case 'mouseout':
              Ot = null
              break
            case 'pointerover':
            case 'pointerout':
              Rt.delete(t.pointerId)
              break
            case 'gotpointercapture':
            case 'lostpointercapture':
              Lt.delete(t.pointerId)
          }
        }
        function Mt(e, t, n, r, o, a) {
          return null === e || e.nativeEvent !== a
            ? ((e = {
                blockedOn: t,
                domEventName: n,
                eventSystemFlags: r,
                nativeEvent: a,
                targetContainers: [o],
              }),
              null !== t && null !== (t = wo(t)) && St(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== o && -1 === t.indexOf(o) && t.push(o),
              e)
        }
        function Dt(e) {
          var t = bo(e.target)
          if (null !== t) {
            var n = Ve(t)
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = He(n)))
                  return (
                    (e.blockedOn = t),
                    void Ct(e.priority, function () {
                      _t(n)
                    })
                  )
              } else if (
                3 === t &&
                n.stateNode.current.memoizedState.isDehydrated
              )
                return void (e.blockedOn =
                  3 === n.tag ? n.stateNode.containerInfo : null)
          }
          e.blockedOn = null
        }
        function Ft(e) {
          if (null !== e.blockedOn) return !1
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Gt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent)
            if (null !== n)
              return null !== (t = wo(n)) && St(t), (e.blockedOn = n), !1
            var r = new (n = e.nativeEvent).constructor(n.type, n)
            ;(we = r), n.target.dispatchEvent(r), (we = null), t.shift()
          }
          return !0
        }
        function It(e, t, n) {
          Ft(e) && n.delete(t)
        }
        function Bt() {
          ;(xt = !1),
            null !== Pt && Ft(Pt) && (Pt = null),
            null !== Tt && Ft(Tt) && (Tt = null),
            null !== Ot && Ft(Ot) && (Ot = null),
            Rt.forEach(It),
            Lt.forEach(It)
        }
        function Ut(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            xt ||
              ((xt = !0),
              o.unstable_scheduleCallback(o.unstable_NormalPriority, Bt)))
        }
        function Vt(e) {
          function t(t) {
            return Ut(t, e)
          }
          if (0 < Nt.length) {
            Ut(Nt[0], e)
            for (var n = 1; n < Nt.length; n++) {
              var r = Nt[n]
              r.blockedOn === e && (r.blockedOn = null)
            }
          }
          for (
            null !== Pt && Ut(Pt, e),
              null !== Tt && Ut(Tt, e),
              null !== Ot && Ut(Ot, e),
              Rt.forEach(t),
              Lt.forEach(t),
              n = 0;
            n < At.length;
            n++
          )
            (r = At[n]).blockedOn === e && (r.blockedOn = null)
          for (; 0 < At.length && null === (n = At[0]).blockedOn; )
            Dt(n), null === n.blockedOn && At.shift()
        }
        var Ht = w.ReactCurrentBatchConfig,
          $t = !0
        function qt(e, t, n, r) {
          var o = bt,
            a = Ht.transition
          Ht.transition = null
          try {
            ;(bt = 1), Qt(e, t, n, r)
          } finally {
            ;(bt = o), (Ht.transition = a)
          }
        }
        function Wt(e, t, n, r) {
          var o = bt,
            a = Ht.transition
          Ht.transition = null
          try {
            ;(bt = 4), Qt(e, t, n, r)
          } finally {
            ;(bt = o), (Ht.transition = a)
          }
        }
        function Qt(e, t, n, r) {
          if ($t) {
            var o = Gt(e, t, n, r)
            if (null === o) $r(e, t, r, Kt, n), zt(e, r)
            else if (
              (function (e, t, n, r, o) {
                switch (t) {
                  case 'focusin':
                    return (Pt = Mt(Pt, e, t, n, r, o)), !0
                  case 'dragenter':
                    return (Tt = Mt(Tt, e, t, n, r, o)), !0
                  case 'mouseover':
                    return (Ot = Mt(Ot, e, t, n, r, o)), !0
                  case 'pointerover':
                    var a = o.pointerId
                    return Rt.set(a, Mt(Rt.get(a) || null, e, t, n, r, o)), !0
                  case 'gotpointercapture':
                    return (
                      (a = o.pointerId),
                      Lt.set(a, Mt(Lt.get(a) || null, e, t, n, r, o)),
                      !0
                    )
                }
                return !1
              })(o, e, t, n, r)
            )
              r.stopPropagation()
            else if ((zt(e, r), 4 & t && -1 < jt.indexOf(e))) {
              for (; null !== o; ) {
                var a = wo(o)
                if (
                  (null !== a && kt(a),
                  null === (a = Gt(e, t, n, r)) && $r(e, t, r, Kt, n),
                  a === o)
                )
                  break
                o = a
              }
              null !== o && r.stopPropagation()
            } else $r(e, t, r, null, n)
          }
        }
        var Kt = null
        function Gt(e, t, n, r) {
          if (((Kt = null), null !== (e = bo((e = ke(r))))))
            if (null === (t = Ve(e))) e = null
            else if (13 === (n = t.tag)) {
              if (null !== (e = He(t))) return e
              e = null
            } else if (3 === n) {
              if (t.stateNode.current.memoizedState.isDehydrated)
                return 3 === t.tag ? t.stateNode.containerInfo : null
              e = null
            } else t !== e && (e = null)
          return (Kt = e), null
        }
        function Yt(e) {
          switch (e) {
            case 'cancel':
            case 'click':
            case 'close':
            case 'contextmenu':
            case 'copy':
            case 'cut':
            case 'auxclick':
            case 'dblclick':
            case 'dragend':
            case 'dragstart':
            case 'drop':
            case 'focusin':
            case 'focusout':
            case 'input':
            case 'invalid':
            case 'keydown':
            case 'keypress':
            case 'keyup':
            case 'mousedown':
            case 'mouseup':
            case 'paste':
            case 'pause':
            case 'play':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointerup':
            case 'ratechange':
            case 'reset':
            case 'resize':
            case 'seeked':
            case 'submit':
            case 'touchcancel':
            case 'touchend':
            case 'touchstart':
            case 'volumechange':
            case 'change':
            case 'selectionchange':
            case 'textInput':
            case 'compositionstart':
            case 'compositionend':
            case 'compositionupdate':
            case 'beforeblur':
            case 'afterblur':
            case 'beforeinput':
            case 'blur':
            case 'fullscreenchange':
            case 'focus':
            case 'hashchange':
            case 'popstate':
            case 'select':
            case 'selectstart':
              return 1
            case 'drag':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'mousemove':
            case 'mouseout':
            case 'mouseover':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'scroll':
            case 'toggle':
            case 'touchmove':
            case 'wheel':
            case 'mouseenter':
            case 'mouseleave':
            case 'pointerenter':
            case 'pointerleave':
              return 4
            case 'message':
              switch (Je()) {
                case Ze:
                  return 1
                case et:
                  return 4
                case tt:
                case nt:
                  return 16
                case rt:
                  return 536870912
                default:
                  return 16
              }
            default:
              return 16
          }
        }
        var Xt = null,
          Jt = null,
          Zt = null
        function en() {
          if (Zt) return Zt
          var e,
            t,
            n = Jt,
            r = n.length,
            o = 'value' in Xt ? Xt.value : Xt.textContent,
            a = o.length
          for (e = 0; e < r && n[e] === o[e]; e++);
          var i = r - e
          for (t = 1; t <= i && n[r - t] === o[a - t]; t++);
          return (Zt = o.slice(e, 1 < t ? 1 - t : void 0))
        }
        function tn(e) {
          var t = e.keyCode
          return (
            'charCode' in e
              ? 0 === (e = e.charCode) && 13 === t && (e = 13)
              : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          )
        }
        function nn() {
          return !0
        }
        function rn() {
          return !1
        }
        function on(e) {
          function t(t, n, r, o, a) {
            for (var i in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = o),
            (this.target = a),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(i) && ((t = e[i]), (this[i] = t ? t(o) : o[i]))
            return (
              (this.isDefaultPrevented = (
                null != o.defaultPrevented
                  ? o.defaultPrevented
                  : !1 === o.returnValue
              )
                ? nn
                : rn),
              (this.isPropagationStopped = rn),
              this
            )
          }
          return (
            D(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0
                var e = this.nativeEvent
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : 'unknown' !== typeof e.returnValue &&
                      (e.returnValue = !1),
                  (this.isDefaultPrevented = nn))
              },
              stopPropagation: function () {
                var e = this.nativeEvent
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : 'unknown' !== typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = nn))
              },
              persist: function () {},
              isPersistent: nn,
            }),
            t
          )
        }
        var an,
          ln,
          sn,
          un = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now()
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          cn = on(un),
          fn = D({}, un, { view: 0, detail: 0 }),
          dn = on(fn),
          pn = D({}, fn, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: Cn,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget
            },
            movementX: function (e) {
              return 'movementX' in e
                ? e.movementX
                : (e !== sn &&
                    (sn && 'mousemove' === e.type
                      ? ((an = e.screenX - sn.screenX),
                        (ln = e.screenY - sn.screenY))
                      : (ln = an = 0),
                    (sn = e)),
                  an)
            },
            movementY: function (e) {
              return 'movementY' in e ? e.movementY : ln
            },
          }),
          hn = on(pn),
          mn = on(D({}, pn, { dataTransfer: 0 })),
          vn = on(D({}, fn, { relatedTarget: 0 })),
          gn = on(
            D({}, un, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
          ),
          yn = D({}, un, {
            clipboardData: function (e) {
              return 'clipboardData' in e
                ? e.clipboardData
                : window.clipboardData
            },
          }),
          bn = on(yn),
          wn = on(D({}, un, { data: 0 })),
          kn = {
            Esc: 'Escape',
            Spacebar: ' ',
            Left: 'ArrowLeft',
            Up: 'ArrowUp',
            Right: 'ArrowRight',
            Down: 'ArrowDown',
            Del: 'Delete',
            Win: 'OS',
            Menu: 'ContextMenu',
            Apps: 'ContextMenu',
            Scroll: 'ScrollLock',
            MozPrintableKey: 'Unidentified',
          },
          Sn = {
            8: 'Backspace',
            9: 'Tab',
            12: 'Clear',
            13: 'Enter',
            16: 'Shift',
            17: 'Control',
            18: 'Alt',
            19: 'Pause',
            20: 'CapsLock',
            27: 'Escape',
            32: ' ',
            33: 'PageUp',
            34: 'PageDown',
            35: 'End',
            36: 'Home',
            37: 'ArrowLeft',
            38: 'ArrowUp',
            39: 'ArrowRight',
            40: 'ArrowDown',
            45: 'Insert',
            46: 'Delete',
            112: 'F1',
            113: 'F2',
            114: 'F3',
            115: 'F4',
            116: 'F5',
            117: 'F6',
            118: 'F7',
            119: 'F8',
            120: 'F9',
            121: 'F10',
            122: 'F11',
            123: 'F12',
            144: 'NumLock',
            145: 'ScrollLock',
            224: 'Meta',
          },
          _n = {
            Alt: 'altKey',
            Control: 'ctrlKey',
            Meta: 'metaKey',
            Shift: 'shiftKey',
          }
        function En(e) {
          var t = this.nativeEvent
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = _n[e]) && !!t[e]
        }
        function Cn() {
          return En
        }
        var xn = D({}, fn, {
            key: function (e) {
              if (e.key) {
                var t = kn[e.key] || e.key
                if ('Unidentified' !== t) return t
              }
              return 'keypress' === e.type
                ? 13 === (e = tn(e))
                  ? 'Enter'
                  : String.fromCharCode(e)
                : 'keydown' === e.type || 'keyup' === e.type
                  ? Sn[e.keyCode] || 'Unidentified'
                  : ''
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: Cn,
            charCode: function (e) {
              return 'keypress' === e.type ? tn(e) : 0
            },
            keyCode: function (e) {
              return 'keydown' === e.type || 'keyup' === e.type ? e.keyCode : 0
            },
            which: function (e) {
              return 'keypress' === e.type
                ? tn(e)
                : 'keydown' === e.type || 'keyup' === e.type
                  ? e.keyCode
                  : 0
            },
          }),
          Nn = on(xn),
          Pn = on(
            D({}, pn, {
              pointerId: 0,
              width: 0,
              height: 0,
              pressure: 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: 0,
              pointerType: 0,
              isPrimary: 0,
            }),
          ),
          Tn = on(
            D({}, fn, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: Cn,
            }),
          ),
          On = on(
            D({}, un, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
          ),
          Rn = D({}, pn, {
            deltaX: function (e) {
              return 'deltaX' in e
                ? e.deltaX
                : 'wheelDeltaX' in e
                  ? -e.wheelDeltaX
                  : 0
            },
            deltaY: function (e) {
              return 'deltaY' in e
                ? e.deltaY
                : 'wheelDeltaY' in e
                  ? -e.wheelDeltaY
                  : 'wheelDelta' in e
                    ? -e.wheelDelta
                    : 0
            },
            deltaZ: 0,
            deltaMode: 0,
          }),
          Ln = on(Rn),
          An = [9, 13, 27, 32],
          jn = c && 'CompositionEvent' in window,
          zn = null
        c && 'documentMode' in document && (zn = document.documentMode)
        var Mn = c && 'TextEvent' in window && !zn,
          Dn = c && (!jn || (zn && 8 < zn && 11 >= zn)),
          Fn = String.fromCharCode(32),
          In = !1
        function Bn(e, t) {
          switch (e) {
            case 'keyup':
              return -1 !== An.indexOf(t.keyCode)
            case 'keydown':
              return 229 !== t.keyCode
            case 'keypress':
            case 'mousedown':
            case 'focusout':
              return !0
            default:
              return !1
          }
        }
        function Un(e) {
          return 'object' === typeof (e = e.detail) && 'data' in e
            ? e.data
            : null
        }
        var Vn = !1
        var Hn = {
          color: !0,
          date: !0,
          datetime: !0,
          'datetime-local': !0,
          email: !0,
          month: !0,
          number: !0,
          password: !0,
          range: !0,
          search: !0,
          tel: !0,
          text: !0,
          time: !0,
          url: !0,
          week: !0,
        }
        function $n(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase()
          return 'input' === t ? !!Hn[e.type] : 'textarea' === t
        }
        function qn(e, t, n, r) {
          xe(r),
            0 < (t = Wr(t, 'onChange')).length &&
              ((n = new cn('onChange', 'change', null, n, r)),
              e.push({ event: n, listeners: t }))
        }
        var Wn = null,
          Qn = null
        function Kn(e) {
          Fr(e, 0)
        }
        function Gn(e) {
          if (Q(ko(e))) return e
        }
        function Yn(e, t) {
          if ('change' === e) return t
        }
        var Xn = !1
        if (c) {
          var Jn
          if (c) {
            var Zn = 'oninput' in document
            if (!Zn) {
              var er = document.createElement('div')
              er.setAttribute('oninput', 'return;'),
                (Zn = 'function' === typeof er.oninput)
            }
            Jn = Zn
          } else Jn = !1
          Xn = Jn && (!document.documentMode || 9 < document.documentMode)
        }
        function tr() {
          Wn && (Wn.detachEvent('onpropertychange', nr), (Qn = Wn = null))
        }
        function nr(e) {
          if ('value' === e.propertyName && Gn(Qn)) {
            var t = []
            qn(t, Qn, e, ke(e)), Re(Kn, t)
          }
        }
        function rr(e, t, n) {
          'focusin' === e
            ? (tr(), (Qn = n), (Wn = t).attachEvent('onpropertychange', nr))
            : 'focusout' === e && tr()
        }
        function or(e) {
          if ('selectionchange' === e || 'keyup' === e || 'keydown' === e)
            return Gn(Qn)
        }
        function ar(e, t) {
          if ('click' === e) return Gn(t)
        }
        function ir(e, t) {
          if ('input' === e || 'change' === e) return Gn(t)
        }
        var lr =
          'function' === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e === 1 / t)) ||
                  (e !== e && t !== t)
                )
              }
        function sr(e, t) {
          if (lr(e, t)) return !0
          if (
            'object' !== typeof e ||
            null === e ||
            'object' !== typeof t ||
            null === t
          )
            return !1
          var n = Object.keys(e),
            r = Object.keys(t)
          if (n.length !== r.length) return !1
          for (r = 0; r < n.length; r++) {
            var o = n[r]
            if (!f.call(t, o) || !lr(e[o], t[o])) return !1
          }
          return !0
        }
        function ur(e) {
          for (; e && e.firstChild; ) e = e.firstChild
          return e
        }
        function cr(e, t) {
          var n,
            r = ur(e)
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t))
                return { node: r, offset: t - e }
              e = n
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling
                  break e
                }
                r = r.parentNode
              }
              r = void 0
            }
            r = ur(r)
          }
        }
        function fr(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? fr(e, t.parentNode)
                  : 'contains' in e
                    ? e.contains(t)
                    : !!e.compareDocumentPosition &&
                      !!(16 & e.compareDocumentPosition(t)))))
          )
        }
        function dr() {
          for (var e = window, t = K(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = 'string' === typeof t.contentWindow.location.href
            } catch (r) {
              n = !1
            }
            if (!n) break
            t = K((e = t.contentWindow).document)
          }
          return t
        }
        function pr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase()
          return (
            t &&
            (('input' === t &&
              ('text' === e.type ||
                'search' === e.type ||
                'tel' === e.type ||
                'url' === e.type ||
                'password' === e.type)) ||
              'textarea' === t ||
              'true' === e.contentEditable)
          )
        }
        function hr(e) {
          var t = dr(),
            n = e.focusedElem,
            r = e.selectionRange
          if (
            t !== n &&
            n &&
            n.ownerDocument &&
            fr(n.ownerDocument.documentElement, n)
          ) {
            if (null !== r && pr(n))
              if (
                ((t = r.start),
                void 0 === (e = r.end) && (e = t),
                'selectionStart' in n)
              )
                (n.selectionStart = t),
                  (n.selectionEnd = Math.min(e, n.value.length))
              else if (
                (e =
                  ((t = n.ownerDocument || document) && t.defaultView) ||
                  window).getSelection
              ) {
                e = e.getSelection()
                var o = n.textContent.length,
                  a = Math.min(r.start, o)
                ;(r = void 0 === r.end ? a : Math.min(r.end, o)),
                  !e.extend && a > r && ((o = r), (r = a), (a = o)),
                  (o = cr(n, a))
                var i = cr(n, r)
                o &&
                  i &&
                  (1 !== e.rangeCount ||
                    e.anchorNode !== o.node ||
                    e.anchorOffset !== o.offset ||
                    e.focusNode !== i.node ||
                    e.focusOffset !== i.offset) &&
                  ((t = t.createRange()).setStart(o.node, o.offset),
                  e.removeAllRanges(),
                  a > r
                    ? (e.addRange(t), e.extend(i.node, i.offset))
                    : (t.setEnd(i.node, i.offset), e.addRange(t)))
              }
            for (t = [], e = n; (e = e.parentNode); )
              1 === e.nodeType &&
                t.push({ element: e, left: e.scrollLeft, top: e.scrollTop })
            for (
              'function' === typeof n.focus && n.focus(), n = 0;
              n < t.length;
              n++
            )
              ((e = t[n]).element.scrollLeft = e.left),
                (e.element.scrollTop = e.top)
          }
        }
        var mr = c && 'documentMode' in document && 11 >= document.documentMode,
          vr = null,
          gr = null,
          yr = null,
          br = !1
        function wr(e, t, n) {
          var r =
            n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument
          br ||
            null == vr ||
            vr !== K(r) ||
            ('selectionStart' in (r = vr) && pr(r)
              ? (r = { start: r.selectionStart, end: r.selectionEnd })
              : (r = {
                  anchorNode: (r = (
                    (r.ownerDocument && r.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
                }),
            (yr && sr(yr, r)) ||
              ((yr = r),
              0 < (r = Wr(gr, 'onSelect')).length &&
                ((t = new cn('onSelect', 'select', null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = vr))))
        }
        function kr(e, t) {
          var n = {}
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n['Webkit' + e] = 'webkit' + t),
            (n['Moz' + e] = 'moz' + t),
            n
          )
        }
        var Sr = {
            animationend: kr('Animation', 'AnimationEnd'),
            animationiteration: kr('Animation', 'AnimationIteration'),
            animationstart: kr('Animation', 'AnimationStart'),
            transitionend: kr('Transition', 'TransitionEnd'),
          },
          _r = {},
          Er = {}
        function Cr(e) {
          if (_r[e]) return _r[e]
          if (!Sr[e]) return e
          var t,
            n = Sr[e]
          for (t in n) if (n.hasOwnProperty(t) && t in Er) return (_r[e] = n[t])
          return e
        }
        c &&
          ((Er = document.createElement('div').style),
          'AnimationEvent' in window ||
            (delete Sr.animationend.animation,
            delete Sr.animationiteration.animation,
            delete Sr.animationstart.animation),
          'TransitionEvent' in window || delete Sr.transitionend.transition)
        var xr = Cr('animationend'),
          Nr = Cr('animationiteration'),
          Pr = Cr('animationstart'),
          Tr = Cr('transitionend'),
          Or = new Map(),
          Rr =
            'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
              ' ',
            )
        function Lr(e, t) {
          Or.set(e, t), s(t, [e])
        }
        for (var Ar = 0; Ar < Rr.length; Ar++) {
          var jr = Rr[Ar]
          Lr(jr.toLowerCase(), 'on' + (jr[0].toUpperCase() + jr.slice(1)))
        }
        Lr(xr, 'onAnimationEnd'),
          Lr(Nr, 'onAnimationIteration'),
          Lr(Pr, 'onAnimationStart'),
          Lr('dblclick', 'onDoubleClick'),
          Lr('focusin', 'onFocus'),
          Lr('focusout', 'onBlur'),
          Lr(Tr, 'onTransitionEnd'),
          u('onMouseEnter', ['mouseout', 'mouseover']),
          u('onMouseLeave', ['mouseout', 'mouseover']),
          u('onPointerEnter', ['pointerout', 'pointerover']),
          u('onPointerLeave', ['pointerout', 'pointerover']),
          s(
            'onChange',
            'change click focusin focusout input keydown keyup selectionchange'.split(
              ' ',
            ),
          ),
          s(
            'onSelect',
            'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
              ' ',
            ),
          ),
          s('onBeforeInput', [
            'compositionend',
            'keypress',
            'textInput',
            'paste',
          ]),
          s(
            'onCompositionEnd',
            'compositionend focusout keydown keypress keyup mousedown'.split(
              ' ',
            ),
          ),
          s(
            'onCompositionStart',
            'compositionstart focusout keydown keypress keyup mousedown'.split(
              ' ',
            ),
          ),
          s(
            'onCompositionUpdate',
            'compositionupdate focusout keydown keypress keyup mousedown'.split(
              ' ',
            ),
          )
        var zr =
            'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
              ' ',
            ),
          Mr = new Set(
            'cancel close invalid load scroll toggle'.split(' ').concat(zr),
          )
        function Dr(e, t, n) {
          var r = e.type || 'unknown-event'
          ;(e.currentTarget = n),
            (function (e, t, n, r, o, i, l, s, u) {
              if ((Ue.apply(this, arguments), Me)) {
                if (!Me) throw Error(a(198))
                var c = De
                ;(Me = !1), (De = null), Fe || ((Fe = !0), (Ie = c))
              }
            })(r, t, void 0, e),
            (e.currentTarget = null)
        }
        function Fr(e, t) {
          t = 0 !== (4 & t)
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              o = r.event
            r = r.listeners
            e: {
              var a = void 0
              if (t)
                for (var i = r.length - 1; 0 <= i; i--) {
                  var l = r[i],
                    s = l.instance,
                    u = l.currentTarget
                  if (((l = l.listener), s !== a && o.isPropagationStopped()))
                    break e
                  Dr(o, l, u), (a = s)
                }
              else
                for (i = 0; i < r.length; i++) {
                  if (
                    ((s = (l = r[i]).instance),
                    (u = l.currentTarget),
                    (l = l.listener),
                    s !== a && o.isPropagationStopped())
                  )
                    break e
                  Dr(o, l, u), (a = s)
                }
            }
          }
          if (Fe) throw ((e = Ie), (Fe = !1), (Ie = null), e)
        }
        function Ir(e, t) {
          var n = t[vo]
          void 0 === n && (n = t[vo] = new Set())
          var r = e + '__bubble'
          n.has(r) || (Hr(t, e, 2, !1), n.add(r))
        }
        function Br(e, t, n) {
          var r = 0
          t && (r |= 4), Hr(n, e, r, t)
        }
        var Ur = '_reactListening' + Math.random().toString(36).slice(2)
        function Vr(e) {
          if (!e[Ur]) {
            ;(e[Ur] = !0),
              i.forEach(function (t) {
                'selectionchange' !== t &&
                  (Mr.has(t) || Br(t, !1, e), Br(t, !0, e))
              })
            var t = 9 === e.nodeType ? e : e.ownerDocument
            null === t || t[Ur] || ((t[Ur] = !0), Br('selectionchange', !1, t))
          }
        }
        function Hr(e, t, n, r) {
          switch (Yt(t)) {
            case 1:
              var o = qt
              break
            case 4:
              o = Wt
              break
            default:
              o = Qt
          }
          ;(n = o.bind(null, t, n, e)),
            (o = void 0),
            !Ae ||
              ('touchstart' !== t && 'touchmove' !== t && 'wheel' !== t) ||
              (o = !0),
            r
              ? void 0 !== o
                ? e.addEventListener(t, n, { capture: !0, passive: o })
                : e.addEventListener(t, n, !0)
              : void 0 !== o
                ? e.addEventListener(t, n, { passive: o })
                : e.addEventListener(t, n, !1)
        }
        function $r(e, t, n, r, o) {
          var a = r
          if (0 === (1 & t) && 0 === (2 & t) && null !== r)
            e: for (;;) {
              if (null === r) return
              var i = r.tag
              if (3 === i || 4 === i) {
                var l = r.stateNode.containerInfo
                if (l === o || (8 === l.nodeType && l.parentNode === o)) break
                if (4 === i)
                  for (i = r.return; null !== i; ) {
                    var s = i.tag
                    if (
                      (3 === s || 4 === s) &&
                      ((s = i.stateNode.containerInfo) === o ||
                        (8 === s.nodeType && s.parentNode === o))
                    )
                      return
                    i = i.return
                  }
                for (; null !== l; ) {
                  if (null === (i = bo(l))) return
                  if (5 === (s = i.tag) || 6 === s) {
                    r = a = i
                    continue e
                  }
                  l = l.parentNode
                }
              }
              r = r.return
            }
          Re(function () {
            var r = a,
              o = ke(n),
              i = []
            e: {
              var l = Or.get(e)
              if (void 0 !== l) {
                var s = cn,
                  u = e
                switch (e) {
                  case 'keypress':
                    if (0 === tn(n)) break e
                  case 'keydown':
                  case 'keyup':
                    s = Nn
                    break
                  case 'focusin':
                    ;(u = 'focus'), (s = vn)
                    break
                  case 'focusout':
                    ;(u = 'blur'), (s = vn)
                    break
                  case 'beforeblur':
                  case 'afterblur':
                    s = vn
                    break
                  case 'click':
                    if (2 === n.button) break e
                  case 'auxclick':
                  case 'dblclick':
                  case 'mousedown':
                  case 'mousemove':
                  case 'mouseup':
                  case 'mouseout':
                  case 'mouseover':
                  case 'contextmenu':
                    s = hn
                    break
                  case 'drag':
                  case 'dragend':
                  case 'dragenter':
                  case 'dragexit':
                  case 'dragleave':
                  case 'dragover':
                  case 'dragstart':
                  case 'drop':
                    s = mn
                    break
                  case 'touchcancel':
                  case 'touchend':
                  case 'touchmove':
                  case 'touchstart':
                    s = Tn
                    break
                  case xr:
                  case Nr:
                  case Pr:
                    s = gn
                    break
                  case Tr:
                    s = On
                    break
                  case 'scroll':
                    s = dn
                    break
                  case 'wheel':
                    s = Ln
                    break
                  case 'copy':
                  case 'cut':
                  case 'paste':
                    s = bn
                    break
                  case 'gotpointercapture':
                  case 'lostpointercapture':
                  case 'pointercancel':
                  case 'pointerdown':
                  case 'pointermove':
                  case 'pointerout':
                  case 'pointerover':
                  case 'pointerup':
                    s = Pn
                }
                var c = 0 !== (4 & t),
                  f = !c && 'scroll' === e,
                  d = c ? (null !== l ? l + 'Capture' : null) : l
                c = []
                for (var p, h = r; null !== h; ) {
                  var m = (p = h).stateNode
                  if (
                    (5 === p.tag &&
                      null !== m &&
                      ((p = m),
                      null !== d &&
                        null != (m = Le(h, d)) &&
                        c.push(qr(h, m, p))),
                    f)
                  )
                    break
                  h = h.return
                }
                0 < c.length &&
                  ((l = new s(l, u, null, n, o)),
                  i.push({ event: l, listeners: c }))
              }
            }
            if (0 === (7 & t)) {
              if (
                ((s = 'mouseout' === e || 'pointerout' === e),
                (!(l = 'mouseover' === e || 'pointerover' === e) ||
                  n === we ||
                  !(u = n.relatedTarget || n.fromElement) ||
                  (!bo(u) && !u[mo])) &&
                  (s || l) &&
                  ((l =
                    o.window === o
                      ? o
                      : (l = o.ownerDocument)
                        ? l.defaultView || l.parentWindow
                        : window),
                  s
                    ? ((s = r),
                      null !==
                        (u = (u = n.relatedTarget || n.toElement)
                          ? bo(u)
                          : null) &&
                        (u !== (f = Ve(u)) || (5 !== u.tag && 6 !== u.tag)) &&
                        (u = null))
                    : ((s = null), (u = r)),
                  s !== u))
              ) {
                if (
                  ((c = hn),
                  (m = 'onMouseLeave'),
                  (d = 'onMouseEnter'),
                  (h = 'mouse'),
                  ('pointerout' !== e && 'pointerover' !== e) ||
                    ((c = Pn),
                    (m = 'onPointerLeave'),
                    (d = 'onPointerEnter'),
                    (h = 'pointer')),
                  (f = null == s ? l : ko(s)),
                  (p = null == u ? l : ko(u)),
                  ((l = new c(m, h + 'leave', s, n, o)).target = f),
                  (l.relatedTarget = p),
                  (m = null),
                  bo(o) === r &&
                    (((c = new c(d, h + 'enter', u, n, o)).target = p),
                    (c.relatedTarget = f),
                    (m = c)),
                  (f = m),
                  s && u)
                )
                  e: {
                    for (d = u, h = 0, p = c = s; p; p = Qr(p)) h++
                    for (p = 0, m = d; m; m = Qr(m)) p++
                    for (; 0 < h - p; ) (c = Qr(c)), h--
                    for (; 0 < p - h; ) (d = Qr(d)), p--
                    for (; h--; ) {
                      if (c === d || (null !== d && c === d.alternate)) break e
                      ;(c = Qr(c)), (d = Qr(d))
                    }
                    c = null
                  }
                else c = null
                null !== s && Kr(i, l, s, c, !1),
                  null !== u && null !== f && Kr(i, f, u, c, !0)
              }
              if (
                'select' ===
                  (s =
                    (l = r ? ko(r) : window).nodeName &&
                    l.nodeName.toLowerCase()) ||
                ('input' === s && 'file' === l.type)
              )
                var v = Yn
              else if ($n(l))
                if (Xn) v = ir
                else {
                  v = or
                  var g = rr
                }
              else
                (s = l.nodeName) &&
                  'input' === s.toLowerCase() &&
                  ('checkbox' === l.type || 'radio' === l.type) &&
                  (v = ar)
              switch (
                (v && (v = v(e, r))
                  ? qn(i, v, n, o)
                  : (g && g(e, l, r),
                    'focusout' === e &&
                      (g = l._wrapperState) &&
                      g.controlled &&
                      'number' === l.type &&
                      ee(l, 'number', l.value)),
                (g = r ? ko(r) : window),
                e)
              ) {
                case 'focusin':
                  ;($n(g) || 'true' === g.contentEditable) &&
                    ((vr = g), (gr = r), (yr = null))
                  break
                case 'focusout':
                  yr = gr = vr = null
                  break
                case 'mousedown':
                  br = !0
                  break
                case 'contextmenu':
                case 'mouseup':
                case 'dragend':
                  ;(br = !1), wr(i, n, o)
                  break
                case 'selectionchange':
                  if (mr) break
                case 'keydown':
                case 'keyup':
                  wr(i, n, o)
              }
              var y
              if (jn)
                e: {
                  switch (e) {
                    case 'compositionstart':
                      var b = 'onCompositionStart'
                      break e
                    case 'compositionend':
                      b = 'onCompositionEnd'
                      break e
                    case 'compositionupdate':
                      b = 'onCompositionUpdate'
                      break e
                  }
                  b = void 0
                }
              else
                Vn
                  ? Bn(e, n) && (b = 'onCompositionEnd')
                  : 'keydown' === e &&
                    229 === n.keyCode &&
                    (b = 'onCompositionStart')
              b &&
                (Dn &&
                  'ko' !== n.locale &&
                  (Vn || 'onCompositionStart' !== b
                    ? 'onCompositionEnd' === b && Vn && (y = en())
                    : ((Jt = 'value' in (Xt = o) ? Xt.value : Xt.textContent),
                      (Vn = !0))),
                0 < (g = Wr(r, b)).length &&
                  ((b = new wn(b, e, null, n, o)),
                  i.push({ event: b, listeners: g }),
                  y ? (b.data = y) : null !== (y = Un(n)) && (b.data = y))),
                (y = Mn
                  ? (function (e, t) {
                      switch (e) {
                        case 'compositionend':
                          return Un(t)
                        case 'keypress':
                          return 32 !== t.which ? null : ((In = !0), Fn)
                        case 'textInput':
                          return (e = t.data) === Fn && In ? null : e
                        default:
                          return null
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (Vn)
                        return 'compositionend' === e || (!jn && Bn(e, t))
                          ? ((e = en()), (Zt = Jt = Xt = null), (Vn = !1), e)
                          : null
                      switch (e) {
                        case 'paste':
                        default:
                          return null
                        case 'keypress':
                          if (
                            !(t.ctrlKey || t.altKey || t.metaKey) ||
                            (t.ctrlKey && t.altKey)
                          ) {
                            if (t.char && 1 < t.char.length) return t.char
                            if (t.which) return String.fromCharCode(t.which)
                          }
                          return null
                        case 'compositionend':
                          return Dn && 'ko' !== t.locale ? null : t.data
                      }
                    })(e, n)) &&
                  0 < (r = Wr(r, 'onBeforeInput')).length &&
                  ((o = new wn('onBeforeInput', 'beforeinput', null, n, o)),
                  i.push({ event: o, listeners: r }),
                  (o.data = y))
            }
            Fr(i, t)
          })
        }
        function qr(e, t, n) {
          return { instance: e, listener: t, currentTarget: n }
        }
        function Wr(e, t) {
          for (var n = t + 'Capture', r = []; null !== e; ) {
            var o = e,
              a = o.stateNode
            5 === o.tag &&
              null !== a &&
              ((o = a),
              null != (a = Le(e, n)) && r.unshift(qr(e, a, o)),
              null != (a = Le(e, t)) && r.push(qr(e, a, o))),
              (e = e.return)
          }
          return r
        }
        function Qr(e) {
          if (null === e) return null
          do {
            e = e.return
          } while (e && 5 !== e.tag)
          return e || null
        }
        function Kr(e, t, n, r, o) {
          for (var a = t._reactName, i = []; null !== n && n !== r; ) {
            var l = n,
              s = l.alternate,
              u = l.stateNode
            if (null !== s && s === r) break
            5 === l.tag &&
              null !== u &&
              ((l = u),
              o
                ? null != (s = Le(n, a)) && i.unshift(qr(n, s, l))
                : o || (null != (s = Le(n, a)) && i.push(qr(n, s, l)))),
              (n = n.return)
          }
          0 !== i.length && e.push({ event: t, listeners: i })
        }
        var Gr = /\r\n?/g,
          Yr = /\u0000|\uFFFD/g
        function Xr(e) {
          return ('string' === typeof e ? e : '' + e)
            .replace(Gr, '\n')
            .replace(Yr, '')
        }
        function Jr(e, t, n) {
          if (((t = Xr(t)), Xr(e) !== t && n)) throw Error(a(425))
        }
        function Zr() {}
        var eo = null,
          to = null
        function no(e, t) {
          return (
            'textarea' === e ||
            'noscript' === e ||
            'string' === typeof t.children ||
            'number' === typeof t.children ||
            ('object' === typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          )
        }
        var ro = 'function' === typeof setTimeout ? setTimeout : void 0,
          oo = 'function' === typeof clearTimeout ? clearTimeout : void 0,
          ao = 'function' === typeof Promise ? Promise : void 0,
          io =
            'function' === typeof queueMicrotask
              ? queueMicrotask
              : 'undefined' !== typeof ao
                ? function (e) {
                    return ao.resolve(null).then(e).catch(lo)
                  }
                : ro
        function lo(e) {
          setTimeout(function () {
            throw e
          })
        }
        function so(e, t) {
          var n = t,
            r = 0
          do {
            var o = n.nextSibling
            if ((e.removeChild(n), o && 8 === o.nodeType))
              if ('/$' === (n = o.data)) {
                if (0 === r) return e.removeChild(o), void Vt(t)
                r--
              } else ('$' !== n && '$?' !== n && '$!' !== n) || r++
            n = o
          } while (n)
          Vt(t)
        }
        function uo(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType
            if (1 === t || 3 === t) break
            if (8 === t) {
              if ('$' === (t = e.data) || '$!' === t || '$?' === t) break
              if ('/$' === t) return null
            }
          }
          return e
        }
        function co(e) {
          e = e.previousSibling
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data
              if ('$' === n || '$!' === n || '$?' === n) {
                if (0 === t) return e
                t--
              } else '/$' === n && t++
            }
            e = e.previousSibling
          }
          return null
        }
        var fo = Math.random().toString(36).slice(2),
          po = '__reactFiber$' + fo,
          ho = '__reactProps$' + fo,
          mo = '__reactContainer$' + fo,
          vo = '__reactEvents$' + fo,
          go = '__reactListeners$' + fo,
          yo = '__reactHandles$' + fo
        function bo(e) {
          var t = e[po]
          if (t) return t
          for (var n = e.parentNode; n; ) {
            if ((t = n[mo] || n[po])) {
              if (
                ((n = t.alternate),
                null !== t.child || (null !== n && null !== n.child))
              )
                for (e = co(e); null !== e; ) {
                  if ((n = e[po])) return n
                  e = co(e)
                }
              return t
            }
            n = (e = n).parentNode
          }
          return null
        }
        function wo(e) {
          return !(e = e[po] || e[mo]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e
        }
        function ko(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode
          throw Error(a(33))
        }
        function So(e) {
          return e[ho] || null
        }
        var _o = [],
          Eo = -1
        function Co(e) {
          return { current: e }
        }
        function xo(e) {
          0 > Eo || ((e.current = _o[Eo]), (_o[Eo] = null), Eo--)
        }
        function No(e, t) {
          Eo++, (_o[Eo] = e.current), (e.current = t)
        }
        var Po = {},
          To = Co(Po),
          Oo = Co(!1),
          Ro = Po
        function Lo(e, t) {
          var n = e.type.contextTypes
          if (!n) return Po
          var r = e.stateNode
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext
          var o,
            a = {}
          for (o in n) a[o] = t[o]
          return (
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                t),
              (e.__reactInternalMemoizedMaskedChildContext = a)),
            a
          )
        }
        function Ao(e) {
          return null !== (e = e.childContextTypes) && void 0 !== e
        }
        function jo() {
          xo(Oo), xo(To)
        }
        function zo(e, t, n) {
          if (To.current !== Po) throw Error(a(168))
          No(To, t), No(Oo, n)
        }
        function Mo(e, t, n) {
          var r = e.stateNode
          if (
            ((t = t.childContextTypes), 'function' !== typeof r.getChildContext)
          )
            return n
          for (var o in (r = r.getChildContext()))
            if (!(o in t)) throw Error(a(108, H(e) || 'Unknown', o))
          return D({}, n, r)
        }
        function Do(e) {
          return (
            (e =
              ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
              Po),
            (Ro = To.current),
            No(To, e),
            No(Oo, Oo.current),
            !0
          )
        }
        function Fo(e, t, n) {
          var r = e.stateNode
          if (!r) throw Error(a(169))
          n
            ? ((e = Mo(e, t, Ro)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              xo(Oo),
              xo(To),
              No(To, e))
            : xo(Oo),
            No(Oo, n)
        }
        var Io = null,
          Bo = !1,
          Uo = !1
        function Vo(e) {
          null === Io ? (Io = [e]) : Io.push(e)
        }
        function Ho() {
          if (!Uo && null !== Io) {
            Uo = !0
            var e = 0,
              t = bt
            try {
              var n = Io
              for (bt = 1; e < n.length; e++) {
                var r = n[e]
                do {
                  r = r(!0)
                } while (null !== r)
              }
              ;(Io = null), (Bo = !1)
            } catch (o) {
              throw (null !== Io && (Io = Io.slice(e + 1)), Qe(Ze, Ho), o)
            } finally {
              ;(bt = t), (Uo = !1)
            }
          }
          return null
        }
        var $o = [],
          qo = 0,
          Wo = null,
          Qo = 0,
          Ko = [],
          Go = 0,
          Yo = null,
          Xo = 1,
          Jo = ''
        function Zo(e, t) {
          ;($o[qo++] = Qo), ($o[qo++] = Wo), (Wo = e), (Qo = t)
        }
        function ea(e, t, n) {
          ;(Ko[Go++] = Xo), (Ko[Go++] = Jo), (Ko[Go++] = Yo), (Yo = e)
          var r = Xo
          e = Jo
          var o = 32 - it(r) - 1
          ;(r &= ~(1 << o)), (n += 1)
          var a = 32 - it(t) + o
          if (30 < a) {
            var i = o - (o % 5)
            ;(a = (r & ((1 << i) - 1)).toString(32)),
              (r >>= i),
              (o -= i),
              (Xo = (1 << (32 - it(t) + o)) | (n << o) | r),
              (Jo = a + e)
          } else (Xo = (1 << a) | (n << o) | r), (Jo = e)
        }
        function ta(e) {
          null !== e.return && (Zo(e, 1), ea(e, 1, 0))
        }
        function na(e) {
          for (; e === Wo; )
            (Wo = $o[--qo]), ($o[qo] = null), (Qo = $o[--qo]), ($o[qo] = null)
          for (; e === Yo; )
            (Yo = Ko[--Go]),
              (Ko[Go] = null),
              (Jo = Ko[--Go]),
              (Ko[Go] = null),
              (Xo = Ko[--Go]),
              (Ko[Go] = null)
        }
        var ra = null,
          oa = null,
          aa = !1,
          ia = null
        function la(e, t) {
          var n = Lu(5, null, null, 0)
          ;(n.elementType = 'DELETED'),
            (n.stateNode = t),
            (n.return = e),
            null === (t = e.deletions)
              ? ((e.deletions = [n]), (e.flags |= 16))
              : t.push(n)
        }
        function sa(e, t) {
          switch (e.tag) {
            case 5:
              var n = e.type
              return (
                null !==
                  (t =
                    1 !== t.nodeType ||
                    n.toLowerCase() !== t.nodeName.toLowerCase()
                      ? null
                      : t) &&
                ((e.stateNode = t), (ra = e), (oa = uo(t.firstChild)), !0)
              )
            case 6:
              return (
                null !==
                  (t = '' === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), (ra = e), (oa = null), !0)
              )
            case 13:
              return (
                null !== (t = 8 !== t.nodeType ? null : t) &&
                ((n = null !== Yo ? { id: Xo, overflow: Jo } : null),
                (e.memoizedState = {
                  dehydrated: t,
                  treeContext: n,
                  retryLane: 1073741824,
                }),
                ((n = Lu(18, null, null, 0)).stateNode = t),
                (n.return = e),
                (e.child = n),
                (ra = e),
                (oa = null),
                !0)
              )
            default:
              return !1
          }
        }
        function ua(e) {
          return 0 !== (1 & e.mode) && 0 === (128 & e.flags)
        }
        function ca(e) {
          if (aa) {
            var t = oa
            if (t) {
              var n = t
              if (!sa(e, t)) {
                if (ua(e)) throw Error(a(418))
                t = uo(n.nextSibling)
                var r = ra
                t && sa(e, t)
                  ? la(r, n)
                  : ((e.flags = (-4097 & e.flags) | 2), (aa = !1), (ra = e))
              }
            } else {
              if (ua(e)) throw Error(a(418))
              ;(e.flags = (-4097 & e.flags) | 2), (aa = !1), (ra = e)
            }
          }
        }
        function fa(e) {
          for (
            e = e.return;
            null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

          )
            e = e.return
          ra = e
        }
        function da(e) {
          if (e !== ra) return !1
          if (!aa) return fa(e), (aa = !0), !1
          var t
          if (
            ((t = 3 !== e.tag) &&
              !(t = 5 !== e.tag) &&
              (t =
                'head' !== (t = e.type) &&
                'body' !== t &&
                !no(e.type, e.memoizedProps)),
            t && (t = oa))
          ) {
            if (ua(e)) throw (pa(), Error(a(418)))
            for (; t; ) la(e, t), (t = uo(t.nextSibling))
          }
          if ((fa(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(a(317))
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var n = e.data
                  if ('/$' === n) {
                    if (0 === t) {
                      oa = uo(e.nextSibling)
                      break e
                    }
                    t--
                  } else ('$' !== n && '$!' !== n && '$?' !== n) || t++
                }
                e = e.nextSibling
              }
              oa = null
            }
          } else oa = ra ? uo(e.stateNode.nextSibling) : null
          return !0
        }
        function pa() {
          for (var e = oa; e; ) e = uo(e.nextSibling)
        }
        function ha() {
          ;(oa = ra = null), (aa = !1)
        }
        function ma(e) {
          null === ia ? (ia = [e]) : ia.push(e)
        }
        var va = w.ReactCurrentBatchConfig
        function ga(e, t) {
          if (e && e.defaultProps) {
            for (var n in ((t = D({}, t)), (e = e.defaultProps)))
              void 0 === t[n] && (t[n] = e[n])
            return t
          }
          return t
        }
        var ya = Co(null),
          ba = null,
          wa = null,
          ka = null
        function Sa() {
          ka = wa = ba = null
        }
        function _a(e) {
          var t = ya.current
          xo(ya), (e._currentValue = t)
        }
        function Ea(e, t, n) {
          for (; null !== e; ) {
            var r = e.alternate
            if (
              ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
                : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
              e === n)
            )
              break
            e = e.return
          }
        }
        function Ca(e, t) {
          ;(ba = e),
            (ka = wa = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 !== (e.lanes & t) && (wl = !0), (e.firstContext = null))
        }
        function xa(e) {
          var t = e._currentValue
          if (ka !== e)
            if (
              ((e = { context: e, memoizedValue: t, next: null }), null === wa)
            ) {
              if (null === ba) throw Error(a(308))
              ;(wa = e), (ba.dependencies = { lanes: 0, firstContext: e })
            } else wa = wa.next = e
          return t
        }
        var Na = null
        function Pa(e) {
          null === Na ? (Na = [e]) : Na.push(e)
        }
        function Ta(e, t, n, r) {
          var o = t.interleaved
          return (
            null === o
              ? ((n.next = n), Pa(t))
              : ((n.next = o.next), (o.next = n)),
            (t.interleaved = n),
            Oa(e, r)
          )
        }
        function Oa(e, t) {
          e.lanes |= t
          var n = e.alternate
          for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
            (e.childLanes |= t),
              null !== (n = e.alternate) && (n.childLanes |= t),
              (n = e),
              (e = e.return)
          return 3 === n.tag ? n.stateNode : null
        }
        var Ra = !1
        function La(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
          }
        }
        function Aa(e, t) {
          ;(e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
              })
        }
        function ja(e, t) {
          return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          }
        }
        function za(e, t, n) {
          var r = e.updateQueue
          if (null === r) return null
          if (((r = r.shared), 0 !== (2 & Ts))) {
            var o = r.pending
            return (
              null === o ? (t.next = t) : ((t.next = o.next), (o.next = t)),
              (r.pending = t),
              Oa(e, n)
            )
          }
          return (
            null === (o = r.interleaved)
              ? ((t.next = t), Pa(r))
              : ((t.next = o.next), (o.next = t)),
            (r.interleaved = t),
            Oa(e, n)
          )
        }
        function Ma(e, t, n) {
          if (
            null !== (t = t.updateQueue) &&
            ((t = t.shared), 0 !== (4194240 & n))
          ) {
            var r = t.lanes
            ;(n |= r &= e.pendingLanes), (t.lanes = n), yt(e, n)
          }
        }
        function Da(e, t) {
          var n = e.updateQueue,
            r = e.alternate
          if (null !== r && n === (r = r.updateQueue)) {
            var o = null,
              a = null
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var i = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null,
                }
                null === a ? (o = a = i) : (a = a.next = i), (n = n.next)
              } while (null !== n)
              null === a ? (o = a = t) : (a = a.next = t)
            } else o = a = t
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: o,
                lastBaseUpdate: a,
                shared: r.shared,
                effects: r.effects,
              }),
              void (e.updateQueue = n)
            )
          }
          null === (e = n.lastBaseUpdate)
            ? (n.firstBaseUpdate = t)
            : (e.next = t),
            (n.lastBaseUpdate = t)
        }
        function Fa(e, t, n, r) {
          var o = e.updateQueue
          Ra = !1
          var a = o.firstBaseUpdate,
            i = o.lastBaseUpdate,
            l = o.shared.pending
          if (null !== l) {
            o.shared.pending = null
            var s = l,
              u = s.next
            ;(s.next = null), null === i ? (a = u) : (i.next = u), (i = s)
            var c = e.alternate
            null !== c &&
              (l = (c = c.updateQueue).lastBaseUpdate) !== i &&
              (null === l ? (c.firstBaseUpdate = u) : (l.next = u),
              (c.lastBaseUpdate = s))
          }
          if (null !== a) {
            var f = o.baseState
            for (i = 0, c = u = s = null, l = a; ; ) {
              var d = l.lane,
                p = l.eventTime
              if ((r & d) === d) {
                null !== c &&
                  (c = c.next =
                    {
                      eventTime: p,
                      lane: 0,
                      tag: l.tag,
                      payload: l.payload,
                      callback: l.callback,
                      next: null,
                    })
                e: {
                  var h = e,
                    m = l
                  switch (((d = t), (p = n), m.tag)) {
                    case 1:
                      if ('function' === typeof (h = m.payload)) {
                        f = h.call(p, f, d)
                        break e
                      }
                      f = h
                      break e
                    case 3:
                      h.flags = (-65537 & h.flags) | 128
                    case 0:
                      if (
                        null ===
                          (d =
                            'function' === typeof (h = m.payload)
                              ? h.call(p, f, d)
                              : h) ||
                        void 0 === d
                      )
                        break e
                      f = D({}, f, d)
                      break e
                    case 2:
                      Ra = !0
                  }
                }
                null !== l.callback &&
                  0 !== l.lane &&
                  ((e.flags |= 64),
                  null === (d = o.effects) ? (o.effects = [l]) : d.push(l))
              } else
                (p = {
                  eventTime: p,
                  lane: d,
                  tag: l.tag,
                  payload: l.payload,
                  callback: l.callback,
                  next: null,
                }),
                  null === c ? ((u = c = p), (s = f)) : (c = c.next = p),
                  (i |= d)
              if (null === (l = l.next)) {
                if (null === (l = o.shared.pending)) break
                ;(l = (d = l).next),
                  (d.next = null),
                  (o.lastBaseUpdate = d),
                  (o.shared.pending = null)
              }
            }
            if (
              (null === c && (s = f),
              (o.baseState = s),
              (o.firstBaseUpdate = u),
              (o.lastBaseUpdate = c),
              null !== (t = o.shared.interleaved))
            ) {
              o = t
              do {
                ;(i |= o.lane), (o = o.next)
              } while (o !== t)
            } else null === a && (o.shared.lanes = 0)
            ;(Ds |= i), (e.lanes = i), (e.memoizedState = f)
          }
        }
        function Ia(e, t, n) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var r = e[t],
                o = r.callback
              if (null !== o) {
                if (((r.callback = null), (r = n), 'function' !== typeof o))
                  throw Error(a(191, o))
                o.call(r)
              }
            }
        }
        var Ba = new r.Component().refs
        function Ua(e, t, n, r) {
          ;(n =
            null === (n = n(r, (t = e.memoizedState))) || void 0 === n
              ? t
              : D({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n)
        }
        var Va = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && Ve(e) === e
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals
            var r = tu(),
              o = nu(e),
              a = ja(r, o)
            ;(a.payload = t),
              void 0 !== n && null !== n && (a.callback = n),
              null !== (t = za(e, a, o)) && (ru(t, e, o, r), Ma(t, e, o))
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals
            var r = tu(),
              o = nu(e),
              a = ja(r, o)
            ;(a.tag = 1),
              (a.payload = t),
              void 0 !== n && null !== n && (a.callback = n),
              null !== (t = za(e, a, o)) && (ru(t, e, o, r), Ma(t, e, o))
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals
            var n = tu(),
              r = nu(e),
              o = ja(n, r)
            ;(o.tag = 2),
              void 0 !== t && null !== t && (o.callback = t),
              null !== (t = za(e, o, r)) && (ru(t, e, r, n), Ma(t, e, r))
          },
        }
        function Ha(e, t, n, r, o, a, i) {
          return 'function' === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, a, i)
            : !t.prototype ||
                !t.prototype.isPureReactComponent ||
                !sr(n, r) ||
                !sr(o, a)
        }
        function $a(e, t, n) {
          var r = !1,
            o = Po,
            a = t.contextType
          return (
            'object' === typeof a && null !== a
              ? (a = xa(a))
              : ((o = Ao(t) ? Ro : To.current),
                (a = (r = null !== (r = t.contextTypes) && void 0 !== r)
                  ? Lo(e, o)
                  : Po)),
            (t = new t(n, a)),
            (e.memoizedState =
              null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = Va),
            (e.stateNode = t),
            (t._reactInternals = e),
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                o),
              (e.__reactInternalMemoizedMaskedChildContext = a)),
            t
          )
        }
        function qa(e, t, n, r) {
          ;(e = t.state),
            'function' === typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(n, r),
            'function' === typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && Va.enqueueReplaceState(t, t.state, null)
        }
        function Wa(e, t, n, r) {
          var o = e.stateNode
          ;(o.props = n), (o.state = e.memoizedState), (o.refs = Ba), La(e)
          var a = t.contextType
          'object' === typeof a && null !== a
            ? (o.context = xa(a))
            : ((a = Ao(t) ? Ro : To.current), (o.context = Lo(e, a))),
            (o.state = e.memoizedState),
            'function' === typeof (a = t.getDerivedStateFromProps) &&
              (Ua(e, t, a, n), (o.state = e.memoizedState)),
            'function' === typeof t.getDerivedStateFromProps ||
              'function' === typeof o.getSnapshotBeforeUpdate ||
              ('function' !== typeof o.UNSAFE_componentWillMount &&
                'function' !== typeof o.componentWillMount) ||
              ((t = o.state),
              'function' === typeof o.componentWillMount &&
                o.componentWillMount(),
              'function' === typeof o.UNSAFE_componentWillMount &&
                o.UNSAFE_componentWillMount(),
              t !== o.state && Va.enqueueReplaceState(o, o.state, null),
              Fa(e, n, o, r),
              (o.state = e.memoizedState)),
            'function' === typeof o.componentDidMount && (e.flags |= 4194308)
        }
        function Qa(e, t, n) {
          if (
            null !== (e = n.ref) &&
            'function' !== typeof e &&
            'object' !== typeof e
          ) {
            if (n._owner) {
              if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(a(309))
                var r = n.stateNode
              }
              if (!r) throw Error(a(147, e))
              var o = r,
                i = '' + e
              return null !== t &&
                null !== t.ref &&
                'function' === typeof t.ref &&
                t.ref._stringRef === i
                ? t.ref
                : ((t = function (e) {
                    var t = o.refs
                    t === Ba && (t = o.refs = {}),
                      null === e ? delete t[i] : (t[i] = e)
                  }),
                  (t._stringRef = i),
                  t)
            }
            if ('string' !== typeof e) throw Error(a(284))
            if (!n._owner) throw Error(a(290, e))
          }
          return e
        }
        function Ka(e, t) {
          throw (
            ((e = Object.prototype.toString.call(t)),
            Error(
              a(
                31,
                '[object Object]' === e
                  ? 'object with keys {' + Object.keys(t).join(', ') + '}'
                  : e,
              ),
            ))
          )
        }
        function Ga(e) {
          return (0, e._init)(e._payload)
        }
        function Ya(e) {
          function t(t, n) {
            if (e) {
              var r = t.deletions
              null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n)
            }
          }
          function n(n, r) {
            if (!e) return null
            for (; null !== r; ) t(n, r), (r = r.sibling)
            return null
          }
          function r(e, t) {
            for (e = new Map(); null !== t; )
              null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                (t = t.sibling)
            return e
          }
          function o(e, t) {
            return ((e = ju(e, t)).index = 0), (e.sibling = null), e
          }
          function i(t, n, r) {
            return (
              (t.index = r),
              e
                ? null !== (r = t.alternate)
                  ? (r = r.index) < n
                    ? ((t.flags |= 2), n)
                    : r
                  : ((t.flags |= 2), n)
                : ((t.flags |= 1048576), n)
            )
          }
          function l(t) {
            return e && null === t.alternate && (t.flags |= 2), t
          }
          function s(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = Fu(n, e.mode, r)).return = e), t)
              : (((t = o(t, n)).return = e), t)
          }
          function u(e, t, n, r) {
            var a = n.type
            return a === _
              ? f(e, t, n.props.children, r, n.key)
              : null !== t &&
                  (t.elementType === a ||
                    ('object' === typeof a &&
                      null !== a &&
                      a.$$typeof === L &&
                      Ga(a) === t.type))
                ? (((r = o(t, n.props)).ref = Qa(e, t, n)), (r.return = e), r)
                : (((r = zu(n.type, n.key, n.props, null, e.mode, r)).ref = Qa(
                    e,
                    t,
                    n,
                  )),
                  (r.return = e),
                  r)
          }
          function c(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = Iu(n, e.mode, r)).return = e), t)
              : (((t = o(t, n.children || [])).return = e), t)
          }
          function f(e, t, n, r, a) {
            return null === t || 7 !== t.tag
              ? (((t = Mu(n, e.mode, r, a)).return = e), t)
              : (((t = o(t, n)).return = e), t)
          }
          function d(e, t, n) {
            if (('string' === typeof t && '' !== t) || 'number' === typeof t)
              return ((t = Fu('' + t, e.mode, n)).return = e), t
            if ('object' === typeof t && null !== t) {
              switch (t.$$typeof) {
                case k:
                  return (
                    ((n = zu(t.type, t.key, t.props, null, e.mode, n)).ref = Qa(
                      e,
                      null,
                      t,
                    )),
                    (n.return = e),
                    n
                  )
                case S:
                  return ((t = Iu(t, e.mode, n)).return = e), t
                case L:
                  return d(e, (0, t._init)(t._payload), n)
              }
              if (te(t) || z(t))
                return ((t = Mu(t, e.mode, n, null)).return = e), t
              Ka(e, t)
            }
            return null
          }
          function p(e, t, n, r) {
            var o = null !== t ? t.key : null
            if (('string' === typeof n && '' !== n) || 'number' === typeof n)
              return null !== o ? null : s(e, t, '' + n, r)
            if ('object' === typeof n && null !== n) {
              switch (n.$$typeof) {
                case k:
                  return n.key === o ? u(e, t, n, r) : null
                case S:
                  return n.key === o ? c(e, t, n, r) : null
                case L:
                  return p(e, t, (o = n._init)(n._payload), r)
              }
              if (te(n) || z(n)) return null !== o ? null : f(e, t, n, r, null)
              Ka(e, n)
            }
            return null
          }
          function h(e, t, n, r, o) {
            if (('string' === typeof r && '' !== r) || 'number' === typeof r)
              return s(t, (e = e.get(n) || null), '' + r, o)
            if ('object' === typeof r && null !== r) {
              switch (r.$$typeof) {
                case k:
                  return u(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    o,
                  )
                case S:
                  return c(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    o,
                  )
                case L:
                  return h(e, t, n, (0, r._init)(r._payload), o)
              }
              if (te(r) || z(r)) return f(t, (e = e.get(n) || null), r, o, null)
              Ka(t, r)
            }
            return null
          }
          function m(o, a, l, s) {
            for (
              var u = null, c = null, f = a, m = (a = 0), v = null;
              null !== f && m < l.length;
              m++
            ) {
              f.index > m ? ((v = f), (f = null)) : (v = f.sibling)
              var g = p(o, f, l[m], s)
              if (null === g) {
                null === f && (f = v)
                break
              }
              e && f && null === g.alternate && t(o, f),
                (a = i(g, a, m)),
                null === c ? (u = g) : (c.sibling = g),
                (c = g),
                (f = v)
            }
            if (m === l.length) return n(o, f), aa && Zo(o, m), u
            if (null === f) {
              for (; m < l.length; m++)
                null !== (f = d(o, l[m], s)) &&
                  ((a = i(f, a, m)),
                  null === c ? (u = f) : (c.sibling = f),
                  (c = f))
              return aa && Zo(o, m), u
            }
            for (f = r(o, f); m < l.length; m++)
              null !== (v = h(f, o, m, l[m], s)) &&
                (e &&
                  null !== v.alternate &&
                  f.delete(null === v.key ? m : v.key),
                (a = i(v, a, m)),
                null === c ? (u = v) : (c.sibling = v),
                (c = v))
            return (
              e &&
                f.forEach(function (e) {
                  return t(o, e)
                }),
              aa && Zo(o, m),
              u
            )
          }
          function v(o, l, s, u) {
            var c = z(s)
            if ('function' !== typeof c) throw Error(a(150))
            if (null == (s = c.call(s))) throw Error(a(151))
            for (
              var f = (c = null), m = l, v = (l = 0), g = null, y = s.next();
              null !== m && !y.done;
              v++, y = s.next()
            ) {
              m.index > v ? ((g = m), (m = null)) : (g = m.sibling)
              var b = p(o, m, y.value, u)
              if (null === b) {
                null === m && (m = g)
                break
              }
              e && m && null === b.alternate && t(o, m),
                (l = i(b, l, v)),
                null === f ? (c = b) : (f.sibling = b),
                (f = b),
                (m = g)
            }
            if (y.done) return n(o, m), aa && Zo(o, v), c
            if (null === m) {
              for (; !y.done; v++, y = s.next())
                null !== (y = d(o, y.value, u)) &&
                  ((l = i(y, l, v)),
                  null === f ? (c = y) : (f.sibling = y),
                  (f = y))
              return aa && Zo(o, v), c
            }
            for (m = r(o, m); !y.done; v++, y = s.next())
              null !== (y = h(m, o, v, y.value, u)) &&
                (e &&
                  null !== y.alternate &&
                  m.delete(null === y.key ? v : y.key),
                (l = i(y, l, v)),
                null === f ? (c = y) : (f.sibling = y),
                (f = y))
            return (
              e &&
                m.forEach(function (e) {
                  return t(o, e)
                }),
              aa && Zo(o, v),
              c
            )
          }
          return function e(r, a, i, s) {
            if (
              ('object' === typeof i &&
                null !== i &&
                i.type === _ &&
                null === i.key &&
                (i = i.props.children),
              'object' === typeof i && null !== i)
            ) {
              switch (i.$$typeof) {
                case k:
                  e: {
                    for (var u = i.key, c = a; null !== c; ) {
                      if (c.key === u) {
                        if ((u = i.type) === _) {
                          if (7 === c.tag) {
                            n(r, c.sibling),
                              ((a = o(c, i.props.children)).return = r),
                              (r = a)
                            break e
                          }
                        } else if (
                          c.elementType === u ||
                          ('object' === typeof u &&
                            null !== u &&
                            u.$$typeof === L &&
                            Ga(u) === c.type)
                        ) {
                          n(r, c.sibling),
                            ((a = o(c, i.props)).ref = Qa(r, c, i)),
                            (a.return = r),
                            (r = a)
                          break e
                        }
                        n(r, c)
                        break
                      }
                      t(r, c), (c = c.sibling)
                    }
                    i.type === _
                      ? (((a = Mu(i.props.children, r.mode, s, i.key)).return =
                          r),
                        (r = a))
                      : (((s = zu(
                          i.type,
                          i.key,
                          i.props,
                          null,
                          r.mode,
                          s,
                        )).ref = Qa(r, a, i)),
                        (s.return = r),
                        (r = s))
                  }
                  return l(r)
                case S:
                  e: {
                    for (c = i.key; null !== a; ) {
                      if (a.key === c) {
                        if (
                          4 === a.tag &&
                          a.stateNode.containerInfo === i.containerInfo &&
                          a.stateNode.implementation === i.implementation
                        ) {
                          n(r, a.sibling),
                            ((a = o(a, i.children || [])).return = r),
                            (r = a)
                          break e
                        }
                        n(r, a)
                        break
                      }
                      t(r, a), (a = a.sibling)
                    }
                    ;((a = Iu(i, r.mode, s)).return = r), (r = a)
                  }
                  return l(r)
                case L:
                  return e(r, a, (c = i._init)(i._payload), s)
              }
              if (te(i)) return m(r, a, i, s)
              if (z(i)) return v(r, a, i, s)
              Ka(r, i)
            }
            return ('string' === typeof i && '' !== i) || 'number' === typeof i
              ? ((i = '' + i),
                null !== a && 6 === a.tag
                  ? (n(r, a.sibling), ((a = o(a, i)).return = r), (r = a))
                  : (n(r, a), ((a = Fu(i, r.mode, s)).return = r), (r = a)),
                l(r))
              : n(r, a)
          }
        }
        var Xa = Ya(!0),
          Ja = Ya(!1),
          Za = {},
          ei = Co(Za),
          ti = Co(Za),
          ni = Co(Za)
        function ri(e) {
          if (e === Za) throw Error(a(174))
          return e
        }
        function oi(e, t) {
          switch ((No(ni, t), No(ti, e), No(ei, Za), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : se(null, '')
              break
            default:
              t = se(
                (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
                (e = e.tagName),
              )
          }
          xo(ei), No(ei, t)
        }
        function ai() {
          xo(ei), xo(ti), xo(ni)
        }
        function ii(e) {
          ri(ni.current)
          var t = ri(ei.current),
            n = se(t, e.type)
          t !== n && (No(ti, e), No(ei, n))
        }
        function li(e) {
          ti.current === e && (xo(ei), xo(ti))
        }
        var si = Co(0)
        function ui(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState
              if (
                null !== n &&
                (null === (n = n.dehydrated) ||
                  '$?' === n.data ||
                  '$!' === n.data)
              )
                return t
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 !== (128 & t.flags)) return t
            } else if (null !== t.child) {
              ;(t.child.return = t), (t = t.child)
              continue
            }
            if (t === e) break
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null
              t = t.return
            }
            ;(t.sibling.return = t.return), (t = t.sibling)
          }
          return null
        }
        var ci = []
        function fi() {
          for (var e = 0; e < ci.length; e++)
            ci[e]._workInProgressVersionPrimary = null
          ci.length = 0
        }
        var di = w.ReactCurrentDispatcher,
          pi = w.ReactCurrentBatchConfig,
          hi = 0,
          mi = null,
          vi = null,
          gi = null,
          yi = !1,
          bi = !1,
          wi = 0,
          ki = 0
        function Si() {
          throw Error(a(321))
        }
        function _i(e, t) {
          if (null === t) return !1
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!lr(e[n], t[n])) return !1
          return !0
        }
        function Ei(e, t, n, r, o, i) {
          if (
            ((hi = i),
            (mi = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (di.current = null === e || null === e.memoizedState ? ll : sl),
            (e = n(r, o)),
            bi)
          ) {
            i = 0
            do {
              if (((bi = !1), (wi = 0), 25 <= i)) throw Error(a(301))
              ;(i += 1),
                (gi = vi = null),
                (t.updateQueue = null),
                (di.current = ul),
                (e = n(r, o))
            } while (bi)
          }
          if (
            ((di.current = il),
            (t = null !== vi && null !== vi.next),
            (hi = 0),
            (gi = vi = mi = null),
            (yi = !1),
            t)
          )
            throw Error(a(300))
          return e
        }
        function Ci() {
          var e = 0 !== wi
          return (wi = 0), e
        }
        function xi() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          }
          return (
            null === gi ? (mi.memoizedState = gi = e) : (gi = gi.next = e), gi
          )
        }
        function Ni() {
          if (null === vi) {
            var e = mi.alternate
            e = null !== e ? e.memoizedState : null
          } else e = vi.next
          var t = null === gi ? mi.memoizedState : gi.next
          if (null !== t) (gi = t), (vi = e)
          else {
            if (null === e) throw Error(a(310))
            ;(e = {
              memoizedState: (vi = e).memoizedState,
              baseState: vi.baseState,
              baseQueue: vi.baseQueue,
              queue: vi.queue,
              next: null,
            }),
              null === gi ? (mi.memoizedState = gi = e) : (gi = gi.next = e)
          }
          return gi
        }
        function Pi(e, t) {
          return 'function' === typeof t ? t(e) : t
        }
        function Ti(e) {
          var t = Ni(),
            n = t.queue
          if (null === n) throw Error(a(311))
          n.lastRenderedReducer = e
          var r = vi,
            o = r.baseQueue,
            i = n.pending
          if (null !== i) {
            if (null !== o) {
              var l = o.next
              ;(o.next = i.next), (i.next = l)
            }
            ;(r.baseQueue = o = i), (n.pending = null)
          }
          if (null !== o) {
            ;(i = o.next), (r = r.baseState)
            var s = (l = null),
              u = null,
              c = i
            do {
              var f = c.lane
              if ((hi & f) === f)
                null !== u &&
                  (u = u.next =
                    {
                      lane: 0,
                      action: c.action,
                      hasEagerState: c.hasEagerState,
                      eagerState: c.eagerState,
                      next: null,
                    }),
                  (r = c.hasEagerState ? c.eagerState : e(r, c.action))
              else {
                var d = {
                  lane: f,
                  action: c.action,
                  hasEagerState: c.hasEagerState,
                  eagerState: c.eagerState,
                  next: null,
                }
                null === u ? ((s = u = d), (l = r)) : (u = u.next = d),
                  (mi.lanes |= f),
                  (Ds |= f)
              }
              c = c.next
            } while (null !== c && c !== i)
            null === u ? (l = r) : (u.next = s),
              lr(r, t.memoizedState) || (wl = !0),
              (t.memoizedState = r),
              (t.baseState = l),
              (t.baseQueue = u),
              (n.lastRenderedState = r)
          }
          if (null !== (e = n.interleaved)) {
            o = e
            do {
              ;(i = o.lane), (mi.lanes |= i), (Ds |= i), (o = o.next)
            } while (o !== e)
          } else null === o && (n.lanes = 0)
          return [t.memoizedState, n.dispatch]
        }
        function Oi(e) {
          var t = Ni(),
            n = t.queue
          if (null === n) throw Error(a(311))
          n.lastRenderedReducer = e
          var r = n.dispatch,
            o = n.pending,
            i = t.memoizedState
          if (null !== o) {
            n.pending = null
            var l = (o = o.next)
            do {
              ;(i = e(i, l.action)), (l = l.next)
            } while (l !== o)
            lr(i, t.memoizedState) || (wl = !0),
              (t.memoizedState = i),
              null === t.baseQueue && (t.baseState = i),
              (n.lastRenderedState = i)
          }
          return [i, r]
        }
        function Ri() {}
        function Li(e, t) {
          var n = mi,
            r = Ni(),
            o = t(),
            i = !lr(r.memoizedState, o)
          if (
            (i && ((r.memoizedState = o), (wl = !0)),
            (r = r.queue),
            $i(zi.bind(null, n, r, e), [e]),
            r.getSnapshot !== t ||
              i ||
              (null !== gi && 1 & gi.memoizedState.tag))
          ) {
            if (
              ((n.flags |= 2048),
              Ii(9, ji.bind(null, n, r, o, t), void 0, null),
              null === Os)
            )
              throw Error(a(349))
            0 !== (30 & hi) || Ai(n, t, o)
          }
          return o
        }
        function Ai(e, t, n) {
          ;(e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            null === (t = mi.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (mi.updateQueue = t),
                (t.stores = [e]))
              : null === (n = t.stores)
                ? (t.stores = [e])
                : n.push(e)
        }
        function ji(e, t, n, r) {
          ;(t.value = n), (t.getSnapshot = r), Mi(t) && Di(e)
        }
        function zi(e, t, n) {
          return n(function () {
            Mi(t) && Di(e)
          })
        }
        function Mi(e) {
          var t = e.getSnapshot
          e = e.value
          try {
            var n = t()
            return !lr(e, n)
          } catch (r) {
            return !0
          }
        }
        function Di(e) {
          var t = Oa(e, 1)
          null !== t && ru(t, e, 1, -1)
        }
        function Fi(e) {
          var t = xi()
          return (
            'function' === typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: Pi,
              lastRenderedState: e,
            }),
            (t.queue = e),
            (e = e.dispatch = nl.bind(null, mi, e)),
            [t.memoizedState, e]
          )
        }
        function Ii(e, t, n, r) {
          return (
            (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            null === (t = mi.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (mi.updateQueue = t),
                (t.lastEffect = e.next = e))
              : null === (n = t.lastEffect)
                ? (t.lastEffect = e.next = e)
                : ((r = n.next),
                  (n.next = e),
                  (e.next = r),
                  (t.lastEffect = e)),
            e
          )
        }
        function Bi() {
          return Ni().memoizedState
        }
        function Ui(e, t, n, r) {
          var o = xi()
          ;(mi.flags |= e),
            (o.memoizedState = Ii(1 | t, n, void 0, void 0 === r ? null : r))
        }
        function Vi(e, t, n, r) {
          var o = Ni()
          r = void 0 === r ? null : r
          var a = void 0
          if (null !== vi) {
            var i = vi.memoizedState
            if (((a = i.destroy), null !== r && _i(r, i.deps)))
              return void (o.memoizedState = Ii(t, n, a, r))
          }
          ;(mi.flags |= e), (o.memoizedState = Ii(1 | t, n, a, r))
        }
        function Hi(e, t) {
          return Ui(8390656, 8, e, t)
        }
        function $i(e, t) {
          return Vi(2048, 8, e, t)
        }
        function qi(e, t) {
          return Vi(4, 2, e, t)
        }
        function Wi(e, t) {
          return Vi(4, 4, e, t)
        }
        function Qi(e, t) {
          return 'function' === typeof t
            ? ((e = e()),
              t(e),
              function () {
                t(null)
              })
            : null !== t && void 0 !== t
              ? ((e = e()),
                (t.current = e),
                function () {
                  t.current = null
                })
              : void 0
        }
        function Ki(e, t, n) {
          return (
            (n = null !== n && void 0 !== n ? n.concat([e]) : null),
            Vi(4, 4, Qi.bind(null, t, e), n)
          )
        }
        function Gi() {}
        function Yi(e, t) {
          var n = Ni()
          t = void 0 === t ? null : t
          var r = n.memoizedState
          return null !== r && null !== t && _i(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e)
        }
        function Xi(e, t) {
          var n = Ni()
          t = void 0 === t ? null : t
          var r = n.memoizedState
          return null !== r && null !== t && _i(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e)
        }
        function Ji(e, t, n) {
          return 0 === (21 & hi)
            ? (e.baseState && ((e.baseState = !1), (wl = !0)),
              (e.memoizedState = n))
            : (lr(n, t) ||
                ((n = mt()), (mi.lanes |= n), (Ds |= n), (e.baseState = !0)),
              t)
        }
        function Zi(e, t) {
          var n = bt
          ;(bt = 0 !== n && 4 > n ? n : 4), e(!0)
          var r = pi.transition
          pi.transition = {}
          try {
            e(!1), t()
          } finally {
            ;(bt = n), (pi.transition = r)
          }
        }
        function el() {
          return Ni().memoizedState
        }
        function tl(e, t, n) {
          var r = nu(e)
          if (
            ((n = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            }),
            rl(e))
          )
            ol(t, n)
          else if (null !== (n = Ta(e, t, n, r))) {
            ru(n, e, r, tu()), al(n, t, r)
          }
        }
        function nl(e, t, n) {
          var r = nu(e),
            o = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            }
          if (rl(e)) ol(t, o)
          else {
            var a = e.alternate
            if (
              0 === e.lanes &&
              (null === a || 0 === a.lanes) &&
              null !== (a = t.lastRenderedReducer)
            )
              try {
                var i = t.lastRenderedState,
                  l = a(i, n)
                if (((o.hasEagerState = !0), (o.eagerState = l), lr(l, i))) {
                  var s = t.interleaved
                  return (
                    null === s
                      ? ((o.next = o), Pa(t))
                      : ((o.next = s.next), (s.next = o)),
                    void (t.interleaved = o)
                  )
                }
              } catch (u) {}
            null !== (n = Ta(e, t, o, r)) &&
              (ru(n, e, r, (o = tu())), al(n, t, r))
          }
        }
        function rl(e) {
          var t = e.alternate
          return e === mi || (null !== t && t === mi)
        }
        function ol(e, t) {
          bi = yi = !0
          var n = e.pending
          null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
            (e.pending = t)
        }
        function al(e, t, n) {
          if (0 !== (4194240 & n)) {
            var r = t.lanes
            ;(n |= r &= e.pendingLanes), (t.lanes = n), yt(e, n)
          }
        }
        var il = {
            readContext: xa,
            useCallback: Si,
            useContext: Si,
            useEffect: Si,
            useImperativeHandle: Si,
            useInsertionEffect: Si,
            useLayoutEffect: Si,
            useMemo: Si,
            useReducer: Si,
            useRef: Si,
            useState: Si,
            useDebugValue: Si,
            useDeferredValue: Si,
            useTransition: Si,
            useMutableSource: Si,
            useSyncExternalStore: Si,
            useId: Si,
            unstable_isNewReconciler: !1,
          },
          ll = {
            readContext: xa,
            useCallback: function (e, t) {
              return (xi().memoizedState = [e, void 0 === t ? null : t]), e
            },
            useContext: xa,
            useEffect: Hi,
            useImperativeHandle: function (e, t, n) {
              return (
                (n = null !== n && void 0 !== n ? n.concat([e]) : null),
                Ui(4194308, 4, Qi.bind(null, t, e), n)
              )
            },
            useLayoutEffect: function (e, t) {
              return Ui(4194308, 4, e, t)
            },
            useInsertionEffect: function (e, t) {
              return Ui(4, 2, e, t)
            },
            useMemo: function (e, t) {
              var n = xi()
              return (
                (t = void 0 === t ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
              )
            },
            useReducer: function (e, t, n) {
              var r = xi()
              return (
                (t = void 0 !== n ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = {
                  pending: null,
                  interleaved: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: e,
                  lastRenderedState: t,
                }),
                (r.queue = e),
                (e = e.dispatch = tl.bind(null, mi, e)),
                [r.memoizedState, e]
              )
            },
            useRef: function (e) {
              return (e = { current: e }), (xi().memoizedState = e)
            },
            useState: Fi,
            useDebugValue: Gi,
            useDeferredValue: function (e) {
              return (xi().memoizedState = e)
            },
            useTransition: function () {
              var e = Fi(!1),
                t = e[0]
              return (e = Zi.bind(null, e[1])), (xi().memoizedState = e), [t, e]
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, t, n) {
              var r = mi,
                o = xi()
              if (aa) {
                if (void 0 === n) throw Error(a(407))
                n = n()
              } else {
                if (((n = t()), null === Os)) throw Error(a(349))
                0 !== (30 & hi) || Ai(r, t, n)
              }
              o.memoizedState = n
              var i = { value: n, getSnapshot: t }
              return (
                (o.queue = i),
                Hi(zi.bind(null, r, i, e), [e]),
                (r.flags |= 2048),
                Ii(9, ji.bind(null, r, i, n, t), void 0, null),
                n
              )
            },
            useId: function () {
              var e = xi(),
                t = Os.identifierPrefix
              if (aa) {
                var n = Jo
                ;(t =
                  ':' +
                  t +
                  'R' +
                  (n = (Xo & ~(1 << (32 - it(Xo) - 1))).toString(32) + n)),
                  0 < (n = wi++) && (t += 'H' + n.toString(32)),
                  (t += ':')
              } else t = ':' + t + 'r' + (n = ki++).toString(32) + ':'
              return (e.memoizedState = t)
            },
            unstable_isNewReconciler: !1,
          },
          sl = {
            readContext: xa,
            useCallback: Yi,
            useContext: xa,
            useEffect: $i,
            useImperativeHandle: Ki,
            useInsertionEffect: qi,
            useLayoutEffect: Wi,
            useMemo: Xi,
            useReducer: Ti,
            useRef: Bi,
            useState: function () {
              return Ti(Pi)
            },
            useDebugValue: Gi,
            useDeferredValue: function (e) {
              return Ji(Ni(), vi.memoizedState, e)
            },
            useTransition: function () {
              return [Ti(Pi)[0], Ni().memoizedState]
            },
            useMutableSource: Ri,
            useSyncExternalStore: Li,
            useId: el,
            unstable_isNewReconciler: !1,
          },
          ul = {
            readContext: xa,
            useCallback: Yi,
            useContext: xa,
            useEffect: $i,
            useImperativeHandle: Ki,
            useInsertionEffect: qi,
            useLayoutEffect: Wi,
            useMemo: Xi,
            useReducer: Oi,
            useRef: Bi,
            useState: function () {
              return Oi(Pi)
            },
            useDebugValue: Gi,
            useDeferredValue: function (e) {
              var t = Ni()
              return null === vi
                ? (t.memoizedState = e)
                : Ji(t, vi.memoizedState, e)
            },
            useTransition: function () {
              return [Oi(Pi)[0], Ni().memoizedState]
            },
            useMutableSource: Ri,
            useSyncExternalStore: Li,
            useId: el,
            unstable_isNewReconciler: !1,
          }
        function cl(e, t) {
          try {
            var n = '',
              r = t
            do {
              ;(n += U(r)), (r = r.return)
            } while (r)
            var o = n
          } catch (a) {
            o = '\nError generating stack: ' + a.message + '\n' + a.stack
          }
          return { value: e, source: t, stack: o, digest: null }
        }
        function fl(e, t, n) {
          return {
            value: e,
            source: null,
            stack: null != n ? n : null,
            digest: null != t ? t : null,
          }
        }
        function dl(e, t) {
          try {
            console.error(t.value)
          } catch (n) {
            setTimeout(function () {
              throw n
            })
          }
        }
        var pl = 'function' === typeof WeakMap ? WeakMap : Map
        function hl(e, t, n) {
          ;((n = ja(-1, n)).tag = 3), (n.payload = { element: null })
          var r = t.value
          return (
            (n.callback = function () {
              qs || ((qs = !0), (Ws = r)), dl(0, t)
            }),
            n
          )
        }
        function ml(e, t, n) {
          ;(n = ja(-1, n)).tag = 3
          var r = e.type.getDerivedStateFromError
          if ('function' === typeof r) {
            var o = t.value
            ;(n.payload = function () {
              return r(o)
            }),
              (n.callback = function () {
                dl(0, t)
              })
          }
          var a = e.stateNode
          return (
            null !== a &&
              'function' === typeof a.componentDidCatch &&
              (n.callback = function () {
                dl(0, t),
                  'function' !== typeof r &&
                    (null === Qs ? (Qs = new Set([this])) : Qs.add(this))
                var e = t.stack
                this.componentDidCatch(t.value, {
                  componentStack: null !== e ? e : '',
                })
              }),
            n
          )
        }
        function vl(e, t, n) {
          var r = e.pingCache
          if (null === r) {
            r = e.pingCache = new pl()
            var o = new Set()
            r.set(t, o)
          } else void 0 === (o = r.get(t)) && ((o = new Set()), r.set(t, o))
          o.has(n) || (o.add(n), (e = xu.bind(null, e, t, n)), t.then(e, e))
        }
        function gl(e) {
          do {
            var t
            if (
              ((t = 13 === e.tag) &&
                (t = null === (t = e.memoizedState) || null !== t.dehydrated),
              t)
            )
              return e
            e = e.return
          } while (null !== e)
          return null
        }
        function yl(e, t, n, r, o) {
          return 0 === (1 & e.mode)
            ? (e === t
                ? (e.flags |= 65536)
                : ((e.flags |= 128),
                  (n.flags |= 131072),
                  (n.flags &= -52805),
                  1 === n.tag &&
                    (null === n.alternate
                      ? (n.tag = 17)
                      : (((t = ja(-1, 1)).tag = 2), za(n, t, 1))),
                  (n.lanes |= 1)),
              e)
            : ((e.flags |= 65536), (e.lanes = o), e)
        }
        var bl = w.ReactCurrentOwner,
          wl = !1
        function kl(e, t, n, r) {
          t.child = null === e ? Ja(t, null, n, r) : Xa(t, e.child, n, r)
        }
        function Sl(e, t, n, r, o) {
          n = n.render
          var a = t.ref
          return (
            Ca(t, o),
            (r = Ei(e, t, n, r, a, o)),
            (n = Ci()),
            null === e || wl
              ? (aa && n && ta(t), (t.flags |= 1), kl(e, t, r, o), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~o),
                ql(e, t, o))
          )
        }
        function _l(e, t, n, r, o) {
          if (null === e) {
            var a = n.type
            return 'function' !== typeof a ||
              Au(a) ||
              void 0 !== a.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((e = zu(n.type, null, r, t, t.mode, o)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = a), El(e, t, a, r, o))
          }
          if (((a = e.child), 0 === (e.lanes & o))) {
            var i = a.memoizedProps
            if (
              (n = null !== (n = n.compare) ? n : sr)(i, r) &&
              e.ref === t.ref
            )
              return ql(e, t, o)
          }
          return (
            (t.flags |= 1),
            ((e = ju(a, r)).ref = t.ref),
            (e.return = t),
            (t.child = e)
          )
        }
        function El(e, t, n, r, o) {
          if (null !== e) {
            var a = e.memoizedProps
            if (sr(a, r) && e.ref === t.ref) {
              if (((wl = !1), (t.pendingProps = r = a), 0 === (e.lanes & o)))
                return (t.lanes = e.lanes), ql(e, t, o)
              0 !== (131072 & e.flags) && (wl = !0)
            }
          }
          return Nl(e, t, n, r, o)
        }
        function Cl(e, t, n) {
          var r = t.pendingProps,
            o = r.children,
            a = null !== e ? e.memoizedState : null
          if ('hidden' === r.mode)
            if (0 === (1 & t.mode))
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                No(js, As),
                (As |= n)
            else {
              if (0 === (1073741824 & n))
                return (
                  (e = null !== a ? a.baseLanes | n : n),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null,
                  }),
                  (t.updateQueue = null),
                  No(js, As),
                  (As |= e),
                  null
                )
              ;(t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                (r = null !== a ? a.baseLanes : n),
                No(js, As),
                (As |= r)
            }
          else
            null !== a
              ? ((r = a.baseLanes | n), (t.memoizedState = null))
              : (r = n),
              No(js, As),
              (As |= r)
          return kl(e, t, o, n), t.child
        }
        function xl(e, t) {
          var n = t.ref
          ;((null === e && null !== n) || (null !== e && e.ref !== n)) &&
            ((t.flags |= 512), (t.flags |= 2097152))
        }
        function Nl(e, t, n, r, o) {
          var a = Ao(n) ? Ro : To.current
          return (
            (a = Lo(t, a)),
            Ca(t, o),
            (n = Ei(e, t, n, r, a, o)),
            (r = Ci()),
            null === e || wl
              ? (aa && r && ta(t), (t.flags |= 1), kl(e, t, n, o), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~o),
                ql(e, t, o))
          )
        }
        function Pl(e, t, n, r, o) {
          if (Ao(n)) {
            var a = !0
            Do(t)
          } else a = !1
          if ((Ca(t, o), null === t.stateNode))
            $l(e, t), $a(t, n, r), Wa(t, n, r, o), (r = !0)
          else if (null === e) {
            var i = t.stateNode,
              l = t.memoizedProps
            i.props = l
            var s = i.context,
              u = n.contextType
            'object' === typeof u && null !== u
              ? (u = xa(u))
              : (u = Lo(t, (u = Ao(n) ? Ro : To.current)))
            var c = n.getDerivedStateFromProps,
              f =
                'function' === typeof c ||
                'function' === typeof i.getSnapshotBeforeUpdate
            f ||
              ('function' !== typeof i.UNSAFE_componentWillReceiveProps &&
                'function' !== typeof i.componentWillReceiveProps) ||
              ((l !== r || s !== u) && qa(t, i, r, u)),
              (Ra = !1)
            var d = t.memoizedState
            ;(i.state = d),
              Fa(t, r, i, o),
              (s = t.memoizedState),
              l !== r || d !== s || Oo.current || Ra
                ? ('function' === typeof c &&
                    (Ua(t, n, c, r), (s = t.memoizedState)),
                  (l = Ra || Ha(t, n, l, r, d, s, u))
                    ? (f ||
                        ('function' !== typeof i.UNSAFE_componentWillMount &&
                          'function' !== typeof i.componentWillMount) ||
                        ('function' === typeof i.componentWillMount &&
                          i.componentWillMount(),
                        'function' === typeof i.UNSAFE_componentWillMount &&
                          i.UNSAFE_componentWillMount()),
                      'function' === typeof i.componentDidMount &&
                        (t.flags |= 4194308))
                    : ('function' === typeof i.componentDidMount &&
                        (t.flags |= 4194308),
                      (t.memoizedProps = r),
                      (t.memoizedState = s)),
                  (i.props = r),
                  (i.state = s),
                  (i.context = u),
                  (r = l))
                : ('function' === typeof i.componentDidMount &&
                    (t.flags |= 4194308),
                  (r = !1))
          } else {
            ;(i = t.stateNode),
              Aa(e, t),
              (l = t.memoizedProps),
              (u = t.type === t.elementType ? l : ga(t.type, l)),
              (i.props = u),
              (f = t.pendingProps),
              (d = i.context),
              'object' === typeof (s = n.contextType) && null !== s
                ? (s = xa(s))
                : (s = Lo(t, (s = Ao(n) ? Ro : To.current)))
            var p = n.getDerivedStateFromProps
            ;(c =
              'function' === typeof p ||
              'function' === typeof i.getSnapshotBeforeUpdate) ||
              ('function' !== typeof i.UNSAFE_componentWillReceiveProps &&
                'function' !== typeof i.componentWillReceiveProps) ||
              ((l !== f || d !== s) && qa(t, i, r, s)),
              (Ra = !1),
              (d = t.memoizedState),
              (i.state = d),
              Fa(t, r, i, o)
            var h = t.memoizedState
            l !== f || d !== h || Oo.current || Ra
              ? ('function' === typeof p &&
                  (Ua(t, n, p, r), (h = t.memoizedState)),
                (u = Ra || Ha(t, n, u, r, d, h, s) || !1)
                  ? (c ||
                      ('function' !== typeof i.UNSAFE_componentWillUpdate &&
                        'function' !== typeof i.componentWillUpdate) ||
                      ('function' === typeof i.componentWillUpdate &&
                        i.componentWillUpdate(r, h, s),
                      'function' === typeof i.UNSAFE_componentWillUpdate &&
                        i.UNSAFE_componentWillUpdate(r, h, s)),
                    'function' === typeof i.componentDidUpdate &&
                      (t.flags |= 4),
                    'function' === typeof i.getSnapshotBeforeUpdate &&
                      (t.flags |= 1024))
                  : ('function' !== typeof i.componentDidUpdate ||
                      (l === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 4),
                    'function' !== typeof i.getSnapshotBeforeUpdate ||
                      (l === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = h)),
                (i.props = r),
                (i.state = h),
                (i.context = s),
                (r = u))
              : ('function' !== typeof i.componentDidUpdate ||
                  (l === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 4),
                'function' !== typeof i.getSnapshotBeforeUpdate ||
                  (l === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 1024),
                (r = !1))
          }
          return Tl(e, t, n, r, a, o)
        }
        function Tl(e, t, n, r, o, a) {
          xl(e, t)
          var i = 0 !== (128 & t.flags)
          if (!r && !i) return o && Fo(t, n, !1), ql(e, t, a)
          ;(r = t.stateNode), (bl.current = t)
          var l =
            i && 'function' !== typeof n.getDerivedStateFromError
              ? null
              : r.render()
          return (
            (t.flags |= 1),
            null !== e && i
              ? ((t.child = Xa(t, e.child, null, a)),
                (t.child = Xa(t, null, l, a)))
              : kl(e, t, l, a),
            (t.memoizedState = r.state),
            o && Fo(t, n, !0),
            t.child
          )
        }
        function Ol(e) {
          var t = e.stateNode
          t.pendingContext
            ? zo(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && zo(0, t.context, !1),
            oi(e, t.containerInfo)
        }
        function Rl(e, t, n, r, o) {
          return ha(), ma(o), (t.flags |= 256), kl(e, t, n, r), t.child
        }
        var Ll,
          Al,
          jl,
          zl,
          Ml = { dehydrated: null, treeContext: null, retryLane: 0 }
        function Dl(e) {
          return { baseLanes: e, cachePool: null, transitions: null }
        }
        function Fl(e, t, n) {
          var r,
            o = t.pendingProps,
            i = si.current,
            l = !1,
            s = 0 !== (128 & t.flags)
          if (
            ((r = s) ||
              (r = (null === e || null !== e.memoizedState) && 0 !== (2 & i)),
            r
              ? ((l = !0), (t.flags &= -129))
              : (null !== e && null === e.memoizedState) || (i |= 1),
            No(si, 1 & i),
            null === e)
          )
            return (
              ca(t),
              null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
                ? (0 === (1 & t.mode)
                    ? (t.lanes = 1)
                    : '$!' === e.data
                      ? (t.lanes = 8)
                      : (t.lanes = 1073741824),
                  null)
                : ((s = o.children),
                  (e = o.fallback),
                  l
                    ? ((o = t.mode),
                      (l = t.child),
                      (s = { mode: 'hidden', children: s }),
                      0 === (1 & o) && null !== l
                        ? ((l.childLanes = 0), (l.pendingProps = s))
                        : (l = Du(s, o, 0, null)),
                      (e = Mu(e, o, n, null)),
                      (l.return = t),
                      (e.return = t),
                      (l.sibling = e),
                      (t.child = l),
                      (t.child.memoizedState = Dl(n)),
                      (t.memoizedState = Ml),
                      e)
                    : Il(t, s))
            )
          if (null !== (i = e.memoizedState) && null !== (r = i.dehydrated))
            return (function (e, t, n, r, o, i, l) {
              if (n)
                return 256 & t.flags
                  ? ((t.flags &= -257), Bl(e, t, l, (r = fl(Error(a(422))))))
                  : null !== t.memoizedState
                    ? ((t.child = e.child), (t.flags |= 128), null)
                    : ((i = r.fallback),
                      (o = t.mode),
                      (r = Du(
                        { mode: 'visible', children: r.children },
                        o,
                        0,
                        null,
                      )),
                      ((i = Mu(i, o, l, null)).flags |= 2),
                      (r.return = t),
                      (i.return = t),
                      (r.sibling = i),
                      (t.child = r),
                      0 !== (1 & t.mode) && Xa(t, e.child, null, l),
                      (t.child.memoizedState = Dl(l)),
                      (t.memoizedState = Ml),
                      i)
              if (0 === (1 & t.mode)) return Bl(e, t, l, null)
              if ('$!' === o.data) {
                if ((r = o.nextSibling && o.nextSibling.dataset)) var s = r.dgst
                return (
                  (r = s), Bl(e, t, l, (r = fl((i = Error(a(419))), r, void 0)))
                )
              }
              if (((s = 0 !== (l & e.childLanes)), wl || s)) {
                if (null !== (r = Os)) {
                  switch (l & -l) {
                    case 4:
                      o = 2
                      break
                    case 16:
                      o = 8
                      break
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                      o = 32
                      break
                    case 536870912:
                      o = 268435456
                      break
                    default:
                      o = 0
                  }
                  0 !== (o = 0 !== (o & (r.suspendedLanes | l)) ? 0 : o) &&
                    o !== i.retryLane &&
                    ((i.retryLane = o), Oa(e, o), ru(r, e, o, -1))
                }
                return vu(), Bl(e, t, l, (r = fl(Error(a(421)))))
              }
              return '$?' === o.data
                ? ((t.flags |= 128),
                  (t.child = e.child),
                  (t = Pu.bind(null, e)),
                  (o._reactRetry = t),
                  null)
                : ((e = i.treeContext),
                  (oa = uo(o.nextSibling)),
                  (ra = t),
                  (aa = !0),
                  (ia = null),
                  null !== e &&
                    ((Ko[Go++] = Xo),
                    (Ko[Go++] = Jo),
                    (Ko[Go++] = Yo),
                    (Xo = e.id),
                    (Jo = e.overflow),
                    (Yo = t)),
                  (t = Il(t, r.children)),
                  (t.flags |= 4096),
                  t)
            })(e, t, s, o, r, i, n)
          if (l) {
            ;(l = o.fallback), (s = t.mode), (r = (i = e.child).sibling)
            var u = { mode: 'hidden', children: o.children }
            return (
              0 === (1 & s) && t.child !== i
                ? (((o = t.child).childLanes = 0),
                  (o.pendingProps = u),
                  (t.deletions = null))
                : ((o = ju(i, u)).subtreeFlags = 14680064 & i.subtreeFlags),
              null !== r
                ? (l = ju(r, l))
                : ((l = Mu(l, s, n, null)).flags |= 2),
              (l.return = t),
              (o.return = t),
              (o.sibling = l),
              (t.child = o),
              (o = l),
              (l = t.child),
              (s =
                null === (s = e.child.memoizedState)
                  ? Dl(n)
                  : {
                      baseLanes: s.baseLanes | n,
                      cachePool: null,
                      transitions: s.transitions,
                    }),
              (l.memoizedState = s),
              (l.childLanes = e.childLanes & ~n),
              (t.memoizedState = Ml),
              o
            )
          }
          return (
            (e = (l = e.child).sibling),
            (o = ju(l, { mode: 'visible', children: o.children })),
            0 === (1 & t.mode) && (o.lanes = n),
            (o.return = t),
            (o.sibling = null),
            null !== e &&
              (null === (n = t.deletions)
                ? ((t.deletions = [e]), (t.flags |= 16))
                : n.push(e)),
            (t.child = o),
            (t.memoizedState = null),
            o
          )
        }
        function Il(e, t) {
          return (
            ((t = Du(
              { mode: 'visible', children: t },
              e.mode,
              0,
              null,
            )).return = e),
            (e.child = t)
          )
        }
        function Bl(e, t, n, r) {
          return (
            null !== r && ma(r),
            Xa(t, e.child, null, n),
            ((e = Il(t, t.pendingProps.children)).flags |= 2),
            (t.memoizedState = null),
            e
          )
        }
        function Ul(e, t, n) {
          e.lanes |= t
          var r = e.alternate
          null !== r && (r.lanes |= t), Ea(e.return, t, n)
        }
        function Vl(e, t, n, r, o) {
          var a = e.memoizedState
          null === a
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: o,
              })
            : ((a.isBackwards = t),
              (a.rendering = null),
              (a.renderingStartTime = 0),
              (a.last = r),
              (a.tail = n),
              (a.tailMode = o))
        }
        function Hl(e, t, n) {
          var r = t.pendingProps,
            o = r.revealOrder,
            a = r.tail
          if ((kl(e, t, r.children, n), 0 !== (2 & (r = si.current))))
            (r = (1 & r) | 2), (t.flags |= 128)
          else {
            if (null !== e && 0 !== (128 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && Ul(e, n, t)
                else if (19 === e.tag) Ul(e, n, t)
                else if (null !== e.child) {
                  ;(e.child.return = e), (e = e.child)
                  continue
                }
                if (e === t) break e
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e
                  e = e.return
                }
                ;(e.sibling.return = e.return), (e = e.sibling)
              }
            r &= 1
          }
          if ((No(si, r), 0 === (1 & t.mode))) t.memoizedState = null
          else
            switch (o) {
              case 'forwards':
                for (n = t.child, o = null; null !== n; )
                  null !== (e = n.alternate) && null === ui(e) && (o = n),
                    (n = n.sibling)
                null === (n = o)
                  ? ((o = t.child), (t.child = null))
                  : ((o = n.sibling), (n.sibling = null)),
                  Vl(t, !1, o, n, a)
                break
              case 'backwards':
                for (n = null, o = t.child, t.child = null; null !== o; ) {
                  if (null !== (e = o.alternate) && null === ui(e)) {
                    t.child = o
                    break
                  }
                  ;(e = o.sibling), (o.sibling = n), (n = o), (o = e)
                }
                Vl(t, !0, n, null, a)
                break
              case 'together':
                Vl(t, !1, null, null, void 0)
                break
              default:
                t.memoizedState = null
            }
          return t.child
        }
        function $l(e, t) {
          0 === (1 & t.mode) &&
            null !== e &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2))
        }
        function ql(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (Ds |= t.lanes),
            0 === (n & t.childLanes))
          )
            return null
          if (null !== e && t.child !== e.child) throw Error(a(153))
          if (null !== t.child) {
            for (
              n = ju((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;

            )
              (e = e.sibling),
                ((n = n.sibling = ju(e, e.pendingProps)).return = t)
            n.sibling = null
          }
          return t.child
        }
        function Wl(e, t) {
          if (!aa)
            switch (e.tailMode) {
              case 'hidden':
                t = e.tail
                for (var n = null; null !== t; )
                  null !== t.alternate && (n = t), (t = t.sibling)
                null === n ? (e.tail = null) : (n.sibling = null)
                break
              case 'collapsed':
                n = e.tail
                for (var r = null; null !== n; )
                  null !== n.alternate && (r = n), (n = n.sibling)
                null === r
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null)
            }
        }
        function Ql(e) {
          var t = null !== e.alternate && e.alternate.child === e.child,
            n = 0,
            r = 0
          if (t)
            for (var o = e.child; null !== o; )
              (n |= o.lanes | o.childLanes),
                (r |= 14680064 & o.subtreeFlags),
                (r |= 14680064 & o.flags),
                (o.return = e),
                (o = o.sibling)
          else
            for (o = e.child; null !== o; )
              (n |= o.lanes | o.childLanes),
                (r |= o.subtreeFlags),
                (r |= o.flags),
                (o.return = e),
                (o = o.sibling)
          return (e.subtreeFlags |= r), (e.childLanes = n), t
        }
        function Kl(e, t, n) {
          var r = t.pendingProps
          switch ((na(t), t.tag)) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
              return Ql(t), null
            case 1:
            case 17:
              return Ao(t.type) && jo(), Ql(t), null
            case 3:
              return (
                (r = t.stateNode),
                ai(),
                xo(Oo),
                xo(To),
                fi(),
                r.pendingContext &&
                  ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (da(t)
                    ? (t.flags |= 4)
                    : null === e ||
                      (e.memoizedState.isDehydrated && 0 === (256 & t.flags)) ||
                      ((t.flags |= 1024),
                      null !== ia && (lu(ia), (ia = null)))),
                Al(e, t),
                Ql(t),
                null
              )
            case 5:
              li(t)
              var o = ri(ni.current)
              if (((n = t.type), null !== e && null != t.stateNode))
                jl(e, t, n, r, o),
                  e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152))
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(a(166))
                  return Ql(t), null
                }
                if (((e = ri(ei.current)), da(t))) {
                  ;(r = t.stateNode), (n = t.type)
                  var i = t.memoizedProps
                  switch (
                    ((r[po] = t), (r[ho] = i), (e = 0 !== (1 & t.mode)), n)
                  ) {
                    case 'dialog':
                      Ir('cancel', r), Ir('close', r)
                      break
                    case 'iframe':
                    case 'object':
                    case 'embed':
                      Ir('load', r)
                      break
                    case 'video':
                    case 'audio':
                      for (o = 0; o < zr.length; o++) Ir(zr[o], r)
                      break
                    case 'source':
                      Ir('error', r)
                      break
                    case 'img':
                    case 'image':
                    case 'link':
                      Ir('error', r), Ir('load', r)
                      break
                    case 'details':
                      Ir('toggle', r)
                      break
                    case 'input':
                      Y(r, i), Ir('invalid', r)
                      break
                    case 'select':
                      ;(r._wrapperState = { wasMultiple: !!i.multiple }),
                        Ir('invalid', r)
                      break
                    case 'textarea':
                      oe(r, i), Ir('invalid', r)
                  }
                  for (var s in (ye(n, i), (o = null), i))
                    if (i.hasOwnProperty(s)) {
                      var u = i[s]
                      'children' === s
                        ? 'string' === typeof u
                          ? r.textContent !== u &&
                            (!0 !== i.suppressHydrationWarning &&
                              Jr(r.textContent, u, e),
                            (o = ['children', u]))
                          : 'number' === typeof u &&
                            r.textContent !== '' + u &&
                            (!0 !== i.suppressHydrationWarning &&
                              Jr(r.textContent, u, e),
                            (o = ['children', '' + u]))
                        : l.hasOwnProperty(s) &&
                          null != u &&
                          'onScroll' === s &&
                          Ir('scroll', r)
                    }
                  switch (n) {
                    case 'input':
                      W(r), Z(r, i, !0)
                      break
                    case 'textarea':
                      W(r), ie(r)
                      break
                    case 'select':
                    case 'option':
                      break
                    default:
                      'function' === typeof i.onClick && (r.onclick = Zr)
                  }
                  ;(r = o), (t.updateQueue = r), null !== r && (t.flags |= 4)
                } else {
                  ;(s = 9 === o.nodeType ? o : o.ownerDocument),
                    'http://www.w3.org/1999/xhtml' === e && (e = le(n)),
                    'http://www.w3.org/1999/xhtml' === e
                      ? 'script' === n
                        ? (((e = s.createElement('div')).innerHTML =
                            '<script></script>'),
                          (e = e.removeChild(e.firstChild)))
                        : 'string' === typeof r.is
                          ? (e = s.createElement(n, { is: r.is }))
                          : ((e = s.createElement(n)),
                            'select' === n &&
                              ((s = e),
                              r.multiple
                                ? (s.multiple = !0)
                                : r.size && (s.size = r.size)))
                      : (e = s.createElementNS(e, n)),
                    (e[po] = t),
                    (e[ho] = r),
                    Ll(e, t, !1, !1),
                    (t.stateNode = e)
                  e: {
                    switch (((s = be(n, r)), n)) {
                      case 'dialog':
                        Ir('cancel', e), Ir('close', e), (o = r)
                        break
                      case 'iframe':
                      case 'object':
                      case 'embed':
                        Ir('load', e), (o = r)
                        break
                      case 'video':
                      case 'audio':
                        for (o = 0; o < zr.length; o++) Ir(zr[o], e)
                        o = r
                        break
                      case 'source':
                        Ir('error', e), (o = r)
                        break
                      case 'img':
                      case 'image':
                      case 'link':
                        Ir('error', e), Ir('load', e), (o = r)
                        break
                      case 'details':
                        Ir('toggle', e), (o = r)
                        break
                      case 'input':
                        Y(e, r), (o = G(e, r)), Ir('invalid', e)
                        break
                      case 'option':
                      default:
                        o = r
                        break
                      case 'select':
                        ;(e._wrapperState = { wasMultiple: !!r.multiple }),
                          (o = D({}, r, { value: void 0 })),
                          Ir('invalid', e)
                        break
                      case 'textarea':
                        oe(e, r), (o = re(e, r)), Ir('invalid', e)
                    }
                    for (i in (ye(n, o), (u = o)))
                      if (u.hasOwnProperty(i)) {
                        var c = u[i]
                        'style' === i
                          ? ve(e, c)
                          : 'dangerouslySetInnerHTML' === i
                            ? null != (c = c ? c.__html : void 0) && fe(e, c)
                            : 'children' === i
                              ? 'string' === typeof c
                                ? ('textarea' !== n || '' !== c) && de(e, c)
                                : 'number' === typeof c && de(e, '' + c)
                              : 'suppressContentEditableWarning' !== i &&
                                'suppressHydrationWarning' !== i &&
                                'autoFocus' !== i &&
                                (l.hasOwnProperty(i)
                                  ? null != c &&
                                    'onScroll' === i &&
                                    Ir('scroll', e)
                                  : null != c && b(e, i, c, s))
                      }
                    switch (n) {
                      case 'input':
                        W(e), Z(e, r, !1)
                        break
                      case 'textarea':
                        W(e), ie(e)
                        break
                      case 'option':
                        null != r.value &&
                          e.setAttribute('value', '' + $(r.value))
                        break
                      case 'select':
                        ;(e.multiple = !!r.multiple),
                          null != (i = r.value)
                            ? ne(e, !!r.multiple, i, !1)
                            : null != r.defaultValue &&
                              ne(e, !!r.multiple, r.defaultValue, !0)
                        break
                      default:
                        'function' === typeof o.onClick && (e.onclick = Zr)
                    }
                    switch (n) {
                      case 'button':
                      case 'input':
                      case 'select':
                      case 'textarea':
                        r = !!r.autoFocus
                        break e
                      case 'img':
                        r = !0
                        break e
                      default:
                        r = !1
                    }
                  }
                  r && (t.flags |= 4)
                }
                null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152))
              }
              return Ql(t), null
            case 6:
              if (e && null != t.stateNode) zl(e, t, e.memoizedProps, r)
              else {
                if ('string' !== typeof r && null === t.stateNode)
                  throw Error(a(166))
                if (((n = ri(ni.current)), ri(ei.current), da(t))) {
                  if (
                    ((r = t.stateNode),
                    (n = t.memoizedProps),
                    (r[po] = t),
                    (i = r.nodeValue !== n) && null !== (e = ra))
                  )
                    switch (e.tag) {
                      case 3:
                        Jr(r.nodeValue, n, 0 !== (1 & e.mode))
                        break
                      case 5:
                        !0 !== e.memoizedProps.suppressHydrationWarning &&
                          Jr(r.nodeValue, n, 0 !== (1 & e.mode))
                    }
                  i && (t.flags |= 4)
                } else
                  ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(
                    r,
                  ))[po] = t),
                    (t.stateNode = r)
              }
              return Ql(t), null
            case 13:
              if (
                (xo(si),
                (r = t.memoizedState),
                null === e ||
                  (null !== e.memoizedState &&
                    null !== e.memoizedState.dehydrated))
              ) {
                if (
                  aa &&
                  null !== oa &&
                  0 !== (1 & t.mode) &&
                  0 === (128 & t.flags)
                )
                  pa(), ha(), (t.flags |= 98560), (i = !1)
                else if (((i = da(t)), null !== r && null !== r.dehydrated)) {
                  if (null === e) {
                    if (!i) throw Error(a(318))
                    if (
                      !(i =
                        null !== (i = t.memoizedState) ? i.dehydrated : null)
                    )
                      throw Error(a(317))
                    i[po] = t
                  } else
                    ha(),
                      0 === (128 & t.flags) && (t.memoizedState = null),
                      (t.flags |= 4)
                  Ql(t), (i = !1)
                } else null !== ia && (lu(ia), (ia = null)), (i = !0)
                if (!i) return 65536 & t.flags ? t : null
              }
              return 0 !== (128 & t.flags)
                ? ((t.lanes = n), t)
                : ((r = null !== r) !==
                    (null !== e && null !== e.memoizedState) &&
                    r &&
                    ((t.child.flags |= 8192),
                    0 !== (1 & t.mode) &&
                      (null === e || 0 !== (1 & si.current)
                        ? 0 === zs && (zs = 3)
                        : vu())),
                  null !== t.updateQueue && (t.flags |= 4),
                  Ql(t),
                  null)
            case 4:
              return (
                ai(),
                Al(e, t),
                null === e && Vr(t.stateNode.containerInfo),
                Ql(t),
                null
              )
            case 10:
              return _a(t.type._context), Ql(t), null
            case 19:
              if ((xo(si), null === (i = t.memoizedState))) return Ql(t), null
              if (((r = 0 !== (128 & t.flags)), null === (s = i.rendering)))
                if (r) Wl(i, !1)
                else {
                  if (0 !== zs || (null !== e && 0 !== (128 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (s = ui(e))) {
                        for (
                          t.flags |= 128,
                            Wl(i, !1),
                            null !== (r = s.updateQueue) &&
                              ((t.updateQueue = r), (t.flags |= 4)),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child;
                          null !== n;

                        )
                          (e = r),
                            ((i = n).flags &= 14680066),
                            null === (s = i.alternate)
                              ? ((i.childLanes = 0),
                                (i.lanes = e),
                                (i.child = null),
                                (i.subtreeFlags = 0),
                                (i.memoizedProps = null),
                                (i.memoizedState = null),
                                (i.updateQueue = null),
                                (i.dependencies = null),
                                (i.stateNode = null))
                              : ((i.childLanes = s.childLanes),
                                (i.lanes = s.lanes),
                                (i.child = s.child),
                                (i.subtreeFlags = 0),
                                (i.deletions = null),
                                (i.memoizedProps = s.memoizedProps),
                                (i.memoizedState = s.memoizedState),
                                (i.updateQueue = s.updateQueue),
                                (i.type = s.type),
                                (e = s.dependencies),
                                (i.dependencies =
                                  null === e
                                    ? null
                                    : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext,
                                      })),
                            (n = n.sibling)
                        return No(si, (1 & si.current) | 2), t.child
                      }
                      e = e.sibling
                    }
                  null !== i.tail &&
                    Xe() > Hs &&
                    ((t.flags |= 128), (r = !0), Wl(i, !1), (t.lanes = 4194304))
                }
              else {
                if (!r)
                  if (null !== (e = ui(s))) {
                    if (
                      ((t.flags |= 128),
                      (r = !0),
                      null !== (n = e.updateQueue) &&
                        ((t.updateQueue = n), (t.flags |= 4)),
                      Wl(i, !0),
                      null === i.tail &&
                        'hidden' === i.tailMode &&
                        !s.alternate &&
                        !aa)
                    )
                      return Ql(t), null
                  } else
                    2 * Xe() - i.renderingStartTime > Hs &&
                      1073741824 !== n &&
                      ((t.flags |= 128),
                      (r = !0),
                      Wl(i, !1),
                      (t.lanes = 4194304))
                i.isBackwards
                  ? ((s.sibling = t.child), (t.child = s))
                  : (null !== (n = i.last) ? (n.sibling = s) : (t.child = s),
                    (i.last = s))
              }
              return null !== i.tail
                ? ((t = i.tail),
                  (i.rendering = t),
                  (i.tail = t.sibling),
                  (i.renderingStartTime = Xe()),
                  (t.sibling = null),
                  (n = si.current),
                  No(si, r ? (1 & n) | 2 : 1 & n),
                  t)
                : (Ql(t), null)
            case 22:
            case 23:
              return (
                du(),
                (r = null !== t.memoizedState),
                null !== e &&
                  (null !== e.memoizedState) !== r &&
                  (t.flags |= 8192),
                r && 0 !== (1 & t.mode)
                  ? 0 !== (1073741824 & As) &&
                    (Ql(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                  : Ql(t),
                null
              )
            case 24:
            case 25:
              return null
          }
          throw Error(a(156, t.tag))
        }
        function Gl(e, t) {
          switch ((na(t), t.tag)) {
            case 1:
              return (
                Ao(t.type) && jo(),
                65536 & (e = t.flags)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              )
            case 3:
              return (
                ai(),
                xo(Oo),
                xo(To),
                fi(),
                0 !== (65536 & (e = t.flags)) && 0 === (128 & e)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              )
            case 5:
              return li(t), null
            case 13:
              if (
                (xo(si),
                null !== (e = t.memoizedState) && null !== e.dehydrated)
              ) {
                if (null === t.alternate) throw Error(a(340))
                ha()
              }
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null
            case 19:
              return xo(si), null
            case 4:
              return ai(), null
            case 10:
              return _a(t.type._context), null
            case 22:
            case 23:
              return du(), null
            default:
              return null
          }
        }
        ;(Ll = function (e, t) {
          for (var n = t.child; null !== n; ) {
            if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode)
            else if (4 !== n.tag && null !== n.child) {
              ;(n.child.return = n), (n = n.child)
              continue
            }
            if (n === t) break
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === t) return
              n = n.return
            }
            ;(n.sibling.return = n.return), (n = n.sibling)
          }
        }),
          (Al = function () {}),
          (jl = function (e, t, n, r) {
            var o = e.memoizedProps
            if (o !== r) {
              ;(e = t.stateNode), ri(ei.current)
              var a,
                i = null
              switch (n) {
                case 'input':
                  ;(o = G(e, o)), (r = G(e, r)), (i = [])
                  break
                case 'select':
                  ;(o = D({}, o, { value: void 0 })),
                    (r = D({}, r, { value: void 0 })),
                    (i = [])
                  break
                case 'textarea':
                  ;(o = re(e, o)), (r = re(e, r)), (i = [])
                  break
                default:
                  'function' !== typeof o.onClick &&
                    'function' === typeof r.onClick &&
                    (e.onclick = Zr)
              }
              for (c in (ye(n, r), (n = null), o))
                if (!r.hasOwnProperty(c) && o.hasOwnProperty(c) && null != o[c])
                  if ('style' === c) {
                    var s = o[c]
                    for (a in s)
                      s.hasOwnProperty(a) && (n || (n = {}), (n[a] = ''))
                  } else
                    'dangerouslySetInnerHTML' !== c &&
                      'children' !== c &&
                      'suppressContentEditableWarning' !== c &&
                      'suppressHydrationWarning' !== c &&
                      'autoFocus' !== c &&
                      (l.hasOwnProperty(c)
                        ? i || (i = [])
                        : (i = i || []).push(c, null))
              for (c in r) {
                var u = r[c]
                if (
                  ((s = null != o ? o[c] : void 0),
                  r.hasOwnProperty(c) && u !== s && (null != u || null != s))
                )
                  if ('style' === c)
                    if (s) {
                      for (a in s)
                        !s.hasOwnProperty(a) ||
                          (u && u.hasOwnProperty(a)) ||
                          (n || (n = {}), (n[a] = ''))
                      for (a in u)
                        u.hasOwnProperty(a) &&
                          s[a] !== u[a] &&
                          (n || (n = {}), (n[a] = u[a]))
                    } else n || (i || (i = []), i.push(c, n)), (n = u)
                  else
                    'dangerouslySetInnerHTML' === c
                      ? ((u = u ? u.__html : void 0),
                        (s = s ? s.__html : void 0),
                        null != u && s !== u && (i = i || []).push(c, u))
                      : 'children' === c
                        ? ('string' !== typeof u && 'number' !== typeof u) ||
                          (i = i || []).push(c, '' + u)
                        : 'suppressContentEditableWarning' !== c &&
                          'suppressHydrationWarning' !== c &&
                          (l.hasOwnProperty(c)
                            ? (null != u && 'onScroll' === c && Ir('scroll', e),
                              i || s === u || (i = []))
                            : (i = i || []).push(c, u))
              }
              n && (i = i || []).push('style', n)
              var c = i
              ;(t.updateQueue = c) && (t.flags |= 4)
            }
          }),
          (zl = function (e, t, n, r) {
            n !== r && (t.flags |= 4)
          })
        var Yl = !1,
          Xl = !1,
          Jl = 'function' === typeof WeakSet ? WeakSet : Set,
          Zl = null
        function es(e, t) {
          var n = e.ref
          if (null !== n)
            if ('function' === typeof n)
              try {
                n(null)
              } catch (r) {
                Cu(e, t, r)
              }
            else n.current = null
        }
        function ts(e, t, n) {
          try {
            n()
          } catch (r) {
            Cu(e, t, r)
          }
        }
        var ns = !1
        function rs(e, t, n) {
          var r = t.updateQueue
          if (null !== (r = null !== r ? r.lastEffect : null)) {
            var o = (r = r.next)
            do {
              if ((o.tag & e) === e) {
                var a = o.destroy
                ;(o.destroy = void 0), void 0 !== a && ts(t, n, a)
              }
              o = o.next
            } while (o !== r)
          }
        }
        function os(e, t) {
          if (
            null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)
          ) {
            var n = (t = t.next)
            do {
              if ((n.tag & e) === e) {
                var r = n.create
                n.destroy = r()
              }
              n = n.next
            } while (n !== t)
          }
        }
        function as(e) {
          var t = e.ref
          if (null !== t) {
            var n = e.stateNode
            e.tag, (e = n), 'function' === typeof t ? t(e) : (t.current = e)
          }
        }
        function is(e) {
          var t = e.alternate
          null !== t && ((e.alternate = null), is(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag &&
              null !== (t = e.stateNode) &&
              (delete t[po],
              delete t[ho],
              delete t[vo],
              delete t[go],
              delete t[yo]),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null)
        }
        function ls(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag
        }
        function ss(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || ls(e.return)) return null
              e = e.return
            }
            for (
              e.sibling.return = e.return, e = e.sibling;
              5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

            ) {
              if (2 & e.flags) continue e
              if (null === e.child || 4 === e.tag) continue e
              ;(e.child.return = e), (e = e.child)
            }
            if (!(2 & e.flags)) return e.stateNode
          }
        }
        function us(e, t, n) {
          var r = e.tag
          if (5 === r || 6 === r)
            (e = e.stateNode),
              t
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(e, t)
                  : n.insertBefore(e, t)
                : (8 === n.nodeType
                    ? (t = n.parentNode).insertBefore(e, n)
                    : (t = n).appendChild(e),
                  (null !== (n = n._reactRootContainer) && void 0 !== n) ||
                    null !== t.onclick ||
                    (t.onclick = Zr))
          else if (4 !== r && null !== (e = e.child))
            for (us(e, t, n), e = e.sibling; null !== e; )
              us(e, t, n), (e = e.sibling)
        }
        function cs(e, t, n) {
          var r = e.tag
          if (5 === r || 6 === r)
            (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e)
          else if (4 !== r && null !== (e = e.child))
            for (cs(e, t, n), e = e.sibling; null !== e; )
              cs(e, t, n), (e = e.sibling)
        }
        var fs = null,
          ds = !1
        function ps(e, t, n) {
          for (n = n.child; null !== n; ) hs(e, t, n), (n = n.sibling)
        }
        function hs(e, t, n) {
          if (at && 'function' === typeof at.onCommitFiberUnmount)
            try {
              at.onCommitFiberUnmount(ot, n)
            } catch (l) {}
          switch (n.tag) {
            case 5:
              Xl || es(n, t)
            case 6:
              var r = fs,
                o = ds
              ;(fs = null),
                ps(e, t, n),
                (ds = o),
                null !== (fs = r) &&
                  (ds
                    ? ((e = fs),
                      (n = n.stateNode),
                      8 === e.nodeType
                        ? e.parentNode.removeChild(n)
                        : e.removeChild(n))
                    : fs.removeChild(n.stateNode))
              break
            case 18:
              null !== fs &&
                (ds
                  ? ((e = fs),
                    (n = n.stateNode),
                    8 === e.nodeType
                      ? so(e.parentNode, n)
                      : 1 === e.nodeType && so(e, n),
                    Vt(e))
                  : so(fs, n.stateNode))
              break
            case 4:
              ;(r = fs),
                (o = ds),
                (fs = n.stateNode.containerInfo),
                (ds = !0),
                ps(e, t, n),
                (fs = r),
                (ds = o)
              break
            case 0:
            case 11:
            case 14:
            case 15:
              if (
                !Xl &&
                null !== (r = n.updateQueue) &&
                null !== (r = r.lastEffect)
              ) {
                o = r = r.next
                do {
                  var a = o,
                    i = a.destroy
                  ;(a = a.tag),
                    void 0 !== i &&
                      (0 !== (2 & a) || 0 !== (4 & a)) &&
                      ts(n, t, i),
                    (o = o.next)
                } while (o !== r)
              }
              ps(e, t, n)
              break
            case 1:
              if (
                !Xl &&
                (es(n, t),
                'function' === typeof (r = n.stateNode).componentWillUnmount)
              )
                try {
                  ;(r.props = n.memoizedProps),
                    (r.state = n.memoizedState),
                    r.componentWillUnmount()
                } catch (l) {
                  Cu(n, t, l)
                }
              ps(e, t, n)
              break
            case 21:
              ps(e, t, n)
              break
            case 22:
              1 & n.mode
                ? ((Xl = (r = Xl) || null !== n.memoizedState),
                  ps(e, t, n),
                  (Xl = r))
                : ps(e, t, n)
              break
            default:
              ps(e, t, n)
          }
        }
        function ms(e) {
          var t = e.updateQueue
          if (null !== t) {
            e.updateQueue = null
            var n = e.stateNode
            null === n && (n = e.stateNode = new Jl()),
              t.forEach(function (t) {
                var r = Tu.bind(null, e, t)
                n.has(t) || (n.add(t), t.then(r, r))
              })
          }
        }
        function vs(e, t) {
          var n = t.deletions
          if (null !== n)
            for (var r = 0; r < n.length; r++) {
              var o = n[r]
              try {
                var i = e,
                  l = t,
                  s = l
                e: for (; null !== s; ) {
                  switch (s.tag) {
                    case 5:
                      ;(fs = s.stateNode), (ds = !1)
                      break e
                    case 3:
                    case 4:
                      ;(fs = s.stateNode.containerInfo), (ds = !0)
                      break e
                  }
                  s = s.return
                }
                if (null === fs) throw Error(a(160))
                hs(i, l, o), (fs = null), (ds = !1)
                var u = o.alternate
                null !== u && (u.return = null), (o.return = null)
              } catch (c) {
                Cu(o, t, c)
              }
            }
          if (12854 & t.subtreeFlags)
            for (t = t.child; null !== t; ) gs(t, e), (t = t.sibling)
        }
        function gs(e, t) {
          var n = e.alternate,
            r = e.flags
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if ((vs(t, e), ys(e), 4 & r)) {
                try {
                  rs(3, e, e.return), os(3, e)
                } catch (v) {
                  Cu(e, e.return, v)
                }
                try {
                  rs(5, e, e.return)
                } catch (v) {
                  Cu(e, e.return, v)
                }
              }
              break
            case 1:
              vs(t, e), ys(e), 512 & r && null !== n && es(n, n.return)
              break
            case 5:
              if (
                (vs(t, e),
                ys(e),
                512 & r && null !== n && es(n, n.return),
                32 & e.flags)
              ) {
                var o = e.stateNode
                try {
                  de(o, '')
                } catch (v) {
                  Cu(e, e.return, v)
                }
              }
              if (4 & r && null != (o = e.stateNode)) {
                var i = e.memoizedProps,
                  l = null !== n ? n.memoizedProps : i,
                  s = e.type,
                  u = e.updateQueue
                if (((e.updateQueue = null), null !== u))
                  try {
                    'input' === s &&
                      'radio' === i.type &&
                      null != i.name &&
                      X(o, i),
                      be(s, l)
                    var c = be(s, i)
                    for (l = 0; l < u.length; l += 2) {
                      var f = u[l],
                        d = u[l + 1]
                      'style' === f
                        ? ve(o, d)
                        : 'dangerouslySetInnerHTML' === f
                          ? fe(o, d)
                          : 'children' === f
                            ? de(o, d)
                            : b(o, f, d, c)
                    }
                    switch (s) {
                      case 'input':
                        J(o, i)
                        break
                      case 'textarea':
                        ae(o, i)
                        break
                      case 'select':
                        var p = o._wrapperState.wasMultiple
                        o._wrapperState.wasMultiple = !!i.multiple
                        var h = i.value
                        null != h
                          ? ne(o, !!i.multiple, h, !1)
                          : p !== !!i.multiple &&
                            (null != i.defaultValue
                              ? ne(o, !!i.multiple, i.defaultValue, !0)
                              : ne(o, !!i.multiple, i.multiple ? [] : '', !1))
                    }
                    o[ho] = i
                  } catch (v) {
                    Cu(e, e.return, v)
                  }
              }
              break
            case 6:
              if ((vs(t, e), ys(e), 4 & r)) {
                if (null === e.stateNode) throw Error(a(162))
                ;(o = e.stateNode), (i = e.memoizedProps)
                try {
                  o.nodeValue = i
                } catch (v) {
                  Cu(e, e.return, v)
                }
              }
              break
            case 3:
              if (
                (vs(t, e),
                ys(e),
                4 & r && null !== n && n.memoizedState.isDehydrated)
              )
                try {
                  Vt(t.containerInfo)
                } catch (v) {
                  Cu(e, e.return, v)
                }
              break
            case 4:
            default:
              vs(t, e), ys(e)
              break
            case 13:
              vs(t, e),
                ys(e),
                8192 & (o = e.child).flags &&
                  ((i = null !== o.memoizedState),
                  (o.stateNode.isHidden = i),
                  !i ||
                    (null !== o.alternate &&
                      null !== o.alternate.memoizedState) ||
                    (Vs = Xe())),
                4 & r && ms(e)
              break
            case 22:
              if (
                ((f = null !== n && null !== n.memoizedState),
                1 & e.mode
                  ? ((Xl = (c = Xl) || f), vs(t, e), (Xl = c))
                  : vs(t, e),
                ys(e),
                8192 & r)
              ) {
                if (
                  ((c = null !== e.memoizedState),
                  (e.stateNode.isHidden = c) && !f && 0 !== (1 & e.mode))
                )
                  for (Zl = e, f = e.child; null !== f; ) {
                    for (d = Zl = f; null !== Zl; ) {
                      switch (((h = (p = Zl).child), p.tag)) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                          rs(4, p, p.return)
                          break
                        case 1:
                          es(p, p.return)
                          var m = p.stateNode
                          if ('function' === typeof m.componentWillUnmount) {
                            ;(r = p), (n = p.return)
                            try {
                              ;(t = r),
                                (m.props = t.memoizedProps),
                                (m.state = t.memoizedState),
                                m.componentWillUnmount()
                            } catch (v) {
                              Cu(r, n, v)
                            }
                          }
                          break
                        case 5:
                          es(p, p.return)
                          break
                        case 22:
                          if (null !== p.memoizedState) {
                            Ss(d)
                            continue
                          }
                      }
                      null !== h ? ((h.return = p), (Zl = h)) : Ss(d)
                    }
                    f = f.sibling
                  }
                e: for (f = null, d = e; ; ) {
                  if (5 === d.tag) {
                    if (null === f) {
                      f = d
                      try {
                        ;(o = d.stateNode),
                          c
                            ? 'function' === typeof (i = o.style).setProperty
                              ? i.setProperty('display', 'none', 'important')
                              : (i.display = 'none')
                            : ((s = d.stateNode),
                              (l =
                                void 0 !== (u = d.memoizedProps.style) &&
                                null !== u &&
                                u.hasOwnProperty('display')
                                  ? u.display
                                  : null),
                              (s.style.display = me('display', l)))
                      } catch (v) {
                        Cu(e, e.return, v)
                      }
                    }
                  } else if (6 === d.tag) {
                    if (null === f)
                      try {
                        d.stateNode.nodeValue = c ? '' : d.memoizedProps
                      } catch (v) {
                        Cu(e, e.return, v)
                      }
                  } else if (
                    ((22 !== d.tag && 23 !== d.tag) ||
                      null === d.memoizedState ||
                      d === e) &&
                    null !== d.child
                  ) {
                    ;(d.child.return = d), (d = d.child)
                    continue
                  }
                  if (d === e) break e
                  for (; null === d.sibling; ) {
                    if (null === d.return || d.return === e) break e
                    f === d && (f = null), (d = d.return)
                  }
                  f === d && (f = null),
                    (d.sibling.return = d.return),
                    (d = d.sibling)
                }
              }
              break
            case 19:
              vs(t, e), ys(e), 4 & r && ms(e)
            case 21:
          }
        }
        function ys(e) {
          var t = e.flags
          if (2 & t) {
            try {
              e: {
                for (var n = e.return; null !== n; ) {
                  if (ls(n)) {
                    var r = n
                    break e
                  }
                  n = n.return
                }
                throw Error(a(160))
              }
              switch (r.tag) {
                case 5:
                  var o = r.stateNode
                  32 & r.flags && (de(o, ''), (r.flags &= -33)), cs(e, ss(e), o)
                  break
                case 3:
                case 4:
                  var i = r.stateNode.containerInfo
                  us(e, ss(e), i)
                  break
                default:
                  throw Error(a(161))
              }
            } catch (l) {
              Cu(e, e.return, l)
            }
            e.flags &= -3
          }
          4096 & t && (e.flags &= -4097)
        }
        function bs(e, t, n) {
          ;(Zl = e), ws(e, t, n)
        }
        function ws(e, t, n) {
          for (var r = 0 !== (1 & e.mode); null !== Zl; ) {
            var o = Zl,
              a = o.child
            if (22 === o.tag && r) {
              var i = null !== o.memoizedState || Yl
              if (!i) {
                var l = o.alternate,
                  s = (null !== l && null !== l.memoizedState) || Xl
                l = Yl
                var u = Xl
                if (((Yl = i), (Xl = s) && !u))
                  for (Zl = o; null !== Zl; )
                    (s = (i = Zl).child),
                      22 === i.tag && null !== i.memoizedState
                        ? _s(o)
                        : null !== s
                          ? ((s.return = i), (Zl = s))
                          : _s(o)
                for (; null !== a; ) (Zl = a), ws(a, t, n), (a = a.sibling)
                ;(Zl = o), (Yl = l), (Xl = u)
              }
              ks(e)
            } else
              0 !== (8772 & o.subtreeFlags) && null !== a
                ? ((a.return = o), (Zl = a))
                : ks(e)
          }
        }
        function ks(e) {
          for (; null !== Zl; ) {
            var t = Zl
            if (0 !== (8772 & t.flags)) {
              var n = t.alternate
              try {
                if (0 !== (8772 & t.flags))
                  switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Xl || os(5, t)
                      break
                    case 1:
                      var r = t.stateNode
                      if (4 & t.flags && !Xl)
                        if (null === n) r.componentDidMount()
                        else {
                          var o =
                            t.elementType === t.type
                              ? n.memoizedProps
                              : ga(t.type, n.memoizedProps)
                          r.componentDidUpdate(
                            o,
                            n.memoizedState,
                            r.__reactInternalSnapshotBeforeUpdate,
                          )
                        }
                      var i = t.updateQueue
                      null !== i && Ia(t, i, r)
                      break
                    case 3:
                      var l = t.updateQueue
                      if (null !== l) {
                        if (((n = null), null !== t.child))
                          switch (t.child.tag) {
                            case 5:
                            case 1:
                              n = t.child.stateNode
                          }
                        Ia(t, l, n)
                      }
                      break
                    case 5:
                      var s = t.stateNode
                      if (null === n && 4 & t.flags) {
                        n = s
                        var u = t.memoizedProps
                        switch (t.type) {
                          case 'button':
                          case 'input':
                          case 'select':
                          case 'textarea':
                            u.autoFocus && n.focus()
                            break
                          case 'img':
                            u.src && (n.src = u.src)
                        }
                      }
                      break
                    case 6:
                    case 4:
                    case 12:
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                      break
                    case 13:
                      if (null === t.memoizedState) {
                        var c = t.alternate
                        if (null !== c) {
                          var f = c.memoizedState
                          if (null !== f) {
                            var d = f.dehydrated
                            null !== d && Vt(d)
                          }
                        }
                      }
                      break
                    default:
                      throw Error(a(163))
                  }
                Xl || (512 & t.flags && as(t))
              } catch (p) {
                Cu(t, t.return, p)
              }
            }
            if (t === e) {
              Zl = null
              break
            }
            if (null !== (n = t.sibling)) {
              ;(n.return = t.return), (Zl = n)
              break
            }
            Zl = t.return
          }
        }
        function Ss(e) {
          for (; null !== Zl; ) {
            var t = Zl
            if (t === e) {
              Zl = null
              break
            }
            var n = t.sibling
            if (null !== n) {
              ;(n.return = t.return), (Zl = n)
              break
            }
            Zl = t.return
          }
        }
        function _s(e) {
          for (; null !== Zl; ) {
            var t = Zl
            try {
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  var n = t.return
                  try {
                    os(4, t)
                  } catch (s) {
                    Cu(t, n, s)
                  }
                  break
                case 1:
                  var r = t.stateNode
                  if ('function' === typeof r.componentDidMount) {
                    var o = t.return
                    try {
                      r.componentDidMount()
                    } catch (s) {
                      Cu(t, o, s)
                    }
                  }
                  var a = t.return
                  try {
                    as(t)
                  } catch (s) {
                    Cu(t, a, s)
                  }
                  break
                case 5:
                  var i = t.return
                  try {
                    as(t)
                  } catch (s) {
                    Cu(t, i, s)
                  }
              }
            } catch (s) {
              Cu(t, t.return, s)
            }
            if (t === e) {
              Zl = null
              break
            }
            var l = t.sibling
            if (null !== l) {
              ;(l.return = t.return), (Zl = l)
              break
            }
            Zl = t.return
          }
        }
        var Es,
          Cs = Math.ceil,
          xs = w.ReactCurrentDispatcher,
          Ns = w.ReactCurrentOwner,
          Ps = w.ReactCurrentBatchConfig,
          Ts = 0,
          Os = null,
          Rs = null,
          Ls = 0,
          As = 0,
          js = Co(0),
          zs = 0,
          Ms = null,
          Ds = 0,
          Fs = 0,
          Is = 0,
          Bs = null,
          Us = null,
          Vs = 0,
          Hs = 1 / 0,
          $s = null,
          qs = !1,
          Ws = null,
          Qs = null,
          Ks = !1,
          Gs = null,
          Ys = 0,
          Xs = 0,
          Js = null,
          Zs = -1,
          eu = 0
        function tu() {
          return 0 !== (6 & Ts) ? Xe() : -1 !== Zs ? Zs : (Zs = Xe())
        }
        function nu(e) {
          return 0 === (1 & e.mode)
            ? 1
            : 0 !== (2 & Ts) && 0 !== Ls
              ? Ls & -Ls
              : null !== va.transition
                ? (0 === eu && (eu = mt()), eu)
                : 0 !== (e = bt)
                  ? e
                  : (e = void 0 === (e = window.event) ? 16 : Yt(e.type))
        }
        function ru(e, t, n, r) {
          if (50 < Xs) throw ((Xs = 0), (Js = null), Error(a(185)))
          gt(e, n, r),
            (0 !== (2 & Ts) && e === Os) ||
              (e === Os && (0 === (2 & Ts) && (Fs |= n), 4 === zs && su(e, Ls)),
              ou(e, r),
              1 === n &&
                0 === Ts &&
                0 === (1 & t.mode) &&
                ((Hs = Xe() + 500), Bo && Ho()))
        }
        function ou(e, t) {
          var n = e.callbackNode
          !(function (e, t) {
            for (
              var n = e.suspendedLanes,
                r = e.pingedLanes,
                o = e.expirationTimes,
                a = e.pendingLanes;
              0 < a;

            ) {
              var i = 31 - it(a),
                l = 1 << i,
                s = o[i]
              ;-1 === s
                ? (0 !== (l & n) && 0 === (l & r)) || (o[i] = pt(l, t))
                : s <= t && (e.expiredLanes |= l),
                (a &= ~l)
            }
          })(e, t)
          var r = dt(e, e === Os ? Ls : 0)
          if (0 === r)
            null !== n && Ke(n),
              (e.callbackNode = null),
              (e.callbackPriority = 0)
          else if (((t = r & -r), e.callbackPriority !== t)) {
            if ((null != n && Ke(n), 1 === t))
              0 === e.tag
                ? (function (e) {
                    ;(Bo = !0), Vo(e)
                  })(uu.bind(null, e))
                : Vo(uu.bind(null, e)),
                io(function () {
                  0 === (6 & Ts) && Ho()
                }),
                (n = null)
            else {
              switch (wt(r)) {
                case 1:
                  n = Ze
                  break
                case 4:
                  n = et
                  break
                case 16:
                default:
                  n = tt
                  break
                case 536870912:
                  n = rt
              }
              n = Ou(n, au.bind(null, e))
            }
            ;(e.callbackPriority = t), (e.callbackNode = n)
          }
        }
        function au(e, t) {
          if (((Zs = -1), (eu = 0), 0 !== (6 & Ts))) throw Error(a(327))
          var n = e.callbackNode
          if (_u() && e.callbackNode !== n) return null
          var r = dt(e, e === Os ? Ls : 0)
          if (0 === r) return null
          if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || t) t = gu(e, r)
          else {
            t = r
            var o = Ts
            Ts |= 2
            var i = mu()
            for (
              (Os === e && Ls === t) ||
              (($s = null), (Hs = Xe() + 500), pu(e, t));
              ;

            )
              try {
                bu()
                break
              } catch (s) {
                hu(e, s)
              }
            Sa(),
              (xs.current = i),
              (Ts = o),
              null !== Rs ? (t = 0) : ((Os = null), (Ls = 0), (t = zs))
          }
          if (0 !== t) {
            if (
              (2 === t && 0 !== (o = ht(e)) && ((r = o), (t = iu(e, o))),
              1 === t)
            )
              throw ((n = Ms), pu(e, 0), su(e, r), ou(e, Xe()), n)
            if (6 === t) su(e, r)
            else {
              if (
                ((o = e.current.alternate),
                0 === (30 & r) &&
                  !(function (e) {
                    for (var t = e; ; ) {
                      if (16384 & t.flags) {
                        var n = t.updateQueue
                        if (null !== n && null !== (n = n.stores))
                          for (var r = 0; r < n.length; r++) {
                            var o = n[r],
                              a = o.getSnapshot
                            o = o.value
                            try {
                              if (!lr(a(), o)) return !1
                            } catch (l) {
                              return !1
                            }
                          }
                      }
                      if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
                        (n.return = t), (t = n)
                      else {
                        if (t === e) break
                        for (; null === t.sibling; ) {
                          if (null === t.return || t.return === e) return !0
                          t = t.return
                        }
                        ;(t.sibling.return = t.return), (t = t.sibling)
                      }
                    }
                    return !0
                  })(o) &&
                  (2 === (t = gu(e, r)) &&
                    0 !== (i = ht(e)) &&
                    ((r = i), (t = iu(e, i))),
                  1 === t))
              )
                throw ((n = Ms), pu(e, 0), su(e, r), ou(e, Xe()), n)
              switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                  throw Error(a(345))
                case 2:
                case 5:
                  Su(e, Us, $s)
                  break
                case 3:
                  if (
                    (su(e, r),
                    (130023424 & r) === r && 10 < (t = Vs + 500 - Xe()))
                  ) {
                    if (0 !== dt(e, 0)) break
                    if (((o = e.suspendedLanes) & r) !== r) {
                      tu(), (e.pingedLanes |= e.suspendedLanes & o)
                      break
                    }
                    e.timeoutHandle = ro(Su.bind(null, e, Us, $s), t)
                    break
                  }
                  Su(e, Us, $s)
                  break
                case 4:
                  if ((su(e, r), (4194240 & r) === r)) break
                  for (t = e.eventTimes, o = -1; 0 < r; ) {
                    var l = 31 - it(r)
                    ;(i = 1 << l), (l = t[l]) > o && (o = l), (r &= ~i)
                  }
                  if (
                    ((r = o),
                    10 <
                      (r =
                        (120 > (r = Xe() - r)
                          ? 120
                          : 480 > r
                            ? 480
                            : 1080 > r
                              ? 1080
                              : 1920 > r
                                ? 1920
                                : 3e3 > r
                                  ? 3e3
                                  : 4320 > r
                                    ? 4320
                                    : 1960 * Cs(r / 1960)) - r))
                  ) {
                    e.timeoutHandle = ro(Su.bind(null, e, Us, $s), r)
                    break
                  }
                  Su(e, Us, $s)
                  break
                default:
                  throw Error(a(329))
              }
            }
          }
          return ou(e, Xe()), e.callbackNode === n ? au.bind(null, e) : null
        }
        function iu(e, t) {
          var n = Bs
          return (
            e.current.memoizedState.isDehydrated && (pu(e, t).flags |= 256),
            2 !== (e = gu(e, t)) && ((t = Us), (Us = n), null !== t && lu(t)),
            e
          )
        }
        function lu(e) {
          null === Us ? (Us = e) : Us.push.apply(Us, e)
        }
        function su(e, t) {
          for (
            t &= ~Is,
              t &= ~Fs,
              e.suspendedLanes |= t,
              e.pingedLanes &= ~t,
              e = e.expirationTimes;
            0 < t;

          ) {
            var n = 31 - it(t),
              r = 1 << n
            ;(e[n] = -1), (t &= ~r)
          }
        }
        function uu(e) {
          if (0 !== (6 & Ts)) throw Error(a(327))
          _u()
          var t = dt(e, 0)
          if (0 === (1 & t)) return ou(e, Xe()), null
          var n = gu(e, t)
          if (0 !== e.tag && 2 === n) {
            var r = ht(e)
            0 !== r && ((t = r), (n = iu(e, r)))
          }
          if (1 === n) throw ((n = Ms), pu(e, 0), su(e, t), ou(e, Xe()), n)
          if (6 === n) throw Error(a(345))
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            Su(e, Us, $s),
            ou(e, Xe()),
            null
          )
        }
        function cu(e, t) {
          var n = Ts
          Ts |= 1
          try {
            return e(t)
          } finally {
            0 === (Ts = n) && ((Hs = Xe() + 500), Bo && Ho())
          }
        }
        function fu(e) {
          null !== Gs && 0 === Gs.tag && 0 === (6 & Ts) && _u()
          var t = Ts
          Ts |= 1
          var n = Ps.transition,
            r = bt
          try {
            if (((Ps.transition = null), (bt = 1), e)) return e()
          } finally {
            ;(bt = r), (Ps.transition = n), 0 === (6 & (Ts = t)) && Ho()
          }
        }
        function du() {
          ;(As = js.current), xo(js)
        }
        function pu(e, t) {
          ;(e.finishedWork = null), (e.finishedLanes = 0)
          var n = e.timeoutHandle
          if ((-1 !== n && ((e.timeoutHandle = -1), oo(n)), null !== Rs))
            for (n = Rs.return; null !== n; ) {
              var r = n
              switch ((na(r), r.tag)) {
                case 1:
                  null !== (r = r.type.childContextTypes) &&
                    void 0 !== r &&
                    jo()
                  break
                case 3:
                  ai(), xo(Oo), xo(To), fi()
                  break
                case 5:
                  li(r)
                  break
                case 4:
                  ai()
                  break
                case 13:
                case 19:
                  xo(si)
                  break
                case 10:
                  _a(r.type._context)
                  break
                case 22:
                case 23:
                  du()
              }
              n = n.return
            }
          if (
            ((Os = e),
            (Rs = e = ju(e.current, null)),
            (Ls = As = t),
            (zs = 0),
            (Ms = null),
            (Is = Fs = Ds = 0),
            (Us = Bs = null),
            null !== Na)
          ) {
            for (t = 0; t < Na.length; t++)
              if (null !== (r = (n = Na[t]).interleaved)) {
                n.interleaved = null
                var o = r.next,
                  a = n.pending
                if (null !== a) {
                  var i = a.next
                  ;(a.next = o), (r.next = i)
                }
                n.pending = r
              }
            Na = null
          }
          return e
        }
        function hu(e, t) {
          for (;;) {
            var n = Rs
            try {
              if ((Sa(), (di.current = il), yi)) {
                for (var r = mi.memoizedState; null !== r; ) {
                  var o = r.queue
                  null !== o && (o.pending = null), (r = r.next)
                }
                yi = !1
              }
              if (
                ((hi = 0),
                (gi = vi = mi = null),
                (bi = !1),
                (wi = 0),
                (Ns.current = null),
                null === n || null === n.return)
              ) {
                ;(zs = 1), (Ms = t), (Rs = null)
                break
              }
              e: {
                var i = e,
                  l = n.return,
                  s = n,
                  u = t
                if (
                  ((t = Ls),
                  (s.flags |= 32768),
                  null !== u &&
                    'object' === typeof u &&
                    'function' === typeof u.then)
                ) {
                  var c = u,
                    f = s,
                    d = f.tag
                  if (0 === (1 & f.mode) && (0 === d || 11 === d || 15 === d)) {
                    var p = f.alternate
                    p
                      ? ((f.updateQueue = p.updateQueue),
                        (f.memoizedState = p.memoizedState),
                        (f.lanes = p.lanes))
                      : ((f.updateQueue = null), (f.memoizedState = null))
                  }
                  var h = gl(l)
                  if (null !== h) {
                    ;(h.flags &= -257),
                      yl(h, l, s, 0, t),
                      1 & h.mode && vl(i, c, t),
                      (u = c)
                    var m = (t = h).updateQueue
                    if (null === m) {
                      var v = new Set()
                      v.add(u), (t.updateQueue = v)
                    } else m.add(u)
                    break e
                  }
                  if (0 === (1 & t)) {
                    vl(i, c, t), vu()
                    break e
                  }
                  u = Error(a(426))
                } else if (aa && 1 & s.mode) {
                  var g = gl(l)
                  if (null !== g) {
                    0 === (65536 & g.flags) && (g.flags |= 256),
                      yl(g, l, s, 0, t),
                      ma(cl(u, s))
                    break e
                  }
                }
                ;(i = u = cl(u, s)),
                  4 !== zs && (zs = 2),
                  null === Bs ? (Bs = [i]) : Bs.push(i),
                  (i = l)
                do {
                  switch (i.tag) {
                    case 3:
                      ;(i.flags |= 65536),
                        (t &= -t),
                        (i.lanes |= t),
                        Da(i, hl(0, u, t))
                      break e
                    case 1:
                      s = u
                      var y = i.type,
                        b = i.stateNode
                      if (
                        0 === (128 & i.flags) &&
                        ('function' === typeof y.getDerivedStateFromError ||
                          (null !== b &&
                            'function' === typeof b.componentDidCatch &&
                            (null === Qs || !Qs.has(b))))
                      ) {
                        ;(i.flags |= 65536),
                          (t &= -t),
                          (i.lanes |= t),
                          Da(i, ml(i, s, t))
                        break e
                      }
                  }
                  i = i.return
                } while (null !== i)
              }
              ku(n)
            } catch (w) {
              ;(t = w), Rs === n && null !== n && (Rs = n = n.return)
              continue
            }
            break
          }
        }
        function mu() {
          var e = xs.current
          return (xs.current = il), null === e ? il : e
        }
        function vu() {
          ;(0 !== zs && 3 !== zs && 2 !== zs) || (zs = 4),
            null === Os ||
              (0 === (268435455 & Ds) && 0 === (268435455 & Fs)) ||
              su(Os, Ls)
        }
        function gu(e, t) {
          var n = Ts
          Ts |= 2
          var r = mu()
          for ((Os === e && Ls === t) || (($s = null), pu(e, t)); ; )
            try {
              yu()
              break
            } catch (o) {
              hu(e, o)
            }
          if ((Sa(), (Ts = n), (xs.current = r), null !== Rs))
            throw Error(a(261))
          return (Os = null), (Ls = 0), zs
        }
        function yu() {
          for (; null !== Rs; ) wu(Rs)
        }
        function bu() {
          for (; null !== Rs && !Ge(); ) wu(Rs)
        }
        function wu(e) {
          var t = Es(e.alternate, e, As)
          ;(e.memoizedProps = e.pendingProps),
            null === t ? ku(e) : (Rs = t),
            (Ns.current = null)
        }
        function ku(e) {
          var t = e
          do {
            var n = t.alternate
            if (((e = t.return), 0 === (32768 & t.flags))) {
              if (null !== (n = Kl(n, t, As))) return void (Rs = n)
            } else {
              if (null !== (n = Gl(n, t)))
                return (n.flags &= 32767), void (Rs = n)
              if (null === e) return (zs = 6), void (Rs = null)
              ;(e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null)
            }
            if (null !== (t = t.sibling)) return void (Rs = t)
            Rs = t = e
          } while (null !== t)
          0 === zs && (zs = 5)
        }
        function Su(e, t, n) {
          var r = bt,
            o = Ps.transition
          try {
            ;(Ps.transition = null),
              (bt = 1),
              (function (e, t, n, r) {
                do {
                  _u()
                } while (null !== Gs)
                if (0 !== (6 & Ts)) throw Error(a(327))
                n = e.finishedWork
                var o = e.finishedLanes
                if (null === n) return null
                if (
                  ((e.finishedWork = null),
                  (e.finishedLanes = 0),
                  n === e.current)
                )
                  throw Error(a(177))
                ;(e.callbackNode = null), (e.callbackPriority = 0)
                var i = n.lanes | n.childLanes
                if (
                  ((function (e, t) {
                    var n = e.pendingLanes & ~t
                    ;(e.pendingLanes = t),
                      (e.suspendedLanes = 0),
                      (e.pingedLanes = 0),
                      (e.expiredLanes &= t),
                      (e.mutableReadLanes &= t),
                      (e.entangledLanes &= t),
                      (t = e.entanglements)
                    var r = e.eventTimes
                    for (e = e.expirationTimes; 0 < n; ) {
                      var o = 31 - it(n),
                        a = 1 << o
                      ;(t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~a)
                    }
                  })(e, i),
                  e === Os && ((Rs = Os = null), (Ls = 0)),
                  (0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags)) ||
                    Ks ||
                    ((Ks = !0),
                    Ou(tt, function () {
                      return _u(), null
                    })),
                  (i = 0 !== (15990 & n.flags)),
                  0 !== (15990 & n.subtreeFlags) || i)
                ) {
                  ;(i = Ps.transition), (Ps.transition = null)
                  var l = bt
                  bt = 1
                  var s = Ts
                  ;(Ts |= 4),
                    (Ns.current = null),
                    (function (e, t) {
                      if (((eo = $t), pr((e = dr())))) {
                        if ('selectionStart' in e)
                          var n = {
                            start: e.selectionStart,
                            end: e.selectionEnd,
                          }
                        else
                          e: {
                            var r =
                              (n =
                                ((n = e.ownerDocument) && n.defaultView) ||
                                window).getSelection && n.getSelection()
                            if (r && 0 !== r.rangeCount) {
                              n = r.anchorNode
                              var o = r.anchorOffset,
                                i = r.focusNode
                              r = r.focusOffset
                              try {
                                n.nodeType, i.nodeType
                              } catch (k) {
                                n = null
                                break e
                              }
                              var l = 0,
                                s = -1,
                                u = -1,
                                c = 0,
                                f = 0,
                                d = e,
                                p = null
                              t: for (;;) {
                                for (
                                  var h;
                                  d !== n ||
                                    (0 !== o && 3 !== d.nodeType) ||
                                    (s = l + o),
                                    d !== i ||
                                      (0 !== r && 3 !== d.nodeType) ||
                                      (u = l + r),
                                    3 === d.nodeType &&
                                      (l += d.nodeValue.length),
                                    null !== (h = d.firstChild);

                                )
                                  (p = d), (d = h)
                                for (;;) {
                                  if (d === e) break t
                                  if (
                                    (p === n && ++c === o && (s = l),
                                    p === i && ++f === r && (u = l),
                                    null !== (h = d.nextSibling))
                                  )
                                    break
                                  p = (d = p).parentNode
                                }
                                d = h
                              }
                              n =
                                -1 === s || -1 === u
                                  ? null
                                  : { start: s, end: u }
                            } else n = null
                          }
                        n = n || { start: 0, end: 0 }
                      } else n = null
                      for (
                        to = { focusedElem: e, selectionRange: n },
                          $t = !1,
                          Zl = t;
                        null !== Zl;

                      )
                        if (
                          ((e = (t = Zl).child),
                          0 !== (1028 & t.subtreeFlags) && null !== e)
                        )
                          (e.return = t), (Zl = e)
                        else
                          for (; null !== Zl; ) {
                            t = Zl
                            try {
                              var m = t.alternate
                              if (0 !== (1024 & t.flags))
                                switch (t.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                  case 5:
                                  case 6:
                                  case 4:
                                  case 17:
                                    break
                                  case 1:
                                    if (null !== m) {
                                      var v = m.memoizedProps,
                                        g = m.memoizedState,
                                        y = t.stateNode,
                                        b = y.getSnapshotBeforeUpdate(
                                          t.elementType === t.type
                                            ? v
                                            : ga(t.type, v),
                                          g,
                                        )
                                      y.__reactInternalSnapshotBeforeUpdate = b
                                    }
                                    break
                                  case 3:
                                    var w = t.stateNode.containerInfo
                                    1 === w.nodeType
                                      ? (w.textContent = '')
                                      : 9 === w.nodeType &&
                                        w.documentElement &&
                                        w.removeChild(w.documentElement)
                                    break
                                  default:
                                    throw Error(a(163))
                                }
                            } catch (k) {
                              Cu(t, t.return, k)
                            }
                            if (null !== (e = t.sibling)) {
                              ;(e.return = t.return), (Zl = e)
                              break
                            }
                            Zl = t.return
                          }
                      ;(m = ns), (ns = !1)
                    })(e, n),
                    gs(n, e),
                    hr(to),
                    ($t = !!eo),
                    (to = eo = null),
                    (e.current = n),
                    bs(n, e, o),
                    Ye(),
                    (Ts = s),
                    (bt = l),
                    (Ps.transition = i)
                } else e.current = n
                if (
                  (Ks && ((Ks = !1), (Gs = e), (Ys = o)),
                  (i = e.pendingLanes),
                  0 === i && (Qs = null),
                  (function (e) {
                    if (at && 'function' === typeof at.onCommitFiberRoot)
                      try {
                        at.onCommitFiberRoot(
                          ot,
                          e,
                          void 0,
                          128 === (128 & e.current.flags),
                        )
                      } catch (t) {}
                  })(n.stateNode),
                  ou(e, Xe()),
                  null !== t)
                )
                  for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                    (o = t[n]),
                      r(o.value, { componentStack: o.stack, digest: o.digest })
                if (qs) throw ((qs = !1), (e = Ws), (Ws = null), e)
                0 !== (1 & Ys) && 0 !== e.tag && _u(),
                  (i = e.pendingLanes),
                  0 !== (1 & i)
                    ? e === Js
                      ? Xs++
                      : ((Xs = 0), (Js = e))
                    : (Xs = 0),
                  Ho()
              })(e, t, n, r)
          } finally {
            ;(Ps.transition = o), (bt = r)
          }
          return null
        }
        function _u() {
          if (null !== Gs) {
            var e = wt(Ys),
              t = Ps.transition,
              n = bt
            try {
              if (((Ps.transition = null), (bt = 16 > e ? 16 : e), null === Gs))
                var r = !1
              else {
                if (((e = Gs), (Gs = null), (Ys = 0), 0 !== (6 & Ts)))
                  throw Error(a(331))
                var o = Ts
                for (Ts |= 4, Zl = e.current; null !== Zl; ) {
                  var i = Zl,
                    l = i.child
                  if (0 !== (16 & Zl.flags)) {
                    var s = i.deletions
                    if (null !== s) {
                      for (var u = 0; u < s.length; u++) {
                        var c = s[u]
                        for (Zl = c; null !== Zl; ) {
                          var f = Zl
                          switch (f.tag) {
                            case 0:
                            case 11:
                            case 15:
                              rs(8, f, i)
                          }
                          var d = f.child
                          if (null !== d) (d.return = f), (Zl = d)
                          else
                            for (; null !== Zl; ) {
                              var p = (f = Zl).sibling,
                                h = f.return
                              if ((is(f), f === c)) {
                                Zl = null
                                break
                              }
                              if (null !== p) {
                                ;(p.return = h), (Zl = p)
                                break
                              }
                              Zl = h
                            }
                        }
                      }
                      var m = i.alternate
                      if (null !== m) {
                        var v = m.child
                        if (null !== v) {
                          m.child = null
                          do {
                            var g = v.sibling
                            ;(v.sibling = null), (v = g)
                          } while (null !== v)
                        }
                      }
                      Zl = i
                    }
                  }
                  if (0 !== (2064 & i.subtreeFlags) && null !== l)
                    (l.return = i), (Zl = l)
                  else
                    e: for (; null !== Zl; ) {
                      if (0 !== (2048 & (i = Zl).flags))
                        switch (i.tag) {
                          case 0:
                          case 11:
                          case 15:
                            rs(9, i, i.return)
                        }
                      var y = i.sibling
                      if (null !== y) {
                        ;(y.return = i.return), (Zl = y)
                        break e
                      }
                      Zl = i.return
                    }
                }
                var b = e.current
                for (Zl = b; null !== Zl; ) {
                  var w = (l = Zl).child
                  if (0 !== (2064 & l.subtreeFlags) && null !== w)
                    (w.return = l), (Zl = w)
                  else
                    e: for (l = b; null !== Zl; ) {
                      if (0 !== (2048 & (s = Zl).flags))
                        try {
                          switch (s.tag) {
                            case 0:
                            case 11:
                            case 15:
                              os(9, s)
                          }
                        } catch (S) {
                          Cu(s, s.return, S)
                        }
                      if (s === l) {
                        Zl = null
                        break e
                      }
                      var k = s.sibling
                      if (null !== k) {
                        ;(k.return = s.return), (Zl = k)
                        break e
                      }
                      Zl = s.return
                    }
                }
                if (
                  ((Ts = o),
                  Ho(),
                  at && 'function' === typeof at.onPostCommitFiberRoot)
                )
                  try {
                    at.onPostCommitFiberRoot(ot, e)
                  } catch (S) {}
                r = !0
              }
              return r
            } finally {
              ;(bt = n), (Ps.transition = t)
            }
          }
          return !1
        }
        function Eu(e, t, n) {
          ;(e = za(e, (t = hl(0, (t = cl(n, t)), 1)), 1)),
            (t = tu()),
            null !== e && (gt(e, 1, t), ou(e, t))
        }
        function Cu(e, t, n) {
          if (3 === e.tag) Eu(e, e, n)
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                Eu(t, e, n)
                break
              }
              if (1 === t.tag) {
                var r = t.stateNode
                if (
                  'function' === typeof t.type.getDerivedStateFromError ||
                  ('function' === typeof r.componentDidCatch &&
                    (null === Qs || !Qs.has(r)))
                ) {
                  ;(t = za(t, (e = ml(t, (e = cl(n, e)), 1)), 1)),
                    (e = tu()),
                    null !== t && (gt(t, 1, e), ou(t, e))
                  break
                }
              }
              t = t.return
            }
        }
        function xu(e, t, n) {
          var r = e.pingCache
          null !== r && r.delete(t),
            (t = tu()),
            (e.pingedLanes |= e.suspendedLanes & n),
            Os === e &&
              (Ls & n) === n &&
              (4 === zs ||
              (3 === zs && (130023424 & Ls) === Ls && 500 > Xe() - Vs)
                ? pu(e, 0)
                : (Is |= n)),
            ou(e, t)
        }
        function Nu(e, t) {
          0 === t &&
            (0 === (1 & e.mode)
              ? (t = 1)
              : ((t = ct), 0 === (130023424 & (ct <<= 1)) && (ct = 4194304)))
          var n = tu()
          null !== (e = Oa(e, t)) && (gt(e, t, n), ou(e, n))
        }
        function Pu(e) {
          var t = e.memoizedState,
            n = 0
          null !== t && (n = t.retryLane), Nu(e, n)
        }
        function Tu(e, t) {
          var n = 0
          switch (e.tag) {
            case 13:
              var r = e.stateNode,
                o = e.memoizedState
              null !== o && (n = o.retryLane)
              break
            case 19:
              r = e.stateNode
              break
            default:
              throw Error(a(314))
          }
          null !== r && r.delete(t), Nu(e, n)
        }
        function Ou(e, t) {
          return Qe(e, t)
        }
        function Ru(e, t, n, r) {
          ;(this.tag = e),
            (this.key = n),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = t),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = r),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null)
        }
        function Lu(e, t, n, r) {
          return new Ru(e, t, n, r)
        }
        function Au(e) {
          return !(!(e = e.prototype) || !e.isReactComponent)
        }
        function ju(e, t) {
          var n = e.alternate
          return (
            null === n
              ? (((n = Lu(e.tag, t, e.key, e.mode)).elementType =
                  e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
            (n.flags = 14680064 & e.flags),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies =
              null === t
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            n
          )
        }
        function zu(e, t, n, r, o, i) {
          var l = 2
          if (((r = e), 'function' === typeof e)) Au(e) && (l = 1)
          else if ('string' === typeof e) l = 5
          else
            e: switch (e) {
              case _:
                return Mu(n.children, o, i, t)
              case E:
                ;(l = 8), (o |= 8)
                break
              case C:
                return (
                  ((e = Lu(12, n, t, 2 | o)).elementType = C), (e.lanes = i), e
                )
              case T:
                return ((e = Lu(13, n, t, o)).elementType = T), (e.lanes = i), e
              case O:
                return ((e = Lu(19, n, t, o)).elementType = O), (e.lanes = i), e
              case A:
                return Du(n, o, i, t)
              default:
                if ('object' === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case x:
                      l = 10
                      break e
                    case N:
                      l = 9
                      break e
                    case P:
                      l = 11
                      break e
                    case R:
                      l = 14
                      break e
                    case L:
                      ;(l = 16), (r = null)
                      break e
                  }
                throw Error(a(130, null == e ? e : typeof e, ''))
            }
          return (
            ((t = Lu(l, n, t, o)).elementType = e),
            (t.type = r),
            (t.lanes = i),
            t
          )
        }
        function Mu(e, t, n, r) {
          return ((e = Lu(7, e, r, t)).lanes = n), e
        }
        function Du(e, t, n, r) {
          return (
            ((e = Lu(22, e, r, t)).elementType = A),
            (e.lanes = n),
            (e.stateNode = { isHidden: !1 }),
            e
          )
        }
        function Fu(e, t, n) {
          return ((e = Lu(6, e, null, t)).lanes = n), e
        }
        function Iu(e, t, n) {
          return (
            ((t = Lu(
              4,
              null !== e.children ? e.children : [],
              e.key,
              t,
            )).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          )
        }
        function Bu(e, t, n, r, o) {
          ;(this.tag = t),
            (this.containerInfo = e),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = -1),
            (this.callbackNode = this.pendingContext = this.context = null),
            (this.callbackPriority = 0),
            (this.eventTimes = vt(0)),
            (this.expirationTimes = vt(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = vt(0)),
            (this.identifierPrefix = r),
            (this.onRecoverableError = o),
            (this.mutableSourceEagerHydrationData = null)
        }
        function Uu(e, t, n, r, o, a, i, l, s) {
          return (
            (e = new Bu(e, t, n, l, s)),
            1 === t ? ((t = 1), !0 === a && (t |= 8)) : (t = 0),
            (a = Lu(3, null, null, t)),
            (e.current = a),
            (a.stateNode = e),
            (a.memoizedState = {
              element: r,
              isDehydrated: n,
              cache: null,
              transitions: null,
              pendingSuspenseBoundaries: null,
            }),
            La(a),
            e
          )
        }
        function Vu(e) {
          if (!e) return Po
          e: {
            if (Ve((e = e._reactInternals)) !== e || 1 !== e.tag)
              throw Error(a(170))
            var t = e
            do {
              switch (t.tag) {
                case 3:
                  t = t.stateNode.context
                  break e
                case 1:
                  if (Ao(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext
                    break e
                  }
              }
              t = t.return
            } while (null !== t)
            throw Error(a(171))
          }
          if (1 === e.tag) {
            var n = e.type
            if (Ao(n)) return Mo(e, n, t)
          }
          return t
        }
        function Hu(e, t, n, r, o, a, i, l, s) {
          return (
            ((e = Uu(n, r, !0, e, 0, a, 0, l, s)).context = Vu(null)),
            (n = e.current),
            ((a = ja((r = tu()), (o = nu(n)))).callback =
              void 0 !== t && null !== t ? t : null),
            za(n, a, o),
            (e.current.lanes = o),
            gt(e, o, r),
            ou(e, r),
            e
          )
        }
        function $u(e, t, n, r) {
          var o = t.current,
            a = tu(),
            i = nu(o)
          return (
            (n = Vu(n)),
            null === t.context ? (t.context = n) : (t.pendingContext = n),
            ((t = ja(a, i)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (t.callback = r),
            null !== (e = za(o, t, i)) && (ru(e, o, i, a), Ma(e, o, i)),
            i
          )
        }
        function qu(e) {
          return (e = e.current).child ? (e.child.tag, e.child.stateNode) : null
        }
        function Wu(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane
            e.retryLane = 0 !== n && n < t ? n : t
          }
        }
        function Qu(e, t) {
          Wu(e, t), (e = e.alternate) && Wu(e, t)
        }
        Es = function (e, t, n) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || Oo.current) wl = !0
            else {
              if (0 === (e.lanes & n) && 0 === (128 & t.flags))
                return (
                  (wl = !1),
                  (function (e, t, n) {
                    switch (t.tag) {
                      case 3:
                        Ol(t), ha()
                        break
                      case 5:
                        ii(t)
                        break
                      case 1:
                        Ao(t.type) && Do(t)
                        break
                      case 4:
                        oi(t, t.stateNode.containerInfo)
                        break
                      case 10:
                        var r = t.type._context,
                          o = t.memoizedProps.value
                        No(ya, r._currentValue), (r._currentValue = o)
                        break
                      case 13:
                        if (null !== (r = t.memoizedState))
                          return null !== r.dehydrated
                            ? (No(si, 1 & si.current), (t.flags |= 128), null)
                            : 0 !== (n & t.child.childLanes)
                              ? Fl(e, t, n)
                              : (No(si, 1 & si.current),
                                null !== (e = ql(e, t, n)) ? e.sibling : null)
                        No(si, 1 & si.current)
                        break
                      case 19:
                        if (
                          ((r = 0 !== (n & t.childLanes)),
                          0 !== (128 & e.flags))
                        ) {
                          if (r) return Hl(e, t, n)
                          t.flags |= 128
                        }
                        if (
                          (null !== (o = t.memoizedState) &&
                            ((o.rendering = null),
                            (o.tail = null),
                            (o.lastEffect = null)),
                          No(si, si.current),
                          r)
                        )
                          break
                        return null
                      case 22:
                      case 23:
                        return (t.lanes = 0), Cl(e, t, n)
                    }
                    return ql(e, t, n)
                  })(e, t, n)
                )
              wl = 0 !== (131072 & e.flags)
            }
          else (wl = !1), aa && 0 !== (1048576 & t.flags) && ea(t, Qo, t.index)
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              var r = t.type
              $l(e, t), (e = t.pendingProps)
              var o = Lo(t, To.current)
              Ca(t, n), (o = Ei(null, t, r, e, o, n))
              var i = Ci()
              return (
                (t.flags |= 1),
                'object' === typeof o &&
                null !== o &&
                'function' === typeof o.render &&
                void 0 === o.$$typeof
                  ? ((t.tag = 1),
                    (t.memoizedState = null),
                    (t.updateQueue = null),
                    Ao(r) ? ((i = !0), Do(t)) : (i = !1),
                    (t.memoizedState =
                      null !== o.state && void 0 !== o.state ? o.state : null),
                    La(t),
                    (o.updater = Va),
                    (t.stateNode = o),
                    (o._reactInternals = t),
                    Wa(t, r, e, n),
                    (t = Tl(null, t, r, !0, i, n)))
                  : ((t.tag = 0),
                    aa && i && ta(t),
                    kl(null, t, o, n),
                    (t = t.child)),
                t
              )
            case 16:
              r = t.elementType
              e: {
                switch (
                  ($l(e, t),
                  (e = t.pendingProps),
                  (r = (o = r._init)(r._payload)),
                  (t.type = r),
                  (o = t.tag =
                    (function (e) {
                      if ('function' === typeof e) return Au(e) ? 1 : 0
                      if (void 0 !== e && null !== e) {
                        if ((e = e.$$typeof) === P) return 11
                        if (e === R) return 14
                      }
                      return 2
                    })(r)),
                  (e = ga(r, e)),
                  o)
                ) {
                  case 0:
                    t = Nl(null, t, r, e, n)
                    break e
                  case 1:
                    t = Pl(null, t, r, e, n)
                    break e
                  case 11:
                    t = Sl(null, t, r, e, n)
                    break e
                  case 14:
                    t = _l(null, t, r, ga(r.type, e), n)
                    break e
                }
                throw Error(a(306, r, ''))
              }
              return t
            case 0:
              return (
                (r = t.type),
                (o = t.pendingProps),
                Nl(e, t, r, (o = t.elementType === r ? o : ga(r, o)), n)
              )
            case 1:
              return (
                (r = t.type),
                (o = t.pendingProps),
                Pl(e, t, r, (o = t.elementType === r ? o : ga(r, o)), n)
              )
            case 3:
              e: {
                if ((Ol(t), null === e)) throw Error(a(387))
                ;(r = t.pendingProps),
                  (o = (i = t.memoizedState).element),
                  Aa(e, t),
                  Fa(t, r, null, n)
                var l = t.memoizedState
                if (((r = l.element), i.isDehydrated)) {
                  if (
                    ((i = {
                      element: r,
                      isDehydrated: !1,
                      cache: l.cache,
                      pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
                      transitions: l.transitions,
                    }),
                    (t.updateQueue.baseState = i),
                    (t.memoizedState = i),
                    256 & t.flags)
                  ) {
                    t = Rl(e, t, r, n, (o = cl(Error(a(423)), t)))
                    break e
                  }
                  if (r !== o) {
                    t = Rl(e, t, r, n, (o = cl(Error(a(424)), t)))
                    break e
                  }
                  for (
                    oa = uo(t.stateNode.containerInfo.firstChild),
                      ra = t,
                      aa = !0,
                      ia = null,
                      n = Ja(t, null, r, n),
                      t.child = n;
                    n;

                  )
                    (n.flags = (-3 & n.flags) | 4096), (n = n.sibling)
                } else {
                  if ((ha(), r === o)) {
                    t = ql(e, t, n)
                    break e
                  }
                  kl(e, t, r, n)
                }
                t = t.child
              }
              return t
            case 5:
              return (
                ii(t),
                null === e && ca(t),
                (r = t.type),
                (o = t.pendingProps),
                (i = null !== e ? e.memoizedProps : null),
                (l = o.children),
                no(r, o)
                  ? (l = null)
                  : null !== i && no(r, i) && (t.flags |= 32),
                xl(e, t),
                kl(e, t, l, n),
                t.child
              )
            case 6:
              return null === e && ca(t), null
            case 13:
              return Fl(e, t, n)
            case 4:
              return (
                oi(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = Xa(t, null, r, n)) : kl(e, t, r, n),
                t.child
              )
            case 11:
              return (
                (r = t.type),
                (o = t.pendingProps),
                Sl(e, t, r, (o = t.elementType === r ? o : ga(r, o)), n)
              )
            case 7:
              return kl(e, t, t.pendingProps, n), t.child
            case 8:
            case 12:
              return kl(e, t, t.pendingProps.children, n), t.child
            case 10:
              e: {
                if (
                  ((r = t.type._context),
                  (o = t.pendingProps),
                  (i = t.memoizedProps),
                  (l = o.value),
                  No(ya, r._currentValue),
                  (r._currentValue = l),
                  null !== i)
                )
                  if (lr(i.value, l)) {
                    if (i.children === o.children && !Oo.current) {
                      t = ql(e, t, n)
                      break e
                    }
                  } else
                    for (
                      null !== (i = t.child) && (i.return = t);
                      null !== i;

                    ) {
                      var s = i.dependencies
                      if (null !== s) {
                        l = i.child
                        for (var u = s.firstContext; null !== u; ) {
                          if (u.context === r) {
                            if (1 === i.tag) {
                              ;(u = ja(-1, n & -n)).tag = 2
                              var c = i.updateQueue
                              if (null !== c) {
                                var f = (c = c.shared).pending
                                null === f
                                  ? (u.next = u)
                                  : ((u.next = f.next), (f.next = u)),
                                  (c.pending = u)
                              }
                            }
                            ;(i.lanes |= n),
                              null !== (u = i.alternate) && (u.lanes |= n),
                              Ea(i.return, n, t),
                              (s.lanes |= n)
                            break
                          }
                          u = u.next
                        }
                      } else if (10 === i.tag)
                        l = i.type === t.type ? null : i.child
                      else if (18 === i.tag) {
                        if (null === (l = i.return)) throw Error(a(341))
                        ;(l.lanes |= n),
                          null !== (s = l.alternate) && (s.lanes |= n),
                          Ea(l, n, t),
                          (l = i.sibling)
                      } else l = i.child
                      if (null !== l) l.return = i
                      else
                        for (l = i; null !== l; ) {
                          if (l === t) {
                            l = null
                            break
                          }
                          if (null !== (i = l.sibling)) {
                            ;(i.return = l.return), (l = i)
                            break
                          }
                          l = l.return
                        }
                      i = l
                    }
                kl(e, t, o.children, n), (t = t.child)
              }
              return t
            case 9:
              return (
                (o = t.type),
                (r = t.pendingProps.children),
                Ca(t, n),
                (r = r((o = xa(o)))),
                (t.flags |= 1),
                kl(e, t, r, n),
                t.child
              )
            case 14:
              return (
                (o = ga((r = t.type), t.pendingProps)),
                _l(e, t, r, (o = ga(r.type, o)), n)
              )
            case 15:
              return El(e, t, t.type, t.pendingProps, n)
            case 17:
              return (
                (r = t.type),
                (o = t.pendingProps),
                (o = t.elementType === r ? o : ga(r, o)),
                $l(e, t),
                (t.tag = 1),
                Ao(r) ? ((e = !0), Do(t)) : (e = !1),
                Ca(t, n),
                $a(t, r, o),
                Wa(t, r, o, n),
                Tl(null, t, r, !0, e, n)
              )
            case 19:
              return Hl(e, t, n)
            case 22:
              return Cl(e, t, n)
          }
          throw Error(a(156, t.tag))
        }
        var Ku =
          'function' === typeof reportError
            ? reportError
            : function (e) {
                console.error(e)
              }
        function Gu(e) {
          this._internalRoot = e
        }
        function Yu(e) {
          this._internalRoot = e
        }
        function Xu(e) {
          return !(
            !e ||
            (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
          )
        }
        function Ju(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType ||
                ' react-mount-point-unstable ' !== e.nodeValue))
          )
        }
        function Zu() {}
        function ec(e, t, n, r, o) {
          var a = n._reactRootContainer
          if (a) {
            var i = a
            if ('function' === typeof o) {
              var l = o
              o = function () {
                var e = qu(i)
                l.call(e)
              }
            }
            $u(t, i, e, o)
          } else
            i = (function (e, t, n, r, o) {
              if (o) {
                if ('function' === typeof r) {
                  var a = r
                  r = function () {
                    var e = qu(i)
                    a.call(e)
                  }
                }
                var i = Hu(t, r, e, 0, null, !1, 0, '', Zu)
                return (
                  (e._reactRootContainer = i),
                  (e[mo] = i.current),
                  Vr(8 === e.nodeType ? e.parentNode : e),
                  fu(),
                  i
                )
              }
              for (; (o = e.lastChild); ) e.removeChild(o)
              if ('function' === typeof r) {
                var l = r
                r = function () {
                  var e = qu(s)
                  l.call(e)
                }
              }
              var s = Uu(e, 0, !1, null, 0, !1, 0, '', Zu)
              return (
                (e._reactRootContainer = s),
                (e[mo] = s.current),
                Vr(8 === e.nodeType ? e.parentNode : e),
                fu(function () {
                  $u(t, s, n, r)
                }),
                s
              )
            })(n, t, e, o, r)
          return qu(i)
        }
        ;(Yu.prototype.render = Gu.prototype.render =
          function (e) {
            var t = this._internalRoot
            if (null === t) throw Error(a(409))
            $u(e, t, null, null)
          }),
          (Yu.prototype.unmount = Gu.prototype.unmount =
            function () {
              var e = this._internalRoot
              if (null !== e) {
                this._internalRoot = null
                var t = e.containerInfo
                fu(function () {
                  $u(null, e, null, null)
                }),
                  (t[mo] = null)
              }
            }),
          (Yu.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var t = Et()
              e = { blockedOn: null, target: e, priority: t }
              for (
                var n = 0;
                n < At.length && 0 !== t && t < At[n].priority;
                n++
              );
              At.splice(n, 0, e), 0 === n && Dt(e)
            }
          }),
          (kt = function (e) {
            switch (e.tag) {
              case 3:
                var t = e.stateNode
                if (t.current.memoizedState.isDehydrated) {
                  var n = ft(t.pendingLanes)
                  0 !== n &&
                    (yt(t, 1 | n),
                    ou(t, Xe()),
                    0 === (6 & Ts) && ((Hs = Xe() + 500), Ho()))
                }
                break
              case 13:
                fu(function () {
                  var t = Oa(e, 1)
                  if (null !== t) {
                    var n = tu()
                    ru(t, e, 1, n)
                  }
                }),
                  Qu(e, 1)
            }
          }),
          (St = function (e) {
            if (13 === e.tag) {
              var t = Oa(e, 134217728)
              if (null !== t) ru(t, e, 134217728, tu())
              Qu(e, 134217728)
            }
          }),
          (_t = function (e) {
            if (13 === e.tag) {
              var t = nu(e),
                n = Oa(e, t)
              if (null !== n) ru(n, e, t, tu())
              Qu(e, t)
            }
          }),
          (Et = function () {
            return bt
          }),
          (Ct = function (e, t) {
            var n = bt
            try {
              return (bt = e), t()
            } finally {
              bt = n
            }
          }),
          (Se = function (e, t, n) {
            switch (t) {
              case 'input':
                if ((J(e, n), (t = n.name), 'radio' === n.type && null != t)) {
                  for (n = e; n.parentNode; ) n = n.parentNode
                  for (
                    n = n.querySelectorAll(
                      'input[name=' +
                        JSON.stringify('' + t) +
                        '][type="radio"]',
                    ),
                      t = 0;
                    t < n.length;
                    t++
                  ) {
                    var r = n[t]
                    if (r !== e && r.form === e.form) {
                      var o = So(r)
                      if (!o) throw Error(a(90))
                      Q(r), J(r, o)
                    }
                  }
                }
                break
              case 'textarea':
                ae(e, n)
                break
              case 'select':
                null != (t = n.value) && ne(e, !!n.multiple, t, !1)
            }
          }),
          (Pe = cu),
          (Te = fu)
        var tc = {
            usingClientEntryPoint: !1,
            Events: [wo, ko, So, xe, Ne, cu],
          },
          nc = {
            findFiberByHostInstance: bo,
            bundleType: 0,
            version: '18.2.0',
            rendererPackageName: 'react-dom',
          },
          rc = {
            bundleType: nc.bundleType,
            version: nc.version,
            rendererPackageName: nc.rendererPackageName,
            rendererConfig: nc.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: w.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = qe(e)) ? null : e.stateNode
            },
            findFiberByHostInstance:
              nc.findFiberByHostInstance ||
              function () {
                return null
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
          }
        if ('undefined' !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var oc = __REACT_DEVTOOLS_GLOBAL_HOOK__
          if (!oc.isDisabled && oc.supportsFiber)
            try {
              ;(ot = oc.inject(rc)), (at = oc)
            } catch (ce) {}
        }
        ;(t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tc),
          (t.createPortal = function (e, t) {
            var n =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null
            if (!Xu(t)) throw Error(a(200))
            return (function (e, t, n) {
              var r =
                3 < arguments.length && void 0 !== arguments[3]
                  ? arguments[3]
                  : null
              return {
                $$typeof: S,
                key: null == r ? null : '' + r,
                children: e,
                containerInfo: t,
                implementation: n,
              }
            })(e, t, null, n)
          }),
          (t.createRoot = function (e, t) {
            if (!Xu(e)) throw Error(a(299))
            var n = !1,
              r = '',
              o = Ku
            return (
              null !== t &&
                void 0 !== t &&
                (!0 === t.unstable_strictMode && (n = !0),
                void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (o = t.onRecoverableError)),
              (t = Uu(e, 1, !1, null, 0, n, 0, r, o)),
              (e[mo] = t.current),
              Vr(8 === e.nodeType ? e.parentNode : e),
              new Gu(t)
            )
          }),
          (t.findDOMNode = function (e) {
            if (null == e) return null
            if (1 === e.nodeType) return e
            var t = e._reactInternals
            if (void 0 === t) {
              if ('function' === typeof e.render) throw Error(a(188))
              throw ((e = Object.keys(e).join(',')), Error(a(268, e)))
            }
            return (e = null === (e = qe(t)) ? null : e.stateNode)
          }),
          (t.flushSync = function (e) {
            return fu(e)
          }),
          (t.hydrate = function (e, t, n) {
            if (!Ju(t)) throw Error(a(200))
            return ec(null, e, t, !0, n)
          }),
          (t.hydrateRoot = function (e, t, n) {
            if (!Xu(e)) throw Error(a(405))
            var r = (null != n && n.hydratedSources) || null,
              o = !1,
              i = '',
              l = Ku
            if (
              (null !== n &&
                void 0 !== n &&
                (!0 === n.unstable_strictMode && (o = !0),
                void 0 !== n.identifierPrefix && (i = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (l = n.onRecoverableError)),
              (t = Hu(t, null, e, 1, null != n ? n : null, o, 0, i, l)),
              (e[mo] = t.current),
              Vr(e),
              r)
            )
              for (e = 0; e < r.length; e++)
                (o = (o = (n = r[e])._getVersion)(n._source)),
                  null == t.mutableSourceEagerHydrationData
                    ? (t.mutableSourceEagerHydrationData = [n, o])
                    : t.mutableSourceEagerHydrationData.push(n, o)
            return new Yu(t)
          }),
          (t.render = function (e, t, n) {
            if (!Ju(t)) throw Error(a(200))
            return ec(null, e, t, !1, n)
          }),
          (t.unmountComponentAtNode = function (e) {
            if (!Ju(e)) throw Error(a(40))
            return (
              !!e._reactRootContainer &&
              (fu(function () {
                ec(null, null, e, !1, function () {
                  ;(e._reactRootContainer = null), (e[mo] = null)
                })
              }),
              !0)
            )
          }),
          (t.unstable_batchedUpdates = cu),
          (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
            if (!Ju(n)) throw Error(a(200))
            if (null == e || void 0 === e._reactInternals) throw Error(a(38))
            return ec(e, t, n, !1, r)
          }),
          (t.version = '18.2.0-next-9e3b772b8-20220608')
      },
      250: (e, t, n) => {
        'use strict'
        var r = n(164)
        ;(t.createRoot = r.createRoot), (t.hydrateRoot = r.hydrateRoot)
      },
      164: (e, t, n) => {
        'use strict'
        !(function e() {
          if (
            'undefined' !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            'function' === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
            } catch (t) {
              console.error(t)
            }
        })(),
          (e.exports = n(463))
      },
      374: (e, t, n) => {
        'use strict'
        var r = n(791),
          o = Symbol.for('react.element'),
          a = Symbol.for('react.fragment'),
          i = Object.prototype.hasOwnProperty,
          l =
            r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          s = { key: !0, ref: !0, __self: !0, __source: !0 }
        function u(e, t, n) {
          var r,
            a = {},
            u = null,
            c = null
          for (r in (void 0 !== n && (u = '' + n),
          void 0 !== t.key && (u = '' + t.key),
          void 0 !== t.ref && (c = t.ref),
          t))
            i.call(t, r) && !s.hasOwnProperty(r) && (a[r] = t[r])
          if (e && e.defaultProps)
            for (r in (t = e.defaultProps)) void 0 === a[r] && (a[r] = t[r])
          return {
            $$typeof: o,
            type: e,
            key: u,
            ref: c,
            props: a,
            _owner: l.current,
          }
        }
        ;(t.jsx = u), (t.jsxs = u)
      },
      117: (e, t) => {
        'use strict'
        var n = Symbol.for('react.element'),
          r = Symbol.for('react.portal'),
          o = Symbol.for('react.fragment'),
          a = Symbol.for('react.strict_mode'),
          i = Symbol.for('react.profiler'),
          l = Symbol.for('react.provider'),
          s = Symbol.for('react.context'),
          u = Symbol.for('react.forward_ref'),
          c = Symbol.for('react.suspense'),
          f = Symbol.for('react.memo'),
          d = Symbol.for('react.lazy'),
          p = Symbol.iterator
        var h = {
            isMounted: function () {
              return !1
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          m = Object.assign,
          v = {}
        function g(e, t, n) {
          ;(this.props = e),
            (this.context = t),
            (this.refs = v),
            (this.updater = n || h)
        }
        function y() {}
        function b(e, t, n) {
          ;(this.props = e),
            (this.context = t),
            (this.refs = v),
            (this.updater = n || h)
        }
        ;(g.prototype.isReactComponent = {}),
          (g.prototype.setState = function (e, t) {
            if ('object' !== typeof e && 'function' !== typeof e && null != e)
              throw Error(
                'setState(...): takes an object of state variables to update or a function which returns an object of state variables.',
              )
            this.updater.enqueueSetState(this, e, t, 'setState')
          }),
          (g.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, 'forceUpdate')
          }),
          (y.prototype = g.prototype)
        var w = (b.prototype = new y())
        ;(w.constructor = b), m(w, g.prototype), (w.isPureReactComponent = !0)
        var k = Array.isArray,
          S = Object.prototype.hasOwnProperty,
          _ = { current: null },
          E = { key: !0, ref: !0, __self: !0, __source: !0 }
        function C(e, t, r) {
          var o,
            a = {},
            i = null,
            l = null
          if (null != t)
            for (o in (void 0 !== t.ref && (l = t.ref),
            void 0 !== t.key && (i = '' + t.key),
            t))
              S.call(t, o) && !E.hasOwnProperty(o) && (a[o] = t[o])
          var s = arguments.length - 2
          if (1 === s) a.children = r
          else if (1 < s) {
            for (var u = Array(s), c = 0; c < s; c++) u[c] = arguments[c + 2]
            a.children = u
          }
          if (e && e.defaultProps)
            for (o in (s = e.defaultProps)) void 0 === a[o] && (a[o] = s[o])
          return {
            $$typeof: n,
            type: e,
            key: i,
            ref: l,
            props: a,
            _owner: _.current,
          }
        }
        function x(e) {
          return 'object' === typeof e && null !== e && e.$$typeof === n
        }
        var N = /\/+/g
        function P(e, t) {
          return 'object' === typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { '=': '=0', ':': '=2' }
                return (
                  '$' +
                  e.replace(/[=:]/g, function (e) {
                    return t[e]
                  })
                )
              })('' + e.key)
            : t.toString(36)
        }
        function T(e, t, o, a, i) {
          var l = typeof e
          ;('undefined' !== l && 'boolean' !== l) || (e = null)
          var s = !1
          if (null === e) s = !0
          else
            switch (l) {
              case 'string':
              case 'number':
                s = !0
                break
              case 'object':
                switch (e.$$typeof) {
                  case n:
                  case r:
                    s = !0
                }
            }
          if (s)
            return (
              (i = i((s = e))),
              (e = '' === a ? '.' + P(s, 0) : a),
              k(i)
                ? ((o = ''),
                  null != e && (o = e.replace(N, '$&/') + '/'),
                  T(i, t, o, '', function (e) {
                    return e
                  }))
                : null != i &&
                  (x(i) &&
                    (i = (function (e, t) {
                      return {
                        $$typeof: n,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      }
                    })(
                      i,
                      o +
                        (!i.key || (s && s.key === i.key)
                          ? ''
                          : ('' + i.key).replace(N, '$&/') + '/') +
                        e,
                    )),
                  t.push(i)),
              1
            )
          if (((s = 0), (a = '' === a ? '.' : a + ':'), k(e)))
            for (var u = 0; u < e.length; u++) {
              var c = a + P((l = e[u]), u)
              s += T(l, t, o, c, i)
            }
          else if (
            ((c = (function (e) {
              return null === e || 'object' !== typeof e
                ? null
                : 'function' === typeof (e = (p && e[p]) || e['@@iterator'])
                  ? e
                  : null
            })(e)),
            'function' === typeof c)
          )
            for (e = c.call(e), u = 0; !(l = e.next()).done; )
              s += T((l = l.value), t, o, (c = a + P(l, u++)), i)
          else if ('object' === l)
            throw (
              ((t = String(e)),
              Error(
                'Objects are not valid as a React child (found: ' +
                  ('[object Object]' === t
                    ? 'object with keys {' + Object.keys(e).join(', ') + '}'
                    : t) +
                  '). If you meant to render a collection of children, use an array instead.',
              ))
            )
          return s
        }
        function O(e, t, n) {
          if (null == e) return e
          var r = [],
            o = 0
          return (
            T(e, r, '', '', function (e) {
              return t.call(n, e, o++)
            }),
            r
          )
        }
        function R(e) {
          if (-1 === e._status) {
            var t = e._result
            ;(t = t()).then(
              function (t) {
                ;(0 !== e._status && -1 !== e._status) ||
                  ((e._status = 1), (e._result = t))
              },
              function (t) {
                ;(0 !== e._status && -1 !== e._status) ||
                  ((e._status = 2), (e._result = t))
              },
            ),
              -1 === e._status && ((e._status = 0), (e._result = t))
          }
          if (1 === e._status) return e._result.default
          throw e._result
        }
        var L = { current: null },
          A = { transition: null },
          j = {
            ReactCurrentDispatcher: L,
            ReactCurrentBatchConfig: A,
            ReactCurrentOwner: _,
          }
        ;(t.Children = {
          map: O,
          forEach: function (e, t, n) {
            O(
              e,
              function () {
                t.apply(this, arguments)
              },
              n,
            )
          },
          count: function (e) {
            var t = 0
            return (
              O(e, function () {
                t++
              }),
              t
            )
          },
          toArray: function (e) {
            return (
              O(e, function (e) {
                return e
              }) || []
            )
          },
          only: function (e) {
            if (!x(e))
              throw Error(
                'React.Children.only expected to receive a single React element child.',
              )
            return e
          },
        }),
          (t.Component = g),
          (t.Fragment = o),
          (t.Profiler = i),
          (t.PureComponent = b),
          (t.StrictMode = a),
          (t.Suspense = c),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = j),
          (t.cloneElement = function (e, t, r) {
            if (null === e || void 0 === e)
              throw Error(
                'React.cloneElement(...): The argument must be a React element, but you passed ' +
                  e +
                  '.',
              )
            var o = m({}, e.props),
              a = e.key,
              i = e.ref,
              l = e._owner
            if (null != t) {
              if (
                (void 0 !== t.ref && ((i = t.ref), (l = _.current)),
                void 0 !== t.key && (a = '' + t.key),
                e.type && e.type.defaultProps)
              )
                var s = e.type.defaultProps
              for (u in t)
                S.call(t, u) &&
                  !E.hasOwnProperty(u) &&
                  (o[u] = void 0 === t[u] && void 0 !== s ? s[u] : t[u])
            }
            var u = arguments.length - 2
            if (1 === u) o.children = r
            else if (1 < u) {
              s = Array(u)
              for (var c = 0; c < u; c++) s[c] = arguments[c + 2]
              o.children = s
            }
            return {
              $$typeof: n,
              type: e.type,
              key: a,
              ref: i,
              props: o,
              _owner: l,
            }
          }),
          (t.createContext = function (e) {
            return (
              ((e = {
                $$typeof: s,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null,
              }).Provider = { $$typeof: l, _context: e }),
              (e.Consumer = e)
            )
          }),
          (t.createElement = C),
          (t.createFactory = function (e) {
            var t = C.bind(null, e)
            return (t.type = e), t
          }),
          (t.createRef = function () {
            return { current: null }
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: u, render: e }
          }),
          (t.isValidElement = x),
          (t.lazy = function (e) {
            return {
              $$typeof: d,
              _payload: { _status: -1, _result: e },
              _init: R,
            }
          }),
          (t.memo = function (e, t) {
            return { $$typeof: f, type: e, compare: void 0 === t ? null : t }
          }),
          (t.startTransition = function (e) {
            var t = A.transition
            A.transition = {}
            try {
              e()
            } finally {
              A.transition = t
            }
          }),
          (t.unstable_act = function () {
            throw Error(
              'act(...) is not supported in production builds of React.',
            )
          }),
          (t.useCallback = function (e, t) {
            return L.current.useCallback(e, t)
          }),
          (t.useContext = function (e) {
            return L.current.useContext(e)
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e) {
            return L.current.useDeferredValue(e)
          }),
          (t.useEffect = function (e, t) {
            return L.current.useEffect(e, t)
          }),
          (t.useId = function () {
            return L.current.useId()
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return L.current.useImperativeHandle(e, t, n)
          }),
          (t.useInsertionEffect = function (e, t) {
            return L.current.useInsertionEffect(e, t)
          }),
          (t.useLayoutEffect = function (e, t) {
            return L.current.useLayoutEffect(e, t)
          }),
          (t.useMemo = function (e, t) {
            return L.current.useMemo(e, t)
          }),
          (t.useReducer = function (e, t, n) {
            return L.current.useReducer(e, t, n)
          }),
          (t.useRef = function (e) {
            return L.current.useRef(e)
          }),
          (t.useState = function (e) {
            return L.current.useState(e)
          }),
          (t.useSyncExternalStore = function (e, t, n) {
            return L.current.useSyncExternalStore(e, t, n)
          }),
          (t.useTransition = function () {
            return L.current.useTransition()
          }),
          (t.version = '18.2.0')
      },
      791: (e, t, n) => {
        'use strict'
        e.exports = n(117)
      },
      184: (e, t, n) => {
        'use strict'
        e.exports = n(374)
      },
      813: (e, t) => {
        'use strict'
        function n(e, t) {
          var n = e.length
          e.push(t)
          e: for (; 0 < n; ) {
            var r = (n - 1) >>> 1,
              o = e[r]
            if (!(0 < a(o, t))) break e
            ;(e[r] = t), (e[n] = o), (n = r)
          }
        }
        function r(e) {
          return 0 === e.length ? null : e[0]
        }
        function o(e) {
          if (0 === e.length) return null
          var t = e[0],
            n = e.pop()
          if (n !== t) {
            e[0] = n
            e: for (var r = 0, o = e.length, i = o >>> 1; r < i; ) {
              var l = 2 * (r + 1) - 1,
                s = e[l],
                u = l + 1,
                c = e[u]
              if (0 > a(s, n))
                u < o && 0 > a(c, s)
                  ? ((e[r] = c), (e[u] = n), (r = u))
                  : ((e[r] = s), (e[l] = n), (r = l))
              else {
                if (!(u < o && 0 > a(c, n))) break e
                ;(e[r] = c), (e[u] = n), (r = u)
              }
            }
          }
          return t
        }
        function a(e, t) {
          var n = e.sortIndex - t.sortIndex
          return 0 !== n ? n : e.id - t.id
        }
        if (
          'object' === typeof performance &&
          'function' === typeof performance.now
        ) {
          var i = performance
          t.unstable_now = function () {
            return i.now()
          }
        } else {
          var l = Date,
            s = l.now()
          t.unstable_now = function () {
            return l.now() - s
          }
        }
        var u = [],
          c = [],
          f = 1,
          d = null,
          p = 3,
          h = !1,
          m = !1,
          v = !1,
          g = 'function' === typeof setTimeout ? setTimeout : null,
          y = 'function' === typeof clearTimeout ? clearTimeout : null,
          b = 'undefined' !== typeof setImmediate ? setImmediate : null
        function w(e) {
          for (var t = r(c); null !== t; ) {
            if (null === t.callback) o(c)
            else {
              if (!(t.startTime <= e)) break
              o(c), (t.sortIndex = t.expirationTime), n(u, t)
            }
            t = r(c)
          }
        }
        function k(e) {
          if (((v = !1), w(e), !m))
            if (null !== r(u)) (m = !0), A(S)
            else {
              var t = r(c)
              null !== t && j(k, t.startTime - e)
            }
        }
        function S(e, n) {
          ;(m = !1), v && ((v = !1), y(x), (x = -1)), (h = !0)
          var a = p
          try {
            for (
              w(n), d = r(u);
              null !== d && (!(d.expirationTime > n) || (e && !T()));

            ) {
              var i = d.callback
              if ('function' === typeof i) {
                ;(d.callback = null), (p = d.priorityLevel)
                var l = i(d.expirationTime <= n)
                ;(n = t.unstable_now()),
                  'function' === typeof l
                    ? (d.callback = l)
                    : d === r(u) && o(u),
                  w(n)
              } else o(u)
              d = r(u)
            }
            if (null !== d) var s = !0
            else {
              var f = r(c)
              null !== f && j(k, f.startTime - n), (s = !1)
            }
            return s
          } finally {
            ;(d = null), (p = a), (h = !1)
          }
        }
        'undefined' !== typeof navigator &&
          void 0 !== navigator.scheduling &&
          void 0 !== navigator.scheduling.isInputPending &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling)
        var _,
          E = !1,
          C = null,
          x = -1,
          N = 5,
          P = -1
        function T() {
          return !(t.unstable_now() - P < N)
        }
        function O() {
          if (null !== C) {
            var e = t.unstable_now()
            P = e
            var n = !0
            try {
              n = C(!0, e)
            } finally {
              n ? _() : ((E = !1), (C = null))
            }
          } else E = !1
        }
        if ('function' === typeof b)
          _ = function () {
            b(O)
          }
        else if ('undefined' !== typeof MessageChannel) {
          var R = new MessageChannel(),
            L = R.port2
          ;(R.port1.onmessage = O),
            (_ = function () {
              L.postMessage(null)
            })
        } else
          _ = function () {
            g(O, 0)
          }
        function A(e) {
          ;(C = e), E || ((E = !0), _())
        }
        function j(e, n) {
          x = g(function () {
            e(t.unstable_now())
          }, n)
        }
        ;(t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null
          }),
          (t.unstable_continueExecution = function () {
            m || h || ((m = !0), A(S))
          }),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
                )
              : (N = 0 < e ? Math.floor(1e3 / e) : 5)
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return p
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return r(u)
          }),
          (t.unstable_next = function (e) {
            switch (p) {
              case 1:
              case 2:
              case 3:
                var t = 3
                break
              default:
                t = p
            }
            var n = p
            p = t
            try {
              return e()
            } finally {
              p = n
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = function () {}),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break
              default:
                e = 3
            }
            var n = p
            p = e
            try {
              return t()
            } finally {
              p = n
            }
          }),
          (t.unstable_scheduleCallback = function (e, o, a) {
            var i = t.unstable_now()
            switch (
              ('object' === typeof a && null !== a
                ? (a = 'number' === typeof (a = a.delay) && 0 < a ? i + a : i)
                : (a = i),
              e)
            ) {
              case 1:
                var l = -1
                break
              case 2:
                l = 250
                break
              case 5:
                l = 1073741823
                break
              case 4:
                l = 1e4
                break
              default:
                l = 5e3
            }
            return (
              (e = {
                id: f++,
                callback: o,
                priorityLevel: e,
                startTime: a,
                expirationTime: (l = a + l),
                sortIndex: -1,
              }),
              a > i
                ? ((e.sortIndex = a),
                  n(c, e),
                  null === r(u) &&
                    e === r(c) &&
                    (v ? (y(x), (x = -1)) : (v = !0), j(k, a - i)))
                : ((e.sortIndex = l), n(u, e), m || h || ((m = !0), A(S))),
              e
            )
          }),
          (t.unstable_shouldYield = T),
          (t.unstable_wrapCallback = function (e) {
            var t = p
            return function () {
              var n = p
              p = t
              try {
                return e.apply(this, arguments)
              } finally {
                p = n
              }
            }
          })
      },
      296: (e, t, n) => {
        'use strict'
        e.exports = n(813)
      },
    },
    t = {}
  function n(r) {
    var o = t[r]
    if (void 0 !== o) return o.exports
    var a = (t[r] = { exports: {} })
    return e[r](a, a.exports, n), a.exports
  }
  ;(n.m = e),
    (n.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e
      return n.d(t, { a: t }), t
    }),
    (n.d = (e, t) => {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] })
    }),
    (n.f = {}),
    (n.e = (e) =>
      Promise.all(Object.keys(n.f).reduce((t, r) => (n.f[r](e, t), t), []))),
    (n.u = (e) => 'static/js/' + e + '.5b308f50.chunk.js'),
    (n.miniCssF = (e) => {}),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      var e = {},
        t = 'react-chat-app:'
      n.l = (r, o, a, i) => {
        if (e[r]) e[r].push(o)
        else {
          var l, s
          if (void 0 !== a)
            for (
              var u = document.getElementsByTagName('script'), c = 0;
              c < u.length;
              c++
            ) {
              var f = u[c]
              if (
                f.getAttribute('src') == r ||
                f.getAttribute('data-webpack') == t + a
              ) {
                l = f
                break
              }
            }
          l ||
            ((s = !0),
            ((l = document.createElement('script')).charset = 'utf-8'),
            (l.timeout = 120),
            n.nc && l.setAttribute('nonce', n.nc),
            l.setAttribute('data-webpack', t + a),
            (l.src = r)),
            (e[r] = [o])
          var d = (t, n) => {
              ;(l.onerror = l.onload = null), clearTimeout(p)
              var o = e[r]
              if (
                (delete e[r],
                l.parentNode && l.parentNode.removeChild(l),
                o && o.forEach((e) => e(n)),
                t)
              )
                return t(n)
            },
            p = setTimeout(
              d.bind(null, void 0, { type: 'timeout', target: l }),
              12e4,
            )
          ;(l.onerror = d.bind(null, l.onerror)),
            (l.onload = d.bind(null, l.onload)),
            s && document.head.appendChild(l)
        }
      }
    })(),
    (n.r = (e) => {
      'undefined' !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 })
    }),
    (n.p = '/'),
    (() => {
      var e = { 179: 0 }
      n.f.j = (t, r) => {
        var o = n.o(e, t) ? e[t] : void 0
        if (0 !== o)
          if (o) r.push(o[2])
          else {
            var a = new Promise((n, r) => (o = e[t] = [n, r]))
            r.push((o[2] = a))
            var i = n.p + n.u(t),
              l = new Error()
            n.l(
              i,
              (r) => {
                if (n.o(e, t) && (0 !== (o = e[t]) && (e[t] = void 0), o)) {
                  var a = r && ('load' === r.type ? 'missing' : r.type),
                    i = r && r.target && r.target.src
                  ;(l.message =
                    'Loading chunk ' + t + ' failed.\n(' + a + ': ' + i + ')'),
                    (l.name = 'ChunkLoadError'),
                    (l.type = a),
                    (l.request = i),
                    o[1](l)
                }
              },
              'chunk-' + t,
              t,
            )
          }
      }
      var t = (t, r) => {
          var o,
            a,
            i = r[0],
            l = r[1],
            s = r[2],
            u = 0
          if (i.some((t) => 0 !== e[t])) {
            for (o in l) n.o(l, o) && (n.m[o] = l[o])
            if (s) s(n)
          }
          for (t && t(r); u < i.length; u++)
            (a = i[u]), n.o(e, a) && e[a] && e[a][0](), (e[a] = 0)
        },
        r = (self.webpackChunkreact_chat_app =
          self.webpackChunkreact_chat_app || [])
      r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)))
    })(),
    (() => {
      'use strict'
      var e = {}
      n.r(e),
        n.d(e, {
          Decoder: () => ye,
          Encoder: () => ve,
          PacketType: () => me,
          protocol: () => he,
        })
      var t = n(791),
        r = n(250)
      const o = Object.create(null)
      ;(o.open = '0'),
        (o.close = '1'),
        (o.ping = '2'),
        (o.pong = '3'),
        (o.message = '4'),
        (o.upgrade = '5'),
        (o.noop = '6')
      const a = Object.create(null)
      Object.keys(o).forEach((e) => {
        a[o[e]] = e
      })
      const i = { type: 'error', data: 'parser error' },
        l =
          'function' === typeof Blob ||
          ('undefined' !== typeof Blob &&
            '[object BlobConstructor]' ===
              Object.prototype.toString.call(Blob)),
        s = 'function' === typeof ArrayBuffer,
        u = (e) =>
          'function' === typeof ArrayBuffer.isView
            ? ArrayBuffer.isView(e)
            : e && e.buffer instanceof ArrayBuffer,
        c = (e, t, n) => {
          let { type: r, data: a } = e
          return l && a instanceof Blob
            ? t
              ? n(a)
              : f(a, n)
            : s && (a instanceof ArrayBuffer || u(a))
              ? t
                ? n(a)
                : f(new Blob([a]), n)
              : n(o[r] + (a || ''))
        },
        f = (e, t) => {
          const n = new FileReader()
          return (
            (n.onload = function () {
              const e = n.result.split(',')[1]
              t('b' + (e || ''))
            }),
            n.readAsDataURL(e)
          )
        }
      function d(e) {
        return e instanceof Uint8Array
          ? e
          : e instanceof ArrayBuffer
            ? new Uint8Array(e)
            : new Uint8Array(e.buffer, e.byteOffset, e.byteLength)
      }
      let p
      const h =
          'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
        m = 'undefined' === typeof Uint8Array ? [] : new Uint8Array(256)
      for (let n = 0; n < 64; n++) m[h.charCodeAt(n)] = n
      const v = 'function' === typeof ArrayBuffer,
        g = (e, t) => {
          if ('string' !== typeof e) return { type: 'message', data: b(e, t) }
          const n = e.charAt(0)
          if ('b' === n) return { type: 'message', data: y(e.substring(1), t) }
          return a[n]
            ? e.length > 1
              ? { type: a[n], data: e.substring(1) }
              : { type: a[n] }
            : i
        },
        y = (e, t) => {
          if (v) {
            const n = ((e) => {
              let t,
                n,
                r,
                o,
                a,
                i = 0.75 * e.length,
                l = e.length,
                s = 0
              '=' === e[e.length - 1] && (i--, '=' === e[e.length - 2] && i--)
              const u = new ArrayBuffer(i),
                c = new Uint8Array(u)
              for (t = 0; t < l; t += 4)
                (n = m[e.charCodeAt(t)]),
                  (r = m[e.charCodeAt(t + 1)]),
                  (o = m[e.charCodeAt(t + 2)]),
                  (a = m[e.charCodeAt(t + 3)]),
                  (c[s++] = (n << 2) | (r >> 4)),
                  (c[s++] = ((15 & r) << 4) | (o >> 2)),
                  (c[s++] = ((3 & o) << 6) | (63 & a))
              return u
            })(e)
            return b(n, t)
          }
          return { base64: !0, data: e }
        },
        b = (e, t) =>
          'blob' === t
            ? e instanceof Blob
              ? e
              : new Blob([e])
            : e instanceof ArrayBuffer
              ? e
              : e.buffer,
        w = String.fromCharCode(30)
      function k() {
        return new TransformStream({
          transform(e, t) {
            !(function (e, t) {
              l && e.data instanceof Blob
                ? e.data.arrayBuffer().then(d).then(t)
                : s && (e.data instanceof ArrayBuffer || u(e.data))
                  ? t(d(e.data))
                  : c(e, !1, (e) => {
                      p || (p = new TextEncoder()), t(p.encode(e))
                    })
            })(e, (n) => {
              const r = n.length
              let o
              if (r < 126)
                (o = new Uint8Array(1)), new DataView(o.buffer).setUint8(0, r)
              else if (r < 65536) {
                o = new Uint8Array(3)
                const e = new DataView(o.buffer)
                e.setUint8(0, 126), e.setUint16(1, r)
              } else {
                o = new Uint8Array(9)
                const e = new DataView(o.buffer)
                e.setUint8(0, 127), e.setBigUint64(1, BigInt(r))
              }
              e.data && 'string' !== typeof e.data && (o[0] |= 128),
                t.enqueue(o),
                t.enqueue(n)
            })
          },
        })
      }
      let S
      function _(e) {
        return e.reduce((e, t) => e + t.length, 0)
      }
      function E(e, t) {
        if (e[0].length === t) return e.shift()
        const n = new Uint8Array(t)
        let r = 0
        for (let o = 0; o < t; o++)
          (n[o] = e[0][r++]), r === e[0].length && (e.shift(), (r = 0))
        return e.length && r < e[0].length && (e[0] = e[0].slice(r)), n
      }
      function C(e) {
        if (e)
          return (function (e) {
            for (var t in C.prototype) e[t] = C.prototype[t]
            return e
          })(e)
      }
      ;(C.prototype.on = C.prototype.addEventListener =
        function (e, t) {
          return (
            (this._callbacks = this._callbacks || {}),
            (this._callbacks['$' + e] = this._callbacks['$' + e] || []).push(t),
            this
          )
        }),
        (C.prototype.once = function (e, t) {
          function n() {
            this.off(e, n), t.apply(this, arguments)
          }
          return (n.fn = t), this.on(e, n), this
        }),
        (C.prototype.off =
          C.prototype.removeListener =
          C.prototype.removeAllListeners =
          C.prototype.removeEventListener =
            function (e, t) {
              if (
                ((this._callbacks = this._callbacks || {}),
                0 == arguments.length)
              )
                return (this._callbacks = {}), this
              var n,
                r = this._callbacks['$' + e]
              if (!r) return this
              if (1 == arguments.length)
                return delete this._callbacks['$' + e], this
              for (var o = 0; o < r.length; o++)
                if ((n = r[o]) === t || n.fn === t) {
                  r.splice(o, 1)
                  break
                }
              return 0 === r.length && delete this._callbacks['$' + e], this
            }),
        (C.prototype.emit = function (e) {
          this._callbacks = this._callbacks || {}
          for (
            var t = new Array(arguments.length - 1),
              n = this._callbacks['$' + e],
              r = 1;
            r < arguments.length;
            r++
          )
            t[r - 1] = arguments[r]
          if (n) {
            r = 0
            for (var o = (n = n.slice(0)).length; r < o; ++r)
              n[r].apply(this, t)
          }
          return this
        }),
        (C.prototype.emitReserved = C.prototype.emit),
        (C.prototype.listeners = function (e) {
          return (
            (this._callbacks = this._callbacks || {}),
            this._callbacks['$' + e] || []
          )
        }),
        (C.prototype.hasListeners = function (e) {
          return !!this.listeners(e).length
        })
      const x =
        'undefined' !== typeof self
          ? self
          : 'undefined' !== typeof window
            ? window
            : Function('return this')()
      function N(e) {
        for (
          var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
          r < t;
          r++
        )
          n[r - 1] = arguments[r]
        return n.reduce((t, n) => (e.hasOwnProperty(n) && (t[n] = e[n]), t), {})
      }
      const P = x.setTimeout,
        T = x.clearTimeout
      function O(e, t) {
        t.useNativeTimers
          ? ((e.setTimeoutFn = P.bind(x)), (e.clearTimeoutFn = T.bind(x)))
          : ((e.setTimeoutFn = x.setTimeout.bind(x)),
            (e.clearTimeoutFn = x.clearTimeout.bind(x)))
      }
      class R extends Error {
        constructor(e, t, n) {
          super(e),
            (this.description = t),
            (this.context = n),
            (this.type = 'TransportError')
        }
      }
      class L extends C {
        constructor(e) {
          super(),
            (this.writable = !1),
            O(this, e),
            (this.opts = e),
            (this.query = e.query),
            (this.socket = e.socket)
        }
        onError(e, t, n) {
          return super.emitReserved('error', new R(e, t, n)), this
        }
        open() {
          return (this.readyState = 'opening'), this.doOpen(), this
        }
        close() {
          return (
            ('opening' !== this.readyState && 'open' !== this.readyState) ||
              (this.doClose(), this.onClose()),
            this
          )
        }
        send(e) {
          'open' === this.readyState && this.write(e)
        }
        onOpen() {
          ;(this.readyState = 'open'),
            (this.writable = !0),
            super.emitReserved('open')
        }
        onData(e) {
          const t = g(e, this.socket.binaryType)
          this.onPacket(t)
        }
        onPacket(e) {
          super.emitReserved('packet', e)
        }
        onClose(e) {
          ;(this.readyState = 'closed'), super.emitReserved('close', e)
        }
        pause(e) {}
        createUri(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
          return (
            e +
            '://' +
            this._hostname() +
            this._port() +
            this.opts.path +
            this._query(t)
          )
        }
        _hostname() {
          const e = this.opts.hostname
          return -1 === e.indexOf(':') ? e : '[' + e + ']'
        }
        _port() {
          return this.opts.port &&
            ((this.opts.secure && Number(443 !== this.opts.port)) ||
              (!this.opts.secure && 80 !== Number(this.opts.port)))
            ? ':' + this.opts.port
            : ''
        }
        _query(e) {
          const t = (function (e) {
            let t = ''
            for (let n in e)
              e.hasOwnProperty(n) &&
                (t.length && (t += '&'),
                (t += encodeURIComponent(n) + '=' + encodeURIComponent(e[n])))
            return t
          })(e)
          return t.length ? '?' + t : ''
        }
      }
      const A =
          '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_'.split(
            '',
          ),
        j = 64,
        z = {}
      let M,
        D = 0,
        F = 0
      function I(e) {
        let t = ''
        do {
          ;(t = A[e % j] + t), (e = Math.floor(e / j))
        } while (e > 0)
        return t
      }
      function B() {
        const e = I(+new Date())
        return e !== M ? ((D = 0), (M = e)) : e + '.' + I(D++)
      }
      for (; F < j; F++) z[A[F]] = F
      let U = !1
      try {
        U =
          'undefined' !== typeof XMLHttpRequest &&
          'withCredentials' in new XMLHttpRequest()
      } catch (Ii) {}
      const V = U
      function H(e) {
        const t = e.xdomain
        try {
          if ('undefined' !== typeof XMLHttpRequest && (!t || V))
            return new XMLHttpRequest()
        } catch (n) {}
        if (!t)
          try {
            return new x[['Active'].concat('Object').join('X')](
              'Microsoft.XMLHTTP',
            )
          } catch (n) {}
      }
      function $() {}
      const q = null != new H({ xdomain: !1 }).responseType
      class W extends C {
        constructor(e, t) {
          super(),
            O(this, t),
            (this.opts = t),
            (this.method = t.method || 'GET'),
            (this.uri = e),
            (this.data = void 0 !== t.data ? t.data : null),
            this.create()
        }
        create() {
          var e
          const t = N(
            this.opts,
            'agent',
            'pfx',
            'key',
            'passphrase',
            'cert',
            'ca',
            'ciphers',
            'rejectUnauthorized',
            'autoUnref',
          )
          t.xdomain = !!this.opts.xd
          const n = (this.xhr = new H(t))
          try {
            n.open(this.method, this.uri, !0)
            try {
              if (this.opts.extraHeaders) {
                n.setDisableHeaderCheck && n.setDisableHeaderCheck(!0)
                for (let e in this.opts.extraHeaders)
                  this.opts.extraHeaders.hasOwnProperty(e) &&
                    n.setRequestHeader(e, this.opts.extraHeaders[e])
              }
            } catch (r) {}
            if ('POST' === this.method)
              try {
                n.setRequestHeader('Content-type', 'text/plain;charset=UTF-8')
              } catch (r) {}
            try {
              n.setRequestHeader('Accept', '*/*')
            } catch (r) {}
            null === (e = this.opts.cookieJar) ||
              void 0 === e ||
              e.addCookies(n),
              'withCredentials' in n &&
                (n.withCredentials = this.opts.withCredentials),
              this.opts.requestTimeout &&
                (n.timeout = this.opts.requestTimeout),
              (n.onreadystatechange = () => {
                var e
                3 === n.readyState &&
                  (null === (e = this.opts.cookieJar) ||
                    void 0 === e ||
                    e.parseCookies(n)),
                  4 === n.readyState &&
                    (200 === n.status || 1223 === n.status
                      ? this.onLoad()
                      : this.setTimeoutFn(() => {
                          this.onError(
                            'number' === typeof n.status ? n.status : 0,
                          )
                        }, 0))
              }),
              n.send(this.data)
          } catch (r) {
            return void this.setTimeoutFn(() => {
              this.onError(r)
            }, 0)
          }
          'undefined' !== typeof document &&
            ((this.index = W.requestsCount++), (W.requests[this.index] = this))
        }
        onError(e) {
          this.emitReserved('error', e, this.xhr), this.cleanup(!0)
        }
        cleanup(e) {
          if ('undefined' !== typeof this.xhr && null !== this.xhr) {
            if (((this.xhr.onreadystatechange = $), e))
              try {
                this.xhr.abort()
              } catch (t) {}
            'undefined' !== typeof document && delete W.requests[this.index],
              (this.xhr = null)
          }
        }
        onLoad() {
          const e = this.xhr.responseText
          null !== e &&
            (this.emitReserved('data', e),
            this.emitReserved('success'),
            this.cleanup())
        }
        abort() {
          this.cleanup()
        }
      }
      if (
        ((W.requestsCount = 0),
        (W.requests = {}),
        'undefined' !== typeof document)
      )
        if ('function' === typeof attachEvent) attachEvent('onunload', Q)
        else if ('function' === typeof addEventListener) {
          addEventListener('onpagehide' in x ? 'pagehide' : 'unload', Q, !1)
        }
      function Q() {
        for (let e in W.requests)
          W.requests.hasOwnProperty(e) && W.requests[e].abort()
      }
      const K =
          'function' === typeof Promise && 'function' === typeof Promise.resolve
            ? (e) => Promise.resolve().then(e)
            : (e, t) => t(e, 0),
        G = x.WebSocket || x.MozWebSocket,
        Y =
          'undefined' !== typeof navigator &&
          'string' === typeof navigator.product &&
          'reactnative' === navigator.product.toLowerCase()
      const X = {
          websocket: class extends L {
            constructor(e) {
              super(e), (this.supportsBinary = !e.forceBase64)
            }
            get name() {
              return 'websocket'
            }
            doOpen() {
              if (!this.check()) return
              const e = this.uri(),
                t = this.opts.protocols,
                n = Y
                  ? {}
                  : N(
                      this.opts,
                      'agent',
                      'perMessageDeflate',
                      'pfx',
                      'key',
                      'passphrase',
                      'cert',
                      'ca',
                      'ciphers',
                      'rejectUnauthorized',
                      'localAddress',
                      'protocolVersion',
                      'origin',
                      'maxPayload',
                      'family',
                      'checkServerIdentity',
                    )
              this.opts.extraHeaders && (n.headers = this.opts.extraHeaders)
              try {
                this.ws = Y ? new G(e, t, n) : t ? new G(e, t) : new G(e)
              } catch (Ii) {
                return this.emitReserved('error', Ii)
              }
              ;(this.ws.binaryType = this.socket.binaryType),
                this.addEventListeners()
            }
            addEventListeners() {
              ;(this.ws.onopen = () => {
                this.opts.autoUnref && this.ws._socket.unref(), this.onOpen()
              }),
                (this.ws.onclose = (e) =>
                  this.onClose({
                    description: 'websocket connection closed',
                    context: e,
                  })),
                (this.ws.onmessage = (e) => this.onData(e.data)),
                (this.ws.onerror = (e) => this.onError('websocket error', e))
            }
            write(e) {
              this.writable = !1
              for (let t = 0; t < e.length; t++) {
                const n = e[t],
                  r = t === e.length - 1
                c(n, this.supportsBinary, (e) => {
                  try {
                    this.ws.send(e)
                  } catch (t) {}
                  r &&
                    K(() => {
                      ;(this.writable = !0), this.emitReserved('drain')
                    }, this.setTimeoutFn)
                })
              }
            }
            doClose() {
              'undefined' !== typeof this.ws &&
                (this.ws.close(), (this.ws = null))
            }
            uri() {
              const e = this.opts.secure ? 'wss' : 'ws',
                t = this.query || {}
              return (
                this.opts.timestampRequests &&
                  (t[this.opts.timestampParam] = B()),
                this.supportsBinary || (t.b64 = 1),
                this.createUri(e, t)
              )
            }
            check() {
              return !!G
            }
          },
          webtransport: class extends L {
            get name() {
              return 'webtransport'
            }
            doOpen() {
              'function' === typeof WebTransport &&
                ((this.transport = new WebTransport(
                  this.createUri('https'),
                  this.opts.transportOptions[this.name],
                )),
                this.transport.closed
                  .then(() => {
                    this.onClose()
                  })
                  .catch((e) => {
                    this.onError('webtransport error', e)
                  }),
                this.transport.ready.then(() => {
                  this.transport.createBidirectionalStream().then((e) => {
                    const t = (function (e, t) {
                        S || (S = new TextDecoder())
                        const n = []
                        let r = 0,
                          o = -1,
                          a = !1
                        return new TransformStream({
                          transform(l, s) {
                            for (n.push(l); ; ) {
                              if (0 === r) {
                                if (_(n) < 1) break
                                const e = E(n, 1)
                                ;(a = 128 === (128 & e[0])),
                                  (o = 127 & e[0]),
                                  (r = o < 126 ? 3 : 126 === o ? 1 : 2)
                              } else if (1 === r) {
                                if (_(n) < 2) break
                                const e = E(n, 2)
                                ;(o = new DataView(
                                  e.buffer,
                                  e.byteOffset,
                                  e.length,
                                ).getUint16(0)),
                                  (r = 3)
                              } else if (2 === r) {
                                if (_(n) < 8) break
                                const e = E(n, 8),
                                  t = new DataView(
                                    e.buffer,
                                    e.byteOffset,
                                    e.length,
                                  ),
                                  a = t.getUint32(0)
                                if (a > Math.pow(2, 21) - 1) {
                                  s.enqueue(i)
                                  break
                                }
                                ;(o = a * Math.pow(2, 32) + t.getUint32(4)),
                                  (r = 3)
                              } else {
                                if (_(n) < o) break
                                const e = E(n, o)
                                s.enqueue(g(a ? e : S.decode(e), t)), (r = 0)
                              }
                              if (0 === o || o > e) {
                                s.enqueue(i)
                                break
                              }
                            }
                          },
                        })
                      })(Number.MAX_SAFE_INTEGER, this.socket.binaryType),
                      n = e.readable.pipeThrough(t).getReader(),
                      r = k()
                    r.readable.pipeTo(e.writable),
                      (this.writer = r.writable.getWriter())
                    const o = () => {
                      n.read()
                        .then((e) => {
                          let { done: t, value: n } = e
                          t || (this.onPacket(n), o())
                        })
                        .catch((e) => {})
                    }
                    o()
                    const a = { type: 'open' }
                    this.query.sid &&
                      (a.data = '{"sid":"'.concat(this.query.sid, '"}')),
                      this.writer.write(a).then(() => this.onOpen())
                  })
                }))
            }
            write(e) {
              this.writable = !1
              for (let t = 0; t < e.length; t++) {
                const n = e[t],
                  r = t === e.length - 1
                this.writer.write(n).then(() => {
                  r &&
                    K(() => {
                      ;(this.writable = !0), this.emitReserved('drain')
                    }, this.setTimeoutFn)
                })
              }
            }
            doClose() {
              var e
              null === (e = this.transport) || void 0 === e || e.close()
            }
          },
          polling: class extends L {
            constructor(e) {
              if (
                (super(e), (this.polling = !1), 'undefined' !== typeof location)
              ) {
                const t = 'https:' === location.protocol
                let n = location.port
                n || (n = t ? '443' : '80'),
                  (this.xd =
                    ('undefined' !== typeof location &&
                      e.hostname !== location.hostname) ||
                    n !== e.port)
              }
              const t = e && e.forceBase64
              ;(this.supportsBinary = q && !t),
                this.opts.withCredentials && (this.cookieJar = void 0)
            }
            get name() {
              return 'polling'
            }
            doOpen() {
              this.poll()
            }
            pause(e) {
              this.readyState = 'pausing'
              const t = () => {
                ;(this.readyState = 'paused'), e()
              }
              if (this.polling || !this.writable) {
                let e = 0
                this.polling &&
                  (e++,
                  this.once('pollComplete', function () {
                    --e || t()
                  })),
                  this.writable ||
                    (e++,
                    this.once('drain', function () {
                      --e || t()
                    }))
              } else t()
            }
            poll() {
              ;(this.polling = !0), this.doPoll(), this.emitReserved('poll')
            }
            onData(e) {
              ;((e, t) => {
                const n = e.split(w),
                  r = []
                for (let o = 0; o < n.length; o++) {
                  const e = g(n[o], t)
                  if ((r.push(e), 'error' === e.type)) break
                }
                return r
              })(e, this.socket.binaryType).forEach((e) => {
                if (
                  ('opening' === this.readyState &&
                    'open' === e.type &&
                    this.onOpen(),
                  'close' === e.type)
                )
                  return (
                    this.onClose({
                      description: 'transport closed by the server',
                    }),
                    !1
                  )
                this.onPacket(e)
              }),
                'closed' !== this.readyState &&
                  ((this.polling = !1),
                  this.emitReserved('pollComplete'),
                  'open' === this.readyState && this.poll())
            }
            doClose() {
              const e = () => {
                this.write([{ type: 'close' }])
              }
              'open' === this.readyState ? e() : this.once('open', e)
            }
            write(e) {
              ;(this.writable = !1),
                ((e, t) => {
                  const n = e.length,
                    r = new Array(n)
                  let o = 0
                  e.forEach((e, a) => {
                    c(e, !1, (e) => {
                      ;(r[a] = e), ++o === n && t(r.join(w))
                    })
                  })
                })(e, (e) => {
                  this.doWrite(e, () => {
                    ;(this.writable = !0), this.emitReserved('drain')
                  })
                })
            }
            uri() {
              const e = this.opts.secure ? 'https' : 'http',
                t = this.query || {}
              return (
                !1 !== this.opts.timestampRequests &&
                  (t[this.opts.timestampParam] = B()),
                this.supportsBinary || t.sid || (t.b64 = 1),
                this.createUri(e, t)
              )
            }
            request() {
              let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {}
              return (
                Object.assign(
                  e,
                  { xd: this.xd, cookieJar: this.cookieJar },
                  this.opts,
                ),
                new W(this.uri(), e)
              )
            }
            doWrite(e, t) {
              const n = this.request({ method: 'POST', data: e })
              n.on('success', t),
                n.on('error', (e, t) => {
                  this.onError('xhr post error', e, t)
                })
            }
            doPoll() {
              const e = this.request()
              e.on('data', this.onData.bind(this)),
                e.on('error', (e, t) => {
                  this.onError('xhr poll error', e, t)
                }),
                (this.pollXhr = e)
            }
          },
        },
        J =
          /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
        Z = [
          'source',
          'protocol',
          'authority',
          'userInfo',
          'user',
          'password',
          'host',
          'port',
          'relative',
          'path',
          'directory',
          'file',
          'query',
          'anchor',
        ]
      function ee(e) {
        if (e.length > 2e3) throw 'URI too long'
        const t = e,
          n = e.indexOf('['),
          r = e.indexOf(']')
        ;-1 != n &&
          -1 != r &&
          (e =
            e.substring(0, n) +
            e.substring(n, r).replace(/:/g, ';') +
            e.substring(r, e.length))
        let o = J.exec(e || ''),
          a = {},
          i = 14
        for (; i--; ) a[Z[i]] = o[i] || ''
        return (
          -1 != n &&
            -1 != r &&
            ((a.source = t),
            (a.host = a.host
              .substring(1, a.host.length - 1)
              .replace(/;/g, ':')),
            (a.authority = a.authority
              .replace('[', '')
              .replace(']', '')
              .replace(/;/g, ':')),
            (a.ipv6uri = !0)),
          (a.pathNames = (function (e, t) {
            const n = /\/{2,9}/g,
              r = t.replace(n, '/').split('/')
            ;('/' != t.slice(0, 1) && 0 !== t.length) || r.splice(0, 1)
            '/' == t.slice(-1) && r.splice(r.length - 1, 1)
            return r
          })(0, a.path)),
          (a.queryKey = (function (e, t) {
            const n = {}
            return (
              t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function (e, t, r) {
                t && (n[t] = r)
              }),
              n
            )
          })(0, a.query)),
          a
        )
      }
      class te extends C {
        constructor(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
          super(),
            (this.binaryType = 'arraybuffer'),
            (this.writeBuffer = []),
            e && 'object' === typeof e && ((t = e), (e = null)),
            e
              ? ((e = ee(e)),
                (t.hostname = e.host),
                (t.secure = 'https' === e.protocol || 'wss' === e.protocol),
                (t.port = e.port),
                e.query && (t.query = e.query))
              : t.host && (t.hostname = ee(t.host).host),
            O(this, t),
            (this.secure =
              null != t.secure
                ? t.secure
                : 'undefined' !== typeof location &&
                  'https:' === location.protocol),
            t.hostname && !t.port && (t.port = this.secure ? '443' : '80'),
            (this.hostname =
              t.hostname ||
              ('undefined' !== typeof location
                ? location.hostname
                : 'localhost')),
            (this.port =
              t.port ||
              ('undefined' !== typeof location && location.port
                ? location.port
                : this.secure
                  ? '443'
                  : '80')),
            (this.transports = t.transports || [
              'polling',
              'websocket',
              'webtransport',
            ]),
            (this.writeBuffer = []),
            (this.prevBufferLen = 0),
            (this.opts = Object.assign(
              {
                path: '/engine.io',
                agent: !1,
                withCredentials: !1,
                upgrade: !0,
                timestampParam: 't',
                rememberUpgrade: !1,
                addTrailingSlash: !0,
                rejectUnauthorized: !0,
                perMessageDeflate: { threshold: 1024 },
                transportOptions: {},
                closeOnBeforeunload: !1,
              },
              t,
            )),
            (this.opts.path =
              this.opts.path.replace(/\/$/, '') +
              (this.opts.addTrailingSlash ? '/' : '')),
            'string' === typeof this.opts.query &&
              (this.opts.query = (function (e) {
                let t = {},
                  n = e.split('&')
                for (let r = 0, o = n.length; r < o; r++) {
                  let e = n[r].split('=')
                  t[decodeURIComponent(e[0])] = decodeURIComponent(e[1])
                }
                return t
              })(this.opts.query)),
            (this.id = null),
            (this.upgrades = null),
            (this.pingInterval = null),
            (this.pingTimeout = null),
            (this.pingTimeoutTimer = null),
            'function' === typeof addEventListener &&
              (this.opts.closeOnBeforeunload &&
                ((this.beforeunloadEventListener = () => {
                  this.transport &&
                    (this.transport.removeAllListeners(),
                    this.transport.close())
                }),
                addEventListener(
                  'beforeunload',
                  this.beforeunloadEventListener,
                  !1,
                )),
              'localhost' !== this.hostname &&
                ((this.offlineEventListener = () => {
                  this.onClose('transport close', {
                    description: 'network connection lost',
                  })
                }),
                addEventListener('offline', this.offlineEventListener, !1))),
            this.open()
        }
        createTransport(e) {
          const t = Object.assign({}, this.opts.query)
          ;(t.EIO = 4), (t.transport = e), this.id && (t.sid = this.id)
          const n = Object.assign(
            {},
            this.opts,
            {
              query: t,
              socket: this,
              hostname: this.hostname,
              secure: this.secure,
              port: this.port,
            },
            this.opts.transportOptions[e],
          )
          return new X[e](n)
        }
        open() {
          let e
          if (
            this.opts.rememberUpgrade &&
            te.priorWebsocketSuccess &&
            -1 !== this.transports.indexOf('websocket')
          )
            e = 'websocket'
          else {
            if (0 === this.transports.length)
              return void this.setTimeoutFn(() => {
                this.emitReserved('error', 'No transports available')
              }, 0)
            e = this.transports[0]
          }
          this.readyState = 'opening'
          try {
            e = this.createTransport(e)
          } catch (t) {
            return this.transports.shift(), void this.open()
          }
          e.open(), this.setTransport(e)
        }
        setTransport(e) {
          this.transport && this.transport.removeAllListeners(),
            (this.transport = e),
            e
              .on('drain', this.onDrain.bind(this))
              .on('packet', this.onPacket.bind(this))
              .on('error', this.onError.bind(this))
              .on('close', (e) => this.onClose('transport close', e))
        }
        probe(e) {
          let t = this.createTransport(e),
            n = !1
          te.priorWebsocketSuccess = !1
          const r = () => {
            n ||
              (t.send([{ type: 'ping', data: 'probe' }]),
              t.once('packet', (e) => {
                if (!n)
                  if ('pong' === e.type && 'probe' === e.data) {
                    if (
                      ((this.upgrading = !0),
                      this.emitReserved('upgrading', t),
                      !t)
                    )
                      return
                    ;(te.priorWebsocketSuccess = 'websocket' === t.name),
                      this.transport.pause(() => {
                        n ||
                          ('closed' !== this.readyState &&
                            (u(),
                            this.setTransport(t),
                            t.send([{ type: 'upgrade' }]),
                            this.emitReserved('upgrade', t),
                            (t = null),
                            (this.upgrading = !1),
                            this.flush()))
                      })
                  } else {
                    const e = new Error('probe error')
                    ;(e.transport = t.name),
                      this.emitReserved('upgradeError', e)
                  }
              }))
          }
          function o() {
            n || ((n = !0), u(), t.close(), (t = null))
          }
          const a = (e) => {
            const n = new Error('probe error: ' + e)
            ;(n.transport = t.name), o(), this.emitReserved('upgradeError', n)
          }
          function i() {
            a('transport closed')
          }
          function l() {
            a('socket closed')
          }
          function s(e) {
            t && e.name !== t.name && o()
          }
          const u = () => {
            t.removeListener('open', r),
              t.removeListener('error', a),
              t.removeListener('close', i),
              this.off('close', l),
              this.off('upgrading', s)
          }
          t.once('open', r),
            t.once('error', a),
            t.once('close', i),
            this.once('close', l),
            this.once('upgrading', s),
            -1 !== this.upgrades.indexOf('webtransport') && 'webtransport' !== e
              ? this.setTimeoutFn(() => {
                  n || t.open()
                }, 200)
              : t.open()
        }
        onOpen() {
          if (
            ((this.readyState = 'open'),
            (te.priorWebsocketSuccess = 'websocket' === this.transport.name),
            this.emitReserved('open'),
            this.flush(),
            'open' === this.readyState && this.opts.upgrade)
          ) {
            let e = 0
            const t = this.upgrades.length
            for (; e < t; e++) this.probe(this.upgrades[e])
          }
        }
        onPacket(e) {
          if (
            'opening' === this.readyState ||
            'open' === this.readyState ||
            'closing' === this.readyState
          )
            switch (
              (this.emitReserved('packet', e),
              this.emitReserved('heartbeat'),
              this.resetPingTimeout(),
              e.type)
            ) {
              case 'open':
                this.onHandshake(JSON.parse(e.data))
                break
              case 'ping':
                this.sendPacket('pong'),
                  this.emitReserved('ping'),
                  this.emitReserved('pong')
                break
              case 'error':
                const t = new Error('server error')
                ;(t.code = e.data), this.onError(t)
                break
              case 'message':
                this.emitReserved('data', e.data),
                  this.emitReserved('message', e.data)
            }
        }
        onHandshake(e) {
          this.emitReserved('handshake', e),
            (this.id = e.sid),
            (this.transport.query.sid = e.sid),
            (this.upgrades = this.filterUpgrades(e.upgrades)),
            (this.pingInterval = e.pingInterval),
            (this.pingTimeout = e.pingTimeout),
            (this.maxPayload = e.maxPayload),
            this.onOpen(),
            'closed' !== this.readyState && this.resetPingTimeout()
        }
        resetPingTimeout() {
          this.clearTimeoutFn(this.pingTimeoutTimer),
            (this.pingTimeoutTimer = this.setTimeoutFn(() => {
              this.onClose('ping timeout')
            }, this.pingInterval + this.pingTimeout)),
            this.opts.autoUnref && this.pingTimeoutTimer.unref()
        }
        onDrain() {
          this.writeBuffer.splice(0, this.prevBufferLen),
            (this.prevBufferLen = 0),
            0 === this.writeBuffer.length
              ? this.emitReserved('drain')
              : this.flush()
        }
        flush() {
          if (
            'closed' !== this.readyState &&
            this.transport.writable &&
            !this.upgrading &&
            this.writeBuffer.length
          ) {
            const e = this.getWritablePackets()
            this.transport.send(e),
              (this.prevBufferLen = e.length),
              this.emitReserved('flush')
          }
        }
        getWritablePackets() {
          if (
            !(
              this.maxPayload &&
              'polling' === this.transport.name &&
              this.writeBuffer.length > 1
            )
          )
            return this.writeBuffer
          let e = 1
          for (let n = 0; n < this.writeBuffer.length; n++) {
            const r = this.writeBuffer[n].data
            if (
              (r &&
                (e +=
                  'string' === typeof (t = r)
                    ? (function (e) {
                        let t = 0,
                          n = 0
                        for (let r = 0, o = e.length; r < o; r++)
                          (t = e.charCodeAt(r)),
                            t < 128
                              ? (n += 1)
                              : t < 2048
                                ? (n += 2)
                                : t < 55296 || t >= 57344
                                  ? (n += 3)
                                  : (r++, (n += 4))
                        return n
                      })(t)
                    : Math.ceil(1.33 * (t.byteLength || t.size))),
              n > 0 && e > this.maxPayload)
            )
              return this.writeBuffer.slice(0, n)
            e += 2
          }
          var t
          return this.writeBuffer
        }
        write(e, t, n) {
          return this.sendPacket('message', e, t, n), this
        }
        send(e, t, n) {
          return this.sendPacket('message', e, t, n), this
        }
        sendPacket(e, t, n, r) {
          if (
            ('function' === typeof t && ((r = t), (t = void 0)),
            'function' === typeof n && ((r = n), (n = null)),
            'closing' === this.readyState || 'closed' === this.readyState)
          )
            return
          ;(n = n || {}).compress = !1 !== n.compress
          const o = { type: e, data: t, options: n }
          this.emitReserved('packetCreate', o),
            this.writeBuffer.push(o),
            r && this.once('flush', r),
            this.flush()
        }
        close() {
          const e = () => {
              this.onClose('forced close'), this.transport.close()
            },
            t = () => {
              this.off('upgrade', t), this.off('upgradeError', t), e()
            },
            n = () => {
              this.once('upgrade', t), this.once('upgradeError', t)
            }
          return (
            ('opening' !== this.readyState && 'open' !== this.readyState) ||
              ((this.readyState = 'closing'),
              this.writeBuffer.length
                ? this.once('drain', () => {
                    this.upgrading ? n() : e()
                  })
                : this.upgrading
                  ? n()
                  : e()),
            this
          )
        }
        onError(e) {
          ;(te.priorWebsocketSuccess = !1),
            this.emitReserved('error', e),
            this.onClose('transport error', e)
        }
        onClose(e, t) {
          ;('opening' !== this.readyState &&
            'open' !== this.readyState &&
            'closing' !== this.readyState) ||
            (this.clearTimeoutFn(this.pingTimeoutTimer),
            this.transport.removeAllListeners('close'),
            this.transport.close(),
            this.transport.removeAllListeners(),
            'function' === typeof removeEventListener &&
              (removeEventListener(
                'beforeunload',
                this.beforeunloadEventListener,
                !1,
              ),
              removeEventListener('offline', this.offlineEventListener, !1)),
            (this.readyState = 'closed'),
            (this.id = null),
            this.emitReserved('close', e, t),
            (this.writeBuffer = []),
            (this.prevBufferLen = 0))
        }
        filterUpgrades(e) {
          const t = []
          let n = 0
          const r = e.length
          for (; n < r; n++) ~this.transports.indexOf(e[n]) && t.push(e[n])
          return t
        }
      }
      te.protocol = 4
      te.protocol
      const ne = 'function' === typeof ArrayBuffer,
        re = (e) =>
          'function' === typeof ArrayBuffer.isView
            ? ArrayBuffer.isView(e)
            : e.buffer instanceof ArrayBuffer,
        oe = Object.prototype.toString,
        ae =
          'function' === typeof Blob ||
          ('undefined' !== typeof Blob &&
            '[object BlobConstructor]' === oe.call(Blob)),
        ie =
          'function' === typeof File ||
          ('undefined' !== typeof File &&
            '[object FileConstructor]' === oe.call(File))
      function le(e) {
        return (
          (ne && (e instanceof ArrayBuffer || re(e))) ||
          (ae && e instanceof Blob) ||
          (ie && e instanceof File)
        )
      }
      function se(e, t) {
        if (!e || 'object' !== typeof e) return !1
        if (Array.isArray(e)) {
          for (let t = 0, n = e.length; t < n; t++) if (se(e[t])) return !0
          return !1
        }
        if (le(e)) return !0
        if (
          e.toJSON &&
          'function' === typeof e.toJSON &&
          1 === arguments.length
        )
          return se(e.toJSON(), !0)
        for (const n in e)
          if (Object.prototype.hasOwnProperty.call(e, n) && se(e[n])) return !0
        return !1
      }
      function ue(e) {
        const t = [],
          n = e.data,
          r = e
        return (
          (r.data = ce(n, t)),
          (r.attachments = t.length),
          { packet: r, buffers: t }
        )
      }
      function ce(e, t) {
        if (!e) return e
        if (le(e)) {
          const n = { _placeholder: !0, num: t.length }
          return t.push(e), n
        }
        if (Array.isArray(e)) {
          const n = new Array(e.length)
          for (let r = 0; r < e.length; r++) n[r] = ce(e[r], t)
          return n
        }
        if ('object' === typeof e && !(e instanceof Date)) {
          const n = {}
          for (const r in e)
            Object.prototype.hasOwnProperty.call(e, r) && (n[r] = ce(e[r], t))
          return n
        }
        return e
      }
      function fe(e, t) {
        return (e.data = de(e.data, t)), delete e.attachments, e
      }
      function de(e, t) {
        if (!e) return e
        if (e && !0 === e._placeholder) {
          if ('number' === typeof e.num && e.num >= 0 && e.num < t.length)
            return t[e.num]
          throw new Error('illegal attachments')
        }
        if (Array.isArray(e))
          for (let n = 0; n < e.length; n++) e[n] = de(e[n], t)
        else if ('object' === typeof e)
          for (const n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (e[n] = de(e[n], t))
        return e
      }
      const pe = [
          'connect',
          'connect_error',
          'disconnect',
          'disconnecting',
          'newListener',
          'removeListener',
        ],
        he = 5
      var me
      !(function (e) {
        ;(e[(e.CONNECT = 0)] = 'CONNECT'),
          (e[(e.DISCONNECT = 1)] = 'DISCONNECT'),
          (e[(e.EVENT = 2)] = 'EVENT'),
          (e[(e.ACK = 3)] = 'ACK'),
          (e[(e.CONNECT_ERROR = 4)] = 'CONNECT_ERROR'),
          (e[(e.BINARY_EVENT = 5)] = 'BINARY_EVENT'),
          (e[(e.BINARY_ACK = 6)] = 'BINARY_ACK')
      })(me || (me = {}))
      class ve {
        constructor(e) {
          this.replacer = e
        }
        encode(e) {
          return (e.type !== me.EVENT && e.type !== me.ACK) || !se(e)
            ? [this.encodeAsString(e)]
            : this.encodeAsBinary({
                type: e.type === me.EVENT ? me.BINARY_EVENT : me.BINARY_ACK,
                nsp: e.nsp,
                data: e.data,
                id: e.id,
              })
        }
        encodeAsString(e) {
          let t = '' + e.type
          return (
            (e.type !== me.BINARY_EVENT && e.type !== me.BINARY_ACK) ||
              (t += e.attachments + '-'),
            e.nsp && '/' !== e.nsp && (t += e.nsp + ','),
            null != e.id && (t += e.id),
            null != e.data && (t += JSON.stringify(e.data, this.replacer)),
            t
          )
        }
        encodeAsBinary(e) {
          const t = ue(e),
            n = this.encodeAsString(t.packet),
            r = t.buffers
          return r.unshift(n), r
        }
      }
      function ge(e) {
        return '[object Object]' === Object.prototype.toString.call(e)
      }
      class ye extends C {
        constructor(e) {
          super(), (this.reviver = e)
        }
        add(e) {
          let t
          if ('string' === typeof e) {
            if (this.reconstructor)
              throw new Error('got plaintext data when reconstructing a packet')
            t = this.decodeString(e)
            const n = t.type === me.BINARY_EVENT
            n || t.type === me.BINARY_ACK
              ? ((t.type = n ? me.EVENT : me.ACK),
                (this.reconstructor = new be(t)),
                0 === t.attachments && super.emitReserved('decoded', t))
              : super.emitReserved('decoded', t)
          } else {
            if (!le(e) && !e.base64) throw new Error('Unknown type: ' + e)
            if (!this.reconstructor)
              throw new Error(
                'got binary data when not reconstructing a packet',
              )
            ;(t = this.reconstructor.takeBinaryData(e)),
              t &&
                ((this.reconstructor = null), super.emitReserved('decoded', t))
          }
        }
        decodeString(e) {
          let t = 0
          const n = { type: Number(e.charAt(0)) }
          if (void 0 === me[n.type])
            throw new Error('unknown packet type ' + n.type)
          if (n.type === me.BINARY_EVENT || n.type === me.BINARY_ACK) {
            const r = t + 1
            for (; '-' !== e.charAt(++t) && t != e.length; );
            const o = e.substring(r, t)
            if (o != Number(o) || '-' !== e.charAt(t))
              throw new Error('Illegal attachments')
            n.attachments = Number(o)
          }
          if ('/' === e.charAt(t + 1)) {
            const r = t + 1
            for (; ++t; ) {
              if (',' === e.charAt(t)) break
              if (t === e.length) break
            }
            n.nsp = e.substring(r, t)
          } else n.nsp = '/'
          const r = e.charAt(t + 1)
          if ('' !== r && Number(r) == r) {
            const r = t + 1
            for (; ++t; ) {
              const n = e.charAt(t)
              if (null == n || Number(n) != n) {
                --t
                break
              }
              if (t === e.length) break
            }
            n.id = Number(e.substring(r, t + 1))
          }
          if (e.charAt(++t)) {
            const r = this.tryParse(e.substr(t))
            if (!ye.isPayloadValid(n.type, r))
              throw new Error('invalid payload')
            n.data = r
          }
          return n
        }
        tryParse(e) {
          try {
            return JSON.parse(e, this.reviver)
          } catch (t) {
            return !1
          }
        }
        static isPayloadValid(e, t) {
          switch (e) {
            case me.CONNECT:
              return ge(t)
            case me.DISCONNECT:
              return void 0 === t
            case me.CONNECT_ERROR:
              return 'string' === typeof t || ge(t)
            case me.EVENT:
            case me.BINARY_EVENT:
              return (
                Array.isArray(t) &&
                ('number' === typeof t[0] ||
                  ('string' === typeof t[0] && -1 === pe.indexOf(t[0])))
              )
            case me.ACK:
            case me.BINARY_ACK:
              return Array.isArray(t)
          }
        }
        destroy() {
          this.reconstructor &&
            (this.reconstructor.finishedReconstruction(),
            (this.reconstructor = null))
        }
      }
      class be {
        constructor(e) {
          ;(this.packet = e), (this.buffers = []), (this.reconPack = e)
        }
        takeBinaryData(e) {
          if (
            (this.buffers.push(e),
            this.buffers.length === this.reconPack.attachments)
          ) {
            const e = fe(this.reconPack, this.buffers)
            return this.finishedReconstruction(), e
          }
          return null
        }
        finishedReconstruction() {
          ;(this.reconPack = null), (this.buffers = [])
        }
      }
      function we(e, t, n) {
        return (
          e.on(t, n),
          function () {
            e.off(t, n)
          }
        )
      }
      const ke = Object.freeze({
        connect: 1,
        connect_error: 1,
        disconnect: 1,
        disconnecting: 1,
        newListener: 1,
        removeListener: 1,
      })
      class Se extends C {
        constructor(e, t, n) {
          super(),
            (this.connected = !1),
            (this.recovered = !1),
            (this.receiveBuffer = []),
            (this.sendBuffer = []),
            (this._queue = []),
            (this._queueSeq = 0),
            (this.ids = 0),
            (this.acks = {}),
            (this.flags = {}),
            (this.io = e),
            (this.nsp = t),
            n && n.auth && (this.auth = n.auth),
            (this._opts = Object.assign({}, n)),
            this.io._autoConnect && this.open()
        }
        get disconnected() {
          return !this.connected
        }
        subEvents() {
          if (this.subs) return
          const e = this.io
          this.subs = [
            we(e, 'open', this.onopen.bind(this)),
            we(e, 'packet', this.onpacket.bind(this)),
            we(e, 'error', this.onerror.bind(this)),
            we(e, 'close', this.onclose.bind(this)),
          ]
        }
        get active() {
          return !!this.subs
        }
        connect() {
          return (
            this.connected ||
              (this.subEvents(),
              this.io._reconnecting || this.io.open(),
              'open' === this.io._readyState && this.onopen()),
            this
          )
        }
        open() {
          return this.connect()
        }
        send() {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n]
          return t.unshift('message'), this.emit.apply(this, t), this
        }
        emit(e) {
          if (ke.hasOwnProperty(e))
            throw new Error('"' + e.toString() + '" is a reserved event name')
          for (
            var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
            r < t;
            r++
          )
            n[r - 1] = arguments[r]
          if (
            (n.unshift(e),
            this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
          )
            return this._addToQueue(n), this
          const o = { type: me.EVENT, data: n, options: {} }
          if (
            ((o.options.compress = !1 !== this.flags.compress),
            'function' === typeof n[n.length - 1])
          ) {
            const e = this.ids++,
              t = n.pop()
            this._registerAckCallback(e, t), (o.id = e)
          }
          const a =
            this.io.engine &&
            this.io.engine.transport &&
            this.io.engine.transport.writable
          return (
            (this.flags.volatile && (!a || !this.connected)) ||
              (this.connected
                ? (this.notifyOutgoingListeners(o), this.packet(o))
                : this.sendBuffer.push(o)),
            (this.flags = {}),
            this
          )
        }
        _registerAckCallback(e, t) {
          var n,
            r = this
          const o =
            null !== (n = this.flags.timeout) && void 0 !== n
              ? n
              : this._opts.ackTimeout
          if (void 0 === o) return void (this.acks[e] = t)
          const a = this.io.setTimeoutFn(() => {
            delete this.acks[e]
            for (let t = 0; t < this.sendBuffer.length; t++)
              this.sendBuffer[t].id === e && this.sendBuffer.splice(t, 1)
            t.call(this, new Error('operation has timed out'))
          }, o)
          this.acks[e] = function () {
            r.io.clearTimeoutFn(a)
            for (var e = arguments.length, n = new Array(e), o = 0; o < e; o++)
              n[o] = arguments[o]
            t.apply(r, [null, ...n])
          }
        }
        emitWithAck(e) {
          for (
            var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
            r < t;
            r++
          )
            n[r - 1] = arguments[r]
          const o =
            void 0 !== this.flags.timeout || void 0 !== this._opts.ackTimeout
          return new Promise((t, r) => {
            n.push((e, n) => (o ? (e ? r(e) : t(n)) : t(e))), this.emit(e, ...n)
          })
        }
        _addToQueue(e) {
          var t = this
          let n
          'function' === typeof e[e.length - 1] && (n = e.pop())
          const r = {
            id: this._queueSeq++,
            tryCount: 0,
            pending: !1,
            args: e,
            flags: Object.assign({ fromQueue: !0 }, this.flags),
          }
          e.push(function (e) {
            if (r !== t._queue[0]) return
            if (null !== e)
              r.tryCount > t._opts.retries && (t._queue.shift(), n && n(e))
            else if ((t._queue.shift(), n)) {
              for (
                var o = arguments.length,
                  a = new Array(o > 1 ? o - 1 : 0),
                  i = 1;
                i < o;
                i++
              )
                a[i - 1] = arguments[i]
              n(null, ...a)
            }
            return (r.pending = !1), t._drainQueue()
          }),
            this._queue.push(r),
            this._drainQueue()
        }
        _drainQueue() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
          if (!this.connected || 0 === this._queue.length) return
          const t = this._queue[0]
          ;(t.pending && !e) ||
            ((t.pending = !0),
            t.tryCount++,
            (this.flags = t.flags),
            this.emit.apply(this, t.args))
        }
        packet(e) {
          ;(e.nsp = this.nsp), this.io._packet(e)
        }
        onopen() {
          'function' == typeof this.auth
            ? this.auth((e) => {
                this._sendConnectPacket(e)
              })
            : this._sendConnectPacket(this.auth)
        }
        _sendConnectPacket(e) {
          this.packet({
            type: me.CONNECT,
            data: this._pid
              ? Object.assign({ pid: this._pid, offset: this._lastOffset }, e)
              : e,
          })
        }
        onerror(e) {
          this.connected || this.emitReserved('connect_error', e)
        }
        onclose(e, t) {
          ;(this.connected = !1),
            delete this.id,
            this.emitReserved('disconnect', e, t)
        }
        onpacket(e) {
          if (e.nsp === this.nsp)
            switch (e.type) {
              case me.CONNECT:
                e.data && e.data.sid
                  ? this.onconnect(e.data.sid, e.data.pid)
                  : this.emitReserved(
                      'connect_error',
                      new Error(
                        'It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)',
                      ),
                    )
                break
              case me.EVENT:
              case me.BINARY_EVENT:
                this.onevent(e)
                break
              case me.ACK:
              case me.BINARY_ACK:
                this.onack(e)
                break
              case me.DISCONNECT:
                this.ondisconnect()
                break
              case me.CONNECT_ERROR:
                this.destroy()
                const t = new Error(e.data.message)
                ;(t.data = e.data.data), this.emitReserved('connect_error', t)
            }
        }
        onevent(e) {
          const t = e.data || []
          null != e.id && t.push(this.ack(e.id)),
            this.connected
              ? this.emitEvent(t)
              : this.receiveBuffer.push(Object.freeze(t))
        }
        emitEvent(e) {
          if (this._anyListeners && this._anyListeners.length) {
            const t = this._anyListeners.slice()
            for (const n of t) n.apply(this, e)
          }
          super.emit.apply(this, e),
            this._pid &&
              e.length &&
              'string' === typeof e[e.length - 1] &&
              (this._lastOffset = e[e.length - 1])
        }
        ack(e) {
          const t = this
          let n = !1
          return function () {
            if (!n) {
              n = !0
              for (
                var r = arguments.length, o = new Array(r), a = 0;
                a < r;
                a++
              )
                o[a] = arguments[a]
              t.packet({ type: me.ACK, id: e, data: o })
            }
          }
        }
        onack(e) {
          const t = this.acks[e.id]
          'function' === typeof t &&
            (t.apply(this, e.data), delete this.acks[e.id])
        }
        onconnect(e, t) {
          ;(this.id = e),
            (this.recovered = t && this._pid === t),
            (this._pid = t),
            (this.connected = !0),
            this.emitBuffered(),
            this.emitReserved('connect'),
            this._drainQueue(!0)
        }
        emitBuffered() {
          this.receiveBuffer.forEach((e) => this.emitEvent(e)),
            (this.receiveBuffer = []),
            this.sendBuffer.forEach((e) => {
              this.notifyOutgoingListeners(e), this.packet(e)
            }),
            (this.sendBuffer = [])
        }
        ondisconnect() {
          this.destroy(), this.onclose('io server disconnect')
        }
        destroy() {
          this.subs && (this.subs.forEach((e) => e()), (this.subs = void 0)),
            this.io._destroy(this)
        }
        disconnect() {
          return (
            this.connected && this.packet({ type: me.DISCONNECT }),
            this.destroy(),
            this.connected && this.onclose('io client disconnect'),
            this
          )
        }
        close() {
          return this.disconnect()
        }
        compress(e) {
          return (this.flags.compress = e), this
        }
        get volatile() {
          return (this.flags.volatile = !0), this
        }
        timeout(e) {
          return (this.flags.timeout = e), this
        }
        onAny(e) {
          return (
            (this._anyListeners = this._anyListeners || []),
            this._anyListeners.push(e),
            this
          )
        }
        prependAny(e) {
          return (
            (this._anyListeners = this._anyListeners || []),
            this._anyListeners.unshift(e),
            this
          )
        }
        offAny(e) {
          if (!this._anyListeners) return this
          if (e) {
            const t = this._anyListeners
            for (let n = 0; n < t.length; n++)
              if (e === t[n]) return t.splice(n, 1), this
          } else this._anyListeners = []
          return this
        }
        listenersAny() {
          return this._anyListeners || []
        }
        onAnyOutgoing(e) {
          return (
            (this._anyOutgoingListeners = this._anyOutgoingListeners || []),
            this._anyOutgoingListeners.push(e),
            this
          )
        }
        prependAnyOutgoing(e) {
          return (
            (this._anyOutgoingListeners = this._anyOutgoingListeners || []),
            this._anyOutgoingListeners.unshift(e),
            this
          )
        }
        offAnyOutgoing(e) {
          if (!this._anyOutgoingListeners) return this
          if (e) {
            const t = this._anyOutgoingListeners
            for (let n = 0; n < t.length; n++)
              if (e === t[n]) return t.splice(n, 1), this
          } else this._anyOutgoingListeners = []
          return this
        }
        listenersAnyOutgoing() {
          return this._anyOutgoingListeners || []
        }
        notifyOutgoingListeners(e) {
          if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
            const t = this._anyOutgoingListeners.slice()
            for (const n of t) n.apply(this, e.data)
          }
        }
      }
      function _e(e) {
        ;(e = e || {}),
          (this.ms = e.min || 100),
          (this.max = e.max || 1e4),
          (this.factor = e.factor || 2),
          (this.jitter = e.jitter > 0 && e.jitter <= 1 ? e.jitter : 0),
          (this.attempts = 0)
      }
      ;(_e.prototype.duration = function () {
        var e = this.ms * Math.pow(this.factor, this.attempts++)
        if (this.jitter) {
          var t = Math.random(),
            n = Math.floor(t * this.jitter * e)
          e = 0 == (1 & Math.floor(10 * t)) ? e - n : e + n
        }
        return 0 | Math.min(e, this.max)
      }),
        (_e.prototype.reset = function () {
          this.attempts = 0
        }),
        (_e.prototype.setMin = function (e) {
          this.ms = e
        }),
        (_e.prototype.setMax = function (e) {
          this.max = e
        }),
        (_e.prototype.setJitter = function (e) {
          this.jitter = e
        })
      class Ee extends C {
        constructor(t, n) {
          var r
          super(),
            (this.nsps = {}),
            (this.subs = []),
            t && 'object' === typeof t && ((n = t), (t = void 0)),
            ((n = n || {}).path = n.path || '/socket.io'),
            (this.opts = n),
            O(this, n),
            this.reconnection(!1 !== n.reconnection),
            this.reconnectionAttempts(n.reconnectionAttempts || 1 / 0),
            this.reconnectionDelay(n.reconnectionDelay || 1e3),
            this.reconnectionDelayMax(n.reconnectionDelayMax || 5e3),
            this.randomizationFactor(
              null !== (r = n.randomizationFactor) && void 0 !== r ? r : 0.5,
            ),
            (this.backoff = new _e({
              min: this.reconnectionDelay(),
              max: this.reconnectionDelayMax(),
              jitter: this.randomizationFactor(),
            })),
            this.timeout(null == n.timeout ? 2e4 : n.timeout),
            (this._readyState = 'closed'),
            (this.uri = t)
          const o = n.parser || e
          ;(this.encoder = new o.Encoder()),
            (this.decoder = new o.Decoder()),
            (this._autoConnect = !1 !== n.autoConnect),
            this._autoConnect && this.open()
        }
        reconnection(e) {
          return arguments.length
            ? ((this._reconnection = !!e), this)
            : this._reconnection
        }
        reconnectionAttempts(e) {
          return void 0 === e
            ? this._reconnectionAttempts
            : ((this._reconnectionAttempts = e), this)
        }
        reconnectionDelay(e) {
          var t
          return void 0 === e
            ? this._reconnectionDelay
            : ((this._reconnectionDelay = e),
              null === (t = this.backoff) || void 0 === t || t.setMin(e),
              this)
        }
        randomizationFactor(e) {
          var t
          return void 0 === e
            ? this._randomizationFactor
            : ((this._randomizationFactor = e),
              null === (t = this.backoff) || void 0 === t || t.setJitter(e),
              this)
        }
        reconnectionDelayMax(e) {
          var t
          return void 0 === e
            ? this._reconnectionDelayMax
            : ((this._reconnectionDelayMax = e),
              null === (t = this.backoff) || void 0 === t || t.setMax(e),
              this)
        }
        timeout(e) {
          return arguments.length ? ((this._timeout = e), this) : this._timeout
        }
        maybeReconnectOnOpen() {
          !this._reconnecting &&
            this._reconnection &&
            0 === this.backoff.attempts &&
            this.reconnect()
        }
        open(e) {
          if (~this._readyState.indexOf('open')) return this
          this.engine = new te(this.uri, this.opts)
          const t = this.engine,
            n = this
          ;(this._readyState = 'opening'), (this.skipReconnect = !1)
          const r = we(t, 'open', function () {
              n.onopen(), e && e()
            }),
            o = (t) => {
              this.cleanup(),
                (this._readyState = 'closed'),
                this.emitReserved('error', t),
                e ? e(t) : this.maybeReconnectOnOpen()
            },
            a = we(t, 'error', o)
          if (!1 !== this._timeout) {
            const e = this._timeout,
              n = this.setTimeoutFn(() => {
                r(), o(new Error('timeout')), t.close()
              }, e)
            this.opts.autoUnref && n.unref(),
              this.subs.push(() => {
                this.clearTimeoutFn(n)
              })
          }
          return this.subs.push(r), this.subs.push(a), this
        }
        connect(e) {
          return this.open(e)
        }
        onopen() {
          this.cleanup(), (this._readyState = 'open'), this.emitReserved('open')
          const e = this.engine
          this.subs.push(
            we(e, 'ping', this.onping.bind(this)),
            we(e, 'data', this.ondata.bind(this)),
            we(e, 'error', this.onerror.bind(this)),
            we(e, 'close', this.onclose.bind(this)),
            we(this.decoder, 'decoded', this.ondecoded.bind(this)),
          )
        }
        onping() {
          this.emitReserved('ping')
        }
        ondata(e) {
          try {
            this.decoder.add(e)
          } catch (t) {
            this.onclose('parse error', t)
          }
        }
        ondecoded(e) {
          K(() => {
            this.emitReserved('packet', e)
          }, this.setTimeoutFn)
        }
        onerror(e) {
          this.emitReserved('error', e)
        }
        socket(e, t) {
          let n = this.nsps[e]
          return (
            n
              ? this._autoConnect && !n.active && n.connect()
              : ((n = new Se(this, e, t)), (this.nsps[e] = n)),
            n
          )
        }
        _destroy(e) {
          const t = Object.keys(this.nsps)
          for (const n of t) {
            if (this.nsps[n].active) return
          }
          this._close()
        }
        _packet(e) {
          const t = this.encoder.encode(e)
          for (let n = 0; n < t.length; n++) this.engine.write(t[n], e.options)
        }
        cleanup() {
          this.subs.forEach((e) => e()),
            (this.subs.length = 0),
            this.decoder.destroy()
        }
        _close() {
          ;(this.skipReconnect = !0),
            (this._reconnecting = !1),
            this.onclose('forced close'),
            this.engine && this.engine.close()
        }
        disconnect() {
          return this._close()
        }
        onclose(e, t) {
          this.cleanup(),
            this.backoff.reset(),
            (this._readyState = 'closed'),
            this.emitReserved('close', e, t),
            this._reconnection && !this.skipReconnect && this.reconnect()
        }
        reconnect() {
          if (this._reconnecting || this.skipReconnect) return this
          const e = this
          if (this.backoff.attempts >= this._reconnectionAttempts)
            this.backoff.reset(),
              this.emitReserved('reconnect_failed'),
              (this._reconnecting = !1)
          else {
            const t = this.backoff.duration()
            this._reconnecting = !0
            const n = this.setTimeoutFn(() => {
              e.skipReconnect ||
                (this.emitReserved('reconnect_attempt', e.backoff.attempts),
                e.skipReconnect ||
                  e.open((t) => {
                    t
                      ? ((e._reconnecting = !1),
                        e.reconnect(),
                        this.emitReserved('reconnect_error', t))
                      : e.onreconnect()
                  }))
            }, t)
            this.opts.autoUnref && n.unref(),
              this.subs.push(() => {
                this.clearTimeoutFn(n)
              })
          }
        }
        onreconnect() {
          const e = this.backoff.attempts
          ;(this._reconnecting = !1),
            this.backoff.reset(),
            this.emitReserved('reconnect', e)
        }
      }
      const Ce = {}
      function xe(e, t) {
        'object' === typeof e && ((t = e), (e = void 0))
        const n = (function (e) {
            let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : '',
              n = arguments.length > 2 ? arguments[2] : void 0,
              r = e
            ;(n = n || ('undefined' !== typeof location && location)),
              null == e && (e = n.protocol + '//' + n.host),
              'string' === typeof e &&
                ('/' === e.charAt(0) &&
                  (e = '/' === e.charAt(1) ? n.protocol + e : n.host + e),
                /^(https?|wss?):\/\//.test(e) ||
                  (e =
                    'undefined' !== typeof n
                      ? n.protocol + '//' + e
                      : 'https://' + e),
                (r = ee(e))),
              r.port ||
                (/^(http|ws)$/.test(r.protocol)
                  ? (r.port = '80')
                  : /^(http|ws)s$/.test(r.protocol) && (r.port = '443')),
              (r.path = r.path || '/')
            const o = -1 !== r.host.indexOf(':') ? '[' + r.host + ']' : r.host
            return (
              (r.id = r.protocol + '://' + o + ':' + r.port + t),
              (r.href =
                r.protocol +
                '://' +
                o +
                (n && n.port === r.port ? '' : ':' + r.port)),
              r
            )
          })(e, (t = t || {}).path || '/socket.io'),
          r = n.source,
          o = n.id,
          a = n.path,
          i = Ce[o] && a in Ce[o].nsps
        let l
        return (
          t.forceNew || t['force new connection'] || !1 === t.multiplex || i
            ? (l = new Ee(r, t))
            : (Ce[o] || (Ce[o] = new Ee(r, t)), (l = Ce[o])),
          n.query && !t.query && (t.query = n.queryKey),
          l.socket(n.path, t)
        )
      }
      function Ne() {
        return (
          (Ne = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t]
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
              }),
          Ne.apply(this, arguments)
        )
      }
      function Pe(e, t) {
        return (
          (Pe = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e
              }),
          Pe(e, t)
        )
      }
      function Te(e, t) {
        ;(e.prototype = Object.create(t.prototype)),
          (e.prototype.constructor = e),
          Pe(e, t)
      }
      Object.assign(xe, { Manager: Ee, Socket: Se, io: xe, connect: xe })
      const Oe = function (e, t, n) {
        switch (n.length) {
          case 0:
            return e.call(t)
          case 1:
            return e.call(t, n[0])
          case 2:
            return e.call(t, n[0], n[1])
          case 3:
            return e.call(t, n[0], n[1], n[2])
        }
        return e.apply(t, n)
      }
      const Re = Array.isArray
      const Le =
        'object' == typeof global &&
        global &&
        global.Object === Object &&
        global
      var Ae = 'object' == typeof self && self && self.Object === Object && self
      const je = Le || Ae || Function('return this')()
      const ze = je.Symbol
      var Me = Object.prototype,
        De = Me.hasOwnProperty,
        Fe = Me.toString,
        Ie = ze ? ze.toStringTag : void 0
      const Be = function (e) {
        var t = De.call(e, Ie),
          n = e[Ie]
        try {
          e[Ie] = void 0
          var r = !0
        } catch (a) {}
        var o = Fe.call(e)
        return r && (t ? (e[Ie] = n) : delete e[Ie]), o
      }
      var Ue = Object.prototype.toString
      const Ve = function (e) {
        return Ue.call(e)
      }
      var He = ze ? ze.toStringTag : void 0
      const $e = function (e) {
        return null == e
          ? void 0 === e
            ? '[object Undefined]'
            : '[object Null]'
          : He && He in Object(e)
            ? Be(e)
            : Ve(e)
      }
      const qe = function (e) {
        return null != e && 'object' == typeof e
      }
      const We = function (e) {
        return 'symbol' == typeof e || (qe(e) && '[object Symbol]' == $e(e))
      }
      var Qe = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        Ke = /^\w*$/
      const Ge = function (e, t) {
        if (Re(e)) return !1
        var n = typeof e
        return (
          !(
            'number' != n &&
            'symbol' != n &&
            'boolean' != n &&
            null != e &&
            !We(e)
          ) ||
          Ke.test(e) ||
          !Qe.test(e) ||
          (null != t && e in Object(t))
        )
      }
      const Ye = function (e) {
        var t = typeof e
        return null != e && ('object' == t || 'function' == t)
      }
      const Xe = function (e) {
        if (!Ye(e)) return !1
        var t = $e(e)
        return (
          '[object Function]' == t ||
          '[object GeneratorFunction]' == t ||
          '[object AsyncFunction]' == t ||
          '[object Proxy]' == t
        )
      }
      const Je = je['__core-js_shared__']
      var Ze = (function () {
        var e = /[^.]+$/.exec((Je && Je.keys && Je.keys.IE_PROTO) || '')
        return e ? 'Symbol(src)_1.' + e : ''
      })()
      const et = function (e) {
        return !!Ze && Ze in e
      }
      var tt = Function.prototype.toString
      const nt = function (e) {
        if (null != e) {
          try {
            return tt.call(e)
          } catch (t) {}
          try {
            return e + ''
          } catch (t) {}
        }
        return ''
      }
      var rt = /^\[object .+?Constructor\]$/,
        ot = Function.prototype,
        at = Object.prototype,
        it = ot.toString,
        lt = at.hasOwnProperty,
        st = RegExp(
          '^' +
            it
              .call(lt)
              .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
              .replace(
                /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                '$1.*?',
              ) +
            '$',
        )
      const ut = function (e) {
        return !(!Ye(e) || et(e)) && (Xe(e) ? st : rt).test(nt(e))
      }
      const ct = function (e, t) {
        return null == e ? void 0 : e[t]
      }
      const ft = function (e, t) {
        var n = ct(e, t)
        return ut(n) ? n : void 0
      }
      const dt = ft(Object, 'create')
      const pt = function () {
        ;(this.__data__ = dt ? dt(null) : {}), (this.size = 0)
      }
      const ht = function (e) {
        var t = this.has(e) && delete this.__data__[e]
        return (this.size -= t ? 1 : 0), t
      }
      var mt = Object.prototype.hasOwnProperty
      const vt = function (e) {
        var t = this.__data__
        if (dt) {
          var n = t[e]
          return '__lodash_hash_undefined__' === n ? void 0 : n
        }
        return mt.call(t, e) ? t[e] : void 0
      }
      var gt = Object.prototype.hasOwnProperty
      const yt = function (e) {
        var t = this.__data__
        return dt ? void 0 !== t[e] : gt.call(t, e)
      }
      const bt = function (e, t) {
        var n = this.__data__
        return (
          (this.size += this.has(e) ? 0 : 1),
          (n[e] = dt && void 0 === t ? '__lodash_hash_undefined__' : t),
          this
        )
      }
      function wt(e) {
        var t = -1,
          n = null == e ? 0 : e.length
        for (this.clear(); ++t < n; ) {
          var r = e[t]
          this.set(r[0], r[1])
        }
      }
      ;(wt.prototype.clear = pt),
        (wt.prototype.delete = ht),
        (wt.prototype.get = vt),
        (wt.prototype.has = yt),
        (wt.prototype.set = bt)
      const kt = wt
      const St = function () {
        ;(this.__data__ = []), (this.size = 0)
      }
      const _t = function (e, t) {
        return e === t || (e !== e && t !== t)
      }
      const Et = function (e, t) {
        for (var n = e.length; n--; ) if (_t(e[n][0], t)) return n
        return -1
      }
      var Ct = Array.prototype.splice
      const xt = function (e) {
        var t = this.__data__,
          n = Et(t, e)
        return (
          !(n < 0) &&
          (n == t.length - 1 ? t.pop() : Ct.call(t, n, 1), --this.size, !0)
        )
      }
      const Nt = function (e) {
        var t = this.__data__,
          n = Et(t, e)
        return n < 0 ? void 0 : t[n][1]
      }
      const Pt = function (e) {
        return Et(this.__data__, e) > -1
      }
      const Tt = function (e, t) {
        var n = this.__data__,
          r = Et(n, e)
        return r < 0 ? (++this.size, n.push([e, t])) : (n[r][1] = t), this
      }
      function Ot(e) {
        var t = -1,
          n = null == e ? 0 : e.length
        for (this.clear(); ++t < n; ) {
          var r = e[t]
          this.set(r[0], r[1])
        }
      }
      ;(Ot.prototype.clear = St),
        (Ot.prototype.delete = xt),
        (Ot.prototype.get = Nt),
        (Ot.prototype.has = Pt),
        (Ot.prototype.set = Tt)
      const Rt = Ot
      const Lt = ft(je, 'Map')
      const At = function () {
        ;(this.size = 0),
          (this.__data__ = {
            hash: new kt(),
            map: new (Lt || Rt)(),
            string: new kt(),
          })
      }
      const jt = function (e) {
        var t = typeof e
        return 'string' == t || 'number' == t || 'symbol' == t || 'boolean' == t
          ? '__proto__' !== e
          : null === e
      }
      const zt = function (e, t) {
        var n = e.__data__
        return jt(t) ? n['string' == typeof t ? 'string' : 'hash'] : n.map
      }
      const Mt = function (e) {
        var t = zt(this, e).delete(e)
        return (this.size -= t ? 1 : 0), t
      }
      const Dt = function (e) {
        return zt(this, e).get(e)
      }
      const Ft = function (e) {
        return zt(this, e).has(e)
      }
      const It = function (e, t) {
        var n = zt(this, e),
          r = n.size
        return n.set(e, t), (this.size += n.size == r ? 0 : 1), this
      }
      function Bt(e) {
        var t = -1,
          n = null == e ? 0 : e.length
        for (this.clear(); ++t < n; ) {
          var r = e[t]
          this.set(r[0], r[1])
        }
      }
      ;(Bt.prototype.clear = At),
        (Bt.prototype.delete = Mt),
        (Bt.prototype.get = Dt),
        (Bt.prototype.has = Ft),
        (Bt.prototype.set = It)
      const Ut = Bt
      function Vt(e, t) {
        if ('function' != typeof e || (null != t && 'function' != typeof t))
          throw new TypeError('Expected a function')
        var n = function () {
          var r = arguments,
            o = t ? t.apply(this, r) : r[0],
            a = n.cache
          if (a.has(o)) return a.get(o)
          var i = e.apply(this, r)
          return (n.cache = a.set(o, i) || a), i
        }
        return (n.cache = new (Vt.Cache || Ut)()), n
      }
      Vt.Cache = Ut
      const Ht = Vt
      const $t = function (e) {
        var t = Ht(e, function (e) {
            return 500 === n.size && n.clear(), e
          }),
          n = t.cache
        return t
      }
      var qt =
          /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        Wt = /\\(\\)?/g
      const Qt = $t(function (e) {
        var t = []
        return (
          46 === e.charCodeAt(0) && t.push(''),
          e.replace(qt, function (e, n, r, o) {
            t.push(r ? o.replace(Wt, '$1') : n || e)
          }),
          t
        )
      })
      const Kt = function (e, t) {
        for (var n = -1, r = null == e ? 0 : e.length, o = Array(r); ++n < r; )
          o[n] = t(e[n], n, e)
        return o
      }
      var Gt = ze ? ze.prototype : void 0,
        Yt = Gt ? Gt.toString : void 0
      const Xt = function e(t) {
        if ('string' == typeof t) return t
        if (Re(t)) return Kt(t, e) + ''
        if (We(t)) return Yt ? Yt.call(t) : ''
        var n = t + ''
        return '0' == n && 1 / t == -Infinity ? '-0' : n
      }
      const Jt = function (e) {
        return null == e ? '' : Xt(e)
      }
      const Zt = function (e, t) {
        return Re(e) ? e : Ge(e, t) ? [e] : Qt(Jt(e))
      }
      const en = function (e) {
        var t = null == e ? 0 : e.length
        return t ? e[t - 1] : void 0
      }
      const tn = function (e) {
        if ('string' == typeof e || We(e)) return e
        var t = e + ''
        return '0' == t && 1 / e == -Infinity ? '-0' : t
      }
      const nn = function (e, t) {
        for (var n = 0, r = (t = Zt(t, e)).length; null != e && n < r; )
          e = e[tn(t[n++])]
        return n && n == r ? e : void 0
      }
      const rn = function (e, t, n) {
        var r = -1,
          o = e.length
        t < 0 && (t = -t > o ? 0 : o + t),
          (n = n > o ? o : n) < 0 && (n += o),
          (o = t > n ? 0 : (n - t) >>> 0),
          (t >>>= 0)
        for (var a = Array(o); ++r < o; ) a[r] = e[r + t]
        return a
      }
      const on = function (e, t) {
        return t.length < 2 ? e : nn(e, rn(t, 0, -1))
      }
      const an = function (e, t, n) {
        t = Zt(t, e)
        var r = null == (e = on(e, t)) ? e : e[tn(en(t))]
        return null == r ? void 0 : Oe(r, e, n)
      }
      const ln = function (e) {
        return e
      }
      var sn = Math.max
      const un = function (e, t, n) {
        return (
          (t = sn(void 0 === t ? e.length - 1 : t, 0)),
          function () {
            for (
              var r = arguments, o = -1, a = sn(r.length - t, 0), i = Array(a);
              ++o < a;

            )
              i[o] = r[t + o]
            o = -1
            for (var l = Array(t + 1); ++o < t; ) l[o] = r[o]
            return (l[t] = n(i)), Oe(e, this, l)
          }
        )
      }
      const cn = function (e) {
        return function () {
          return e
        }
      }
      const fn = (function () {
        try {
          var e = ft(Object, 'defineProperty')
          return e({}, '', {}), e
        } catch (t) {}
      })()
      const dn = fn
        ? function (e, t) {
            return fn(e, 'toString', {
              configurable: !0,
              enumerable: !1,
              value: cn(t),
              writable: !0,
            })
          }
        : ln
      var pn = Date.now
      const hn = (function (e) {
        var t = 0,
          n = 0
        return function () {
          var r = pn(),
            o = 16 - (r - n)
          if (((n = r), o > 0)) {
            if (++t >= 800) return arguments[0]
          } else t = 0
          return e.apply(void 0, arguments)
        }
      })(dn)
      const mn = (function (e, t) {
        return hn(un(e, t, ln), e + '')
      })(an)
      const vn = function (e) {
        return null == e
      }
      var gn = n(33),
        yn = n(164),
        bn = function (e, t) {
          'function' !== typeof e
            ? null !== e && 'object' === typeof e && (e.current = t)
            : e(t)
        }
      var wn = (function (e) {
          function t() {
            for (
              var t, n = arguments.length, r = new Array(n), o = 0;
              o < n;
              o++
            )
              r[o] = arguments[o]
            return (
              ((t = e.call.apply(e, [this].concat(r)) || this).prevNode =
                void 0),
              t
            )
          }
          Te(t, e)
          var n = t.prototype
          return (
            (n.componentDidMount = function () {
              var e = yn.findDOMNode(this)
              ;(this.prevNode = e), bn(this.props.innerRef, e)
            }),
            (n.componentDidUpdate = function (e) {
              var t = yn.findDOMNode(this)
              this.prevNode !== t &&
                ((this.prevNode = t), bn(this.props.innerRef, t)),
                e.innerRef !== this.props.innerRef && bn(this.props.innerRef, t)
            }),
            (n.componentWillUnmount = function () {
              bn(this.props.innerRef, null), delete this.prevNode
            }),
            (n.render = function () {
              return this.props.children
            }),
            t
          )
        })(t.Component),
        kn = (function (e) {
          function n() {
            for (
              var t, n = arguments.length, r = new Array(n), o = 0;
              o < n;
              o++
            )
              r[o] = arguments[o]
            return (
              ((t = e.call.apply(e, [this].concat(r)) || this).currentNode =
                void 0),
              (t.handleRefOverride = function (e) {
                var n = t.props,
                  r = n.children,
                  o = n.innerRef
                bn(r.ref, e), bn(o, e), (t.currentNode = e)
              }),
              t
            )
          }
          Te(n, e)
          var r = n.prototype
          return (
            (r.componentDidUpdate = function (e) {
              e.innerRef !== this.props.innerRef &&
                bn(this.props.innerRef, this.currentNode)
            }),
            (r.componentWillUnmount = function () {
              delete this.currentNode
            }),
            (r.render = function () {
              var e = this.props.children
              return t.cloneElement(e, { ref: this.handleRefOverride })
            }),
            n
          )
        })(t.Component),
        Sn = ['children', 'innerRef'],
        _n = function (e) {
          var n = e.children,
            r = e.innerRef,
            o = (function (e, t) {
              if (null == e) return {}
              var n,
                r,
                o = {},
                a = Object.keys(e)
              for (r = 0; r < a.length; r++)
                (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n])
              return o
            })(e, Sn),
            a = t.Children.only(n),
            i = gn.isForwardRef(a) ? kn : wn,
            l = a && o && Object.keys(o).length > 0 ? t.cloneElement(a, o) : a
          return t.createElement(i, { innerRef: r }, l)
        }
      function En(e) {
        var t,
          n,
          r = ''
        if ('string' == typeof e || 'number' == typeof e) r += e
        else if ('object' == typeof e)
          if (Array.isArray(e))
            for (t = 0; t < e.length; t++)
              e[t] && (n = En(e[t])) && (r && (r += ' '), (r += n))
          else for (t in e) e[t] && (r && (r += ' '), (r += t))
        return r
      }
      const Cn = function () {
        for (var e, t, n = 0, r = ''; n < arguments.length; )
          (e = arguments[n++]) && (t = En(e)) && (r && (r += ' '), (r += t))
        return r
      }
      var xn = function (e) {
          return (
            null === e || void 0 === e || (Array.isArray(e) && 0 === e.length)
          )
        },
        Nn = {
          1: 'one',
          2: 'two',
          3: 'three',
          4: 'four',
          5: 'five',
          6: 'six',
          7: 'seven',
          8: 'eight',
          9: 'nine',
          10: 'ten',
          11: 'eleven',
          12: 'twelve',
          13: 'thirteen',
          14: 'fourteen',
          15: 'fifteen',
          16: 'sixteen',
        }
      function Pn(e) {
        var t = typeof e
        return 'string' === t || 'number' === t ? Nn[e] || e : ''
      }
      var Tn = function (e, t) {
          return e && t
        },
        On = function (e, t) {
          return e && !0 !== e && e + ' ' + t
        },
        Rn = function (e, t) {
          return e && (!0 === e ? t : e + ' ' + t)
        },
        Ln = function (e) {
          return 'justified' === e ? 'justified' : On(e, 'aligned')
        },
        An = function (e) {
          return On(e, 'aligned')
        },
        jn = function (e, t, n) {
          if (
            (void 0 === t && (t = ''),
            void 0 === n && (n = !1),
            n && 'equal' === e)
          )
            return 'equal width'
          var r = typeof e
          return ('string' !== r && 'number' !== r) || !t
            ? Pn(e)
            : Pn(e) + ' ' + t
        }
      const zn = function (e, t) {
        var n = e.handledProps,
          r = void 0 === n ? [] : n
        return Object.keys(t).reduce(function (e, n) {
          return 'childKey' === n || (-1 === r.indexOf(n) && (e[n] = t[n])), e
        }, {})
      }
      const Mn = function (e, t, n) {
        var r = e.defaultProps,
          o = void 0 === r ? {} : r
        if (t.as && t.as !== o.as) return t.as
        if (n) {
          var a = n()
          if (a) return a
        }
        return t.href ? 'a' : o.as || 'div'
      }
      const Dn = function (e) {
        return this.__data__.set(e, '__lodash_hash_undefined__'), this
      }
      const Fn = function (e) {
        return this.__data__.has(e)
      }
      function In(e) {
        var t = -1,
          n = null == e ? 0 : e.length
        for (this.__data__ = new Ut(); ++t < n; ) this.add(e[t])
      }
      ;(In.prototype.add = In.prototype.push = Dn), (In.prototype.has = Fn)
      const Bn = In
      const Un = function (e, t, n, r) {
        for (var o = e.length, a = n + (r ? 1 : -1); r ? a-- : ++a < o; )
          if (t(e[a], a, e)) return a
        return -1
      }
      const Vn = function (e) {
        return e !== e
      }
      const Hn = function (e, t, n) {
        for (var r = n - 1, o = e.length; ++r < o; ) if (e[r] === t) return r
        return -1
      }
      const $n = function (e, t, n) {
        return t === t ? Hn(e, t, n) : Un(e, Vn, n)
      }
      const qn = function (e, t) {
        return !!(null == e ? 0 : e.length) && $n(e, t, 0) > -1
      }
      const Wn = function (e, t, n) {
        for (var r = -1, o = null == e ? 0 : e.length; ++r < o; )
          if (n(t, e[r])) return !0
        return !1
      }
      const Qn = function (e, t) {
        return e.has(t)
      }
      const Kn = ft(je, 'Set')
      const Gn = function () {}
      const Yn = function (e) {
        var t = -1,
          n = Array(e.size)
        return (
          e.forEach(function (e) {
            n[++t] = e
          }),
          n
        )
      }
      var Xn =
        Kn && 1 / Yn(new Kn([, -0]))[1] == 1 / 0
          ? function (e) {
              return new Kn(e)
            }
          : Gn
      const Jn = Xn
      const Zn = function (e, t, n) {
        var r = -1,
          o = qn,
          a = e.length,
          i = !0,
          l = [],
          s = l
        if (n) (i = !1), (o = Wn)
        else if (a >= 200) {
          var u = t ? null : Jn(e)
          if (u) return Yn(u)
          ;(i = !1), (o = Qn), (s = new Bn())
        } else s = t ? [] : l
        e: for (; ++r < a; ) {
          var c = e[r],
            f = t ? t(c) : c
          if (((c = n || 0 !== c ? c : 0), i && f === f)) {
            for (var d = s.length; d--; ) if (s[d] === f) continue e
            t && s.push(f), l.push(c)
          } else o(s, f, n) || (s !== l && s.push(f), l.push(c))
        }
        return l
      }
      const er = function (e) {
        return e && e.length ? Zn(e) : []
      }
      const tr = function (e, t) {
        return function (n) {
          return e(t(n))
        }
      }
      const nr = tr(Object.getPrototypeOf, Object)
      var rr = Function.prototype,
        or = Object.prototype,
        ar = rr.toString,
        ir = or.hasOwnProperty,
        lr = ar.call(Object)
      const sr = function (e) {
        if (!qe(e) || '[object Object]' != $e(e)) return !1
        var t = nr(e)
        if (null === t) return !0
        var n = ir.call(t, 'constructor') && t.constructor
        return 'function' == typeof n && n instanceof n && ar.call(n) == lr
      }
      const ur = function (e) {
        return 'number' == typeof e || (qe(e) && '[object Number]' == $e(e))
      }
      const cr = function (e) {
        return (
          'string' == typeof e ||
          (!Re(e) && qe(e) && '[object String]' == $e(e))
        )
      }
      const fr = function (e) {
        return !0 === e || !1 === e || (qe(e) && '[object Boolean]' == $e(e))
      }
      function dr(e, n, r, o) {
        if (
          (void 0 === o && (o = {}),
          'function' !== typeof e && 'string' !== typeof e)
        )
          throw new Error(
            'createShorthand() Component must be a string or function.',
          )
        if (vn(r) || fr(r)) return null
        var a = cr(r),
          i = ur(r),
          l = Xe(r),
          s = t.isValidElement(r),
          u = sr(r),
          c = a || i || Re(r)
        if (!l && !s && !u && !c) return null
        var f = o.defaultProps,
          d = void 0 === f ? {} : f,
          p = (s && r.props) || (u && r) || (c && n(r)),
          h = o.overrideProps,
          m = void 0 === h ? {} : h
        m = Xe(m) ? m(Ne({}, d, p)) : m
        var v = Ne({}, d, p, m)
        if (d.className || m.className || p.className) {
          var g = Cn(d.className, m.className, p.className)
          v.className = er(g.split(' ')).join(' ')
        }
        if (
          ((d.style || m.style || p.style) &&
            (v.style = Ne({}, d.style, p.style, m.style)),
          vn(v.key))
        ) {
          var y = v.childKey,
            b = o.autoGenerateKey,
            w = void 0 === b || b
          vn(y)
            ? w && (a || i) && (v.key = r)
            : ((v.key = 'function' === typeof y ? y(v) : y), delete v.childKey)
        }
        return s
          ? t.cloneElement(r, v)
          : 'function' === typeof v.children
            ? v.children(e, Ne({}, v, { children: void 0 }))
            : c || u
              ? t.createElement(e, v)
              : l
                ? r(e, v, v.children)
                : void 0
      }
      function pr(e, t) {
        if ('function' !== typeof e && 'string' !== typeof e)
          throw new Error(
            'createShorthandFactory() Component must be a string or function.',
          )
        return function (n, r) {
          return dr(e, t, n, r)
        }
      }
      var hr = pr('input', function (e) {
        return { type: e }
      })
      function mr(e) {
        var n = e.children,
          r = e.className,
          o = e.content,
          a = e.size,
          i = Cn(a, 'icons', r),
          l = zn(mr, e),
          s = Mn(mr, e)
        return t.createElement(s, Ne({}, l, { className: i }), xn(n) ? o : n)
      }
      ;(mr.handledProps = ['as', 'children', 'className', 'content', 'size']),
        (mr.propTypes = {}),
        (mr.defaultProps = { as: 'i' })
      const vr = mr
      var gr = (function (e) {
        function n() {
          for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o]
          return (
            ((t = e.call.apply(e, [this].concat(r)) || this).handleClick =
              function (e) {
                t.props.disabled
                  ? e.preventDefault()
                  : mn(t.props, 'onClick', e, t.props)
              }),
            t
          )
        }
        Te(n, e)
        var r = n.prototype
        return (
          (r.getIconAriaOptions = function () {
            var e = {},
              t = this.props,
              n = t['aria-label'],
              r = t['aria-hidden']
            return (
              vn(n) ? (e['aria-hidden'] = 'true') : (e['aria-label'] = n),
              vn(r) || (e['aria-hidden'] = r),
              e
            )
          }),
          (r.render = function () {
            var e = this.props,
              r = e.bordered,
              o = e.circular,
              a = e.className,
              i = e.color,
              l = e.corner,
              s = e.disabled,
              u = e.fitted,
              c = e.flipped,
              f = e.inverted,
              d = e.link,
              p = e.loading,
              h = e.name,
              m = e.rotated,
              v = e.size,
              g = Cn(
                i,
                h,
                v,
                Tn(r, 'bordered'),
                Tn(o, 'circular'),
                Tn(s, 'disabled'),
                Tn(u, 'fitted'),
                Tn(f, 'inverted'),
                Tn(d, 'link'),
                Tn(p, 'loading'),
                Rn(l, 'corner'),
                On(c, 'flipped'),
                On(m, 'rotated'),
                'icon',
                a,
              ),
              y = zn(n, this.props),
              b = Mn(n, this.props),
              w = this.getIconAriaOptions()
            return t.createElement(
              b,
              Ne({}, y, w, { className: g, onClick: this.handleClick }),
            )
          }),
          n
        )
      })(t.PureComponent)
      ;(gr.handledProps = [
        'aria-hidden',
        'aria-label',
        'as',
        'bordered',
        'circular',
        'className',
        'color',
        'corner',
        'disabled',
        'fitted',
        'flipped',
        'inverted',
        'link',
        'loading',
        'name',
        'rotated',
        'size',
      ]),
        (gr.propTypes = {}),
        (gr.defaultProps = { as: 'i' }),
        (gr.Group = vr),
        (gr.create = pr(gr, function (e) {
          return { name: e }
        }))
      const yr = gr
      const br = function (e) {
        return void 0 === e
      }
      const wr = function (e) {
        return (
          'number' == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
        )
      }
      const kr = function (e) {
        return null != e && wr(e.length) && !Xe(e)
      }
      var Sr = /\s/
      const _r = function (e) {
        for (var t = e.length; t-- && Sr.test(e.charAt(t)); );
        return t
      }
      var Er = /^\s+/
      const Cr = function (e) {
        return e ? e.slice(0, _r(e) + 1).replace(Er, '') : e
      }
      var xr = /^[-+]0x[0-9a-f]+$/i,
        Nr = /^0b[01]+$/i,
        Pr = /^0o[0-7]+$/i,
        Tr = parseInt
      const Or = function (e) {
        if ('number' == typeof e) return e
        if (We(e)) return NaN
        if (Ye(e)) {
          var t = 'function' == typeof e.valueOf ? e.valueOf() : e
          e = Ye(t) ? t + '' : t
        }
        if ('string' != typeof e) return 0 === e ? e : +e
        e = Cr(e)
        var n = Nr.test(e)
        return n || Pr.test(e)
          ? Tr(e.slice(2), n ? 2 : 8)
          : xr.test(e)
            ? NaN
            : +e
      }
      var Rr = 1 / 0
      const Lr = function (e) {
        return e
          ? (e = Or(e)) === Rr || e === -1 / 0
            ? 17976931348623157e292 * (e < 0 ? -1 : 1)
            : e === e
              ? e
              : 0
          : 0 === e
            ? e
            : 0
      }
      const Ar = function (e) {
        var t = Lr(e),
          n = t % 1
        return t === t ? (n ? t - n : t) : 0
      }
      const jr = function (e, t) {
        return Kt(t, function (t) {
          return e[t]
        })
      }
      const zr = function (e, t) {
        for (var n = -1, r = Array(e); ++n < e; ) r[n] = t(n)
        return r
      }
      const Mr = function (e) {
        return qe(e) && '[object Arguments]' == $e(e)
      }
      var Dr = Object.prototype,
        Fr = Dr.hasOwnProperty,
        Ir = Dr.propertyIsEnumerable,
        Br = Mr(
          (function () {
            return arguments
          })(),
        )
          ? Mr
          : function (e) {
              return qe(e) && Fr.call(e, 'callee') && !Ir.call(e, 'callee')
            }
      const Ur = Br
      const Vr = function () {
        return !1
      }
      var Hr =
          'object' == typeof exports && exports && !exports.nodeType && exports,
        $r =
          Hr &&
          'object' == typeof module &&
          module &&
          !module.nodeType &&
          module,
        qr = $r && $r.exports === Hr ? je.Buffer : void 0
      const Wr = (qr ? qr.isBuffer : void 0) || Vr
      var Qr = /^(?:0|[1-9]\d*)$/
      const Kr = function (e, t) {
        var n = typeof e
        return (
          !!(t = null == t ? 9007199254740991 : t) &&
          ('number' == n || ('symbol' != n && Qr.test(e))) &&
          e > -1 &&
          e % 1 == 0 &&
          e < t
        )
      }
      var Gr = {}
      ;(Gr['[object Float32Array]'] =
        Gr['[object Float64Array]'] =
        Gr['[object Int8Array]'] =
        Gr['[object Int16Array]'] =
        Gr['[object Int32Array]'] =
        Gr['[object Uint8Array]'] =
        Gr['[object Uint8ClampedArray]'] =
        Gr['[object Uint16Array]'] =
        Gr['[object Uint32Array]'] =
          !0),
        (Gr['[object Arguments]'] =
          Gr['[object Array]'] =
          Gr['[object ArrayBuffer]'] =
          Gr['[object Boolean]'] =
          Gr['[object DataView]'] =
          Gr['[object Date]'] =
          Gr['[object Error]'] =
          Gr['[object Function]'] =
          Gr['[object Map]'] =
          Gr['[object Number]'] =
          Gr['[object Object]'] =
          Gr['[object RegExp]'] =
          Gr['[object Set]'] =
          Gr['[object String]'] =
          Gr['[object WeakMap]'] =
            !1)
      const Yr = function (e) {
        return qe(e) && wr(e.length) && !!Gr[$e(e)]
      }
      const Xr = function (e) {
        return function (t) {
          return e(t)
        }
      }
      var Jr =
          'object' == typeof exports && exports && !exports.nodeType && exports,
        Zr =
          Jr &&
          'object' == typeof module &&
          module &&
          !module.nodeType &&
          module,
        eo = Zr && Zr.exports === Jr && Le.process,
        to = (function () {
          try {
            var e = Zr && Zr.require && Zr.require('util').types
            return e || (eo && eo.binding && eo.binding('util'))
          } catch (t) {}
        })()
      var no = to && to.isTypedArray
      const ro = no ? Xr(no) : Yr
      var oo = Object.prototype.hasOwnProperty
      const ao = function (e, t) {
        var n = Re(e),
          r = !n && Ur(e),
          o = !n && !r && Wr(e),
          a = !n && !r && !o && ro(e),
          i = n || r || o || a,
          l = i ? zr(e.length, String) : [],
          s = l.length
        for (var u in e)
          (!t && !oo.call(e, u)) ||
            (i &&
              ('length' == u ||
                (o && ('offset' == u || 'parent' == u)) ||
                (a &&
                  ('buffer' == u || 'byteLength' == u || 'byteOffset' == u)) ||
                Kr(u, s))) ||
            l.push(u)
        return l
      }
      var io = Object.prototype
      const lo = function (e) {
        var t = e && e.constructor
        return e === (('function' == typeof t && t.prototype) || io)
      }
      const so = tr(Object.keys, Object)
      var uo = Object.prototype.hasOwnProperty
      const co = function (e) {
        if (!lo(e)) return so(e)
        var t = []
        for (var n in Object(e))
          uo.call(e, n) && 'constructor' != n && t.push(n)
        return t
      }
      const fo = function (e) {
        return kr(e) ? ao(e) : co(e)
      }
      const po = function (e) {
        return null == e ? [] : jr(e, fo(e))
      }
      var ho = Math.max
      const mo = function (e, t, n, r) {
        ;(e = kr(e) ? e : po(e)), (n = n && !r ? Ar(n) : 0)
        var o = e.length
        return (
          n < 0 && (n = ho(o + n, 0)),
          cr(e) ? n <= o && e.indexOf(t, n) > -1 : !!o && $n(e, t, n) > -1
        )
      }
      const vo = function (e, t) {
        for (
          var n = -1, r = null == e ? 0 : e.length;
          ++n < r && !1 !== t(e[n], n, e);

        );
        return e
      }
      const go = (function (e) {
        return function (t, n, r) {
          for (var o = -1, a = Object(t), i = r(t), l = i.length; l--; ) {
            var s = i[e ? l : ++o]
            if (!1 === n(a[s], s, a)) break
          }
          return t
        }
      })()
      const yo = (function (e, t) {
        return function (n, r) {
          if (null == n) return n
          if (!kr(n)) return e(n, r)
          for (
            var o = n.length, a = t ? o : -1, i = Object(n);
            (t ? a-- : ++a < o) && !1 !== r(i[a], a, i);

          );
          return n
        }
      })(function (e, t) {
        return e && go(e, t, fo)
      })
      const bo = function (e) {
        return 'function' == typeof e ? e : ln
      }
      const wo = function (e, t) {
        return (Re(e) ? vo : yo)(e, bo(t))
      }
      var ko = [].concat(
          [
            'selected',
            'defaultValue',
            'defaultChecked',
            'accept',
            'autoCapitalize',
            'autoComplete',
            'autoCorrect',
            'autoFocus',
            'checked',
            'disabled',
            'enterKeyHint',
            'form',
            'id',
            'inputMode',
            'lang',
            'list',
            'max',
            'maxLength',
            'min',
            'minLength',
            'multiple',
            'name',
            'pattern',
            'placeholder',
            'readOnly',
            'required',
            'step',
            'title',
            'type',
            'value',
          ],
          [
            'onKeyDown',
            'onKeyPress',
            'onKeyUp',
            'onFocus',
            'onBlur',
            'onChange',
            'onInput',
            'onClick',
            'onContextMenu',
            'onDrag',
            'onDragEnd',
            'onDragEnter',
            'onDragExit',
            'onDragLeave',
            'onDragOver',
            'onDragStart',
            'onDrop',
            'onMouseDown',
            'onMouseEnter',
            'onMouseLeave',
            'onMouseMove',
            'onMouseOut',
            'onMouseOver',
            'onMouseUp',
            'onSelect',
            'onTouchCancel',
            'onTouchEnd',
            'onTouchMove',
            'onTouchStart',
          ],
        ),
        So = ['alt', 'height', 'src', 'srcSet', 'width', 'loading'],
        _o = function (e, t) {
          void 0 === t && (t = {})
          var n = t,
            r = n.htmlProps,
            o = void 0 === r ? ko : r,
            a = n.includeAria,
            i = void 0 === a || a,
            l = {},
            s = {}
          return (
            wo(e, function (e, t) {
              var n = i && (/^aria-.*$/.test(t) || 'role' === t)
              ;(mo(o, t) || n ? l : s)[t] = e
            }),
            [l, s]
          )
        },
        Eo = 'object' === typeof document && null !== document,
        Co =
          'object' === typeof window &&
          null !== window &&
          window.self === window
      const xo = function e() {
        return vn(e.override) ? Eo && Co : e.override
      }
      var No = n(775),
        Po = n.n(No),
        To = n(854),
        Oo = n.n(To),
        Ro = Math.max,
        Lo = Math.min
      const Ao = function (e, t, n) {
        return e >= Lo(t, n) && e < Ro(t, n)
      }
      const jo = function (e, t, n) {
        return (
          (t = Lr(t)),
          void 0 === n ? ((n = t), (t = 0)) : (n = Lr(n)),
          (e = Or(e)),
          Ao(e, t, n)
        )
      }
      const zo = function (e) {
        return e && e.length ? e[0] : void 0
      }
      const Mo = function (e, t) {
        for (var n = -1, r = null == e ? 0 : e.length; ++n < r; )
          if (t(e[n], n, e)) return !0
        return !1
      }
      const Do = function () {
        ;(this.__data__ = new Rt()), (this.size = 0)
      }
      const Fo = function (e) {
        var t = this.__data__,
          n = t.delete(e)
        return (this.size = t.size), n
      }
      const Io = function (e) {
        return this.__data__.get(e)
      }
      const Bo = function (e) {
        return this.__data__.has(e)
      }
      const Uo = function (e, t) {
        var n = this.__data__
        if (n instanceof Rt) {
          var r = n.__data__
          if (!Lt || r.length < 199)
            return r.push([e, t]), (this.size = ++n.size), this
          n = this.__data__ = new Ut(r)
        }
        return n.set(e, t), (this.size = n.size), this
      }
      function Vo(e) {
        var t = (this.__data__ = new Rt(e))
        this.size = t.size
      }
      ;(Vo.prototype.clear = Do),
        (Vo.prototype.delete = Fo),
        (Vo.prototype.get = Io),
        (Vo.prototype.has = Bo),
        (Vo.prototype.set = Uo)
      const Ho = Vo
      const $o = function (e, t, n, r, o, a) {
        var i = 1 & n,
          l = e.length,
          s = t.length
        if (l != s && !(i && s > l)) return !1
        var u = a.get(e),
          c = a.get(t)
        if (u && c) return u == t && c == e
        var f = -1,
          d = !0,
          p = 2 & n ? new Bn() : void 0
        for (a.set(e, t), a.set(t, e); ++f < l; ) {
          var h = e[f],
            m = t[f]
          if (r) var v = i ? r(m, h, f, t, e, a) : r(h, m, f, e, t, a)
          if (void 0 !== v) {
            if (v) continue
            d = !1
            break
          }
          if (p) {
            if (
              !Mo(t, function (e, t) {
                if (!Qn(p, t) && (h === e || o(h, e, n, r, a))) return p.push(t)
              })
            ) {
              d = !1
              break
            }
          } else if (h !== m && !o(h, m, n, r, a)) {
            d = !1
            break
          }
        }
        return a.delete(e), a.delete(t), d
      }
      const qo = je.Uint8Array
      const Wo = function (e) {
        var t = -1,
          n = Array(e.size)
        return (
          e.forEach(function (e, r) {
            n[++t] = [r, e]
          }),
          n
        )
      }
      var Qo = ze ? ze.prototype : void 0,
        Ko = Qo ? Qo.valueOf : void 0
      const Go = function (e, t, n, r, o, a, i) {
        switch (n) {
          case '[object DataView]':
            if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
              return !1
            ;(e = e.buffer), (t = t.buffer)
          case '[object ArrayBuffer]':
            return !(e.byteLength != t.byteLength || !a(new qo(e), new qo(t)))
          case '[object Boolean]':
          case '[object Date]':
          case '[object Number]':
            return _t(+e, +t)
          case '[object Error]':
            return e.name == t.name && e.message == t.message
          case '[object RegExp]':
          case '[object String]':
            return e == t + ''
          case '[object Map]':
            var l = Wo
          case '[object Set]':
            var s = 1 & r
            if ((l || (l = Yn), e.size != t.size && !s)) return !1
            var u = i.get(e)
            if (u) return u == t
            ;(r |= 2), i.set(e, t)
            var c = $o(l(e), l(t), r, o, a, i)
            return i.delete(e), c
          case '[object Symbol]':
            if (Ko) return Ko.call(e) == Ko.call(t)
        }
        return !1
      }
      const Yo = function (e, t) {
        for (var n = -1, r = t.length, o = e.length; ++n < r; ) e[o + n] = t[n]
        return e
      }
      const Xo = function (e, t, n) {
        var r = t(e)
        return Re(e) ? r : Yo(r, n(e))
      }
      const Jo = function (e, t) {
        for (
          var n = -1, r = null == e ? 0 : e.length, o = 0, a = [];
          ++n < r;

        ) {
          var i = e[n]
          t(i, n, e) && (a[o++] = i)
        }
        return a
      }
      const Zo = function () {
        return []
      }
      var ea = Object.prototype.propertyIsEnumerable,
        ta = Object.getOwnPropertySymbols
      const na = ta
        ? function (e) {
            return null == e
              ? []
              : ((e = Object(e)),
                Jo(ta(e), function (t) {
                  return ea.call(e, t)
                }))
          }
        : Zo
      const ra = function (e) {
        return Xo(e, fo, na)
      }
      var oa = Object.prototype.hasOwnProperty
      const aa = function (e, t, n, r, o, a) {
        var i = 1 & n,
          l = ra(e),
          s = l.length
        if (s != ra(t).length && !i) return !1
        for (var u = s; u--; ) {
          var c = l[u]
          if (!(i ? c in t : oa.call(t, c))) return !1
        }
        var f = a.get(e),
          d = a.get(t)
        if (f && d) return f == t && d == e
        var p = !0
        a.set(e, t), a.set(t, e)
        for (var h = i; ++u < s; ) {
          var m = e[(c = l[u])],
            v = t[c]
          if (r) var g = i ? r(v, m, c, t, e, a) : r(m, v, c, e, t, a)
          if (!(void 0 === g ? m === v || o(m, v, n, r, a) : g)) {
            p = !1
            break
          }
          h || (h = 'constructor' == c)
        }
        if (p && !h) {
          var y = e.constructor,
            b = t.constructor
          y == b ||
            !('constructor' in e) ||
            !('constructor' in t) ||
            ('function' == typeof y &&
              y instanceof y &&
              'function' == typeof b &&
              b instanceof b) ||
            (p = !1)
        }
        return a.delete(e), a.delete(t), p
      }
      const ia = ft(je, 'DataView')
      const la = ft(je, 'Promise')
      const sa = ft(je, 'WeakMap')
      var ua = '[object Map]',
        ca = '[object Promise]',
        fa = '[object Set]',
        da = '[object WeakMap]',
        pa = '[object DataView]',
        ha = nt(ia),
        ma = nt(Lt),
        va = nt(la),
        ga = nt(Kn),
        ya = nt(sa),
        ba = $e
      ;((ia && ba(new ia(new ArrayBuffer(1))) != pa) ||
        (Lt && ba(new Lt()) != ua) ||
        (la && ba(la.resolve()) != ca) ||
        (Kn && ba(new Kn()) != fa) ||
        (sa && ba(new sa()) != da)) &&
        (ba = function (e) {
          var t = $e(e),
            n = '[object Object]' == t ? e.constructor : void 0,
            r = n ? nt(n) : ''
          if (r)
            switch (r) {
              case ha:
                return pa
              case ma:
                return ua
              case va:
                return ca
              case ga:
                return fa
              case ya:
                return da
            }
          return t
        })
      const wa = ba
      var ka = '[object Arguments]',
        Sa = '[object Array]',
        _a = '[object Object]',
        Ea = Object.prototype.hasOwnProperty
      const Ca = function (e, t, n, r, o, a) {
        var i = Re(e),
          l = Re(t),
          s = i ? Sa : wa(e),
          u = l ? Sa : wa(t),
          c = (s = s == ka ? _a : s) == _a,
          f = (u = u == ka ? _a : u) == _a,
          d = s == u
        if (d && Wr(e)) {
          if (!Wr(t)) return !1
          ;(i = !0), (c = !1)
        }
        if (d && !c)
          return (
            a || (a = new Ho()),
            i || ro(e) ? $o(e, t, n, r, o, a) : Go(e, t, s, n, r, o, a)
          )
        if (!(1 & n)) {
          var p = c && Ea.call(e, '__wrapped__'),
            h = f && Ea.call(t, '__wrapped__')
          if (p || h) {
            var m = p ? e.value() : e,
              v = h ? t.value() : t
            return a || (a = new Ho()), o(m, v, n, r, a)
          }
        }
        return !!d && (a || (a = new Ho()), aa(e, t, n, r, o, a))
      }
      const xa = function e(t, n, r, o, a) {
        return (
          t === n ||
          (null == t || null == n || (!qe(t) && !qe(n))
            ? t !== t && n !== n
            : Ca(t, n, r, o, e, a))
        )
      }
      const Na = function (e, t, n, r) {
        var o = n.length,
          a = o,
          i = !r
        if (null == e) return !a
        for (e = Object(e); o--; ) {
          var l = n[o]
          if (i && l[2] ? l[1] !== e[l[0]] : !(l[0] in e)) return !1
        }
        for (; ++o < a; ) {
          var s = (l = n[o])[0],
            u = e[s],
            c = l[1]
          if (i && l[2]) {
            if (void 0 === u && !(s in e)) return !1
          } else {
            var f = new Ho()
            if (r) var d = r(u, c, s, e, t, f)
            if (!(void 0 === d ? xa(c, u, 3, r, f) : d)) return !1
          }
        }
        return !0
      }
      const Pa = function (e) {
        return e === e && !Ye(e)
      }
      const Ta = function (e) {
        for (var t = fo(e), n = t.length; n--; ) {
          var r = t[n],
            o = e[r]
          t[n] = [r, o, Pa(o)]
        }
        return t
      }
      const Oa = function (e, t) {
        return function (n) {
          return null != n && n[e] === t && (void 0 !== t || e in Object(n))
        }
      }
      const Ra = function (e) {
        var t = Ta(e)
        return 1 == t.length && t[0][2]
          ? Oa(t[0][0], t[0][1])
          : function (n) {
              return n === e || Na(n, e, t)
            }
      }
      const La = function (e, t, n) {
        var r = null == e ? void 0 : nn(e, t)
        return void 0 === r ? n : r
      }
      const Aa = function (e, t) {
        return null != e && t in Object(e)
      }
      const ja = function (e, t, n) {
        for (var r = -1, o = (t = Zt(t, e)).length, a = !1; ++r < o; ) {
          var i = tn(t[r])
          if (!(a = null != e && n(e, i))) break
          e = e[i]
        }
        return a || ++r != o
          ? a
          : !!(o = null == e ? 0 : e.length) &&
              wr(o) &&
              Kr(i, o) &&
              (Re(e) || Ur(e))
      }
      const za = function (e, t) {
        return null != e && ja(e, t, Aa)
      }
      const Ma = function (e, t) {
        return Ge(e) && Pa(t)
          ? Oa(tn(e), t)
          : function (n) {
              var r = La(n, e)
              return void 0 === r && r === t ? za(n, e) : xa(t, r, 3)
            }
      }
      const Da = function (e) {
        return function (t) {
          return null == t ? void 0 : t[e]
        }
      }
      const Fa = function (e) {
        return function (t) {
          return nn(t, e)
        }
      }
      const Ia = function (e) {
        return Ge(e) ? Da(tn(e)) : Fa(e)
      }
      const Ba = function (e) {
        return 'function' == typeof e
          ? e
          : null == e
            ? ln
            : 'object' == typeof e
              ? Re(e)
                ? Ma(e[0], e[1])
                : Ra(e)
              : Ia(e)
      }
      const Ua = function (e, t) {
        var n
        return (
          yo(e, function (e, r, o) {
            return !(n = t(e, r, o))
          }),
          !!n
        )
      }
      const Va = function (e, t, n) {
        if (!Ye(n)) return !1
        var r = typeof t
        return (
          !!('number' == r
            ? kr(n) && Kr(t, n.length)
            : 'string' == r && t in n) && _t(n[t], e)
        )
      }
      const Ha = function (e, t, n) {
        var r = Re(e) ? Mo : Ua
        return n && Va(e, t, n) && (t = void 0), r(e, Ba(t, 3))
      }
      const $a = function (e, t) {
        if (Ha([t, e], vn)) return !1
        if (
          t.target &&
          (mn(t.target, 'setAttribute', 'data-suir-click-target', !0),
          document.querySelector('[data-suir-click-target=true]'))
        )
          return (
            mn(t.target, 'removeAttribute', 'data-suir-click-target'),
            e.contains(t.target)
          )
        var n = t.clientX,
          r = t.clientY
        if (Ha([n, r], vn)) return !1
        var o = e.getClientRects()
        if (!e.offsetWidth || !e.offsetHeight || !o || !o.length) return !1
        var a = zo(o),
          i = a.top,
          l = a.bottom,
          s = a.left,
          u = a.right
        return (
          !Ha([i, l, s, u], vn) && jo(r, i, l + 0.001) && jo(n, s, u + 0.001)
        )
      }
      var qa = (function (e) {
          function t() {
            for (
              var t, n = arguments.length, r = new Array(n), o = 0;
              o < n;
              o++
            )
              r[o] = arguments[o]
            var a = (t = e.call.apply(e, [this].concat(r)) || this).constructor,
              i = a.autoControlledProps,
              l = a.getAutoControlledStateFromProps,
              s =
                mn(
                  (function (e) {
                    if (void 0 === e)
                      throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called",
                      )
                    return e
                  })(t),
                  'getInitialAutoControlledState',
                  t.props,
                ) || {},
              u = i.reduce(function (e, n) {
                return (
                  (e[n] = (function (e, t, n, r) {
                    void 0 === r && (r = !1)
                    var o,
                      a = t[e]
                    if (void 0 !== a) return a
                    if (r) {
                      var i =
                        t[
                          ((o = e),
                          'default' + (o[0].toUpperCase() + o.slice(1)))
                        ]
                      if (void 0 !== i) return i
                      if (n) {
                        var l = n[e]
                        if (void 0 !== l) return l
                      }
                    }
                    return (
                      'checked' !== e &&
                      ('value' === e ? (t.multiple ? [] : '') : void 0)
                    )
                  })(n, t.props, s, !0)),
                  e
                )
              }, {})
            return (
              (t.state = Ne({}, s, u, {
                autoControlledProps: i,
                getAutoControlledStateFromProps: l,
              })),
              t
            )
          }
          return (
            Te(t, e),
            (t.getDerivedStateFromProps = function (e, t) {
              var n = t.autoControlledProps,
                r = t.getAutoControlledStateFromProps,
                o = n.reduce(function (t, n) {
                  return !br(e[n]) && (t[n] = e[n]), t
                }, {})
              if (r) {
                var a = r(e, Ne({}, t, o), t)
                return Ne({}, o, a)
              }
              return o
            }),
            (t.getAutoControlledStateFromProps = function () {
              return null
            }),
            t
          )
        })(t.Component),
        Wa = (function (e) {
          function n() {
            for (
              var t, n = arguments.length, r = new Array(n), o = 0;
              o < n;
              o++
            )
              r[o] = arguments[o]
            return (
              ((t = e.call.apply(e, [this].concat(r)) || this).handleRef =
                function (e) {
                  bn(t.props.innerRef, e)
                }),
              t
            )
          }
          Te(n, e)
          var r = n.prototype
          return (
            (r.componentDidMount = function () {
              mn(this.props, 'onMount', null, this.props)
            }),
            (r.componentWillUnmount = function () {
              mn(this.props, 'onUnmount', null, this.props)
            }),
            (r.render = function () {
              if (!xo()) return null
              var e = this.props,
                n = e.children,
                r = e.mountNode,
                o = void 0 === r ? document.body : r
              return (0, yn.createPortal)(
                t.createElement(_n, { innerRef: this.handleRef }, n),
                o,
              )
            }),
            n
          )
        })(t.Component)
      ;(Wa.handledProps = [
        'children',
        'innerRef',
        'mountNode',
        'onMount',
        'onUnmount',
      ]),
        (Wa.propTypes = {})
      const Qa = Wa
      var Ka = (function (e) {
        function n() {
          for (var n, r = arguments.length, o = new Array(r), a = 0; a < r; a++)
            o[a] = arguments[a]
          return (
            ((n = e.call.apply(e, [this].concat(o)) || this).contentRef =
              t.createRef()),
            (n.triggerRef = t.createRef()),
            (n.latestDocumentMouseDownEvent = null),
            (n.handleDocumentMouseDown = function (e) {
              n.latestDocumentMouseDownEvent = e
            }),
            (n.handleDocumentClick = function (e) {
              var t = n.props.closeOnDocumentClick,
                r = n.latestDocumentMouseDownEvent
              ;(n.latestDocumentMouseDownEvent = null),
                !n.contentRef.current ||
                  $a(n.triggerRef.current, e) ||
                  (r && $a(n.contentRef.current, r)) ||
                  $a(n.contentRef.current, e) ||
                  (t && n.close(e))
            }),
            (n.handleEscape = function (e) {
              n.props.closeOnEscape &&
                Oo().getCode(e) === Oo().Escape &&
                n.close(e)
            }),
            (n.handlePortalMouseLeave = function (e) {
              var t = n.props,
                r = t.closeOnPortalMouseLeave,
                o = t.mouseLeaveDelay
              r &&
                e.target === n.contentRef.current &&
                (n.mouseLeaveTimer = n.closeWithTimeout(e, o))
            }),
            (n.handlePortalMouseEnter = function () {
              n.props.closeOnPortalMouseLeave && clearTimeout(n.mouseLeaveTimer)
            }),
            (n.handleTriggerBlur = function (e) {
              for (
                var t = n.props,
                  r = t.trigger,
                  o = t.closeOnTriggerBlur,
                  a = arguments.length,
                  i = new Array(a > 1 ? a - 1 : 0),
                  l = 1;
                l < a;
                l++
              )
                i[l - 1] = arguments[l]
              mn.apply(void 0, [r, 'props.onBlur', e].concat(i))
              var s = e.relatedTarget || document.activeElement,
                u = mn(n.contentRef.current, 'contains', s)
              o && !u && n.close(e)
            }),
            (n.handleTriggerClick = function (e) {
              for (
                var t = n.props,
                  r = t.trigger,
                  o = t.closeOnTriggerClick,
                  a = t.openOnTriggerClick,
                  i = n.state.open,
                  l = arguments.length,
                  s = new Array(l > 1 ? l - 1 : 0),
                  u = 1;
                u < l;
                u++
              )
                s[u - 1] = arguments[u]
              mn.apply(void 0, [r, 'props.onClick', e].concat(s)),
                i && o ? n.close(e) : !i && a && n.open(e)
            }),
            (n.handleTriggerFocus = function (e) {
              for (
                var t = n.props,
                  r = t.trigger,
                  o = t.openOnTriggerFocus,
                  a = arguments.length,
                  i = new Array(a > 1 ? a - 1 : 0),
                  l = 1;
                l < a;
                l++
              )
                i[l - 1] = arguments[l]
              mn.apply(void 0, [r, 'props.onFocus', e].concat(i)),
                o && n.open(e)
            }),
            (n.handleTriggerMouseLeave = function (e) {
              clearTimeout(n.mouseEnterTimer)
              for (
                var t = n.props,
                  r = t.trigger,
                  o = t.closeOnTriggerMouseLeave,
                  a = t.mouseLeaveDelay,
                  i = arguments.length,
                  l = new Array(i > 1 ? i - 1 : 0),
                  s = 1;
                s < i;
                s++
              )
                l[s - 1] = arguments[s]
              mn.apply(void 0, [r, 'props.onMouseLeave', e].concat(l)),
                o && (n.mouseLeaveTimer = n.closeWithTimeout(e, a))
            }),
            (n.handleTriggerMouseEnter = function (e) {
              clearTimeout(n.mouseLeaveTimer)
              for (
                var t = n.props,
                  r = t.trigger,
                  o = t.mouseEnterDelay,
                  a = t.openOnTriggerMouseEnter,
                  i = arguments.length,
                  l = new Array(i > 1 ? i - 1 : 0),
                  s = 1;
                s < i;
                s++
              )
                l[s - 1] = arguments[s]
              mn.apply(void 0, [r, 'props.onMouseEnter', e].concat(l)),
                a && (n.mouseEnterTimer = n.openWithTimeout(e, o))
            }),
            (n.open = function (e) {
              mn(n.props, 'onOpen', e, Ne({}, n.props, { open: !0 })),
                n.setState({ open: !0 })
            }),
            (n.openWithTimeout = function (e, t) {
              var r = Ne({}, e)
              return setTimeout(function () {
                return n.open(r)
              }, t || 0)
            }),
            (n.close = function (e) {
              n.setState({ open: !1 }),
                mn(n.props, 'onClose', e, Ne({}, n.props, { open: !1 }))
            }),
            (n.closeWithTimeout = function (e, t) {
              var r = Ne({}, e)
              return setTimeout(function () {
                return n.close(r)
              }, t || 0)
            }),
            (n.handleMount = function () {
              mn(n.props, 'onMount', null, n.props)
            }),
            (n.handleUnmount = function () {
              mn(n.props, 'onUnmount', null, n.props)
            }),
            (n.handleTriggerRef = function (e) {
              ;(n.triggerRef.current = e), bn(n.props.triggerRef, e)
            }),
            n
          )
        }
        Te(n, e)
        var r = n.prototype
        return (
          (r.componentWillUnmount = function () {
            clearTimeout(this.mouseEnterTimer),
              clearTimeout(this.mouseLeaveTimer)
          }),
          (r.render = function () {
            var e = this.props,
              n = e.children,
              r = e.eventPool,
              o = e.mountNode,
              a = e.trigger,
              i = this.state.open
            return t.createElement(
              t.Fragment,
              null,
              i &&
                t.createElement(
                  t.Fragment,
                  null,
                  t.createElement(
                    Qa,
                    {
                      innerRef: this.contentRef,
                      mountNode: o,
                      onMount: this.handleMount,
                      onUnmount: this.handleUnmount,
                    },
                    n,
                  ),
                  t.createElement(Po(), {
                    name: 'mouseleave',
                    on: this.handlePortalMouseLeave,
                    pool: r,
                    target: this.contentRef,
                  }),
                  t.createElement(Po(), {
                    name: 'mouseenter',
                    on: this.handlePortalMouseEnter,
                    pool: r,
                    target: this.contentRef,
                  }),
                  t.createElement(Po(), {
                    name: 'mousedown',
                    on: this.handleDocumentMouseDown,
                    pool: r,
                  }),
                  t.createElement(Po(), {
                    name: 'click',
                    on: this.handleDocumentClick,
                    pool: r,
                  }),
                  t.createElement(Po(), {
                    name: 'keydown',
                    on: this.handleEscape,
                    pool: r,
                  }),
                ),
              a &&
                t.createElement(
                  _n,
                  { innerRef: this.handleTriggerRef },
                  t.cloneElement(a, {
                    onBlur: this.handleTriggerBlur,
                    onClick: this.handleTriggerClick,
                    onFocus: this.handleTriggerFocus,
                    onMouseLeave: this.handleTriggerMouseLeave,
                    onMouseEnter: this.handleTriggerMouseEnter,
                  }),
                ),
            )
          }),
          n
        )
      })(qa)
      ;(Ka.handledProps = [
        'children',
        'closeOnDocumentClick',
        'closeOnEscape',
        'closeOnPortalMouseLeave',
        'closeOnTriggerBlur',
        'closeOnTriggerClick',
        'closeOnTriggerMouseLeave',
        'defaultOpen',
        'eventPool',
        'mountNode',
        'mouseEnterDelay',
        'mouseLeaveDelay',
        'onClose',
        'onMount',
        'onOpen',
        'onUnmount',
        'open',
        'openOnTriggerClick',
        'openOnTriggerFocus',
        'openOnTriggerMouseEnter',
        'trigger',
        'triggerRef',
      ]),
        (Ka.propTypes = {}),
        (Ka.defaultProps = {
          closeOnDocumentClick: !0,
          closeOnEscape: !0,
          eventPool: 'default',
          openOnTriggerClick: !0,
        }),
        (Ka.autoControlledProps = ['open']),
        (Ka.Inner = Qa)
      const Ga = Ka
      function Ya(e) {
        var n = e.blurring,
          r = e.className,
          o = e.children,
          a = e.content,
          i = e.dimmed,
          l = Cn(Tn(n, 'blurring'), Tn(i, 'dimmed'), 'dimmable', r),
          s = zn(Ya, e),
          u = Mn(Ya, e)
        return t.createElement(u, Ne({}, s, { className: l }), xn(o) ? a : o)
      }
      ;(Ya.handledProps = [
        'as',
        'blurring',
        'children',
        'className',
        'content',
        'dimmed',
      ]),
        (Ya.propTypes = {})
      const Xa = Ya
      var Ja = (function (e) {
        function n() {
          for (var n, r = arguments.length, o = new Array(r), a = 0; a < r; a++)
            o[a] = arguments[a]
          return (
            ((n = e.call.apply(e, [this].concat(o)) || this).containerRef = (0,
            t.createRef)()),
            (n.contentRef = (0, t.createRef)()),
            (n.handleClick = function (e) {
              var t = n.contentRef.current
              mn(n.props, 'onClick', e, n.props),
                (t && t !== e.target && $a(t, e)) ||
                  mn(n.props, 'onClickOutside', e, n.props)
            }),
            n
          )
        }
        Te(n, e)
        var r = n.prototype
        return (
          (r.componentDidMount = function () {
            var e = this.props.active
            this.toggleStyles(e)
          }),
          (r.componentDidUpdate = function (e) {
            var t = this.props.active
            e.active !== t && this.toggleStyles(t)
          }),
          (r.toggleStyles = function (e) {
            var t = this.containerRef.current
            t &&
              t.style &&
              (e
                ? t.style.setProperty('display', 'flex', 'important')
                : t.style.removeProperty('display'))
          }),
          (r.render = function () {
            var e = this.props,
              r = e.active,
              o = e.children,
              a = e.className,
              i = e.content,
              l = e.disabled,
              s = e.inverted,
              u = e.page,
              c = e.simple,
              f = e.verticalAlign,
              d = Cn(
                'ui',
                Tn(r, 'active transition visible'),
                Tn(l, 'disabled'),
                Tn(s, 'inverted'),
                Tn(u, 'page'),
                Tn(c, 'simple'),
                An(f),
                'dimmer',
                a,
              ),
              p = zn(n, this.props),
              h = Mn(n, this.props),
              m = xn(o) ? i : o
            return t.createElement(
              _n,
              { innerRef: this.containerRef },
              t.createElement(
                h,
                Ne({}, p, { className: d, onClick: this.handleClick }),
                m &&
                  t.createElement(
                    'div',
                    { className: 'content', ref: this.contentRef },
                    m,
                  ),
              ),
            )
          }),
          n
        )
      })(t.Component)
      ;(Ja.handledProps = [
        'active',
        'as',
        'children',
        'className',
        'content',
        'disabled',
        'inverted',
        'onClick',
        'onClickOutside',
        'page',
        'simple',
        'verticalAlign',
      ]),
        (Ja.propTypes = {})
      var Za = (function (e) {
        function n() {
          for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o]
          return (
            ((t = e.call.apply(e, [this].concat(r)) || this).handlePortalMount =
              function () {
                xo() &&
                  (document.body.classList.add('dimmed'),
                  document.body.classList.add('dimmable'))
              }),
            (t.handlePortalUnmount = function () {
              xo() &&
                (document.body.classList.remove('dimmed'),
                document.body.classList.remove('dimmable'))
            }),
            t
          )
        }
        return (
          Te(n, e),
          (n.prototype.render = function () {
            var e = this.props,
              r = e.active,
              o = e.page,
              a = zn(n, this.props)
            return o
              ? t.createElement(
                  Ga,
                  {
                    closeOnEscape: !1,
                    closeOnDocumentClick: !1,
                    onMount: this.handlePortalMount,
                    onUnmount: this.handlePortalUnmount,
                    open: r,
                    openOnTriggerClick: !1,
                  },
                  t.createElement(Ja, Ne({}, a, { active: r, page: o })),
                )
              : t.createElement(Ja, Ne({}, a, { active: r, page: o }))
          }),
          n
        )
      })(t.Component)
      function ei(e) {
        var n = e.children,
          r = e.className,
          o = e.content,
          a = e.size,
          i = Cn('ui', a, r, 'images'),
          l = zn(ei, e),
          s = Mn(ei, e)
        return t.createElement(s, Ne({}, l, { className: i }), xn(n) ? o : n)
      }
      ;(Za.handledProps = ['active', 'page']),
        (Za.propTypes = {}),
        (Za.Dimmable = Xa),
        (Za.Inner = Ja),
        (Za.create = pr(Za, function (e) {
          return { content: e }
        })),
        (ei.handledProps = ['as', 'children', 'className', 'content', 'size']),
        (ei.propTypes = {})
      const ti = ei
      function ni(e) {
        var n = e.avatar,
          r = e.bordered,
          o = e.centered,
          a = e.children,
          i = e.circular,
          l = e.className,
          s = e.content,
          u = e.dimmer,
          c = e.disabled,
          f = e.floated,
          d = e.fluid,
          p = e.hidden,
          h = e.href,
          m = e.inline,
          v = e.label,
          g = e.rounded,
          y = e.size,
          b = e.spaced,
          w = e.verticalAlign,
          k = e.wrapped,
          S = e.ui,
          _ = Cn(
            Tn(S, 'ui'),
            y,
            Tn(n, 'avatar'),
            Tn(r, 'bordered'),
            Tn(i, 'circular'),
            Tn(o, 'centered'),
            Tn(c, 'disabled'),
            Tn(d, 'fluid'),
            Tn(p, 'hidden'),
            Tn(m, 'inline'),
            Tn(g, 'rounded'),
            Rn(b, 'spaced'),
            On(f, 'floated'),
            An(w),
            'image',
            l,
          ),
          E = zn(ni, e),
          C = _o(E, { htmlProps: So }),
          x = C[0],
          N = C[1],
          P = Mn(ni, e, function () {
            if (!vn(u) || !vn(v) || !vn(k) || !xn(a)) return 'div'
          })
        return xn(a)
          ? xn(s)
            ? 'img' === P
              ? t.createElement(P, Ne({}, N, x, { className: _ }))
              : t.createElement(
                  P,
                  Ne({}, N, { className: _, href: h }),
                  Za.create(u, { autoGenerateKey: !1 }),
                  si.create(v, { autoGenerateKey: !1 }),
                  t.createElement('img', x),
                )
            : t.createElement(P, Ne({}, E, { className: _ }), s)
          : t.createElement(P, Ne({}, E, { className: _ }), a)
      }
      ;(ni.handledProps = [
        'as',
        'avatar',
        'bordered',
        'centered',
        'children',
        'circular',
        'className',
        'content',
        'dimmer',
        'disabled',
        'floated',
        'fluid',
        'hidden',
        'href',
        'inline',
        'label',
        'rounded',
        'size',
        'spaced',
        'ui',
        'verticalAlign',
        'wrapped',
      ]),
        (ni.Group = ti),
        (ni.propTypes = {}),
        (ni.defaultProps = { as: 'img', ui: !0 }),
        (ni.create = pr(ni, function (e) {
          return { src: e }
        }))
      const ri = ni
      function oi(e) {
        var n = e.children,
          r = e.className,
          o = e.content,
          a = Cn('detail', r),
          i = zn(oi, e),
          l = Mn(oi, e)
        return t.createElement(l, Ne({}, i, { className: a }), xn(n) ? o : n)
      }
      ;(oi.handledProps = ['as', 'children', 'className', 'content']),
        (oi.propTypes = {}),
        (oi.create = pr(oi, function (e) {
          return { content: e }
        }))
      const ai = oi
      function ii(e) {
        var n = e.children,
          r = e.circular,
          o = e.className,
          a = e.color,
          i = e.content,
          l = e.size,
          s = e.tag,
          u = Cn('ui', a, l, Tn(r, 'circular'), Tn(s, 'tag'), 'labels', o),
          c = zn(ii, e),
          f = Mn(ii, e)
        return t.createElement(f, Ne({}, c, { className: u }), xn(n) ? i : n)
      }
      ;(ii.handledProps = [
        'as',
        'children',
        'circular',
        'className',
        'color',
        'content',
        'size',
        'tag',
      ]),
        (ii.propTypes = {})
      const li = ii
      var si = (function (e) {
        function n() {
          for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o]
          return (
            ((t = e.call.apply(e, [this].concat(r)) || this).handleClick =
              function (e) {
                var n = t.props.onClick
                n && n(e, t.props)
              }),
            (t.handleIconOverrides = function (e) {
              return {
                onClick: function (n) {
                  mn(e, 'onClick', n), mn(t.props, 'onRemove', n, t.props)
                },
              }
            }),
            t
          )
        }
        return (
          Te(n, e),
          (n.prototype.render = function () {
            var e = this.props,
              r = e.active,
              o = e.attached,
              a = e.basic,
              i = e.children,
              l = e.circular,
              s = e.className,
              u = e.color,
              c = e.content,
              f = e.corner,
              d = e.detail,
              p = e.empty,
              h = e.floating,
              m = e.horizontal,
              v = e.icon,
              g = e.image,
              y = e.onRemove,
              b = e.pointing,
              w = e.prompt,
              k = e.removeIcon,
              S = e.ribbon,
              _ = e.size,
              E = e.tag,
              C = Cn(
                'ui',
                u,
                (!0 === b
                  ? 'pointing'
                  : ('left' === b || 'right' === b) && b + ' pointing') ||
                  (('above' === b || 'below' === b) && 'pointing ' + b),
                _,
                Tn(r, 'active'),
                Tn(a, 'basic'),
                Tn(l, 'circular'),
                Tn(p, 'empty'),
                Tn(h, 'floating'),
                Tn(m, 'horizontal'),
                Tn(!0 === g, 'image'),
                Tn(w, 'prompt'),
                Tn(E, 'tag'),
                Rn(f, 'corner'),
                Rn(S, 'ribbon'),
                On(o, 'attached'),
                'label',
                s,
              ),
              x = zn(n, this.props),
              N = Mn(n, this.props)
            if (!xn(i))
              return t.createElement(
                N,
                Ne({}, x, { className: C, onClick: this.handleClick }),
                i,
              )
            var P = br(k) ? 'delete' : k
            return t.createElement(
              N,
              Ne({ className: C, onClick: this.handleClick }, x),
              yr.create(v, { autoGenerateKey: !1 }),
              'boolean' !== typeof g && ri.create(g, { autoGenerateKey: !1 }),
              c,
              ai.create(d, { autoGenerateKey: !1 }),
              y &&
                yr.create(P, {
                  autoGenerateKey: !1,
                  overrideProps: this.handleIconOverrides,
                }),
            )
          }),
          n
        )
      })(t.Component)
      function ui(e) {
        var n = e.children,
          r = e.className,
          o = e.content,
          a = e.hidden,
          i = e.visible,
          l = Cn(Tn(i, 'visible'), Tn(a, 'hidden'), 'content', r),
          s = zn(ui, e),
          u = Mn(ui, e)
        return t.createElement(u, Ne({}, s, { className: l }), xn(n) ? o : n)
      }
      ;(si.handledProps = [
        'active',
        'as',
        'attached',
        'basic',
        'children',
        'circular',
        'className',
        'color',
        'content',
        'corner',
        'detail',
        'empty',
        'floating',
        'horizontal',
        'icon',
        'image',
        'onClick',
        'onRemove',
        'pointing',
        'prompt',
        'removeIcon',
        'ribbon',
        'size',
        'tag',
      ]),
        (si.propTypes = {}),
        (si.Detail = ai),
        (si.Group = li),
        (si.create = pr(si, function (e) {
          return { content: e }
        })),
        (ui.handledProps = [
          'as',
          'children',
          'className',
          'content',
          'hidden',
          'visible',
        ]),
        (ui.propTypes = {})
      const ci = ui
      const fi = function (e, t) {
        var n = -1,
          r = kr(e) ? Array(e.length) : []
        return (
          yo(e, function (e, o, a) {
            r[++n] = t(e, o, a)
          }),
          r
        )
      }
      const di = function (e, t) {
        return (Re(e) ? Kt : fi)(e, Ba(t, 3))
      }
      function pi(e) {
        var n = e.attached,
          r = e.basic,
          o = e.buttons,
          a = e.children,
          i = e.className,
          l = e.color,
          s = e.compact,
          u = e.content,
          c = e.floated,
          f = e.fluid,
          d = e.icon,
          p = e.inverted,
          h = e.labeled,
          m = e.negative,
          v = e.positive,
          g = e.primary,
          y = e.secondary,
          b = e.size,
          w = e.toggle,
          k = e.vertical,
          S = e.widths,
          _ = Cn(
            'ui',
            l,
            b,
            Tn(r, 'basic'),
            Tn(s, 'compact'),
            Tn(f, 'fluid'),
            Tn(d, 'icon'),
            Tn(p, 'inverted'),
            Tn(h, 'labeled'),
            Tn(m, 'negative'),
            Tn(v, 'positive'),
            Tn(g, 'primary'),
            Tn(y, 'secondary'),
            Tn(w, 'toggle'),
            Tn(k, 'vertical'),
            Rn(n, 'attached'),
            On(c, 'floated'),
            jn(S),
            'buttons',
            i,
          ),
          E = zn(pi, e),
          C = Mn(pi, e)
        return vn(o)
          ? t.createElement(C, Ne({}, E, { className: _ }), xn(a) ? u : a)
          : t.createElement(
              C,
              Ne({}, E, { className: _ }),
              di(o, function (e) {
                return yi.create(e)
              }),
            )
      }
      ;(pi.handledProps = [
        'as',
        'attached',
        'basic',
        'buttons',
        'children',
        'className',
        'color',
        'compact',
        'content',
        'floated',
        'fluid',
        'icon',
        'inverted',
        'labeled',
        'negative',
        'positive',
        'primary',
        'secondary',
        'size',
        'toggle',
        'vertical',
        'widths',
      ]),
        (pi.propTypes = {})
      const hi = pi
      function mi(e) {
        var n = e.className,
          r = e.text,
          o = Cn('or', n),
          a = zn(mi, e),
          i = Mn(mi, e)
        return t.createElement(i, Ne({}, a, { className: o, 'data-text': r }))
      }
      ;(mi.handledProps = ['as', 'className', 'text']), (mi.propTypes = {})
      const vi = mi
      var gi = (function (e) {
        function n() {
          for (var n, r = arguments.length, o = new Array(r), a = 0; a < r; a++)
            o[a] = arguments[a]
          return (
            ((n = e.call.apply(e, [this].concat(o)) || this).ref = (0,
            t.createRef)()),
            (n.computeElementType = function () {
              var e = n.props,
                t = e.attached,
                r = e.label
              if (!vn(t) || !vn(r)) return 'div'
            }),
            (n.computeTabIndex = function (e) {
              var t = n.props,
                r = t.disabled,
                o = t.tabIndex
              return vn(o) ? (r ? -1 : 'div' === e ? 0 : void 0) : o
            }),
            (n.focus = function (e) {
              return mn(n.ref.current, 'focus', e)
            }),
            (n.handleClick = function (e) {
              n.props.disabled
                ? e.preventDefault()
                : mn(n.props, 'onClick', e, n.props)
            }),
            (n.hasIconClass = function () {
              var e = n.props,
                t = e.labelPosition,
                r = e.children,
                o = e.content,
                a = e.icon
              return !0 === a || (a && (t || (xn(r) && vn(o))))
            }),
            n
          )
        }
        Te(n, e)
        var r = n.prototype
        return (
          (r.computeButtonAriaRole = function (e) {
            var t = this.props.role
            return vn(t) ? ('button' !== e ? 'button' : void 0) : t
          }),
          (r.render = function () {
            var e = this.props,
              r = e.active,
              o = e.animated,
              a = e.attached,
              i = e.basic,
              l = e.children,
              s = e.circular,
              u = e.className,
              c = e.color,
              f = e.compact,
              d = e.content,
              p = e.disabled,
              h = e.floated,
              m = e.fluid,
              v = e.icon,
              g = e.inverted,
              y = e.label,
              b = e.labelPosition,
              w = e.loading,
              k = e.negative,
              S = e.positive,
              _ = e.primary,
              E = e.secondary,
              C = e.size,
              x = e.toggle,
              N = e.type,
              P = Cn(
                c,
                C,
                Tn(r, 'active'),
                Tn(i, 'basic'),
                Tn(s, 'circular'),
                Tn(f, 'compact'),
                Tn(m, 'fluid'),
                Tn(this.hasIconClass(), 'icon'),
                Tn(g, 'inverted'),
                Tn(w, 'loading'),
                Tn(k, 'negative'),
                Tn(S, 'positive'),
                Tn(_, 'primary'),
                Tn(E, 'secondary'),
                Tn(x, 'toggle'),
                Rn(o, 'animated'),
                Rn(a, 'attached'),
              ),
              T = Cn(Rn(b || !!y, 'labeled')),
              O = Cn(Tn(p, 'disabled'), On(h, 'floated')),
              R = zn(n, this.props),
              L = Mn(n, this.props, this.computeElementType),
              A = this.computeTabIndex(L)
            if (!vn(y)) {
              var j = Cn('ui', P, 'button', u),
                z = Cn('ui', T, 'button', u, O),
                M = si.create(y, {
                  defaultProps: {
                    basic: !0,
                    pointing: 'left' === b ? 'right' : 'left',
                  },
                  autoGenerateKey: !1,
                })
              return t.createElement(
                L,
                Ne({}, R, { className: z, onClick: this.handleClick }),
                'left' === b && M,
                t.createElement(
                  _n,
                  { innerRef: this.ref },
                  t.createElement(
                    'button',
                    {
                      className: j,
                      'aria-pressed': x ? !!r : void 0,
                      disabled: p,
                      type: N,
                      tabIndex: A,
                    },
                    yr.create(v, { autoGenerateKey: !1 }),
                    ' ',
                    d,
                  ),
                ),
                ('right' === b || !b) && M,
              )
            }
            var D = Cn('ui', P, O, T, 'button', u),
              F = !xn(l),
              I = this.computeButtonAriaRole(L)
            return t.createElement(
              _n,
              { innerRef: this.ref },
              t.createElement(
                L,
                Ne({}, R, {
                  className: D,
                  'aria-pressed': x ? !!r : void 0,
                  disabled: (p && 'button' === L) || void 0,
                  onClick: this.handleClick,
                  role: I,
                  type: N,
                  tabIndex: A,
                }),
                F && l,
                !F && yr.create(v, { autoGenerateKey: !1 }),
                !F && d,
              ),
            )
          }),
          n
        )
      })(t.Component)
      ;(gi.handledProps = [
        'active',
        'animated',
        'as',
        'attached',
        'basic',
        'children',
        'circular',
        'className',
        'color',
        'compact',
        'content',
        'disabled',
        'floated',
        'fluid',
        'icon',
        'inverted',
        'label',
        'labelPosition',
        'loading',
        'negative',
        'onClick',
        'positive',
        'primary',
        'role',
        'secondary',
        'size',
        'tabIndex',
        'toggle',
        'type',
      ]),
        (gi.propTypes = {}),
        (gi.defaultProps = { as: 'button' }),
        (gi.Content = ci),
        (gi.Group = hi),
        (gi.Or = vi),
        (gi.create = pr(gi, function (e) {
          return { content: e }
        }))
      const yi = gi
      function bi(e) {
        var n = e.children,
          r = e.className,
          o = e.content,
          a = e.textAlign,
          i = Cn(Ln(a), 'description', r),
          l = zn(bi, e),
          s = Mn(bi, e)
        return t.createElement(s, Ne({}, l, { className: i }), xn(n) ? o : n)
      }
      ;(bi.handledProps = [
        'as',
        'children',
        'className',
        'content',
        'textAlign',
      ]),
        (bi.propTypes = {})
      const wi = bi
      function ki(e) {
        var n = e.children,
          r = e.className,
          o = e.content,
          a = e.textAlign,
          i = Cn(Ln(a), 'header', r),
          l = zn(ki, e),
          s = Mn(ki, e)
        return t.createElement(s, Ne({}, l, { className: i }), xn(n) ? o : n)
      }
      ;(ki.handledProps = [
        'as',
        'children',
        'className',
        'content',
        'textAlign',
      ]),
        (ki.propTypes = {})
      const Si = ki
      function _i(e) {
        var n = e.children,
          r = e.className,
          o = e.content,
          a = e.textAlign,
          i = Cn(Ln(a), 'meta', r),
          l = zn(_i, e),
          s = Mn(_i, e)
        return t.createElement(s, Ne({}, l, { className: i }), xn(n) ? o : n)
      }
      ;(_i.handledProps = [
        'as',
        'children',
        'className',
        'content',
        'textAlign',
      ]),
        (_i.propTypes = {})
      const Ei = _i
      function Ci(e) {
        var n = e.children,
          r = e.className,
          o = e.content,
          a = e.description,
          i = e.extra,
          l = e.header,
          s = e.meta,
          u = e.textAlign,
          c = Cn(Tn(i, 'extra'), Ln(u), 'content', r),
          f = zn(Ci, e),
          d = Mn(Ci, e)
        return xn(n)
          ? xn(o)
            ? t.createElement(
                d,
                Ne({}, f, { className: c }),
                dr(
                  Si,
                  function (e) {
                    return { content: e }
                  },
                  l,
                  { autoGenerateKey: !1 },
                ),
                dr(
                  Ei,
                  function (e) {
                    return { content: e }
                  },
                  s,
                  { autoGenerateKey: !1 },
                ),
                dr(
                  wi,
                  function (e) {
                    return { content: e }
                  },
                  a,
                  { autoGenerateKey: !1 },
                ),
              )
            : t.createElement(d, Ne({}, f, { className: c }), o)
          : t.createElement(d, Ne({}, f, { className: c }), n)
      }
      ;(Ci.handledProps = [
        'as',
        'children',
        'className',
        'content',
        'description',
        'extra',
        'header',
        'meta',
        'textAlign',
      ]),
        (Ci.propTypes = {})
      const xi = Ci
      function Ni(e) {
        var n = e.centered,
          r = e.children,
          o = e.className,
          a = e.content,
          i = e.doubling,
          l = e.items,
          s = e.itemsPerRow,
          u = e.stackable,
          c = e.textAlign,
          f = Cn(
            'ui',
            Tn(n, 'centered'),
            Tn(i, 'doubling'),
            Tn(u, 'stackable'),
            Ln(c),
            jn(s),
            'cards',
            o,
          ),
          d = zn(Ni, e),
          p = Mn(Ni, e)
        if (!xn(r)) return t.createElement(p, Ne({}, d, { className: f }), r)
        if (!xn(a)) return t.createElement(p, Ne({}, d, { className: f }), a)
        var h = di(l, function (e) {
          var n,
            r = null != (n = e.key) ? n : [e.header, e.description].join('-')
          return t.createElement(Ti, Ne({ key: r }, e))
        })
        return t.createElement(p, Ne({}, d, { className: f }), h)
      }
      ;(Ni.handledProps = [
        'as',
        'centered',
        'children',
        'className',
        'content',
        'doubling',
        'items',
        'itemsPerRow',
        'stackable',
        'textAlign',
      ]),
        (Ni.propTypes = {})
      const Pi = Ni
      var Ti = (function (e) {
        function n() {
          for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o]
          return (
            ((t = e.call.apply(e, [this].concat(r)) || this).handleClick =
              function (e) {
                var n = t.props.onClick
                n && n(e, t.props)
              }),
            t
          )
        }
        return (
          Te(n, e),
          (n.prototype.render = function () {
            var e = this.props,
              r = e.centered,
              o = e.children,
              a = e.className,
              i = e.color,
              l = e.content,
              s = e.description,
              u = e.extra,
              c = e.fluid,
              f = e.header,
              d = e.href,
              p = e.image,
              h = e.link,
              m = e.meta,
              v = e.onClick,
              g = e.raised,
              y = Cn(
                'ui',
                i,
                Tn(r, 'centered'),
                Tn(c, 'fluid'),
                Tn(h, 'link'),
                Tn(g, 'raised'),
                'card',
                a,
              ),
              b = zn(n, this.props),
              w = Mn(n, this.props, function () {
                if (v) return 'a'
              })
            return xn(o)
              ? xn(l)
                ? t.createElement(
                    w,
                    Ne({}, b, {
                      className: y,
                      href: d,
                      onClick: this.handleClick,
                    }),
                    ri.create(p, {
                      autoGenerateKey: !1,
                      defaultProps: { ui: !1, wrapped: !0 },
                    }),
                    (s || f || m) &&
                      t.createElement(xi, {
                        description: s,
                        header: f,
                        meta: m,
                      }),
                    u && t.createElement(xi, { extra: !0 }, u),
                  )
                : t.createElement(
                    w,
                    Ne({}, b, {
                      className: y,
                      href: d,
                      onClick: this.handleClick,
                    }),
                    l,
                  )
              : t.createElement(
                  w,
                  Ne({}, b, {
                    className: y,
                    href: d,
                    onClick: this.handleClick,
                  }),
                  o,
                )
          }),
          n
        )
      })(t.Component)
      ;(Ti.handledProps = [
        'as',
        'centered',
        'children',
        'className',
        'color',
        'content',
        'description',
        'extra',
        'fluid',
        'header',
        'href',
        'image',
        'link',
        'meta',
        'onClick',
        'raised',
      ]),
        (Ti.propTypes = {}),
        (Ti.Content = xi),
        (Ti.Description = wi),
        (Ti.Group = Pi),
        (Ti.Header = Si),
        (Ti.Meta = Ei)
      var Oi = (function (e) {
        function n() {
          for (var r, o = arguments.length, a = new Array(o), i = 0; i < o; i++)
            a[i] = arguments[i]
          return (
            ((r = e.call.apply(e, [this].concat(a)) || this).inputRef = (0,
            t.createRef)()),
            (r.computeIcon = function () {
              var e = r.props,
                t = e.loading,
                n = e.icon
              return vn(n) ? (t ? 'spinner' : void 0) : n
            }),
            (r.computeTabIndex = function () {
              var e = r.props,
                t = e.disabled,
                n = e.tabIndex
              return vn(n) ? (t ? -1 : void 0) : n
            }),
            (r.focus = function (e) {
              return r.inputRef.current.focus(e)
            }),
            (r.select = function () {
              return r.inputRef.current.select()
            }),
            (r.handleChange = function (e) {
              var t = La(e, 'target.value')
              mn(r.props, 'onChange', e, Ne({}, r.props, { value: t }))
            }),
            (r.handleChildOverrides = function (e, t) {
              return Ne({}, t, e.props, {
                ref: function (t) {
                  bn(e.ref, t), (r.inputRef.current = t)
                },
              })
            }),
            (r.partitionProps = function () {
              var e = r.props,
                t = e.disabled,
                o = e.type,
                a = r.computeTabIndex(),
                i = zn(n, r.props),
                l = _o(i),
                s = l[0],
                u = l[1]
              return [
                Ne({}, s, {
                  disabled: t,
                  type: o,
                  tabIndex: a,
                  onChange: r.handleChange,
                  ref: r.inputRef,
                }),
                u,
              ]
            }),
            r
          )
        }
        return (
          Te(n, e),
          (n.prototype.render = function () {
            var e = this,
              r = this.props,
              o = r.action,
              a = r.actionPosition,
              i = r.children,
              l = r.className,
              s = r.disabled,
              u = r.error,
              c = r.fluid,
              f = r.focus,
              d = r.icon,
              p = r.iconPosition,
              h = r.input,
              m = r.inverted,
              v = r.label,
              g = r.labelPosition,
              y = r.loading,
              b = r.size,
              w = r.transparent,
              k = r.type,
              S = Cn(
                'ui',
                b,
                Tn(s, 'disabled'),
                Tn(u, 'error'),
                Tn(c, 'fluid'),
                Tn(f, 'focus'),
                Tn(m, 'inverted'),
                Tn(y, 'loading'),
                Tn(w, 'transparent'),
                On(a, 'action') || Tn(o, 'action'),
                On(p, 'icon') || Tn(d || y, 'icon'),
                On(g, 'labeled') || Tn(v, 'labeled'),
                'input',
                l,
              ),
              _ = Mn(n, this.props),
              E = this.partitionProps(),
              C = E[0],
              x = E[1]
            if (!xn(i)) {
              var N = di(t.Children.toArray(i), function (n) {
                return 'input' !== n.type
                  ? n
                  : (0, t.cloneElement)(n, e.handleChildOverrides(n, C))
              })
              return t.createElement(_, Ne({}, x, { className: S }), N)
            }
            var P = yi.create(o, { autoGenerateKey: !1 }),
              T = si.create(v, {
                defaultProps: { className: Cn('label', mo(g, 'corner') && g) },
                autoGenerateKey: !1,
              })
            return t.createElement(
              _,
              Ne({}, x, { className: S }),
              'left' === a && P,
              'right' !== g && T,
              hr(h || k, { defaultProps: C, autoGenerateKey: !1 }),
              yr.create(this.computeIcon(), { autoGenerateKey: !1 }),
              'left' !== a && P,
              'right' === g && T,
            )
          }),
          n
        )
      })(t.Component)
      ;(Oi.handledProps = [
        'action',
        'actionPosition',
        'as',
        'children',
        'className',
        'disabled',
        'error',
        'fluid',
        'focus',
        'icon',
        'iconPosition',
        'input',
        'inverted',
        'label',
        'labelPosition',
        'loading',
        'onChange',
        'size',
        'tabIndex',
        'transparent',
        'type',
      ]),
        (Oi.propTypes = {}),
        (Oi.defaultProps = { type: 'text' }),
        (Oi.create = pr(Oi, function (e) {
          return { type: e }
        }))
      const Ri = Oi,
        Li = {
          adventurer: [
            'Midnight',
            'Zoey',
            'Smokey',
            'Oscar',
            'Tiger',
            'Salem',
            'Whiskers',
            'Bob',
            'Casper',
            'Mittens',
            'Sheba',
            'Lola',
            'Lily',
            'Samanta',
            'Chloe',
            'Abby',
            'Scooter',
            'Sassy',
            'Socks',
            'Pumpkin',
          ],
          bottts: [
            'Molly',
            'TinkerBell',
            'Sadie',
            'Annie',
            'Gracie',
            'Oreo',
            'Max',
            'Cuddles',
            'Midnight',
            'Ginger',
            'Pumpkin',
            'Milo',
            'Sasha',
            'Baby',
            'Sophie',
            'Peanut',
            'Scooter',
            'Mimi',
            'George',
            'Cookie',
          ],
        }
      var Ai = n(184)
      const ji = []
      function zi(e) {
        let {
          isVisible: n,
          username: r,
          setUsername: o,
          setUsernameAndJoin: a,
          toggleVisibility: i,
          setAvatar: l,
          avatar: s,
        } = e
        const [u, c] = t.useState(!1)
        return (0, Ai.jsx)('div', {
          className: 'avatars-list',
          children: (0, Ai.jsxs)(Ti, {
            style: { display: n ? 'block' : 'none', width: '100%' },
            children: [
              (0, Ai.jsxs)(Ti.Content, {
                style: { display: 'flex' },
                children: [
                  (0, Ai.jsx)(Ti.Header, { children: 'Set Profile' }),
                  (0, Ai.jsx)(yr, {
                    name: 'close',
                    style: { marginLeft: 'auto' },
                    onClick: i,
                  }),
                ],
              }),
              (0, Ai.jsxs)(Ti.Content, {
                children: [
                  (0, Ai.jsx)('div', {
                    className: 'input-field',
                    children: (0, Ai.jsx)(Ri, {
                      value: r,
                      onChange: (e) => o(e.target.value),
                      placeholder: 'Enter your name...',
                    }),
                  }),
                  (0, Ai.jsx)('p', { children: 'Choose your Avatar' }),
                  (0, Ai.jsx)(Ti.Description, {
                    children: (0, Ai.jsx)('div', {
                      className: 'avatars',
                      children: Object.entries(Li).flatMap((e) => {
                        let [t, n] = e
                        return n.map((e, n) =>
                          (0, Ai.jsxs)('div', {
                            style: { position: 'relative' },
                            children: [
                              (0, Ai.jsx)(
                                'img',
                                {
                                  src: 'https://api.dicebear.com/7.x/'
                                    .concat(t, '/svg?seed=')
                                    .concat(e, '&scale=80'),
                                  alt: 'avatar',
                                  onClick: () => l({ category: t, image: e }),
                                  style:
                                    s.image === e
                                      ? { backgroundColor: '#adadad30' }
                                      : {},
                                },
                                ''.concat(t, '-').concat(n),
                              ),
                              s.image === e &&
                                (0, Ai.jsx)('span', {
                                  style: {
                                    position: 'absolute',
                                    bottom: '3px',
                                    left: '3px',
                                    fontSize: '1.5rem',
                                    color: '#21ba45',
                                  },
                                  children: '\u2714 ',
                                }),
                            ],
                          }),
                        )
                      }),
                    }),
                  }),
                  (0, Ai.jsx)(yi, {
                    content: 'Confirm',
                    labelPosition: 'right',
                    icon: 'checkmark',
                    onClick: () => {
                      a(), c(!1)
                    },
                    positive: !0,
                    fluid: !0,
                  }),
                ],
              }),
            ],
          }),
        })
      }
      const Mi = xe()
      const Di = function () {
          const [e, n] = (0, t.useState)(''),
            [r, o] = (0, t.useState)(''),
            [a, i] = (0, t.useState)({}),
            [l, s] = (0, t.useState)(ji),
            [u, c] = (0, t.useState)([]),
            [f, d] = (0, t.useState)([])
          console.log(l, 'baby')
          const [p, h] = (0, t.useState)(!1),
            m = () => {
              h(!p)
            },
            v = (0, t.useRef)(null)
          return (
            (0, t.useEffect)(() => {
              v.current.scrollTop = v.current.scrollHeight
            }, [l]),
            (0, t.useEffect)(
              () => (
                Mi.on('chat message', (e) => {
                  s((t) => [...t, e])
                }),
                Mi.on('user joined', (e) => {
                  s((t) => [...t, { user: 'System', message: e }])
                }),
                Mi.on('notification', (e) => {
                  const t = ''.concat(e.user, ' ').concat(e.message)
                  alert(t)
                }),
                Mi.on('update typing', (e) => {
                  console.log(e, 'jatti'), d(e)
                }),
                () => {
                  Mi.disconnect()
                }
              ),
              [],
            ),
            (0, Ai.jsxs)('div', {
              className: 'container',
              children: [
                (0, Ai.jsxs)('div', {
                  className: 'sidebar',
                  children: [
                    (0, Ai.jsxs)(yi, {
                      animated: 'fade',
                      children: [
                        (0, Ai.jsx)(yi.Content, {
                          visible: !0,
                          children: 'Start group chat',
                        }),
                        (0, Ai.jsx)(yi.Content, {
                          hidden: !0,
                          children: 'Start group chat',
                        }),
                      ],
                    }),
                    (0, Ai.jsxs)(yi, {
                      primary: !0,
                      animated: 'fade',
                      onClick: m,
                      children: [
                        (0, Ai.jsx)(yi.Content, {
                          visible: !0,
                          children: 'Start new chat',
                        }),
                        (0, Ai.jsx)(yi.Content, {
                          hidden: !0,
                          children: 'Start new chat',
                        }),
                      ],
                    }),
                    (0, Ai.jsx)(zi, {
                      isVisible: p,
                      setUsernameAndJoin: () => {
                        const t = e.trim()
                        '' !== t &&
                          (Mi.emit('set username', t),
                          console.log(
                            'Sent set username event with value: '.concat(t),
                          ))
                      },
                      username: e,
                      setUsername: n,
                      toggleVisibility: m,
                      setAvatar: i,
                      avatar: a,
                    }),
                  ],
                }),
                (0, Ai.jsxs)('div', {
                  className: 'msg-card-container',
                  children: [
                    (0, Ai.jsx)('div', {
                      className: 'msg-container',
                      ref: v,
                      children: l.map((e, t) =>
                        'System' === e.user
                          ? (0, Ai.jsx)('p', {
                              className: 'new-user',
                              children: e.message,
                            })
                          : (0, Ai.jsxs)('div', {
                              className: 'msg-card',
                              children: [
                                (0, Ai.jsx)('img', {
                                  src: 'https://api.dicebear.com/7.x/'
                                    .concat(e.avatar.category, '/svg?seed=')
                                    .concat(e.avatar.image),
                                  alt: 'avatar',
                                }),
                                (0, Ai.jsx)(Ti, {
                                  header: e.user,
                                  description: e.message,
                                }),
                              ],
                            }),
                      ),
                    }),
                    (0, Ai.jsxs)('div', {
                      className: 'msg-section',
                      children: [
                        f.length > 0 &&
                          f[0] !== e &&
                          (0, Ai.jsx)('div', {
                            style: { marginLeft: '1em' },
                            children: ''
                              .concat(f.join(', '), ' ')
                              .concat(f.length > 1 ? 'are' : 'is', ' typing'),
                          }),
                        (0, Ai.jsxs)(Ri, {
                          type: 'text',
                          placeholder: 'Search...',
                          action: !0,
                          value: r,
                          onChange: (e) => o(e.target.value),
                          onInput: () => {
                            Mi.emit('typing')
                          },
                          onBlur: () => {
                            Mi.emit('stop typing')
                          },
                          fluid: !0,
                          children: [
                            (0, Ai.jsx)('input', {}),
                            (0, Ai.jsx)(yi, {
                              onClick: () => {
                                const e = r.trim()
                                '' !== e &&
                                  (Mi.emit('chat message', {
                                    trimmedMessage: e,
                                    avatar: a,
                                  }),
                                  o(''))
                              },
                              type: 'submit',
                              children: 'Send',
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            })
          )
        },
        Fi = (e) => {
          e &&
            e instanceof Function &&
            n
              .e(787)
              .then(n.bind(n, 787))
              .then((t) => {
                let {
                  getCLS: n,
                  getFID: r,
                  getFCP: o,
                  getLCP: a,
                  getTTFB: i,
                } = t
                n(e), r(e), o(e), a(e), i(e)
              })
        }
      r
        .createRoot(document.getElementById('root'))
        .render((0, Ai.jsx)(t.StrictMode, { children: (0, Ai.jsx)(Di, {}) })),
        Fi()
    })()
})()
//# sourceMappingURL=main.f5cdb162.js.map
