import { Link } from "@tanstack/react-router";
import { ValidSubjects } from "@/schemas";
export default function Blog() {
    return (
        <div>
            <ol>
                {ValidSubjects.map((s) => (
                    <li key={s}>
                        <Link to="/blogs/$subject" params={{ subject: s }}>
                            {s}
                        </Link>
                    </li>
                ))}
            </ol>
        </div>
    );
}
