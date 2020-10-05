(this["webpackJsonpheroes-app"] = this["webpackJsonpheroes-app"] || []).push([
  [0],
  {
    23: function (e, a, t) {
      e.exports = t(46);
    },
    45: function (e, a, t) {},
    46: function (e, a, t) {
      "use strict";
      t.r(a);
      var r = t(0),
        n = t.n(r),
        c = t(20),
        l = t.n(c),
        s = t(7),
        i = (0, t(0).createContext)(),
        o = t(9),
        m = "[auth= login",
        u = "[auth logout",
        p = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            a = arguments.length > 1 ? arguments[1] : void 0;
          switch (a.type) {
            case m:
              return Object(o.a)(
                Object(o.a)({}, a.payload),
                {},
                { logged: !0 }
              );
            case u:
              return { logged: !1 };
            default:
              return e;
          }
        },
        h = t(3),
        d = t(1),
        v = function (e) {
          var a = e.history,
            t = Object(r.useState)(""),
            c = Object(s.a)(t, 2),
            l = c[0],
            o = c[1],
            u = Object(r.useContext)(i).dispatch;
          return n.a.createElement(
            "div",
            {
              className:
                "login card w-50 text-center ms-5 animate__animated animate__fadeIn text-white bg-dark",
            },
            n.a.createElement(
              "div",
              { className: "card-body" },
              n.a.createElement(
                "form",
                {
                  className: "container mt-3",
                  onSubmit: function (e) {
                    e.preventDefault();
                    var t = localStorage.getItem("lastPath") || "/";
                    u({ type: m, payload: { name: l } }), a.replace(t);
                  },
                },
                n.a.createElement(
                  "div",
                  { className: "input-group mb-3" },
                  n.a.createElement("input", {
                    type: "text",
                    className: "form-control",
                    placeholder: "Your name",
                    name: "name",
                    onChange: function (e) {
                      return o(e.target.value);
                    },
                    autoComplete: "off",
                    autoFocus: !0,
                    required: !0,
                  }),
                  n.a.createElement(
                    "div",
                    { className: "input-group-append" },
                    n.a.createElement(
                      "button",
                      { className: "btn btn-primary", type: "submit" },
                      "Login!"
                    )
                  )
                )
              )
            )
          );
        },
        b = [
          {
            id: "dc-batman",
            superhero: "Batman",
            publisher: "DC Comics",
            alter_ego: "Bruce Wayne",
            first_appearance: "Detective Comics #27",
            characters: "Bruce Wayne",
          },
          {
            id: "dc-superman",
            superhero: "Superman",
            publisher: "DC Comics",
            alter_ego: "Kal-El",
            first_appearance: "Action Comics #1",
            characters: "Kal-El",
          },
          {
            id: "dc-flash",
            superhero: "Flash",
            publisher: "DC Comics",
            alter_ego: "Jay Garrick",
            first_appearance: "Flash Comics #1",
            characters: "Jay Garrick, Barry Allen, Wally West, Bart Allen",
          },
          {
            id: "dc-green",
            superhero: "Green Lantern",
            publisher: "DC Comics",
            alter_ego: "Alan Scott",
            first_appearance: "All-American Comics #16",
            characters:
              "Alan Scott, Hal Jordan, Guy Gardner, John Stewart, Kyle Raynor, Jade, Sinestro, Simon Baz",
          },
          {
            id: "dc-arrow",
            superhero: "Green Arrow",
            publisher: "DC Comics",
            alter_ego: "Oliver Queen",
            first_appearance: "More Fun Comics #73",
            characters: "Oliver Queen",
          },
          {
            id: "dc-wonder",
            superhero: "Wonder Woman",
            publisher: "DC Comics",
            alter_ego: "Princess Diana",
            first_appearance: "All Star Comics #8",
            characters: "Princess Diana",
          },
          {
            id: "dc-martian",
            superhero: "Martian Manhunter",
            publisher: "DC Comics",
            alter_ego: "J'onn J'onzz",
            first_appearance: "Detective Comics #225",
            characters: "Martian Manhunter",
          },
          {
            id: "dc-robin",
            superhero: "Robin/Nightwing",
            publisher: "DC Comics",
            alter_ego: "Dick Grayson",
            first_appearance: "Detective Comics #38",
            characters: "Dick Grayson",
          },
          {
            id: "dc-blue",
            superhero: "Blue Beetle",
            publisher: "DC Comics",
            alter_ego: "Dan Garret",
            first_appearance: "Mystery Men Comics #1",
            characters: "Dan Garret, Ted Kord, Jaime Reyes",
          },
          {
            id: "dc-black",
            superhero: "Black Canary",
            publisher: "DC Comics",
            alter_ego: "Dinah Drake",
            first_appearance: "Flash Comics #86",
            characters: "Dinah Drake, Dinah Lance",
          },
          {
            id: "marvel-spider",
            superhero: "Spider Man",
            publisher: "Marvel Comics",
            alter_ego: "Peter Parker",
            first_appearance: "Amazing Fantasy #15",
            characters: "Peter Parker",
          },
          {
            id: "marvel-captain",
            superhero: "Captain America",
            publisher: "Marvel Comics",
            alter_ego: "Steve Rogers",
            first_appearance: "Captain America Comics #1",
            characters: "Steve Rogers",
          },
          {
            id: "marvel-iron",
            superhero: "Iron Man",
            publisher: "Marvel Comics",
            alter_ego: "Tony Stark",
            first_appearance: "Tales of Suspense #39",
            characters: "Tony Stark",
          },
          {
            id: "marvel-thor",
            superhero: "Thor",
            publisher: "Marvel Comics",
            alter_ego: "Thor Odinson",
            first_appearance: "Journey into Myster #83",
            characters: "Thor Odinson",
          },
          {
            id: "marvel-hulk",
            superhero: "Hulk",
            publisher: "Marvel Comics",
            alter_ego: "Bruce Banner",
            first_appearance: "The Incredible Hulk #1",
            characters: "Bruce Banner",
          },
          {
            id: "marvel-wolverine",
            superhero: "Wolverine",
            publisher: "Marvel Comics",
            alter_ego: "James Howlett",
            first_appearance: "The Incredible Hulk #180",
            characters: "James Howlett",
          },
          {
            id: "marvel-daredevil",
            superhero: "Daredevil",
            publisher: "Marvel Comics",
            alter_ego: "Matthew Michael Murdock",
            first_appearance: "Daredevil #1",
            characters: "Matthew Michael Murdock",
          },
          {
            id: "marvel-hawkeye",
            superhero: "Hawkeye",
            publisher: "Marvel Comics",
            alter_ego: "Clinton Francis Barton",
            first_appearance: "Tales of Suspense #57",
            characters: "Clinton Francis Barton",
          },
          {
            id: "marvel-cyclops",
            superhero: "Cyclops",
            publisher: "Marvel Comics",
            alter_ego: "Scott Summers",
            first_appearance: "X-Men #1",
            characters: "Scott Summers",
          },
          {
            id: "marvel-silver",
            superhero: "Silver Surfer",
            publisher: "Marvel Comics",
            alter_ego: "Norrin Radd",
            first_appearance: "The Fantastic Four #48",
            characters: "Norrin Radd",
          },
        ],
        f = function (e) {
          var a = e.id,
            t = e.superhero,
            r = e.alter_ego,
            c = e.first_appearance;
          return n.a.createElement(
            "div",
            { className: "card hero ms-3 animate__animated animate__fadeIn" },
            n.a.createElement(
              "div",
              { className: "row no-gutters" },
              n.a.createElement(
                "div",
                { className: "col-md-4" },
                n.a.createElement("img", {
                  src: "./assets/heroes/".concat(a, ".jpg"),
                  className: "card-img",
                  alt: t,
                })
              ),
              n.a.createElement(
                "div",
                { className: "col-md-8" },
                n.a.createElement(
                  "div",
                  { className: "card-body" },
                  n.a.createElement(
                    "h5",
                    { className: "card-title" },
                    " ",
                    t,
                    " "
                  ),
                  n.a.createElement(
                    "p",
                    { className: "card-text" },
                    " ",
                    r,
                    " "
                  ),
                  n.a.createElement(
                    "p",
                    { className: "card-text" },
                    n.a.createElement(
                      "small",
                      { className: "text-muted" },
                      " ",
                      c,
                      " "
                    )
                  ),
                  n.a.createElement(h.b, { to: "./hero/".concat(a) }, "More...")
                )
              )
            )
          );
        },
        E = function (e) {
          var a = e.publisher,
            t = Object(r.useMemo)(
              function () {
                return (function (e) {
                  if (!["DC Comics", "Marvel Comics"].includes(e))
                    throw new Error(
                      "Publisher must be either 'DC Comics' or 'Marvel Comics'"
                    );
                  return b.filter(function (a) {
                    return a.publisher === e;
                  });
                })(a);
              },
              [a]
            );
          return n.a.createElement(
            "div",
            { className: "card-columns animate__animated animate__fadeIn" },
            t.map(function (e) {
              return n.a.createElement(f, Object.assign({ key: e.id }, e));
            })
          );
        },
        g = function (e) {
          e.publisher;
          return n.a.createElement(
            "div",
            null,
            n.a.createElement("hr", null),
            n.a.createElement(E, { publisher: "DC Comics" })
          );
        },
        C = function (e) {
          var a = e.history,
            t = Object(d.i)().heroId,
            c = Object(r.useMemo)(
              function () {
                return (
                  (e = t),
                  b.find(function (a) {
                    return a.id === e;
                  })
                );
                var e;
              },
              [t]
            );
          if (!c) return n.a.createElement(d.a, { to: "/" });
          var l = c.superhero,
            s = c.publisher,
            i = c.alter_ego,
            o = c.characters,
            m = c.first_appearance;
          return n.a.createElement(
            "div",
            { className: "row mt-5" },
            n.a.createElement(
              "div",
              { className: "col-4" },
              n.a.createElement("img", {
                src: "../assets/heroes/".concat(t, ".jpg"),
                alt: l,
                className:
                  "img-thumbnail animate__animated animate__fadeInLeft",
              })
            ),
            n.a.createElement(
              "div",
              { className: "col-8 animate__animated animate__fadeIn" },
              n.a.createElement(
                "h3",
                { className: "p-3 mb-2 bg-dark text-white" },
                " ",
                l,
                " "
              ),
              n.a.createElement(
                "ul",
                { className: "list-group list-group-flush" },
                n.a.createElement(
                  "li",
                  { className: "list-group-item" },
                  " ",
                  n.a.createElement("b", null, " Alter ego: "),
                  " ",
                  i,
                  " "
                ),
                n.a.createElement(
                  "li",
                  { className: "list-group-item" },
                  " ",
                  n.a.createElement("b", null, " Publisher: "),
                  " ",
                  s,
                  " "
                ),
                n.a.createElement(
                  "li",
                  { className: "list-group-item" },
                  " ",
                  n.a.createElement("b", null, " First appearance: "),
                  " ",
                  m,
                  " "
                ),
                n.a.createElement(
                  "li",
                  { className: "list-group-item" },
                  n.a.createElement("h5", null, " Character names: "),
                  n.a.createElement("p", null, " ", o, " "),
                  n.a.createElement(
                    "button",
                    {
                      className: "btn btn-outline-info",
                      onClick: function () {
                        a.length <= 2 ? a.push("/") : a.goBack();
                      },
                    },
                    "Return"
                  )
                )
              )
            )
          );
        },
        _ = function () {
          return n.a.createElement(
            "div",
            null,
            n.a.createElement("hr", null),
            n.a.createElement(E, { publisher: "Marvel Comics" })
          );
        },
        N = t(22),
        y = t.n(N),
        k = t(11),
        M = function (e) {
          var a = e.history,
            t = Object(d.h)(),
            c = y.a.parse(t.search).q,
            l = void 0 === c ? "" : c,
            i = (function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                a = Object(r.useState)(e),
                t = Object(s.a)(a, 2),
                n = t[0],
                c = t[1],
                l = function () {
                  c(e);
                },
                i = function (e) {
                  var a = e.target;
                  c(
                    Object(o.a)(
                      Object(o.a)({}, n),
                      {},
                      Object(k.a)({}, a.name, a.value)
                    )
                  );
                };
              return [n, i, l];
            })({ searchText: l }),
            m = Object(s.a)(i, 2),
            u = m[0],
            p = m[1],
            h = u.searchText,
            v = Object(r.useMemo)(
              function () {
                return (function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : "";
                  return "" === e
                    ? []
                    : ((e = e.toLocaleLowerCase()),
                      b.filter(function (a) {
                        return a.superhero.toLocaleLowerCase().includes(e);
                      }));
                })(l);
              },
              [l]
            );
          return n.a.createElement(
            "div",
            null,
            n.a.createElement(
              "div",
              {
                className:
                  "card text-center ms-3 animate__animated animate__fadeIn text-white bg-dark mb-3",
              },
              n.a.createElement(
                "div",
                { className: "card-body" },
                n.a.createElement(
                  "form",
                  {
                    className: "container mt-3",
                    onSubmit: function (e) {
                      e.preventDefault(), a.push("?q=".concat(h));
                    },
                  },
                  n.a.createElement(
                    "div",
                    { className: "input-group mb-3" },
                    n.a.createElement("input", {
                      type: "text",
                      placeholder: "Hero name",
                      className: "form-control",
                      name: "searchText",
                      autoComplete: "off",
                      value: h,
                      onChange: p,
                    }),
                    n.a.createElement(
                      "div",
                      { className: "input-group-append" },
                      n.a.createElement(
                        "button",
                        { className: "btn btn-primary", type: "submit" },
                        "Search!"
                      )
                    )
                  )
                )
              )
            ),
            "" !== l &&
              0 === v.length &&
              n.a.createElement(
                "div",
                { className: "alert alert-danger" },
                "There are no heroes with ",
                l
              ),
            n.a.createElement(
              "div",
              { className: "card-columns" },
              v.map(function (e) {
                return n.a.createElement(f, Object.assign({ key: e.id }, e));
              })
            )
          );
        },
        O = function () {
          var e = Object(r.useContext)(i),
            a = e.user.name,
            t = e.dispatch,
            c = Object(d.g)();
          return n.a.createElement(
            "nav",
            { className: "navbar navbar-expand-sm navbar-dark bg-dark" },
            n.a.createElement("div", { className: "navbar-brand" }, "Universe"),
            n.a.createElement(
              "div",
              { className: "navbar-collapse" },
              n.a.createElement(
                "div",
                { className: "navbar-nav" },
                n.a.createElement(
                  h.c,
                  {
                    activeClassName: "active",
                    className: "nav-item nav-link",
                    exact: !0,
                    to: "/marvel",
                  },
                  "Marvel"
                ),
                n.a.createElement(
                  h.c,
                  {
                    activeClassName: "active",
                    className: "nav-item nav-link",
                    exact: !0,
                    to: "/dc",
                  },
                  "DC"
                ),
                n.a.createElement(
                  h.c,
                  {
                    activeClassName: "active",
                    className: "nav-item nav-link",
                    exact: !0,
                    to: "/search",
                  },
                  "Search"
                )
              )
            ),
            n.a.createElement(
              "div",
              {
                className:
                  "navbar-collapse collapse w-100 order-3 dual-collapse2",
              },
              n.a.createElement(
                "ul",
                { className: "navbar-nav ml-auto" },
                n.a.createElement(
                  "span",
                  { className: "nav-item nav-link text-info" },
                  a
                ),
                n.a.createElement(
                  "button",
                  {
                    className: "nav-item nav-link btn",
                    onClick: function () {
                      c.replace("/login"), t({ type: u });
                    },
                  },
                  "Logout"
                )
              )
            )
          );
        },
        D = function () {
          return n.a.createElement(
            n.a.Fragment,
            null,
            n.a.createElement(O, null),
            n.a.createElement(
              "div",
              { className: "container mt-5" },
              n.a.createElement(
                d.d,
                null,
                n.a.createElement(d.b, {
                  exact: !0,
                  path: "/marvel",
                  component: _,
                }),
                n.a.createElement(d.b, {
                  exact: !0,
                  path: "/hero/:heroId",
                  component: C,
                }),
                n.a.createElement(d.b, {
                  exact: !0,
                  path: "/dc",
                  component: g,
                }),
                n.a.createElement(d.b, {
                  exact: !0,
                  path: "/search",
                  component: M,
                }),
                n.a.createElement(d.a, { to: "/marvel" })
              )
            )
          );
        },
        S = t(12),
        j = function (e) {
          var a = e.isAuthenticated,
            t = e.component,
            r = Object(S.a)(e, ["isAuthenticated", "component"]);
          return (
            localStorage.setItem("lastPath", r.location.pathname),
            n.a.createElement(
              d.b,
              Object.assign({}, r, {
                component: function (e) {
                  return a
                    ? n.a.createElement(t, e)
                    : n.a.createElement(d.a, { to: "/login" });
                },
              })
            )
          );
        },
        x = function (e) {
          var a = e.isAuthenticated,
            t = e.component,
            r = Object(S.a)(e, ["isAuthenticated", "component"]);
          return n.a.createElement(
            d.b,
            Object.assign({}, r, {
              component: function (e) {
                return a
                  ? n.a.createElement(d.a, { to: "/" })
                  : n.a.createElement(t, e);
              },
            })
          );
        },
        w = function () {
          var e = Object(r.useContext)(i).user.logged;
          return n.a.createElement(
            h.a,
            null,
            n.a.createElement(
              "div",
              null,
              n.a.createElement(
                d.d,
                null,
                n.a.createElement(x, {
                  exact: !0,
                  path: "/login",
                  component: v,
                  isAuthenticated: e,
                }),
                n.a.createElement(j, {
                  path: "/",
                  component: D,
                  isAuthenticated: e,
                })
              )
            )
          );
        },
        A = function () {
          var e = Object(r.useReducer)(p, {}, function () {
              return JSON.parse(localStorage.getItem("user")) || { logged: !1 };
            }),
            a = Object(s.a)(e, 2),
            t = a[0],
            c = a[1];
          return (
            Object(r.useEffect)(
              function () {
                localStorage.setItem("user", JSON.stringify(t));
              },
              [t]
            ),
            n.a.createElement(
              i.Provider,
              { value: { user: t, dispatch: c } },
              n.a.createElement(w, null)
            )
          );
        };
      t(45);
      l.a.render(n.a.createElement(A, null), document.getElementById("root"));
    },
  },
  [[23, 1, 2]],
]);
//# sourceMappingURL=main.aa677b50.chunk.js.map
