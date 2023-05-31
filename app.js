

let convert = document.getElementById("convert");
let clean = document.getElementById("clear");

let output = document.getElementById("output");

function convertIt() {

  let english_input = document.getElementById("english");
  let binary_input = document.getElementById("binary");

  let temp = "";
  let result = "";

  // decimal
  // 01 binary
  // 0 - 9
  // 0 - 1


  for (let i = 0; i < english_input.value.length; i++) {
    temp = english_input.value.charCodeAt(i);

    result += parseInt(temp).toString(2) + " ";
  }


  output.innerText = result;
}

function cleanIt() {

  let english_input = document.getElementById("english");
  let binary_input = document.getElementById("binary");
  let output = document.getElementById("output");

  english_input.value = "";
  binary_input.value = "";
  output.innerText = "";
  
}
