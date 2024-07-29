import MainNavBar from "@/components/navbars/mainNavBar";
import "/styles/global.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainNavBar />
        {children}
      </body>
    </html>
  );
}
