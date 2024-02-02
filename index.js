// let c = 50;
// let f = 0;

// // Using the above formula
// f = (c * (9 / 5)) + 32;
// console.log("The value of the temperature in Fahrenheit is " + f);
  

  function calToFarh() {

  	var c = document.getElementById("value1").value;

 	var f = (1.8 *c) + 32;

 	document.getElementById("value2").value = f;
  }


    function farToCalc() {

   	var f1 = document.getElementById("val1").value;

   	var c1 =  (f1 - 32) * 0.5555;

  	document.getElementById("val2").value = c1;
  }  