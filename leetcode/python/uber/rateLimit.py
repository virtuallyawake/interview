"""
Imagine that you have an application that needs to make HTTP requests to
an external API. Suppose that we never want to call this API more than 10 times
in any given second. Implement a rate limiter to enforce this.

Ex: Suppose you have a function like
void makeHTTPRequest()

You don't have to implement this function, but write a wrapper around it to ensure
that it's not called more than 10x within a second.
"""
from time import time;
from time import sleep;

maxCalls = 10;
queue = []; # contains timestamps

queues = {
    "user2" : []
};


def makeHTTPRequest():
    print "making HTTP request"
    

def updateQueue():
    now = time();
    return [t for t in queue if (now - t < 1)];

def makeHTTPRequestLimited():
    global queue
    queue = updateQueue(); # only timestamp in the last second
    
    if len(queue) < maxCalls:
        makeHTTPRequest();
        queue.append(time());
        

start = time();
while time() - start < 1:
    makeHTTPRequestLimited();

print("sleeping Zzzz")
sleep(1)

start = time();
while time() - start < 1:
    makeHTTPRequestLimited();

print("END")


| x   |     x       xx xx    |
