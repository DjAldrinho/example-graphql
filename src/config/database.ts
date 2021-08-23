import mongoose from 'mongoose';

export async function connect() {
  try {
    await mongoose.connect('mongodb://localhost/example-graphql', {
      useNewUrlParser: true,
    });

    console.log('>>> DB is Connected');
  } catch (e) {
    console.log(`Something went wrong ${e.getMessage()}`);
  }
}




