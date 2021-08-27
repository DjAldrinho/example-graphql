import mongoose from 'mongoose';

export async function connect() {
  await mongoose.connect('mongodb://localhost/example-graphql', {
    useNewUrlParser: true,
  });
}




