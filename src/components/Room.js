import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import defaultImage from '../images/room-1.jpeg';

export default function Room({ room }) {
	const { name, slug, images, price } = room;

	return (
		<article className='room'>
			<div className='img-container'>
				<img src={images[0] || defaultImage} alt='single room' />
				<div className='price-top'>
					<h6>${price}</h6>
					<p>per night</p>
				</div>
				<Link to={`/rooms/${slug}`} className='btn-primary room-link'>
					Features
				</Link>
				<p className='room-info'>{name}</p>
			</div>
		</article>
	);
}

/**
 * @PropTypes :
 * room is an object, so we need to use shape()
 * and within the shape we can set all the PropTypes for any values of it
 */
Room.propTypes = {
	room: PropTypes.shape({
		name: PropTypes.string.isRequired,
		slug: PropTypes.string.isRequired,
		images: PropTypes.arrayOf(PropTypes.string).isRequired,
		price: PropTypes.number.isRequired
	})
};
