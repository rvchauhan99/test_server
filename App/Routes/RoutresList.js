const Global = require('../../Boot/Global');
// var fs = require('fs');
try {

    Global.Router.get('/api/getUserDetails',Global.App.Controllers.ConList.getUserDetails)

    Global.Router.post('/api/addUser',Global.App.Controllers.ConList.addUser)

} catch (error) {
    console.log("Error in Evolve Api Router :", error)
}


module.exports = Global.Router