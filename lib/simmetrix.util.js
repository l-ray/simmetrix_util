(function (global, module) {

    if ('undefined' == typeof module) {
        var module = { exports: {} }
            ,exports = module.exports
    }

    /**
     * Exports.
     */
    module.exports = smUtilities();

    function smUtilities() {
        return {

            version : '0.0.1',

	    returnCompareString: function(myString) {
        	return myString.toLowerCase().replace(/[^a-zäöü0-9]+/g," ").trim();
    	    },            

	    reducedSummary: function() {
		var removeSingleLetter = function(s) {return s.length > 1;};
		var onlyUnique = function (value, index, self) { return self.indexOf(value) === index;};

		var argsAsArray = Array.prototype.slice.call(arguments);

		var argsAsLongString = this.returnCompareString(argsAsArray.join(" "));
        	return argsAsLongString.split(" ").filter(onlyUnique).filter(removeSingleLetter).join(" ");
	    }
        };
    };

    if ('undefined' != typeof window) {
        window.smUtilities = module.exports;
    }

})(
        this
        , 'undefined' != typeof module ? module : {}
        , 'undefined' != typeof exports ? exports : {}
    );
