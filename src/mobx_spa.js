const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 4800;

// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, 'app/build')));


// All remaining requests return the React app, so it can handle routing.
app.get('*', function(request, response) {
  response.sendFile(path.resolve(__dirname, 'app/build', 'index.html'));
});

app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
});