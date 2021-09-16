import React, { Component } from 'react'
import Image from 'react-bootstrap/Image'
export class location extends Component {
    render() {
        return (
            <div className="container pt-3">
                 <h1>{this.props.displayName}</h1>
        
                <h3>{this.props.latitude}/{this.props.longitude}</h3>
                {/* <img src={this.props.mapLocation} alt="map1"/> */}
                {/* <Image src={this.props.mapLocation} alt="map1" fluid width="50%" /> */}
            </div>
        )
    }
}

export default location
