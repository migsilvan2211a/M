import { Form } from 'react-bootstrap';



export default function Search({search, setSearch}) {	
	return(
		
			<Form>
				<Form.Group>
					<div className="d-flex flex-row align-items-center">
						<Form.Label className="p-0 m-0 me-2 fitHeight d-inline-flex">Search: </Form.Label>
						<Form.Control type="text" onChange={e => {setSearch(e.target.value);}} value={search} />
					</div>
				</Form.Group>
			</Form>
		
	)
}