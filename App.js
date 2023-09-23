import React,{Component} from "react"
import bottomTabNavigator from "./components/bottomTabNavigator";
export default class App {
  render(){
  return (
    <bottomTabNavigator/>
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
