export default function (req, res, next) {
    try {
        //Проверка строки на соотвествие YYYY-MM-DD
        const {date} = req.query;
        const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
        if (!dateRegex.test(date)) {
            return res.status(400).json({ message: 'Укажите дату в формате YYYY-MM-DD' });
        }

        //Проверка даты на корректность
        const parsedDate = new Date(date)
        if (isNaN(parsedDate)) {
            return res.status(400).json({message: 'Указана неверная дата'})
        }
        req.date = parsedDate

        next();
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Внутренняя ошибка сервера' });
    }
}