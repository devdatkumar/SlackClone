import NextAuth from "next-auth";
import type { NextAuthConfig } from "next-auth";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { type Adapter } from "next-auth/adapters";
import authConfig from "./auth.config";
import { db } from "@/db/index";
import {
  users,
  accounts,
  sessions,
  verificationTokens,
  authenticators,
} from "@/db/schema";

export const config = {
  adapter: DrizzleAdapter(db, {
    usersTable: users,
    accountsTable: accounts,
    sessionsTable: sessions,
    verificationTokensTable: verificationTokens,
    authenticatorsTable: authenticators,
  }) as Adapter,
  ...authConfig,
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(config);
