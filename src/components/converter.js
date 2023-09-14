import { useState } from "react";
import { Form } from "react-bootstrap";
import { Row,Col } from 'react-bootstrap';

const Converter =()=> {
    const [fromUnit, setFromUnit] = useState('m');
    const [toUnit, setToUnit] = useState('cm');
    const [kmUnit, setKmUnit] = useState('km');
    const [value1, setFromValue] = useState('');
    const [value2, setToValue] = useState('');
    const [value3, setKmValue] = useState('');
    const [currentConversion, setCurrentConversion] = useState('1');

    const onSelectChange = (event)=>{
        setCurrentConversion(event.target.value);
    }

    const onValueChange = (event)=> {
        if(event.target.value < 0 || /[-’/`~!#*$@_%+=.,^&(){}[\]|;:”<>?\\]/g.test(event.target.value)) {
            setFromValue('');
            setToValue('');
            setKmValue('');
        } else{
            setFromValue(event.target.value)
            if(currentConversion == '1') {
                setToValue(parseFloat(event.target.value) * 100);
                setKmValue(parseFloat(event.target.value) * 0.001);
            }
        }
    }

    const onToValueChange = (event)=> {
        if(event.target.value < 0 || /[-’/`~!#*$@_%+=.,^&(){}[\]|;:”<>?\\]/g.test(event.target.value)) {
            setFromValue('');
            setToValue('');
            setKmValue('');
        } else{
            setToValue(event.target.value)
            if(currentConversion == '1') {
                setFromValue(parseFloat(event.target.value) * 0.01);
                setKmValue(parseFloat(event.target.value) * 0.00001);
            }
        }
    }

    const onKmValueChange = (event)=> {
        if(event.target.value < 0 || /[-’/`~!#*$@_%+=.,^&(){}[\]|;:”<>?\\]/g.test(event.target.value)) {
            setFromValue('');
            setToValue('');
            setKmValue('');
        } else{
            setKmValue(event.target.value)
            if(currentConversion == '1') {
                setFromValue(parseFloat(event.target.value) * 1000);
                setToValue(parseFloat(event.target.value) * 100000);
            }
        }
    }


    return (
        <Form>
            <Form.Group controlId="conversion">
                <Form.Control as="select" defaultValue="Length" onChange={onSelectChange}>
                    <option value="1">Length</option>
                </Form.Control>
            </Form.Group>
            <br/>
            <Row>
                <Col>
                    <Form.Group controlId="formFromUnit">
                        <Form.Control type="number" placeholder="Enter value" value={value1} onChange={onValueChange}/>
                        <Form.Label>{fromUnit}</Form.Label>
                    </Form.Group>
                </Col>
                <Form.Label>=</Form.Label>
                <Col>
                    <Form.Group controlId="formToUnit">
                        <Form.Control type="number" placeholder="Enter Value" value={value2} onChange={onToValueChange}/>
                        <Form.Label>{toUnit}</Form.Label>
                    </Form.Group>
                </Col>
                <Form.Label>=</Form.Label>
                <Col>
                    <Form.Group controlId="formKmUnit">
                        <Form.Control type="number" placeholder="Enter value" value={value3} onChange={onKmValueChange}/>
                        <Form.Label>{kmUnit}</Form.Label>
                    </Form.Group>
                </Col>
            </Row>
        </Form>
    )
}
export default Converter;