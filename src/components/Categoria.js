import {TouchableOpacity, Text, StyleSheet} from 'react-native'
export default function Categoria({nome}) {
  return (
    <TouchableOpacity activeOpacity={0.5} style={style.categorias}>
      <Text style={style.title}>{nome}</Text>
    </TouchableOpacity>
  );
}

 const style = StyleSheet.create({
  categorias: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: '#BFDBFE',
    maxHeight: 36,
    borderRadius: 4,
    maxWidth: '100%',
  },
  title: {
    fontFamily: 'Roboto',
    fontSize: 14,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: '#2563EB',
  },

 })

 