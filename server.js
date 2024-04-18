const express = require('express')
const cors = require('cors')
const bodyparser = require('body-parser')
const nodemailer = require('nodemailer')
const multer = require('multer')
const XLSX = require('xlsx')


const app = express();
app.use(bodyparser.json())
app.use(cors())
app.use(express.urlencoded({extended:true}))

// MongoDB Databases
const connexion = require('./connexion')
const Login  = require('./Schemas/Login')
const Forms = require('./Schemas/Forms')
const Students = require('./Schemas/Student')
const Faculties = require('./Schemas/Faculty')
const Approvals = require('./Schemas/approvals')

// MongoDB Schema Names
const {
  formSchemas,
  deptSchema,
  tnpSchema,
  nssSchema,
  iicSchema,
  facultySchema,
  studentSchema,
  iqacSchema
} = require('./imports');
const Student = require('./Schemas/Student')



// node mailer
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'anitsedusphere2000@gmail.com',
        pass: 'bmlsiuptkwcbfcis',
    },
});

app.post('/login',(req,res) => {
    const uname = req.body.uname
    const pwd = req.body.pwd
    Login.find({username:uname,password:pwd})
    .then(response => {
      console.log(response);
        if(response.length>0){
            res.status(200).send({login:true,regno:response[0].regno,role:response[0].role,fname:response[0].fullname,dept:response[0].department})
        }else{
            res.status(200).send({login:false})
        }
    }) 
    .catch(err => {
        console.log(err);
        res.status(404).send({login:false})
    })
})


app.post('/getforms',async (req,res) => {
  const role = req.body.role;
  await Forms.find({role:role},{_id:1,formname:1})
  .then(response => {
    res.status(200).send(response)
  })
  .catch(err => {
    res.status(404).send(err)
  })
})

app.post('/getform', async (req, res) => {
  try {
    const id = req.body.id;
    const form = await Forms.findById(id);
   
    if (!form) {
      return res.status(404).send("Form not found");
    }

    let response = form.toObject();

    if (form.role === 'student') {
      response.columns = response.columns.filter(column => !['studentName', 'branch', 'section'].includes(column.name));
    }
    else if (form.role === 'faculty') {
      response.columns = response.columns.filter(column => !['facultyName', 'branch'].includes(column.name));
    }


    res.status(200).json(response);
  } catch (err) {
    res.status(500).send(err.message);
  }
});



app.post('/forgotpassword',(req,res) => {
    Login.find({username:req.body.uname})
    .then(res1 => {
        if(res1.length > 0) {
            const mailOptions = {
                from : 'anitsedusphere2000@gmail.com',
                to : res1[0].username,
                subject : 'Password Recovery Mail',
                html: `<!DOCTYPE html>
                <html>
                <head>
                <style>
                  body {
                    font-family: Arial, sans-serif;
                    background-color: #f4f4f4;
                    margin: 0;
                    padding: 0;
                  }
                  .container {
                    max-width: 600px;
                    margin: 0 auto;
                    padding: 20px;
                    background-color: #ffffff;
                    border-radius: 10px;
                    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
                  }
                  .header {
                    text-align: center;
                    margin-bottom: 20px;
                  }
                  .header img {
                    max-width: 200px;
                    height: auto;
                  }
                  .content {
                    padding: 20px;
                    border-top: 1px solid #e0e0e0;
                  }
                  .btn {
                    display: inline-block;
                    padding: 10px 20px;
                    background-color: #007bff;
                    color: #ffffff;
                    text-decoration: none;
                    border-radius: 5px;
                    font-weight: bold;
                  }
                </style>
                </head>
                <body>
                  <div class="container">
                    <div class="header">
                      <img src="https://onlinesystem.anits.edu.in/images/logo.png" alt="Logo">
                      <h1 class="">Password Reset</h1>
                    </div>
                    <div class="content">
                      <p>Hello,</p> 
                      <p>We received a request to reset your password. To proceed, click the button below:</p>
                      <p style="color:'white'"><a class="btn" href="http://localhost:3000/sreset/${req.body.euname}">Reset Password</a></p>
                      <p>If you didn't request a password reset, please ignore this email.</p>
                      <p>Best regards,<br>Anits Edusphere</p>
                    </div>
                  </div>
                </body>
                </html>
                ` 
            };  
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                  console.log(error)
                    return error.message
                }
            });    
            res.status(200).json(true);
        }
        else{
            res.status(200).json(false);
        }
    })
    .catch((err) => {
      res.status(500).json(false);
    })
})

