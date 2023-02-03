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
    "revision": "e948c846a4570311794f2b09f04470f2"
  },
  {
    "url": "assets/css/0.styles.6ea53a06.css",
    "revision": "1111f86616afb7638c28f1c5fe683ebc"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.1bfe890f.js",
    "revision": "5b161d6b8a508ec51ada2e5e2378d01f"
  },
  {
    "url": "assets/js/11.8e9b16f2.js",
    "revision": "7a077457f1c707666a993bb11e62b5ca"
  },
  {
    "url": "assets/js/12.51ba4184.js",
    "revision": "b2fef693060904cd8d4a89bae5ba4920"
  },
  {
    "url": "assets/js/13.9879a26d.js",
    "revision": "4a4bc6beaeef3c5ecc1c5bc5bbc6a67c"
  },
  {
    "url": "assets/js/2.eecb3eb9.js",
    "revision": "7367fc56413ae38c67602376ba909c94"
  },
  {
    "url": "assets/js/3.5e0026bb.js",
    "revision": "a4c68ba5089a3c6ce966c5ea75d0783d"
  },
  {
    "url": "assets/js/4.20244b06.js",
    "revision": "f3aff840bbe4c08176cda428943a77db"
  },
  {
    "url": "assets/js/5.ac6c9d80.js",
    "revision": "a81ac83ea2abae425d7692895d339bec"
  },
  {
    "url": "assets/js/6.e7ab7c5f.js",
    "revision": "94bd8f7c14b424404dcbf8133815e335"
  },
  {
    "url": "assets/js/7.03710f98.js",
    "revision": "1098c84cb91551afc8860a805500cabf"
  },
  {
    "url": "assets/js/8.84066c2e.js",
    "revision": "baf9a4f6060afb6010c2e67db33f525e"
  },
  {
    "url": "assets/js/9.6f7e25f9.js",
    "revision": "b341332cb5a0657d27e07b08652fe306"
  },
  {
    "url": "assets/js/app.ecd5a55e.js",
    "revision": "b15f7f5d38c79cc806ce44186cd76794"
  },
  {
    "url": "CCopyBoard.js",
    "revision": "29b9ad2ced444c88795a0b6a0a11fb6c"
  },
  {
    "url": "example.html",
    "revision": "c94d4465d3d1206d6e67e1b255d1bb5b"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "054cdcb38fb5785df0139b73d1a3bcf2"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "18db672a6ec0bd6f913c824deaa60a65"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "c86c03e60c362770d521f4e4890ee964"
  },
  {
    "url": "index.html",
    "revision": "1d3f77895dfb9d48e60bfcbbb4621e0f"
  },
  {
    "url": "plant.html",
    "revision": "ce59e6b66250f5570c373e8728028ff4"
  },
  {
    "url": "start.html",
    "revision": "05bbb935508180667d7261c0eca83cbc"
  },
  {
    "url": "task/one.html",
    "revision": "adabe09952f31219d287a1b02fdc372e"
  },
  {
    "url": "task/two.html",
    "revision": "ca1fbd9a5b5161da8041d4ff377635d8"
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
