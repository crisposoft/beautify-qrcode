import { drawIcon } from './drawIcon';

export function createRenderer(renderer) {
    const defaultViewBox = function (
        qrcode,
        [
            type,
            size,
            opacity,
            posType,
            otherColor,
            posColor,
            title,
            titleSize,
            titleFontFamily,
            titleBorderWidth,
            titleBorderRadius,
            titleMargin,
        ]
    ) {
        if (!qrcode) {
            return '0 0 0 0';
        }

        const nCount = qrcode.getModuleCount();

        let minX = 0;
        let minY = 0;

        let width = nCount;
        let height = nCount;

        if (title) {
            minY -= ((titleSize || 12) + 3 * titleMargin);
            height += ((titleSize || 12) + 3 * titleMargin);
        }

        if (qrcode.$options.isSpace) {
            minX -= nCount / 5;
            minY -= nCount / 5;
            width += nCount + (nCount / 5) * 2;
            height += nCount + (nCount / 5) * 2;
        }

        return `${minX} ${minY} ${width} ${height}`;
    };

    renderer = {
        ...{
            getViewBox: defaultViewBox,
            listPoints: (qrcode, params) => {
                return [];
            },
            drawIcon: drawIcon,
            getParamInfo: () => {
                return [];
            },
            beginRendering: ({ qrcode, params, setParamInfo }) => {},
            beforeListing: ({ qrcode, params, setParamInfo }) => {},
            afterListing: ({ qrcode, params, setParamInfo }) => {},
        },
        ...renderer,
    };

    return ({ qrcode, params }) => {
        const { width, height } = qrcode.$options;
        return `
            <svg width="${width}" height="${height}" viewBox="${renderer.getViewBox(
            qrcode,
            params
        )}" fill="white"
                 xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                ${renderer.drawIcon(qrcode, params).join('')}
                ${renderer.listPoints(qrcode, params).join('')}
            </svg>
        `;
    };
}
