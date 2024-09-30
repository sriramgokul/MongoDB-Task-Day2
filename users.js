db.createCollection("users")

db.users.insertMany([
    {
        userid: 1,
        name: "Sriramgokul",
        emailId:"sriramgokul22@gmail.com"
    },
    {
        userid:2,
        name:"RajKapoor",
        emailId:"rajkapoor74@gmail.com",
    },
    {
        userid:3,
        name:"Devaraj",
        emailId:"devaraj56@gmail.com",
    },
    {
        userid:4,
        name:"Hemarajan",
        emailId:"hemarajan86@gmail.com",
    },
    {
        userid:5,
        name:"Rajganesh",
        emailId:"rajganesh@gmail.com",
    },
])