import uploadProduct from './uploadProduct';

export default function CreateProduct() {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const {setData} = useContext(AdminContext);
	const [name, setName] = useState('');
	const [description, setDescription] = useState('');
	const [price, setPrice] = useState('');
	const [stock, setStock] = useState('');	

	return(
		<>
			<Button onClick={handleShow}>New Product</Button>
			<Modal show={show} onHide={handleClose} backdrop="static" centered >
				<Modal.Header closeButton >
					<Modal.Title>Create New Product</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<Form.Group>
							<Form.Label>Product Name:</Form.Label>
							<Form.Control type="text" onChange={e => setName(e.target.value)} value={name} required/>
						</Form.Group>

						<Form.Group>
							<Form.Label>Description:</Form.Label>
							<Form.Control type="text" onChange={e => setDescription(e.target.value)} value={description} required/>
						</Form.Group>

						<Form.Group>
							<Form.Label>Price:</Form.Label>
							<Form.Control type="text" onChange={e => setPrice(e.target.value)} value={price} required/>
						</Form.Group>

						<Form.Group>
							<Form.Label>Stock:</Form.Label>
							<Form.Control type="text" onChange={e => setStock(e.target.value)} value={stock} required/>
						</Form.Group>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={handleClose}>Close</Button>
					<Button onClick={e => uploadProduct(name, setName, description, setDescription, price, setPrice, stock, setStock, setData)}>Submit</Button>
				</Modal.Footer>
			</Modal>
		</>
	
	);

}