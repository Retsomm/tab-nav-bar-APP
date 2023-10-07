# **React Native Navigation App**

This is a sample React Native app that demonstrates navigation using the **`@react-navigation`** library. The app has two main screens: "Mars" and "Earth," each with its own stack of screens. It also includes a bottom tab navigation bar for easy switching between the two main screens.

## **Screens**

### **Mars**

- Displays information about Mars.

- Provides a button to navigate to the "My Mars" detail screen.

### **Earth**

- Displays information about Earth.

- Provides a button to navigate to the "My Earth" detail screen.

### **My Mars Detail**

- Detail screen for Mars.

- Additional information about Mars.

### **My Earth Detail**

- Detail screen for Earth.

- Additional information about Earth.

## **Navigation**

- The app uses a bottom tab navigator to switch between "Mars" and "Earth."

- Each main screen has its own stack navigator for managing navigation within that section.

- The header styles (background color, back button title, and text color) are customized for each stack navigator.

## **Tab Bar Icons**

- Custom tab bar icons are used for "Mars" and "Earth" tabs.

- The icons are loaded from external image sources using the **`<Image />`** component.

- Active and inactive tab colors are defined for a better user experience.

## **Installation**

To run this app on your local machine, follow these steps:

1. Clone the repository.

2. Navigate to the project directory.

3. Run **`npm install`** to install the required dependencies.

4. Connect a device or start an emulator.

5. Run **`npm start`** to start the development server.

6. Use the Expo Go app or a similar method to open the app on your device/emulator.

## **Dependencies**

- **`react-native`**

- **`@react-navigation/native`**

- **`@react-navigation/stack`**

- **`@react-navigation/bottom-tabs`**

- **`@expo/vector-icons`**

## **Author**

\[Your Name\]

## **License**

This project is licensed under the [MIT License](https://chat.openai.com/c/LICENSE.md).
