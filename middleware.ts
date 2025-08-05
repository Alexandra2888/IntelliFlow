import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

// Define protected routes - all dashboard routes need authentication
const isProtectedRoute = createRouteMatcher([
  '/dashboard(.*)',
  '/conversation(.*)',
  '/code(.*)',
  '/image(.*)',
  '/music(.*)',
  '/video(.*)'
])

export default clerkMiddleware(async (auth, req) => {
  // Protect dashboard routes - redirect to sign-in if not authenticated
  if (isProtectedRoute(req)) {
    await auth.protect()
  }
})

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}