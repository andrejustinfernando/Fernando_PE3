import React from 'react';
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';

const FaveQuoteCard = ({ faves }) => {
  const {quote, author, tags} = faves;
  return (
 <View style={styles.cardCon}>
    <Text style={styles.quote}>{quote}</Text>
    <Text style={styles.author}>-{author}</Text>
    <Text style={styles.tags}>Tags:{tags}</Text>
</View>

  );
};
const styles = StyleSheet.create({
  quote: {
    fontSize: 18,
    paddingLeft: 15,
 
  },
  author:{
    paddingLeft: 15,
  },
  tags:{
    paddingLeft: 15,
  },
  cardCon: {
      margin: 5,
      borderWidth: 2
  }
});

export default FaveQuoteCard;
