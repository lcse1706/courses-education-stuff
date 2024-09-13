import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Funkcja do dodawania użytkownika
async function addUser(name: string, gender: string, age: number) {
  const newUser = await prisma.user.create({
    data: {
      name,
      gender,
      age,
    },
  });
  return newUser;
}

// Funkcja do pobierania wszystkich użytkowników
async function getUsers() {
  const users = await prisma.user.findMany();
  return users;
}

// Funkcja do usuwania użytkownika
async function deleteUser(userId: number) {
  await prisma.user.delete({
    where: { id: userId },
  });
}
