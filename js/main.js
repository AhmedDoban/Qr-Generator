let container = document.querySelector(".qr .container ");
let TextInput = document.querySelector(".TextInput");
let img = document.querySelector(".qr-img img");
document.querySelector(".btn").addEventListener("click", (e) => {
  if (TextInput.value !== "") {
    document.querySelector(".btn").value = "Generating ....";
    img.src = `https://api.qrserver.com/v1/create-qr-code/?size=232x232&data=${TextInput.value}`;
    img.addEventListener("load", (e) => {
      document.querySelector(".btn").value = "Generate QR Code";
      container.classList.add("active");
    });
  }
});
TextInput.addEventListener("keyup", (e) => {
  if (TextInput.value === "") {
    container.classList.remove("active");
  }
});
