import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, View, Image, ScrollView} from 'react-native';
import styles from './HomePage.styles';

function HomePage(props) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const response = await fetch(
        'https://api.themoviedb.org/3/movie/popular?api_key=03167443dc5aa7cb549d343e530664cd',
      );
      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {movies.map(movie => (
          <View style={styles.movieContainer} key={movie.id}>
            <Image
              style={styles.posterImage}
              source={{
                uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
              }}
            />
            <Text style={styles.titleText}>{movie.title}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomePage;
