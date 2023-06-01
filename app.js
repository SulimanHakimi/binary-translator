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




















// function convertBinary(a) {
//   const binaryNumbers = a.match(/.{1,8}/g);
  
//   const characters = binaryNumbers.map((binaryNumber)=> {
//     return String.fromCharCode(parseInt(binaryNumber,));
//   });
  
//   return characters.join("");
// }

// const a = `${binary_input}`;
// const result = convertBinary(a);
// output.innerText = result;


// convert.addEventListener("click",convertBinary)