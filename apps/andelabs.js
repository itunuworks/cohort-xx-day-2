'use strict';

module.exports = {

	words : function(inputText){
		var returnObj = {};
	    var inputArray = inputText.replace(/[\s]+/, " ").split(" ");
	    var wordCount = 0;
	    var i = 0;

	    if (inputArray.length>=1){
	        inputArray.sort();
	        while (i < inputArray.length) {
	            if (wordCount === 0 || inputArray[i] === inputArray[i - 1]) {
	                returnObj[inputArray[i]] = ++wordCount;
	            }
	            else {
	                wordCount = 0;
                    returnObj[inputArray[i]] = ++wordCount;
	            }
	            i++;
	        }
	    }
	    return returnObj;
	}
}
