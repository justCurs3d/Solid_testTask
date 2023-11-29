export default function (req, res, next) {
    try {
        const { startDate, endDate } = req.query;

        //Проверка дат на соотвествие формату YYYY-MM-DD
        const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
        if (!dateRegex.test(startDate) || !dateRegex.test(endDate)) {
            return res.status(400).json({ message: 'Укажите дату в формате YYYY-MM-DD' });
        }

        const parsedStartDate = new Date(startDate);
        const parsedEndDate = new Date(endDate);

        //Проверка дат на корректность
        if (isNaN(parsedStartDate) || isNaN(parsedEndDate)) {
            return res.status(400).json({ message: 'Указана неверная дата' });
        }

        req.startDate = parsedStartDate;
        req.endDate = parsedEndDate;

        next();
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Внутренняя ошибка сервера' });
    }
}