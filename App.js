import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, ScrollView, Alert, StyleSheet, Text, Image, Touchable, TouchableOpacity} from 'react-native';
import Menu from '../trabalho01/src/components/Menu';
import ProductCard from '../trabalho01/src/components/ProductCard';
import Categoria from './src/components/Categoria';

const products = [
  {
    Image: './assets/techshop/produto01.png',
    name: 'Apple notebook MacBook Air',
    price: 'R$ 8.999,00',
  },
  {
    Image: './assets/techshop/produto01.png',
    name: 'Apple notebook MacBook Air',
    price: 'R$ 8.999,00',
  },
  {
    Image: './assets/techshop/produto01.png',
    name: 'Apple notebook MacBook Air',
    price: 'R$ 8.999,00',
  },
  {
    Image: './assets/techshop/produto01.png',
    name: 'Apple notebook MacBook Air',
    price: 'R$ 8.999,00',
  },
] 

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('./assets/techshop/TechShop-logo.png')} height={'24px'} width={'125px'}/>
      </View>

      <View style={styles.banner}>
        <Image source={require('./assets/techshop/banner.png')}/>
      </View>
      
      <StatusBar style="auto" />
      <Menu/>

      <Text style={styles.title}>Categorias</Text>
      <View style={{gap: 8, paddingLeft: 24, flexDirection: 'row'}}>
        <Categoria nome='Informática'/>
        <Categoria nome='Video-Games'/>
        <Categoria nome='Celulares'/>
        <Categoria nome='Televisores'/>
      </View>

      <ProductCard/>
      <Text style={styles.title}>Mais vendidos</Text>
      <ScrollView>
        {products.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            price={product.price}
            name={product.name}
           />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#ffffff',
  },
  header: {
    paddingTop: 40,
    paddingLeft: 24,
    paddingBottom: 40,
    backgroundColor: '#DBEAFE'
  },
  banner: {
    paddingTop: 24,
    MaxWidth: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    lineHeight: 32,
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 16,
    color: '#1E3A8A'
  },
});
