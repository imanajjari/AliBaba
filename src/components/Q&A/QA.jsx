import React, { memo } from 'react';
import QAItem from './QAItem';
import { Link } from 'react-router-dom'

export const QA = memo(({questions}) => {
    
    return (
        <div className='dr-rtl'>
            <Link to={'/help-center'}>
                <h2 className='text-4xl mb-4 xl:text-6xl xl:mb-16'>پرسش های شما</h2>
            </Link>
            {questions.map(question => <QAItem key={question.id} title={question.title} answer={question.answer} />)}
            <p className='sm:hidden'>
                <Link to={'/help-center'}>ایا سوالات بیش تری دارید ؟ </Link>
            </p>
        </div>
    );
})