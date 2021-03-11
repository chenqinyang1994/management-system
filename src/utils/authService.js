import localStorageFactory from '@/utils/localStorageFactory.js';

const defaultToken = process.env.REACT_APP_ENV === 'development' ? 'token-test-123456' : '';

export default localStorageFactory(defaultToken, '__token__');