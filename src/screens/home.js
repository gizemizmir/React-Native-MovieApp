import React, {useEffect} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

import axios from 'axios';
import {ScrollView} from 'react-native-gesture-handler';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import {useDispatch, useSelector} from 'react-redux';

import MovieItem from '../components/MovieItem';
import {setMovies} from '../store';

const Home = () => {
  const theme = useSelector(state => state.theme.activeTheme);
  const movies = useSelector(state => state.movies.movieItems);
  const dispatch = useDispatch();

  // Searching according to the movie genre.
  const handleGetMovies = movieGenre => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieGenre}?api_key=aea92b0c171765ec9ae69fdf13f31a39&language=en-US&page=1`,
      )
      .then(response => {
        dispatch(setMovies({movies: response.data.results}));
      });
  };

  // Searching according to the top rated movie. For the default movie list on the home
  useEffect(() => {
    handleGetMovies('top_rated');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderMovieSeparatorItem = () => {
    return <View style={styles.separator} />;
  };

  const renderMovieItem = ({item}) => {
    return <MovieItem movie={item} />;
  };

  return (
    <View
      style={[styles.homeContainer, {backgroundColor: theme.backgroundColor}]}>
      <ScrollView
        style={styles.filterView}
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        <Pressable
          style={styles.filterButton}
          onPress={() => handleGetMovies('top_rated')}>
          <Text style={styles.filterText}>Top Rated</Text>
        </Pressable>
        <Pressable
          style={styles.filterButton}
          onPress={() => handleGetMovies('now_playing')}>
          <Text style={styles.filterText}>Latest</Text>
        </Pressable>
        <Pressable
          style={styles.filterButton}
          onPress={() => handleGetMovies('popular')}>
          <Text style={styles.filterText}>Popular</Text>
        </Pressable>
        <Pressable
          style={styles.filterButton}
          onPress={() => handleGetMovies('upcoming')}>
          <Text style={styles.filterText}>Upcoming</Text>
        </Pressable>
      </ScrollView>
      <FlatList
        data={movies}
        renderItem={renderMovieItem}
        keyExtractor={(item, index) => `movie-${item.id}`}
        ItemSeparatorComponent={renderMovieSeparatorItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    backgroundColor: '#FFF',
    height: '100%',
  },
  filterView: {
    paddingHorizontal: 10,
  },
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: '#ccc',
  },
  filterButton: {
    backgroundColor: '#ececec',
    margin: 10,
    borderRadius: 5,
  },
  filterText: {
    paddingHorizontal: 10,
    lineHeight: 35,
  },
});

export default Home;
