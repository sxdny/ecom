import Navbar from '@/components/navbar';
import { Button } from '@/components/ui/button';
import { Field, FieldDescription, FieldGroup, FieldLabel, FieldSet } from '@/components/ui/field';
import { Input } from '@/components/ui/input';

export default function Login() {
    return (
        <main className="flex h-screen flex-col">
            <Navbar />
            <div className="flex w-full grow items-center justify-center gap-4 border">
                <div className='max-w-sm w-full flex flex-col gap-4'>
                    <h1 className="text-3xl font-semibold">Login</h1>
                    <FieldSet>
                        <FieldGroup>
                            <Field>
                                <FieldLabel htmlFor="username">Username</FieldLabel>
                                <Input id="username" autoComplete="on" placeholder="sxdny" />
                            </Field>
                            <Field>
                                <FieldLabel htmlFor="password">Password</FieldLabel>
                                <Input type="password" id="password" autoComplete="on" />
                            </Field>
                            <Button type="submit">Continue</Button>
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
