import { createFileRoute, notFound } from "@tanstack/react-router";
import { lazy } from "react";
import * as v from "valibot";
import registry, { type entries, RegistryKeySchema } from "@/content/registry";

const BlogSlug = lazy(() => import("@/components/Blog/BlogSlug"));

const BlogPathSchema = v.object({
    subject: v.pipe(v.string(), v.trim(), v.minLength(1)),
    blog: v.pipe(v.string(), v.trim(), v.minLength(1)),
});

export const Route = createFileRoute("/blogs/$subject/$blog")({
    component: BlogSlug,
    params: {
        parse: (p) => v.parse(BlogPathSchema, p),
    },
    loader: ({ params }) => {
        const path = `/blogs/${params.subject}/${params.blog}`;
        const result = v.safeParse(RegistryKeySchema, path);

        if (!result.success) {
            throw notFound({ data: result });
            // throw result.error;
        }

        return { path: path, Component: registry.getComponent(path as (typeof entries)[number]) };
    },
    notFoundComponent: ({ data }) => {
        return (
            <div>
                <p>Blog not found</p>
                <div className="w-[40%] text-wrap">{String(data)}</div>
            </div>
        );
    },
});
