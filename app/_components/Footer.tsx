export default function Footer() {
  return (
    <footer className="w-full flex items-center justify-center px-4 py-5 bg-[#f0f0f0]">
      <h1 className="almarai text-[1.5rem] md:text-[2rem] text-[#1E60BC] font-extrabold">
        جميع الحقوق محفوظة @ {new Date().getFullYear()}
      </h1>
    </footer>
  );
}
