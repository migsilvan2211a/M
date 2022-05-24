import React from 'react';	
import {useMediaQuery} from 'react-responsive';
import NavbarBig from './NavbarBig';
import NavbarSmall from './NavbarSmall';
const AppNavbar = () => {
	const isSmall = useMediaQuery({ maxWidth: 768 })

	return(
		<div className="white-bg p-0 m-0">
			{(isSmall) ? <NavbarSmall /> : <NavbarBig />}
		</div>
		
	);
}

export default AppNavbar;