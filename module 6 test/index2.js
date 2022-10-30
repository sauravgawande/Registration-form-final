
let valid = ()=>{
    var count1= false;
    var count2 = false; 
    var count3 = false; 
    var count4 = false; 
    var count5 = false;
    var count6 = false;
    var firstName = document.getElementById("validationCustom01").value;
    var lastName = document.getElementById("validationCustom02").value;
    var emailId = document.getElementById("validationCustomUsername").value;
    var mobNumber = document.getElementById("validationCustom03").value;
    var gender11 = document.getElementById("exampleRadios1").checked;
    var gender12 = document.getElementById("exampleRadios2").checked;
    var gender13 = document.getElementById("exampleRadios3").checked;
    var counTry = document.getElementById("validationCustom05").value;
    

    if(firstName.length >= 3 && firstName.match( /^[a-zA-Z]+$/) ){
        document.getElementById("v1").style.display = "block";
        document.getElementById("inv1").style.display = "none";
        count1 = true
    }
    else{
        document.getElementById("v1").style.display = "none";
        document.getElementById("inv1").style.display = "block";
        count1 = false
    }
    if(lastName.length >= 3 && lastName.match( /^[a-zA-Z]+$/)){
        document.getElementById("v2").style.display = "block";
        document.getElementById("inv2").style.display = "none";
        count2 = true
    }
    else{
        document.getElementById("v2").style.display = "none";
        document.getElementById("inv2").style.display = "block";
        count2 = false
    }
    if(mobNumber.length == 10 &&
        mobNumber.indexOf(1) != 0 &&
        mobNumber.indexOf(2) != 0 &&
        mobNumber.indexOf(3) != 0 &&
        mobNumber.indexOf(4) != 0 && 
        mobNumber.indexOf(5) != 0 ){
        document.getElementById("v4").style.display = "block";
        document.getElementById("inv4").style.display = "none";
        
        count3 = true;
    }
    else{
        document.getElementById("v4").style.display = "none";
        document.getElementById("inv4").style.display = "block";
        count3 = false;
    }

    if(
        emailId.includes('@') &&
        emailId.includes('.') &&
        emailId.indexOf('@') != 0 &&
        emailId.length - emailId.indexOf(".") >=3 &&
        emailId.indexOf(".") - emailId.indexOf("@") >=2 &&
        emailId.indexOf(".") != emailId.length -1
     ){
        document.getElementById("v3").style.display = "block";
        document.getElementById("inv3").style.display = "none";
       
        count4 = true;
     }
     else{
        document.getElementById("v3").style.display = "none";
        document.getElementById("inv3").style.display = "block"; 
        count4 = false;
     }
     if(counTry == "India" || counTry == "USA" ){
        document.getElementById("v6").style.display = "block";
        document.getElementById("inv6").style.display = "none"; 
        count5 = true;
    }
    else{
        document.getElementById("v6").style.display = "none";
        document.getElementById("inv6").style.display = "block";
        count5 = false;
    }
    if(gender11 == true ||gender12 == true||gender13 == true ){
        document.getElementById("v5").style.display = "block";
        document.getElementById("inv5").style.display = "none";
        count6 = true;
    }
    else{
        document.getElementById("v5").style.display = "none";
        document.getElementById("inv5").style.display = "block";
        count6 = false
    }

    if(count1 && count2&& count3&& count4&& count5&&count6 == true){
        alert("Your details have been saved successfully!");
    }
    firstName.value = ''

}

  