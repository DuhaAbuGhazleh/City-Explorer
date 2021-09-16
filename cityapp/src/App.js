import React, { Component } from 'react';
import Location from './components/location';
import Searchform from './components/searchform';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap/';
//import Movies from './components/Movies';
import WeatherDay from './components/WeatherDay';
import Movies from './components/Movies'

export class App extends Component {


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
    }
  }

  //////////// Take the name of city from the user input  ////////////////
  nameChangeHandler = (e) => { this.setState({ displayName: e.target.value }) };

  /////////////////// submit Data of the form ////////////////////// 
  handleSubmitData = async (e) => {
    e.preventDefault()

    try {
      let axiosResponse = await axios.get(`https://eu1.locationiq.com/v1/search.php?key=pk.54c5bcb87e24270823ee985ff91c6f9c&city=${this.state.displayName}&format=json`);
      // console.log('axiosResponse', axiResponse);

      let lat = axiosResponse.data[0].lat;
      let lon = axiosResponse.data[0].lon;

      ////////////////// get weather data from backend/////////////////////

      let axiosWeatherResponse = await axios.get(`http://localhost:8000/weather?lat=${lat}&lon=${lon}&city=${this.state.displayName}`)

      ////////////////// get Movies data from backend/////////////////////

      let axiosMoviesResponse = await axios.get(`http://localhost:8000/movies?city=${this.state.displayName}`)
      


      //////////////////change data after we get it by use (setstate)//////////////////////////
      this.setState({
        displayName: axiosResponse.data[0].display_name,
        longitude: axiosResponse.data[0].lon,
        latitude: axiosResponse.data[0].lat,
        display: true,
        alert: false,
        weatherData: axiosWeatherResponse.data,
        moviesData: axiosMoviesResponse.data,
        show: !this.state.show,
        error: ''
      })


/////////////////////ERROR////////////////////////

    } catch (error) {
      this.setState({
        error: error.message,
        alert: true
      })
    }
  }



  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     displayName: "",
  //     type: "",
  //     lat: "",
  //     lon: "",
  //     //datetime:"",
  //     //discription:"",
  //     showData: false,
  //     weatherDataArray: [],
  //     moviesDataArray: []
  //   }
  // }

  // ////////////////////////
  // handleLocation = (e) => {
  //   let displayName = e.target.value;
  //   this.setState({
  //     displayName: displayName
  //   })
  // }

  // //////////////////////////
  // handleSubmit = (e) => {
  //   console.log(`${process.env.REACT_APP_LOCATIONIQ_API_KEY}`);
  //   e.preventDefault();
  //   let config = {
  //     method: "GET",
  //     baseURL: `https://api.locationiq.com/v1/autocomplete.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.displayName}`
  //   }


  //   ///////////////////////
  //   axios(config).then(res => {
  //     let responseData = res.data[0];
  //     this.setState({
  //      displayName:responseData.displayName,
  //       lon: responseData.lon,
  //       lat: responseData.lat,
  //       //let: responseData.searchQuery,
  //       type: responseData.type,
  //       //datetime:responseData.datetime,
  //       //discription:responseData.description,
  //       city: responseData.city,

  //       map: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${responseData.lat},${responseData.lon}&zoom=7&size=400x600&format=png.`,
  //       showData: true

  //     })

  //   })

/////////////////////////////2222222222//////////////////////
    // .then(() => {
    // //  let locationName = this.state.city_name.split(',')[0];
    //   axios.get(`http://${process.env.REACT_APP_BACKEND_URL}/weather?lat=${this.state.lat}&lon=${this.state.lon}&city=${this.state.displayName}`)
    //     .then((res) => {
    //       this.setState({
    //         weatherDataArray: res.data
    //       });
    //     })
    // })

    // .then(() => {
    //  // let locationName = this.state.city_name.split(',')[0];
    //   axios.get(`http://${process.env.REACT_APP_BACKEND_URL}/movies?city=${this.state.displayName}`)
    //     .then((res) => {
    //       this.setState({
    //         moviesDataArray: res.data
    //       });
    //     })
    // })
