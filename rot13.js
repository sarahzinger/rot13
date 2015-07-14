"use strict"
var ROT13 = function(message){
  this.message = message.toLowerCase();
  this.encryptKey = encryptKeyGenerator();
  this.decryptKey = decryptKeyGenerator();

};

ROT13.prototype.encrypt = function(){
  var letters = this.message.split("");
  this.message = [];
  var self = this;
  letters.forEach(function(letter){
    self.message.push(self.encryptKey[letter]);
  });
  return this.message.join("");
};

ROT13.prototype.decrypt = function(){
  var letters = this.message.split("");
  this.message = [];
  var self = this;
  letters.forEach(function(letter){
    self.message.push(self.decryptKey[letter]);
  });
  return this.message.join("");
};

function encryptKeyGenerator(){
  var key = {};
  var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  alphabet.forEach(function(letter, idx){
    if(alphabet[idx+13]){
      key[letter] = alphabet[idx+13];
    }
    else{
      key[letter] = alphabet[idx+13-26];
    }
  });
  key[" "] = " ";

  return key;
}

function decryptKeyGenerator(){
  var encryptKey = encryptKeyGenerator();
  var decryptKey = {};
  for (var letter in encryptKey) {
      if (encryptKey.hasOwnProperty(letter)) {
        decryptKey[encryptKey[letter]] = letter;
      }
  }
  decryptKey[" "] = " ";
  return decryptKey;
}

var command = process.argv.slice(2)[0];
var message = process.argv.slice(2)[1];
var rot13Instance = new ROT13(message);

if(command.toLowerCase() == "decrypt"){
  console.log(" ");
  console.log("Before Decryption:", message);
  console.log(" ");
  console.log(" *  *  * ");
  console.log(" *  *  * ");
  console.log(" *  *  * ");
  console.log(" *  *  * ");
  console.log(" *  *  * ");
  console.log(" ");
  console.log("After Decryption:", rot13Instance.decrypt())
}

if(command.toLowerCase() == "encrypt"){
    console.log(" ");
    console.log("Before Encryption:", message);
    console.log(" ");
    console.log(" *  *  * ");
    console.log(" *  *  * ");
    console.log(" *  *  * ");
    console.log(" *  *  * ");
    console.log(" *  *  * ");
    console.log(" ");
    console.log("After Encryption:", rot13Instance.encrypt())
}
