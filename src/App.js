import * as React from 'react';
import './App.css';
import Button from './components/Button/Button';
import CarCard from './components/CarCard/CarCard';
import SelectionCard from './components/SelectionCard/SelectionCard';
import CarCompareCard from './components/CarComapreCard/CarCompareCard';
import logo from './icons/logo.png';
import calendar from './icons/calendar.png';
import mark from './icons/mark.png';
import pin from './icons/pin.png';
function App() {
  const [selectedCars, setSelectedCars] = React.useState([]);
  const [showCompareView, setCompareView] = React.useState(false);
  const [showSelectionView, setSelectionView] = React.useState(false);

  const cars = [
    {
      id: 1,
      type: 'Compact',
      name: 'Mitsubishi Mirage or similar',
      gear: 'manual',
      image: '/assets/images/cars/1492780366644.png',
      per_day: 59.99,
      total: 92.90,
      passenger_capacity: 4,
      bag: 2,
      fuel_consumption: '14km',
      extra: 'AutomaticAir ConditioningAdditional options availableAM/FM Stereo CD/MP3'
    },
    {
      id: 2,
      type: 'Premium',
      name: 'Nissan Maxima or similar',
      gear: 'manual',
      image: '/assets/images/cars/1478719272289.png',
      per_day: 59.99,
      total: 92.90,
      passenger_capacity: 4,
      bag: 2,
      fuel_consumption: '14km',
      extra: 'AutomaticAir ConditioningAdditional options availableAM/FM Stereo CD/MP3'
    },
    {
      id: 3,
      type: 'Compact',
      name: 'Nissan Versa or similar',
      gear: 'manual',
      image: '/assets/images/cars/1492780374467.png',
      per_day: 59.99,
      total: 92.90,
      passenger_capacity: 4,
      bag: 2,
      fuel_consumption: '14km',
      extra: 'AutomaticAir ConditioningAdditional options availableAM/FM Stereo CD/MP3'
    },
    {
      id: 4,
      type: 'Pickup',
      name: 'Ford F150 or similar',
      gear: 'manual',
      image: '/assets/images/cars/1512427309887.png',
      per_day: 59.99,
      total: 92.90,
      passenger_capacity: 4,
      bag: 2,
      fuel_consumption: '14km',
      extra: 'AutomaticAir ConditioningAdditional options availableAM/FM Stereo CD/MP3'
    },
    {
      id: 5,
      type: 'Standard',
      name: 'Kia Soul or similar',
      gear: 'manual',
      image: '/assets/images/cars/1512427357948.png',
      per_day: 59.99,
      total: 92.90,
      passenger_capacity: 4,
      bag: 2,
      fuel_consumption: '14km',
      extra: 'AutomaticAir ConditioningAdditional options availableAM/FM Stereo CD/MP3'
    },
    {
      id: 6,
      type: 'Intermediate SUV',
      name: 'Toyota RAV4 or similar',
      gear: 'manual',
      image: '/assets/images/cars/1512427383094.png',
      per_day: 59.99,
      total: 92.90,
      passenger_capacity: 4,
      bag: 2,
      fuel_consumption: '14km',
      extra: 'AutomaticAir ConditioningAdditional options availableAM/FM Stereo CD/MP3'
    },
    {
      id: 7,
      type: 'Luxury',
      name: 'Cadillac XTS or similar',
      gear: 'manual',
      image: '/assets/images/cars/1444354848672.png',
      per_day: 59.99,
      total: 92.90,
      passenger_capacity: 4,
      bag: 2,
      fuel_consumption: '14km',
      extra: 'AutomaticAir ConditioningAdditional options availableAM/FM Stereo CD/MP3'
    },
    {
      id: 8,
      type: 'Sporty',
      name: 'Dodge Challenger or similar',
      gear: 'manual',
      image: '/assets/images/cars/1444354946793.png',
      per_day: 59.99,
      total: 92.90,
      passenger_capacity: 4,
      bag: 2,
      fuel_consumption: '14km',
      extra: 'AutomaticAir ConditioningAdditional options availableAM/FM Stereo CD/MP3'
    },
  ]

  const handleSelect = (event) => {
    if (!selectedCars.length) setSelectionView(true);
    setSelectedCars([...selectedCars, +event.target.value]);
  };

  const handleCompare = () => {
    setSelectionView(false);
    setCompareView(true);
  }

  const onSelectionClose = (event) => {
    setSelectedCars(selectedCars.filter(car => car !== +event.target.value));
    if (selectedCars.length === 1) setSelectionView(false);
  }

  const onComparationClose = () => {
    setCompareView(false);
    setSelectionView(true);
  }

  const onSelectThisCar = (event) => {
    alert(event.target.value);
  }

  const onSeeOtherCars = () => {
    setCompareView(false);
    setSelectionView(false);
    setSelectedCars([]);
  }

  return (
    <div className='max-w-screen-2xl relative'>
      <div className='py-4 pl-[48px] pr-8 block h-[68px]'>
        <div className='float-left'>
          <div className='flex flex-row'>
            <div className='w-[36px] h-[36px] bg-blue-700 p-2'>
              <img src={logo} alt='logo.png'></img>
            </div>
            <div
              className='bg-black text-white w-[152px] text-2xl uppercase tracking-widest'>
              RentCar
            </div>
          </div>
        </div>
        <div className='float-right'>
          <div className='flex flex-row h-full'>
            <div className='py-1'>
              <span className='text-blue-400'>Terms and Conditions / Policies </span>
              <strong className='text-gray-200 px-3'>|</strong>
              <span className='font-bold uppercase'>Total:</span>
            </div>
            <div className='border border-gray-300 px-4 mx-2 py-1 rounded text-blue-400'> $50,000 </div>
          </div>
        </div>
      </div>
      <div className='absolute'>
        <div className='group relative top-[195px] left-[30px] h-[38px] w-[38px] bg-blue-100 rounded-full p-3 pt-3.5 cursor-pointer'>
          <img src={mark} alt='mark.png'></img>
          <div
            className='z-50 hidden absolute group-hover:flex -top-7 -right-3 translate-x-full w-[244px] h-[137px] px-4 bg-gray-200 before:content-[""] before:absolute before:top-1/3  before:right-[100%] before:-translate-y-1/3 before:border-8 before:border-y-transparent before:border-l-transparent before:border-r-gray-200'>
            <div>
              <div className='flex flex-row px-6 py-8 text-sm'>
                <img className='w-[20px] h-[20px] p-1' src={pin} alt='pin.png'></img>
                Chicago O'Hare International Airport
              </div>
              <div className='text-blue-500 text-sm text-right'>
                <a href='#'>Edit</a>
              </div>
            </div>
          </div>
        </div>
        <div className='group relative top-[380px] left-[30px] h-[38px] w-[38px] bg-blue-100 rounded-full p-3 pt-3.5 cursor-pointer'>
          <img src={mark} alt='mark.png'></img>
          <div
            className='z-50 hidden absolute group-hover:flex -top-7 -right-3 translate-x-full w-[244px] h-[137px] px-4 bg-gray-200 before:content-[""] before:absolute before:top-1/3  before:right-[100%] before:-translate-y-1/3 before:border-8 before:border-y-transparent before:border-l-transparent before:border-r-gray-200'>
            <div>
              <div className='flex flex-row px-6 py-8 text-sm'>
                <img className='w-[20px] h-[20px] p-1' src={pin} alt='pin.png'></img>
                Chicago O'Hare International Airport
              </div>
              <div className='text-blue-500 text-sm text-right'>
                <a href='#'>Edit</a>
              </div>
            </div>
          </div>
        </div>
        <div className='group relative top-[565px] left-[30px] h-[38px] w-[38px] bg-blue-100 rounded-full p-3 pt-3.5 cursor-pointer'>
          <img src={mark} alt='mark.png'></img>
          <div
            className='z-50 hidden absolute group-hover:flex -top-7 -right-3 translate-x-full w-[244px] h-[137px] px-4 bg-gray-200 before:content-[""] before:absolute before:top-1/3  before:right-[100%] before:-translate-y-1/3 before:border-8 before:border-y-transparent before:border-l-transparent before:border-r-gray-200'>
            <div>
              <div className='flex flex-row px-6 py-8 text-sm'>
                <img className='w-[20px] h-[20px] p-1' src={pin} alt='pin.png'></img>
                Chicago O'Hare International Airport
              </div>
              <div className='text-blue-500 text-sm text-right'>
                <a href='#'>Edit</a>
              </div>
            </div>
          </div>
        </div>
        <div className='group relative top-[750px] left-[30px] h-[38px] w-[38px] p-1 bg-white border-2 border-blue-500 rounded-full cursor-pointer'>
          <div className='text-center font-medium text-blue-500'>4</div>
          <div
            className='z-50 hidden absolute group-hover:flex -top-7 -right-3 translate-x-full w-[244px] h-[137px] px-4 bg-gray-200 before:content-[""] before:absolute before:top-1/3  before:right-[100%] before:-translate-y-1/3 before:border-8 before:border-y-transparent before:border-l-transparent before:border-r-gray-200'>
            <div>
              <div className='flex flex-row px-6 py-8 text-sm'>
                <img className='w-[20px] h-[20px] p-1' src={pin} alt='pin.png'></img>
                Chicago O'Hare International Airport
              </div>
              <div className='text-blue-500 text-sm text-right'>
                <a href='#'>Edit</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className='overflow-hidden ml-12 min-h-screen border-t-2 border-l-2 border-gray-300 rounded-tl-lg pl-[48px] py-6'>
        <div className='pr-12 inline-block w-[1430px]'>
          <div className='float-left'>
            <div className='font-normal text-xl uppercase'>
              Choose a vehicle class
            </div>
            <div className='text-sm flex flex-row'>
              Vehicles available on the date:
              <img className='w-[20px] h-[20px] p-1' src={calendar} alt='calendar.png'></img>
              <span className='text-blue-400 pr-2'>fri, May 11 12:00 PM-Sat, May 12 12:00 PM</span>
              in:
              <img className='w-[20px] h-[20px] p-1' src={pin} alt='pin.png'></img>
              <span className='text-blue-400'>Chicago O'Hare International Airport</span>
            </div>
          </div>
          <div className='float-right'>
            <div className='selectType mr-3'>
              <label>
                <select value='1' className='text-sm border border-gray-200 rounded py-2 px-9 w-[200px]'>
                  <option value='1'>Vehicle Type</option>
                </select>
              </label>
            </div>

            <div className='selectSeat'>
              <label>
                <select value='1' className='text-sm border border-gray-200 rounded py-2 px-9 w-[200px]'>
                  <option value='1'>Passenger Capacity</option>
                </select>
              </label>
            </div>
          </div>
        </div>
        <div className='inline-flex'>
          {selectedCars.length && showSelectionView ? (
            <div className='bg-gray-50 border w-[310px] float-left mr-12 mt-12 rounded h-fit'>
              <div className='h-[55px] border-b text-center p-3 font-medium'>
                Car Selection
              </div>
              <div className='h-[673px] overflow-auto'>
                {selectedCars.map((carId, idx) => (
                  <div key={idx}>
                    <SelectionCard
                      car={cars.find((car) => car.id === carId)}
                      onClose={onSelectionClose}></SelectionCard>
                  </div>
                ))}
              </div>
              <div className='border-t h-[70px] text-center p-5'>
                <Button
                  color='blue'
                  onClick={handleCompare}
                >Compare Car</Button>
              </div>
            </div>) : (<></>)}

          {selectedCars.length && showCompareView ? (
            <div className='bg-gray-50 border w-[827px] float-left mr-12 mt-12 rounded h-fit'>
              <div className='h-[55px] border-b py-3 px-8 font-medium'>
                <div className='float-left'>Car Comparation</div>
                <div className='float-right'>
                  <Button
                    color='blue'
                    onClick={onSeeOtherCars}
                  >See other cars</Button>

                  <button
                    onClick={onComparationClose}
                    className='mx-2 hover:text-gray-300 font-extrabold text-xl align-center font-bold cursor-pointer alert-del text-gray-500'>&times;</button>

                </div>
              </div>
              <div className='h-[743px] overflow-auto grid grid-cols-2 px-7 py-10'>
                {selectedCars.map((carId, idx) => (
                  <div key={idx} className='pb-1'>
                    <CarCompareCard
                      car={cars.find((car) => car.id === carId)}
                      onSelect={onSelectThisCar}></CarCompareCard>
                  </div>
                ))}
              </div>
            </div>) : (<></>)}

          <div className={
            !showSelectionView ? 'grid grid-cols-4 pr-2 w-[1436px] float-right' :
              'grid grid-cols-3 pr-2 w-[1079px] float-right'}>
            {cars.map((car, idx) => (
              <div className='pt-12' key={idx}>
                <CarCard
                  car={car}
                  onSelect={handleSelect}
                  onCompare={handleCompare}
                  showCompareViewParent={showCompareView}
                  isSelectedParent={selectedCars.findIndex((carId) => car.id === carId) > -1}
                ></CarCard>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
