//TASK MANAGER VG2021//

//declare GLOBAL VARIABLES//
let tasks = ["task1", "task2", "task3"];

//define FUNCTIONS//
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
};

//get the user CHOICE & program reaction//
tmmenu();

	rl.question("What is your choice ? ", (choice) =>{
	if (choice == 1){
		console.log(tasks);
		tmmenu();
	}
	
	else if (choice == 2){
		rl.question("type the task to add :", (taskadd) =>{
			tasks.push(taskadd);
			console.log("task added");
			tmmenu();
	})

	}else if(choice == 3){
		rl.question("type the index of the task to delete :", (taskdel) =>{
			tasks.splice(taskdel);
			console.log("task deleted");
			tmmenu();
		})

	}else if (choice == 4){
		rl.question("type the task to mark :", (taskdone) =>{
			tasks.done(taskdone);
			console.log("task marked as done");
			tmmenu();
		})
		
	}else if (choice == 5){		
		console.log("You're leaving this program \n BYE BYE BYE BYE BYE BYE !!!");
		rl.close();
		}
}
	);
	







