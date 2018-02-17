webpackJsonp([0x7f2eed864ada],{1152:function(e,t){e.exports={data:{package:{id:"reason-nact",stars:47,name:"reason-nact",version:"1.4.6",category:"binding",flags:[],platforms:["node"],description:"let reason-nact = (node.js, reason, actors) ⇒ your µ services have never been so typed",keywords:["async"],license:"Apache-2.0",updated:"2018-02-13T14:31:33.657Z",type:"published",score:.6627599322297917,quality:.9627288416356213,popularity:.06840365639744389,maintenance:1,readme:'<p><img src="https://raw.githubusercontent.com/ncthbrt/nact/master/assets/logo.svg?sanitize=true" alt="nact Logo"></p>\n<p><strong>let reason-nact = (node.js, reason, actors) ⇒ your µ services have never been so typed</strong></p>\n<!-- Badges -->\n<p><a href=""><img src="https://img.shields.io/travis/ncthbrt/reason-nact/master.svg?style=flat-square" alt="Travis branch"></a>\n<a href=""><img src="https://img.shields.io/coveralls/ncthbrt/reason-nact.svg?style=flat-square" alt="Coveralls"></a> <a href="https://david-dm.org/ncthbrt/reason-nact"><img src="https://david-dm.org/ncthbrt/nact.svg?branch=master&#x26;style=flat-square" alt="Dependencies"></a> </p>\n<p><a href="https://www.npmjs.com/package/reason-nact"><img src="https://img.shields.io/npm/v/nact.svg?style=flat-square" alt="npm"></a> <a href="https://www.reactivemanifesto.org/"><img src="https://img.shields.io/badge/we_are-reactive-blue.svg?style=flat-square" alt="we are reactive"></a></p>\n<p>Any and all feedback, comments and suggestions are welcome. Please open an issue if you find anything unclear or misleading in the documentation. </p>\n<p>This is the repository for the ReasonML bindings for nact. If you\'d like to view the javascript implementation, please head to <a href="https://github.com/ncthbrt/nact">https://github.com/ncthbrt/nact</a></p>\n<h1 id="sponsored-by"><a href="#sponsored-by" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Sponsored by</h1>\n<p><a href="https://root.co.za"><img src="https://raw.githubusercontent.com/ncthbrt/nact/master/root-logo.svg?sanitize=true" alt="Root Logo"></a>\n<a href="https://app.fossa.io/projects/git%2Bgithub.com%2Fncthbrt%2Freason-nact?ref=badge_shield"><img src="https://app.fossa.io/api/projects/git%2Bgithub.com%2Fncthbrt%2Freason-nact.svg?type=shield" alt="FOSSA Status"></a></p>\n<h2 id="nact-is-redux-but-for-the-server"><a href="#nact-is-redux-but-for-the-server" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Nact is redux but for the server</h2>\n<p>Servers today are very different from those even 10 years ago. So why are we still programming like it\'s the 90s?</p>\n<p>Inspired by the approaches taken by Akka and Erlang, nact is an open source Node.js framework which enables you to take control of your state to:</p>\n<ul>\n<li>more effectively use memory</li>\n<li>improve application resiliance</li>\n<li>increase performance</li>\n<li>reduce coupling </li>\n</ul>\n<p>With out of the box support for event sourcing, and a considered implementation of the actor model, nact can work across a wide variety of domains.</p>\n<p>Nact is no silver bullet, but it is evolving to tackle ever more demanding use cases. Perhaps one of them is yours?</p>\n<h2 id="getting-started"><a href="#getting-started" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Getting started</h2>\n<p>Run <code>npm install --save reason-nact</code> and add <code>reason-nact</code> to the <code>bs-dependencies</code> in <code>bsconfig.json</code>. </p>\n<p>Full documentation at <a href="https://nact.io">https://nact.io</a></p>\n<h2 id="license"><a href="#license" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>License</h2>\n<p><a href="https://app.fossa.io/projects/git%2Bgithub.com%2Fncthbrt%2Freason-nact?ref=badge_large"><img src="https://app.fossa.io/api/projects/git%2Bgithub.com%2Fncthbrt%2Freason-nact.svg?type=large" alt="FOSSA Status"></a></p>\n',homepageUrl:"https://github.com/ncthbrt/reason-nact#readme",repositoryUrl:"https://github.com/ncthbrt/reason-nact",npmUrl:"https://www.npmjs.com/package/reason-nact",issuesUrl:"http://github.com/ncthbrt/reason-nact/issues",slug:"/package/reason-nact"}},pathContext:{id:"reason-nact"}}}});
//# sourceMappingURL=path---package-reason-nact-3eb9bd1f354ef40cee14.js.map