const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3131;

app.use(cors());

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Xin chào từ API Express.js!' });
});

app.listen(port, () => {
  console.log(`API đang chạy tại http://localhost:${port}`);
});