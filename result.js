const SHEET_URL = "ใส่ลิงก์ opensheet ของคุณ";

function goBack(){
window.location.href="index.html";
}

document.addEventListener("DOMContentLoaded", async ()=>{

const code = localStorage.getItem("trackingCode");

if(!code){
alert("ไม่พบเลขพัสดุ");
return;
}

try{

const response = await fetch(SHEET_URL,{cache:"no-store"});
const data = await response.json();

const found = data.find(row => row.parcel_id === code);

document.getElementById("loading").style.display="none";

if(!found){
alert("ไม่พบข้อมูลพัสดุ");
return;
}

document.getElementById("resultArea").classList.remove("hidden");

document.getElementById("showCode").innerText = found.parcel_id;
document.getElementById("showProvince").innerText = found.province || "-";
document.getElementById("showDistrict").innerText = found.district || "-";
document.getElementById("showStatus").innerText = found.status_text || "-";
document.getElementById("showUpdated").innerText = found.updated_at || "-";

renderTimeline(found.state);

}catch(err){

alert("โหลดข้อมูลไม่สำเร็จ");

}

});

function renderTimeline(status){

if(status=="รับพัสดุ"){
document.getElementById("s1").classList.add("done");
}

if(status=="คัดแยก"){
document.getElementById("s1").classList.add("done");
document.getElementById("s2").classList.add("done");
}

if(status=="นำจ่าย"){
document.getElementById("s1").classList.add("done");
document.getElementById("s2").classList.add("done");
document.getElementById("s3").classList.add("done");
}

if(status=="นำจ่ายสำเร็จ"){
document.getElementById("s1").classList.add("done");
document.getElementById("s2").classList.add("done");
document.getElementById("s3").classList.add("done");
document.getElementById("s4").classList.add("done");
}

}
