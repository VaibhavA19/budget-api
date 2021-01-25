const express = require('express');
const mongoose = require('mongoose');

const app = express();
const budgetRouter = express.Router();
const port = process.env.PORT || 3000;

budgetRouter.route('/ping')
  .get((req, res) => {
    const response = { data: 'API is running' };
    res.json(response);
  });

app.use('/api', budgetRouter);

app.get('/', (req, res) => {
  res.send(`<html>
    <body style="background-color:powderblue; margin:auto; max-width:300px;">
     <h1>!!! Budget App !!!</h1>
     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgCk9WWex2qIE5tq_ypr4d6mzUPYYhIWp7sQ&usqp=CAU"/>
    </body>
    </html>
    `);
});

app.listen(port, () => {
  console.log(`App is running ${port}`);
});
