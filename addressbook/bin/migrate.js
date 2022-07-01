// bin/migrate.js

var db = require('../routes/database');
db.sequelize.sync();
