// Generated by BUCKLESCRIPT VERSION 2.2.0, PLEASE EDIT WITH CARE
'use strict';

var Tag = require("./Tag.js");
var Icon = require("../bindings/Icon.js");
var Link = require("../bindings/gatsby/link.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Flags = require("./Flags.js");
var Score = require("./Score.js");
var React = require("react");
var Vrroom = require("vrroom/src/Vrroom.bs.js");
var TimeAgo = require("../bindings/TimeAgo.js");
var Version = require("./Version.js");
var Platforms = require("./Platforms.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var TypedGlamor = require("typed-glamor/src/TypedGlamor.bs.js");
var PackageSummaryStyles = require("./PackageSummaryStyles.js");

var component = ReasonReact.statelessComponent("PackageSummary");

function make($$package, _) {
  var newrecord = component.slice();
  newrecord[/* render */9] = (function () {
      var match = $$package.stars;
      var match$1 = $$package.license;
      var description = $$package.description;
      var tmp = description === "" ? Vrroom.nbsp : Vrroom.text(description);
      return React.createElement("div", {
                  className: TypedGlamor.toString(PackageSummaryStyles.root(+($$package.flags.length > 0)))
                }, React.createElement("header", {
                      className: TypedGlamor.toString(PackageSummaryStyles.header)
                    }, ReasonReact.element(/* None */0, /* None */0, Link.make($$package.slug, /* Some */[TypedGlamor.toString(PackageSummaryStyles.name)], /* None */0, /* array */[Vrroom.text($$package.name)])), ReasonReact.element(/* None */0, /* None */0, Version.make($$package.version, +($$package.type === "published"), /* array */[])), ReasonReact.element(/* None */0, /* None */0, Platforms.make($$package.platforms, /* array */[])), React.createElement("div", {
                          className: TypedGlamor.toString(PackageSummaryStyles.props)
                        }, React.createElement("span", {
                              className: TypedGlamor.toString(PackageSummaryStyles.stars)
                            }, (match == null) ? Vrroom.text("-") : Vrroom.text(match), ReasonReact.element(/* None */0, /* None */0, Icon.Star[/* make */0](/* Some */[PackageSummaryStyles.starIcon], /* array */[]))), ReasonReact.element(/* None */0, /* None */0, Score.make($$package, /* array */[])), (match$1 == null) ? React.createElement("span", {
                                className: TypedGlamor.toString(PackageSummaryStyles.nolicense)
                              }, Vrroom.text("No license")) : React.createElement("span", {
                                className: TypedGlamor.toString(PackageSummaryStyles.license)
                              }, Vrroom.text(match$1)), React.createElement("span", {
                              className: TypedGlamor.toString(PackageSummaryStyles.updated)
                            }, ReasonReact.element(/* None */0, /* None */0, TimeAgo.make($$package.updated, /* array */[]))))), React.createElement("div", {
                      className: TypedGlamor.toString(PackageSummaryStyles.description)
                    }, ReasonReact.element(/* None */0, /* None */0, Flags.make($$package, /* None */0, /* array */[])), tmp), React.createElement("div", {
                      className: TypedGlamor.toString(PackageSummaryStyles.tags)
                    }, ReasonReact.element(/* None */0, /* None */0, Icon.Tags[/* make */0](/* Some */[TypedGlamor.toString(PackageSummaryStyles.tagsIcon)], /* array */[])), ReasonReact.element(/* None */0, /* None */0, Tag.Category[/* make */2]($$package.category, /* array */[])), ReasonReact.element(/* None */0, /* None */0, Curry._3(Vrroom.Control[/* Map */0][/* make */1], $$package.keywords, /* None */0, (function (keyword) {
                                return ReasonReact.element(/* Some */[keyword], /* None */0, Tag.Keyword[/* make */1](keyword, /* array */[]));
                              })))));
    });
  return newrecord;
}

var Styles = 0;

exports.Styles = Styles;
exports.component = component;
exports.make = make;
/* component Not a pure module */
