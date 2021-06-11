const student = require('../models/students');

exports.getRecords = (req, res, next) => {
    student.findAll().then(students => {
        res.render('pages/index', {
            students : students
        });
    }).catch(err => console.log(err));
  
}

exports.newStudent = (req, res, next) => {
    res.render('pages/newOrEditStudent', {
        editing : false
    });
}

exports.editStudent = (req, res, next) => {
    student.findByPk(req.params.id)
           .then(student => {
                res.render('pages/newOrEditStudent', {
                    editing : true,
                    student : student
                });
           })
    
}

exports.postNewStudent = (req, res, next) => {
   student.create({
        'Student Name': req.body.name,
        'Father Name': req.body.fname,
       'Email Address': req.body.email,
       Department : req.body.dept
   }).then(() => {
           res.redirect('/')
   })
      .catch(err => console.log(err));
}

exports.postUpdatedStudent = (req, res, next) => {
    student.findByPk(req.body.id)
           .then(student => {
               student['Student Name'] = req.body.name;
               student['Father Name'] = req.body.fname;
               student['Email Address'] = req.body.email;
               student['Department'] = req.body.dept;
               student.save().then(() => {
                res.redirect('/');
               }).catch(err => console.log(err))
           }).catch(err => console.log(err))
}

exports.deleteStudent = (req, res, next) => {
    student.destroy({ where : { id : req.params.id}})
           .then(() => {
                res.redirect('/');
           }).catch(err => {
               console.log(err)
           })
    
}