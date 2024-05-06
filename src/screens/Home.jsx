import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll';
import CurrencyPoundIcon from '@mui/icons-material/CurrencyPound';
import PaymentsIcon from '@mui/icons-material/Payments';
import FoodBankIcon from '@mui/icons-material/FoodBank';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import { Collapse } from '@mui/material';
import CardComponentCollapse from '../components/CardComponentCollapse';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

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


	const cards = [
		{
			icon: PaymentsIcon,
			text: 'Send money to your bank account'
		},
		{
			icon: VisibilityIcon,
			text: 'Track your balance and expiry date'
		},
		{
			icon: FoodBankIcon,
			text: 'Donate to your favourite charities'
		},
		{
			icon: CurrencyPoundIcon,
			text: 'Top up your card with more money'
		},
		{
			icon: CardGiftcardIcon,
			text: 'Shop at your favourites'
		},
		{
			icon: ManageSearchIcon,
			text: 'Manage your cards from one account'
		}
	]
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

				<div className='grid grid-cols-2 self-center place-items-center md:mt-12 space-y-2 w-full
								gap-y-4
								md:grid-cols-3 md:w-full lg:space-y-0 lg:gap-y-4
								xl:grid-cols-3 xl:w-1/2 
								2xl:w-1/2
                '>
					{
						cards?.map((card) => (
							<CardComponentCollapse bool={open} Icon={card.icon} text={card.text} />
						))
					}

				</div>
			</div>
			<div className='w-full mt-4 justify-center flex flex-col items-center space-y-1'>
				<p className='font-semibold'>See demo</p>
				<Link className='rounded-full shadow-xl font-semibold h-9 w-9 flex justify-center items-center animate-pulse bg-cyan-600 hover:scale-95 hover:cursor-pointer transition duration-700'
					to="demo"
					smooth={true}
					duration={700}
					// style={{ width: '10' }}
				>
					<ArrowDownwardIcon 
						fontSize='small'
					/>
				</Link>
			</div>
		</div>

	)
}

export default Home