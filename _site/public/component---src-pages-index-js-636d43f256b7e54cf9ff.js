(window.webpackJsonp = window.webpackJsonp || []).push([
  [9],
  {
    "+7fW": function(e, t, a) {},
    RXBc: function(e, t, a) {
      "use strict";
      a.r(t);
      var n = a("q1tI"),
        r = a.n(n),
        s = a("Wbzz"),
        c = a("Bl7J"),
        i = a("vrFN"),
        o = a("DNPW"),
        l =
          (a("+7fW"),
          a("wvC7"),
          function(e, t) {
            var a = e.data,
              n = a.site.siteMetadata.title,
              s = a.allMarkdownRemark.edges,
              l = 0;
            return r.a.createElement(
              c.a,
              { title: n },
              r.a.createElement(i.a, {
                title: "Blog",
                keywords: ["devlog", "blog", "gatsby", "javascript", "react"]
              }),
              a.site.siteMetadata.description &&
                r.a.createElement(
                  "header",
                  { className: "page-head" },
                  r.a.createElement(
                    "h2",
                    { className: "page-head-title" },
                    a.site.siteMetadata.description
                  )
                ),
              r.a.createElement(
                "div",
                { className: "post-feed" },
                s.map(function(e) {
                  var t = e.node;
                  return (
                    l++,
                    r.a.createElement(o.a, {
                      key: t.fields.slug,
                      count: l,
                      node: t,
                      postClass: "post"
                    })
                  );
                })
              )
            );
          });
      t.default = function(e) {
        return r.a.createElement(s.StaticQuery, {
          query: "2086240406",
          render: function(t) {
            return r.a.createElement(
              l,
              Object.assign({ location: e.location, props: !0, data: t }, e)
            );
          }
        });
      };
    }
  }
]);
//# sourceMappingURL=component---src-pages-index-js-636d43f256b7e54cf9ff.js.map
