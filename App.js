import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Tempo from './components/Tempo';
import Api from './components/Api';

export default function App() {
  const [depois, setDepois] = useState("");
  const [atuais, setAtuais] = useState("");
  const [dados, setDados] = useState("");
  const [cidade, setCidade] = useState("");

async function carregaDados(){
const response = await Api.get( `weather?array_limit=2&fields=only_results,temp,city_name,description,forecast,max,min,date&key=2972d2b0&city_name=${cidade},SP`)
setAtuais(response.data.forecast[0]);
setDepois(response.data.forecast[1]);
setDados(response.data)
}

return (
  <View style={styles.container}>
    <View>
        <Text style={styles.titulo}> Previsão do Tempo </Text>
    </View>
    <View>
        <TextInput placeholder= 'Digite sua Cidade'
        style={styles.input}
        onChangeText = {(value) => setCidade(value)}
        />
        </View>
      <View style={styles.bloco}>
        <TouchableOpacity style={styles.botao} onPress={carregaDados}>
          <Text style={styles.textoBotao}>Buscar</Text>
        </TouchableOpacity>
      </View>
  
  <View style={styles.bloco}>
      <Tempo atuais={atuais}
      depois={depois}
      dados={dados}/>
  </View>

  </View>
);
}

const styles = StyleSheet.create({
body: {
  backgroundColor: "#000000",
},

container: {
  flex: 1,
  paddingTop: '20%',
  backgroundColor: "#b5ccff",
},

titulo: {
  fontSize: 30,
  marginTop: 1,
  textAlign: 'center',
  fontWeight: 'bold',
  color: '#03243b'
},

label: {
  fontSize: 20,
  marginTop: 20,
  textAlign: 'center',
  fontWeight: 'bold',
  color: "#fff"
},

bloco: {
  marginTop: 30,
  alignItems: 'center',
  display: 'flex',
},

input: {
  borderBottomWidth: 2,
  borderColor: '03243b',
  width: '80%',
  marginLeft: '8%',
  marginTop: 30,
  fontSize: 20,
  color: '#000000'
},

botao: {
  width: '82%',
  backgroundColor: '#06609e',
  alignItems: 'center',
  justifyContent: 'center',
  width: 200,
  height: 35,
  borderRadius: 7,
},

textoBotao: {
  fontSize: 19,
  color: '#fff'
}
});