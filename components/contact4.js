import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Contact4 = (props) => {
  return (
    <>
      <div className="contact4-contact20 thq-section-padding">
        <div className="contact4-max-width thq-section-max-width">
          <div className="contact4-section-title">
            <span className="thq-body-small">{props.content2}</span>
            <div className="contact4-content1">
              <h2 className="thq-heading-2">{props.heading1}</h2>
              <p className="contact4-text3 thq-body-large">{props.content1}</p>
            </div>
          </div>
          <div className="contact4-row">
            <div className="contact4-content2">
              <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
                <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
              </svg>
              <div className="contact4-contact-info1">
                <div className="contact4-content3">
                  <h3 className="contact4-text4 thq-heading-3">Email</h3>
                  <p className="contact4-text5 thq-body-large">
                    {props.content3}
                  </p>
                </div>
                <span className="contact4-email thq-body-small">
                  {props.email1}
                </span>
              </div>
            </div>
            <div className="contact4-content4">
              <svg
                viewBox="0 0 1024 1024"
                className="contact4-icon3 thq-icon-medium"
              >
                <path d="M282 460q96 186 282 282l94-94q20-20 44-10 72 24 152 24 18 0 30 12t12 30v150q0 18-12 30t-30 12q-300 0-513-213t-213-513q0-18 12-30t30-12h150q18 0 30 12t12 30q0 80 24 152 8 26-10 44z"></path>
              </svg>
              <div className="contact4-contact-info2">
                <div className="contact4-content5">
                  <h3 className="contact4-text6 thq-heading-3">Phone</h3>
                  <p className="contact4-text7 thq-body-large">
                    {props.content4}
                  </p>
                </div>
                <span className="contact4-phone thq-body-small">
                  {props.phone1}
                </span>
              </div>
            </div>
            <div className="contact4-content6">
              <svg
                viewBox="0 0 1024 1024"
                className="contact4-icon5 thq-icon-medium"
              >
                <path d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"></path>
              </svg>
              <div className="contact4-contact-info3">
                <div className="contact4-content7">
                  <h3 className="contact4-text8 thq-heading-3">Office</h3>
                </div>
                <span className="contact4-address thq-body-small">
                  {props.address1}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .contact4-contact20 {
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .contact4-max-width {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .contact4-section-title {
            gap: var(--dl-layout-space-unit);
            width: auto;
            display: flex;
            max-width: 800px;
            align-self: flex-start;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .contact4-content1 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact4-text3 {
            text-align: center;
          }
          .contact4-row {
            gap: 48px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .contact4-content2 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            width: auto;
            display: flex;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .contact4-contact-info1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .contact4-content3 {
            gap: 16px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact4-text4 {
            align-self: flex-start;
            text-align: center;
          }
          .contact4-text5 {
            align-self: flex-start;
            text-align: left;
          }
          .contact4-email {
            align-self: flex-start;
            text-align: center;
          }
          .contact4-content4 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            width: auto;
            display: flex;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .contact4-icon3 {
            align-self: flex-start;
          }
          .contact4-contact-info2 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .contact4-content5 {
            gap: 16px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact4-text6 {
            align-self: stretch;
            text-align: left;
          }
          .contact4-text7 {
            text-align: left;
          }
          .contact4-phone {
            align-self: flex-start;
            text-align: center;
          }
          .contact4-content6 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            width: auto;
            display: flex;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .contact4-icon5 {
            align-self: flex-start;
          }
          .contact4-contact-info3 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .contact4-content7 {
            gap: 16px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact4-text8 {
            align-self: flex-start;
            text-align: left;
          }
          .contact4-address {
            align-self: flex-start;
            text-align: left;
          }
          @media (max-width: 767px) {
            .contact4-row {
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

Contact4.defaultProps = {
  email1: 'kbotix.kbx@gmail.com',
  address1: '1/158, Nehru Street, Mudichur, Chennai',
  content4: 'Connect with us on:',
  content2:
    'For inquiries about our products or services, please contact us via email or phone.',
  content1: 'Have a question or need support? Feel free to reach out to us.',
  heading1: 'Contact Us',
  phone1: '+91-7010932964',
  content3: 'Follow us on social media for the latest updates and promotions.',
}

Contact4.propTypes = {
  email1: PropTypes.string,
  address1: PropTypes.string,
  content4: PropTypes.string,
  content2: PropTypes.string,
  content1: PropTypes.string,
  heading1: PropTypes.string,
  phone1: PropTypes.string,
  content3: PropTypes.string,
}

export default Contact4
