import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';

const App = () => {
  return (
    <>
      <ScrollView>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={require('./assets/img/bg.jpg')}
            style={styles.banner}
          />
        </View>
        <View style={styles.contenedor}>
          <Text style={styles.titulo}>Que hacer en parís</Text>

          <ScrollView horizontal>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={require('./assets/img/actividad1.jpg')}
                style={styles.ciudad}
              />
            </View>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={require('./assets/img/actividad2.jpg')}
                style={styles.ciudad}
              />
            </View>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={require('./assets/img/actividad3.jpg')}
                style={styles.ciudad}
              />
            </View>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={require('./assets/img/actividad4.jpg')}
                style={styles.ciudad}
              />
            </View>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={require('./assets/img/actividad5.jpg')}
                style={styles.ciudad}
              />
            </View>
          </ScrollView>

          <Text style={styles.titulo}>Los Mejores alojamientos</Text>
          <View>
            <View>
              <Image
                source={require('./assets/img/mejores1.jpg')}
                style={styles.mejores}
              />
            </View>
            <View>
              <Image
                source={require('./assets/img/mejores2.jpg')}
                style={styles.mejores}
              />
            </View>
            <View>
              <Image
                source={require('./assets/img/mejores3.jpg')}
                style={styles.mejores}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  banner: {
    height: 200,
    flex: 1,
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 24,
    marginVertical: 20,
  },
  contenedor: {
    marginHorizontal: 10,
  },
  ciudad: {
    width: 250,
    height: 300,
    marginRight: 10,
  },
  mejores: {
    width: '100%',
    height: 200,
    marginVertical: 5,
  },
});

export default App;
