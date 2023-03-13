import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { BiHide, BiShowAlt } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userData } from "../../../redux/action/userAction";

export default function SignUp({ setType }) {
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState(null);
  const [show, setShow] = useState(null);
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    if (data.password !== data.confirmPass) {
      return setError("No match password");
    }
    setError(null);

    dispatch(userData(data));
    navigation("/");
  };
  return (
    <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">
        Sign Up
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Enter your details to register.
      </Typography>
      <form className="mt-8 mb-2 " onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4 flex flex-col gap-6">
          <Input
            size="lg"
            label="Name"
            {...register("name", { required: true })}
          />
          <Input
            size="lg"
            label="Email"
            {...register("email", { required: true })}
          />
          <div className="relative">
            <Input
              type={show ? "text" : "password"}
              size="lg"
              label="Password"
              {...register("password", { required: true })}
            />
            <div className="absolute right-2 top-3">
              {show ? (
                <BiShowAlt className="text-xl" onClick={() => setShow(!show)} />
              ) : (
                <BiHide className="text-xl" onClick={() => setShow(!show)} />
              )}
            </div>
          </div>
          <Input
            type="password"
            size="lg"
            error={error ? true : false}
            label={error ? error : "ConfirmPass"}
            {...register("confirmPass", { required: true })}
          />
        </div>
        <Checkbox
          {...register("status")}
          label={
            <Typography
              variant="small"
              color="gray"
              className="flex items-center font-normal"
            >
              I agree the
              <span className="font-medium transition-colors hover:text-blue-500">
                &nbsp;Terms and Conditions
              </span>
            </Typography>
          }
          containerProps={{ className: "-ml-2.5" }}
        />
        <Button className="mt-6" fullWidth type="submit">
          Register
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Already have an account?{" "}
          <button
            onClick={() => setType("login")}
            className="font-medium text-blue-500 transition-colors hover:text-blue-700"
          >
            Sign In
          </button>
        </Typography>
      </form>
    </Card>
  );
}
