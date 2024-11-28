const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const drivers = require("./drivers.json")
async function main() {
  // Criar usuários
  drivers.forEach(async (driver) =>{
    await prisma.driver.create({
      data:{
              ...driver,
              review: {
                create: {
                  rating: driver.review.rating,
                  comment: driver.review.comment
                }
              }
      }
    })
  })
;
 console.log("Seed concluído com sucesso!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
