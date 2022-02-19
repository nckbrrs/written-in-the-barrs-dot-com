import { createContext } from 'react';
import { WindowSizes } from '../types/types';

const WindowSizeContext = createContext<WindowSizes>(WindowSizes.Large);

export { WindowSizeContext }
