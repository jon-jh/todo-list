const newTask = function(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false, //remember your commas when turning functions into methods of other functions.
    logTaskState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },
    markComplete: function() {
      this.complete = true;
    }
  };
  return task;
};
const task1 = newTask("Clean cat litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "Clean clothes are nice!");
const tasksAll = [task1, task2];

// const logAll = function(myTasks) {
//   myTasks.forEach(task => task.logTaskState())
// }
// logAll(tasksAll)
// created a function to log all task states at once

task2.logTaskState(); // Clean Cat Litter has not been completed
task2.markComplete();
task2.logTaskState(); // Clean Cat Litter has been completed

// In JavaScript, a method is simply a function that is a property of an object.In your newTask function, you created two methods for each task object:

//   logTaskState: This method logs the current state of the task(whether it has been completed or not).
//     markComplete: This method marks the task as complete by setting the complete property to true.

