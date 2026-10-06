# Bống Media — demo điện mặt trời

Bản demo Việt hóa từ Solurax, giữ nội dung và số liệu điện mặt trời.

- Thương hiệu: Bống Media
- Điện thoại: 0963556518
- Địa chỉ: Lê Thanh Nghị, Thành phố Hải Phòng
- Facebook: https://www.facebook.com/chupanhkyyeubongmedia
- Logo: avatar gốc do người dùng chọn từ Facebook, không chỉnh sửa ảnh.

## Chạy và kiểm tra

Node 22, Bun 1.4.2. Cài bằng `bun install --frozen-lockfile`, chạy `bun run dev`.
Kiểm tra bằng `bun run lint`, `bun x tsc --noEmit`, `bun run build`, `python3 scripts/verify-demo.py`.
Next.js xuất website tĩnh tại `out/`; Vercel Preview dùng cấu hình Next.js hiện có.

## Phạm vi demo

Biểu mẫu liên hệ chỉ minh họa, nút gửi tắt; liên kết gọi, email và Facebook hoạt động.
Các dự án, số liệu, giá và nhận xét kế thừa template để xem bố cục; chưa phải hồ sơ năng lực hay cam kết thương mại đã xác minh của Bống Media.
Trang có robots noindex. Chưa triển khai production, tên miền riêng hoặc backend.
Hồ sơ triển khai và bằng chứng duyệt demo được lưu tại Forge: `project/bong-media`.
