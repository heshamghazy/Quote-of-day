var quoteStr;
var quoteTeller;
var quoteObj = {
    quote: quoteStr = " ",
    teller: quoteTeller = " ",
}
quoteStr1 = "It's not what happens to you, but how you react to it that matters.";
quoteStr2 = "You miss 100% of the shots you don't take.";
quoteStr3 = "Do not take life too seriously. You will not get out alive.";
quoteStr4 = "Resentment is like drinking poison and waiting for your enemies to die."
teller1 = "-- Epictetus";
teller2 = "-- Wayne Gretzy";
teller3 = "-- Elbert Hubbard";
teller4 = "-- Nelson Mandela";

var quoteArray = [
    { quoteStr: quoteStr1, teller: teller1 },
    { quoteStr: quoteStr2, teller: teller2 },
    { quoteStr: quoteStr3, teller: teller3 },
    { quoteStr: quoteStr4, teller: teller4 }
]
var helper = -1;
function viewQuote() {
   var temp =  Math.floor(Math.random()*4);
   if(helper==temp){
       if(temp==3){
           temp=0;
       }
       else{
           temp++;
       }
   }
   document.getElementById("viewer").innerHTML = `<p>" ${quoteArray[temp].quoteStr} "</p> 
   <p>" ${quoteArray[temp].teller} "</p>`
   helper=temp;
}
