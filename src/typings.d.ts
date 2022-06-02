// .umirc.ts 运行时变量
declare const RUNTIME_BASEPATH: string;
declare const RUNTIME_BASEAPI: string;
declare const RUNTIME_BASESOCKET: string;
declare const RUNTIME_FAVICONPATH: string;
declare const RUNTIME_SYSTEM_NAME: string;
declare const RUNTIME_SHOWLOG: boolean;
declare const RUNTIME_TIME_FORMAT: 'YYYY-MM-DD HH:mm:ss';
declare const RUNTIME_IS_PROD: boolean;

declare module '*.less';
declare module '*.svg';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.bmp';
declare module '*.tiff';
declare module '*.ts';
declare module '*.js';
declare module 'md5';
declare module 'lodash';
declare module 'compression-webpack-plugin';

// eslint-disable-next-line @typescript-eslint/consistent-type-imports
type IRouteComponentProps = import('umi').IRouteComponentProps;

interface IRouteInfo {
  /** 是否完全匹配 */
  exact?: boolean;
  /** 是否强制显示菜单(无视权限) */
  fixed?: boolean;
  /** 路径 */
  path?: string;
  /** 唯一标识，与key和menuCode效果一样 */
  name?: string;
  /** 唯一标识 */
  // key?: string;
  /** 显示在菜单和tab中的名称 */
  // label?: string;
  /** 菜单图标（目前仅一级菜单支持显示） */
  icon?: string;
  /** 是否在菜单列表展示，(通常用于新建编辑等页面的过滤)false为隐藏 */
  visible?: boolean;
  /** 菜单id */
  // menuId?: number;
  /** 权限码（菜单编码） */
  menuCode?: string;
  /** 重定向 */
  redirect?: string;
  /** 页面组件，备用 */
  component?: string;
  /** 导航路由的父级标志，便于对比 */
  naviMenus?: boolean;
  /** 配置权限（忽略接口返回权限，通常用于测试或者固定权限） */
  hasAuth?: boolean;
  /** 子路由 */
  routes?: IRouteInfo[];
  [keys: string]: any;
}

interface IOauth_roles {
  id: number;
  menuCode: string;
  permissionType: string;
  show?: boolean;
  sort: number;
  children?: IOauth_roles[];
}

interface IRouteMenu extends IRouteInfo {
  id?: number;
  nameCode?: string;
  permissionType?: string;
  show?: boolean;
  sort?: number;
  level?: number;
  children?: IRouteMenu[];
}

interface IInitState {
  initSuccess?: boolean;
  oauth_resources: IOauth_roles[];
  oauth_roles: any[];
  user_detail: {
    accountName: string;
    id: number;
    userName?: string;
    ownerProjectId: number;
    virtual: number;
    // bigLogoId: string | null;
    // createTime: number;
    // customerName: string;
    // globalWarn: number;
    // groupId: number;
    // groupType: number;
    // hasFirstLogin: string;
    // imageId: string;
    // orgName: string;
    // ownerOrgId: number;
    // parentId: null | string;
    // phoneNum: string;
    // reset: string;
    // smallLogoId: null | string;
    // superuser: number;
    // uType: null | string;
  };
}

interface IOptionItem {
  label: string;
  value: string | number;
}

interface IStyleComp {
  style?: React.CSSProperties;
  className?: string;
}

interface IStompInfo {
  url: string;
  disabled?: boolean;
}

interface Window {
  TestTool?: {
    stomp?: {
      // eslint-disable-next-line @typescript-eslint/consistent-type-imports
      instance: import('@/utils/stompInstance').default;
    };
    [keys: string]: any;
  };
  AiConfig?: {
    dev: {
      stomp: IStompInfo;
    };
    prod: {
      stomp: IStompInfo;
    };
  };
}

interface IResult {
  respCode: number;
  respMark: string;
  respMessage: string;
  data: any;

  stream: ReadableStream;
  fileName: string;
  blobUrl: string;
  [keys: string]: any;
}
