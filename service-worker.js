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
    "revision": "1c2e77f0b819234760e07a0ad7c2c6f0"
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
    "url": "assets/js/10.fc128f58.js",
    "revision": "7147f767ad432f109951d0635aee8670"
  },
  {
    "url": "assets/js/11.11fc9f23.js",
    "revision": "42386d7b17340ee7bc5059260e68c665"
  },
  {
    "url": "assets/js/12.8cb28044.js",
    "revision": "1997b3cd17f06ac9d873448e3b94baef"
  },
  {
    "url": "assets/js/13.d375db4c.js",
    "revision": "f8a62db36566aea9f4ed3f5dee420565"
  },
  {
    "url": "assets/js/2.b5ceb8d8.js",
    "revision": "6b08bc2d75aeb10d497d9ae59b75da5b"
  },
  {
    "url": "assets/js/3.cc49f90b.js",
    "revision": "6febc6297641cca73f317b66983633ab"
  },
  {
    "url": "assets/js/4.9f634cb8.js",
    "revision": "525e7839a0ad20f76a0bff6ce66e9258"
  },
  {
    "url": "assets/js/5.602e294e.js",
    "revision": "477fea2a8a2ebb4cdeac093883951108"
  },
  {
    "url": "assets/js/6.d235a73a.js",
    "revision": "0013cbb2cc6d74c2de7b898f5ccc8f53"
  },
  {
    "url": "assets/js/7.aee35221.js",
    "revision": "95f1ca1d374a31c52190f7ae1a084eb1"
  },
  {
    "url": "assets/js/8.d18bc6fa.js",
    "revision": "9746b414d15ea5e747986c9d4487a495"
  },
  {
    "url": "assets/js/9.557ad06f.js",
    "revision": "dd7244e83e47ee1da35e137af850e2a2"
  },
  {
    "url": "assets/js/app.2d2c9c8b.js",
    "revision": "04035ecc4ccc3d1b6ea6921ba5c08ddf"
  },
  {
    "url": "CCopyBoard.js",
    "revision": "29b9ad2ced444c88795a0b6a0a11fb6c"
  },
  {
    "url": "example.html",
    "revision": "4ec1462b0fcf811bbde0a00f9cfdf125"
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
    "revision": "7ae0713e54d9055d9c5d1ac681e9449c"
  },
  {
    "url": "plant.html",
    "revision": "3dcdf79da1e5eca91c6376f686db5546"
  },
  {
    "url": "start.html",
    "revision": "316f3198b905d2dd5478aae2edef8106"
  },
  {
    "url": "task/one.html",
    "revision": "b6569a4d9bb62e149b4f3dff01dcbb3c"
  },
  {
    "url": "task/two.html",
    "revision": "030adcf6fadbd8a6e1f0419f177d8913"
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
