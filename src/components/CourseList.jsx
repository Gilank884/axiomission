import React, { useState } from "react";
import CourseCard from "./CourseCard";

export default function CourseList() {
  const [courses, setCourses] = useState([
    {
      id: 1,
      title: "Big 4 Auditor Analyst",
      desc: "Mulai transformasi dengan instruktur profesional...",
      instructor: "Jenna Ortega",
      company: "Gojek",
      rating: 3.5,
      reviews: 86,
      price: 300000,
      image: "./kursus.jpg",
      avatar: "./Avatar.png",
    },
  ]);

  const [form, setForm] = useState({
    id: null,
    title: "",
    desc: "",
    instructor: "",
    company: "",
    rating: 0,
    price: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // CREATE
  const handleAdd = () => {
    if (!form.title) return alert("Judul wajib diisi");
    setCourses([
      ...courses,
      {
        ...form,
        id: Date.now(),
        reviews: 0,
        image: "./kursus.jpg",
        avatar: "./Avatar.png",
      },
    ]);
    setForm({ id: null, title: "", desc: "", instructor: "", company: "", rating: 0, price: "" });
  };

  // DELETE
  const handleDelete = (id) => {
    setCourses(courses.filter((c) => c.id !== id));
  };

  // EDIT (load data ke form)
  const handleEdit = (course) => {
    setForm(course);
  };

  // UPDATE
  const handleUpdate = () => {
    setCourses(
      courses.map((c) => (c.id === form.id ? { ...form } : c))
    );
    setForm({ id: null, title: "", desc: "", instructor: "", company: "", rating: 0, price: "" });
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">📚 Manajemen Kursus</h1>

      {/* FORM */}
      <div className="bg-white p-4 rounded-xl shadow mb-6">
        <h2 className="text-lg font-semibold mb-2">
          {form.id ? "Edit Kursus" : "Tambah Kursus"}
        </h2>
        <div className="grid grid-cols-2 gap-3">
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Judul"
            className="border p-2 rounded"
          />
          <input
            name="instructor"
            value={form.instructor}
            onChange={handleChange}
            placeholder="Instruktur"
            className="border p-2 rounded"
          />
          <input
            name="company"
            value={form.company}
            onChange={handleChange}
            placeholder="Perusahaan"
            className="border p-2 rounded"
          />
          <input
            name="price"
            value={form.price}
            onChange={handleChange}
            placeholder="Harga"
            type="number"
            className="border p-2 rounded"
          />
        </div>
        <textarea
          name="desc"
          value={form.desc}
          onChange={handleChange}
          placeholder="Deskripsi"
          className="border p-2 rounded w-full mt-2"
        ></textarea>

        <div className="mt-3 flex gap-3">
          {form.id ? (
            <button
              onClick={handleUpdate}
              className="bg-yellow-500 text-white px-4 py-2 rounded"
            >
              Update
            </button>
          ) : (
            <button
              onClick={handleAdd}
              className="bg-green-600 text-white px-4 py-2 rounded"
            >
              Tambah
            </button>
          )}
          {form.id && (
            <button
              onClick={() =>
                setForm({
                  id: null,
                  title: "",
                  desc: "",
                  instructor: "",
                  company: "",
                  rating: 0,
                  price: "",
                })
              }
              className="bg-gray-400 text-white px-4 py-2 rounded"
            >
              Batal
            </button>
          )}
        </div>
      </div>

      {/* LIST */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {courses.map((course) => (
          <div key={course.id} className="relative">
            <CourseCard {...course} />
            <div className="absolute top-2 right-2 flex gap-2">
              <button
                onClick={() => handleEdit(course)}
                className="bg-yellow-400 text-white px-2 py-1 text-xs rounded"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(course.id)}
                className="bg-red-500 text-white px-2 py-1 text-xs rounded"
              >
                Hapus
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
