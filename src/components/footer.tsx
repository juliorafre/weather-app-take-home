import { useWeatherContext } from "../context/weather-context";

export const Footer = () => {
	const { lastUpdate } = useWeatherContext();
	return (
		<footer
			style={{
				backgroundColor: "var(--primary-color)",
				textAlign: "right",
				padding: "0 1rem",
				borderTop: "1px solid #eaeaea",
				color: "white",
			}}
		>
			<p>Last updated on {new Date(lastUpdate).toLocaleString()}</p>
		</footer>
	);
};
