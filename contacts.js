const fs = require("fs/promises");
const path = require("path");

const contactsPath = path.join(__dirname, "db/contacts.json");

const listContacts = async () => {
    const data = await fs.readFile(contactsPath);
    return JSON.parse(data);

}

const getContactById = async (contactId) => {
    const contact = await listContacts();
    const result = contact.find(item => item.contactId === contactId);
    return result || null;
}



module.exports = {
    listContacts,
    getContactById,

}