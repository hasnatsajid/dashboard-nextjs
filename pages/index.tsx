import Layout from '../components/layout';
import Head from 'next/head';
import { CMS_NAME } from '../lib/constants';
import Intro from '../components/intro';

export default function Index() {
  return (
    <>
      <Head>
        <title>Next.js Blog Example with {CMS_NAME}</title>
      </Head>
      <Layout>
        <Intro />
      </Layout>
    </>
  );
}
