const books = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
  },
  {
    title: "Wuthering Heights",
    author: "Emily Brontë",
  },
];

const resolvers = {
  Query: {
    books: () => books,
  },
};

export default resolvers;
