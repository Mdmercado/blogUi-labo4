import { create } from "zustand";

const useStore = create((set) => ({
  authToken: localStorage.getItem("authToken") || null,
  user: JSON.parse(localStorage.getItem("user")) || null,

  setAuthToken: (token) => set({ authToken: token }),
  setUser: (user) => set({ user }),

  clearAuth: () => set({ authToken: null, user: null }),
  posts: [],
  users: [],
  setPosts: (posts) => {
    set({ posts });
  },
  setUsers: (users) => set({ users }),
  addPost: (post) => set((state) => ({ posts: [...state.posts, post] })),
  getPostById: (id) => (state) => state.posts.find((post) => post.id === id),
}));

export default useStore;
