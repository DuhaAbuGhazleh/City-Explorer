import React, { Component } from 'react'

import { Card,Col, } from 'react-bootstrap';


class Movies extends Component {
    render() {
        console.log('hello')
        console.log('hello', this.props)
        return (
<Col>

            < Card style={{ width: '18rem' }} className='card'>
                <Card.Img variant="top" src={this.props.poster_path} className='cardimage' />
                <Card.Body>
                    <Card.Title>Title Of Movie:{this.props.title}</Card.Title>

                    <Card.Text>
                    release_date:{this.props.release_date}
                    </Card.Text>
                    <Card.Text>
                        overview: {this.props.overview}
                    </Card.Text>
                    <Card.Text>
                        vote_count: {this.props.vote_count}
                    </Card.Text>
                    <Card.Text>
                        Average Votes: {this.props.vote_average}
                    </Card.Text>


                </Card.Body>
            </Card >

            </Col>
        )
    }
}

export default Movies




