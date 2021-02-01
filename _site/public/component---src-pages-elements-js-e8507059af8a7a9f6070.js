(window.webpackJsonp = window.webpackJsonp || []).push([
  [8],
  {
    "+7fW": function(e, t, a) {},
    "9eSz": function(e, t, a) {
      "use strict";
      var l = a("5NKs");
      (t.__esModule = !0), (t.default = void 0);
      var n,
        i = l(a("v06X")),
        r = l(a("XEEL")),
        s = l(a("uDP2")),
        c = l(a("j8BX")),
        o = l(a("q1tI")),
        m = l(a("17x9")),
        u = function(e) {
          var t = (0, c.default)({}, e),
            a = t.resolutions,
            l = t.sizes,
            n = t.critical;
          return (
            a && ((t.fixed = a), delete t.resolutions),
            l && ((t.fluid = l), delete t.sizes),
            n && (t.loading = "eager"),
            t.fluid && (t.fluid = y([].concat(t.fluid))),
            t.fixed && (t.fixed = y([].concat(t.fixed))),
            t
          );
        },
        d = function(e) {
          var t = e.fluid,
            a = e.fixed;
          return ((t && t[0]) || (a && a[0])).src;
        },
        f = Object.create({}),
        p = function(e) {
          var t = u(e),
            a = d(t);
          return f[a] || !1;
        },
        g =
          "undefined" != typeof HTMLImageElement &&
          "loading" in HTMLImageElement.prototype,
        E = "undefined" != typeof window,
        h = E && window.IntersectionObserver,
        b = new WeakMap();
      function v(e) {
        return e.map(function(e) {
          var t = e.src,
            a = e.srcSet,
            l = e.srcSetWebp,
            n = e.media,
            i = e.sizes;
          return o.default.createElement(
            o.default.Fragment,
            { key: t },
            l &&
              o.default.createElement("source", {
                type: "image/webp",
                media: n,
                srcSet: l,
                sizes: i
              }),
            o.default.createElement("source", { media: n, srcSet: a, sizes: i })
          );
        });
      }
      function y(e) {
        var t = [],
          a = [];
        return (
          e.forEach(function(e) {
            return (e.media ? t : a).push(e);
          }),
          [].concat(t, a)
        );
      }
      function N(e) {
        return e.map(function(e) {
          var t = e.src,
            a = e.media,
            l = e.tracedSVG;
          return o.default.createElement("source", {
            key: t,
            media: a,
            srcSet: l
          });
        });
      }
      function S(e) {
        return e.map(function(e) {
          var t = e.src,
            a = e.media,
            l = e.base64;
          return o.default.createElement("source", {
            key: t,
            media: a,
            srcSet: l
          });
        });
      }
      function w(e, t) {
        var a = e.srcSet,
          l = e.srcSetWebp,
          n = e.media,
          i = e.sizes;
        return (
          "<source " +
          (t ? "type='image/webp' " : "") +
          (n ? 'media="' + n + '" ' : "") +
          'srcset="' +
          (t ? l : a) +
          '" ' +
          (i ? 'sizes="' + i + '" ' : "") +
          "/>"
        );
      }
      var I = function(e, t) {
          var a =
            (void 0 === n &&
              "undefined" != typeof window &&
              window.IntersectionObserver &&
              (n = new window.IntersectionObserver(
                function(e) {
                  e.forEach(function(e) {
                    if (b.has(e.target)) {
                      var t = b.get(e.target);
                      (e.isIntersecting || e.intersectionRatio > 0) &&
                        (n.unobserve(e.target), b.delete(e.target), t());
                    }
                  });
                },
                { rootMargin: "200px" }
              )),
            n);
          return (
            a && (a.observe(e), b.set(e, t)),
            function() {
              a.unobserve(e), b.delete(e);
            }
          );
        },
        L = function(e) {
          var t = e.src ? 'src="' + e.src + '" ' : 'src="" ',
            a = e.sizes ? 'sizes="' + e.sizes + '" ' : "",
            l = e.srcSet ? 'srcset="' + e.srcSet + '" ' : "",
            n = e.title ? 'title="' + e.title + '" ' : "",
            i = e.alt ? 'alt="' + e.alt + '" ' : 'alt="" ',
            r = e.width ? 'width="' + e.width + '" ' : "",
            s = e.height ? 'height="' + e.height + '" ' : "",
            c = e.crossOrigin ? 'crossorigin="' + e.crossOrigin + '" ' : "",
            o = e.loading ? 'loading="' + e.loading + '" ' : "",
            m = e.draggable ? 'draggable="' + e.draggable + '" ' : "";
          return (
            "<picture>" +
            e.imageVariants
              .map(function(e) {
                return (e.srcSetWebp ? w(e, !0) : "") + w(e);
              })
              .join("") +
            "<img " +
            o +
            r +
            s +
            a +
            l +
            t +
            i +
            n +
            c +
            m +
            'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'
          );
        },
        k = function(e) {
          var t = e.src,
            a = e.imageVariants,
            l = e.generateSources,
            n = e.spreadProps,
            i = o.default.createElement(V, (0, c.default)({ src: t }, n));
          return a.length > 1
            ? o.default.createElement("picture", null, l(a), i)
            : i;
        },
        V = o.default.forwardRef(function(e, t) {
          var a = e.sizes,
            l = e.srcSet,
            n = e.src,
            i = e.style,
            r = e.onLoad,
            m = e.onError,
            u = e.onClick,
            d = e.loading,
            f = e.draggable,
            p = (0, s.default)(e, [
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
          return o.default.createElement(
            "img",
            (0, c.default)({ sizes: a, srcSet: l, src: n }, p, {
              onLoad: r,
              onError: m,
              onClick: u,
              ref: t,
              loading: d,
              draggable: f,
              style: (0, c.default)(
                {
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center"
                },
                i
              )
            })
          );
        });
      V.propTypes = {
        style: m.default.object,
        onError: m.default.func,
        onClick: m.default.func,
        onLoad: m.default.func
      };
      var C = (function(e) {
        function t(t) {
          var a;
          ((a = e.call(this, t) || this).seenBefore = E && p(t)),
            (a.isCritical = "eager" === t.loading || t.critical),
            (a.addNoScript = !(a.isCritical && !t.fadeIn)),
            (a.useIOSupport = !g && h && !a.isCritical && !a.seenBefore);
          var l = a.isCritical || (E && (g || !a.useIOSupport));
          return (
            (a.state = {
              isVisible: l,
              imgLoaded: !1,
              imgCached: !1,
              fadeIn: !a.seenBefore && t.fadeIn
            }),
            (a.imageRef = o.default.createRef()),
            (a.handleImageLoaded = a.handleImageLoaded.bind((0, i.default)(a))),
            (a.handleRef = a.handleRef.bind((0, i.default)(a))),
            a
          );
        }
        (0, r.default)(t, e);
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
              (a = d(t)),
              (f[a] = !0),
              this.setState({ imgLoaded: !0 }),
              this.props.onLoad && this.props.onLoad();
          }),
          (a.render = function() {
            var e = u(this.props),
              t = e.title,
              a = e.alt,
              l = e.className,
              n = e.style,
              i = void 0 === n ? {} : n,
              r = e.imgStyle,
              s = void 0 === r ? {} : r,
              m = e.placeholderStyle,
              d = void 0 === m ? {} : m,
              f = e.placeholderClassName,
              p = e.fluid,
              g = e.fixed,
              E = e.backgroundColor,
              h = e.durationFadeIn,
              b = e.Tag,
              y = e.itemProp,
              w = e.loading,
              I = e.draggable,
              C = !1 === this.state.fadeIn || this.state.imgLoaded,
              O = !0 === this.state.fadeIn && !this.state.imgCached,
              z = (0, c.default)(
                {
                  opacity: C ? 1 : 0,
                  transition: O ? "opacity " + h + "ms" : "none"
                },
                s
              ),
              R = "boolean" == typeof E ? "lightgray" : E,
              q = { transitionDelay: h + "ms" },
              F = (0, c.default)(
                { opacity: this.state.imgLoaded ? 0 : 1 },
                O && q,
                {},
                s,
                {},
                d
              ),
              T = {
                title: t,
                alt: this.state.isVisible ? "" : a,
                style: F,
                className: f,
                itemProp: y
              };
            if (p) {
              var P = p,
                x = P[0];
              return o.default.createElement(
                b,
                {
                  className: (l || "") + " gatsby-image-wrapper",
                  style: (0, c.default)(
                    { position: "relative", overflow: "hidden" },
                    i
                  ),
                  ref: this.handleRef,
                  key: "fluid-" + JSON.stringify(x.srcSet)
                },
                o.default.createElement(b, {
                  style: {
                    width: "100%",
                    paddingBottom: 100 / x.aspectRatio + "%"
                  }
                }),
                R &&
                  o.default.createElement(b, {
                    title: t,
                    style: (0, c.default)(
                      {
                        backgroundColor: R,
                        position: "absolute",
                        top: 0,
                        bottom: 0,
                        opacity: this.state.imgLoaded ? 0 : 1,
                        right: 0,
                        left: 0
                      },
                      O && q
                    )
                  }),
                x.base64 &&
                  o.default.createElement(k, {
                    src: x.base64,
                    spreadProps: T,
                    imageVariants: P,
                    generateSources: S
                  }),
                x.tracedSVG &&
                  o.default.createElement(k, {
                    src: x.tracedSVG,
                    spreadProps: T,
                    imageVariants: P,
                    generateSources: N
                  }),
                this.state.isVisible &&
                  o.default.createElement(
                    "picture",
                    null,
                    v(P),
                    o.default.createElement(V, {
                      alt: a,
                      title: t,
                      sizes: x.sizes,
                      src: x.src,
                      crossOrigin: this.props.crossOrigin,
                      srcSet: x.srcSet,
                      style: z,
                      ref: this.imageRef,
                      onLoad: this.handleImageLoaded,
                      onError: this.props.onError,
                      onClick: this.props.onClick,
                      itemProp: y,
                      loading: w,
                      draggable: I
                    })
                  ),
                this.addNoScript &&
                  o.default.createElement("noscript", {
                    dangerouslySetInnerHTML: {
                      __html: L(
                        (0, c.default)({ alt: a, title: t, loading: w }, x, {
                          imageVariants: P
                        })
                      )
                    }
                  })
              );
            }
            if (g) {
              var j = g,
                B = j[0],
                D = (0, c.default)(
                  {
                    position: "relative",
                    overflow: "hidden",
                    display: "inline-block",
                    width: B.width,
                    height: B.height
                  },
                  i
                );
              return (
                "inherit" === i.display && delete D.display,
                o.default.createElement(
                  b,
                  {
                    className: (l || "") + " gatsby-image-wrapper",
                    style: D,
                    ref: this.handleRef,
                    key: "fixed-" + JSON.stringify(B.srcSet)
                  },
                  R &&
                    o.default.createElement(b, {
                      title: t,
                      style: (0, c.default)(
                        {
                          backgroundColor: R,
                          width: B.width,
                          opacity: this.state.imgLoaded ? 0 : 1,
                          height: B.height
                        },
                        O && q
                      )
                    }),
                  B.base64 &&
                    o.default.createElement(k, {
                      src: B.base64,
                      spreadProps: T,
                      imageVariants: j,
                      generateSources: S
                    }),
                  B.tracedSVG &&
                    o.default.createElement(k, {
                      src: B.tracedSVG,
                      spreadProps: T,
                      imageVariants: j,
                      generateSources: N
                    }),
                  this.state.isVisible &&
                    o.default.createElement(
                      "picture",
                      null,
                      v(j),
                      o.default.createElement(V, {
                        alt: a,
                        title: t,
                        width: B.width,
                        height: B.height,
                        sizes: B.sizes,
                        src: B.src,
                        crossOrigin: this.props.crossOrigin,
                        srcSet: B.srcSet,
                        style: z,
                        ref: this.imageRef,
                        onLoad: this.handleImageLoaded,
                        onError: this.props.onError,
                        onClick: this.props.onClick,
                        itemProp: y,
                        loading: w,
                        draggable: I
                      })
                    ),
                  this.addNoScript &&
                    o.default.createElement("noscript", {
                      dangerouslySetInnerHTML: {
                        __html: L(
                          (0, c.default)({ alt: a, title: t, loading: w }, B, {
                            imageVariants: j
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
      })(o.default.Component);
      C.defaultProps = {
        fadeIn: !0,
        durationFadeIn: 500,
        alt: "",
        Tag: "div",
        loading: "lazy"
      };
      var O = m.default.shape({
          width: m.default.number.isRequired,
          height: m.default.number.isRequired,
          src: m.default.string.isRequired,
          srcSet: m.default.string.isRequired,
          base64: m.default.string,
          tracedSVG: m.default.string,
          srcWebp: m.default.string,
          srcSetWebp: m.default.string,
          media: m.default.string
        }),
        z = m.default.shape({
          aspectRatio: m.default.number.isRequired,
          src: m.default.string.isRequired,
          srcSet: m.default.string.isRequired,
          sizes: m.default.string.isRequired,
          base64: m.default.string,
          tracedSVG: m.default.string,
          srcWebp: m.default.string,
          srcSetWebp: m.default.string,
          media: m.default.string
        });
      C.propTypes = {
        resolutions: O,
        sizes: z,
        fixed: m.default.oneOfType([O, m.default.arrayOf(O)]),
        fluid: m.default.oneOfType([z, m.default.arrayOf(z)]),
        fadeIn: m.default.bool,
        durationFadeIn: m.default.number,
        title: m.default.string,
        alt: m.default.string,
        className: m.default.oneOfType([m.default.string, m.default.object]),
        critical: m.default.bool,
        crossOrigin: m.default.oneOfType([m.default.string, m.default.bool]),
        style: m.default.object,
        imgStyle: m.default.object,
        placeholderStyle: m.default.object,
        placeholderClassName: m.default.string,
        backgroundColor: m.default.oneOfType([
          m.default.string,
          m.default.bool
        ]),
        onLoad: m.default.func,
        onError: m.default.func,
        onClick: m.default.func,
        onStartLoad: m.default.func,
        Tag: m.default.string,
        itemProp: m.default.string,
        loading: m.default.oneOf(["auto", "lazy", "eager"]),
        draggable: m.default.bool
      };
      var R = C;
      t.default = R;
    },
    QdAp: function(e, t, a) {
      "use strict";
      a.r(t);
      var l = a("q1tI"),
        n = a.n(l),
        i = a("Wbzz"),
        r = a("9eSz"),
        s = a.n(r),
        c = a("Bl7J"),
        o = a("vrFN"),
        m =
          (a("+7fW"),
          a("wvC7"),
          function(e, t) {
            var a = e.data,
              l = a.site.siteMetadata.title;
            return n.a.createElement(
              c.a,
              { title: l },
              n.a.createElement(o.a, { title: "Elements" }),
              n.a.createElement(
                "article",
                { className: "post-content page-template no-image" },
                n.a.createElement(
                  "div",
                  { className: "post-content-body" },
                  n.a.createElement(
                    "p",
                    null,
                    "This is",
                    " ",
                    n.a.createElement(
                      "strong",
                      null,
                      n.a.createElement("strong", null, "bold")
                    ),
                    " ",
                    "and this is",
                    " ",
                    n.a.createElement(
                      "strong",
                      null,
                      n.a.createElement("strong", null, "strong")
                    ),
                    ". This is",
                    " ",
                    n.a.createElement(
                      "em",
                      null,
                      n.a.createElement("em", null, "italic")
                    ),
                    " ",
                    "and this is",
                    " ",
                    n.a.createElement(
                      "em",
                      null,
                      n.a.createElement("em", null, "emphasized")
                    ),
                    ". This is ",
                    n.a.createElement("sup", null, "superscript"),
                    "text and this is",
                    " ",
                    n.a.createElement("sub", null, "subscript"),
                    " text. This is ",
                    n.a.createElement("u", null, "underlined"),
                    " and this is code:",
                    " ",
                    n.a.createElement(
                      "code",
                      null,
                      "for (;;) ",
                      "{",
                      " ... ",
                      "}"
                    ),
                    ". Finally, this is a ",
                    n.a.createElement("a", { href: "/" }, "link"),
                    "."
                  ),
                  n.a.createElement(
                    "h2",
                    { id: "heading-level-2" },
                    "Heading Level 2"
                  ),
                  n.a.createElement(
                    "h3",
                    { id: "heading-level-3" },
                    "Heading Level 3"
                  ),
                  n.a.createElement(
                    "h4",
                    { id: "heading-level-4" },
                    "Heading Level 4"
                  ),
                  n.a.createElement(
                    "h5",
                    { id: "heading-level-5" },
                    "Heading Level 5"
                  ),
                  n.a.createElement(
                    "h6",
                    { id: "heading-level-6" },
                    "Heading Level 6"
                  ),
                  n.a.createElement("hr", null),
                  n.a.createElement(
                    "h2",
                    { id: "this-is-a-section" },
                    "This is a section"
                  ),
                  n.a.createElement(
                    "p",
                    null,
                    "Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit tempus accumsan."
                  ),
                  n.a.createElement(
                    "h3",
                    { id: "this-is-a-sub-section" },
                    "This is a sub-section"
                  ),
                  n.a.createElement(
                    "p",
                    null,
                    "Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet."
                  ),
                  n.a.createElement(
                    "h3",
                    { id: "this-is-a-sub-section-1" },
                    "This is a sub-section"
                  ),
                  n.a.createElement(
                    "p",
                    null,
                    "Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet."
                  ),
                  n.a.createElement("hr", null),
                  n.a.createElement("h2", { id: "lists" }, "Lists"),
                  n.a.createElement(
                    "h3",
                    { id: "unordered" },
                    n.a.createElement(
                      "strong",
                      null,
                      n.a.createElement("strong", null, "Unordered")
                    )
                  ),
                  n.a.createElement(
                    "ul",
                    null,
                    n.a.createElement("li", null, "Dolor pulvinar etiam."),
                    n.a.createElement("li", null, "Sagittis lorem eleifend."),
                    n.a.createElement(
                      "li",
                      null,
                      "Felis feugiat dolore viverra."
                    ),
                    n.a.createElement("li", null, "Dolor pulvinar etiam.")
                  ),
                  n.a.createElement("h3", { id: "ordered" }, "Ordered"),
                  n.a.createElement(
                    "ol",
                    null,
                    n.a.createElement("li", null, "Dolor pulvinar etiam."),
                    n.a.createElement(
                      "li",
                      null,
                      "Etiam vel felis at viverra."
                    ),
                    n.a.createElement("li", null, "Felis enim feugiat magna."),
                    n.a.createElement("li", null, "Etiam vel felis nullam."),
                    n.a.createElement("li", null, "Felis enim et tempus.")
                  ),
                  n.a.createElement(
                    "h3",
                    { id: "definition" },
                    n.a.createElement("strong", null, "Definition")
                  ),
                  n.a.createElement(
                    "dl",
                    null,
                    n.a.createElement("dt", null, "Item 1"),
                    n.a.createElement(
                      "dd",
                      null,
                      n.a.createElement(
                        "p",
                        null,
                        "Lorem ipsum dolor vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent."
                      )
                    ),
                    n.a.createElement("dt", null, "Item 2"),
                    n.a.createElement(
                      "dd",
                      null,
                      n.a.createElement(
                        "p",
                        null,
                        "Lorem ipsum dolor vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent."
                      )
                    ),
                    n.a.createElement("dt", null, "Item 3"),
                    n.a.createElement(
                      "dd",
                      null,
                      n.a.createElement(
                        "p",
                        null,
                        "Lorem ipsum dolor vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent."
                      )
                    )
                  ),
                  n.a.createElement("hr", null),
                  n.a.createElement(
                    "h2",
                    { id: "blockquote" },
                    n.a.createElement("strong", null, "Blockquote")
                  ),
                  n.a.createElement(
                    "blockquote",
                    null,
                    "Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan faucibus. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis."
                  ),
                  n.a.createElement("hr", null),
                  n.a.createElement("h2", { id: "images" }, "Images"),
                  n.a.createElement(
                    "figure",
                    { className: "kg-card kg-image-card" },
                    n.a.createElement(s.a, {
                      fluid: a.smallPic.childImageSharp.fluid,
                      className: "kg-image"
                    }),
                    n.a.createElement("figcaption", null, "Regular image")
                  ),
                  n.a.createElement(
                    "figure",
                    { className: "kg-card kg-image-card kg-width-wide" },
                    n.a.createElement(s.a, {
                      fluid: a.medPic.childImageSharp.fluid,
                      className: "kg-image"
                    }),
                    n.a.createElement("figcaption", null, "Large image")
                  ),
                  n.a.createElement(
                    "figure",
                    { className: "kg-card kg-image-card kg-width-full" },
                    n.a.createElement(s.a, {
                      fluid: a.largePic.childImageSharp.fluid,
                      className: "kg-image"
                    }),
                    n.a.createElement("figcaption", null, "Full bleed image")
                  ),
                  n.a.createElement("hr", null),
                  n.a.createElement("h2", { id: "table" }, "Table"),
                  n.a.createElement(
                    "table",
                    null,
                    n.a.createElement(
                      "thead",
                      null,
                      n.a.createElement(
                        "tr",
                        null,
                        n.a.createElement("th", null, "Name"),
                        n.a.createElement("th", null, "Description"),
                        n.a.createElement("th", null, "Price")
                      )
                    ),
                    n.a.createElement(
                      "tbody",
                      null,
                      n.a.createElement(
                        "tr",
                        null,
                        n.a.createElement("td", null, "Item 1"),
                        n.a.createElement(
                          "td",
                          null,
                          "Ante turpis integer aliquet porttitor."
                        ),
                        n.a.createElement("td", null, "29.99")
                      ),
                      n.a.createElement(
                        "tr",
                        null,
                        n.a.createElement("td", null, "Item 2"),
                        n.a.createElement(
                          "td",
                          null,
                          "Vis ac commodo adipiscing arcu aliquet."
                        ),
                        n.a.createElement("td", null, "19.99")
                      ),
                      n.a.createElement(
                        "tr",
                        null,
                        n.a.createElement("td", null, "Item 3"),
                        n.a.createElement(
                          "td",
                          null,
                          " Morbi faucibus arcu accumsan lorem."
                        ),
                        n.a.createElement("td", null, "29.99")
                      ),
                      n.a.createElement(
                        "tr",
                        null,
                        n.a.createElement("td", null, "Item 4"),
                        n.a.createElement(
                          "td",
                          null,
                          "Vitae integer tempus condimentum."
                        ),
                        n.a.createElement("td", null, "19.99")
                      ),
                      n.a.createElement(
                        "tr",
                        null,
                        n.a.createElement("td", null, "Item 5"),
                        n.a.createElement(
                          "td",
                          null,
                          "Ante turpis integer aliquet porttitor."
                        ),
                        n.a.createElement("td", null, "29.99")
                      )
                    ),
                    n.a.createElement(
                      "tfoot",
                      null,
                      n.a.createElement(
                        "tr",
                        null,
                        n.a.createElement("td", { colSpan: 2 }),
                        n.a.createElement("td", null, "100.00")
                      )
                    )
                  ),
                  n.a.createElement("hr", null),
                  n.a.createElement("h2", { id: "buttons" }, "Buttons"),
                  n.a.createElement(
                    "ul",
                    { className: "actions" },
                    n.a.createElement(
                      "li",
                      null,
                      n.a.createElement(
                        "a",
                        { href: "/", className: "button primary" },
                        "Primary"
                      )
                    ),
                    n.a.createElement(
                      "li",
                      null,
                      n.a.createElement(
                        "a",
                        { href: "/", className: "button" },
                        "Default"
                      )
                    )
                  ),
                  n.a.createElement(
                    "ul",
                    { className: "actions" },
                    n.a.createElement(
                      "li",
                      null,
                      n.a.createElement(
                        "a",
                        { href: "/", className: "button primary large" },
                        "Large"
                      )
                    ),
                    n.a.createElement(
                      "li",
                      null,
                      n.a.createElement(
                        "a",
                        { href: "/", className: "button" },
                        "Default"
                      )
                    ),
                    n.a.createElement(
                      "li",
                      null,
                      n.a.createElement(
                        "a",
                        { href: "/", className: "button small" },
                        "Small"
                      )
                    )
                  ),
                  n.a.createElement(
                    "ul",
                    { className: "actions fit" },
                    n.a.createElement(
                      "li",
                      null,
                      n.a.createElement(
                        "a",
                        { href: "/", className: "button primary fit" },
                        "Fit"
                      )
                    ),
                    n.a.createElement(
                      "li",
                      null,
                      n.a.createElement(
                        "a",
                        { href: "/", className: "button fit" },
                        "Fit"
                      )
                    )
                  ),
                  n.a.createElement(
                    "ul",
                    { className: "actions fit small" },
                    n.a.createElement(
                      "li",
                      null,
                      n.a.createElement(
                        "a",
                        { href: "/", className: "button primary fit small" },
                        "Fit + Small"
                      )
                    ),
                    n.a.createElement(
                      "li",
                      null,
                      n.a.createElement(
                        "a",
                        { href: "/", className: "button fit small" },
                        "Fit + Small"
                      )
                    )
                  ),
                  n.a.createElement(
                    "ul",
                    { className: "actions" },
                    n.a.createElement(
                      "li",
                      null,
                      n.a.createElement(
                        "span",
                        { className: "button primary disabled" },
                        "Primary"
                      )
                    ),
                    n.a.createElement(
                      "li",
                      null,
                      n.a.createElement(
                        "span",
                        { className: "button disabled" },
                        "Default"
                      )
                    )
                  ),
                  n.a.createElement("hr", null),
                  n.a.createElement("h2", { id: "forms" }, "Forms"),
                  n.a.createElement(
                    "form",
                    { method: "post", action: "#" },
                    n.a.createElement(
                      "div",
                      { className: "row gtr-uniform" },
                      n.a.createElement(
                        "div",
                        { className: "col-6 col-12-xsmall" },
                        n.a.createElement("input", {
                          type: "text",
                          name: "demo-name",
                          id: "demo-name",
                          defaultValue: !0,
                          placeholder: "Name"
                        })
                      ),
                      n.a.createElement(
                        "div",
                        { className: "col-6 col-12-xsmall" },
                        n.a.createElement("input", {
                          type: "email",
                          name: "demo-email",
                          id: "demo-email",
                          defaultValue: !0,
                          placeholder: "Email"
                        })
                      ),
                      n.a.createElement(
                        "div",
                        { className: "col-12" },
                        n.a.createElement(
                          "select",
                          { name: "demo-category", id: "demo-category" },
                          n.a.createElement(
                            "option",
                            { value: !0 },
                            "- Category -"
                          ),
                          n.a.createElement(
                            "option",
                            { value: 1 },
                            "Manufacturing"
                          ),
                          n.a.createElement("option", { value: 1 }, "Shipping"),
                          n.a.createElement(
                            "option",
                            { value: 1 },
                            "Administration"
                          ),
                          n.a.createElement(
                            "option",
                            { value: 1 },
                            "Human Resources"
                          )
                        )
                      ),
                      n.a.createElement(
                        "div",
                        { className: "col-4 col-12-small" },
                        n.a.createElement("input", {
                          type: "radio",
                          id: "demo-priority-low",
                          name: "demo-priority",
                          defaultChecked: !0
                        }),
                        n.a.createElement(
                          "label",
                          { htmlFor: "demo-priority-low" },
                          "Low"
                        )
                      ),
                      n.a.createElement(
                        "div",
                        { className: "col-4 col-12-small" },
                        n.a.createElement("input", {
                          type: "radio",
                          id: "demo-priority-normal",
                          name: "demo-priority"
                        }),
                        n.a.createElement(
                          "label",
                          { htmlFor: "demo-priority-normal" },
                          "Normal"
                        )
                      ),
                      n.a.createElement(
                        "div",
                        { className: "col-4 col-12-small" },
                        n.a.createElement("input", {
                          type: "radio",
                          id: "demo-priority-high",
                          name: "demo-priority"
                        }),
                        n.a.createElement(
                          "label",
                          { htmlFor: "demo-priority-high" },
                          "High"
                        )
                      ),
                      n.a.createElement(
                        "div",
                        { className: "col-6 col-12-small" },
                        n.a.createElement("input", {
                          type: "checkbox",
                          id: "demo-copy",
                          name: "demo-copy"
                        }),
                        n.a.createElement(
                          "label",
                          { htmlFor: "demo-copy" },
                          "Email me a copy"
                        )
                      ),
                      n.a.createElement(
                        "div",
                        { className: "col-6 col-12-small" },
                        n.a.createElement("input", {
                          type: "checkbox",
                          id: "demo-human",
                          name: "demo-human",
                          defaultChecked: !0
                        }),
                        n.a.createElement(
                          "label",
                          { htmlFor: "demo-human" },
                          "I am a human"
                        )
                      ),
                      n.a.createElement(
                        "div",
                        { className: "col-12" },
                        n.a.createElement("textarea", {
                          name: "demo-message",
                          id: "demo-message",
                          placeholder: "Enter your message",
                          rows: 6,
                          defaultValue: ""
                        })
                      ),
                      n.a.createElement(
                        "div",
                        { className: "col-12" },
                        n.a.createElement(
                          "ul",
                          { className: "actions" },
                          n.a.createElement(
                            "li",
                            null,
                            n.a.createElement("input", {
                              type: "submit",
                              defaultValue: "Send Message",
                              className: "primary"
                            })
                          ),
                          n.a.createElement(
                            "li",
                            null,
                            n.a.createElement("input", {
                              type: "reset",
                              defaultValue: "Reset"
                            })
                          )
                        )
                      )
                    )
                  ),
                  n.a.createElement("h2", { id: "code" }, "Code"),
                  n.a.createElement(
                    "pre",
                    null,
                    n.a.createElement(
                      "code",
                      null,
                      "i = ",
                      n.a.createElement(
                        "span",
                        { style: { color: "rgb(191,90,242)" } },
                        "0"
                      ),
                      ";",
                      "\n",
                      "\n",
                      n.a.createElement(
                        "span",
                        { style: { color: "rgb(10,132,255)" } },
                        "while"
                      ),
                      " (!deck.",
                      n.a.createElement(
                        "span",
                        { style: { color: "rgb(255,214,10)" } },
                        "isInOrder"
                      ),
                      "()) ",
                      "{",
                      "\n",
                      "    ",
                      "print ",
                      n.a.createElement(
                        "span",
                        { style: { color: "rgb(50,215,75)" } },
                        "'Iteration '"
                      ),
                      " + i;",
                      "\n",
                      "    ",
                      "deck.",
                      n.a.createElement(
                        "span",
                        { style: { color: "rgb(255,214,10)" } },
                        "shuffle"
                      ),
                      "();",
                      "\n",
                      "    ",
                      "i++;",
                      "\n",
                      "}",
                      "\n",
                      "\n",
                      "print ",
                      n.a.createElement(
                        "span",
                        { style: { color: "rgb(50,215,75)" } },
                        "'It took '"
                      ),
                      " + i + ",
                      n.a.createElement(
                        "span",
                        { style: { color: "rgb(50,215,75)" } },
                        "' iterations to sort the deck.'"
                      ),
                      ";"
                    )
                  ),
                  n.a.createElement("h2", { id: "grid-system" }, "Grid system"),
                  n.a.createElement(
                    "div",
                    { className: "row" },
                    n.a.createElement(
                      "div",
                      { className: "col-demo col-12" },
                      n.a.createElement("div", null, "12")
                    )
                  ),
                  n.a.createElement(
                    "div",
                    { className: "row" },
                    n.a.createElement(
                      "div",
                      { className: "col-demo col-3" },
                      n.a.createElement("div", null, "3")
                    ),
                    n.a.createElement(
                      "div",
                      { className: "col-demo col-9" },
                      n.a.createElement("div", null, "9")
                    )
                  ),
                  n.a.createElement(
                    "div",
                    { className: "row" },
                    n.a.createElement(
                      "div",
                      { className: "col-demo col-6" },
                      n.a.createElement("div", null, "6")
                    ),
                    n.a.createElement(
                      "div",
                      { className: "col-demo col-6" },
                      n.a.createElement("div", null, "6")
                    )
                  ),
                  n.a.createElement(
                    "div",
                    { className: "row" },
                    n.a.createElement(
                      "div",
                      { className: "col-demo col" },
                      n.a.createElement("div", null, "auto")
                    ),
                    n.a.createElement(
                      "div",
                      { className: "col-demo col" },
                      n.a.createElement("div", null, "auto")
                    ),
                    n.a.createElement(
                      "div",
                      { className: "col-demo col" },
                      n.a.createElement("div", null, "auto")
                    )
                  ),
                  n.a.createElement(
                    "div",
                    { className: "row" },
                    n.a.createElement(
                      "div",
                      { className: "col-demo col" },
                      n.a.createElement("div", null, "auto")
                    ),
                    n.a.createElement(
                      "div",
                      { className: "col-demo col" },
                      n.a.createElement("div", null, "auto")
                    ),
                    n.a.createElement(
                      "div",
                      { className: "col-demo col" },
                      n.a.createElement("div", null, "auto")
                    ),
                    n.a.createElement(
                      "div",
                      { className: "col-demo col" },
                      n.a.createElement("div", null, "auto")
                    )
                  )
                )
              )
            );
          });
      t.default = function(e) {
        return n.a.createElement(i.StaticQuery, {
          query: "1936813552",
          render: function(t) {
            return n.a.createElement(
              m,
              Object.assign({ location: e.location, data: t }, e)
            );
          }
        });
      };
    }
  }
]);
//# sourceMappingURL=component---src-pages-elements-js-e8507059af8a7a9f6070.js.map
