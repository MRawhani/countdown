import React from 'react'

export default function Nav() {
    return (
      <div className="nav row justify-center align-center">
      <img
            src={`${process.env.PUBLIC_URL}/images/logotedx.svg`}
            alt="tedxsanaa"
            className={`logo`}
          />
      </div>
    )
}
