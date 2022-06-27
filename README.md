## This is a demo app that uses the [Houndify React Native](https://www.npmjs.com/package/houndify-react-native) package

## Intial Setup:

Follow instructions from [React Native Getting Started](https://reactnative.dev/docs/environment-setup)

1. `brew install watchman`
2. install xcode and xcode developer tools
3. `sudo gem install cocoapods`

## Server:

1. Input clientId and clientSecret in /server/server.js
2. `npm start`

## React Native App (in this order):

1. `npm run xcode-refresh`
2. `npm install`
3. `npm run podInstall`
4. start app bundler (Metro) in seperate tab using `npm start`
5. `npm run ios`
6. grant microphone permissions when prompted
