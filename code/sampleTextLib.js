// Docs:  https://bixbydevelopers.com/dev/docs/reference/JavaScriptAPI/textLib
module.exports.function = function getTextLib (textLibRequest) {
 
  // textLibInput1 = the string to compare
  // textLibInput2 = the original string
  
  // fuzzyMatch
  var result1 = textLib.fuzzyMatch(textLibRequest.textLibInput1,textLibRequest.textLibInput2, 5);
  
  console.log(result1);
  
  // levenshtein
  var result2 = 
   textLib.levenshteinDistance(textLibRequest.textLibInput1,textLibRequest.textLibInput2);
  console.log(result2);
  
   // spaceMixedCase
  var result3 = textLib.spaceMixedCase(textLibRequest.textLibInput2);
  console.log(result3);
  
  // stemAllWords
  var result4 = textLib.stemAllWords(textLibRequest.textLibInput2);
  console.log(result4);
  // stripHtml
  var result5 = textLib.stripHtml(textLibRequest.textLibInput2);
  console.log(result5);
  
  return {
    originalString: textLibRequest.textLibInput2,
    stringToCompare: textLibRequest.textLibInput1,
    fuzzyMatch: result1,
    levenshteinDistance: result2,
    spaceMixedCase: result3,
    stemAllWords: result4,
    stripHtml: result5
  };
  
 
}
