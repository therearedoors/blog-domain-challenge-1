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
            },
            posts : {
                create: [
                    { title: 'Ok',
                    content: 'Lorem ipsum',
                    comments: {
                        create: [
                            {content: 'hi :)',
                            replies: {
                                create: [
                                    {content: 'bye'}
                                ]
                            }
                        },
                            {content: 'nice!'}
                        ]
                        }
                    },
                    { title: 'LOLZ',
                    content: 'funniiii',
                    picURL: 'google.com/pics2'
                    }
                ]
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
                },
                posts : {
                    create: [
                        { title: 'Update',
                        content: 'Lorem ipsum',
                      },
                      { title: 'LOL',
                        content: 'funny',
                        picURL: 'google.com/pics'
                      }
                    ]
                }
            }
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