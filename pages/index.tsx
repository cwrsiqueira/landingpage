import { NextPage } from "next"
import Head from 'next/head';
import BodyTitle from '../components/BodyTitle';
import BodyItem from '../components/BodyItem';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import BodyImage1 from '../images/bodyImgItem1.svg';
import BodyImage1Sm from '../images/bodyImgItem1-sm.svg';
import BodyImage2 from '../images/bodyImgItem2.svg';
import BodyImage2Sm from '../images/bodyImgItem2-sm.svg';
import BodyImage3 from '../images/bodyImgItem3.svg';
import BodyImage3Sm from '../images/bodyImgItem3-sm.svg';
import ImgLogo from '../images/imgLogo.svg';
import ImgLogoSm from '../images/imgLogoSm.svg';
import CallAction from '../components/CallAction';
import Footer from '../components/Footer';
import FacebookIcon from '../images/facebook.jpg';
import LinkedinIcon from '../images/linkedin.jpg';
import YoutubeIcon from '../images/youtube.jpg';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Starter</title>
        <meta name="description" content="The Modern Landing page for React Developers" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav>
        <Navbar
          logo={<ImgLogo />}
          title={'Starter'}
          menu={[
            {
              menu: 'Github',
              url: 'https://github.com'
            },
            {
              menu: 'Sign in',
              url: 'login'
            },
          ]}
        />
      </nav>
      <section>
        <Hero
          mainTitle={'The Modern Landing page for'}
          subTitle={'React developers'}
          subTitleColor={'#03A9F4'}
          description={'The easiest way to build a React landing page in seconds.'}
          btnText={'Download Your Free Theme'}
          btnColor={'#03A9F4'}
          btnLink={'#'}
        />
      </section>
      <main>
        <BodyTitle
          title={'Your title here'}
          description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada nisi tellus, non imperdiet nisi tempor at.'}
        />
        <article>
          <BodyItem
            title={'Título Teste 1'}
            text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim.'}
            img={<BodyImage1 />}
            imgSm={<BodyImage1Sm />}
          />
        </article>
        <article>
          <BodyItem
            title={'Título Teste 2'}
            text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim.'}
            img={<BodyImage2 />}
            imgSm={<BodyImage2Sm />}
            reverse
          />
        </article>
        <article>
          <BodyItem
            title={'Título Teste 3'}
            text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim.'}
            img={<BodyImage3 />}
            imgSm={<BodyImage3Sm />}
          />
        </article>
        <article>
          <CallAction
            sentence={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
            call={'Start your Free Trial.'}
            btnText={'Get Started'}
            btnColor={'#03A9F4'}
          />
        </article>
      </main>
      <footer>
        <Footer
          logo={<ImgLogoSm />}
          title={'Starter'}
          menu={[
            {
              menu: 'Home',
              url: 'home'
            },
            {
              menu: 'About',
              url: 'about'
            },
            {
              menu: 'Docs',
              url: 'docs'
            },
            {
              menu: 'Github',
              url: 'github'
            },
          ]}
          sociais={[
            {
              url: '/facebook',
              img: FacebookIcon
            },
            {
              url: '/linkedin',
              img: LinkedinIcon
            },
            {
              url: '/youtube',
              img: YoutubeIcon
            },
          ]}
        />
      </footer>
    </div>
  )
}

export default Home
