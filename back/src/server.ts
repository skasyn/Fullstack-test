import express from 'express';

const app = express();
const PORT = 8000;

app.get('/', (req, res) => res.send('Test'));

app.listen(PORT, () => {
  console.log(`Server is running at https://localhost:${PORT}`);
});