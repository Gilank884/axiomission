import React, { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Footer = () => {
  const [open, setOpen] = useState({
    perusahaan1: false,
    perusahaan2: false,
    komunitas: false,
  });

  const toggle = (key) => {
    setOpen((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <footer className="bg-white text-gray-700 px-6 py-10 border-t text-sm">
      <div className="max-w-7xl mx-auto">
        {/* ==== DESKTOP LAYOUT ==== */}
        <div className="hidden md:flex justify-between">
          {/* Kolom Kiri */}
          <div className="w-full md:w-1/3 pr-8">
            <img src="/logo.png" alt="Logo" className="w-36 h-auto mb-4" />
            <p className="font-semibold mb-2">
              Gali Potensi Anda Melalui Pembelajaran Video di <strong>hariesok.id</strong>!
            </p>
            <p className="text-sm">
              Jl. Usman Effendi No. 50 Lowokwaru, Malang
              <br />
              +62-877-7123-1234
            </p>
          </div>

          {/* Kolom Kanan: 3 kolom menu */}
          <div className="w-full md:w-2/3 grid grid-cols-3 gap-6">
            {/* Kategori */}
            <div>
              <h3 className="font-semibold mb-2">Kategori</h3>
              <ul className="space-y-1 text-sm">
                <li>Digital & Teknologi</li>
                <li>Pemasaran</li>
                <li>Manajemen Bisnis</li>
                <li>Pengembangan Diri</li>
                <li>Desain</li>
              </ul>
            </div>

            {/* Perusahaan */}
            <div>
              <h3 className="font-semibold mb-2">Perusahaan</h3>
              <ul className="space-y-1 text-sm">
                <li>Tentang Kami</li>
                <li>FAQ</li>
                <li>Kebijakan Privasi</li>
                <li>Ketentuan Layanan</li>
                <li>Bantuan</li>
              </ul>
            </div>

            {/* Komunitas */}
            <div>
              <h3 className="font-semibold mb-2">Komunitas</h3>
              <ul className="space-y-1 text-sm">
                <li>Tips Sukses</li>
                <li>Blog</li>
              </ul>
            </div>
          </div>
        </div>

        {/* ==== MOBILE ACCORDION ==== */}
        <div className="md:hidden space-y-6">
          {/* Logo & Info */}
          <div className="mb-4">
            <img src="/logo.png" alt="Logo" className="w-36 h-auto mb-4" />
            <p className="font-semibold">
              Gali Potensi Anda Melalui Pembelajaran Video di <strong>hariesok.id</strong>!
            </p>
            <p className="text-sm mt-2">
              Jl. Usman Effendi No. 50 Lowokwaru, Malang
              <br />
              +62-877-7123-1234
            </p>
          </div>

          {/* Accordion */}
          <div className="space-y-4">
            <div>
              <button
                className="flex justify-between items-center w-full font-bold"
                onClick={() => toggle("perusahaan1")}
              >
                Perusahaan
                {open.perusahaan1 ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              {open.perusahaan1 && (
                <ul className="mt-2 space-y-1 text-sm ml-2">
                  <li>Tentang Kami</li>
                  <li>FAQ</li>
                  <li>Kebijakan Privasi</li>
                  <li>Ketentuan Layanan</li>
                  <li>Bantuan</li>
                </ul>
              )}
            </div>

            <div>
              <button
                className="flex justify-between items-center w-full font-bold"
                onClick={() => toggle("perusahaan2")}
              >
                Kategori
                {open.perusahaan2 ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              {open.perusahaan2 && (
                <ul className="mt-2 space-y-1 text-sm ml-2">
                  <li>Digital & Teknologi</li>
                  <li>Pemasaran</li>
                  <li>Manajemen Bisnis</li>
                  <li>Pengembangan Diri</li>
                  <li>Desain</li>
                </ul>
              )}
            </div>

            <div>
              <button
                className="flex justify-between items-center w-full font-bold"
                onClick={() => toggle("komunitas")}
              >
                Komunitas
                {open.komunitas ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              {open.komunitas && (
                <ul className="mt-2 space-y-1 text-sm ml-2">
                  <li>Tips Sukses</li>
                  <li>Blog</li>
                </ul>
              )}
            </div>
          </div>
        </div>

        {/* FOOTER BAWAH */}
        <div className="mt-10 border-t pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>@2023 Gerobak Sayur All Rights Reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <FaLinkedinIn className="hover:text-black cursor-pointer" />
            <FaFacebookF className="hover:text-black cursor-pointer" />
            <FaInstagram className="hover:text-black cursor-pointer" />
            <FaTwitter className="hover:text-black cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
