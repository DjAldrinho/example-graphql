export const userType = {
  User: {
    _id: (parent: { _id: any; }) => parent._id,
    firstName: (parent: { firstName: any; }) => parent.firstName,
    lastName: (parent: { lastName: any; }) => parent.lastName,
    age: (parent: { age: any; }) => parent.age,
    tasks: (parent: { tasks: any; }) => parent.tasks,
  },
};
