import React from 'react';
import {useMediaQuery} from 'react-responsive';
import HomeSmall from '../components/Home/HomeSmall'
import HomeBig from '../components/Home/HomeBig'
import AppNavbar from '../components/Navbar/AppNavbar';
export default function Home() {
	const isSmall = useMediaQuery({query: '(max-width: 768px)'})
	console.log(isSmall)
	return(
		<div id="homePicture">
			
				<AppNavbar />
			
		</div>
	);
}