
import React, {  ComponentProps } from 'react';

export default function Button({children}:ComponentProps<any>) {
  return (
    <button>
        {children}
    </button>
  );
}