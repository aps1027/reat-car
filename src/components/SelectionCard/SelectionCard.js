import './SelectionCard.css';

const SelectionCard = ({ onClose, car}) => {
    return (
        <div className='bg-white w-[266px] h-[215px] border border-gray-100 relative rounded mx-auto my-5'>
            <button 
            onClick={onClose}
            value={car.id}
            className='hover:text-gray-300 font-extrabold text-xl align-center font-bold cursor-pointer alert-del text-gray-500 absolute right-3'>&times;</button>
            <div className='mx-auto w-[177px] h-[133px]'>
                <img src={car.image} alt={car.type}></img>
            </div>
            <div>
                <div className='mx-auto text-center text-lg'>{car.type}</div>
                <div className='mx-auto text-sm w-[127px] text-center'>{car.name}</div>
            </div>
        </div>
    )
}

export default SelectionCard;