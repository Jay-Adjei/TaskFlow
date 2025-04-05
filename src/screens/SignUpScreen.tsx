import { useNavigation, NavigationProp } from '@react-navigation/native';
import { useState } from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RootStackParamList } from './NavigationTypes';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from 'lib/firebaseConfig';

const SignUpScreen = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signedIn, setSignedIn] = useState(false);

  const signUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      if (user) {
        await updateProfile(user, {
          displayName: firstName,
        });
        console.log('Successfully signed up:', user);
        alert('Sign up successful');
      }
    } catch (error: any) {
      console.log(error);
      alert('Sign up failed: ' + error.message);
    } finally {
      setEmail('');
      setPassword('');
      setFirstName('');
      setLastName('');
    }
  };

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}>
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, justifyContent: 'flex-end' }}
          className="flex flex-col">
          {/* "Hi, there" text positioned outside the white panel */}
          <View
            className="mb-10 h-full w-full"
            style={{
              backgroundColor: '#2563EB',
            }}>
            <View className="flex h-[50%] flex-col justify-center pl-5">
              <Text className="text-4xl font-bold text-white">Hi there</Text>
              <Text className="text-xl font-semibold text-white">Welcome to this app</Text>
            </View>
          </View>

          {/* White login panel occupies the bottom 60% */}
          <View className="absolute bottom-0 h-[70%] w-full rounded-tl-[100%] bg-white p-8">
            <Text className="mb-4 text-2xl font-bold">Sign Up</Text>
            <View className="flex flex-col items-center justify-center gap-6">
              <TextInput
                placeholder="First Name"
                className="w-full rounded-lg border-2 border-gray-300 p-4"
                onChangeText={(text) => setFirstName(text)}
                value={firstName}
              />
              <TextInput
                placeholder="Last Name"
                className="w-full rounded-lg border-2 border-gray-300 p-4"
                onChangeText={(text) => setLastName(text)}
                value={lastName}
              />
              <TextInput
                placeholder="Enter Email"
                className="w-full rounded-lg border-2 border-gray-300 p-4"
                onChangeText={(text) => setEmail(text)}
                value={email}
              />
              <TextInput
                secureTextEntry
                placeholder="Enter Password"
                className="w-full rounded-lg border-2 border-gray-300 p-4"
                onChangeText={(text) => setPassword(text)}
                value={password}
              />
              <Text style={styles.signUpButton} onPress={() => signUp()}>
                Sign Up
              </Text>
              <View className="flex flex-row items-center justify-center gap-3">
                <Text>Already have an account?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                  <Text className="text-blue-500">Sign In</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  signUpButton: {
    width: '100%',
    textAlign: 'center',
    paddingVertical: 15,
    backgroundColor: '#2563EB', // Tailwind "blue-600"
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    borderRadius: 12,
  },
});

export default SignUpScreen;
