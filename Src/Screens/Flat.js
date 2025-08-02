import { StyleSheet, Text, View, FlatList, StatusBar, Image } from 'react-native';
import React from 'react';

const DATA = [
  {
    id: '1',
    imageUrl: require('../Assests/Group1.png'), // Correct way to import local images
    title: 'First Item',
    name: 'Moshin',
    text: 'last'
  },
  {
    id: '2',
    title: 'Second Item',
    name: 'Devender',
    text: 'second',
    imageUrl: require('../Assests/Group1.png'), // Correct way to import local images
  },
  {
    id: '3',
    title: 'Third Item',
    name: 'Armaan Khan',
    text: 'third',
    imageUrl: require('../Assests/Group1.png'), // Correct way to import local images
  },
  {
    id: '4',
    title: 'Fourth Item',
    name: 'John Doe',
    text: 'fourth',
    imageUrl: require('../Assests/Group1.png'), // Correct way to import local images
  },
  {
    id: '5',
    title: 'Fifth Item',
    name: 'Jane Doe',
    text: 'fifth',
    imageUrl: require('../Assests/Group1.png'), // Correct way to import local images
  },
];

const Item = (item) => (
  <View style={styles.item}>
    <Image source={item.imageUrl} style={styles.image} />
    <Text style={styles.title}>{item.title}</Text>
    <Text style={styles.title}>{item.name}</Text>
    <Text style={styles.title}>{item.text}</Text>
  </View>
);

const Flat = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <Item
            title={item.title}
            name={item.name}
            text={item.text}
            imageUrl={item.imageUrl} // Pass imageUrl directly here
          />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Flat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    alignItems: 'center', // Center the content
  },
  title: {
    fontSize: 20,
    marginTop: 10,
  },
  image: {
    width: 100, // Set the width of the image
    height: 100, // Set the height of the image
    borderRadius: 50, // Optional: Makes the image circular
  },
});
