 const Database = require('./config')

 const initDb = {
     async init(){

const db = await Database() 

 await db.exec(`CREATE TABLE profile (
     id INTEGER PRIMARY KEY AUTOINCREMENT,
     name TEXT,
     avatar TEXT,
     monthly_budget INT,
     hours_per_day INT,
     days_per_week INT,
     vacation_per_year INT,
     value_hour INT
 )`);

 await db.exec(`CREATE TABLE jobs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    daily_hours INT,
    total_hours INT,
    created_at DATETIME
 )`)

 await db.run(`INSERT INTO profile ( 
    name, 
    avatar,
    monthly_budget,
    days_per_week,
    hours_per_day, 
    vacation_per_year,
    value_hour
 ) VALUES (
    "Andreza",
    "https://avatars.githubusercontent.com/u/79468757?s=400&u=f4626bf406e9f60062aa6265cb4b3ceb726a8312&v=4",
    3000,
    5,
    5,
    4,
    70
 );`)

 await db.run(`INSERT INTO jobs (
    name,
    daily_hours,
    total_hours,
    created_at
)VALUES (
    "Pizzaria Guloso",
    2,
    1,
    1617514376018    
);`)


await db.run(`INSERT INTO jobs (
    name,
    daily_hours,
    total_hours,
    created_at
)VALUES (
    "OneTwo Project",
    3,
    47,
    1617514376018

    
);`)


await db.close()

}}

initDb.init()








