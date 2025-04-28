import { FlatList, StatusBar, StyleSheet, Text, View, TouchableOpacity  } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";


type CardCoffe = {
  id: string;
  title: string;
};

const DATA: CardCoffe[] = [
  {
    id:'coffe_1',
    title: 'Cafe 1'
  },
  {
    id:'coffe_2',
    title: 'Cafe 2'
  },
  {
    id:'coffe_3',
    title: 'Cafe 3'
  },
];


type ItemProps = {
  item: CardCoffe;
  onPress:() => void; //Levar a outra rota aqui, no caso ao card do cafe selecionado
  backgroundColor: string;
  textColor: string;
}

const Item = ({item, onPress, backgroundColor, textColor}: ItemProps) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
    <Text style={[styles.title, {color: textColor}]}>{item.title}</Text>
  </TouchableOpacity>
);


  
  const sabores = () => {
    const [selectedId, setSelectedId] = useState<string>();
  
    const renderItem = ({item}: {item: CardCoffe}) => {
      const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
      const color = item.id === selectedId ? 'white' : 'black';
  
      return (
        <Item
          item={item}
          onPress={() => setSelectedId(item.id)}
          backgroundColor={backgroundColor}
          textColor={color}
        />
      );
    };


    return (
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            extraData={selectedId}
          />
        </SafeAreaView>
      </SafeAreaProvider>
    );
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default sabores;