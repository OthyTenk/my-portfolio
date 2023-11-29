import { Navbar } from "./(site)/components";
import Content404 from "./(site)/components/Content404";

const NotFoundPage = () => {
  return (
    <>
      <Navbar />
      <Content404 />
    </>
  );
};

export const getStaticProps = async () => {
  return {
    props: {},
  };
};

export default NotFoundPage;
