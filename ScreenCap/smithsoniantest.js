var page = require('webpage').create();
page.viewportSize = {
    width: 1280,
    height: 800
};
page.zoomFactor = 1; //default value is 1
page.open('https://www.smithsonianmag.com/smart-news/new-planet-hunting-satellite-ready-launch-180968804/', function() {
  page.evaluate(function(){
        $('.modal, modal-backdrop').remove();
		document.body.bgColor = 'white';
    });	
  page.render('smithsoniantest.png');
  phantom.exit();
});