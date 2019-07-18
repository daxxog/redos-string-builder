/* RedosStringBuilder / test / basic.js
 * basic test
 * (c) 2019 David (daXXog) Volm ><> + + + <><
 * Released under Apache License, Version 2.0:
 * http://www.apache.org/licenses/LICENSE-2.0.html  
 */

var vows = require('vows'),
    assert = require('assert'),
    RedosStringBuilder = require('../redos-string-builder.min.js');

vows.describe('basic').addBatch({
    'RedosStringBuilder': {
        topic: function() {
        	return typeof RedosStringBuilder;
        },
        'is a function': function(topic) {
            assert.equal(topic, 'function');
        }
    }
}).export(module);