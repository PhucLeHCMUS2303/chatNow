import React,{useState} from "react";
import { Form, Input, Button, Checkbox} from "antd";
import { UserOutlined,WarningOutlined} from "@ant-design/icons";
import {Link, useHistory} from 'react-router-dom';
import {auth} from '../../services/firebase';
import "../../styles/SignInStyle.css";
import logo from '../../image/iconchat.png';
import {useDispatch} from 'react-redux';
import {isSignin} from '../../actions/signin';
import {useTranslation} from "react-i18next";
import {getCookie} from "../../common/cookie";
//import crypto-js from 'crypyto-js';

const SignIn = () => {

  // const [info,setInfo] = useState({
  //                                   email: null,
  //                                   password:null
  // });
  const [t] = useTranslation("common");
  //var CryptoJS = require("crypto-js");
  const [loginFail, setLoginFail]= useState(false);
  const [loading,setLoading]=useState(false);
  const history = useHistory();
  const dispatch=useDispatch();

  const onFinish = async (values) => {

    setLoading(true);
    await auth()
      .signInWithEmailAndPassword(values.email, values.password)
      .then((user) => {
        // setInfo({
        //   password:values.password,
        //   email:values.email
        // });
        const actionSignin = isSignin();
        dispatch(actionSignin);
        history.push("/");
      })
      .catch((err) => {
        setLoginFail(true);
        setLoading(false);
      });
  };

  return (
    <div className="marin-center">
      <Link to="/signin">
        <img src={logo} alt="logo chat" />
      </Link>
      <h3>{t("signin.title")}</h3>
      <p>{t("getStarted.title")}</p>
      <p style={{ color: "red" }}>
        {loginFail && <WarningOutlined />}&nbsp;
        {loginFail && t("loginFail.title")}
      </p>

      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="email"
          label="Email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Email"
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
          ]}
        >
          <Input.Password placeholder="Pass word" label="pass"></Input.Password>
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>{t("rememberMe.title")}</Checkbox>
          </Form.Item>
          <span style={{float:"right"}}>
            <Link tabIndex={1000}>
              <span>{t("forgotPassword.title")}</span>
            </Link>
          </span>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            loading={loading}
          >
            {!loading && t("login.title")}
          </Button>
          {t("notReadyAccount.title")}{" "}
          <Link to="/signup"> {t("register.title")}</Link>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignIn;
