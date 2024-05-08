import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoginOutlined, TeamOutlined, UserOutlined } from "@ant-design/icons";
import { Layout, Space, Typography } from "antd";
import { CustomButton } from "../CustomButtom/CustomButton";
import { Paths } from "../../paths";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../features/auth/authSlice";
import styles from "./Header.module.css";

export const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const onLogoutClick = () => {
    dispatch(logout());
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <Layout.Header className={styles.header}>
      <Space>
        <TeamOutlined className={styles.teamIcon} />
        <Link to={Paths.home}>
          <CustomButton type="ghost">
            <Typography.Title level={1}>Сотрудники</Typography.Title>
          </CustomButton>
        </Link>
      </Space>
      {user ? (
        <CustomButton
          type="ghost"
          icon={<LoginOutlined />}
          onClick={onLogoutClick}
        >
          Выйти
        </CustomButton>
      ) : (
        <Space>
          <Link to={Paths.register}>
            <CustomButton type="ghost" icon={<UserOutlined />}>
              Зарегистрировать
            </CustomButton>
          </Link>
          <Link to={Paths.login}>
            <CustomButton type="ghost" icon={<LoginOutlined />}>
              Войти
            </CustomButton>
          </Link>
        </Space>
      )}
    </Layout.Header>
  );
};
