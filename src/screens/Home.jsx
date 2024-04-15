import React from 'react'
import { Link } from 'react-scroll';
import CurrencyPoundIcon from '@mui/icons-material/CurrencyPound';
import PaymentsIcon from '@mui/icons-material/Payments';
import FoodBankIcon from '@mui/icons-material/FoodBank';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';

function Home() {
	return (
		<div className="bg-amber-100 h-full flex justify-center ">

			<div className='flex flex-col space-y-2 w-full items-center'>

				<div className='flex my-2 justify-center font-sans text-7xl text-amber-500 border-b border-amber-500 pb-1 '>
					<strong>Envofa</strong>
				</div>

				<div className=' px-2 xl:px-0 xl:w-2/3 xl:text-center font-mono'>
					Did you know roughly
					<strong> £500M </strong>
					gets wasted in
					<strong> unspent gift cards </strong>
					each year?
					{/* <p>
						Who do you think pockets all that money and
						will they do anything to change it?
					</p> */}
					<p className='my-1'>
						From spending caps and hidden management fees to shops you’ve never heard of,
						receiving and using a gift card shouldn’t be an annoying or frustrating experience.
					</p>

					<strong>Envofa Gift Cards </strong>
					are different. We give you back
					<strong> control </strong>
					of your money.
				</div>
				<div className='grid self-center grid-cols-1 place-items-center space-y-2 w-full p-2
                        gap-y-4
                        md:grid-cols-3 md:w-2/3 lg:space-y-0 lg:gap-y-4
                        xl:grid-cols-3 xl:w-1/2
                        2xl:w-1/2
                      '>
					<div className='h-28 w-full md:w-44 bg-amber-50 rounded-xl shadow-xl hover:scale-95 duration-700 p-2 flex flex-col  justify-between'>
						<div className='w-full flex items-center justify-center h-1/2 bg-amber-300 '>
							<CurrencyPoundIcon
								fontSize='large'
							/>
						</div>
						<div className='flex items-center justify-center h-1/2 font-mono text-sm font-semibold text-amber-950 text-center'>
							Top up your card for expensive purchases
						</div>
					</div>
					<div className='h-28 w-full md:w-44 bg-amber-50 rounded-xl shadow-xl hover:scale-95 duration-700 p-2 flex flex-col  justify-between'>
						<div className='w-full flex items-center justify-center h-1/2 bg-amber-300 '>
							<PaymentsIcon
								fontSize='large'
							/>
						</div>
						<div className='flex items-center justify-center h-1/2 font-mono text-sm font-semibold text-amber-950 text-center'>
							Transfer gift money to your bank account
						</div>
					</div>
					<div className='h-28 w-full md:w-44 bg-amber-50 rounded-xl shadow-xl hover:scale-95 duration-700 p-2 flex flex-col  justify-between'>
						<div className='w-full flex items-center justify-center h-1/2 bg-amber-300  '>
							<FoodBankIcon
								fontSize='large'
							/>
						</div>
						<div className='flex items-center justify-center h-1/2 text-sm font-mono font-semibold text-amber-950 text-center'>
							Donate to your favourite charities
						</div>
					</div>
					<div className='h-28 w-full md:w-44 bg-amber-50 rounded-xl shadow-xl hover:scale-95 duration-700 p-2 flex flex-col  justify-between'>
						<div className='w-full flex items-center justify-center h-1/2 bg-amber-300 '>
							<ManageSearchIcon
								fontSize='large'
							/>
						</div>
						<div className='flex my-1 items-center justify-center h-1/2 text-sm font-mono font-semibold text-amber-950 text-center'>
							Manage all your gift cards from one account
						</div>
					</div>
					<div className='h-28 w-full md:w-44 bg-amber-50 rounded-xl shadow-xl hover:scale-95 duration-700 p-2 flex flex-col  justify-between'>
						<div className='w-full flex items-center justify-center h-1/2 bg-amber-300'>
							<VisibilityIcon
								fontSize='large'
							/>
						</div>
						<div className='flex items-center justify-center h-1/2  text-sm font-mono font-semibold text-amber-950 text-center'>
							<p>Track your balance and expiry date</p>
						</div>
					</div>
					<div className='h-28 w-full md:w-44 bg-amber-50 rounded-xl shadow-xl hover:scale-95 duration-700 p-2 flex flex-col '>
						<div className='w-full flex items-center justify-center h-1/2 bg-amber-300'>
							<CardGiftcardIcon
								fontSize='large'
							/>
						</div>
						<div className='flex items-center justify-center text-sm h-1/2 font-mono font-semibold text-amber-950 text-center'>
							<p >Shop at your favourites</p>
						</div>
					</div>


				</div>


				<Link className='p-2 rounded-lg text-white bg-amber-500 font-mono hover:scale-95 hover:cursor-pointer transition duration-700'
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

export default Home