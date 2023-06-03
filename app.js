let convert = document.getElementById("convert");
let clean = document.getElementById("clear");
let binary_input = document.getElementById("binary").value;
let output = document.getElementById("output");

function convertEnglish() {
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
convert.addEventListener("click", convertEnglish);

function cleanIt() {
  let english_input = document.getElementById("english");
  let binary_input = document.getElementById("binary");
  let output = document.getElementById("output");

  english_input.value = "";
  binary_input.value = "";
  output.innerText = "";
}
clean.addEventListener("click", cleanIt);


document.getElementById("toEnglish").addEventListener("click", convertBinary);

function convertBinary() {
  let binary_input = document.getElementById("binary").value;

  let data = binary_input.split(" ");
  let result = "";
  // alert(data)
  for(let i = 0; i < data.length; i++){
    // convert word to decimal

    let decimal = parseInt(data[i], 2)
    result += String.fromCharCode(decimal)
  }
  

  output.innerText = result

}