//////////////////////////////11111111111////////////////////

      // .then(() => {
      //   //let locationName = this.state.city_name.split(',')[0];
      //   axios.get
      //   //(`http://localhost:8000/weather?lat=${this.state.lat}&lon=${this.state.lon}&key=${process.env.WEATHER_API_KEY}`)

        
      // (`http://${process.env.REACT_APP_BACKEND_URL}/weather?lat=${this.state.lat}&lon=${this.state.lon}`)
      //     .then(res => {
      //       this.setState({ weatherDataArray: res.data })
      //     });
      // })
      // .catch(err => { this.setState({ errorMessage: err.message }); })

      // .then(() => {
      //   let locationName = this.state.city_name.split(',')[0];

      //   axios.get
      //   //(`http://localhost:8000/movies?city=${locationName}&key=${process.env.MOVIES_API_KEY}`)

        
      //   (`http://${process.env.REACT_APP_BACKEND_URL}/movies?city=${locationName}`)
      //     .then(res => {
      //       console.log(res.data)
      //       this.setState({ moviesDataArray: res.data })
      //     });
      // })
      // .catch(err => { this.setState({ errorMessage: err.message }); })

 // }
////////////////////////////////


render() {
  return (

    <>
{/* 
      <div>
        {this.state.alert &&
          <Alert variant={'danger'}>
            Error: 'Wrong Input! Enter City Name'
          </Alert>
        }
      </div> */}

      <div id="theDev">
        <form onSubmit={this.handleSubmitData}>
          <h1>City Explorer</h1>
          <input type='text' placeholder="Enter Your City Name" onChange={(e) => { this.nameChangeHandler(e) }} required />
          <br />
          <br />
          <button>Explore!</button>
        </form>

        <img src={`https://maps.locationiq.com/v3/staticmap?key=pk.3bda2d41fe8feadb05c61e7ffe7be774&center=${this.state.latitude},${this.state.longitude}&zoom=10`} alt="alt" />

        <h2>{this.state.displayName}</h2>
        <h2>{this.state.longitude}</h2>
        <h2>{this.state.latitude}</h2>
      </div>



      {this.state.weatherData.map(value => {
        return <WeatherDay desc={value.description} date={value.date} />
      })
      }{
        this.state.moviesData.map(value => {
          return <Movies release_date={value.release_date} title={value.title}
            overview={value.overview} vote_average={value.vote_average} vote_count={value.vote_count} poster_path = {value.poster_path}/>
        })}
      {
        <p>{this.state.error}</p>
      }

    </>

  )
}
}




 //////////////////////////////////

//   render() {
//     console.log(this.state.moviesDataArray)
//     return (
//       <>
//         <div>
//           <h1>Welcome to City explorer</h1>
//           <Searchform
//            handleLocation={this.handleLocation}
//            handleSubmit={this.handleSubmit} 
//           />


//           {
//             this.state.weatherDataArray.map(item => {
//               return <>

//                 <Card style={{ width: '18rem' }}>

//                   <Card.Body>
//                     <Card.Title>The Date And Description </Card.Title>
//                     <Card.Text>
//                       <h2>{item.date}</h2>
                      
//                       <h2>{item.description}</h2>
                     
//                     </Card.Text>

//                   </Card.Body>
//                 </Card>


//               </>;
//             })
//           }

//           {this.state.showData &&
//             <Location 
//               city_name={this.state.city_name}
//               // type={this.state.type}
//               lat={this.state.lat}
//               lon={this.state.lon}
//               map={this.state.map} />}

//           {this.state.errorMessage &&
//             <h3 className="error"> {this.state.errorMessage} </h3>}
//         </div>
//         <div>

//           {

//             this.state.weatherData.map(value => {
//               return < 
//                 WeatherDay 
//                 desc={value.description} 
//                 date={value.date} 
//                 />;
//             })

//           }

//           {/* {
           
//            <Movies moviesMap={this.state.moviesArr}/>
//          }
//            */}

//           {

//             this.state.moviesData.map(value => {

//               return <Movies

//                 title={value.title}
//                 date={value.date}
//                 overview={value.overview}
//                 vote_count={value.vote_count}
//                 vote_average={value.vote_average}
//                 poster_path={value.poster_path}
           
//               />

//             })

//           }
//         </div></>
//     )
//   }
//}

export default App




