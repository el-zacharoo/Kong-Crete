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
        deliveryToken: process.env.REACT_APP_CF_DELIVERY_TOKEN,
        previewToken: process.env.REACT_APP_CF_PREVIEW_TOKEN,
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
    siteName: 'Kongcrete',
    contentful: {
        spaceId: '1fq37comle56',
        ...config.contentful,
    },
};
