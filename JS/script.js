// Banner Autoslide
const banner = document.getElementById("banner");
const images = [
  "Img/pexels-andre-ulysses-de-salis-2100065-3727271.jpg",
  "Img/pexels-eberhardgross-443446.jpg",
  "Img/pexels-francesco-ungaro-29463261.jpg",
  "Img/pexels-samandgos-709552.jpg",
];

let currentIndex = 0;
function changeBanner() {
  banner.style.backgroundImage = `url(${images[currentIndex]})`;
  currentIndex = (currentIndex + 1) % images.length;
}

changeBanner();
setInterval(changeBanner, 3000);

// Error Message
function handleSubmit(event) {
  event.preventDefault(); // Mencegah form untuk reload halaman

  // Ambil nilai dari input
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const liburan = document.getElementById("liburan").value;
  const errorMsg = document.getElementById("error-msg");

  // Reset pesan error
  errorMsg.style.display = "none";
  errorMsg.textContent = "";

  // Validasi nama
  if (name === "") {
    errorMsg.style.display = "block";
    errorMsg.textContent = "Silahkan isi nama anda.";
    return;
  }

  // Validasi email
  if (email === "") {
    errorMsg.style.display = "block";
    errorMsg.textContent = "silahkan isi email anda.";
    return;
  }
  if (!email.includes("@")) {
    errorMsg.style.display = "block";
    errorMsg.textContent = "Email tidak valid.";
    return;
  }

  // Validasi opsi
  if (liburan === "Select an option" || liburan === "") {
    errorMsg.style.display = "block";
    errorMsg.textContent = "Silahkan pilih opsi.";
    return;
  }

  // Jika semua validasi lolos
  alert(`Terima kasih ${name}, data Anda telah kami terima.`);
}
