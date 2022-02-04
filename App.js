import React from 'react';
import { StyleSheet, View, SafeAreaView, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ProductsList } from './screens/ProductsList.js';
import { ProductDetails } from './screens/ProductDetails.js';
import { Cart } from './screens/Cart.js';
import { CartIcon } from './components/CartIcon.js';
import { CartProvider } from './components/CartContext.js';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <>
    <View style={styles.header}>
      <SafeAreaView style={styles.container}>
        <Text style={{ color: 'white', marginTop: 25, textAlign: 'center', fontSize: 25, fontWeight: 'bold', fontStyle: 'normal' }}>
          ApnaKart.com
        </Text>
      </SafeAreaView>
    </View>
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Products' component={ProductsList} 
          options={({ navigation }) => ({
            title: 'Products',
            headerTitleStyle: styles.headerTitle,
            headerRight: () => <CartIcon navigation={navigation}/>
          })}/>
          <Stack.Screen name='ProductDetails' component={ProductDetails} 
          options={({ navigation }) => ({
            title: 'Product details',
            headerTitleStyle: styles.headerTitle,
            headerRight: () => <CartIcon navigation={navigation}/>,
          })} />
          <Stack.Screen name='Cart' component={Cart} 
          options={({ navigation }) => ({
            title: 'My cart',
            headerTitleStyle: styles.headerTitle,
            headerRight: () => <CartIcon navigation={navigation}/>,
          })} />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
    </>
  );
}

const styles = StyleSheet.create({
  headerTitle: {
    width: "100%",
    textAlign: "center",
    fontSize: 20,
    padding: 10,
    fontWeight: "bold",
    color: "#965656",
  },
  container: {
    flex: 1,
    alignItems: 'center',
    borderRadius: 10,
    width: '100%',
    height: 100,
    backgroundColor: 'orange',
    // marginb: 30,
    justifyContent: 'center',
  },
  header: {
    backgroundColor: 'white',
    width: '100%',
    height: 70,
  },
});

export default App;
