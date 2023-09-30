exports.id = 262;
exports.ids = [262];
exports.modules = {

/***/ 2948:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 2934));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 7977, 23))

/***/ }),

/***/ 2934:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Navbar)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/@fortawesome/free-solid-svg-icons/index.mjs
var free_solid_svg_icons = __webpack_require__(7877);
// EXTERNAL MODULE: ./node_modules/@fortawesome/react-fontawesome/index.js
var react_fontawesome = __webpack_require__(8195);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1621);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./app/components/SearchComponent.scss
var SearchComponent = __webpack_require__(3575);
// EXTERNAL MODULE: ./app/store/APIRequest.ts
var APIRequest = __webpack_require__(3566);
;// CONCATENATED MODULE: ./app/components/SearchComponent.tsx







function SearchComponent_SearchComponent(props) {
    const [searchSuggestions, setSearchSuggestions] = (0,react_.useState)([]);
    const searchInputRef = (0,react_.useRef)(null);
    const onSearchChange = ()=>{
        console.log(searchInputRef.current?.value);
        (async (q)=>{
            const articles = await (0,APIRequest/* searchArticles */.a5)(q);
            console.log(articles);
            setSearchSuggestions(articles);
        })(searchInputRef.current?.value || "");
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: `searchBar ${props.extraClass || ""}`,
        children: /*#__PURE__*/ jsx_runtime_.jsx("form", {
            autoComplete: "off",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "autocomplete",
                style: {
                    width: "300px"
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "bar",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                id: "myInput",
                                type: "text",
                                name: "search",
                                placeholder: "Search...",
                                ref: searchInputRef,
                                onChange: onSearchChange
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/",
                                className: "icon",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome.FontAwesomeIcon, {
                                    icon: free_solid_svg_icons/* faSearch */.wn1
                                })
                            })
                        ]
                    }),
                    searchSuggestions && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "autocomplete-list",
                        children: searchSuggestions.map((s)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "suggestion",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: `/blogs/${s.title.toLowerCase().replaceAll(" ", "-")}`,
                                    children: s.title
                                })
                            }))
                    })
                ]
            })
        })
    });
}

;// CONCATENATED MODULE: ./app/store/Pages.ts
function getAllPages() {
    return [
        {
            name: "Places to explore",
            uri: "/blogs/places-to-explore"
        },
        {
            name: "Packages",
            uri: "/packages"
        },
        {
            name: "About Indonesia",
            uri: "/about-indonesia"
        },
        {
            name: "Things to do in Indonesia",
            uri: "/blogs/things-to-do-in-indonesia"
        },
        {
            name: "History of Sulawesi Island",
            uri: "/blogs/history-of-sulawesi-island"
        },
        {
            name: "Contact Us",
            uri: "/contact-us"
        },
        {
            name: "Partnerships",
            uri: "/partnerships"
        }
    ];
}

;// CONCATENATED MODULE: ./app/navbar.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 






function Navbar({}) {
    const [menuOpen, setMenuOpen] = (0,react_.useState)("closed");
    const [loaded, setloaded] = (0,react_.useState)(false);
    (0,react_.useEffect)(()=>setloaded(true));
    const navs = getAllPages();
    const toggleMenu = ()=>{
        if (menuOpen == "closed") {
            setMenuOpen("opening");
            setTimeout(()=>{
                setMenuOpen("open");
            }, 100);
        } else if (isOpen()) {
            setMenuOpen("closed");
        }
    };
    const isOpen = ()=>{
        return menuOpen == "open";
    };
    const isOpening = ()=>{
        return menuOpen == "opening";
    };
    // window = window;
    const onOpenMenu = ()=>{
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                window.outerWidth <= 530 ? /*#__PURE__*/ jsx_runtime_.jsx(SearchComponent_SearchComponent, {
                    extraClass: "search-open"
                }) : null,
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "navigation",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "navs",
                        children: navs.map((nav)=>/*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "nav",
                                href: nav.uri,
                                children: nav.name
                            }, nav.uri))
                    })
                })
            ]
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "nav-menu",
        style: {
            width: !isOpening() && !isOpen() ? "0" : window.outerWidth > 600 ? "35rem" : "100vw"
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "Navbar",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: "/images/logo-2.jpg",
                            alt: "logo",
                            className: "logo"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "menu-icon",
                        onClick: toggleMenu,
                        children: isOpen() ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            id: "open",
                            className: "menu-bar-icon",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome.FontAwesomeIcon, {
                                icon: free_solid_svg_icons/* faAngleLeft */.EyR
                            })
                        }) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            id: "closed",
                            className: "menu-bar-icon",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome.FontAwesomeIcon, {
                                icon: free_solid_svg_icons/* faBars */.xiG
                            })
                        })
                    }),
                    loaded && window.outerWidth > 530 ? /*#__PURE__*/ jsx_runtime_.jsx(SearchComponent_SearchComponent, {
                        extraClass: "search-closed"
                    }) : null
                ]
            }),
            isOpen() ? onOpenMenu() : null
        ]
    });
}


