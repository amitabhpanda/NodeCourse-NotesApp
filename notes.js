const fs=require('fs');
const chalk=require('chalk');



const loadNotesFromFile=()=>{

    try{
        const bufferData=fs.readFileSync("notes.json");
        const noteData=bufferData.toString();
        const noteDataObject=JSON.parse(noteData);
        return noteDataObject;
    }
    catch(e){
        return [];
    }
}

const saveNotestoFile=(noteDataArray)=>{
    const noteDataArrayString=JSON.stringify(noteDataArray);
    fs.writeFileSync("notes.json", noteDataArrayString);
}

//export function available to add serve as handler for ADD NOTES
const addNotes=(title, body)=>{
    const noteDataArray=loadNotesFromFile();
    noteDataArray.push({title:title,body:body});

    saveNotestoFile(noteDataArray);
}


//export function available to serve as handler for remove Notes
const removeNotes=(title)=>{
    const noteDataArray=loadNotesFromFile();
    const noteDataArrayafterDelete=noteDataArray.filter(note=>{
        return note.title!==title;
    })
    
    //saveNotestoFile(noteDataArrayafterDelete);

    if(noteDataArray.length===noteDataArrayafterDelete.length){
        console.log("not found");
        return false;
    }
    else{
        console.log("found");
        saveNotestoFile(noteDataArrayafterDelete);
        return true;
    }
}


const listNotes=() => {
    const notesArray=loadNotesFromFile();
    notesArray.forEach((note) => {
        console.log(note.title);
    })
}


const readNotes=(title) => {
    const notesArray=loadNotesFromFile();
    const found=notesArray.find((note)=>note.title===title)
    if(!found){
        console.log(chalk.red.inverse("No such note found with title-", title))
    }
    else{
        console.log(chalk.blue.inverse(title));
        console.log(found.body);
    }
}
module.exports={addNotes:addNotes,removeNotes:removeNotes,listNotes:listNotes,readNotes:readNotes};