import React from 'react'
import CurrencyPoundIcon from '@mui/icons-material/CurrencyPound';
import PaymentsIcon from '@mui/icons-material/Payments';
import FoodBankIcon from '@mui/icons-material/FoodBank';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';

export default function About() {
	const handleClick = () => {
		window.scroll({
			top: 0,
			behavior: 'smooth',
		});
	}
	return (
		<div className='flex-col pt-44 lg:pt-0 flex 2xl:h-screen justify-between bg-amber-100'>

			<div className='flex p-3 items-center h-1/6 justify-center w-full '>
				<div className='text-3xl font-semibold font-mono text-amber-950'>Benefits for everyone</div>
			</div>

			{/* Benefits cards */}

			<div className='grid self-center grid-cols-1 place-items-center space-y-2 w-full p-2
                        gap-y-4
                        md:grid-cols-2 md:w-2/3 lg:space-y-0 lg:gap-y-4
                        xl:grid-cols-3 
                        2xl:w-1/2
                      '>
				<div className='h-64 w-full md:w-64 bg-amber-50 rounded-xl shadow-xl hover:scale-95 duration-700 p-2 flex flex-col  justify-between'>
					<div className='w-full flex items-center justify-center h-1/2 bg-amber-300 '>
						<CurrencyPoundIcon
							fontSize='large'
						/>
					</div>
					<div className='flex items-center justify-center h-1/2 font-mono text-xl font-semibold text-amber-950 text-center'>
						Top up your card for expensive purchases
					</div>
				</div>
				<div className='h-64 w-full md:w-64 bg-amber-50 rounded-xl shadow-xl hover:scale-95 duration-700 p-2 flex flex-col  justify-between'>
					<div className='w-full flex items-center justify-center h-1/2 bg-amber-300 '>
						<PaymentsIcon
							fontSize='large'
						/>
					</div>
					<div className='flex items-center justify-center h-1/2 font-mono text-xl font-semibold text-amber-950 text-center'>
						Tranfer gift money to your bank account
					</div>
				</div>
				<div className='h-64 w-full md:w-64 bg-amber-50 rounded-xl shadow-xl hover:scale-95 duration-700 p-2 flex flex-col  justify-between'>
					<div className='w-full flex items-center justify-center h-1/2 bg-amber-300  '>
						<FoodBankIcon
							fontSize='large'
						/>
					</div>
					<div className='flex items-center justify-center h-1/2 font-mono text-xl font-semibold text-amber-950 text-center'>
						Donate to your favourite charities
					</div>
				</div>
				<div className='h-64 w-full md:w-64 bg-amber-50 rounded-xl shadow-xl hover:scale-95 duration-700 p-2 flex flex-col  justify-between'>
					<div className='w-full flex items-center justify-center h-1/2 bg-amber-300 '>
						<ManageSearchIcon
							fontSize='large'
						/>
					</div>
					<div className='flex items-center justify-center h-1/2 font-mono text-xl font-semibold text-amber-950 text-center'>
						Manage the card from your account
					</div>
				</div>
				<div className='h-64 w-full md:w-64 bg-amber-50 rounded-xl shadow-xl hover:scale-95 duration-700 p-2 flex flex-col  justify-between'>
					<div className='w-full flex items-center justify-center h-1/2 bg-amber-300'>
						<VisibilityIcon
							fontSize='large'
						/>
					</div>
					<div className='flex items-center justify-center h-1/2 font-mono text-xl font-semibold text-amber-950 text-center'>
						<p>Track your balance and expiry date</p>
					</div>
				</div>
				<div className='h-64 w-full md:w-64 bg-amber-50 rounded-xl shadow-xl hover:scale-95 duration-700 p-2 flex flex-col '>
					<div className='w-full flex items-center justify-center h-1/2 bg-amber-300'>
						<CardGiftcardIcon
							fontSize='large'
						/>
					</div>
					<div className='flex items-center justify-center h-1/2 font-mono text-xl font-semibold text-amber-950 text-center'>
						<p >Shop at your favourites</p>
					</div>
				</div>

			</div>


			<div className='flex self-end m-5 w-full justify-end '>
				<button onClick={handleClick} className='hidden hover:cursor-pointer rounded-full bg-amber-600 font-mono font-semibold text-xl lg:flex justify-center items-center text-white w-9 h-9 animate-bounce'>
					&uarr;
				</button>
			</div>
		</div>
	)
}