/***/ }),

/***/ 3566:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a5: () => (/* binding */ searchArticles),
/* harmony export */   fd: () => (/* binding */ getArticleByTitle),
/* harmony export */   "if": () => (/* binding */ getArticleOfType),
/* harmony export */   zC: () => (/* binding */ getAllArticles)
/* harmony export */ });
// TEMPORARY
let articles = [
    {
        id: 0,
        imgUrls: [
            "images/toraja-cover.jpg"
        ],
        title: "Toraja1",
        sections: [
            {
                title: "lorem impsum",
                type: "TXT",
                text: "lorem impsum"
            }
        ],
        datePublished: "12-07-2023",
        category: "popular-destinations"
    },
    {
        id: 1,
        imgUrls: [
            "images/toraja-cover.jpg"
        ],
        title: "Toraja2",
        sections: [
            {
                title: "lorem impsum",
                type: "TXT",
                text: "lorem impsum"
            }
        ],
        datePublished: "12-07-2023",
        category: "popular-destinations"
    },
    {
        id: 2,
        imgUrls: [
            "images/toraja-cover.jpg"
        ],
        title: "Toraja3",
        sections: [
            {
                title: "lorem impsum",
                type: "TXT",
                text: "lorem impsum"
            }
        ],
        datePublished: "12-07-2023",
        category: "popular-destinations"
    },
    {
        id: 3,
        imgUrls: [
            "images/toraja-cover.jpg"
        ],
        title: "Toraja4",
        sections: [
            {
                title: "lorem impsum",
                type: "TXT",
                text: "lorem impsum"
            }
        ],
        datePublished: "12-07-2023",
        category: "popular-destinations"
    },
    {
        id: 4,
        imgUrls: [
            "images/toraja-cover.jpg"
        ],
        title: "Toraja5",
        sections: [
            {
                title: "lorem impsum",
                type: "TXT",
                text: "lorem impsum"
            }
        ],
        datePublished: "12-07-2023",
        category: "popular-destinations"
    },
    {
        id: 5,
        imgUrls: [
            "images/toraja-cover.jpg"
        ],
        title: "Toraja1",
        sections: [
            {
                title: "lorem impsum",
                type: "TXT",
                text: "lorem impsum"
            }
        ],
        datePublished: "12-07-2023",
        category: "attractions"
    },
    {
        id: 6,
        imgUrls: [
            "images/toraja-cover.jpg"
        ],
        title: "Toraja2",
        sections: [
            {
                title: "lorem impsum",
                type: "TXT",
                text: "lorem impsum"
            }
        ],
        datePublished: "12-07-2023",
        category: "attractions"
    },
    {
        id: 7,
        imgUrls: [
            "images/toraja-cover.jpg"
        ],
        title: "Toraja3",
        sections: [
            {
                title: "lorem impsum",
                type: "TXT",
                text: "lorem impsum"
            }
        ],
        datePublished: "12-07-2023",
        category: "attractions"
    },
    {
        id: 8,
        imgUrls: [
            "images/toraja-cover.jpg"
        ],
        title: "Toraja4",
        sections: [
            {
                title: "lorem impsum",
                type: "TXT",
                text: "lorem impsum"
            }
        ],
        datePublished: "12-07-2023",
        category: "attractions"
    },
    {
        id: 9,
        imgUrls: [
            "images/toraja-cover.jpg"
        ],
        title: "Toraja5",
        sections: [
            {
                title: "lorem impsum",
                type: "TXT",
                text: "lorem impsum"
            }
        ],
        datePublished: "12-07-2023",
        category: "attractions"
    },
    {
        id: 10,
        imgUrls: [
            "images/toraja-cover.jpg"
        ],
        title: "Toraja1",
        sections: [
            {
                title: "lorem impsum",
                type: "TXT",
                text: "lorem impsum"
            }
        ],
        datePublished: "12-07-2023",
        category: "things-to-do"
    },
    {
        id: 11,
        imgUrls: [
            "images/toraja-cover.jpg"
        ],
        title: "Toraja2",
        sections: [
            {
                title: "lorem impsum",
                type: "TXT",
                text: "lorem impsum"
            }
        ],
        datePublished: "12-07-2023",
        category: "things-to-do"
    },
    {
        id: 12,
        imgUrls: [
            "images/toraja-cover.jpg"
        ],
        title: "Toraja3",
        sections: [
            {
                title: "lorem impsum",
                type: "TXT",
                text: "lorem impsum"
            }
        ],
        datePublished: "12-07-2023",
        category: "things-to-do"
    },
    {
        id: 13,
        imgUrls: [
            "images/toraja-cover.jpg"
        ],
        title: "Toraja4",
        sections: [
            {
                title: "lorem impsum",
                type: "TXT",
                text: "lorem impsum"
            }
        ],
        datePublished: "12-07-2023",
        category: "things-to-do"
    },
    {
        id: 14,
        imgUrls: [
            "images/toraja-cover.jpg"
        ],
        title: "Toraja5",
        sections: [
            {
                title: "lorem impsum",
                type: "TXT",
                text: "lorem impsum"
            }
        ],
        datePublished: "12-07-2023",
        category: "things-to-do"
    }
];
async function refreshArticles() {
    console.log("Refreshing articles");
    if (true) {
        const res = await fetch("http://api.torajawonders.com/api/articles" + "/all");
        if (res.ok) {
            articles = await res.json();
        }
    } else {}
}
async function getArticleOfType(type) {
    console.log("j");
    refreshArticles();
    return articles.filter((v)=>type == v.category);
}
async function getArticleByTitle(title) {
    refreshArticles();
    let blog = null;
    articles.forEach((a)=>{
        if (a.title == title) {
            blog = a;
        }
    });
    return blog;
}
async function getAllArticles() {
    await refreshArticles();
    return articles;
}
async function searchArticles(query) {
    await refreshArticles();
    return articles.filter((a)=>{
        let inASection = false;
        a.sections.forEach((s)=>{
            if (s.text?.includes(query) || s.title.includes(query)) {
                inASection = true;
            }
        });
        return a.title.includes(query) || a.category.includes(query) || inASection;
    });
}


