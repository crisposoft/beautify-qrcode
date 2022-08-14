export function drawIcon(
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
    if (!qrcode || !title) {
        return [];
    }

    const pointList = [];
    if (title) {
        const nCount = qrcode.getModuleCount();

        pointList.push(
            `<rect width="${nCount - titleBorderWidth}" height="${
                titleSize + 2 * titleMargin - titleBorderWidth
            }" key="-2" x="${titleBorderWidth / 2}" y="${
                -(titleSize || 12) - 3 * titleMargin + titleBorderWidth / 2
            }" stroke="#000000" rx="${titleBorderRadius || 'auto'}" stroke-width="${titleBorderWidth}"/>`
        );

        const fontX = nCount / 2;
        const fontY = -2 * titleMargin;
        
        pointList.push(
            `<text key="-1" x="${fontX}" y="${fontY}" fill="#000000" text-anchor="middle" font-size="${titleSize}" font-family="${titleFontFamily}">${title}</text>`
        );
    }

    return pointList;
}
