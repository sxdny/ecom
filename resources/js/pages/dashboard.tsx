import Navbar from '@/components/navbar';
import { Button } from '@/components/ui/button';

export default function Dashboard() {
    return (
        <div className='flex h-screen flex-col'>
            <Navbar />
            <div className="mx-8 mt-16 flex flex-col gap-3">
                <header>
                    <h1 className="text-xl font-semibold">Dashboard</h1>
                    <p>Log-in to access your dashboard.</p>
                </header>
                <a href='login'>
                <Button className='w-fit'>Log-in</Button>
                </a>
            </div>
        </div>
    );
}
