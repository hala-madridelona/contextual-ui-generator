'use client';

import Chat from "@/components/chat";
import { Renderer } from "@/components/renderer";
import { Button } from "@/components/ui";
import clsx from "clsx";
import { useState } from "react";
import { isValid } from "zod/v3";

export default function Home() {
  const [jsonInString, setJsonInString] = useState("");
  const [isJsonValid, setIsJsonValid] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    console.log('FORM SUBMITTED WITH => ', jsonInString);
    setSubmitted(true);
  }

  console.log('IJV: ', isJsonValid);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setSubmitted(false);
    const newString = e.target.value;
    setJsonInString(newString);
    console.log('I AM HERE!!');
    try {
      JSON.parse(newString);
      setIsJsonValid(true);
    } catch (e) {
      setIsJsonValid(false);
    }

  }

  return (
    <div className="flex flex-row gap-2">
      <div className="m-2 flex flex-col gap-2">
        <textarea 
          className={
            clsx(
              "w-[600px] h-[600px] border-2 p-2 focus:ring-0 focus:outline-none",
              { 
                "border-red-500 focus:border-red-500 hover:border-red-500": !isJsonValid,
              },
              {
                "border-gray-950 focus:border-gray-950 hover:border-gray-950": isJsonValid
              }
            )
          } 
          onChange={onChange} />
        <button disabled={!isJsonValid} className="w-fit p-2 border-2 border-zinc-900" onClick={handleSubmit}>Submit</button>
      </div>
      <Chat />
      {submitted && <Renderer schema={JSON.parse(jsonInString)} />}
    </div>
  );
}
