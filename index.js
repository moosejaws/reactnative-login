import { AppRegistry, Platform } from "react-native"
import { registerRootComponent } from "expo"
import App from "./App"
import { name as app } from "./app.json"

AppRegistry.registerComponent(app, () => App)
