import Navbar from '@/components/navbar';
import { Button } from '@/components/ui/button';
import { Field, FieldDescription, FieldError, FieldGroup, FieldLabel, FieldSet } from '@/components/ui/field';
import { Input } from '@/components/ui/input';

import { useForm } from '@inertiajs/react';
import { FormEvent } from 'react';

export default function Signup() {
    /*
        Form helper con los valores por defecto.
    */
    const { data, setData, post, errors, validate, invalid } = useForm({
        first_name: '',
        last_name: '',
        email: '',
        username: '',
        password: '',
        confirmPassword: '',
    }).withPrecognition('post', '/submitSignup');

    function submit(e: FormEvent) {
        e.preventDefault();
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
                                        onBlur={() => validate()}
                                        id="first_name"
                                        autoComplete="off"
                                        placeholder="Sidney"
                                    />
                                    {invalid('first_name') && <FieldError>{errors.first_name}</FieldError>}
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
                                    {invalid('last_name') && <FieldError>{errors.last_name}</FieldError>}
                                </Field>
                                <Field>
                                    <FieldLabel htmlFor="email">Email</FieldLabel>
                                    <Input
                                        value={data.email}
                                        onChange={(e) => setData('email', e.target.value)}
                                        onBlur={() => validate()}
                                        type="email"
                                        id="email"
                                        autoComplete="off"
                                        placeholder="sxdny@email.me"
                                    />
                                    {invalid('email') && <FieldError>{errors.email}</FieldError>}
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
                                    {invalid('username') && <FieldError>{errors.username}</FieldError>}
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
                                {invalid('password') && <FieldError>{errors.password}</FieldError>}
                                <Field>
                                    <FieldLabel htmlFor="confirmPassword">Confirm Password</FieldLabel>
                                    <Input
                                        value={data.confirmPassword}
                                        onChange={(e) => setData('confirmPassword', e.target.value)}
                                        type="password"
                                        id="confirmPassword"
                                        autoComplete="on"
                                    />
                                    {invalid('confirmPassword') && <FieldError>{errors.confirmPassword}</FieldError>}
                                </Field>
                                <Button type="submit">Continue</Button>
                                <FieldDescription>
                                    Already have an account?
                                    <a href="login">
                                        <Button type="button" className="px-1 underline" variant="link">
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
