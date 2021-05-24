// MY TASK MANAGER - TERMINAL
const fs = require('fs');
const taskFile = fs.readFileSync('manager.json', 'utf-8');
const doneFile = fs.readFileSync('manager2.json', 'utf-8');
const readline = require('readline');
let task = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let taskmanager = JSON.parse(taskFile);
let finishtask = JSON.parse(doneFile);
const saveData = (json, man) => {
    let data = JSON.stringify(man);
    fs.writeFile( json, data, finished);
    function finished(err) {
        return err;
    }
}

const menu = () => {
    task.question(`\n\nWelcome to your task manager, Press:\n
    1. to see all your tasks\n
    2. to add a task\n
    3. to delete a task\n
    4. to mark a task as done\n
    5. to clear the done list\n
    6. to Exit the task manager\n\n`, function (numTask) {
        let num = parseInt(numTask);
        switch(num){
            case 1:
                if (taskmanager.length === 0 && finishtask.length === 0 ){
                    console.log(`\nYour current list of tasks is empty`);
                    menu();
                }
                else if(taskmanager.length === 0 && finishtask.length>0){
                    console.log(`\nYour current list of task is empty`);
                    console.log(`\nYour list of done task(s): ${finishtask}`);
                    menu();
                }
                else if (taskmanager.length>0 && finishtask.length > 0){
                    console.log(`\nYour current list of tasks is ${taskmanager}`);
                    console.log(`\nYour list of done task(s): ${finishtask}`);
                    menu();
                }
                else{
                    console.log(`\nYour current list of tasks is ${taskmanager}`);
                    menu();
                }

                break;
            case 2:
                task.question("\nEnter a task that you want to add:\n", function (adding) {
                    taskmanager.push(adding);
                    console.log("\nThe task was added to the list.");
                    saveData('manager.json', taskmanager);
                    menu();
                })
                    break;
            case 3:
                task.question("\nEnter the task that you want to delete:\n", function(del) {
                    if(taskmanager.includes(del)){
                        taskmanager.splice(taskmanager.indexOf(del), 1);
                        console.log(`\nThe ${del} task was deleted from the list.`);
                        saveData('manager.json', taskmanager);
                        menu();
                    }
                    else{
                        console.log("\nYour input isn't in the list, maybe take a look at your list.");
                        menu();
                    }

                })
                    break;
            case 4:
                task.question("\nEnter the task that you want to mark as done:\n", function(done) {
                    if(taskmanager.includes(done)){
                        taskmanager.splice(taskmanager.indexOf(done), 1);
                        finishtask.push(done);
                        saveData('manager2.json', finishtask);
                        menu();
                    }
                    else {
                        console.log("\nYour input isn't in the list, maybe take a look at your list.");
                        menu();
                    }
                })
                break;
            case 5:
                finishtask.splice(0,finishtask.length);
                console.log("\nThe done list has been cleared.");
                saveData('manager2.json', finishtask);
                menu();
                break;
            case 6:
                saveData('manager2.json', finishtask);
                saveData('manager.json', taskmanager);
                task.close()
                break;
            default:
                console.log("\nYou must choose from 1 to 6.");
                menu();

        }
    })
}
menu();
