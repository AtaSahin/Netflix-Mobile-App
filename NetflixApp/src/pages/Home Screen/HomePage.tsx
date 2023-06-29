import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Linking,
  ScrollView,
  TextInput,
} from 'react-native';
import styles from './HomePage.styles';
import BannerFilm from '../../assets/BannerFilm';

function HomePage(props) {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

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
      <TextInput
        style={styles.searchBar}
        placeholder="Search for a film"
        placeholderTextColor={'grey'}
        value={searchQuery}
        onChangeText={text => setSearchQuery(text)}
      />

      <ScrollView>
        <BannerFilm></BannerFilm>
        <View style={styles.filmContainer}>
          <ScrollView horizontal>
            <View style={{flexDirection: 'row'}}>
              {movies.slice(0, 4).map(movie => (
                <View style={styles.movieContainer} key={movie.id}>
                  <Image
                    style={styles.PreviewposterImage}
                    source={{
                      uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
                    }}
                  />
                </View>
              ))}
            </View>
          </ScrollView>
          <ScrollView horizontal>
            <View style={{flexDirection: 'row'}}>
              {movies.slice(4, 8).map(movie => (
                <View style={styles.movieContainer} key={movie.id}>
                  <Image
                    style={styles.posterImage}
                    source={{
                      uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
                    }}
                  />
                </View>
              ))}
            </View>
          </ScrollView>

          <ScrollView horizontal>
            <View style={{flexDirection: 'row'}}>
              {movies.slice(8, 12).map(movie => (
                <View style={styles.movieContainer} key={movie.id}>
                  <Image
                    style={styles.posterImage}
                    source={{
                      uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
                    }}
                  />
                </View>
              ))}
            </View>
          </ScrollView>

          <ScrollView horizontal>
            <View style={{flexDirection: 'row'}}>
              {movies.slice(12, 16).map(movie => (
                <View style={styles.movieContainer} key={movie.id}>
                  <Image
                    style={styles.posterImage}
                    source={{
                      uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
                    }}
                  />
                  {/*  <Text style={styles.titleText}>{movie.title}</Text>*/}
                </View>
              ))}
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomePage;
