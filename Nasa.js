
describe('angularjs homepage todo list', function() {
    it('should add a todo', function() {
  
      browser.waitForAngularEnabled(false);
  
      browser.get('https://www.nasa.gov');

     About="//span[contains(text(),'About')]"
     element(by.xpath(About)).click();

     Career="//a[contains(text(),'Careers@NASA')]"
     element(by.xpath(Career)).click();
  
      job="//p/a[contains(herf(),'Click Here to Search Job')]"
     //job= "//a[@href='https://www.usajobs.gov/search/results?d=NN&p=1'])"
    // job="//a[contains(@herf,'https://www.usajobs.gov/search/results?d=NN&p=1')]"

      element(by.xpath(job)).click();


browser.pause();
   });
});