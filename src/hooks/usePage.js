import { useContext } from 'react';
import { PageContext } from '@contexts';

export const usePage = () => useContext(PageContext);
