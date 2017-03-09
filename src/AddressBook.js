function AddressBook() {
  this.contacts = [];
  this.initialComplete = false;
}

AddressBook.prototype.addContact = function(contact) {
  this.contacts.push(contact);
};

AddressBook.prototype.getContact = function(index) {
  return this.contacts[0];
};

AddressBook.prototype.deleteContact = function (index) {
  this.contacts.splice(index, 1);
};

AddressBook.prototype.getInitialContacts = function(callback) {
  var self = this;

  setTimeout(function () {
    self.initialComplete = true;

    if (callback) {
      return callback();
    }
  }, 3);
};
