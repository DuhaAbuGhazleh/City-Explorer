import React, { Component } from 'react'
import { Card,Col, } from 'react-bootstrap';

export class Restaurant extends Component {
    render() {
        return (
            <div>
               <Col>

< Card style={{ width: '18rem' }} className='card'>
    <Card.Img variant="top" src={this.props.image_url} className='cardimage' />
    <Card.Body>
        <Card.Title>Title Of Movie:{this.props.name}</Card.Title>

        <Card.Text>
        release_date:{this.props.price}
        </Card.Text>
        <Card.Text>
            overview: {this.props.reting}
        </Card.Text>
        <Card.Text>
            vote_count: {this.props.url}
        </Card.Text>
    


    </Card.Body>
</Card >

</Col> 
            </div>
        )
    }
}

export default Restaurant
