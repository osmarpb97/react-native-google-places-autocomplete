import { StyleSheet, Text, View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>
        This is an example of GooglePlacesAutocomplete, you can edit this on
        example/App.js
      </Text>
      <GooglePlacesAutocomplete
        placeholder='Search address'
        query={{
          key: 'your-api-key',
          language: 'en',
          components: 'country:us',
        }}
        listUnderlayColor='#F4F4F4'
        fetchDetails
        onPress={(_, details) => {
          console.log(details.address_components);
        }}
        requestUrl={{
          url: `${'your-proxy-url'}/google-autocomplete`,
          useOnPlatform: 'web',
          setDynamicHeaders: async (request) => {
            return new Promise((resolve) => {
              setTimeout(() => {
                resolve({
                  'content-type': 'application/jsonn',
                  'x-api-key': Math.random().toString(36),
                });
              }, 1000);
            });
          },
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
