import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { renderRichText } from 'gatsby-source-contentful/rich-text'

const Hero = ({ image, title, content }) => (
  <div className="">
    {image && <GatsbyImage className="" alt={title} image={image} />}
    <div className="">
      <h1 className="">{title}</h1>
      {content && <div className="">{renderRichText(content)}</div>}
    </div>
  </div>
)

export default Hero
