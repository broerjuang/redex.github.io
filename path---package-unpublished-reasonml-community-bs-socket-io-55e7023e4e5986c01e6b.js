webpackJsonp([0x6334fea7a392],{1214:function(e,o){e.exports={data:{package:{id:"unpublished/reasonml-community/bs-socket.io",stars:6,name:"reasonml-community/bs-socket.io",version:"0.1.0",category:"binding",flags:["neglected"],platforms:["browser","node"],description:"socket.io in Reason",keywords:["real-time communication"],license:null,updated:"2018-02-20T15:38:17.642Z",type:"unpublished",score:0,quality:0,popularity:0,maintenance:0,readme:'<h2 id="bs-socketio"><a href="#bs-socketio" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-socket.io</h2>\n<p>Simple bindings to <a href="https://socket.io/">socket.io</a>.</p>\n<p>To build everything run <code>npm run build</code> and to run the demo run <code>npm run run</code> and go to <code>localhost:3000</code> on two tabs. You can send messages back and forth!</p>\n<h1 id="couple-gotchas"><a href="#couple-gotchas" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Couple Gotchas</h1>\n<p>There are a couple differences between the JS API and this one.</p>\n<ul>\n<li>There are no methods, just functions that take as first parameter the object on which they interact. ie: <code>socket.emit("bla", 10)</code> is <code>Server.emit socket "bla" 10</code> in Reason.</li>\n<li><code>Server.Server</code> <code>Client.Client</code> and <code>Namespace.Namespace</code> are functors, meaning that they\'ll take a module that contains 2 things: a type called <code>t</code>, a function called <code>stringify</code>. This allows ocaml to typecheck the messages that you send back and forth between the server and the client. ie: you can only listen to / send messages that the server can listen to / send too.</li>\n<li><code>Server.emit</code> is different from <code>Server.Socket.emit</code>. The former emits to all connected peers while the latter emits to the given peer.</li>\n<li>Instead of <code>io.sockets</code> there is <code>Namespace.default io</code> which does the same thing.</li>\n<li>Instead of <code>io.of</code> there is <code>Namespace.of_ io</code> which does the same thing. (<code>of</code> is a Reason keyword)</li>\n<li>All functions that are overloaded have different names depending on what you\'re passing. There\'s <code>Server.create</code> but also <code>Server.createWithHtpp</code> (see example) among others.</li>\n</ul>\n',homepageUrl:null,repositoryUrl:"https://github.com/reasonml-community/bs-socket.io",npmUrl:null,issuesUrl:null,slug:"/package/unpublished/reasonml-community/bs-socket.io"}},pathContext:{id:"unpublished/reasonml-community/bs-socket.io"}}}});
//# sourceMappingURL=path---package-unpublished-reasonml-community-bs-socket-io-55e7023e4e5986c01e6b.js.map