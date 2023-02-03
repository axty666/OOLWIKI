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
    "revision": "89367f4a7d12ec3b54a9f6b142456c86"
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
    "url": "assets/js/10.24b79a46.js",
    "revision": "69f7632585c059953dafa8433593821a"
  },
  {
    "url": "assets/js/11.8403aee7.js",
    "revision": "e233ed75e29273f4270ab7aab6fdb735"
  },
  {
    "url": "assets/js/12.836a3167.js",
    "revision": "6379f0bc3c3de833bbb66b1f779c0958"
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
    "url": "assets/js/7.8ac5f2f1.js",
    "revision": "d371deb8754b4020a02ba18fe4bb5049"
  },
  {
    "url": "assets/js/8.1571662c.js",
    "revision": "7ce87388661e01879f44e3ee0bbd7fd3"
  },
  {
    "url": "assets/js/9.34375871.js",
    "revision": "9d47aeceba4e89d733c21f0feac2ae93"
  },
  {
    "url": "assets/js/app.09634ed6.js",
    "revision": "bb9838823594c52ecf6c0b4fd76e50d9"
  },
  {
    "url": "CCopyBoard.js",
    "revision": "29b9ad2ced444c88795a0b6a0a11fb6c"
  },
  {
    "url": "example.html",
    "revision": "2f0146f6c83db86de7f7c664a3a9bbfc"
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
    "url": "icons/photo.png",
    "revision": "29742dfda52887bdde221babe66556d9"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "c86c03e60c362770d521f4e4890ee964"
  },
  {
    "url": "index.html",
    "revision": "dbba3e1defc0d704d4a42e6238f3fd34"
  },
  {
    "url": "plant.html",
    "revision": "064bbe61dfd9630d78ecd92b4df4c830"
  },
  {
    "url": "start.html",
    "revision": "45875d1cbecd985d3c51411f0a5bdf31"
  },
  {
    "url": "task/one.html",
    "revision": "0aa4ded0bac0a7665cc0d5013e8b5983"
  },
  {
    "url": "task/two.html",
    "revision": "f8f987cd62ce514d061039b9a5fba9b2"
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
