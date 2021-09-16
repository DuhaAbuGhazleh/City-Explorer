// import React, { Component } from 'react'

// import {
//     Card
// } from 'react-bootstrap/'


// class Movies extends Component {
//     render() {
//         console.log('hello')
//         console.log('hello', this.props)
//         return (


//             < Card style={{ width: '18rem' }} className='card'>
//                 <Card.Img variant="top" src={this.props.poster_path} className='cardimage' />
//                 <Card.Body>
//                     <Card.Title>Title Of Movie:{this.props.title}</Card.Title>

//                     <Card.Text>
//                         Date:{this.props.release_date}
//                     </Card.Text>
//                     <Card.Text>
//                         overview: {this.props.overview}
//                     </Card.Text>
//                     <Card.Text>
//                         vote_count: {this.props.vote_count}
//                     </Card.Text>
//                     <Card.Text>
//                         Average Votes: {this.props.average_votes}
//                     </Card.Text>


//                 </Card.Body>
//             </Card >
//         )
//     }
// }

// export default Movies

import React, { Component } from 'react'

export class Movies extends Component {
    render() {
        return (
            <div id="movies">
                <img src={this.props.poster_path}  alt={this.props.poster_path} />
                 <br/>
                 <p>release_date : {this.props.release_date} </p>
                 <p>title : {this.props.title}</p>
                 <p>overview: {this.props.overview}</p>
                 <p>vote_average : {this.props.vote_average}</p>
                 <p>vote_count: {this.props.vote_count}</p>
            </div>
        )
    }
}

export default Movies

