import { View, Text } from 'react-native';

export default function DetailsScreen({ route }) {
  const { place, rating } = route.params;

  const message =
    rating === 5
      ? `Welcome to ${place}!  Must-see destination!`
      : `Welcome to ${place}! Great place to visit.`;

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{message}</Text>
    </View>
  );
}
