import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CourseCard from "../components/CourseCard";
import { FaPlus, FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import useCourseStore from "../store/store"; // ✅ Import store Zustand

function Main() {
  const tabs = ["Semua Kelas", "Pemasaran", "Desain", "Pengembangan Diri", "Bisnis"];
  const [activeTab, setActiveTab] = useState("Semua Kelas");
  const [editMode, setEditMode] = useState(false);

  // ✅ Ambil fungsi & data dari Zustand store
  const {
    courses,
    fetchCourses,
    addCourse,
    deleteCourse,
    updateCourse,
    loading,
    error,
  } = useCourseStore();

  const [form, setForm] = useState({
    id: null,
    title: "",
    desc: "",
    instructor: "",
    company: "",
    price: "",
    category: "Bisnis",
  });
  const [showModal, setShowModal] = useState(false);

  // ✅ Ambil data dari API saat halaman pertama kali dibuka
  useEffect(() => {
    fetchCourses();
  }, [fetchCourses]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  // ✅ CREATE
  const handleAdd = async () => {
    if (!form.title) return Swal.fire("Oops!", "Judul wajib diisi!", "warning");
    await addCourse({
      ...form,
      rating: 0,
      reviews: 0,
      image: "./kursus.jpg",
      avatar: "./Avatar.png",
    });
    setForm({
      id: null,
      title: "",
      desc: "",
      instructor: "",
      company: "",
      price: "",
      category: "Bisnis",
    });
    setShowModal(false);
    Swal.fire("Berhasil!", "Kursus berhasil ditambahkan.", "success");
  };

  // ✅ DELETE
  const handleDelete = async (id) => {
    Swal.fire({
      title: "Yakin ingin menghapus kursus ini?",
      text: "Data akan hilang permanen!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Ya, hapus!",
      cancelButtonText: "Batal",
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await deleteCourse(id);
        Swal.fire("Terhapus!", "Kursus telah dihapus.", "success");
      }
    });
  };

  // ✅ EDIT
  const handleEdit = (course) => {
    setForm(course);
    setShowModal(true);
  };

  // ✅ UPDATE
  const handleUpdate = async () => {
    await updateCourse(form.id, form);
    setForm({
      id: null,
      title: "",
      desc: "",
      instructor: "",
      company: "",
      price: "",
      category: "Bisnis",
    });
    setShowModal(false);
    Swal.fire("Berhasil!", "Data kursus diperbarui.", "success");
  };

  // ✅ FILTER
  const filteredCourses =
    activeTab === "Semua Kelas"
      ? courses
      : courses.filter((c) => c.category === activeTab);

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="p-6 md:p-10">
        <div
          className="relative rounded-2xl overflow-hidden h-[400px] md:h-[500px] flex items-center justify-center bg-center bg-cover"
          style={{ backgroundImage: "url('/hero-image.jpg')" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="relative z-10 text-center text-white px-4 md:px-10 max-w-3xl">
            <h1 className="text-2xl md:text-4xl font-bold mb-4 leading-snug">
              Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video Interaktif!
            </h1>
            <p className="text-base md:text-lg mb-6">
              Temukan ilmu baru yang menarik dan mendalam melalui koleksi video pembelajaran berkualitas tinggi.
            </p>
            <button className="px-6 py-3 bg-green-500 text-white rounded-xl hover:bg-green-600 transition duration-300">
              Temukan Video Course untuk Dipelajari!
            </button>
          </div>
        </div>
      </section>

      {/* KOLEKSI VIDEO */}
      <section className="px-6 md:px-20 py-12 bg-white">
        <div className="mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Koleksi Video Pembelajaran Unggulan
          </h2>
          <p className="text-gray-600 mt-2">Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!</p>
        </div>

        {/* Tabs */}
        <div className="flex gap-6 text-gray-600 font-medium text-base border-b-2 border-gray-200 pb-3">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative pb-2 transition duration-200 ${
                activeTab === tab ? "text-black font-semibold" : "hover:text-black"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <span className="absolute bottom-0 left-0 right-0 h-1 bg-red-500 rounded-full"></span>
              )}
            </button>
          ))}
        </div>

        {/* Tombol Tambah + Mode Edit */}
        <div className="flex justify-end mt-6 gap-3">
          <button
            onClick={() => setEditMode(!editMode)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${
              editMode
                ? "bg-yellow-500 text-white hover:bg-yellow-600"
                : "bg-gray-300 text-gray-800 hover:bg-gray-400"
            }`}
          >
            <FaEdit /> {editMode ? "Tutup Mode Edit" : "Mode Edit"}
          </button>

          <button
            onClick={() => setShowModal(true)}
            className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
          >
            <FaPlus /> Tambah Kursus
          </button>
        </div>

        {/* Grid Card */}
        <div className="bg-white p-6 md:p-10">
          {loading ? (
            <p className="text-center text-gray-500">Memuat data...</p>
          ) : error ? (
            <p className="text-center text-red-500">{error}</p>
          ) : filteredCourses.length === 0 ? (
            <p className="text-center text-gray-500">Belum ada kursus di kategori ini.</p>
          ) : (
            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
              {filteredCourses.map((course) => (
                <div key={course.id} className="relative">
                  <CourseCard {...course} />
                  {editMode && (
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
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* MODAL FORM */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-lg shadow-lg animate-fadeIn">
            <h3 className="text-lg font-semibold mb-4">
              {form.id ? "Edit Kursus" : "Tambah Kursus Baru"}
            </h3>

            <div className="grid md:grid-cols-2 gap-4">
              <input
                name="title"
                value={form.title}
                onChange={handleChange}
                placeholder="Judul Kursus"
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
              <select
                name="category"
                value={form.category}
                onChange={handleChange}
                className="border p-2 rounded"
              >
                {tabs.slice(1).map((tab) => (
                  <option key={tab}>{tab}</option>
                ))}
              </select>
              <input
                name="price"
                value={form.price}
                onChange={handleChange}
                placeholder="Harga (Rp)"
                type="number"
                className="border p-2 rounded"
              />
            </div>

            <textarea
              name="desc"
              value={form.desc}
              onChange={handleChange}
              placeholder="Deskripsi"
              className="border p-2 rounded w-full mt-3"
            ></textarea>

            <div className="mt-4 flex justify-end gap-3">
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
              <button
                onClick={() => {
                  setShowModal(false);
                  setForm({
                    id: null,
                    title: "",
                    desc: "",
                    instructor: "",
                    company: "",
                    price: "",
                    category: "Bisnis",
                  });
                }}
                className="bg-gray-400 text-white px-4 py-2 rounded"
              >
                Batal
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}

export default Main;
