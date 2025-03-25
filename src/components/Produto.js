import { router } from "expo-router";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function Produto({ image, name, price, id }) {
  return (
    <View style={styles.container}>
      <View style={styles.viewImage}>
        <Image style={styles.image} source={image} />
      </View>
      <View style={styles.viewInfo}>
        <Text numberOfLines={2} style={styles.textTitulo}>
          {name}
        </Text>
        <Text style={styles.textPreco}>{price}</Text>
        <TouchableOpacity style={styles.botao}>
          <Text
            style={styles.textBotao}
            onPress={() => router.push("/produto" + id)}
          >
            Comprar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 16,
    marginHorizontal: 24,
    marginBottom: 16,
    backgroundColor: "#93C5FD",
    borderRadius: 8,
  },
  viewImage: {
    width: 104,
    height: 160,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    backgroundColor: "#DBEAFE",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    width: 100,
    height: 100,
    objectFit: "contain",
  },
  viewInfo: {
    paddingTop: 16,
    gap: 8,
    width: 180,
  },
  textTitulo: {
    color: "#1E3A8A",
    fontSize: 16,
    fontWeight: "bold",
  },
  textPreco: {
    color: "#2563EB",
    fontSize: 16,
  },
  botao: {
    backgroundColor: "#2563EB",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    width: 100,
  },
  textBotao: {
    color: "#fff",
    fontSize: 16,
  },
});
