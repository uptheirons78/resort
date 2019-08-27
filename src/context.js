import React, { Component } from 'react';
import items from './data';

// create the Context
const RoomContext = React.createContext();

// create a class based Provider
class RoomProvider extends Component {
	state = {
		rooms: [],
		sortedRooms: [],
		featuredRooms: [],
		loading: true
	};

	// getData (will be setup when using ContentFull Api)

	componentDidMount() {
		let rooms = this.formatData(items);
		let featuredRooms = rooms.filter(room => room.featured === true);
		this.setState({
			rooms,
			featuredRooms,
			sortedRooms: rooms,
			loading: false
		});
	}

	// this method format data in a better and more readable wway
	formatData(items) {
		let tempItems = items.map(item => {
			let id = item.sys.id;
			let images = item.fields.images.map(image => image.fields.file.url);
			let room = { ...item.fields, images, id };
			return room;
		});
		return tempItems;
	}

	render() {
		return (
			<RoomContext.Provider value={{ ...this.state }}>
				{this.props.children}
			</RoomContext.Provider>
		);
	}
}

// create the Consumer
const RoomConsumer = RoomContext.Consumer;

export { RoomConsumer, RoomProvider, RoomContext };