import React, { useEffect, useState } from 'react';
import { Button, Table, Form, Col, Input, Row, Modal, Icon } from 'antd';
import moment from 'moment';
import './query.scss';
import { connect } from 'react-redux';
import { getTableDataAsync } from '@/store/actionCreator.js';

const columns = [
  {
    title: '规则编号',
    dataIndex: 'no',
    key: 'no',
  },
  {
    title: '描述',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: '服务调用次数',
    dataIndex: 'callNo',
    key: 'callNo',
  },
  {
    title: '状态',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: '更新时间',
    dataIndex: 'updatedAt',
    key: 'updatedAt',
    render: (text) => {
      return moment(text).format('YYYY-MM-DD hh:mm:ss');
    }
  },
  {
    title: '操作',
    dataIndex: 'operate',
    key: 'operate',
  }
];

const formList = ['规则名称', '使用状态', '调用次数', '更新日期', '使用状态', '使用状态'];
const QueryList = (props) => {
  const [visible, setVisible] = useState(false);
  const { getFieldDecorator } = props.form;
  useEffect(() => {
    props.dispatch(getTableDataAsync());
  }, []);
  const getFields = () => {
    const children = [];
    formList.forEach((form, i) => {
      children.push(
        <Col span={8} key={i}>
          <Form.Item label={form}>
            {getFieldDecorator(`field-${i}`, {})(<Input placeholder="请选择"/>)}
          </Form.Item>
        </Col>,
      );
    });
    return children;
  };
  return (
    <div className={'list-query'}>
      <Form>
        <Row gutter={24}>
          {getFields()}
        </Row>
      </Form>
      <Table
        title={() => <Button onClick={() => setVisible(true)} type={'primary'}><Icon type={'plus'}/>新建</Button>}
        columns={columns}
        dataSource={props.dataSource}
      />
      <Modal
        title="新建规则"
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        okText="确认"
        cancelText="取消"
      >
        <Form layout={'inline'}>
          <Form.Item label={'描述'}>
            {getFieldDecorator(`rule`, {
              rules: [
                { required: true }
              ]
            })(<Input placeholder="请输入"/>)}
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    dataSource: state
  };
};
export default connect(mapStateToProps, null)(Form.create()(QueryList));
