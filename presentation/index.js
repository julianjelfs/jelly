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
    Fit,
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

import Batman from "./Batman"
import Pokedog from "./pokedog"

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
    elephant: require("../assets/elephant.jpg"),
    city: require("../assets/city.jpg"),
    kat: require("../assets/kat.png"),
    logo: require("../assets/formidable-logo.svg"),
    markdown: require("../assets/markdown.png"),
    angular: require("../assets/angular-hero.png"),
    trlogo: require("../assets/tr.svg"),
    dnatalogo: require("../assets/dnata.svg"),
    emirateslogo: require("../assets/emirates.png"),
    multi: require("../assets/multi.png"),
    thisisfine: require("../assets/thisisfine.gif"),
    beach1: require("../assets/beach1.jpg"),
    palm: require("../assets/palm.jpg"),
    castle: require("../assets/castle.jpg"),
    sunset: require("../assets/sunset.jpg"),
    poo: require("../assets/poo.png"),
    reaper: require("../assets/reaper.jpg"),
    down: require("../assets/down.png"),
    sunset2: require("../assets/sunset2.jpg"),
    feldman: require("../assets/feldman.jpg"),
    pokemon: {
        jynx: require('../assets/jynx.jpg'),
        gyrados: require('../assets/gyarados.jpg'),
        charizard: require('../assets/charizard.jpg'),
    },
    dogs : {
        dog1: require('../assets/dog1.jpg'),
        dog2: require('../assets/dog2.jpg'),
        dog3: require('../assets/dog3.jpg')
    }
};

preloader(images);

