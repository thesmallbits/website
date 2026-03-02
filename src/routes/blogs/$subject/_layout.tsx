import { createFileRoute, Outlet } from "@tanstack/react-router";
import * as v from "valibot";
import { ValidSubjectSchema } from "@/schemas";

export const Route = createFileRoute("/blogs/$subject/_layout")({
    component: RouteComponent,
    params: {
        parse: ({ subject }) => ({ subject: v.parse(ValidSubjectSchema, subject) }),
    },
});

function RouteComponent() {
    return <Outlet />;
}
