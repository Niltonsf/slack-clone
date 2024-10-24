import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import React, { Dispatch, SetStateAction } from 'react'
import { FaGithub } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { SignInFlow } from '../types'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Form } from '@/components/ui/form'

interface SignInCardProps {
  setState: Dispatch<SetStateAction<SignInFlow>>
}

const formSchema = z.object({
  email: z.string().email(),
  password: z.string(),
})

const SignInCard = ({ setState }: SignInCardProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <Card className="w-full h-full p-8">
      <CardHeader className="px-0 pt-0">
        <CardTitle>Login to continue</CardTitle>
        <CardDescription>
          Use your email or another service to continue
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-5 px-0 pb-0">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2.5">
            <Input
              disabled={false}
              {...form.register('email')}
              placeholder="Email"
              type="email"
              required
            />
            <Input
              disabled={false}
              placeholder="Password"
              type="password"
              {...form.register('password')}
              required
            />
            <Button
              type="submit"
              className="w-full"
              size={'lg'}
              disabled={false}
            >
              Continue
            </Button>
          </form>
        </Form>

        <Separator />

        <div className="flex flex-col gap-y-2.5">
          <Button
            disabled={false}
            onClick={() => {}}
            variant={'outline'}
            size={'lg'}
            className="w-full relative"
          >
            <FcGoogle className="absolute left-2.5" />
            Continue with Google
          </Button>
          <Button
            disabled={false}
            onClick={() => {}}
            variant={'outline'}
            size={'lg'}
            className="w-full relative"
          >
            <FaGithub className="absolute left-2.5" />
            Continue with Github
          </Button>
        </div>

        <p className="text-xs text-muted-foreground">
          Don&apos;t have an account?{' '}
          <span
            onClick={() => setState('signUp')}
            className="text-sky-700 hover:underline cursor-pointer"
          >
            Sign up
          </span>
        </p>
      </CardContent>
    </Card>
  )
}

export default SignInCard
