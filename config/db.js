const dbName = 'genericdb'

const mongoose = require('mongoose');
mongoose.connect(`mongodb://localhost/${dbName}`, {useNewUrlParser: true, useUnifiedTopology: true});
module.exports = mongoose;
