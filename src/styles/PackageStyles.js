// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';

var Css          = require("bs-css/src/Css.js");
var Curry        = require("bs-platform/lib/js/curry.js");
var Theme        = require("./Theme.js");
var CommonStyles = require("./CommonStyles.js");

var root = Css.style(/* :: */[
      Css.marginBottom(Css.em(1.45)),
      /* [] */0
    ]);

var header = Css.style(/* :: */[
      Css.unsafe("label", "header"),
      /* :: */[
        Css.backgroundColor(Theme.Inverted[/* Color */0][/* background */0]),
        /* :: */[
          Css.color(Theme.Inverted[/* Color */0][/* text */1]),
          /* :: */[
            Css.unsafe("padding", "2em 4em"),
            /* :: */[
              Css.media("(max-width: 900px)", /* :: */[
                    Css.unsafe("padding", "1em 2em"),
                    /* [] */0
                  ]),
              /* [] */0
            ]
          ]
        ]
      ]
    ]);

var props = Css.style(/* :: */[
      Css.display(/* Flex */3),
      /* :: */[
        Css.justifyContent(/* FlexEnd */1),
        /* :: */[
          Css.alignItems(/* Baseline */4),
          /* :: */[
            Css.selector("& > *", /* :: */[
                  Css.marginLeft(Css.em(1)),
                  /* [] */0
                ]),
            /* [] */0
          ]
        ]
      ]
    ]);

var title = Css.style(/* :: */[
      Css.unsafe("padding", "1em 0 0"),
      /* :: */[
        Css.display(/* Flex */3),
        /* :: */[
          Css.alignItems(/* Baseline */4),
          /* [] */0
        ]
      ]
    ]);

var owner = Css.style(/* :: */[
      Css.display(/* Block */0),
      /* :: */[
        Css.opacity(0.75),
        /* :: */[
          Css.fontSize(Css.em(0.85)),
          /* :: */[
            Css.unsafe("fontVariant", "small-caps"),
            /* [] */0
          ]
        ]
      ]
    ]);

var name = Css.style(/* :: */[
      Css.fontSize(Css.rem(1.5)),
      /* :: */[
        Css.fontWeight(/* Bold */1),
        /* :: */[
          Css.textDecorationLine(/* None */0),
          /* :: */[
            Css.lineHeight(Css.em(1.45)),
            /* :: */[
              Css.selector("&:hover", /* :: */[
                    Css.textDecorationLine(/* Values */[/* :: */[
                            /* Underline */0,
                            /* [] */0
                          ]]),
                    /* [] */0
                  ]),
              /* [] */0
            ]
          ]
        ]
      ]
    ]);

var fields = Css.style(/* [] */0);

var description = Css.style(/* :: */[
      Css.marginBottom(Css.em(0.5)),
      /* :: */[
        Css.unsafe("textOverflow", "ellipsis"),
        /* :: */[
          Css.overflow(/* Hidden */1),
          /* :: */[
            Css.opacity(0.75),
            /* [] */0
          ]
        ]
      ]
    ]);

var tags = Css.style(/* :: */[
      Css.selector("& span", /* :: */[
            Css.fontSize(Css.em(0.85)),
            /* :: */[
              Css.backgroundColor(Theme.Inverted[/* Color */0][/* block */2]),
              /* :: */[
                Css.unsafe("padding", "0 1ex"),
                /* :: */[
                  Css.opacity(1),
                  /* :: */[
                    Css.selector("&:hover", /* :: */[
                          Css.backgroundColor(Theme.Inverted[/* Color */0][/* highlightedBlock */3]),
                          /* :: */[
                            Css.cursor(/* Pointer */5),
                            /* [] */0
                          ]
                        ]),
                    /* [] */0
                  ]
                ]
              ]
            ]
          ]),
      /* [] */0
    ]);

var tagsIcon = Css.style(/* :: */[
      Css.opacity(0.25),
      /* [] */0
    ]);

var right = Css.style(/* :: */[
      Css.textAlign(/* Right */2),
      /* [] */0
    ]);

