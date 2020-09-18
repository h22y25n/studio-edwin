(window.webpackJsonp = window.webpackJsonp || []).push([
  [11],
  {
    "9eSz": function(e, t, a) {
      "use strict";
      var r = a("5NKs");
      (t.__esModule = !0), (t.default = void 0);
      var i,
        n = r(a("v06X")),
        s = r(a("XEEL")),
        o = r(a("uDP2")),
        l = r(a("j8BX")),
        d = r(a("q1tI")),
        c = r(a("17x9")),
        u = function(e) {
          var t = (0, l.default)({}, e),
            a = t.resolutions,
            r = t.sizes,
            i = t.critical;
          return (
            a && ((t.fixed = a), delete t.resolutions),
            r && ((t.fluid = r), delete t.sizes),
            i && (t.loading = "eager"),
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
        p = Object.create({}),
        g = function(e) {
          var t = u(e),
            a = f(t);
          return p[a] || !1;
        },
        m =
          "undefined" != typeof HTMLImageElement &&
          "loading" in HTMLImageElement.prototype,
        h = "undefined" != typeof window,
        b = h && window.IntersectionObserver,
        y = new WeakMap();
      function S(e) {
        return e.map(function(e) {
          var t = e.src,
            a = e.srcSet,
            r = e.srcSetWebp,
            i = e.media,
            n = e.sizes;
          return d.default.createElement(
            d.default.Fragment,
            { key: t },
            r &&
              d.default.createElement("source", {
                type: "image/webp",
                media: i,
                srcSet: r,
                sizes: n
              }),
            d.default.createElement("source", { media: i, srcSet: a, sizes: n })
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
            r = e.tracedSVG;
          return d.default.createElement("source", {
            key: t,
            media: a,
            srcSet: r
          });
        });
      }
      function w(e) {
        return e.map(function(e) {
          var t = e.src,
            a = e.media,
            r = e.base64;
          return d.default.createElement("source", {
            key: t,
            media: a,
            srcSet: r
          });
        });
      }
      function L(e, t) {
        var a = e.srcSet,
          r = e.srcSetWebp,
          i = e.media,
          n = e.sizes;
        return (
          "<source " +
          (t ? "type='image/webp' " : "") +
          (i ? 'media="' + i + '" ' : "") +
          'srcset="' +
          (t ? r : a) +
          '" ' +
          (n ? 'sizes="' + n + '" ' : "") +
          "/>"
        );
      }
      var I = function(e, t) {
          var a =
            (void 0 === i &&
              "undefined" != typeof window &&
              window.IntersectionObserver &&
              (i = new window.IntersectionObserver(
                function(e) {
                  e.forEach(function(e) {
                    if (y.has(e.target)) {
                      var t = y.get(e.target);
                      (e.isIntersecting || e.intersectionRatio > 0) &&
                        (i.unobserve(e.target), y.delete(e.target), t());
                    }
                  });
                },
                { rootMargin: "200px" }
              )),
            i);
          return (
            a && (a.observe(e), y.set(e, t)),
            function() {
              a.unobserve(e), y.delete(e);
            }
          );
        },
        C = function(e) {
          var t = e.src ? 'src="' + e.src + '" ' : 'src="" ',
            a = e.sizes ? 'sizes="' + e.sizes + '" ' : "",
            r = e.srcSet ? 'srcset="' + e.srcSet + '" ' : "",
            i = e.title ? 'title="' + e.title + '" ' : "",
            n = e.alt ? 'alt="' + e.alt + '" ' : 'alt="" ',
            s = e.width ? 'width="' + e.width + '" ' : "",
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
            s +
            o +
            a +
            r +
            t +
            n +
            i +
            l +
            c +
            'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'
          );
        },
        k = function(e) {
          var t = e.src,
            a = e.imageVariants,
            r = e.generateSources,
            i = e.spreadProps,
            n = d.default.createElement(O, (0, l.default)({ src: t }, i));
          return a.length > 1
            ? d.default.createElement("picture", null, r(a), n)
            : n;
        },
        O = d.default.forwardRef(function(e, t) {
          var a = e.sizes,
            r = e.srcSet,
            i = e.src,
            n = e.style,
            s = e.onLoad,
            c = e.onError,
            u = e.onClick,
            f = e.loading,
            p = e.draggable,
            g = (0, o.default)(e, [
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
            (0, l.default)({ sizes: a, srcSet: r, src: i }, g, {
              onLoad: s,
              onError: c,
              onClick: u,
              ref: t,
              loading: f,
              draggable: p,
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
                n
              )
            })
          );
        });
      O.propTypes = {
        style: c.default.object,
        onError: c.default.func,
        onClick: c.default.func,
        onLoad: c.default.func
      };
      var R = (function(e) {
        function t(t) {
          var a;
          ((a = e.call(this, t) || this).seenBefore = h && g(t)),
            (a.isCritical = "eager" === t.loading || t.critical),
            (a.addNoScript = !(a.isCritical && !t.fadeIn)),
            (a.useIOSupport = !m && b && !a.isCritical && !a.seenBefore);
          var r = a.isCritical || (h && (m || !a.useIOSupport));
          return (
            (a.state = {
              isVisible: r,
              imgLoaded: !1,
              imgCached: !1,
              fadeIn: !a.seenBefore && t.fadeIn
            }),
            (a.imageRef = d.default.createRef()),
            (a.handleImageLoaded = a.handleImageLoaded.bind((0, n.default)(a))),
            (a.handleRef = a.handleRef.bind((0, n.default)(a))),
            a
          );
        }
        (0, s.default)(t, e);
        var a = t.prototype;
        return (
          (a.componentDidMount = function() {
            if (
              (this.state.isVisible &&
                "function" == typeof this.props.onStartLoad &&
                this.props.onStartLoad({ wasCached: g(this.props) }),
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
                var e = g(t.props);
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
              (p[a] = !0),
              this.setState({ imgLoaded: !0 }),
              this.props.onLoad && this.props.onLoad();
          }),
          (a.render = function() {
            var e = u(this.props),
              t = e.title,
              a = e.alt,
              r = e.className,
              i = e.style,
              n = void 0 === i ? {} : i,
              s = e.imgStyle,
              o = void 0 === s ? {} : s,
              c = e.placeholderStyle,
              f = void 0 === c ? {} : c,
              p = e.placeholderClassName,
              g = e.fluid,
              m = e.fixed,
              h = e.backgroundColor,
              b = e.durationFadeIn,
              y = e.Tag,
              v = e.itemProp,
              L = e.loading,
              I = e.draggable,
              R = !1 === this.state.fadeIn || this.state.imgLoaded,
              z = !0 === this.state.fadeIn && !this.state.imgCached,
              N = (0, l.default)(
                {
                  opacity: R ? 1 : 0,
                  transition: z ? "opacity " + b + "ms" : "none"
                },
                o
              ),
              V = "boolean" == typeof h ? "lightgray" : h,
              T = { transitionDelay: b + "ms" },
              j = (0, l.default)(
                { opacity: this.state.imgLoaded ? 0 : 1 },
                z && T,
                {},
                o,
                {},
                f
              ),
              x = {
                title: t,
                alt: this.state.isVisible ? "" : a,
                style: j,
                className: p,
                itemProp: v
              };
            if (g) {
              var P = g,
                q = P[0];
              return d.default.createElement(
                y,
                {
                  className: (r || "") + " gatsby-image-wrapper",
                  style: (0, l.default)(
                    { position: "relative", overflow: "hidden" },
                    n
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
                V &&
                  d.default.createElement(y, {
                    title: t,
                    style: (0, l.default)(
                      {
                        backgroundColor: V,
                        position: "absolute",
                        top: 0,
                        bottom: 0,
                        opacity: this.state.imgLoaded ? 0 : 1,
                        right: 0,
                        left: 0
                      },
                      z && T
                    )
                  }),
                q.base64 &&
                  d.default.createElement(k, {
                    src: q.base64,
                    spreadProps: x,
                    imageVariants: P,
                    generateSources: w
                  }),
                q.tracedSVG &&
                  d.default.createElement(k, {
                    src: q.tracedSVG,
                    spreadProps: x,
                    imageVariants: P,
                    generateSources: E
                  }),
                this.state.isVisible &&
                  d.default.createElement(
                    "picture",
                    null,
                    S(P),
                    d.default.createElement(O, {
                      alt: a,
                      title: t,
                      sizes: q.sizes,
                      src: q.src,
                      crossOrigin: this.props.crossOrigin,
                      srcSet: q.srcSet,
                      style: N,
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
                      __html: C(
                        (0, l.default)({ alt: a, title: t, loading: L }, q, {
                          imageVariants: P
                        })
                      )
                    }
                  })
              );
            }
            if (m) {
              var M = m,
                W = M[0],
                _ = (0, l.default)(
                  {
                    position: "relative",
                    overflow: "hidden",
                    display: "inline-block",
                    width: W.width,
                    height: W.height
                  },
                  n
                );
              return (
                "inherit" === n.display && delete _.display,
                d.default.createElement(
                  y,
                  {
                    className: (r || "") + " gatsby-image-wrapper",
                    style: _,
                    ref: this.handleRef,
                    key: "fixed-" + JSON.stringify(W.srcSet)
                  },
                  V &&
                    d.default.createElement(y, {
                      title: t,
                      style: (0, l.default)(
                        {
                          backgroundColor: V,
                          width: W.width,
                          opacity: this.state.imgLoaded ? 0 : 1,
                          height: W.height
                        },
                        z && T
                      )
                    }),
                  W.base64 &&
                    d.default.createElement(k, {
                      src: W.base64,
                      spreadProps: x,
                      imageVariants: M,
                      generateSources: w
                    }),
                  W.tracedSVG &&
                    d.default.createElement(k, {
                      src: W.tracedSVG,
                      spreadProps: x,
                      imageVariants: M,
                      generateSources: E
                    }),
                  this.state.isVisible &&
                    d.default.createElement(
                      "picture",
                      null,
                      S(M),
                      d.default.createElement(O, {
                        alt: a,
                        title: t,
                        width: W.width,
                        height: W.height,
                        sizes: W.sizes,
                        src: W.src,
                        crossOrigin: this.props.crossOrigin,
                        srcSet: W.srcSet,
                        style: N,
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
                        __html: C(
                          (0, l.default)({ alt: a, title: t, loading: L }, W, {
                            imageVariants: M
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
      R.defaultProps = {
        fadeIn: !0,
        durationFadeIn: 500,
        alt: "",
        Tag: "div",
        loading: "lazy"
      };
      var z = c.default.shape({
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
        N = c.default.shape({
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
      R.propTypes = {
        resolutions: z,
        sizes: N,
        fixed: c.default.oneOfType([z, c.default.arrayOf(z)]),
        fluid: c.default.oneOfType([N, c.default.arrayOf(N)]),
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
      var V = R;
      t.default = V;
    },
    yZlL: function(e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, "pageQuery", function() {
          return u;
        });
      var r = a("9Hrx"),
        i = a("q1tI"),
        n = a.n(i),
        s = a("9eSz"),
        o = a.n(s),
        l = a("Bl7J"),
        d = a("vrFN"),
        c = (function(e) {
          function t() {
            return e.apply(this, arguments) || this;
          }
          return (
            Object(r.a)(t, e),
            (t.prototype.render = function() {
              var e = this.props.data.markdownRemark,
                t = this.props.data.site.siteMetadata.title;
              return n.a.createElement(
                l.a,
                { location: this.props.location, title: t },
                n.a.createElement(d.a, {
                  title: e.frontmatter.title,
                  description: e.frontmatter.description || e.excerpt
                }),
                n.a.createElement(
                  "article",
                  {
                    className:
                      "post-content " + (e.frontmatter.thumbnail || "no-image")
                  },
                  n.a.createElement(
                    "header",
                    { className: "post-content-header" },
                    n.a.createElement(
                      "h1",
                      { className: "post-content-title" },
                      e.frontmatter.title
                    )
                  ),
                  e.frontmatter.description &&
                    n.a.createElement(
                      "p",
                      { className: "post-content-excerpt" },
                      e.frontmatter.description
                    ),
                  e.frontmatter.thumbnail &&
                    n.a.createElement(
                      "div",
                      { className: "post-content-image" },
                      n.a.createElement(o.a, {
                        className: "kg-image",
                        fluid: e.frontmatter.thumbnail.childImageSharp.fluid,
                        alt: e.frontmatter.title
                      })
                    ),
                  n.a.createElement("div", {
                    className: "post-content-body",
                    dangerouslySetInnerHTML: { __html: e.html }
                  }),
                  n.a.createElement("footer", {
                    className: "post-content-footer"
                  })
                )
              );
            }),
            t
          );
        })(n.a.Component);
      t.default = c;
      var u = "3796471250";
    }
  }
]);
//# sourceMappingURL=component---src-templates-blog-post-js-3b459fcd143c8efbbfbd.js.map
