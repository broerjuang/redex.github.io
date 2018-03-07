webpackJsonp([0xbe8d076d0167],{1151:function(s,a){s.exports={data:{package:{id:"re-elm-app",stars:0,name:"re-elm-app",version:"1.1.1",category:"library",flags:["neglected"],platforms:["browser"],description:"A small Reason library for mounting an Elm app and subscribing to its ports. Very early and incomplete. Contributions welcome.",keywords:["development tools"],license:"MIT",updated:"2018-02-25T02:33:32.826Z",type:"published",score:.5121044222212047,quality:.5047992557048094,popularity:.03429198861215081,maintenance:.996178427130026,readme:'<h1 id="re-elm-app"><a href="#re-elm-app" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>re-elm-app</h1>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>yarn add re-elm-app</code></pre></div>\n<p>Then add</p>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>  <span class="hljs-string">"bs-dependencies"</span>: [<span class="hljs-string">"re-elm-app"</span>]</code></pre></div>\n<p>to your bsconfig.json.</p>\n<p>Then you can use it like this (assuming you have some webpack setup that can import Elm files like <a href="https://github.com/elm-community/elm-webpack-loader">elm-webpack-loader</a>):</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code>[@bs.<span class="hljs-keyword">module</span> <span class="hljs-string">"./Main.elm"</span>] external main : <span class="hljs-type">ElmApp</span>.unmounted = <span class="hljs-string">"Main"</span>;\n\n<span class="hljs-comment">/* These are just some example flags. It\'s just a json value */</span>\n<span class="hljs-keyword">let</span> flags =\n <span class="hljs-type">Js</span>.<span class="hljs-type">Dict</span>.fromList([\n   (<span class="hljs-string">"images"</span>, images),\n   (<span class="hljs-string">"publicUrl"</span>, publicUrl),\n   (<span class="hljs-string">"user"</span>, userJson)\n ]);\n\n<span class="hljs-comment">/* Mount the app, and then you can subscribe to its ports. Here the callbacks specified below are just functions (not shown in this example) which take Js.Json.t and return unit. */</span>\n<span class="hljs-type">ElmApp</span>.mount(<span class="hljs-string">"#root"</span>, flags, main)\n|&gt; <span class="hljs-type">ElmApp</span>.subscribeToPort(<span class="hljs-string">"log_"</span>, onElmLog)\n|&gt; <span class="hljs-type">ElmApp</span>.subscribeToPort(<span class="hljs-string">"toJS"</span>, onElmMsg)</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">external</span> main : <span class="hljs-type">ElmApp</span>.unmounted = <span class="hljs-string">"Main"</span>[@@bs.<span class="hljs-keyword">module</span> <span class="hljs-string">"./Main.elm"</span>]\n<span class="hljs-keyword">let</span> flags =\n  <span class="hljs-type">Js</span>.<span class="hljs-type">Dict</span>.fromList\n    [(<span class="hljs-string">"images"</span>, images); (<span class="hljs-string">"publicUrl"</span>, publicUrl); (<span class="hljs-string">"user"</span>, userJson)]\n<span class="hljs-keyword">let</span> _ =\n  ((<span class="hljs-type">ElmApp</span>.mount <span class="hljs-string">"#root"</span> flags main) |&gt;\n     (<span class="hljs-type">ElmApp</span>.subscribeToPort <span class="hljs-string">"log_"</span> onElmLog))\n    |&gt; (<span class="hljs-type">ElmApp</span>.subscribeToPort <span class="hljs-string">"toJS"</span> onElmMsg)</code></pre>\n      </div>\n    </div>\n  \n',homepageUrl:"https://github.com/bloom/re-elm-app#readme",repositoryUrl:"https://github.com/bloom/re-elm-app",npmUrl:"https://www.npmjs.com/package/re-elm-app",issuesUrl:"https://github.com/bloom/re-elm-app/issues",slug:"/package/re-elm-app"}},pathContext:{id:"re-elm-app"}}}});
//# sourceMappingURL=path---package-re-elm-app-6ef69271c177d6f18d1b.js.map