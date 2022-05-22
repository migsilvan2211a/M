import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import UserContext from '../UserContext';
import AdminViewBig from '../components/AdminViewBig';
import AdminViewSmall from '../components/AdminViewSmall';
import { useMediaQuery} from 'react-responsive'
export default function Admin() {
	const isSmall = useMediaQuery({ maxWidth: 750});

	return(
		<div>
			{
				isSmall ?
				<AdminViewSmall /> :
				<AdminViewBig />
			}
		</div>
	);
}