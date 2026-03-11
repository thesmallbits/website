import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/join-us")({
    component: RouteComponent,
});

function RouteComponent() {
    return <div>Hello "/join-us"!</div>;
}
