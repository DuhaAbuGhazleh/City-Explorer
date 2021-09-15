import React, { Component } from 'react';
import Location from './components/location';
import Searchform from './components/searchform';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'react-bootstrap/';
import Movies from './components/Movies';
import WeatherDay from './components/WeatherDay';


////TRY SOMETHING/////
// export class App extends Component {

//   constructor(props) {
//         super(props);
//         this.state = {
//           city_name: "",
//           type: "",
//           lat: "",
//           lon: "",
//           showData: false,
//           weather: []
//         }
//       }



//       getMoviesData = async ( countrycode ) => {
//         let requestURL = `${process.env.REACT_APP_SERVER_URL}/movies/${countrycode}`;
//         axios
//           .get( requestURL )
//           .then( ( response ) => {
//             this.setState( { moviesData: response.data } );
//           } )
//           .catch( ( error ) => {
//             this.setState( {
//               errorMsg:
//                 'Error : ( ' +
//                 error.response.status +
//                 ` ) No Movies Data ${this.state.display_name}`,
//               showToast: true,
//             } );
//           } );
//       };

//   render() {
//     return (
//       <div>
        
//       </div>
//     )
//   }
// }

// export default App
//////////////////////////////////////////////////
///////////////
////lab 07////
///////////////
export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city_name: "",
      type: "",
      lat: "",
      lon: "",
      //datetime:"",
      //discription:"",
      showData: false,
      weather: [],
      moviesArr:[]
    }
  }
  handleLocation = (e) => {
    let city_name = e.target.value;
    this.setState({
      city_name: city_name
    })
  }
  handleSubmit = (e) => {
    console.log(`${process.env.REACT_APP_LOCATIONIQ_API_KEY}`);
    e.preventDefault();
    let config = {
      method: "GET",
      baseURL: `https://api.locationiq.com/v1/autocomplete.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city_name}`
    }
    axios(config).then(res => {
      let responseData = res.data[0]
      this.setState({
        //city_name:responseData.display_name,
        lon: responseData.lon,
        lat: responseData.lat,
        //let: responseData.searchQuery,
        type: responseData.type,
        //datetime:responseData.datetime,
        //discription:responseData.description,
        city: responseData.city,

        map: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${responseData.lat},${responseData.lon}&zoom=7&size=400x600&format=png.`,
        showData: true

      })

    })
    .then(() => {
      axios.get(`http://${process.env.REACT_APP_BACKEND_URL}/weather?lat=${this.state.lat}&lon=${this.state.lon}&city_name=${this.state.city_name}`)
        .then(res => {
          this.setState({ weather: res.data })
        });
    })
   .catch(err => {this.setState({errorMessage: err.message});})

   .then(() => {
    axios.get(`http://${process.env.REACT_APP_BACKEND_URL}/movies?query=${this.state.city}`)
      .then(res => {
        this.setState({  moviesArr: res.data })
      });
  })
 .catch(err => {this.setState({errorMessage: err.message});})

  }

  render() {
    return (
      <>
      <div>
        <h1>Welcome to City explorer</h1>
        <Searchform handleLocation={this.handleLocation} handleSubmit={this.handleSubmit} />
        {
        this.state.weather.map(item => {
          return <>

            <Card style={{ width: '18rem' }}>

              <Card.Body>
                <Card.Title>{item.city_name}</Card.Title>
                <Card.Text>
                  <h2>{item.lat}</h2>
                  <h2>{item.lon}</h2>
                  <h2>{item.description}</h2>
                  <h2>{item.date}</h2>
                </Card.Text>

              </Card.Body>
            </Card>


          </>;
        })
        }

        {this.state.showData &&
          <Location city_name={this.state.city_name}
            type={this.state.type}
            lat={this.state.lat}
            lon={this.state.lon}
            map={this.state.map} />}

        {this.state.errorMessage &&
          <h3 className="error"> {this.state.errorMessage} </h3>}
      </div>
      <div>

          {
          
          this.state.weather.map(value => {
            return < WeatherDay desc={value.description} date={value.date} />;
          })
          
          }

         {/* {
           
           <Movies moviesMap={this.state.moviesArr}/>
         }
           */}
          
          {
          
          this.state.moviesArr.map(value => {
            return <>
           <h2>title={value.title}</h2> 
            <h2>vote_count={value.vote_count} </h2>
           <h2>image_url={value.image_url}</h2> 
            <h2> popularity={value.popularity} </h2> 
            <h2>released_date={value.released_date} </h2>  
     </>;
          })
          
          }
        </div></>
    )
  }
}

export default App





