import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { Suspense, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useWeatherContext } from "../context/weather-context";
import { CustomTabPanel } from "./custom-panel";
import { ForecastItemSkeleton } from "./forecast-item-skeleton";
import { WeatherForecast } from "./weather-forecast";

export const WeatherForecastView = () => {
	const { listOfCountries } = useWeatherContext();
	const [tab, setTab] = useState(0);

	const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
		setTab(newValue);
	};

	return (
		<Container maxWidth="xl" component="main">
			<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
				<Tabs
					value={tab}
					onChange={handleChange}
					aria-label="Cities Tabs"
					sx={{
						"& .MuiTabs-indicator": {
							backgroundColor: "red",
						},
					}}
				>
					{listOfCountries.map((city, index) => {
						return (
							<Tab
								key={city.city_id}
								label={city.city_name}
								{...{
									id: `weather-tab-${index}`,
									"aria-controls": `weather-tabpanel-${index}`,
								}}
							/>
						);
					})}
				</Tabs>
			</Box>
			<Box
				sx={{
					backgroundImage:
						"linear-gradient(to bottom, var(--gradient-from), var(--gradient-to))",
				}}
			>
				{listOfCountries.map((city, index) => {
					return (
						<CustomTabPanel key={city.city_id} value={tab} index={index}>
							<ErrorBoundary
								fallback={<div>Something went wrong loading the forecast.</div>}
							>
								<Suspense fallback={<ForecastItemSkeleton />}>
									<WeatherForecast lat={city.lat} lon={city.lon} />
								</Suspense>
							</ErrorBoundary>
						</CustomTabPanel>
					);
				})}
			</Box>
		</Container>
	);
};
