// TaskRunner defintion
function TaskRunner(concurrent = 3) {
  if (concurrent <= 0) {
    throw new Error("At least 1 concurrent task should be possible");
  }
  this.available = concurrent;
  this.queue = [];
}
TaskRunner.prototype = {
  push: function (task) {
    if (this.available) {
      this._run(task);
    } else {
      this.queue.push(task);
    }
  },
  _run: function (task) {
    if (!task) return;
    this.available--;
    task.call(task, this._next.bind(this));
  },
  _next: function () {
    this.available++;
    this._run(this.queue.shift());
  }
};

// alternative definition
// class TaskRunner {
//   push(task) {

//   }
// }
module.exports = TaskRunner;
