import { useMediaQuery } from 'react-responsive'

export default function ScreenSize() {
	let is425 = useMediaQuery({ maxWidth: 425 });
	let is728 = useMediaQuery({ maxWidth: 728 });
	let is1024 = useMediaQuery({ maxWidth: 1024 });
	let is1440 = useMediaQuery({ maxWidth: 1440 });
	let min1441 = useMediaQuery({ minWidth: 1441 });
	if(is425)
		return 1;
	else if(is728)
		return 2;
	else if(is1024)
		return 3;
	else if(is1440)
		return 4;
	else if(min1441)
		return 5;
}