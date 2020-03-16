const fetch = require("node-fetch");

const headers = {
    "X-Stripe-Client-User-Agent": "{\"lang\": \"ruby\", \"publisher\": \"stripe\", \"uname\": \"Linux version 3.13.0-57-generic (buildd@brownie) (gcc version 4.8.2 (Ubuntu 4.8.2-19ubuntu1) ) #95-Ubuntu SMP Fri Jun 19 09:28:15 UTC 2015\", \"hostname\": \"caron\", \"lang_version\": \"2.1.2 p95 (2014-05-08)\", \"engine\": \"ruby\", \"platform\": \"x86_64-linux\", \"bindings_version\": \"1.23.0\"}",
        "Host": "api.stripe.com",
        "Accept-Encoding": "gzip, deflate",
        "Authorization": "Bearer sk_test_xOEwT736mUYLIx7hs0xTiCkI",
        "Content-Type": "application/x-www-form-urlencoded",
        "Accept": "*/*; q=0.5, application/xml",
        "User-Agent": "Stripe/v1 RubyBindings/1.23.0"
}
const body = "amount=123&currency=usd&card[number]=4242424242424242&card[exp_month]=12&card[exp_year]=2020";

const opts = {
    method: "POST",
    headers: headers,
    body: body
};
const ROOT = "https://api.stripe.com/v1";
const url = ROOT + "/charges";

fetch(url, opts).then(function (res) {
    console.log(res);
});
