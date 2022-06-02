import React, { useRef, useEffect, useState } from 'react';
import styles from './index.less';
import { history } from 'umi';
import { useRequest } from 'umi';
interface PropsType {}

const EssayPage: React.FC<PropsType> = (props) => {
  const initData = () => {
    // const { data, error, loading } = useRequest(() => {
    //   return services.getUserList('/api/test');
    // });
  };
  useEffect(() => {
    initData();
  }, []);
  const list = [
    {
      title: '暑意尚存，立秋已至',
      value: 1,
    },
    {
      value: 2,
      title: '哼一首歌等日落',
    },
    {
      value: 3,
      title: '查无此人',
    },
  ];
  const handlePush = (val: any) => {
    history.push(`/essay/detail?id=${val.value}`);
  };
  return (
    <div className={styles['essay-wrapper']}>
      <div className={styles['essay-main']}>
        {list.map((item: any) => (
          <div
            className={styles['essay-item-wrapper']}
            onClick={() => handlePush(item)}
          >
            <div className={styles['essay-item-image']}>
              <img
                alt="example"
                className={styles['item-image']}
                src={require(`../../assets/images/${item.value}.jpg`)}
              />
            </div>
            <div className={styles['item-title']}>{item.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EssayPage;
