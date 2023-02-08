(function() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;
  var Applink = {
  launchApp: function(appname) {
    window.location.replace(appname);
    this.timer = setTimeout(this.openWebApp, 1000);
  },
  openWebApp: function() {
    if (/android/i.test(userAgent)) {     // ANDROID
      window.location.replace("https://play.google.com/store/apps/details?id=com.google.android.googlequicksearchbox");
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {     // APPLE
      window.location.replace("https://apps.apple.com/");
    } else {
      console.log('')
    }
  }
  };

  Applink.launchApp("appname://");

})()
