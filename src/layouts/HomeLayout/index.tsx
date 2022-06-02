import styles from './index.less';
import { history } from 'umi';
import { Layout } from 'antd';
const { Header, Footer, Content } = Layout;
import { Tabs } from 'antd';
import { useState } from 'react';
const { TabPane } = Tabs;
const headerList: any = [
  {
    label: '主页',
    path: '/home',
    value: 0,
  },
  {
    label: '文档',
    path: '/document',
    value: 1,
  },
  {
    label: '随笔',
    path: '/essay',
    value: 2,
  },
];
const HomeLayout = (props: IRouteComponentProps) => {
  const { children } = props;
  const [activeTab, setActiveTab] = useState<number>(0);
  const handlePush = (val: any) => {
    console.log('val', val);
    setActiveTab(val.value);
    history.push(val.path);
  };
  return (
    <Layout className="home-wrapper">
      <Header className="home-header">
        <div className={styles['home-header-container']}>
          <div className={styles['home-header-left']}>
            <a href="/" className={styles['header_link']}>
              N.Crystal✨
            </a>
          </div>
          <div className={styles['home-header-right']}>
            {headerList.map((item: any, index: number) => (
              <>
                <div
                  className={`${styles['header-item']} ${
                    styles[activeTab === item.value ? 'activeSelect' : '']
                  }`}
                  key={item.value}
                  onClick={() => handlePush(item)}
                >
                  <span>{item.label}</span>
                </div>
              </>
            ))}
          </div>
        </div>
      </Header>
      <Content style={{ padding: 0 }}>
        <Layout className="home-layout-container">{children}</Layout>
      </Content>
      <Footer className="home-footer-container">
        <div className={styles['home-footer']}>
          <a href="https://beian.miit.gov.cn/" target="_blank">
            粤ICP备2021020229号
          </a>
        </div>
      </Footer>
    </Layout>
  );
};

export default HomeLayout;
