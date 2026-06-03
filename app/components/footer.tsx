import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-8">

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">

          <div>
            <h3 className="font-bold text-foreground">
              Sharp-Sharp
            </h3>

            <p className="text-sm text-muted-foreground">
              Modern logistics management platform.
            </p>
          </div>

          <div className="flex items-center gap-6 text-sm">
            <Link
              href="/about"
              className="text-muted-foreground hover:text-orange-500 transition"
            >
              About
            </Link>

            <Link
              href="/contact"
              className="text-muted-foreground hover:text-orange-500 transition"
            >
              Contact
            </Link>

            <Link
              href="/auth/login"
              className="text-muted-foreground hover:text-orange-500 transition"
            >
              Login
            </Link>
          </div>

        </div>

        <div className="mt-8 pt-6 border-t border-border text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Sharp-Sharp. All rights reserved.
        </div>

      </div>
    </footer>
  );
}