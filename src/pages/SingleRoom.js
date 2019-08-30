import React, { Component, Fragment } from 'react';
import defaultBcg from '../images/room-1.jpeg';
//import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import { RoomContext } from '../context';
import StyledHero from '../components/StyledHero';

class SingleRoom extends Component {
	constructor(props) {
		super(props);
		/**
		 * @props
		 * this.props.match is part of an object we can access thanks to react-router-dom
		 */
		this.state = {
			slug: this.props.match.params.slug,
			defaultBcg
		};
	}

	// access the Context
	static contextType = RoomContext;

	render() {
		const { getRoom } = this.context;
		const room = getRoom(this.state.slug);

		if (!room) {
			return (
				<div className='error'>
					<h3>no such room could be find</h3>
					<Link to='/rooms' className='btn-primary'>
						back to rooms
					</Link>
				</div>
			);
		}

		const {
			name,
			description,
			capacity,
			size,
			price,
			extras,
			breakfast,
			pets,
			images
		} = room;

		// take a look at the Rest Operator
		const [mainImage, ...defaultImages] = images;

		return (
			<Fragment>
				<StyledHero img={mainImage || this.state.defaultBcg}>
					<Banner title={`${name} room`}>
						<Link to='/rooms' className='btn-primary'>
							back to rooms
						</Link>
					</Banner>
				</StyledHero>
				<section className='single-room'>
					<div className='single-room-images'>
						{defaultImages.map((item, index) => {
							return <img src={item} alt={name} key={index} />;
						})}
					</div>
					<div className='single-room-info'>
						<article className='desc'>
							<h3>details</h3>
							<p>{description}</p>
						</article>
						<article className='info'>
							<h3>info</h3>
							<h6>price: ${price}</h6>
							<h6>size: {size} SQFT</h6>
							<h6>
								max capacity:{' '}
								{capacity < 2 ? `${capacity} person` : `${capacity} people`}
							</h6>
							<h6>{pets ? 'Pets Allowed' : 'No Pets Allowed'}</h6>
							<h6>{breakfast && 'breakfast included'}</h6>
						</article>
					</div>
				</section>
				<section className='room-extras'>
					<h6>extras</h6>
					<ul className='extras'>
						{extras.map((item, index) => {
							return <li key={index}>- {item}</li>;
						})}
					</ul>
				</section>
			</Fragment>
		);
	}
}

export default SingleRoom;
