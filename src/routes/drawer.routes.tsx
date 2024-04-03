import { createDrawerNavigator } from '@react-navigation/drawer';
import { Feather } from '@expo/vector-icons';

import TabRoutes from './tab.routes';
import StackRoutes from './stack.routes ';

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
  return (
    <Drawer.Navigator
      screenOptions={{
        title: '',
        drawerStyle: {
          backgroundColor: '#f2f2f2',
          width: 240,
        },
      }}>
      <Drawer.Screen
        name="home"
        component={TabRoutes}
        options={{
          drawerIcon: ({ color, size }) =>
            <Feather name="home" color={color} size={size} />,
          drawerLabel: 'Início',

        }}
      />
      <Drawer.Screen
        name="profile"
        component={StackRoutes}
        options={{
          drawerIcon: ({ color, size }) =>
            <Feather name="user" color={color} size={size} />,
          drawerLabel: 'meu perfil',

        }}
      />



    </Drawer.Navigator>
  );
}
