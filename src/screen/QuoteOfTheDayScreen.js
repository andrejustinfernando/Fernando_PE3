import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { api } from '../apis/api';
const QuoteOfTheDayScreen = () => {
const [quote, setQuote] = useState('');
const [auth, setAuth] = useState('');
useEffect(() => {
    async function quote() {
        try {
            const response = api.get('/api/qotd').then((response) => {
                setQuote(response.data.quote.body);
                setAuth(response.data.quote.author);
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
    <Text style={{ fontSize: 30, }}>By: {auth}</Text>
    </View>);
};

const styles = StyleSheet.create({});

export default QuoteOfTheDayScreen;