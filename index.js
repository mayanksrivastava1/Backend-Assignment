const express = require('express');
const mongoose = require('mongoose');
const apiRoutes = require('./routes/api');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 3000;
try {
    mongoose.connect(process.env.MONGOOSE_URI, { 
        useNewUrlParser: true,
        useUnifiedTopology: true,
});
console.log('Database connected successfully!');

} catch (error) {
    console.log('Error in connecting to database', error)
}


app.use(express.json());

app.use('/api', apiRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
