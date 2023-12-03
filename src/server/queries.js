import HttpError from '@wasp/core/HttpError.js'

export const getPosts = async (args, context) => {
  if (!context.user) { throw new HttpError(401) };

  return context.entities.Post.findMany({
    orderBy: { correlation: 'asc' }
  });
}

export const getUser = async ({ id }, context) => {
  if (!context.user) { throw new HttpError(401) }

  const user = await context.entities.User.findUnique({
    where: { id },
    select: {
      id: true,
      username: true,
      age: true,
      job: true,
      education: true,
      income: true,
      familySituation: true,
      gender: true,
      location: true
    }
  });

  if (!user) throw new HttpError(404, 'User not found');

  return user;
}
