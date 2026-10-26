# Chinh phục tri thức – Ý thức và vật chất

Website trắc nghiệm tĩnh dùng HTML, CSS và JavaScript thuần, có thể triển khai trực tiếp bằng GitHub Pages. Không cần cài thư viện hay backend.

## Các file
- `index.html`: cấu trúc giao diện và các màn hình.
- `style.css`: giao diện responsive cho máy tính và điện thoại.
- `script.js`: ngân hàng 15 câu hỏi, chấm điểm, gợi ý, giải thích và phần ôn tập.

## Đưa lên GitHub Pages
1. Giải nén ZIP.
2. Tải lên **cả ba file** `index.html`, `style.css`, `script.js` vào thư mục gốc repository (cùng cấp).
3. Chọn commit changes.
4. Vào **Settings → Pages**, chọn nhánh `main` và thư mục `/ (root)` nếu chưa cấu hình.
5. Mở website và nhấn `Ctrl + F5` để tải lại không dùng cache.

## Kiểm tra nhanh
- `script.js` có 15 câu hỏi.
- Điểm tối đa tự tính theo số câu: 150 điểm với 15 câu.
- Không dùng `slice(0, 5)` hay giới hạn 5 câu.
- Nếu vẫn hiện bản cũ, kiểm tra URL Pages/repository đúng và chờ GitHub Pages hoàn tất deployment.
