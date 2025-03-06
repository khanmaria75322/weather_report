import "./Main.css";

export default function Main({ weather, error }) {
  console.log(weather);
  // Function to determine air quality
  const getAirQuality = (index) => {
    if (index <= 3) return "Good 😊";
    if (index <= 6) return "Bad 😐";
    return "Very Bad 😷";
  };
  return (

     

      <div className="contain">

      {error && <p style={{ color: "red" }}>{error}</p>}
      {weather ? (
          <>
            <div className="left">
              <h1>Weather in {weather?.location?.name}</h1>
              <p>Country: {weather?.location?.country}</p>
              <p>State: {weather?.location?.region}</p>
              <p>Temperature in C: {weather?.current?.temp_c} C</p>
              <p>Temperature in F: {weather?.current?.temp_f} F</p>
              <p>Condition: {weather?.current?.condition?.text}</p>
              <img src={weather?.current?.condition?.icon} alt="weather icon" />
              <p>Humidity: {weather?.current?.humidity}</p>
              <p>Wind Direction: {weather?.current?.wind_dir}</p>
            </div>

            <div className="right">
              <h1>Air Quality in {weather?.location?.name}</h1>
              <p>CO Level: {weather.current.air_quality.co}</p>
              <p>NO2 Level: {weather.current.air_quality.no2}</p>
              <p>O3 Level: {weather.current.air_quality.o3}</p>
              <p>PM2.5: {weather.current.air_quality.pm2_5}</p>
              <p>PM10: {weather.current.air_quality.pm10}</p>
              <p>SO2 Level: {weather.current.air_quality.so2}</p>
              {/* Air Quality Rating */}
            <p>
              **US-EPA Index**:{" "}
              {getAirQuality(weather.current.air_quality["us-epa-index"])}
            </p>
            <p>
              **GB-DEFRA Index**:{" "}
              {getAirQuality(weather.current.air_quality["gb-defra-index"])}
            </p>
            </div>

            
          </>
        ) : (
          <p>No weather data available</p>
        )}
      </div>

  );
}



