import React, {useState} from 'react';
import {View, Text} from 'react-native';

import type {RootState} from '../../App/store';
import {useSelector, useDispatch} from 'react-redux';
import {addFav} from '../../App/features/counter/counterSlice';

function FavoritesPage(props) {
  const [movies, setMovies] = useState([]);
  const count = useSelector((state: RootState) => state.counter.favFilms);
  const dispatch = useDispatch();
  const favoriteMovies = movies.filter(movie => count.includes(movie.id));
  console.log('Movies in favFilms state:', count);
  return <View></View>;
}

export default FavoritesPage;
