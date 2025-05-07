"use client";

import {
  ModalBody,
  ModalContent,
  useModal,
} from "@/components/ui/animated-modal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useMutation } from "@/hooks/swr";
import {
  Controller,
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { CreateEmailResponse } from "resend";

type TFormData = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};

type TFormReq = TFormData;

type TFormRes = CreateEmailResponse;

export default function FormModal() {
  const { setOpen } = useModal();
  const { trigger } = useMutation<TFormRes, TFormReq>("/api/send", {
    onSuccess: ({ data, error }) => {
      if (error || !data || (data && !data?.id)) {
        console.log("# data", data);
        return;
      }
      setOpen(false);
    },
    onError: (error) => {
      console.error("# error", error);
    },
  });
  const { handleSubmit, control } = useForm<TFormData>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
  });

  const onSubmit: SubmitHandler<TFormData> = async (data) => {
    trigger(data);
  };

  const onError: SubmitErrorHandler<TFormData> = (error) => {
    console.error("# error", error);
  };

  return (
    <>
      <ModalBody>
        <ModalContent>
          <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
            Let&apos;s get in touch!
          </h4>
          <form onSubmit={handleSubmit(onSubmit, onError)}>
            <Controller
              name="firstName"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  type="text"
                  placeholder="First Name"
                  className="mt-4 "
                />
              )}
            />
            <Controller
              name="lastName"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  type="text"
                  placeholder="Last Name"
                  className="mt-4 "
                />
              )}
            />
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  type="email"
                  placeholder="Email Address"
                  className="mt-4 "
                />
              )}
            />
            <Controller
              name="message"
              control={control}
              render={({ field }) => (
                <Textarea
                  {...field}
                  placeholder="write your message here..."
                  className="mt-4"
                />
              )}
            />
            <Button type="submit" className="mt-4 w-full">
              Submit
            </Button>
          </form>
        </ModalContent>
      </ModalBody>
    </>
  );
}
