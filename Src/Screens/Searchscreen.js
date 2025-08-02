import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, FlatList, ActivityIndicator, RefreshControl } from 'react-native';
import React, { useState, useEffect } from 'react';

const Searchscreen = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(false); // State to track loading
  const [refreshing, setRefreshing] = useState(false); // State for pull-to-refresh

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true); // Start loading
    try {
      const response = await fetch('https://freetestapi.com/api/v1/destinations');
      const result = await response.json();
      const formattedData = result.map((item, index) => ({
        id: index.toString(),
        image: item.image,
        title: item.title,
        name: item.name,
        continent: item.continent,
        description: item.description,
      }));
      setData(formattedData);
      setFilteredData(formattedData);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false); // Stop loading when fetch is complete
    }
  };

  const handleSearch = (text) => {
    setSearchText(text);
    if (text === '') {
      setFilteredData(data); // If no search text, show all data
    } else {
      const filtered = data.filter(
        (item) =>
          item.name.toLowerCase().includes(text.toLowerCase())     // Search by name
      );
      setFilteredData(filtered);
    }
  };

  const onRefresh = async () => {
    setRefreshing(true); // Start refreshing
    await fetchData(); // Refetch data
    setRefreshing(false); // Stop refreshing
  };

  const Item = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate('SearchDetailsScreen', { item })}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={{ color: "#000" }}>{item.continent}</Text>
        <Text>
          {item.description.length > 20 ? item.description.slice(0, 20) + "..." : item.description}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
    <Text style={{fontSize:30,fontWeight:'bold',color:'#ff6347',marginBottom:10}}>
      Jet<Text style={{color:'black'}}>Journey</Text>
    </Text>
      <TextInput
        style={styles.searchBar}
        placeholder="Search by Title or Name..."
        value={searchText}
        onChangeText={handleSearch} // Trigger search when text changes
      />

      {loading ? (
        // Show ActivityIndicator when data is loading
        <ActivityIndicator size="large" color="#0066FF" style={styles.loadingIndicator} />
      ) : filteredData.length > 0 ? (
        <FlatList
          data={filteredData}
          numColumns={2}
          renderItem={({ item }) => <Item item={item} />}
          keyExtractor={(item) => item.id}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      ) : (
        <Text>No results found</Text>
      )}
    </View>
  );
};

export default Searchscreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8E8E8',
    padding: 10,
  },
  searchBar: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    paddingHorizontal: 20,
    margin: 5,
  },
  item: {
    marginVertical: 10,
    marginHorizontal: 10,
    alignItems: 'center',
    borderRadius: 30,
  },
  title: {
    fontSize: 15,
    color: '#000',
    fontWeight: '500',
  },
  image: {
    width: 150,
    height: 200,
    borderRadius: 10,
  },
  
  loadingIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
});
