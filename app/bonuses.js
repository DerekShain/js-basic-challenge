//Given the string "team number 2", transform and return the string in camelCase
let str = "team number 2"

function camelCase(str) {
  let result="";
  for(let i=0, len = str.length; i<len; i++){
      let currentStr = str[i];
      let tempStr = currentStr.toLowerCase();
      if(i !=0){
          tempStr=tempStr.substr(0,1).toUpperCase()+tempStr.substr(1);
      }
      result +=tempStr;
  }
  console.log(result)
  return result;
}

