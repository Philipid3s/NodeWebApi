import mongoose from 'mongoose';
import { ContactSchema } from '../Models/apiModel';

const Contact = mongoose.model('Contact', ContactSchema);

export const addNewContact = (req, res) => {
  let newContact = new Contact(req.body);

  newContact.save((err, contact) => {
    if (err) {
      res.send(err);
    }
    res.json(contact);
  });
};

export const getContacts = (req, res) => {
  Contact.find({}, (err, contact) => {
    if (err) {
      res.send(err);
    }
    res.json(contact);
  });
};

export const getContactById = (req, res) => {
  Contact.findById(req.params.contactId, (err, contact) => {
    if (err) {
      res.send(err);
    }
    res.json(contact);
  })
}

export const updateContact = (req, res) => {
    Contact.findOneAndUpdate({ _id: req.params.contactId}, req.body, { new: true }, (err, contact) => {
        if (err) {
            res.send(err);
        }
        res.json(contact);
    })
}

export const deleteContact = (req, res) => {
    Contact.remove({ _id: req.params.contactId }, (err, contact) => {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'Successfully deleted contact'});
    })
}

export const testSqlServer = (req, res) => {

  var sql = require('mssql');

  // Open Sql Server Configuration Manager,
  // and enable TCP/IP protocol from SQL Server Network Configuration
  // Port 1433
  console.log("Connecting sql server...");
  sql.connect(config, function (err) {
    if (err) {
      console.log(err);
      return;
    };

    var request = new sql.Request();

    // query to the database and get the records
    request.query('SELECT * FROM xxx', function (err, recordset) {
      if (err) {
        console.log(err);
        return;
      };

    // send records as a response
    res.send(recordset);
    });
  });
}
