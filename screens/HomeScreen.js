import { View, Text, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', gap: 10 }}>
      <Text>Travel Guide</Text>
      <Button
        title="Go to Paris"
        onPress={() => navigation.navigate('Details', { place: 'Paris', rating: 5 })}
      />
      <Button
        title="Go to London"
        onPress={() => navigation.navigate('Details', { place: 'London', rating: 4 })}
      />
    </View>
  );
}
