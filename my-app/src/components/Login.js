import {Button, Container} from 'react-bootstrap';

const Login = () => {
  return (
    <Container className="50vw 50vh align-items-center">
      <form action="">
        <div className="d-flex flex-column ">
          <label htmlFor="uName">Username: </label>
          <input type="text" name="uName" />
          <br/>
          <label htmlFor="pWord">Password: </label>
          <input type="Password" name="pWord" />
          <br/>
          <input type="submit" />
        </div>
      </form>
    </Container>
  );
}


export default Login;