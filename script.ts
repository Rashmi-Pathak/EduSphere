import prisma from "./src/lib/prisma.js";
import bcrypt from "bcryptjs";

async function main() {
  const hash = await bcrypt.hash("password123", 10);
  await prisma.admin.updateMany({ data: { password: hash } });
  await prisma.teacher.updateMany({ data: { password: hash } });
  await prisma.student.updateMany({ data: { password: hash } });
  await prisma.parent.updateMany({ data: { password: hash } });
  console.log("Passwords updated");
}
main().finally(() => prisma.$disconnect());
