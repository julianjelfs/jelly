// Import React
import React from "react";

// Import Spectacle Core tags
import {
    Appear,
    BlockQuote,
    Cite,
    CodePane,
    Deck,
    Fill,
    Heading,
    Image,
    Layout,
    Link,
    ListItem,
    List,
    Markdown,
    Quote,
    Slide,
    Spectacle,
    Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
    city: require("../assets/city.jpg"),
    kat: require("../assets/kat.png"),
    logo: require("../assets/formidable-logo.svg"),
    markdown: require("../assets/markdown.png"),
    angular: require("../assets/angular-hero.png")
};

preloader(images);

const theme = createTheme({
    primary: "#ff7802",
    //secondary: "#005eb8",
    //tertiary: "#009dd9"
}, {
    primary: 'Courier New'
});

export default class Presentation extends React.Component {
    render() {
        return (
            <Spectacle theme={theme}>
                <Deck progress="pacman" transition={["zoom", "slide"]} transitionDuration={500}>
                    <Slide
                        transition={["zoom"]}
                        bgColor="primary"
                        notes="My name is Julian Jelfs, I am the front end dev manager at Travel Republic which means that I take care of approving leave requests and stuff like that. I have been at TR for about three years which is roughly fifteen years in web developer years. I want to give a little glimpse into the challenges that we face on the front end which hopefully some people will empathise with and talk about some of things we have done to try to ease the pain and also some of the more extreme things we could do">
                        <Heading size={1} fit caps lineHeight={1} textColor="secondary">
                            Javascript is dead
                        </Heading>
                        <Heading size={1} fit caps>
                            Long live Javascript
                        </Heading>
                        <Text textSize="1.5em" bold>
                            Julian Jelfs
                        </Text>
                        <Text textSize="1em" bold>
                            front end dev manager @ Travel Republic
                        </Text>
                    </Slide>
                    <Slide
                        transition={["slide"]}
                        bgColor="black"
                        notes="So when I joined, we had something of a marvelous monolith on the front end in the form of a standard .net web forms site with the usual smattering of jQuery and another smattering of backbone, and a mobile site written using jQuery mobile. My task was to rewrite the mobile website. At this time the back end architecture was moving towards a microservice architecture since maintaining a proper separation of concerns and reasonable service boundaries is tough in a monolith and it is all too easy to end up with a kind of dependency spaghetti. ">
                        <Heading size={1} caps lineHeight={1} textColor="primary">
                            Where we were
                        </Heading>
                        <Appear fid="1">
                            <Text textColor="white">
                                Marvelous Monolith
                            </Text>
                        </Appear>
                        <Appear fid="2">
                            <Text textColor="white">
                                jQuery + Backbone
                            </Text>
                        </Appear>
                        <Appear fid="3">
                            <Text textColor="white">
                                Yes - some spaghetti
                            </Text>
                        </Appear>
                    </Slide>
                    <Slide bgDarken={0.6}
                           bgImage={images.angular}
                           transition={["slide"]}
                           bgColor="black"
                           notes="This leant itself well to a SPA website talking directly to the microservice layer so that is what we built using the angular js which was all the rage and didn’t seem like a bad thing. ">
                        <Heading size={2} caps fit textColor="primary" textFont="primary">
                            Then what?
                        </Heading>
                        <Text size={1} lineHeight={1} textColor="white">
                            Can you guess?
                        </Text>
                    </Slide>
                    <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
                        <CodePane
                            lang="jsx"
                            source={require("raw!../assets/deck.example")}
                            margin="20px auto"
                        />
                    </Slide>
                    <Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
                        <Appear fid="1">
                            <Heading size={1} caps fit textColor="primary">
                                Full Width
                            </Heading>
                        </Appear>
                        <Appear fid="2">
                            <Heading size={1} caps fit textColor="tertiary">
                                Adjustable Darkness
                            </Heading>
                        </Appear>
                        <Appear fid="3">
                            <Heading size={1} caps fit textColor="primary">
                                Background Imagery
                            </Heading>
                        </Appear>
                    </Slide>
                    <Slide transition={["zoom", "fade"]} bgColor="primary">
                        <Heading caps fit>Flexible Layouts</Heading>
                        <Layout>
                            <Fill>
                                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                                    Left
                                </Heading>
                            </Fill>
                            <Fill>
                                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                                    Right
                                </Heading>
                            </Fill>
                        </Layout>
                    </Slide>
                    <Slide transition={["slide"]} bgColor="black">
                        <BlockQuote>
                            <Quote>Wonderfully formatted quotes</Quote>
                            <Cite>Ken Wheeler</Cite>
                        </BlockQuote>
                    </Slide>
                    <Slide transition={["spin", "zoom"]} bgColor="tertiary">
                        <Heading caps fit size={1} textColor="primary">
                            Inline Markdown
                        </Heading>
                        <Markdown>
                            {`
![Markdown Logo](${images.markdown.replace("/", "")})

You can write inline images, [Markdown Links](http://commonmark.org), paragraph text and most other markdown syntax
* Lists too!
* With ~~strikethrough~~ and _italic_
* And lets not forget **bold**
              `}
                        </Markdown>
                    </Slide>
                    <Slide transition={["slide", "spin"]} bgColor="primary">
                        <Heading caps fit size={1} textColor="tertiary">
                            Smooth
                        </Heading>
                        <Heading caps fit size={1} textColor="secondary">
                            Combinable Transitions
                        </Heading>
                    </Slide>
                    <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
                        <List>
                            <Appear><ListItem>Inline style based theme system</ListItem></Appear>
                            <Appear><ListItem>Autofit text</ListItem></Appear>
                            <Appear><ListItem>Flexbox layout system</ListItem></Appear>
                            <Appear><ListItem>React-Router navigation</ListItem></Appear>
                            <Appear><ListItem>PDF export</ListItem></Appear>
                            <Appear><ListItem>And...</ListItem></Appear>
                        </List>
                    </Slide>
                    <Slide transition={["slide"]} bgColor="primary">
                        <Heading size={1} caps fit textColor="tertiary">
                            Your presentations are interactive
                        </Heading>
                        <Interactive/>
                    </Slide>
                    <Slide transition={["spin", "slide"]} bgColor="tertiary">
                        <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
                            Made with love in Seattle by
                        </Heading>
                        <Link href="http://www.formidablelabs.com"><Image width="100%" src={images.logo}/></Link>
                    </Slide>
                </Deck>
            </Spectacle>
        );
    }
}
