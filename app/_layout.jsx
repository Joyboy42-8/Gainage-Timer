import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function Layout() {
  return (
    <>
      <StatusBar style="auto" />
      <Stack
        screenOptions={{
          headerShown: true, // affiche le header par défaut
          animation: "fade_from_bottom", // animation entre les écrans
        }}
      >
        {/* Les pages seront injectées automatiquement ici */}
      </Stack>
    </>
  );
}