webpackJsonp([0xcf0ba9164c5c],{946:function(s,e){s.exports={data:{package:{id:"bs-axios",updated:"2017-12-09T04:48:34.460Z",name:"bs-axios",version:"0.0.21",description:"Bucklesript bindings to axios",keywords:["axios","bucklescript","bsb","reason","reason","ocaml","bs-axios","bs-platform"],license:"MIT",type:"published",stars:9,readme:'<h1>bs-axios <a href="https://www.npmjs.com/package/bs-axios"><img src="https://img.shields.io/npm/v/bs-axios.svg?style=flat-square" alt="npm version"></a></h1>\n<p>Bucklescript bindings for axios</p>\n<h1>Installation</h1>\n<ol>\n<li>Install bs-axios</li>\n</ol>\n<pre><code class="language-bash">$ yarn add bs-axios\n</code></pre>\n<p>or</p>\n<pre><code class="language-bash">$ npm install --save bs-axios\n</code></pre>\n<ol start="2">\n<li>Add "bs-axios" to "bs-dependencies" section of <code>bsconfig.json</code></li>\n</ol>\n<h1>Examples</h1>\n<h2>Simple request</h2>\n<pre><code class="language-reason">Js.Promise.(\n  Axios.get("/user?ID=12345")\n  |> then_((resp) => resolve(Js.log(resp##data)))\n  |> catch((err) => resolve(Js.log(err)))\n);\n</code></pre>\n<h2>Concurrency</h2>\n<pre><code class="language-reason">Js.Promise.(\n  Axios.all2((Axios.get("/users/1"), Axios.get("/users/1/friends")))\n  |> then_(((user, friends)) => resolve(Js.log2(user##data, friends##data)))\n  |> catch((err) => resolve(Js.log(err)))\n);\n</code></pre>\n',homepageUrl:"https://github.com/meafmira/bs-axios#readme",repositoryUrl:"https://github.com/meafmira/bs-axios",npmUrl:"https://www.npmjs.com/package/bs-axios",issuesUrl:"https://github.com/meafmira/bs-axios/issues",slug:"packages/bs-axios"}},pathContext:{id:"bs-axios"}}}});
//# sourceMappingURL=path---packages-bs-axios-0a1dfbf6c552636b697e.js.map