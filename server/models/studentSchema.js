import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    regNo:String,
    studentName:String,
    grade:String,
    section:{
        type:String,
        default:'A'
    }

    //subjects:[String]

});

//module.exports=mongoose.model('Student', studentSchema);

const Student = mongoose.model('Student', studentSchema);

export default Student;