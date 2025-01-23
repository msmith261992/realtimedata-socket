# Frontend Mobile App Test - Matt Smith


## Prerequisites

1. [npm](https://www.npmjs.com/) (if running locally)
2. [React Native environment setup](https://reactnative.dev/docs/environment-setup)
3. [XCode or Android Studio]

## Running Locally

1. **Install Dependencies**:

   ```bash
   npm install
   ```

## Step 2: Start your Application

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

Side note - I currently have it on iPhone simulator - please feel free to change the sim type or to a physical device

```bash
# install all necessary pods
cd ios && pod install

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```
# Backend server
The backend is built in node.js & socket.io. To run up:
```bash
cd backend && node server.js
```

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Architectural decisions

- Setup project as pages/components to display features.
- Setup redux and redux toolkit to keep device state and access across pages. Setup in store folder.
- Setup socket.IO for live/real time data manipulation, setup in delivery folder.
- Setup theme folder for common colour usage & easy function to change size layout based on height & width of screen (getSizing())
- Lottie animaition & reanimated packages added for animation choices

# Optimisation strategies

- Furth development of redux/redux toolkit 
- Further development of api to send device changes back up to a DB to store more securely.
- Add MMKV package OR develop our own storage of keys with a native module instead of AsyncStorage for better security and faster readability.

# Improvements

Improvements to make if I had time:
 - Install Detox for end-to-end testing: to fully test the flow of the app & screens
 - Fix mockImplementation red lines on home tests
 - Add unit tests for video streaming page
 - Better implementation of socket.io for disconnecting and listening for multiple pages across the app
 - Hook up current toggle to stop data stream
 - Hook up live url in Socket.io
 - Style header with back button
 - WebRTC not tested on iOS, as it was tested on iOS simulator (android simulator works)
 - Handle permission errors for WebRTC
 - Figure out the typings for webrtc and why I had to declare any instead of MediaStream for the useState
 - Setup module loader for better referencing of imports 

