import Navbar from '@/components/navbar';
import { Button } from '@/components/ui/button';
import { Field, FieldDescription, FieldGroup, FieldLabel, FieldSet } from '@/components/ui/field';
import { Input } from '@/components/ui/input';

import { useForm } from '@inertiajs/react';
import { FormEvent } from 'react';

export default function Signup() {
    // Valores por defecto
    const { data, setData, post, processing, error, validate } = useForm({
        first_name: '',
        last_name: '',
        email: '',
        username: '',
        password: '',
        confirmPassword: '',
    }).withPrecognition('post', '/users');

    function submit(e: FormEvent) {
        e.preventDefault();
        // validate here the inputs
        post('/submitSignup');
    }

    return (
        <main className="flex h-screen flex-col">
            <Navbar />
            <div className="flex w-full grow items-center justify-center gap-4 border">
                <div className="flex w-full max-w-sm flex-col gap-4">
                    <h1 className="text-3xl font-semibold">Sign Up</h1>
                    <form onSubmit={(e) => submit(e)}>
                        <FieldSet>
                            <FieldGroup>
                                <Field>
                                    <FieldLabel htmlFor="first_name">First name</FieldLabel>
                                    <Input
                                        value={data.first_name}
                                        onChange={(e) => setData('first_name', e.target.value)}
                                        id="first_name"
                                        autoComplete="off"
                                        placeholder="Sidney"
                                    />
                                </Field>
                                <Field>
                                    <FieldLabel htmlFor="last_name">Last name</FieldLabel>
                                    <Input
                                        value={data.last_name}
                                        onChange={(e) => setData('last_name', e.target.value)}
                                        id="last_name"
                                        autoComplete="off"
                                        placeholder="Silva Braz de Oliveira"
                                    />
                                </Field>
                                <Field>
                                    <FieldLabel htmlFor="email">Email</FieldLabel>
                                    <Input
                                        value={data.email}
                                        onChange={(e) => setData('email', e.target.value)}
                                        type="email"
                                        id="email"
                                        autoComplete="off"
                                        placeholder="sxdny@email.me"
                                    />
                                </Field>
                                <Field>
                                    <FieldLabel htmlFor="username">Username</FieldLabel>
                                    <Input
                                        value={data.username}
                                        onChange={(e) => setData('username', e.target.value)}
                                        id="username"
                                        autoComplete="on"
                                        placeholder="sxdny"
                                    />
                                </Field>
                                <Field>
                                    <FieldLabel htmlFor="password">Password</FieldLabel>
                                    <Input
                                        value={data.password}
                                        onChange={(e) => setData('password', e.target.value)}
                                        type="password"
                                        id="password"
                                        autoComplete="on"
                                    />
                                </Field>
                                <Field>
                                    <FieldLabel htmlFor="confirmPassword">Confirm Password</FieldLabel>
                                    <Input
                                        value={data.confirmPassword}
                                        onChange={(e) => setData('confirmPassword', e.target.value)}
                                        type="password"
                                        id="confirmPassword"
                                        autoComplete="on"
                                    />
                                </Field>
                                <Button type="submit">Continue</Button>
                                <FieldDescription>
                                    Already have an account?
                                    <a href="login">
                                        <Button className="px-1 underline" variant="link">
                                            Login
                                        </Button>
                                    </a>
                                </FieldDescription>
                            </FieldGroup>
                        </FieldSet>
                    </form>
                </div>
            </div>
        </main>
    );
}
