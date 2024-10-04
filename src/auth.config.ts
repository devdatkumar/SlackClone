// https://authjs.dev/guides/edge-compatibility#authjs
import GitHub from "next-auth/providers/github";
import type { NextAuthConfig } from "next-auth";

const authConfig: NextAuthConfig = {
  secret: process.env.AUTH_SECRET,
  session: { strategy: "jwt" },
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
};

export default authConfig;
