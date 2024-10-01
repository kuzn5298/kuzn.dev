import { storage, loader } from './mocks';

global.___loader = loader;
global.localStorage = storage;
