/**
  * @param {number} capacity
  */
    var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.cache = {};
    this.queue = [];
};

/** 
 * @param {number} key
 * @return {number}
 */

LRUCache.prototype.get = function(key) {
    if (key in this.cache) {
        // Update LRU
        var pos = this.queue.indexOf(key);
        this.queue.splice(pos, 1);
        this.queue.push(key);
        // Return value
        return this.cache[key];
    }
    return -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */

LRUCache.prototype.put = function(key, value) {
    if (key in this.cache) { 
        this.get(key); // Update queue
        this.cache[key] = value; // Update cache
        return;
    } 
    
    // Key not in cache
    if (Object.keys(this.cache).length == this.capacity) {
        // Remove LRU item
        var evicted = this.queue.shift();
        delete this.cache[evicted];
    }

    // Add to queue and cache
    this.queue.push(key);
    this.cache[key] = value;
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */