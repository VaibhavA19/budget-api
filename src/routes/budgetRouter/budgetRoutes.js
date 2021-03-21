const router = require('express').Router();

router.route('/ping')
  .get((_req, res) => {
    const response = {
      data: 'API is running'
    };
    res.json(response);
  });

router.route('')
  .get((req, res) => {
    res.send(`<html>
      <body style="background-color:powderblue; margin:auto; max-width:300px;">
       <h1>!!! Budget App !!!</h1>
       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgCk9WWex2qIE5tq_ypr4d6mzUPYYhIWp7sQ&usqp=CAU"/>
      </body>
      </html>
      `);
  });

module.exports = router;
