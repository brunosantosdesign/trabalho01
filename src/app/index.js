import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Categoria from "../components/Categoria";
import Produto from "../components/Produto";

const produtos = [
  {
    id: 1,
    image: require("../../assets/techshop/mackbook.png"),
    name: "Apple notebook MacBook Air",
    price: "R$ 8.999,00",
  },
  {
    id: 2,
    image: require("../../assets/techshop/mackbook.png"),
    name: "Apple notebook MacBook Air",
    price: "R$ 8.999,00",
  },
  {
    id: 3,
    image: require("../../assets/techshop/mackbook.png"),
    name: "Apple notebook MacBook Air",
    price: "R$ 8.999,00",
  },
  {
    id: 4,
    image: require("../../assets/techshop/mackbook.png"),
    name: "Apple notebook MacBook Air",
    price: "R$ 8.999,00",
  },
];

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header />

      <Banner />

      <Text style={styles.titulo}>Categorias</Text>
      <View
        style={{
          flexDirection: "row",
          gap: 8,
          marginHorizontal: 24,
        }}
      >
        <Categoria tipo="Informática" />
        <Categoria tipo="Video-Games" />
        <Categoria tipo="Celulares" />
      </View>

      <Text style={styles.titulo}>Mais vendidos</Text>
      <ScrollView>
        {produtos.map((produto) => (
          <Produto key={produto.id} {...produto} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  titulo: {
    fontSize: 24,
    color: "#172554",
    fontWeight: "bold",
    marginHorizontal: 24,
    marginTop: 32,
    marginBottom: 16,
  },
});
