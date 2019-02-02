// Docs:  https://bixbydevelopers.com/dev/docs/dev-guide/developers/actions.js-actions#passing-user-context-information
module.exports.function = function sampleContext ($vivContext) {
 
  console.log('context',$vivContext);
  
  var contextResult = [];
  var keys = Object.keys($vivContext);

  keys.forEach((key) => {
  
    var keyValue = $vivContext[key];
    
    if (!keyValue) keyValue = 'empty';
    
    if (typeof keyValue === 'object') 
      keyValue = JSON.stringify(keyValue);
   
    contextResult.push({
      contextKey: key,
      contextValue: keyValue
    });
    
});
  
 return contextResult;
  
}
