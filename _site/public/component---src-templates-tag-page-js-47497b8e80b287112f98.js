(window.webpackJsonp = window.webpackJsonp || []).push([
  [12],
  {
    Kgxr: function(e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, "pageQuery", function() {
          return c;
        });
      var r = a("9Hrx"),
        n = a("q1tI"),
        s = a.n(n),
        o = a("Bl7J"),
        p = a("vrFN"),
        i = a("DNPW"),
        l = (function(e) {
          function t() {
            return e.apply(this, arguments) || this;
          }
          return (
            Object(r.a)(t, e),
            (t.prototype.render = function() {
              var e = this.props,
                t = this.props.pageContext.tag,
                a = this.props.data.allMarkdownRemark.edges,
                r = this.props.data.site.siteMetadata.title;
              return s.a.createElement(
                o.a,
                { location: this.props.location, title: r },
                s.a.createElement(p.a, {
                  title: "#" + (t.charAt(0).toUpperCase() + t.slice(1)),
                  keywords: ["" + t, "blog", "gatsby", "javascript", "react"]
                }),
                s.a.createElement(
                  "header",
                  { className: "tag-page-head" },
                  s.a.createElement(
                    "h1",
                    { className: "page-head-title" },
                    "#",
                    t,
                    "(",
                    e.data.allMarkdownRemark.totalCount,
                    ")"
                  )
                ),
                s.a.createElement(
                  "div",
                  { className: "post-feed" },
                  a.map(function(e) {
                    var t = e.node;
                    return s.a.createElement(i.a, {
                      key: t.fields.slug,
                      node: t,
                      postClass: "post"
                    });
                  })
                )
              );
            }),
            t
          );
        })(s.a.Component);
      t.default = l;
      var c = "19194963";
    }
  }
]);
//# sourceMappingURL=component---src-templates-tag-page-js-47497b8e80b287112f98.js.map
