import Link from "next/link";

export default function NotFound() {
  return (
    <main className="container flex min-h-[70vh] flex-col items-center justify-center gap-6 py-40 text-center">
      <p className="text-6xl font-bold text-primary">404</p>
      <h1 className="text-3xl font-bold text-darker">Không tìm thấy trang</h1>
      <p>Trang bạn tìm có thể đã chuyển địa chỉ hoặc không còn tồn tại.</p>
      <Link href="/" className="rounded-full bg-primary px-6 py-3 font-semibold text-white">Về trang chủ</Link>
    </main>
  );
}
