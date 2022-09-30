//description-string
//completed - Booleean

const mongoose = require("mongoose");

mongoose.connect(
    'mongodb+srv://Brender:Brexh1955@cluster0.z3ofwce.mongodb.net/task-manager-api'
);

const User = mongoose.model("User", {
    description: {
        type: String,
    },
    completed: {
        type: Boolean,
    },
});

const task = new User({
   description: "Go to gym"
   completed: false, 
});
 
person3
.save()
.then(() => {
    console.log(person3);
})
.catch((error) => {
    console.log("Error", error);
});