import React from 'react';
import vis from 'vis';
import { setTimeout } from 'timers';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var ToggleBarItemsContext = React.createContext({}), DropdownContext = React.createContext({}), TabLinksContext = React.createContext({}), TabsContext = React.createContext({}), DisplayStatusMessageContext = React.createContext({}), LoaderContext = React.createContext({});

var Dropdown = React.forwardRef(function (props, ref) {
    return (React.createElement(DropdownContext.Consumer, null, function (val) { return (React.createElement("section", { className: 'dropdown', style: { height: val.state.dropdownCurHeight, borderBottomWidth: val.state.dropdownIsCollapsed ? 0 : 2 }, ref: ref }, props.children)); }));
});

// interface Props
// {
//   refIsLoading?: boolean;
//   attributes?: 
//   {
//     size: number;
//     type: string;
//     color?: string;
//     rider?: string;
//     wrapperHeight?: number;
//   };
// }
//Loader returns 'minor loader' (without wrapper) or 'major loader' (with wrapper) depending on context 
function Loader() {
    return (React.createElement(LoaderContext.Consumer, null, function (_a) {
        var refIsLoading = _a.refIsLoading, attributes = _a.attributes;
        var circlesStyle = {
            height: attributes.size,
            width: attributes.size,
            background: attributes.color || '#333',
            display: 'inline-block',
            borderRadius: '50%',
            boxShadow: '0.5px 0.5px 1px rgba(0, 0, 0, 0.2)',
            marginRight: 5,
        }, loaderWrapperStyle = {
            visibility: refIsLoading ? 'visible' : 'hidden',
            opacity: refIsLoading ? 1 : 0,
            position: 'absolute',
            width: '100%',
            background: 'rgba(50, 50, 50, 0)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            bottom: 0,
            height: attributes.wrapperHeight,
            flexDirection: 'column',
            color: attributes.color,
            textShadow: '0.5px 0.5px 1px rgba(0, 0, 0, 0.2)'
        }, loaderStyle = {
            display: 'block',
            textAlign: 'center',
            position: attributes.type === 'minor' ? 'absolute' : 'static',
            visibility: refIsLoading ? 'visible' : 'hidden',
            opacity: refIsLoading ? 1 : 0
        };
        var minorLoader = React.createElement("span", { className: 'loader', style: loaderStyle },
            React.createElement("span", { className: 'loader-circle', style: circlesStyle }),
            React.createElement("span", { className: 'loader-circle', style: circlesStyle }),
            React.createElement("span", { className: 'loader-circle', style: circlesStyle })), majorLoader = React.createElement("div", { className: 'loader-wrapper', style: loaderWrapperStyle },
            minorLoader,
            React.createElement("span", { className: 'loader-rider', style: { fontSize: 13, marginTop: 10 } }, attributes.rider));
        //loader animation style in CSS (index.css) file
        return attributes.type === 'minor' ? minorLoader : majorLoader;
    }));
}

