import './CarCompareCard.css';

import Button from '../Button/Button';

const CarCompareCard = ({ onSelect, car }) => {
    return (
        <div className='bg-white w-[373px] h-[651px] border border-gray-100'>

            <div className='mx-auto w-[311px] h-[233px]'>
                <img className='w-full' src={car.image} alt={car.type}></img>
            </div>

            <div>
                <div className='text-center text-lg font-medium'>{car.type}</div>
                <div className='text-sm text-center'>
                    {car.name} | <span className='font-medium uppercase'>{car.gear}</span></div>
                <div className='mx-auto w-48 py-2'>
                    <hr></hr>
                </div>
            </div>

            <div>
                <div className='text-center text-lg font-medium'>Passenger Capacity</div>
                <div className='text-sm text-center'>
                    {car.passenger_capacity} Peoples</div>
                <div className='mx-auto w-48 py-2'>
                    <hr></hr>
                </div>
            </div>

            <div>
                <div className='text-center text-lg font-medium'>Bags</div>
                <div className='text-sm text-center'>
                    {car.bag}</div>
                <div className='mx-auto w-48 py-2'>
                    <hr></hr>
                </div>
            </div>

            <div>
                <div className='text-center text-lg font-medium'>Fuel consumption</div>
                <div className='text-sm text-center'>
                    {car.fuel_consumption}</div>
                <div className='mx-auto w-48 py-2'>
                    <hr></hr>
                </div>
            </div>

            <div>
                <div className='text-center text-lg font-medium'>Extras</div>
                <div className='text-sm text-center px-14'>
                    {car.extra}</div>
                <div className='mx-auto w-48 py-2'>
                    <hr></hr>
                </div>
            </div>

            <div className='text-center pt-2'>
                <Button
                    color='blue'
                    value={car.id}
                    width='183px'
                    height='40px'
                    onClick={onSelect}
                >Select This Car</Button>
            </div>
        </div>
    )
}

export default CarCompareCard;
