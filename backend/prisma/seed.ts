import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.task.createMany({
    data: [
      { title: 'Setup environment', status: 'done' },
      { title: 'Create NestJS CRUD', status: 'in_progress' },
      { title: 'Connect frontend', status: 'pending' },
    ],
  });
}

main().finally(async () => {
  await prisma.$disconnect();
});