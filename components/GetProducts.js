import {
    StyleSheet,
    Button,
    Text,
    View,
    SafeAreaView,
    FlatList,
    Image,
  } from "react-native";
  import { gql, useQuery } from "@apollo/client";
  
  import React from "react";
  
  const GET_PRODUCTS = gql`
    query getProducts {
      products(last: 10, channel: "default-channel") {
        edges {
          node {
            id
            name
            description
            thumbnail {
              url
            }
          }
        }
      }
    }
  `;
  
  export default function GetProducts({ onPress }) {
    const { loading, data } = useQuery(GET_PRODUCTS);
    // console.log({ data });
    return (
      <SafeAreaView style={styles.container}>
        {loading ? (
          <Text>Loading ...</Text>
        ) : (
          <FlatList
            data={data.products.edges}
            ListHeaderComponent={() => <Text style={styles.title}>Products</Text>}
            renderItem={({ item }) => (
              <View style={styles.product}>
                <Image
                  source={{ uri: item.node.thumbnail.url }}
                  style={{ height: 100, width: 100 }}
                />
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: "bold",
                  }}
                >
                  {item.node.name}
                </Text>
                <Text>₹200</Text>
                <View style={styles.bt}>
                  <Button
                    type="clear"
                    title="Buy now"
                    onPress={onPress}
                  />
                </View>
              </View>
            )}
            numColumns={2}
            keyExtractor={(item) => item.node.id}
          />
        )}
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: "100%",
    },
    title: {
      width: "100%",
      textAlign: "center",
      fontSize: 20,
      padding: 20,
      fontWeight: "bold",
      color: "#965656",
      // backgroundColor: 'grey'
    },
    product: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      padding: 20,
      // height: 175,
      borderWidth: 0.5,
      borderColor: "grey",
      borderRadius: 5,
      borderStyle: "dashed",
      // borderStyle:
      // backgroundColor: red'
    },
    bt: {},
  });