import ProLayout from './ProLayout';
import { useModel } from 'umi';
import { useEffect } from 'react';

/**
 * 根布局组件
 * @param props
 * @returns ReactElment
 */
export default function (props: IRouteComponentProps) {
 
  return <ProLayout {...props} />;
}
