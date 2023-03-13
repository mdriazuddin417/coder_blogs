import React, { useState } from "react";

import {
  Card,
  CardBody,
  Tabs,
  TabsHeader,
  TabPanel,
  TabsBody,
  Tab,
} from "@material-tailwind/react";
import SignUp from "./SignUp";
import Login from "./Login";

export default function Parent() {
  const [type, setType] = useState("login");

  return (
    <div className="flex justify-center items-center w-full h-screen login">
      <Card className="w-full max-w-[25rem] glass">
        <CardBody>
          <Tabs value={type} className="overflow-visible">
            <TabsHeader className="relative z-0 ">
              <Tab value="login" onClick={() => setType("login")}>
                Log In
              </Tab>
              <Tab value="signup" onClick={() => setType("signup")}>
                Sign Up
              </Tab>
            </TabsHeader>
            <TabsBody
              animate={{
                initial: {
                  x: type === "login" ? 400 : -400,
                },
                mount: {
                  x: 0,
                },
                unmount: {
                  x: type === "login" ? 400 : -400,
                },
              }}
            >
              <TabPanel value="login" className="p-0">
                <div className="mt-5 flex flex-col gap-4">
                  <Login setType={setType} />
                </div>
              </TabPanel>
              <TabPanel value="signup" className="p-0">
                <div className="mt-5 flex flex-col gap-4">
                  <SignUp setType={setType} />
                </div>
              </TabPanel>
            </TabsBody>
          </Tabs>
        </CardBody>
      </Card>
    </div>
  );
}
