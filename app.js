const yargs=require("yargs");
const notes=require("./notes.js");
const chalk=require("chalk");


yargs.command({
    command: "add",
    describe: "This is to add notes",
    builder: {
        title: {
            describe: "Note Title",
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: "Note Body",
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argums){
        notes.addNotes(argums.title, argums.body);
    }
})

yargs.command({
    command: "remove",
    describe: "Remove a note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(args){
        const success=notes.removeNotes(args.title);
        if(success){
            console.log(chalk.green.inverse("Note removed!"));
        }
        else{
            console.log(chalk.red.inverse("No note found!"));
        }
    }
})

yargs.command({
    command: "list",
    describe: "this is to list the notes",
    handler(){
        console.log(chalk.blue.inverse("Your notes..."))
        notes.listNotes();
    }
})

yargs.command({
    command: "read",
    describe: "This to read a note",
    handler(args){
        notes.readNotes(args.title);
    }
})


yargs.parse();    //Highly important nothing was happening since this command was missed and was not considered important so on searching found out that without this the yargs wont parse any input and nothing will happen