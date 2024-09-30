db.createCollection("tasks")

db.tasks.insertMany([
    {
        taskid:1,
        topicid:1,
        userid:1,
        task: "MongoDB task1",
        due_Date: new Date("16-oct-2020"),
        submitted: true,
    },
    {
        taskid:2,
        topicid:2,
        userid:2,
        task: "MongoDB task2",
        due_Date: new Date("18-oct-2020"),
        submitted: false,
    },
    {
        taskid:3,
        topicid:3,
        userid:3,
        task: "MongoDB task3",
        due_Date: new Date("16-nov-2020"),
        submitted: false,
    },
    {
        taskid:4,
        topicid:4,
        userid:4,
        task: "MongoDB task4",
        due_Date: new Date("17-nov-2020"),
        submitted: true,
    },
    {
        taskid:5,
        topicid:5,
        userid:5,
        task: "MongoDB task5",
        due_Date: new Date("26-oct-2020"),
        submitted: true,
    },
    {
        taskid:6,
        topicid:6,
        userid:6,
        task: "MongoDB task6",
        due_Date: new Date("28-oct-2020"),
        submitted: true,
    },
])

