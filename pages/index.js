import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
 
export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Hello My name is Althea Luriz, I am 20years old and I am currently living in Jaen Nueva Ecija. My hobbies are reading wattpad books, playing guitar, and playing chess. 
          When it comes to my favorite music, I love listening to songs that keep me motivated and inspired just like old love by yuji. My favorite food is chicken curry something simple yet comforting this dishes
          remind me of home and give me a sense of happiness while eating it. In five years, I see myself as a skilled and confident IT professional, hopefully working in the field of 
          full stack development. ]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}