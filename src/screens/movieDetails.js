import React, {useEffect, useState} from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';

import {useNavigation, useRoute} from '@react-navigation/native';
import axios from 'axios';
import {ScrollView} from 'react-native-gesture-handler';

const MovieDetails = () => {
  const {
    params: {movieDetails},
  } = useRoute();
  const {setOptions} = useNavigation();
  setOptions({
    title: movieDetails.title,
  });

  const [movie, SetMovie] = useState([]);

  const handleGetMovie = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieDetails?.id}?api_key=aea92b0c171765ec9ae69fdf13f31a39&language=en-US&page=1`,
      )
      .then(response => {
        SetMovie(response.data);
      });
  };

  useEffect(() => {
    handleGetMovie();
    console.log(movie);
  }, []);

  const win = Dimensions.get('window');
  const ratio = win.width / 200;

  return (
    <ScrollView style={styles.movieDetails}>
      <Image
        style={{
          width: win.width,
          height: 300 * ratio,
        }}
        source={{
          uri: `https://image.tmdb.org/t/p/w300${movie?.poster_path}`,
        }}
      />
      <View style={styles.movieDescription}>
        <Text style={styles.textTitle}>{movie?.title}</Text>
        <Text style={styles.textTagline}>"{movie?.tagline}"</Text>
        <Text style={styles.text}>{movie?.overview}</Text>
        <Text style={styles.text}>
          <Text style={styles.textBold}>Realese Date: </Text>
          {movie?.release_date}
        </Text>
        <Text style={styles.text}>
          <Text style={styles.textBold}>Rating: </Text>
          {movie?.vote_average}
        </Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {movie?.genres?.map((genre, index) => (
            <Text style={styles.genreText} key={index}>
              {genre.name}
            </Text>
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  movieDetails: {
    height: '100%',
    backgroundColor: '#FFF',
  },
  movieDescription: {
    padding: 10,
    paddingBottom: 30,
  },
  textTitle: {
    width: '100%',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  textTagline: {
    width: '100%',
    textAlign: 'center',
    marginBottom: 10,
    fontStyle: 'italic',
  },
  text: {
    paddingVertical: 5,
  },
  textBold: {
    fontWeight: 'bold',
  },
  genreText: {
    padding: 10,
    backgroundColor: '#ececec',
    margin: 10,
    borderRadius: 5,
  },
});

export default MovieDetails;
