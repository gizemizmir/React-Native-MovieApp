import React, {useEffect, useState} from 'react';
import {
  Alert,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import axios from 'axios';
import IonIcons from 'react-native-vector-icons/dist/Ionicons';
import {useSelector} from 'react-redux';

import MovieItem from '../components/MovieItem';

const Search = () => {
  const [searchMovies, SetSearchMovies] = useState(null);
  const [searchText, SetSearchText] = useState(null);
  const theme = useSelector(state => state.theme.activeTheme);

  // Searching according to the entered text.
  const handleGetMovies = () => {
    SetSearchMovies(null);
    if (searchText !== '') {
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=aea92b0c171765ec9ae69fdf13f31a39&language=en-US&page=1&query=${searchText}`,
        )
        .then(response => {
          // Setting searched movies
          SetSearchMovies(response.data);
          SetSearchText('');
        });
    } else {
      // If the search input is empty, giving a alert
      Alert.alert('Alert', 'Type anything for search');
    }
  };

  const renderTweetSeparatorItem = ({item}) => {
    return <View style={styles.separator} />;
  };

  const renderMovieItem = ({item}) => {
    return <MovieItem movie={item} />;
  };

  useEffect(() => {
    console.log('searched');
  }, [searchMovies]);

  return (
    <View
      style={[
        styles.searchContainer,
        {backgroundColor: theme.backgroundColor},
      ]}>
      <View style={styles.bottomArea}>
        <TextInput
          style={[styles.input, {color: theme.color}]}
          placeholder="Search"
          placeholderTextColor={theme.color}
          clearButtonMode="always"
          value={searchText}
          onChangeText={text => {
            SetSearchText(text);
          }}
          onSubmitEditing={() => handleGetMovies()}
        />
        <Pressable onPress={() => handleGetMovies()}>
          <IonIcons
            style={styles.bottomAreaIcon}
            name="search"
            size={25}
            color="#2385E1"
          />
        </Pressable>
      </View>
      {searchMovies ? (
        searchMovies.total_results > 0 ? (
          <FlatList
            data={searchMovies.results}
            renderItem={renderMovieItem}
            keyExtractor={(item, index) => `movie-${item.id}`}
            ItemSeparatorComponent={renderTweetSeparatorItem}
          />
        ) : (
          <Text style={[styles.searchPageText, {color: theme.color}]}>
            Couldn't Find Any Movie
          </Text>
        )
      ) : (
        <Text style={[styles.searchPageText, {color: theme.color}]}>
          Search Movie
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    backgroundColor: '#FFF',
    height: '100%',
  },
  bottomArea: {
    height: 80,
    paddingLeft: 20,
    display: 'flex',
    flexDirection: 'row',
  },
  input: {
    margin: 15,
    marginLeft: 0,
    height: 30,
    width: '80%',
    borderColor: '#c4c4c4',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 5,
  },
  bottomAreaIcon: {
    marginTop: 15,
    marginLeft: 8,
  },
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: '#ccc',
  },
  searchPageText: {
    display: 'flex',
    alignSelf: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: '50%',
  },
});

export default Search;
