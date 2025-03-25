import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Header from "../components/Header";
import { router } from "expo-router";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.banner}>
        <Image
          source={require("../../assets/techshop/mackbook.png")}
          style={styles.image}
        />
      </View>

      <Text style={styles.titulo}>Apple notebook MacBook Air</Text>
      <Text style={styles.textPreco}>R$ 8.999,00</Text>
      <Text style={styles.textDescricao}>
        Lorem ipsum dolor sit amet consectetur. Pulvinar in in velit ultrices
        dui integer tellus consequat. Risus donec ut scelerisque.
      </Text>

      <TouchableOpacity style={styles.botao}>
        <Text style={styles.textBotao}>Adicionar ao Carrinho</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botaoBack} onPress={() => router.back()}>
        <Text style={styles.textBotaoBack}>Adicionar ao Carrinho</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  banner: {
    marginHorizontal: 24,
    backgroundColor: "#DBEAFE",
    borderRadius: 8,
    marginTop: 24,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  image: {
    width: "100%",
    objectFit: "contain",
    height: 200,
  },
  titulo: {
    fontSize: 24,
    color: "#1e40AF",
    fontWeight: "bold",
    marginHorizontal: 24,
    marginTop: 32,
    marginBottom: 4,
  },
  textPreco: {
    color: "#2563EB",
    fontSize: 16,
    paddingHorizontal: 24,
    marginTop: 4,
    marginBottom: 4,
  },
  textDescricao: {
    color: "#1f2937",
    fontSize: 16,
    paddingHorizontal: 24,
    marginTop: 4,
    marginBottom: 4,
  },
  botao: {
    backgroundColor: "#2563EB",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    marginTop: 32,
    marginHorizontal: 24,
  },
  botaoBack: {
    backgroundColor: "#F3F4F6",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    marginTop: 12,
    marginBottom: 12,
    marginHorizontal: 24,
  },
  textBotao: {
    color: "#fff",
    fontSize: 16,
  },
  textBotaoBack: {
    color: "#9CA3AF",
    fontSize: 16,
  },
});
