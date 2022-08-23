/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "fbad0a5c64d5e7b72760251c23439865"
  },
  {
    "url": "assets/css/0.styles.5153e68f.css",
    "revision": "d41e31bd5842a7e5326fc8836fee8fef"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.0d738d6c.js",
    "revision": "31a03198931721047f736ef3353b40b4"
  },
  {
    "url": "assets/js/11.eb3fcb42.js",
    "revision": "5ad9decaf7b8515ed0f63c3a0808a8de"
  },
  {
    "url": "assets/js/12.e9b297c5.js",
    "revision": "02be075fbc68dd81b298aa8d1e82572f"
  },
  {
    "url": "assets/js/13.9d2bca77.js",
    "revision": "4ab4a288c8d25757f850cd94e208ea51"
  },
  {
    "url": "assets/js/2.bc14f2d3.js",
    "revision": "8ce1648a11abc87ad410b56d3ff01e54"
  },
  {
    "url": "assets/js/3.563b1c3d.js",
    "revision": "9516ddf9836d2d00931be108138f4fbb"
  },
  {
    "url": "assets/js/4.f6e750c0.js",
    "revision": "f9493214d2e2f4d0231a49fa05d4eed6"
  },
  {
    "url": "assets/js/5.1e3618f4.js",
    "revision": "598560d3daf7a74c8064fbbd0756b044"
  },
  {
    "url": "assets/js/6.4e584f87.js",
    "revision": "43e5899d0093b7e85d13f5dad0e1b57b"
  },
  {
    "url": "assets/js/7.0ec5f02d.js",
    "revision": "34940fa2caa5c58f5bff76ae0ee3151a"
  },
  {
    "url": "assets/js/8.77f70a04.js",
    "revision": "ceb1177078fddec59d229441b9c731d3"
  },
  {
    "url": "assets/js/9.5bb9b6ab.js",
    "revision": "0da2338c152d859cbe7755f91b3d04fd"
  },
  {
    "url": "assets/js/app.5f1b33b6.js",
    "revision": "6162d106acbaecc25e0c61de1fc7e065"
  },
  {
    "url": "CCopyBoard.js",
    "revision": "3ea95dab42a22fb61bb352d3a5a6de4e"
  },
  {
    "url": "example.html",
    "revision": "848a1279052a534879fca66dff5f0d06"
  },
  {
    "url": "gengwiki/index.html",
    "revision": "b38aeb4c3e164ba3a17457c2067c2029"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "054cdcb38fb5785df0139b73d1a3bcf2"
  },
  {
    "url": "icons/logo.png",
    "revision": "29742dfda52887bdde221babe66556d9"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "18db672a6ec0bd6f913c824deaa60a65"
  },
  {
    "url": "icons/photo.png",
    "revision": "29742dfda52887bdde221babe66556d9"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "c86c03e60c362770d521f4e4890ee964"
  },
  {
    "url": "index.html",
    "revision": "ede76799e7db1d63cca0226b4ab98cd9"
  },
  {
    "url": "organize/index.html",
    "revision": "b2d53f4e6a6215cdd0ef73b47edd70a4"
  },
  {
    "url": "playerin/index.html",
    "revision": "6a7604f6db3a966b7771b934391bdb36"
  },
  {
    "url": "start.html",
    "revision": "68ea4748cd1028b26f2ea42e024fb864"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
