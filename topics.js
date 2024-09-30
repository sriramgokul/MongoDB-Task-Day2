db.createCollection("topics")

db.topics.insertMany([
    {
        topicid:1,
        topics_name:"Intro to MongoDB ",
        topic_Date: new Date("16-oct-2020"),

    },
    {
        topicid:2,
        topics_name:"creation of database, collections, documents ",
        topic_Date: new Date("18-oct-2020"),

    },
    {
        topicid:3,
        topics_name:"find - query & projection ",
        topic_Date: new Date("16-nov-2020"),

    },
    {
        topicid:4,
        topics_name:"use of operators in find() query",
        topic_Date: new Date("17-nov-2020"),

    },
    {
        topicid:5,
        topics_name:"basic cursor methods - map, toArray, pretty, forEach, limit, count, sort",
        topic_Date: new Date("26-oct-2020"),

    },
    {
        topicid:6,
        topics_name:"Aggregation",
        topic_Date: new Date("28-oct-2020"),

    },
])