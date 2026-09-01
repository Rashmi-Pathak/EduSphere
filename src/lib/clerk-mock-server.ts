import { auth as nextAuth } from "@/auth";

export const auth = async () => {
  const session = await nextAuth();
  if (!session || !session.user) {
    return { userId: null, sessionClaims: null };
  }
  return {
    userId: (session.user as any).id,
    sessionClaims: {
      metadata: {
        role: (session.user as any).role,
      }
    }
  };
};

export const currentUser = async () => {
  const session = await nextAuth();
  if (!session || !session.user) return null;
  return {
    id: (session.user as any).id,
    publicMetadata: { role: (session.user as any).role },
    privateMetadata: {},
    firstName: session.user.name,
    lastName: "",
    emailAddresses: [{ emailAddress: session.user.email }],
    primaryEmailAddress: { emailAddress: session.user.email },
  };
};

export const clerkClient = () => {
  return {
    users: {
      createUser: async (...args: any[]) => ({ id: "mock-new-user-id-" + Math.random() }),
      deleteUser: async (...args: any[]) => ({}),
      updateUser: async (...args: any[]) => ({}),
      updateUserMetadata: async (...args: any[]) => ({}),
    }
  };
};

export const clerkMiddleware = (handler: any) => {
  return async (req: any, ev: any) => {
    return handler(auth, req, ev);
  };
};

export const createRouteMatcher = (patterns: string[]) => {
  return (req: any) => {
    return patterns.some(pattern => {
      const regex = new RegExp('^' + pattern.replace('(.*)', '.*') + '$');
      return regex.test(req.nextUrl.pathname);
    });
  };
};
