import './app.css'
import App from './App.svelte'
import TestApp from "./playground/TestApp.svelte";

const app = new  App({
  target: document.getElementById('app'),
})

export default app
