

class Contacts{
    constructor(){
        this.contacts =[]
    }

    getAllContacts(){
        return this.contacts
    }

    getContactsById(id){
     return this.contacts.find(contact => contacts.id == id)
    }

    creactContact(contact){
        contact.id = this.contacts.length + 1 
        this.contacts.push(contact)
        return contact
    }

    updateContactByid(id,updatedContact){
     let index = this.contacts.findIndex(contact => contact.id == id)

     this.contacts[index].name = updatedContact.name || this.contacts[index].name

     this.contacts[index].phone = updatedContact.phone || this.contacts[index].phone

     this.contacts[index].email = updatedContact.email || this.contacts[index].email


        return this.contacts[index]
    }

    deleteContactById(id){
        let index = this.contacts.findIndex(contact => contact.id ==id)
        
        let deletedObject = this.contacts[index]

        this.contacts=this.contacts.filter(contact => contact.id !==id)

        return deletedObject;
 

    }

}


 module.exports = new Contacts()