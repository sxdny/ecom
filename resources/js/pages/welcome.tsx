// import { Head } from '@inertiajs/react';

import Navbar from '@/components/navbar';

export default function Welcome() {
    return (
        <main className='flex h-screen flex-col'>
            <Navbar />
            <div className='my-16 mx-8'>
                <h1 className="text-xl font-semibold">Home</h1>
                <p>Welcome to home. Enjoy your stay!</p>
            </div>
        </main>
    );
}
