import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import UserList from "../pages/UserList"
import Page02 from "../pages/Page02"

const Tab = createBottomTabNavigator()

export default props => (
    <Tab.Navigator screenOptions={{
        tabBarLabelStyle: {fontSize: 20},
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'blue',
        headerShown: false,
        tabBarShowLabel: true,
        
    }}>
        <Tab.Screen 
            name="UserList" 
            component={UserList}
            options={{
                tabBarLabel: 'Home',
            }}
        />
        <Tab.Screen 
            name="Page02" 
            component={Page02} 
            options={{
                tabBarLabel: 'User',
            }}      
        />
    </Tab.Navigator>
)