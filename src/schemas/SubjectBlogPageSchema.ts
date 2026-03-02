import * as v from "valibot";
import { RegistryKeySchema } from "@/content/registry";

export const ValidSubjects = ["chemistry", "physics", "maths", "general"] as const;
export const ValidSubjectSchema = v.picklist(ValidSubjects);

export const HotLinkSchema = v.object({
    url: RegistryKeySchema,
    summary: v.optional(v.string(), ""),
});

export const SubjectBlogPageSchema = v.object({
    title: v.pipe(v.string(), v.trim(), v.minLength(1)),
    hot_links: v.pipe(
        v.array(HotLinkSchema),
        v.minLength(0),
        v.description("blogs to preview on the subject's home page"),
    ),
});

// what in the convoluted shit is this
export const SubjectBlogIndexSchema = v.object(v.entriesFromList(ValidSubjects, SubjectBlogPageSchema));
export type SubjectBlogIndex = v.InferInput<typeof SubjectBlogIndexSchema>;
