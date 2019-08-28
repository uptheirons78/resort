import React from 'react';
import { useContext } from 'react';
import { RoomContext } from '../context';
import Title from './Title';

// get unique values from array
const getUnique = (items, value) => {
	return [...new Set(items.map(item => item[value]))];
};

export default function RoomsFilter({ rooms }) {
	const context = useContext(RoomContext);
	const {
		handleChange,
		type,
		capacity,
		price,
		minPrice,
		maxPrice,
		minSize,
		maxSize,
		breakfast,
		pets
	} = context;

	let types = getUnique(rooms, 'type');
	types = ['all', ...types];

	let guests = getUnique(rooms, 'capacity');

	return (
		<section className='filter-container'>
			<Title title='search rooms' />
			<form className='filter-form'>
				{/**select type */}
				<div className='form-group'>
					<label htmlFor='type'>room type</label>
					<select
						name='type'
						id='type'
						className='form-control'
						onChange={handleChange}
					>
						{types.map((item, index) => (
							<option key={index} value={item}>
								{item}
							</option>
						))}
					</select>
				</div>
				{/**end select type */}
				{/**capacity*/}
				<div className='form-group'>
					<label htmlFor='capacity'>guests</label>
					<select
						name='capacity'
						id='capacity'
						className='form-control'
						onChange={handleChange}
					>
						{guests.map((item, index) => (
							<option key={index} value={item}>
								{item}
							</option>
						))}
					</select>
				</div>
				{/**end capacity */}
				{/**room price */}
				<div className='form-group'>
					<label htmlFor='price'>room price ${price}</label>
					<input
						type='range'
						name='price'
						min={minPrice}
						max={maxPrice}
						id='price'
						value={price}
						onChange={handleChange}
						className='form-controll'
					/>
				</div>
				{/**end room price */}
				{/**room size */}
				<div className='form-group'>
					<label htmlFor='size'>room size</label>
					<div className='size-inputs'>
						<input
							type='number'
							name='minSize'
							id='size'
							value={minSize}
							onChange={handleChange}
							className='size-input'
						/>
						<input
							type='number'
							name='maxSize'
							id='size'
							value={maxSize}
							onChange={handleChange}
							className='size-input'
						/>
					</div>
				</div>
				{/**end room size */}
				{/**extras */}
				<div className='form-group'>
					<div className='single-extra'>
						<label htmlFor='breakfast'>breakfast</label>
						<input
							type='checkbox'
							name='breakfast'
							id='breakfast'
							checked={breakfast}
							onChange={handleChange}
						/>
					</div>
					<div className='single-extra'>
						<label htmlFor='pets'>pets</label>
						<input
							type='checkbox'
							name='pets'
							id='pets'
							checked={pets}
							onChange={handleChange}
						/>
					</div>
				</div>
				{/**end of extras */}
			</form>
		</section>
	);
}
