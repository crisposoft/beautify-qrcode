import * as yup from 'yup';
import { createRenderer } from '@/utils/renderer';
import listPoints from './listPoints';

const schemaLine = yup.object().shape({
    type: yup.mixed().oneOf([0, 1, 2, 3, 4, 5, 6]).default(2),
    size: yup.number().default(50),
    opacity: yup.number().default(100),
    posType: yup.mixed().oneOf([0, 1, 2, 3]).default(3),
    otherColor: yup.string().default('#000000'),
    posColor: yup.string().default('#000000'),

    // title
    title: yup.string().default(''),
    titleSize: yup.number().default(5),
    titleFontFamily: yup
        .string()
        .default('Belgium, Arial, Helvetica, sans-serif'),
    titleBorderWidth: yup.number().default(0.1),
    titleBorderRadius: yup.number().default(0),
    titleMargin: yup.number().default(2),
});

const schemaLine2 = yup.object().shape({
    type: yup.mixed().oneOf([0, 1, 2, 3, 4, 5, 6]).default(6),
    size: yup.number().default(50),
    opacity: yup.number().default(100),
    posType: yup.mixed().oneOf([0, 1, 2, 3]).default(0),
    otherColor: yup.string().default('#000000'),
    posColor: yup.string().default('#000000'),

    // title
    title: yup.string().default(''),
    titleSize: yup.number().default(5),
    titleFontFamily: yup
        .string()
        .default('Belgium, Arial, Helvetica, sans-serif'),
    titleBorderWidth: yup.number().default(0.1),
    titleBorderRadius: yup.number().default(0),
    titleMargin: yup.number().default(2),
});

/**
 *
 * @param {Object} qrcode
 * @param {Object} options
 * @param {String} [options.type]
 * @param {String} [options.size]
 * @param {String} [options.opacity]
 * @param {String} [options.posType]
 * @param {String} [options.otherColor]
 * @param {String} [options.posColor]
 */
export const rendererLine = (qrcode, options) => {
    try {
        options = schemaLine.validateSync(options);
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
 * @param {String} [options.type] 
 * @param {String} [options.size]
 * @param {String} [options.opacity]
 * @param {String} [options.posType]
 * @param {String} [options.otherColor]
 * @param {String} [options.posColor]
 */
export const rendererLine2 = (qrcode, options) => {
    try {
        options = schemaLine2.validateSync(options);
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