app.post('/resetpassword',(req,res) => {
    console.log(req.body);
    const uname = req.body.uname;
    const pass = req.body.pass;
    Login.updateOne({username:uname},{$set:{password:pass}})
    .then((response) => {
        response.acknowledged ? res.status(200).json(true)  : res.status(404).json(false);
        console.log(response);
    })
})

app.post('/verify_query',(req,res) => {
  console.log("verify_query",req.body);
  const reg_no = req.body.searchText
  Students.find({regno:reg_no})
  .then((response) => {
    console.log("response",response)
    if(response.length > 0) {
      res.status(200).json({status:true})
    }else{
      res.status(200).json({status:false})
    }
  })
  .catch((err) => {
    console.log("error",err)
    res.status(404).json({status:false});
  })
})

app.post('/getformnames', async (req, res) => {
  try {
    const role = req.body.role;
    const studentId = req.body.studentId; 
    const facultyId = req.body.employee_id; 
    let forms;
    if (studentId) {
      forms = await Forms.find({ role: role }, { _id: 1, formname: 1 });
      
      const filteredForms = [];
      for (const form of forms) {
        const exists = await formSchemas[form._id].findOne({ studentId: studentId });
        if (exists) {
          filteredForms.push(form);
        }
      }

      forms = filteredForms;
    }
    else if (facultyId) {
      forms = await Forms.find({ role: role }, { _id: 1, formname: 1 });
      
      const filteredForms = [];
      for (const form of forms) {
        const exists = await formSchemas[form._id].findOne({ facultyId:facultyId });
        if (exists) {
          filteredForms.push(form);
        }
      }

      forms = filteredForms;
    }
     else {
     forms = await Forms.find({ role: role }, { _id: 1, formname: 1 });
    }
    res.status(200).json(forms);
  } catch (err) {
    res.status(404).json(err);
  }
});



