(function() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;
  var Applink = {
    /**
     * 
     * @param {string} appname          name of app i.e: appname://
     * @param {Object} options          (optional) if app doesn't exist, redirect to url
     *            web:                  redirect to a download page
     *            android:              if 'web' is empty, redirect user to android (base on OS platform)
     *            ios:                  if 'web' is empty, redirect user to ios  (base on OS platform)
     */
  launchApp: function(appname, options) {
    window.location.replace(appname);
    this.timer = setTimeout(this.openWebApp(options), 1000);
  },
  openWebApp: function(options) {
    if (options.web) {
      window.location.replace(options.web);
    } else if (/android/i.test(userAgent)) {     // ANDROID
      window.location.replace(options.android);
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {     // APPLE
      window.location.replace(options.ios);
    } else {
      console.log('')
    }
  }
  };

  Applink.launchApp("appname://", {
    "web": "https://github.com/devincecode/components",
    "android": "https://play.google.com/store",
    "ios": "https://apps.apple.com/"
  });

})()
