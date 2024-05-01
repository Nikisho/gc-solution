import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll';
import CurrencyPoundIcon from '@mui/icons-material/CurrencyPound';
import PaymentsIcon from '@mui/icons-material/Payments';
import FoodBankIcon from '@mui/icons-material/FoodBank';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import { Collapse, Fade } from '@mui/material';

function Home() {
	const delay = (ms) => new Promise(res => setTimeout(res, ms));
	const [open, setOpen] = useState(false);
	const collapseElements = async () => {
		await delay(500);
		setOpen(true);
	};

	useEffect(() => {
		collapseElements();
	}, [])

	return (


		<div className='h-auto xl:h-screen flex flex-col items-center '>
			<div className="items-center h-5/6 justify-center flex flex-col xl:flex-row 2xl:w-2/3 ">

				<div className='w-full xl:w-1/2 px-5 '>

					<div className=' font-sans text-7xl my-5 text-sky-900'>
						<strong>Envofa</strong>
					</div>

					<div className='flex h-3/4 '>
						<Collapse in={open} orientation='vertical' timeout={2000}>

							<div className=' text-xl xl:px-0 font-sans space-y-1 mx-1 self-center xl:w-4/5'>
								Did you know roughly
								<strong> £500M </strong>
								gets wasted in
								<strong> unspent gift cards </strong>
								each year?
								<p>
									Who do you think pockets all that money and
									will they do anything to change it?
								</p>
								<p className='py-2'>
									From spending caps and hidden management fees to shops you’ve never heard of,
									receiving and using a gift card shouldn’t be an annoying or frustrating experience.
								</p>

								<strong>Envofa Gift Cards </strong>
								are different. We give you back
								<strong> control </strong>
								of your money.
							</div>
						</Collapse>

					</div>


				</div>

				<div className='md:grid self-center place-items-center md:mt-12 grid-cols-1  space-y-2 w-full p-2
                        gap-y-4
                        md:grid-cols-3 md:w-full lg:space-y-0 lg:gap-y-4
                        xl:grid-cols-3 xl:w-1/2 
                        2xl:w-1/2
						
					   hidden
                      '>

					<Collapse in={open} orientation='horizontal' timeout={2000} >


						<div className='h-32 w-full md:w-44 bg-cyan-600 rounded-lg shadow-xl hover:scale-95 duration-700 p-2 flex flex-col justify-between'>
							<div className='w-full flex items-center justify-center h-1/2  '>
								<CurrencyPoundIcon
									fontSize='large'
								/>
							</div>
							<div className='flex items-center justify-center h-1/2 font-sans  font-semibold  text-center'>
								Top up your card for expensive purchases
							</div>
						</div>

					</Collapse>

					<Collapse in={open} orientation='horizontal' timeout={2000} >


						<div className='h-32 w-full md:w-44 bg-cyan-600 rounded-lg shadow-xl hover:scale-95 duration-700 p-2 flex flex-col  justify-between'>
							<div className='w-full flex items-center justify-center h-1/2 '>
								<PaymentsIcon
									fontSize='large'
								/>
							</div>
							<div className='flex items-center justify-center h-1/2 font-sans text font-semibold  text-center'>
								Transfer gift money to your bank account
							</div>
						</div>

					</Collapse>

					<Collapse in={open} orientation='horizontal' timeout={2000} className='' >


						<div className='h-32 w-full md:w-44 bg-cyan-600 rounded-lg shadow-xl hover:scale-95 duration-700 p-2 flex flex-col  justify-between'>
							<div className='w-full flex items-center justify-center h-1/2   '>
								<FoodBankIcon
									fontSize='large'
								/>
							</div>
							<div className='flex items-center justify-center h-1/2  font-sans font-semibold  text-center'>
								Donate to your favourite charities
							</div>
						</div>
					</Collapse>


					<Collapse in={open} orientation='horizontal' timeout={2000} >

						<div className='h-32 w-full md:w-44 bg-cyan-600 rounded-lg shadow-xl hover:scale-95 duration-700 p-2 flex flex-col  justify-between'>
							<div className='w-full flex items-center justify-center h-1/2  '>
								<ManageSearchIcon
									fontSize='large'
								/>
							</div>
							<div className='flex my-1 items-center justify-center h-1/2  font-sans font-semibold  text-center'>
								Manage all your gift cards from one account
							</div>
						</div>

					</Collapse>


					<Collapse in={open} orientation='horizontal' timeout={2000} >


						<div className='h-32 w-full md:w-44 bg-cyan-600 rounded-lg shadow-xl hover:scale-95 duration-700 p-2 flex flex-col  justify-between'>
							<div className='w-full flex items-center justify-center h-1/2 '>
								<VisibilityIcon
									fontSize='large'
								/>
							</div>
							<div className='flex items-center justify-center h-1/2   font-sans font-semibold  text-center'>
								<p>Track your balance and expiry date</p>
							</div>
						</div>


					</Collapse>

					<Collapse in={open} orientation='horizontal' timeout={2000} >


						<div className='h-32 w-full md:w-44 bg-cyan-600 rounded-lg shadow-xl hover:scale-95 duration-700 p-2 flex flex-col '>
							<div className='w-full flex items-center justify-center h-1/2 '>
								<CardGiftcardIcon
									fontSize='large'
								/>
							</div>
							<div className='flex items-center justify-center  h-1/2 font-sans font-semibold  text-center'>
								<p >Shop at your favourites</p>
							</div>
						</div>
					</Collapse>
				</div>


				<Fade in={true} timeout={5000}>

					<div className='grid self-center place-items-center mt-10 grid-cols-2 w-full p-2
                        gap-y-4
						md:hidden
						h-fit
                      '>



						<div className='h-32 w-40 md:w-44 bg-cyan-600 rounded-lg shadow-xl hover:scale-95 duration-700 p-2 flex flex-col justify-between'>
							<div className='w-full flex items-center justify-center h-1/2  '>
								<CurrencyPoundIcon
									fontSize='large'
								/>
							</div>
							<div className='flex items-center justify-center h-1/2 font-sans  font-semibold  text-center'>
								Top up your card for expensive purchases
							</div>
						</div>



						<div className='h-32 w-40  md:w-44 bg-cyan-600 rounded-lg shadow-xl hover:scale-95 duration-700 p-2 flex flex-col  justify-between'>
							<div className='w-full flex items-center justify-center h-1/2 '>
								<PaymentsIcon
									fontSize='large'
								/>
							</div>
							<div className='flex items-center justify-center h-1/2 font-sans text font-semibold  text-center'>
								Transfer gift money to your bank account
							</div>
						</div>



						<div className='h-32 w-40  md:w-44 bg-cyan-600 rounded-lg shadow-xl hover:scale-95 duration-700 p-2 flex flex-col  justify-between'>
							<div className='w-full flex items-center justify-center h-1/2   '>
								<FoodBankIcon
									fontSize='large'
								/>
							</div>
							<div className='flex items-center justify-center h-1/2  font-sans font-semibold  text-center'>
								Donate to your favourite charities
							</div>
						</div>



						<div className='h-32 w-40  md:w-44 bg-cyan-600 rounded-lg shadow-xl hover:scale-95 duration-700 p-2 flex flex-col  justify-between'>
							<div className='w-full flex items-center justify-center h-1/2  '>
								<ManageSearchIcon
									fontSize='large'
								/>
							</div>
							<div className='flex my-1 items-center justify-center h-1/2  font-sans font-semibold  text-center'>
								Manage all your gift cards from one account
							</div>
						</div>





						<div className='h-32 w-40  md:w-44 bg-cyan-600 rounded-lg shadow-xl hover:scale-95 duration-700 p-2 flex flex-col  justify-between'>
							<div className='w-full flex items-center justify-center h-1/2 '>
								<VisibilityIcon
									fontSize='large'
								/>
							</div>
							<div className='flex items-center justify-center h-1/2   font-sans font-semibold  text-center'>
								<p>Track your balance and expiry date</p>
							</div>
						</div>





						<div className='h-32 w-40  md:w-44 bg-cyan-600 rounded-lg shadow-xl hover:scale-95 duration-700 p-2 flex flex-col '>
							<div className='w-full flex items-center justify-center h-1/2 '>
								<CardGiftcardIcon
									fontSize='large'
								/>
							</div>
							<div className='flex items-center justify-center  h-1/2 font-sans font-semibold  text-center'>
								<p >Shop at your favourites</p>
							</div>
						</div>
					</div>
				</Fade>

			</div>
			<div className='w-full mt-5 justify-center flex'>

				<Link className='rounded-full shadow-xl font-semibold p-2 animate-pulse px-10 bg-cyan-600 hover:scale-95 hover:cursor-pointer transition duration-700'
					to="demo"
					smooth={true}
					duration={700}
					style={{ width: '10' }}
				>
					See demo
				</Link>
			</div>
		</div>

	)
}

export default Home