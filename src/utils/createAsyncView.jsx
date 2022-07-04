import { lazy } from 'react';

export default function createAsyncView(componentName) {
  return lazy(() => import(`views/${componentName}`));
}
