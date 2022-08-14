import * as yup from 'yup';
import { createRenderer } from '@/utils/renderer';
import listPoints from './listPoints';

const schemaBase = yup.object().shape({
    type: yup.mixed().oneOf([0, 1, 2]).default(0),
    size: yup.number().default(100),
    opacity: yup.number().default(100),
    posType: yup.mixed().oneOf([0, 1, 2, 3]).default(0),
    otherColor: yup.string().default('#000000'),
    posColor: yup.string().default('#000000'),

    // title
    title: yup.string().default(''),
    titleSize: yup.number().default(5),
    titleFontFamily: yup.string().default('Belgium, Arial, Helvetica, sans-serif'),
    titleBorderWidth: yup.number().default(0.1),
    titleBorderRadius: yup.number().default(0),
    titleMargin: yup.number().default(2)
});

/**
 *
 * @param {Object} qrcode
 * @param {Object} options
 * @param {Number} [options.type]
 * @param {Number} [options.size]
 * @param {String} [options.opacity]
 * @param {String} [options.posType]
 * @param {String} [options.otherColor]
 * @param {String} [options.posColor]
 */
const rendererBase = (qrcode, options) => {
    try {
        options = schemaBase.validateSync(options);
    } catch (err) {
        console.error(err);
        return '';
    }

    const params = [
        'type',
        'size',
        'opacity',
        'posType',
        'otherColor',
        'posColor',
        'title',
        'titleSize',
        'titleFontFamily',
        'titleBorderWidth',
        'titleBorderRadius',
        'titleMargin',
    ].map((k) => options[k]);

    const svg = createRenderer({
        listPoints: listPoints,
    })({ qrcode, params });

    return svg;
};
/**
 *
 * @param {Object} qrcode
 * @param {Object} options
 * @param {Number} [options.type]
 * @param {Number} [options.size]
 * @param {String} [options.opacity]
 * @param {String} [options.posType]
 * @param {String} [options.otherColor]
 * @param {String} [options.posColor]
 */
export const rendererRect = (qrcode, options = {}) => {
    options = {
        ...{
            type: 0,
            size: 100,
            opacity: 100,
            posType: 0,
        },
        ...options,
    };
    return rendererBase(qrcode, options);
};
/**
 *
 * @param {Object} qrcode
 * @param {Object} options
 * @param {Number} [options.type]
 * @param {Number} [options.size]
 * @param {String} [options.opacity]
 * @param {String} [options.posType]
 * @param {String} [options.otherColor]
 * @param {String} [options.posColor]
 */
export const rendererRound = (qrcode, options = {}) => {
    options = {
        ...{
            type: 1,
            size: 50,
            opacity: 30,
            posType: 1,
        },
        ...options,
    };
    return rendererBase(qrcode, options);
};
/**
 *
 * @param {Object} qrcode
 * @param {Object} options
 * @param {Number} [options.type]
 * @param {Number} [options.size]
 * @param {String} [options.opacity]
 * @param {String} [options.posType]
 * @param {String} [options.otherColor]
 * @param {String} [options.posColor]
 */
export const rendererRandRound = (qrcode, options = {}) => {
    options = {
        ...{
            type: 2,
            size: 80,
            opacity: 100,
            posType: 2,
        },
        ...options,
    };
    return rendererBase(qrcode, options);
};
