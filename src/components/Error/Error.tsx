import React, { FC } from 'react';
import { FallbackProps } from 'react-error-boundary';

const Error: FC<FallbackProps> = ({ error, resetErrorBoundary }) => (
  <div role="status" className="Error">
    <h1 className="Error__title">Oops! An error occurred:</h1>
    <pre className="Error__text">{error.message}</pre>
    <button type="button" onClick={resetErrorBoundary}>
      Try again
    </button>
  </div>
);

export default Error;
