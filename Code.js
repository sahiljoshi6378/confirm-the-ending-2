
function confirmending(str, trgt) {
  var listOfChars = str.split("");
  var lastcharIndex = listOfChars.length - 1;
  if (listOfChars[lastcharIndex] == trgt.toLowerCase()) {
    console.log(`Yes, it's : ${listOfChars[lastcharIndex]}`);
  }
  else if (listOfChars.join("").includes(trgt)){
    var posoftrgt = listOfChars.join("").indexOf(trgt);
    console.log(`it's : ${listOfChars[lastcharIndex]}`);
    console.log(`No it's not ${trgt},\n but there is ${trgt} on : ${posoftrgt} position in the string `)
  }
  else{
    console.log('Not found!')
  }
}
confirmending('confirmending','g')
