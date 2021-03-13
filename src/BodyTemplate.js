import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Options from "./Options";

const BodyTemplate = () => {
  return (
    <>
      <View style={styles.background}>
        <Options icon="money" size={28} iconColor="black" title="Matrículas" />
        <Options
          icon="address-book"
          size={28}
          iconColor="orange"
          title="Pagamentos"
        />
        <Options
          icon="bookmark"
          size={28}
          iconColor="#cccc00"
          title="Avaliações"
        />
        <Options icon="angellist" size={28} iconColor="red" title="Treinos" />
        <Options
          icon="hourglass-half"
          size={28}
          iconColor="orange"
          title="Frequência"
        />
        <Options
          icon="shopping-cart"
          size={28}
          iconColor="grey"
          title="Compras"
        />
        <Options
          icon="product-hunt"
          size={28}
          iconColor="orange"
          title="Produtos"
        />
        <Options icon="heartbeat" size={28} iconColor="green" title="Eventos" />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "lightgrey",
    bottom: 0,
    top: 0,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
  },
});

export default BodyTemplate;
