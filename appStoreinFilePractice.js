const fs=require("fs");
/*let obj={"purpose": "experimentation"}   //this is an object in JS and to make it to JSON ie string type have to use JSON.stringify() writing like JSON doesnot make it JSON since in JS now having flexibility to give different key values.
console.log(typeof obj);        //type is object
const jsonthing=JSON.stringify(obj)
console.log(typeof jsonthing);    //type is STRING
*/


const fileInputBuffer=fs.readFileSync('sample-json.json');
console.log(fileInputBuffer);
const fileData=fileInputBuffer.toString();
console.log(fileData);
const fileObject=JSON.parse(fileData);
console.log(fileObject);
fileObject.name="Amitabh";
fileObject.age=24;
console.log(fileObject);
const writeFileJson=JSON.stringify(fileObject);
console.log(writeFileJson);
fs.writeFileSync("sample-json.json", writeFileJson);



