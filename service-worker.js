if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"c8fb62a916d0b9cb9efc191101801f14","url":"404.html"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"c8fb62a916d0b9cb9efc191101801f14","url":"index.html"},{"revision":"95b5daa68824d4589ee7830b7eddce9a","url":"precache-manifest.95b5daa68824d4589ee7830b7eddce9a.js"},{"revision":"546db5b682af321ded42a8b73a9aee9b","url":"static/css/30.93b3b32d.chunk.css"},{"revision":"3c42134b0a539deb527d838d2e701f63","url":"static/css/App.5735a40c.chunk.css"},{"revision":"bc3fce1a40e178aa5a9f93bab7b9e294","url":"static/js/0.45bd7df1.chunk.js"},{"revision":"e57c571d3c834b067574eb4b8b8b4d8e","url":"static/js/1.60b7bc57.chunk.js"},{"revision":"ccbb5ba13349946b0be270d67af24b79","url":"static/js/2.1ac683d1.chunk.js"},{"revision":"df677f7aa9e88e7bab9873fa92cc5ee7","url":"static/js/28.5036c1d5.chunk.js"},{"revision":"a479d62febb34cdb8c42d0d8c707cf3b","url":"static/js/29.c005c16a.chunk.js"},{"revision":"76bd50c1b9657025edfd390fbe634b01","url":"static/js/3.8a93180a.chunk.js"},{"revision":"e65a4b03f25ac54e0ef05130541c2d78","url":"static/js/30.ec8b591a.chunk.js"},{"revision":"403a365e3c88ca44730b831b4abb9f12","url":"static/js/31.b07ae853.chunk.js"},{"revision":"94aac9944f529acde711c50c37483d60","url":"static/js/32.094233f1.chunk.js"},{"revision":"7a97379f33d6b7dfa6df15e618fa93a4","url":"static/js/33.c1777eb5.chunk.js"},{"revision":"394f48a4b464b630904060bfc637c567","url":"static/js/34.3196d937.chunk.js"},{"revision":"9d52440f375bf52896b27532da9d6d0d","url":"static/js/35.32523349.chunk.js"},{"revision":"724a16bc0faa5c7cafa1a067b1e58b58","url":"static/js/36.7cc8c19b.chunk.js"},{"revision":"4ab5e6d9094d186eb4494175a1cb5a2a","url":"static/js/37.3a32d54e.chunk.js"},{"revision":"1c181cf9d04b1392e2a36bc8cf3265e1","url":"static/js/4.bcbea2c6.chunk.js"},{"revision":"426eab5f2cab1452c7b5dee5a02fc72c","url":"static/js/5.d02eba74.chunk.js"},{"revision":"d4760055825acf4951b3f91db1e0ad0e","url":"static/js/About.5f7f9286.chunk.js"},{"revision":"d836b11d944ba72e511e82b394b73203","url":"static/js/Actions.adf9270f.chunk.js"},{"revision":"1fbd8a5919bd9697f6f4b374df26e642","url":"static/js/App.b1a37eb5.chunk.js"},{"revision":"07a2736d1def603013547982e7ba093f","url":"static/js/Demographics.01633f57.chunk.js"},{"revision":"5b21c7afed5bd74396d912afedaeb82b","url":"static/js/Essentials.3b4ff1aa.chunk.js"},{"revision":"343251f3602f120523bddeef177acc2a","url":"static/js/Footer.da5f9e29.chunk.js"},{"revision":"daf6d9362474551d1b3a43cb0e9d1ab3","url":"static/js/Home.c52be6ea.chunk.js"},{"revision":"a14c914ae5a2abaa89670a69c58bd7f2","url":"static/js/LanguageSwitcher.616d3643.chunk.js"},{"revision":"2b2c2b176a66af544d4d2960f5e3f407","url":"static/js/Level.3cc2976c.chunk.js"},{"revision":"833c1c6062133321dc13e073bd6fccb7","url":"static/js/main.b44c68a2.chunk.js"},{"revision":"5d72d0be748885df2fef50601da679bd","url":"static/js/MapExplorer.f32df1cf.chunk.js"},{"revision":"7697f30519d68b354bdf26dc5cfe86a4","url":"static/js/MapVisualizer.6879090e.chunk.js"},{"revision":"100fd4d6b205338c57a4c2a0d3723c3c","url":"static/js/Minigraph.4d105f1e.chunk.js"},{"revision":"12f2d492115d15ba299ee6839b435035","url":"static/js/Row.36fcedbd.chunk.js"},{"revision":"83237c486d9bb4082b5ee15c423cdfa0","url":"static/js/runtime-main.f4f900bd.js"},{"revision":"439f3dabd7dcef05d954b13c7c2509f5","url":"static/js/Search.84a18a24.chunk.js"},{"revision":"578ddaec59fb077b52f24b7dca07465b","url":"static/js/State.8ea0fb8d.chunk.js"},{"revision":"d4b072da40ff7c25898d6a84f44310c1","url":"static/js/Table.162da408.chunk.js"},{"revision":"13f6dc6e81176c8505ff9a073b7b229a","url":"static/js/Timeline.8c66b7cc.chunk.js"},{"revision":"e9d55772459a7980c009cc546b447bd0","url":"static/js/TimeSeries.f8d7e800.chunk.js"},{"revision":"c3af2518142068ab7c81350c534c3c0b","url":"static/js/TimeSeriesExplorer.c11a2de9.chunk.js"},{"revision":"92ab9a5f76ae5fd7ef99b5a046ed8fb9","url":"static/js/Updates.962ce4ba.chunk.js"}]);

    /* custom cache rules */
    workbox.routing.registerRoute(
      new workbox.routing.NavigationRoute(
        new workbox.strategies.NetworkFirst({
          cacheName: 'PRODUCTION',
        })
      )
    );

    // Adding staleWhileRevalidate for all js files. Provide faster access from cache while revalidating in the background
    workbox.routing.registerRoute(
      /.*\.js$/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding staleWhileRevalidate for all html files
    workbox.routing.registerRoute(
      /.*\.html/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding staleWhileRevalidate for all css files
    workbox.routing.registerRoute(
      /.*\.css/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding networkFirst for all json data. In offline mode will be fetched from cache
    workbox.routing.registerRoute(
      new RegExp('https://api\\.covid19india\\.org/.*\\.json'),
      new workbox.strategies.NetworkFirst(),
      'GET'
    );
  } else {
    console.log('Workbox could not be loaded. Hence, no offline support.');
  }
}
