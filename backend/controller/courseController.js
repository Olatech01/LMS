const Course = require('../models/Course');


const createCourse = async (req, res) => {
  const { title, description, content } = req.body;

  try {
    const course = new Course({
      title,
      description,
      instructor: req.user.id,
      content,
    });
    await course.save();
    res.json(course);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};


const getCourses = async (req, res) => {
  try {
    const courses = await Course.find().populate('instructor', 'name email');
    res.json(courses);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};


module.exports = {
  createCourse,
  getCourses
}
