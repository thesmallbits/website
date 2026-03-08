import { createFileRoute } from "@tanstack/react-router";
import { lazy } from "react";
import * as v from "valibot";
import { RegistryKeySchema } from "@/content/registry";
import { MetaSchema } from "@/schemas";

const { registry } = await import("@/content/registry");
console.log(registry.keys);
const BlogSlug = lazy(() => import("@/components/BlogSlug"));

/**
 * Replacement when the splat is undefined, maybe useful on the error handling page
 */
export const UNDEFINED_PATH = "87650307-114d-4600-b067-daac48fea4f0"; // no sane person will have a file named like this

export const Route = createFileRoute("/blogs/$")({
    component: BlogSlug,
    params: {
        parse: ({ _splat }) => ({
            _splat: v.parse(RegistryKeySchema, _splat ? `/${_splat}` : UNDEFINED_PATH),
        }),
    },
    loader({ params: { _splat } }) {
        const metadata = registry.getMetadata(_splat);
        const results = v.safeParse(MetaSchema, metadata);

        if (!results.success) {
            throw results;
        }

        return {
            component: registry.getComponent(_splat),
            exports: registry.getExport(_splat),
            metadata: results.output,
        };
    },
});
