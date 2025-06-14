import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Navbar4 = (props) => {
  return (
    <>
      <div className="navbar4-container">
        <header data-thq="thq-navbar" className="navbar4-navbar-interactive">
          <img
            alt={props.imageAlt}
            src={props.imageSrc}
            className="navbar4-image"
          />
          <div data-thq="thq-navbar-nav" className="navbar4-desktop-menu"></div>
          <div data-thq="thq-burger-menu" className="navbar4-burger-menu">
            <svg viewBox="0 0 1024 1024" className="navbar4-icon1">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="navbar4-mobile-menu">
            <div className="navbar4-nav">
              <div className="navbar4-top">
                <img
                  alt={props.logoAlt}
                  src={props.logoSrc}
                  className="navbar4-logo"
                />
                <div data-thq="thq-close-menu" className="navbar4-close-menu">
                  <svg viewBox="0 0 1024 1024" className="navbar4-icon3">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav className="navbar4-links">
                <span className="thq-link thq-body-small">{props.link1}</span>
                <span className="thq-link thq-body-small">{props.link2}</span>
                <span className="thq-link thq-body-small">{props.link3}</span>
                <span className="thq-link thq-body-small">{props.link4}</span>
                <span className="thq-link thq-body-small">{props.link5}</span>
              </nav>
            </div>
            <div className="navbar4-buttons">
              <button className="thq-button-filled">Login</button>
              <button className="thq-button-outline">Register</button>
            </div>
          </div>
        </header>
      </div>
      <style jsx>
        {`
          .navbar4-container {
            width: 100%;
            display: flex;
            position: relative;
            justify-content: center;
            background-color: var(--dl-color-theme-neutral-light);
          }
          .navbar4-navbar-interactive {
            width: 100%;
            display: flex;
            max-width: var(--dl-layout-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-layout-space-twounits);
            padding-left: var(--dl-layout-space-threeunits);
            padding-right: var(--dl-layout-space-threeunits);
            padding-bottom: var(--dl-layout-space-twounits);
            justify-content: space-between;
          }
          .navbar4-image {
            width: 85px;
            height: 92px;
            object-fit: cover;
          }
          .navbar4-desktop-menu {
            flex: 1;
            display: flex;
            justify-content: space-between;
          }
          .navbar4-burger-menu {
            display: none;
          }
          .navbar4-icon1 {
            width: var(--dl-layout-size-xsmall);
            height: var(--dl-layout-size-xsmall);
          }
          .navbar4-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: var(--dl-layout-space-twounits);
            z-index: 100;
            position: absolute;
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-light);
          }
          .navbar4-nav {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .navbar4-top {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-layout-space-threeunits);
            justify-content: space-between;
          }
          .navbar4-logo {
            height: 3rem;
          }
          .navbar4-close-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .navbar4-icon3 {
            width: var(--dl-layout-size-xsmall);
            height: var(--dl-layout-size-xsmall);
          }
          .navbar4-links {
            gap: var(--dl-layout-space-unit);
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
          }
          .navbar4-buttons {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            margin-top: var(--dl-layout-space-twounits);
            align-items: center;
          }
          @media (max-width: 767px) {
            .navbar4-navbar-interactive {
              padding-left: var(--dl-layout-space-twounits);
              padding-right: var(--dl-layout-space-twounits);
            }
            .navbar4-desktop-menu {
              display: none;
            }
            .navbar4-burger-menu {
              display: flex;
              align-items: center;
              justify-content: center;
            }
          }
          @media (max-width: 479px) {
            .navbar4-navbar-interactive {
              padding: var(--dl-layout-space-unit);
            }
            .navbar4-mobile-menu {
              padding: var(--dl-layout-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

Navbar4.defaultProps = {
  link2: 'Products',
  link1: 'Home',
  link5: 'Link5',
  imageAlt: 'image',
  logoSrc:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/fac575ac-7a41-484f-b7ac-875042de11f8?org_if_sml=1&force_format=original',
  logoAlt: 'Company Logo',
  action1: 'Sign Up',
  imageSrc: '/logo_final%20(1)-200w.png',
  link4: 'Contact',
  link3: 'About Us',
  action2: 'Log In',
}

Navbar4.propTypes = {
  link2: PropTypes.string,
  link1: PropTypes.string,
  link5: PropTypes.string,
  imageAlt: PropTypes.string,
  logoSrc: PropTypes.string,
  logoAlt: PropTypes.string,
  action1: PropTypes.string,
  imageSrc: PropTypes.string,
  link4: PropTypes.string,
  link3: PropTypes.string,
  action2: PropTypes.string,
}

export default Navbar4
