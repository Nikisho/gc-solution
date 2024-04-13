import React from 'react'
import CurrencyPoundIcon from '@mui/icons-material/CurrencyPound';
import PaymentsIcon from '@mui/icons-material/Payments';
import FoodBankIcon from '@mui/icons-material/FoodBank';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import { Link } from 'react-scroll';

export default function About() {
	const handleClick = () => {
		window.scroll({
			top: 0,
			behavior: 'smooth',
		});
	}
	return (
		<div className='flex-col pt-44 lg:pt-0 flex 2xl:h-screen justify-between bg-amber-100'>

			<div className='flex xl:text-center flex-col  self-center xl:w-1/2 p-3 items-center h-1/6 justify-center l '>
				<div className='text-md  font-mono text-amber-950'>
					Receiving a gift card should be an exciting experience but nowadays, it's
					met with annoyance and frustration. At Envofa, we want to save you time, energy and money by simplifying the
					gift card experience and giving you complete control of your money
				</div>
				<div className='xl:text-center text-md font-mono text-amber-950'>
				</div>
				<div className='xl:text-center text-md  font-mono text-amber-950'>
					Here are some of our benefits you can look forward to:

				</div>
			</div>

			{/* Benefits cards test*/}

			<div className='grid self-center grid-cols-1 place-items-center space-y-2 w-full p-2
                        gap-y-4
                        md:grid-cols-2 md:w-3/4 lg:space-y-0 lg:gap-y-4
                        xl:grid-cols-3 xl:w-2/3
                        2xl:w-1/2
                      '>
				<div className='h-40 w-full md:w-40 bg-amber-50 rounded-xl shadow-xl hover:scale-95 duration-700 p-2 flex flex-col  justify-between'>
					<div className='w-full flex items-center justify-center h-1/2 bg-amber-300 '>
						<CurrencyPoundIcon
							fontSize='large'
						/>
					</div>
					<div className='flex items-center justify-center h-1/2 font-mono text-md font-semibold text-amber-950 text-center'>
						Top up your card for expensive purchases
					</div>
				</div>
				<div className='h-40 w-full md:w-40 bg-amber-50 rounded-xl shadow-xl hover:scale-95 duration-700 p-2 flex flex-col  justify-between'>
					<div className='w-full flex items-center justify-center h-1/2 bg-amber-300 '>
						<PaymentsIcon
							fontSize='large'
						/>
					</div>
					<div className='flex items-center justify-center h-1/2 font-mono font-semibold text-amber-950 text-center'>
						Tranfer gift money to your bank account
					</div>
				</div>
				<div className='h-40 w-full md:w-40 bg-amber-50 rounded-xl shadow-xl hover:scale-95 duration-700 p-2 flex flex-col  justify-between'>
					<div className='w-full flex items-center justify-center h-1/2 bg-amber-300  '>
						<FoodBankIcon
							fontSize='large'
						/>
					</div>
					<div className='flex items-center justify-center h-1/2 font-mono font-semibold text-amber-950 text-center'>
						Donate to your favourite charities
					</div>
				</div>
				<div className='h-40 w-full md:w-40 bg-amber-50 rounded-xl shadow-xl hover:scale-95 duration-700 p-2 flex flex-col  justify-between'>
					<div className='w-full flex items-center justify-center h-1/2 bg-amber-300 '>
						<ManageSearchIcon
							fontSize='large'
						/>
					</div>
					<div className='flex items-center justify-center h-1/2 font-mono font-semibold text-amber-950 text-center'>
						Manage all your gift cards from one account
					</div>
				</div>
				<div className='h-40 w-full md:w-40 bg-amber-50 rounded-xl shadow-xl hover:scale-95 duration-700 p-2 flex flex-col  justify-between'>
					<div className='w-full flex items-center justify-center h-1/2 bg-amber-300'>
						<VisibilityIcon
							fontSize='large'
						/>
					</div>
					<div className='flex items-center justify-center h-1/2 font-mono font-semibold text-amber-950 text-center'>
						<p>Track your balance and expiry date</p>
					</div>
				</div>
				<div className='h-40 w-full md:w-40 bg-amber-50 rounded-xl shadow-xl hover:scale-95 duration-700 p-2 flex flex-col '>
					<div className='w-full flex items-center justify-center h-1/2 bg-amber-300'>
						<CardGiftcardIcon
							fontSize='large'
						/>
					</div>
					<div className='flex items-center justify-center h-1/2 font-mono font-semibold text-amber-950 text-center'>
						<p >Shop at your favourites</p>
					</div>
				</div>


			</div>


			<div className='flex justify-center '>
				<div></div>
				<Link className='text-center p-2 my-1 w-36 rounded-lg text-white bg-amber-500 font-mono hover:scale-95 hover:cursor-pointer transition duration-700'
					to="demo"
					smooth={true}
					duration={700}
				>
					See demo
				</Link>
			</div>
		</div>
	)
}