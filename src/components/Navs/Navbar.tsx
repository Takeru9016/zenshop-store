import Link from "next/link";

import Container from "@/components/common/Container";
import MainNav from "@/components/Navs/MainNav";
import NavbarActions from "@/components/Navs/NavbarActions";
import { getCategories } from "@/actions";

export default async function Navbar() {
  const categories = await getCategories();

  return (
    <div className="border-b">
      <Container>
        <div className="relative flex h-16 items-center px-4 sm:px-6 lg:px-8">
          <Link href={"/"} className="ml-4 flex gap-x-2 lg:ml-0">
            <p className="font-sans text-xl font-bold">ZenShop</p>
          </Link>
          <MainNav data={categories} />
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
}
