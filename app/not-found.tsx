import { Navbar, Footer } from "./(site)/components";
import Content404 from "./(site)/components/Content404";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Content404 />
      </main>
      <Footer />
    </div>
  );
};

export default NotFoundPage;
