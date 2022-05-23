import React, {useState} from 'react';
import AdminViewBig from '../components/Admin/AdminViewBig';
import AdminViewSmall from '../components/Admin/AdminViewSmall';
import { useMediaQuery } from 'react-responsive'
import { AdminProvider } from '../components/Contexts/AdminContext';
export default function Admin() {
	const isSmall = useMediaQuery({ maxWidth: 750});
	let [data, setData] = useState();
	return(
		<div>
			<AdminProvider value={{data, setData}}>
			{
				isSmall ?
				<AdminViewSmall /> :
				<AdminViewBig />
			}
			</AdminProvider>
		</div>
	);
}