const db = require("./db")

const addData = (id,userName,date,budget)=>{
 return  db.User.findOne({id}).then(user=>{
        console.log(user);
        if(user){
            return {
                status:false,
                message:"not"
            }
        }
        else{
            const newUser = new db.User({
                id,
                userName,
                date,
                budget
            })
            newUser.save()
            return {
                status:true,
                message:"added"
            }
        }
    })

}

// const testData = () =>{
//     return db.User.find().then(user=>{
//         console.log(user);
//     })
// }

module.exports = {
    addData,
    //testData
}