import { getWeatherIconUrl } from "../service/weather-service";
import type { Daily } from "../types/weather";
import { formatDTtoDate } from "../utils";

type ForecastItemProps = {
	forecastDay: Daily;
};

export const ForecastDailyItem = ({ forecastDay }: ForecastItemProps) => {
	const maxTemperature = Math.ceil(forecastDay.temp.max - 273.15);
	const minTemperature = Math.ceil(forecastDay.temp.min - 273.15);
	const iconCode = forecastDay.weather[0].icon;
	const weatherDescription = forecastDay.weather[0].description;

	return (
		<div
			style={{
				width: "100%",
				display: "grid",
				gridTemplateColumns: "auto 1fr auto",
				alignItems: "center",
				justifyContent: "center",
				gap: "16px",
			}}
		>
			<div>
				<img src={getWeatherIconUrl(iconCode)} alt={weatherDescription} />
			</div>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					gap: "2px",
					textAlign: "center",
				}}
			>
				<div
					style={{
						fontWeight: 500,
						fontSize: "24px",
					}}
				>
					{formatDTtoDate(forecastDay.dt)}
				</div>
				<div
					style={{
						fontSize: "14px",
						color: "#555",
					}}
				>
					{forecastDay.summary}
				</div>
			</div>
			<div
				style={{
					display: "flex",
					gap: "8px",
					fontWeight: 500,
					fontSize: "18px",
				}}
			>
				<span>{maxTemperature}º</span>
				<span>{minTemperature}º</span>
			</div>
		</div>
	);
};
