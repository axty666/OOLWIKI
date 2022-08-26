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
    "revision": "13743a94d1bd79a89a0ddc4accc55f56"
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
    "url": "assets/js/10.7ae8431c.js",
    "revision": "54409737d3638e821742e7793d349134"
  },
  {
    "url": "assets/js/11.03241411.js",
    "revision": "a877209ba20fc2686e9b4cc83264d5e4"
  },
  {
    "url": "assets/js/12.237e3cdb.js",
    "revision": "2c5ad74992b3c64797c889812fb4d5f9"
  },
  {
    "url": "assets/js/13.544ce3bf.js",
    "revision": "fcba81673e375114fc087ee36734e8ed"
  },
  {
    "url": "assets/js/2.d9f1b35f.js",
    "revision": "b8230079ca830f2f91a24c59d63641cb"
  },
  {
    "url": "assets/js/3.1dbb61e5.js",
    "revision": "c59b2f5aac63a0e9af4a766592c2110f"
  },
  {
    "url": "assets/js/4.fe329690.js",
    "revision": "2bb536d956893c448659dd26d407c7ac"
  },
  {
    "url": "assets/js/5.f9783a0b.js",
    "revision": "25db05358fc8261d43122aed34b4a1c4"
  },
  {
    "url": "assets/js/6.af36b4d5.js",
    "revision": "01cded664c8ad2166d6569c24ea9a9d8"
  },
  {
    "url": "assets/js/7.63ac8caf.js",
    "revision": "2e157cad84152b03d694af0313bf2e72"
  },
  {
    "url": "assets/js/8.9667bee2.js",
    "revision": "091dcde49429309a4e1c4e7b9e9b3bff"
  },
  {
    "url": "assets/js/9.57f42cdc.js",
    "revision": "4e33ef24f2d4f7b90b7dab5864f37e3b"
  },
  {
    "url": "assets/js/app.2ef754ef.js",
    "revision": "464c082cce30d27fb9e5a3e73e781a28"
  },
  {
    "url": "CCopyBoard.js",
    "revision": "29b9ad2ced444c88795a0b6a0a11fb6c"
  },
  {
    "url": "example.html",
    "revision": "4d2bd1ad9f9cdf60a64184d789fb4fc6"
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
    "revision": "caa3407d9e0770f98d56efcbdf4afaf6"
  },
  {
    "url": "plant.html",
    "revision": "8e39559041a80b08e284ecbcd48795b9"
  },
  {
    "url": "start.html",
    "revision": "932282634c99ca2bb1ac98dc51d1675e"
  },
  {
    "url": "task/one.html",
    "revision": "3d8e154d535243ce8330947efba0c743"
  },
  {
    "url": "task/two.html",
    "revision": "89d06e9cc036475535ac6451c956c281"
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
