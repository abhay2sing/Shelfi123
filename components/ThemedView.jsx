import { View } from 'react-native'


const ThemedView = ({style,children}) => {
  return (
    <View style={style}>
        {children}
      
    </View>
  )
}

export default ThemedView