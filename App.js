import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Tempo from './components/Tempo';
import Api from './components/Api';

export default function App() {
  const [dados, setDados] = useState("");

async function carregaDados(){
const response = await Api.get( `weather?array_limit=2&fields=only_results,temp,city_name,description,forecast,max,min,date&key=2972d2b0&city_name=mongagua,SP`)}
setDados (response.data.forecast[0]);

    return (
    <View style={styles.container}>
        <View>
          <Text style={styles.titulo}> Previsão do Tempo </Text>
        </View>
        <View style={styles.bloco}>
          <Text style={styles.label}>Cidade: </Text>
          <TextInput
            placeholder='Digite aqui sua cidade'
            style={styles.input}
          />
        </View>
        <View style={styles.bloco}>
          <TouchableOpacity style={styles.botao} onPress={carregaDados}>
            <Text style={styles.textoBotao}> Buscar </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.bloco}>
              <Tempo data={dados}/>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titulo: {
    marginTop: 30,
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  label:{
    fontSize: 20,
  },
  bloco:{
    marginTop: 30,
    marginLeft: '20%',
  },
  input:{
    borderBottomWidth: 2,
    width:'80%',
    fontSize: 20,
  },
  botao:{
    width: '80%',
    backgroundColor: '#FDDDDE',
    alignItems: 'center',
    padding: '2%',
    borderRadius: 30
  },
  textoBotao:{
    fontSize: 20,
    color: '#00',
  },

});