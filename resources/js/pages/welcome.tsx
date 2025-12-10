// import { Head } from '@inertiajs/react';

import Navbar from '@/components/navbar';

export default function Welcome() {
    return (
        <main>
            <Navbar />
            <div className='m-8'>
                <h1 className="text-xl font-semibold">Home</h1>
                <p>Welcome to home. Enjoy your stay!</p>
            </div>
        </main>
    );
}
