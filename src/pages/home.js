import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, TextInput, View } from 'react-native';
import { Text, Tab, TabView } from 'react-native-elements';
import HeaderComp from '../components/header';
import { API_KEY } from '../../helper';
import MovieCatalog from '../components/detail';

const HomePage = () => {
    const [popularMovie, setPopularMovie] = useState({ results: [] });
    const [trendingMovie, setTrendingMovie] = useState({ results: [] });
    const [topRatedMovie, setTopRatedMovie] = useState({ results: [] });
    const [upcomingMovie, setUpcomingMovie] = useState({ results: [] });
    const [search, setSearch] = useState('');
    const [searchDataMovie, setSearchDataMovie] = useState({ results: [] });
    const [loading, setLoading] = useState(false)

    function searchMovie(input) {
        if (input !== '') {
            fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${input}`)
                .then(res => res.json())
                .then(res => setSearchDataMovie(res))
                .then(setLoading(true))
                .catch(err => console.log(err))
        } else {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
            .then(res => res.json())
            .then(res => setPopularMovie(res))
            .catch(err => console.log(err))
        fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`)
            .then(res => res.json())
            .then(res => setTrendingMovie(res))
            .catch(err => console.log(err))
        fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`)
            .then(res => res.json())
            .then(res => setTopRatedMovie(res))
            .catch(err => console.log(err))
        fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`)
            .then(res => res.json())
            .then(res => setUpcomingMovie(res))
            .catch(err => console.log(err))
    }, [])

    return (
        <View style={styles.body}>
            <HeaderComp />
            {loading === false ? (
                <ScrollView>
                    <Text h3 style={{ color: '#fff', textAlign: 'center' }}>Find Your Favourite Movies</Text>
                    <TextInput
                        style={styles.searchBox}
                        autoCapitalize="none"
                        autoCorrect={false}
                        value={search}
                        onChangeText={input => {
                            setSearch(input)
                            searchMovie(input)
                        }}
                        placeholder="Search Movie ..."
                    />
                    <View>
                        <MovieCatalog title="Popular Movies" data={popularMovie} />
                        <MovieCatalog title="Trending Movies" data={trendingMovie} />
                        <MovieCatalog title="Top Rated Movies" data={topRatedMovie} />
                        <MovieCatalog title="Upcoming Movies" data={upcomingMovie} />
                    </View>
                </ScrollView>
            ) : (
                <View>
                    <Text h5 style={{ color: '#fff' }}>Search Result for {search}</Text>
                    <MovieCatalog title="" data={searchDataMovie} />
                </View>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#032541'
    },
    searchBox: {
        backgroundColor: '#fff',
        color: '#000',
        textAlign: 'center',
        fontSize: 18,
        margin: 10,
        borderRadius: 10,
        fontWeight: 'bold'
    }
})

export default HomePage;