import { enums } from '@optimizely/react-sdk'

const devCfg = {
    contentful: {
        environment: 'dev',
        //use export terminal function to assign your tokens to the following vars
        deliveryToken: 'iuml-ZLcv1lKEgzAK96pjxisZZWRObxvW6Lwu9o3ezg',
        previewToken: 'Xu10GvPMnQI_cwMtPQt9UnHIRWmAMqvYIuat2evl8kQ',
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
        deliveryToken: 'PHGtL2yQgR8iBfsDK7L_guR2HIKTiIMmUIsNM6UzcAc',
        previewToken: 'OUlq52gwMqFNJHPR-YMZsXczF8RJXqWHpp05cjqvBe8',
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
    siteName: 'Propellerhead',
    contentful: {
        spaceId: 'ig35ilbdn71t',
        ...config.contentful,
    },
};
