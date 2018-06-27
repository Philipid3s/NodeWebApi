import {
  addNewContact,
  getContacts,
  getContactById,
  updateContact,
  deleteContact,
  testSqlServer
} from '../controllers/apiController'

const routes = (app) => {
    app.route('/contact')
    // GET endpoint
    .get((req, res, next) => {
        // middleware
        console.log('Request from: ${req.originalUrl}');
        console.log('Request type: ${req.method}');
        // call the execution of next function
        next();
      }, getContacts)

    // POST endpoint - Create a new contact in DB
    .post(addNewContact);

    app.route('/contact/:contactId')
    // GET Specific contact by id
    .get(getContactById)
    // PUT update contact
    .put(updateContact)
    // DELETE specific contact
    .delete(deleteContact);

    // only for Sql Server test connection
    app.route('/testSqlServer')
    .get(testSqlServer);
}

export default routes;
