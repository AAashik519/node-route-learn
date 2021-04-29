

const contacts = require('./Contacts')

exports.getAllContacts =  (req,res)=>{
    res.json(getAllContacts())
}