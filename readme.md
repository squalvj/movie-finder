
  
# MOVIE FINDER APK
DISCLAIMER: This project doesnt contain android playstore certificate, so by default you cannot install the release version of this apk to your device, instead you can run the project via dev mode in order to test this in your device (if you are using genymotion or any virtual android device would be good).
> Work smart, not work hard.

 - ✅ Redux & Redux dev tools
 - ✅ Styled Components
 - ✅ Managable File Directory
 - ✅ Axios
 - ✅ Service Call Wrapper With Interceptor (https://github.com/squalvj/frontendServiceArchitecture)
 - ✅ Scroll Infinite
 - ✅ Modal
 - ✅ React native config
 - ✅ Alias Import Abolute Path
 - ✅ .env production & development
 - ✅ Redux Persist
 - ✅ React Navigation

# Requirement

 - node version 11.3.0 or newer, install nvm for managing the npm version :)
 - npm version 6.4.1 or newer.

# Folder Structure
*Make the structrure even more tidy than your room*

The folder structure is really easy to manage and it has strong meaning for new developer that would maintain this project, it would fit you guys that have OCD :)
This kind of structure is being used in large scale apps on my experience and quite reliable.
```
project
│   README.md
│   package.json
│   .env.development -> environment dev
│   .env.production -> environment production
└───build -> Builded package...
└───src
|	App.js -> Wrapper root component place modal here...
|	└───service -> List api & generic service wrapper...
|	└───store -> Configure the store settings...
|	└───reducers -> The place for all reducers...
|	└───module -> Standard getter call and custom error handling...
|	└───styles -> Base & Generic styling class...
|	└───utils -> Generic reusable function...
|	└───components -> Generic component...
|	└───container
|	|	└───[NAME_OF_CONTAINER] -> Routes of the app
```

![enter image description here](https://i.kym-cdn.com/photos/images/newsfeed/001/206/382/b7a.gif)



# How to run
You might want to setup environment for development and production seperately, you can do this by:
- .env.development -> Setting variable for dev mode
- .env.production -> Setting variable for production mode

Running the project is easy like snapping your finger.

 1. install the dependencies by running 'yarn'
 2. run 'npm run start:ios/android' to start development mode
 3. thats all...


# Debug
to debug UI element, and the console, by default you can use the browser, but if you want to debug redux state with redux devtools, you have to install **react native debugger**. You can get it from here: [https://github.com/jhen0409/react-native-debugger](https://github.com/jhen0409/react-native-debugger)

## Build

 1. run 'npm run build:android'
 2. the app would be inside *android/app/build/outputs/apk/release/apk.apk*

Feel free to contact me if anything happen on squalvj@gmail.com
<br />
Medium: [https://medium.com/@squalvj](https://medium.com/@squalvj)
<br />
Github: [https://github.com/squalvj](https://github.com/squalvj)
<br />
Codepen: [https://codepen.io/squalvj/](https://codepen.io/squalvj/)