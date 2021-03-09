import React from 'react';
import { Form, Input, Button } from 'antd';

import './index.less';

const PhoneLoginBind = ({ onSuccess }) => {

    const onFinish = (values) => {
        onSuccess(values)
    };

    return (
        <Form
            name="normal_login"
            className="login-form-main"
            initialValues={{ remember: true }}
            onFinish={onFinish}
        >
            <Form.Item
                name="phone"
                rules={[
                    { required: true, message: '请输入手机号' },
                    { pattern: /^1\d{10}$/, message: '手机号格式不正确' },
                ]}
            >
                <Input placeholder="请输入手机号" />
            </Form.Item>
            <Form.Item name="code" rules={[{ required: true, message: '请输入验证码' }]}>
                <Input placeholder="请输入验证码" />
            </Form.Item>
            <Form.Item>
                <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-main-submit"
                >
                    登录
                </Button>
            </Form.Item>
        </Form>
    );
};

export default PhoneLoginBind;
