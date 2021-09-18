import React, { Component } from 'react'
import {Card} from 'react-bootstrap/'
  
 class WeatherDay extends Component {
    render() {
        return (
            <div>
               
< Card style = {{ width: '18rem' }} className='card'>
<Card.Body>
    
  
    <Card.Text>
   Discription : {this.props.description}
    </Card.Text>
    <Card.Text>
        date: {this.props.date}
    </Card.Text>
  
                          
   
</Card.Body>
</Card > 
            </div>
        )
    }
}

export default WeatherDay

