import React from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import Navbar4 from '../components/navbar4'
import Hero3 from '../components/hero3'
import Logos1 from '../components/logos1'
import Gallery1 from '../components/gallery1'
import Features17 from '../components/features17'
import Features18 from '../components/features18'
import FAQ1 from '../components/faq1'
import Contact4 from '../components/contact4'
import Footer15 from '../components/footer15'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Svelte Fresh Viper</title>
          <meta property="og:title" content="Svelte Fresh Viper" />
        </Head>
        <div className="home-navbar1">
          <Navbar4></Navbar4>
        </div>
        <div className="home-hero2">
          <Hero3></Hero3>
        </div>
        <div className="home-logos3">
          <Logos1></Logos1>
        </div>
        <div className="home-gallery4">
          <Gallery1></Gallery1>
        </div>
        <div className="home-features5">
          <Features17></Features17>
        </div>
        <div className="home-features6">
          <Features18></Features18>
        </div>
        <div className="home-features7"></div>
        <div className="home-cta8"></div>
        <div className="home-faq9">
          <FAQ1 rootClassName="faq1root-class-name"></FAQ1>
        </div>
        <div className="home-contact10">
          <Contact4></Contact4>
        </div>
        <div className="home-footer11">
          <Footer15></Footer15>
        </div>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .home-navbar1 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-hero2 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-logos3 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-gallery4 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-features5 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-features6 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-features7 {
            flex: 0 0 auto;
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-cta8 {
            flex: 0 0 auto;
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-faq9 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-contact10 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-footer11 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        `}
      </style>
    </>
  )
}

export default Home
