import React, { Component } from 'react';
import Location from './components/location';
import Searchform from './components/searchform';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap/';

import WeatherDay from './components/WeatherDay';
import Movies from './components/Movies'
import Restaurant from './components/Restaurant';

export class App extends Component {

  ///////////////////// the initial value in the state and write the  props //////////////////////////
  constructor(props) {
    super(props);
    this.state = {
      displayName: '',
      latitude: '',
      longitude: '',
      weatherData: [],
      show: false,
      error: '',
      moviesData: [],
      restaurantData:[],
    }
  }

  //////////// Take the name of city from the user input  ////////////////
  handleChangeLocation = (e) => { this.setState({ displayName: e.target.value }) };

  /////////////////// submit Data  ////////////////////// 
  handleSubmitData = async (e) => {
    e.preventDefault()



    try {
      let responseForAxios = await axios.get(`https://api.locationiq.com/v1/autocomplete.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.displayName}&format=json`);


      let lat = responseForAxios.data[0].lat;
      let lon = responseForAxios.data[0].lon;

      ////////////////// get weather data from backend/////////////////////

      let axiosWeatherResponse = await axios.get(`http://localhost:8000/weather?lat=${lat}&lon=${lon}&city=${this.state.displayName}`)

      ////////////////// get Movies data from backend/////////////////////

      let axiosMoviesResponse = await axios.get(`http://localhost:8000/movies?city=${this.state.displayName}`)
      //////////////////get Restaurant data from backend /////////////////////////////
      let axiosRestaurantResponse= await axios.get(`http://localhost:8000/restaurant?city=${this.state.displayName}`)


      //////////////////change data after we get it by use (setstate)//////////////////////////
      // axios(config).then(res => {
      //       let responseForAxios = res.data[0];
      //       this.setState({
      //        displayName:responseForAxios.displayName,
      //         longitude: responseForAxios.lon,
      //         latitude: responseForAxios.lat,
      //         type: responseForAxios.type,

      //         display: true,
      //         alert: false,
      //         weatherData: axiosWeatherResponse.data,
      //         moviesData: axiosMoviesResponse.data,
      //        // show: !this.state.show,
      //         error: '',

      //         //datetime:responseForAxios.datetime,
      //         //discription:responseForAxios.description,
      //        // city: responseForAxios.city,
      //  //let: responseForAxios.searchQuery,
      //         mapLocation: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${responseForAxios.lat},${responseForAxios.lon}&zoom=7&size=400x600&format=png.`,
      //         showData: true

      //       })

      //     })



      this.setState({
        displayName: responseForAxios.data[0].display_name,
        longitude: responseForAxios.data[0].lon,
        latitude: responseForAxios.data[0].lat,
        display: true,
        alert: false,
        weatherData: axiosWeatherResponse.data,
        moviesData: axiosMoviesResponse.data,
        show: !this.state.show,
        error: '',

      })


      /////////////////////ERROR////////////////////////

    } catch (error) {
      this.setState({
        error: error.message,
        alert: true
      })
    }
  }

  /////////////////////////


  render() {
    return (

      <>

        <div >

          <h1>Welcome to City explorer</h1>
          <Searchform
            handleChangeLocation={this.handleChangeLocation}
            handleSubmitData={this.handleSubmitData}
          />

          {
            this.state.show &&
            <Location
              displayName={this.state.displayName}
              //type={this.state.type}
              lat={this.state.latitude}
              lon={this.state.longitude}
            />

          }

          {
            <img src={`https://maps.locationiq.com/v3/staticmap?key=pk.297415ddee5e4d4b9f9ea0847741ee8a&center=${this.state.latitude},${this.state.longitude}&zoom=10`} alt="alt" />

          }

        </div>



        {
        this.state.weatherData.map(value => {
          return <WeatherDay
            description={value.description}
            date={value.date}

          />
        })
        }
        <div className="row">
          {
            this.state.moviesData.map(value => {
              return <Movies
                release_date={value.release_date}
                title={value.title}
                overview={value.overview}
                vote_average={value.vote_average}
                vote_count={value.vote_count}
                poster_path={value.poster_path}
              />
            })

          }
        </div>


        <div>
          {
            this.state.restaurantData.map(value=>{
              return<Restaurant

              name={value.name}
              image_url={value.image_url}
              price={value.price}
              reting={value.reting}
              url={value.url}
           />
              }

            )
          }
        </div>

        {
          <p>{this.state.error}</p>
        }

      </>

    )
  }
}
export default App













