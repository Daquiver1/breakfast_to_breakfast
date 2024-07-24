// pages/menu.js
import Head from "next/head";
import Layout from "./Layout";
import MenuHeader from "./MenuHeader";
import MenuTable from "./MenuTable";

const MenuPage = () => {
  return (
    <Layout>
      <Head>
        <title>Menu Management - Breakfast 2 Breakfast</title>
      </Head>
      <div className="p-6">
        <MenuHeader />
        <MenuTable />
      </div>
    </Layout>
  );
};

export default MenuPage;
