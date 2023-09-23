import React,{Component} from "react"
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import TransactionScreen from "../screens/transaction";
import SearchScreen from "../screens/search";
const tab = createBottomTabNavigator()
export default class bottomTabNavigator extends Component{
    render(){
        return(
            <NavigationContainer>
                <tab.Navigator>
                    <tab.Screen name = "Transaction" component = {TransactionScreen}/>
                    <tab.Screen name = "Search" component = {SearchScreen}/>
                </tab.Navigator>
            </NavigationContainer>
        )
    }
}
const styles = StyleSheet.create({ 
    container: { flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#5653D4" },
    text: { color: "#ffff",
        fontSize: 30 } });