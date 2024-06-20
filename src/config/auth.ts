import type { AuthOptions, User } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const authConfig: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'Enter your email',
          required: true,
        },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: 'Enter your password',
          required: true,
        },
      },
      async authorize(credentials: any) {
        if (!credentials?.email || !credentials?.password) {
          return null
        }

        if (
          process.env.ADMIN_EMAIL === credentials.email &&
          process.env.ADMIN_PASSWORD === credentials.password
        ) {
          return { email: credentials.email } as User
        }
        return null
      },
    }),
  ],
  pages: {
    signIn: '/signin',
  },
}
