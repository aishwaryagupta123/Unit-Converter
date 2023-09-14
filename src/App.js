import logo from './logo.svg';
import './App.css';
import { Container,Row,Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import Converter from './components/converter';

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col xs={6}>
            <Header/>
            <Converter/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
