`use strict`;

let input = [];
let output;
let input_value;

// this code give the biggest number from the input
function large_num() {
  let big = 0;
  


  for (let i = 0; i < input_value.length; i++) {
    for (let j = 0; j <= input_value.length; j++) {
      big < Number(input_value[j]) ? (big = input_value[j]) : "";
    }
  }big?output=`${big} Is Biggest Number`:output="Number Not Found";
//   output=big;
}

// set event listener
document.querySelector("#btn").addEventListener("click", function () {
  input_value = document.querySelector("#big_num").value;
  if (input_value.includes(",")) {
    input_value = input_value.split(",");
    large_num();
  } else {
    if (Number(input_value)) {
      output=` ${Number(input_value)} Is Biggest Number`;
    } else {
      output=" Please Enter Number";
    }
  } document.querySelector("#output").textContent=output;
});
