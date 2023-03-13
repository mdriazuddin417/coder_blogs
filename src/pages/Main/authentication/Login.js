import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Login({ setType }) {
  const user = useSelector((state) => state.user.user);
  const navigation = useNavigate();
  const handleLogin = () => {
    if (user) {
      return navigation("/");
    }
    return;
  };
  return (
    <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">
        Log In
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Enter your details to login.
      </Typography>
      <form className="mt-8 mb-2 ">
        <div className="mb-4 flex flex-col gap-6">
          <Input size="lg" label="Email" value={user?.email} />
          <Input
            type="password"
            size="lg"
            label="Password"
            value={user?.password}
          />
        </div>

        <Button type="button" className="mt-6" fullWidth onClick={handleLogin}>
          Login
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          I have no an account?
          <span
            onClick={() => setType("signup")}
            className="font-medium text-blue-500 transition-colors hover:text-blue-700"
          >
            Sign Up
          </span>
        </Typography>
      </form>
    </Card>
  );
}
