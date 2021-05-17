// mongoose create the models
const mongoose = require("mongoose");
const { Schema, model }=mongoose;
const userSchema= new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    isAdmin: {type: Boolean, default: false, required: true},
    phone: Number,
    role: {
      type: String,
      enum: ["user", "admin", "super-admin"],
      default: "user",
    },
    },{timestamps: true,});
    
    userSchema.virtual("fullName").get(function () {
      return `${this.firstName} ${this.lastName}`;
    });

module.exports= User= model("user", userSchema);

  