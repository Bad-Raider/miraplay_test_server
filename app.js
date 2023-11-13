import express, { json } from 'express';
import cors from 'cors';
const app = express();

app.use(json());
app.use(cors()); /* це ібліотека для запитів між різними сайтами */

app.use((req, res, next) => {
    console.log('Наше проміжне ПЗ');
    next();
}); /* це мідлвара через яку проходить всі запити, так як вона стоїть перша у "журналі експрес" і може виконувати різні задачі, наприклад: перевірка запиту на щось*/

app.get('/', (req, res) => {
    res.send('Hello World!');
}); /* це запит на адресу -> "/" і у req повернеться те що ми будемо передавати із фронта*/

app.post('/login', (req, res, next) => {
    // const { email, password } = req.body;
    // console.log('email', email);
    // console.log('password', password);
    console.log('req.body', req.body);
});


app.listen(3000, () => {
    console.log('Example app listening on port 3000!'); /* посуті це запуск сервара і у clg ми для інформативностів повертаємо інформацію вона не несе жодного навантаження*/
});
