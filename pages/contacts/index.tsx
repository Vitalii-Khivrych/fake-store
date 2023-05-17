import React from "react";

import { Container } from "@/modules/common";
import { ContactsForm } from "@/modules/contacts";

const Contacts = () => {
  return (
    <section className="pt-24">
      <Container>
        <ContactsForm />
      </Container>
    </section>
  );
};

export default Contacts;
