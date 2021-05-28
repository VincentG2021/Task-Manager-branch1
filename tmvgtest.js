//TASK MANAGER VG2021//

//declare GLOBAL VARIABLES//
let tasksList = [];
let taskDoneList = [];

//define FUNCTIONS//

//read into JSON files//
const readjson = require('fs');
const taskslistFile = readjson.readFileSync('taskslisttodo.json', 'utf-8');
const tasksdoneFile = readjson.readFileSync('taskslistdone.json', 'utf-8');

// //save data into JSON files//
// let tasksList = JSON.parse(taskFile);
// let finishtask = JSON.parse(doneFile);
// const saveData = (json, man) => {
//     let data = JSON.stringify(man);
//     fs.writeFile( json, data, finished);
//     function finished(err) {
//         return err;
//     }
// }

//get user INPUT//
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



//log the task manager MENU//
const tmmenu = () => {
console.log("Welcome to your task manager, Press:");
console.log("1. to see all your tasks");
console.log("2. to add a task");
console.log("3. to delete a task");
console.log("4. to mark a task as done");
console.log("5. to Exit the task manager");


//get the user CHOICE & program reaction//
// tmmenu();

	rl.question("What is your choice ? ", (choice) =>{
	if (choice == 1){
		console.log(tasksList);

		tmmenu();
	}
	
	else if (choice == 2){
		rl.question("type the task to add :", (taskadd) =>{
			tasksList.push(taskadd);
			console.log(`${taskadd} added`);
			tmmenu();
	})

	}else if(choice == 3){
		rl.question("type the index of the task to delete :", (taskdel) =>{
			tasksList.splice(tasksList.indexOf(taskdel), 1);
			console.log(`${taskdel} deleted`);
			tmmenu();
		})

	}else if (choice == 4){
		rl.question("type the task to mark as done:", (taskdone) =>{
			tasksList.splice(tasksList.indexOf(taskdone), 1);
			taskDoneList.push(taskdone);
			console.log(`${taskdone} marked as done`);
			tmmenu();
		})
		
	}else if (choice == 5){		
		console.log("You're leaving this program \n BYE BYE BYE BYE BYE BYE !!!");
		rl.close();
		}
}
	);
};
tmmenu();
	







