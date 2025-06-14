import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Features17 = (props) => {
  return (
    <>
      <div className="features17-layout349 thq-section-padding">
        <div className="features17-max-width thq-section-max-width">
          <div className="features17-image-container">
            <img
              alt={props.imageAlt}
              src={props.imageSrc}
              className="features17-image"
            />
          </div>
          <div className="features17-content1">
            <div className="features17-section-title">
              <span className="thq-body-small">{props.feature1Slogan}</span>
              <div className="features17-content2">
                <h2 className="thq-heading-2">{props.feature1Title}</h2>
                <p className="thq-body-large">{props.feature1Description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .features17-layout349 {
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .features17-max-width {
            gap: var(--dl-layout-space-fiveunits);
            display: flex;
            align-items: center;
          }
          .features17-image-container {
            flex: 1;
            display: flex;
            position: relative;
            align-items: center;
          }
          .features17-image {
            width: 488px;
            height: 262px;
            object-fit: cover;
          }
          .features17-content1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .features17-section-title {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .features17-content2 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          @media (max-width: 991px) {
            .features17-max-width {
              gap: var(--dl-layout-space-twounits);
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

Features17.defaultProps = {
  imageAlt: 'image',
  feature1Title: 'Interactive Learning',
  feature1Description:
    'Our robotic kits provide an interactive learning experience, allowing kids to build, program, and play with their own robots. This hands-on approach enhances their understanding of STEAM concepts.',
  imageSrc:
    '/whatsapp%20image%202025-06-14%20at%204.19.40%20am%20(1)-300h.jpeg',
  feature1Slogan: 'Hands-on experience for better understanding',
}

Features17.propTypes = {
  imageAlt: PropTypes.string,
  feature1Title: PropTypes.string,
  feature1Description: PropTypes.string,
  imageSrc: PropTypes.string,
  feature1Slogan: PropTypes.string,
}

export default Features17
