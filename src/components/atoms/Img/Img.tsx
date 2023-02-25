import Logo from 'img/bw_logo.svg';
import Logo_splash_color from 'img/bw_logo_splash_color.svg';
import Logo_splash_white from 'img/bw_logo_splash_white.svg';
import Card_lock from 'img/card_lock.svg';
import Facebook from 'img/facebook.svg';
import Google from 'img/google.svg';
import {PropsWithChildren} from 'react';

export type ImgProps = PropsWithChildren<{
  src: ImgType;
  height: number | string;
  width?: number | string;
  alt: string;
  testId?: string;
}>;

export enum ImgType {
  cardLock = 'img/card_lock.svg',
  logo = 'img/bw_logo.Img',
  logoSplashColor = 'img/bw_logo_splash_color.svg',
  logoSplashWhite = 'img/bw_logo_splash_white.svg',
  facebook = 'img/facebook.svg',
  google = 'img/google.svg',
}

function Img({src, height, width = '100%', testId}: ImgProps) {
  switch (src) {
    case ImgType.cardLock:
      return <Card_lock width={width} height={height} testID={testId} />;
    case ImgType.logo:
      return <Logo width={width} height={height} testID={testId} />;
    case ImgType.logoSplashColor:
      return (
        <Logo_splash_color width={width} height={height} testID={testId} />
      );
    case ImgType.logoSplashWhite:
      return (
        <Logo_splash_white width={width} height={height} testID={testId} />
      );
    case ImgType.facebook:
      return <Facebook width={width} height={height} testID={testId} />;
    case ImgType.google:
      return <Google width={width} height={height} testID={testId} />;
  }
}
export default Img;
