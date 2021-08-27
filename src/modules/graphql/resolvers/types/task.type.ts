export const taskType = {
  Task: {
    _id: (parent: { _id: any; }) => parent._id,
    title: (parent: { title: any; }) => parent.title,
    description: (parent: { description: any; }) => parent.description,
    order: (parent: { order: any; }) => parent.order,
    user: (parent: { user: any; }) => parent.user,
  }
}
