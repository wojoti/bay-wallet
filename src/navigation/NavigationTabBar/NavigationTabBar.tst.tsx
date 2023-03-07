//TODO: mock bottom bar props and create tests
// import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
// import {render, screen} from '@testing-library/react-native';
// import TestRenderer from 'react-test-renderer';
// import NavigationTabBar from './NavigationTabBar';

// const props: BottomTabBarProps = {
//   state: {},
//   descriptors: undefined,
//   navigation: undefined,
//   insets: undefined,
// };

// test('should match snapshot', () => {
//   const tree = TestRenderer.create(<NavigationTabBar {...props} />).toJSON();
//   expect(tree).toMatchSnapshot();
// });

// test('should render transactionstemplate', () => {
//   render(<NavigationTabBar {...props} />);
//   const transactionstemplateElement = screen.getByTestId('navigationtabbar');
//   expect(transactionstemplateElement).toBeOnTheScreen();
// });

// test('should render maintemplate - OperationBottomBar', () => {
//     render(<MainTemplate {...props} />);
//     const maintemplateElement = screen.getByTestId('test-maintemplate-id');
//     expect(maintemplateElement).toBeOnTheScreen();
//     const OperationBottomBarElement = within(maintemplateElement).getByTestId(
//       'maintemplate-operationbottombar',
//     );
//     expect(OperationBottomBarElement).toBeOnTheScreen();
//   });

//   test('should render maintemplate - OperationBottomBar - cards button', () => {
//     render(<MainTemplate {...props} />);
//     const maintemplateElement = screen.getByTestId('test-maintemplate-id');
//     expect(maintemplateElement).toBeOnTheScreen();
//     const OperationBottomBarElement = within(maintemplateElement).getByTestId(
//       'maintemplate-operationbottombar',
//     );
//     expect(OperationBottomBarElement).toBeOnTheScreen();
//     const buttonElement = within(OperationBottomBarElement).getByTestId(
//       'operationbottombar-cards',
//     );
//     expect(buttonElement).toBeOnTheScreen();
//   });
//   test('should render maintemplate - OperationBottomBar - menu button', () => {
//     render(<MainTemplate {...props} />);
//     const maintemplateElement = screen.getByTestId('test-maintemplate-id');
//     expect(maintemplateElement).toBeOnTheScreen();
//     const OperationBottomBarElement = within(maintemplateElement).getByTestId(
//       'maintemplate-operationbottombar',
//     );
//     expect(OperationBottomBarElement).toBeOnTheScreen();
//     const buttonElement = within(OperationBottomBarElement).getByTestId(
//       'operationbottombar-menu',
//     );
//     expect(buttonElement).toBeOnTheScreen();
//   });
//   test('should render maintemplate - OperationBottomBar - chart button', () => {
//     render(<MainTemplate {...props} />);
//     const maintemplateElement = screen.getByTestId('test-maintemplate-id');
//     expect(maintemplateElement).toBeOnTheScreen();
//     const OperationBottomBarElement = within(maintemplateElement).getByTestId(
//       'maintemplate-operationbottombar',
//     );
//     expect(OperationBottomBarElement).toBeOnTheScreen();
//     const buttonElement = within(OperationBottomBarElement).getByTestId(
//       'operationbottombar-chart',
//     );
//     expect(buttonElement).toBeOnTheScreen();
//   });

//   test('should render maintemplate - OperationBottomBar - cards button - handle onPress', () => {
//     render(<MainTemplate {...props} />);
//     const maintemplateElement = screen.getByTestId('test-maintemplate-id');
//     expect(maintemplateElement).toBeOnTheScreen();
//     const OperationBottomBarElement = within(maintemplateElement).getByTestId(
//       'maintemplate-operationbottombar',
//     );
//     expect(OperationBottomBarElement).toBeOnTheScreen();
//     const buttonElement = within(OperationBottomBarElement).getByTestId(
//       'operationbottombar-cards',
//     );
//     expect(buttonElement).toBeOnTheScreen();
//     expect(mockOnCardPress).toBeCalledTimes(0);
//     fireEvent.press(buttonElement);
//     expect(mockOnCardPress).toBeCalledTimes(1);
//   });
//   test('should render maintemplate - OperationBottomBar - menu button - handle onPress', () => {
//     render(<MainTemplate {...props} />);
//     const maintemplateElement = screen.getByTestId('test-maintemplate-id');
//     expect(maintemplateElement).toBeOnTheScreen();
//     const OperationBottomBarElement = within(maintemplateElement).getByTestId(
//       'maintemplate-operationbottombar',
//     );
//     expect(OperationBottomBarElement).toBeOnTheScreen();
//     const buttonElement = within(OperationBottomBarElement).getByTestId(
//       'operationbottombar-menu',
//     );
//     expect(buttonElement).toBeOnTheScreen();
//     expect(mockOnMenuPress).toBeCalledTimes(0);
//     fireEvent.press(buttonElement);
//     expect(mockOnMenuPress).toBeCalledTimes(1);
//   });
//   test('should render maintemplate - OperationBottomBar - chart button - handle onPress', () => {
//     render(<MainTemplate {...props} />);
//     const maintemplateElement = screen.getByTestId('test-maintemplate-id');
//     expect(maintemplateElement).toBeOnTheScreen();
//     const OperationBottomBarElement = within(maintemplateElement).getByTestId(
//       'maintemplate-operationbottombar',
//     );
//     expect(OperationBottomBarElement).toBeOnTheScreen();
//     const buttonElement = within(OperationBottomBarElement).getByTestId(
//       'operationbottombar-chart',
//     );
//     expect(buttonElement).toBeOnTheScreen();
//     expect(mockOnChartPress).toBeCalledTimes(0);
//     fireEvent.press(buttonElement);
//     expect(mockOnChartPress).toBeCalledTimes(1);
//   });
