var isExtensionOn = true;

let button = document.getElementById("relais-hellsing");

function disableButton() {
  var disableButton = document.getElementById("relais-hellsing");
  if (disableButton.innerHTML === "false") {
    isExtensionOn = false;
  } else if (disableButton.innerHTML === "true") {
    isExtensionOn = true;
  } else {
    alert("Error in Hellsing.");
  }
}


// When the button is clicked, change setting
button.addEventListener("click", async () => {
  var disableButton = document.getElementById("relais-hellsing");
  var state = document.getElementById("state-button-hellsing");

  //Send message to event.js (background script) telling it to disable the extension.
  isExtensionOn = !isExtensionOn;
  chrome.extension.sendMessage({ cmd: "setOnOffState", data: { value: isExtensionOn } });

  chrome.extension.sendMessage({ cmd: "getOnOffState" }, function (response) {
    if (response !== undefined) {
      if (response) {
        state.innerHTML = "I'm running!";
        console.log("Hellsing started.")
      }
      else {
        state.innerHTML = "I'm not running!";
        console.log("Hellsing stopped.")
      }
    }
  });
});
