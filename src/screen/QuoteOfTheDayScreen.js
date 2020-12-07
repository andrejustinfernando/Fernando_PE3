import React, {useState, useEffect} from 'react';
import { View, StyleSheet, Text, Button} from 'react-native';
import { api } from '../apis/api';
import {firebase} from '../config/firebase';

const QuoteOfTheDayScreen = () => {
    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');
    const [tags, setTags] = useState('');
    const firestore = firebase.firestore;
    const faveQuote = (quote, author, tags) => {
    const { uid: userId } = firebase.auth().currentUser;
    firestore()
    .collection('users')
    .doc(userId)
    .collection('faves')
    .add({
      quote,
      author,
      tags,
      userId,
    });
  };
  
  


useEffect(() => {
    async function quote() {
        try {
            const response = api.get('/api/qotd').then((response) => {
                setQuote(response.data.quote.body);
                setAuthor(response.data.quote.author);
                setTags(response.data.quote.tags);
                console.log(response.data.quote.tags);
            });
        } catch (err) {
            console.log(err);
        }
    }

    quote();
}, []);
    return (
    <View style={{ alignItems: "center", padding: 40 }}>
    <Text style={{ fontSize: 30, justifyContent:"center" }}>{quote}</Text>
    <Text></Text>
    <Text style={{ fontSize: 30, }}>By: {author}</Text>
    <Text style={{ fontSize: 30, }}>Tags: {tags}</Text>
    
    <Button title="Add to Favorites" onPress={() => {faveQuote(quote, author, tags)}}
          />

    </View>);
};

const styles = StyleSheet.create({});

export default QuoteOfTheDayScreen;