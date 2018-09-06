const mongoose = require('mongoose');



mongoose.connect('mongodb://localhost/mongoose-intro-example');


const wolfSchema = {
     name: {type: String},
     furQuality: String,
     packName: String,
     age:{ type: Number, min: 0, max: 50}
     }


const Wolf = mongoose.model('Wolf', wolfSchema );


// const blah = new Wolf({name: 'LoneStar', furQuality: 'medium-poor', packName: 'No Pack', age: 11})

    // blah.save()
    // .then((theThingWeGetBackIfPromiseIsResolvedSuccesfully)=>{
    //     console.log(theThingWeGetBackIfPromiseIsResolvedSuccesfully)
    // })
    // .catch((theError)=>{
    //     console.log(theError)
    // })


    // const fluffy = {name: 'Fluffy', furQuality: 'Top-Tier', packName: 'The Alphas', age: 4}
    // const snowflake = {name: "SnowFlake", furQuality: "High", packName: "The Alphas", age: 9}
     
    // Wolf.create([fluffy, snowflake])
    // .then((response)=>{
    //     console.log(response)
    // })
    // .catch((err)=>{
    //     console.log(err)
    // })


    // Wolf.create({
    //     furQuality: "The Best",
    //     packName: "The CoolWolves",
    //     age: 2
    // })
    // .then((response)=>{
    //     console.log('0o0o0o0o0o0o0o0o0o0o0o0o0o0o0o',response)

    // })
    // .catch((err)=>{
    //     console.log('=-=-=-=-=-=-=-=-=-=-=',err)

    // })




    // Wolf.findByIdAndRemove('5b914171bc62b538d53b4d82')
    // .then((theThingIGetBack)=>{
    //     console.log(theThingIGetBack)

    // })
    // .catch((theErrorThing)=>{
    //     console.log(theErrorThing)
    // })



    // Wolf.findOne({name: 'CoolWolf55'})
    // .then((theWolf)=>{
    //     Wolf.findByIdAndRemove(theWolf._id)
    //     .then((response)=>{
    //     })
    //     .catch((err)=>{
    //         console.log(err)
    //     })
    // })
    // .catch((err)=>{
    //     console.log(err)
    // })


    // Wolf.deleteOne({name: 'CoolWolf55'})
    // .then((response)=>{
    //     console.log(response)
    // })
    // .catch((err)=>{
    //     console.log(err)
    // })



    Wolf.findByIdAndUpdate('5b913ce7f61653381c8bb39a', {name: "Fido", packName: "The CoolWolves"})
    .then((response)=>{
        console.log(response)
    })
    .catch((err)=>{
        console.log(err)
    })

