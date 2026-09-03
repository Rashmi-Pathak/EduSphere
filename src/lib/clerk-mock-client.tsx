"use client";
import { useSession, signOut, signIn } from "next-auth/react";
import Link from "next/link";

export const UserButton = () => {
  const { data: session } = useSession();
  if (!session) return null;
  return (
    <div className="flex gap-2 items-center">
      <span className="text-sm font-medium">{session.user?.name}</span>
      <button onClick={() => signOut()} className="text-xs bg-red-500 text-white px-2 py-1 rounded">Logout</button>
    </div>
  );
};

export const ClerkProvider = ({ children }: any) => {
  return <>{children}</>;
};

export const useUser = () => {
  const { data: session, status } = useSession();
  if (status === "loading") return { isLoaded: false, isSignedIn: false, user: null };
  if (!session) return { isLoaded: true, isSignedIn: false, user: null };
  return {
    isLoaded: true,
    isSignedIn: true,
    user: {
      id: (session.user as any).id,
      publicMetadata: { role: (session.user as any).role },
    }
  };
};

export const useAuth = () => {
  const { data: session, status } = useSession();
  if (status === "loading") return { isLoaded: false, userId: null, sessionId: null };
  if (!session) return { isLoaded: true, userId: null, sessionId: null };
  return {
    isLoaded: true,
    userId: (session.user as any).id,
    sessionId: "mock-session-id"
  };
};

export const useClerk = () => { return { signOut: (...args: any[]) => signOut(args[0]),
  };
};

export const useSignIn = () => {
  return {
    isLoaded: true,
    signIn: {
      create: async () => ({ status: "complete", createdSessionId: "mock-session-id" }),
    },
    setActive: async () => {},
  };
};

export const SignIn = () => {
  return <div>Sign in disabled in mock</div>;
};

export const SignUp = () => {
  return <div>Sign up disabled in mock</div>;
};
