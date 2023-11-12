import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import Table from 'react-bootstrap/Table';
import { Trash } from 'react-feather';
import { deleteall, deletecart } from '../redux/cartSlice';
import { Link } from 'react-router-dom';



function Cart() {
    const cartArray = useSelector((state) => state.cart)
    const dispatch= useDispatch();

    if(cartArray.length!=0)
    {
       var total= cartArray.map(i=>i.price).reduce((a,b)=>a+b);
    }
    else{
        var total=0;
    }

    return (
        <div className='mt-5'>

            <h2 className='mt-2' style={{color:'orange',textAlign:'center',fontFamily:'Nosifer'}}>Welcome to Cart Page</h2>
            {
                cartArray.length > 0 ? (
                    <div className='mt-5'>
                        <Container className='mt-2 p-2'>
                            <Row>
                                <Col lg={12} md={12} sm={12}>
                                    <Table striped bordered responsive hover variant="outline-warning" className='text-center'>
                                        <thead>
                                            <tr>
                                                <th style={{color:'orange',fontFamily:'Merienda'}}>#</th>
                                                <th style={{color:'orange',fontFamily:'Merienda'}}>Title</th>
                                                <th style={{color:'orange',fontFamily:'Merienda'}}>Price</th>
                                                <th style={{color:'orange',fontFamily:'Merienda'}}>Ratings</th>
                                                <th style={{color:'orange',fontFamily:'Merienda',height:'50px',width:'20px'}}>Image</th>
                                                <th style={{color:'orange',fontFamily:'Merienda'}}></th>
                                            
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                cartArray.map((i,index) => (
                                                    <tr>
                                                        <td className='pt-5'>{index+1}</td>
                                                        <td className='pt-5'>{i.title>30?i.title.slice(0,30)+"..":i.title}</td>
                                                        <td className='pt-5'>{i.price}</td>
                                                        <td className='pt-5'>{i.rating.rate}</td>
                                                        <td><img style={{height:'100px',width:'100px'}}src={i.image}></img></td>
                                                        <td className='pt-4'><Trash onClick={()=>dispatch(deletecart(i))} style={{color:'red'}} className='btn' size={55}></Trash></td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </Table>
                                </Col>
                                <h5 style={{textAlign:'end'}} className='p-2 mt-2'>Cart Total: Rs.{total}/-</h5>
                            </Row>
                            <div className='text-center'><Link to={'/payment'}><Button onClick={()=>dispatch(deleteall())} variant="success">Proceed to CheckOut</Button></Link></div>
                        </Container>
                 </div>) : <h2 className='mt-5 text-center' style={{ color: 'skyblue' }}>Cart is Empty!</h2>
            }
    
                    
        </div>
    )
}

export default Cart