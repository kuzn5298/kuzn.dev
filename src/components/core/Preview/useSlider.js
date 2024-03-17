import { useContext } from 'react';
import { SliderContext } from './SliderContext';

export const useSlider = () => useContext(SliderContext);
