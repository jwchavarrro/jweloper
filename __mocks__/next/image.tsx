/**
 * @file __mocks__/next/image.tsx
 * @description Mock reutilizable para next/image
 */

import * as React from "react";

const Image = (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
  return React.createElement("img", props);
};

Image.displayName = "Image";

export default Image;
