(window.webpackJsonp = window.webpackJsonp || []).push([
  [6],
  {
    w2l6: function(t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, "pageQuery", function() {
          return l;
        });
      var a = n("9Hrx"),
        o = n("q1tI"),
        r = n.n(o),
        i = n("Bl7J"),
        u = n("vrFN"),
        s = (function(t) {
          function e() {
            return t.apply(this, arguments) || this;
          }
          return (
            Object(a.a)(e, t),
            (e.prototype.render = function() {
              var t = this.props.data.site.siteMetadata.title;
              return r.a.createElement(
                i.a,
                { location: this.props.location, title: t },
                r.a.createElement(u.a, { title: "404: Not Found" }),
                r.a.createElement("h1", null, "Not Found"),
                r.a.createElement(
                  "p",
                  null,
                  "You just hit a route that doesn't exist... the sadness."
                )
              );
            }),
            e
          );
        })(r.a.Component);
      e.default = s;
      var l = "3159585216";
    }
  }
]);
//# sourceMappingURL=component---src-pages-404-js-dd2d785cefa9e0324875.js.map
