import {View, Text, Image, Button, TouchableOpacity} from 'react-native'
export default function ProductCard({image, price, name}) {
  return (
    <View>
      <View>
        <Image source={require(image)}/>
      </View>
      <View>
        <Text>{name}</Text>
        <Text>{price}</Text>
        <Button title='Comprar'/>
      </View>
    </View>
  );
}