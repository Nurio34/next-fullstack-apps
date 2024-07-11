import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher([
    "/todoApp(.*)",
    "/instagram/(.+)",
]);

export default clerkMiddleware((auth, req) => {
    console.log("Middleware invoked for route:", req.url); // Add logging
    // if (isProtectedRoute(req)) {
    //     console.log("Protected route detected:", req.url); // Add logging
    //     auth().protect();
    //     return;
    // }
});

export const config = {
    matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
