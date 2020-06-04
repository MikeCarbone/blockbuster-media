import React from 'react'
import NextLink from 'next/link'

import {
  Box,
  Button,
  Copy,
  Heading,
  Image,
  VertSpace
} from 'blockbuster-design-system'

const BigArticle = props => (
    <>
      <Box className="big-article" flexDirection="column" justifyContent="left">
        <Image height="460px" src={props.imgSrc} />
        <VertSpace />
        <Heading size={2} color="var(--black)">{props.title}</Heading>
        <Copy margin="5px 0 0 0" color="var(--black)">{props.subtitle}</Copy>
        <Button href="/article" linkWrapper={NextLink} secondary margin="10px auto 0 0">{props.buttonText}</Button>
      </Box>
      <style jsx>{``}</style>
    </>
)

export default BigArticle
