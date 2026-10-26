# Chinh phục tri thức – Ý thức và vật chất

Website quiz giáo dục dạng trò chơi, chế độ **một người chơi**, chạy hoàn toàn ở trình duyệt và phù hợp triển khai bằng GitHub Pages.

## Chạy thử trên máy
Mở `index.html` bằng trình duyệt. Không cần cài thư viện hay chạy server.

## Đưa lên GitHub Pages
1. Tạo một repository GitHub mới.
2. Tải lên 3 tệp `index.html`, `style.css`, `script.js` (có thể tải cả README).
3. Vào **Settings → Pages**.
4. Ở **Build and deployment**, chọn **Deploy from a branch**.
5. Chọn branch `main`, folder `/(root)`, bấm **Save**.
6. Đợi GitHub Pages triển khai rồi mở URL mà GitHub cung cấp.

## Tùy chỉnh
- Sửa câu hỏi, đáp án, gợi ý và giải thích trong mảng `questions` ở `script.js`.
- Sửa màu sắc, kích thước và bố cục trong `style.css`.
- Danh sách nhóm được thu gọn ở trang chủ trong phần “Thông tin nhóm thực hiện”.
- Điểm hiện chỉ lưu trong lượt chơi hiện tại, không cần backend hay cơ sở dữ liệu.

## Lưu ý
Google Fonts cần kết nối Internet để tải font Nunito; nếu không có mạng, website vẫn dùng font dự phòng.
