const express = require('express');
const app = express();
const port = process.env.PORT || 3131;

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Xin chào từ API Express.js!' });
});

app.listen(port, () => {
  console.log(`API đang chạy tại http://localhost:${port}`);
});