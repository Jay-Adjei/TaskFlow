import { useNavigation, NavigationProp } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RootStackParamList } from './NavigationTypes';

const UnloadingScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('AuthenticationOptions');
    }, 10000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View className="flex">
        <Text style={styles.text} className="typewritter whitespace-nowrap">
          Taskflow
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginInline: 'auto',
    borderRightWidth: 1,
    borderRightColor: '#000',
  },
});

export default UnloadingScreen;
