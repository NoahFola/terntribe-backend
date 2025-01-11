const Cause = require("../models/causes")


const createNewCause = async (req,res)=>{
    try {
        console.log(req.body);
        let newCause = req.body
        if(!(typeof(newCause.Title) == "string" && typeof(newCause.Description) == "string" && typeof(newCause.imageURL) == "string" && Object.keys(newCause).length <= 3 )){
            return res.send("Invalid Book Format")
        }
        const newC = new Cause(newCause)
        await newC.save()
        .then(res.send(`new Cause saved successfully`))
    } catch (error) {
        console.log(error)
        res.send("Couldn't create new cause")
    }
}
module.exports = createNewCause