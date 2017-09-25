webpackJsonp([4], {
  89: function(e, t, n) {
    'use strict';
    function a(e) {
      return e && e.__esModule ? e : { default: e };
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var l = n(16),
      d = a(l),
      u = n(145),
      o = a(u),
      r = n(65),
      f = a(r),
      i = n(66),
      c = a(i),
      s = n(85),
      p = a(s),
      m = n(86),
      _ = a(m),
      E = (0, d.default)(
        [
          '\n      padding-top: 44px;\n      > a {\n        display: block;\n        padding: 1rem;\n        background: #fff;\n        color: #444;\n        ',
          ';\n      }\n    ',
        ],
        [
          '\n      padding-top: 44px;\n      > a {\n        display: block;\n        padding: 1rem;\n        background: #fff;\n        color: #444;\n        ',
          ';\n      }\n    ',
        ]
      ),
      k = n(28),
      b = n(1),
      h = a(b),
      A = n(13),
      M = a(A),
      g = (function(e) {
        function t(e) {
          (0, f.default)(this, t);
          var n = (0, p.default)(
            this,
            (t.__proto__ || (0, o.default)(t)).call(this, e)
          );
          return (n.state = { mode: k.NAVBAR_MODE.WHITE }), n;
        }
        return (
          (0, _.default)(t, e),
          (0, c.default)(t, [
            {
              key: 'render',
              value: function() {
                var e = this,
                  t = (0, M.default)(k.View)(E, k.style.split.bottom);
                return h.default.createElement(
                  t,
                  null,
                  h.default.createElement(k.NavBar, { mode: this.state.mode }),
                  h.default.createElement(k.WhiteSpace, null, 'Type'),
                  h.default.createElement(
                    'a',
                    {
                      onClick: function() {
                        return e.setState({ mode: k.NAVBAR_MODE.WHITE });
                      },
                    },
                    'White Mode'
                  ),
                  h.default.createElement(
                    'a',
                    {
                      onClick: function() {
                        return e.setState({ mode: k.NAVBAR_MODE.TRANS });
                      },
                    },
                    'Trans Mode'
                  )
                );
              },
            },
          ]),
          t
        );
      })(h.default.Component);
    (t.default = g), (e.exports = t.default);
  },
});
