import React from 'react';

export function renderForm(state, handleSubmit, handleChange) {
    const { fields, errorMsg } = state;
    
    return (
        <form onSubmit={handleSubmit}>
            <h1>Введите свои данные, агент</h1>
            {renderFields(fields, errorMsg, handleChange)}
            <div className='form__buttons'>
                <input
                    type='submit'
                    className='button t-submit'
                    value='Проверить'
                    onClick={handleSubmit}/>
            </div>
        </form>
    )
}

function renderFields(fields, errorMsg, handleChange) {
    return (
        Object.keys(fields).map((field, key) => (
            <p className='field' key={key}>
                <label className='field__label'>
                    <span className='field-label'>
                        {fields[field].labelName}
                    </span>
                </label>
                <input
                    className={`field__input field-input t-input-${fields[field].inputName}`}
                    type={fields[field].type}
                    name={fields[field].inputName}
                    onChange={handleChange}
                    value={fields[field].value}
                />
                <span className={`field__error field-error t-error-${fields[field].inputName}`}>
                    {errorMsg[field]}
                </span>
            </p>
        ))
    )
}