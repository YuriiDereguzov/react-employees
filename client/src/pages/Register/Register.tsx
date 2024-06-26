import React from "react";
import { Layout } from "../../conponents/Layout/Layout";
import { Card, Form, Row, Space, Typography } from "antd";
import { CustomInput } from "../../conponents/CustomInput/CustomInput";
import { PasswordInput } from "../../conponents/PasswordInput/PasswordInput";
import { CustomButton } from "../../conponents/CustomButtom/CustomButton";
import { Link } from "react-router-dom";
import { Paths } from "../../paths";

export const Register = () => {
  return (
    <Layout>
      <Row align={"middle"} justify={"center"}>
        <Card title="Регистрация" style={{ width: "30rem" }}>
          <Form onFinish={() => null}>
            <CustomInput name="name" placeholder="Имя" />
            <CustomInput type="email" name="email" placeholder="Email" />
            <PasswordInput name="password" placeholder="Пароль" />
            <PasswordInput
              name="confirmPassword"
              placeholder="Повторите пароль"
            />
            <CustomButton type="primary" htmlType="submit">
              Зарегистрироваться
            </CustomButton>
          </Form>
          <Space direction="vertical" size="large">
            <Typography.Text>
              Уже зарегистрированы? <Link to={Paths.login}>Войдите</Link>
            </Typography.Text>
          </Space>
        </Card>
      </Row>
    </Layout>
  );
};
