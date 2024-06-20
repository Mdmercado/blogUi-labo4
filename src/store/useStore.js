import create from "zustand";

const useStore = create((set) => ({
  posts: [],
  addPost: (post) => set((state) => ({ posts: [...state.posts, post] })),
  getPostById: (id) => (state) => state.posts.find((post) => post.id === id),
}));

export default useStore;
