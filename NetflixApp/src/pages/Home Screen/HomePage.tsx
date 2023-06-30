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
import type {RootState} from '../../App/store';
import {useSelector, useDispatch} from 'react-redux';
import {addFav} from '../../App/features/counter/counterSlice';
import Icon from 'react-native-vector-icons/FontAwesome';

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
  const count = useSelector((state: RootState) => state.counter.favFilms);
  const dispatch = useDispatch();
  console.log('Movies in favFilms state:', count);
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search for a film"
        placeholderTextColor={'grey'}
        value={searchQuery}
        onChangeText={text => setSearchQuery(text)}
      />

      <View></View>

      <ScrollView>
        <BannerFilm></BannerFilm>
        <View style={styles.filmContainer}>
          <ScrollView horizontal>
            <View style={{flexDirection: 'row'}}>
              {movies.slice(0, 4).map(movie => (
                <View style={styles.movieContainer} key={movie.id}>
                  <TouchableOpacity>
                    <Icon
                      onPress={() => {
                        const existingMovie = count.find(
                          film => film.id === movie.id,
                        );
                        if (!existingMovie) {
                          dispatch(addFav({id: movie.id, title: movie.title}));
                          console.log(`Added movie: ${movie.title}`);
                        }
                      }}
                      name={
                        count.some(film => film.id === movie.id)
                          ? 'shower'
                          : 'shower'
                      }
                      size={24}
                      color={
                        count.some(film => film.id === movie.id)
                          ? 'red'
                          : 'black'
                      }
                      style={styles.favoriteIcon}
                    />
                    <Image
                      style={styles.PreviewposterImage}
                      source={{
                        uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
                      }}
                    />
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          </ScrollView>
          <ScrollView horizontal>
            <View style={{flexDirection: 'row'}}>
              {movies.slice(4, 8).map(movie => (
                <View style={styles.movieContainer} key={movie.id}>
                  <TouchableOpacity>
                    <Icon
                      onPress={() => {
                        const existingMovie = count.find(
                          film => film.id === movie.id,
                        );
                        if (!existingMovie) {
                          dispatch(addFav({id: movie.id, title: movie.title}));
                          console.log(`Added movie: ${movie.title}`);
                        }
                      }}
                      name={
                        count.some(film => film.id === movie.id)
                          ? 'shower'
                          : 'shower'
                      }
                      size={24}
                      color={
                        count.some(film => film.id === movie.id)
                          ? 'red'
                          : 'black'
                      }
                      style={styles.favoriteIcon}
                    />
                    <Image
                      style={styles.posterImage}
                      source={{
                        uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
                      }}
                    />
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          </ScrollView>
          <ScrollView horizontal>
            <View style={{flexDirection: 'row'}}>
              {movies.slice(9, 13).map(movie => (
                <View style={styles.movieContainer} key={movie.id}>
                  <TouchableOpacity>
                    <Icon
                      onPress={() => {
                        const existingMovie = count.find(
                          film => film.id === movie.id,
                        );
                        if (!existingMovie) {
                          dispatch(addFav({id: movie.id, title: movie.title}));
                          console.log(`Added movie: ${movie.title}`);
                        }
                      }}
                      name={
                        count.some(film => film.id === movie.id)
                          ? 'shower'
                          : 'shower'
                      }
                      size={24}
                      color={
                        count.some(film => film.id === movie.id)
                          ? 'red'
                          : 'black'
                      }
                      style={styles.favoriteIcon}
                    />
                    <Image
                      style={styles.posterImage}
                      source={{
                        uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
                      }}
                    />
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          </ScrollView>
          <ScrollView horizontal>
            <View style={{flexDirection: 'row'}}>
              {movies.slice(14, 18).map(movie => (
                <View style={styles.movieContainer} key={movie.id}>
                  <TouchableOpacity>
                    <Icon
                      onPress={() => {
                        const existingMovie = count.find(
                          film => film.id === movie.id,
                        );
                        if (!existingMovie) {
                          dispatch(addFav({id: movie.id, title: movie.title}));
                          console.log(`Added movie: ${movie.title}`);
                        }
                      }}
                      name={
                        count.some(film => film.id === movie.id)
                          ? 'shower'
                          : 'shower'
                      }
                      size={24}
                      color={
                        count.some(film => film.id === movie.id)
                          ? 'red'
                          : 'black'
                      }
                      style={styles.favoriteIcon}
                    />
                    <Image
                      style={styles.posterImage}
                      source={{
                        uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
                      }}
                    />
                  </TouchableOpacity>
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
