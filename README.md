# RESORT - React Project

Full Stack App built with React and Contentful Api  
[Live Website](https://mb78-react-resort.netlify.com)

- Clone or download it on your computer;
- Sign up on [Contentful](https://www.contentful.com/) and get your API Keys;
- Create a .env.local file inside the main project folder and register the API Keys;
- Create some rooms inside Contentful following 'data.js' file structure;
- Finally run the app with `npm start`;
- Have fun!

## Building Process:

#### Setup

[Repo](https://github.com/uptheirons78/resort/tree/setup)

1. 'create-react-app' and cleaning it up;
2. install 'react-router-dom' and 'react-icons';
3. add '\_redirects' file for Netlify issues;
4. add 'images' folder and 'data.js' inside 'src';

#### Routing and Pages

[Repo](https://github.com/uptheirons78/resort/tree/pages)

1. create 'pages' folder and files 'Home', 'Rooms', 'SingleRoom' and 'Error';
2. wrap the app in the BrowserRouter in 'index.js';
3. create routes with Route and Switch in App.js;

#### Navbar Component

[Repo](https://github.com/uptheirons78/resort/tree/navbar)

1. create 'components' folder;
2. touch 'components/Navbar.js';
3. create Navbar using a Class Component and react-icons for the toggle button;

#### Hero Component

[Repo](https://github.com/uptheirons78/resort/tree/hero)

1. create Hero Component with defaultProps for className;
2. create Banner Component with 'title', 'subtitle' and 'children' props;

#### Services and Title Components

[Repo](https://github.com/uptheirons78/resort/tree/services)

1. create Services and Section Title Component;

#### RoomsContext, Featured Rooms and Loading Components

[Repo](https://github.com/uptheirons78/resort/tree/context)

1. setup 'context.js' and use the Context API;
2. create 'FeaturedRooms.js' and start using RoomsContext;
3. import 'data.js' inside 'context.js' and format the incoming data in a new object;
4. create Loading Component with a gif;
5. create Room Component and display a list of Rooms inside FeaturedRoom Component;

#### Single Room Page and Styled Hero Component

[Repo](https://github.com/uptheirons78/resort/tree/single-room)

1. create a function inside 'context.js' called getRoom with a 'slug' parameter to filter 'rooms' based on it;
2. update 'SingleRoom.js' page with RoomContext;
3. install styled-components to render Hero Component background dinamically;
4. create 'StyledHero.js';

#### Rooms Page: Display Rooms section

[Repo](https://github.com/uptheirons78/resort/tree/rooms-page)

1. create 'RoomsContainer.js', 'RoomsFilter.js' and 'RoomsList.js';
2. import 'RoomsConsumer' inside 'RoomsContainer.js' to work with Context inside a Functional Component (commented out inside file);
3. create an HigherOrderComponent called 'withRoomConsumer' inside 'context.js' and imported it inside 'RoomsContainer.js';
4. import 'Room' Component inside 'RoomList.js' and render one for each rooms;

#### Rooms Page: Filter Rooms section

[Repo](https://github.com/uptheirons78/resort/tree/filter-component)

1. update state inside 'context.js' adding 'type', 'capacity', 'price', 'minPrice', 'maxPrice', 'minSize', 'maxSize', 'breakfast' and 'pets';
2. set maxPrice and maxSize inside ComponentDidMount() in 'context.js';
3. create handleChange() and filterRooms() inside 'context.js';
4. import useContext inside 'RoomsFilter.js' to use RoomsContext;
5. create getUnique() function inside 'RoomsFilter.js' and render `<select> <options>` dinamically;
6. complete filterRooms() function inside the context for any type and complete the `<form>` in RoomsFilter.js;

#### Contentful Setup

[Repo](https://github.com/uptheirons78/resort/tree/contentful)

1. npm i contentful and create the 'Contentful.js' file;
2. create the '.env.local' file to store api keys;
3. update 'context.js' with 'Client';
4. create getData() inside context.js to fetch data from Contentful Api;
5. run it inside ComponentDidMount()

#### ScrollToTop Component

[Repo](https://github.com/uptheirons78/resort/tree/scroll-top)

1. 'react-router-dom' needs a 'scroll restoration' to work better, so create a 'ScrollToTop' Component;
2. render it at the top of the 'App' in 'index.js' after `<Router></ Router>` 😉;

#### Deploy to Netlify

1. the project is ready to be deployed on Netlify!
2. live website link: [mb78-react-resort](https://mb78-react-resort.netlify.com)
