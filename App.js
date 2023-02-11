import Main from './Main'
import { Provider } from 'react-redux'
import store from './redux/store'
import { ThemeContext } from './constants/ThemeContext'
import { useState ,useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Appearance } from 'react-native'


const App = () => {
  const [theme, setTheme] = useState({mode:Appearance.getColorScheme()})
  const updateTheme = async (newTheme) => {
    let mode ;
    if(!newTheme) {
      mode = theme.mode === "dark" ? "light" : "dark";
      newTheme = {mode}
    }

    await AsyncStorage.setItem("AppTheme", JSON.stringify(newTheme))
    setTheme(newTheme)
  }

  const getTheme = async () => {
    const theme = JSON.parse(await AsyncStorage.getItem("AppTheme"))
    if(theme) {
     setTheme(theme)
    }
  }
  useEffect(() => {
    getTheme()
  }, [])
  


  return (
    <Provider store={store}>
      <ThemeContext.Provider value={{theme,updateTheme}}>
      <Main/>
      </ThemeContext.Provider>
   </Provider>
  )
}

export default App

