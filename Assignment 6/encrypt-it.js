/*
 * Starter file 
 */
(function() {
  "use strict";

  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  window.addEventListener("load", init);

  /**
   * TODO: Write a function comment using JSDoc.
   */
  function init() {
    // Note: In this function, we usually want to set up our event handlers
    // for UI elements on the page.
    var encryptButton = document.getElementById("encrypt-it");
    encryptButton.addEventListener("click", handleClick);
  }

  // Add any other functions in this area (you should not implement your
  // entire program in the init function, for similar reasons that
  // you shouldn't write an entire Java program in the main method).

})();

function handleClick() {
  console.log("Button clicked!");

  let textArea = document.getElementById("input-text");
  let encryptedText = shiftCipher(textArea.value);
  
  let resultParagraph = document.getElementById("result");
  resultParagraph.textContent = encryptedText;
}

function shiftCipher(text) {
  text = String(text);
  text = text.trim().toLowerCase();
  let result = "";
  //console.log(text.length);
  for (let i = 0; i < text.length; i++) {
    if (text[i] < 'a' || text[i] > 'z') {
      result += text[i];
    }
    else {
      let letter = text.charCodeAt(i) - 97;
      let resultLetter = String.fromCharCode(((letter + 1) % 26) + 97);
      //console.log(resultLetter);
      result += resultLetter;
    }
  }
  //console.log(result);
  return result;
}