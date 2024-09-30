db.createCollection("attendance")

db.attendance.insertMany([
    {
        userid:1,
        topicid:1,
        attendance: true
    },
    {
        userid:2,
        topicid:2,
        attendance: true
    },
    {
        userid:3,
        topicid:3,
        attendance: true
    },
    {
        userid:4,
        topicid:4,
        attendance: false
    },
    {
        userid:5,
        topicid:5,
        attendance: false
    },
])