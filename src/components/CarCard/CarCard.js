import './CarCard.css';
import * as React from 'react';
import Button from '../Button/Button';

const CarCard = ({ onSelect, onCompare, car, isSelectedParent , showCompareViewParent}) => {
    return (
        <div className={isSelectedParent? 'card card-active': 'card'}>
            <div className='grid grid-cols-3'>
                <div className='col-span-2'>
                    <div className='font-medium'>{car.type}</div>
                    <div className='text-sm'>{car.name}</div>
                    <div className='text-sm font-medium uppercase'>{car.gear}</div>
                </div>
                <div>
                    <div className='text-blue-500 text-sm text-right'>
                        <a href='#'>More details</a>
                    </div>
                </div>
            </div>
            <div className='mx-auto my-1 w-[205px] h-[154px]'>
                <img src={car.image} alt={car.type}></img>
            </div>
            <div className='grid grid-cols-3'>
                <div>
                    <div className='font-bold text-sm uppercase'>Pay Later</div>
                    <div className='font-bold uppercase'>$ {car.per_day}</div>
                    <div className='font-thin text-gray-300'>Per Day</div>
                </div>
                <div className='col-span-2'>
                    <div className='py-2'><hr></hr></div>
                    <div className='grid grid-cols-2 mt-0.5'>
                        <div>
                            <div className='font-bold uppercase'>$ {car.total}</div>
                            <div className='font-thin text-gray-300'>Total</div>
                        </div>
                        <div className='text-blue-500 text-sm text-right'>
                            <a href='#'>Price details</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-2 py-3'>
                <div className='mx-auto'>
                    <Button
                        color='blue'
                        isDisabled={!!isSelectedParent || showCompareViewParent}
                        onClick={onSelect}
                        value={car.id}
                    >Select Car</Button>
                </div>
                <div className='mx-auto'>
                    <Button
                        color='white'
                        isDisabled={!isSelectedParent || showCompareViewParent}
                        onClick={onCompare}
                        value={car.id}
                    >Compare Car</Button>
                </div>
            </div>
        </div>
    )
}

export default CarCard;