export default function App() {
	// const twDebug =
	// 	'outline outline-[1px] outline-pink-500 [&>*]:outline [&>*]:outline-[1px] [&>*]:outline-pink-500';
	const twDebug = '';
	return (
		<main className='h-full grid grid-cols-7 place-content-center place-items-center'>
			<aside className='col-span-3 w-full'>
				<img src='./images/bg-main-desktop.png' alt='background' />
			</aside>
			<section className='col-span-4 p-36'>
				<form className={`${twDebug} flex flex-col gap-4`}>
					<div id='name' className='w-full'>
						<label className='pb-2 block uppercase'>Cardholder Name</label>
						<input
							className='w-full px-4 py-3 rounded-lg'
							type='text'
							placeholder='First and last name'
						/>
						<p className='invisible font-light text-sm text-error'>Error Message</p>
					</div>
					<div id='card-number' className='w-full'>
						<label className='pb-2 block uppercase'>Card Number</label>
						<input
							className='w-full px-4 py-3 rounded-lg'
							type='text'
							placeholder='0000 0000 0000 0000'
						/>
						<p className='invisible font-light text-sm text-error'>Error Message</p>
					</div>
					<div className='grid grid-cols-4 gap-x-6'>
						<label className='col-span-2 pb-2 uppercase'>EXP. Date (MM/YY)</label>
						<div className={`${twDebug} col-span-2 order-2 grid grid-cols-2 gap-x-6`}>
							<input
								className='w-full px-4 py-3 rounded-lg'
								type='text'
								placeholder='MM'
							/>
							<input
								className='w-full px-4 py-3 rounded-lg'
								type='text'
								placeholder='YY'
							/>
							<p className='invisible col-span-2 font-light text-sm text-error'>
								Error Message
							</p>
						</div>
						<label className='col-span-2 order-1 pb-2 block uppercase'>CVC</label>
						<div className='col-span-2 order-last'>
							<input
								className='w-full px-4 py-3 rounded-lg'
								type='text'
								placeholder='000'
							/>
							<p className='invisible font-light text-sm text-error'>Error Message</p>
						</div>
					</div>
					<button className='px-4 py-3 rounded-lg bg-dark-purple text-white'>
						Confirm
					</button>
				</form>
			</section>
		</main>
	);
}
