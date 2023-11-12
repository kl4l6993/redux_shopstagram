import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Payment() {

    const nav=useNavigate();

    const [val, setVal] = useState({
        card: "",
        cardholder: "",
        date: "",
        cvv: ""
    })

    const setValues = (e) => {

        let { name, value } = e.target;
        setVal({ ...val, [name]: value });
    }

    console.log(val);

    const paymentbtn = () => {

        let {card,cardholder,date,cvv}=val;

        if (card == "" || cardholder == "" || date == "" || cvv == "") {
            //Toast Error
            toast.error("Input is required", {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
        else {
            //Toast Success
            toast.success("Payment Successfull", {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            nav('/');
        }
    }


    return (
        <div className='mt-5'>
            <Container className='w-50'>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Enter Card No"
                    className="mb-3 mt-3"
                >
                    <Form.Control onChange={(e) => setValues(e)} name='card' type="text" placeholder="Enter Card No" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingInput" label="Card Holder Name">
                    <Form.Control onChange={(e) => setValues(e)} name='cardholder' type="text" placeholder="Card Holder Name" />
                </FloatingLabel>
                <br />
                <InputGroup className="mb-3">
                    <InputGroup.Text>Date of Expiry & CVV </InputGroup.Text>
                    <Form.Control onChange={(e) => setValues(e)} name='date' aria-label="Date of Expiry" type="date" />
                    <Form.Control onChange={(e) => setValues(e)} name='cvv' aria-label="CVV" type="number" />
                </InputGroup>
               
                <div className='text-center'><Button onClick={paymentbtn} variant="warning">Proceed</Button></div>         
            
            </Container>
            <ToastContainer/>
        </div>
    )
}

export default Payment