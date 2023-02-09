import Link from "next/link";

export default function NavBar() {
    return (
        <div className="text-red-600">
            <div >
                <Link href="/">Home</Link>
            </div>
            <div>
                <Link href="/login">Login</Link>
            </div>
            <div>
                <Link href="/signup">Sign Up</Link>
            </div>
        </div>
    );
};