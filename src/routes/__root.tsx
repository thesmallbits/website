import { cn } from "@d1vij/shit-i-always-use";
import { createRootRoute, HeadContent, Outlet } from "@tanstack/react-router";
import { lazy } from "react";
import ConsoleEgg from "@/components/ConsoleEgg";

const Header = lazy(() => import("@/components/Header/Header"));
const Footer = lazy(() => import("@/components/Footer"));

export const Route = createRootRoute({
    component: RootComponent,
});

function RootComponent() {
    return (
        <>
            <HeadContent />
            <div className={cn("h-dvh w-dvw", "grid grid-rows-[auto_1fr_auto]")}>
                <Header />
                <section className={cn("relative z-20 overflow-scroll")}>
                    <Outlet />
                </section>
                <Footer />
            </div>

            {/* Non important shit */}
            <ConsoleEgg />
        </>
    );
}
