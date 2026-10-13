"use strict";
// Bộ điều hướng mobile: đóng menu sau khi người dùng chọn một mục.
document.querySelectorAll("#bookNavbar .nav-link, #bookNavbar .nav-cta").forEach((link)=>{
  link.addEventListener("click",()=>{
    const menu=document.getElementById("bookNavbar");
    if(menu.classList.contains("show") && window.bootstrap?.Collapse){
      window.bootstrap.Collapse.getOrCreateInstance(menu,{toggle:false}).hide();
    }
  });
});

// Các nút bảng giá chỉ minh họa lựa chọn sản phẩm; KHÔNG thu tiền.
const feedback=document.getElementById("planFeedback");
document.querySelectorAll("[data-plan]").forEach((button)=>{
  button.addEventListener("click",()=>{
    const name=button.getAttribute("data-plan");
    feedback.textContent='Bạn đã xem gói "'+name+'". Bảng giá chỉ mang tính minh họa; bạn có thể tải đoạn đọc thử miễn phí ngay bên trên.';
    feedback.hidden=false;
  });
});
document.getElementById("currentYear").textContent=String(new Date().getFullYear());
