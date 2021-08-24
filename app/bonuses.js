//Given the string "team number 2", transform and return the string in camelCase
let str = "team number 2"

function camelCase(str) {

    let newString = ""
    newString = str
    let s = "";
 
    for (let i = 0; i < newString.length; i++) {

        // check for spaces in the sentence
        if (newString[i] == ' ') {
            // conversion into upper case
            s += newString[i+1].toUpperCase();
            i++;
        }
 
        // If not space, copy character
        else
        s += newString[i];        
    }
 
    // return string to main
    return s;
}

