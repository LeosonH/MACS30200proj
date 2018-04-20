var page = require('webpage').create();
page.viewportSize = {
    width: 1280,
    height: 800
};
page.zoomFactor = 1; //default value is 1
page.open('http://github.com/', function() {
  page.render('github.png');
  phantom.exit();
});