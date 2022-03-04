/* eslint-disable react/jsx-props-no-spreading */
import React, { memo, useEffect, useState } from 'react';
import { Image as RNImage, ImageResizeMode } from 'react-native';

import { IImageProps, Image } from 'native-base';

type Props = IImageProps & { uri?: string };

function AspectRatioRespect({ source, uri, ...rest }: Props) {
  const [imageSize, setImageSize] = useState({ height: 1, width: 1 });

  useEffect(() => {
    if (source) {
      const { height, width } = RNImage.resolveAssetSource(source);
      setImageSize({ height, width });
    } else if (uri) {
      RNImage.getSize(uri, (width, height) => setImageSize({ height, width }));
    }
  }, [source, uri]);

  const imageProps = {
    ...rest,
    resizeMode: 'contain' as ImageResizeMode,
    style: { aspectRatio: imageSize.width / imageSize.height },
  };

  if (source) return <Image {...imageProps} source={source} />;
  if (uri) return <Image {...imageProps} source={{ uri }} />;
  return null;
}
export default memo(AspectRatioRespect);
