import { Home } from '@/modules/Home/components';
import { Layout } from '@/modules/Layout/components';
import { NextPage } from 'next';
import Head from 'next/head';

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <Layout>
        <Home />
      </Layout>
    </>
  );
};

export const getStaticProps = async () => {
  return {
    props: {},
  };
};

export default HomePage;
