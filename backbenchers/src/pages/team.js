import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import CCLogo from '@site/static/img/coastcompanion-logo-1.svg';
import TeamProfileCards from '@site/src/components/TeamProfileCards';


function Hero() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroBannerTitle}>
          We're not just dreaming of developing a compliance-oriented, secure, and scalable chatbot, we built one.
        </div>
      </div>
    </header>
  );
}

export default function Team() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`The Backbenchers`}
      description="Backbenchers Team Profile">
      <Hero />
      <main className={styles.main}>
        <TeamProfileCards />
      </main>
    </Layout>
  );
}
