import { useState } from "react";
import { Layout } from "../../conponents/Layout/Layout";
import { Card, Form, Row, Space, Typography } from "antd";
import { CustomInput } from "../../conponents/CustomInput/CustomInput";
import { PasswordInput } from "../../conponents/PasswordInput/PasswordInput";
import { CustomButton } from "../../conponents/CustomButtom/CustomButton";
import { Link, useNavigate } from "react-router-dom";
import { Paths } from "../../paths";
import { UserData, useLoginMutation } from "../../app/services/auth";
import { isErrorsWithMassage } from "../../utils/isErrorWithMassage";
import { ErrorMessage } from "../../conponents/ErrorMassage/ErrorMessage";

export const Login = () => {
  const navigate = useNavigate();
  const [loginUser, loginUserResult] = useLoginMutation();
  const [error, serError] = useState("");

  const login = async (data: UserData) => {
    try {
      await loginUser(data).unwrap();

      navigate("/");
    } catch (err) {
      const maybeError = isErrorsWithMassage(err);

      if (maybeError) {
        serError(err.data.message);
      } else {
        serError("Неизвестная ошибка");
      }
    }
  };

  return (
    <Layout>
      <Row align={"middle"} justify={"center"}>
        <Card title="Вход" style={{ width: "30rem" }}>
          <Form onFinish={login}>
            <CustomInput type="email" name="email" placeholder="Email" />
            <PasswordInput name="password" placeholder="Пароль" />
            <CustomButton type="primary" htmlType="submit">
              Войти
            </CustomButton>
          </Form>
          <Space direction="vertical" size="large">
            <Typography.Text>
              Нет аккаунта? <Link to={Paths.register}>Зарегистрируйтесь</Link>
            </Typography.Text>
            <ErrorMessage message={error} />
          </Space>
        </Card>
      </Row>
    </Layout>
  );
};
