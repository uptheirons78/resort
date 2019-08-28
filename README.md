# RESORT - React Project

1. 'create-react-app' and cleaning it up;
2. install 'react-router-dom' and 'react-icons';
3. add '\_redirects' file for Netlify issues;
4. add 'images' folder and 'data.js' inside 'src';
5. create 'pages' folder and files 'Home', 'Rooms', 'SingleRoom' and 'Error';
6. wrap the app in the BrowserRouter in 'index.js';
7. create routes with Route and Switch in App.js;
8. create 'components' folder;
9. touch 'components/Navbar.js';
10. create Navbar using a Class Component and react-icons for the toggle button;
11. create Hero Component with defaultProps for className;
12. create Banner Component with 'title', 'subtitle' and 'children' props;
13. create Services and Section Title Component;
14. setup 'context.js' and use the Context API;
15. create 'FeaturedRooms.js' and start using RoomsContext;
16. import 'data.js' inside 'context.js' and format the incoming data in a new object;
17. create Loading Component with a gif;
18. create Room Component and display a list of Rooms inside FeaturedRoom Component;

#### Single Room Page

1. create a function inside 'context.js' called getRoom with a 'slug' parameter to filter 'rooms' based on it;
2. update 'SingleRoom.js' page with RoomContext;
3. install styled-components to render Hero Component background dinamically;
4. create 'StyledHero.js';

#### Rooms Page: display Rooms section

1. create 'RoomsContainer.js', 'RoomsFilter.js' and 'RoomsList.js';
2. import 'RoomsConsumer' inside 'RoomsContainer.js' to work with Context inside a Functional Component (commented out inside file);
3. create an HigherOrderComponent called 'withRoomConsumer' inside 'context.js' and imported it inside 'RoomsContainer.js';
4. import 'Room' Component inside 'RoomList.js' and render one for each rooms;

## To do later:

- refactor Navbar as a Functional Component using Hooks;
