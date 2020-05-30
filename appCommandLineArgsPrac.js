const validator=require('validator');
const chalk=require('chalk');
const yargs=require('yargs');


//console.log(validator.isEmail("adfs@dfs.com"));

//console.log(chalk.red.inverse("Error Beyy!!"));


//console.log(process.argv);


//console.log("dgadf",yargs.argv);
//IMP--if we use yargs.argv any where within function before setting it 
//     up with commands, then it will have erratic behaviour ie if we
//     use --help in cmd line then it will stop program execution 
//     itself at this command and output whatever has been configured
//     uncomment above line and see(even the dgadf text wont print as
//     yargs.argv will execute and program will simply output the --help)




//console.log("Hry"); 
//even this wont print and infact nothing else will print once
//yargs.argv is executed when we call program with --help option


//const func=yargs.argv._[0];
yargs.version("1.1.0");

//command setup to add a note
yargs.command({
    command: "add",
    describe: "This is to add a note", //this description  will only come in the --help command
    builder: {                         //builder property to only give the configurations for various options that we expect. However the yargs package will still parse the options passed in as argument in the cmd as --option
        title: {                       //give the name of the property want to define as the property of the object given as value for "builder" property
            describe: "Note Title",    //NOTE: this description or any other mention of configured options wont come in the "node app.js --help" but will come in "node app.js <command> --help" for eg.- "node app.js add --help", the --help command gives output according to the argument mentioned directly to its left.
            demandOption: true,        //give this if we need to pass this option for the command. If we dont give proper option then will throw error showing the required commands.
            type: 'string'             //I think by default the value accepted is true and if we dont give anything after = for option, then it will take true but if given string then will auto take blank string
        },
        body: {
            describe: "Note Body",
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argums){        //if we mention the builder or not, then also by default we can receive the yargs.argv array as value for this function call and we can access the property. Has no relation with builder defined or not. Builder is only to add extra configurations to the options that we want to receive and set them up explicitly
        console.log("This is the function to add a note with note title:",argums.title,"and note body:", argums.body);
    }
})

//command setup to remove a note
yargs.command({
    command: 'remove',
    describe: 'This is to remove a note',
    handler: function(argums){
        console.log("This is the function to remove a note",argums);
    }
})

//command setup to listing notes
yargs.command({
    command: "list",
    describe: "List out the notes",
    handler: function(){
        console.log("This is the function to list out notes");
    }
})

//command to setup to read notes
yargs.command({
    command: "read",
    describe: "Read the notes",
    handler: function(){
        console.log("this is the function to read the notes");
    }
})
//yargs.argv; ---this is required to tell the yargs package to parse
//                and produce the output of argv.

yargs.parse(); //---this is the general function to tell yargs to parse
               // the command line and extract information.
                //parsing is its sole purpose.

