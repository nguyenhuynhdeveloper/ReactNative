// import AsyncStorage from '@react-native-community/async-storage';
import AsyncStorage from '@react-native-async-storage/async-storage'

const ReduxPersist = {
  active: true,
  reducerVersion: '0.2',
  storeConfig: {
    key: 'primary',
    version: 2,
    storage: AsyncStorage,
    blacklist: ['loading', 'listNotification', 'userApp','down', 'toast', 'checkin', 'modal'],
  },
};

export default ReduxPersist;