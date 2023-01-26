let visitorName = prompt ("What is your name?");

function checkName(){
    while(!visitorName){  
        alert("Whoa! You didn't input anything!");
        visitorName = prompt("May I have a your name?"); 
        
    };
}

function enterSite(){
    if (confirm(visitorName + ", do you WANT to visit this Milkshake site?")){
    document.write("Welcome " + visitorName + "!  ");
}else {
    document.write("You're Here Now! Welcome "+ visitorName + "!  ");
};
}

function shakeType (){
    
    let shakePref = prompt ("Do you prefer Classic or Fancy Milkshakes?");
    
    shakePref = shakePref.toLowerCase();

    if(shakePref == "classic"){
        document.write("  Classic Shakes are the BEST!  ");
       
    }else if(shakePref == "fancy"){
        document.write("  Fancy Shakes SOOTH the SOUL!  ");
    }else{
        document.write("  Not sure what type of shake you prefer. Refresh the page to try again!")
    
    return shakePref 
    };
}

checkName();
enterSite();
shakeType();