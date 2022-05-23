//imports
	import React, {useState, useEffect} from 'react';
	import {Form, Button, Image} from 'react-bootstrap';
	import Swal from 'sweetalert2';
	import Datepicker from 'react-datepicker';
	import phil from 'phil-reg-prov-mun-brgy';
	import { useNavigate }  from 'react-router-dom';
	import 'react-datepicker/dist/react-datepicker.css';
	import 'react-datepicker/dist/react-datepicker-cssmodules.css';
	import pic1 from '../pictures/clothes1.jpg'


export default function Register() {
	//useStates
		const [fName, setFName] = useState('');
		const [lName, setLName] = useState('');
		const [email, setEmail] = useState('');
		const [pass, setPass] = useState('');
		const [verPass, setVerPass] = useState('');
		const [phone, setPhone] = useState('');
		const [bday, setBday] = useState(new Date());
		const [region, setRegion] = useState({});
		const [prov, setProv] = useState({});
		const [mun, setMun] = useState([]);
		const [brgy, setBrgy] = useState([]);
		const [provChoice, setProvChoice] = useState([]);
		const [munChoice, setMunChoice] = useState([]);
		const [brgyChoice, setBrgyChoice] = useState([]);
		const [zip, setZip] = useState('');
		const [page, setPage] = useState(1);
		const [isActive1, setActive1] = useState(false);
		const [isActive2, setActive2] = useState(false);
		const [isActive3, setActive3] = useState(false);
	
	const navigate = useNavigate();
	function handleRegion(e) { //takes region string chosen to convert to JSON
		let x = JSON.parse(e)
		setRegion(x);
		setProvChoice(createProvChoice(x));
	}

	function createProvChoice(e) { //uses region to get getProvincesByRegion
		return (phil.getProvincesByRegion(e.reg_code).map((x) => {
					return <option value={JSON.stringify(x)} key={x.prov_code}>{x.name}</option>
				}))
	}

	function handleProv(e) {
		let x = JSON.parse(e)
		setProv(x);
		setMunChoice(createMunChoice(x));
	}

	function createMunChoice(e) { //uses region to get provinces
		return (phil.getCityMunByProvince(e.prov_code).map((x) => {
					return <option value={JSON.stringify(x)} key={x.mun_code}>{x.name}</option>
				}))
	}

	function handleMun(e) {
		let x = JSON.parse(e)
		setMun(x);
		setBrgyChoice(createBrgyChoice(x));
	}

	function createBrgyChoice(e) { //uses region to get provinces
		return (phil.getBarangayByMun(e.mun_code).map((x) => {
					return <option value={JSON.stringify(x)} key={x.mun_code}>{x.name}</option>
				}))
	}

	function handleBrgy(e) {
		let x = JSON.parse(e)
		setBrgy(x);
	}

	useEffect(() => {
		if((email !== '' && pass !== '' && verPass !== '' && phone !== '') && (pass === verPass))
			setActive1(true)	
		else
			setActive1(false)
	}, [email, pass, verPass, phone]);

	useEffect(() => {
		if(fName !== '' && lName !== '' && bday !== '')
			setActive2(true)
		else
			setActive2(false)
	}, [fName, lName, bday]);

	useEffect(() => {
		if(region !== '' && prov !== '' && mun !== '' && brgy !== '' && zip !== '')
			setActive3(true);
		else
			setActive3(false);
	}, [region, prov, mun, brgy, zip])
	function registerUser(e) {
		e.preventDefault();
		fetch(`https://infinite-sea-39312.herokuapp.com/users/register`, {
			method: "POST",
			headers: {"Content-Type" : "application/json"},
			body: JSON.stringify({
				fName: fName,
				lName: lName,
				email: email,
				password: pass,
				phone: phone,
				bday: bday,
				address: {
					region: region,
					prov: prov,
					mun: mun,
					brgy: brgy,
					zip: zip
				}
			})

		}).then(response => response.text()).then(data => {
		if (data === "User successfully saved."){
			Swal.fire("Success!", "Thank you for registering", "success");
			navigate('/');
		}
		else
			Swal.fire("Oops!", data, "error");
		})

	}

	function reg1() {
		return(
			<>
			<Form.Group className="">
				<Form.Label>Email Address:</Form.Label>
				<Form.Control type="email" onChange={e => setEmail(e.target.value)} value={email} required />
				<Form.Text className="text-muted">We'll never share your email with anyone else</Form.Text>
			</Form.Group>

			<Form.Group className="">
				<Form.Label>Password:</Form.Label>
				<Form.Control type="password" onChange={e => setPass(e.target.value)} value={pass} required />
			</Form.Group>

			<Form.Group className="">
				<Form.Label>Verify Password:</Form.Label>
				<Form.Control type="password" onChange={e => setVerPass(e.target.value)} value={verPass} required />
			</Form.Group>
				
			<Form.Group className="">
				<Form.Label>Cellphone Number:</Form.Label>
				<Form.Control type="text" onChange={e => setPhone(e.target.value)} value={phone} required/>
			</Form.Group>
			
			{isActive1 ? <Button className="mt-3" onClick={e => setPage(2)}>Next</Button> : <Button className="mt-3" disabled>Next</Button>}
		</>)	
	}

	function reg2() {
		return(
			<>
				<Form.Group>
					<Form.Label>First Name:</Form.Label>
					<Form.Control type="text" onChange={(e) => setFName(e.target.value)} value={fName} required/>
				</Form.Group>

				<Form.Group>
					<Form.Label>Last Name:</Form.Label>
					<Form.Control type="text" onChange={(e) => setLName(e.target.value)} value={lName} required/>
				</Form.Group>

				<Form.Group className="">
					<Form.Label>Birth Date:</Form.Label>
					<Datepicker selected={bday} onChange={(date:Date) => setBday(date)} />
				</Form.Group>
				<Button className="mt-3" onClick={e => setPage(1)}>Previous</Button>
				{isActive2 ? <Button className="mt-3" onClick={e => setPage(3)}>Next</Button> : <Button className="mt-3" disabled>Next</Button>}

			</>
		)
	}

	function reg3() {
		return(
			<>
				<Form.Group className="">
					<Form.Label>Region:</Form.Label>
					<Form.Select onChange={e => handleRegion(e.target.value)}>
						<option value=""></option>
						{phil.regions.map((x) => {
							return(<option value={JSON.stringify(x)} key={x.reg_code}>{x.name}</option>)
						})}
					</Form.Select>
				</Form.Group>

				<Form.Group className="">
					<Form.Label>Province:</Form.Label>
					<Form.Select onChange={e => handleProv(e.target.value)}>
						<option value=""></option>
						{provChoice}
					</Form.Select>
				</Form.Group>

				<Form.Group className="">
					<Form.Label>Municipality:</Form.Label>
					<Form.Select onChange={e => handleMun(e.target.value)}>
						<option value=""></option>
						{munChoice}
					</Form.Select>
				</Form.Group>

				<Form.Group className="">
					<Form.Label>Baranggay:</Form.Label>
					<Form.Select onChange={e => handleBrgy(e.target.value)}>
						<option value=""></option>
						{brgyChoice}
					</Form.Select>
				</Form.Group>

				<Form.Group>
					<Form.Label>Zip Code:</Form.Label>
					<Form.Control type="text" onChange={e => setZip(e.target.value)} value={zip} required />
				</Form.Group>
				<Button className="mt-3" onClick={e => setPage(2)}>Previous</Button>

				{isActive3 ? <Button className="mt-3" type="submit">Submit</Button> : <Button className="mt-3" disabled>Submit</Button>}

			</>
		)
	}

	function handlePage() {
		if (page === 1)
			return reg1();
		else if (page === 2)
			return reg2();
		else if (page === 3)
			return reg3();
	}

	return (
		<div className="row m-0">
			<div className="col-md-4 fitHeight">
				<Form onSubmit={registerUser}className="mx-4 mx-xl-5 p-4 p-xl-0 pt-xl-5  fitHeight d-flex flex-column">
					<h1 className="text-center">Sign Up</h1>
					<br />
					{handlePage()}
				</Form>
			</div>
			<Image style={{objectFit: 'cover', objectPosition: '20% 50%'}} className="d-none d-md-flex col-md-8 p-0" src={pic1} />

		</div>
	)
}
 