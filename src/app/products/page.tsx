
import Products from './Products'
import Breadcrumb from "../_components/Breadcrumb";


export default function page() {
  const breadcrumbItems = [{ label: "Home", link: "/" }, { label: "Products" }];
  return (
    <>
      <Breadcrumb items={breadcrumbItems}/>
      <Products />
    </>
  )
}

