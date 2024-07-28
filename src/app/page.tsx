import { Home } from '@/modules/Home/components';
import { Layout } from '@/modules/Layout/components';
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
