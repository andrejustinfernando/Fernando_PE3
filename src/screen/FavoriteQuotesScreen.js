import React, {useState,useEffect} from 'react';
import {StyleSheet, FlatList} from 'react-native';
import { firebase } from '../config/firebase';
import FaveQuoteCard from '../components/FaveQuoteCard';

const FavoriteQuotesScreen = () => {
    const [result, setResult] = useState('');
    useEffect(()=>{
        const { uid: userId } = firebase.auth().currentUser;
        const fetchResults = async () =>{
            const firestore = firebase.firestore();
            const data = await firestore.collection('users').doc(userId)
            .collection('faves').get();
            setResult(data.docs.map(response => ({...response.data()})));
        }
        fetchResults();
    }, [])
    return( 
        <FlatList
        data={result}
        renderItem={({ item }) => {
          return <FaveQuoteCard faves={item} />;
        }}
        keyExtractor={(faves) => faves.id}
      />

    )

};

const styles = StyleSheet.create({});

export default FavoriteQuotesScreen;