import React, { Component } from 'react'

import {
    Card
  } from 'react-bootstrap/'
  

class Movies extends Component {
    render() {
        return (
            // <div id="movies">
            //     <img src={this.props.image_url}  alt={this.props.released_date} />
            //      <br/>
            //      <p>popularity : {this.props.popularity} </p>
            //      <p>released_date : {this.props.released_date}</p>
            //      <p>average_votes : {this.props.average_votes}</p>
            //      <p>image  : {this.props.backdrop_path}</p>
            // </div>


            // this.props.moviesArr.map(value => {
              
            //     return <>
            //          title={value.title}
            //     average_votes={value.average_votes} 
            //     image_url={value.image_url}
            //       popularity={value.popularity} 
            //       released_on={value.released_on} 
            //       total_votes={value.total_votes}
                
            //     </>;
            //   })




< Card style = {{ width: '18rem' }} className='card'>
<Card.Img variant="top" src={this.props.image_url} className='cardimage'/>
<Card.Body>
    <Card.Title>title:{this.props.title}</Card.Title>
  
    <Card.Text>
    popularity:{this.props.popularity}
    </Card.Text>
    <Card.Text>
    total_votes: {this.props.total_votes}
    </Card.Text>
    <Card.Text>
        Released Date: {this.props.released_on}
    </Card.Text>
    <Card.Text>
        Average Votes: {this.props.average_votes}
    </Card.Text>
                          
  
</Card.Body>
</Card >
        )
    }
}

export default Movies
