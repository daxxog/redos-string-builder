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
    'typeof RedosStringBuilder': {
        topic: function() {
        	return typeof RedosStringBuilder;
        },
        'is a function': function(topic) {
            assert.equal(topic, 'function');
        }
    },
    'new RedosStringBuilder(\'string.underscore\')': {
        topic: function() {
            return new RedosStringBuilder('string.underscore');
        },
        'has a .target string equal to \'string.underscore\'': function(topic) {
            assert.equal(topic.target, 'string.underscore');
        },
        'can build a string with length of RedosStringBuilder.SIZE': function(topic) {
            assert.equal(topic.build().length, RedosStringBuilder.SIZE);
        }
    }
}).export(module);