import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import styles from './MovieItem.style';

const MovieItem = ({movie}) => {
  const {navigate} = useNavigation();
  return (
    <Pressable onPress={() => navigate('MovieDetails', {movieDetails: movie})}>
      <View style={styles.movieItem}>
        <Image
          style={styles.movieImage}
          source={{uri: `https://image.tmdb.org/t/p/w200${movie.poster_path}`}}
        />
        <View style={styles.movieDetails}>
          <Text style={styles.movieName}>{movie.title}</Text>
          <Text style={styles.movieDescription} numberOfLines={3}>
            {movie.overview}
          </Text>
          <Text style={styles.movieRating}>{movie.vote_average}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default MovieItem;
