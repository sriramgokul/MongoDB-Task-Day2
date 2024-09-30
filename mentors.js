db.createCollection("mentors")

db.mentors.insertMany([
    {
        mentorid:1,
        mentorName:"Deepan Kumar",
        emailid:"deepankumar89@gmail.com",
        mentee_count:50,
    },
    {
        mentorid:2,
        mentorName:"Mahes Kumar",
        emailid:"Maheshkumar9@gmail.com",
        mentee_count:10,
    },
    {
        mentorid:3,
        mentorName:"Ganguly",
        emailid:"souravganguly8@gmail.com",
        mentee_count:20,
    },
    {
        mentorid:4,
        mentorName:"RajaLakshmi",
        emailid:"rajalakshmi@gmail.com",
        mentee_count:25,
    },
    {
        mentorid:5,
        mentorName:"Agarwal",
        emailid:"agarwal856@gmail.com",
        mentee_count:30,
    },
])