function Get_HardCoded_Refs() {
    return ({
        "data": {
            "authors": [
                "J. D. Salinger",
                "Salinger"
            ],
            "title": "The Catcher in the Eye"
        },
        "id": "@powerofgod/17t8kcjuw",
        "refs": [
            {
                "data": {
                    "authors": [
                        "Dan Brown"
                    ],
                    "title": "The Da Vinci Code"
                },
                "id": "@powerofgod/myin9aksq",
                "ref_type": "required",
                "refs": [], "url": "http://www.google.com"
            },
            {
                "data": {
                    "authors": [
                        "Jane Austen"
                    ],
                    "title": "Pride and Prejudice"
                },
                "id": "@powerofgod/r9t9rc4ip",
                "ref_type": "required",
                "refs": [
                    {
                        "data": {
                            "authors": [
                                "Dan Brown"
                            ],
                            "title": "The Da Vinci Code"
                        },
                        "id": "myin9aksq",
                        "ref_type": "required",
                        "refs": [], "url": "http://www.google.com"
                    }
                ]
            },
            {
                "data": {
                    "authors": [
                        "Yann Martel"
                    ],
                    "title": "Life of Pi"
                },
                "id": "@johny/d2tm8cyi99",
                "ref_type": "recommended",
                "refs": [
                    {
                        "data": {
                            "authors": [
                                "Dan Brown"
                            ],
                            "title": "The Da Vinci Code"
                        },
                        "id": "myin9aksq",
                        "ref_type": "recommended",
                        "refs": [], "url": "http://www.google.com"
                    },
                    {
                        "data": {
                            "authors": [
                                "Jane Austen"
                            ],
                            "title": "Pride and Prejudice"
                        },
                        "id": "r9t9rc4ip",
                        "ref_type": "required",
                        "refs": [], "url": "http://www.google.com"
                    },
                    {
                        "data": {
                            "authors": [
                                "J. R. R. Tolkien"
                            ],
                            "title": "The Hobbit"
                        },
                        "id": "@johny/35t8qc8i5",
                        "ref_type": "required",
                        "refs": [
                            {
                                "data": {
                                    "authors": [
                                        "Dan Brown"
                                    ],
                                    "title": "The Da Vinci Code"
                                },
                                "id": "myin9aksq",
                                "ref_type": "recommended",
                                "refs": [], "url": "http://www.google.com"
                            },
                            {
                                "data": {
                                    "authors": [
                                        "Jane Austen"
                                    ],
                                    "title": "Pride and Prejudice"
                                },
                                "id": "r9t9rc4ip",
                                "ref_type": "required",
                                "refs": [], "url": "http://www.google.com"
                            }
                        ]
                    },
                    {
                        "data": {
                            "authors": [
                                "J. R. R. Tolkien"
                            ],
                            "title": "The Two Towers"
                        },
                        "id": "@johny/jjtn4cdirv",
                        "ref_type": "recommended",
                        "refs": [
                            {
                                "data": {
                                    "authors": [
                                        "Dan Brown"
                                    ],
                                    "title": "The Da Vinci Code"
                                },
                                "id": "myin9aksq",
                                "ref_type": "required",
                                "refs": [], "url": "http://www.google.com"
                            },
                            {
                                "data": {
                                    "authors": [
                                        "Jane Austen"
                                    ],
                                    "title": "Pride and Prejudice"
                                },
                                "id": "r9t9rc4ip",
                                "ref_type": "required",
                                "refs": [], "url": "http://www.google.com"
                            },
                            {
                                "data": {
                                    "authors": [
                                        "J. R. R. Tolkien"
                                    ],
                                    "title": "The Hobbit"
                                },
                                "id": "35t8qc8i5",
                                "ref_type": "recommended",
                                "refs": [], "url": "http://www.google.com"
                            }
                        ]
                    }
                ]
            },
            {
                "data": {
                    "authors": [
                        "Jane Austen"
                    ],
                    "title": "Pride and Prejudice"
                },
                "id": "@clarah/9yt4lcli2j",
                "ref_type": "recommended",
                "refs": [
                    {
                        "data": {
                            "authors": [
                                "Dan Brown"
                            ],
                            "title": "The Da Vinci Code"
                        },
                        "id": "myin9aksq",
                        "ref_type": "recommended",
                        "refs": [], "url": "http://www.google.com"
                    },
                    {
                        "data": {
                            "authors": [
                                "Jane Austen"
                            ],
                            "title": "Pride and Prejudice"
                        },
                        "id": "r9t9rc4ip",
                        "ref_type": "required",
                        "refs": [], "url": "http://www.google.com"
                    },
                    {
                        "data": {
                            "authors": [
                                "J. R. R. Tolkien"
                            ],
                            "title": "The Hobbit"
                        },
                        "id": "@johny/35t8qc8i5",
                        "ref_type": "required",
                        "refs": [
                            {
                                "data": {
                                    "authors": [
                                        "Dan Brown"
                                    ],
                                    "title": "The Da Vinci Code"
                                },
                                "id": "myin9aksq",
                                "ref_type": "recommended",
                                "refs": [], "url": "http://www.google.com"
                            },
                            {
                                "data": {
                                    "authors": [
                                        "Jane Austen"
                                    ],
                                    "title": "Pride and Prejudice"
                                },
                                "id": "r9t9rc4ip",
                                "ref_type": "required",
                                "refs": [], "url": "http://www.google.com"
                            }
                        ]
                    },
                    {
                        "data": {
                            "authors": [
                                "J. R. R. Tolkien"
                            ],
                            "title": "The Two Towers"
                        },
                        "id": "@johny/jjtn4cdirv",
                        "ref_type": "recommended",
                        "refs": [
                            {
                                "data": {
                                    "authors": [
                                        "Dan Brown"
                                    ],
                                    "title": "The Da Vinci Code"
                                },
                                "id": "myin9aksq",
                                "ref_type": "required",
                                "refs": [], "url": "http://www.google.com"
                            },
                            {
                                "data": {
                                    "authors": [
                                        "Jane Austen"
                                    ],
                                    "title": "Pride and Prejudice"
                                },
                                "id": "r9t9rc4ip",
                                "ref_type": "required",
                                "refs": [], "url": "http://www.google.com"
                            },
                            {
                                "data": {
                                    "authors": [
                                        "J. R. R. Tolkien"
                                    ],
                                    "title": "The Hobbit"
                                },
                                "id": "35t8qc8i5",
                                "ref_type": "recommended",
                                "refs": [], "url": "http://www.google.com"
                            }
                        ]
                    },
                    {
                        "data": {
                            "authors": [
                                "Yann Martel"
                            ],
                            "title": "Life of Pi"
                        },
                        "id": "d2tm8cyi99",
                        "ref_type": "recommended",
                        "refs": [], "url": "http://www.google.com"
                    },
                    {
                        "data": {
                            "authors": [
                                "J. D. Salinger"
                            ],
                            "title": "The Catcher in the Eye"
                        },
                        "id": "qqt2kcrip2",
                        "ref_type": "required",
                        "refs": [
                            {
                                "data": {
                                    "authors": [
                                        "Dan Brown"
                                    ],
                                    "title": "The Da Vinci Code"
                                },
                                "id": "myin9aksq",
                                "ref_type": "required",
                                "refs": [], "url": "http://www.google.com"
                            },
                            {
                                "data": {
                                    "authors": [
                                        "Jane Austen"
                                    ],
                                    "title": "Pride and Prejudice"
                                },
                                "id": "r9t9rc4ip",
                                "ref_type": "required",
                                "refs": [], "url": "http://www.google.com"
                            },
                            {
                                "data": {
                                    "authors": [
                                        "J. R. R. Tolkien"
                                    ],
                                    "title": "The Hobbit"
                                },
                                "id": "35t8qc8i5",
                                "ref_type": "recommended",
                                "refs": [], "url": "http://www.google.com"
                            },
                            {
                                "data": {
                                    "authors": [
                                        "J. R. R. Tolkien"
                                    ],
                                    "title": "The Two Towers"
                                },
                                "id": "jjtn4cdirv",
                                "ref_type": "required",
                                "refs": [], "url": "http://www.google.com"
                            },
                            {
                                "data": {
                                    "authors": [
                                        "Yann Martel"
                                    ],
                                    "title": "Life of Pi"
                                },
                                "id": "d2tm8cyi99",
                                "ref_type": "recommended",
                                "refs": [], "url": "http://www.google.com"
                            }
                        ]
                    }
                ]
            },
            {
                "data": {
                    "authors": [
                        "Charles Dickens"
                    ],
                    "title": "A Christmas Carol"
                },
                "id": "@self/kwtd8crun",
                "ref_type": "recommended",
                "refs": [
                    {
                        "data": {
                            "authors": [
                                "Dan Brown"
                            ],
                            "title": "The Da Vinci Code"
                        },
                        "id": "myin9aksq",
                        "ref_type": "required",
                        "refs": [], "url": "http://www.google.com"
                    },
                    {
                        "data": {
                            "authors": [
                                "Jane Austen"
                            ],
                            "title": "Pride and Prejudice"
                        },
                        "id": "r9t9rc4ip",
                        "ref_type": "required",
                        "refs": [], "url": "http://www.google.com"
                    },
                    {
                        "data": {
                            "authors": [
                                "J. R. R. Tolkien"
                            ],
                            "title": "The Two Towers"
                        },
                        "id": "@johny/jjtn4cdirv",
                        "ref_type": "recommended",
                        "refs": [
                            {
                                "data": {
                                    "authors": [
                                        "Dan Brown"
                                    ],
                                    "title": "The Da Vinci Code"
                                },
                                "id": "myin9aksq",
                                "ref_type": "required",
                                "refs": [], "url": "http://www.google.com"
                            },
                            {
                                "data": {
                                    "authors": [
                                        "Jane Austen"
                                    ],
                                    "title": "Pride and Prejudice"
                                },
                                "id": "r9t9rc4ip",
                                "ref_type": "required",
                                "refs": [], "url": "http://www.google.com"
                            },
                            {
                                "data": {
                                    "authors": [
                                        "J. R. R. Tolkien"
                                    ],
                                    "title": "The Hobbit"
                                },
                                "id": "35t8qc8i5",
                                "ref_type": "recommended",
                                "refs": [], "url": "http://www.google.com"
                            }
                        ]
                    },
                    {
                        "data": {
                            "authors": [
                                "J. D. Salinger"
                            ],
                            "title": "The Catcher in the Eye"
                        },
                        "id": "qqt2kcrip2",
                        "ref_type": "recommended",
                        "refs": [
                            {
                                "data": {
                                    "authors": [
                                        "Dan Brown"
                                    ],
                                    "title": "The Da Vinci Code"
                                },
                                "id": "myin9aksq",
                                "ref_type": "required",
                                "refs": [], "url": "http://www.google.com"
                            },
                            {
                                "data": {
                                    "authors": [
                                        "Jane Austen"
                                    ],
                                    "title": "Pride and Prejudice"
                                },
                                "id": "r9t9rc4ip",
                                "ref_type": "required",
                                "refs": [], "url": "http://www.google.com"
                            },
                            {
                                "data": {
                                    "authors": [
                                        "J. R. R. Tolkien"
                                    ],
                                    "title": "The Hobbit"
                                },
                                "id": "35t8qc8i5",
                                "ref_type": "recommended",
                                "refs": [], "url": "http://www.google.com"
                            },
                            {
                                "data": {
                                    "authors": [
                                        "J. R. R. Tolkien"
                                    ],
                                    "title": "The Two Towers"
                                },
                                "id": "jjtn4cdirv",
                                "ref_type": "required",
                                "refs": [], "url": "http://www.google.com"
                            },
                            {
                                "data": {
                                    "authors": [
                                        "Yann Martel"
                                    ],
                                    "title": "Life of Pi"
                                },
                                "id": "d2tm8cyi99",
                                "ref_type": "recommended",
                                "refs": [], "url": "http://www.google.com"
                            }
                        ]
                    },
                    {
                        "data": {
                            "authors": [
                                "George Orwell"
                            ],
                            "title": "1984"
                        },
                        "id": "@clarah/yltblczidp",
                        "ref_type": "required",
                        "refs": [
                            {
                                "data": {
                                    "authors": [
                                        "Dan Brown"
                                    ],
                                    "title": "The Da Vinci Code"
                                },
                                "id": "myin9aksq",
                                "ref_type": "recommended",
                                "refs": [], "url": "http://www.google.com"
                            },
                            {
                                "data": {
                                    "authors": [
                                        "Jane Austen"
                                    ],
                                    "title": "Pride and Prejudice"
                                },
                                "id": "r9t9rc4ip",
                                "ref_type": "required",
                                "refs": [], "url": "http://www.google.com"
                            },
                            {
                                "data": {
                                    "authors": [
                                        "Yann Martel"
                                    ],
                                    "title": "Life of Pi"
                                },
                                "id": "d2tm8cyi99",
                                "ref_type": "recommended",
                                "refs": [], "url": "http://www.google.com"
                            },
                            {
                                "data": {
                                    "authors": [
                                        "Jane Austen"
                                    ],
                                    "title": "Pride and Prejudice"
                                },
                                "id": "9yt4lcli2j",
                                "ref_type": "recommended",
                                "refs": [], "url": "http://www.google.com"
                            },
                            {
                                "data": {
                                    "authors": [
                                        "J. R. R. Tolkien"
                                    ],
                                    "title": "The Hobbit"
                                },
                                "id": "4dty1cdij7",
                                "ref_type": "required",
                                "refs": [], "url": "http://www.google.com"
                            },
                            {
                                "data": {
                                    "authors": [
                                        "J. R. R. Tolkien"
                                    ],
                                    "title": "The Hobbit"
                                },
                                "id": "@clarah/bmt1jc2iz5",
                                "ref_type": "required",
                                "refs": [
                                    {
                                        "data": {
                                            "authors": [
                                                "Jane Austen"
                                            ],
                                            "title": "Pride and Prejudice"
                                        },
                                        "id": "r9t9rc4ip",
                                        "ref_type": "required",
                                        "refs": [], "url": "http://www.google.com"
                                    },
                                    {
                                        "data": {
                                            "authors": [
                                                "Jane Austen"
                                            ],
                                            "title": "Pride and Prejudice"
                                        },
                                        "id": "9yt4lcli2j",
                                        "ref_type": "recommended",
                                        "refs": [], "url": "http://www.google.com"
                                    },
                                    {
                                        "data": {
                                            "authors": [
                                                "J. R. R. Tolkien"
                                            ],
                                            "title": "The Hobbit"
                                        },
                                        "id": "4dty1cdij7",
                                        "ref_type": "required",
                                        "refs": [], "url": "http://www.google.com"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "data": {
                    "authors": [
                        "Charles Dickens"
                    ],
                    "title": "A Christmas Carol"
                },
                "id": "@self/74tnyc4u5",
                "ref_type": "recommended",
                "refs": [
                    {
                        "data": {
                            "authors": [
                                "Jane Austen"
                            ],
                            "title": "Pride and Prejudice"
                        },
                        "id": "r9t9rc4ip",
                        "ref_type": "required",
                        "refs": [], "url": "http://www.google.com"
                    },
                    {
                        "data": {
                            "authors": [
                                "Yann Martel"
                            ],
                            "title": "Life of Pi"
                        },
                        "id": "d2tm8cyi99",
                        "ref_type": "recommended",
                        "refs": [], "url": "http://www.google.com"
                    },
                    {
                        "data": {
                            "authors": [
                                "J. D. Salinger"
                            ],
                            "title": "The Catcher in the Eye"
                        },
                        "id": "qqt2kcrip2",
                        "ref_type": "required",
                        "refs": [
                            {
                                "data": {
                                    "authors": [
                                        "Dan Brown"
                                    ],
                                    "title": "The Da Vinci Code"
                                },
                                "id": "myin9aksq",
                                "ref_type": "required",
                                "refs": [], "url": "http://www.google.com"
                            },
                            {
                                "data": {
                                    "authors": [
                                        "Jane Austen"
                                    ],
                                    "title": "Pride and Prejudice"
                                },
                                "id": "r9t9rc4ip",
                                "ref_type": "required",
                                "refs": [], "url": "http://www.google.com"
                            },
                            {
                                "data": {
                                    "authors": [
                                        "J. R. R. Tolkien"
                                    ],
                                    "title": "The Hobbit"
                                },
                                "id": "35t8qc8i5",
                                "ref_type": "recommended",
                                "refs": [], "url": "http://www.google.com"
                            },
                            {
                                "data": {
                                    "authors": [
                                        "J. R. R. Tolkien"
                                    ],
                                    "title": "The Two Towers"
                                },
                                "id": "jjtn4cdirv",
                                "ref_type": "required",
                                "refs": [], "url": "http://www.google.com"
                            },
                            {
                                "data": {
                                    "authors": [
                                        "Yann Martel"
                                    ],
                                    "title": "Life of Pi"
                                },
                                "id": "d2tm8cyi99",
                                "ref_type": "recommended",
                                "refs": [], "url": "http://www.google.com"
                            }
                        ]
                    },
                    {
                        "data": {
                            "authors": [
                                "Jane Austen"
                            ],
                            "title": "Pride and Prejudice"
                        },
                        "id": "9yt4lcli2j",
                        "ref_type": "recommended",
                        "refs": [], "url": "http://www.google.com"
                    },
                    {
                        "data": {
                            "authors": [
                                "J. R. R. Tolkien"
                            ],
                            "title": "The Hobbit"
                        },
                        "id": "@clarah/4dty1cdij7",
                        "ref_type": "recommended",
                        "refs": [
                            {
                                "data": {
                                    "authors": [
                                        "Dan Brown"
                                    ],
                                    "title": "The Da Vinci Code"
                                },
                                "id": "myin9aksq",
                                "ref_type": "required",
                                "refs": [], "url": "http://www.google.com"
                            },
                            {
                                "data": {
                                    "authors": [
                                        "Jane Austen"
                                    ],
                                    "title": "Pride and Prejudice"
                                },
                                "id": "r9t9rc4ip",
                                "ref_type": "required",
                                "refs": [], "url": "http://www.google.com"
                            },
                            {
                                "data": {
                                    "authors": [
                                        "J. R. R. Tolkien"
                                    ],
                                    "title": "The Hobbit"
                                },
                                "id": "35t8qc8i5",
                                "ref_type": "recommended",
                                "refs": [], "url": "http://www.google.com"
                            },
                            {
                                "data": {
                                    "authors": [
                                        "Yann Martel"
                                    ],
                                    "title": "Life of Pi"
                                },
                                "id": "d2tm8cyi99",
                                "ref_type": "recommended",
                                "refs": [], "url": "http://www.google.com"
                            },
                            {
                                "data": {
                                    "authors": [
                                        "J. D. Salinger"
                                    ],
                                    "title": "The Catcher in the Eye"
                                },
                                "id": "qqt2kcrip2",
                                "ref_type": "required",
                                "refs": [], "url": "http://www.google.com"
                            },
                            {
                                "data": {
                                    "authors": [
                                        "Jane Austen"
                                    ],
                                    "title": "Pride and Prejudice"
                                },
                                "id": "9yt4lcli2j",
                                "ref_type": "recommended",
                                "refs": [], "url": "http://www.google.com"
                            }
                        ]
                    },
                    {
                        "data": {
                            "authors": [
                                "George Orwell"
                            ],
                            "title": "1984"
                        },
                        "id": "@clarah/yltblczidp",
                        "ref_type": "recommended",
                        "refs": [
                            {
                                "data": {
                                    "authors": [
                                        "Dan Brown"
                                    ],
                                    "title": "The Da Vinci Code"
                                },
                                "id": "myin9aksq",
                                "ref_type": "recommended",
                                "refs": [], "url": "http://www.google.com"
                            },
                            {
                                "data": {
                                    "authors": [
                                        "Jane Austen"
                                    ],
                                    "title": "Pride and Prejudice"
                                },
                                "id": "r9t9rc4ip",
                                "ref_type": "required",
                                "refs": [], "url": "http://www.google.com"
                            },
                            {
                                "data": {
                                    "authors": [
                                        "Yann Martel"
                                    ],
                                    "title": "Life of Pi"
                                },
                                "id": "d2tm8cyi99",
                                "ref_type": "recommended",
                                "refs": [], "url": "http://www.google.com"
                            },
                            {
                                "data": {
                                    "authors": [
                                        "Jane Austen"
                                    ],
                                    "title": "Pride and Prejudice"
                                },
                                "id": "9yt4lcli2j",
                                "ref_type": "recommended",
                                "refs": [], "url": "http://www.google.com"
                            },
                            {
                                "data": {
                                    "authors": [
                                        "J. R. R. Tolkien"
                                    ],
                                    "title": "The Hobbit"
                                },
                                "id": "4dty1cdij7",
                                "ref_type": "required",
                                "refs": [], "url": "http://www.google.com"
                            },
                            {
                                "data": {
                                    "authors": [
                                        "J. R. R. Tolkien"
                                    ],
                                    "title": "The Hobbit"
                                },
                                "id": "@clarah/bmt1jc2iz5",
                                "ref_type": "required",
                                "refs": [
                                    {
                                        "data": {
                                            "authors": [
                                                "Jane Austen"
                                            ],
                                            "title": "Pride and Prejudice"
                                        },
                                        "id": "r9t9rc4ip",
                                        "ref_type": "required",
                                        "refs": [], "url": "http://www.google.com"
                                    },
                                    {
                                        "data": {
                                            "authors": [
                                                "Jane Austen"
                                            ],
                                            "title": "Pride and Prejudice"
                                        },
                                        "id": "9yt4lcli2j",
                                        "ref_type": "recommended",
                                        "refs": [], "url": "http://www.google.com"
                                    },
                                    {
                                        "data": {
                                            "authors": [
                                                "J. R. R. Tolkien"
                                            ],
                                            "title": "The Hobbit"
                                        },
                                        "id": "4dty1cdij7",
                                        "ref_type": "required",
                                        "refs": [], "url": "http://www.google.com"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "data": {
                            "authors": [
                                "Charles Dickens"
                            ],
                            "title": "A Christmas Carol"
                        },
                        "id": "kwtd8crun",
                        "ref_type": "required",
                        "refs": [], "url": "http://www.google.com"
                    }
                ]
            }
        ]
    });
}
// "required:@alpha/35t8qc8i5",
// "required:@alpha/jjtn4cdirv",
// "recommended:@alpha/17t8kc5ig",
// "recommended:@alpha/qqt2kcrip2",
// "recommended:@alpha/n8padhdu4"

var aliceblue = {
	name: "aliceblue",
	rgbVal: [
		240,
		248,
		255
	]
};
var antiquewhite = {
	name: "antiquewhite",
	rgbVal: [
		250,
		235,
		215
	]
};
var aqua = {
	name: "aqua",
	rgbVal: [
		0,
		255,
		255
	]
};
var aquamarine = {
	name: "aquamarine",
	rgbVal: [
		127,
		255,
		212
	]
};
var azure = {
	name: "azure",
	rgbVal: [
		240,
		255,
		255
	]
};
var beige = {
	name: "beige",
	rgbVal: [
		245,
		245,
		220
	]
};
var bisque = {
	name: "bisque",
	rgbVal: [
		255,
		228,
		196
	]
};
var black = {
	name: "black",
	rgbVal: [
		0,
		0,
		0
	]
};
var blanchedalmond = {
	name: "blanchedalmond",
	rgbVal: [
		255,
		235,
		205
	]
};
var blue = {
	name: "blue",
	rgbVal: [
		0,
		0,
		255
	]
};
var blueviolet = {
	name: "blueviolet",
	rgbVal: [
		138,
		43,
		226
	]
};
var brown = {
	name: "brown",
	rgbVal: [
		165,
		42,
		42
	]
};
var burlywood = {
	name: "burlywood",
	rgbVal: [
		222,
		184,
		135
	]
};
var cadetblue = {
	name: "cadetblue",
	rgbVal: [
		95,
		158,
		160
	]
};
var chartreuse = {
	name: "chartreuse",
	rgbVal: [
		127,
		255,
		0
	]
};
var chocolate = {
	name: "chocolate",
	rgbVal: [
		210,
		105,
		30
	]
};
var coral = {
	name: "coral",
	rgbVal: [
		255,
		127,
		80
	]
};
var cornflowerblue = {
	name: "cornflowerblue",
	rgbVal: [
		100,
		149,
		237
	]
};
var cornsilk = {
	name: "cornsilk",
	rgbVal: [
		255,
		248,
		220
	]
};
var crimson = {
	name: "crimson",
	rgbVal: [
		220,
		20,
		60
	]
};
var cyan = {
	name: "cyan",
	rgbVal: [
		0,
		255,
		255
	]
};
var darkblue = {
	name: "darkblue",
	rgbVal: [
		0,
		0,
		139
	]
};
var darkcyan = {
	name: "darkcyan",
	rgbVal: [
		0,
		139,
		139
	]
};
var darkgoldenrod = {
	name: "darkgoldenrod",
	rgbVal: [
		184,
		134,
		11
	]
};
var darkgray = {
	name: "darkgray",
	rgbVal: [
		169,
		169,
		169
	]
};
var darkgreen = {
	name: "darkgreen",
	rgbVal: [
		0,
		100,
		0
	]
};
var darkgrey = {
	name: "darkgrey",
	rgbVal: [
		169,
		169,
		169
	]
};
var darkkhaki = {
	name: "darkkhaki",
	rgbVal: [
		189,
		183,
		107
	]
};
var darkmagenta = {
	name: "darkmagenta",
	rgbVal: [
		139,
		0,
		139
	]
};
var darkolivegreen = {
	name: "darkolivegreen",
	rgbVal: [
		85,
		107,
		47
	]
};
var darkorange = {
	name: "darkorange",
	rgbVal: [
		255,
		140,
		0
	]
};
var darkorchid = {
	name: "darkorchid",
	rgbVal: [
		153,
		50,
		204
	]
};
var darkred = {
	name: "darkred",
	rgbVal: [
		139,
		0,
		0
	]
};
var darksalmon = {
	name: "darksalmon",
	rgbVal: [
		233,
		150,
		122
	]
};
var darkseagreen = {
	name: "darkseagreen",
	rgbVal: [
		143,
		188,
		143
	]
};
var darkslateblue = {
	name: "darkslateblue",
	rgbVal: [
		72,
		61,
		139
	]
};
var darkslategray = {
	name: "darkslategray",
	rgbVal: [
		47,
		79,
		79
	]
};
var darkslategrey = {
	name: "darkslategrey",
	rgbVal: [
		47,
		79,
		79
	]
};
var darkturquoise = {
	name: "darkturquoise",
	rgbVal: [
		0,
		206,
		209
	]
};
var darkviolet = {
	name: "darkviolet",
	rgbVal: [
		148,
		0,
		211
	]
};
var deeppink = {
	name: "deeppink",
	rgbVal: [
		255,
		20,
		147
	]
};
var deepskyblue = {
	name: "deepskyblue",
	rgbVal: [
		0,
		191,
		255
	]
};
var dimgray = {
	name: "dimgray",
	rgbVal: [
		105,
		105,
		105
	]
};
var dimgrey = {
	name: "dimgrey",
	rgbVal: [
		105,
		105,
		105
	]
};
var dodgerblue = {
	name: "dodgerblue",
	rgbVal: [
		30,
		144,
		255
	]
};
var firebrick = {
	name: "firebrick",
	rgbVal: [
		178,
		34,
		34
	]
};
var floralwhite = {
	name: "floralwhite",
	rgbVal: [
		255,
		250,
		240
	]
};
var forestgreen = {
	name: "forestgreen",
	rgbVal: [
		34,
		139,
		34
	]
};
var fuchsia = {
	name: "fuchsia",
	rgbVal: [
		255,
		0,
		255
	]
};
var gainsboro = {
	name: "gainsboro",
	rgbVal: [
		220,
		220,
		220
	]
};
var ghostwhite = {
	name: "ghostwhite",
	rgbVal: [
		248,
		248,
		255
	]
};
var gold = {
	name: "gold",
	rgbVal: [
		255,
		215,
		0
	]
};
var goldenrod = {
	name: "goldenrod",
	rgbVal: [
		218,
		165,
		32
	]
};
var gray = {
	name: "gray",
	rgbVal: [
		128,
		128,
		128
	]
};
var green = {
	name: "green",
	rgbVal: [
		0,
		128,
		0
	]
};
var greenyellow = {
	name: "greenyellow",
	rgbVal: [
		173,
		255,
		47
	]
};
var grey = {
	name: "grey",
	rgbVal: [
		128,
		128,
		128
	]
};
var honeydew = {
	name: "honeydew",
	rgbVal: [
		240,
		255,
		240
	]
};
var hotpink = {
	name: "hotpink",
	rgbVal: [
		255,
		105,
		180
	]
};
var indianred = {
	name: "indianred",
	rgbVal: [
		205,
		92,
		92
	]
};
var indigo = {
	name: "indigo",
	rgbVal: [
		75,
		0,
		130
	]
};
var ivory = {
	name: "ivory",
	rgbVal: [
		255,
		255,
		240
	]
};
var khaki = {
	name: "khaki",
	rgbVal: [
		240,
		230,
		140
	]
};
var lavender = {
	name: "lavender",
	rgbVal: [
		230,
		230,
		250
	]
};
var lavenderblush = {
	name: "lavenderblush",
	rgbVal: [
		255,
		240,
		245
	]
};
var lawngreen = {
	name: "lawngreen",
	rgbVal: [
		124,
		252,
		0
	]
};
var lemonchiffon = {
	name: "lemonchiffon",
	rgbVal: [
		255,
		250,
		205
	]
};
var lightblue = {
	name: "lightblue",
	rgbVal: [
		173,
		216,
		230
	]
};
var lightcoral = {
	name: "lightcoral",
	rgbVal: [
		240,
		128,
		128
	]
};
var lightcyan = {
	name: "lightcyan",
	rgbVal: [
		224,
		255,
		255
	]
};
var lightgoldenrodyellow = {
	name: "lightgoldenrodyellow",
	rgbVal: [
		250,
		250,
		210
	]
};
var lightgray = {
	name: "lightgray",
	rgbVal: [
		211,
		211,
		211
	]
};
var lightgreen = {
	name: "lightgreen",
	rgbVal: [
		144,
		238,
		144
	]
};
var lightgrey = {
	name: "lightgrey",
	rgbVal: [
		211,
		211,
		211
	]
};
var lightpink = {
	name: "lightpink",
	rgbVal: [
		255,
		182,
		193
	]
};
var lightsalmon = {
	name: "lightsalmon",
	rgbVal: [
		255,
		160,
		122
	]
};
var lightseagreen = {
	name: "lightseagreen",
	rgbVal: [
		32,
		178,
		170
	]
};
var lightskyblue = {
	name: "lightskyblue",
	rgbVal: [
		135,
		206,
		250
	]
};
var lightslategray = {
	name: "lightslategray",
	rgbVal: [
		119,
		136,
		153
	]
};
var lightslategrey = {
	name: "lightslategrey",
	rgbVal: [
		119,
		136,
		153
	]
};
var lightsteelblue = {
	name: "lightsteelblue",
	rgbVal: [
		176,
		196,
		222
	]
};
var lightyellow = {
	name: "lightyellow",
	rgbVal: [
		255,
		255,
		224
	]
};
var lime = {
	name: "lime",
	rgbVal: [
		0,
		255,
		0
	]
};
var limegreen = {
	name: "limegreen",
	rgbVal: [
		50,
		205,
		50
	]
};
var linen = {
	name: "linen",
	rgbVal: [
		250,
		240,
		230
	]
};
var magenta = {
	name: "magenta",
	rgbVal: [
		255,
		0,
		255
	]
};
var maroon = {
	name: "maroon",
	rgbVal: [
		128,
		0,
		0
	]
};
var mediumaquamarine = {
	name: "mediumaquamarine",
	rgbVal: [
		102,
		205,
		170
	]
};
var mediumblue = {
	name: "mediumblue",
	rgbVal: [
		0,
		0,
		205
	]
};
var mediumorchid = {
	name: "mediumorchid",
	rgbVal: [
		186,
		85,
		211
	]
};
var mediumpurple = {
	name: "mediumpurple",
	rgbVal: [
		147,
		112,
		219
	]
};
var mediumseagreen = {
	name: "mediumseagreen",
	rgbVal: [
		60,
		179,
		113
	]
};
var mediumslateblue = {
	name: "mediumslateblue",
	rgbVal: [
		123,
		104,
		238
	]
};
var mediumspringgreen = {
	name: "mediumspringgreen",
	rgbVal: [
		0,
		250,
		154
	]
};
var mediumturquoise = {
	name: "mediumturquoise",
	rgbVal: [
		72,
		209,
		204
	]
};
var mediumvioletred = {
	name: "mediumvioletred",
	rgbVal: [
		199,
		21,
		133
	]
};
var midnightblue = {
	name: "midnightblue",
	rgbVal: [
		25,
		25,
		112
	]
};
var mintcream = {
	name: "mintcream",
	rgbVal: [
		245,
		255,
		250
	]
};
var mistyrose = {
	name: "mistyrose",
	rgbVal: [
		255,
		228,
		225
	]
};
var moccasin = {
	name: "moccasin",
	rgbVal: [
		255,
		228,
		181
	]
};
var navajowhite = {
	name: "navajowhite",
	rgbVal: [
		255,
		222,
		173
	]
};
var navy = {
	name: "navy",
	rgbVal: [
		0,
		0,
		128
	]
};
var oldlace = {
	name: "oldlace",
	rgbVal: [
		253,
		245,
		230
	]
};
var olive = {
	name: "olive",
	rgbVal: [
		128,
		128,
		0
	]
};
var olivedrab = {
	name: "olivedrab",
	rgbVal: [
		107,
		142,
		35
	]
};
var orange = {
	name: "orange",
	rgbVal: [
		255,
		165,
		0
	]
};
var orangered = {
	name: "orangered",
	rgbVal: [
		255,
		69,
		0
	]
};
var orchid = {
	name: "orchid",
	rgbVal: [
		218,
		112,
		214
	]
};
var palegoldenrod = {
	name: "palegoldenrod",
	rgbVal: [
		238,
		232,
		170
	]
};
var palegreen = {
	name: "palegreen",
	rgbVal: [
		152,
		251,
		152
	]
};
var paleturquoise = {
	name: "paleturquoise",
	rgbVal: [
		175,
		238,
		238
	]
};
var palevioletred = {
	name: "palevioletred",
	rgbVal: [
		219,
		112,
		147
	]
};
var papayawhip = {
	name: "papayawhip",
	rgbVal: [
		255,
		239,
		213
	]
};
var peachpuff = {
	name: "peachpuff",
	rgbVal: [
		255,
		218,
		185
	]
};
var peru = {
	name: "peru",
	rgbVal: [
		205,
		133,
		63
	]
};
var pink = {
	name: "pink",
	rgbVal: [
		255,
		192,
		203
	]
};
var plum = {
	name: "plum",
	rgbVal: [
		221,
		160,
		221
	]
};
var powderblue = {
	name: "powderblue",
	rgbVal: [
		176,
		224,
		230
	]
};
var purple = {
	name: "purple",
	rgbVal: [
		128,
		0,
		128
	]
};
var red = {
	name: "red",
	rgbVal: [
		255,
		0,
		0
	]
};
var rosybrown = {
	name: "rosybrown",
	rgbVal: [
		188,
		143,
		143
	]
};
var royalblue = {
	name: "royalblue",
	rgbVal: [
		65,
		105,
		225
	]
};
var saddlebrown = {
	name: "saddlebrown",
	rgbVal: [
		139,
		69,
		19
	]
};
var salmon = {
	name: "salmon",
	rgbVal: [
		250,
		128,
		114
	]
};
var sandybrown = {
	name: "sandybrown",
	rgbVal: [
		244,
		164,
		96
	]
};
var seagreen = {
	name: "seagreen",
	rgbVal: [
		46,
		139,
		87
	]
};
var seashell = {
	name: "seashell",
	rgbVal: [
		255,
		245,
		238
	]
};
var sienna = {
	name: "sienna",
	rgbVal: [
		160,
		82,
		45
	]
};
var silver = {
	name: "silver",
	rgbVal: [
		192,
		192,
		192
	]
};
var skyblue = {
	name: "skyblue",
	rgbVal: [
		135,
		206,
		235
	]
};
var slateblue = {
	name: "slateblue",
	rgbVal: [
		106,
		90,
		205
	]
};
var slategray = {
	name: "slategray",
	rgbVal: [
		112,
		128,
		144
	]
};
var slategrey = {
	name: "slategrey",
	rgbVal: [
		112,
		128,
		144
	]
};
var snow = {
	name: "snow",
	rgbVal: [
		255,
		250,
		250
	]
};
var springgreen = {
	name: "springgreen",
	rgbVal: [
		0,
		255,
		127
	]
};
var steelblue = {
	name: "steelblue",
	rgbVal: [
		70,
		130,
		180
	]
};
var tan = {
	name: "tan",
	rgbVal: [
		210,
		180,
		140
	]
};
var teal = {
	name: "teal",
	rgbVal: [
		0,
		128,
		128
	]
};
var thistle = {
	name: "thistle",
	rgbVal: [
		216,
		191,
		216
	]
};
var tomato = {
	name: "tomato",
	rgbVal: [
		255,
		99,
		71
	]
};
var transparent = {
	name: "transparent",
	rgbVal: [
		0,
		0,
		0,
		0
	]
};
var turquoise = {
	name: "turquoise",
	rgbVal: [
		64,
		224,
		208
	]
};
var violet = {
	name: "violet",
	rgbVal: [
		238,
		130,
		238
	]
};
var wheat = {
	name: "wheat",
	rgbVal: [
		245,
		222,
		179
	]
};
var white = {
	name: "white",
	rgbVal: [
		255,
		255,
		255
	]
};
var whitesmoke = {
	name: "whitesmoke",
	rgbVal: [
		245,
		245,
		245
	]
};
var yellow = {
	name: "yellow",
	rgbVal: [
		255,
		255,
		0
	]
};
var yellowgreen = {
	name: "yellowgreen",
	rgbVal: [
		154,
		205,
		50
	]
};
var rebeccapurple = [
	102,
	51,
	153
];
var colors = {
	aliceblue: aliceblue,
	antiquewhite: antiquewhite,
	aqua: aqua,
	aquamarine: aquamarine,
	azure: azure,
	beige: beige,
	bisque: bisque,
	black: black,
	blanchedalmond: blanchedalmond,
	blue: blue,
	blueviolet: blueviolet,
	brown: brown,
	burlywood: burlywood,
	cadetblue: cadetblue,
	chartreuse: chartreuse,
	chocolate: chocolate,
	coral: coral,
	cornflowerblue: cornflowerblue,
	cornsilk: cornsilk,
	crimson: crimson,
	cyan: cyan,
	darkblue: darkblue,
	darkcyan: darkcyan,
	darkgoldenrod: darkgoldenrod,
	darkgray: darkgray,
	darkgreen: darkgreen,
	darkgrey: darkgrey,
	darkkhaki: darkkhaki,
	darkmagenta: darkmagenta,
	darkolivegreen: darkolivegreen,
	darkorange: darkorange,
	darkorchid: darkorchid,
	darkred: darkred,
	darksalmon: darksalmon,
	darkseagreen: darkseagreen,
	darkslateblue: darkslateblue,
	darkslategray: darkslategray,
	darkslategrey: darkslategrey,
	darkturquoise: darkturquoise,
	darkviolet: darkviolet,
	deeppink: deeppink,
	deepskyblue: deepskyblue,
	dimgray: dimgray,
	dimgrey: dimgrey,
	dodgerblue: dodgerblue,
	firebrick: firebrick,
	floralwhite: floralwhite,
	forestgreen: forestgreen,
	fuchsia: fuchsia,
	gainsboro: gainsboro,
	ghostwhite: ghostwhite,
	gold: gold,
	goldenrod: goldenrod,
	gray: gray,
	green: green,
	greenyellow: greenyellow,
	grey: grey,
	honeydew: honeydew,
	hotpink: hotpink,
	indianred: indianred,
	indigo: indigo,
	ivory: ivory,
	khaki: khaki,
	lavender: lavender,
	lavenderblush: lavenderblush,
	lawngreen: lawngreen,
	lemonchiffon: lemonchiffon,
	lightblue: lightblue,
	lightcoral: lightcoral,
	lightcyan: lightcyan,
	lightgoldenrodyellow: lightgoldenrodyellow,
	lightgray: lightgray,
	lightgreen: lightgreen,
	lightgrey: lightgrey,
	lightpink: lightpink,
	lightsalmon: lightsalmon,
	lightseagreen: lightseagreen,
	lightskyblue: lightskyblue,
	lightslategray: lightslategray,
	lightslategrey: lightslategrey,
	lightsteelblue: lightsteelblue,
	lightyellow: lightyellow,
	lime: lime,
	limegreen: limegreen,
	linen: linen,
	magenta: magenta,
	maroon: maroon,
	mediumaquamarine: mediumaquamarine,
	mediumblue: mediumblue,
	mediumorchid: mediumorchid,
	mediumpurple: mediumpurple,
	mediumseagreen: mediumseagreen,
	mediumslateblue: mediumslateblue,
	mediumspringgreen: mediumspringgreen,
	mediumturquoise: mediumturquoise,
	mediumvioletred: mediumvioletred,
	midnightblue: midnightblue,
	mintcream: mintcream,
	mistyrose: mistyrose,
	moccasin: moccasin,
	navajowhite: navajowhite,
	navy: navy,
	oldlace: oldlace,
	olive: olive,
	olivedrab: olivedrab,
	orange: orange,
	orangered: orangered,
	orchid: orchid,
	palegoldenrod: palegoldenrod,
	palegreen: palegreen,
	paleturquoise: paleturquoise,
	palevioletred: palevioletred,
	papayawhip: papayawhip,
	peachpuff: peachpuff,
	peru: peru,
	pink: pink,
	plum: plum,
	powderblue: powderblue,
	purple: purple,
	red: red,
	rosybrown: rosybrown,
	royalblue: royalblue,
	saddlebrown: saddlebrown,
	salmon: salmon,
	sandybrown: sandybrown,
	seagreen: seagreen,
	seashell: seashell,
	sienna: sienna,
	silver: silver,
	skyblue: skyblue,
	slateblue: slateblue,
	slategray: slategray,
	slategrey: slategrey,
	snow: snow,
	springgreen: springgreen,
	steelblue: steelblue,
	tan: tan,
	teal: teal,
	thistle: thistle,
	tomato: tomato,
	transparent: transparent,
	turquoise: turquoise,
	violet: violet,
	wheat: wheat,
	white: white,
	whitesmoke: whitesmoke,
	yellow: yellow,
	yellowgreen: yellowgreen,
	rebeccapurple: rebeccapurple
};

var lemmaChainServerHost = "68.183.123.0:1323";
var themeColor = "blue";
var dropdownBg = "";
var graphTablinkColor = "";
var graphTablinkHoverBg = "";
var graphNetworkRequiredEdgeColor = "";
var graphNetworkRecommendedEdgeColor = "";
var widgetMaxWidth = 450;
var widgetMaxNumOfRefsDisplayableAtOnce = 3;
var widgetconfig = {
	lemmaChainServerHost: lemmaChainServerHost,
	themeColor: themeColor,
	dropdownBg: dropdownBg,
	graphTablinkColor: graphTablinkColor,
	graphTablinkHoverBg: graphTablinkHoverBg,
	graphNetworkRequiredEdgeColor: graphNetworkRequiredEdgeColor,
	graphNetworkRecommendedEdgeColor: graphNetworkRecommendedEdgeColor,
	widgetMaxWidth: widgetMaxWidth,
	widgetMaxNumOfRefsDisplayableAtOnce: widgetMaxNumOfRefsDisplayableAtOnce
};

var COLORS = colors;
//change theme colour to colour name/code you wish to, to see effect. PS: You can also use colors.COLOUR_NAME.name (e.g. colors.blue.name) to get colour hints
var THEME_COLOR = widgetconfig.themeColor , DROPDOWN_BGCOLOR =  'white'; //recommended: rgb(32, 199, 245)
var cssProps = {};
cssProps.themeBg = THEME_COLOR;
cssProps.themeHoverBg = getColor([-25, -25, -25]).variant;
var toggleBarBg = getColor([0, 0, 0]);
cssProps.toggleBarBg = toggleBarBg.rgbVal.reduce(function (a, b) { return a + b; }) < 475 ? 'white' : 'black';
cssProps.dropdownBg = DROPDOWN_BGCOLOR;
var dropdownBg$1 = getColor([0, 0, 0], cssProps.dropdownBg);
cssProps.dropdownColor = dropdownBg$1.rgbVal.reduce(function (a, b) { return a + b; }) < 475 ? 'white' : 'black';
cssProps.activeTablinkColor = toggleBarBg.rgbVal.reduce(function (a, b) { return a + b; }) > 510 ?
    getColor([-48, -48, -48]).variant : toggleBarBg.variant;
cssProps.graphTabLinkBg = THEME_COLOR;
cssProps.graphTablinkHoverBg = 
    getColor([-133, 179, 90], cssProps.themeBg).variant;
cssProps.graphTablinkColor = 
    getColor([223, 56, -245], cssProps.graphTablinkHoverBg).variant;
cssProps.tablinkBg = getColor([45, 80, 45]).variant;
cssProps.tablinkHoverBg = getColor([20, 20, 20], cssProps.tablinkBg).variant;
cssProps.tablinkColor = toggleBarBg.rgbVal.reduce(function (a, b) { return a + b; }) > 510 ?
    getColor([-12, -12, -12]).variant : getColor([-12, -12, -12], cssProps.dropdownBg).variant;
cssProps.tablinkHoverColor = getColor([12, 12, 12], cssProps.tablinkColor).variant;
cssProps.itemHoverBg = getColor([-12, -12, -12], cssProps.dropdownBg).variant;
cssProps.itemBorderBottomColor = getColor([-20, -20, -20], cssProps.dropdownBg).variant;
cssProps.itemBorderBottomHoverColor = getColor([-20, -20, -20], cssProps.itemBorderBottomColor).variant;
cssProps.graphWrapperBg = getColor([-13, -13, -13], cssProps.dropdownBg).variant;
cssProps.graphBg = cssProps.dropdownBg;
cssProps.graphBorderColor = getColor([-26, -26, -26], cssProps.dropdownBg).variant;
cssProps.graphCurrentNodeBg = getColor([25, 25, 25]).variant;
cssProps.graphCurrentNodeBorderColor = THEME_COLOR;
cssProps.graphParentNodesBg = getColor([0, 0, 0], cssProps.graphTablinkHoverBg).variant;
cssProps.graphParentNodesBorderColor = getColor([-20, -20, -20], cssProps.graphParentNodesBg).variant;
cssProps.graphNetworkRequiredEdgeColor =  'darkorange';
cssProps.graphNetworkRecommendedEdgeColor =  '#009100';
function getCSSProps() {
    return cssProps;
}
function getColor(rgbDiff, color) {
    var _a;
    if (color === void 0) { color = THEME_COLOR; }
    if (rgbDiff.length !== 3)
        throw new Error('rgbDiff expects three values.');
    var rgbVal, r, g, b, variant;
    if (/^[a-zA-Z]{3,}$/i.test(color) && (color in COLORS))
        rgbVal = COLORS[color].rgbVal;
    else if (/^#[0-9a-f]{3,6}$/i.test(color))
        rgbVal = color.replace(/#([0-9a-f]{1,2})([0-9a-f]{1,2})([0-9a-f]{1,2})/ig, '$1 $2 $3')
            .split(' ').map(function (hex) { return Number(parseInt(hex.length === 2 ? hex : hex + "f", 16).toString(10)); });
    else if (/^rgb\(\d{1,3},\s*\d{1,3},\s*\d{1,3}\)$/i.test(color))
        rgbVal = color.replace(/.*\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)/, '$1 $2 $3')
            .split(' ').map(function (val) { return Number(val); });
    else
        throw new Error("Invalid colour code/name, '" + color + "'");
    _a = rgbVal.map(function (val, i) { return val + rgbDiff[i]; }), r = _a[0], g = _a[1], b = _a[2];
    variant = "rgb(" + (r >= 0 ? (r > 255 ? 255 : r) : 0) + ", " + (g >= 0 ? (g > 255 ? 255 : g) : 0) + ", " + (b >= 0 ? (b > 255 ? 255 : b) : 0) + ")";
    return {
        variant: String(variant),
        rgbVal: rgbVal
    };
}

var lcLogoImgSrc = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAsCAYAAADVX77/AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAB6gAAAeoBXp5UpQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAkeSURBVGiBzVprkBRXFf5Oz+wrZINUsHABYaXAWgglqSRYiRoDlYQIInFD7bAvHstjCQSjm1ShVYmp0XJJokRICQvDY9nAvpg1goIRgciKVKIQgz9MRZMgBFLswiY8l31N9zn+mJme7p7unpmdAf2qeufOuY8+37nfPX3n9hKSwII3943K1tRSBt2vMCaCMZ4EOWBcJQ3nQPQP0uRQP8nvGoqLryQz5v8LyK1y6Z/23MugNWA8QgKFGAADJJFPBiCRz7D9OhgbszDwy1/5fF23gkC6sA3A4mO/zccA1gFSBYGiE3YmbrXfIJFVdWXFDbeMySARF4CqP+/9Imm0D5ApAGJE3QnH28EAeHtv3/VVDVVVfbeKUKrwGL+EyeNtABN0o0SiJBGCMH+abIa2gEDA93izvBNnT5786/b2drmpTAYJJVooeSuYRyyvAxhlbKCTj363EEak3lSGQKJGkbmdRV/++U3yP23oAcjvy1kPoammWjeSjuTNRoFARJ5d1to4M8O+ZwQEAIuO7LlbEXoHliVhWtfJJ0AADIEW+WQAGgT8L1zr/cqW5ctDt45eYijhP8oaWMnDIn+X9W7ODVH5Rypj5SLkZy2+KSzSgFJ99PUCiMyIq0lJ8rCRvyEPQI/Yiox6nwEoIdVTCpvZ12FLEgkCYjYaFDFlcVP9uHQczjQUAt1vV+Eq89Tlr5c9ijot0yTSgQKRiXHWlCRvKevyN3aOLQkhmZQJxzMFBYQvOdYmI3nL89/+itURyxcy4XimoADIshqTlr+xvYP8xRoEBUNuAo9BwwugH0CObklG5nYKMBgkrjIWHBLuT9vrBKgOVGddu+PaKCHJ9mieruaK5stObb0AzgKYbLIOagdorbC/WNAzaGZuEFBFU9VcIa7uRs9DxJRNEAhCKG164gwgu7Ws/vVtvjc6jd28AN6FIQDuWT6R/M3rPk7+4Y6OAagOBLL6h14c49E0GTMSZ/3T/Woy3BcEq8doLVojSHsw/Cs0bpYKAf6hEvKs9DV++wfByt/XR/sqIDqoj5TqM99G/nZlU26wUUB189rhi5tf3BjK7+pSWD5iwqkzHdrFqqbnXi1v+tEwN/KVu5aM11R+C+AHk8hB+USyvaR55gt6AMTTfxDhPJCIh8vj0IGspSwQELjXSGBRy4uFKtQTAlkJYKih3zAmeTpLwfGKxtWj7ciXBGvyxKPsBWSU+T7G+8furT+JhP3zmh4tAQBlxzd9XQI0AImyvPNvAzupxy8JvbGuAL/fryjiaQNQ6BhtkfEehXdD4g9vckI3agC5K6ysxI9gg68koFfnbJ+TrwAAi/wCggF95FQSoGPCi97OKH8BSPQAfDw+fxYg97krSADgawt31zxqJF8SrMkD4Rnnfg45KIaC3Jz+UgUAXnu4+BSInk9e8sZysvKPtDEogBSZ4aQWq/PC8pjR+9xQ7zxA7kxmtuz9AgB5Qj8QGXP05CsEHE50AmSVvxvZeIcEohhzgDYiaefFvIMUYKV+H7G2t7/MQQVAmKIHwO/3c7Z3oBiCvyTwyeSGXcKxzQNRJ1n0AxEhXExBQRei/cqbnvwqiKe6Lb8E8o/i84rxW910X3d2zsAsCPYZOCKurI9nJevofMxOMlQfj+VwYgWFL/LQoWg3hbAyObJu8gcAXFOslrrpvu5ts747B0wrSNANZEr+4Voi0n98jf2wb5+AT7orCADkbzvnrT8AAGXN1cMBmecsfye/bAPwflwAotj6ncc3Z6lcCJafAPhUH0tHYrJm+UccEdZPn/x+P7MiJYB84uL8GYVQCgobPeR9GpBcu/xiu/Sc5Q8AB1xfjUVREgx6hntyp7LGMyj8XnAEwCMFXABod4YPPvXDT8Qdior5gJQYD2yrfPav0fGXNteOUClUC9FKBTwE4b7dAm4KQZ5vKX/lUwAobVk10ivaB4A6RL9PZGyHg1iLX6ZA9CiKTEgqAG6oCQbz+tE/ipmKNPA9JOq9gEwT8B36jSXmXMTRd8YU9Dxg3euXBGvyblNvH6ewKhLK+U9Dlb8vVlfiydWG7xXh2TpZcSMbHxAz5LlgxaE13nQDsM7n6wXwUeTaH3Y2mD1UvTqXCC9ApMhGrved7czdDJFloFhGafOt6wXwnt198rQR61m02SklXIclIJDf3PXh118CDrm/HU4X1YFAFueHnoJwrRDfFj9TEhj7QWil3+9npzEWb1+dr+b1BhhaWZzUJTqzKchfEPjcjc++t2X530NAgtfjmcLS1nUThXEQ4NHxspTDRLywvsx/3thn2hG/d+z5K/NY0fwQGW9ZQqnKXwNwRGGltnX+gXbjfTIagEU7duRmeweGjTzVccE6q9XNa4s04ISAb7dxdABQ34Dwuwy5BtImAvwtAY+F08yKPrNdgHoO0C4zyWUIXwK0yyxyCQhdJuBjzsbJNt8fbP9fISMBqAkG825oPbUArxBwLqB1gPiZraUrWo3tljSt/b6Qtt49USU1s1cYvFaof2drWeu5dHx33Aekghta/yYANbHnsxSISMuylg3FxnbaQHcAkAvJ7R9idkv746SFJrWUv1abLnkgAwFYHmycBPDCuN2WCFjkZWPbhip/n0Dqk9/CWi8+NuDNebhxfmNHun5Hkb4CmIucZpMgE6oDAdOxu0dVtwLCiXducSp4O7tXZrX56rqjY1U0VjxZ3lR6vKy55Iivae4jg3E/7QCQJp8YHQVMM9thfR2+bcGPTxPkYEryF5wY8GJm/ZL669FxypvmlzLxJoFMhWCaAtlf1jy3KFX/0w7A5vIFJwB50zRz0b0/4SW7PgwE3ORvKf9TUT0z23xbrppHkcctCsoRUVP+J4z0lwCReD2oFKI/GpxXReRno/99aYNdl8ICbT+Ac/a7OuOS4FMqeR7buXDjZ/GjcIe5HyCQlHNDRvcBS1o3TYZoIzQPvdfge6rTre3CZv9qgvqy06OOwOdFxTd2Ldhw2q5/5a7KAk0JHQN4XKT94Y6RV2a2T29P6l1CFLdkJ2gH/xG/93SnugeizbbZB1yAok7fVVr3vtsY83fOH6J5eh5i1nqKTt191G1L7YT/WQCA8Ha3sLNvqQgvEeFJIO0SiPcpntBPG3x1rgrKFP4LMxutB/Ft8XYAAAAASUVORK5CYII=';
var ToggleBarItems = React.forwardRef(function (props, unusedRef) {
    return (React.createElement(ToggleBarItemsContext.Consumer, null, function (val) { return (React.createElement(React.Fragment, null,
        React.createElement("button", { className: "tool-tip " + (val.state.tooltipIsActive ? '' : 'fade-out'), onClick: val.copyRefID }, "Copy"),
        React.createElement("section", { className: 'dropdown-toggle-bar', onClick: val.handleDropdownToggle },
            React.createElement("span", { style: { alignSelf: 'center', minWidth: 20 } },
                React.createElement("img", { src: lcLogoImgSrc, alt: 'LC', title: 'Lemma Chain', style: {
                        width: '38px',
                        position: 'absolute',
                        top: '22%'
                    } })),
            React.createElement("span", { className: 'refIDWrapper' },
                React.createElement("span", { className: 'ref-identifier', title: "Title: " + val.state.payload.data.title + "\nAuthor(s): " + val.state.payload.data.authors.join(', ') + "\nRef. ID: " + val.state.refID, style: { opacity: val.state.refIsLoading ? 0 : 1 } },
                    val.state.refID,
                    React.createElement("input", { type: 'text', value: val.state.refID, id: 'refIDCopy', style: {
                            position: 'absolute',
                            width: 1,
                            height: 1,
                            border: 'none',
                            top: -100
                        }, ref: val.refs.refIDInputEl, onChange: function (e) { return e.target.value = val.state.refID; } })),
                props.children),
            React.createElement("span", { className: "caret-icon " + (val.state.dropdownIsCollapsed ? 'flip-caret-icon' : '') }, "\u276E")))); }));
});

var TabLinks = React.forwardRef(function (unUsedProps, unUsedRef) {
    return (React.createElement(TabLinksContext.Consumer, null, function (props) { return (React.createElement("div", { className: 'tab-links-wrapper', style: { height: props.state.dropdownIsCollapsed ? 0 : 48,
            maxWidth: widgetconfig.widgetMaxWidth } },
        React.createElement("button", { className: 'back-btn', title: 'Previous Ref', onClick: props.goBackInTime, style: { width: props.state.historyExists ? 55 : 0 } }, "\u276E"),
        React.createElement("button", { className: "required-tab-link tab-link \n              " + (/required/.test(props.state.activeTabName) ? 'active-tab-link' : ''), title: 'Required references', "data-tab-name": 'required-tab', onClick: props.handleTabToggle, ref: /required/.test(props.state.activeTabName) ? props.ref.activeTabLink : null }, "Required"),
        React.createElement("button", { className: "recommended-tab-link tab-link \n              " + (/recommended/.test(props.state.activeTabName) ? 'active-tab-link' : ''), title: 'Recommended references', "data-tab-name": 'recommended-tab', onClick: props.handleTabToggle, ref: /recommended/.test(props.state.activeTabName) ? props.ref.activeTabLink : null }, "Recommended"),
        React.createElement("button", { className: "graph-tab-link tab-link\n              " + (/graph/.test(props.state.activeTabName) ? 'active-tab-link' : ''), title: 'View graph', "data-tab-name": 'graph-tab', style: { background: /graph/.test(props.state.activeTabName) ? getCSSProps().graphTablinkHoverBg : '' }, onClick: props.handleTabToggle, ref: /graph/.test(props.state.activeTabName) ? props.ref.activeTabLink : null }, "\u2605"))); }));
});
// {
//   "compilerOptions": {
//     "target": "es5",
//     "lib": [
//       "dom",
//       "dom.iterable",
//       "esnext"
//     ],
//     "allowJs": true,
//     "skipLibCheck": true,
//     "esModuleInterop": true,
//     "allowSyntheticDefaultImports": true,
//     "strict": true,
//     "forceConsistentCasingInFileNames": true,
//     "module": "esnext",
//     "moduleResolution": "node",
//     "resolveJsonModule": true,
//     "isolatedModules": true,
//     "noEmit": true,
//     "jsx": "preserve",
//     "noImplicitAny": true,
//     "outDir": "dist"
//   },
//   "include": [
//     "src/**/*"
//   ],
//   "exclude": [
//     "node_modules"
//   ]
// }

var Item = React.forwardRef(function (props, refItemWrapper) {
    var appendURL = React.createElement("a", { href: props.externLink, target: '_blank', className: 'extern-link', rel: 'noopener noreferrer' },
        React.createElement("img", { className: 'extern-link-icon', src: "link.png", alt: "link" }));
    return (React.createElement("div", { className: 'item-wrapper', "data-data": props.data, "data-id": props.id, onClick: function (e) { return props.handleReferenceClick(e); }, ref: refItemWrapper },
        React.createElement("li", { className: 'item' },
            React.createElement("span", { className: 'props' },
                "Title: ",
                React.createElement("b", null, props.data.title)),
            React.createElement("span", { className: 'props' },
                "Author",
                props.data.authors.length > 1 ? 's' : '',
                ": ",
                props.data.authors.join(', ')),
            React.createElement("span", { className: 'props' },
                "Ref. ID: ",
                React.createElement("b", null, props.id)),
            props.externLink ? appendURL : '')));
});

/**
 * @param DisplayStatusMessage: Displays error message or 'book has no-ref' message depending on context.
 */
function DisplayStatusMessage(props) {
    var messageWrapperStyle = {
        padding: '20px 30px',
        display: 'flex',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#888',
        fontSize: 14,
        minHeight: 200,
        opacity: props.refIsLoading ? 0 : 1,
        transition: '0.3s'
    }, errImgStyle = {
        opacity: 0.5,
        borderRadius: '50%',
        width: 80,
        height: 'auto',
        marginBottom: 10
    }, suggestMsg = React.createElement(React.Fragment, null,
        React.createElement("b", null, "Suggest:"),
        " Must be a network issue. Check internet connection then try again."), errMsg = React.createElement(React.Fragment, null,
        "Sorry. Could not load ",
        React.createElement("b", null, props.ref_type),
        " references for this book.",
        React.createElement("br", null),
        React.createElement("br", null),
        /fetch/i.test(props.errMsg) ? suggestMsg : 'An unexpected error occurred. Please, try again.'), nothingToShowMessage = React.createElement(React.Fragment, null,
        "Nothing to show.",
        React.createElement("br", null),
        "Book has no ",
        React.createElement("b", null, props.ref_type),
        " references."), graphStatusMessage = React.createElement(React.Fragment, null,
        "Sorry. Can't visualize ",
        React.createElement("b", null, "graph"),
        ".",
        React.createElement("br", null),
        React.createElement("b", null, props.errMsg ? '' : 'Reason: '),
        props.errMsg ? '' : 'Book has no parent refs.');
    return (React.createElement("div", { className: 'item-wrapper', style: messageWrapperStyle },
        React.createElement("span", { className: 'props' },
            React.createElement("img", { src: 'err_grey.png', alt: 'Status', style: errImgStyle }),
            React.createElement("br", null),
            /graph/.test(props.ref_type) ?
                graphStatusMessage : (/error/.test(props.typeofMsg) ? errMsg : nothingToShowMessage))));
}

// import { getCSSProps } from '../ThemeCSS';
var Tabs = React.forwardRef(function (props, noRefs) {
    return (React.createElement(TabsContext.Consumer, null, function (val) {
        var requiredRefExists = val.state.payload.refs.some(function (ref) { return /required/.test(ref.ref_type); }), recommendedRefExists = val.state.payload.refs.some(function (ref) { return /recommended/.test(ref.ref_type); }), ifCanVisualizeGraph = (requiredRefExists || recommendedRefExists) && !val.state.errOccurred, renderGraph = React.createElement("div", { className: 'tab-items-wrapper graph-wrapper' },
            React.createElement("div", { id: 'graph', ref: val.refs.graph }),
            React.createElement("div", { id: 'graph-key' },
                "Key:",
                React.createElement("br", null),
                React.createElement("span", { className: 'key key-line-required' }),
                " required",
                React.createElement("br", null),
                React.createElement("span", { className: 'key key-line-recommended' }),
                " recommended"),
            React.createElement("span", { className: "graph-tooltip " + (val.state.graphNodeIsHovered ? '' : 'fade-out'), ref: val.refs.graphTooltip }));
        return (React.createElement("div", { className: 'tabs-container', style: { position: 'relative' } },
            props.children,
            React.createElement("div", { className: 'tabs-wrapper', style: { opacity: val.state.refIsLoading ? 0 : 1 } },
                React.createElement("ul", { className: "tab required-tab\n                  " + (/required/.test(val.state.activeTabName) ? 'active-tab' : '') + "\n                  " + (!val.isViewedWithMobile ? 'useCustomScrollBar' : ''), ref: /required/.test(val.state.activeTabName) ? val.refs.activeTab : val.refs.requiredTab }, val.state.errOccurred ?
                    React.createElement(DisplayStatusMessage, { typeofMsg: 'error', errOccurred: val.state.errOccurred, ref_type: 'required', refIsLoading: val.state.refIsLoading })
                    : requiredRefExists ?
                        val.state.payload.refs.map(function (ref, key) {
                            return ref.ref_type === 'required' ?
                                React.createElement(Item, { data: ref.data, id: ref.id, refs: ref.refs, externLink: ref.url ? ref.url : null, key: key, handleReferenceClick: val.handleReferenceClick, ref: val.refs.refItemWrapper })
                                : null;
                        })
                        : React.createElement(DisplayStatusMessage, { typeofMsg: 'no-ref', ref_type: 'required', refIsLoading: val.state.refIsLoading })),
                React.createElement("ul", { className: "tab recommended-tab\n                  " + (/recommended/.test(val.state.activeTabName) ? 'active-tab' : '') + "\n                  " + (!val.isViewedWithMobile ? 'useCustomScrollBar' : ''), ref: /recommended/.test(val.state.activeTabName) ? val.refs.activeTab : val.refs.recommendedTab }, val.state.errOccurred ?
                    React.createElement(DisplayStatusMessage, { typeofMsg: 'error', errOccurred: val.state.errOccurred, ref_type: 'recommended', refIsLoading: val.state.refIsLoading })
                    : recommendedRefExists ?
                        val.state.payload.refs.map(function (ref, key) {
                            return ref.ref_type === 'recommended' ?
                                React.createElement(Item, { data: ref.data, id: ref.id, refs: ref.refs, externLink: ref.url ? ref.url : null, key: key, handleReferenceClick: val.handleReferenceClick, ref: val.refs.refItemWrapper })
                                : null;
                        })
                        : React.createElement(DisplayStatusMessage, { typeofMsg: 'no-ref', ref_type: 'recommended', errOccurred: '', refIsLoading: val.state.refIsLoading })),
                React.createElement("ul", { className: "tab graph-tab\n                  " + (/graph/.test(val.state.activeTabName) ? 'active-tab' : '') + "\n                  " + (!val.isViewedWithMobile ? 'useCustomScrollBar' : ''), ref: /graph/.test(val.state.activeTabName) ? val.refs.activeTab : null }, ifCanVisualizeGraph ? renderGraph
                    : React.createElement(DisplayStatusMessage, { typeofMsg: 'no-ref', ref_type: 'graph', errOccurred: val.state.errOccurred, refIsLoading: val.state.refIsLoading })))));
    }));
});

var Widget = /** @class */ (function (_super) {
    __extends(Widget, _super);
    function Widget() {
        /**
         * dropdownIsCollapsed: boolean for dropdown toggle
         * dropdownCurHeight: holds dropdown height value change
         * activeTabName: this and activeTabLinkName are mainly used for navigating history (going back in time)
         * historyExists: boolean to display 'back button' if true and hide if otherwise
         * isViewedWithMobile: boolean to check what device app is running on (hides 'star button' if true, displays if false)
         * tabLinksWrapperheight: a constant which will be needed in computing dropdown height and also loader wrapper height in Dropdown.tsx
         * dropdown: child element of Widget
         * activeTabLink: tab link/button
         * activeTab: active tab/dropdown for either of the three togglable tabs
         * history: An array of state objects; will hold the different state changes in order to enable and set state going back in time
         */
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            dropdownIsCollapsed: true,
            dropdownCurHeight: 0,
            refID: '@powerofgod/17t8kcjuw',
            activeTabName: 'required-tab',
            activeTabLinkName: 'required-tab-link',
            historyExists: false,
            refIsLoading: true,
            payload: {
                data: {
                    title: '',
                    authors: [''],
                    url: ''
                },
                id: '',
                refs: [{}]
            },
            errOccurred: false,
            errMsg: '',
            graphNodeIsHovered: false,
            graphNodeIsActive: false,
            tooltipIsActive: false
        };
        _this.tabLinksWrapperheight = 48;
        _this.graph = {
            nodes: [],
            edges: []
        };
        _this.isViewedWithMobile = false;
        _this.child_refs = {
            dropdown: React.createRef(),
            activeTabLink: React.createRef(),
            activeTab: React.createRef(),
            requiredTab: React.createRef(),
            recommendedTab: React.createRef(),
            graphTab: React.createRef(),
            graph: React.createRef(),
            refItemWrapper: React.createRef(),
            graphTooltip: React.createRef(),
            refIDInputEl: React.createRef()
        };
        _this.widget = React.createRef();
        _this.serverHostURL = /localhost/.test(window.location.href) ?
            'localhost:1323' : widgetconfig.lemmaChainServerHost;
        //copy initial/first state object and set at index 0 of history
        _this.history = [];
        _this.cssProps = getCSSProps();
        _this.handleDropdownToggle = function (e) {
            if (e.target.className.match('ref-identifier'))
                _this.setState({ tooltipIsActive: !_this.state.tooltipIsActive });
            else {
                _this.setState(function (prevState) {
                    var dropdownIsCollapsed = prevState.dropdownIsCollapsed, dropdownNewHeight = _this.resizeDropdownHeightTo(dropdownIsCollapsed ? _this.child_refs.activeTab.current : 0);
                    return {
                        dropdownIsCollapsed: !dropdownIsCollapsed,
                        dropdownCurHeight: dropdownNewHeight
                    };
                });
            }
        };
        _this.copyRefID = function (e) {
            var tooltip = e.currentTarget;
            _this.child_refs.refIDInputEl.current.select();
            document.execCommand("copy");
            _this.child_refs.refIDInputEl.current.blur();
            tooltip.textContent = 'Copied to clipboard';
            setTimeout(function () {
                _this.setState({ tooltipIsActive: false });
                setTimeout(function () {
                    tooltip.textContent = 'Copy';
                }, 300);
            }, 1500);
        };
        _this.handleTabToggle = function (e) {
            var currentTab = _this.child_refs.activeTab.current, currentTabLink = e.currentTarget, activeTabName = currentTabLink.getAttribute('data-tab-name');
            _this.setState({
                dropdownCurHeight: _this.resizeDropdownHeightTo(currentTab),
                activeTabName: activeTabName,
                activeTabLinkName: activeTabName + "-link"
            });
        };
        /**
         * @param handleReferenceClick: Reference click handler; fetches recommended and required refs for clicked ref
         */
        _this.handleReferenceClick = function (e) {
            //i.e. if link is clicked, prevent click event for ref
            if (/extern-link/.test(e.target.className))
                return;
            var refID = e.currentTarget.dataset.id;
            //first set loading to true to visualize fadeout
            _this.setState({ refIsLoading: true });
            setTimeout(function () {
                var ref;
                for (var _i = 0, _a = _this.state.payload.refs; _i < _a.length; _i++) {
                    ref = _a[_i];
                    if (ref.id === refID) {
                        _this.setState({
                            refID: ref.id,
                            payload: ref
                        });
                        setTimeout(function () {
                            _this.setState({
                                refIsLoading: false,
                                historyExists: true,
                                dropdownCurHeight: _this.resizeDropdownHeightTo(_this.child_refs.activeTab.current)
                            });
                            //update history
                            _this.history.push(Object.assign({}, _this.state));
                            //delay till state payload is set before visualizing to avoid errors
                            setTimeout(function () { return _this.visualizeGraph(); }, 200);
                        }, 300);
                        break;
                    }
                    else
                        continue;
                }
            }, 300);
        };
        /**
         * @param goBackInTime: history navigation (time traveller) function; handles going back one depth on click of 'back button'
         */
        _this.goBackInTime = function () {
            var past, pastIndex = _this.history.length - 2, backInTime;
            if (pastIndex >= 0 && _this.history[pastIndex])
                _this.setState(function () {
                    past = _this.history[pastIndex];
                    backInTime = Object.assign({}, past);
                    return backInTime;
                });
            else {
                return _this.setState({ historyExists: false });
            }
            //remove/delete past future having travelled back in time
            _this.history.pop();
            //delay till state payload is set before visualizing to avoid errors
            setTimeout(function () { return _this.visualizeGraph(); }, 200);
        };
        /**
         * @param findNode: ReactDOM traverser function - querySelector; returns a DOM node
         */
        // findNode(parent: ReactInstance, childName?:string): any
        // {
        //   let DOMp: any = ReactDOM.findDOMNode(parent),
        //       queryAll: HTMLElement[] = DOMp.querySelectorAll(childName);
        //   if (childName)
        //     return queryAll[1] ? queryAll : DOMp.querySelector(childName);
        //   return DOMp;
        // }
        /**
         * @param setGraphNodesAndEdges: gets and pushes graph nodes and edges to network for visualization
         */
        _this.setGraphNodesAndEdges = function (_ref) {
            var themeCSS = _this.cssProps, ref = Object.assign({}, _ref), refHasParents = _ref.refs.length > 0 ? true : false, 
            //making a copy of refs (parents) to avoid modifying actual parents
            parents = _ref.refs.map(function (parent) { return Object.assign({}, parent); }), colors = {
                self: { bg: themeCSS.graphCurrentNodeBg, bdr: themeCSS.graphCurrentNodeBorderColor },
                required: { bg: themeCSS.graphParentNodesBg, bdr: themeCSS.graphParentNodesBorderColor },
                recommended: { bg: '#20dcff', bdr: '#10bcf0' },
                alien: { bg: '#c0c0c0', bdr: '#b0b0b0' },
                other: { bg: themeCSS.graphParentNodesBg, bdr: themeCSS.graphParentNodesBorderColor }
            };
            //returns object of node properties e.g. color, font, background, border etc.
            var nodeProps = function (_ref) {
                var color = {}, isCurrentRef = _ref.id === _this.state.refID;
                color.bg = colors.other.bg;
                color.bdr = colors.other.bdr;
                return {
                    font: {
                        size: 14,
                        face: 'Google Sans, Roboto Mono, Trebuchet MS',
                        color: isCurrentRef ? colors.self.bdr : color.bdr,
                        strokeWidth: 1,
                        strokeColor: _this.cssProps.dropdownBg
                    },
                    color: {
                        background: isCurrentRef ? colors.self.bg : color.bg,
                        border: isCurrentRef ? colors.self.bdr : color.bdr,
                        hover: {
                            background: _this.cssProps.dropdownBg,
                            border: isCurrentRef ? colors.self.bdr : color.bdr
                        },
                        highlight: {
                            border: isCurrentRef ? colors.self.bdr : color.bdr,
                            background: _this.cssProps.dropdownBg
                        }
                    },
                    shape: 'dot',
                    size: 16
                };
            };
            var pushNodesAndEdges = function () {
                // let parent: Payload;
                for (var _i = 0, parents_1 = parents; _i < parents_1.length; _i++) {
                    var parent_1 = parents_1[_i];
                    var _nodeProps = nodeProps(parent_1), nodeExists = false;
                    //prepare and push nodes for visualization. 
                    //PS: If parent (ref) doesn't already exist in network, push to network
                    for (var _a = 0, _b = _this.graph.nodes; _a < _b.length; _a++) {
                        var node = _b[_a];
                        if (node.id.replace(/.*\/(.*)/, '$1') === parent_1.id.replace(/.*\/(.*)/, '$1')) {
                            nodeExists = true;
                            break;
                        }
                    }
                    if (!nodeExists) {
                        _this.graph.nodes.unshift(Object.assign(__assign({ _id: parent_1.id, title: parent_1.data.title, label: parent_1.data.title.length > 10 ? parent_1.data.title.substr(0, 10).trim() + "..." : parent_1.data.title }, _nodeProps), parent_1));
                        //extract hashID part of refID
                        _this.graph.nodes[0].id = parent_1.id.replace(/.*\/(.*)/, '$1');
                    }
                    //prepare and push edges for visualization
                    _this.graph.edges.unshift({
                        from: ref.id.replace(/.*\/(.*)/, '$1'),
                        to: parent_1.id.replace(/.*\/(.*)/, '$1'),
                        arrows: {
                            to: {
                                enabled: true,
                                scaleFactor: 0.5
                            }
                        },
                        length: 120,
                        font: __assign({}, _nodeProps.font, { size: 9 }),
                        color: {
                            color: parent_1.ref_type === 'required' ? _this.cssProps.graphNetworkRequiredEdgeColor : _this.cssProps.graphNetworkRecommendedEdgeColor,
                            highlight: parent_1.ref_type === 'required' ? _this.cssProps.graphNetworkRequiredEdgeColor : _this.cssProps.graphNetworkRecommendedEdgeColor,
                            hover: parent_1.ref_type === 'required' ? _this.cssProps.graphNetworkRequiredEdgeColor : _this.cssProps.graphNetworkRecommendedEdgeColor
                        }
                    });
                    //QUOTE OF THE CENTURY: "To iterate is human, to recurse divine." - L. Peter Deutsch :D
                    _this.setGraphNodesAndEdges(parent_1);
                }
            };
            //i.e. if 'current' book (ref) has parents and itself has not yet been added to nodes (network), proceed to add
            if (refHasParents && !_this.graph.nodes.find(function (node) { return node.id.replace(/.*\/(.*)/, '$1') === ref.id.replace(/.*\/(.*)/, '$1'); })) {
                //first add current node (ref) to nodes before pushing other nodes to network
                _this.graph.nodes.unshift(Object.assign(__assign({ _id: ref.id, label: ref.data.title.replace(/\s(\w+|\d+)\s(\w+|\d+)/, ' $1\n$2') }, nodeProps(ref)), ref));
                //extract hashID part of refID
                _this.graph.nodes[0].id = ref.id.replace(/.*\/(.*)/, '$1');
                pushNodesAndEdges();
            }
            else if (refHasParents)
                pushNodesAndEdges();
        };
        /**
         * @param visualizeGraph: renders graph to DOM
         */
        _this.visualizeGraph = function () {
            _this.graph = {
                nodes: [],
                edges: []
            };
            _this.setGraphNodesAndEdges(_this.state.payload);
            //if no nodes exist (which implies no parent(s)), do not proceed to visualize graph to avoid errors
            if (_this.graph.nodes.length < 1)
                return;
            //create an array with nodes
            var nodes = new vis.DataSet(_this.graph.nodes), 
            //create an array with edges
            edges = new vis.DataSet(_this.graph.edges), container = _this.child_refs.graph.current, 
            //set graph data
            data = {
                nodes: nodes,
                edges: edges
            }, 
            //set graph options
            options = {
                nodes: { borderWidth: 1.5 },
                edges: {
                    color: { inherit: false }
                },
                interaction: { hover: true }
            }, 
            //create a network
            network = new vis.Network(container, data, options), graphTooltip = _this.child_refs.graphTooltip.current;
            var moveAndUpdateGraphTooltip = function (params) {
                //'params.node' implies event is triggered by node-hover event while 'params.nodes[0]' implies event is triggered by node-click event
                var label = !params.node ? params.nodes[0] : params.node, currentNode = _this.graph.nodes.find(function (node) { return label === node.id; }), authors = currentNode.data.authors, renderLink = "url: <a \n                          href='" + currentNode.url + "' \n                          target='_blank'\n                          rel='noopener noreferrer'\n                          style='color: white;'>" + currentNode.url + "</a>";
                authors = authors.length > 1 ? authors[0] + "..." : authors;
                graphTooltip.innerHTML =
                    currentNode.data.title + "<br />\n        <i style='font-size: 11px;'>\n          " + (!params.node ? authors : '') + "\n        </i>\n        <span style='font-size: 9px;'>\n          " + (!params.node ? currentNode._id : '') + "\n        </span>\n        <i style='font-size: 9px;'>" + (currentNode.url ? renderLink : '') + "</i>";
                graphTooltip.style.left = Math.ceil(params.pointer.DOM.x) - 10 + "px";
                graphTooltip.style.top = Math.ceil(params.pointer.DOM.y - (graphTooltip.offsetHeight - 10)) - 15 + "px";
            };
            //network nodes event listeners
            network.on('selectNode', function (params) {
                _this.setState({
                    graphNodeIsHovered: true,
                    graphNodeIsActive: true
                });
                console.log(params.event.center, '...', params.pointer);
                moveAndUpdateGraphTooltip(params);
            });
            network.on('deselectNode', function () {
                return _this.setState({
                    graphNodeIsHovered: false,
                    graphNodeIsActive: false
                });
            });
            network.on('hoverNode', function (params) {
                if (!_this.state.graphNodeIsActive) {
                    _this.setState({ graphNodeIsHovered: true });
                    moveAndUpdateGraphTooltip(params);
                }
            });
            network.on('blurNode', function () { return _this.setState({
                graphNodeIsHovered: _this.state.graphNodeIsActive ? true : false
            }); });
            network.on('dragStart', function () { return _this.setState({ graphNodeIsHovered: false }); });
            network.on('dragEnd', function () { return _this.setState({ graphNodeIsHovered: false }); });
            var graphIsZoomed = false, initialScale = _this.graph.nodes.length < 10 ? 0.85 : 0.55;
            network.on('zoom', function () {
                initialScale = network.getScale();
                _this.setState({ graphNodeIsHovered: false });
            });
            network.on('doubleClick', function () {
                if (!graphIsZoomed)
                    network.moveTo({ scale: initialScale + 0.5 });
                else
                    network.moveTo({ scale: initialScale });
                graphIsZoomed = !graphIsZoomed;
            });
            network.once('stabilized', function () { return network.moveTo({ scale: initialScale }); });
        };
        return _this;
    }
    /**
     * @param resizeDropdownHeightTo: Returns height of current activeTab, or 0 if 'dropdownIsCollapsed'; used to compute and set height of dropdown menu
     */
    Widget.prototype.resizeDropdownHeightTo = function (activeTab, constHeight) {
        if (constHeight === void 0) { constHeight = this.tabLinksWrapperheight; }
        //i.e. if the argument, activeTab, is an element and not a number (0)... PS: Add 2px for border-bottom extension
        return activeTab !== 0 ? (activeTab.offsetHeight + constHeight) + 2 : 0;
    };
    Widget.prototype.componentDidUpdate = function (p, nextProps) {
        var activeTabName = nextProps.activeTabName, dropdownIsCollapsed = nextProps.dropdownIsCollapsed, dropdownCurHeight = this.resizeDropdownHeightTo(this.child_refs.activeTab.current);
        if (!dropdownIsCollapsed)
            if (activeTabName !== this.state.activeTabName)
                this.setState({ dropdownCurHeight: dropdownCurHeight });
    };
    Widget.prototype.componentDidMount = function () {
        return __awaiter(this, void 0, void 0, function () {
            var activeTab, e_1, errMsg, appendDot, grammifiedErrMsg, googleFontCDN_1, awaitFontLoad;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        //check what device user is running
                        if (/(Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone)/i.test(window.navigator.userAgent))
                            this.isViewedWithMobile = true;
                        activeTab = this.child_refs.activeTab.current;
                        this.setState({ refIsLoading: true });
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, 4, 5]);
                        return [4 /*yield*/, fetch("http://" + this.serverHostURL + "/" + this.state.refID)
                                .then(function (response) { return response.json(); })
                                .then(function (data) {
                                //throw Error (i.e. do not proceed to try populating UI) if server returns an error [message]
                                if (Object.keys(data).includes('error'))
                                    throw new Error(data.error);
                                else {
                                    _this.setState({ payload: data });
                                    //using another setState method here to update dropdown height to activeTab-height after it has been populated to avoid setting a height of 0 assuming it's done in the previous setState method
                                    _this.setState({
                                        errOccurred: false,
                                        refIsLoading: false,
                                        dropdownCurHeight: !_this.state.dropdownIsCollapsed ? _this.resizeDropdownHeightTo(activeTab) : _this.state.dropdownCurHeight
                                    });
                                }
                                //delay till state payload is set before visualizing to avoid errors
                                setTimeout(function () { return _this.visualizeGraph(); }, 200);
                            })];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 3:
                        e_1 = _a.sent();
                        //TO-DO: delete this line in production
                        alert('Hi, there. \n\nLemma Chain GUI could not establish connection with server, hence, got hard-coded refs instead for testing purposes.\n\n- Godspower');
                        errMsg = String(e_1).replace(/(\w+)?error:/i, '').trim(), appendDot = errMsg.substr(-1) !== '.' ? errMsg + "." : errMsg, grammifiedErrMsg = appendDot.charAt(0).toUpperCase() + appendDot.substr(1);
                        this.setState({
                            //TO-DO: delete this line in production
                            payload: Get_HardCoded_Refs(),
                            //TO-DO: uncomment this line in production
                            // errOccurred: true,
                            errMsg: "" + grammifiedErrMsg,
                            refIsLoading: false
                        });
                        //HACK: The following setTimeout function is for a case where user toggles dropdown while Lemma Chain is still loading or fetching data and has not yet resolved
                        //PS: Delay till after above state props is set in order to correctly set dropdown height
                        setTimeout(function () {
                            _this.setState({
                                dropdownCurHeight: !_this.state.dropdownIsCollapsed ? _this.resizeDropdownHeightTo(activeTab) : _this.state.dropdownCurHeight
                            });
                            //TO-DO: delete this line in production
                            _this.visualizeGraph();
                        }, 200);
                        return [3 /*break*/, 5];
                    case 4:
                        //hide clipboard tool-tip if anywhere else on page/document is clicked
                        document.body.onclick = function (e) {
                            if (!/tool-tip|ref-identifier/.test(e.target.className))
                                _this.setState({ tooltipIsActive: false });
                        };
                        googleFontCDN_1 = document.getElementById('font-cdn');
                        awaitFontLoad = function () { return __awaiter(_this, void 0, void 0, function () {
                            var heightRef, maxHeight;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        _a.trys.push([0, , 2, 3]);
                                        return [4 /*yield*/, fetch("" + googleFontCDN_1.getAttribute('href'))];
                                    case 1:
                                        _a.sent();
                                        return [3 /*break*/, 3];
                                    case 2:
                                        heightRef = this.child_refs.refItemWrapper.current.offsetHeight, maxHeight = heightRef * (widgetconfig.widgetMaxNumOfRefsDisplayableAtOnce ) + 2 + "px";
                                        //using activeTab here instead of requiredTab since on component mount, requiredTab is activeTab, and also to prevent ref forwarding error
                                        this.child_refs.activeTab.current.style.maxHeight = maxHeight;
                                        this.child_refs.recommendedTab.current.style.maxHeight = maxHeight;
                                        //HACK: unset history initial (first state) dropdown height from 0 to current activeTab height to prevent dropdown from resizing to 0 on click of back button assuming history index is at 0 (first state).
                                        this.history[0].dropdownCurHeight = this.resizeDropdownHeightTo(this.child_refs.activeTab.current);
                                        this.history[0].dropdownIsCollapsed = false;
                                        return [7 /*endfinally*/];
                                    case 3: return [2 /*return*/];
                                }
                            });
                        }); };
                        awaitFontLoad();
                        //update history
                        this.history.push(Object.assign({}, this.state));
                        return [7 /*endfinally*/];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    Widget.prototype.render = function () {
        var toggleBarItemsContextProviderValue = {
            state: __assign({}, this.state),
            copyRefID: this.copyRefID,
            handleDropdownToggle: this.handleDropdownToggle,
            refs: __assign({}, this.child_refs)
        }, toggleBarLoaderContextProviderValue = {
            refIsLoading: this.state.refIsLoading,
            attributes: {
                size: 8,
                color: 'white',
                type: 'minor'
            }
        }, tabLinksContextProviderValue = {
            state: __assign({}, this.state),
            goBackInTime: this.goBackInTime,
            handleTabToggle: this.handleTabToggle,
            ref: this.child_refs.activeTabLink
        }, dropdownContextProviderValue = {
            state: __assign({}, this.state),
            ref: this.child_refs.dropdown
        }, tabsContextProviderValue = {
            state: __assign({}, this.state),
            refs: __assign({}, this.child_refs),
            handleReferenceClick: this.handleReferenceClick
        }, loaderContextProviderValue = {
            refIsLoading: this.state.refIsLoading,
            attributes: {
                size: 12,
                color: getCSSProps().themeBg,
                rider: this.state.payload.id ? 'Populating References...' : 'Loading References...',
                type: 'major',
                wrapperHeight: this.state.dropdownCurHeight - this.tabLinksWrapperheight
            }
        };
        return (React.createElement("div", { className: "widget " + (this.isViewedWithMobile ? 'isViewedWithMobile' : ''), style: { maxWidth: widgetconfig.widgetMaxWidth }, ref: this.widget },
            React.createElement(ToggleBarItemsContext.Provider, { value: toggleBarItemsContextProviderValue },
                React.createElement(LoaderContext.Provider, { value: toggleBarLoaderContextProviderValue },
                    React.createElement(ToggleBarItems, null,
                        React.createElement(Loader, null)))),
            React.createElement(DropdownContext.Provider, { value: dropdownContextProviderValue },
                React.createElement(TabLinksContext.Provider, { value: tabLinksContextProviderValue },
                    React.createElement(TabsContext.Provider, { value: tabsContextProviderValue },
                        React.createElement(LoaderContext.Provider, { value: loaderContextProviderValue },
                            React.createElement(Dropdown, null,
                                React.createElement(TabLinks, null),
                                React.createElement(Tabs, null,
                                    React.createElement(Loader, null)))))))));
    };
    return Widget;
}(React.Component));

export default Widget;
//# sourceMappingURL=lemma-chain-react.esm.js.map
