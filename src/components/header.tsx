import RefreshIcon from "@mui/icons-material/Refresh";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import { useQueryClient } from "@tanstack/react-query";
import { SearchCities } from "./search-cities";

export const Header = () => {
	const queryClient = useQueryClient();

	const refreshWeatherInformation = () => {
		queryClient.invalidateQueries();
	};

	return (
		<header
			style={{
				backgroundColor: "var(--primary-color)",
				width: "100%",
				color: "white",
				fontSize: "24px",
				fontWeight: "bold",
				textAlign: "center",
				fontFamily: "roboto",
				display: "flex",
				alignItems: "center",
				justifyContent: "space-between",
				padding: "0 16px",
			}}
		>
			<Container
				maxWidth="xl"
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
					// on mobile flex col
					flexDirection: { xs: "column", sm: "row" },
				}}
			>
				<h1
					style={{
						fontSize: "24px",
					}}
				>
					Simple Weather
				</h1>
				<Stack direction="row" spacing={2} padding={3} alignItems="center">
					<IconButton
						aria-label="refresh"
						color="inherit"
						onClick={refreshWeatherInformation}
					>
						<RefreshIcon />
					</IconButton>

					<SearchCities />
				</Stack>
			</Container>
		</header>
	);
};
