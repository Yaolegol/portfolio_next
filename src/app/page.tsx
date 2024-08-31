import { Home } from '@/modules/Home';
import { Layout } from '@/modules/Layout';
import { Metadata, NextPage } from 'next';

export const metadata: Metadata = {
  title: 'Home Page',
};

const HomePage: NextPage = () => {
  return (
    <Layout>
      <Home />
    </Layout>
  );
};

export default HomePage;
