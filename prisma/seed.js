const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seed() {

    await prisma.user.create({
        data: { username: 'bill1',
              email: 'bill@gmail.com',
              profile: {
                  create: {
                      bio: "ok",
                      profilePicURL: 'https://bill.com/pic'
                    }
                }
              }
    });
    await prisma.user.create({
        data: { username: 'alicem',
                email: 'alice@gmail.com',
                profile: {
                    create: {
                        bio: "yup",
                        profilePicURL: 'https://alice.com/pic'
                    }
                }
            }
    });

    await prisma.post.createMany({
        data: [
            { title: 'Update',
              content: 'Lorem ipsum',
            },
            { title: 'LOL',
              content: 'funny',
              picURL: 'google.com/pics'
            }
            ]
    });

    // Add your code here

    


    // Don't edit any of the code below this line
    process.exit(0);
}

seed()
    .catch(async (error) => {
        console.error(error);
        await prisma.$disconnect();
        process.exit(1);
    })