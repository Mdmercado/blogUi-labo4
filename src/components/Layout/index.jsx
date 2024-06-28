import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1">
        <div className="hidden md:block md:w-1/4">
          <Sidebar />
        </div>
        <main className="flex p-4 m-auto">
          <div className="flex justify-center">
            <div className="w-full max-w-3xl">{children}</div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
