import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axiosInstance from "@/utils/axiosInstance";
import { toast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

// Define a regular expression for the Indian mobile number validation
const indianMobileNumberRegex = /^[6-9]\d{9}$/;

// Define a regular expression for the password validation
const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;

const formSchema = z.object({
  mobile: z.string().regex(indianMobileNumberRegex, {
    message: "Invalid Indian mobile number.",
  }),
  password: z.string().regex(passwordRegex, {
    message:
      "Password must be at least 8 characters long, include one capital letter and one special character.",
  }),
});

const Signin = ({ setSignIn }: { setSignIn: (arg0: boolean) => void }) => {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      mobile: "",
      password: "",
    },
  });

  const { reset } = form;

  function onSubmit(values: z.infer<typeof formSchema>) {
    const signupData = {
      mobile: parseInt(values.mobile),
      password: values.password,
    };
    axiosInstance
      .post("/auth/login", signupData)
      .then((response) => {
        console.log(response);
        toast({
          title: "Hurreeyyyy 🎉",
          description: response?.data?.msg ?? "user created successfully.",
        });
        localStorage.setItem("auth", response?.data?.token);
        reset();
        router.push("/");
      })
      .catch((error) => {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: error?.response?.data?.msg ?? "",
        });
      });
  }

  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Signin</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
          <FormField
            control={form.control}
            name="mobile"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Number</FormLabel>
                <FormControl>
                  <Input placeholder="Mobile no" {...field} maxLength={10} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="Password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
      <div className="mt-10 text-center text-sm text-gray-700 flex gap-3 justify-center items-center">
        <span>Don't have an account?</span>
        <span
          className="underline hover:text-rani cursor-pointer"
          onClick={() => {
            setSignIn(false);
          }}
        >
          Sign up →
        </span>
      </div>
    </>
  );
};

export default Signin;
