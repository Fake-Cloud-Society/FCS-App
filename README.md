# Fake Cloud Society App

This is an [Expo](https://expo.dev) app

## Get started

1. Install dependencies
   ```bash
   npm install
   ```
2. Start the app
   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Environment
You need to specify an environment file named .env with environment variables :
```
EXPO_PUBLIC_API_URL=<url-of-api>
```
See [.env.example](.env.example)

## Build
### Web
Build web application
   ```bash
    npx expo export --platform web
   ```
Run the export
   ```bash
    npx serve dist
   ```

### Mobile
You can build locally with the *--local* option for android and iOS.

Or :

Build the application remotely with your [Expo.dev](https://expo.dev/) client

Follow [these instructions](https://docs.expo.dev/build/setup/) to build your application using EAS

#### Android
   ```bash
    eas build --platform android
   ```

#### iOS
   ```bash
    eas build --platform ios
   ```

## Extract application from app bundle

Use [bundletool](https://developer.android.com/tools/bundletool?hl=fr) command to extract apk
```
 bundletool build-apks --bundle ./my_app.aab --output ./my_app.apks --mode=universal
```
Then rename your .apks file to .zip
```
mv my_app.apks my_app.zip
```
And unzip folder
```
unzip my_app.zip
```
Your application is universal.apk !
