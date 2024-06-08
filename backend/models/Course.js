const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: true 
},
  description: { 
  type: String, 
  required: true 
},
  instructor: { 
  type: mongoose.Schema.Types.ObjectId, 
  ref: 'User', 
  required: true 
},
  content: [
    {
      type: { type: String, 
      enum: ['video', 'quiz', 'assignment'], 
      required: true 
    },
      url: { 
        type: String 
    },
      text: { 
        type: String 
    },
  },
],
});

const Course = mongoose.model('Course', CourseSchema);
module.exports = Course;
