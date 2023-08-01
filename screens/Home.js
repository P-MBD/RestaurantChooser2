import React, {Component} from "react";
import {View, Text, StyleSheet,Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';
class Home extends Component{
render(){
    const { navigation } = this.props;
    return(
        <View>
            <Text>Home</Text>
            <Text>About</Text>   
            <Button
          title="go to about"
          onPress={() =>
            this.props.navigation.navigate('About')
          }/>
            <Text>Contact</Text>
        </View>
    );
}
}

export default Home;