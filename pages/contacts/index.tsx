import React from "react";

import { Container } from "@/modules/common";
import { ContactsForm } from "@/modules/contacts";

const Contacts = () => {
  return (
    <section className="pt-20">
      <Container>
        <h1 className="text-center font-bold text-2xl mb-2 tab:text-[26px]">
          Leave your details, we will call you back
        </h1>
        <ContactsForm />
      </Container>
    </section>
  );
};

export default Contacts;
