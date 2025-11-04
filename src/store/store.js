// src/store/store.js
import { create } from "zustand";
import axios from "axios";

// ⚠️ Pastikan URL ini langsung ke endpoint "courses" di MockAPI
// contoh: https://6906c631b1879c890ed80093.mockapi.io/api/v1/courses
const API_URL = "https://6906c631b1879c890ed80093.mockapi.io/api/v1/courses";

const useCourseStore = create((set) => ({
  courses: [],
  loading: false,
  error: null,

  // 🔹 Ambil semua data
  fetchCourses: async () => {
    set({ loading: true, error: null });
    try {
      const res = await axios.get(API_URL);
      set({ courses: res.data, loading: false });
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },

  // 🔹 Tambah data
  addCourse: async (data) => {
    try {
      const res = await axios.post(API_URL, data);
      set((state) => ({ courses: [...state.courses, res.data] }));
    } catch (err) {
      set({ error: err.message });
    }
  },

  // 🔹 Hapus data
  deleteCourse: async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      set((state) => ({
        courses: state.courses.filter((c) => c.id !== id),
      }));
    } catch (err) {
      set({ error: err.message });
    }
  },

  // 🔹 Update data
  updateCourse: async (id, updatedData) => {
    try {
      const res = await axios.put(`${API_URL}/${id}`, updatedData);
      set((state) => ({
        courses: state.courses.map((c) => (c.id === id ? res.data : c)),
      }));
    } catch (err) {
      set({ error: err.message });
    }
  },
}));

export default useCourseStore;