/***/ }),

/***/ 9157:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"app/layout.tsx","import":"Inter","arguments":[{"subsets":["latin"]}],"variableName":"inter"}
var layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_ = __webpack_require__(9298);
var layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_default = /*#__PURE__*/__webpack_require__.n(layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_);
// EXTERNAL MODULE: ./app/globals.scss
var globals = __webpack_require__(3096);
// EXTERNAL MODULE: ./app/globals.css
var app_globals = __webpack_require__(2817);
// EXTERNAL MODULE: ./node_modules/next/dist/client/components/noop-head.js
var noop_head = __webpack_require__(3873);
var noop_head_default = /*#__PURE__*/__webpack_require__.n(noop_head);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(1313);
;// CONCATENATED MODULE: ./app/navbar.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`/Users/cs/coding/Toraja Wonders/frontend/app/navbar.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const navbar = (__default__);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(4834);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./app/footer.scss
var footer = __webpack_require__(3046);
;// CONCATENATED MODULE: ./app/store/Pages.ts
function getAllPages() {
    return [
        {
            name: "Places to explore",
            uri: "/blogs/places-to-explore"
        },
        {
            name: "Packages",
            uri: "/packages"
        },
        {
            name: "About Indonesia",
            uri: "/about-indonesia"
        },
        {
            name: "Things to do in Indonesia",
            uri: "/blogs/things-to-do-in-indonesia"
        },
        {
            name: "History of Sulawesi Island",
            uri: "/blogs/history-of-sulawesi-island"
        },
        {
            name: "Contact Us",
            uri: "/contact-us"
        },
        {
            name: "Partnerships",
            uri: "/partnerships"
        }
    ];
}

;// CONCATENATED MODULE: ./app/footer.tsx




function Footer() {
    const navs = getAllPages();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        id: "Footer",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                src: "/images/logo-2.jpg",
                alt: "logo"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                id: "title",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        children: "Toraja Wonders"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        children: "Unlock The Treasures Together"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "Email: "
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "Phone: +62 821-9626-9074"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "Whatsapp: +62 821-9626-9074"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                id: "navigation",
                children: navs.map((nav)=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        className: "nav",
                        href: nav.uri,
                        children: nav.name
                    }, nav.uri))
            })
        ]
    });
}

;// CONCATENATED MODULE: ./app/layout.tsx
// "use client";
//prettier-ignore







const metadata = {
    title: "Toraja Wonders - Explore Indonesia",
    description: "Explore the Sulawesi islands in Indonesia and book your next holiday."
};
function RootLayout({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("body", {
            className: (layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_default()).className,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((noop_head_default()), {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("link", {
                            rel: "icon",
                            href: "favicon.ico"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            name: "viewport",
                            content: "width=device-width, initial-scale=1.0"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(navbar, {}),
                children,
                /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
            ]
        })
    });
}


/***/ }),

/***/ 3174:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3180);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"any"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 3575:
/***/ (() => {



/***/ }),

/***/ 3046:
/***/ (() => {



/***/ }),

/***/ 2817:
/***/ (() => {



/***/ }),

/***/ 3096:
/***/ (() => {



/***/ })

};
;