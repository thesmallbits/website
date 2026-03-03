import { cn, type ReactRef } from "@d1vij/shit-i-always-use";
import { Link, type LinkProps } from "@tanstack/react-router";
import { useEffect, useMemo, useRef } from "react";
import styles from "./header.module.css";
import { useMenuState } from "./MenuStateContext";

type ExternalLink = {
    title: string;
    type: "external";
    to: string;
};
type InternalLink = {
    title: string;
    type: "internal";
    to: LinkProps["to"];
    slug: LinkProps["params"];
};
export type MenuListProps = {
    title: string;
    links: (InternalLink | ExternalLink)[];
};

type MenuListItemProps = MenuListProps["links"][number];
function MenuListItem(props: MenuListItemProps) {
    const { setIsOpen } = useMenuState();
    function handleClick() {
        setIsOpen(false);
    }

    switch (props.type) {
        case "external": {
            return (
                <li>
                    <a href={props.to} onClick={handleClick}>
                        {props.title}
                    </a>
                </li>
            );
        }
        case "internal": {
            return (
                <li>
                    <Link to={props.to} params={props.slug} onClick={handleClick}>
                        {props.title}
                    </Link>
                </li>
            );
        }
    }
}

function MenuList(props: MenuListProps) {
    const linkElms = props.links.map((l) => <MenuListItem {...l} key={l.title} />);

    return (
        <div>
            <h2>{props.title}</h2>
            <ul>{linkElms}</ul>
        </div>
    );
}

type MenuProps = {
    lists: MenuListProps[];
    menuButtonRef: ReactRef<HTMLButtonElement | null>;
};
export default function Menu({ lists, menuButtonRef }: MenuProps) {
    const elms = useMemo(() => lists.map((l) => <MenuList key={l.title} {...l} />), [lists]);
    const ref = useRef<HTMLDivElement>(null);
    const { isOpen, setIsOpen } = useMenuState();

    // NOTE: events when menu closes
    // 1. user has scrolled anywhere the document (this works fine until the menu itself has scroll)
    // 2. user presses Escape key
    // 3. user clicks outside the menu
    // 4. user clicks on any of the menu links
    useEffect(() => {
        function handleScroll() {
            setIsOpen(false);
        }
        function handleKeyPress(e: KeyboardEvent) {
            if (e.key === "Escape") {
                setIsOpen(false);
            }
        }
        function handleClick(e: MouseEvent) {
            const self = ref.current;
            const menuButton = menuButtonRef.current;
            if (!self || !menuButton) return;

            // the element we clicked at
            const target = e.target as Node;
            if (menuButton.contains(target)) {
                return;
            }
            // we clicked outside of the header
            else if (!self.contains(e.target as Node)) {
                console.log("true");
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClick);
        document.addEventListener("keydown", handleKeyPress);
        document.addEventListener("scroll", handleScroll);
        return () => {
            document.removeEventListener("mousedown", handleClick);
            document.removeEventListener("keydown", handleKeyPress);
            document.removeEventListener("scroll", handleScroll);
        };
    }, [setIsOpen, menuButtonRef.current]);

    return (
        <div
            ref={ref}
            className={cn(
                styles.headerMenu,
                "rounded-b-2xl bg-light-secondary shadow",
                "absolute top-full mx-4",
                "border-2 border-light-border border-t",
                "grid min-h-[60dvh] w-[90%] p-4 md:w-[70%]",
                isOpen && styles.open,
            )}
        >
            {elms}
        </div>
    );
}
