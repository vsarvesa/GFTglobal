﻿//USEUNIT Generic_Functions 

When("Click on Rewards section", function (){
  try{
  Aliases.browser.pageHollandBarrettUkSLeadingHeal.navMyAccount.linkRewards.textnodeRewards.Click()
  Aliases.browser.pageSignInToYourAccountForTheBes.sectionMyAccount.headerMyAccount.textnodeMyAccount.WaitProperty('Exists',true,45000)
  aqObject.CheckProperty(Aliases.browser.pageSignInToYourAccountForTheBes.sectionMyAccount.headerMyAccount.textnodeMyAccount,'Exists',cmpEqual,true)
  }catch(e){
      Log.Picture(Aliases.browser.page('*').PagePicture(),'failed to click on Rewards page and navigate')
      Log.Error(" Error at navigating to rewards page ", e.stack);
  }
});

When("Click on account and then Create account", function (){
  try{
    Aliases.browser.pageSignInToYourAccountForTheBes.linkSignUp.Click()
    Aliases.browser.pageRegisterHollandBarrettTheUkS.articleBack.sectionAlreadyHaveAnAccount.formFirstName.textboxFirstName.WaitProperty('Exists',true,45000)
    Aliases.browser.pageRegisterHollandBarrettTheUkS.articleBack.sectionAlreadyHaveAnAccount.formFirstName.textboxFirstName.SetText('Test'+randomNameGenerator())
    Aliases.browser.pageRegisterHollandBarrettTheUkS.articleBack.sectionAlreadyHaveAnAccount.formFirstName.textboxLastName.SetText('Test'+randomNameGenerator())
    let newEmailId='Test+'+randomValueGenerator(5)+'@gmail.com'
    if (!Project.Variables.VariableExists("UserID")) {
            Project.Variables.AddVariable("UserID", "String")
        }
        Project.Variables.UserID=newEmailId
    if (!Project.Variables.VariableExists("Password")) {
            Project.Variables.AddVariable("Password", "String")
        }
        Project.Variables.Password='Password@123'
    Aliases.browser.pageRegisterHollandBarrettTheUkS.articleBack.sectionAlreadyHaveAnAccount.formFirstName.emailinputEmailAddress.SetText(newEmailId)
    
    Delay(2000,'')
    Aliases.browser.pageRegisterHollandBarrettTheUkS.articleBack.sectionAlreadyHaveAnAccount.formFirstName.emailinputConfirmEmailAddress.SetText(newEmailId)
    
    Aliases.browser.pageRegisterHollandBarrettTheUkS.articleBack.sectionAlreadyHaveAnAccount.formFirstName.passwordboxCreateAPassword.SetText('Password@123')
    Aliases.browser.pageRegisterHollandBarrettTheUkS.articleBack.sectionAlreadyHaveAnAccount.formFirstName.panelEmailsMatchButPleaseCheck.WaitProperty('Exists',true,45000)
    aqObject.CheckProperty(Aliases.browser.pageRegisterHollandBarrettTheUkS.articleBack.sectionAlreadyHaveAnAccount.formFirstName.panelEmailsMatchButPleaseCheck,'Exists',cmpEqual,true)
    Delay(1000,'')
    Aliases.browser.pageRegisterHollandBarrettTheUkS.articleBack.sectionAlreadyHaveAnAccount.labelEmailMeAbout.checkboxConsentemail.ClickChecked(true)
    Delay(1000,'')
    Aliases.browser.pageRegisterHollandBarrettTheUkS.articleBack.sectionAlreadyHaveAnAccount.labelIAgreeToTheRewardsForLife.checkboxTerms.ClickChecked(true)
    Delay(1000,'')
    Aliases.browser.pageRegisterHollandBarrettTheUkS.articleBack.sectionAlreadyHaveAnAccount.formFirstName.buttonCreateAnAccount.Click()
    
    
    }
    catch(e){
      Log.Picture(Aliases.browser.page('*').PagePicture(),'failed to click on Rewards page and navigate')
      Log.Error(" Error at navigating to rewards page ", e.stack);
    }
    
});

Then("validate account creation", function (){
  try{
    Aliases.browser.pageRegisterHollandBarrettTheUkS.articleBack.textnodeAccountCreated.WaitProperty('Exists',true,30000)
    aqObject.CheckProperty(Aliases.browser.pageRegisterHollandBarrettTheUkS.articleBack.textnodeAccountCreated,'Exists',cmpEqual,true)
     Log.Picture(Aliases.browser.page('*').PagePicture(),'Rewards page and navigate')
    }
    catch(e){
      Log.Picture(Aliases.browser.page('*').PagePicture(),'failed to click on Rewards page and navigate')
      Log.Error(" Error at navigating to rewards page ", e.stack);
      }
});

