// Docs:  https://bixbydevelopers.com/dev/docs/reference/JavaScriptAPI/base64
module.exports.function = function sampleBase64 (input1, input2) {
  
  var result = input2 == 'Encoding' ? 
                     base64.encode(input1) :
                     base64.decode(input1);
  
  var response = {
    originalString: input1,
    encodeOrDecode: input2,
    result: result
  };
  
  console.log(response);
  
  return response;
}
