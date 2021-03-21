const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/usersJSON');

const budgetRouter = require('./routes/budgetRouter/budgetRoutes');
const userRouter = require('./routes/userRouter/userRoutes');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded());
app.use(express.json());


// Add routes after middleware
app.use('/api', budgetRouter);
app.use('/api', userRouter);

app.listen(port, () => {
  console.log(`App is running ${port}`);
});
