import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { WeatherForecastView } from "./components/weather-forecast-view";
import { WeatherProvider } from "./context/weather-context";

function App() {
	return (
		<WeatherProvider>
			<Header />
			<WeatherForecastView />
			<Footer />
		</WeatherProvider>
	);
}

export default App;
