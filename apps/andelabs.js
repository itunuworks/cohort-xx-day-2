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
	            if (wordCount !== 0 && inputArray[i] !== inputArray[i - 1]){
	            	wordCount = 0
	            }
	            returnObj[inputArray[i++]] = ++wordCount;
	        }
	    }
	    return returnObj;
	},

	reverseString: function(inputText){
		if (!inputText === false){
			var inputArray = inputText.split('');
			var outputArray = inputArray.reverse();
			
			if (outputArray.join('') === inputText){
				return true;
			}
			return outputArray.join('');
		}
		else{
			return null;
		}
	}
}
