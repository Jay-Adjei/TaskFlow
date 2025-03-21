import { useNavigation, NavigationProp } from '@react-navigation/native';
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { useState } from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

import { RootStackParamList } from './NavigationTypes';
import { auth } from 'lib/firebaseConfig';

const SignInScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [revealPassword, setRevealPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleReveal = () => {
    setRevealPassword((prev) => !prev);
  };
  const handleGoogleSignIn = async () => {
    console.log('Google sign in');
  };

  const signIn = async () => {
    const user = await signInWithEmailAndPassword(auth, email, password);
    try {
      if (user) {
        console.log('Successfully signed in:', user);
        alert('Sign in successful');
      }
    } catch (error:any) {
      console.log(error);
      alert('Sign in failed:' + error.message);
    }
    finally {
      setEmail('');
      setPassword('');
    }
  };
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
            <View className="test-wrap flex h-[50%] max-w-[55%] flex-col justify-center pl-5">
              <Text className="text-5xl font-bold leading-[50px] text-white">
                Hey, Welcome Back
              </Text>
            </View>
          </View>

          {/* White login panel occupies the bottom 60% */}
          <View className="absolute bottom-0 flex h-[60%] w-full items-center justify-center rounded-t-2xl bg-white p-8 shadow-2xl">
            <Text className="mb-4 text-2xl font-bold">Sign In</Text>
            <View className="flex flex-col items-center justify-center gap-6">
              <View className="flex min-w-full flex-col items-center justify-center gap-6">
                <View style={{ width: '100%', paddingHorizontal: 10 }}>
                  <TextInput
                    mode="outlined"
                    label="Email"
                    style={{ minWidth: '100%', height: 50 }} // Full width, fixed height
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                  />
                </View>

                <View style={{ width: '100%', paddingHorizontal: 10 }}>
                  <TextInput
                    mode="outlined"
                    label="Password"
                    secureTextEntry={!revealPassword}
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    right={
                      <TextInput.Icon
                        icon={revealPassword ? 'eye-off' : 'eye'}
                        onPress={handleReveal}
                        className="ml-3"
                      />
                    }
                    style={{ minWidth: '100%', height: 50 }} // Full width, fixed height
                  />
                </View>
              </View>
              <View style={styles.forgotPasswordContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
                  <Text className="text-blue-500">Forgot Password?</Text>
                </TouchableOpacity>
              </View>

              <Text
                className="min-w-full shadow-xl"
                style={styles.signUpButton}
                onPress={() => signIn()}>
                sign In
              </Text>
              <Text className="text-center text-gray-500">Or continue with</Text>
              <View style={styles.googleButton}>
                <Button
                  mode="outlined"
                  icon="google"
                  style={{ minWidth: '100%' }}
                  onPress={() => handleGoogleSignIn()}>
                  Google
                </Button>
              </View>
              <View className=" flex flex-row items-center justify-center gap-3">
                <Text>Don't have an account?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                  <Text className="text-blue-500">Sign Up</Text>
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
  forgotPasswordContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: 10,
  },
  googleButton: {
    width: '100%',
    paddingHorizontal: 10,
  },
});

export default SignInScreen;
