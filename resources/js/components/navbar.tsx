import { Button } from "./ui/button";

export default function Navbar() {
    return (
        <nav className="m-5 flex items-center justify-between">
            <div>
                <a href="/">
                    <Button variant="link"> Home </Button>
                </a>
            </div>
            <div>
                <a href="dashboard">
                    <Button variant="link"> Dashboard </Button>
                </a>
            </div>
        </nav>
    )
}
