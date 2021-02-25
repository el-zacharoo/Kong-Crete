import { enums } from '@optimizely/react-sdk'

const devCfg = {
    contentful: {
        environment: 'dev',
        //use export terminal function to assign your tokens to the following vars
        deliveryToken: '77bEVQVDGJmDzEXO9uYvSyfsruY293gcH4SkmmsMk_U',
        previewToken: '7Yye3sNLFKkQ0QkGavWTEzGgtojQVz1lpILOu5wnXEw',
    },
    ga: {
        code: 'UA-00000000-0'
    },
    optimizely: {
        key: 'Your optimizely token',
        loglevel: enums.LOG_LEVEL.INFO
    }
};

const prodCfg = {
    contentful: {
        environment: 'master',
        // set these environment vars on Netlify
        deliveryToken: 'tvwI9ygMl4zbt9oCJ2l31d9CighK1j9dMC2axfpQxaI',
        previewToken: 'CQZsn5s_F-ztfbuFo_yINVA5puwkdpY7uvdNJX8x460',
    },
    ga: {
        code: 'UA-000000000-1'
    },
    optimizely: {
        key: 'Your optimizely token',
        loglevel: enums.LOG_LEVEL.NOTSET
    }
};

const config = process.env.REACT_APP_STAGE === 'production' ? prodCfg : devCfg;

export default {
    // merge environment-specifc config
    ...config,
    siteName: 'WestonDev',
    contentful: {
        spaceId: '1fq37comle56',
        ...config.contentful,
    },
};