app.post('/getformdata', async (req, res) => {
  const id = req.body.id;
  const studentId = req.body.studentId;
  const employee_id = req.body.employee_id
  if (studentId) {
      try {
          // Retrieve form data for the given studentId
          const formData = await formSchemas[id].find({ studentId: studentId }, { _id: 0 });
          res.status(200).json(formData);
      } catch (error) {
          res.status(500).json({ error: 'Internal server error' });
      }
  }
  else if (employee_id) {
    try {
        const formData = await formSchemas[id].find({ facultyId: employee_id }, { _id: 0 });
        res.status(200).json(formData);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
}
   else {
      try {
          // Retrieve all form data if studentId is not provided
          const formData = await formSchemas[id].find({}, { _id: 0 });
          res.status(200).json(formData);
      } catch (error) {
          res.status(500).json({ error: 'Internal server error' });
      }
  }
});



app.post('/getcolnames',(req,res) => {
  const id = req.body.id;
  Forms.findById(id)
  .then(response => {
    res.status(200).json(response)
  })
  .catch(err => {
    res.status(404).json(err)
  })
})
app.post('/sendtoapprovals', async(req, res) => {
  const { formid, data } = req.body;
  try {
    const form = await Forms.findById(formid);
    if (!form) {
        return res.status(404).json({ success: false, message: 'Form not found' });
    }
    if (form.role === 'student' || form.role === 'faculty') {
        const insertedData = await Approvals.create({ formid, data, approval: "pending" });
        res.status(200).json({ success: true, message: 'Data inserted successfully', data: insertedData });
    } 
    else {
      formSchemas[formid].insertMany(data )
            }
} catch (error) {
  console.error('Error inserting data into approvals collection:', error);
  res.status(500).json({ success: false, message: 'Failed to insert data', error: error.message });
}
});


app.post('/sendtodb',(req,res) => {
  console.log(req.body)
  const data = req.body.data
  const id = req.body.formid
  formSchemas[id].insertMany(data)
  .then(response => {
    console.log(response)
  })
  .catch(err => {
    console.log(err)
  })
})


app.post('/getstudents',(req,res) => {
  Students.find({department:req.body.dept})
  .then(response => {
    res.status(200).json(response)
  })
  .catch(err => {
    res.status(404).json(err)
  })
})


app.post('/getstudentdetails',(req,res) => {
  Students.find({regno:req.body.id})
  .then(response => {
    console.log(response);
    res.status(200).json(response)
  })
  .catch(err => {
    res.status(404).json(err)
  })
})

app.post('/getapprovals', async (req, res) => {
  try {
    const { formid, dept } = req.body;

    // Fetch approvals where formid and approval match
    const approvals = await Approvals.find({ formid, approval: 'pending' });

    // Filter approvals based on both formid and branch matching the dept
    const filteredApprovals = approvals.filter(approval => {
      const { data } = approval;
      // Assuming the branch information is stored in the data field
      const branch = data.branch; // Adjust this according to your data structure
      return branch === dept; // Check if the branch matches the provided department
    });

    res.json(filteredApprovals);
  } catch (error) {
    console.error('Error fetching approvals:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


app.post('/approve', async (req, res) => {
  const { id, status } = req.body;

  try {
      const updatedApproval = await Approvals.findByIdAndUpdate(id, { approval: status }, { new: true });
      if (updatedApproval) {
          if (status === 'accepted') {
            const form = await formSchemas[updatedApproval.formid].insertMany(updatedApproval.data )
              console.log(form)
              console.log(updatedApproval)
              res.status(200).json({ updatedApproval, form });
          } else {
            console.log(updatedApproval)
              res.status(200).json(updatedApproval);
          }
      } else {
          return res.status(404).json({ error: 'Approval not found' });
      }
  } catch (error) {
      console.error('Error updating approval:', error);
      res.status(500).json({ error: 'An error occurred while updating the approval' });
  }
});


app.get('/getforms',async (req,res) => {
  await Forms.find({})
  .then(response => {
    res.status(200).send(response)
  })
  .catch(err => {
    res.status(404).send(err)
  })
})


const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.post('/importapi/addstudent',upload.single('file') , async (req,res) => {
    try{
      const workbook = XLSX.read(req.file.buffer, {type: 'buffer'});
      const sheet_name_list = workbook.SheetNames;
      const xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
      console.log(xlData);
      Students.insertMany(xlData)
      .then(response => {
        if(response.length > 0){
          res.status(200).json('success')
        }else{
          res.status(200).json('failed')
        }
      })
      .catch(err => {
        res.status(500).json('failed')
      })
    }catch(err){
        console.log(err);
    }
})

app.post('/importapi/addfaculty',upload.single('file') , async (req,res) => {
  try{
    const workbook = XLSX.read(req.file.buffer, {type: 'buffer'});
    const sheet_name_list = workbook.SheetNames;
    const xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
    console.log(xlData);
    Students.insertMany(xlData)
    .then(response => {
      if(response.length > 0){
        res.status(200).json('success')
      }else{
        res.status(200).json('failed')
      }
    })
    .catch(err => {
      res.status(500).json('failed')
    })
  }catch(err){
      console.log(err);
  }
})


app.post('/formapi/getformdata',(req,res) => {
  Forms.findById(req.body.id)
  .then(response => {
    res.status(200).json(response)
  })
  .catch(err => {
    res.status(404).json(err)
  })
})
app.post('/getformnamesappr', async (req, res) => {
  try {
    const role = req.body.role;
    const forms = await Forms.find({ role: role }, { _id: 1, formname: 1 });
    
    const responses = [];
    for (const form of forms) {
      const exists = await Approvals.exists({ formid: form._id, approval: 'pending' });
      if(exists){
      responses.push({ ...form.toObject(), exists });
    }}

    res.status(200).json(responses);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
});

app.post('/getAdditionalFields', async (req, res) => {
  const emp=req.body.employee_id;
    console.log(emp);
  try {
    
    if (req.body.studentId) {
      const students = await Student.find(
        { regno: req.body.studentId },
        { _id: 0, studentName: { $concat: ["$first_name", " ", "$last_name"] }, studentId: req.body.studentId, branch: "$department", section: 1 }
      );

      if (students.length === 0) {
        return res.status(404).json({ message: 'Student not found' });
      }

      const studentData = students[0];
      return res.json(studentData);
    } else if (req.body.employee_id) {
      const faculties = await Faculties.find(
        { employee_id: req.body.employee_id },
        { _id: 0, facultyName: { $concat: ["$first_name", " ", "$last_name"] }, facultyId: req.body.employee_id, branch:"$department"}
      );

      if (faculties.length === 0) {
        return res.status(404).json({ message: 'Faculty not found' });
      }

      const facultyData = faculties[0];
      return res.json(facultyData);
    } else {
      return res.status(400).json({ message: 'Invalid request: studentId or facultyId must be provided' });
    }
  } catch (error) {
    console.error('Error fetching additional fields:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.post('/getfacultydetails',(req,res) => {
  Faculties.find({employee_id:req.body.id})
  .then(response => {
    console.log(response);
    res.status(200).json(response)
  })
  .catch(err => {
    res.status(404).json(err)
  })
})
app.listen(8000,() => {
    console.log("Listening on 8000");
})
