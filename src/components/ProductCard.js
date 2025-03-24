import {View, Text, Image, Button} from 'react-native'
export default function ProductCard({image, price, name}) {
  return (
    <View>
      <View>
        <Image source={require('../../assets/techshop/produto01.png')}/>
      </View>
      <View>
        <Text>{name}</Text>
        <Text>{price}</Text>
        <Button title='Comprar'/>
      </View>
    </View>
  );
}