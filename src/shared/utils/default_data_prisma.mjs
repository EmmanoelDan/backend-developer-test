import {PrismaClient} from "@prisma/client";
import { randomUUID } from "crypto";

const prisma = new PrismaClient();

async function main() {
    const data = [
        {
            id: randomUUID(),
            name: "ABC Corp",
            created_at: new Date(),
            updated_at: new Date()
        },
        {
            id: randomUUID(),
            name: "XYZ LLC",
            created_at: new Date(),
            updated_at: new Date()
        },
        {
            id: randomUUID(),
            name: "ACME Enterprises",
            created_at: new Date(),
            updated_at: new Date()
        },
    ]

    for (const dado of data) {
        await prisma.company.create({
          data: dado,
        });
    }

    await prisma.$disconnect();
}

main().catch((e) => {
    console.error(e);
    process.exit(1);
  })

