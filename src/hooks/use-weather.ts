import { useSuspenseQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useWeatherContext } from "../context/weather-context.tsx";
import { getCurrentWeatherByCity } from "../service/weather-service.ts";

type UseWeatherProps = {
	lat: number;
	lon: number;
};

export const useWeather = ({ lat, lon }: UseWeatherProps) => {
	const { refreshTimestamp } = useWeatherContext();

	const query = useSuspenseQuery({
		queryKey: ["weather", lat, lon],
		queryFn: () => getCurrentWeatherByCity({ lat, lon }),
		staleTime: 5 * 60 * 1000,
	});

	useEffect(() => {
		if (query.dataUpdatedAt) {
			refreshTimestamp(new Date(query.dataUpdatedAt));
		}
	}, [query.dataUpdatedAt, refreshTimestamp]);

	return query;
};
