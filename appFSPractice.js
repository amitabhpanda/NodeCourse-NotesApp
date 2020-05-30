const fs=require("fs");

//write contents to a file and create file if it doesnt exist and
//if exists then overwrite previous content and write the content
//passed in second argument
fs.writeFileSync("hello.txt","This is for more and more practice!!! ");


//to append passed contents to a file using appendFileSync
const textToAppend="This is the text to be appended on running the file to hello.txt";
fs.appendFileSync("hello.txt",textToAppend);

const text=fs.readFileSync("hello.txt","UTF-8");

console.log(text.toString());