export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="mx-auto py-10">
        <p className="text-center text-md text-gray-500 font-medium font-sans">
          © {new Date().getFullYear()} Zenshop Store. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
