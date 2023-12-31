const express = require('express');
const app = express();
const PORT = 8000;

const rappers = {
      '21 savage': {
        'age': 29,
        'birthName': 'Sheyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England',
      },
      'chance the rapper': {
        'age': 27,
        'birthName': 'Chancelor Jonathan Bennett',
        'birthLocation': 'Chicago, Illinois',
      },
      'unknown': {
        'age': 0,
        'birthName': 'unknown',
        'birthLocation': 'unknown',
      },
};
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
})

app.get('/api/:name',(req, res) => {
  const rapperName = req.params.name.toLowerCase();
  if(rappers[rapperName]) {
    res.json(rappers[rapperName]);
  } else {
    res.json(rappers['unknown']);
  }
});

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is now running on port ${PORT}! Betta Go Catch It!`)
});