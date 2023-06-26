const menutoggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector("nav ul");
const home = document.querySelector(".home");
const profile = document.querySelector(".profile");
const dokter = document.querySelector(".dokter");
const layanan = document.querySelector(".layanan_kesehatan");
const fasilitas = document.querySelector(".fasilitas");

function cek() {
  var cb = document.getElementById("cek");
  cb.checked = false;
}

menutoggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});

home.addEventListener("click", function () {
  nav.classList.remove("slide");
  cek();
});

profile.addEventListener("click", function () {
  nav.classList.remove("slide");
  cek();
});

dokter.addEventListener("click", function () {
  nav.classList.remove("slide");
  cek();
});

layanan.addEventListener("click", function () {
  nav.classList.remove("slide");
  cek();
});

fasilitas.addEventListener("click", function () {
  nav.classList.remove("slide");
  cek();
});

const sejarah = document.querySelector(".s");
const visimisi = document.querySelector(".vm");
const strukturorganisasi = document.querySelector(".so");
const profiledokter = document.querySelector(".pd");
const jadwaldokter = document.querySelector(".jd");
const konsultasi = document.querySelector(".k");
const igd = document.querySelector(".igd");
const rawatjalan = document.querySelector(".rj");
const rawatinap = document.querySelector(".ri");
const rumahduka = document.querySelector(".rd");
const rumahsinggah = document.querySelector(".rs");
const tempatibadah = document.querySelector(".ti");
const kantin = document.querySelector(".kn");
const atm = document.querySelector(".atm");
const areaparkir = document.querySelector(".ap");

sejarah.addEventListener("click", function () {
  nav.classList.remove("slide");
  cek();
});

visimisi.addEventListener("click", function () {
  nav.classList.remove("slide");
  cek();
});

strukturorganisasi.addEventListener("click", function () {
  nav.classList.remove("slide");
  cek();
});

profiledokter.addEventListener("click", function () {
  nav.classList.remove("slide");
  cek();
});

jadwaldokter.addEventListener("click", function () {
  nav.classList.remove("slide");
  cek();
});

konsultasi.addEventListener("click", function () {
  nav.classList.remove("slide");
  cek();
});

igd.addEventListener("click", function () {
  nav.classList.remove("slide");
  cek();
});

rawatjalan.addEventListener("click", function () {
  nav.classList.remove("slide");
  cek();
});

rawatinap.addEventListener("click", function () {
  nav.classList.remove("slide");
  cek();
});

rumahduka.addEventListener("click", function () {
  nav.classList.remove("slide");
  cek();
});

rumahsinggah.addEventListener("click", function () {
  nav.classList.remove("slide");
  cek();
});

tempatibadah.addEventListener("click", function () {
  nav.classList.remove("slide");
  cek();
});

kantin.addEventListener("click", function () {
  nav.classList.remove("slide");
  cek();
});

atm.addEventListener("click", function () {
  nav.classList.remove("slide");
  cek();
});

areaparkir.addEventListener("click", function () {
  nav.classList.remove("slide");
  cek();
});
