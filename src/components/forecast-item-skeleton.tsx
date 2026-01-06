import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Divider from "@mui/material/Divider";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

export const ForecastItemSkeleton = () => {
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
						<Skeleton variant="rounded" width={80} height={150} />
						<Skeleton variant="rounded" width={80} height={150} />
						<Skeleton variant="rounded" width={80} height={150} />
						<Skeleton variant="rounded" width={80} height={150} />
						<Skeleton variant="rounded" width={80} height={150} />
						<Skeleton variant="rounded" width={80} height={150} />
						<Skeleton variant="rounded" width={80} height={150} />
						<Skeleton variant="rounded" width={80} height={150} />
						<Skeleton variant="rounded" width={80} height={150} />
						<Skeleton variant="rounded" width={80} height={150} />
						<Skeleton variant="rounded" width={80} height={150} />
						<Skeleton variant="rounded" width={80} height={150} />
					</Stack>
				</CardContent>
			</Card>

			<Card>
				<CardHeader color="black" title="Nex 5 days"></CardHeader>
				<Divider />
				<CardContent>
					<Stack direction="column" spacing={4}>
						<Skeleton variant="rounded" width="100%" height={80} />
						<Skeleton variant="rounded" width="100%" height={80} />
						<Skeleton variant="rounded" width="100%" height={80} />
						<Skeleton variant="rounded" width="100%" height={80} />
						<Skeleton variant="rounded" width="100%" height={80} />
						<Skeleton variant="rounded" width="100%" height={80} />
						<Skeleton variant="rounded" width="100%" height={80} />
						<Skeleton variant="rounded" width="100%" height={80} />
						<Skeleton variant="rounded" width="100%" height={80} />
						<Skeleton variant="rounded" width="100%" height={80} />
						<Skeleton variant="rounded" width="100%" height={80} />
					</Stack>
				</CardContent>
			</Card>
		</Stack>
	);
};
