let convert = document.getElementById("en-to-binary-btn");
let convertToEn = document.getElementById("binary-to-en-btn");
let clean = document.getElementById("clear");
let binary_input = document.getElementById("binary");
let output = document.getElementById("output");
let english_input = document.getElementById("english");

function convertEnglish() {
  let temp = "";
  let result = "";
  for (let i = 0; i < english_input.value.length; i++) {
    temp = english_input.value.charCodeAt(i);

    result += parseInt(temp).toString(2) + " ";
  }

  output.innerText = result;
}
function convertBinary() {
  let data = binary_input.value.split(" ");
  let result = "";
  // alert(data)
  for (let i = 0; i < data.length; i++) {
    // convert word to decimal

    let decimal = parseInt(data[i], 2);
    result += String.fromCharCode(decimal);
  }

  output.innerText = result;
}
function myFunction() {
  let output = document.getElementById("output");

  navigator.clipboard.writeText(output.innerText);

  alert("Copied the text: " + output.innerText);
}

function cleanIt() {
  english_input.value = "";
  binary_input.value = "";
  output.innerText = "";
}
convert.addEventListener("click", convertEnglish);
clean.addEventListener("click", cleanIt);
convertToEn.addEventListener("click", convertBinary);
