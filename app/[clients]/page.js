import ClientPage from "@/components/ClientPage";

export default function Page({ params }) {
  console.log(params, "this is params");
  const clientIDNumber = params.clients;
  console.log(clientIDNumber, "this is id");
  return (
    <>
      {" "}
      <ClientPage clientIDNumber={clientIDNumber} />
    </>
  );
}
