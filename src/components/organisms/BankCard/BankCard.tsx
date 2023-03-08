import {GradientArea} from 'components/molecules';
import {PropsWithChildren} from 'react';

export type BankCardProps = PropsWithChildren<{
  testId?: string;
}>;

const BankCard = ({testId}: BankCardProps) => {
  return <GradientArea colors={[]}></GradientArea>;
};

export default BankCard;
