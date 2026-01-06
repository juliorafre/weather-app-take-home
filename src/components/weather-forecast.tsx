import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import { useWeather } from "../hooks/use-weather";
import { getRemainingHoursInDay } from "../utils";
import { ForecastDailyItem } from "./forecast-daily-item";
import { ForecastHourlyItem } from "./forecast-hourly-item";

type WeatherForecastProps = {
	lat: number;
	lon: number;
};

export const WeatherForecast = ({ lat, lon }: WeatherForecastProps) => {
	const { data } = useWeather({
		lat: lat,
		lon: lon,
	});

	const hoursLeft = getRemainingHoursInDay(data.current.dt);

	const forecastHourly = data
		? [...data.hourly.slice(0, hoursLeft.length + 1)]
		: [];

	const forecastDaily = data ? [...data.daily.slice(1, 6)] : [];

	return (
		<Stack spacing={4}>
			<Card>
				<CardHeader color="black" title="Next hours"></CardHeader>
				<Divider />
				<CardContent>
					<Stack
						direction="row"
						divider={
							<Divider orientation="vertical" variant="middle" flexItem />
						}
						spacing={2}
						overflow="auto"
					>
						{forecastHourly.map((forecast) => {
							return (
								<ForecastHourlyItem key={forecast.dt} forecastDay={forecast} />
							);
						})}
					</Stack>
				</CardContent>
			</Card>

			<Card>
				<CardHeader color="black" title="Nex 5 days"></CardHeader>
				<Divider />
				<CardContent>
					<Stack direction="column" spacing={4}>
						{forecastDaily.map((forecast) => {
							return (
								<ForecastDailyItem key={forecast.dt} forecastDay={forecast} />
							);
						})}
					</Stack>
				</CardContent>
			</Card>
		</Stack>
	);
};
