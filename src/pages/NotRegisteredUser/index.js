import React, { Fragment, useContext } from "react";
import { UserForm } from "../../components/UserForm";
import { LoginMutation } from "../../containers/LoginMutation";
import { RegisterMutation } from "../../containers/RegisterMutation";
import { Context } from "../../Context";

export const NotRegisteredUser = () => {
  const { activateAuth } = useContext(Context);
  return (
    <Fragment>
      <RegisterMutation>
        {(register, { data, loading, error }) => {
          const onSubmit = ({ email, password }) => {
            const input = { email, password };
            const variables = { input };
            register({ variables }).then(({ data }) => {
              const { singup } = data;
              activateAuth(singup);
            });
          };
          const errorMsg =
            error && "El usuario ya existe o hay algún problema!";

          return (
            <UserForm
              disabled={loading}
              error={errorMsg}
              onSubmit={onSubmit}
              title="Registrarse"
            />
          );
        }}
      </RegisterMutation>
      <LoginMutation>
        {(login, { data, loading, error }) => {
          const onSubmit = ({ email, password }) => {
            const input = { email, password };
            const variables = { input };
            login({ variables }).then(({ data }) => {
              const { login } = data;
              activateAuth(login);
            });
          };
          const errorMsg = error && "Credenciales incorrectas!";

          return (
            <UserForm
              title="Iniciar sesión"
              onSubmit={onSubmit}
              disabled={loading}
              error={errorMsg}
            />
          );
        }}
      </LoginMutation>
    </Fragment>
  );
};
