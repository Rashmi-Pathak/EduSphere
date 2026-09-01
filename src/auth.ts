import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import prisma from "@/lib/prisma";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials?.password) return null;
        
        // Check all roles
        const admin = await prisma.admin.findUnique({ where: { username: credentials.username as string } });
        if (admin && admin.password && await bcrypt.compare(credentials.password as string, admin.password)) {
          return { id: admin.id, name: admin.username, role: "admin" };
        }
        
        const teacher = await prisma.teacher.findUnique({ where: { username: credentials.username as string } });
        if (teacher && teacher.password && await bcrypt.compare(credentials.password as string, teacher.password)) {
          return { id: teacher.id, name: teacher.name, role: "teacher", email: teacher.email };
        }
        
        const student = await prisma.student.findUnique({ where: { username: credentials.username as string } });
        if (student && student.password && await bcrypt.compare(credentials.password as string, student.password)) {
          return { id: student.id, name: student.name, role: "student", email: student.email };
        }
        
        const parent = await prisma.parent.findUnique({ where: { username: credentials.username as string } });
        if (parent && parent.password && await bcrypt.compare(credentials.password as string, parent.password)) {
          return { id: parent.id, name: parent.name, role: "parent", email: parent.email };
        }
        
        return null;
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = (user as any).role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        (session.user as any).id = token.id;
        (session.user as any).role = token.role;
      }
      return session;
    }
  },
  pages: {
    signIn: '/sign-in',
  }
});
