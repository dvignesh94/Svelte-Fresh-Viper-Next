import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Footer15 = (props) => {
  return (
    <>
      <div className="footer15-container1 thq-section-padding">
        <div className="footer15-max-width thq-section-max-width">
          <div className="footer15-content">
            <div className="footer15-actions">
              <div className="footer15-media">
                <div className="footer15-container2">
                  <div className="footer15-social-links">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="thq-icon-small"
                    >
                      <path d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="thq-icon-small"
                    >
                      <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                    </svg>
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M406.286 644.571l276.571-142.857-276.571-144.571v287.429zM512 152c215.429 0 358.286 10.286 358.286 10.286 20 2.286 64 2.286 102.857 43.429 0 0 31.429 30.857 40.571 101.714 10.857 82.857 10.286 165.714 10.286 165.714v77.714s0.571 82.857-10.286 165.714c-9.143 70.286-40.571 101.714-40.571 101.714-38.857 40.571-82.857 40.571-102.857 42.857 0 0-142.857 10.857-358.286 10.857v0c-266.286-2.286-348-10.286-348-10.286-22.857-4-74.286-2.857-113.143-43.429 0 0-31.429-31.429-40.571-101.714-10.857-82.857-10.286-165.714-10.286-165.714v-77.714s-0.571-82.857 10.286-165.714c9.143-70.857 40.571-101.714 40.571-101.714 38.857-41.143 82.857-41.143 102.857-43.429 0 0 142.857-10.286 358.286-10.286v0z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer15-credits1">
            <div className="footer15-row">
              <div className="footer15-credits2">
                <span className="thq-body-small">{props.privacyLink}</span>
                <span className="thq-body-small">{props.termsLink}</span>
                <span className="thq-body-small">{props.cookiesLink}</span>
              </div>
            </div>
            <span className="footer15-content3 thq-body-small">
              {props.copyright}
            </span>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .footer15-container1 {
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .footer15-max-width {
            display: flex;
            flex-direction: column;
          }
          .footer15-content {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            padding-top: var(--dl-layout-space-twounits);
            padding-left: 0px;
            border-radius: var(--dl-layout-radius-radius4);
            padding-right: 0px;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-twounits);
            justify-content: flex-start;
          }
          .footer15-actions {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            flex-grow: 1;
            align-items: flex-start;
          }
          .footer15-media {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .footer15-container2 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .footer15-social-links {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .footer15-credits1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: auto;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .footer15-row {
            flex: 1;
            display: flex;
            align-self: center;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: space-between;
          }
          .footer15-credits2 {
            gap: var(--dl-layout-space-twounits);
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .footer15-content3 {
            align-self: center;
          }
          @media (max-width: 991px) {
            .footer15-content {
              flex-direction: row;
            }
            .footer15-media {
              width: 50%;
            }
            .footer15-credits1 {
              flex-direction: column;
            }
            .footer15-row {
              align-items: center;
              flex-direction: row;
              justify-content: center;
            }
            .footer15-content3 {
              align-self: center;
            }
          }
          @media (max-width: 767px) {
            .footer15-content {
              gap: var(--dl-layout-space-twounits);
              width: auto;
              align-self: stretch;
              flex-direction: column;
            }
            .footer15-actions {
              width: 100%;
              align-items: flex-start;
              flex-direction: column;
            }
            .footer15-media {
              width: 100%;
              align-items: center;
            }
            .footer15-credits1 {
              flex-direction: column;
            }
            .footer15-row {
              padding: 0px;
              padding-right: 0px;
              flex-direction: column;
            }
            .footer15-credits2 {
              width: auto;
              align-self: stretch;
              justify-content: space-between;
            }
          }
          @media (max-width: 479px) {
            .footer15-content {
              gap: var(--dl-layout-space-twounits);
            }
            .footer15-media {
              width: 100%;
            }
            .footer15-social-links {
              align-items: center;
              justify-content: center;
            }
            .footer15-row {
              align-items: center;
              justify-content: center;
            }
            .footer15-credits2 {
              gap: var(--dl-layout-space-oneandhalfunits);
              flex-direction: column;
              justify-content: flex-start;
            }
          }
        `}
      </style>
    </>
  )
}

Footer15.defaultProps = {
  copyright: '© 2024 Kbotix PVT LTD',
  cookiesLink: 'Cookies',
  termsLink: 'Terms of Service',
  privacyLink: 'Privacy Policy',
}

Footer15.propTypes = {
  copyright: PropTypes.string,
  cookiesLink: PropTypes.string,
  termsLink: PropTypes.string,
  privacyLink: PropTypes.string,
}

export default Footer15
