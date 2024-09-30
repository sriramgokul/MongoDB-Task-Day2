// 1) Find all the topics and tasks which are thought in the month of October

db.topics.aggregate([
    {
        $lookup:{
            from:"tasks",
            localField:"topicid",
            foreignField:"topicid",
            as : "topics and tasks of October"
        }
    },
    {$match: {topic_Date: {$gte:new Date("2020-10-01"),$lt: new Date("2020-10-31")}}},
])

// 2)Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020

db.companyDrives.find(
    {
        drive_Date: {$gte:new Date("2020-10-15"),$lt:new Date("2020-10-31")}
    }
)

// 3) Find all the company drives and students who are appeared for the placement.

db.companyDrives.aggregate([
    {
        $lookup: {
            from: "users",
            localField: "userid",
            foreignField: "userid",
            as: "Students appeared for placement"
        }
    },
    {
        $project: {_id:0,company:1,drive_Date:1,students:"$Students appeared for placement"}
    }
])

// 4) Find the number of problems solved by the user in codekata

db.codekata.aggregate([
    {
        $lookup: {
            from: "users",
            localField:"userid",
            foreignField:"userid",
            as: "users"
        }
    },
    {
        $group: {_id:{userid:"$userid",username:"$users.name"},total_problems_solved:{$sum:"$problems"}}
    }
])

// 5) Find all the mentors with who has the mentee's count more than 15

db.mentors.find({mentee_count:{$gt:15}})

// 6) Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020

db.attendance.aggregate([
    {
        $lookup: {
            from: "topics",
            localField: "topicid",
            foreignField: "topicid",
            as: "topics"
        }
    },
    {
        $lookup: {
            from: "tasks",
            localField: "topicid",
            foreignField: "topicid",
            as: "tasks"
        }
    },
    {
        $match: {
            attended: false,
            "tasks.submitted": false,
            $and: [
                { "topics.topic_date": { $gte: new Date("15-oct-2020") } },
                { "topics.topic_date": { $lte: new Date("31-oct-2020") } },
                { "tasks.due_date": { $gte: new Date("15-oct-2020") } },
                { "tasks.due_date": { $lte: new Date("31-oct-2020") } }
            ]
        }
    },
    {$count: "No_of_students_absent"}])


