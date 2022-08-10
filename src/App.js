import "./App.css";
import Form from "./Form";
import City from "./City";
import Parameters from "./Parameters";
import Forecast from "./Forecast";
import Icon from "./Icon";
import Degrees from "./Degrees";
import Date from "./Date";

export default function App() {
  let weatherData = {
    city: "London",
    degrees: 18,
    description: "Rain",
    windspeed: 4,
    humidity: 80,
    visibility: 10,
  };
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <Form />

            <div className="row">
              <div className="col-md-6">
                <City name={weatherData.city} />
                <Date />
                <Degrees degrees={weatherData.degrees} />
              </div>
              <div className="col-md-6">
                <Icon />
              </div>
            </div>
            <Parameters
              humidity={weatherData.humidity}
              windspeed={weatherData.windspeed}
              visibility={weatherData.visibility}
              description={weatherData.description}
            />
          </div>
          <div className="col-md-6">
            <Forecast day="Monday" />
          </div>
        </div>
      </div>
    </div>
  );
}
