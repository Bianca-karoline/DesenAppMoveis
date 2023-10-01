import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import FormLogin from "./pages/FormLogin";
import UserList from "./pages/UserList";
import { UserProvider } from './context/UserContext';
import Page01 from './pages/Page01';
import PassoStack from './components/PassoStack';

const Stack = createNativeStackNavigator()

export default props => (
    <UserProvider>
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="FormLogin"
                //screenOptions={{headerShown: false}}
                screenOptions={minhaScreenOptions}
            >
                <Stack.Screen 
                    name="FormLogin"
                    component={FormLogin}
                />
                <Stack.Screen name='Page01'>    
                {
                props => (
                    <PassoStack {...props} voltar>
                        <Page01 />
                    </PassoStack>
                )
                 }
                </Stack.Screen>
                <Stack.Screen
                    name="UserList"
                    component={UserList}
                /> 
            </Stack.Navigator>
        </NavigationContainer>
    </UserProvider>

)

const minhaScreenOptions = {
    headerStyle:{
        backgroundColor: '#003f5c'
    },
    headerTintColor: '#fff',
    headerTitleStyle:{
        fontWeight: 'bold'
    }
}