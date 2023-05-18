import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Person from "/public/images/icons/person.svg";
import Phone from "/public/images/icons/phone.svg";
import Email from "/public/images/icons/email.svg";

import { Button } from "@/modules/common";
import { schema, IFormInputs } from "@/modules/contacts";

const inputStyle = {
  label: "text-xs text-slate-800 block mb-1 desk:text-sm",
  input:
    "input peer w-full h-10 pl-10 text-black outline-none border-[1px] border-solid border-[rgba(33, 33, 33, 0.2] rounded hover:border-sky-600  focus:border-sky-600 ]  desk:h-11",
  svg: "absolute left-3 top-1/2 w-4 h-4 translate-y-[-50%] peer-[.input]:peer-focus:text-sky-600 peer-[.input]:peer-hover:text-sky-600",
};

export const ContactsForm: FC = () => {
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  const { label, input, svg } = inputStyle;

  const onSubmit = (data: IFormInputs) => {
    console.log(data);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mob:max-w-[388px] tab:w-2/3 tab:max-w-none tab:mx-auto desk:w-1/2 "
    >
      <div className="mb-5">
        <label className={label} htmlFor="name">
          Name
        </label>
        <div className="relative ">
          <input type="text" aria-label="Name" className={input} id="name" {...register("name")} />
          <Person className={svg} />
        </div>
        {errors.name && <p className="absolute text-red-500 text-xs">{errors.name?.message}</p>}
      </div>

      <div className="mb-5">
        <label className={label} htmlFor="phone">
          Phone
        </label>
        <div className="relative">
          <input
            type="tel"
            aria-label="Phone"
            className={input}
            id="phone"
            {...register("phone")}
          />
          <Phone className={svg} />
          {errors.phone && <p className="absolute text-red-500 text-xs">{errors.phone?.message}</p>}
        </div>
      </div>

      <div className="mb-5">
        <label className={label} htmlFor="email">
          Email
        </label>
        <div className="relative">
          <input
            type="email"
            aria-label="Email"
            className={input}
            id="email"
            {...register("email")}
          />
          <Email className={svg} />
          {errors.email && <p className="absolute text-red-500 text-xs">{errors.email?.message}</p>}
        </div>
      </div>

      <div className="mb-7 policy">
        <input
          type="checkbox"
          className="mr-2 leading-tight h-3 w-3"
          id="policy"
          {...register("policyCheck")}
        />
        <label className="text-xs desk:text-sm" htmlFor="policy">
          I agree with the newsletter and accept;
        </label>
        {errors.policyCheck && (
          <p className="absolute text-red-500 text-xs">{errors.policyCheck?.message}</p>
        )}
      </div>

      <Button type="submit" text="Send" style="mx-auto" />
    </form>
  );
};
