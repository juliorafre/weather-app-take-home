import {
	createContext,
	useCallback,
	useContext,
	useMemo,
	useState,
} from "react";
import { DEFAULT_CITIES } from "../const";
import type { CityData } from "../types/weather";

type WeatherProviderProps = {
	children: React.ReactNode;
};

type WeatherContextType = {
	lastUpdate: Date;
	refreshTimestamp: (timestamp: Date) => void;
	listOfCountries: CityData[];
	addCountry: (country: CityData) => void;
};

const WeatherContext = createContext<WeatherContextType | null>(null);

export const WeatherProvider = ({ children }: WeatherProviderProps) => {
	const [lastUpdate, setLastUpdate] = useState<Date>(new Date());
	const [listOfCountries, setListOfCountries] =
		useState<CityData[]>(DEFAULT_CITIES);

	const refreshTimestamp = useCallback((timestamp: Date) => {
		setLastUpdate(timestamp);
	}, []);

	const addCountry = useCallback((country: CityData) => {
		setListOfCountries((prev) => {
			return [...prev, country];
		});
	}, []);

	const value = useMemo(
		() => ({
			lastUpdate,
			refreshTimestamp,
			listOfCountries,
			addCountry,
		}),
		[lastUpdate, refreshTimestamp, listOfCountries, addCountry],
	);

	return (
		<WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>
	);
};

export const useWeatherContext = () => {
	const context = useContext(WeatherContext);
	if (!context) {
		throw new Error("useWeatherContext must be used within a WeatherProvider");
	}
	return context;
};
