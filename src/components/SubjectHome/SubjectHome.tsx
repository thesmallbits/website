// TODO: pls style me
import { Activity, cn } from "@d1vij/shit-i-always-use";
import { useLoaderData } from "@tanstack/react-router";
import { UNDEFINED_QUOTE, UNDEFINED_QUOTE_AUTHOR } from "@/schemas";
import AllBlogs from "./AllBlogs";
import { HighlightedBlog } from "./HighlightedBlog";
import styles from "./subjectHome.module.css";

export default function Subject() {
    const { content, groups } = useLoaderData({
        from: "/$subject",
    });

    const highlightedBlogElms = content.highlights.map((l) => <HighlightedBlog key={l} splat={l} />);

    return (
        <div className="mx-auto w-[90%] p-4 md:w-[80%]">
            <h1
                className={cn(
                    styles.subjectTitle,
                    "text-[clamp(3rem,16vw,30rem)] text-shadow-2xs text-shadow-light-border tracking-wide md:text-shadow-sm",
                )}
            >
                {content.title}
            </h1>

            {/*🤡 think of some better way than this*/}
            <Activity show={content.quote !== UNDEFINED_QUOTE}>
                <section className={cn("ml-auto", "font-cursive", "mt-2 mb-4", "text-sm md:text-2xl")}>
                    <div className="ml-auto w-fit">
                        <h2>{content.quote}</h2>
                        <Activity show={content.quote_author !== UNDEFINED_QUOTE_AUTHOR}>
                            <h3 className="text-end">~ {content.quote_author}</h3>
                        </Activity>
                    </div>
                </section>
            </Activity>

            <div className="mx-auto md:w-[80%]">
                <section className="mt-4">
                    <h2 className="mb-2 font-semibold text-4xl underline decoration-3 decoration-dotted">Highlights</h2>
                    <div className={cn("grid grid-cols-1 gap-2 md:grid-cols-2")}>{highlightedBlogElms}</div>
                </section>

                <section className="mt-6">
                    <h2 className="mb-2 font-semibold text-4xl underline decoration-3 decoration-dotted">All Blogs</h2>
                    <AllBlogs groups={groups} />
                </section>
            </div>
        </div>
    );
}
