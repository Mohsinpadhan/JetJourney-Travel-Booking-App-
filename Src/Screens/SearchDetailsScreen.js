import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const SearchDetailsScreen = ({ route,navigation }) => {
  const { item } = route.params; // Access passed data

  return (
    <View style={styles.container}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.continent}>{item.continent}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <TouchableOpacity onPress={()=>navigation.navigate('TicketBook')}>
        <View style={styles.btn}>
          <Text style={styles.btntext}>Book Now</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SearchDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f7f7f7', // Light background
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 15,
    marginBottom: 20,
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5, // Shadow for Android
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#1E293B', // Dark blue-gray
    textAlign: 'center',
  },
  name: {
    fontSize: 20,
    color: '#475569', // Gray-blue
    marginTop: 5,
    textAlign: 'center',
  },
  continent: {
    fontSize: 18,
    color: '#9CA3AF', // Light gray
    marginVertical: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#4B5563', // Gray
    marginTop: 20,
    fontStyle: 'italic',
    lineHeight: 22, // Better readability
    textAlign: 'justify',
  },
  btn: {
    width: '100%',
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    backgroundColor: '#FF6347', // Tomato
    shadowColor: '#FF6347', // Shadow matches button color
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },
  btntext: {
    fontSize: 20,
    color: '#FFF',
    fontWeight: 'bold',
    textTransform: 'uppercase', // Modern look
  },
});
