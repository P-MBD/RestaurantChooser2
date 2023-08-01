import React, {Component} from "react";
import {View, Text, StyleSheet,Button } from 'react-native';

class About extends Component{
render(){
     // Get it from props
   
    return(
        <View>
            <Text>About Us</Text>
            <Button
          title="Back to home"/>
         
        </View>
    );
}

}
export default About;

// Wrap and export

