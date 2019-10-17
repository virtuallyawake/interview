/*
Design a logger system that receive stream of messages along with its timestamps, each message should be printed if and only if it is not printed in the last 10 seconds.

Given a message and a timestamp (in seconds granularity), return true if the message should be printed in the given timestamp, otherwise returns false.

It is possible that several messages arrive roughly at the same time.

*/

/**
 * Initialize your data structure here.
 */
var Logger = function() {
    this.messages = {};
};

/**
 * Returns true if the message should be printed in the given timestamp, otherwise returns false.
        If this method returns false, the message will not be printed.
        The timestamp is in seconds granularity. 
	* @param {number} timestamp 
	* @param {string} message
	* @return {boolean}
	*/
Logger.prototype.shouldPrintMessage = function(timestamp, message) {
    var window = 10;
    if (message in this.messages) {
        if (timestamp - this.messages[message] < window) {
            return false;
        }
    }
    
    this.messages[message] = timestamp;
    return true;
};

/** 
 * Your Logger object will be instantiated and called as such:
 * var obj = new Logger()
 * var param_1 = obj.shouldPrintMessage(timestamp,message)
 */