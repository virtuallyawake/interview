function RateLimiter(window, limit) {
    this.store = {};
    this.limit = limit;
    this.window = window; // in miliseconds
    this.execute = function(customerId) {
        const time = Date.now();

        if (customerId in this.store) {
            this.store[customerId].push(time);
        } else {
            this.store[customerId] = [time];
        }

        const calls = this.store[customerId];
        //console.log(calls);
        const callsWithinWindow = calls.filter(function(call) {
          //  console.log("time: " + time, "call: " + call + "diff: " + (time-call))
           return ((time - call) < window);
        });

        console.log(callsWithinWindow.length);
        if (callsWithinWindow.length <= this.limit) {
            console.log("EXECUTED");
        }
    }
}

const rl = new RateLimiter(2000, 5);

for (let i=0; i<10; i++) {
    rl.execute("daniela");
}

await sleep();