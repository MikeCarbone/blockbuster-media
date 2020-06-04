import React from 'react'
import NextLink from 'next/link'

import {
  Box,
  Copy,
  Image
} from 'blockbuster-design-system'

const SmallArticle = props => (
    <NextLink href="/article">
      <a style={{ width: props.width ? props.width : 'auto' }}>
        <Box display="block" backgroundColor="var(--black)">
          <Image height="120px" width="100%" src={props.imgSrc} />
          <Copy margin="5px 0 20px 0" fontWeight="400" >{props.title}</Copy>
        </Box>
      </a>
    </NextLink>
)

export default SmallArticle
