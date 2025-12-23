import Navbar from '@/components/navbar';
import { Button } from '@/components/ui/button';
import { usePage } from '@inertiajs/react';

type DashboardProps = {
    user: {
        first_name: string;
        last_name: string;
        username: string;
        email: string;
    }
}

export default function Dashboard() {
    const { user } = usePage<DashboardProps>().props;

    return (
        <div className="flex h-screen flex-col">
            <Navbar />
            <div className="mx-8 mt-16 flex flex-col gap-3">
                <header>
                    <h1 className="text-xl font-semibold">Dashboard</h1>
                    {
                        user ? (
                            <div className='flex flex-col gap-5 py-4'>
                                <div>
                                <h1 className='font-semibold'>User details</h1>
                                <p>Your personal details:</p>
                                </div>

                                <ul className='list-disc ml-8'>
                                    <li> {user.first_name} </li>
                                    <li> {user.last_name} </li>
                                    <li> {user.username} </li>
                                    <li> {user.email} </li>
                                </ul>
                                <Button className='w-fit' variant="destructive">Logout</Button>
                            </div>
                        ): (
                            <div>
                                <p>Log in please </p>
                                <a href="login">
                                    <Button className="w-fit">Log-in</Button>
                                </a>
                            </div>
                        )
                    }
                </header>
            </div>
        </div>
    );
}
