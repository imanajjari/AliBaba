import React, { memo } from 'react';
import QAItem from './QAItem';

export const QA = memo(({questions}) => {
    
    return (
        <div className='dr-rtl'>
            <h2 className='text-4xl mb-4 xl:text-6xl xl:mb-16'>پرسش های شما</h2>
            {questions.map(question => <QAItem key={question.id} title={question.title} answer={question.answer} />)}
        </div>
    );
})