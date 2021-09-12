import React, { Component } from 'react'
import Image from 'react-bootstrap/Image'
export class location extends Component {
    render() {
        return (
            <div className="container pt-3">
                 <h1>{this.props.city_name}</h1>
                <h2>{this.props.type}</h2>
                <h3>{this.props.lat}/{this.props.lon}</h3>
                {/* <img src={this.props.map} alt="map1"/> */}
                <Image src={this.props.map} alt="map1" fluid width="50%" />
            </div>
        )
    }
}

export default location
