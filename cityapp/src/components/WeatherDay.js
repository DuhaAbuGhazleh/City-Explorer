// import React, { Component } from 'react'
// import {Card} from 'react-bootstrap/'
  
//  class WeatherDay extends Component {
//     render() {
//         return (
//             <div>
               
// < Card style = {{ width: '18rem' }} className='card'>
// <Card.Body>
    
  
//     <Card.Text>
//     popularityt: {this.props.description}
//     </Card.Text>
//     <Card.Text>
//         Released Date: {this.props.date}
//     </Card.Text>
  
                          
   
// </Card.Body>
// </Card > 
//             </div>
//         )
//     }
// }

// export default WeatherDay


import React, { Component } from 'react'

class WeatherDay extends Component {
    render() {
        return (
            <div id="weather">
                <h2 >{this.props.desc}</h2>
                <h2>{this.props.date}</h2>
            </div>
        )
    }
}

export default WeatherDay
