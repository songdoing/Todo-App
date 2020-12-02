import React, { useState, useCallback } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = ( {onInsert} ) => {
    const [value, setValue] = useState('');

    const onChange = useCallback(e => {
        setValue(e.target.value);
    }, []);
    const onSubmit = useCallback(
        e => {
            onInsert(value);
            setValue(''); //reset value
            e.preventDefault();
        },
        [onInsert, value],
    );

    return (
        <form className="TodoInsert" onSubmit={onSubmit}>
            <input placeholder = "Make new schedule." 
                value = {value}
                onChange = {onChange}
            />
            <button type = "submit">
                <MdAdd/>
            </button>
        </form>
    );
};

export default TodoInsert;