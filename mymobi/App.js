import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View, Button,Alert } from 'react-native';
import DisplayComponent from './component/DisplayComponent';

const url = "https://zomatoapi.onrender.com/restaurants"

function App() {

  const [title,updateTitle] = useState('Developer Funnel')
  const [rest,setRest] = useState('')

  useEffect(() => {
    fetch(url,{method: 'GET'})
    .then((res) => res.json())
    .then((data) => {
      setRest(data)
    })
  },[])

  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <Button title="Click Me" color="#f194ff"
      onPress={() => {updateTitle('Title After Click')}}/>
      <Button title="Revert Me" color="red"
      onPress={() => {updateTitle('Developer Funnel')}}/>
      <Button
        title="Press me"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
      <DisplayComponent restList={rest}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default  App;