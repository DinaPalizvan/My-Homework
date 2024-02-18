//todo1:make a Phone constructor function that takes model and brand as parameter
//todo2:add a takePhoto function to its prototype that shows this sentence in the console:
//sentence: "Capturing photo with [phoneBrand] [phoneModel]"
//todo3:create an instance of Phone with any brand and model you want and store it in "iphone" variable
//todo4:invoke takePhoto in iphone

////////////Answers!!!!///////////
function Phone(model, brand){
    this.model=model
    this.brand=brand
}
Phone.prototype.takePhoto=function(){
    console.log(`Capturing photo with ${this.brand} ${this.model}`);
}
const iphone= new Phone("S20", "Samsung")
iphone.takePhoto()