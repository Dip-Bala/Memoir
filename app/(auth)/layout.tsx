export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 p-4 sm:p-8 gap-2">
      <div
        className="bg-[radial-gradient(circle_at_top_left,var(--color-purple-900)_0%,var(--color-purple-600)_45%,var(--color-purple-200)_70%,#000_100%)]
  flex items-center justify-center
  sm:px-6
  sm:py-16
  md:py-0
  rounded-4xl
  min-h-60
  "
      >
        <div className="text-white text-center max-w-sm py-10">
          <h1 className="text-2xl sm:text-4xl font-bold mb-6 ">Memoir</h1>
          <p className="text-sm sm:text-lg opacity-90 text-gray-50 ">
            Your second brain for the web.
          </p>
        </div>
      </div>

      <div
        className="
        flex items-center justify-center
        px-2
        py-12
        md:py-0
        bg-transparent
      "
      >
        <div
          className="
          w-full max-w-md
          
          md:p-8
        "
        >
          {children}
        </div>
      </div>
    </div>
  );
}