Given("Open WebApplication {arg} on browser {arg}", function (param1, param2){
  try {
 
        if (Sys.WaitBrowser('*').Exists) {
            Sys.Browser('*').Terminate();
        }
        switch (aqString.ToUpper(param2)) {
            case 'EDGE':
                Browsers.Item(btEdge).RunOptions = '--inprivate --disable-hang-monitor'
                Browsers.Item(btEdge).Run(param1);
                break
            case 'CHROME':
                Browsers.Item(btChrome).RunOptions = '--incognito --disable-hang-monitor'
                Browsers.Item(btChrome).Run(param1);
                break
        }
        Delay(1000)
        Aliases.browser.BrowserWindow(0).Maximize()
        Aliases.browser.pageHollandBarrettUkSLeadingHeal.navMyAccount.linkRewards.textnodeRewards.WaitProperty("Exists",true,30000)
    } catch (e)

    {
        Log.Picture(Aliases.browser.page('*').PagePicture(),'failed to open webapplication')
        Log.Error(" Error at Open Web Applicaton ", e.stack);

    } 
});

When("Login to the application", function (){
  try{
    Aliases.browser.pageSignInToYourAccountForTheBes.sectionMyAccount.formEmailAddress.textboxEmailAddress.WaitProperty('Exists',true,30000)
    Aliases.browser.pageSignInToYourAccountForTheBes.sectionMyAccount.formEmailAddress.textboxEmailAddress.SetText(Project.Variables.UserID)
    Aliases.browser.pageSignInToYourAccountForTheBes.sectionMyAccount.formEmailAddress.passwordboxPassword.SetText(Project.Variables.Password)
    Aliases.browser.pageSignInToYourAccountForTheBes.sectionMyAccount.formEmailAddress.buttonAction.Click()
    Aliases.browser.pageRewardsForLifeHollandBarrett.navMyAccount.linkHelloTestxyJlyp.textnodeHelloTestxyJlyp.WaitProperty('Exists',true,30000)
    aqObject.CheckProperty(Aliases.browser.pageRewardsForLifeHollandBarrett.navMyAccount.linkHelloTestxyJlyp.textnodeHelloTestxyJlyp,"Exists",cmpEqual,true)
  }
  catch(e){
    Log.Picture(Aliases.browser.page('*').PagePicture(),'failed to Login application')
    Log.Error(" Error at Login to the application. ", e.stack);
  }
});

var ProductlistInCart=[]
var ProductsAddedToCart={"ProductName":'',"itemCount":null,"ItemPrice":null, "TotalPrice":null}
When("Search for the Vitamins Supplements", function (){
  try{
    Aliases.browser.pageRewardsForLifeHollandBarrett.sectionSummerSale.navSummerSale.linkVitaminsSupplements.panelVitaminsSupplements.WaitProperty('Exists',true,30000)
    Aliases.browser.pageRewardsForLifeHollandBarrett.sectionSummerSale.navSummerSale.linkVitaminsSupplements.panelVitaminsSupplements.HoverMouse()
    Aliases.browser.pageRewardsForLifeHollandBarrett.sectionSummerSale.navSummerSale.textnodeVitaminsSupplements.panelVitaminC.Click()
    let itemName=Aliases.browser.pageVitaminCTabletsSupplementsSh.linkBuy1Get1HalfPrice.FindElement("(//div[contains(@class,'ProductCard-module_title')])[1]").innerText
    Log.Message(itemName)
    ProductsAddedToCart.ProductName=itemName
    ProductsAddedToCart.ItemPrice=Aliases.browser.pageVitaminCTabletsSupplementsSh.linkBuy1Get1HalfPrice.panel1249.innerText.split('£')[1]
    Aliases.browser.pageVitaminCTabletsSupplementsSh.linkBuy1Get1HalfPrice.buttonAddToBasket.Click()
    
  }
  catch(e){
    Log.Picture(Aliases.browser.page('*').PagePicture(),'failed to Search for the Vitamins Supplements')
    Log.Error(" Error at Search for the Vitamins Supplements ", e.stack);
  }
  
});

When("Add them to the cart add {arg} vitamins", function (param1){
  try{
    Aliases.browser.pageVitaminCTabletsSupplementsSh.linkBuy1Get1HalfPrice.button.WaitProperty('Exists',true,20000)
    for(let i=1;i<param1;i++){
      Delay(2000,'')
      Aliases.browser.pageVitaminCTabletsSupplementsSh.linkBuy1Get1HalfPrice.button.Click()
    }
    ProductsAddedToCart.itemCount=param1
    ProductsAddedToCart.TotalPrice=eval(ProductsAddedToCart.itemCount*ProductsAddedToCart.ItemPrice)
    ProductlistInCart.push(ProductsAddedToCart)
    Log.Message(ProductlistInCart)
  }
  catch(e){
    Log.Picture(Aliases.browser.page('*').PagePicture(),'failed to Add them to the cart add ')
    Log.Error(" Failed at Add them to the cart add  ", e.stack);
  
  }
});

