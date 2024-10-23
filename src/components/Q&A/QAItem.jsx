import React from 'react';
import WithToggle from '../HOCs/WithToggle';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';

const QAItem = ({isShow, toggleHandler, title, answer}) => {
    
    return (
        <div className='my-4 border-12 p-4 border boder-2 border-slate-300 box-shadow'>
            <div onClick={toggleHandler} className='flex justify-between items-center'>
                <div className='w-16 h-16 bg-teal-100 flex justify-center items-center rounded-full'>
                    <QuestionMarkIcon style={{fill : '#009BB3FF', fontSize : '2.5rem'}}/>    
                </div>
                    <div className="w-[75%] xl:w-[90%]">
                        <p className="text-right text-xl xl:text-3xl">{title}</p>
                    </div>
                <button className='toggleNoteListButton'>{isShow?<KeyboardArrowUpIcon style={{fontSize : '3rem'}} />:<KeyboardArrowDownIcon style={{fontSize : '3rem'}} />}</button>
            </div>
            {isShow && 
                <div className='p-4 text-gray-700'>
                        <p className="text-right text-lg mt-2 xl:text-2xl">{answer}</p>
                </div>
            }
            
        </div>
    );
}

export default WithToggle(QAItem);
