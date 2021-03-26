document.addEventListener('DOMContentLoaded', searchSecrets, false);

var targets = {
    "Weglot Api Key": ["api_key: 'wg_", "api_key:'wg_", "api_key:wg_", "apikey:wg_"],
    "OpenSSH Key": ["begin openssh private key", "end openssh private key"]
};

function searchSecrets() {

    content = document.documentElement.innerHTML.toLowerCase();

    found = []

    for (var key in targets) {
        elem = targets[key];
        for (var i = 0; i < elem.length; i++) {
            element = elem[i]
            if (content.indexOf(element) > -1) {
                found.push(key);
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
    elems = "";
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