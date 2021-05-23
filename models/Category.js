const mongoose = require("mongoose");
const { Schema, model }=mongoose;
const categorySchema= new Schema({
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    }
  },
  { timestamps: true }
);

module.exports= Category= model("category", categorySchema);