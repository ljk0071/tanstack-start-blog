import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout")({
	component: LayoutComponent,
});

function LayoutComponent() {
	return (
		<>
			<header>헤더</header>
			<main className="flex-1">
				<Outlet />
			</main>
			<footer>푸터</footer>
		</>
	);
}
