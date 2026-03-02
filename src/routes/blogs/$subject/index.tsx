import { createFileRoute } from "@tanstack/react-router";

import { lazy } from "react";
import * as v from "valibot";
import { ValidSubjectSchema } from "@/schemas";

const SubjectHome = lazy(() => import("@/components/SubjectHome"));

export const Route = createFileRoute("/blogs/$subject/")({
    component: SubjectHome,
    params: {
        parse({ subject }) {
            return {
                subject: v.parse(ValidSubjectSchema, subject),
            };
        },
    },
    async loader({ params: { subject } }) {
        switch (subject) {
            case "chemistry":
            case "physics":
            case "maths":
            case "general":
                break;
            default:
                // it should be exhaustive
                subject satisfies never;
        }
        return subject;
    },
});
