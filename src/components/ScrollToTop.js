import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

const ScrollToTop = ({ children, location: { pathname } }) => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return children || null;
};

export default withRouter(ScrollToTop);

/**
 * @ScrollToTop
 * Class versione of the same component.
 */

// class ScrollToTop extends React.Component {
// 	componentDidUpdate(prevProps) {
// 		if (this.props.location.pathname !== prevProps.location.pathname) {
// 			window.scrollTo(0, 0);
// 		}
// 	}

// 	render() {
// 		return this.props.children;
// 	}
// }
//export default withRouter(ScrollToTop);
