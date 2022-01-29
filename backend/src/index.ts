import express from 'express';

const app = express();
const PORT = 4000;

app.get('/', (req, res) => {
    res.send('Hello worldd!');
});

app.listen(PORT, () => {
    console.log(`Express server is listening at ${PORT}`);
});