webpackJsonp([4], {
  89: function(e, t, l) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var a = l(0),
      r = (function(e) {
        return e && e.__esModule ? e : { default: e };
      })(a),
      u = l(18),
      d = u.Card.Header,
      n = u.Card.Body,
      o = u.Card.Footer;
    (t.default = function() {
      return r.default.createElement(
        u.View,
        null,
        r.default.createElement(u.WhiteSpace, null),
        r.default.createElement(
          u.Card,
          null,
          r.default.createElement(d, { split: !0 }, 'Header'),
          r.default.createElement(n, { padding: !0 }, 'Body'),
          r.default.createElement(
            o,
            { split: !0 },
            r.default.createElement(
              u.Button,
              { color: 'blue', size: 'large', ghost: !0, border: !1 },
              'Footer'
            )
          )
        ),
        r.default.createElement(u.WhiteSpace, null)
      );
    }),
      (e.exports = t.default);
  },
});
