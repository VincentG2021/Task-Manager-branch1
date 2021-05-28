//TASK MANAGER VG2021//

//declare GLOBAL VARIABLES//
// let tasksList = [];
// let taskDoneList = [];

//define FUNCTIONS//

//read into JSON files//
const fs = require('fs');
const taskslistFile = fs.readFileSync('taskslisttodo.json', 'utf-8');
const tasksdoneFile = fs.readFileSync('taskslistdone.json', 'utf-8');

//save data into JSON files//
let tasksList = JSON.parse(taskslistFile);
let taskDoneList = JSON.parse(tasksdoneFile);
const saveData = (json, man) => {
    let data = JSON.stringify(man);
    fs.writeFile(json, data, finished);
    function finished(err) {
        return err;
    }
}

//get user INPUT//
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



//log the task manager MENU//
const tmmenu = () => {
console.log(" \n Welcome to your task manager, Press: \n");
console.log("1. to see all your tasks \n");
console.log("2. to add a task \n");
console.log("3. to delete a task \n");
console.log("4. to mark a task as done \n");
console.log("5. to Exit the task manager \n");


//get the user CHOICE & program reaction//

// QUESTION
	rl.question("What is your choice ? ", (choice) =>{
//CHOICE 1 - SEE THE TASKS LIST
	if (choice == 1){
        if (tasksList.length === 0 && taskDoneList.length === 0 ){
            console.log(`\n Empty tasks lists.`);   
        }
        else if(tasksList.length === 0 && taskDoneList.length>0){
            console.log(`\n Empty to do tasks list.`);
            console.log(`\n Done tasks list: ${taskDoneList}`);   
        }
        else if (tasksList.length>0 && taskDoneList.length > 0){
            console.log(`\n To do tasks list: ${tasksList}`);
            console.log(`\n Done tasks list: ${taskDoneList}`);   
        }else{
            console.log(`\n To do tasks list: ${tasksList}`);  
        }
		tmmenu();
	}
    
//CHOICE 2 - ADD A TASK
	else if (choice == 2){
		rl.question("type the task to add:", (taskadd) =>{
			tasksList.push(taskadd);
			console.log(`${taskadd} added`);
            saveData('taskslisttodo.json', tasksList);
			tmmenu();
	})

//CHOICE 3 - DELETE A TASK
	}else if(choice == 3){
		rl.question("type the index of the task to delete: ", (taskdel) =>{
            if(tasksList.includes(taskdel)){
			tasksList.splice(tasksList.indexOf(taskdel), 1);
			console.log(`${taskdel} deleted`);
            saveData('taskslisttodo.json', tasksList);
            }else{
                console.log("\n This task is not in your 'to do' tasks list.");
            }
			tmmenu();
		})

//CHOICE 4 - MARK A TASK AS DONE
	}else if (choice == 4){
		rl.question("type the task to mark as done: ", (taskdone) =>{
            if(tasksList.includes(taskdone)){
			tasksList.splice(tasksList.indexOf(taskdone), 1);
			taskDoneList.push(taskdone);
			console.log(`${taskdone} marked as done`);
            saveData('taskslistdone.json', tasksdoneFile);
            }else{
                console.log("\n This task is not in your 'done' tasks list.");
            }
            tmmenu();
		})

//CHOICE 5 - EXIT TM
	}else if (choice == 5){		
		console.log("You're leaving this program \n BYE BYE BYE BYE BYE BYE !!!");
		rl.close();
		}
}
	);
};
tmmenu();
	