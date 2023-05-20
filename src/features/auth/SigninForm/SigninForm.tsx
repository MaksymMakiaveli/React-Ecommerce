import { useForm } from 'react-hook-form';

import { FormInput } from '@components';
import { signinSchema } from '@core/repositories/auth';
import { useAuthStore } from '@core/stores';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@shared/UI';

import type { SigninDto } from '@core/repositories/auth';
import type { AuthState } from '@core/stores';
import type { SubmitHandler } from 'react-hook-form';

import styles from './SigninForm.module.scss';

const authSelector = (state: AuthState) => [state.login];

export const SigninForm = () => {
  const [login] = useAuthStore(authSelector);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<SigninDto>({
    resolver: zodResolver(signinSchema),
    mode: 'onBlur',
  });

  const onSubmit: SubmitHandler<SigninDto> = (data) => {
    login(data);
  };

  console.log();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormInput label="Email" name="username" register={register} errors={errors} />
      <FormInput label="Password" name="password" register={register} errors={errors} />
      <Button type="submit" className={styles.button}>
        Sign in
      </Button>
    </form>
  );
};
