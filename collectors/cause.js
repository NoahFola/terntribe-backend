const Cause = require("../models/causes")
const Contribution = require("../models/contribute")


const createNewCause = async (req,res)=>{
    try {
        let newCause = req.body
        if(!(typeof(newCause.Title) == "string" && typeof(newCause.Description) == "string" && typeof(newCause.imageURL) == "string" && Object.keys(newCause).length <= 3 )){
            return res.send("Invalid Cause Format")
        }
        newCause.Contribution = []
        const newC = new Cause(newCause)
        await newC.save()
        .then(res.send(`new Cause saved successfully`))
    } catch (error) {
        console.log(error)
        res.send("Couldn't create new cause")
    }
}


const getAllCauses = async (req,res)=>{
    try{
    res.send(await Cause.find())
    }
    catch(err){
        console.log(err);
    }
}

const getSelectedCause = async (req , res)=>{
    try{    
        res.send(await Cause.findById(req.params.id).catch((err)=>{
            return "Cause not found"
        })
    )}
    catch(err){
        console.log(err);
    }
}

const updateCause = async (req , res) => {
    try {
        const id = req.params.id
        const update = req.body
        try {
            const result = await Cause.updateOne({"_id" : id}, update)
            if (result.acknowledged) {
                if (result.matchedCount > 0) {
                    if (result.modifiedCount > 0) {
                        res.send('Update successful.');
                    } else {
                        res.send('No changes made; cause was already up to date.');
                    }
                } else {
                    res.send('No cause found with that ID.');
                }
            } else {
                res.send('Update not acknowledged.');
            }

        } catch (error) {
            res.send("Couldn't update cause")
            console.log(error);
        }
       
        
    } catch (error) {
        console.log(error);
    }
}

const deleteCause = async (req, res) => {
    try {        
        const result = await Cause.deleteOne({ "_id": req.params.id });
        if (result.deletedCount === 0) {
            return res.status(404).send("Cause not found");
        }
        
        res.send("Cause deleted successfully");
    } catch (err) {
        console.error(err);
        res.send("An error occurred while deleting the cause");
    }
}

const contributeToCause = async(req , res) => {
    let id = req.params.id

    const mutableCause = await Cause.findById(id).catch((err)=>{
        console.log(err);
        return res.send("Cause not found")
    })

    let newContribution = req.body
    if(!(typeof(newContribution.Name) == "string" && typeof(newContribution.Email) == "string" && typeof(newContribution.Amount) == "string" && Object.keys(newContribution).length <= 3 )){
        return res.send("Invalid Contribution")

    }      
    const newObj = {}
    const mutableArr = mutableCause.Contribution
    newObj.Contribution =  [...mutableArr , newContribution]

    const result = await Cause.updateOne({"_id" : id}, newObj)
    if (result.acknowledged) {
        if (result.matchedCount > 0) {
            if (result.modifiedCount > 0) {
                res.send('Update successful.');
            } else {
                res.send('No changes made; cause was already up to date.');
            }
        } else {
            res.send('No cause found with that ID.');
        }
    } else {
        res.send('Update not acknowledged.');
    }
}


module.exports = {
    createNewCause,
    getAllCauses,
    getSelectedCause,
    updateCause,
    deleteCause,
    contributeToCause
}