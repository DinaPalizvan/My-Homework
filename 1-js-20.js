// first you must have a good vision of "this" document to answer the questions

// *****************************Question 1***********************************

// Todo:complete the code to print "Hey, mom just called." in the console
// Note: you must use "this" keyword in your code

const call = {
  caller: 'mom',
  says: function() {
    console.log(`Hey, ${this.caller} just called`);
  }
};
call.says(); //>>>>> Hey, mom just called.

// *************************Answer Question 1*****************************
