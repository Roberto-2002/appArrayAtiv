import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import React, {useState,useEffect, fontsLoaded} from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts, ZenDots_400Regular } from '@expo-google-fonts/zen-dots';



export default function App() {

    let [fontsLoaded] = useFonts({
      ZenDots_400Regular,
    });

    if (!fontsLoaded) {
      return <AppLoading />;
    }else{
  return (
    <View style={styles.container}>
      <StatusBar style='auto'/>
      <Text style={styles.titulo1}> Rede Social - Encontros do Senac</Text>
      <Text style={styles.titulo2}> Você tem um projeto Integrador?</Text>
      <Text style={styles.titulo2}> Quer envolver novas áreas?</Text>
      <Text style={styles.titulo2}> Então...Vamos encontrar os alunos aqui? ;)</Text>
      <FlatList
      data={pessoas}
      renderItem={({item})=>
    <View>
     <Text>{item.nome}</Text>
     <Text>{item.curso}</Text>
     <Text>{item.periodo}</Text>
     <Text>{item.bio}</Text>
     <Text>{item.gosto}</Text>
     <Image style={styles.img} source={item.img}/>
     <Text> style={styles.pessoas}</Text>
    
    </View>

    }
    />
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '##000000',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#7FFFD4',
    fontFamily: 'ZenDots_400Regular'
  },
  img: {
    width : 100,
    height: 150,
    borderRadius:150
  },
  titulo1:{
    marginTop: 40,
    marginVertical: 10,
    fontSize: 20,
    fontFamily:"ZenDots_400Regular"
  },
  titulo2:{
    marginVertical:10,
    fontSize:16,
    fontFamily:"ZenDots_400Regular"
  }
});

const pessoas = [
  {
    uid:159,
    nome:'Mucilon Mazzucato',
    curso: 'Técncico de informática',
    periodo:'Manhã',
    turma: 'TI10',
    gosto:'Hardware, Front-end, Redes,PHP',
    bio:'Gosto de tocar guitarra, tenho preguiça de trocar idéia com garotas, e fumar paiero',
    img:require('./assets/123Projeto.jpg'),
    fontFamily: 'ZenDots_400Regular'

  },
  {
    uid:420,
    nome:'Caio elias',
    curso:'Tecnico de informatica',
    periodo:'Manhã',
    turma:'TI10m',
    gosto:'Hardware,Banco de dados,C#',
    bio:'garoto de programa junior',
    img: require('./assets/shrekProjeto.png'),
    
  },
  {
    uid:158,
    nome:'homem aranha',
    curso:'escalada',
    periodo:'manhã',
    turma:'ti19',
    gosto:'subir parede',
    bio:'dormir, acordar, trabalhar, banho, e comer, dps tudo de novo',
    img: require('./assets/silvioProjeto.png'),
    
  },
  {
    uid:150,
    nome:'Adriano Silva',
    curso:'Técnico de Informática',
    periodo: 'Manhã',
    turma:'TI10',
    gosto:'Programação',
    bios: 'Engajando na empresa da Microsolft',
    img: require('./assets/DiegoProjeto.png'),
    
  },
  {
    uid:157,
    nome:'Galvez',
    curso:'Tecnico de informatica',
    periodo:'Manhã',
    turma:'TI10m',
    gosto:'C#',
    bio:'Narguile',
    img:require('./assets/Caua-RobertoProjeto.png'),
    
  }, 
  ];