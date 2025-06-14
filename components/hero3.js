import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Hero3 = (props) => {
  return (
    <>
      <div className="hero3-header9">
        <img
          alt={props.image1Alt}
          src="/img_20190401_124040_84fee1e2-1500w.jpg"
          className="thq-img-ratio-16-9"
        />
        <div className="hero3-content thq-section-padding">
          <div className="hero3-max-width thq-flex-row thq-section-max-width">
            <div className="hero3-column1">
              <h1 className="thq-heading-1 hero3-text1">{props.heading1}</h1>
            </div>
            <div className="hero3-column2">
              <p className="thq-body-large hero3-text2">{props.content1}</p>
              <div className="hero3-actions">
                <button className="thq-button-filled hero3-button1">
                  <span className="thq-body-small">{props.action1}</span>
                </button>
                <button className="thq-button-outline hero3-button2">
                  <span className="thq-body-small">{props.action2}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .hero3-header9 {
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .hero3-content {
            display: flex;
            justify-content: center;
          }
          .hero3-max-width {
            align-self: center;
            align-items: center;
          }
          .hero3-column1 {
            flex: 1;
            width: auto;
            display: flex;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .hero3-column2 {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            width: auto;
            display: flex;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .hero3-actions {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
          }
          @media (max-width: 991px) {
            .hero3-column1 {
              width: 100%;
            }
            .hero3-column2 {
              width: auto;
            }
          }
          @media (max-width: 767px) {
            .hero3-text1 {
              text-align: center;
            }
            .hero3-text2 {
              text-align: center;
            }
            .hero3-actions {
              width: 100%;
              justify-content: center;
            }
          }
          @media (max-width: 479px) {
            .hero3-actions {
              flex-direction: column;
            }
            .hero3-button1 {
              width: 100%;
            }
            .hero3-button2 {
              width: 100%;
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
            }
          }
        `}
      </style>
    </>
  )
}

Hero3.defaultProps = {
  action2: 'Shop Now',
  heading1: "Unlock Your Child's Potential with Robotics Education",
  action1: 'Learn More',
  content1:
    "Inspire your child's creativity and problem-solving skills with our STEAM-based robotic kits.",
  image1Alt: 'Children using robotic kits',
}

Hero3.propTypes = {
  action2: PropTypes.string,
  heading1: PropTypes.string,
  action1: PropTypes.string,
  content1: PropTypes.string,
  image1Alt: PropTypes.string,
}

export default Hero3
