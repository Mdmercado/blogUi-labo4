import { create } from "zustand";

const useStore = create((set) => ({
  authToken: null,
  setAuthToken: (token) => set({ authToken: token }),
  clearAuthToken: () => set({ authToken: null }),

  posts: [],
  addPost: (post) => set((state) => ({ posts: [...state.posts, post] })),
  getPostById: (id) => (state) => state.posts.find((post) => post.id === id),
}));

export default useStore;
