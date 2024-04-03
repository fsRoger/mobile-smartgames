
// import TabRoutes from './tab.routes';
import { NavigationContainer } from '@react-navigation/native';
import DrawerRoutes from './drawer.routes';

export default function Routes() {
  return (
    <NavigationContainer>
      {/* <TabRoutes /> */}
      <DrawerRoutes />
    </NavigationContainer>
  );
}