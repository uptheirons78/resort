import React, { Component } from 'react';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';
import Title from './Title';

export default class Services extends Component {
	state = {
		services: [
			{
				icon: <FaCocktail />,
				title: 'Free Cocktails',
				info:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, totam!'
			},
			{
				icon: <FaHiking />,
				title: 'Hiking Tours',
				info:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, totam!'
			},
			{
				icon: <FaShuttleVan />,
				title: 'Free Transfers',
				info:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, totam!'
			},
			{
				icon: <FaBeer />,
				title: 'Good Beers',
				info:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, totam!'
			}
		]
	};
	render() {
		return (
			<section className='services'>
				<Title title='services' />
				<div className='services-center'>
					{this.state.services.map((service, i) => {
						return (
							<article key={service.i} className='service'>
								<span>{service.icon}</span>
								<h6>{service.title}</h6>
								<p>{service.info}</p>
							</article>
						);
					})}
				</div>
			</section>
		);
	}
}
