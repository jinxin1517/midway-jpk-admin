import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';
import * as typegoose from '@midwayjs/typegoose';

export type DefaultConfig = PowerPartial<EggAppConfig>;

export const mongoose: typegoose.DefaultConfig = {
  uri: 'mongodb://127.0.0.1:27017/',
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'community',
  },
};

export default (appInfo: EggAppInfo) => {
  const config = {} as DefaultConfig;

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1630660199498_4181';

  // add your config here
  config.middleware = [];

  config.midwayFeature = {
    // true 代表使用 midway logger
    // false 或者为空代表使用 egg-logger
    replaceEggLogger: true,
  };

  // config.security = {
  //   csrf: false,
  // };

  return config;
};
