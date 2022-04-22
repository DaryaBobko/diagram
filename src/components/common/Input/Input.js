import './Input.scss';

function Input({ value, onValueChange }) {

    const onNamberChange = (e) => {
        const newValue = e.target.value;
        if (onValueChange) {   
            onValueChange(newValue);
        };
    }

    return (
        <input 
            className='input'
            value={value}
            onChange={onNamberChange}
        />
    )
}

export default Input;