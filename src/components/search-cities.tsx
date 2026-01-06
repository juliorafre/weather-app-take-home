import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useWeatherContext } from "../context/weather-context";
import type { CityData } from "../types/weather";

const filterOptions = createFilterOptions<CityData>({
	matchFrom: "any",
	limit: 10,
});

// Note: I copied and adapt the Autocomplete Google Maps from MUI docs for faster implementation.
// The implementation was advanced but not completed due to time constraints of 2 hours for the code assignment.
// In the README I leave the approach I would take to finish it.

export const SearchCities = () => {
	const { addCountry } = useWeatherContext();
	const [open, setOpen] = useState(false);
	const [value, setValue] = useState<CityData | null>(null);

	const { data: allCities, isLoading } = useQuery({
		queryKey: ["cities"],
		queryFn: async () => {
			const res = await fetch("/cities.json");
			return res.json();
		},
		staleTime: Infinity,
		enabled: open,
	});

	return (
		<Autocomplete
			size="small"
			disabled={isLoading}
			sx={{
				width: "300px",
				backgroundColor: "white",
				borderRadius: "4px",
			}}
			open={open}
			onOpen={() => {
				setOpen(true);
			}}
			onClose={() => setOpen(false)}
			loading={isLoading}
			options={allCities || []}
			filterOptions={filterOptions}
			getOptionLabel={(option: CityData) => option.city_name}
			noOptionsText="No cities"
			value={value}
			onChange={(_event, newValue: CityData | null) => {
				if (newValue) {
					addCountry(newValue);
					setValue(null);
					setOpen(false);
				}
			}}
			renderInput={(params) => (
				<TextField
					{...params}
					label="Search city"
					placeholder="Type city name..."
					fullWidth
				/>
			)}
		/>
	);
};
