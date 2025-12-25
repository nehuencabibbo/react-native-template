import { Text } from "@/components/ui/text";
import Entypo from "@expo/vector-icons/Entypo";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { Tabs, useRouter } from "expo-router";
import { Pressable, View } from "react-native";

function CustomTabBar({ state }: BottomTabBarProps) {
  const router = useRouter();

  const isFocused = (routeName: string) =>
    state.routes[state.index]?.name === routeName;

  return (
    <View className="bg-white dark:bg-neutral-900 border-t border-black/10 dark:border-white/10">
      <View className="flex-row items-center justify-center px-12 py-5">
        <Pressable
          className="flex-1 items-center"
          onPress={() => router.navigate("/")}
          hitSlop={8}
          style={{
            opacity: isFocused("index") ? 1 : 0.6,
          }}
        >
          <Entypo
            name="home"
            size={22}
            color={isFocused("index") ? "#000" : "#888"}
          />
          <Text
            className="text-xs mt-1"
            style={{
              color: isFocused("index") ? "#000" : "#888",
            }}
          >
            Home
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

export default function TabLayout() {
  return (
    <Tabs
      initialRouteName="index"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tabs.Screen name="index" options={{ title: "Home" }} />
    </Tabs>
  );
}