When("Find the Vegan Choloates {arg} and Added them to cart", function (param1){
  try{
  Aliases.browser.pageVitaminCTabletsSupplementsSh.sectionSummerSale.navSummerSale.scrollIntoView(true)
  Delay(2000,'')
  Aliases.browser.pageVitaminCTabletsSupplementsSh.sectionSummerSale.navSummerSale.linkFoodDrink.HoverMouse()
  Delay(2000,'')
  Aliases.browser.pageVitaminCTabletsSupplementsSh.sectionSummerSale.navSummerSale.textnodeFoodDrink.panelVeganFood.Click()
  Aliases.browser.pageVeganFoodProductsShopNowHoll.textnodeVeganFood.WaitProperty('Exists',true,30000)
  Aliases.browser.pageVeganFoodProductsShopNowHoll.labelChocolate.Click()
  Delay(4000,'')
  Aliases.browser.pageVeganFoodProductsShopNowHoll.Wait(30000)
  var ProductsVegan={"ProductName":'',"itemCount":null,"ItemPrice":null, "TotalPrice":null}
  Aliases.browser.pageVeganFoodProductsShopNowHoll.linkVegoOrganicHazelnutChocolate.WaitProperty('Exists',true,30000)
  ProductsVegan.ProductName=Aliases.browser.pageVeganFoodProductsShopNowHoll.linkVegoOrganicHazelnutChocolate.FindElement("//a[contains(., 'Vego Organic Hazelnut Chocolate Bar 65g')]//child::div[contains(@class,'ProductCard-module_title')]").innerText.trim()
  ProductsVegan.ItemPrice=Aliases.browser.pageVeganFoodProductsShopNowHoll.linkVegoOrganicHazelnutChocolate.FindElement("(//a[contains(., 'Vego Organic Hazelnut Chocolate Bar 65g')]//child::div[contains(text(),'£')])[1]").innerText.split('£')[1].trim()
  ProductsVegan.itemCount=param1
  ProductsVegan.TotalPrice=eval(ProductsAddedToCart.itemCount*ProductsAddedToCart.ItemPrice)
  ProductlistInCart.push(ProductsVegan)
  Aliases.browser.pageVeganFoodProductsShopNowHoll.linkVegoOrganicHazelnutChocolate.FindElement("(//a[contains(., 'Vego Organic Hazelnut Chocolate Bar 65g')]//child::div[contains(.,'Add to basket')])[4]").Click()
  Delay(2000,'')
  for(let i=1;i<param1;i++){
  Aliases.browser.pageVeganFoodProductsShopNowHoll.linkVegoOrganicHazelnutChocolate.FindElement("//a[contains(., 'Vego Organic Hazelnut Chocolate Bar 65g')]//child::div//button[contains(@class,'plusBtn')]").Click()
  Delay(2000,'')
  }
  Log.Message(ProductlistInCart+"  "+ProductlistInCart+"")
  }
  catch(e){
    Log.Picture(Aliases.browser.page('*').PagePicture(),'failed to Add them to the cart add ')
    Log.Error(" Failed at Add them to the cart add  ", e.stack);
  }
});

Then("Validate all the products added to cart and Subtotal value", function (){
  try{
    Delay(2000,'')
  Aliases.browser.pageVeganFoodProductsShopNowHoll.link5.textnodeBasket.HoverMouse()
  Aliases.browser.pageVeganFoodProductsShopNowHoll.link5.textnodeBasket.Click()
  Aliases.browser.pageBasketHollandBarrett.sectionVegoOrganicHazelnutChocol.WaitProperty('Exists',true,30000)
  const allSelectedProductText=Aliases.browser.pageBasketHollandBarrett.sectionVegoOrganicHazelnutChocol.innerText.replace('\n',' ')
  if(allSelectedProductText.includes(ProductlistInCart[0].ProductName) && allSelectedProductText.includes(ProductlistInCart[1].ProductName )){
    Log.CheckPoint(ProductlistInCart[0].ProductName +" and "+ProductlistInCart[1].ProductName +"added to cart")
  }
  else{
    Log.Error('Items not added to the cart'+ProductlistInCart[0])
  }
  const subTotal=Aliases.browser.pageBasketHollandBarrett.panelSubtotal.innerText
  var calculatedSubTotal=ProductlistInCart[0].ItemPrice*parseInt(ProductlistInCart[0].itemCount)+ProductlistInCart[1].ItemPrice*parseInt(ProductlistInCart[1].itemCount)
  if(subTotal.includes(calculatedSubTotal)){
    Log.Checkpoint('Subtotal has been matched $'+calculatedSubTotal)
    
  }else{
    Log.Error('SubTotal and calculated Subtotal are not matching Subtotal'+subTotal +'calculated Subtotal is'+calculatedSubTotal)
  }
  
  }catch(e){
    Log.Picture(Aliases.browser.page('*').PagePicture(),'failed to Add them to the cart add ')
    Log.Error(" Failed at Add them to the cart add  ", e.stack);
  }
});
