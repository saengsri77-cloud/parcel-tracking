const SHEET_URL = "https://opensheet.elk.sh/1id8lPtNHASMmv_LBJ2nTUkRlcWXaPlnVUzL1jzPIsSA/ParcelData";

function setLang(lang) {
  if (lang === "en") {
    document.getElementById("title").innerText = "Tracking Result";
    document.getElementById("labelCode").innerText = "Parcel No";
    document.getElementById("labelProvince").innerText = "Province";
    document.getElementById("labelDistrict").innerText = "District";
    document.getElementById("labelStatus").innerText = "Status";
    document.getElementById("labelUpdated").innerText = "Last Updated";
    document.querySelector(".secondary").innerText = "Back to Home";
  } else {
    document.getElementById("title").innerText = "ผลการติดตามพัสดุ";
    document.getElementById("labelCode").innerText = "เลขพัสดุ";
    document.getElementById("labelProvince").innerText = "จังหวัด";
    document.getElementById("labelDistrict").innerText = "อำเภอ";
    document.getElementById("labelStatus").innerText = "สถานะ";
    document.getElementById("labelUpdated").innerText = "อัปเดตล่าสุด";
    document.querySelector(".secondary").innerText = "กลับหน้าหลัก";
  }
}

function goBack() {
  window.location.href = "index.html";
}

document.addEventListener("DOMContentLoaded", async () => {
  const code = localStorage.getItem("trackingCode");
  if (!code) {
    alert("ไม่พบเลขพัสดุ");
    return;
  }

  try {
    const response = await fetch(SHEET_URL, { cache: "no-store" });
    const data = await response.json();

    const found = data.find(row => row.parcel_id === code);

    document.getElementById("loading").style.display = "none";

    if (!found) {
      alert("ไม่พบข้อมูลพัสดุในระบบ");
      return;
    }

    document.getElementById("resultArea").classList.remove("hidden");

    document.getElementById("showCode").innerText = found.parcel_id || "-";
    document.getElementById("showProvince").innerText = found.province || "-";
    document.getElementById("showDistrict").innerText = found.district || "-";
    document.getElementById("showStatus").innerText = found.status_text || "-";
    document.getElementById("showUpdated").innerText = found.updated_at || "-";

  } catch (err) {
    console.error(err);
    alert("เกิดข้อผิดพลาดในการดึงข้อมูล");
  }
});
