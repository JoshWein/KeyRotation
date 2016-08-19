/**
 * Created by Josh on 8/18/2016.
 */
function decrypt() {
    var key = document.getElementById("key").value.toLowerCase();
    var content = document.getElementById("encryptedText").value;
    var decryptedText = "";
    var keyIndex = 0; // Handle offset in key due to spaces
    var normalizer = "a".charCodeAt(0); // Value to normalize against
    for (var i = 0; i < content.length; i++) {
        if (!content.charAt(i).match(/[a-z]/i)) {
            decryptedText += content.charAt(i);
            continue;
        }
        var origCode = content.toLowerCase().charCodeAt(i) - normalizer;
        var rotationValue = key.charCodeAt(keyIndex++ % key.length) - normalizer;
        var resultCode = (origCode - rotationValue) % 26;
        // If it's negative we need to wrap around the alphabet
        if (resultCode < 0) {
            resultCode = 26 + resultCode;
        }
        // Change the letter to uppercase if it was originally
        if(content.charAt(i) == content.charAt(i).toUpperCase()) {
            decryptedText += String.fromCharCode(resultCode + normalizer).toUpperCase();
        } else {
            decryptedText += String.fromCharCode(resultCode + normalizer);
        }
    }
    document.getElementById("decryptedText").value = decryptedText;
}

function encrypt() {
    var key = document.getElementById("key").value.toLowerCase();
    var content = document.getElementById("decryptedText").value;
    var decryptedText = "";
    var keyIndex = 0; // Handle offset in key due to spaces
    var normalizer = "a".charCodeAt(0); // Value to normalize against
    for (var i = 0; i < content.length; i++) {
        if (!content.charAt(i).match(/[a-z]/i)) {
            decryptedText += content.charAt(i);
            continue;
        }
        var origCode = content.toLowerCase().charCodeAt(i) - normalizer;
        var rotationValue = key.charCodeAt(keyIndex++ % key.length) - normalizer;
        var resultCode = (origCode + rotationValue) % 26;
        // Change the letter to uppercase if it was originally
        if(content.charAt(i) == content.charAt(i).toUpperCase()) {
            decryptedText += String.fromCharCode(resultCode + normalizer).toUpperCase();
        } else {
            decryptedText += String.fromCharCode(resultCode + normalizer);
        }
    }
    document.getElementById("encryptedText").value = decryptedText;
}