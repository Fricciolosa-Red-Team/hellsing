document.addEventListener('DOMContentLoaded', createBanner, false);


function createBanner() {
    var banner = document.createElement("div");
    banner.className = "bannerHellsingClass";
    banner.id = "bannerHellsing"
    banner.innerHTML = "Secrets Hunted!";

    banner.setAttribute("style", "background-color: red !important; color: black !important; text-align: center !important;margin: auto; width: 100 %;");

    bannerOld = document.getElementById("bannerHellsing");

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

    if (bannerOld != null) {
        bannerOld.remove();
    }

    document.body.insertBefore(banner, document.body.childNodes[0]);
}

// const first = document.createElement('button');
// first.innerText = "SET DATA";
// first.id = "first";

// const second = document.createElement('button');
// second.innerText = "SHOUTOUT TO BACKEND";
// second.id = "second";

// document.querySelector('body').appendChild(first);
// document.querySelector('body').appendChild(second);

// first.addEventListener('click', () => {
//     chrome.storage.local.set({ "password": "123" });
//     console.log("I SET DATA");
// });

// second.addEventListener('click', () => {
//     chrome.runtime.sendMessage({message: 'yo check the storage'});
//     console.log('I SENT THE MESSAGE')
// });

// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//     console.log(request.message)
// });