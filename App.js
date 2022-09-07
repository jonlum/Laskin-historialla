import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Button, Alert, TextInput, Text, FlatList } from 'react-native';

export default function App() {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [result, setResult] = useState(0);
  const [data, setData] = useState([]);

  const add = () => {
    let result = parseInt(text1) + parseInt(text2);
    let text = text1 + " + " + text2 + " = " + result;
    setData([...data, { key: text }]);
    setText1('');
    setText2('');
    return result;

  };
  const sub = () => {
    let result = parseInt(text1) - parseInt(text2);
    let text = text1 + " - " + text2 + " = " + result;
    setData([...data, { key: text }]);
    setText1('');
    setText2('');
    return result;
  };

  return (
    <><View style={styles.container}>
      <View style={{ padding: 100, flex: 1 }} >
        <Text style={{ textAlignVertical: "center", textAlign: "center", }}>Result: {result}</Text>
        <TextInput style={styles.input} keyboardType='number-pad' onChangeText={text1 => setText1(text1)} value={text1} />
        <TextInput style={styles.input} keyboardType='number-pad' onChangeText={text2 => setText2(text2)} value={text2} />
        <Text style={{ textAlignVertical: "center", textAlign: "center", }}>History</Text>
        <FlatList data={data}
          renderItem={({ item }) => <Text style={{ textAlignVertical: "center", textAlign: "center", }}>{item.key}</Text>}
          keyExtractor={(item, index) => index.toString()}
        />
        <StatusBar style="auto" />
      </View>
      <View style={styles.container2}>
        <Button onPress={() => setResult(add)} title="+" />
        <Button onPress={() => setResult(sub)} title="-" />
        <StatusBar style="auto" />
      </View>

    </View></>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  container2: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    width: 250,
    height: 100
  },
  input: {
    width: 200,
    borderColor: 'gray',
    borderWidth: 1
  }
});
