webpackJsonp([0xc4ef91efcc57],{1051:function(e,t){e.exports={data:{package:{id:"bs-moment",stars:14,name:"bs-moment",version:"0.2.3",category:"binding",flags:["neglected"],platforms:["browser","node"],description:"BuckleScript bindings for Moment.js",keywords:["date/time manipulation"],license:"MIT",updated:"2018-02-08T04:23:14.000Z",type:"published",score:.6305854975620049,quality:.8437204709724486,popularity:.07958029800567344,maintenance:.9989035770522416,readme:'<h1 id="bs-moment"><a href="#bs-moment" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-moment</h1>\n<p><a href="https://travis-ci.org/reasonml-community/bs-moment"><img src="https://travis-ci.org/reasonml-community/bs-moment.svg?branch=master" alt="Build Status"></a>\n<a href="https://www.npmjs.com/package/bs-moment"><img src="https://img.shields.io/npm/v/bs-moment.svg" alt="npm"></a></p>\n<p><a href="https://github.com/bloomberg/bucklescript">BuckleScript</a> bindings for <a href="https://momentjs.com/">Moment.js</a>.</p>\n<h2 id="status"><a href="#status" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Status</h2>\n<p>This package is still 🚧 WIP 🚧, but new bindings are added <em>as needed</em> instead of actively. Feel free to create an issue or PR if you find anything missing.</p>\n<h2 id="mutations"><a href="#mutations" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Mutations</h2>\n<p>This binding takes an opinionated approach to mutations, e.g. <code>moment().add</code>, <code>moment().startOf</code>, and bind them with names like <code>mutableAdd</code> and <code>mutableStartOf</code>. To compensate that, there\'s an immutable version named <code>add</code> and <code>startOf</code> which takes a <code>moment().clone</code> first before applying the mutations.</p>\n<h2 id="deprecations"><a href="#deprecations" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Deprecations</h2>\n<p>Deprecated methods (e.g. <code>moment().days</code> in favor of <code>moment().day</code>) are not included in this binding.</p>\n',homepageUrl:"https://github.com/BuckleTypes/bs-moment#readme",repositoryUrl:"https://github.com/BuckleTypes/bs-moment",npmUrl:"https://www.npmjs.com/package/bs-moment",issuesUrl:"https://github.com/BuckleTypes/bs-moment/issues",slug:"/package/bs-moment"}},pathContext:{id:"bs-moment"}}}});
//# sourceMappingURL=path---package-bs-moment-fc46084de57e04d9cfdf.js.map