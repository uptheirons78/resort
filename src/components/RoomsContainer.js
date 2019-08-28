import React, { Fragment } from 'react';
import RoomsFilter from './RoomsFilter';
import RoomsList from './RoomsList';
import { withRoomConsumer } from '../context';
import Loading from './Loading';

function RoomsContainer({ context }) {
	const { loading, sortedRooms, rooms } = context;
	if (loading) {
		return <Loading />;
	}

	return (
		<Fragment>
			<RoomsFilter rooms={rooms} />
			<RoomsList rooms={sortedRooms} />
		</Fragment>
	);
}

export default withRoomConsumer(RoomsContainer);

/**
 * @Context
 * working with Context Api in a Functional Component
 * importing the Consumer
 *
/*
import React from 'react';
import RoomsFilter from './RoomsFilter';
import RoomsList from './RoomsList';
import { RoomConsumer } from '../context';
import Loading from './Loading';

export default function RoomsContainer() {
	return (
		<RoomConsumer>
			{value => {
				const { loading, sortedRooms, rooms } = value;
				if (loading) {
					return <Loading />;
				}

				return (
					<div>
						Hello from RoomsContainer
						<RoomsList rooms={rooms} />
						<RoomsFilter rooms={sortedRooms} />
					</div>
				);
			}}
		</RoomConsumer>
	);
}
*/
