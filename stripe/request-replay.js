const requests = require('./requestlog-customer-charges.json');
const assert = require("assert");
const fetch = require("node-fetch");
const ROOT = "https://api.stripe.com";

requests.forEach(async function(obj) {
    const res1 = await fetchingRequest(obj);
    console.log(res1.body);
    assert.equal(obj.response.code, res1.status);


});

async function fetchingRequest(obj) {
    // For each request, replay against Stripe API
    const request = obj.request;
    const response = obj.response;

    if (request.method == "GET") {
        delete request.body;
    }
    console.log(ROOT+request.url);
    return fetch(ROOT+request.url, request);
}

