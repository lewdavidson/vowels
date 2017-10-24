$(document).ready(function(){
  $("form#word-form").submit(function(event){
    event.preventDefault();
    var vowels = ["a", "e", "i", "o", "u"];
    var wordInput = $("input#sentence").val();
    var inputArray = [wordInput.split("")];
    for (var index = 0; index < inputArray.length; index ++) {
      for ( var vowelIndex = 0; vowelIndex < vowels.length; vowelIndex ++) {
        if (inputArray[index] === vowels[vowelIndex])
           return inputArray[index] = "-";
          console.log(inputArray);
      }
    }
  });
});
