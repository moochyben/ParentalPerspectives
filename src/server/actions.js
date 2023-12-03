import HttpError from '@wasp/core/HttpError.js'

export const createPost = async (args, context) => {
  if (!context.user) { throw new HttpError(401) };

  const post = await context.entities.Post.create({
    data: {
      content: args.content,
      tags: args.tags,
      correlation: args.correlation,
      userId: context.user.id
    }
  });

  return post;
}

export const updateUser = async (args, context) => {
  if (!context.user) { throw new HttpError(401) }

  const user = await context.entities.User.findUnique({
    where: { id: context.user.id }
  });

  return context.entities.User.update({
    where: { id: context.user.id },
    data: { age: args.age, job: args.job, education: args.education, income: args.income, familySituation: args.familySituation, gender: args.gender, location: args.location }
  });
}