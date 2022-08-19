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
      {/* <div className="min-h-screen">
        <Alert preview={preview} />
        <main>{children}</main>
      </div> */}
      <main className="content">
        <Footer />
      </main>
    </>
  );
};

export default Layout;
