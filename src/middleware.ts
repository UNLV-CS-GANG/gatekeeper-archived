import { authMiddleware } from "@clerk/nextjs";

// eslint-disable-next-line @typescript-eslint/no-unsafe-call
export default authMiddleware();

console.log("middleware.ts");

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};