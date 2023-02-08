//var name = "peter parker" age = 21 isMarried = false;
//document.write(name+" "+ <"br>");
//document.write(isMarried);

//var a = "let's have a coffee.";
//var b = 'He said "hello" and left';
//var c = 'we\'ll never give up.';

//document.write(a + "<br>" + b + "<br>" + c);

//var a = 25;
//var b = 30.5;
//var c = 4.25e+6;
//var d //= 4.25e-6;

//document.write(a + b + c + d);

//var person = ("name: DANICA, surname: AGlIBOT, age: 27");
//document.write(person);//

//var totalpriceDisplay = function() {
//var total_price = parseInt(document.getElementById("magicB").value) + parseInt(document.getElementById("smt").value);

//return alert("total price of item" + total_price);

//}

var total_price = function(){

var total_priceMB = document.getElementById("magicB").value*12;
var total_priceSMT = document.getElementById("smt").value*3;

var total_price = total_priceMB + total_priceSMT;
return alert ("Total price of items in peso: Php" + total_price);

}