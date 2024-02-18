//?In this exercise, you will use object literals to make cleaner constructors for objects.
//todo1:Change the Video constructor function to accept a single object literal argument instead of multiple arguments.
//hint:you must have only one argument like "params" as an object that contains all other arguments.
//todo2:add watch function to the Video prototype to console log this sentence:
//"You watch all $VideoSeconds$ seconds of $VideoTitle$
//todo3:Create a instance of Video constructor and call watch() on it.

function Video(params) {
  this.title = params.title;
  this.uploader = params.uploader;
  this.seconds = params.seconds;
}
Video.prototype.watch=function(){
  console.log(`You have watched all ${this.seconds} seconds of ${this.title}`)
}
const test=new Video({title:"spange bob:D", uploader: "spange bob creators(i have no idea)", seconds: 541})
test.watch()

