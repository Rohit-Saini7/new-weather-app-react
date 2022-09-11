import { TbMapSearch } from 'react-icons/tb'
import { TbSearch } from 'react-icons/tb'
import { useState } from 'react'
import Header from './components/Header';

function App() {
  const API_KEY = process.env.REACT_APP_API_KEY

  const [noData, setNoData] = useState('No Data Yet')
  const [searchTerm, setSearchTerm] = useState('')
  const [weatherData, setWeatherData] = useState([])
  const [city, setCity] = useState('Unknown location')
  const [weatherIcon, setWeatherIcon] = useState(`${process.env.REACT_APP_ICON_URL}10n@2x.png`)
  return (
    <div className='container'>
      <div className='blur' style={{top: '-10%', right: '0'}}></div>
      <div className='blur' style={{top: '36%', left: '-6rem'}}></div>
      <div className='content'>
        <div className='form-container'>
          <div className='name'>
            <div className='logo'>The Weekend</div>
            <div className='city'>
              <TbMapSearch />
              <p>{city}</p>
            </div>
          </div>
          <div className='search'>
            <h2>The Only Weather App You Need !</h2>
            <hr />
            {/* <form className="search-bar" noValidate onSubmit={handleSubmit}>
              <input type="text" name="" id="" placeholder='#Explore ?' onChange={handleChange} required/>
              <button className="s-icon">
                  <TbSearch 
                    onClick={() => {
                      navigator.geolocation.getCurrentPosition(myIP)
                    }}
                  />
              </button>
            </form> */}
          </div>
        </div>
        <div className="info-container">
          <Header />
          {/* {weatherData.length === 0 ? 
              <div className="nodata">
                <h1>{noData}</h1>
              </div> : 
              <>
                <h1>Today</h1>
                <DetailsCard weather_icon={weatherIcon} data={weatherData} />
                <h1 className="title">More On {city}</h1>
                <ul className="summary">
                  {weatherData.list.map((days, index) =>{
                    if(index > 0){
                      return (<SummaryCard key={index} day={days} />)
                    }
                  })}
                </ul>
              </>
            } */}
        </div>
      </div>
    </div>
  );
}

export default App;