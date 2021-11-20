import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import { useHistory } from "react-router-dom";
import CanLeavingGuard from "../components/CanLeavingGuard.component";
import { usePreventReload } from "../hooks/usePreventReload";

const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8 },
};
const formTailLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8, offset: 4 },
};

const FormPage = () => {
  const [isBlocking, setIsBlocking] = useState(false);
  const history = useHistory();
  const [form] = Form.useForm();
  usePreventReload(isBlocking);
  const onChangeValuesHandler = () => {
    setIsBlocking(true);
  };

  const onCheck = async () => {
    try {
      const values = await form.validateFields();
      console.log("Success:", values);
    } catch (errorInfo) {
      console.log("Failed:", errorInfo);
    }
  };

  const onFinishHandler = () => {
	  console.log(form.getFieldsValue())
  }

  return (
    <Form
      form={form}
      name="dynamic_rule"
      onValuesChange={onChangeValuesHandler}
	  onFinish={onFinishHandler}
    >
      <Form.Item
        {...formItemLayout}
        name="username"
        label="Name"
        rules={[
          {
            required: true,
            message: "Please input your name",
          },
        ]}
      >
        <Input placeholder="Please input your name" />
      </Form.Item>
      <Form.Item {...formItemLayout} name="nickname" label="Nickname">
        <Input placeholder="Please input your nickname" />
      </Form.Item>
      <Form.Item {...formTailLayout}>
        <Button type="primary" onClick={onCheck}>
          Check
        </Button>
      </Form.Item>
      <CanLeavingGuard
        when={isBlocking}
        navigate={(path) => history.push(path)}
		submit={onFinishHandler}
      />
    </Form>
  );
};

export default FormPage;
