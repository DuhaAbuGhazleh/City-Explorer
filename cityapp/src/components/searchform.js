import React, { Component } from 'react'
import {Form, Button
} from 'react-bootstrap/'
export class searchform extends Component {
    render() {
        return (
            <div className="container pt-3" >

                
<Form onSubmit={this.props.handleSubmit}>
 
 <Form.Group className="mb-3" controlId="">
   <Form.Label>City</Form.Label>
   <Form.Control type="text" placeholder="Please enter a city name..." onChange={this.props.handleLocation} />
 </Form.Group>
 
 <Button variant="primary" type="submit">
 Explore!
 </Button>
</Form>
                 {/* <form onSubmit={this.props.handleSubmit}>
                 <label for="city">CITY</label>
                    <input  type="text" 
                            placeholder="Please enter a city name..."
                            onChange={this.props.handleLocation}
                            />
                    <input  type="submit" value="Explore!"/>
                </form>  */}
            </div>
        )
    }
}

export default searchform
