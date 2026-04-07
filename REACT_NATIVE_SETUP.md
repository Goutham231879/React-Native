# ⚛️ React Native — Environment Setup Guide

> A complete guide to setting up your React Native CLI development environment on **Windows**, **macOS**, and **Linux**.  
> Reference: [React Native Official Docs](https://reactnative.dev/docs/environment-setup)

---

## 📋 Table of Contents

- [Prerequisites & System Requirements](#prerequisites--system-requirements)
- [Step 1 — Install Node.js & npm](#step-1--install-nodejs--npm)
- [Step 2 — Install Java Development Kit (JDK)](#step-2--install-java-development-kit-jdk)
- [Step 3 — Android Development Setup](#step-3--android-development-setup)
- [Step 4 — iOS Development Setup (macOS Only)](#step-4--ios-development-setup-macos-only)
- [Step 5 — Create & Run Your First App](#step-5--create--run-your-first-app)
- [Optional Tools & Tips](#optional-tools--tips)
- [Troubleshooting](#troubleshooting)

---

## Prerequisites & System Requirements

Make sure your system has the following before starting:

| Tool | Version | Platform |
|---|---|---|
| Node.js (LTS) | v20 or higher | All |
| JDK | 17 or later | All |
| Android Studio | Hedgehog or newer | All |
| Xcode | 15+ | macOS only |
| CocoaPods | Latest | macOS only |
| Watchman | Latest | macOS (recommended) |

---

## Step 1 — Install Node.js & npm

Download and install the **LTS version** of Node.js from [https://nodejs.org](https://nodejs.org).

npm is bundled with Node.js — no separate install needed.

Verify installation:

```bash
node -v
npm -v
```

### macOS — Install Watchman (recommended)

Watchman is a file watcher used by React Native for better performance:

```bash
brew install watchman
```

### Linux — Install Python

```bash
sudo apt install python3
```

---

## Step 2 — Install Java Development Kit (JDK)

React Native requires **JDK 17** for compatibility with the latest Android Gradle plugin.

### macOS (via Homebrew)

```bash
brew install --cask zulu@17
```

Add `JAVA_HOME` to your shell profile (`~/.zshrc` or `~/.bash_profile`):

```bash
export JAVA_HOME=$(/usr/libexec/java_home -v 17)
```

### Windows

Download JDK 17 from [Oracle](https://www.oracle.com/java/technologies/downloads/) or use [OpenJDK](https://adoptium.net/).  
After installing, set `JAVA_HOME` in System Environment Variables.

### Verify

```bash
java -version
```

---

## Step 3 — Android Development Setup

### 3.1 — Install Android Studio

Download from [https://developer.android.com/studio](https://developer.android.com/studio).

During installation, make sure to select:

- ✅ Android SDK
- ✅ Android SDK Platform-Tools
- ✅ Android Virtual Device (Emulator)
- ✅ Android SDK Build-Tools
- ✅ NDK (if needed for native modules)

### 3.2 — Configure Android SDK Paths

#### macOS / Linux

Add these lines to your `~/.zshrc` or `~/.bash_profile`:

```bash
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/platform-tools
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
```

Then reload:

```bash
source ~/.zshrc
```

#### Windows

Add the following to **System Environment Variables**:

```
ANDROID_HOME = C:\Users\<YourUsername>\AppData\Local\Android\Sdk
```

And add these to **PATH**:

```
%ANDROID_HOME%\emulator
%ANDROID_HOME%\platform-tools
%ANDROID_HOME%\tools
%ANDROID_HOME%\tools\bin
```

### 3.3 — Create an Android Virtual Device (AVD)

1. Open **Android Studio**
2. Go to **More Actions → Virtual Device Manager**
3. Click **Create Device**
4. Select a device (e.g., Pixel 6) and choose a system image (API 33+)
5. Click **Finish**

### 3.4 — Real Device (Optional)

To test on a physical Android device:

1. Enable **Developer Options** on your device
2. Turn on **USB Debugging**
3. Connect via USB and authorize the connection

---

## Step 4 — iOS Development Setup (macOS Only)

> ⚠️ iOS development requires a Mac. Windows/Linux cannot build iOS apps.

### 4.1 — Install Xcode

Download **Xcode 15+** from the Mac App Store.

Then install Command Line Tools:

```bash
xcode-select --install
```

### 4.2 — Install CocoaPods

```bash
sudo gem install cocoapods
```

### 4.3 — Configure iOS Simulator

1. Open **Xcode**
2. Go to **Xcode → Open Developer Tool → Simulator**
3. Choose your target device (e.g., iPhone 15)

> Make sure macOS allows terminal and simulator permissions to avoid build failures.

---

## Step 5 — Create & Run Your First App

### Create a New React Native Project

```bash
npx react-native@latest init MyApp
cd MyApp
```

### Start the Metro Bundler

Metro is the JavaScript bundler that ships with React Native. Always start it first:

```bash
npx react-native start
```

### Run on Android

Make sure your emulator is running or device is connected:

```bash
npx react-native run-android
```

### Run on iOS (macOS Only)

```bash
npx react-native run-ios
```

---

## Optional Tools & Tips

### ✅ React Native Doctor

Diagnose your environment for missing or misconfigured dependencies:

```bash
npx react-native doctor
```

This checks every dependency and highlights issues in red (errors), yellow (warnings), and green (all good). It can also auto-fix many common problems.

### 🐛 Flipper (Debugging)

Flipper is a visual debugging tool integrated with React Native by default. Download it from [https://fbflipper.com](https://fbflipper.com) for network inspection, Redux DevTools, and layout inspection.

### ⚡ Hermes Engine

Enable the Hermes JS engine for significantly better performance and faster startup times. It's enabled by default in React Native 0.70+.

In `android/app/build.gradle`:

```gradle
project.ext.react = [
  enableHermes: true
]
```

### 🎨 VS Code Extensions

Install the **React Native Tools** extension by Microsoft for IntelliSense and debugging support inside VS Code.

### 🔧 ESLint + Prettier

Keep your code clean and consistent:

```bash
npm install --save-dev eslint prettier
```

---

## Troubleshooting

| Issue | Fix |
|---|---|
| `Unable to load script` | Make sure Metro bundler is running (`npx react-native start`) |
| `SDK location not found` | Set `ANDROID_HOME` and add to `PATH` |
| `No emulator found` | Open Android Studio → AVD Manager and start a device |
| `Pod install failed` | Run `cd ios && pod install` and check CocoaPods version |
| `Watchman error` | Run `watchman watch-del-all` and restart Metro |
| General setup issues | Run `npx react-native doctor` for auto-diagnosis |

### Clean & Rebuild

If something breaks unexpectedly:

```bash
# Delete node_modules and reinstall
rm -rf node_modules
npm install

# Clean Android build
cd android && ./gradlew clean && cd ..

# Re-install iOS pods
cd ios && pod install && cd ..
```

---

## 📚 References

- [React Native Official Docs](https://reactnative.dev/docs/environment-setup)
- [Android Studio Download](https://developer.android.com/studio)
- [Node.js Official Site](https://nodejs.org)
- [Expo (Alternative Framework)](https://expo.dev)

---

> **Note:** If you want a faster setup without native code complexity, consider using [Expo](https://expo.dev) — the recommended framework for beginners and production apps alike.
