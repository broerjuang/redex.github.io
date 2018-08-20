webpackJsonp([0xc569381f0db1],{1100:function(e,n){e.exports={data:{package:{id:"reason-apollo",score:.5122731531124771,name:"reason-apollo",version:"0.5.8",description:"Using Apollo client 2 with Reason",keywords:["react","graphql","apollo"],license:"MIT",updated:"2018-01-15T14:03:33.400Z",stars:83,type:"published",quality:.41186920142516775,popularity:.1106068362426482,maintenance:1,readme:'<h1>Reason-apollo</h1>\n<p><a href="https://badge.fury.io/js/reason-apollo"><img src="https://badge.fury.io/js/reason-apollo.svg" alt="npm version"></a>\n<a href="http://www.apollostack.com/#slack"><img src="https://img.shields.io/badge/slack-join-orange.svg" alt="Get on Slack"></a></p>\n<p>Easily use the Apollo Client 2 with Reason</p>\n<h2>Install and setup</h2>\n<h4>Install</h4>\n<pre><code>yarn add reason-apollo\n\n# Add graphql_ppx\nopam install graphql_ppx\nyarn add --dev graphql_ppx\n</code></pre>\n<h4>bsconfig</h4>\n<p>Add <code>reason-apollo</code> to your <code>bs-dependencies</code> and\n<code>graphql_ppx/ppx</code> to your <code>ppx_flags</code></p>\n<p><strong>bsconfig.json</strong></p>\n<pre><code>"bs-dependencies": [\n  "reason-react",\n  "reason-apollo"\n],\n"ppx-flags": [\n    "graphql_ppx/ppx"\n]\n</code></pre>\n<h4>send introspection query</h4>\n<p>This will generate a <code>schema.json</code> which will be used to safely type your GraphQL queries/mutations.</p>\n<pre><code>yarn send-introspection-query http://my-api.example.com/api\n</code></pre>\n<h2>Usage</h2>\n<p> <a href="https://github.com/Gregoirevda/reason-apollo-test-usage">here</a> is a repository showing the usage of the package.</p>\n<h3>Create the Apollo Client</h3>\n<p> <strong>Apollo.re</strong></p>\n<pre><code class="language-reason">module InMemoryCache =\n ApolloInMemoryCache.CreateInMemoryCache(\n   {\n     type dataObject;\n     let inMemoryCacheObject = Js.Nullable.undefined;\n   }\n );\n\n/* Create an HTTP Link */\nmodule HttpLink =\n ApolloLinks.CreateHttpLink(\n   {\n     let uri = "http://localhost:3010/graphql";\n   }\n );\n\nmodule Client =\n ReasonApollo.CreateClient(\n   {\n     let apolloClient =\n       ReasonApollo.createApolloClient(\n         ~cache=InMemoryCache.cache,\n         ~link=from([|AuthLink.link, ErrorLink.link, HttpLink.link|]),\n         ()\n       );\n   }\n );\n</code></pre>\n<h2>Query</h2>\n<p>  <strong>MyComponent.re</strong></p>\n<pre><code class="language-reason">/* Create a GraphQL Query by using the graphql_ppx */ \nmodule PokemonQuery = [%graphql {|\n  query getPokemon($name: String!){\n      pokemon(name: $name) {\n          name\n      }\n  }\n|}]; \n\nmodule Query = Client.Instance.Query;\n\nlet make = (_children) => {\n/* ... */\nrender: (_) => {\n  let pokemonQuery = PokemonQuery.make(~name="Pikachu", ());\n  &#x3C;Query query=pokemonQuery>\n    (response => {\n      switch response {\n         | Loading => &#x3C;div> (Utils.ste("Loading")) &#x3C;/div>\n         | Failed(error) => &#x3C;div> (Utils.ste(error)) &#x3C;/div>\n         | Loaded(result) => &#x3C;div> (Utils.ste(result##user##name)) &#x3C;/div>\n    }})\n  &#x3C;/Query>\n}\n}\n</code></pre>\n<h2>Mutation</h2>\n<p>  <strong>MyMutation.re</strong></p>\n<pre><code class="language-reason">module PokemonMutation = [%graphql {|\n  mutation addPokemon($name: String!) {\n      addPokemon(name: $name) {\n          name\n      }\n  }\n|}];\n\nmodule Mutation = Client.Instance.Mutation;\n\nlet make = (_children) => {\n/* ... */\ninitialState: {\n  parse\n},\nreducer: (action, state) =>\n  switch (action) {\n  | AddParser(parse) => ReasonReact.Update({...state, parse})\n},\nrender: ({reduce, state: {parse}}) => {  \n  &#x3C;Mutation>\n    ((\n      mutate /* Mutation to call */, \n      result /* Result of your mutation */\n    ) => {\n        let mutationResponse = switch result {\n          | NotCalled => &#x3C;div>  (Utils.ste("Not Called")) &#x3C;/div>\n          | Loading => &#x3C;div> (Utils.ste("Loading")) &#x3C;/div>\n          | Loaded(response) => &#x3C;div> (Utils.ste(parse(result)##addPokemon##name ++ " addded")) &#x3C;/div>\n          | Failed(error) => &#x3C;div> (Utils.ste(error)) &#x3C;/div>\n        };\n      &#x3C;div>\n        &#x3C;button onClick=((_mouseEvent) => {\n            let pokemonMutation = PokemonMutation.make(~name="Reason", ());\n            mutate(pokemonMutation);\n            reduce(() => AddParser(pokemonMutation##parse), ());\n          })> \n          (Utils.ste("Add Pokemon")) \n        &#x3C;/button>\n        &#x3C;div> (mutationResponse) &#x3C;/div>\n      &#x3C;/div>\n    })\n  &#x3C;/Mutation>\n}\n}\n</code></pre>\n',homepageUrl:"https://github.com/apollographql/reason-apollo#readme",repositoryUrl:"https://github.com/apollographql/reason-apollo",npmUrl:"https://www.npmjs.com/package/reason-apollo",issuesUrl:"https://github.com/apollographql/reason-apollo/issues",slug:"packages/reason-apollo"}},pathContext:{id:"reason-apollo"}}}});
//# sourceMappingURL=path---packages-reason-apollo-bafb49621854995156d6.js.map