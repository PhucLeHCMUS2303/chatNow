import React,{useState} from "react";
import { Form, Input, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import {Link} from 'react-router-dom';
import {Mail} from 'react-feather';
import "../../styles/SignupStyle.css";
import logo from '../../image/iconchat.png';
import {auth} from '../../services/firebase';
import {useTranslation} from "react-i18next";

const SignUp = ({form}) => {

  const [info,setInfo] = useState({firstName: null,
                                  lastName: null,
                                  email: null,
                                  password:null}
                                  );

  const [t] = useTranslation("common");

  const onFinish = (values)=>{
    setInfo({
      firstName:values.firstname,
      lastName:values.lastname,
      password:values.password,
      email:values.email
    });
  };

  const doRegister = (values) => {

    auth()
      .createUserWithEmailAndPassword(values.email, values.password)
      .then((res) => {
        console.log(res);
        onFinish(values);
      });
}


  return (
    <div className="marin-center">
      <img src={logo} alt="logo chat" />
      <h3>{t("signup.title")}</h3>
      <p>{t("createAccount.title")}</p>

      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
            remember: true,
        }}
        onFinish={doRegister}
      >
        <div className="displayForm">
        <Form.Item
          name="firstname"
          label={t("firstName.title")}
          rules={[
            {
              required: true,
              message: "Please input your Firstname!",
            },
            {
                min: 2,
                message: "At less 2 characters!",
            },
            {
                max: 20,
                message: "Must be 20 characters or less!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Firstrname"
          />
        </Form.Item>
        <Form.Item
          name="lastname"
          label={t("lastName.title")}
          rules={[
            {
              required: true,
              message: "Please input your Lastname!",
            },
            {
                min: 2,
                message: "At less 2 characters!",
            },
            {
                max: 20,
                message:
                    "Must be 20 characters or less!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Lastname"
          />
        </Form.Item>
        </div>
        <Form.Item
          name="email"
          label="Email"
          rules={[
            {
              required: true,
              message: "Please input your Email!",
            },
            {
                type: 'email',
                message: "The input is not valid E-mail!",
            }
          ]}
        >
          <Input
            prefix={<Mail/>}
            placeholder="Email"
            type='email'
          />
        </Form.Item>
        <Form.Item
          name="password"
          label={t("password.title")}
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
            {
                min: 6,
                message: "At less 6 characters!",
            },
            {
                max: 128,
                message: "Must be 128 characters or less!",
            },
          ]}
        >
          <Input.Password 
            placeholder="Password" 
            type="password"
            ></Input.Password>
        </Form.Item>

        <Form.Item
          name="confirm_password"
          label={t("confirmPassword.title")}
          rules={[
            {
                required: true,
                message: "Please input confirm pass word!",
            },
            ({ getFieldValue }) => ({
                validator(rule, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
    
                  return Promise.reject('The two passwords that you entered do not match!');
                },
              }),
          ]}
        >
          <Input.Password 
            placeholder="Confirm password" 
            label="Confirm password"
            type="password"
            ></Input.Password>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            {t("signup.title")}
          </Button>
        {t("haveAccount.title")} <Link to="/signin"> {t("loginNow.title")}</Link>
        </Form.Item>
      </Form>
    </div>
  );
};

export default (SignUp);
