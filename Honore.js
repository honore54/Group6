const str = "Hello, World!";

function getCharacterAt(index) {
    return str.at(index);
}

console.log(getCharacterAt(0));  
console.log(getCharacterAt(7));  

console.log(getCharacterAt(-1)); 
console.log(getCharacterAt(-6)); 

console.log(getCharacterAt(20)); 
console.log(getCharacterAt(-20));

