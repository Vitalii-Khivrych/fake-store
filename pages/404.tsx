import { Container, ButtonRedirect } from "@/modules/common";

const ErrorPage = () => {
  return (
    <Container>
      <section className="pt-24 tab:pt-24 desk:pt-52 text-center ">
        <h1 className="hidden">Page not found!</h1>

        <p className="text-3xl mt-10 mb-20 max-w- ">Page not found.</p>

        <ButtonRedirect
          to="/"
          text="Go to home page"
          style="mx-auto bg-indigo-300  h-[30px] w-[180px] px-2  text-indigo-950 "
        />
      </section>
    </Container>
  );
};

export default ErrorPage;
