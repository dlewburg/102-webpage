let visitorName = prompt ("What is your name?");

if (confirm("Do you WANT to visit this Milkshake site?")){
    document.write("Welcome " + visitorName + "!  ");
}else {
    document.write("You're Here Now! Welcome "+ visitorName + "!  ");
};

document.write("  It's always a good time for a Milkshake!  ");

let shakePref = prompt ("Do you prefer Classic or Fancy Milkshakes?");

if(shakePref == "classic"){
   //let element=document.getElementById(classic)
  // element.scrollIntoView({behavior: 'smooth'});
   document.write("  Classic Shakes are the BEST!  ");
   
}else if(shakePref == "fancy"){
    //let fancyElement=document.getElementById(fancy)
   // fancyElement.scrollIntoView({behavior: 'smooth'});
    document.write("  Fancy Shakes SOOTH the SOUL!  ");
}else{
    //let headedElement=document.getElementById(headed)
    //headedElement.scrollIntoView({behavior: 'smooth'});
    document.write("  Not sure what type of shake you prefer. Refresh the page to try again!")
};
