/*
The essence of this code is to define a consistent layout structure for your application that includes global styles, metadata, and common header and footer components. By wrapping the content with StateProvider, it ensures that state management is available to all child components, enabling them to access and update shared application state. This layout structure and state management setup help maintain consistency and provide a foundation for building different pages and components in your Next.js application.
*/
import "./globals.css";
import StateProvider from "./StateProvider";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
  title: "Movie Discovery Web App",
  description: "Created by Trae Zeeofor",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <StateProvider>
        <body>
          <main>
            <Header />
            {children}
            <Footer />
          </main>
        </body>
      </StateProvider>
    </html>
  );
}
