import Page1 from './Page1';
import Page2 from './Page2';
import Inicial from './Inicial';

import { createAppContainer, createStackNavigator } from 'react-navigation';

const Routes = createAppContainer(
    createStackNavigator({
        Inicial,
        Home: Page1,
        About: Page2,
    })
);

export default Routes;