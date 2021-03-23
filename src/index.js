var express = require('express');
var cors = require('cors');
var app = express();

app
  .use(express.json())
  .use(cors());

app.post('/subscriptions', (req, res) => {
  const { id, email } = req.body;

  setTimeout(() => {
    res.json({
      id,
      email,
      message: 'What an awesome Widget!'
    });
  }, 500);
});

app.get('/', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'});
})

const port = process.env.PORT || 4422;

app.listen(port, function () {
  console.log(`Listening on port ${ port }`);
});
