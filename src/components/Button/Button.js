import './Button.css';
const Button = ({ onClick, children, value, color='blue', width='130px', height='28px', isDisabled=false }) => {
    let className = '';
    
    if (color === 'blue') {
        className = 'btn btn-blue'
    } else if (color === 'white') {
        className = 'btn btn-white'
    }

    if(isDisabled) className += ' pointer-events-none opacity-75';

    const btnStyle = {
        width: width,
        height: height,
    };

    return (
        <button 
        value={value}
        type='button' 
        onClick={onClick} 
        className={className} 
        style={btnStyle} 
        disabled={isDisabled}>
            {children}
        </button>
    );
};

export default Button;