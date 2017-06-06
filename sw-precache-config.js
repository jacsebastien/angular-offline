module.exports = {
  navigateFallback: '/index.html',
  stripPrefix: 'dist',
  root: 'dist/',
  staticFileGlobs: [
    'dist/index.html',
    'dist/**.js',
    'dist/**.css'
  ]
};

/* 
    navigateFallback: tells the browser if the user requests a url that cannot be found to fall back to the cached index.html
    stripPrefix: tells sw-precache which folder is the root of our web app and should not add it to file paths
    root: tells sw-precache where the Service Worker should be created
    staticFileGlobs: tells sw-precache which static files we would like the browser to cache and use
*/