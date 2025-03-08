import express from 'express';

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index', { title: 'SurroCare: Your Surrogacy Journey Starts Here' });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});