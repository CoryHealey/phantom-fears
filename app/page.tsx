import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";

export default function Home() {
  return (
    <div className="container mx-auto">
      {/* Header */}
      <Header />
      {/* Main Content */}
      <Content />
      {/* Footer */}
      <Footer />
    </div>
  );
}
