import React from "react";
import { Layout } from "../../conponents/Layout/Layout";
import { Card, Form, Row, Space, Typography } from "antd";
import { CustomInput } from "../../conponents/CustomInput/CustomInput";
import { PasswordInput } from "../../conponents/PasswordInput/PasswordInput";
import { CustomButton } from "../../conponents/CustomButtom/CustomButton";
import { Link } from "react-router-dom";
import { Paths } from "../../paths";

export const Login = () => {
  return (
    <Layout>
      <Row align={"middle"} justify={"center"}>
        <Card title="Вход" style={{ width: "30rem" }}>
          <Form onFinish={() => null}>
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
          </Space>
        </Card>
      </Row>
    </Layout>
  );
};
