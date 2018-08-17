import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import List from './components/nationsList'

const client = new ApolloClient({
  uri: "https://eu1.prisma.sh/emanuele-a432ac/olympics/dev"
});

export default class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
      <View style={styles.container}>
        <List/>
      </View>
      </ApolloProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
