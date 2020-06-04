import Head from 'next/head'

import {
  Box,
  Copy,
  Footer,
  Image,
  Global,
  Header,
  Heading,
  Link,
  Wrapper,
  VertSpace
} from 'blockbuster-design-system'

import SmallArticle from '../components/SmallArticle'
import HorSpace from '../components/HorSpace'

export default function Home() {
  return (
    <div className="container">
      <Global />
      <Head>
        <title>BB LIVE</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;700&family=Roboto:wght@100;300;400&display=swap" rel="stylesheet" />
      </Head>
      <Header buttonText="SIGN IN" linkWrapper={Link} buttonLink="#">
        <Link color="var(--white)" href="#">Movies</Link>
        <Link color="var(--white)" href="#">TV</Link>
        <Link color="var(--white)" href="#">Create Account</Link>
      </Header>
      <main>
        <Image objectPosition="top" height="400px" src="https://www.denofgeek.com/wp-content/uploads/2017/10/batman-last-knight-on-earth-scott-snyder-greg-capullo.jpg?fit=1322%2C890" />
        <Box backgroundColor="var(--black)">
        
            <Wrapper>
                <VertSpace size={1} />
                <Heading>Can Batman fly? No, but here's why he should.</Heading>
                <VertSpace size={1} />
                <Box alignItems="center" backgroundColor="var(--black)">
                    <Image margin="0 10px 0 0" height="50px" width="50px" borderRadius="25px" src="https://pbs.twimg.com/profile_images/1255331282495684608/LCHYEnnf_400x400.jpg" />
                    <p className="byline-text cut"><Link color="gray" padding="0" href="#">Mike Carbone</Link></p>
                    <p className="byline-break byline-text">//</p>
                    <p className="byline-text">Published June 4th, 2020</p>
                </Box>
                <div className="line">
                    <div className="blue-line"></div>
                    <div className="gold-line"></div>
                </div>
                <Copy>With such a limited timeframe, some goals were difficult to meet and pushed our limits as designers and developers. After the four weeks of development, we have two products live and the documentation site live as well. The products sport a fresh, modern take on the Blockbuster brand. One product is a streaming service, where a user is welcomed by a large-scale hero component, with a video background. The user can view movies in several horizontal carousels, and click in to see the film details. The other product, a promotional one-page website advertising the streaming service.</Copy>
                <Copy>In action, some components are stronger than others. The button and hero components certainly stick out as prominent inclusions to the overall design. In other parts of the design, it was difficult to avoid large spaces of monotony, like in the streaming service product. Other design elements would aid in breaking up open flat spaces.</Copy>
                <Copy>Overall, I think it was an interesting attempt at modernizing the Blockbuster brand. Unfortunately, more time would have to be spent revitalizing the design to enable the component system to quickly produce professional-quality products.</Copy>
                <Image width="75%" src="https://img.cinemablend.com/filter:scale/quill/7/4/3/9/9/2/743992f6534c9ac86be44dae97dc86e21427bf3f.jpg?mw=600" />
                <p className="caption">Batman looks fu**in huge in this (2017)</p>
                <Copy>With such a limited timeframe, some goals were difficult to meet and pushed our limits as designers and developers. After the four weeks of development, we have two products live and the documentation site live as well. The products sport a fresh, modern take on the Blockbuster brand. One product is a streaming service, where a user is welcomed by a large-scale hero component, with a video background. The user can view movies in several horizontal carousels, and click in to see the film details. The other product, a promotional one-page website advertising the streaming service.</Copy>
                <Copy>In action, some components are stronger than others. The button and hero components certainly stick out as prominent inclusions to the overall design. In other parts of the design, it was difficult to avoid large spaces of monotony, like in the streaming service product. Other design elements would aid in breaking up open flat spaces.</Copy>
                <Copy>Overall, I think it was an interesting attempt at modernizing the Blockbuster brand. Unfortunately, more time would have to be spent revitalizing the design to enable the component system to quickly produce professional-quality products.</Copy>
                <VertSpace size={2} />
                <Box width="100%" flexWrap="no-wrap" backgroundColor="var(--black)">
                    <SmallArticle
                    title="BUSTED: Matthew McConaghuey spelled his name incorrectly"
                    imgSrc="https://i.ytimg.com/vi/Jn8b3RHs1yk/maxresdefault.jpg"
                    width="33%"
                    />
                    <HorSpace />
                    <SmallArticle
                    title="Why parasite should be eligible for the 2021 Oscars - Opinion"
                    imgSrc="https://www.americamagazine.org/sites/default/files/main_image/Parasite_27x40_USPOSTER_PRINT_BBv3.jpg"
                    width="33%"
                    />
                    <HorSpace />
                    <SmallArticle
                    title="New to Blockbuster Streaming: Gone With the Wind"
                    width="33%"
                    imgSrc="data:image/jpeg;base64,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"
                    />
                </Box>
                <VertSpace size={2} />
            </Wrapper>
        </Box>
      </main>
      <Footer />

      <style jsx>{`
          .byline-text {
              color: gray;
              display: inline-block;
              font-weight: lighter;
              font-style: italic;
          }
          .caption {
              color: gray;
              display: inline-block;
              font-weight: lighter;
              font-style: italic;
              margin: 10px 0;
          }

          .byline-break {
              margin: 0 15px;
          }
        
          .blue-line {
              background-color: var(--blue);
              height: 3px;
          }

          .gold-line {
              background-color: var(--gold);
              height: 3px;
          }

          .line {
              margin: 25px 0;
          }
        `}</style>
    </div>
  )
}
