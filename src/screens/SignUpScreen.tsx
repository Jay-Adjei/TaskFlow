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
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from './NavigationTypes';
import { SafeAreaView } from 'react-native-safe-area-context';

const SignUpScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#2563EB' }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'flex-end' }}>
          {/* "Hi, there" text positioned outside the white panel */}
          <View className="absolute bottom-[70%] left-0 right-0 mb-10 ml-5">
            <Text className="text-4xl font-bold text-white">Hi there</Text>
            <Text className="text-xl font-semibold text-white">Welcome to this app</Text>
          </View>
          {/* White login panel occupies the bottom 60% */}
          <View className="absolute bottom-0 h-[70%] w-full rounded-tl-[100%] bg-white p-8">
            <Text className="mb-4 text-2xl font-bold">Sign Up</Text>
            <View className="flex flex-col items-center justify-center gap-6">
              <TextInput
                placeholder="First Name"
                className="w-full rounded-lg border-2 border-gray-300 p-4"
              />
              <TextInput
                placeholder="Last Name"
                className="w-full rounded-lg border-2 border-gray-300 p-4"
              />
              <TextInput
                placeholder="Enter Email"
                className="w-full rounded-lg border-2 border-gray-300 p-4"
              />
              <TextInput
                secureTextEntry
                placeholder="Enter Password"
                className="w-full rounded-lg border-2 border-gray-300 p-4"
              />
              <Text style={styles.signUpButton} onPress={() => navigation.navigate('Home')}>
                Sign Up
              </Text>
              <View className=" flex flex-row items-center justify-center gap-3">
                <Text>Already have an aacount?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
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
