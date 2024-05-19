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
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Invalid email address.",
  }),
  mobile: z.string().regex(indianMobileNumberRegex, {
    message: "Invalid Indian mobile number.",
  }),
  password: z.string().regex(passwordRegex, {
    message:
      "Password must be at least 8 characters long, include one capital letter and one special character.",
  }),
});

const Signup = () => {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      mobile: "",
      password: "",
    },
  });

  const { reset } = form;

  function onSubmit(values: z.infer<typeof formSchema>) {
    const signupData = {
      name: values.name,
      email: values.email,
      number: values.mobile,
      password: values.password,
    };
    axiosInstance
      .post("/auth/register", signupData)
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
      <h1 className="text-2xl font-bold mb-4">Signup</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Full name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Email ID" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="mobile"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Number</FormLabel>
                <FormControl>
                  <Input placeholder="Mobile NO." {...field} maxLength={10} />
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
    </>
  );
};

export default Signup;
