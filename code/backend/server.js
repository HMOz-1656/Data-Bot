const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongo = require("mongoose");
const axios=require("axios")
require("dotenv").config();
const nodemailer = require("nodemailer");

//import registration model
const fs=require("fs");
const registrationSchema = require("./models/registration");
const productSchema = require("./models/product");
// Database connection
mongo
  .connect(process.env.MONGODB)
  .then(() => {
    console.log("DataBase is Connected");
  })
  .catch((e) => {
    console.log("Database is not connected;", e);
  });
//middlewares
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(cors());

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  // Pass to next layer of middleware
  next();
});


app.post("/forgetpassword",async(req,res)=>{
  const data1 = await registrationSchema.find({ email: req.body.email });


  if(data1.length==0){
    res.send({msg:"This email is not exist"})
  }
  else{
   // res.send({msg:"Check your email for password"})
    let trans=nodemailer.createTransport({
    
      service:"gmail",
      host: "smtp.ethereal.email",
      port: 587,
      secure: true, 
      auth:{
          user:process.env.ID,
          pass:process.env.PASS
      }
    }) 

    let mailOptions={
      from:process.env.ID,
       to:req.body.email,
       subject:"FORGET PASSWORD",
       text:`Your DATABOT password is ${data1[0].password} `
     };

     trans.sendMail(mailOptions,(err,data)=>{
      if(err){
          //res.send({msg:"This email is not correct"})
          console.log(err)
      }
      else{
        res.send({msg:"Check your email for password"})

      }
    });
    

  }

})



app.get("/userregistration/:username", (req, res) => {
  res.send({ name: req.params.username });
});

//signup
app.post("/userregistration", async (req, res) => {
  console.log(req.body);
  //res.send(req.body)

  const data1 = await registrationSchema.find({ email: req.body.email });
  console.log();

  if (data1.length == 1) {
    res.send("This Email is already exist");
  } else if (req.body.password != req.body.cpassword) {
    res.send("Enter same password");
  } else {
    const data = new registrationSchema();
    data.username = req.body.username;
    data.email = req.body.email;
    data.password = req.body.password;
    data.gender = req.body.gender;

    data
      .save()
      .then(() => {
        res.send("User Registered");
      })
      .catch((err) => {
        var error = err.message;
        res.send(error.slice(38));
      });
  }
});


app.get("/getproductss",()=>{

  var brands=["https://raw.githubusercontent.com/dataaapis/data/main/Leisure%20Club.json?token=GHSAT0AAAAAABW2LPYG63VJ5EXUFRELRIO4YWYYPVQ",
  "https://raw.githubusercontent.com/dataaapis/data/main/Shoeplant.json?token=GHSAT0AAAAAABW2LPYGXCOGLCHHJ277SBBMYWYX74Q",
  "https://raw.githubusercontent.com/dataaapis/data/main/alkaram.json?token=GHSAT0AAAAAABW2LPYGP3RRQRYRVVDWZWT4YWYYA5Q",
"https://raw.githubusercontent.com/dataaapis/data/main/bareeze.json?token=GHSAT0AAAAAABW2LPYGLIWH66NGAGTALOVEYWYYJLA",
"https://raw.githubusercontent.com/dataaapis/data/main/breakout.json?token=GHSAT0AAAAAABW2LPYGQJKZW743SI5KEEUOYWYYJ2A",
"https://raw.githubusercontent.com/dataaapis/data/main/edenrode.json?token=GHSAT0AAAAAABW2LPYHWNU5EORFPRZM2QKUYWYYKQQ",
"https://raw.githubusercontent.com/dataaapis/data/main/heels.json?token=GHSAT0AAAAAABW2LPYHPOQM5UKC22VU3E7KYWYYK5Q",
"https://raw.githubusercontent.com/dataaapis/data/main/j.json?token=GHSAT0AAAAAABW2LPYH7IWF7PZJNUGEU7WEYWYYLHA",
"https://raw.githubusercontent.com/dataaapis/data/main/metro.json?token=GHSAT0AAAAAABW2LPYGWECB7S56ZLRPXDYOYWYYMNQ",
"https://raw.githubusercontent.com/dataaapis/data/main/ndure.json?token=GHSAT0AAAAAABW2LPYHQ6BFKDDFXLLI2TTWYWYYM3Q",
"https://raw.githubusercontent.com/dataaapis/data/main/outfitters.json?token=GHSAT0AAAAAABW2LPYHBEPUIORGXZPHLYKEYWYYNNA",
"https://raw.githubusercontent.com/dataaapis/data/main/sanasafinaz.json?token=GHSAT0AAAAAABW2LPYGCIASOGF5E52YUFM2YWYYNWA",
"https://raw.githubusercontent.com/dataaapis/data/main/servis.json?token=GHSAT0AAAAAABW2LPYG6TNUTMZCNPGGKWLKYWYYOAA",
"https://raw.githubusercontent.com/dataaapis/data/main/sokamal.json?token=GHSAT0AAAAAABW2LPYGIRLROGHV5ECDRGUOYWYYOKQ",
"https://raw.githubusercontent.com/dataaapis/data/main/urbansole.json?token=GHSAT0AAAAAABW2LPYG2557UR54UUS2GSR2YWYYORQ",

]

brands.map(i=>{

  res.send(i.readdata(i.data))
})
})
//sigin

// app.post("/signin", async (req, res) => {
//   try {
//     const user = await registrationSchema.findOne(
//       {
//         email: req.body.email,
//         password: req.body.password,
//       },
//       "email"
//     );
//     if (!user) return res.status(404).send({ msg: "Invalid credentials" });
//     res.send({ user, msg: "log In Successful" });
//   } catch (error) {
//     res.status(500).send({ message: error.message });
//   }
// });

//////////////////////////
// app.post("/signin", async (req, res) => {
//   // console.log(req.body)
//   const data1 = await registrationSchema.find({ email: req.body.email });

//   if (data1.length == 0) {
//     res.send({msg:"This Email is not registered"});
//   } else if (data1[0].password != req.body.password) {
//     res.send({ msg: "Incorrent Password" });
//   } else {
//     res.send({
//       msg: "log In Successful",
//       login: true,
//     });
//   }
// });
app.post("/signin", async (req, res) => {
  // console.log(req.body)
  const data1 = await registrationSchema.find({ email: req.body.email });

  if (data1.length == 0) {
    res.send({msg:"This Email is not registered"});
  } else if (data1[0].password != req.body.password) {
    res.send({ msg: "Incorrent Password" });
  } else {
    res.send({
      user:data1[0],
      msg: "log In Successful",
     
    });
  }
});


//update user
app.post("/updateuser", async (req, res) => {
  const data = req.body;
  await registrationSchema
    .updateOne(
      { email: data.email },
      { $set: { username: data.username, password: data.password } }
    )
    .then(() => {
      res.send("user updated");
    })
    .catch(() => {
      res.send("there is something wrong");
    });
});

app.listen(process.env.PORT || 5000, () => {
  console.log("server is ON!");
});
 