import { Text } from "@/components/ui/text";
import { View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 p-6 gap-4 bg-white dark:bg-black">
      <View className="mt-2">
        <Text className="text-2xl font-bold dark:text-white">
          React Native Template
        </Text>
      </View>

      <View className="flex-1 items-center justify-center gap-6">
        <View className="items-center gap-2">
          <Text className="text-lg font-semibold dark:text-white">
            Welcome to Your App
          </Text>
          <Text className="text-sm text-black/60 dark:text-white/60 text-center px-8">
            This template includes NativeWind styling and reusable UI
            components.
          </Text>
        </View>
      </View>
    </View>
  );
}
