﻿function randomValueGenerator(len) {
    var unquieValue = ''
    let randValues = '321654987' + aqConvert.DateTimeToFormatStr(aqDateTime.Today(), "%m%d%Y") + aqConvert.DateTimeToFormatStr(aqDateTime.Time(), "%H%M%S")
    for (let i = 0; i < len; i++) {
        unquieValue += randValues.charAt(Math.floor(Math.random() * randValues.length))
    }
    Log.Message(unquieValue)
    return unquieValue;
}

function randomNameGenerator(){
  const num = 8;
  var randomName = '';
   for(let i = 0; i < num; i++){
      const random = Math.floor(Math.random() * 27);
      randomName += String.fromCharCode(97 + random);
   };
  

return randomName
}


function test()
{
   Aliases.browser.pageVitaminCTabletsSupplementsSh.sectionSummerSale.navSummerSale.scrollIntoView(true)
  Delay(2000,'')
  Aliases.browser.pageVitaminCTabletsSupplementsSh.sectionSummerSale.navSummerSale.linkFoodDrink.hover()
}