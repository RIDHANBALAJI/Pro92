import React from 'react';
import { Text, SafeAreaView, StyleSheet,View } from 'react-native';



export default class Feed extends React.Component{
    render(){
  return (
    <View style={styles.container}>
        <Text>Feed</Text>
    </View>
  );
}
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },

});
