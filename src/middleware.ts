export { default } from 'next-auth/middleware'

export const config = {
  matcher: [
    '/admin',
    '/admin/skills',
    '/admin/portfolio',
    '/admin/experience',
    '/admin/contact',
  ],
}
