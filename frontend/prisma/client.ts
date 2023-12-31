import { PrismaClient } from "@prisma/client";

declare global {
  namespace NodeJS {
    interface Global {}
  }
}
// add prisma to the nodeJS global type

interface CustomNodeJsGlobal extends NodeJS.Global {
  prisma: PrismaClient;
}

// prevent multiple instances of Prisma CLient in development
declare const global: CustomNodeJsGlobal;
const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV == "development") global.prisma = prisma;

export default prisma;
