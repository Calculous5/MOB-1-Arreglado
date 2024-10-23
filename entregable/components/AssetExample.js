import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';

const AssetExample = ({ items }) => {
  return (
    <View style={styles.container}>
      <View style={styles.cardRow}>
        {items.map((item, index) => (
          <TouchableOpacity key={index} style={styles.card}>
            <Text style={styles.cardText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20, 
    marginHorizontal: 1,
  },
  cardRow: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    paddingHorizontal: 1, 
    marginTop: 10, 
  },
  card: {
    backgroundColor: '#ffeb3b', 
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginHorizontal: 5, 
    borderRadius: 20, 
    alignItems: 'center', 
  },
  cardText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default AssetExample;

