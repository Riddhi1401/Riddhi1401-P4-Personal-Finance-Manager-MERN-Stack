import mongoose from "mongoose";
import validator from "validator";
import { validate } from "./User";

// User Schema Model - (Name, email, password, creation Date) with validation rules
//new mongoose.Schema({feild1:{type:dtype,contraint:value},feild2:{type:dtype,contraint:value}})
//CREATE TABLE USER(name varchar(25) notnull)
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
    },
    phone: {
        type: Number,
        required: [true, "Contact is required"],
        unique : true,
        validate : validator.isPhone,
    },

    email: {
        type: String,
        required: [true, "Email is required"],
        unique : true,
        validate : validator.isEmail,
    },
    dob: {
        type: Date,
        required: [true, "Enter your Birth-Date"]
    },
    gender:{
        type: radio,
        required: [false, "Enter your Gender"]
    },
    maritalStatus:{
        type: String,
        required:[false,"Enter your Status"]
    },
    username:{
        type: String,
        required:[true, "Enter your Username"],
        unique : true,
        validate: validator.isUsername,
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength : [6, "Password Must Be Atleast 6 characters"],
    },
});

const User = mongoose.model("User", userSchema);

export default User;