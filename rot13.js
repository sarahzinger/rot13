"use strict"
var ROT13 = function(message){
  this.message = [];
  this.letters = message.toLowerCase().split("");
  this.encryptKey = encryptKeyGenerator();
};

ROT13.prototype.encrypt = function(){
  var self = this;
  this.letters.forEach(function(letter){
    self.message.push(self.encryptKey[letter]);
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

var message = process.argv.slice(2)[0];
var rot13Instance = new ROT13(message);
console.log(" ");
console.log("Before Encryption:", message);
console.log(" ");
console.log(" *  *  * ");
console.log(" *  *  * ");
console.log(" *  *  * ");
console.log(" ");
console.log("After Encryption:", rot13Instance.encrypt());
