import React, { useState } from 'react';

const Item = () => {
    const [answers, setAnswers] = useState([]);

    const content = [
        {
            'id': 1,
            'description': "Что является основным строительным блоком программы?",
			'option1': "Печенье",
			'option2': "Петух",
			'option3': "Переменная",
			'option4': "Планета Марс",
			'correct': "3"
        },
        {
            'id': 2,
            'description': "Что из перечисленного является животным?",
			'option1': "Зебра",
			'option2': "Клубника",
			'option3': "Кирпич",
			'option4': "Скрипт",
			'correct': "1"
        },
        {
            'id': 3,
            'description': "Что такое цикл в программировании?",
			'option1': "Круговорот молекул",
			'option2': "Конструкция кода, повторяющая действия",
			'option3': "Сверхспособности человека",
			'option4': "Элементарная частица",
			'correct': "2"
        },
        {
            'id': 4,
            'description': "Кто автор произведения Война и мир?",
			'option1': "Агата Кристи",
			'option2': "Федор Достоевский",
			'option3': "Лев Толстой",
			'option4': "А.С. Пушкин",
			'correct': '3'
        },
        {
            'id': 5,
            'description': "Что такое IDE?",
			'option1': "Интернет Доминатор Европы",
			'option2': "Искрометный десерт Елены",
			'option3': "Инженерно-десантное заведение",
			'option4': "Интегрированная среда разработки",
			'correct': '4'
        }
    ];

    const handleAnswer = (questionId, selectedOption) => {
        const correctAnswer = content.find(item => item.id === questionId).correct;
        const isCorrect = selectedOption === correctAnswer;
        setAnswers([...answers, { questionId, isCorrect }]);
    };

    return (
        <div>
            {content.map((question) => (
                <div key={question.id}>
                    <h1>Вопрос №{question.id}</h1>
                    <p>{question.description}</p>
                    <button onClick={() => handleAnswer(question.id, '1')}>{question.option1}</button>
                    <button onClick={() => handleAnswer(question.id, '2')}>{question.option2}</button>
                    <button onClick={() => handleAnswer(question.id, '3')}>{question.option3}</button>
                    <button onClick={() => handleAnswer(question.id, '4')}>{question.option4}</button>
                </div>
            ))}
            <div>
                {answers.map((answer, index) => (
                    <p key={index}>{`Вопрос ${answer.questionId}: ${answer.isCorrect ? 'Правильно' : 'Неправильно'}`}</p>
                ))}
            </div>
        </div>
    );
};

export default Item;