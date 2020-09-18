(window.webpackJsonp = window.webpackJsonp || []).push([
  [7],
  {
    "+7fW": function(e, t, a) {},
    "3XHS": function(e, t, a) {
      "use strict";
      a.r(t);
      var i = a("q1tI"),
        r = a.n(i),
        s = a("Wbzz"),
        n = a("9eSz"),
        o = a.n(n),
        l = a("Bl7J"),
        d = a("vrFN"),
        c =
          (a("+7fW"),
          a("wvC7"),
          function(e, t) {
            var a = e.data,
              i = a.site.siteMetadata.title;
            return r.a.createElement(
              l.a,
              { title: i },
              r.a.createElement(d.a, {
                title: "About",
                keywords: ["blog", "gatsby", "javascript", "react"]
              }),
              r.a.createElement(
                "article",
                { className: "post-content page-template no-image" },
                r.a.createElement(
                  "div",
                  { className: "post-content-body" },
                  r.a.createElement(
                    "h2",
                    {
                      id:
                        "clean-minimal-and-deeply-customisable-london-is-a-theme-made-for-people-who-appreciate-simple-lines-"
                    },
                    "Clean, minimal, and deeply customisable. London is a theme made for people who appreciate simple lines."
                  ),
                  r.a.createElement(
                    "figure",
                    { className: "kg-card kg-image-card kg-width-full" },
                    r.a.createElement(o.a, {
                      fluid: a.benchAccounting.childImageSharp.fluid,
                      className: "kg-image"
                    }),
                    r.a.createElement(
                      "figcaption",
                      null,
                      "Large imagery is at the heart of this theme"
                    )
                  ),
                  r.a.createElement(
                    "h3",
                    { id: "dynamic-styles" },
                    "Dynamic styles"
                  ),
                  r.a.createElement(
                    "p",
                    null,
                    "London comes with photo-centric main layout best suited to photography, graphics portfolios and other image-heavy uses."
                  ),
                  r.a.createElement(
                    "p",
                    null,
                    "Both post and page templates are light and minimal, with all the focus on the content while the design of the theme gets out of the way. Beneath the hood, London enjoys the full power of the",
                    " ",
                    r.a.createElement(
                      "a",
                      { href: "https://docs.ghost.org/api/handlebars-themes/" },
                      "Ghost Handlebars Theme API"
                    ),
                    " ",
                    "to provide limitless customisation options and dynamic styles."
                  ),
                  r.a.createElement(
                    "p",
                    null,
                    "Don't forget to check out the",
                    " ",
                    r.a.createElement(
                      "a",
                      { href: "https://docs.ghost.org/integrations/" },
                      "Ghost Integrations Directory"
                    ),
                    " ",
                    "for more ways to integrate Ghost with your favourite services."
                  )
                )
              )
            );
          });
      t.default = function(e) {
        return r.a.createElement(s.StaticQuery, {
          query: "4063793609",
          render: function(t) {
            return r.a.createElement(
              c,
              Object.assign({ location: e.location, data: t }, e)
            );
          }
        });
      };
    },
    "9eSz": function(e, t, a) {
      "use strict";
      var i = a("5NKs");
      (t.__esModule = !0), (t.default = void 0);
      var r,
        s = i(a("v06X")),
        n = i(a("XEEL")),
        o = i(a("uDP2")),
        l = i(a("j8BX")),
        d = i(a("q1tI")),
        c = i(a("17x9")),
        u = function(e) {
          var t = (0, l.default)({}, e),
            a = t.resolutions,
            i = t.sizes,
            r = t.critical;
          return (
            a && ((t.fixed = a), delete t.resolutions),
            i && ((t.fluid = i), delete t.sizes),
            r && (t.loading = "eager"),
            t.fluid && (t.fluid = v([].concat(t.fluid))),
            t.fixed && (t.fixed = v([].concat(t.fixed))),
            t
          );
        },
        f = function(e) {
          var t = e.fluid,
            a = e.fixed;
          return ((t && t[0]) || (a && a[0])).src;
        },
        g = Object.create({}),
        p = function(e) {
          var t = u(e),
            a = f(t);
          return g[a] || !1;
        },
        h =
          "undefined" != typeof HTMLImageElement &&
          "loading" in HTMLImageElement.prototype,
        m = "undefined" != typeof window,
        b = m && window.IntersectionObserver,
        y = new WeakMap();
      function S(e) {
        return e.map(function(e) {
          var t = e.src,
            a = e.srcSet,
            i = e.srcSetWebp,
            r = e.media,
            s = e.sizes;
          return d.default.createElement(
            d.default.Fragment,
            { key: t },
            i &&
              d.default.createElement("source", {
                type: "image/webp",
                media: r,
                srcSet: i,
                sizes: s
              }),
            d.default.createElement("source", { media: r, srcSet: a, sizes: s })
          );
        });
      }
      function v(e) {
        var t = [],
          a = [];
        return (
          e.forEach(function(e) {
            return (e.media ? t : a).push(e);
          }),
          [].concat(t, a)
        );
      }
      function E(e) {
        return e.map(function(e) {
          var t = e.src,
            a = e.media,
            i = e.tracedSVG;
          return d.default.createElement("source", {
            key: t,
            media: a,
            srcSet: i
          });
        });
      }
      function w(e) {
        return e.map(function(e) {
          var t = e.src,
            a = e.media,
            i = e.base64;
          return d.default.createElement("source", {
            key: t,
            media: a,
            srcSet: i
          });
        });
      }
      function L(e, t) {
        var a = e.srcSet,
          i = e.srcSetWebp,
          r = e.media,
          s = e.sizes;
        return (
          "<source " +
          (t ? "type='image/webp' " : "") +
          (r ? 'media="' + r + '" ' : "") +
          'srcset="' +
          (t ? i : a) +
          '" ' +
          (s ? 'sizes="' + s + '" ' : "") +
          "/>"
        );
      }
      var I = function(e, t) {
          var a =
            (void 0 === r &&
              "undefined" != typeof window &&
              window.IntersectionObserver &&
              (r = new window.IntersectionObserver(
                function(e) {
                  e.forEach(function(e) {
                    if (y.has(e.target)) {
                      var t = y.get(e.target);
                      (e.isIntersecting || e.intersectionRatio > 0) &&
                        (r.unobserve(e.target), y.delete(e.target), t());
                    }
                  });
                },
                { rootMargin: "200px" }
              )),
            r);
          return (
            a && (a.observe(e), y.set(e, t)),
            function() {
              a.unobserve(e), y.delete(e);
            }
          );
        },
        k = function(e) {
          var t = e.src ? 'src="' + e.src + '" ' : 'src="" ',
            a = e.sizes ? 'sizes="' + e.sizes + '" ' : "",
            i = e.srcSet ? 'srcset="' + e.srcSet + '" ' : "",
            r = e.title ? 'title="' + e.title + '" ' : "",
            s = e.alt ? 'alt="' + e.alt + '" ' : 'alt="" ',
            n = e.width ? 'width="' + e.width + '" ' : "",
            o = e.height ? 'height="' + e.height + '" ' : "",
            l = e.crossOrigin ? 'crossorigin="' + e.crossOrigin + '" ' : "",
            d = e.loading ? 'loading="' + e.loading + '" ' : "",
            c = e.draggable ? 'draggable="' + e.draggable + '" ' : "";
          return (
            "<picture>" +
            e.imageVariants
              .map(function(e) {
                return (e.srcSetWebp ? L(e, !0) : "") + L(e);
              })
              .join("") +
            "<img " +
            d +
            n +
            o +
            a +
            i +
            t +
            s +
            r +
            l +
            c +
            'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'
          );
        },
        C = function(e) {
          var t = e.src,
            a = e.imageVariants,
            i = e.generateSources,
            r = e.spreadProps,
            s = d.default.createElement(z, (0, l.default)({ src: t }, r));
          return a.length > 1
            ? d.default.createElement("picture", null, i(a), s)
            : s;
        },
        z = d.default.forwardRef(function(e, t) {
          var a = e.sizes,
            i = e.srcSet,
            r = e.src,
            s = e.style,
            n = e.onLoad,
            c = e.onError,
            u = e.onClick,
            f = e.loading,
            g = e.draggable,
            p = (0, o.default)(e, [
              "sizes",
              "srcSet",
              "src",
              "style",
              "onLoad",
              "onError",
              "onClick",
              "loading",
              "draggable"
            ]);
          return d.default.createElement(
            "img",
            (0, l.default)({ sizes: a, srcSet: i, src: r }, p, {
              onLoad: n,
              onError: c,
              onClick: u,
              ref: t,
              loading: f,
              draggable: g,
              style: (0, l.default)(
                {
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center"
                },
                s
              )
            })
          );
        });
      z.propTypes = {
        style: c.default.object,
        onError: c.default.func,
        onClick: c.default.func,
        onLoad: c.default.func
      };
      var O = (function(e) {
        function t(t) {
          var a;
          ((a = e.call(this, t) || this).seenBefore = m && p(t)),
            (a.isCritical = "eager" === t.loading || t.critical),
            (a.addNoScript = !(a.isCritical && !t.fadeIn)),
            (a.useIOSupport = !h && b && !a.isCritical && !a.seenBefore);
          var i = a.isCritical || (m && (h || !a.useIOSupport));
          return (
            (a.state = {
              isVisible: i,
              imgLoaded: !1,
              imgCached: !1,
              fadeIn: !a.seenBefore && t.fadeIn
            }),
            (a.imageRef = d.default.createRef()),
            (a.handleImageLoaded = a.handleImageLoaded.bind((0, s.default)(a))),
            (a.handleRef = a.handleRef.bind((0, s.default)(a))),
            a
          );
        }
        (0, n.default)(t, e);
        var a = t.prototype;
        return (
          (a.componentDidMount = function() {
            if (
              (this.state.isVisible &&
                "function" == typeof this.props.onStartLoad &&
                this.props.onStartLoad({ wasCached: p(this.props) }),
              this.isCritical)
            ) {
              var e = this.imageRef.current;
              e && e.complete && this.handleImageLoaded();
            }
          }),
          (a.componentWillUnmount = function() {
            this.cleanUpListeners && this.cleanUpListeners();
          }),
          (a.handleRef = function(e) {
            var t = this;
            this.useIOSupport &&
              e &&
              (this.cleanUpListeners = I(e, function() {
                var e = p(t.props);
                t.state.isVisible ||
                  "function" != typeof t.props.onStartLoad ||
                  t.props.onStartLoad({ wasCached: e }),
                  t.setState({ isVisible: !0 }, function() {
                    return t.setState({
                      imgLoaded: e,
                      imgCached: !!t.imageRef.current.currentSrc
                    });
                  });
              }));
          }),
          (a.handleImageLoaded = function() {
            var e, t, a;
            (e = this.props),
              (t = u(e)),
              (a = f(t)),
              (g[a] = !0),
              this.setState({ imgLoaded: !0 }),
              this.props.onLoad && this.props.onLoad();
          }),
          (a.render = function() {
            var e = u(this.props),
              t = e.title,
              a = e.alt,
              i = e.className,
              r = e.style,
              s = void 0 === r ? {} : r,
              n = e.imgStyle,
              o = void 0 === n ? {} : n,
              c = e.placeholderStyle,
              f = void 0 === c ? {} : c,
              g = e.placeholderClassName,
              p = e.fluid,
              h = e.fixed,
              m = e.backgroundColor,
              b = e.durationFadeIn,
              y = e.Tag,
              v = e.itemProp,
              L = e.loading,
              I = e.draggable,
              O = !1 === this.state.fadeIn || this.state.imgLoaded,
              R = !0 === this.state.fadeIn && !this.state.imgCached,
              V = (0, l.default)(
                {
                  opacity: O ? 1 : 0,
                  transition: R ? "opacity " + b + "ms" : "none"
                },
                o
              ),
              N = "boolean" == typeof m ? "lightgray" : m,
              j = { transitionDelay: b + "ms" },
              T = (0, l.default)(
                { opacity: this.state.imgLoaded ? 0 : 1 },
                R && j,
                {},
                o,
                {},
                f
              ),
              P = {
                title: t,
                alt: this.state.isVisible ? "" : a,
                style: T,
                className: g,
                itemProp: v
              };
            if (p) {
              var W = p,
                q = W[0];
              return d.default.createElement(
                y,
                {
                  className: (i || "") + " gatsby-image-wrapper",
                  style: (0, l.default)(
                    { position: "relative", overflow: "hidden" },
                    s
                  ),
                  ref: this.handleRef,
                  key: "fluid-" + JSON.stringify(q.srcSet)
                },
                d.default.createElement(y, {
                  style: {
                    width: "100%",
                    paddingBottom: 100 / q.aspectRatio + "%"
                  }
                }),
                N &&
                  d.default.createElement(y, {
                    title: t,
                    style: (0, l.default)(
                      {
                        backgroundColor: N,
                        position: "absolute",
                        top: 0,
                        bottom: 0,
                        opacity: this.state.imgLoaded ? 0 : 1,
                        right: 0,
                        left: 0
                      },
                      R && j
                    )
                  }),
                q.base64 &&
                  d.default.createElement(C, {
                    src: q.base64,
                    spreadProps: P,
                    imageVariants: W,
                    generateSources: w
                  }),
                q.tracedSVG &&
                  d.default.createElement(C, {
                    src: q.tracedSVG,
                    spreadProps: P,
                    imageVariants: W,
                    generateSources: E
                  }),
                this.state.isVisible &&
                  d.default.createElement(
                    "picture",
                    null,
                    S(W),
                    d.default.createElement(z, {
                      alt: a,
                      title: t,
                      sizes: q.sizes,
                      src: q.src,
                      crossOrigin: this.props.crossOrigin,
                      srcSet: q.srcSet,
                      style: V,
                      ref: this.imageRef,
                      onLoad: this.handleImageLoaded,
                      onError: this.props.onError,
                      onClick: this.props.onClick,
                      itemProp: v,
                      loading: L,
                      draggable: I
                    })
                  ),
                this.addNoScript &&
                  d.default.createElement("noscript", {
                    dangerouslySetInnerHTML: {
                      __html: k(
                        (0, l.default)({ alt: a, title: t, loading: L }, q, {
                          imageVariants: W
                        })
                      )
                    }
                  })
              );
            }
            if (h) {
              var x = h,
                G = x[0],
                M = (0, l.default)(
                  {
                    position: "relative",
                    overflow: "hidden",
                    display: "inline-block",
                    width: G.width,
                    height: G.height
                  },
                  s
                );
              return (
                "inherit" === s.display && delete M.display,
                d.default.createElement(
                  y,
                  {
                    className: (i || "") + " gatsby-image-wrapper",
                    style: M,
                    ref: this.handleRef,
                    key: "fixed-" + JSON.stringify(G.srcSet)
                  },
                  N &&
                    d.default.createElement(y, {
                      title: t,
                      style: (0, l.default)(
                        {
                          backgroundColor: N,
                          width: G.width,
                          opacity: this.state.imgLoaded ? 0 : 1,
                          height: G.height
                        },
                        R && j
                      )
                    }),
                  G.base64 &&
                    d.default.createElement(C, {
                      src: G.base64,
                      spreadProps: P,
                      imageVariants: x,
                      generateSources: w
                    }),
                  G.tracedSVG &&
                    d.default.createElement(C, {
                      src: G.tracedSVG,
                      spreadProps: P,
                      imageVariants: x,
                      generateSources: E
                    }),
                  this.state.isVisible &&
                    d.default.createElement(
                      "picture",
                      null,
                      S(x),
                      d.default.createElement(z, {
                        alt: a,
                        title: t,
                        width: G.width,
                        height: G.height,
                        sizes: G.sizes,
                        src: G.src,
                        crossOrigin: this.props.crossOrigin,
                        srcSet: G.srcSet,
                        style: V,
                        ref: this.imageRef,
                        onLoad: this.handleImageLoaded,
                        onError: this.props.onError,
                        onClick: this.props.onClick,
                        itemProp: v,
                        loading: L,
                        draggable: I
                      })
                    ),
                  this.addNoScript &&
                    d.default.createElement("noscript", {
                      dangerouslySetInnerHTML: {
                        __html: k(
                          (0, l.default)({ alt: a, title: t, loading: L }, G, {
                            imageVariants: x
                          })
                        )
                      }
                    })
                )
              );
            }
            return null;
          }),
          t
        );
      })(d.default.Component);
      O.defaultProps = {
        fadeIn: !0,
        durationFadeIn: 500,
        alt: "",
        Tag: "div",
        loading: "lazy"
      };
      var R = c.default.shape({
          width: c.default.number.isRequired,
          height: c.default.number.isRequired,
          src: c.default.string.isRequired,
          srcSet: c.default.string.isRequired,
          base64: c.default.string,
          tracedSVG: c.default.string,
          srcWebp: c.default.string,
          srcSetWebp: c.default.string,
          media: c.default.string
        }),
        V = c.default.shape({
          aspectRatio: c.default.number.isRequired,
          src: c.default.string.isRequired,
          srcSet: c.default.string.isRequired,
          sizes: c.default.string.isRequired,
          base64: c.default.string,
          tracedSVG: c.default.string,
          srcWebp: c.default.string,
          srcSetWebp: c.default.string,
          media: c.default.string
        });
      O.propTypes = {
        resolutions: R,
        sizes: V,
        fixed: c.default.oneOfType([R, c.default.arrayOf(R)]),
        fluid: c.default.oneOfType([V, c.default.arrayOf(V)]),
        fadeIn: c.default.bool,
        durationFadeIn: c.default.number,
        title: c.default.string,
        alt: c.default.string,
        className: c.default.oneOfType([c.default.string, c.default.object]),
        critical: c.default.bool,
        crossOrigin: c.default.oneOfType([c.default.string, c.default.bool]),
        style: c.default.object,
        imgStyle: c.default.object,
        placeholderStyle: c.default.object,
        placeholderClassName: c.default.string,
        backgroundColor: c.default.oneOfType([
          c.default.string,
          c.default.bool
        ]),
        onLoad: c.default.func,
        onError: c.default.func,
        onClick: c.default.func,
        onStartLoad: c.default.func,
        Tag: c.default.string,
        itemProp: c.default.string,
        loading: c.default.oneOf(["auto", "lazy", "eager"]),
        draggable: c.default.bool
      };
      var N = O;
      t.default = N;
    }
  }
]);
//# sourceMappingURL=component---src-pages-about-js-fdf3b58dfad6a781625b.js.map
