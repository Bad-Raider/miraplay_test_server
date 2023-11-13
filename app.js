import express, { json } from 'express';
import cors from 'cors';
import authRouter from './routes/authRoutes.js';

const app = express();


app.use(json()); /* це парсер для json файлів, подає відповідь, яка повертається із фронта у форматі json у нормально вигляді для сприйняття */
app.use(cors()); /* це бліотека для запитів між різними сайтами */

app.use('/api/users', authRouter);


app.listen(3000, () => {
    console.log('Example app listening on port 3000!'); /* посуті це запуск сервара і у clg ми для інформативностів повертаємо інформацію вона не несе жодного навантаження*/
});
