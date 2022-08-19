import Alert from './alert';
import Footer from './footer';
import Meta from './meta';
import Sidebar from './sidebar';

type Props = {
  preview?: boolean;
  children: React.ReactNode;
};

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <Meta />
      <Sidebar />

      <main className="content">
        {children}
        <Footer />
      </main>
    </>
  );
};

export default Layout;
