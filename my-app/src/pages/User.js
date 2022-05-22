import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import UserContext from '../UserContext';
import UserViewBig from '../components/UserViewBig';
import UserViewSmall from '../components/UserViewSmall';
import { useMediaQuery } from 'react-responsive';

export default function User() {
	const {user} = useContext(UserContext);

	const isSmall = useMediaQuery( { maxWidth: 750 });

	return(
		<div>
			{
				isSmall ?
				<UserViewSmall /> :
				<UserViewBig />
			}
		</div>
	)
}