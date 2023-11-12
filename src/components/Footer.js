import React, { useState } from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Footer() {
    const [enq,setEnq]=useState('');

    const footerm=(m)=>
    {
        setEnq(m.target.value);
    }

    const enquiry=()=>
    {
        if (enq == '' || !enq.includes('@')) {
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
        else if (enq!='' && enq.includes('@'))
        {
            toast.success("Enquiry Sent Successfully", {
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
    }
  return (

    <div className='mt-3 ms-2 me-2 p-4 text-center'>
        <Container>
        <hr></hr>
            <Row className='mt-5'>
                 <Col lg={3} md={3} sm={12} xs={12}>
                    <img
                    alt=""
                    src="https://i.postimg.cc/L80tkrgf/Png-Item-5001688.png"
                    width="25"
                    height="25"
                    className="d-inline-block align-top me-1"
                    />
                    <b className='fs-6' style={{color:'orange'}}>SHOPSTAGRAM</b>
                    <div style={{fontSize:'smaller',textAlign:'justify'}} className='mt-2 p-2'>
                    At Shopstagram, we create pathways to connect millions of sellers and buyers in more than 190 markets around the world. Our technology empowers our customers, providing everyone the opportunity to grow and thrive — no matter who they are or where they are in the world.
                    </div> <br />
                    </Col>
    
                    <Col lg={2} md={2} sm={12} xs={12}>
                    <b style={{color:'orange'}}><i class="fa-regular fa-clock fa-spin fa-1x text-white"></i> Opening Hours</b>
                        <div className='mt-2'style={{fontSize:'smaller',textAlign:'center'}}>
                        
                        <div className='mt-2'><span style={{color:'white'}}>Mon: </span> 09 AM - 12 AM</div>
                        <div className='mt-1 '><span style={{color:'white'}}>Tue : </span> 09 AM - 12 AM</div>
                        <div className='mt-1 '><span style={{color:'white'}}>Wed: </span> 09 AM - 12 AM</div>
                        <div className='mt-1 '><span style={{color:'white'}}>Thu : </span> 09 AM - 12 AM</div>
                        <div className='mt-1 '><span style={{color:'white'}}>Fri : </span> 09 AM - 12 AM</div>
                        <div className='mt-1 '><span style={{color:'white'}}>Sat : </span> 09 AM - 12 AM</div>
                        <div className='mt-1 '><span style={{color:'white'}}>Sun: </span> 12 PM - 12 AM</div>
                        </div> <br />
    
                    </Col>
    
                    <Col lg={3} md={3} sm={12} xs={12}>
                     <b style={{color:'orange'}}><i class="fa-solid fa-location-dot text-white"></i> Location</b>
                     <div style={{fontSize:'smaller'}} className='mt-3'>
                        <div className='mt-2 '><i class="fa-solid fa-map-location text-info"></i> Aristo Buildings,Vytila</div>
                        <div className='mt-1 '>Cochin, Kerala</div>
                        <div className='mt-2 '><i class="fa-solid fa-phone text-white"></i> 8281602195</div>
                        <br />
                        <div className='mt-2 '><i class="fa-solid fa-map-location text-info"></i> Global Arcade, Vaikom</div>
                        <div className='mt-1 '>Kottayam, Kerala</div>
                        <div className='mt-2 '><i class="fa-solid fa-phone text-white"></i> 8075653863</div>
                    </div> <br />
                    </Col>
    
                    <Col lg={4} md={4} sm={12} xs={12}>
                        <b style={{color:'orange'}}>Get In Touch</b>
                        <div>
                        <InputGroup className="mt-4 mb-3" style={{width:'100%'}}>
                        <InputGroup.Text id="basic-addon1" className='text-warning'>@</InputGroup.Text>
                        <Form.Control
                            onChange={(e)=>footerm(e)}
                            placeholder="Please enter your email"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            name='name'
                        />
                        </InputGroup>
                        <Button onClick={enquiry} variant="outline-warning" style={{width:'100%',fontSize:'smaller'}}>Send Enquiry</Button>
                        </div>
                    </Col>
        
            </Row> <br />
            <hr />
     <h6 className='text-dark text-center'><i class="fa-regular fa-copyright"></i> All copyrights are received: 2007</h6>
     <hr />

        </Container>
        <ToastContainer/>
    </div>
  )
}

export default Footer