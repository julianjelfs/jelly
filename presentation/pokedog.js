import React from "react";

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

export default React.createClass({
    getInitialState() {
        return {
            clicks: 0,
            url: this.props.pokemon,
            dog: this.props.dog
        }
    },

    releaseTheHounds() {
        this.setState({url : this.props.dog});
    },

    increment(clicks) {
        this.releaseTheHounds();
        return clicks + 1;
    },

    onClick() {
        this.setState({clicks:this.increment(this.state.clicks)});
    },

    render() {
        return (
            <div>
                <Image src={this.state.url} width="300px" height="300px" />
                <Heading caps size={1} textColor="primary">
                    {this.state.clicks}
                </Heading>
                <button onClick={this.onClick}>Increment</button>
            </div>
        )
    }
})

