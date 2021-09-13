import React, { Component } from 'react';
import Location from './components/location';
import Searchform from './components/searchform';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

export class App extends Component {
  constructor(props){
    super(props);
    this.state={
      city_name:"",
      type:"",
      lat:"",
      lon:"",
      datetime:"",
      discription:"",
      showData:false,
      weatherData:[]
    }
  }
  handleLocation=(e)=>{
    let city_name=e.target.value;
    this.setState({
      city_name:city_name
    })
  }
  handleSubmit=(e)=>{
    console.log(`${process.env.REACT_APP_LOCATIONIQ_API_KEY}`);
    e.preventDefault();
    let config={
      method:"GET",
      baseURL:`https://api.locationiq.com/v1/autocomplete.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city_name}`
    }
    axios (config).then(res=>{
      let responseData=res.data[0]
      this.setState({
        city_name:responseData.display_name,
        lon:responseData.lon,
        lat:responseData.lat,
        type:responseData.type,
        datetime:responseData.datetime,
        discription:responseData.description,

        map:`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${responseData.lat},${responseData.lon}&zoom=7&size=400x600&format=png.`,
        showData:true

      })
     
    }).then(()=>{
      axios.get(`http://${process.env.REACT_APP_BACKEND_URL}/data?lat=${this.state.datetime}&lon=${this.state.discription}`)
      .then(res=>{
        this.setState({weatherData:res.data})
      });
    })
   // .catch(err => {this.setState({errorMessage: err.message});})
  }

  render() {
    return (
      <div>
        <h1>Welcome to City explorer</h1>
        <Searchform handleLocation={this.handleLocation} handleSubmit={this.handleSubmit}/>
        {
          this.state.showData&&
          <Location city_name={this.state.city_name}
                    type={this.state.type}
                    lat={this.state.lat}
                    lon={this.state.lon}
                    map={this.state.map}
          />
         
        }
         {
            this.state.weatherData.map(item=>{
              return<>
              <h2>{item.date}</h2>
              <h2>{item.lat}</h2>
              <h2>{item.lon}</h2>
              <h2>{item.description}</h2>
              <h2>{item.datetime}</h2>



              </>
            })
          }
        { this.state.errorMessage &&
  <h3 className="error"> { this.state.errorMessage } </h3> }
      </div>
    )
  }
}

export default App
