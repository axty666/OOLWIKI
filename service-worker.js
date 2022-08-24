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
    "revision": "9eda22b8a409f12454fc365877b91fa1"
  },
  {
    "url": "assets/css/0.styles.e3a675bf.css",
    "revision": "8b204227b0e115d460d6a906be34e371"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.ea8af30d.js",
    "revision": "219a7d94e953315a776f0c2b47cdc3fb"
  },
  {
    "url": "assets/js/11.ca355476.js",
    "revision": "3be7040d23091b7af7b65bdafe03319c"
  },
  {
    "url": "assets/js/12.5327d32e.js",
    "revision": "ecd956ef86794f8d175602fe4a38927e"
  },
  {
    "url": "assets/js/13.cd658c5e.js",
    "revision": "238174a2eba8bbffc693cb13aa930e06"
  },
  {
    "url": "assets/js/2.a3b23beb.js",
    "revision": "e66d1be2ff864c7edf604aea453bb283"
  },
  {
    "url": "assets/js/3.f66388a4.js",
    "revision": "63b73a26de80c5d0a981d854eba34cea"
  },
  {
    "url": "assets/js/4.73264986.js",
    "revision": "f772f6aec3962b7fe2571167e7e88d3f"
  },
  {
    "url": "assets/js/5.5f84c179.js",
    "revision": "142614fa13956798d66d3b093ce80ac6"
  },
  {
    "url": "assets/js/6.79c3a8d6.js",
    "revision": "8b77efc29f153b3e3d0a2c7e07f561af"
  },
  {
    "url": "assets/js/7.1a60b791.js",
    "revision": "14b39af606a9d1fbf68b014d55d2ab27"
  },
  {
    "url": "assets/js/8.b312b814.js",
    "revision": "6ed58f956fd8f37bc29b50324e688579"
  },
  {
    "url": "assets/js/9.d95ecee7.js",
    "revision": "79e69e149d82e24699ebd4bdf117e4bc"
  },
  {
    "url": "assets/js/app.81dcecbd.js",
    "revision": "2e35db8e0f6d5647d046f8a7db6364c8"
  },
  {
    "url": "CCopyBoard.js",
    "revision": "29b9ad2ced444c88795a0b6a0a11fb6c"
  },
  {
    "url": "example.html",
    "revision": "002193b8c1b9cb6d8d8a65cf4dca3133"
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
    "revision": "5c05f554d80a43771e1ece6bbb032a47"
  },
  {
    "url": "plant.html",
    "revision": "21206ccddf9e6d8b9d5217888a2af241"
  },
  {
    "url": "start.html",
    "revision": "acb0626e1dc98e29673dd39eb7894a8b"
  },
  {
    "url": "task/one.html",
    "revision": "26712d53b111b4cfb22a27c5b6214b9d"
  },
  {
    "url": "task/two.html",
    "revision": "7a4f33f744b18e158ecaa6bfb9f289cf"
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
