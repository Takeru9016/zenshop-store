import { Container, Billboard } from "@/components";
import getBillboards from "@/actions/getBillboards";

export const revalidate = 0

export default async function HomePage() {
  const billboards = await getBillboards();
  const billboard = billboards?.[0]; // Get the first billboard 

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
      </div>
    </Container>
  );
}
