function exampleSimpleTask(done, name) {
  console.log(`Task ${name} is starting`)
  setTimeout(() => {
    done()
    console.log(`Task ${name} is done`)
  }, Math.random() * 10000)
}

function createExampleSimpleTask(name) {
  return done => exampleSimpleTask(done, name)
}

function TaskRunner(concurrency) {
  this.limit = concurrency
  this.queue = []
  this.active = 0
}

TaskRunner.prototype.nextTask = function() {
  if (this.queue.length) this.run(this.queue.shift())
}

TaskRunner.prototype.run = function(task) {
  this.active++
  task(() => {
    this.active--
    this.nextTask()
  })
}

TaskRunner.prototype.push = function push(task) {
  if (this.active >= this.limit) {
    this.queue.push(task)
  } else {
    this.run(task)
  }
}

const task = new TaskRunner(3)

task.push(createExampleSimpleTask('a')) // executes immediately
task.push(createExampleSimpleTask('b')) // executes immediately
task.push(createExampleSimpleTask('c')) // executes immediately
task.push(createExampleSimpleTask('d')) // should wait until one of the running tasks completes
task.push(createExampleSimpleTask('e')) // should wait until one of the running tasks completes
