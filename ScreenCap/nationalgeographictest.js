var page = require('webpage').create();
page.viewportSize = {
    width: 1280,
    height: 800
};
page.zoomFactor = 1; //default value is 1
page.open('https://news.nationalgeographic.com/2018/04/3d-microscopic-images-cell-inside-living-animals-first-time-science-spd/', function() {
  page.render('natgeotest.png');
  phantom.exit();
});