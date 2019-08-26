import React from 'react';

export default function Hero({ children, hero }) {
	return <header className={hero}>{children}</header>;
}

/**
 * DEFAULT PROPS:
 * Use defaultProps to render dinamically the Hero Component,
 * based on the page where you want to render it.
 * If you want to not render the default one, just change 'hero' prop on page file.
 * See: 'Rooms.js' file
 * See also: App.css to understand which class is in use and how it works 😉
 */
Hero.defaultProps = {
	hero: 'defaultHero'
};
