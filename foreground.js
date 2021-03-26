document.addEventListener('DOMContentLoaded', searchSecrets, false);

var targets = {
    "api": "api",
    "-key": "-key",
    "_key": "_key",
    "token": "token",
    "Begin OpenSSH Key": "begin openssh private key",
    "End OpenSSH key": "end openssh private key",
};

function searchSecrets() {

    content = document.documentElement.innerHTML.toLowerCase();

    found = []

    for (var key in targets) {
        elem = targets[key];
        if (content.indexOf(elem) > -1) {
            found.push(key);
        }
    }
    if (found.length > 0) {
        createBanner(found);
    } else {
        removeOldBanner();
    }
}

function createBanner(elem) {
    var banner = document.createElement("div");
    banner.className = "bannerHellsingClass";
    banner.id = "bannerHellsing"
    elems = ""
    for (var el in elem) {
        elems.concat(el.concat(", "));
    }
    banner.innerHTML = elem + " matched!";

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