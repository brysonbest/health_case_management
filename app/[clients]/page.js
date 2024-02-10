import ClientPage from "@/components/ClientPage";

export default function Page({ params }) {
  const clientIDNumber = params.clients;
  console.log(clientIDNumber, "this is id");
  return (
    <>
      {" "}
      <ClientPage clientIDNumber={clientIDNumber} />
    </>
  );
}
