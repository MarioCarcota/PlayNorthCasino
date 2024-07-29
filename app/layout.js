import MainNavBar from "@/components/navbars/mainNavBar";
import "/styles/global.css";

export const metadata = {
  title: "Play North Casino Online | 1000 spins free | Casino Malta",
  description:
    "Play North Casino Online and get 1000 spins free | The biggest Casino in Malta",
};

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