const theme = createTheme({
    primary: "#ff7802",
    //secondary: "#005eb8",
    //tertiary: "#009dd9"
}, {
    //primary: 'Courier New'
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
                        bgDarken={0.75}
                        bgImage={images.palm}
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
                           notes="This leant itself well to a SPA website talking directly to the microservice layer so that is what we built using the angular js which was all the rage and didn’t seem like a bad thing. And so we successfully released a new mobile site and we had modern tooling and modern build process and everything was reasonably simple and we were very productive. Wouldn’t it be nice if we could just serve the desktop site off this code base too. Mobile first baby. So it grew and grew and grew. Wouldn’t it be nice if we could also serve a responsive site for a very different brand off the same code base? And it grew and it grew and it grew. Wouldn't it be nice if we could support travel agents and sales staff too.">
                        <Heading size={2} caps fit textColor="primary" textFont="primary">
                            Then what?
                        </Heading>
                        <Text size={1} lineHeight={1} textColor="white">
                            Can you guess?
                        </Text>
                    </Slide>
{/*                    <Slide transition={["zoom", "fade"]}
                           bgColor="black"
                           bgDarken={0.75}
                           bgImage={images.castle}
                           notes="And so we successfully released a new mobile site and we had modern tooling and modern build process and everything was reasonably simple and we were very productive. Wouldn’t it be nice if we could just serve the desktop site off this code base too. Mobile first baby. So it grew and grew and grew. Wouldn’t it be nice if we could also serve a responsive site for a very different brand off the same code base? And it grew and it grew and it grew.">
                        <Heading size={1} caps lineHeight={1} textColor="primary">
                            This is fine ...
                        </Heading>
                        <div className="logos">
                            <div className="multi logo">
                                <Appear fid="1">
                                    <Image width="600px" src={images.multi}/>
                                </Appear>
                            </div>
                            <div className="tr-logo logo">
                                <Appear fid="2">
                                    <Image src={images.trlogo}/>
                                </Appear>
                            </div>
                            <div className="dnata-logo logo">
                                <Appear fid="3">
                                    <Image width="700px" src={images.dnatalogo} />
                                </Appear>
                            </div>
                            <div className="ekh-logo logo">
                                <Appear fid="4">
                                    <Image width="250px" src={images.emirateslogo} />
                                </Appear>
                            </div>
                            <div className="thisisfine logo">
                                <Appear fid="5">
                                    <Image width="800px" src={images.thisisfine} />
                                </Appear>
                            </div>
                        </div>
                    </Slide>*/}
                    <Slide transition={["slide"]} bgImage={images.beach1.replace("/", "")}
                           bgDarken={0.75}
                            notes="All running from the same code base.

This causes a number of problems which I’m happy to talk about but today I want to focus on just one aspect - javascript.

The end result is complexity and so what I really want to talk about it what we have learned about complexity and the tools and the languages that can make it worse and the tools and languages that can make it better.

So, just to be clear, I will be expressing some opinions here that you may not agree with. This is OK. Half of my team don’t even agree with me. I will also probably be exaggerating to make point and poking some fun to make a point. Nothing as successful and popular as the stack we are using is completely without merit - I’m just interested in ways to improve.   ">
                        <Heading size={1} caps fit textColor="primary">
                            Current Landscape
                        </Heading>
                        <Appear fid="1">
                            <Text size={1} textColor="tertiary">
                                Travel Republic +
                            </Text>
                        </Appear>
                        <Appear fid="2">
                            <Text size={1} textColor="tertiary">
                                Travel Republic Mobile +
                            </Text>
                        </Appear>
                        <Appear fid="3">
                            <Text size={1} textColor="tertiary">
                                dnata Travel +
                            </Text>
                        </Appear>
                        <Appear fid="4">
                            <Text size={1} textColor="tertiary">
                                dnata Travel Mobile +
                            </Text>
                        </Appear>
                        <Appear fid="5">
                            <Text size={1} textColor="tertiary">
                                dnata Agents +
                            </Text>
                        </Appear>
                        <Appear fid="6">
                            <Text size={1} textColor="tertiary">
                                dnata Staff Travel +
                            </Text>
                        </Appear>
                        <Appear fid="7">
                            <Text size={1} textColor="tertiary">
                                Emirates Holidays (Responsive) +
                            </Text>
                        </Appear>
                        <Appear fid="8">
                            <Text size={1} textColor="tertiary">
                                Emirates Agents (Responsive) =
                            </Text>
                        </Appear>
                        <Appear fid="9">
                            <Heading size={1} caps fit textColor="primary">
                                Complexity
                            </Heading>
                        </Appear>
                    </Slide>
                    <Slide transition={["slide"]} bgImage={images.castle.replace("/", "")}
                           bgDarken={0.75}
                           notes="This is a question that I sometimes ask people in interviews. It tells me whether they are learners (and also whether they can handle weird questions). I like to work with learners. Learners will be prepared to change their opinions on things and they will evolve and they will naturally have an answer to this question. Do you have any answers? I have a few. ">
                        <BlockQuote>
                            <Quote>Tell me something that you used to fervently believe that you now think is nonsense</Quote>
                            <Cite>Me: sometimes in interviews</Cite>
                        </BlockQuote>
                    </Slide>
                    <Slide transition={["zoom", "fade"]}
                           notes="You might detect a pattern here. You might be sensing that I have some reservations about javascript and some reservations about angular. So this is the negative section of the talk where we bitch about things for a while, but I promise we will bring it back and then we will all be happy. Unless you are already happy in which case I am going to make you sad.  Let’s talk about the language, then let’s talk about angular a bit and then let’s see if there’s anything we can do about it"
                           bgColor="primary">
                        <Heading caps fit>I have some answers ...</Heading>
                        <List>
                            <Appear fid="1">
                                <ListItem>
                                    <Text size={1} textColor="black">
                                        Javascript is a great programming language
                                    </Text>
                                </ListItem>
                            </Appear>
                            <Appear fid="2">
                                <ListItem>
                                    <Text size={1} textColor="black">
                                        Angular 1 is a great web dev framework
                                    </Text>
                                </ListItem>
                            </Appear>
                            <Appear fid="3">
                                <ListItem>
                                    <Text size={1} textColor="black">
                                        Angular 1 is an ok web dev framework
                                    </Text>
                                </ListItem>
                            </Appear>
                            <Appear fid="4">
                                <ListItem>
                                    <Text size={1} textColor="black">
                                        OOP is the best way to handle complexity
                                    </Text>
                                </ListItem>
                            </Appear>
                            <Appear fid="5">
                                <ListItem>
                                    <Text size={1} textColor="black">
                                        People who say "isomorphic" are smarter than me
                                    </Text>
                                </ListItem>
                            </Appear>
                            <Appear fid="6">
                                <ListItem>
                                    <Text size={1} textColor="black">
                                        People who say "functor" are full of <img width="40px" src={images.poo} />
                                    </Text>
                                </ListItem>
                            </Appear>
                        </List>
                    </Slide>
                    <Slide transition={["slide"]}
                           notes="Has anyone seen the talk WAT? By Gary Bernhart? It's a really entertaining talk and this is one of many punchlines. But also this is really not so funny. Javascript has all these funny idiosyncrasies that we all know and laugh about. But that might be called a mistake in execution, the question is, is it a fundamentally bad language."
                           bgColor="black">
                        <Batman />
                    </Slide>
                    <Slide transition={["zoom", "fade"]}
                           notes="These are the four horsemen of the javascript apocalypse"
                           bgImage={images.reaper.replace("/", "")}
                           bgDarken={0.5} >
                        <Heading caps fit>The four horsemen</Heading>
                        <Layout>
                            <Fill>
                                <Heading size={4} caps textColor="white" bgColor="primary" padding={30} margin={20}>
                                    Nullable
                                </Heading>
                            </Fill>
                            <Fill>
                                <Heading size={4} caps textColor="white" bgColor="primary" padding={30} margin={20}>
                                    Mutable
                                </Heading>
                            </Fill>
                        </Layout>
                        <Layout>
                            <Fill>
                                <Heading size={4} caps textColor="white" bgColor="primary" padding={30} margin={20}>
                                    Dynamic
                                </Heading>
                            </Fill>
                            <Fill>
                                <Heading size={4} caps textColor="white" bgColor="primary" padding={30} margin={20}>
                                    Side-effect-y
                                </Heading>
                            </Fill>
                        </Layout>
                    </Slide>
                    <Slide transition={["slide"]}
                           notes=""
                           bgColor="primary">
                        <Heading caps fit size={1} textColor="white">
                            no comment ...
                        </Heading>
                        <CodePane source={require('raw!../assets/badfunction')} lang="javascript" textSize={25} />
                    </Slide>
                    <Slide transition={["none"]}
                           notes="So there are such a lot of questions here. You might just say that this is simply bad code, and it is.
                           But so much of this is simply down to the language itself. Everything is nullable but we have no way
                           to handle it. If you put null checks everywhere that you should your code would be completely unreadable.
                           So we ommit them and settle for runtime errors instead. Nulls are so evil that Tony Hoare famously called
                           them his billion dollar mistake. That was 30 years ago - what’s the price tag now.

                            But it’s worse than that because not only is everything nullable, but also nothing is type checked.
                            So a property may not contain a value at all or it may contain a value that is the wrong type and
                            therefore does not behave the way you expect it to.

                            So what is the root of all evil? Is it money? Is it premature optimisation? I think it might be “this”.
                            So I’m not a huge OO fan and I’m pretty suspicious of “this” in any language these days
                            because `this` tends to mean side-effects.

                            But in JS the problem is particularly acute because we can never really be sure what `this` means.
                            Has it been intentionally or accidentally manipulated by `call` or `apply` or `bind`?
                            But even if we know exactly what `this` meant, it would still be evil. Why?"
                           bgColor="primary">
                        <CodePane source={require('raw!../assets/badfunctioncommented')} lang="javascript" textSize={25} />
                    </Slide>
                    <Slide transition={["slide"]}
                           bgImage={images.sunset2.replace("/", "")}
                           notes="It is a very common pattern in angular to server some data from a service to a controller or a directive and then have that data exposed to the view via a controller model. Because of the untyped nature of JS there are no contracts protecting these boundaries. Because of the dynamic nature of the language that data may be mutated by any component. Angular js will mutate the data by design using its two way data binding mechanism. This means that if two components are bound to the same data they will be interacting via mutation  in a way that is beyond the control of either component. Neither component explicitly asked to observe this data, to subscribe to changes in this data. In fact it is unclear what the canonical source of truth for this data now is.

By the time you notice you have this problem you are already in deep trouble. You might think, well I will just clone the data on the way out of the services but then you will discover that half of your components were probably relying on this invisible coupling that previously existed. It is difficult to escape that.

In addition to that we all know that angular achieves this magical binding by constantly watching everything all the time and this of course this can slow you down unless you manage it carefully. This is often described as Angular’s main problem but to me it is totally manageable and not nearly as serious as the data chaos problem"
                           bgDarken={0.75} >
                        <Heading caps fit size={1} textColor="primary">
                            How angular makes this worse
                        </Heading>
                        <div className="panel">
                            <Text padding={20}>
                                ngService (singleton)
                            </Text>
                            <Image src={images.down} width="50px"/>
                            <Layout>
                                <Fill>
                                    <Text padding={20}>
                                        ngController / ngDirective
                                    </Text>
                                    <Image src={images.down} width="50px"/>
                                    <Text padding={20}>
                                        two way data binding
                                    </Text>
                                </Fill>
                                <Fill>
                                    <Text padding={20}>
                                        ngController / ngDirective
                                    </Text>
                                    <Image src={images.down} width="50px"/>
                                    <Text padding={20}>
                                        two way data binding
                                    </Text>
                                </Fill>
                            </Layout>
                        </div>
                    </Slide>
                    <Slide transition={["zoom"]}
                           notes="
                            <ul>
                                <li>Linting - Good idea - this can catch a whole class of stupid errors and it is a no-brain good idea. Does it fix any of our big five problems? Not really. We have already done this and use eslint and tshint on the whole codebase all the time</li>
                                <li>Reviews - Very important. So we moved to a more strict pull request workflow. This is good but not without problems. PR fatigue is a real thing. Opportunity cost of reviewing. Reviewers need to be paid.</li>
                                <li>Unit tests - We have not far off 1000 js unit tests. They are far from a panacea. Tests are written in javascript and therefore have all the same problems as the code that they exercise. Unit testing is a skill and it will inform the design of your system. Trying to retrofit unit tests will leave you in mocking hell. All too easy to end up with unrealistic test data running through an incorrectly specified mock telling you everything is fine. </li>
                            </ul>
                            "
                           bgColor="primary">
                        <Heading caps fit size={1} textColor="black">
                            So what do we do?
                        </Heading>
                        <Appear fid="1">
                            <Heading caps size={4} padding={20} margin={20} bgColor="white" textColor="black">
                                Linting?
                            </Heading>
                        </Appear>
                        <Appear fid="2">
                            <Heading caps size={4} padding={20} margin={20} bgColor="white" textColor="black">
                                Code reviews?
                            </Heading>
                        </Appear>
                        <Appear fid="3">
                            <Heading caps size={4} padding={20} margin={20} bgColor="white" textColor="black">
                                Unit tests?
                            </Heading>
                        </Appear>
                        <Appear fid="4">
                            <Heading caps size={4} padding={20} margin={20} bgColor="white" textColor="black">
                                Typescript?
                            </Heading>
                        </Appear>
                    </Slide>
                    <Slide transition={["slide"]}
                           bgImage={images.castle.replace("/", "")}
                           bgDarken={0.75}
                           notes="This is a question that I sometimes ask people in interviews. It tells me whether they are learners (and also whether they can handle weird questions). I like to work with learners. Learners will be prepared to change their opinions on things and they will evolve and they will naturally have an answer to this question. Do you have any answers? I have a few. ">
                        <Layout>
                            <Fill>
                                <BlockQuote>
                                    <Quote>Testing is good, impossible is better</Quote>
                                    <Cite>Richard Feldman - NoRedInk</Cite>
                                </BlockQuote>
                            </Fill>
                            <Fit>
                                <Image src={images.feldman} width="300px" />
                            </Fit>
                        </Layout>
                    </Slide>
                    <Slide transition={["zoom"]}
                           bgImage={images.elephant.replace("/", "")}
                           bgDarken={0.5}
                           bgColor="black">
                        <Heading caps fit size={1} textColor="primary">
                            Use a better
                        </Heading>
                        <Heading caps fit size={1} textColor="white">
                            language!
                        </Heading>
                    </Slide>
                    <Slide transition={["zoom"]}
                           bgImage={images.sunset.replace("/", "")}
                           bgDarken={0.75}
                           bgColor="black">
                        <Pokedog pokemon={images.pokemon.charizard} dog={images.dogs.dog2} />
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
