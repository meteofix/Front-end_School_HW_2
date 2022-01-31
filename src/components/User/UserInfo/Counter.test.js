import { render, screen } from '@testing-library/react';
import TestingContextAndRouterWrapper from '../../../utils/testingContextAndRouterWrapper';
import React from 'react';
import Counter from './Counter';
import VideoMusic from '../../Post/Video/VideoMusic';

jest.mock('../../../utils/countRound', () => (count) => count);

describe('Counter', () => {
  let title, count;
  beforeEach(() => {
    title = 'Following';
    count = 63;
  });

  describe('expect renders', () => {
    it('should render title', () => {
      render(
        <TestingContextAndRouterWrapper>
          <Counter title={title} count={count} />
        </TestingContextAndRouterWrapper>
      );

      expect(screen.getByText(/following/i)).toBeInTheDocument();
    });
    it('should render data from mocked countRound, called with "count" prop ', () => {
      render(
        <TestingContextAndRouterWrapper>
          <Counter title={title} count={count} />
        </TestingContextAndRouterWrapper>
      );

      expect(screen.getByText('63')).toBeInTheDocument();
    });
  });

  describe('expect classNames', () => {
    it('elements should have mobile className when isMobile is true', () => {
      render(
        <TestingContextAndRouterWrapper isMobile={true}>
          <Counter title={title} count={count} />
        </TestingContextAndRouterWrapper>
      );

      expect(screen.getByTestId('number')).toHaveClass('numberMobile');
      expect(screen.getByTestId('unit')).toHaveClass('unitMobile');
    });

    it('elements should not have mobile className when isMobile is false', () => {
      render(
        <TestingContextAndRouterWrapper>
          <Counter title={title} count={count} />
        </TestingContextAndRouterWrapper>
      );

      expect(screen.getByTestId('number')).not.toHaveClass('numberMobile');
      expect(screen.getByTestId('unit')).not.toHaveClass('unitMobile');
    });
  });
});
