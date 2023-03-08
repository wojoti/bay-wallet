import Back_arrow from 'img/back_arrow.svg';
import Bitcoin from 'img/bitcoin.svg';
import Logo from 'img/bw_logo.svg';
import Logo_splash_color from 'img/bw_logo_splash_color.svg';
import Logo_splash_white from 'img/bw_logo_splash_white.svg';
import Card_lock from 'img/card_lock.svg';
import Dash_down from 'img/dash_down.svg';
import Dash_up from 'img/dash_up.svg';
import Facebook from 'img/facebook.svg';
import Filter from 'img/filter.svg';
import Google from 'img/google.svg';
import IconCard from 'img/iconcard.svg';
import IconCard_selected from 'img/iconcard_selected.svg';
import IconChart from 'img/iconchart.svg';
import IconChart_selected from 'img/iconchart_selected.svg';
import Notification from 'img/notification.svg';
import Notification_red from 'img/notification_red.svg';
import Profile from 'img/profile.svg';
import Search from 'img/search.svg';
import Squares from 'img/squares.svg';
import Squares_selected from 'img/squares_selected.svg';
import Transfer from 'img/transfer.svg';
import Wave_green from 'img/wave_green.svg';
import Withdraw from 'img/withdraw.svg';
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
  profile = 'img/profile.svg',
  notification = 'img/notification.svg',
  notificationRed = 'img/notification_red.svg',
  waveGreen = 'img/wave_green.svg',
  transfer = 'img/transfer.svg',
  withdraw = 'img/withdraw.svg',
  bitcoin = 'img/bitcoin.svg',
  dashUp = 'img/dash_up.svg',
  dashDown = 'img/dash_down.svg',
  iconCard = 'img/iconcard.svg',
  iconChart = 'img/iconchart.svg',
  iconCardSelected = 'img/iconcard_selected.svg',
  iconChartSelected = 'img/iconchart_selected.svg',
  squares = 'img/squares.svg',
  filter = 'img/filter.svg',
  backArrow = 'img/back_arrow.svg',
  search = 'img/search.svg',
  squaresSelected = 'img/squares_selected.svg',
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
    case ImgType.profile:
      return <Profile width={width} height={height} testID={testId} />;
    case ImgType.notification:
      return <Notification width={width} height={height} testID={testId} />;
    case ImgType.notificationRed:
      return <Notification_red width={width} height={height} testID={testId} />;
    case ImgType.waveGreen:
      return <Wave_green width={width} height={height} testID={testId} />;
    case ImgType.transfer:
      return <Transfer width={width} height={height} testID={testId} />;
    case ImgType.withdraw:
      return <Withdraw width={width} height={height} testID={testId} />;
    case ImgType.bitcoin:
      return <Bitcoin width={width} height={height} testID={testId} />;
    case ImgType.dashUp:
      return <Dash_up width={width} height={height} testID={testId} />;
    case ImgType.dashDown:
      return <Dash_down width={width} height={height} testID={testId} />;
    case ImgType.iconCard:
      return <IconCard width={width} height={height} testID={testId} />;
    case ImgType.iconChart:
      return <IconChart width={width} height={height} testID={testId} />;
    case ImgType.squares:
      return <Squares width={width} height={height} testID={testId} />;
    case ImgType.backArrow:
      return <Back_arrow width={width} height={height} testID={testId} />;
    case ImgType.filter:
      return <Filter width={width} height={height} testID={testId} />;
    case ImgType.search:
      return <Search width={width} height={height} testID={testId} />;
    case ImgType.iconCardSelected:
      return (
        <IconCard_selected width={width} height={height} testID={testId} />
      );
    case ImgType.iconChartSelected:
      return (
        <IconChart_selected width={width} height={height} testID={testId} />
      );
    case ImgType.squaresSelected:
      return <Squares_selected width={width} height={height} testID={testId} />;
  }
}
export default Img;
