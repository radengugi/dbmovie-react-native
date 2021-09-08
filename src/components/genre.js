import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList } from "react-native";
import { Text } from 'react-native-elements';
import { API_KEY } from '../../helper';
import MovieCatalog from './detail';

function Genre() {
    const [genres, setGenres] = useState([]);
    const [listMovie, setListMovie] = useState({ results: [] });

    useEffect(() => {
        async function getGenres() {
            try {
                let res = await fetch(
                    `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`
                )
                let json = await res.json()
                setGenres(json.genres)
            } catch (error) {
                console.log(error)
            }
        }
        getGenres()
        console.log(genres)

        fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`)
            .then(res => res.json())
            .then(res => setListMovie(res))
            .catch(err => console.log(err))
    }, [])

    return (
        <View style={styles.body}>
            <Text h3 style={{ color: '#fff', marginBottom: (10) }}>Movies by Genre</Text>
            <FlatList
                data={genres}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.id}
                renderItem={({ item, index }) => <RenderItem item={item} />}
            />
            <View>
                <MovieCatalog title="List Movies" data={listMovie} />
            </View>
        </View>
    );

    function RenderItem({ item }) {
        return (
            <View style={styles.listGenre}>
                <Text style={{ color: '#000', fontWeight: 'bold' }}>{item.name}</Text>
            </View >
        )
    }
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#032541'
    },
    listGenre: {
        backgroundColor: '#F09631',
        alignSelf: 'flex-start',
        margin: 5,
        padding: 10,
        borderRadius: 5
    }
})

export default Genre;