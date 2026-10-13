# Book Landing Page — Những Ngày Chưa Đặt Tên 📖

Một **website tĩnh giới thiệu sách** bằng **HTML5, CSS3, Bootstrap 5.3.3, Font Awesome 6.5.2** và JavaScript thuần. Dự án thực hành frontend CodeGym.

## Các phần đúng yêu cầu đề

1. **Header:** Navbar responsive, Hero giới thiệu sách và hình bìa SVG.
2. **Book Overview:** Tóm tắt nội dung, trích dẫn và số liệu của câu chuyện mẫu.
3. **Author:** Chân dung minh họa, giới thiệu tác giả hư cấu và trích dẫn.
4. **Features:** 4 thẻ đặc điểm theo Bootstrap Grid.
5. **Prices:** 3 phiên bản có giá và tính năng minh họa, bố cục responsive.
6. **Download:** Nút **tải file văn bản thật**: `assets/chuong-doc-thu.txt`.
7. **Reader's Say:** Bootstrap Carousel 3 cảm nhận minh họa với nút điều hướng.
8. **Footer:** Logo, bản quyền và các liên kết nội trang.

Trang có bố cục responsive cho **desktop, tablet và điện thoại**; menu hamburger và Carousel dùng Bootstrap Bundle.

## Cấu trúc

```text
book-landing-page/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── assets/
│   ├── book-cover.svg
│   ├── author-portrait.svg
│   ├── favicon.svg
│   └── chuong-doc-thu.txt
└── README.md
```

## Xem website

Mở trực tiếp `index.html` bằng trình duyệt (Chrome/Edge), hoặc VS Code → Live Server.

**Cần có Internet** để tải Bootstrap, Font Awesome và Google Fonts qua CDN. Bìa sách, hình tác giả, favicon và chương đọc thử đều nằm trong repository và không cần tải từ nguồn ngoài.

## Kiểm tra bài

- Menu trên điện thoại (375px) mở/đóng và cuộn đúng mục.
- Layout 2 cột Hero/Overview/Author trên desktop, xếp dọc trên điện thoại.
- Features 4→2→1 cột; bảng giá 3→2→1 cột.
- Carousel có 3 đánh giá, nút tới/lùi và indicators.
- Nút `Tải chương đọc thử (.txt)` thực sự tải file từ `assets/chuong-doc-thu.txt`.
- Bảng giá có các nút xem bản đọc thử; chúng **không giao dịch**, chỉ hiển thị thông báo giải thích.

## Ghi chú về tính trung thực

Tác phẩm **Những Ngày Chưa Đặt Tên**, tác giả **Minh An**, nội dung, các nhận xét và bảng giá đều là **dữ liệu hư cấu minh họa**; không có giao dịch/đặt hàng, tài khoản hoặc backend.

Đoạn đọc thử là văn bản được viết cho bài demo; không sao chép tài liệu từ nguồn bên ngoài. Hình minh họa dạng SVG tự tạo và commit trong repo.

## Tham khảo

Bố cục trang giới thiệu sách được lấy cảm hứng từ dự án ví dụ:
https://github.com/hoanv7169/bootstrap-demo

Đây là bản thiết kế và mã nguồn riêng, không sao chép nguyên bản mã/ảnh từ repository tham khảo.

## Link nộp

https://github.com/hatuan13406/book-landing-page
