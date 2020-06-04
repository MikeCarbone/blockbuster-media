import Head from 'next/head'

import {
  Box,
  Button,
  Copy,
  Footer,
  Hero,
  Image,
  Global,
  Header,
  Heading,
  Link,
  Wrapper,
  VertSpace
} from 'blockbuster-design-system'

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
        <Wrapper>
            <VertSpace size={1} />
            <Heading color="var(--black)">Can Batman fly? No, but here's why he should.</Heading>
            <VertSpace size={1} />
            <Box alignItems="center">
                <Image margin="0 10px 0 0" height="50px" width="50px" borderRadius="25px" src="https://pbs.twimg.com/profile_images/1255331282495684608/LCHYEnnf_400x400.jpg" />
                <p className="byline-text cut"><Link color="gray" padding="0" href="#">Mike Carbone</Link></p>
                <p className="byline-break byline-text">//</p>
                <p className="byline-text">Published June 4th, 2020</p>
            </Box>
            <div className="line">
                <div className="blue-line"></div>
                <div className="gold-line"></div>
            </div>
            <Copy color="var(--black)">With such a limited timeframe, some goals were difficult to meet and pushed our limits as designers and developers. After the four weeks of development, we have two products live and the documentation site live as well. The products sport a fresh, modern take on the Blockbuster brand. One product is a streaming service, where a user is welcomed by a large-scale hero component, with a video background. The user can view movies in several horizontal carousels, and click in to see the film details. The other product, a promotional one-page website advertising the streaming service.</Copy>
            <Copy color="var(--black)">In action, some components are stronger than others. The button and hero components certainly stick out as prominent inclusions to the overall design. In other parts of the design, it was difficult to avoid large spaces of monotony, like in the streaming service product. Other design elements would aid in breaking up open flat spaces.</Copy>
            <Copy color="var(--black)">Overall, I think it was an interesting attempt at modernizing the Blockbuster brand. Unfortunately, more time would have to be spent revitalizing the design to enable the component system to quickly produce professional-quality products.</Copy>
            <Image width="75%" src="https://img.cinemablend.com/filter:scale/quill/7/4/3/9/9/2/743992f6534c9ac86be44dae97dc86e21427bf3f.jpg?mw=600" />
            <p className="caption">Batman looks fu**in huge in this (2017)</p>
            <Copy color="var(--black)">With such a limited timeframe, some goals were difficult to meet and pushed our limits as designers and developers. After the four weeks of development, we have two products live and the documentation site live as well. The products sport a fresh, modern take on the Blockbuster brand. One product is a streaming service, where a user is welcomed by a large-scale hero component, with a video background. The user can view movies in several horizontal carousels, and click in to see the film details. The other product, a promotional one-page website advertising the streaming service.</Copy>
            <Copy color="var(--black)">In action, some components are stronger than others. The button and hero components certainly stick out as prominent inclusions to the overall design. In other parts of the design, it was difficult to avoid large spaces of monotony, like in the streaming service product. Other design elements would aid in breaking up open flat spaces.</Copy>
            <Copy color="var(--black)">Overall, I think it was an interesting attempt at modernizing the Blockbuster brand. Unfortunately, more time would have to be spent revitalizing the design to enable the component system to quickly produce professional-quality products.</Copy>
            <VertSpace size={2} />
        </Wrapper>
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
