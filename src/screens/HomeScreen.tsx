import React, { useRef } from 'react';
import { View, Text, StyleSheet, DrawerLayoutAndroid, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HomeScreen = () => {
  const drawer = useRef<DrawerLayoutAndroid>(null);

  const navigationView = () => (
    <View style={[styles.container, styles.navigationContainer]}>
      <Text style={styles.paragraph}>I'm in the Drawer!</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <DrawerLayoutAndroid ref={drawer} drawerWidth={300} renderNavigationView={navigationView}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => drawer.current?.openDrawer()}>
            <Ionicons name="menu" size={30} color="#000" />
          </TouchableOpacity>
          <Text style={styles.headerText}>Home</Text>
        </View>
        <View style={styles.content}>
          <Text>Home Screen Content</Text>
        </View>
      </DrawerLayoutAndroid>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f8f8f8',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 16,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navigationContainer: {
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: 'center',
  },
});

export default HomeScreen;