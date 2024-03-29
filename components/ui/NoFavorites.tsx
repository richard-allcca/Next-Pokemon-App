import React from "react";

import { Container, Image, Text } from "@nextui-org/react";

export const NoFavorites = () => {
  return (
    <Container
      css={{
        display: "flex",
        flexDirection: "column",
        height: "calc(100vh - 100px)",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text h1> No hay favoritos</Text>
      <Image
        width={250}
        height={250}
        alt="Mew two"
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png"
        css={{
          opacity: 0.1,
        }}
      />
    </Container>
  );
};

// export default NoFavorites
