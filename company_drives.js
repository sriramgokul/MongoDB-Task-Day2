db.createCollection("companyDrives")

db.companyDrives.insertMany([
    {
        userid:1,
        drive_Date: new Date("24-Oct-2020"),
        company: "Microsoft",
    },
    {
        userid:2,
        drive_Date: new Date("25-Oct-2020"),
        company: "Altassian",
    },
    {
        userid:3,
        drive_Date: new Date("26-Oct-2020"),
        company: "BitDefender",
    },
    {
        userid:4,
        drive_Date: new Date("28-Oct-2020"),
        company: "Apple",
    },
    {
        userid:5,
        drive_Date: new Date("24-Nov-2020"),
        company: "Zoho",
    },
    {
        userid:6,
        drive_Date: new Date("1-Nov-2020"),
        company: "Tekion",
    },
])