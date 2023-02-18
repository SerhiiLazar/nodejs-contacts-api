const contacts = require("./contacts");

const invokeAction = async ({action, id, name, email, phone}) =>{
    switch(action){
        case "list":
            const allContacts = await contacts.listContacts();
            return console.log(allContacts);
        case "get":
            
    }
}

invokeAction({action: "list"});