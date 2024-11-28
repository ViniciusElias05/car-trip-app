import { useContext, useState, useEffect } from "react";

import IForm from "../../interfaces/IForm";
import IRidesOptions, {IDriver} from "../../interfaces/IRidesOptions";

import Form from "../../components/organisms/Form";
import Header from "../../components/organisms/Header";
import Container from "../../components/organisms/Container";
import { RidesContext } from "../../context/RidesContext";
import Alert from "../../components/molecules/Alert";
export default function Home() {
  const {message, isOpen, setOpen} = useContext(RidesContext);
  return (
  <>
    <Header/>
    {isOpen && <Alert message={message} />}
    <Form />
    <Container/>
    </>
  )
}
