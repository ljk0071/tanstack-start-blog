import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "#/components/ui/button";

export const Route = createFileRoute("/_layout/")({ component: Home });

function Home() {
	return (
		<div>
			<Link to="/about">about</Link>
			<Button>hi</Button>
		</div>
	);
}
