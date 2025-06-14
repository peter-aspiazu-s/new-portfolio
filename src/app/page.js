import { Contact } from "@/components/Contact/Contact";
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { Main } from "@/components/Main/Main";
import { WhatsAppBtn } from "@/components/WhatsAppBtn/WhatsAppBtn";

export default function Home() {
  return (
    <>
      <Header />

      <Main />

      <Contact />

      <Footer />

      <WhatsAppBtn />
    </>
  );
}
