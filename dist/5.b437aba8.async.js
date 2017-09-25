webpackJsonp([5], {
  88: function(e, t, a) {
    'use strict';
    function n(e) {
      return e && e.__esModule ? e : { default: e };
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var l = a(11),
      r = n(l),
      u = (0, r.default)(
        ['\n    > a {\n      margin-bottom: 1rem;\n    }\n  '],
        ['\n    > a {\n      margin-bottom: 1rem;\n    }\n  ']
      ),
      d = a(0),
      o = n(d),
      c = a(18),
      m = a(10),
      f = n(m),
      i = c.Card.Header;
    (t.default = function() {
      var e = (0, f.default)(c.Card.Body)(u);
      return o.default.createElement(
        c.View,
        null,
        o.default.createElement(c.WhiteSpace, null),
        o.default.createElement(
          c.Card,
          null,
          o.default.createElement(i, { split: !0 }, 'Button'),
          o.default.createElement(
            e,
            { padding: !0 },
            o.default.createElement(
              c.Button,
              { round: !0, color: 'primary' },
              '\u6309\u94ae\u6807\u9898'
            ),
            o.default.createElement(
              c.Button,
              { round: !0, ghost: !0 },
              '\u6309\u94ae\u6807\u9898'
            ),
            o.default.createElement(
              c.Button,
              { round: !0, disabled: !0 },
              '\u6309\u94ae\u6807\u9898'
            ),
            o.default.createElement(
              c.Button,
              { round: !0, color: 'primary', deg: -45, shadow: !0 },
              '\u6309\u94ae\u6807\u9898'
            ),
            o.default.createElement(
              c.Button,
              {
                round: !0,
                size: 'small',
                color: 'primary',
                deg: 45,
                shadow: !0,
                highlight: !0,
              },
              '\u6309\u94ae\u6807\u9898'
            )
          )
        ),
        o.default.createElement(c.WhiteSpace, null)
      );
    }),
      (e.exports = t.default);
  },
});
