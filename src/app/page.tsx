import { Home } from '@/modules/Home';
import { LangContextProvider } from '@/modules/Lang/provider';
import { Layout } from '@/modules/Layout';
import { Metadata, NextPage } from 'next';

export const metadata: Metadata = {
    title: 'Home Page',
};

const HomePage: NextPage = () => {
    return (
        <LangContextProvider>
            <Layout>
                <Home />
            </Layout>
        </LangContextProvider>
    );
};

export default HomePage;
