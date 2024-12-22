mongoose = require('mongoose');

const MONGO_URI = 'mongodb://localhost:27017/week8';
mongoose.connect(MONGO_URI, {useUnifiedTopology: true,useNewUrlParser: true});
const db = mongoose.connection;

db.on('error', function(err)
{console.log("Error occured during connection"+err)}
);

db.once('conncected', function()
        {console.log(`Connected to ${MONGO_URI}`);}
        );
//creating the scheme
const PersonScheme = new mongoose.Schema({ name:{ type: String, required: true}, age: Number, Gender: String, Salary:Number});

//creating model named as modelname with collection named as personCollection
const person_doc = mongoose.model('modelname', PersonScheme,'personCOllection');

//creating a many document
manypersons=[{ name: 'Astup', age:24, Gender:"Male",Salary:5000},
    { name: 'Sanjya', age:28, Gender:"Male",Salary:3500},
    { name: 'Susheela', age:24, Gender:"Female",Salary:10000},
    { name: 'Hastu', age:24, Gender:"Male",Salary:5000}]

    // // person_doc.insertMany(manypersons)
    // .then(function(){
    //     console.log("Data inserted")
    // })
    // .catch(function(error){
    //     console.log(error)
    // // });

    // person_doc.find({})
    // .sort({Salary:1})
    // .select('name Salary age')
    // .limit(10)
    // .exec()
    // .then(docs => {console.log("showing multiple documents:");
    //      docs.forEach(function(Doc){ 
    //         console.log(Doc.age,Doc.name,Doc.Salary);
    //      });
    //     })
    //     .catch(err => console.error(err));

    person_doc.updateMany({age: 24}, {$set: {Salary: 6000}})
    .exec()
    .then(doc=>{
        console.log("Update")
        console.log(doc);
    })
    .catch(function(error){
        console.log(error);
    });