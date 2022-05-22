import React from 'react';
import { Link } from 'react-router-dom';
import {useMediaQuery} from 'react-responsive';
import HomeSmall from '../components/HomeSmall'
import HomeBig from '../components/HomeBig'
export default function Home() {
	const isSmall = useMediaQuery({query: '(max-width: 768px)'})
	console.log(isSmall)
	return(
		<div id="homePicture" className="homeBorder">
			
				{(isSmall) ? <HomeSmall /> : <HomeBig />}
			
		</div>
	);
}