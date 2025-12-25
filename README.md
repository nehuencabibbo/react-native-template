# React Native Template Project

Template to start React Native projects, can eventually be updated.

## Technologies it has

- **Expo**: Framework for React applications that run natively on Android, iOS, and the web.
- **NativeWind**: Tailwind CSS for React Native, providing a seamless styling experience.
- **React Native Reusables**: Accessible UI primitives for React Native, inspired by shadcn/ui.
- **Husky**: Git hooks for pre-commit linting and formatting.
- **TypeScript**: Static typing for a more robust developer experience.
- **Expo Router**: File-based routing for React Native and web applications.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **Lucide Icons**: Beautiful & consistent icons for the user interface.
- **React Native Reanimated**: Powerful animation library for smooth UI transitions.
- **Code Quality**: Prettier and ESLint configured with Husky for consistent code style.

## Get started

1. Install dependencies

   ```bash
   npm i
   ```

2. Start the app

   ```bash
   npm run android
   ```

It's possible the first time `android/local.properties` is not automatically created and some error regarding `ANDROID_HOME` is thrown. If so run:

```bash
node scripts/setup-android-js
```
