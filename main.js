function setLang(lang) {
  if (lang === "en") {
    document.getElementById("title").innerText = "Parcel Tracking";
    document.getElementById("label").innerText = "Tracking Number";
    document.getElementById("trackingInput").placeholder = "e.g. TH015312000001L";
    document.getElementById("hint").innerText = "Please enter 15-digit parcel ID";
    document.getElementById("btn").innerText = "Search";
  } else {
    document.getElementById("title").innerText = "ระบบติดตามพัสดุ";
    document.getElementById("label").innerText = "เลขพัสดุ";
    document.getElementById("trackingInput").placeholder = "เช่น TH015312000001L";
    document.getElementById("hint").innerText = "กรุณากรอกเลขพัสดุ 15 หลัก";
    document.getElementById("btn").innerText = "ค้นหา";
  }
}

function goResult() {
  const code = document.getElementById("trackingInput").value.trim();
  if (!code) {
    alert("กรุณากรอกเลขพัสดุ");
    return;
  }
  localStorage.setItem("trackingCode", code);

  // 👉 เปลี่ยนเป็นหน้า result ของ GitHub Pages ในขั้นตอนต่อไป
  window.location.href = "result.html";
}
