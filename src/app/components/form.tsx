"use client";

import {
  ModalBody,
  ModalContent,
} from "@/components/ui/animated-modal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function FormModal() {
  // const handleSend = async () => {
  //   const payload = {
  //     email: "ttt@mail.com",
  //     firstName: "Ed",
  //     lastName: "g",
  //     message: "Hello",
  //   };
  //
  //   const data = await fetch("/api/send", {
  //     method: "POST",
  //     body: JSON.stringify(payload),
  //   }).then((res) => res.json());
  //   console.log("# data", data);
  // };

  return (
    <>
      <ModalBody>
        <ModalContent>
          <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
          Let&apos;s get in touch!
          </h4>
          <Input type="text" placeholder="First Name" className="mt-4 "/> 
          <Input type="text" placeholder="Last Name" className="mt-4"/> 
          <Input type="email" placeholder="Email Address" className="mt-4"/> 
          <Textarea placeholder="write your message here..." className="mt-4"/>
          <Button className="mt-4">Submit</Button>
          </ModalContent>
      </ModalBody>
    </>
  );
}
