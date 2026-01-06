import { getWeatherIconUrl } from "../service/weather-service";
import type { Hourly } from "../types/weather";
import { convertDtToHour } from "../utils";

type ForecastItemProps = {
	forecastDay: Hourly;
};

export const ForecastHourlyItem = ({ forecastDay }: ForecastItemProps) => {
	const rainProbability =
		forecastDay.pop !== undefined ? (forecastDay.pop * 100).toFixed(0) : 0;

	const temperature =
		forecastDay.temp !== undefined
			? Math.ceil(forecastDay.temp - 273.15)
			: forecastDay.temp;

	const iconCode = forecastDay.weather[0].icon;

	const weatherDescription = forecastDay.weather[0].description;

	const time = convertDtToHour(forecastDay.dt);

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				minWidth: "80px",
			}}
		>
			<span
				style={{
					fontVariantNumeric: "tabular-nums",
				}}
			>
				{temperature}º
			</span>
			<span
				style={{
					color: "#38B2DB",
					fontVariantNumeric: "tabular-nums",
				}}
			>{`${rainProbability}%`}</span>
			<span>
				<img src={getWeatherIconUrl(iconCode)} alt={weatherDescription} />
			</span>
			<span
				style={{
					fontVariantNumeric: "tabular-nums",
				}}
			>
				{time}
			</span>
		</div>
	);
};
