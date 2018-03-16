var helper = require('./helper');
describe('Catalytic home page Demo', function() {

  it('should have a title', function() {
    browser.get('https://stg.catalyticds.com/');
    
    var title ='Catalytic';
     expect(browser.getTitle()).toEqual(title);
  
    });
    
      it('should SignIn', function () {
        browser.get('https://stg.catalyticds.com/');
        //var goToSigninButton = element(by.linkText('SIGN IN'));
        //goToLoginButton.click();
        //element(by.id('cs-log-in')).click();


        var SignInButton=element(by.id('cs-log-in'));
        SignInButton.click();
        helper.waitUntilReady();

 //afterEach(function () {
   // browser.ignoreSynchronization = false;
  //})



      });

      
    });
  
  });