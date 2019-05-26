/*
Question:
We have a list of various types of tasks to perform. 
 Task types are identified with an integral identifier: 
        task of type 1, task of type 2, task of type 3, etc. 
Each task takes 1 time slot to execute, and once we have executed 
a task we need cooldown (parameter) time slots 
to recover before we can execute another task of the same type.  

However, we can execute tasks of other types in the meantime.  
The recovery interval is the same for all task types. 
We do not reorder the tasks: always execute in order in which we received them on input. 

Given a list of input tasks to run, and the cooldown interval, 
    output the minimum number of time slots required to run them. 

Example: 
Tasks: 1, 1, 2, 1 - (7 slots)
Recovery interval (cooldown): 2
Output: 7  (order is 1 _ _ 1 2 _ 1)

1,2,3,1,2,3,1 

1,2,3,1,2,3,1 - 7 (7 slots)

1,1,1,2,3,2,3   1,-,-,1,-,-,1,2,3,-,2,3,1

1,2,3,1,2

1 - - 1     [1, 0, 0, 1]
  2 - - 2   [0, 2, 0, 0, 2]
    3 - -   [0, 0, 3] 
1 2 3 1 2

2,2,1,3,1

2 - - 2
        1 - - 1
          3
2 - - 2 1 3 - 1

1 - - 1
*/

function scheduleTasks(input, cooldown) {
  var slotCounter = 0;
  var locks = {};
  var processedTasks = 0;
  var i = 0;
  while (processedTasks < input.length) {
    var task = input[processedTasks];     // 3
    if (!locks[task] || locks[task] == 0) {
      processedTasks++;  // 3
      locks[task] = cooldown; // 2
    } 

    // Cooling down
    cooldownLocks(locks);
    slotCounter++; // 4
  }
  
  return slotCounter;
}

function cooldownLocks(locks) {
  Object.keys(locks).forEach(function (key) {
    locks[key]--;
  });
}

var input = [1,1,3,1,2]

