import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const FAQ1 = (props) => {
  return (
    <>
      <div className={`faq1faq7 thq-section-padding ${props.rootClassName} `}>
        <div className="faq1-max-width thq-section-max-width">
          <div className="thq-flex-column">
            <h2 className="thq-heading-2">{props.heading1}</h2>
            <p className="faq1-text2 thq-body-large">{props.content1}</p>
          </div>
          <div className="thq-flex-column faq1-list">
            <div className="faq1-list-item1">
              <p className="faq1-faq1-question thq-body-large">
                {props.faq1Question}
              </p>
              <span className="thq-body-small">{props.faq1Answer}</span>
            </div>
            <div className="faq1-list-item2">
              <p className="faq1-faq2-question thq-body-large">
                {props.faq2Question}
              </p>
              <span className="thq-body-small">{props.faq2Answer}</span>
            </div>
            <div className="faq1-list-item3">
              <p className="faq1-faq3-question thq-body-large">
                {props.faq3Question}
              </p>
              <span className="thq-body-small">{props.faq3Answer}</span>
            </div>
            <div className="faq1-list-item4">
              <p className="faq1-faq4-question thq-body-large">
                {props.faq4Question}
              </p>
              <span className="thq-body-small">{props.faq4Answer}</span>
            </div>
            <div className="faq1-list-item5">
              <p className="faq1-faq5-question thq-body-large">
                {props.faq5Question}
              </p>
              <span className="thq-body-small">{props.faq5Answer}</span>
            </div>
          </div>
          <div className="thq-flex-column">
            <div className="faq1-content2">
              <h2 className="thq-heading-2">{props.heading2}</h2>
              <p className="faq1-text4 thq-body-large">{props.content2}</p>
            </div>
            <div className="faq1-container">
              <button className="thq-button-outline faq1-button">
                <span className="thq-body-small">{props.action1}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .faq1faq7 {
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .faq1-max-width {
            gap: var(--dl-layout-space-fiveunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .faq1-text2 {
            text-align: center;
          }
          .faq1-list-item1 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .faq1-faq1-question {
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .faq1-list-item2 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .faq1-faq2-question {
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .faq1-list-item3 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .faq1-faq3-question {
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .faq1-list-item4 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .faq1-faq4-question {
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .faq1-list-item5 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .faq1-faq5-question {
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .faq1-content2 {
            gap: 16px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .faq1-text4 {
            text-align: center;
          }
          .faq1-container {
            display: flex;
            position: relative;
          }
          .faq1root-class-name {
            display: none;
          }
          @media (max-width: 991px) {
            .faq1-max-width {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
          }
          @media (max-width: 767px) {
            .faq1-text2 {
              text-align: left;
            }
            .faq1-list {
              gap: var(--dl-layout-space-twounits);
            }
            .faq1-button {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

FAQ1.defaultProps = {
  heading1: 'FAQs',
  rootClassName: '',
  faq5Question: 'What educational benefits do these robotic kits offer?',
  faq1Answer: 'Our robotic kits are designed for children aged 8 and above.',
  faq2Answer:
    'Yes, our robotic kits are designed with safety in mind and come with clear instructions for safe usage.',
  faq3Question: 'Do I need any prior experience in robotics to use these kits?',
  faq4Answer:
    'Absolutely! We encourage parents to join in on the fun and learning experience of building robots with their children.',
  faq2Question: 'Are the robotic kits safe for children to use?',
  faq1Question: 'What age group are the robotic kits designed for?',
  faq4Question:
    'Can parents get involved in building the robots with their kids?',
  faq5Answer:
    'Our robotic kits promote STEAM education by teaching children about science, technology, engineering, arts, and mathematics in a hands-on and engaging way.',
  faq3Answer:
    'No prior experience is required. Our kits are designed to be beginner-friendly and come with step-by-step instructions.',
  action1: 'Contact',
  content2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
  content1:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  heading2: 'Still have a question?',
}

FAQ1.propTypes = {
  heading1: PropTypes.string,
  rootClassName: PropTypes.string,
  faq5Question: PropTypes.string,
  faq1Answer: PropTypes.string,
  faq2Answer: PropTypes.string,
  faq3Question: PropTypes.string,
  faq4Answer: PropTypes.string,
  faq2Question: PropTypes.string,
  faq1Question: PropTypes.string,
  faq4Question: PropTypes.string,
  faq5Answer: PropTypes.string,
  faq3Answer: PropTypes.string,
  action1: PropTypes.string,
  content2: PropTypes.string,
  content1: PropTypes.string,
  heading2: PropTypes.string,
}

export default FAQ1
