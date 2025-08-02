import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, ActivityIndicator, RefreshControl } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Homescreen = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // State for loading
  const [refreshing, setRefreshing] = useState(false); // State for refreshing
  const navigation = useNavigation();

  const fetchData = async () => {
    try {
      setLoading(true); // Start loading
      const response = await fetch('https://freetestapi.com/api/v1/destinations');
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  const onRefresh = async () => {
    setRefreshing(true); // Start refreshing""~~"
    await fetchData();
    setRefreshing(false); // Stop refreshing
  };

  useEffect(() => {
    fetchData();
  }, []);

  const Item = ({ item }) => {
    if (!item) return null; // Handle undefined item gracefully

    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate('SearchDetailsScreen', { item })}
      >
        <Image
          source={{ uri: item.image || 'https://via.placeholder.com/170x250.png?text=No+Image' }}
          style={styles.image}
        />
        <Text style={styles.title}>{item.title || 'Untitled'}</Text>
        <Text style={styles.name}>{item.name || 'Unknown'}</Text>
        <Text style={{ color: '#000' }}>{item.continent || 'N/A'}</Text>
        <Text>
          {item.description?.length > 20
            ? item.description.slice(0, 20) + '...'
            : item.description || 'No description available'}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={styles.admin}>
          <Image source={require('../Assests/admin2.png')} style={styles.imgage1} />
          <Text style={{ fontSize: 13 }}>Mohsin</Text>
        </View>
        <View style={styles.bell}>
          <Image source={require('../Assests/bell.png')} style={styles.img2} />
        </View>
      </View>
      <Text style={styles.heading}>
        Explore the{'\n'}
        <Text style={{ color: 'black', fontWeight: '500' }}>Beautiful </Text>
        <Text style={{ color: '#FF6500', fontWeight: '500' }}>World!</Text>
      </Text>

      <View style={styles.link}>
        <TouchableOpacity onPress={() => navigation.navigate('Favoritescreen')}>
          <Text style={styles.linkheading}>Favorite Place</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('PopularPackege')}>
          <Text style={styles.linkheading}>Popular Packege</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.main}>
        <Text style={{ color: 'black', fontSize: 23, fontWeight: '500' }}>Best Destination</Text>
        <Text style={{ color: '#ff6347' }}>View all</Text>
      </View>

      {loading ? ( // Show ActivityIndicator while loading
        <ActivityIndicator size="large" color="#ff6347" style={styles.loader} />
      ) : (
        <FlatList
          data={data}
          horizontal
          renderItem={({ item }) => <Item item={item} />}
          keyExtractor={(item) => item.id.toString()}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      )}
    </View>
  );
};

export default Homescreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  admin: {
    flexDirection: 'row',
    marginVertical: 0,
    backgroundColor: '#d5d7db',
    borderWidth: 1,
    borderRadius: 40,
    borderColor: '#d5d7db',
    alignItems: 'center',
    padding: 0,
    width: 80,
    height: 30,
  },
  link: {
    flexDirection: 'row',
    marginBottom: 40,
    justifyContent: 'space-around',
  },
  linkheading: {
    color: '#ff6347',
    fontSize: 15,
    fontWeight: '600',
    backgroundColor: '#E3E3E3',
    borderRadius: 40,
    padding: 8,
  },
  bell: {
    borderColor: '#d5d7db',
    borderRadius: 40,
    width: 35,
    height: 35,
    backgroundColor: '#d5d7db',
    borderWidth: 1,
    marginVertical: 0,
    padding: 6,
  },
  imgage1: {
    width: 25,
    height: 25,
    borderRadius: 40,
    marginRight: 5,
  },
  img2: {
    width: 25,
    height: 25,
    alignSelf: 'center',
  },
  heading: {
    fontSize: 35,
    marginVertical: 40,
  },
  main: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  item: {
    padding: 10,
    marginVertical: 8,
    alignItems: 'center',
  },
  title: {
    fontSize: 15,
    marginTop: 5,
    color: 'black',
    fontWeight: '500',
    textAlign: 'center',
  },
  image: {
    width: 170,
    height: 250,
    borderRadius: 20,
  },
  loader: {
    marginVertical: 20, // Centering the loader
    alignSelf: 'center',
  },
});
