import { Outlet, useLoaderData } from "@tanstack/react-router";
export default function Subject() {
    const _subject = useLoaderData({
        from: "/blogs/$subject/",
    });

    return (
        <div>
            {_subject}
            <Outlet />
        </div>
    );
}
