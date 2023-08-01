import React,{Component} from "react";
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "./screens/Home";
import About from "./screens/About";
import Contact from "./screens/Contact";

const AppStack = createStackNavigator();



 class App extends Component {
    render(){
        return (
            <NavigationContainer>
               <AppStack.Navigator>
                   <AppStack.Screen name={"Home"} component={Home} />
                   <AppStack.Screen name={"Contact"} component={Contact} />
                   <AppStack.Screen name={"About"} component={About} />
               </AppStack.Navigator> 
           </NavigationContainer>
      
      );
    }
}


// Export our main component.
export default App;