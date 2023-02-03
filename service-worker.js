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
    "revision": "5191cccecf7f464cf6d10a4709385f78"
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
    "url": "assets/js/10.7d01b564.js",
    "revision": "34b1fa23d23bb01760840baa4b966adc"
  },
  {
    "url": "assets/js/11.8e9b16f2.js",
    "revision": "7a077457f1c707666a993bb11e62b5ca"
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
    "url": "assets/js/app.111d7c9f.js",
    "revision": "d2414339af1480c61a96821bdb239af2"
  },
  {
    "url": "CCopyBoard.js",
    "revision": "29b9ad2ced444c88795a0b6a0a11fb6c"
  },
  {
    "url": "example.html",
    "revision": "12d356cef713bdfb9b49ce2201ef845c"
  },
  {
    "url": "index.html",
    "revision": "b17ad098d00c50a6518f63e0564ec8c6"
  },
  {
    "url": "plant.html",
    "revision": "155769e52046a0092e79be69482e5044"
  },
  {
    "url": "start.html",
    "revision": "108303fecfe2ee2cb05ebedb0c397a6f"
  },
  {
    "url": "task/one.html",
    "revision": "d530f1f47870cca889834242916dc878"
  },
  {
    "url": "task/two.html",
    "revision": "5bc9abc1d9c3a1df76a8c0585df71415"
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
