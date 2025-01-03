(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [359], {
        4887: function(n, e, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/[pathPrefix]/[slug]/[[...route]]", function() {
                return t(4964)
            }])
        },
        1870: function(n, e, t) {
            "use strict";
            t.d(e, {
                Z: function() {
                    return f
                }
            });
            var r = t(5893),
                i = t(7294),
                o = t(3663);

            function a(n, e) {
                (null == e || e > n.length) && (e = n.length);
                for (var t = 0, r = new Array(e); t < e; t++) r[t] = n[t];
                return r
            }

            function u(n) {
                return function(n) {
                    if (Array.isArray(n)) return a(n)
                }(n) || function(n) {
                    if ("undefined" !== typeof Symbol && null != n[Symbol.iterator] || null != n["@@iterator"]) return Array.from(n)
                }(n) || function(n, e) {
                    if (!n) return;
                    if ("string" === typeof n) return a(n, e);
                    var t = Object.prototype.toString.call(n).slice(8, -1);
                    "Object" === t && n.constructor && (t = n.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return a(n, e)
                }(n) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var l = {
                100: 100,
                lighter: 100,
                200: 200,
                300: 300,
                normal: 400,
                400: 400,
                500: 500,
                600: 600,
                700: 700,
                bold: 700,
                800: 800,
                bolder: 900,
                900: 900
            };

            function c(n) {
                return Object.keys(l).includes("".concat(n)) ? l[n] : n
            }
            var d = function(n) {
                var e = Object.values(n),
                    t = u(Array.from(new Set(e.filter((function(n) {
                        return Boolean(null === n || void 0 === n ? void 0 : n.fontFamily)
                    })).map((function(n) {
                        return n.fontFamily
                    }))))).filter((function(n) {
                        return !["Arial", "Courier", "Georgia", "Lucida Sans", "Times New Roman", "Trebuchet MS"].includes(n)
                    }));
                if (0 === t.length) return null;
                var r = t.map((function(n) {
                        var t = e.filter((function(e) {
                                return (null === e || void 0 === e ? void 0 : e.fontFamily) === n
                            })).map((function(n) {
                                return n.fontWeight
                            })).map(c).filter((function(n) {
                                return "undefined" !== typeof n
                            })).filter((function(n) {
                                return "number" === typeof n
                            })),
                            r = u(Array.from(new Set(u(t).concat([400])))).sort().join(";");
                        return "".concat(n, ":wght@").concat(r)
                    })).map((function(n) {
                        return n.replace(/\s/g, "+").replace(/%20/g, "+").replace(/'/g, "")
                    })),
                    i = r.length - 1;
                return r[i] = "".concat(r[i], "&display=swap"), r
            };

            function s() {
                var n = (0, o.a)().fonts,
                    e = (0, i.useMemo)((function() {
                        return d(n)
                    }), [n]);
                return (null === e || void 0 === e ? void 0 : e.length) ? (0, r.jsx)("link", {
                    rel: "stylesheet",
                    href: "https://fonts.googleapis.com/css2?family=".concat(e.join("&family=")),
                    media: "all"
                }) : null
            }
            var f = (0, i.memo)(s)
        },
        2064: function(n, e, t) {
            "use strict";
            t.d(e, {
                Z: function() {
                    return j
                }
            });
            var r = t(1633),
                i = t.n(r),
                o = t(9360),
                a = t.n(o),
                u = t(3869);

            function l(n, e) {
                (null == e || e > n.length) && (e = n.length);
                for (var t = 0, r = new Array(e); t < e; t++) r[t] = n[t];
                return r
            }

            function c(n) {
                return function(n) {
                    if (Array.isArray(n)) return l(n)
                }(n) || function(n) {
                    if ("undefined" !== typeof Symbol && null != n[Symbol.iterator] || null != n["@@iterator"]) return Array.from(n)
                }(n) || function(n, e) {
                    if (!n) return;
                    if ("string" === typeof n) return l(n, e);
                    var t = Object.prototype.toString.call(n).slice(8, -1);
                    "Object" === t && n.constructor && (t = n.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return l(n, e)
                }(n) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function d(n) {
                return a().toWords(Number(n))
            }

            function s(n) {
                return a().toWordsOrdinal(Number(n))
            }

            function f(n) {
                return d(n).replace(/,/g, "")
            }

            function m(n) {
                return n.split(/([\s-]+)/).map(i()).join("")
            }

            function v(n) {
                return "00" === n ? "" : d(n)
            }

            function p(n) {
                return 0 === n.length ? "" : "-".concat(m(n))
            }
            var h = [{
                key: "weekday",
                regex: /%E/g
            }, {
                key: "dayOrdinalWords",
                regex: /%dow/g
            }, {
                key: "dayOrdinalWordsTitle",
                regex: /%DOW/g
            }, {
                key: "day",
                regex: /%d/g
            }, {
                key: "yearWords",
                regex: /%yw/g
            }, {
                key: "yearWordsTitle",
                regex: /%YW/g
            }, {
                key: "year",
                regex: /%y/g
            }, {
                key: "hourWords",
                regex: /%hw/g
            }, {
                key: "hourWordsTitle",
                regex: /%HW/g
            }, {
                key: "hour",
                regex: /%h/g
            }, {
                key: "minuteWords",
                regex: /%mw/g
            }, {
                key: "minuteWordsTitle",
                regex: /%MW/g
            }, {
                key: "minute",
                regex: /%m/g
            }, {
                key: "month",
                regex: /%M/g
            }, {
                key: "dayPeriodWords",
                regex: /%bw/g
            }, {
                key: "dayPeriod",
                regex: /%b/g
            }];

            function g(n, e) {
                var t = function(n) {
                        return new Intl.DateTimeFormat("en-US", {
                            weekday: "long",
                            month: "long",
                            day: "numeric",
                            year: "numeric",
                            hour: "numeric",
                            minute: "numeric",
                            hour12: !0,
                            timeZone: "UTC"
                        }).formatToParts(n)
                    }(n),
                    r = function(n) {
                        var e = c(n);
                        return [{
                            sourceKey: "year",
                            key: "yearWords",
                            transform: f
                        }, {
                            sourceKey: "yearWords",
                            key: "yearWordsTitle",
                            transform: m
                        }, {
                            sourceKey: "day",
                            key: "dayOrdinalWords",
                            transform: s
                        }, {
                            sourceKey: "dayOrdinalWords",
                            key: "dayOrdinalWordsTitle",
                            transform: m
                        }, {
                            sourceKey: "hour",
                            key: "hourWords",
                            transform: d
                        }, {
                            sourceKey: "hourWords",
                            key: "hourWordsTitle",
                            transform: m
                        }, {
                            sourceKey: "minute",
                            key: "minuteWords",
                            transform: v
                        }, {
                            sourceKey: "minuteWords",
                            key: "minuteWordsTitle",
                            transform: p
                        }, {
                            sourceKey: "dayPeriod",
                            key: "dayPeriodWords",
                            transform: function(n) {
                                return "AM" === n ? "In The Morning" : "In The Evening"
                            }
                        }].forEach((function(n) {
                            var t = n.sourceKey,
                                r = n.key,
                                i = n.transform,
                                o = e.find((function(n) {
                                    return n.type === t
                                }));
                            o && e.push({
                                type: r,
                                value: i(o.value)
                            })
                        })), e
                    }(t),
                    i = e;
                return h.forEach((function(n) {
                    var e = n.key,
                        t = n.regex;
                    i = i.replace(t, (0, u.Z)(r, e))
                })), i
            }

            function x(n, e, t) {
                return e in n ? Object.defineProperty(n, e, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[e] = t, n
            }
            var b = {
                    short: {
                        month: "numeric",
                        day: "numeric",
                        year: "numeric"
                    },
                    natural: {
                        month: "long",
                        day: "numeric",
                        year: "numeric"
                    },
                    weekday: {
                        weekday: "long",
                        month: "long",
                        day: "numeric",
                        year: "numeric"
                    },
                    verbose: {},
                    ornate: {},
                    verboseDateOnly: {},
                    ornateDateOnly: {},
                    hoursMinutes: {
                        hour: "numeric",
                        minute: "numeric"
                    }
                },
                w = ["verbose", "verboseDateOnly", "ornate", "ornateDateOnly"],
                y = ["short", "hoursMinutes"];

            function j(n, e) {
                if (!n) return null;
                var t, r, i, o = e || "natural";
                if ("string" === typeof n) {
                    var a = n.match(/\d\d:\d\d/) ? n : "".concat(n, " 00:00:00 UTC");
                    t = new Date(a.replace(/-/g, "/"))
                } else t = n;
                if (r = t, !(null != (i = Date) && "undefined" !== typeof Symbol && i[Symbol.hasInstance] ? i[Symbol.hasInstance](r) : r instanceof i) || Number.isNaN(t.valueOf()) || !Number.isFinite(t.valueOf())) return "";
                var u = "";
                if (w.includes(o)) {
                    var l = {
                        verbose: "%E, %M %d, %y at %HW%MW O'Clock",
                        verboseDateOnly: "%E, %M %d, %y",
                        ornate: "%E, %M %DOW, %YW at %HW%MW O'Clock %bw",
                        ornateDateOnly: "%E, %M %DOW, %YW"
                    } [o];
                    "undefined" !== typeof l && (u = g(t, l))
                } else {
                    var c = function(n) {
                            for (var e = 1; e < arguments.length; e++) {
                                var t = null != arguments[e] ? arguments[e] : {},
                                    r = Object.keys(t);
                                "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(n) {
                                    return Object.getOwnPropertyDescriptor(t, n).enumerable
                                })))), r.forEach((function(e) {
                                    x(n, e, t[e])
                                }))
                            }
                            return n
                        }({
                            timeZone: "UTC"
                        }, b[o]),
                        d = y.includes(o) ? void 0 : "en-US";
                    u = t.toLocaleString(d, c).replace(/\//g, ".")
                }
                return u
            }
        },
        3869: function(n, e, t) {
            "use strict";

            function r(n, e) {
                var t = n.find((function(n) {
                    return n.type.toUpperCase() === e.toUpperCase()
                }));
                return t ? t.value : ""
            }
            t.d(e, {
                Z: function() {
                    return r
                }
            })
        },
        4964: function(n, e, t) {
            "use strict";
            t.r(e), t.d(e, {
                default: function() {
                    return Hs
                }
            });
            var r = t(5893),
                i = t(3663),
                o = t(880),
                a = t(9008),
                u = t.n(a),
                l = t(7294),
                c = t(5885),
                d = t(4051),
                s = t.n(d),
                f = t(1163),
                m = t(2779),
                v = t(7283),
                p = t(6748),
                h = t(3359);

            function g(n, e, t) {
                return e in n ? Object.defineProperty(n, e, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[e] = t, n
            }

            function x(n) {
                for (var e = 1; e < arguments.length; e++) {
                    var t = null != arguments[e] ? arguments[e] : {},
                        r = Object.keys(t);
                    "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(n) {
                        return Object.getOwnPropertyDescriptor(t, n).enumerable
                    })))), r.forEach((function(e) {
                        g(n, e, t[e])
                    }))
                }
                return n
            }

            function b(n, e) {
                return e || (e = n.slice(0)), Object.freeze(Object.defineProperties(n, {
                    raw: {
                        value: Object.freeze(e)
                    }
                }))
            }

            function w() {
                var n = b(["\n  fragment Theme on WWS_Theme {\n    id\n    name\n    themeStyles\n  }\n"]);
                return w = function() {
                    return n
                }, n
            }

            function y() {
                var n = b(["\n  fragment Announcement on WWS_Announcement {\n    id\n    icon\n    message\n    show\n  }\n"]);
                return y = function() {
                    return n
                }, n
            }

            function j() {
                var n = b(["\n  fragment PhotoAlbums on WWS_WeddingWebsiteV2 {\n    photoAlbums {\n      id\n      title\n      images {\n        galleryPath\n        id\n        path\n        caption\n      }\n    }\n  }\n"]);
                return j = function() {
                    return n
                }, n
            }

            function P() {
                var n = b(["\n  fragment Photos on WWS_Photo {\n    mediaUrl\n    mediaApiId\n    width\n    height\n    cropX\n    cropY\n    rotation\n    aspectRatio {\n      name\n      value\n    }\n  }\n"]);
                return P = function() {
                    return n
                }, n
            }

            function O() {
                var n = b(["\n  fragment AccommodationItem on WWS_AccommodationItem {\n    id\n    rank\n    type\n    name\n    description\n    address\n    phone\n    photo {\n      ...Photos\n    }\n    email\n    website\n    guestCode\n    checkInDate\n    checkOutDate\n    rate\n  }\n  ", "\n"]);
                return O = function() {
                    return n
                }, n
            }

            function W() {
                var n = b(["\n  fragment ActivityItem on WWS_ActivityItem {\n    id\n    rank\n    type\n    name\n    description\n    photo {\n      ...Photos\n    }\n    address\n    phone\n    email\n    website\n  }\n  ", "\n"]);
                return W = function() {
                    return n
                }, n
            }

            function k() {
                var n = b(["\n  fragment CoverPhotoItem on WWS_CoverPhotoItem {\n    id\n    rank\n    type\n    mediaUrl\n    focalPoint\n    width\n    height\n  }\n"]);
                return k = function() {
                    return n
                }, n
            }

            function S() {
                var n = b(["\n  fragment BasicItem on WWS_BasicItem {\n    id\n    rank\n    type\n    title\n    description\n    photo {\n      ...Photos\n    }\n  }\n  ", "\n"]);
                return S = function() {
                    return n
                }, n
            }

            function N() {
                var n = b(["\n  fragment EventGroupItem on WWS_EventGroupItem {\n    id\n    type\n    rank\n  }\n"]);
                return N = function() {
                    return n
                }, n
            }

            function I() {
                var n = b(["\n  fragment HeadlineItem on WWS_HeadlineItem {\n    id\n    type\n    rank\n    style\n    title\n  }\n"]);
                return I = function() {
                    return n
                }, n
            }

            function R() {
                var n = b(["\n  fragment ParagraphItem on WWS_ParagraphItem {\n    id\n    content\n    rank\n    type\n  }\n"]);
                return R = function() {
                    return n
                }, n
            }

            function Z() {
                var n = b(["\n  fragment PersonItem on WWS_PersonItem {\n    id\n    rank\n    type\n    name\n    description\n    role\n    photo {\n      ...Photos\n    }\n  }\n  ", "\n"]);
                return Z = function() {
                    return n
                }, n
            }

            function z() {
                var n = b(["\n  fragment PhotoItem on WWS_PhotoItem {\n    aspectRatio {\n      name\n    }\n    id\n    mediaUrl\n    rotation\n    type\n  }\n"]);
                return z = function() {
                    return n
                }, n
            }

            function D() {
                var n = b(["\n  fragment PhotoGalleryItem on WWS_PhotoGalleryItem {\n    id\n    rank\n    type\n    layout\n    photoItems {\n      caption\n      height\n      id\n      mediaApiId\n      cropX\n      cropY\n      rotation\n      mediaUrl\n      width\n    }\n  }\n"]);
                return D = function() {
                    return n
                }, n
            }

            function A() {
                var n = b(["\n  fragment PhotoTimelineItem on WWS_PhotoTimelineItem {\n    id\n    rank\n    type\n    layout\n    photoItems {\n      caption\n      date\n      height\n      id\n      mediaApiId\n      mediaUrl\n      width\n      rotation\n    }\n  }\n"]);
                return A = function() {
                    return n
                }, n
            }

            function C() {
                var n = b(["\n  fragment StoryItem on WWS_StoryItem {\n    id\n    rank\n    type\n    title\n    description\n    photo {\n      ...Photos\n    }\n  }\n  ", "\n"]);
                return C = function() {
                    return n
                }, n
            }

            function _() {
                var n = b(["\n  fragment TransportationItem on WWS_TransportationItem {\n    id\n    rank\n    type\n    name\n    description\n    photo {\n      ...Photos\n    }\n    address\n    phone\n    email\n    website\n  }\n  ", "\n"]);
                return _ = function() {
                    return n
                }, n
            }

            function L() {
                var n = b(["\n  fragment GifItem on WWS_GifItem {\n    id\n    rank\n    type\n    mediaUrl\n  }\n"]);
                return L = function() {
                    return n
                }, n
            }

            function T() {
                var n = b(["\n  fragment EmbedItem on WWS_EmbedItem {\n    id\n    rank\n    type\n    title\n    description\n    embededCode\n  }\n"]);
                return T = function() {
                    return n
                }, n
            }

            function E() {
                var n = b(["\n  fragment QuestionItem on WWS_QuestionItem {\n    id\n    rank\n    type\n    question\n    answer\n  }\n"]);
                return E = function() {
                    return n
                }, n
            }

            function F() {
                var n = b(["\n  fragment LivestreamItem on WWS_LivestreamItem {\n    id\n    rank\n    type\n    title\n    description\n    buttonText\n    buttonUrl\n  }\n"]);
                return F = function() {
                    return n
                }, n
            }

            function M() {
                var n = b(["\n  fragment WWSPages on WWS_WeddingWebsiteV2 {\n    pages {\n      id\n      routeName\n      show\n      title\n      type\n      items {\n        id\n        type\n        ...AccommodationItem\n        ...ActivityItem\n        ...CoverPhotoItem\n        ...BasicItem\n        ...EventGroupItem\n        ...HeadlineItem\n        ...ParagraphItem\n        ...PersonItem\n        ...PhotoItem\n        ...PhotoGalleryItem\n        ...PhotoTimelineItem\n        ...StoryItem\n        ...TransportationItem\n        ...GifItem\n        ...EmbedItem\n        ...QuestionItem\n        ...LivestreamItem\n      }\n    }\n  }\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"]);
                return M = function() {
                    return n
                }, n
            }

            function B() {
                var n = b(["\n  fragment WWSResult on WWS_WeddingWebsiteV2 {\n    id\n    theme(themeId: $themeId) {\n      ...Theme\n    }\n    fianceFirstName\n    fianceLastName\n    firstName\n    lastName\n    hideCountdown\n    hideDate\n    registryNote\n    slug\n    userUuid\n    vanityRoot\n    weddingLocation\n    weddingDateFormat\n    searchEngineIndexable\n    weddingDateRangeStart\n    weddingDateRangeEnd\n    weddingUuid\n    announcement {\n      ...Announcement\n    }\n    purchaseDomain {\n      id\n      name\n    }\n    coverPhotoPathWithCropbox\n    coverPhoto {\n      path\n      cropBox\n      width\n      height\n    }\n    ...PhotoAlbums\n    ...WWSPages\n  }\n  ", "\n  ", "\n  ", "\n  ", "\n"]);
                return B = function() {
                    return n
                }, n
            }

            function U() {
                var n = b(["\n  fragment WWSError on WWS_Error {\n    cause\n    theme {\n      id\n      themeStyles\n    }\n  }\n"]);
                return U = function() {
                    return n
                }, n
            }

            function H() {
                var n = b(["\n  fragment LocationProps on GDS_Location {\n    fullAddress\n    name\n  }\n"]);
                return H = function() {
                    return n
                }, n
            }

            function V() {
                var n = b(["\n  fragment SubEvent on GDS_SubEvent {\n    attire\n    endTime\n    id\n    name\n    notes\n    time\n    type\n    visible\n    location {\n      ...LocationProps\n    }\n  }\n  ", "\n"]);
                return V = function() {
                    return n
                }, n
            }

            function q() {
                var n = b(["\n  fragment Events on GDS_Event {\n    id\n    attire\n    endTime\n    name\n    notes\n    time\n    type\n    visible\n    date\n    name\n    time\n    requireRsvp\n    sameVenue\n    location {\n      ...LocationProps\n    }\n    subEvents {\n      ...SubEvent\n    }\n  }\n  ", "\n  ", "\n"]);
                return q = function() {
                    return n
                }, n
            }

            function G() {
                var n = b(["\n  query weddingWebsiteQuery($slug: String!, $pin: String, $themeId: String) {\n    guestWedding {\n      id\n      isPrivateRsvp\n      rsvpAsAPage\n      rsvpPageHidden\n    }\n    events {\n      ...Events\n    }\n    weddingWebsiteResult(slugOrVanity: $slug, pin: $pin) {\n      ...WWSError\n      ...WWSResult\n    }\n    wedding {\n      weddingDate\n      season {\n        name\n        year\n      }\n    }\n    weddingDatePreferences(pin: $pin) {\n      datePreference\n      season\n      year\n      weddingDate\n      weddingDateFormat\n      weddingDateRangeStart\n      weddingDateRangeEnd\n      weddingEventTime\n      hideCountdown\n      hideDate\n    }\n  }\n  ", "\n  ", "\n  ", "\n"]);
                return G = function() {
                    return n
                }, n
            }
            var $, K = {};
            ! function(n) {
                n.Exact = "Exact", n.None = "None", n.Range = "Range", n.Season = "Season", n.Tba = "TBA"
            }($ || ($ = {}));
            var J = (0, v.Ps)(w()),
                Y = (0, v.Ps)(y()),
                Q = (0, v.Ps)(j()),
                X = (0, v.Ps)(P()),
                nn = (0, v.Ps)(O(), X),
                en = (0, v.Ps)(W(), X),
                tn = (0, v.Ps)(k()),
                rn = (0, v.Ps)(S(), X),
                on = (0, v.Ps)(N()),
                an = (0, v.Ps)(I()),
                un = (0, v.Ps)(R()),
                ln = (0, v.Ps)(Z(), X),
                cn = (0, v.Ps)(z()),
                dn = (0, v.Ps)(D()),
                sn = (0, v.Ps)(A()),
                fn = (0, v.Ps)(C(), X),
                mn = (0, v.Ps)(_(), X),
                vn = (0, v.Ps)(L()),
                pn = (0, v.Ps)(T()),
                hn = (0, v.Ps)(E()),
                gn = (0, v.Ps)(F()),
                xn = (0, v.Ps)(M(), nn, en, tn, rn, on, an, un, ln, cn, dn, sn, fn, mn, vn, pn, hn, gn),
                bn = (0, v.Ps)(B(), J, Y, Q, xn),
                wn = (0, v.Ps)(U()),
                yn = (0, v.Ps)(H()),
                jn = (0, v.Ps)(V(), yn),
                Pn = (0, v.Ps)(q(), yn, jn),
                On = (0, v.Ps)(G(), Pn, wn, bn);

            function Wn(n) {
                return "WWS_Error" === (null === n || void 0 === n ? void 0 : n.__typename)
            }

            function kn(n) {
                return "WWS_WeddingWebsiteV2" === (null === n || void 0 === n ? void 0 : n.__typename)
            }

            function Sn(n, e, t) {
                return e in n ? Object.defineProperty(n, e, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[e] = t, n
            }
            var Nn = {
                s1: .75,
                s2: .75,
                s3: .75,
                s4: .75,
                s5: .75,
                s6: .875,
                tiny: .8333
            };

            function In(n) {
                return Nn[n] || .75
            }

            function Rn(n) {
                return function(e) {
                    var t = e.theme,
                        r = t.fonts[n];
                    return function(n) {
                        for (var e = 1; e < arguments.length; e++) {
                            var t = null != arguments[e] ? arguments[e] : {},
                                r = Object.keys(t);
                            "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(n) {
                                return Object.getOwnPropertyDescriptor(t, n).enumerable
                            })))), r.forEach((function(e) {
                                Sn(n, e, t[e])
                            }))
                        }
                        return n
                    }({
                        "@media (max-width: 640px)": {
                            fontSize: "calc(".concat(null === r || void 0 === r ? void 0 : r.fontSize, " * ").concat(In(n), ")")
                        }
                    }, t.fonts[n])
                }
            }

            function Zn(n, e) {
                (null == e || e > n.length) && (e = n.length);
                for (var t = 0, r = new Array(e); t < e; t++) r[t] = n[t];
                return r
            }

            function zn(n, e) {
                return function(n) {
                    if (Array.isArray(n)) return n
                }(n) || function(n, e) {
                    var t = null == n ? null : "undefined" !== typeof Symbol && n[Symbol.iterator] || n["@@iterator"];
                    if (null != t) {
                        var r, i, o = [],
                            a = !0,
                            u = !1;
                        try {
                            for (t = t.call(n); !(a = (r = t.next()).done) && (o.push(r.value), !e || o.length !== e); a = !0);
                        } catch (l) {
                            u = !0, i = l
                        } finally {
                            try {
                                a || null == t.return || t.return()
                            } finally {
                                if (u) throw i
                            }
                        }
                        return o
                    }
                }(n, e) || function(n, e) {
                    if (!n) return;
                    if ("string" === typeof n) return Zn(n, e);
                    var t = Object.prototype.toString.call(n).slice(8, -1);
                    "Object" === t && n.constructor && (t = n.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return Zn(n, e)
                }(n, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Dn(n, e) {
                var t = ["FF", "FF", "FF"];
                if ("string" === typeof n) {
                    if (!n.match(/^#/)) return n;
                    var r = n.match(/\w/g) || [];
                    if (3 === r.length) t = (t = n.match(/\w/g) || []).map((function(n) {
                        return "".concat(n).concat(n)
                    }));
                    else {
                        if (6 !== r.length) return n;
                        t = n.match(/\w{2}/g) || []
                    }
                }
                if (Array.isArray(n)) {
                    var i = n[0];
                    if ("undefined" !== typeof i) {
                        if (!i.match(/^#/)) return i;
                        var o = i.match(/\w/g) || [];
                        if (3 === o.length) t = (t = i.match(/\w/g) || []).map((function(n) {
                            return "".concat(n).concat(n)
                        }));
                        else {
                            if (6 !== o.length) return i;
                            t = i.match(/\w{2}/g) || []
                        }
                    }
                }
                var a = zn(t.map((function(n) {
                        return parseInt(n, 16)
                    })), 3),
                    u = a[0],
                    l = a[1],
                    c = a[2];
                return "rgba(".concat(u, ",").concat(l, ",").concat(c, ",").concat(e, ")")
            }

            function An() {
                var n, e, t = (n = ["\n  letter-spacing: 1px;\n  line-height: 1.25;\n  align-items: center;\n  border-radius: 2px;\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin: 0 10px;\n  padding: 13px 36px;\n  text-decoration: none;\n  transition: all 0.25s;\n\n  background-color: ", ";\n\n  color: ", ";\n\n  ", "\n\n  ", " :hover {\n    background-color: ", ";\n\n    ", "\n  }\n"], e || (e = n.slice(0)), Object.freeze(Object.defineProperties(n, {
                    raw: {
                        value: Object.freeze(e)
                    }
                })));
                return An = function() {
                    return t
                }, t
            }
            var Cn = m.Z.a(An(), (function(n) {
                    return n.theme.fonts.s4.color
                }), (function(n) {
                    return n.theme.colors.background
                }), Rn("s6"), (function(n) {
                    return n.theme.components.Button
                }), (function(n) {
                    var e, t, r = n.theme,
                        i = null === r || void 0 === r || null === (e = r.components) || void 0 === e || null === (t = e.Button) || void 0 === t ? void 0 : t.backgroundColor,
                        o = r.fonts.s4.color;
                    return Dn(i || o, "70%")
                }), (function(n) {
                    return n.theme.components.ButtonHover
                })),
                _n = (0, l.memo)(Cn),
                Ln = t(1870);

            function Tn(n, e) {
                (null == e || e > n.length) && (e = n.length);
                for (var t = 0, r = new Array(e); t < e; t++) r[t] = n[t];
                return r
            }

            function En(n, e, t, r, i, o, a) {
                try {
                    var u = n[o](a),
                        l = u.value
                } catch (c) {
                    return void t(c)
                }
                u.done ? e(l) : Promise.resolve(l).then(r, i)
            }

            function Fn(n, e) {
                return function(n) {
                    if (Array.isArray(n)) return n
                }(n) || function(n, e) {
                    var t = null == n ? null : "undefined" !== typeof Symbol && n[Symbol.iterator] || n["@@iterator"];
                    if (null != t) {
                        var r, i, o = [],
                            a = !0,
                            u = !1;
                        try {
                            for (t = t.call(n); !(a = (r = t.next()).done) && (o.push(r.value), !e || o.length !== e); a = !0);
                        } catch (l) {
                            u = !0, i = l
                        } finally {
                            try {
                                a || null == t.return || t.return()
                            } finally {
                                if (u) throw i
                            }
                        }
                        return o
                    }
                }(n, e) || function(n, e) {
                    if (!n) return;
                    if ("string" === typeof n) return Tn(n, e);
                    var t = Object.prototype.toString.call(n).slice(8, -1);
                    "Object" === t && n.constructor && (t = n.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return Tn(n, e)
                }(n, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Mn(n, e) {
                return e || (e = n.slice(0)), Object.freeze(Object.defineProperties(n, {
                    raw: {
                        value: Object.freeze(e)
                    }
                }))
            }

            function Bn() {
                var n = Mn(["\n  text-align: center;\n  min-height: 100vh;\n  padding-top: 1px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: ", ";\n  div {\n    @media (max-width: 420px) {\n      display: grid;\n      max-width: 240px;\n    }\n  }\n"]);
                return Bn = function() {
                    return n
                }, n
            }

            function Un() {
                var n = Mn(["\n  color: rgb(31, 31, 31);\n  line-height: 1;\n  margin: 24px 0 0;\n\n  ", "\n"]);
                return Un = function() {
                    return n
                }, n
            }

            function Hn() {
                var n = Mn(["\n  display: flex;\n  justify-content: center;\n"]);
                return Hn = function() {
                    return n
                }, n
            }

            function Vn() {
                var n = Mn(["\n  margin: 24px auto;\n  width: fit-content;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n"]);
                return Vn = function() {
                    return n
                }, n
            }

            function qn() {
                var n = Mn(["\n  width: fit-content;\n  margin: 12px;\n  @media (max-width: 420px) {\n    margin-left: auto;\n    margin-right: auto;\n  }\n"]);
                return qn = function() {
                    return n
                }, n
            }

            function Gn() {
                var n = Mn(["\n  color: black;\n  padding: 12px;\n  font-family: inherit;\n  font-size: 100%;\n  line-height: 1.15;\n  margin: 12px;\n  overflow: visible;\n  border-radius: 2px;\n  background: ", ";\n  border: 1px solid ", ";\n\n  ", "\n  text-transform: none;\n\n  ::placeholder {\n    color: #000;\n\n    ", "\n  }\n\n  ::-webkit-input-placeholder {\n    color: #000;\n\n    ", "\n  }\n\n  /* Firefox 19+ */\n  ::-moz-placeholder {\n    color: #000;\n\n    ", "\n  }\n\n  /* Firefox 18- */\n  :-moz-placeholder {\n    color: #000;\n\n    ", "\n  }\n\n  :-ms-input-placeholder {\n    color: #000;\n\n    ", "\n  }\n"]);
                return Gn = function() {
                    return n
                }, n
            }

            function $n() {
                var n = Mn(["\n  padding: 12px;\n  margin: 12px;\n  opacity: 0;\n  transition: all 0.5s ease-out;\n  background-color: ", ";\n\n  ", "\n\n  ", ";\n"]);
                return $n = function() {
                    return n
                }, n
            }
            var Kn = m.Z.div(Bn(), (function(n) {
                    return n.theme.colors.background
                })),
                Jn = m.Z.h4(Un(), Rn("s4")),
                Yn = m.Z.div(Hn()),
                Qn = m.Z.form(Vn()),
                Xn = (0, m.Z)(_n)(qn()),
                ne = m.Z.input(Gn(), (function(n) {
                    return n.theme.colors.background
                }), (function(n) {
                    return n.theme.fonts.s6.color
                }), Rn("s6"), Rn("s6"), Rn("s6"), Rn("s6"), Rn("s6"), Rn("s6")),
                ee = m.Z.div($n(), (function(n) {
                    return n.theme.colors.alert
                }), (function(n) {
                    return n.error ? "opacity: 1;" : ""
                }), Rn("s5"));

            function te() {
                var n = (0, l.useState)(""),
                    e = n[0],
                    t = n[1],
                    i = (0, l.useState)(null),
                    o = i[0],
                    a = i[1],
                    c = Fn(function(n) {
                        var e = x({}, K, n);
                        return h.t(On, e)
                    }(), 2),
                    d = c[0],
                    m = c[1],
                    v = m.data,
                    p = m.loading,
                    g = (0, f.useRouter)().query.slug;
                (0, l.useEffect)((function() {
                    var n, t;
                    p || ("WWS_Error" === (null === v || void 0 === v || null === (n = v.weddingWebsiteResult) || void 0 === n ? void 0 : n.__typename) && "PIN_REQUIRED" === v.weddingWebsiteResult.cause ? (a("Incorrect Password"), document.cookie = "wws-pin= ; expires = Thu, 01 Jan 1970 00:00:00 GMT") : "WWS_WeddingWebsiteV2" === (null === v || void 0 === v || null === (t = v.weddingWebsiteResult) || void 0 === t ? void 0 : t.__typename) && (document.cookie = "wws-pin=".concat(e), window.location.reload()))
                }), [p, v, e]);
                var b = (0, l.useCallback)(function() {
                        var n, t = (n = s().mark((function n(t) {
                            return s().wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        if (t.preventDefault(), n.prev = 1, "undefined" === typeof g || Array.isArray(g) || "undefined" === typeof e) {
                                            n.next = 6;
                                            break
                                        }
                                        d({
                                            variables: {
                                                slug: g,
                                                pin: e
                                            },
                                            context: {
                                                slug: g
                                            }
                                        }), n.next = 7;
                                        break;
                                    case 6:
                                        throw new Error("Login error: slug or pin are undefined");
                                    case 7:
                                        n.next = 12;
                                        break;
                                    case 9:
                                        return n.prev = 9, n.t0 = n.catch(1), n.abrupt("return", null);
                                    case 12:
                                        return n.abrupt("return");
                                    case 13:
                                    case "end":
                                        return n.stop()
                                }
                            }), n, null, [
                                [1, 9]
                            ])
                        })), function() {
                            var e = this,
                                t = arguments;
                            return new Promise((function(r, i) {
                                var o = n.apply(e, t);

                                function a(n) {
                                    En(o, r, i, a, u, "next", n)
                                }

                                function u(n) {
                                    En(o, r, i, a, u, "throw", n)
                                }
                                a(void 0)
                            }))
                        });
                        return function(n) {
                            return t.apply(this, arguments)
                        }
                    }(), [d, e, g]),
                    w = (0, l.useCallback)((function(n) {
                        a(null), t(n.target.value)
                    }), []);
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(u(), {
                        children: (0, r.jsx)("meta", {
                            name: "viewport",
                            content: "width=device-width, initial-scale=1, maximum-scale=1"
                        })
                    }), (0, r.jsx)(Ln.Z, {}), (0, r.jsx)(Kn, {
                        children: (0, r.jsxs)("div", {
                            children: [(0, r.jsx)(Jn, {
                                children: "Enter password to view this site"
                            }), (0, r.jsxs)(Qn, {
                                onSubmit: b,
                                children: [(0, r.jsxs)(Yn, {
                                    children: [(0, r.jsx)(ne, {
                                        placeholder: "Password",
                                        type: "password",
                                        onChange: w,
                                        value: e
                                    }), (0, r.jsx)(Xn, {
                                        type: "submit",
                                        onClick: b,
                                        children: "Submit"
                                    })]
                                }), (0, r.jsx)(ee, {
                                    error: o,
                                    children: o
                                })]
                            })]
                        })
                    })]
                })
            }
            var re = (0, l.memo)(te);

            function ie(n) {
                window.parent.postMessage(JSON.stringify(n), "*")
            }
            var oe = t(9238);

            function ae(n) {
                return null !== n && "undefined" !== typeof n ? (0, oe.sanitize)(n).replace(/&nbsp;/g, " ") : ""
            }

            function ue(n) {
                return n.replace(/<a\s+href="([^"]*)"(?:\s+rel="([^"]*)")?([^>]*)>/gi, (function(n, e, t, r) {
                    return '<a href="'.concat(e, '" ').concat('rel="nofollow ugc noopener noreferrer external"', " ").concat(r, ">")
                }))
            }
            var le = {
                    data: null,
                    setWWData: function() {}
                },
                ce = (0, l.createContext)(le);

            function de(n) {
                var e = n.children,
                    t = n.data,
                    i = (0, l.useState)(t),
                    o = i[0],
                    a = i[1],
                    u = (0, l.useMemo)((function() {
                        var n = function(n) {
                            var e, t;
                            if (!n || !n.weddingWebsiteResult || Wn(n.weddingWebsiteResult)) return n;
                            var r, i = JSON.parse(JSON.stringify(n));
                            return kn(i.weddingWebsiteResult) && i.weddingWebsiteResult.registryNote && (i.weddingWebsiteResult.registryNote = ue(null === i || void 0 === i || null === (r = i.weddingWebsiteResult) || void 0 === r ? void 0 : r.registryNote)), null === i || void 0 === i || null === (e = i.weddingWebsiteResult) || void 0 === e || null === (t = e.pages) || void 0 === t || t.forEach((function(n) {
                                null === n || void 0 === n || n.items.forEach((function(n) {
                                    n.content ? (kn(i.weddingWebsiteResult) && (n.content = n.content.replace(/\\/g, "")), n.content = ue(n.content)) : n.description && (n.description = ue(n.description))
                                }))
                            })), i
                        }(o);
                        return {
                            data: n,
                            setWWData: a
                        }
                    }), [o]);
                return (0, r.jsx)(ce.Provider, {
                    value: u,
                    children: e
                })
            }
            var se = (0, l.memo)(de),
                fe = "LiteSitePage";

            function me() {
                var n, e = (0, l.useContext)(ce).data;
                return !!kn(null === e || void 0 === e ? void 0 : e.weddingWebsiteResult) && Boolean(null === (n = null === e || void 0 === e ? void 0 : e.weddingWebsiteResult.pages) || void 0 === n ? void 0 : n.find((function(n) {
                    return n.type === fe
                })))
            }

            function ve() {
                var n, e = (0, l.useContext)(ce).data,
                    t = null === e || void 0 === e ? void 0 : e.events.filter((function(n) {
                        return "Reception" !== n.type
                    })).some((function(n) {
                        return Boolean(n.requireRsvp)
                    }));
                return Boolean(t && !(null === e || void 0 === e || null === (n = e.guestWedding) || void 0 === n ? void 0 : n.rsvpPageHidden))
            }
            var pe = /iPhone|iPod|BlackBerry|Android/;
            var he = t(3144),
                ge = t.n(he),
                xe = t(5979);

            function be(n, e, t, r, i, o, a) {
                try {
                    var u = n[o](a),
                        l = u.value
                } catch (c) {
                    return void t(c)
                }
                u.done ? e(l) : Promise.resolve(l).then(r, i)
            }
            var we = (0, l.createContext)({});

            function ye(n) {
                var e = n.children,
                    t = n.data,
                    i = (0, l.useState)(void 0),
                    o = i[0],
                    a = i[1];
                (0, l.useEffect)((function() {
                    var n = function() {
                        var n, e = (n = s().mark((function n() {
                            var e, r;
                            return s().wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        
                                    case 5:
                                        r = n.sent, a(r), n.next = 12;
                                        break;
                                    case 9:
                                        n.prev = 9, n.t0 = n.catch(2), xe.Z.notify(n.t0, {
                                            name: "Registry Couple API",
                                            context: {
                                                apiResponse: n.t0,
                                                userUuid: t.weddingWebsiteResult.userUuid
                                            }
                                        });
                                    case 12:
                                    case "end":
                                        return n.stop()
                                }
                            }), n, null, [
                                [2, 9]
                            ])
                        })), function() {
                            var e = this,
                                t = arguments;
                            return new Promise((function(r, i) {
                                var o = n.apply(e, t);

                                function a(n) {
                                    be(o, r, i, a, u, "next", n)
                                }

                                function u(n) {
                                    be(o, r, i, a, u, "throw", n)
                                }
                                a(void 0)
                            }))
                        });
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }();
                    n()
                }), [t.weddingWebsiteResult]);
                var u = (0, l.useMemo)((function() {
                    return {
                        coupleInfo: o
                    }
                }), [o]);
                return (0, r.jsx)(we.Provider, {
                    value: u,
                    children: e
                })
            }
            var je = (0, l.memo)(ye);

            function Pe(n) {

            }
            var Oe = (0, l.memo)(Pe);

            function We(n, e, t) {
                return e in n ? Object.defineProperty(n, e, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[e] = t, n
            }

            function ke(n, e) {
                if (null == n) return {};
                var t, r, i = function(n, e) {
                    if (null == n) return {};
                    var t, r, i = {},
                        o = Object.keys(n);
                    for (r = 0; r < o.length; r++) t = o[r], e.indexOf(t) >= 0 || (i[t] = n[t]);
                    return i
                }(n, e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(n);
                    for (r = 0; r < o.length; r++) t = o[r], e.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(n, t) && (i[t] = n[t])
                }
                return i
            }
            var Se = function(n) {
                return Object.keys(n.fonts).forEach((function(e) {
                    var t = n.fonts[e];
                    if (t) {
                        var r = t.base,
                            i = ke(t, ["base"]);
                        if (r) {
                            var o = n.baseFonts[r];
                            n.fonts[e] = function(n) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = null != arguments[e] ? arguments[e] : {},
                                        r = Object.keys(t);
                                    "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(n) {
                                        return Object.getOwnPropertyDescriptor(t, n).enumerable
                                    })))), r.forEach((function(e) {
                                        We(n, e, t[e])
                                    }))
                                }
                                return n
                            }({}, o, i)
                        }
                    }
                })), n
            };
            var Ne = function(n) {
                    var e = (0, l.useContext)(ce).data;
                    if (e && e.weddingWebsiteResult) {
                        var t, r = e.weddingWebsiteResult.theme;
                        if (n) try {
                            t = JSON.parse(n)
                        } catch (a) {
                            var i;
                            t = (null === r || void 0 === r ? void 0 : r.themeStyles) && "undefined" !== typeof r.themeStyles[0] && (null === (i = r.themeStyles[0]) || void 0 === i ? void 0 : i.styles)
                        } else if (r) {
                            var o;
                            t = r.themeStyles && (null === (o = r.themeStyles[0]) || void 0 === o ? void 0 : o.styles)
                        } return t ? t = Se(t) : {}
                    }
                    return {}
                },
                Ie = t(5030),
                Re = t.n(Ie);

            function Ze(n) {
                var e = n.firstName,
                    t = n.fianceFirstName;
                if (!e || !t) return null;
                var r = e.charAt(0).toUpperCase(),
                    i = t.charAt(0).toUpperCase();
                return "".concat(r, "&").concat(i)
            }
            var ze = t(3869);

            function De(n, e, t) {
                return e in n ? Object.defineProperty(n, e, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[e] = t, n
            }
            var Ae = function(n, e, t) {
                    if (!n || !e) return null;
                    var r = new Date(n),
                        i = new Date(e),
                        o = function(n) {
                            for (var e = 1; e < arguments.length; e++) {
                                var t = null != arguments[e] ? arguments[e] : {},
                                    r = Object.keys(t);
                                "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(n) {
                                    return Object.getOwnPropertyDescriptor(t, n).enumerable
                                })))), r.forEach((function(e) {
                                    De(n, e, t[e])
                                }))
                            }
                            return n
                        }({
                            month: "long",
                            day: "numeric",
                            year: "numeric",
                            timeZone: "UTC"
                        }, t || {}),
                        a = new Intl.DateTimeFormat("en-US", o),
                        u = a.formatToParts(r),
                        l = a.formatToParts(i),
                        c = (0, ze.Z)(u, "year"),
                        d = (0, ze.Z)(l, "year"),
                        s = (0, ze.Z)(u, "month"),
                        f = (0, ze.Z)(l, "month"),
                        m = (0, ze.Z)(u, "day"),
                        v = (0, ze.Z)(l, "day"),
                        p = null;
                    return p = c !== d ? "".concat(s, ".").concat(m, ", ").concat(c, "\u2013").concat(f, ".").concat(v, ", ").concat(d) : s !== f ? "".concat(s, ".").concat(m, "\u2013").concat(f, ".").concat(v, ", ").concat(c) : "".concat(s, ".").concat(m, "\u2013").concat(v, ", ").concat(c), (null === t || void 0 === t ? void 0 : t.month) ? "numeric" === t.month && (p = p.split(", ").join(".")) : p = p.split(".").join(" "), p
                },
                Ce = t(2064),
                _e = "Date To Be Announced";
            var Le = function(n) {
                var e = (0, l.useContext)(ce).data;
                if (kn(null === e || void 0 === e ? void 0 : e.weddingWebsiteResult)) {
                    var t, r, i, o, a, u, c, d, s = null === e || void 0 === e || null === (t = e.weddingDatePreferences) || void 0 === t ? void 0 : t.weddingDate,
                        f = null === e || void 0 === e || null === (r = e.weddingDatePreferences) || void 0 === r ? void 0 : r.season,
                        m = null === e || void 0 === e || null === (i = e.weddingDatePreferences) || void 0 === i ? void 0 : i.year,
                        v = null === e || void 0 === e || null === (o = e.weddingDatePreferences) || void 0 === o ? void 0 : o.weddingDateFormat,
                        p = null === e || void 0 === e || null === (a = e.weddingDatePreferences) || void 0 === a ? void 0 : a.weddingDateRangeStart,
                        h = null === e || void 0 === e || null === (u = e.weddingDatePreferences) || void 0 === u ? void 0 : u.weddingDateRangeEnd,
                        g = null === e || void 0 === e || null === (c = e.weddingDatePreferences) || void 0 === c ? void 0 : c.datePreference,
                        x = null === e || void 0 === e || null === (d = e.weddingDatePreferences) || void 0 === d ? void 0 : d.weddingEventTime;
                    if (g === $.Tba) return _e;
                    if (g === $.None) return null;
                    if (g === $.Range && p) return "short" === n ? Ae(p, h, {
                        month: "numeric"
                    }) : Ae(p, h);
                    if (g === $.Exact && s) {
                        var b = ["verbose", "ornate"].includes(v || "") ? "".concat(v || "", "DateOnly") : v || "",
                            w = n || b,
                            y = x && s ? "".concat(s, " ").concat(x, " UTC") : s;
                        return (0, Ce.Z)(y, w)
                    }
                    if (g === $.Season) return "".concat(f || "", " ").concat(m || "")
                }
                return null
            };

            function Te(n, e) {
                return e || (e = n.slice(0)), Object.freeze(Object.defineProperties(n, {
                    raw: {
                        value: Object.freeze(e)
                    }
                }))
            }

            function Ee() {
                var n = Te(["\n  letter-spacing: 3.4px;\n  line-height: 1;\n  margin: 52px auto;\n  text-align: center;\n  width: fit-content;\n  ", "\n"]);
                return Ee = function() {
                    return n
                }, n
            }

            function Fe() {
                var n = Te(["\n  padding: 0 18px 16px;\n\n  ", "\n"]);
                return Fe = function() {
                    return n
                }, n
            }

            function Me() {
                var n = Te(["\n  padding: 20px 18px 0;\n\n  ", "\n\n  border-top: 1px solid\n  ", ";\n"]);
                return Me = function() {
                    return n
                }, n
            }
            var Be = m.Z.div(Ee(), (function(n) {
                    var e, t;
                    return null === (e = n.theme) || void 0 === e || null === (t = e.components) || void 0 === t ? void 0 : t.InitialsDateLockup
                })),
                Ue = m.Z.div(Fe(), Rn("s1")),
                He = m.Z.div(Me(), Rn("s5"), (function(n) {
                    var e, t = n.theme,
                        r = t.components,
                        i = t.fonts;
                    return (null === r || void 0 === r || null === (e = r.InitialsDateLockup) || void 0 === e ? void 0 : e.borderColor) || i.s1.color
                }));

            function Ve(n) {
                var e = Ze({
                        firstName: n.firstName,
                        fianceFirstName: n.fianceFirstName
                    }),
                    t = Le("short");
                return e ? (0, r.jsxs)(Be, {
                    children: [(0, r.jsx)(Ue, {
                        children: e
                    }), t ? (0, r.jsx)(He, {
                        children: t
                    }) : null]
                }) : null
            }
            var qe = (0, l.memo)(Ve);

            function Ge(n) {
                var e = n.split(/(~|\.[\dA-Za-z]{3,4}$)/)[0],
                    t = n.match(/cr_((?:\d+\.){3}\d+)/),
                    r = t && t[1] || void 0,
                    i = n.match(/\.([\dA-Za-z]{3,4})$/);
                return {
                    url: e,
                    crop: r,
                    format: i && i[1] || void 0
                }
            }

            function $e(n) {
                var e = n.crop,
                    t = n.format,
                    r = n.height,
                    i = n.rotation,
                    o = n.smartCrop,
                    a = n.url,
                    u = n.width,
                    l = t ? ".".concat(t) : "",
                    c = [];
                return i ? c.push("rt_".concat(i)) : c.push("rt_auto"), o && c.push("sc_".concat(o)), o || (e && c.push("cr_".concat(e)), u && !r ? c.push("rs_".concat(u, ".h")) : r && !u ? c.push("rs_w.".concat(r)) : r && u && c.push("rs_".concat(u, ".").concat(r))), "".concat(a, "~").concat(c.join("-")).concat(l,".png", "?ordering=explicit")
            }

            function Ke(n, e, t) {
                return e in n ? Object.defineProperty(n, e, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[e] = t, n
            }

            function Je(n) {
                for (var e = 1; e < arguments.length; e++) {
                    var t = null != arguments[e] ? arguments[e] : {},
                        r = Object.keys(t);
                    "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(n) {
                        return Object.getOwnPropertyDescriptor(t, n).enumerable
                    })))), r.forEach((function(e) {
                        Ke(n, e, t[e])
                    }))
                }
                return n
            }

            function Ye(n, e) {
                if (null == n) return {};
                var t, r, i = function(n, e) {
                    if (null == n) return {};
                    var t, r, i = {},
                        o = Object.keys(n);
                    for (r = 0; r < o.length; r++) t = o[r], e.indexOf(t) >= 0 || (i[t] = n[t]);
                    return i
                }(n, e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(n);
                    for (r = 0; r < o.length; r++) t = o[r], e.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(n, t) && (i[t] = n[t])
                }
                return i
            }

            function Qe() {
                var n, e, t = (n = ["\n  width: 100%;\n"], e || (e = n.slice(0)), Object.freeze(Object.defineProperties(n, {
                    raw: {
                        value: Object.freeze(e)
                    }
                })));
                return Qe = function() {
                    return t
                }, t
            }
            var Xe = m.Z.img(Qe());

            function nt(n, e, t, r, i, o) {
                var a = {
                    crop: r,
                    smartCrop: e,
                    format: i,
                    url: n,
                    width: t
                };
                return o && (a.rotation = o), $e(a)
            }

            function et(n, e) {
                var t = function(n, e) {
                        return (0, r.jsx)("source", Ke({
                            media: n
                        }, T, e))
                    },
                    i = n.url,
                    o = n.alt,
                    a = n.sm,
                    u = void 0 === a ? 480 : a,
                    l = n.md,
                    c = void 0 === l ? 768 : l,
                    d = n.lg,
                    s = void 0 === d ? 1024 : d,
                    f = n.xl,
                    m = void 0 === f ? 1280 : f,
                    v = n.responsiveImages,
                    p = void 0 === v ? {} : v,
                    h = n.crop,
                    g = n.smartCrop,
                    x = n.lazyLoad,
                    b = void 0 !== x && x,
                    w = n.ImgCustom,
                    y = n.placeholderWidth,
                    j = n.rotation,
                    P = n.intrinsicDimensions,
                    O = Ye(n, ["url", "alt", "sm", "md", "lg", "xl", "responsiveImages", "crop", "smartCrop", "lazyLoad", "ImgCustom", "placeholderWidth", "rotation", "intrinsicDimensions"]);
                if (!i) return null;
                if (i.match(/img/)) {
                    return  (0, r.jsx)("img",Je({
                        loading: b ? "lazy" : "eager",
                        alt: o,
                        src: i
                    }, O));
                }
                var W = Ge(i),
                    k = W.url,
                    S = W.format;
                if (!k || 0 === k.length) return null;
                var N = p.smUrl,
                    I = void 0 === N ? k : N,
                    R = p.mdUrl,
                    Z = void 0 === R ? k : R,
                    z = p.lgUrl,
                    D = void 0 === z ? k : z,
                    A = p.xlUrl,
                    C = void 0 === A ? k : A,
                    _ = w || Xe,
                    L = "";
                g && (L = "".concat(null === g || void 0 === g ? void 0 : g.width, ".").concat(null === g || void 0 === g ? void 0 : g.height));
                var T = b ? "data-srcset" : "srcSet",
                    E = b ? {
                        loading: "lazy",
                        "data-src": $e({
                            url: k,
                            width: c,
                            crop: h,
                            format: S,
                            rotation: j
                        }),
                        src: nt(k, L, y || Math.round(u / 7), h, S, j)
                    } : {
                        src: nt(k, L, c, h, S, j)
                    },
                    F = g && "".concat(2 * g.width, ".").concat(2 * g.height),
                    M = g && "".concat(1.5 * g.width, ".").concat(1.5 * g.height),
                    B = nt(C, F, 2 * m, h, S, j),
                    U = nt(D, F, 2 * s, h, S, j),
                    H = nt(Z, F, 2 * c, h, S, j),
                    V = nt(I, F, 2 * u, h, S, j),
                    q = nt(C, M, 1.5 * m, h, S, j),
                    G = nt(D, M, 1.5 * s, h, S, j),
                    $ = nt(Z, M, 1.5 * c, h, S, j),
                    K = nt(I, M, 1.5 * u, h, S, j),
                    J = nt(C, L, m, h, S, j),
                    Y = nt(D, L, s, h, S, j),
                    Q = nt(Z, L, c, h, S, j),
                    X = nt(I, L, u, h, S, j);
                return (0, r.jsxs)("picture", Je({}, O, {
                    ref: e,
                    children: [t("(min-resolution: 192dpi) and (min-width: 1280px),(-webkit-min-device-pixel-ratio: 2) and (min-width: 1280px)", B), t("(min-resolution: 192dpi) and (min-width: 1024px),(-webkit-min-device-pixel-ratio: 2) and (min-width: 1024px)", U), t("(min-resolution: 192dpi) and (min-width: 768px),(-webkit-min-device-pixel-ratio: 2) and (min-width: 768px)", H), t("(min-resolution: 192dpi), (-webkit-min-device-pixel-ratio: 2)", V), t("(min-resolution: 144dpi) and (min-width: 1280px),(-webkit-min-device-pixel-ratio: 1.5) and (min-width: 1280px)", q), t("(min-resolution: 144dpi) and (min-width: 1024px),(-webkit-min-device-pixel-ratio: 1.5) and (min-width: 1024px)", G), t("(min-resolution: 144dpi) and (min-width: 768px),(-webkit-min-device-pixel-ratio: 1.5) and (min-width: 768px)", $), t("(min-resolution: 144dpi), (-webkit-min-device-pixel-ratio: 1.5)", K), t("(min-width: 1280px)", J), t("(min-width: 1024px)", Y), t("(min-width: 768px)", Q), (0, r.jsx)("source", Ke({}, T, X)), (0, r.jsx)(_, Je({
                        loading: b ? "lazy" : "eager",
                        alt: o
                    }, P, E))]
                }))
            }
            var tt = (0, l.forwardRef)(et),
                rt = t(8012);

            function it(n, e, t) {
                return e in n ? Object.defineProperty(n, e, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[e] = t, n
            }

            function ot() {
                var n, e, t = (n = ["\n    // any pixel density (1x)\n    background-image: url(", ");\n\n    @media (min-width: 768px) {\n      background-image: url(", ");\n    }\n    @media (min-width: 1024px) {\n      background-image: url(", ");\n    }\n    @media (min-width: 1280px) {\n      background-image: url(", ");\n    }\n\n    // >1.5x pixel density\n    @media (min-resolution: 144dpi), (-webkit-min-device-pixel-ratio: 1.5) {\n      background-image: url(", ");\n    }\n    @media (min-resolution: 144dpi) and (min-width: 768px),\n      (-webkit-min-device-pixel-ratio: 1.5) and (min-width: 768px) {\n      background-image: url(", ");\n    }\n    @media (min-resolution: 144dpi) and (min-width: 1024px),\n      (-webkit-min-device-pixel-ratio: 1.5) and (min-width: 1024px) {\n      background-image: url(", ");\n    }\n    @media (min-resolution: 144dpi) and (min-width: 1280px),\n      (-webkit-min-device-pixel-ratio: 1.5) and (min-width: 1280px) {\n      background-image: url(", ");\n    }\n\n    // >2x pixel density\n    @media (min-resolution: 192dpi), (-webkit-min-device-pixel-ratio: 2) {\n      background-image: url(", ");\n    }\n    @media (min-resolution: 192dpi) and (min-width: 768px),\n      (-webkit-min-device-pixel-ratio: 2) and (min-width: 768px) {\n      background-image: url(", ");\n    }\n    @media (min-resolution: 192dpi) and (min-width: 1024px),\n      (-webkit-min-device-pixel-ratio: 2) and (min-width: 1024px) {\n      background-image: url(", ");\n    }\n    @media (min-resolution: 192dpi) and (min-width: 1280px),\n      (-webkit-min-device-pixel-ratio: 2) and (min-width: 1280px) {\n      background-image: url(", ");\n    }\n  "], e || (e = n.slice(0)), Object.freeze(Object.defineProperties(n, {
                    raw: {
                        value: Object.freeze(e)
                    }
                })));
                return ot = function() {
                    return t
                }, t
            }
            var at = function(n) {
                    var e = n.resizeDimension,
                        t = void 0 === e ? "width" : e,
                        r = n.lg,
                        i = n.md,
                        o = n.sm,
                        a = n.url,
                        u = n.xl,
                        l = n.responsiveImages,
                        c = void 0 === l ? {} : l;
                    if (!a) return "";
                    var d = Ge(a),
                        s = d.url,
                        f = d.format,
                        m = c.smUrl,
                        v = void 0 === m ? s : m,
                        p = c.mdUrl,
                        h = void 0 === p ? s : p,
                        g = c.lgUrl,
                        x = void 0 === g ? s : g,
                        b = c.xlUrl,
                        w = void 0 === b ? s : b;
                    return (0, rt.iv)(ot(), $e(it({
                        url: v || "",
                        format: f
                    }, t, o)), $e(it({
                        url: h || "",
                        format: f
                    }, t, i)), $e(it({
                        url: x || "",
                        format: f
                    }, t, r)), $e(it({
                        url: w || "",
                        format: f
                    }, t, u)), $e(it({
                        url: v || "",
                        format: f
                    }, t, 1.5 * o)), $e(it({
                        url: h || "",
                        format: f
                    }, t, 1.5 * i)), $e(it({
                        url: x || "",
                        format: f
                    }, t, 1.5 * r)), $e(it({
                        url: w || "",
                        format: f
                    }, t, 1.5 * u)), $e(it({
                        url: v || "",
                        format: f
                    }, t, 2 * o)), $e(it({
                        url: h || "",
                        format: f
                    }, t, 2 * i)), $e(it({
                        url: x || "",
                        format: f
                    }, t, 2 * r)), $e(it({
                        url: w || "",
                        format: f
                    }, t, 2 * u))).styles
                },
                ut = {
                    background: -1,
                    header: 1,
                    mobileNav: 18,
                    mobileNavButton: 19,
                    registryProductModal: 20
                };

            function lt() {
                var n, e, t = (n = ["\n  ", "\n\n  background-color: ", ";\n  background-position: top center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  bottom: 0;\n  left: 0;\n  position: fixed;\n  right: 0;\n  z-index: ", ";\n\n  // Mobile only: Shift background down from behind mobile nav bar\n  ", "\n  @media (min-width: 768px) {\n    top: 0;\n  }\n\n  // bug fix for safari mobile: missing background color when bottom action bar is hidden on scroll\n  bottom: -120px;\n\n  ", "\n"], e || (e = n.slice(0)), Object.freeze(Object.defineProperties(n, {
                    raw: {
                        value: Object.freeze(e)
                    }
                })));
                return lt = function() {
                    return t
                }, t
            }
            var ct = m.Z.div(lt(), (function(n) {
                    var e, t = {
                        url: n.theme.images.background,
                        responsiveImages: null === (e = n.theme.responsiveImages) || void 0 === e ? void 0 : e.background,
                        sm: 800,
                        md: 1200,
                        lg: 1600,
                        xl: 2e3
                    };
                    return at(t)
                }), (function(n) {
                    return n.theme.colors.background
                }), ut.background, (function(n) {
                    return n.offsetBackgroundForNavBar ? "top: 56px;" : "top: 0;"
                }), (function(n) {
                    return n.theme.components.BackgroundImage
                })),
                dt = (0, l.memo)(ct);

            function st(n, e) {
                return e || (e = n.slice(0)), Object.freeze(Object.defineProperties(n, {
                    raw: {
                        value: Object.freeze(e)
                    }
                }))
            }

            function ft() {
                var n = st(["\n  ", "\n"]);
                return ft = function() {
                    return n
                }, n
            }

            function mt() {
                var n = st(["\n  position: relative;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  pointer-events: ", ";\n\n  ", ";\n"]);
                return mt = function() {
                    return n
                }, n
            }

            function vt() {
                var n = st(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  margin-top: auto;\n  position: relative;\n  width: 100%;\n\n  ", "\n"]);
                return vt = function() {
                    return n
                }, n
            }

            function pt() {
                var n = st(["\n  width: 100%;\n  max-height: 120px;\n  z-index: -1;\n\n  ", "\n"]);
                return pt = function() {
                    return n
                }, n
            }
            var ht = m.Z.div(ft(), (function(n) {
                    return n.theme.components.Card
                })),
                gt = m.Z.div(mt(), (function(n) {
                    return "none" === n.pointer ? "none" : "auto"
                }), (function(n) {
                    return n.theme.components.Page
                })),
                xt = m.Z.footer(vt(), (function(n) {
                    return n.theme.components.Footer
                })),
                bt = (0, m.Z)(tt)(pt(), (function(n) {
                    return n.theme.components.BottomImage
                })),
                wt = "".concat("./favicon.ico");

            function yt(n) {
                var e, t = n.children,
                    a = n.footer,
                    l = n.offsetBackgroundForNavBar,
                    c = void 0 === l || l,
                    d = (0, i.a)(),
                    s = ((0, o.useRouter)() || {
                        query: {
                            pointerEvents: "auto"
                        }
                    }).query,
                    f = "undefined" === typeof s.pointerEvents || Array.isArray(s.pointerEvents) ? "auto" : "none",
                    m = d.images.bottom,
                    v = (d.responsiveImages || {}).bottom;
                return (0, r.jsxs)(ht, {
                    children: [(0, r.jsxs)(u(), {
                        children: [(0, r.jsx)("link", {
                            rel: "icon",
                            type: "image/x-icon",
                            href: wt
                        }), (0, r.jsx)("meta", {
                            name: "theme-color",
                            content: null === d || void 0 === d || null === (e = d.colors) || void 0 === e ? void 0 : e.background
                        })]
                    }), (0, r.jsx)(Ln.Z, {}), (0, r.jsx)(dt, {
                        offsetBackgroundForNavBar: c
                    }), (0, r.jsx)(gt, {
                        pointer: f,
                        children: t
                    }), (0, r.jsxs)(xt, {
                        children: [a, (0, r.jsx)(bt, {
                            url: m,
                            placeholderWidth: 100,
                            responsiveImages: v,
                            alt: ""
                        })]
                    })]
                })
            }
            var jt = (0, l.memo)(yt);

            function Pt(n, e) {
                return e || (e = n.slice(0)), Object.freeze(Object.defineProperties(n, {
                    raw: {
                        value: Object.freeze(e)
                    }
                }))
            }

            function Ot() {
                var n = Pt(["\n  line-height: 1.75;\n  ", "\n  margin: 12px 0;\n  text-align: center;\n  & a {\n    ", ";\n    text-decoration: underline;\n  }\n"]);
                return Ot = function() {
                    return n
                }, n
            }

            function Wt() {
                var n = Pt(["\n  ", ";\n  ", ";\n"]);
                return Wt = function() {
                    return n
                }, n
            }

            function kt() {
                var n = Pt(["\n  &:hover {\n    text-decoration: underline;\n    cursor: pointer;\n  }\n\n  ", ";\n  ", ";\n"]);
                return kt = function() {
                    return n
                }, n
            }
            var St = m.Z.div(Ot(), Rn("tiny"), (function(n) {
                    return n.theme.components.Link
                })),
                Nt = m.Z.a(Wt(), Rn("tiny"), (function(n) {
                    return n.theme.components.Link
                })),
                It = {
                    textDecoration: "underline"
                },
                Rt = m.Z.p(kt(), Rn("tiny"), (function(n) {
                    return n.theme.components.Link
                }));

            function Zt() {
                globalThis.UnionConsentManagement.togglePreferencesModal()
            }

            function zt() {
              return null;
            }
            var Dt = (0, l.memo)(zt);

            function At(n, e) {
                return e || (e = n.slice(0)), Object.freeze(Object.defineProperties(n, {
                    raw: {
                        value: Object.freeze(e)
                    }
                }))
            }

            function Ct() {
                var n = At(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 32px 20px;\n  width: 100%;\n  z-index: ", ";\n  border: 12px solid\n    ", ";\n  background-color: ", ";\n\n  @media (max-width: 768px) {\n    border-left: none;\n    border-right: none;\n    padding: 26px 20px;\n\n    border: 10px solid\n      ", ";\n  }\n"]);
                return Ct = function() {
                    return n
                }, n
            }

            function _t() {
                var n = At(["\n  margin: 0 auto;\n  max-width: 700px;\n  text-align: center;\n  ", ";\n  color: ", ";\n"]);
                return _t = function() {
                    return n
                }, n
            }
            var Lt = m.Z.div(Ct(), ut.header, (function(n) {
                    return n.theme.colors.background
                }), (function(n) {
                    return n.theme.fonts.s6.color
                }), (function(n) {
                    return n.theme.colors.background
                })),
                Tt = (0, m.Z)("p")(_t(), (function(n) {
                    return n.theme.fonts.s6
                }), (function(n) {
                    return n.theme.colors.background
                }));

            function Et(n) {
                var e = n.announcement,
                    t = n.className;
                if (!e || !e.show) return null;
                var i = e.message;
                return (0, r.jsx)(Lt, {
                    className: t,
                    children: (0, r.jsx)(Tt, {
                        children: i
                    })
                })
            }
            var Ft = (0, l.memo)(Et),
                Mt = t(9245),
                Bt = t.n(Mt);

            function Ut(n) {
                return Math.ceil((Date.parse(n) - Date.now()) / 864e5)
            }
            var Ht = function(n) {
                var e = n.hideDate,
                    t = n.weddingDate,
                    r = n.weddingDateFormat,
                    i = n.weddingDateRangeStart,
                    o = null;
                return t && !e && (o = Ut("range" === r && i ? i : t)), o
            };

            function Vt(n, e) {
                return e || (e = n.slice(0)), Object.freeze(Object.defineProperties(n, {
                    raw: {
                        value: Object.freeze(e)
                    }
                }))
            }

            function qt() {
                var n = Vt(["\n  line-height: 1;\n  margin: 16px auto;\n\n  ", "\n\n  /* Title is white when over hero photo */\n  ", "\n\n  ", "\n"]);
                return qt = function() {
                    return n
                }, n
            }

            function Gt() {
                var n = Vt(["\n  line-height: 1;\n  margin: 8px 0;\n\n  ", "\n\n  ", "\n\n  ", "\n"]);
                return Gt = function() {
                    return n
                }, n
            }

            function $t() {
                var n = Vt(["\n  padding: 0 4% 10px 4%;\n  text-align: center;\n  width: 100%;\n  z-index: ", ";\n"]);
                return $t = function() {
                    return n
                }, n
            }

            function Kt() {
                var n = Vt(["\n  img {\n    margin: 0 auto;\n    width: 200px;\n    height: 200px;\n  }\n  ", "\n"]);
                return Kt = function() {
                    return n
                }, n
            }

            function Jt() {
                var n = Vt([""]);
                return Jt = function() {
                    return n
                }, n
            }
            var Yt = "text-shadow: 0 0 50px hsla(0,0%,0%,1);",
                Qt = m.Z.h1(qt(), Rn("s1"), (function(n) {
                    return n.heroVersion ? "".concat(Yt, " color: white;") : ""
                }), (function(n) {
                    return n.theme.components.SiteTitle
                })),
                Xt = m.Z.div(Gt(), (function(n) {
                    return n.heroVersion ? "".concat(Yt, " color: white;") : ""
                }), (function(n) {
                    return n.theme.components.SiteSubtitle
                }), Rn("s5")),
                nr = m.Z.header($t(), ut.header),
                er = m.Z.div(Kt(), (function(n) {
                    return n.theme.components.InitialsLockup
                })),
                tr = m.Z.img(Jt());

            function rr(n) {
                var e = n.className,
                    t = n.heroVersion,
                    i = (0, l.useContext)(ce).data,
                    o = Le(),
                    a = Ne();
                if (kn(null === i || void 0 === i ? void 0 : i.weddingWebsiteResult)) {
                    var u, c, d, s, f, m, v, p, h, g, x, b, w, y = {
                            hideDate: (null === i || void 0 === i || null === (u = i.weddingDatePreferences) || void 0 === u ? void 0 : u.datePreference) === $.Tba,
                            weddingDateFormat: null === i || void 0 === i || null === (c = i.weddingDatePreferences) || void 0 === c ? void 0 : c.weddingDateFormat,
                            weddingDateRangeStart: null === i || void 0 === i || null === (d = i.weddingDatePreferences) || void 0 === d ? void 0 : d.weddingDateRangeStart,
                            weddingDate: null === i || void 0 === i || null === (s = i.weddingDatePreferences) || void 0 === s ? void 0 : s.weddingDate
                        },
                        j = Ht(y),
                        P = [o, null === i || void 0 === i || null === (f = i.weddingWebsiteResult) || void 0 === f ? void 0 : f.weddingLocation].filter((function(n) {
                            return null !== n && !Bt()(n)
                        })).join(" \u2022 ");
                    return (0, r.jsx)(nr, {
                        className: e,
                        children: (0, r.jsxs)(r.Fragment, {
                            children: [(null === i || void 0 === i || null === (m = i.weddingWebsiteResult) || void 0 === m ? void 0 : m.firstName) && (null === (v = i.weddingWebsiteResult) || void 0 === v ? void 0 : v.fianceFirstName) && (null === (p = a.config) || void 0 === p ? void 0 : p.displayInitialsLockup) && i.weddingWebsiteResult.theme ? (0, r.jsx)(er, {
                                children: (0, r.jsx)(tr, {
                                    src: "".concat("", "/lockup/initials?firstName=").concat(i.weddingWebsiteResult.firstName, "&fianceFirstName=").concat(i.weddingWebsiteResult.fianceFirstName, "&themeId=").concat(i.weddingWebsiteResult.theme.id),
                                    alt: "".concat(i.weddingWebsiteResult.firstName, " & ").concat(i.weddingWebsiteResult.fianceFirstName)
                                })
                            }) : null, (null === i || void 0 === i || null === (h = i.weddingWebsiteResult) || void 0 === h ? void 0 : h.firstName) && (null === (g = i.weddingWebsiteResult) || void 0 === g ? void 0 : g.fianceFirstName) ? (0, r.jsx)(Qt, {
                                "data-testid": "header-couple-names",
                                heroVersion: t,
                                children: "".concat(i.weddingWebsiteResult.firstName, " ").concat((null === (x = a.config) || void 0 === x ? void 0 : x.nameSeparator) ? null === (b = a.config) || void 0 === b ? void 0 : b.nameSeparator : "&", " ").concat(i.weddingWebsiteResult.fianceFirstName)
                            }) : null, (0, r.jsx)(Xt, {
                                "data-testid": "header-wedding-date-location",
                                heroVersion: t,
                                children: P
                            }), j && j > 0 && !(null === i || void 0 === i || null === (w = i.weddingDatePreferences) || void 0 === w ? void 0 : w.hideCountdown) ? (0, r.jsx)(Xt, {
                                "data-testid": "header-countdown",
                                heroVersion: t,
                                children: "".concat(j, " Days To Go!")
                            }) : null]
                        })
                    })
                }
                return null
            }
            var ir = (0, l.memo)(rr);

            function or(n, e, t) {
                return e in n ? Object.defineProperty(n, e, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[e] = t, n
            }

            function ar(n) {
                for (var e = 1; e < arguments.length; e++) {
                    var t = null != arguments[e] ? arguments[e] : {},
                        r = Object.keys(t);
                    "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(n) {
                        return Object.getOwnPropertyDescriptor(t, n).enumerable
                    })))), r.forEach((function(e) {
                        or(n, e, t[e])
                    }))
                }
                return n
            }

            function ur(n, e) {
                if (null == n) return {};
                var t, r, i = function(n, e) {
                    if (null == n) return {};
                    var t, r, i = {},
                        o = Object.keys(n);
                    for (r = 0; r < o.length; r++) t = o[r], e.indexOf(t) >= 0 || (i[t] = n[t]);
                    return i
                }(n, e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(n);
                    for (r = 0; r < o.length; r++) t = o[r], e.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(n, t) && (i[t] = n[t])
                }
                return i
            }

            function lr(n, e) {
                return e || (e = n.slice(0)), Object.freeze(Object.defineProperties(n, {
                    raw: {
                        value: Object.freeze(e)
                    }
                }))
            }

            function cr() {
                var n = lr(["\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  width: fit-content;\n"]);
                return cr = function() {
                    return n
                }, n
            }

            function dr() {
                var n = lr(["\n  display: block;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: black;\n  opacity: 0.2;\n  top: 0;\n"]);
                return dr = function() {
                    return n
                }, n
            }

            function sr() {
                var n = lr(["\n  width: 100%;\n\n  .horizontalLayout.homePage & {\n    @media (min-width: 768px) {\n      position: absolute;\n      top: 50%;\n      left: 0;\n      transform: translateY(-50%);\n    }\n  }\n\n  .verticalLayout.homePage & {\n    @media (max-width: 767px) {\n      position: absolute;\n      top: 50%;\n      transform: translateY(-50%);\n      left: 0;\n    }\n  }\n"]);
                return sr = function() {
                    return n
                }, n
            }

            function fr() {
                var n = lr(["\n  .horizontalLayout.homePage & {\n    @media (min-width: 768px) {\n      width: 100%;\n      padding-bottom: 50%;\n      position: relative;\n      overflow: hidden;\n    }\n  }\n"]);
                return fr = function() {
                    return n
                }, n
            }

            function mr() {
                var n = lr(["\n  width: 100%;\n  position: relative;\n  margin: 0 auto;\n  .verticalLayout.homePage & {\n    @media (max-width: 767px) {\n      height: 50%;\n      overflow: hidden;\n      padding-bottom: 91.666%;\n    }\n    @media (min-width: 768px) {\n      position: sticky;\n      top: 1rem;\n    }\n  }\n  ", "\n"]);
                return mr = function() {
                    return n
                }, n
            }
            var vr = (0, m.Z)(ir)(cr()),
                pr = m.Z.div(dr()),
                hr = (0, m.Z)(tt)(sr()),
                gr = m.Z.div(fr()),
                xr = m.Z.div(mr(), (function(n) {
                    return n.theme.components.Hero
                }));

            function br(n) {
                var e = n.className,
                    t = n.src,
                    i = n.headerOnHero,
                    o = n.landscapeCrop,
                    a = n.setHeroDimensions,
                    u = ur(n, ["className", "src", "headerOnHero", "landscapeCrop", "setHeroDimensions"]),
                    c = (0, l.useContext)(ce).data,
                    d = (0, l.useRef)(null);
                if ((0, l.useEffect)((function() {
                        d.current && "function" === typeof a && a({
                            width: d.current.offsetWidth,
                            height: d.current.offsetHeight
                        })
                    }), [a]), !kn(null === c || void 0 === c ? void 0 : c.weddingWebsiteResult)) return null;
                var s = (null === c || void 0 === c ? void 0 : c.weddingWebsiteResult.firstName) && c.weddingWebsiteResult.fianceFirstName ? "".concat(c.weddingWebsiteResult.firstName, " & ").concat(c.weddingWebsiteResult.fianceFirstName, " Home Page Banner") : "Home Page Banner";
                return (0, r.jsxs)(xr, {
                    className: e,
                    children: [i ? (0, r.jsx)(vr, {
                        heroVersion: !0
                    }) : null, (0, r.jsx)(gr, {
                        children: (0, r.jsx)(hr, ar({
                            url: t,
                            crop: o,
                            alt: s,
                            ref: d
                        }, u))
                    }), i ? (0, r.jsx)(pr, {}) : null]
                })
            }
            var wr = (0, l.memo)(br);

            function yr(n, e) {
                (null == e || e > n.length) && (e = n.length);
                for (var t = 0, r = new Array(e); t < e; t++) r[t] = n[t];
                return r
            }

            function jr(n, e, t) {
                return e in n ? Object.defineProperty(n, e, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[e] = t, n
            }

            function Pr(n) {
                return function(n) {
                    if (Array.isArray(n)) return yr(n)
                }(n) || function(n) {
                    if ("undefined" !== typeof Symbol && null != n[Symbol.iterator] || null != n["@@iterator"]) return Array.from(n)
                }(n) || function(n, e) {
                    if (!n) return;
                    if ("string" === typeof n) return yr(n, e);
                    var t = Object.prototype.toString.call(n).slice(8, -1);
                    "Object" === t && n.constructor && (t = n.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return yr(n, e)
                }(n) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var Or = "WeddingPage";

            function Wr() {
                var n, e = (0, l.useContext)(ce).data,
                    t = ve(),
                    r = me(),
                    i = kn(null === e || void 0 === e ? void 0 : e.weddingWebsiteResult) ? null === (n = null === e || void 0 === e ? void 0 : e.weddingWebsiteResult.pages) || void 0 === n ? void 0 : n.filter((function(n) {
                        return !!n.title && (!("ContentPage" === n.type && "details" === n.routeName || "GuestBookPage" === n.type && "guest-book" === n.routeName) && (!("RegistryPage" !== n.type || !n.show) || !(r && n.items.length < 1 && n.type !== fe) && ((!r || n.type !== Or) && (n.show || n.type === Or))))
                    })).map((function(n) {
                        return n.type === Or ? function(n) {
                            for (var e = 1; e < arguments.length; e++) {
                                var t = null != arguments[e] ? arguments[e] : {},
                                    r = Object.keys(t);
                                "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(n) {
                                    return Object.getOwnPropertyDescriptor(t, n).enumerable
                                })))), r.forEach((function(e) {
                                    jr(n, e, t[e])
                                }))
                            }
                            return n
                        }({}, n, {
                            title: "Home"
                        }) : n
                    })) : void 0;
                return "undefined" !== typeof i && t ? Pr(i).concat([
                //     {
                //     id: 0,
                //     title: "RSVP",
                //     routeName: "rsvp",
                //     items: [],
                //     type: "RsvpNavItem"
                // }
            ]) : i
            }

            function kr() {
                var n = Wr(),
                    e = !1;
                return null === n || void 0 === n || n.forEach((function(n) {
                    n.type !== fe && "RsvpNavItem" !== n.type && (e = !0)
                })), {
                    pages: n,
                    showNav: e
                }
            }

            function Sr() {
                var n = (0, f.useRouter)().query;
                return n.route && n.route.length > 0 && "undefined" !== typeof n.route[0] ? n.route[0] : ""
            }
            var Nr = (0, l.createContext)({
                trackingInfoLoaded: !1
            });

            function Ir(n) {
                var e = n.children,
                    t = n.data,
                    i = (0, l.useState)(void 0),
                    o = i[0],
                    a = i[1],
                    u = (0, l.useState)(!1),
                    d = u[0],
                    s = u[1],
                    f = (0, l.useContext)(we).coupleInfo,
                    m = new c.Z,
                    v = (0, l.useMemo)((function() {
                        var n;
                        return (null === t || void 0 === t || null === (n = t.events) || void 0 === n ? void 0 : n.filter((function(n) {
                            return Boolean(n.requireRsvp)
                        })).length) || 0
                    }), [t.events]),
                    p = me(),
                    h = function() {
                        var n = (0, l.useContext)(ce).data,
                            e = me();
                        return (0, l.useMemo)((function() {
                            return kn(null === n || void 0 === n ? void 0 : n.weddingWebsiteResult) && (null === n || void 0 === n ? void 0 : n.weddingWebsiteResult.pages) ? e ? function(n) {
                                var e = n.pages;
                                return e ? e.filter((function(n) {
                                    return n.items.length > 0
                                })) : []
                            }(n.weddingWebsiteResult) : n.weddingWebsiteResult.pages.filter((function(n) {
                                return Boolean(n.show)
                            })) : []
                        }), [n, e])
                    }();
                (0, l.useEffect)((function() {
                    var n, e = kn(t.weddingWebsiteResult) && t.weddingWebsiteResult;
                    if (e && f) {
                        var r, i, o, u, l, c = Boolean(e.firstName) && Boolean(e.fianceFirstName),
                            d = Boolean(e.lastName) && Boolean(e.fianceLastName),
                            g = {
                                hasWWSAccommodations: (n = e.pages, Boolean(null === n || void 0 === n ? void 0 : n.find((function(n) {
                                    var e = n.items;
                                    return Boolean(null === e || void 0 === e ? void 0 : e.find((function(n) {
                                        return "AccommodationItem" === n.type
                                    })))
                                })))),
                                hasWWSCoverPhoto: Boolean(e.coverPhoto),
                                hasWWSFirstNames: c,
                                hasWWSLastNames: d,
                                hasWWSWeddingDate: Boolean(null === (r = t.wedding) || void 0 === r ? void 0 : r.weddingDate),
                                hasWWSWeddingLocation: Boolean(e.weddingLocation),
                                hasWWSRegistry: (null === (i = f.registries) || void 0 === i ? void 0 : i.length) > 0,
                                rsvpOnCount: v,
                                security: (null === (o = t.guestWedding) || void 0 === o ? void 0 : o.isPrivateRsvp) ? "private" : "public",
                                platform: pe.test(navigator.userAgent) ? "mobile" : "web",
                                guestUUID: null === m || void 0 === m ? void 0 : m.get("gid"),
                                ownerUUID: e.userUuid || "",
                                weddingUUID: e.weddingUuid || "",
                                customDomain: Boolean(e.purchaseDomain),
                                product: "wedding websites",
                                themeName: (null === (u = e.theme) || void 0 === u ? void 0 : u.name) || "",
                                themeId: (null === (l = e.theme) || void 0 === l ? void 0 : l.id) || 1,
                                numPagesVisible: (null === h || void 0 === h ? void 0 : h.length) || 0,
                                wwsPages: (null === h || void 0 === h ? void 0 : h.map((function(n) {
                                    return n.title || ""
                                })).filter(Boolean)) || [],
                                wwsTemplateVersion: p ? "Lite Site" : "v2"
                            };
                        a(g), s(!0)
                    }
                }), [t, f]), (0, l.useEffect)((function() {
                    window.location.pathname.endsWith("/registry") || window.analytics.page()
                }), []);
                var g = (0, l.useMemo)((function() {
                    return {
                        trackingInfo: o,
                        trackingInfoLoaded: d
                    }
                }), [o, d]);
                return (0, r.jsx)(Nr.Provider, {
                    value: g,
                    children: e
                })
            }
            var Rr = (0, l.memo)(Ir);

            function Zr(n, e) {
                (null == e || e > n.length) && (e = n.length);
                for (var t = 0, r = new Array(e); t < e; t++) r[t] = n[t];
                return r
            }

            function zr(n, e, t) {
                return e in n ? Object.defineProperty(n, e, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[e] = t, n
            }

            function Dr(n) {
                return function(n) {
                    if (Array.isArray(n)) return Zr(n)
                }(n) || function(n) {
                    if ("undefined" !== typeof Symbol && null != n[Symbol.iterator] || null != n["@@iterator"]) return Array.from(n)
                }(n) || function(n, e) {
                    if (!n) return;
                    if ("string" === typeof n) return Zr(n, e);
                    var t = Object.prototype.toString.call(n).slice(8, -1);
                    "Object" === t && n.constructor && (t = n.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return Zr(n, e)
                }(n) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var Ar = {
                photo: "Photo Inspecting",
                rsvp: "RSVP Interaction",
                guest: "Guest Interaction",
                visit: "Wedding Website Guest Visit"
            };
            var Cr = function(n, e, t) {
                    var r = (0, l.useContext)(Nr),
                        i = r.trackingInfo,
                        o = r.trackingInfoLoaded,
                        a = (0, l.useContext)(ce).data,
                        u = (0, l.useState)([]),
                        c = u[0],
                        d = u[1],
                        s = (0, l.useCallback)((function(n, e) {
                            var r = t || e;
                            d(Dr(c).concat([{
                                selection: n,
                                userDecisionArea: r
                            }]))
                        }), [t, c]);
                    return (0, l.useEffect)((function() {
                        if (kn(null === a || void 0 === a ? void 0 : a.weddingWebsiteResult)) {
                            var t = (null === a || void 0 === a ? void 0 : a.weddingWebsiteResult.announcement) || {},
                                r = t.message,
                                u = t.show;
                            if (o && c.length > 0) {
                                var l = function(n) {
                                    return "" !== n ? n : "home"
                                }(e);
                                c.forEach((function(e) {
                                    var t, o, c = e.selection,
                                        d = e.userDecisionArea;
                                    kn(null === a || void 0 === a ? void 0 : a.weddingWebsiteResult) && window.analytics.track(Ar[n], function(n) {
                                        for (var e = 1; e < arguments.length; e++) {
                                            var t = null != arguments[e] ? arguments[e] : {},
                                                r = Object.keys(t);
                                            "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(n) {
                                                return Object.getOwnPropertyDescriptor(t, n).enumerable
                                            })))), r.forEach((function(e) {
                                                zr(n, e, t[e])
                                            }))
                                        }
                                        return n
                                    }({
                                        selection: c,
                                        userDecisionArea: d
                                    }, i, {
                                        currentPage: l,
                                        dateHidden: (null === a || void 0 === a || null === (t = a.weddingWebsiteResult) || void 0 === t ? void 0 : t.hideDate) || !1,
                                        hasAnnouncement: Boolean(null === a || void 0 === a || null === (o = a.weddingWebsiteResult) || void 0 === o ? void 0 : o.announcement) && u || !1,
                                        announcementMessage: r || null
                                    }))
                                })), d([])
                            }
                        }
                    }), [o, c]), s
                },
                _r = t(1664),
                Lr = t.n(_r);

            function Tr(n, e) {
                return e || (e = n.slice(0)), Object.freeze(Object.defineProperties(n, {
                    raw: {
                        value: Object.freeze(e)
                    }
                }))
            }

            function Er() {
                var n = Tr(["\n  display: block;\n  padding: 0;\n  margin: 0;\n\n  :hover {\n    text-decoration: none;\n  }\n"]);
                return Er = function() {
                    return n
                }, n
            }

            function Fr() {
                var n = Tr(["\n  ", "\n  border-bottom: 2px solid transparent;\n  display: block;\n  letter-spacing: 2px;\n  line-height: 1;\n  margin: 0 auto;\n  padding: 8px 8px 6px;\n  text-decoration: none;\n  transition: all 0.25s;\n  width: fit-content;\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n"]);
                return Fr = function() {
                    return n
                }, n
            }
            var Mr = m.Z.a(Er()),
                Br = m.Z.span(Fr(), Rn("s6"), (function(n) {
                    var e = n.active,
                        t = n.desktop,
                        r = n.theme;
                    return t && !e ? "\n    :hover {\n      color: ".concat(r.colors.primaryHover, ";\n      border-bottom: 2px solid ").concat(Dn(r.colors.primaryHover, "70%"), ";\n    }\n  ") : ""
                }), (function(n) {
                    var e = n.active,
                        t = n.theme;
                    return e ? "\n    border-bottom: 2px solid ".concat(t.fonts.s5.color, ";\n  ") : ""
                }), (function(n) {
                    var e;
                    return null === (e = n.theme.components.Nav) || void 0 === e ? void 0 : e.Link
                }), (function(n) {
                    var e, t = n.active,
                        r = n.theme;
                    return t ? null === (e = r.components.Nav) || void 0 === e ? void 0 : e.LinkActive : void 0
                })),
                Ur = function() {};

            function Hr(n) {
                var e = n.setMobileNavOpen,
                    t = void 0 === e ? Ur : e,
                    i = n.className,
                    o = n.desktop,
                    a = n.handleTracking,
                    u = n.href,
                    c = n.title,
                    d = n.route,
                    s = n.as,
                    f = Sr() === d,
                    m = !["", "registry"].includes(d),
                    v = (0, l.useCallback)((function() {
                        t(!1), a(d)
                    }), [a, d, t]);
                return (0, r.jsx)(Lr(), {
                    href: u,
                    as: s,
                    passHref: !0,
                    children: (0, r.jsx)(Mr, {
                        rel: m ? "nofollow" : void 0,
                        className: i,
                        onClick: v,
                        children: (0, r.jsx)(Br, {
                            active: f,
                            desktop: o,
                            children: c
                        })
                    })
                })
            }
            var Vr = (0, l.memo)(Hr);

            function qr(n, e) {
                return e || (e = n.slice(0)), Object.freeze(Object.defineProperties(n, {
                    raw: {
                        value: Object.freeze(e)
                    }
                }))
            }

            function Gr() {
                var n = qr(["\n  margin: 0;\n  padding: 8px 0;\n"]);
                return Gr = function() {
                    return n
                }, n
            }

            function $r() {
                var n = qr(["\n  display: inline-block;\n  list-style: none;\n  padding: 0 8px;\n"]);
                return $r = function() {
                    return n
                }, n
            }
            var Kr = (0, m.Z)(Vr)(Gr()),
                Jr = m.Z.li($r());

            function Yr(n) {
                var e = n.page,
                    t = n.handleTracking,
                    i = n.queryParams,
                    o = i.pathPrefix,
                    a = i.slug,
                    u = i.preview,
                    l = i.themeId,
                    c = e.id,
                    d = e.title,
                    s = e.routeName || "",
                    f = u && l ? "?".concat(new URLSearchParams({
                        preview: u.toString(),
                        themeId: l.toString()
                    }).toString()) : "",
                    m = "/".concat(o, "/").concat(a, "/").concat(s).concat(f);
                return (0, r.jsx)(Jr, {
                    children: (0, r.jsx)(Kr, {
                        href: m,
                        as: m,
                        desktop: !0,
                        handleTracking: t,
                        title: d || "",
                        route: s
                    }, c)
                })
            }
            var Qr = (0, l.memo)(Yr);

            function Xr(n, e) {
                return e || (e = n.slice(0)), Object.freeze(Object.defineProperties(n, {
                    raw: {
                        value: Object.freeze(e)
                    }
                }))
            }

            function ni() {
                var n = Xr(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin: 0;\n  padding: 8px 16px;\n"]);
                return ni = function() {
                    return n
                }, n
            }

            function ei() {
                var n = Xr(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n"]);
                return ei = function() {
                    return n
                }, n
            }

            function ti() {
                var n = Xr(["\n  display: none;\n  width: 100%;\n  ", "\n\n  @media (min-width: 768px) {\n    display: block;\n    z-index: 1;\n  }\n"]);
                return ti = function() {
                    return n
                }, n
            }
            var ri = m.Z.div(ni()),
                ii = m.Z.ul(ei()),
                oi = m.Z.nav(ti(), (function(n) {
                    var e;
                    return null === (e = n.theme.components.Nav) || void 0 === e ? void 0 : e.Desktop
                }));

            function ai(n) {
                var e = n.pages,
                    t = Sr(),
                    i = (0, f.useRouter)().query,
                    o = "desktop nav",
                    a = Cr("guest", t, o),
                    u = Cr("rsvp", t, o),
                    c = (0, l.useCallback)((function(n) {
                        "rsvp" === n && u(n, ""), a(n, "")
                    }), [a, u]),
                    d = (0, l.useMemo)((function() {
                        if (e) {
                            var n = Math.ceil(e.length / 2);
                            return [e.slice(0, n), e.slice(n)]
                        }
                        return [
                            [],
                            []
                        ]
                    }), [e]),
                    s = d[0],
                    m = d[1];
                return (0, r.jsx)(oi, {
                    children: (0, r.jsxs)(ri, {
                        children: [(0, r.jsx)(ii, {
                            "data-testid": "desktop-nav-row-1",
                            children: s.map((function(n) {
                                return (0, r.jsx)(Qr, {
                                    page: n,
                                    handleTracking: c,
                                    queryParams: i
                                }, n.id)
                            }))
                        }), (0, r.jsx)(ii, {
                            "data-testid": "desktop-nav-row-2",
                            children: m.map((function(n) {
                                return (0, r.jsx)(Qr, {
                                    page: n,
                                    handleTracking: c,
                                    queryParams: i
                                }, n.id)
                            }))
                        })]
                    })
                })
            }
            var ui = (0, l.memo)(ai);

            function li() {
                var n, e, t = (n = ["\n  align-items: center;\n  display: flex;\n  height: 56px;\n  justify-content: center;\n  width: 100%;\n\n  ", "\n"], e || (e = n.slice(0)), Object.freeze(Object.defineProperties(n, {
                    raw: {
                        value: Object.freeze(e)
                    }
                })));
                return li = function() {
                    return t
                }, t
            }
            var ci = m.Z.h2(li(), Rn("s3"));

            function di() {
                var n, e, t = Ne(),
                    i = (0, l.useContext)(ce).data,
                    o = Sr();
                if (!kn(null === i || void 0 === i ? void 0 : i.weddingWebsiteResult)) return null;
                var a = null === (n = null === i || void 0 === i ? void 0 : i.weddingWebsiteResult.pages) || void 0 === n ? void 0 : n.find((function(n) {
                    return n.routeName === o
                }));
                if (!a) return null;
                var u = Ze({
                        firstName: (null === i || void 0 === i ? void 0 : i.weddingWebsiteResult.firstName) || "",
                        fianceFirstName: (null === i || void 0 === i ? void 0 : i.weddingWebsiteResult.fianceFirstName) || ""
                    }) || a.title,
                    c = "" === a.routeName ? u : a.title;
                return (0, r.jsx)(r.Fragment, {
                    children: !(null === (e = t.config) || void 0 === e ? void 0 : e.hideMobileInitials) && (0, r.jsx)(ci, {
                        children: c
                    })
                })
            }
            var si = (0, l.memo)(di);

            function fi() {
                var n, e, t = (n = ["\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n"], e || (e = n.slice(0)), Object.freeze(Object.defineProperties(n, {
                    raw: {
                        value: Object.freeze(e)
                    }
                })));
                return fi = function() {
                    return t
                }, t
            }
            var mi = m.Z.span(fi()),
                vi = (0, l.memo)(mi);

            function pi() {
                var n, e, t = (n = ["\n  text-align: center;\n  width: 100%;\n  padding: 8px;\n\n  ", "\n\n  ", "\n\n  :hover,\n  :focus {\n    background-color: ", ";\n  }\n"], e || (e = n.slice(0)), Object.freeze(Object.defineProperties(n, {
                    raw: {
                        value: Object.freeze(e)
                    }
                })));
                return pi = function() {
                    return t
                }, t
            }
            var hi = m.Z.li(pi(), (function(n) {
                return n.inPageVersion && "border-bottom: 1px solid ".concat(Dn(n.theme.fonts.s5.color || "", "45%"), ";")
            }), (function(n) {
                var e;
                return null === (e = n.theme.components.Nav) || void 0 === e ? void 0 : e.Item
            }), (function(n) {
                return Dn(n.theme.fonts.s5.color || "", "10%")
            }));

            function gi(n) {
                var e = n.query,
                    t = n.page,
                    i = n.inPageVersion,
                    o = n.setMobileNavOpen,
                    a = n.handleTracking,
                    u = e.pathPrefix,
                    c = e.slug,
                    d = e.preview,
                    s = e.themeId,
                    f = t.title,
                    m = t.routeName,
                    v = "" !== m ? "".concat(m, "/") : m,
                    p = d && s ? "?".concat(new URLSearchParams({
                        preview: d.toString(),
                        themeId: s.toString()
                    }).toString()) : "",
                    h = (0, l.useMemo)((function() {
                        return "/".concat(u, "/").concat(c, "/").concat(v).concat(p)
                    }), [v, u, c, s]);
                return (0, r.jsx)(hi, {
                    inPageVersion: i,
                    children: (0, r.jsx)(Vr, {
                        href: h,
                        as: h,
                        title: f || "",
                        route: m || "",
                        setMobileNavOpen: o,
                        handleTracking: a,
                        desktop: !1
                    })
                })
            }
            var xi = (0, l.memo)(gi);

            function bi() {
                var n, e, t = (n = ["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n\n  ", "\n\n  ", "\n"], e || (e = n.slice(0)), Object.freeze(Object.defineProperties(n, {
                    raw: {
                        value: Object.freeze(e)
                    }
                })));
                return bi = function() {
                    return t
                }, t
            }
            var wi = m.Z.ul(bi(), (function(n) {
                return n.inPageVersion ? "border-top: 1px solid ".concat(Dn(n.theme.fonts.s5.color, "45%"), ";") : ""
            }), (function(n) {
                var e;
                return null === (e = n.theme.components.Nav) || void 0 === e ? void 0 : e.Mobile
            }));

            function yi(n) {
                var e = n.inPageVersion,
                    t = void 0 !== e && e,
                    i = n.pages,
                    o = n.setMobileNavOpen,
                    a = n.userDecisionArea,
                    u = Sr(),
                    c = Cr("guest", u, a),
                    d = Cr("rsvp", u, a),
                    s = (0, f.useRouter)().query,
                    m = (0, l.useCallback)((function(n) {
                        "rsvp" === n && d(n), c(n)
                    }), [c, d]);
                return (null === i || void 0 === i ? void 0 : i.length) ? (0, r.jsx)(wi, {
                    inPageVersion: t,
                    children: i.map((function(n) {
                        return (0, r.jsx)(xi, {
                            query: s,
                            page: n,
                            inPageVersion: t,
                            setMobileNavOpen: o,
                            handleTracking: m
                        }, n.id)
                    }))
                }) : null
            }
            var ji = (0, l.memo)(yi);

            function Pi(n, e) {
                return e || (e = n.slice(0)), Object.freeze(Object.defineProperties(n, {
                    raw: {
                        value: Object.freeze(e)
                    }
                }))
            }

            function Oi() {
                var n = Pi(["\n  left: 0;\n  overflow: hidden;\n  position: fixed;\n  top: 0;\n  transition: all 0.5s;\n  width: 100%;\n  z-index: ", ";\n  background-color: ", ";\n\n  ", "\n\n  @media (min-width: 768px) {\n    display: none;\n  }\n"]);
                return Oi = function() {
                    return n
                }, n
            }

            function Wi() {
                var n = Pi(["\n  padding-top: 56px;\n  height: 100vh;\n  overflow-y: auto;\n"]);
                return Wi = function() {
                    return n
                }, n
            }

            function ki() {
                var n = Pi(["\n  display: block;\n  @media (min-width: 768px) {\n    display: none;\n  }\n\n  height: 40px;\n  left: 8px;\n  margin: 0;\n  overflow: hidden;\n  position: fixed;\n  top: 8px;\n  width: 40px;\n  z-index: ", ";\n"]);
                return ki = function() {
                    return n
                }, n
            }

            function Si() {
                var n = Pi(["\n  ::before,\n  ::after {\n    content: '';\n    height: 3px;\n    left: 20%;\n    margin: 0 auto;\n    border-radius: 3px;\n    margin-top: -0.15em;\n    position: absolute;\n    top: 50%;\n    transition: all 0.4s;\n    width: 24px;\n\n    background: ", ";\n\n    box-shadow: 0 -10px 0 0 ", ",\n      0 10px 0 0 ", ";\n  }\n\n  ::after {\n    ", "\n  }\n\n  ", "\n"]);
                return Si = function() {
                    return n
                }, n
            }

            function Ni() {
                var n = Pi(["\n  background: none;\n  border: none;\n  font-size: 10px;\n  height: 40px;\n  width: 40px;\n  border-radius: 3px;\n\n  ", "\n"]);
                return Ni = function() {
                    return n
                }, n
            }

            function Ii() {
                var n = Pi(["\n  display: inline-block;\n  position: absolute;\n  top: 12px;\n  left: 60px;\n  font-size: 18px;\n  text-transform: uppercase;\n  z-index: ", ";\n  ", "\n"]);
                return Ii = function() {
                    return n
                }, n
            }
            var Ri = m.Z.nav(Oi(), ut.mobileNav, (function(n) {
                    return n.theme.colors.background
                }), (function(n) {
                    return n.open ? "height: 100%;" : " height: 0;"
                })),
                Zi = m.Z.div(Wi()),
                zi = m.Z.div(ki(), ut.mobileNavButton),
                Di = m.Z.span(Si(), (function(n) {
                    return n.theme.fonts.s5.color
                }), (function(n) {
                    return n.theme.fonts.s5.color
                }), (function(n) {
                    return n.theme.fonts.s5.color
                }), (function(n) {
                    return n.open ? "\n      box-shadow: 0 0 0 0 rgba(0,0,0,0), 0 0 0 0 rgba(0,0,0,0);\n      transform: rotateZ(45deg);\n    " : ""
                }), (function(n) {
                    return n.open ? "\n      :before {\n        box-shadow: 0 0 0 0 rgba(0,0,0,0), 0 0 0 0 rgba(0,0,0,0);\n        transform: rotateZ(-45deg);\n      }\n    " : ""
                })),
                Ai = m.Z.button(Ni(), (function(n) {
                    var e;
                    return null === (e = n.theme.components.Nav) || void 0 === e ? void 0 : e.Button
                })),
                Ci = m.Z.span(Ii(), ut.mobileNavButton, (function(n) {
                    var e, t;
                    return null === (e = n.theme.liteSite) || void 0 === e || null === (t = e.Nav) || void 0 === t ? void 0 : t.Button
                })),
                _i = "mobile nav menu";

            function Li(n) {
                var e = n.pages,
                    t = n.children,
                    i = n.showMenuText,
                    o = (0, l.useState)(!1),
                    a = o[0],
                    u = o[1],
                    c = Sr(),
                    d = Cr("guest", c, _i),
                    s = (0, l.useCallback)((function() {
                        u((function(n) {
                            return d("".concat(n ? "close" : "open", " menu")), !n
                        }))
                    }), [d]);
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(zi, {
                        children: (0, r.jsxs)(Ai, {
                            onClick: s,
                            children: [(0, r.jsx)(Di, {
                                open: a
                            }), i ? (0, r.jsx)(Ci, {
                                children: "Menu"
                            }) : (0, r.jsx)(vi, {
                                children: "Menu Button"
                            })]
                        })
                    }), t, (0, r.jsx)(Ri, {
                        open: a,
                        role: "navigation",
                        children: (0, r.jsx)(Zi, {
                            children: (0, r.jsx)(ji, {
                                pages: e,
                                setMobileNavOpen: u,
                                userDecisionArea: _i
                            })
                        })
                    })]
                })
            }
            var Ti = (0, l.memo)(Li);

            function Ei() {
                var n, e, t = (n = ["\n  height: 56px;\n  left: 0;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: ", ";\n\n  background-color: ", ";\n\n  @media (min-width: 768px) {\n    display: none;\n  }\n"], e || (e = n.slice(0)), Object.freeze(Object.defineProperties(n, {
                    raw: {
                        value: Object.freeze(e)
                    }
                })));
                return Ei = function() {
                    return t
                }, t
            }
            var Fi = m.Z.div(Ei(), ut.mobileNav, (function(n) {
                return n.theme.colors.background
            }));

            function Mi(n) {
                var e = n.pages;
                return (0, r.jsx)(Ti, {
                    pages: e,
                    children: (0, r.jsx)(Fi, {
                        children: (0, r.jsx)(si, {})
                    })
                })
            }
            var Bi = (0, l.memo)(Mi);

            function Ui() {
                var n = Wr();
                return "undefined" !== typeof n && null !== n && n.length > 0 ? (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(Bi, {
                        pages: n
                    }), (0, r.jsx)(ui, {
                        pages: n
                    })]
                }) : (0, r.jsx)(r.Fragment, {})
            }
            var Hi = (0, l.memo)(Ui),
                Vi = l.useLayoutEffect;
            var qi = function(n, e, t, r) {
                var i = (0, l.useRef)(e);
                Vi((function() {
                    i.current = e
                }), [e]), (0, l.useEffect)((function() {
                    var e = (null === t || void 0 === t ? void 0 : t.current) || window;
                    if (e && e.addEventListener) {
                        var o = function(n) {
                            return i.current(n)
                        };
                        return e.addEventListener(n, o, r),
                            function() {
                                e.removeEventListener(n, o)
                            }
                    }
                }), [n, t, r])
            };
            var Gi = function() {
                var n = (0, l.useState)({
                        width: 0,
                        height: 0
                    }),
                    e = n[0],
                    t = n[1],
                    r = function() {
                        t({
                            width: window.innerWidth,
                            height: window.innerHeight
                        })
                    };
                return qi("resize", r), Vi((function() {
                    r()
                }), []), e
            };

            function $i(n, e) {
                return e || (e = n.slice(0)), Object.freeze(Object.defineProperties(n, {
                    raw: {
                        value: Object.freeze(e)
                    }
                }))
            }

            function Ki() {
                var n = $i(["\n  position: absolute;\n  width: 100%;\n  top: 0;\n  left: 0;\n  z-index: -1;\n  pointer-events: none;\n  height: ", "px;\n"]);
                return Ki = function() {
                    return n
                }, n
            }

            function Ji() {
                var n = $i(["\n  .horizontalLayout.homePage & {\n    width: 100%;\n  }\n  .verticalLayout.homePage & {\n    display: flex;\n    flex-direction: column;\n    @media (min-width: 768px) {\n      width: 50%;\n      order: 1;\n      max-width: 720px;\n      padding-right: 2rem;\n    }\n    @media (min-width: 1024px) {\n      padding-right: 5rem;\n    }\n    @media (min-width: 1200px) {\n      padding-right: 7rem;\n    }\n  }\n"]);
                return Ji = function() {
                    return n
                }, n
            }

            function Yi() {
                var n = $i(["\n  height: 56px;\n  width: 100%;\n\n  @media (min-width: 768px) {\n    display: none;\n  }\n"]);
                return Yi = function() {
                    return n
                }, n
            }

            function Qi() {
                var n = $i(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);
                return Qi = function() {
                    return n
                }, n
            }

            function Xi() {
                var n = $i(["\n  max-width: 100%;\n  max-height: 120px;\n  margin-bottom: 20px;\n  width: 100%;\n\n  ", "\n"]);
                return Xi = function() {
                    return n
                }, n
            }

            function no() {
                var n = $i(["\n    @media (min-width: 768px) {\n      display: none;\n    }\n  "]);
                return no = function() {
                    return n
                }, n
            }

            function eo() {
                var n = $i(["\n    display: none;\n\n    @media (min-width: 768px) {\n      display: block;\n    }\n  "]);
                return eo = function() {
                    return n
                }, n
            }

            function to() {
                var n = $i(["\n  height: 20px;\n  width: 100%;\n"]);
                return to = function() {
                    return n
                }, n
            }
            var ro = m.Z.div(Ki(), (function(n) {
                    return n.height
                })),
                io = m.Z.div(Ji()),
                oo = m.Z.div(Yi()),
                ao = m.Z.div(Qi()),
                uo = (0, m.Z)(tt)(Xi(), (function(n) {
                    return n.theme.components.TopImage
                }));

            function lo(n) {
                return (0, m.Z)(n)(no())
            }
            var co = lo(Ft),
                so = lo(uo),
                fo = lo(wr),
                mo = lo(ir);

            function vo(n) {
                return (0, m.Z)(n)(eo())
            }
            var po = vo(Ft),
                ho = vo(uo),
                go = vo(wr),
                xo = vo(ir),
                bo = m.Z.div(to()),
                wo = {
                    height: 768,
                    width: 1024
                };

            function yo(n) {
                var e, t, o, a, u = n.setHeroDimensions,
                    c = (0, l.useState)(0),
                    d = c[0],
                    s = c[1];
                (0, l.useEffect)((function() {
                    var n = document.getElementById("top-image"),
                        e = document.getElementById("cover-photo");
                    if (e) {
                        var t = e.getBoundingClientRect().bottom;
                        n || (t += 120), s(t + 16)
                    }
                }), []);
                var m = (0, i.a)(),
                    v = Gi().width,
                    p = (0, f.useRouter)().query,
                    h = (0, l.useContext)(ce).data;
                if (!kn(null === h || void 0 === h ? void 0 : h.weddingWebsiteResult)) return null;
                var g = m.images.top,
                    x = (m.responsiveImages || {}).top,
                    b = p || {},
                    w = b.route,
                    y = void 0 === w ? [] : w,
                    j = b.useDefaultCrop,
                    P = void 0 !== j && j,
                    O = !y.length,
                    W = O ? null === (e = null === h || void 0 === h ? void 0 : h.weddingWebsiteResult.coverPhoto) || void 0 === e ? void 0 : e.path : void 0,
                    k = null === (t = null === h || void 0 === h ? void 0 : h.weddingWebsiteResult.coverPhoto) || void 0 === t ? void 0 : t.cropBox,
                    S = W && m.config.headerOnHero || !1,
                    N = (null === h || void 0 === h ? void 0 : h.weddingWebsiteResult.coverPhoto) ? Re()(h.weddingWebsiteResult.coverPhoto, ["width", "height"]) : null;
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(ro, {
                        id: "topFrame",
                        height: d
                    }), (0, r.jsx)(oo, {}), W ? (0, r.jsx)(fo, {
                        src: W,
                        smartCrop: P ? wo : null,
                        headerOnHero: !1,
                        landscapeCrop: k,
                        intrinsicDimensions: N,
                        "data-testid": O ? "cover-photo" : "hero-image"
                    }) : null, (0, r.jsx)(co, {
                        announcement: null === h || void 0 === h || null === (o = h.weddingWebsiteResult) || void 0 === o ? void 0 : o.announcement
                    }), v < 768 ? (0, r.jsx)(ao, {
                        children: (0, r.jsx)(so, {
                            url: g,
                            placeholderWidth: 100,
                            responsiveImages: x,
                            alt: ""
                        })
                    }) : null, (0, r.jsx)(mo, {
                        heroVersion: !1
                    }), (0, r.jsx)(po, {
                        announcement: null === h || void 0 === h || null === (a = h.weddingWebsiteResult) || void 0 === a ? void 0 : a.announcement
                    }), v >= 768 ? (0, r.jsx)(ao, {
                        children: (0, r.jsx)(ho, {
                            id: "top-image",
                            url: g,
                            placeholderWidth: 100,
                            responsiveImages: x,
                            alt: "",
                            sm: 768,
                            md: 1024,
                            lg: 1280,
                            xl: 1500
                        })
                    }) : null, S ? null : (0, r.jsx)(xo, {
                        heroVersion: !1
                    }), (0, r.jsx)(Hi, {}), W ? (0, r.jsxs)(io, {
                        children: [(0, r.jsx)(bo, {}), (0, r.jsx)(go, {
                            id: O ? "cover-photo" : "hero-image",
                            src: W,
                            setHeroDimensions: u,
                            smartCrop: P ? wo : null,
                            headerOnHero: S,
                            landscapeCrop: k,
                            intrinsicDimensions: N,
                            "data-testid": O ? "cover-photo" : "hero-image"
                        })]
                    }) : null]
                })
            }
            var jo = (0, l.memo)(yo);

            function Po(n, e) {
                return e || (e = n.slice(0)), Object.freeze(Object.defineProperties(n, {
                    raw: {
                        value: Object.freeze(e)
                    }
                }))
            }

            function Oo() {
                var n = Po(["\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  justify-content: center;\n  width: 100%;\n  &.verticalLayout.homePage {\n    flex-direction: row;\n    @media (min-width: 768px) {\n      padding: 0 0;\n    }\n  }\n  ", "\n"]);
                return Oo = function() {
                    return n
                }, n
            }

            function Wo() {
                var n = Po(["\n  padding: 16px 0;\n  display: flex;\n  flex-direction: column;\n  .verticalLayout.homePage & {\n    width: 100%;\n    @media (min-width: 768px) {\n      width: 50%;\n      max-width: 720px;\n      padding-right: 3rem;\n      padding-left: 2rem;\n    }\n    @media (min-width: 1024px) {\n      padding-left: 5rem;\n    }\n    @media (min-width: 1200px) {\n      padding-left: 7rem;\n    }\n  }\n}\n"]);
                return Wo = function() {
                    return n
                }, n
            }
            var ko = m.Z.div(Oo(), (function(n) {
                    return n.theme.components.SiteContent
                })),
                So = m.Z.div(Wo());

            function No(n) {
                var e = n.children,
                    t = n.isHomePage,
                    i = void 0 !== t && t,
                    o = (0, l.useContext)(ce).data,
                    a = (0, l.useState)({
                        width: 0,
                        height: 0
                    }),
                    u = a[0],
                    c = a[1],
                    d = (0, l.useMemo)((function() {
                        return kn(null === o || void 0 === o ? void 0 : o.weddingWebsiteResult) ? (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)(qe, {
                                firstName: null === o || void 0 === o ? void 0 : o.weddingWebsiteResult.firstName,
                                fianceFirstName: null === o || void 0 === o ? void 0 : o.weddingWebsiteResult.fianceFirstName
                            }), (0, r.jsx)(Dt, {})]
                        }) : null
                    }), [null === o || void 0 === o ? void 0 : o.weddingWebsiteResult]);
                if (!kn(null === o || void 0 === o ? void 0 : o.weddingWebsiteResult)) return null;
                var s = (null === o || void 0 === o ? void 0 : o.weddingWebsiteResult.coverPhoto) ? Re()(o.weddingWebsiteResult.coverPhoto, ["cropBox"]) : null,
                    f = s && function(n, e, t) {
                        var r = n.split(".").map(Number);
                        if ("0.0.0.0" !== n) {
                            var i = r[0] || 0,
                                o = r[1] || 0,
                                a = r[3] || 1;
                            return (r[2] || 2) - i < a - o
                        }
                        return e < t
                    }(s.cropBox || "0.0.2.1", u.width || 2, u.height || 1),
                    m = "".concat(f ? "verticalLayout" : "horizontalLayout", " ").concat(i ? "homePage" : "secondaryPage");
                return (0, r.jsx)(jt, {
                    footer: d,
                    children: (0, r.jsxs)(ko, {
                        className: m,
                        children: [(0, r.jsx)(jo, {
                            setHeroDimensions: c
                        }), (0, r.jsx)(So, {
                            children: e
                        })]
                    })
                })
            }
            var Io = (0, l.memo)(No);

            function Ro(n, e) {
                (null == e || e > n.length) && (e = n.length);
                for (var t = 0, r = new Array(e); t < e; t++) r[t] = n[t];
                return r
            }

            function Zo(n, e) {
                return function(n) {
                    if (Array.isArray(n)) return n
                }(n) || function(n, e) {
                    var t = null == n ? null : "undefined" !== typeof Symbol && n[Symbol.iterator] || n["@@iterator"];
                    if (null != t) {
                        var r, i, o = [],
                            a = !0,
                            u = !1;
                        try {
                            for (t = t.call(n); !(a = (r = t.next()).done) && (o.push(r.value), !e || o.length !== e); a = !0);
                        } catch (l) {
                            u = !0, i = l
                        } finally {
                            try {
                                a || null == t.return || t.return()
                            } finally {
                                if (u) throw i
                            }
                        }
                        return o
                    }
                }(n, e) || function(n, e) {
                    if (!n) return;
                    if ("string" === typeof n) return Ro(n, e);
                    var t = Object.prototype.toString.call(n).slice(8, -1);
                    "Object" === t && n.constructor && (t = n.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return Ro(n, e)
                }(n, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function zo(n, e) {
                return e || (e = n.slice(0)), Object.freeze(Object.defineProperties(n, {
                    raw: {
                        value: Object.freeze(e)
                    }
                }))
            }

            function Do() {
                var n = zo(["\n  letter-spacing: 2.23px;\n  line-height: 1.3;\n  display: none;\n  flex-direction: column;\n  justify-content: center;\n  margin: 12px auto;\n  padding: 0 16px;\n  width: fit-content;\n\n  @media (min-width: 768px) {\n    display: ", ";\n    justify-content: center;\n    padding: 0 16px;\n    flex-direction: row;\n    margin: 52px auto 20px;\n\n    .verticalLayout.homePage & {\n      display: flex;\n      justify-content: flex-start;\n      padding: 0;\n      flex-direction: column;\n      margin: 0 auto 20px 0;\n    }\n  }\n\n  ", "\n\n  ", "\n\n  @media (max-width: 640px) {\n    font-size: 1rem;\n  }\n"]);
                return Do = function() {
                    return n
                }, n
            }

            function Ao() {
                var n = zo(["\n  padding: 0 36px 20px;\n\n  border-bottom: 1px solid\n    ", ";\n\n  @media (min-width: 640px) {\n    border-bottom: none;\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    padding: 20px 72px 20px 0;\n    width: 315px;\n\n    border-right: 1px solid\n      ", ";\n\n    .verticalLayout.homePage & {\n      justify-content: flex-start;\n      padding: 0;\n      width: auto;\n      border-right: none;\n    }\n  }\n"]);
                return Ao = function() {
                    return n
                }, n
            }

            function Co() {
                var n = zo(["\n  padding: 20px 36px 0;\n  @media (min-width: 768px) {\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    padding: 20px 0 20px 72px;\n    width: 315px;\n  }\n\n  .verticalLayout.homePage & {\n    padding: 0;\n    width: auto;\n\n    br {\n      content: ', ';\n    }\n    br:after {\n      content: ', ';\n    }\n  }\n"]);
                return Co = function() {
                    return n
                }, n
            }

            function _o() {
                var n = zo(["\n  text-align: center;\n  .verticalLayout.homePage & {\n    text-align: left;\n\n    @media (min-width: 768px) and (max-width: 900px) {\n      font-size: 0.75em;\n    }\n  }\n"]);
                return _o = function() {
                    return n
                }, n
            }
            var Lo = m.Z.div(Do(), (function(n) {
                    return n.hideOnHorizontal ? "none" : "flex"
                }), (function(n) {
                    return n.theme.components.DateLocationLockup
                }), Rn("s2")),
                To = m.Z.div(Ao(), (function(n) {
                    var e, t = n.theme;
                    return (null === (e = t.components.DateLocationLockup) || void 0 === e ? void 0 : e.borderColor) || t.fonts.s4.color
                }), (function(n) {
                    var e, t = n.theme;
                    return (null === (e = t.components.DateLocationLockup) || void 0 === e ? void 0 : e.borderColor) || t.fonts.s4.color
                })),
                Eo = m.Z.div(Co()),
                Fo = m.Z.div(_o());

            function Mo() {
                var n = (0, l.useContext)(ce).data,
                    e = Le("natural");
                if (kn(null === n || void 0 === n ? void 0 : n.weddingWebsiteResult)) {
                    var t, i, o = !(null === n || void 0 === n ? void 0 : n.weddingWebsiteResult.weddingLocation) || !e,
                        a = Zo((null === n || void 0 === n || null === (t = n.weddingWebsiteResult) || void 0 === t || null === (i = t.weddingLocation) || void 0 === i ? void 0 : i.split(",")) || ["", ""], 2),
                        u = a[0],
                        c = a[1];
                    return (0, r.jsxs)(Lo, {
                        hideOnHorizontal: o,
                        children: [e && (0, r.jsx)(To, {
                            children: (0, r.jsx)(Fo, {
                                children: (0, r.jsx)("span", {
                                    children: (null === n || void 0 === n ? void 0 : n.weddingWebsiteResult.hideDate) ? "Date TBA" : e
                                })
                            })
                        }), (null === n || void 0 === n ? void 0 : n.weddingWebsiteResult.weddingLocation) && (0, r.jsx)(Eo, {
                            children: (0, r.jsxs)(Fo, {
                                children: [u, (0, r.jsx)("br", {}), c]
                            })
                        })]
                    })
                }
                return null
            }
            var Bo = (0, l.memo)(Mo);

            function Uo() {
                var n, e, t = (n = ["\n  padding: 48px 0 40px;\n  @media (min-width: 768px) {\n    display: none;\n  }\n"], e || (e = n.slice(0)), Object.freeze(Object.defineProperties(n, {
                    raw: {
                        value: Object.freeze(e)
                    }
                })));
                return Uo = function() {
                    return t
                }, t
            }
            var Ho = m.Z.div(Uo());

            function Vo() {
                var n = Wr();
                return (0, r.jsx)(Ho, {
                    children: (0, r.jsx)(ji, {
                        pages: n,
                        inPageVersion: !0,
                        userDecisionArea: "mobile homepage nav"
                    })
                })
            }
            var qo = (0, l.memo)(Vo),
                Go = t(7044),
                $o = t.n(Go),
                Ko = t(5675),
                Jo = t.n(Ko);

            function Yo() {
                var n, e, t = (n = ["\n  padding: 0;\n  margin: 1.1em auto;\n  max-width: 550px;\n  text-align: left;\n\n  ", "\n\n  @media (min-width: 720px) {\n    max-width: 720px;\n  }\n\n  @media (max-width: 768px) {\n    padding: 0 16px;\n  }\n\n  strong {\n    font-weight: bolder !important;\n  }\n\n  em {\n    font-style: italic !important;\n  }\n\n  a {\n    text-decoration: underline;\n    ", ";\n  }\n\n  .ql-align-right {\n    text-align: right;\n  }\n\n  .ql-align-center {\n    text-align: center;\n  }\n\n  .ql-align-justify {\n    text-align: justify;\n  }\n"], e || (e = n.slice(0)), Object.freeze(Object.defineProperties(n, {
                    raw: {
                        value: Object.freeze(e)
                    }
                })));
                return Yo = function() {
                    return t
                }, t
            }
            var Qo = m.Z.div(Yo(), Rn("s6"), (function(n) {
                return n.theme.components.Link
            }));

            function Xo(n) {
                var e = n.item,
                    t = n.className,
                    i = e.content,
                    o = e.id,
                    a = (0, l.useMemo)((function() {
                        return {
                            __html: ae(i)
                        }
                    }), [i]);
                return (0, r.jsx)(Qo, {
                    className: t,
                    dangerouslySetInnerHTML: a,
                    "data-testid": "paragraph-item-".concat(o)
                })
            }
            var na, ea = (0, l.memo)(Xo);

            function ta(n, e) {
                return e || (e = n.slice(0)), Object.freeze(Object.defineProperties(n, {
                    raw: {
                        value: Object.freeze(e)
                    }
                }))
            }

            function ra() {
                var n = ta(["\n  padding: 1px 10px;\n  max-width: 550px;\n  margin: 0 auto 12px;\n  text-align: center;\n  @media (min-width: 768px) {\n    .verticalLayout.homePage & {\n      padding: 1px 0;\n      margin: 0 auto 12px 0;\n    }\n  }\n  ", "\n"]);
                return ra = function() {
                    return n
                }, n
            }

            function ia() {
                var n = ta(["\n  color: rgb(31, 31, 31);\n  line-height: 1;\n  margin: 28px 0;\n\n  ", "\n\n  @media (min-width: 768px) {\n    text-align: center;\n\n    .verticalLayout.homePage & {\n      text-align: left;\n    }\n  }\n"]);
                return ia = function() {
                    return n
                }, n
            }

            function oa() {
                var n = ta(["\n  margin: 1rem auto 0 auto;\n"]);
                return oa = function() {
                    return n
                }, n
            }

            function aa() {
                var n = ta(["\n  line-height: 1.75;\n  margin: 32px 0;\n\n  ", "\n\n  a {\n    text-decoration: underline;\n    ", ";\n  }\n"]);
                return aa = function() {
                    return n
                }, n
            }

            function ua() {
                var n = ta(["\n  margin: 16px 0;\n"]);
                return ua = function() {
                    return n
                }, n
            }

            function la() {
                var n = ta(["\n  font-style: normal;\n  line-height: 1;\n\n  ", "\n"]);
                return la = function() {
                    return n
                }, n
            }

            function ca() {
                var n = ta(["\n  font-style: normal;\n  line-height: 1;\n  margin-top: 8px;\n\n  ", "\n"]);
                return ca = function() {
                    return n
                }, n
            }

            function da() {
                var n = ta(["\n  font-style: normal;\n  line-height: 1;\n\n  ", "\n"]);
                return da = function() {
                    return n
                }, n
            }

            function sa() {
                var n = ta(["\n  font-weight: bold;\n\n  ", "\n"]);
                return sa = function() {
                    return n
                }, n
            }

            function fa() {
                var n = ta(["\n  margin: 16px 0;\n\n  ", "\n"]);
                return fa = function() {
                    return n
                }, n
            }

            function ma() {
                var n = ta(["\n  display: flex;\n  justify-content: center;\n  margin: 20px 0;\n"]);
                return ma = function() {
                    return n
                }, n
            }
            var va = m.Z.div(ra(), (function(n) {
                    return n.theme.components.ContentItem
                })),
                pa = m.Z.h4(ia(), Rn("s3")),
                ha = (0, m.Z)(Jo())(oa()),
                ga = (0, m.Z)(Qo)(aa(), Rn("s6"), (function(n) {
                    return n.theme.components.Link
                })),
                xa = m.Z.div(ua()),
                ba = m.Z.div(la(), Rn("s5")),
                wa = m.Z.div(ca(), Rn("s5")),
                ya = m.Z.span(da(), Rn("s6")),
                ja = m.Z.span(sa(), Rn("s6")),
                Pa = m.Z.div(fa(), Rn("s6")),
                Oa = m.Z.div(ma()),
                Wa = null === (na = "") ? void 0 : na.replace("https://", "");

            function ka(n) {
                var e, t, i, o, a, u, c, d, s, f = n.item,
                    m = n.className,
                    v = f.id,
                    p = f.type,
                    h = f.description,
                    g = f.name,
                    x = f.address,
                    b = f.phone,
                    w = f.email,
                    y = f.website,
                    j = f.photo,
                    P = (null === j || void 0 === j ? void 0 : j.mediaUrl) || "",
                    O = (0, l.useContext)(ce).data;
                "WWS_AccommodationItem" === f.__typename && (i = (0, Ce.Z)(f.checkInDate, "weekday"), o = (0, Ce.Z)(f.checkOutDate, "weekday"), a = f.guestCode, u = f.rate, y && "WWS_WeddingWebsiteV2" === (null === O || void 0 === O || null === (d = O.weddingWebsiteResult) || void 0 === d ? void 0 : d.__typename) && (c = null === O || void 0 === O || null === (s = O.weddingWebsiteResult) || void 0 === s ? void 0 : s.slug));
                var W, k = "";
                if (P && !P.includes("http") && (k = "https:".concat(P)), y && (W = y.match(/\/\//) ? "".concat(y) : "//".concat(y), c)) {
                    var S = W.includes("?") ? "&" : "?";
                    W = "".concat(W).concat(S, "wwpath=").concat(encodeURIComponent("".concat(Wa, "/").concat(c)))
                }
                var N = (0, l.useMemo)((function() {
                        return {
                            __html: ae(h)
                        }
                    }), [h]),
                    I = (0, l.useCallback)((function() {
                        return k
                    }), [k]);
                return (0, r.jsxs)(va, {
                    className: m,
                    "data-testid": "".concat($o()(p).replace(/_/g, "-"), "-").concat(v),
                    children: [g ? (0, r.jsx)(pa, {
                        children: g
                    }) : null, k ? (0, r.jsx)(ha, {
                        loader: I,
                        src: k,
                        priority: !0,
                        unoptimized: !0,
                        quality: 100,
                        width: "".concat(null === (e = f.photo) || void 0 === e ? void 0 : e.width),
                        height: "".concat(null === (t = f.photo) || void 0 === t ? void 0 : t.height),
                        layout: "intrinsic",
                        alt: "Picture of ".concat(g)
                    }) : null, x || b ? (0, r.jsxs)(xa, {
                        children: [x ? (0, r.jsx)(ba, {
                            children: x
                        }) : null, b ? (0, r.jsx)(wa, {
                            children: b
                        }) : null]
                    }) : null, i || o ? (0, r.jsxs)(Pa, {
                        children: [i ? (0, r.jsxs)(ya, {
                            children: [(0, r.jsx)(ja, {
                                children: "Check-In: "
                            }), i]
                        }) : null, i && o ? " | " : null, o ? (0, r.jsxs)(ya, {
                            children: [(0, r.jsx)(ja, {
                                children: "Check-Out: "
                            }), o]
                        }) : null]
                    }) : null, u ? (0, r.jsx)(xa, {
                        children: (0, r.jsxs)(ja, {
                            children: ["Rate: ", u]
                        })
                    }) : null, a ? (0, r.jsx)(xa, {
                        children: (0, r.jsxs)(ja, {
                            children: ["Use Code: ", a]
                        })
                    }) : null, h ? (0, r.jsx)(ga, {
                        dangerouslySetInnerHTML: N
                    }) : null, (W || w) && (0, r.jsxs)(Oa, {
                        children: [W && (0, r.jsx)(_n, {
                            target: "_blank",
                            href: W,
                            rel: "nofollow ugc noopener noreferrer",
                            "data-testid": "business-website-".concat(v),
                            children: "Website"
                        }), w && (0, r.jsx)(_n, {
                            rel: "nofollow ugc noopener noreferrer",
                            href: "mailto:".concat(w),
                            children: "Email"
                        })]
                    })]
                })
            }
            var Sa = (0, l.memo)(ka);

            function Na() {
                var n, e, t = (n = ["\n  margin: 1rem auto 0 auto;\n"], e || (e = n.slice(0)), Object.freeze(Object.defineProperties(n, {
                    raw: {
                        value: Object.freeze(e)
                    }
                })));
                return Na = function() {
                    return t
                }, t
            }
            var Ia = m.Z.img(Na()),
                Ra = function(n) {
                    var e = n.item,
                        t = n.className,
                        i = e.id,
                        o = e.type,
                        a = e.title,
                        u = e.description,
                        c = e.photo,
                        d = (null === c || void 0 === c ? void 0 : c.mediaUrl) || "",
                        s = "";
                    d && !s.includes("http") && (s = "https:".concat(d));
                    var f = (0, l.useMemo)((function() {
                        return {
                            __html: ae(u)
                        }
                    }), [u]);
                    return (0, r.jsxs)(va, {
                        className: t,
                        "data-testid": "".concat($o()(o).replace(/_/g, "-"), "-").concat(i),
                        children: [a ? (0, r.jsx)(pa, {
                            children: a
                        }) : null, s ? (0, r.jsx)(Ia, {
                            src: s,
                            sizes: "((min-width: 360px) and (max-width: 509px)) 360px, (max-width: 510px) 510px",
                            alt: "Picture of ".concat(a)
                        }) : null, u ? (0, r.jsx)(ga, {
                            dangerouslySetInnerHTML: f
                        }) : null]
                    })
                },
                Za = (0, l.memo)(Ra);

            function za(n, e) {
                return e || (e = n.slice(0)), Object.freeze(Object.defineProperties(n, {
                    raw: {
                        value: Object.freeze(e)
                    }
                }))
            }

            function Da() {
                var n = za(["\n  margin: 44px 0 0 0;\n  text-align: center;\n\n  ", "\n  @media (min-width: 768px) {\n    text-align: center;\n\n    .verticalLayout.homePage & {\n      text-align: left;\n    }\n  }\n  @media (max-width: 767px) {\n    padding: 0 16px;\n  }\n"]);
                return Da = function() {
                    return n
                }, n
            }

            function Aa() {
                var n = za(["\n  margin: 24px 0 0 0;\n  text-align: center;\n\n  ", "\n  @media (min-width: 768px) {\n    text-align: center;\n\n    .verticalLayout.homePage & {\n      text-align: left;\n    }\n  }\n  @media (max-width: 767px) {\n    padding: 0 16px;\n  }\n"]);
                return Aa = function() {
                    return n
                }, n
            }
            var Ca = m.Z.h3(Da(), Rn("s3")),
                _a = m.Z.h4(Aa(), Rn("s4"));

            function La(n) {
                var e, t = n.className,
                    i = void 0 === t ? "" : t,
                    o = n.item,
                    a = o.title,
                    u = o.style,
                    l = void 0 === u ? "large" : u,
                    c = o.id;
                return e = "large" === l ? Ca : _a, (0, r.jsx)(e, {
                    className: i,
                    "data-testid": "headline-item-".concat(c),
                    children: a
                })
            }
            var Ta = (0, l.memo)(La);

            function Ea() {
                var n, e, t = (n = ["\n  display: flex;\n  justify-content: center;\n\n  div {\n    width: 100%;\n  }\n"], e || (e = n.slice(0)), Object.freeze(Object.defineProperties(n, {
                    raw: {
                        value: Object.freeze(e)
                    }
                })));
                return Ea = function() {
                    return t
                }, t
            }
            var Fa = m.Z.div(Ea());

            function Ma(n) {
                var e = n.item,
                    t = n.className,
                    i = e.id,
                    o = e.title,
                    a = e.description,
                    u = e.embededCode,
                    c = (0, l.useMemo)((function() {
                        return {
                            __html: u
                        }
                    }), [u]);
                return (0, r.jsxs)(va, {
                    className: t,
                    "data-testid": "embed-item-".concat(i),
                    children: [o ? (0, r.jsx)(Ca, {
                        children: o
                    }) : null, a ? (0, r.jsx)(ga, {
                        children: a
                    }) : null, (0, r.jsx)(Fa, {
                        dangerouslySetInnerHTML: c
                    })]
                })
            }
            var Ba = (0, l.memo)(Ma);

            function Ua() {
                var n, e, t = (n = ["\n  font-weight: normal;\n  margin: 0 auto;\n\n  width: fit-content;\n  padding: 0.75rem 1.25rem;\n  .verticalLayout.homePage & {\n    padding: 0.75rem 3.25rem;\n  }\n  @media (min-width: 768px) {\n    margin: 0 auto;\n\n    .verticalLayout.homePage & {\n      margin: 0 0 1rem;\n    }\n  }\n"], e || (e = n.slice(0)), Object.freeze(Object.defineProperties(n, {
                    raw: {
                        value: Object.freeze(e)
                    }
                })));
                return Ua = function() {
                    return t
                }, t
            }
            var Ha = (0, m.Z)(_n)(Ua());

            function Va() {
                var n = (0, f.useRouter)().query,
                    e = ve(),
                    t = n.pathPrefix,
                    i = n.slug,
                    o = "/".concat(t, "/").concat(i, "/rsvp");
                return e ? (0, r.jsx)(Lr(), {
                    href: o,
                    as: o,
                    passHref: !0,
                    children: (0, r.jsx)(Ha, {
                        children: "RSVP"
                    })
                }) : null
            }
            var qa = (0, l.memo)(Va);

            function Ga(n) {
                if (!n) return "";
                var e = new Date("2022/1/1 ".concat(n, " UTC"));
                return (0, Ce.Z)(e, "hoursMinutes")
            }
            var $a = function(n) {
                var e = n.date,
                    t = n.endTime,
                    r = n.isWeddingDayEvent,
                    i = n.time,
                    o = n.isLiteSite,
                    a = n.weddingDateFormat,
                    u = void 0 === a ? "weekday" : a;
                "range" !== u && r || (u = "weekday"), o && (u = "weekday");
                var l = i && e ? "".concat(e, " ").concat(i, " UTC") : e;
                return {
                    date: (0, Ce.Z)(l, u),
                    time: Ga(i),
                    endTime: Ga(t)
                }
            };

            function Ka(n) {
                var e = n.time,
                    t = n.endTime;
                return e ? (0, r.jsx)(r.Fragment, {
                    children: "".concat(e).concat(t ? "\u2013".concat(t) : "")
                }) : null
            }
            var Ja = (0, l.memo)(Ka);

            function Ya() {
                var n, e, t = (n = ["\n  margin: 12px 0;\n  line-height: 1;\n\n  ", "\n"], e || (e = n.slice(0)), Object.freeze(Object.defineProperties(n, {
                    raw: {
                        value: Object.freeze(e)
                    }
                })));
                return Ya = function() {
                    return t
                }, t
            }
            var Qa = m.Z.h4(Ya(), Rn("s4"));

            function Xa(n) {
                var e = n.className,
                    t = n.formattedTime,
                    i = n.formattedEndTime;
                return (0, r.jsxs)(Qa, {
                    className: e,
                    children: [t, t && i && "\u2013".concat(i), !t && i && "Ends at ".concat(i)]
                })
            }
            var nu = (0, l.memo)(Xa);

            function eu(n, e) {
                return e || (e = n.slice(0)), Object.freeze(Object.defineProperties(n, {
                    raw: {
                        value: Object.freeze(e)
                    }
                }))
            }

            function tu() {
                var n = eu(["\n  display: flex;\n  max-width: 720px;\n  @media (min-width: 768px) {\n    .verticalLayout.homePage & {\n      margin-bottom: 16px;\n      flex-direction: column;\n    }\n  }\n  border-bottom: 1px solid\n    ", ";\n\n  ", "\n"]);
                return tu = function() {
                    return n
                }, n
            }

            function ru() {
                var n = eu(["\n  overflow-wrap: break-word;\n  padding: 12px 0;\n  text-align: left;\n  width: 100%;\n  @media (min-width: 768px) {\n    padding: 32px 16px;\n\n    ", "\n\n    .verticalLayout.homePage & {\n      padding: 16px 0 0 0;\n      margin-bottom: 12px;\n      ", "\n    }\n  }\n"]);
                return ru = function() {
                    return n
                }, n
            }

            function iu() {
                var n = eu(["\n  display: none;\n\n  @media (min-width: 768px) {\n    display: block;\n    min-width: 310px;\n    width: 310px;\n    text-align: end;\n    .verticalLayout.homePage & {\n      text-align: left;\n    }\n  }\n"]);
                return iu = function() {
                    return n
                }, n
            }

            function ou() {
                var n = eu(["\n  margin: 12px 0;\n  line-height: 1;\n\n  ", "\n"]);
                return ou = function() {
                    return n
                }, n
            }

            function au() {
                var n = eu(["\n  margin: 12px 0;\n\n  ", "\n"]);
                return au = function() {
                    return n
                }, n
            }

            function uu() {
                var n = eu(["\n  margin: 2px 0;\n"]);
                return uu = function() {
                    return n
                }, n
            }

            function lu() {
                var n = eu(["\n  margin: 20px 0 12px;\n  white-space: pre-line;\n\n  ", "\n"]);
                return lu = function() {
                    return n
                }, n
            }

            function cu() {
                var n = eu(["\n  margin: 16px 0;\n\n  ", "\n\n  @media (min-width: 720px) {\n    display: none;\n  }\n"]);
                return cu = function() {
                    return n
                }, n
            }
            var du = m.Z.div(tu(), (function(n) {
                    return Dn(n.theme.fonts.s6.color || "", "15%")
                }), (function(n) {
                    return n.theme.components.SubEvent
                })),
                su = m.Z.div(ru(), (function(n) {
                    return n.hasTime ? "" : "text-align: center;"
                }), (function(n) {
                    return n.hasTime ? "" : "text-align: unset;"
                })),
                fu = (0, m.Z)(su)(iu()),
                mu = m.Z.h4(ou(), Rn("s4")),
                vu = m.Z.div(au(), Rn("s6")),
                pu = m.Z.div(uu()),
                hu = m.Z.div(lu(), Rn("s6")),
                gu = (0, m.Z)(nu)(cu(), Rn("s5"));

            function xu(n) {
                var e = n.attire,
                    t = n.endTime,
                    i = n.id,
                    o = n.location,
                    a = n.name,
                    u = n.notes,
                    l = n.time,
                    c = n.visible,
                    d = o || {},
                    s = d.name,
                    f = d.fullAddress,
                    m = $a({
                        time: l,
                        endTime: t
                    }),
                    v = m.time,
                    p = void 0 === v ? "" : v,
                    h = m.endTime,
                    g = void 0 === h ? "" : h,
                    x = Boolean(p || g);
                return c ? (0, r.jsxs)(du, {
                    "data-testid": "event-".concat(i),
                    children: [x ? (0, r.jsx)(fu, {
                        hasTime: x,
                        children: (0, r.jsx)(nu, {
                            formattedTime: p,
                            formattedEndTime: g
                        })
                    }) : null, (0, r.jsxs)(su, {
                        hasTime: x,
                        children: [(0, r.jsx)(gu, {
                            formattedTime: p,
                            formattedEndTime: g
                        }), (0, r.jsx)(mu, {
                            children: a
                        }), s || f ? (0, r.jsxs)(vu, {
                            children: [(0, r.jsx)(pu, {
                                children: s
                            }), (0, r.jsx)(pu, {
                                children: f
                            })]
                        }) : null, e ? (0, r.jsx)(vu, {
                            children: "Attire: ".concat(e)
                        }) : null, u ? (0, r.jsx)(hu, {
                            children: u
                        }) : null]
                    })]
                }, i) : null
            }
            var bu = (0, l.memo)(xu);

            function wu(n, e, t) {
                return e in n ? Object.defineProperty(n, e, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[e] = t, n
            }

            function yu(n, e) {
                return e || (e = n.slice(0)), Object.freeze(Object.defineProperties(n, {
                    raw: {
                        value: Object.freeze(e)
                    }
                }))
            }

            function ju() {
                var n = yu(["\n  margin: 0;\n  margin-right: auto;\n  margin-left: auto;\n  max-width: 720px;\n  width: 100%;\n\n  padding: 0 20px;\n  &:first {\n    border: 1px solid red;\n  }\n\n  @media (min-width: 720px) {\n    padding: 0;\n  }\n  @media (min-width: 768px) {\n    .verticalLayout.homePage & {\n      margin-right: 2rem;\n    }\n  }\n  ", "\n"]);
                return ju = function() {
                    return n
                }, n
            }

            function Pu() {
                var n = yu(["\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  margin: 48px 0 24px;\n  align-items: center;\n  @media (min-width: 768px) {\n    align-items: center;\n    margin: 48px 0 24px;\n    text-align: center;\n\n    .verticalLayout.homePage & {\n      align-items: flex-start;\n      margin: 0 0 24px;\n      text-align: left;\n    }\n  }\n"]);
                return Pu = function() {
                    return n
                }, n
            }

            function Ou() {
                var n = yu(["\n  ", "\n"]);
                return Ou = function() {
                    return n
                }, n
            }

            function Wu() {
                var n = yu(["\n  line-height: 1;\n  margin: 32px 0 8px 0;\n  @media (min-width: 768px) {\n    .verticalLayout.homePage & {\n      margin: 0 0 8px 0;\n    }\n  }\n  ", "\n"]);
                return Wu = function() {
                    return n
                }, n
            }

            function ku() {
                var n = yu(["\n  margin: 8px 0;\n"]);
                return ku = function() {
                    return n
                }, n
            }

            function Su() {
                var n = yu(["\n  margin: 4px 0;\n\n  ", "\n"]);
                return Su = function() {
                    return n
                }, n
            }

            function Nu() {
                var n = yu(["\n  margin: 8px 0;\n\n  ", "\n"]);
                return Nu = function() {
                    return n
                }, n
            }

            function Iu() {
                var n = yu(["\n  margin: 8px 0;\n  max-width: 460px;\n  white-space: pre-line;\n\n  ", "\n"]);
                return Iu = function() {
                    return n
                }, n
            }
            var Ru = m.Z.div(ju(), (function(n) {
                    return n.theme.components.Event
                })),
                Zu = m.Z.div(Pu()),
                zu = m.Z.div(Ou(), (function(n) {
                    return "border-top: 1px solid ".concat(Dn(n.theme.fonts.s6.color, "15%"), ";")
                })),
                Du = m.Z.h4(Wu(), Rn("s3")),
                Au = m.Z.div(ku()),
                Cu = m.Z.div(Su(), Rn("s6")),
                _u = m.Z.div(Nu(), Rn("s4")),
                Lu = m.Z.div(Iu(), Rn("s6"));

            function Tu(n) {
                var e = n.event,
                    t = n.row,
                    i = e.id,
                    o = e.date,
                    a = e.notes,
                    u = e.endTime,
                    c = e.location,
                    d = e.name,
                    s = e.subEvents,
                    f = e.time,
                    m = e.visible,
                    v = e.attire,
                    p = e.type,
                    h = (0, l.useContext)(ce).data,
                    g = me(),
                    x = (0, l.useMemo)((function() {
                        return {
                            __html: ae(a)
                        }
                    }), [a]),
                    b = (0, l.useMemo)((function() {
                        var n = ["attire", "endTime", "location", "notes", "time"];
                        return null === s || void 0 === s ? void 0 : s.filter((function(n) {
                            return Boolean(n.visible)
                        })).filter((function(e) {
                            return n.some((function(n) {
                                return Boolean(e[n])
                            }))
                        }))
                    }), [s]);
                if ([d].some((function(n) {
                        return !n
                    })) || !m) return null;
                if (kn(null === h || void 0 === h ? void 0 : h.weddingWebsiteResult)) {
                    var w = "WeddingDay" === p,
                        y = w && ["ornate", "verbose"].includes((null === h || void 0 === h ? void 0 : h.weddingWebsiteResult.weddingDateFormat) || ""),
                        j = {
                            date: o,
                            endTime: u,
                            isWeddingDayEvent: w,
                            time: f,
                            weddingDateFormat: null === h || void 0 === h ? void 0 : h.weddingWebsiteResult.weddingDateFormat,
                            isLiteSite: g
                        },
                        P = $a(j),
                        O = P.date,
                        W = P.time,
                        k = P.endTime;
                    return (0, r.jsxs)(Ru, {
                        "data-testid": "event-row-".concat(t),
                        children: [(0, r.jsxs)(Zu, {
                            "data-testid": "event-".concat(i),
                            children: [(0, r.jsxs)(Au, {
                                children: [(0, r.jsx)(Du, {
                                    children: d
                                }), w && (null === h || void 0 === h ? void 0 : h.weddingWebsiteResult.hideDate) ? (0, r.jsx)(Cu, {
                                    children: "Date To Be Announced"
                                }) : (0, r.jsxs)(r.Fragment, {
                                    children: [O ? (0, r.jsx)(_u, {
                                        children: O
                                    }) : null, y ? null : (0, r.jsx)(_u, {
                                        children: (0, r.jsx)(Ja, {
                                            time: W,
                                            endTime: k
                                        })
                                    })]
                                })]
                            }), (null === c || void 0 === c ? void 0 : c.name) || (null === c || void 0 === c ? void 0 : c.fullAddress) ? (0, r.jsxs)(Au, {
                                children: [(null === c || void 0 === c ? void 0 : c.name) ? (0, r.jsx)(Cu, {
                                    children: c.name
                                }) : null, (null === c || void 0 === c ? void 0 : c.fullAddress) ? (0, r.jsx)(Cu, {
                                    children: c.fullAddress
                                }) : null]
                            }) : null, v ? (0, r.jsx)(Cu, {
                                children: "Attire: ".concat(v)
                            }) : null, a ? (0, r.jsx)(Au, {
                                children: (0, r.jsx)(Lu, {
                                    dangerouslySetInnerHTML: x
                                })
                            }) : null]
                        }), (null === b || void 0 === b ? void 0 : b.length) ? (0, r.jsx)(zu, {
                            children: b.map((function(n) {
                                return (0, l.createElement)(bu, function(n) {
                                    for (var e = 1; e < arguments.length; e++) {
                                        var t = null != arguments[e] ? arguments[e] : {},
                                            r = Object.keys(t);
                                        "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(n) {
                                            return Object.getOwnPropertyDescriptor(t, n).enumerable
                                        })))), r.forEach((function(e) {
                                            wu(n, e, t[e])
                                        }))
                                    }
                                    return n
                                }({}, n, {
                                    key: n.id
                                }))
                            }))
                        }) : null]
                    })
                }
                return null
            }
            var Eu = (0, l.memo)(Tu);

            function Fu() {
                var n = (0, l.useContext)(ce).data,
                    e = me();
                return (0, r.jsxs)(r.Fragment, {
                    children: [e ? null : (0, r.jsx)(qa, {}), null === n || void 0 === n ? void 0 : n.events.map((function(n, e) {
                        return (0, r.jsx)(Eu, {
                            event: n,
                            row: e
                        }, n.id)
                    }))]
                })
            }
            var Mu = (0, l.memo)(Fu);

            function Bu() {
                var n, e, t = (n = ["\n  width: fit-content;\n  margin: 0 auto;\n\n  .verticalLayout.homePage & {\n    margin-left: 0;\n  }\n"], e || (e = n.slice(0)), Object.freeze(Object.defineProperties(n, {
                    raw: {
                        value: Object.freeze(e)
                    }
                })));
                return Bu = function() {
                    return t
                }, t
            }
            var Uu = (0, m.Z)(_n)(Bu());

            function Hu(n) {
                var e = n.item,
                    t = n.className,
                    i = e.id,
                    o = e.title,
                    a = e.description,
                    u = e.buttonUrl,
                    l = e.buttonText;
                return (0, r.jsxs)(va, {
                    className: t,
                    "data-testid": "livestream-item-".concat(i),
                    children: [(0, r.jsx)(Ca, {
                        children: o
                    }), (0, r.jsx)(ga, {
                        children: a
                    }), (0, r.jsx)(Uu, {
                        target: "_blank",
                        rel: "nofollow ugc noopener noreferrer",
                        href: u || "",
                        children: l
                    })]
                })
            }
            var Vu = (0, l.memo)(Hu);

            function qu(n, e) {
                return e || (e = n.slice(0)), Object.freeze(Object.defineProperties(n, {
                    raw: {
                        value: Object.freeze(e)
                    }
                }))
            }

            function Gu() {
                var n = qu(["\n  padding: 44px 25px 0;\n  text-align: center;\n  max-width: 300px;\n  width: 300px;\n\n  ", "\n"]);
                return Gu = function() {
                    return n
                }, n
            }

            function $u() {
                var n = qu(["\n  font-weight: bolder;\n  margin-bottom: 12px;\n\n  ", "\n"]);
                return $u = function() {
                    return n
                }, n
            }

            function Ku() {
                var n = qu(["\n  background-color: rgb(151, 151, 151);\n  border: 1px solid rgb(151, 151, 151);\n  border-radius: 150px;\n  height: 150px;\n  margin: 0 auto 16px;\n  width: 150px;\n"]);
                return Ku = function() {
                    return n
                }, n
            }

            function Ju() {
                var n = qu(["\n  line-height: 1.5;\n\n  ", "\n"]);
                return Ju = function() {
                    return n
                }, n
            }
            var Yu = m.Z.div(Gu(), (function(n) {
                    return n.theme.components.WeddingPartyPerson
                })),
                Qu = m.Z.div($u(), Rn("s6")),
                Xu = m.Z.img(Ku()),
                nl = m.Z.div(Ju(), Rn("s6"));

            function el(n) {
                var e = n.item,
                    t = n.className,
                    i = e.description,
                    o = e.id,
                    a = e.name,
                    u = e.role,
                    c = e.photo,
                    d = (0, l.useMemo)((function() {
                        return "undefined" !== typeof i && null !== i ? {
                            __html: ae(i)
                        } : void 0
                    }), [i]);
                if (!a) return null;
                var s, f = (null === c || void 0 === c ? void 0 : c.mediaUrl) || "";
                return f && (s = Ge(f)), (0, r.jsxs)(Yu, {
                    className: t,
                    "data-testid": "person-item-".concat(o),
                    children: [s ? (0, r.jsx)(tt, {
                        ImgCustom: Xu,
                        url: s.url,
                        crop: s.crop,
                        rotation: null === c || void 0 === c ? void 0 : c.rotation,
                        alt: a,
                        sm: 150,
                        md: 150,
                        lg: 150,
                        xl: 150
                    }) : null, (0, r.jsxs)(Qu, {
                        children: [a, u ? " - ".concat(u) : null]
                    }), i ? (0, r.jsx)(nl, {
                        dangerouslySetInnerHTML: d
                    }) : null]
                }, o)
            }
            var tl = (0, l.memo)(el),
                rl = t(3253),
                il = t.n(rl);

            function ol(n) {
                var e = n.className,
                    t = n.labeledBy,
                    i = n.path,
                    o = n.title;
                return (0, r.jsxs)("svg", {
                    "aria-labelledby": t,
                    className: e,
                    role: "img",
                    version: "1.1",
                    viewBox: "0 0 32 32",
                    children: [(0, r.jsx)("title", {
                        id: t,
                        children: o
                    }), i]
                })
            }
            var al = (0, l.memo)(ol),
                ul = (0, r.jsx)("path", {
                    d: "M19.333 22.667l-6.667-6.667 6.667-6.667z"
                });

            function ll(n) {
                var e = n.className,
                    t = n.title,
                    i = void 0 === t ? "Arrow Left" : t;
                return (0, r.jsx)(al, {
                    className: e,
                    labeledBy: "arrow-left-svg",
                    path: ul,
                    title: i
                })
            }
            var cl = (0, l.memo)(ll),
                dl = (0, r.jsx)("path", {
                    d: "M12.667 22.667l6.667-6.667-6.667-6.667z"
                });

            function sl(n) {
                var e = n.className,
                    t = n.title,
                    i = void 0 === t ? "Arrow Right" : t;
                return (0, r.jsx)(al, {
                    className: e,
                    labeledBy: "arrow-right-svg",
                    path: dl,
                    title: i
                })
            }
            var fl = (0, l.memo)(sl);

            function ml(n, e, t) {
                return e in n ? Object.defineProperty(n, e, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[e] = t, n
            }

            function vl(n) {
                for (var e = 1; e < arguments.length; e++) {
                    var t = null != arguments[e] ? arguments[e] : {},
                        r = Object.keys(t);
                    "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(n) {
                        return Object.getOwnPropertyDescriptor(t, n).enumerable
                    })))), r.forEach((function(e) {
                        ml(n, e, t[e])
                    }))
                }
                return n
            }

            function pl(n, e) {
                return e || (e = n.slice(0)), Object.freeze(Object.defineProperties(n, {
                    raw: {
                        value: Object.freeze(e)
                    }
                }))
            }

            function hl() {
                var n = pl(["\n  display: block;\n  max-width: 300px;\n  max-height: 300px;\n  margin: 10px;\n  width: 295px;\n  object-fit: contain;\n  cursor: pointer;\n"]);
                return hl = function() {
                    return n
                }, n
            }

            function gl() {
                var n = pl(["\n  background-color: rgb(216, 216, 216);\n  border: 1px solid rgb(151, 151, 151);\n"]);
                return gl = function() {
                    return n
                }, n
            }

            function xl() {
                var n = pl(["\n  margin: auto;\n  max-height: 100vh;\n  max-width: 100vw;\n\n  :hover,\n  :focus {\n    + a {\n      fill: red;\n    }\n  }\n"]);
                return xl = function() {
                    return n
                }, n
            }

            function bl() {
                var n = pl(["\n  cursor: pointer;\n  fill: white;\n  filter: drop-shadow(0 0 5px black);\n  height: 75px;\n  position: absolute;\n  top: 50%;\n  transform: translate(0, -50%);\n  width: 75px;\n  background-color: rgba(0, 0, 0, 0.1);\n  left: 0;\n"]);
                return bl = function() {
                    return n
                }, n
            }

            function wl() {
                var n = pl(["\n  cursor: pointer;\n  fill: white;\n  filter: drop-shadow(0 0 5px black);\n  height: 75px;\n  position: absolute;\n  top: 50%;\n  transform: translate(0, -50%);\n  width: 75px;\n  background-color: rgba(0, 0, 0, 0.1);\n  right: 0;\n"]);
                return wl = function() {
                    return n
                }, n
            }

            function yl() {
                var n = pl(["\n  border-radius: 0;\n  border: none;\n  bottom: unset;\n  display: flex;\n  flex-direction: column;\n  left: 50%;\n  max-height: 100vh;\n  outline: none;\n  padding: 0;\n  position: fixed;\n  right: unset;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  width: min-content;\n\n  background: ", ";\n\n  @media (min-width: 768px) {\n    svg {\n      opacity: 0;\n      transition: opacity 0.25s ease-in-out;\n    }\n\n    :hover,\n    :focus {\n      svg {\n        opacity: 1;\n      }\n    }\n  }\n"]);
                return yl = function() {
                    return n
                }, n
            }

            function jl() {
                var n = pl(["\n  background-color: rgba(0, 0, 0, 0.3);\n  bottom: 0;\n  color: white;\n  padding: 8px 16px;\n  position: absolute;\n  width: 100%;\n\n  ", "\n"]);
                return jl = function() {
                    return n
                }, n
            }
            var Pl = {
                    overlay: {
                        zIndex: 1100,
                        backgroundColor: "rgba(0, 0, 0, 0.75)"
                    }
                },
                Ol = m.Z.div(hl()),
                Wl = (0, m.Z)(Jo())(gl()),
                kl = m.Z.img(xl()),
                Sl = (0, m.Z)(cl)(bl()),
                Nl = (0, m.Z)(fl)(wl()),
                Il = (0, m.Z)(il())(yl(), (function(n) {
                    return n.theme.colors.background
                })),
                Rl = m.Z.div(jl(), Rn("s6"));

            function Zl(n) {
                var e = n.alt,
                    t = n.caption,
                    i = n.nextPhotoId,
                    o = n.path,
                    a = n.prevPhotoId,
                    u = n.id,
                    c = n.crop,
                    d = n.rotation,
                    s = void 0 === d ? 0 : d,
                    m = n.dimensions,
                    v = n.thumbnailDimensions,
                    p = (0, f.useRouter)(),
                    h = p.query,
                    g = p.push,
                    x = Sr(),
                    b = Cr("photo", "photos");
                (0, l.useEffect)((function() {
                    document.getElementById("__next") ? il().setAppElement("#__next") : il().setAppElement("body")
                }), []);
                var w = (0, l.useMemo)((function() {
                        return !(!Array.isArray(h.route) || "undefined" === typeof h.route[1]) && parseInt(h.route[1], 10) === u
                    }), [u, h]),
                    y = h.pathPrefix,
                    j = h.slug,
                    P = h.route,
                    O = "/".concat(y, "/").concat(j, "/").concat(P, "/").concat(u),
                    W = "/".concat(y, "/").concat(j, "/").concat(x, "/").concat(a),
                    k = "/".concat(y, "/").concat(j, "/").concat(x, "/").concat(i),
                    S = (0, l.useCallback)((function() {
                        b("open photo modal", "click photo")
                    }), [b]),
                    N = (0, l.useCallback)((function() {
                        var n = "/".concat(y, "/").concat(j, "/").concat(x);
                        g(n, void 0, {
                            shallow: !0
                        })
                    }), [x, y, g, j]),
                    I = (0, l.useCallback)((function() {
                        b("close photo modal", "click outside modal"), N()
                    }), [N, b]),
                    R = o.split("~")[0];
                if ("undefined" === typeof R) return (0, r.jsx)(r.Fragment, {});
                var Z = Ge(R),
                    z = Z.url,
                    D = Z.format,
                    A = v ? {
                        smartCrop: "".concat(v.width, ".").concat(v.height)
                    } : vl({
                        crop: c
                    }, m),
                    C = z && $e(vl({
                        format: D,
                        rotation: s,
                        url: z
                    }, A));
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(Lr(), {
                        href: O,
                        as: O,
                        shallow: !0,
                        passHref: !1,
                        children: (0, r.jsx)(Ol, {
                            children: (0, r.jsx)(Wl, {
                                src: C || R,
                                priority: !0,
                                unoptimized: !0,
                                objectFit: "cover",
                                quality: 100,
                                width: 600,
                                height: 600,
                                layout: "intrinsic",
                                alt: e,
                                onClick: S
                            })
                        })
                    }), (0, r.jsxs)(Il, {
                        style: Pl,
                        isOpen: w,
                        ariaHideApp: !1,
                        onRequestClose: I,
                        children: [a ? (0, r.jsx)(Lr(), {
                            href: W,
                            as: W,
                            shallow: !0,
                            children: (0, r.jsx)("a", {
                                children: (0, r.jsx)(Sl, {
                                    title: "Previous Photo"
                                })
                            })
                        }) : null, (0, r.jsx)(kl, {
                            alt: "".concat(e, " - Full Size"),
                            src: z && c && m ? $e(vl({
                                crop: c,
                                format: D,
                                rotation: s,
                                url: z
                            }, m)) : R
                        }), t ? (0, r.jsx)(Rl, {
                            children: t
                        }) : null, i ? (0, r.jsx)(Lr(), {
                            href: k,
                            as: k,
                            shallow: !0,
                            children: (0, r.jsx)("a", {
                                children: (0, r.jsx)(Nl, {
                                    title: "Next Photo"
                                })
                            })
                        }) : null]
                    })]
                })
            }
            var zl = (0, l.memo)(Zl);

            function Dl() {
                var n, e, t = (n = ["\n  display: flex;\n  margin: 24px auto 80px auto;\n  width: 320px;\n  flex-wrap: wrap;\n\n  @media (min-width: 670px) {\n    width: 635px;\n  }\n\n  @media (min-width: 995px) {\n    width: 960px;\n  }\n\n  ", "\n"], e || (e = n.slice(0)), Object.freeze(Object.defineProperties(n, {
                    raw: {
                        value: Object.freeze(e)
                    }
                })));
                return Dl = function() {
                    return t
                }, t
            }
            var Al = m.Z.div(Dl(), (function(n) {
                return n.theme.components.PhotoGallery
            }));

            function Cl(n) {
                var e = n.photoAlbums;
                return (null === e || void 0 === e ? void 0 : e.length) ? (0, r.jsx)(r.Fragment, {
                    children: e.map((function(n, e) {
                        return n.images ? (0, r.jsx)(Al, {
                            children: n.images.map((function(e, t) {
                                var i, o, a = n.images && (null === (i = n.images[t - 1]) || void 0 === i ? void 0 : i.id) || void 0,
                                    u = n.images && (null === (o = n.images[t + 1]) || void 0 === o ? void 0 : o.id) || void 0;
                                return (0, r.jsx)(zl, {
                                    alt: "Album Photo ".concat(t + 1),
                                    caption: e.caption || "",
                                    id: e.id || t,
                                    nextPhotoId: u,
                                    path: e.galleryPath || "",
                                    prevPhotoId: a
                                }, e.id)
                            }))
                        }, n.id || e) : null
                    }))
                }) : null
            }
            var _l = (0, l.memo)(Cl),
                Ll = {
                    width: 300,
                    height: 300
                };

            function Tl(n) {
                var e = n.index,
                    t = n.photo,
                    i = n.photoItems,
                    o = (i[e - 1] || {}).id,
                    a = (i[e + 1] || {}).id,
                    u = t.width,
                    c = t.height,
                    d = t.rotation,
                    s = t.mediaUrl,
                    f = t.cropX || 0,
                    m = t.cropY || 0,
                    v = "".concat(f, ".").concat(m, ".").concat(f + u, ".").concat(m + c),
                    p = (0, l.useMemo)((function() {
                        return {
                            width: u,
                            height: c
                        }
                    }), [c, u]);
                return (0, r.jsx)(zl, {
                    alt: "Gallery Photo ".concat(e + 1),
                    caption: undefined,
                    id: t.id,
                    crop: v,
                    nextPhotoId: a,
                    path: s,
                    prevPhotoId: o,
                    rotation: d || 0,
                    dimensions: p,
                    thumbnailDimensions: Ll
                })
            }
            var El = (0, l.memo)(Tl);

            function Fl() {
                var n, e, t = (n = ["\n  display: flex;\n  margin: 24px auto 80px auto;\n  width: 320px;\n  flex-wrap: wrap;\n  flex-direction: row;\n  justify-content: center;\n\n  & > * {\n    text-align: center;\n    max-width: 300px;\n    width: 300px;\n  }\n\n  @media (min-width: 700px) {\n    width: 670px;\n  }\n\n  @media (min-width: 1000px) {\n    width: 960px;\n  }\n\n  ", "\n"], e || (e = n.slice(0)), Object.freeze(Object.defineProperties(n, {
                    raw: {
                        value: Object.freeze(e)
                    }
                })));
                return Fl = function() {
                    return t
                }, t
            }
            var Ml = m.Z.div(Fl(), (function(n) {
                return n.theme.components.PhotoGallery
            }));

            function Bl(n) {
                var e = n.item,
                    t = n.className;
                return (0, r.jsx)(Ml, {
                    className: t,
                    "data-testid": "photo-gallery-item-".concat(e.id),
                    children: e.photoItems.map((function(n, e, t) {
                        return (0, r.jsx)(El, {
                            photo: n,
                            index: e,
                            photoItems: t
                        }, n.id)
                    }))
                })
            }
            var Ul = (0, l.memo)(Bl);

            function Hl() {
                var n, e, t = (n = ["\n  margin: 0 auto;\n  padding: 15px;\n\n  ", "\n\n  @media(min-width: 768px) {\n    .verticalLayout.homePage & {\n      margin: 0 auto 0 0;\n      padding: 15px 0;\n    }\n  }\n  @media (min-width: 540px) {\n    max-width: ", ";\n  }\n"], e || (e = n.slice(0)), Object.freeze(Object.defineProperties(n, {
                    raw: {
                        value: Object.freeze(e)
                    }
                })));
                return Hl = function() {
                    return t
                }, t
            }
            var Vl = m.Z.div(Hl(), (function(n) {
                return n.landscape ? "" : "max-width: 230px;"
            }), (function(n) {
                return n.landscape ? "540px" : "370px"
            }));

            function ql(n) {
                var e, t = n.item,
                    i = n.className,
                    o = (null === (e = t.aspectRatio) || void 0 === e ? void 0 : e.name) || "",
                    a = ["4:3", "3:2"].includes(o),
                    u = Ge(t.mediaUrl),
                    l = u.crop,
                    c = u.url;
                return (0, r.jsx)(Vl, {
                    className: i,
                    landscape: a,
                    "data-testid": "".concat($o()(t.type).replace(/_/g, "-"), "-").concat(t.id),
                    children: (0, r.jsx)(tt, {
                        url: c,
                        alt: "",
                        sm: 510,
                        md: 510,
                        lg: 510,
                        xl: 510,
                        crop: l,
                        rotation: t.rotation
                    })
                })
            }
            var Gl = (0, l.memo)(ql),
                $l = t(9566),
                Kl = t(9013);

            function Jl(n, e) {
                (null == e || e > n.length) && (e = n.length);
                for (var t = 0, r = new Array(e); t < e; t++) r[t] = n[t];
                return r
            }

            function Yl(n, e) {
                return e || (e = n.slice(0)), Object.freeze(Object.defineProperties(n, {
                    raw: {
                        value: Object.freeze(e)
                    }
                }))
            }

            function Ql(n) {
                return function(n) {
                    if (Array.isArray(n)) return Jl(n)
                }(n) || function(n) {
                    if ("undefined" !== typeof Symbol && null != n[Symbol.iterator] || null != n["@@iterator"]) return Array.from(n)
                }(n) || function(n, e) {
                    if (!n) return;
                    if ("string" === typeof n) return Jl(n, e);
                    var t = Object.prototype.toString.call(n).slice(8, -1);
                    "Object" === t && n.constructor && (t = n.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return Jl(n, e)
                }(n) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Xl() {
                var n = Yl(["\n  display: flex;\n  margin: 24px auto 80px auto;\n  max-width: 1000px;\n  width: 100%;\n  flex-wrap: wrap;\n  flex-direction: column;\n\n  &::first-of-type {\n    padding-top: 3rem;\n  }\n"]);
                return Xl = function() {
                    return n
                }, n
            }

            function nc() {
                var n = Yl(["\n  margin: 0;\n  padding-left: 3rem;\n  padding-right: 3rem;\n  flex: 1;\n  z-index: 1;\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n\n  background: ", ";\n\n  img {\n    width: 100%;\n    display: block;\n    height: auto;\n  }\n\n  .secondaryPage &,\n  .horizontalLayout & {\n    @media (min-width: 540px) {\n      padding-top: inherit;\n      padding-bottom: inherit;\n      background: transparent;\n    }\n  }\n\n  .verticalLayout.homePage & {\n    @media (min-width: 1300px) {\n      padding-top: inherit;\n      padding-bottom: inherit;\n      background: transparent;\n    }\n  }\n"]);
                return nc = function() {
                    return n
                }, n
            }

            function ec() {
                var n = Yl(["\n  margin: 0;\n  flex: 1;\n  padding-left: 3rem;\n  padding-right: 3rem;\n  text-align: center;\n  z-index: 1;\n  padding-bottom: 1rem;\n  background: ", ";\n\n  .secondaryPage &,\n  .horizontalLayout & {\n    @media (min-width: 540px) {\n      text-align: inherit;\n      padding-bottom: inherit;\n      background: transparent;\n    }\n  }\n\n  .verticalLayout.homePage & {\n    @media (min-width: 1300px) {\n      text-align: inherit;\n      padding-bottom: inherit;\n      background: transparent;\n    }\n  }\n\n  ", "\n"]);
                return ec = function() {
                    return n
                }, n
            }

            function tc() {
                var n = Yl(["\n  font-weight: bold;\n\n  ", "\n"]);
                return tc = function() {
                    return n
                }, n
            }

            function rc() {
                var n = Yl(["\n  padding-bottom: 1.5rem;\n  padding-top: 1.5rem;\n  display: flex;\n  align-items: center;\n  position: relative;\n  flex-direction: column;\n  max-width: 100vw;\n\n  .secondaryPage &,\n  .horizontalLayout & {\n    @media (min-width: 540px) {\n      max-width: inherit;\n      flex-direction: row;\n\n      &:nth-of-type(odd) {\n        flex-direction: row-reverse;\n      }\n\n      &::after {\n        content: '';\n        position: absolute;\n        left: 50%;\n        display: block;\n        height: calc(50% - 0.6rem);\n        bottom: 0;\n        transform: translate(-50%, 0%);\n\n        border-left: 1px dashed\n          ", ";\n\n        ", "\n      }\n\n      &::before {\n        content: '';\n        position: absolute;\n        left: 50%;\n        display: block;\n        top: 0;\n        height: calc(50% - 0.6rem);\n        transform: translate(-50%, 0%);\n\n        border-left: 1px dashed\n          ", ";\n\n        ", "\n      }\n    }\n  }\n\n  .verticalLayout.homePage & {\n    @media (min-width: 1300px) {\n      max-width: inherit;\n      flex-direction: row;\n\n      &:nth-of-type(odd) {\n        flex-direction: row-reverse;\n      }\n\n      &::after {\n        content: '';\n        position: absolute;\n        left: 50%;\n        display: block;\n        height: calc(50% - 0.6rem);\n        bottom: 0;\n        transform: translate(-50%, 0%);\n\n        border-left: 1px dashed\n          ", ";\n\n        ", "\n      }\n\n      &::before {\n        content: '';\n        position: absolute;\n        left: 50%;\n        display: block;\n        top: 0;\n        height: calc(50% - 0.6rem);\n        transform: translate(-50%, 0%);\n\n        border-left: 1px dashed\n          ", ";\n\n        ", "\n      }\n    }\n  }\n\n  &::before {\n    content: '';\n    position: absolute;\n    left: 50%;\n    display: block;\n    top: 0;\n    bottom: 0;\n    transform: translate(-50%, 0%);\n\n    border-left: 1px dashed\n      ", ";\n\n    ", "\n  }\n"]);
                return rc = function() {
                    return n
                }, n
            }

            function ic() {
                var n = Yl(["\n  content: '';\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  display: block;\n  width: 0.5rem;\n  height: 0.5rem;\n  transform: translate(-50%, -50%);\n\n  background-color: ", ";\n\n  border-radius: ", ";\n\n  ", "\n"]);
                return ic = function() {
                    return n
                }, n
            }
            var oc = m.Z.div(Xl()),
                ac = m.Z.figure(nc(), (function(n) {
                    return n.theme.colors.background
                })),
                uc = m.Z.div(ec(), (function(n) {
                    return n.theme.colors.background
                }), Rn("s6")),
                lc = m.Z.h2(tc(), Rn("s4")),
                cc = m.Z.div(rc(), (function(n) {
                    return n.theme.fonts.s4.color
                }), (function(n) {
                    return n.theme.components.TimelineLineFlourish
                }), (function(n) {
                    return n.theme.fonts.s4.color
                }), (function(n) {
                    return n.theme.components.TimelineLineFlourish
                }), (function(n) {
                    return n.theme.fonts.s4.color
                }), (function(n) {
                    return n.theme.components.TimelineLineFlourish
                }), (function(n) {
                    return n.theme.fonts.s4.color
                }), (function(n) {
                    return n.theme.components.TimelineLineFlourish
                }), (function(n) {
                    return n.theme.fonts.s4.color
                }), (function(n) {
                    return n.theme.components.TimelineLineFlourish
                })),
                dc = m.Z.div(ic(), (function(n) {
                    var e = n.theme;
                    return e.components.TimelineDotFlourish ? "transparent" : e.fonts.s4.color
                }), (function(n) {
                    return n.theme.components.TimelineDotFlourish ? "inherit" : "100rem"
                }), (function(n) {
                    return n.theme.components.TimelineDotFlourish
                }));

            function sc(n, e) {
                var t = n.date || "",
                    r = e.date || "";
                return t < r ? -1 : t > r ? 1 : 0
            }

            function fc(n) {
                var e = n.item,
                    t = n.className,
                    i = (0, l.useMemo)((function() {
                        return Ql(e.photoItems || []).sort(sc)
                    }), [e.photoItems]);
                return (0, r.jsx)(oc, {
                    className: t,
                    "data-testid": "photo-timeline-item-".concat(e.id),
                    children: i.map((function(n, e) {
                        var t, i, o = Ge(n.mediaUrl).crop;
                        return (0, r.jsxs)(cc, {
                            "data-testid": "photo-timeline-row-".concat(e),
                            children: [(0, r.jsx)(ac, {
                                children: (0, r.jsx)(tt, {
                                    url: n.mediaUrl,
                                    alt: n.caption || "Memory",
                                    crop: o
                                })
                            }), (0, r.jsxs)(uc, {
                                children: [n.date ? (0, r.jsx)(lc, {
                                    children: (t = n.date, (0, $l.Z)((0, Kl.Z)(new Date("".concat(t, "T12:00:00.000"))), i || "MMMM dd, yyyy"))
                                }) : null, n.caption ? (0, r.jsx)("div", {
                                    children: n.caption
                                }) : null]
                            }), (0, r.jsx)(dc, {})]
                        }, "photoTimeline-".concat(n.id))
                    }))
                })
            }
            var mc = (0, l.memo)(fc);

            function vc() {
                var n, e, t = (n = ["\n  ", "\n"], e || (e = n.slice(0)), Object.freeze(Object.defineProperties(n, {
                    raw: {
                        value: Object.freeze(e)
                    }
                })));
                return vc = function() {
                    return t
                }, t
            }
            var pc = m.Z.div(vc(), (function(n) {
                return n.theme.components.QuestionFlourish
            }));

            function hc(n) {
                var e = n.item,
                    t = n.className,
                    i = e.id,
                    o = e.question,
                    a = e.answer;
                return (0, r.jsxs)(va, {
                    className: t,
                    "data-testid": "question-item-".concat(i),
                    children: [(0, r.jsx)(pc, {}), (0, r.jsx)(_a, {
                        children: o
                    }), (0, r.jsx)(ga, {
                        children: a
                    })]
                })
            }
            var gc = (0, l.memo)(hc);

            function xc(n, e) {
                return e || (e = n.slice(0)), Object.freeze(Object.defineProperties(n, {
                    raw: {
                        value: Object.freeze(e)
                    }
                }))
            }

            function bc() {
                var n = xc(["\n  max-width: 605px;\n  margin: 0 auto;\n"]);
                return bc = function() {
                    return n
                }, n
            }

            function wc() {
                var n = xc(["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n\n  & > *:not(.PersonItem) {\n    flex-basis: 100%;\n  }\n"]);
                return wc = function() {
                    return n
                }, n
            }

            function yc() {
                var n = xc(["\n  max-width: 1000px;\n"]);
                return yc = function() {
                    return n
                }, n
            }
            var jc = m.Z.div(bc()),
                Pc = m.Z.div(wc()),
                Oc = m.Z.div(yc());

            function Wc(n) {
                var e = n.page,
                    t = n.photoAlbums,
                    i = Sr(),
                    o = Cr("visit", i),
                    a = "" === e.routeName,
                    u = "registry" === e.routeName,
                    c = "WeddingPartyPage" === e.type ? jc : l.Fragment,
                    d = "WeddingPartyPage" === e.type ? Pc : l.Fragment,
                    s = "WeddingPartyPage" === e.type ? Oc : l.Fragment;
                return (0, l.useEffect)((function() {
                    o("guest visit")
                }), []), e.items.length || "PhotoPage" === e.type && (null === t || void 0 === t ? void 0 : t.length) ? (0, r.jsx)(l.Fragment, {
                    children: (0, r.jsx)(c, {
                        children: (0, r.jsxs)(d, {
                            children: ["PhotoPage" === e.type ? (0, r.jsx)(_l, {
                                photoAlbums: t
                            }) : null, "WeddingPage" === e.type && (0, r.jsx)(Bo, {}), e.items.map((function(n) {
                                return function(n) {
                                    return "WWS_HeadlineItem" === n.__typename
                                }(n) ? (0, r.jsx)(Ta, {
                                    item: n,
                                    className: n.type
                                }, n.id) : function(n) {
                                    return "WWS_ParagraphItem" === n.__typename
                                }(n) ? (0, r.jsx)(ea, {
                                    item: n,
                                    className: n.type
                                }, n.id) : function(n) {
                                    return "WWS_PersonItem" === n.__typename
                                }(n) ? (0, r.jsx)(tl, {
                                    item: n,
                                    className: n.type
                                }, n.id) : function(n) {
                                    return "WWS_PhotoItem" === n.__typename || "WWS_GifItem" === n.__typename
                                }(n) ? (0, r.jsx)(Gl, {
                                    item: n,
                                    className: n.type
                                }, n.id) : function(n) {
                                    return "WWS_QuestionItem" === n.__typename
                                }(n) ? (0, r.jsx)(gc, {
                                    item: n,
                                    className: n.type
                                }, n.id) : function(n) {
                                    return "WWS_LivestreamItem" === n.__typename
                                }(n) ? (0, r.jsx)(Vu, {
                                    item: n,
                                    className: n.type
                                }, n.id) : function(n) {
                                    return "WWS_EmbedItem" === n.__typename
                                }(n) ? (0, r.jsx)(Ba, {
                                    item: n,
                                    className: n.type
                                }, n.id) : function(n) {
                                    return "WWS_PhotoTimelineItem" === n.__typename
                                }(n) ? (0, r.jsx)(mc, {
                                    item: n,
                                    className: n.type
                                }, n.id) : function(n) {
                                    return "WWS_PhotoGalleryItem" === n.__typename
                                }(n) ? (0, r.jsx)(s, {
                                    children: (0, r.jsx)(Ul, {
                                        item: n,
                                        className: n.type
                                    })
                                }, n.id) : function(n) {
                                    return "WWS_AccommodationItem" === n.__typename || "WWS_ActivityItem" === n.__typename || "WWS_TransportationItem" === n.__typename
                                }(n) ? (0, r.jsx)(Sa, {
                                    item: n,
                                    className: n.type
                                }, n.id) : function(n) {
                                    return "WWS_StoryItem" === n.__typename || "WWS_BasicItem" === n.__typename
                                }(n) ? (0, r.jsx)(Za, {
                                    item: n,
                                    className: n.type
                                }, n.id) : "WWS_EventGroupItem" === n.__typename ? (0, r.jsx)(Mu, {}, n.id) : null
                            })), "WeddingPage" === e.type ? (0, r.jsx)(qo, {}) : null]
                        })
                    })
                }) : a || u ? null : (0, r.jsxs)(Ca, {
                    children: [e.title || "", " coming soon!"]
                })
            }
            var kc = (0, l.memo)(Wc),
                Sc = t(4298),
                Nc = t.n(Sc),
                Ic = t(367);

            function Rc(n, e) {
                return e || (e = n.slice(0)), Object.freeze(Object.defineProperties(n, {
                    raw: {
                        value: Object.freeze(e)
                    }
                }))
            }

            function Zc() {
                var n = Rc(["\n  line-height: 1;\n  margin: 12px auto;\n  text-align: center;\n  max-width: 900px;\n\n  ", "\n"]);
                return Zc = function() {
                    return n
                }, n
            }

            function zc() {
                var n = Rc(["\n  :focus {\n    outline: transparent;\n  }\n\n  ol,\n  ul {\n    list-style: initial;\n    margin: initial;\n    padding: initial;\n  }\n"]);
                return zc = function() {
                    return n
                }, n
            }

            function Dc() {
                var n = Rc(["\n  display: ", ";\n"]);
                return Dc = function() {
                    return n
                }, n
            }
            var Ac = m.Z.h4(Zc(), Rn("s6")),
                Cc = (0, Ic.iv)(zc()),
                _c = function(n) {
                    var e = n.isShowingRegistry;
                    return (0, Ic.iv)(Dc(), e ? "block" : "none")
                };

            function Lc() {
              
            }
            var Tc = (0, l.memo)(Lc);

            function Ec(n) {
                var e, t = n.themeOverride,
                    o = (0, f.useRouter)(),
                    a = o.replace,
                    u = o.query,
                    c = u.route,
                    d = u.pathPrefix,
                    s = u.slug,
                    m = u.preview,
                    v = void 0 === m ? "true" : m,
                    p = (0, l.useContext)(ce).data,
                    h = Ne(t),
                    g = Array.isArray(c) ? c[0] : c || "";
                if (!kn(null === p || void 0 === p ? void 0 : p.weddingWebsiteResult)) return null;
                var x = null === (e = null === p || void 0 === p ? void 0 : p.weddingWebsiteResult.pages) || void 0 === e ? void 0 : e.find((function(n) {
                    return n.routeName === g
                }));
                if (!x || x && "" !== x.routeName && !v && !x.show) return a("/".concat(d, "/").concat(s)), null;
                var b = "" === x.routeName;
                return (0, r.jsx)(i.b, {
                    theme: h,
                    children: (0, r.jsx)(Io, {
                        isHomePage: b,
                        children: (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)(Tc, {}), (0, r.jsx)(kc, {
                                page: x,
                                photoAlbums: null === p || void 0 === p ? void 0 : p.weddingWebsiteResult.photoAlbums
                            })]
                        })
                    })
                })
            }
            var Fc = (0, l.memo)(Ec);

            function Mc(n, e) {
                (null == e || e > n.length) && (e = n.length);
                for (var t = 0, r = new Array(e); t < e; t++) r[t] = n[t];
                return r
            }

            function Bc(n, e) {
                return function(n) {
                    if (Array.isArray(n)) return n
                }(n) || function(n, e) {
                    var t = null == n ? null : "undefined" !== typeof Symbol && n[Symbol.iterator] || n["@@iterator"];
                    if (null != t) {
                        var r, i, o = [],
                            a = !0,
                            u = !1;
                        try {
                            for (t = t.call(n); !(a = (r = t.next()).done) && (o.push(r.value), !e || o.length !== e); a = !0);
                        } catch (l) {
                            u = !0, i = l
                        } finally {
                            try {
                                a || null == t.return || t.return()
                            } finally {
                                if (u) throw i
                            }
                        }
                        return o
                    }
                }(n, e) || function(n, e) {
                    if (!n) return;
                    if ("string" === typeof n) return Mc(n, e);
                    var t = Object.prototype.toString.call(n).slice(8, -1);
                    "Object" === t && n.constructor && (t = n.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return Mc(n, e)
                }(n, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Uc(n, e) {
                return ["".concat(e).concat(n), "@media (".concat(e, "-width: ").concat(n, "px)")]
            }
            var Hc = [423, 768, 1280].reduce((function(n, e) {
                    var t = Bc(Uc(e, "max"), 2),
                        r = t[0],
                        i = t[1],
                        o = Bc(Uc(e, "min"), 2),
                        a = o[0],
                        u = o[1];
                    return n[r] = i, n[a] = u, n
                }), {}),
                Vc = Hc;

            function qc(n, e) {
                return e || (e = n.slice(0)), Object.freeze(Object.defineProperties(n, {
                    raw: {
                        value: Object.freeze(e)
                    }
                }))
            }

            function Gc() {
                var n = qc(["\n  left: 0;\n  overflow: hidden;\n  position: fixed;\n  top: 0;\n  transition: all 0.5s;\n  width: 100%;\n  z-index: ", ";\n  background-color: ", ";\n\n  ", "\n\n  ", ";\n\n  @media (min-width: 768px) {\n    display: none;\n  }\n"]);
                return Gc = function() {
                    return n
                }, n
            }

            function $c() {
                var n = qc(["\n  padding-top: 56px;\n  height: 100vh;\n  overflow-y: auto;\n"]);
                return $c = function() {
                    return n
                }, n
            }

            function Kc() {
                var n = qc(["\n  display: block;\n  height: 40px;\n  left: 8px;\n  margin: 0;\n  overflow: hidden;\n  position: fixed;\n  top: 8px;\n  width: 40px;\n  z-index: ", ";\n\n  @media (min-width: 768px) {\n    display: none;\n  }\n"]);
                return Kc = function() {
                    return n
                }, n
            }

            function Jc() {
                var n = qc(["\n  ::before,\n  ::after {\n    content: '';\n    height: 3px;\n    left: 20%;\n    margin: 0 auto;\n    border-radius: 0;\n    margin-top: -0.15em;\n    position: absolute;\n    top: 50%;\n    transition: all 0.4s;\n    width: 24px;\n\n    background: ", ";\n\n    box-shadow: 0 -10px 0 0 ", ",\n      0 10px 0 0 ", ";\n\n    ", ";\n  }\n\n  ", "\n"]);
                return Jc = function() {
                    return n
                }, n
            }

            function Yc() {
                var n = qc(["\n  background: none;\n  border: none;\n  font-size: 10px;\n  height: 40px;\n  width: 40px;\n  border-radius: 0;\n\n  ", "\n"]);
                return Yc = function() {
                    return n
                }, n
            }

            function Qc() {
                var n = qc(["\n  display: inline-block;\n  position: absolute;\n  top: 12px;\n  left: 60px;\n  font-size: 18px;\n  text-transform: uppercase;\n  z-index: ", ";\n\n  ", "\n"]);
                return Qc = function() {
                    return n
                }, n
            }
            var Xc = m.Z.nav(Gc(), ut.mobileNav, (function(n) {
                    return n.theme.colors.background
                }), (function(n) {
                    return n.open ? "height: 100%;" : "height: 0;"
                }), (function(n) {
                    var e, t, r;
                    return null === (e = n.theme.liteSite) || void 0 === e || null === (t = e.Nav) || void 0 === t || null === (r = t.MobileNav) || void 0 === r ? void 0 : r.Tray
                })),
                nd = m.Z.div($c()),
                ed = m.Z.div(Kc(), ut.mobileNavButton),
                td = m.Z.span(Jc(), (function(n) {
                    return n.theme.fonts.s5.color
                }), (function(n) {
                    return n.theme.fonts.s5.color
                }), (function(n) {
                    return n.theme.fonts.s5.color
                }), (function(n) {
                    var e, t, r;
                    return null === (e = n.theme.liteSite) || void 0 === e || null === (t = e.Nav) || void 0 === t || null === (r = t.MobileNav) || void 0 === r ? void 0 : r.Burger
                }), (function(n) {
                    return n.open ? "\n      ::after {\n        box-shadow: 0 0 0 0 rgba(0,0,0,0), 0 0 0 0 rgba(0,0,0,0);\n        transform: rotateZ(45deg);\n      }\n\n      ::before {\n        box-shadow: 0 0 0 0 rgba(0,0,0,0), 0 0 0 0 rgba(0,0,0,0);\n        transform: rotateZ(-45deg);\n      }\n    " : ""
                })),
                rd = m.Z.button(Yc(), (function(n) {
                    var e;
                    return null === (e = n.theme.components.Nav) || void 0 === e ? void 0 : e.Button
                })),
                id = m.Z.span(Qc(), ut.mobileNavButton, (function(n) {
                    var e, t;
                    return null === (e = n.theme.liteSite) || void 0 === e || null === (t = e.Nav) || void 0 === t ? void 0 : t.Button
                }));

            function od(n) {
                var e = n.pages,
                    t = n.children,
                    i = n.showMenuText,
                    o = (0, l.useState)(!1),
                    a = o[0],
                    u = o[1],
                    c = "mobile nav menu",
                    d = Sr(),
                    s = Cr("guest", d, c),
                    f = (0, l.useCallback)((function() {
                        u((function(n) {
                            return s("".concat(n ? "close" : "open", " menu")), !n
                        }))
                    }), [s]);
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(ed, {
                        children: (0, r.jsxs)(rd, {
                            onClick: f,
                            children: [(0, r.jsx)(td, {
                                open: a
                            }), i ? (0, r.jsx)(id, {
                                children: "Menu"
                            }) : (0, r.jsx)(vi, {
                                children: "Menu Button"
                            })]
                        })
                    }), t, (0, r.jsx)(Xc, {
                        open: a,
                        role: "navigation",
                        children: (0, r.jsx)(nd, {
                            children: (0, r.jsx)(ji, {
                                pages: e,
                                setMobileNavOpen: u,
                                userDecisionArea: c
                            })
                        })
                    })]
                })
            }
            var ad = (0, l.memo)(od);

            function ud(n, e) {
                return e || (e = n.slice(0)), Object.freeze(Object.defineProperties(n, {
                    raw: {
                        value: Object.freeze(e)
                    }
                }))
            }

            function ld() {
                var n = ud(["\n  span {\n    color: ", ";\n    padding: 0.75rem 0;\n    box-sizing: border-box;\n    border-top: 1px solid transparent;\n    font-size: 0.875rem;\n\n    ", "\n\n    ", ";\n\n    ", "\n\n    ", "\n  }\n"]);
                return ld = function() {
                    return n
                }, n
            }

            function cd() {
                var n = ud(["\n  /* for RSVP nav link */\n  a {\n  }\n\n  span {\n    height: initial;\n    padding: 0.75rem 1.25rem;\n    font-size: 0.875rem;\n    color: ", ";\n    background: ", ";\n    border: 1px solid ", ";\n\n    ", "\n\n    ", "\n\n    &:focus,\n    &:hover {\n      ", "\n\n      ", "\n\n      ", "\n    }\n  }\n"]);
                return cd = function() {
                    return n
                }, n
            }
            var dd = "#ffffff",
                sd = "#414042",
                fd = m.Z.li(ld(), sd, (function(n) {
                    var e, t, r, i = n.active,
                        o = n.theme;
                    return i ? "\n    border-bottom: 1px solid ".concat((null === (e = o.liteSite) || void 0 === e || null === (t = e.Nav) || void 0 === t || null === (r = t.Link) || void 0 === r ? void 0 : r.color) || sd, ";\n  ") : ""
                }), (function(n) {
                    var e, t, r, i = n.theme;
                    return "\n      ".concat(Vc.min768, " {\n        :hover {\n          border-bottom: 1px solid ").concat((null === (e = i.liteSite) || void 0 === e || null === (t = e.Nav) || void 0 === t || null === (r = t.Link) || void 0 === r ? void 0 : r.color) || sd, ";\n        }\n      }\n    ")
                }), (function(n) {
                    var e, t;
                    return null === (e = n.theme.liteSite) || void 0 === e || null === (t = e.Nav) || void 0 === t ? void 0 : t.Link
                }), (function(n) {
                    var e, t = n.active,
                        r = n.theme;
                    return t ? null === (e = r.components.Nav) || void 0 === e ? void 0 : e.LinkActive : void 0
                })),
                md = m.Z.li(cd(), dd, sd, sd, (function(n) {
                    var e, t;
                    return null === (e = n.theme.liteSite) || void 0 === e || null === (t = e.components) || void 0 === t ? void 0 : t.Button
                }), (function(n) {
                    var e, t;
                    return null === (e = n.theme.liteSite) || void 0 === e || null === (t = e.Nav) || void 0 === t ? void 0 : t.Button
                }), (function(n) {
                    var e;
                    return null === (e = n.theme.components) || void 0 === e ? void 0 : e.ButtonHover
                }), (function(n) {
                    var e, t;
                    return null === (e = n.theme.liteSite) || void 0 === e || null === (t = e.components) || void 0 === t ? void 0 : t.ButtonHover
                }), (function(n) {
                    var e, t;
                    return null === (e = n.theme.liteSite) || void 0 === e || null === (t = e.Nav) || void 0 === t ? void 0 : t.ButtonHover
                })),
                vd = "desktop nav";

            function pd(n) {
                var e = n.page,
                    t = n.query,
                    i = "RsvpNavItem" === e.type && "rsvp" === e.routeName ? md : fd,
                    o = t.pathPrefix,
                    a = t.slug,
                    u = e.title,
                    c = e.routeName,
                    d = "/".concat(o, "/").concat(a, "/").concat(c),
                    s = Sr(),
                    f = Cr("guest", s, vd),
                    m = Cr("rsvp", s, vd),
                    v = (0, l.useCallback)((function(n) {
                        "rsvp" === n && m(n, ""), f(n, "")
                    }), [f, m]);
                return (0, r.jsx)(i, {
                    active: s === e.routeName,
                    children: (0, r.jsx)(Vr, {
                        href: d,
                        as: d,
                        route: c || "",
                        title: u || "",
                        handleTracking: v,
                        desktop: !0
                    })
                }, e.id)
            }
            var hd = (0, l.memo)(pd);

            function gd(n, e) {
                return e || (e = n.slice(0)), Object.freeze(Object.defineProperties(n, {
                    raw: {
                        value: Object.freeze(e)
                    }
                }))
            }

            function xd() {
                var n = gd(["\n  display: flex;\n  width: 100%;\n  align-items: center;\n  padding-left: 2.5rem;\n  padding-right: 1.5rem;\n  padding-bottom: 1rem;\n  padding-top: 1rem;\n  min-height: 8rem;\n  background: ", ";\n\n  ", " {\n    position: fixed;\n    min-height: auto;\n    height: 60px;\n    top: 0;\n    left: 60px;\n    right: 60px;\n    width: auto;\n    text-align: center;\n    background: transparent;\n    z-index: 20;\n    padding: 0;\n  }\n\n  ", "\n"]);
                return xd = function() {
                    return n
                }, n
            }

            function bd() {
                var n = gd(["\n  li {\n    list-style: none;\n    margin-right: 1.5rem;\n  }\n\n  padding-left: 1rem;\n  display: flex;\n  flex-wrap: wrap;\n  flex: 1;\n  justify-content: flex-end;\n\n  ", " {\n    display: none;\n  }\n"]);
                return bd = function() {
                    return n
                }, n
            }

            function wd() {
                var n = gd(["\n  font-size: 0.875rem;\n  display: inline-block;\n  text-transform: uppercase;\n  color: ", ";\n\n  ", "\n\n  ", " {\n    margin: 0 auto;\n    font-size: 1.25rem;\n  }\n\n  ", "\n\n  ", "\n"]);
                return wd = function() {
                    return n
                }, n
            }
            var yd = "#ffffff",
                jd = "#414042",
                Pd = m.Z.nav(xd(), yd, Vc.max768, (function(n) {
                    var e, t;
                    return null === (e = n.theme.liteSite) || void 0 === e || null === (t = e.Nav) || void 0 === t ? void 0 : t.Background
                })),
                Od = m.Z.ul(bd(), Vc.max768),
                Wd = m.Z.a(wd(), jd, Rn("s6"), Vc.max768, (function(n) {
                    var e, t;
                    return null === (e = n.theme.liteSite) || void 0 === e || null === (t = e.Nav) || void 0 === t ? void 0 : t.Link
                }), (function(n) {
                    var e, t;
                    return null === (e = n.theme.liteSite) || void 0 === e || null === (t = e.Nav) || void 0 === t ? void 0 : t.Names
                }));

            function kd() {
                var n, e, t = (0, l.useContext)(ce).data,
                    i = Wr(),
                    o = (0, f.useRouter)().query,
                    a = o.pathPrefix,
                    u = o.slug,
                    c = "/".concat(a, "/").concat(u, "/");
                if (!kn(null === t || void 0 === t ? void 0 : t.weddingWebsiteResult)) return null;
                var d = Boolean(null === t || void 0 === t ? void 0 : t.weddingWebsiteResult.firstName) && Boolean(null === t || void 0 === t ? void 0 : t.weddingWebsiteResult.fianceFirstName);
                return (0, r.jsxs)(Pd, {
                    children: [d && (0, r.jsx)(Lr(), {
                        href: c,
                        as: c,
                        passHref: !0,
                        children: (0, r.jsxs)(Wd, {
                            children: [(null === (n = null === t || void 0 === t ? void 0 : t.weddingWebsiteResult.firstName) || void 0 === n ? void 0 : n.substring(0, 1)) || "", " ", (0, r.jsx)("span", {
                                children: "&"
                            }), " ", (null === (e = null === t || void 0 === t ? void 0 : t.weddingWebsiteResult.fianceFirstName) || void 0 === e ? void 0 : e.substring(0, 1)) || ""]
                        })
                    }), (0, r.jsx)(Od, {
                        children: null === i || void 0 === i ? void 0 : i.map((function(n) {
                            return (0, r.jsx)(hd, {
                                page: n,
                                query: o
                            }, n.id)
                        }))
                    })]
                })
            }
            var Sd = (0, l.memo)(kd);

            function Nd() {
                var n, e, t = (n = ["\n  > div {\n    overflow: visible;\n    width: 100%;\n    height: 60px;\n    left: 0;\n    top: 0;\n    display: flex;\n\n    background-color: ", ";\n\n    > button {\n      position: absolute;\n      left: 0;\n      top: 0;\n      height: 100%;\n      width: 60px;\n      cursor: pointer;\n      border-radius: 4px;\n\n      /* background: gray; */\n      background: ", ";\n\n      ", " {\n        background: transparent;\n      }\n\n      span {\n        overflow: hidden;\n        text-indent: -1000px;\n        background: transparent;\n        width: 0;\n      }\n\n      span::before,\n      span::after {\n        left: 50%;\n        margin-left: -21%;\n      }\n    }\n\n    h2 {\n    }\n\n    ", " {\n      display: none;\n    }\n\n    ", "\n  }\n"], e || (e = n.slice(0)), Object.freeze(Object.defineProperties(n, {
                    raw: {
                        value: Object.freeze(e)
                    }
                })));
                return Nd = function() {
                    return t
                }, t
            }
            var Id = m.Z.span(Nd(), (function(n) {
                return n.theme.colors.background
            }), "#ffffff", Vc.max768, Vc.min768, (function(n) {
                var e, t;
                return null === (e = n.theme.liteSite) || void 0 === e || null === (t = e.Nav) || void 0 === t ? void 0 : t.MobileNav
            }));

            function Rd() {
                var n = kr(),
                    e = n.pages;
                return n.showNav ? (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(Sd, {}), (0, r.jsx)(Id, {
                        children: (0, r.jsx)(ad, {
                            pages: e,
                            showMenuText: !0
                        })
                    })]
                }) : null
            }
            var Zd = (0, l.memo)(Rd);

            function zd() {
                var n, e, t = (n = ["\n  min-height: 1vw;\n  text-align: center;\n  padding: 1rem;\n  background: inherit;\n  color: inherit;\n  font-size: 1rem;\n\n  ", "\n\n  a:link {\n    text-decoration: underline;\n  }\n\n  ", "\n"], e || (e = n.slice(0)), Object.freeze(Object.defineProperties(n, {
                    raw: {
                        value: Object.freeze(e)
                    }
                })));
                return zd = function() {
                    return t
                }, t
            }
            var Dd = m.Z.div(zd(), Rn("s6"), (function(n) {
                var e;
                return null === (e = n.theme.liteSite) || void 0 === e ? void 0 : e.Footer
            }));

            function Ad() {
             
            }
            var Cd = (0, l.memo)(Ad),
                _d = t(3600);
            var Ld = function(n, e, t) {
                var r;
                return (null === n || void 0 === n ? void 0 : n.current) && (r = new _d.FocusedImage(n.current, {
                    focus: {
                        x: e,
                        y: t
                    },
                    containerPosition: "absolute"
                })), r
            };

            function Td(n, e) {
                return e || (e = n.slice(0)), Object.freeze(Object.defineProperties(n, {
                    raw: {
                        value: Object.freeze(e)
                    }
                }))
            }

            function Ed() {
                var n = Td(["\n  position: relative;\n  min-width: 50%;\n  flex-grow: 1;\n  overflow: hidden;\n\n  ", " {\n    min-width: 40%;\n  }\n\n  ", " {\n    width: 100%;\n    height: ", ";\n  }\n\n  ", "\n"]);
                return Ed = function() {
                    return n
                }, n
            }

            function Fd() {
                var n = Td(["\n  display: flex;\n  ", "\n"]);
                return Fd = function() {
                    return n
                }, n
            }

            function Md() {
                var n = Td(["\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n"]);
                return Md = function() {
                    return n
                }, n
            }

            function Bd() {
                var n = Td(["\n  object-fit: cover;\n  max-width: none;\n"]);
                return Bd = function() {
                    return n
                }, n
            }
            var Ud = m.Z.div(Ed(), Vc.max1280, Vc.max768, (function(n) {
                    return n.renderingPreviewImage ? "50vw !important" : "75vw"
                }), (function(n) {
                    var e, t, r;
                    return null === (e = n.theme.liteSite) || void 0 === e || null === (t = e.CardLayout) || void 0 === t || null === (r = t.components) || void 0 === r ? void 0 : r.PhotoPane
                })),
                Hd = m.Z.div(Fd(), (function(n) {
                    var e, t, r;
                    return null === (e = n.theme.liteSite) || void 0 === e || null === (t = e.CardLayout) || void 0 === t || null === (r = t.components) || void 0 === r ? void 0 : r.PhotoCard
                })),
                Vd = m.Z.div(Md()),
                qd = m.Z.img(Bd());

            function Gd(n) {
                var e = n.xFocalPoint,
                    t = n.yFocalPoint,
                    i = n.renderingPreviewImage,
                    o = n.coverPhotoUrl,
                    a = (0, l.useRef)(null);
                return Ld(a, e, t), (0, l.useEffect)((function() {
                    Ld(a, e, t)
                }), [a, e, t]), "" !== o ? (0, r.jsx)(Ud, {
                    renderingPreviewImage: i,
                    children: (0, r.jsx)(Hd, {
                        className: "photo-card",
                        children: (0, r.jsx)(Vd, {
                            children: (0, r.jsx)(qd, {
                                ref: a,
                                src: o,
                                "data-focus-x": e,
                                "data-focus-y": t
                            })
                        })
                    })
                }) : null
            }
            var $d = (0, l.memo)(Gd);

            function Kd(n, e) {
                return e || (e = n.slice(0)), Object.freeze(Object.defineProperties(n, {
                    raw: {
                        value: Object.freeze(e)
                    }
                }))
            }

            function Jd() {
                var n = Kd(["\n  display: flex;\n  flex-direction: justify;\n  align-items: center;\n  position: relative;\n  flex: 1;\n  min-height: calc(100vh - 8rem);\n  min-width: 420px;\n\n  ", " {\n    width: 100%;\n    min-height: auto;\n    min-width: 250px;\n  }\n\n  ", "\n"]);
                return Jd = function() {
                    return n
                }, n
            }

            function Yd() {
                var n = Kd(["\n  background: #fff;\n  width: 500px;\n  min-height: 530px;\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  padding: 3rem 1rem;\n  margin: 0 auto;\n\n  ", " {\n    justify-content: center;\n    min-height: auto;\n    width: 400px;\n  }\n\n  ", " {\n    width: auto;\n    min-height: 23.75rem;\n  }\n\n  ", "\n"]);
                return Yd = function() {
                    return n
                }, n
            }

            function Qd() {
                var n = Kd(["\n  width: 100%;\n\n  ", "\n"]);
                return Qd = function() {
                    return n
                }, n
            }

            function Xd() {
                var n = Kd(["\n  ", "\n"]);
                return Xd = function() {
                    return n
                }, n
            }

            function ns() {
                var n = Kd(["\n  width: 100%;\n  object-fit: contain;\n  min-height: 200px;\n\n  ", "\n"]);
                return ns = function() {
                    return n
                }, n
            }

            function es() {
                var n = Kd(["\n  width: 100%;\n  object-fit: contain;\n  margin-top: 3rem;\n\n  height: ", ";\n\n  ", "\n\n  ", "\n"]);
                return es = function() {
                    return n
                }, n
            }

            function ts() {
                var n = Kd(["\n  width: 40%;\n  border: 1px solid #414042;\n  height: 0;\n  margin: 3rem auto;\n\n  ", "\n"]);
                return ts = function() {
                    return n
                }, n
            }

            function rs() {
                var n = Kd(["\n  a {\n    background: ", ";\n    padding: 0.75rem 1.25rem;\n    line-height: 1;\n    color: ", ";\n    border: 1px solid ", ";\n    border-radius: 0;\n    font-size: 0.875rem;\n\n    ", " {\n      margin: 0 auto;\n    }\n\n    ", "\n\n    ", "\n\n    &:hover, &:focus {\n      ", "\n      ", "\n    }\n  }\n"]);
                return rs = function() {
                    return n
                }, n
            }
            var is = "#ffffff",
                os = "#414042",
                as = m.Z.div(Jd(), Vc.max768, (function(n) {
                    var e, t, r;
                    return null === (e = n.theme.liteSite) || void 0 === e || null === (t = e.CardLayout) || void 0 === t || null === (r = t.components) || void 0 === r ? void 0 : r.DetailPane
                })),
                us = m.Z.div(Yd(), Vc.max768, Vc.max423, (function(n) {
                    var e, t, r;
                    return null === (e = n.theme.liteSite) || void 0 === e || null === (t = e.CardLayout) || void 0 === t || null === (r = t.components) || void 0 === r ? void 0 : r.Card
                })),
                ls = m.Z.div(Qd(), (function(n) {
                    var e, t, r;
                    return null === (e = n.theme.liteSite) || void 0 === e || null === (t = e.CardLayout) || void 0 === t || null === (r = t.components) || void 0 === r ? void 0 : r.CardContent
                })),
                cs = m.Z.img(Xd(), (function(n) {
                    var e, t, r;
                    return null === (e = n.theme.liteSite) || void 0 === e || null === (t = e.CardLayout) || void 0 === t || null === (r = t.components) || void 0 === r ? void 0 : r.InitialsFlourish
                })),
                ds = m.Z.img(ns(), (function(n) {
                    var e, t, r;
                    return null === (e = n.theme.liteSite) || void 0 === e || null === (t = e.CardLayout) || void 0 === t || null === (r = t.components) || void 0 === r ? void 0 : r.NameFlourish
                })),
                ss = m.Z.img(es(), (function(n) {
                    return n.countdown ? "125px" : "70px"
                }), (function(n) {
                    var e, t, r;
                    return null === (e = n.theme.liteSite) || void 0 === e || null === (t = e.CardLayout) || void 0 === t || null === (r = t.components) || void 0 === r ? void 0 : r.DateFlourish
                }), (function(n) {
                    var e, t, r, i = n.theme;
                    return n.countdown ? null === (e = i.liteSite) || void 0 === e || null === (t = e.CardLayout) || void 0 === t || null === (r = t.components) || void 0 === r ? void 0 : r.CountdownFlourish : void 0
                })),
                fs = m.Z.div(ts(), (function(n) {
                    var e, t, r;
                    return null === (e = n.theme.liteSite) || void 0 === e || null === (t = e.CardLayout) || void 0 === t || null === (r = t.components) || void 0 === r ? void 0 : r.Separator
                })),
                ms = m.Z.span(rs(), os, is, os, Vc.max768, (function(n) {
                    var e, t;
                    return null === (e = n.theme.liteSite) || void 0 === e || null === (t = e.components) || void 0 === t ? void 0 : t.Button
                }), (function(n) {
                    var e, t, r;
                    return null === (e = n.theme.liteSite) || void 0 === e || null === (t = e.CardLayout) || void 0 === t || null === (r = t.components) || void 0 === r ? void 0 : r.Button
                }), (function(n) {
                    var e, t;
                    return null === (e = n.theme.liteSite) || void 0 === e || null === (t = e.components) || void 0 === t ? void 0 : t.ButtonHover
                }), (function(n) {
                    var e, t, r;
                    return null === (e = n.theme.liteSite) || void 0 === e || null === (t = e.CardLayout) || void 0 === t || null === (r = t.components) || void 0 === r ? void 0 : r.ButtonHover
                }));

            function vs(n) {

            }
            var ps = (0, l.memo)(vs);

            function hs(n, e) {
                return e || (e = n.slice(0)), Object.freeze(Object.defineProperties(n, {
                    raw: {
                        value: Object.freeze(e)
                    }
                }))
            }

            function gs() {
                var n = hs(["\n  background: #c4c4c4;\n  color: #646464;\n  height: 100vh;\n  min-height: 40vw;\n  position: relative;\n\n  ", " {\n    height: auto;\n    min-height: 100vh;\n\n    &.showNav {\n      padding-top: 60px;\n    }\n  }\n\n  ", "\n"]);
                return gs = function() {
                    return n
                }, n
            }

            function xs() {
                var n = hs(["\n  flex-wrap: wrap;\n  margin: 0px auto;\n  min-height: calc(100vh - 8rem);\n  align-items: stretch;\n\n  ", " {\n    min-height: auto;\n    display: block;\n  }\n\n  &.nonav {\n    ", " {\n      min-height: 100vh;\n    }\n\n    ", "\n  }\n\n  ", "\n"]);
                return xs = function() {
                    return n
                }, n
            }

            function bs() {
                var n = hs(["\n  flex-wrap: wrap;\n  margin: 0px auto;\n  min-height: calc(100vh - 8rem);\n  align-items: stretch;\n\n  @media (max-width: 768px) {\n    min-height: auto;\n    display: block;\n  }\n\n  ", "\n\n  ", "\n"]);
                return bs = function() {
                    return n
                }, n
            }

            function ws() {
                var n = hs(["\n  margin: 0 auto;\n\n  ", "\n"]);
                return ws = function() {
                    return n
                }, n
            }
            var ys = m.Z.div(gs(), Vc.max768, (function(n) {
                    var e, t, r;
                    return null === (e = n.theme.liteSite) || void 0 === e || null === (t = e.CardLayout) || void 0 === t || null === (r = t.components) || void 0 === r ? void 0 : r.Background
                })),
                js = m.Z.div(xs(), Vc.max768, Vc.min768, (function(n) {
                    var e, t, r;
                    return null === (e = n.theme.liteSite) || void 0 === e || null === (t = e.CardLayout) || void 0 === t || null === (r = t.components) || void 0 === r ? void 0 : r.NoNavContent
                }), (function(n) {
                    var e, t, r;
                    return null === (e = n.theme.liteSite) || void 0 === e || null === (t = e.CardLayout) || void 0 === t || null === (r = t.components) || void 0 === r ? void 0 : r.Content
                })),
                Ps = m.Z.div(bs(), (function(n) {
                    var e, t, r;
                    return null === (e = n.theme.liteSite) || void 0 === e || null === (t = e.CardLayout) || void 0 === t || null === (r = t.components) || void 0 === r ? void 0 : r.Content
                }), (function(n) {
                    var e, t, r;
                    return null === (e = n.theme.liteSite) || void 0 === e || null === (t = e.CardLayout) || void 0 === t || null === (r = t.components) || void 0 === r ? void 0 : r.Secondary
                })),
                Os = m.Z.div(ws(), (function(n) {
                    var e, t, r;
                    return null === (e = n.theme.liteSite) || void 0 === e || null === (t = e.CardLayout) || void 0 === t || null === (r = t.components) || void 0 === r ? void 0 : r.SecondaryContent
                })),
                Ws = {
                    display: "flex"
                };

            function ks(n) {
                var e = n.themeOverride,
                    t = (0, f.useRouter)(),
                    o = t.replace,
                    a = t.query,
                    u = a.route,
                    c = a.pathPrefix,
                    d = a.slug,
                    s = a.renderingPreviewImage,
                    m = void 0 === s ? "false" : s,
                    v = a.preview,
                    p = void 0 === v ? "true" : v,
                    h = (0, l.useContext)(ce).data,
                    g = kr().showNav,
                    x = Ne(e),
                    b = Array.isArray(u) ? u[0] : u || "";
                if (kn(null === h || void 0 === h ? void 0 : h.weddingWebsiteResult)) {
                    var w, y, j, P, O = null === (w = null === h || void 0 === h ? void 0 : h.weddingWebsiteResult.pages) || void 0 === w ? void 0 : w.find((function(n) {
                        return n.routeName === b
                    }));
                    if (!O || O && "" !== O.routeName && !p && !O.show) return o("/".concat(c, "/").concat(d)), null;
                    var W = null === (j = null === (y = null === h || void 0 === h ? void 0 : h.weddingWebsiteResult.pages) || void 0 === y ? void 0 : y.find((function(n) {
                        return "LiteSitePage" === n.type
                    }))) || void 0 === j ? void 0 : j.items.find((function(n) {
                        return "CoverPhotoItem" === n.type
                    }));
                    return (0, r.jsxs)(i.b, {
                        theme: x,
                        children: [(0, r.jsx)(Ln.Z, {}), (0, r.jsxs)(ys, {
                            className: "".concat(g ? "showNav " : "").concat(W ? "" : "noPhoto ").concat("LiteSitePage" === O.type ? "home" : "secondary"),
                            children: [(0, r.jsx)(Zd, {}), "LiteSitePage" === O.type ? (0, r.jsx)(js, {
                                style: Ws,
                                className: "".concat(g ? "" : "nonav"),
                                children: (0, r.jsx)(ps, {
                                    renderingPreviewImage: "true" === m,
                                    weddingWebsiteResult: null === h || void 0 === h ? void 0 : h.weddingWebsiteResult,
                                    weddingDatePreferences: null === h || void 0 === h ? void 0 : h.weddingDatePreferences
                                })
                            }) : null, "RegistryPage" === O.type ? (0, r.jsxs)(Ps, {
                                children: [(0, r.jsx)(Tc, {}), ";"]
                            }) : null, "LiteSitePage" !== O.type && "RegistryPage" !== O.type ? (0, r.jsx)(Ps, {
                                children: (0, r.jsx)(Os, {
                                    children: (0, r.jsx)(kc, {
                                        page: O,
                                        photoAlbums: null === h || void 0 === h || null === (P = h.weddingWebsiteResult) || void 0 === P ? void 0 : P.photoAlbums
                                    })
                                })
                            }) : null, (0, r.jsx)(Cd, {})]
                        })]
                    })
                }
                return null
            }
            var Ss = (0, l.memo)(ks);

            function Ns() {
                var n, e, t = (n = ["\n            .error-message {\n              background-color: rgba(245, 166, 35, 0.2);\n              margin-bottom: 15px;\n              text-align: left;\n              font-size: 14px;\n              padding: 13px 20px;\n              border-left: 5px solid rgb(245, 166, 35);\n            }\n\n            #Union__global-snackbar-container {\n              display: none;\n            }\n          "], e || (e = n.slice(0)), Object.freeze(Object.defineProperties(n, {
                    raw: {
                        value: Object.freeze(e)
                    }
                })));
                return Ns = function() {
                    return t
                }, t
            }

            function Is() {
                if ("undefined" === typeof navigator) return !1;
                var n = navigator.userAgent.toLowerCase(),
                    e = n.split("msie")[1];
                return -1 !== n.indexOf("msie") && "undefined" !== typeof e && parseInt(e, 10)
            }

            function Rs(n) {
               
            }
            var Zs = (0, l.memo)(Rs);

            function zs(n) {
                var e, t, i, o = n.data,
                    a = function(n) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                        if (!n) return "";
                        var t = [480, 768, 1024, 1280].reduce((function(t, r) {
                                return "".concat(t).concat(t ? ", " : "").concat(nt(n, g, r * e, x, void 0, void 0), " ").concat(r, "w")
                            }), ""),
                            i = nt(n, g, 480 * e, x, void 0, void 0);
                        return (0, r.jsx)("link", {
                            rel: "preload",
                            as: "image",
                            href: i,
                            imageSrcSet: t,
                            imageSizes: "100vw",
                            "data-testid": "preload-images"
                        })
                    },
                    l = (0, f.useRouter)().query;
                if (!o || "WWS_WeddingWebsiteV2" !== (null === (e = o.weddingWebsiteResult) || void 0 === e ? void 0 : e.__typename)) return null;
                var c = l || {},
                    d = c.route,
                    s = void 0 === d ? [] : d,
                    m = c.useDefaultCrop,
                    v = void 0 !== m && m,
                    p = !s.length ? null === (t = null === o || void 0 === o ? void 0 : o.weddingWebsiteResult.coverPhoto) || void 0 === t ? void 0 : t.path : void 0;
                if (!p) return null;
                var h = v ? {
                        height: 768,
                        width: 1024
                    } : null,
                    g = "";
                h && (g = "".concat(null === h || void 0 === h ? void 0 : h.width, ".").concat(null === h || void 0 === h ? void 0 : h.height));
                var x = (null === (i = null === o || void 0 === o ? void 0 : o.weddingWebsiteResult.coverPhoto) || void 0 === i ? void 0 : i.cropBox) || void 0;
                return (0, r.jsxs)(u(), {
                    children: [a(p), a(p, 1.5), a(p, 2)]
                })
            }
            var Ds = (0, l.memo)(zs);

            function As(n, e, t) {
                return e in n ? Object.defineProperty(n, e, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[e] = t, n
            }

            function Cs(n) {
                for (var e = 1; e < arguments.length; e++) {
                    var t = null != arguments[e] ? arguments[e] : {},
                        r = Object.keys(t);
                    "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(n) {
                        return Object.getOwnPropertyDescriptor(t, n).enumerable
                    })))), r.forEach((function(e) {
                        As(n, e, t[e])
                    }))
                }
                return n
            }
            var _s = [];

            function Ls() {
                var n, e = (0, f.useRouter)(),
                    t = e.query,
                    i = e.replace,
                    o = e.reload,
                    a = ve(),
                    u = (0, l.useContext)(ce),
                    c = u.data,
                    d = u.setWWData,
                    s = me();
                (0, l.useEffect)((function() {
                    try {
                        window.dataLayer = window.dataLayer || [];
                        var n = {
                            event: "WWSCustomDomain",
                            isCustomDomain: !window.location.host.includes("")
                        };
                        window.dataLayer.push(n)
                    } catch (e) {
                        xe.Z.notify("Issues pushing custom domain property to GTM data layer")
                    }
                }), []), (0, l.useEffect)((function() {
                    var n, e = Array.isArray(t.route) ? t.route[0] : t.route ? t.route : "",
                        r = kn(null === c || void 0 === c ? void 0 : c.weddingWebsiteResult) ? null === (n = null === c || void 0 === c ? void 0 : c.weddingWebsiteResult.pages) || void 0 === n ? void 0 : n.find((function(n) {
                            return n.routeName === e
                        })) : void 0;
                    ie(r || "rsvp" !== e ? {
                        type: "currentPage",
                        data: r
                    } : {
                        type: "currentPage",
                        data: "rsvp"
                    })
                }), [null === c || void 0 === c ? void 0 : c.weddingWebsiteResult, t]), (0, l.useEffect)((function() {
                    var n = function(n) {
                        if (n.source !== window) try {
                            var e = JSON.parse(n.data);
                            switch (e.type) {
                                case "currentPage":
                                    return i("/".concat(t.pathPrefix, "/").concat(t.slug, "/").concat(e.data.routeName));
                                case "updatePage":
                                    var r, a, u = Cs({}, c, {
                                        events: (null === c || void 0 === c ? void 0 : c.events) || _s,
                                        weddingWebsiteResult: (null === c || void 0 === c ? void 0 : c.weddingWebsiteResult) && kn(c.weddingWebsiteResult) ? Cs({}, c.weddingWebsiteResult, {
                                            coverPhoto: Cs({}, c.weddingWebsiteResult.coverPhoto, e.data.coverPhoto),
                                            coverPhotoPathWithCropbox: e.data.coverPhotoPathWithCropbox || c.weddingWebsiteResult.coverPhotoPathWithCropbox,
                                            pages: (null === (r = c.weddingWebsiteResult) || void 0 === r || null === (a = r.pages) || void 0 === a ? void 0 : a.map((function(n) {
                                                return n.id === e.data.id ? e.data : n
                                            }))) || []
                                        }) : null
                                    });
                                    return "CustomPage" === e.data.type && ie({
                                        type: "currentPage",
                                        data: e.data
                                    }), d(u);
                                case "updateRegistryNote":
                                    var l = Cs({}, c, {
                                        events: (null === c || void 0 === c ? void 0 : c.events) || _s,
                                        weddingWebsiteResult: (null === c || void 0 === c ? void 0 : c.weddingWebsiteResult) && kn(c.weddingWebsiteResult) ? Cs({}, c.weddingWebsiteResult, {
                                            registryNote: e.data
                                        }) : null
                                    });
                                    return d(l);
                                case "updateBasicInfo":
                                    var s, f, m = Cs({}, c, {
                                        events: (null === c || void 0 === c ? void 0 : c.events) || _s,
                                        weddingWebsiteResult: Cs({}, null === c || void 0 === c ? void 0 : c.weddingWebsiteResult, null === e || void 0 === e || null === (s = e.data) || void 0 === s ? void 0 : s.weddingWebsiteResult),
                                        weddingDatePreferences: Cs({}, null === c || void 0 === c ? void 0 : c.weddingDatePreferences, null === e || void 0 === e || null === (f = e.data) || void 0 === f ? void 0 : f.weddingDatePreferences)
                                    });
                                    return d(m);
                                case "reload":
                                    return void o()
                            }
                        } catch (v) {}
                    };
                    return window.addEventListener("message", n),
                        function() {
                            window.removeEventListener("message", n)
                        }
                }), [c]);
                var m = "true" === t.preview,
                    v = (0, l.useMemo)((function() {
                        return "string" === typeof t.themeOverride ? t.themeOverride : ""
                    }), [t]);
                if (t.route && "rsvp" === t.route[0]) {
                    if (!a && !m) return i("/404"), null;
                    n = Zs
                } else n = s ? Ss : Fc;
                return c ? (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(Oe, {
                        data: c
                    }), (0, r.jsx)(Ds, {
                        data: c
                    }), (0, r.jsx)(je, {
                        data: c,
                        children: (0, r.jsx)(Rr, {
                            data: c,
                            children: (0, r.jsx)(n, {
                                themeOverride: v
                            })
                        })
                    })]
                }) : null
            }
            var Ts = (0, l.memo)(Ls);

            function Es(n, e, t) {
                return e in n ? Object.defineProperty(n, e, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[e] = t, n
            }

            function Fs(n) {
                for (var e = 1; e < arguments.length; e++) {
                    var t = null != arguments[e] ? arguments[e] : {},
                        r = Object.keys(t);
                    "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(n) {
                        return Object.getOwnPropertyDescriptor(t, n).enumerable
                    })))), r.forEach((function(e) {
                        Es(n, e, t[e])
                    }))
                }
                return n
            }

            function Ms(n, e) {
                if (null == n) return {};
                var t, r, i = function(n, e) {
                    if (null == n) return {};
                    var t, r, i = {},
                        o = Object.keys(n);
                    for (r = 0; r < o.length; r++) t = o[r], e.indexOf(t) >= 0 || (i[t] = n[t]);
                    return i
                }(n, e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(n);
                    for (r = 0; r < o.length; r++) t = o[r], e.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(n, t) && (i[t] = n[t])
                }
                return i
            }
            var Bs = function(n, e, t) {
                    var r, i;
                    if (!n || "undefined" === typeof e) return e;
                    if ("string" === typeof t && "" !== t ? i = JSON.parse(t) : e && e.weddingWebsiteResult && e.weddingWebsiteResult.theme && Array.isArray(e.weddingWebsiteResult.theme.themeStyles) && "undefined" !== typeof e.weddingWebsiteResult.theme.themeStyles[0] && (i = e.weddingWebsiteResult.theme.themeStyles[0].styles), !(null === i || void 0 === i || null === (r = i.config) || void 0 === r ? void 0 : r.coupleInfo)) return e;
                    var o = i.config.coupleInfo,
                        a = o.coverPhotoId,
                        u = o.weddingDate,
                        l = Ms(o, ["coverPhotoId", "weddingDate"]),
                        c = e.weddingWebsiteResult,
                        d = e.wedding,
                        s = Ms(e, ["weddingWebsiteResult", "wedding"]);
                    if ("WWS_WeddingWebsiteV2" === (null === c || void 0 === c ? void 0 : c.__typename)) {
                        var f, m = c.coverPhoto,
                            v = Fs({
                                weddingWebsiteResult: Fs({}, c, l, {
                                    coverPhoto: (a ? {
                                        __typename: "WWS_CoverPhoto",
                                        path: "./assets".concat(a)
                                    } : void 0) || m,
                                    pages: a ? null === (f = c.pages) || void 0 === f ? void 0 : f.map((function(n) {
                                        return "LiteSitePage" === n.type ? Fs({}, n, {
                                            items: [{
                                                id: 1,
                                                mediaUrl: "./assets".concat(a, "?ordering=explicit"),
                                                rank: 1,
                                                type: "CoverPhotoItem"
                                            }]
                                        }) : n
                                    })) : c.pages
                                })
                            }, s);
                        if (kn(v.weddingWebsiteResult) && "undefined" !== typeof d && null !== d) {
                            var p = JSON.parse(JSON.stringify(v)) || {};
                            return p.wedding = JSON.parse(JSON.stringify(d)), p.weddingDatePreferences = p.weddingDatePreferences || {}, u && (p.wedding.weddingDate = u, p.weddingDatePreferences.weddingDate = u), p
                        }
                        return v
                    }
                },
                Us = function(n) {
                    var e, t = n.sessionToken,
                        a = n.pin,
                        c = (0, o.useRouter)().query,
                        d = "undefined" === typeof c.slug || Array.isArray(c.slug) ? "" : c.slug,
                        s = "undefined" === typeof c.themeId || Array.isArray(c.themeId) ? null : c.themeId,
                        f = (0, l.useMemo)((function() {
                            var n = {
                                slug: d
                            };
                            return t && (n.sessionToken = t), n
                        }), [d, t]),
                        m = function(n) {
                            var e = x({}, K, n);
                            return p.a(On, e)
                        }({
                            variables: {
                                pin: a || null,
                                slug: d,
                                themeId: s
                            },
                            context: f
                        }).data,
                        v = Bs("true" === c.useThemeCouple, m, c.themeOverride),
                        h = (0, l.useMemo)((function() {
                            var n, e = {},
                                t = null === v || void 0 === v || null === (n = v.weddingWebsiteResult) || void 0 === n ? void 0 : n.theme;
                            if ("undefined" !== typeof t && null !== t) {
                                var r = t.themeStyles;
                                Array.isArray(r) && "undefined" !== typeof r[0] && (e = r[0].styles)
                            }
                            return e
                        }), [null === v || void 0 === v || null === (e = v.weddingWebsiteResult) || void 0 === e ? void 0 : e.theme]);
                    return "undefined" !== typeof v && Wn(v.weddingWebsiteResult) ? (0, r.jsx)(i.b, {
                        theme: h,
                        children: (0, r.jsx)(re, {})
                    }) : "undefined" !== typeof v && kn(v.weddingWebsiteResult) ? (0, r.jsx)(se, {
                        data: v,
                        children: (0, r.jsx)(Ts, {})
                    }) : (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsxs)(u(), {
                            children: [(0, r.jsx)("meta", {
                                name: "googlebot",
                                content: "noindex,nofollow"
                            }), (0, r.jsx)("meta", {
                                name: "robots",
                                content: "noindex,nofollow"
                            })]
                        }), (0, r.jsx)("div", {
                            children: "Oops! Our system is having trouble right now. Please try again in a few minutes."
                        })]
                    })
                };
            Us.getInitialProps = function(n) {
                var e, t = new c.Z;
                return {
                    wwsAPIVersion: ((null === n || void 0 === n || null === (e = n.req) || void 0 === e ? void 0 : e.headers["x-wws-api-version"]) || "").toString(),
                    sessionToken: t.get("xo-session-token"),
                    pin: t.get("wws-pin")
                }
            };
            var Hs = Us
        }
    },
    function(n) {
        n.O(0, [567, 789, 774, 888, 179], (function() {
            return e = 4887, n(n.s = e);
            var e
        }));
        var e = n.O();
        _N_E = e
    }
]);