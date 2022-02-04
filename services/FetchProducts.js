import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { Button, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import GetProducts from '../components/GetProducts';

const client = new ApolloClient({
  uri: 'https://demo.saleor.io/graphql/',
  cache: new InMemoryCache(),
});


export default function FetchProducts() {
  return (
    <ApolloProvider client={client}>
      <View style={styles.container}>
        <StatusBar style='auto' />
        <View style={styles.header}>
          <SafeAreaView style={styles.container}>
            <Text style={{ color: '#fff', fontSize: 18 }}>
              ApnaKart
            </Text>
          </SafeAreaView>
        </View>
        <GetProducts />
      </View>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: 'green',
    width: '100%',
    height: 100,
  },
});