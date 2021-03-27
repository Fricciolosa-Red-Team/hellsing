document.addEventListener('DOMContentLoaded', searchSecrets, false);
searchSecrets();

var targets = {
    "Generic Api Key": ["?key=", "?api_key=", "?apikey=", "apikey", "api-key", "api_key", "access_key", "access-key", "accesskey", "api-token", "api_token"],
    "Weglot Api Key": ["api:wg_", "api:'wg_", 'api:"wg_', "key:'wg_", "key:wg_",
        'key:"wg_', "api=wg_", "api='wg_", 'api="wg_', "key='wg_", "key=wg_", 'key="wg_'],
    "Google Api Key": ["key=alza", "key:alza", "key:aiza", "key=aiza"],
    "Gitlab Personal Access Token": ["projects?private_token"],
    "GMail OAuth2.0": [".apps.googleusercontent.com"],
    "Wakatime Api Key": ["wakatime.com/api/v1/users/current/projects/?api_key"],
    "WPEngine Api Key": ["wpe_apikey"],
    "ButterCMS Api Key": ["api.buttercms.com/v2/posts/?auth_token"],
    "Bit.ly Access Token": ["api-ssl.bitly.com/v3/shorten?access_token"],
    "Picatic Api Key": ["sk_live_"],
    "Stripe Api Key": ["sk_live_"],
    "Square Access Token": ["sqOatp-"],
    "Square OAuth Secret": ["q0csp-"],
    "Facebook AppSecret": ["facebook.com/oauth/access_token?"],
    "HubSpot Api Key": ["?hapikey"],
    "GitHub Client ID": ["?client_id", "&client_id"],
    "GitHub Client Secret": ["?client_secret", "&client_secret"],
    "Circle-CI Access Token": ["circle-token"],
    "PayPal/Braintree Access Token": ["access_token,production"],
    "Amazon AMS Auth Token": ["amzn.mws"],
    "AWS Secret Key": ["AKIA"],
    "OpenSSH Private Key": ["beginopensshprivatekey", "endopensshprivatekey"],
    "RSA Private Key": ["beginrsaprivatekey", "endrsaprivatekey"],
    "Private Key": ["beginprivatekey", "endprivatekey"]
};

function searchSecrets() {

    content = document.documentElement.innerHTML.toLowerCase().replaceAll(/\s/g, '');

    found = []

    for (var key in targets) {
        elem = targets[key];
        for (var i = 0; i < elem.length; i++) {
            element = elem[i]
            if (content.indexOf(element) > -1) {
                found.push(key);
                break;
            }
        }
    }
    var mySet = new Set(found);
    if (mySet.size > 0) {
        createBanner(Array.from(mySet));
    } else {
        removeOldBanner();
    }
}

function createBanner(found) {
    removeOldBanner();
    var banner = document.createElement("div");
    banner.className = "bannerHellsingClass";
    banner.id = "bannerHellsing";
    elems = "Possible ";
    for (i = 0; i < found.length; i++) {
        if (i == found.length - 1) {
            elems = elems.concat(found[i].concat(" "));
        } else {
            elems = elems.concat(found[i].concat(", "));
        }
    }
    banner.innerHTML = elems + "matched!";

    banner.setAttribute("style", "background-color: red !important; color: black !important; \
text-align: center !important; position: fixed !important; top: 0 !important; \
z-index: 100000 !important; margin: auto !important; width: 100% !important;");

    document.body.insertBefore(banner, document.body.childNodes[0]);
}

Element.prototype.remove = function () {
    this.parentElement.removeChild(this);
}
NodeList.prototype.remove = HTMLCollection.prototype.remove = function () {
    for (var i = this.length - 1; i >= 0; i--) {
        if (this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
        }
    }
}

function removeOldBanner() {
    bannerOld = document.getElementById("bannerHellsing");

    if (bannerOld != null) {
        bannerOld.remove();
    }
}