var updated = Css.style(/* :: */[
      Css.fontSize(Css.em(0.85)),
      /* :: */[
        Css.unsafe("whiteSpace", "nowrap"),
        /* [] */0
      ]
    ]);

var license = Css.style(/* :: */[
      Css.fontSize(Css.em(0.85)),
      /* :: */[
        Css.unsafe("whiteSpace", "nowrap"),
        /* :: */[
          Css.border(Css.px(1), /* Solid */2, Theme.Inverted[/* Color */0][/* text */1]),
          /* :: */[
            Css.unsafe("padding", "0 1ex"),
            /* [] */0
          ]
        ]
      ]
    ]);

var nolicense = Css.style(/* :: */[
      Css.color(Theme.Color[/* bad */7]),
      /* :: */[
        Css.fontSize(Css.em(0.85)),
        /* :: */[
          Css.unsafe("whiteSpace", "nowrap"),
          /* :: */[
            Css.fontWeight(/* Bold */1),
            /* :: */[
              Css.backgroundColor(Theme.Inverted[/* Color */0][/* text */1]),
              /* :: */[
                Css.unsafe("padding", "0 1ex"),
                /* :: */[
                  Css.unsafe("borderRadius", "1.4ex"),
                  /* [] */0
                ]
              ]
            ]
          ]
        ]
      ]
    ]);

var stars = Css.style(/* :: */[
      Css.fontSize(Css.em(0.85)),
      /* :: */[
        Css.unsafe("whiteSpace", "nowrap"),
        /* [] */0
      ]
    ]);

var starIcon = Css.style(/* :: */[
      Css.marginLeft(Css.em(0.25)),
      /* :: */[
        Css.transform(Css.translateY(Css.px(-1))),
        /* :: */[
          Css.opacity(0.5),
          /* [] */0
        ]
      ]
    ]);

var links = Css.style(/* :: */[
      Css.label("links"),
      /* :: */[
        Css.marginTop(Css.em(3)),
        /* :: */[
          Css.selector("& > a", /* :: */[
                Css.display(/* InlineBlock */11),
                /* :: */[
                  Css.textDecorationLine(/* None */0),
                  /* :: */[
                    Css.marginRight(Css.em(2)),
                    /* :: */[
                      Css.unsafe("fontVariant", "small-caps"),
                      /* :: */[
                        Css.media("(max-width: 450px)", /* :: */[
                              Css.marginRight(Css.em(1)),
                              /* [] */0
                            ]),
                        /* :: */[
                          Css.selector("&:hover", /* :: */[
                                Css.textDecorationLine(/* Values */[/* :: */[
                                        /* Underline */0,
                                        /* [] */0
                                      ]]),
                                /* [] */0
                              ]),
                          /* :: */[
                            Css.selector("&:not([href])", /* :: */[
                                  Css.textDecorationLine(/* None */0),
                                  /* :: */[
                                    Css.opacity(0.25),
                                    /* [] */0
                                  ]
                                ]),
                            /* [] */0
                          ]
                        ]
                      ]
                    ]
                  ]
                ]
              ]),
          /* [] */0
        ]
      ]
    ]);

var readme = Curry._1(Css.merge, /* :: */[
      CommonStyles.html,
      /* :: */[
        Css.style(/* :: */[
              Css.backgroundColor(Theme.Panel[/* Color */0][/* background */0]),
              /* :: */[
                Css.unsafe("padding", "2em 4em"),
                /* :: */[
                  Css.media("(max-width: 900px)", /* :: */[
                        Css.unsafe("padding", "1em 2em"),
                        /* [] */0
                      ]),
                  /* [] */0
                ]
              ]
            ]),
        /* [] */0
      ]
    ]);

exports.root        = root;
exports.header      = header;
exports.props       = props;
exports.title       = title;
exports.owner       = owner;
exports.name        = name;
exports.fields      = fields;
exports.description = description;
exports.tags        = tags;
exports.tagsIcon    = tagsIcon;
exports.right       = right;
exports.updated     = updated;
exports.license     = license;
exports.nolicense   = nolicense;
exports.stars       = stars;
exports.starIcon    = starIcon;
exports.links       = links;
exports.readme      = readme;
/* root Not a pure module */
