import Navbar from '@/components/navbar';
import { Button } from '@/components/ui/button';
import { Field, FieldDescription, FieldGroup, FieldLabel, FieldSet } from '@/components/ui/field';
import { Input } from '@/components/ui/input';

import { useForm } from '@inertiajs/react';
import { FormEvent } from 'react';

export default function Login() {
    /*
        Form helper de los campos del formulario.
    */

    const { data, setData, post, errors, validate, invalid } = useForm({
        username: '',
        password: '',
    });

    function submit(e: FormEvent) {
        e.preventDefault();
        console.log("Hello")
        post('/submitLogin');
    }

    return (
        <main className="flex h-screen flex-col">
            <Navbar />
            <div className="flex w-full grow items-center justify-center gap-4 border">
                <div className="flex w-full max-w-sm flex-col gap-4">
                    <h1 className="text-3xl font-semibold">Login</h1>
                    <FieldSet>
                        <FieldGroup>
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
                            <Button onClick={(e) => submit(e)} type="submit">Continue</Button>
                            <FieldDescription>
                                Don't have an account?
                                <a href="signup">
                                    <Button className="px-1 underline" variant="link">
                                        Sign Up
                                    </Button>
                                </a>
                            </FieldDescription>
                        </FieldGroup>
                    </FieldSet>
                </div>
            </div>
        </main>
    );
}
