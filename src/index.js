require("dotenv").config({
    path: "../.env"
});
const serverSetup = require("./server");
const connectDB = require("./config/db");
const seedCountry = require("./country");
const Country = require("./models/country");

const PORT = process.env.PORT || 4001;

connectDB().then(()=>{
    seedDB();
    serverSetup().listen(PORT, ()=>{
        console.log(`Server started on PORT: ${PORT}`)
    })
}).catch((err)=>{
    console.log("Mongo db connection failed", err);
})

const seedDB = async () => {
    await Country.deleteMany({});
    await Country.insertMany(seedCountry);
}