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
            showResult: false
        }
    },

    show() {
        this.setState({showResult:!this.state.showResult});
    },

    render() {
        return (
            <div className="batman">
                <Text textColor="white">@garybernhardt</Text>
                <Heading caps fit size={1} textColor="primary">
                    WAT?
                </Heading>
                {this.state.showResult
                    ? <CodePane size={4} lang="javascript" source="NaNNaNNaNNaNNaNNaNNaNNaNNaNNaNNaNNaNNaNNaNNaN Batman!" />
                    : <CodePane size={4} lang="javascript" source="Array(16).join('wat' - 1) + ' Batman!'" />}
                <button onClick={this.show}>Go on then ...</button>
            </div>
        )
    }
})
