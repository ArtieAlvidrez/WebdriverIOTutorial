import Page from './page'

class SPage extends Page {

//   get inputName() { return $('//*[@id="name"]'); }
   get inputName() { return $('#name'); }
   get Button() { return $('#button'); }
    get pageHeaderText()     { return $('//html/body/div/h1[contains(., "Keyboard and Mouse Input")]'); }



  open(path) {
    super.open(path)
  }

    waitForPageToLoad () {
      if(!this.pageHeaderText.isDisplayed()){
        this.pageHeaderText.waitForDisplayed(5000);
      }
    }  
   enterName (name) {
//	  this.inputName.waitForVisible ();
//      this.waitForloginPageToLoad();
      this.inputName.setValue(name);
   }

 
 
   clickButton(){
//	this.Button.click ()
    const myButton = $('#button');
//    myButton.click();
	const buttonTest = myButton.getText ();
	console.log ('button text is '+ buttonText);
	
    }
}

export default new SPage();