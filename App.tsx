import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { withExpoSnack } from 'tailwindcss-react-native';

export default function App() {
	return (
		<TailwindProvider>
			<View className="flex-1 m-10 items-center justify-center bg-yellow-200">
				<Text className="text-gray-600">
					Open up App.tsx to start working on your app!
				</Text>
				<StatusBar style="auto" />
			</View>
		</TailwindProvider>
	);
}
