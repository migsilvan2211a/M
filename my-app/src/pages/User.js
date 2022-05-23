import React from 'react';
import UserViewBig from '../components/UserView/UserViewBig';
import UserViewSmall from '../components/UserView/UserViewSmall';
import { useMediaQuery } from 'react-responsive';

export default function User() {

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