/*
146. LRU Cache
https://leetcode.com/problems/lru-cache/

Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: get and put.

get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
put(key, value) - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.

The cache is initialized with a positive capacity.

Follow up:
Could you do both operations in O(1) time complexity?

Example:

LRUCache cache = new LRUCache( 2 );

cache.put(1, 1);
cache.put(2, 2);
cache.get(1);       // returns 1
cache.put(3, 3);    // evicts key 2
cache.get(2);       // returns -1 (not found)
cache.put(4, 4);    // evicts key 1
cache.get(1);       // returns -1 (not found)
cache.get(3);       // returns 3
cache.get(4);       // returns 4
*/


// LRU cache using Map
/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    const val = this.cache.get(key);
    if (this.cache.has(key)) {
        // refresh key
        this.cache.delete(key);
        this.cache.set(key, val);
    }
    return (val) ? val : -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (this.cache.has(key)) {
        this.cache.delete(key);
        this.cache.set(key, value);
        return;
    }
    
    if (this.cache.size === this.capacity) {
        const first = this.cache.keys().next().value;
        this.cache.delete(first);
    }
    
    this.cache.set(key, value);
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

=============



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

