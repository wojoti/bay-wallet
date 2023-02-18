import Card_lock from 'img/card_lock.svg';
import {PropsWithChildren} from 'react';

export type ImgProps = PropsWithChildren<{
  src: ImgType;
  width: number;
  height: number;
  alt: string;
  testId?: string;
}>;

export enum ImgType {
  cardLock = 'img/card_lock.svg',
  //  logo = 'img/bw_logo.Img',
}

function Img({src, width, height, testId}: ImgProps) {
  switch (src) {
    case ImgType.cardLock:
      return <Card_lock width={width} height={height} testID={testId} />;
    // case ImgType.logo:
    //   return <Logo width={width} height={height} testID={testId} />;
  }
}
export default Img;
