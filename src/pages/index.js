import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Cards from '../components/HomePageCards'
import HomePageHero from '../components/HomePageHero'






export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      // title={`${siteConfig.title}`}
      description="Comprehensive guides for setting up and customizing configurations.">
      {/* <HomepageHeader /> */}
      <main>
        <HomePageHero />
        
        {/* <HomepageFeatures /> */}
        {/* <Cards /> */}
        {/* <Blogs /> */}
      </main>
      
    </Layout>
  );
}
