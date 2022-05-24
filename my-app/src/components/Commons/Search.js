import { Form } from 'react-bootstrap';



export default function Search({search, setSearch}) {	
	return(
		
			<Form>
				<Form.Group>
					<div className="d-flex flex-row align-items-center">
						<Form.Control type="text" onChange={e => {setSearch(e.target.value);}} value={search} placeholder="Search" className="rounded-pill"/>
					</div>
				</Form.Group>
			</Form>
		
	)
}