import { ChangeEvent, FormEvent, useState } from "react";
import ProductCard from "./Component/ProductCard";
import { colors, formInputsList, productList } from "./Component/data";
import Modal from "./Component/ui/Modal";
import Button from "./Component/ui/Button";
import Input from "./Component/ui/Input";
import { IProduct } from "./interface";
import { productValidation } from "./validation";
import ErrorMassage from "./Component/ui/ErrorMassage";
import CircelColor from "./Component/ui/CircelColor";
import { v4 as uuid } from "uuid";
const App = () => {
  const defaultProductObj = {
    title: "",
    description: "",
    imageURL: "",
    price: "",
    colors: [],
    category: {
      name: "",
      imageURL: "",
    },
  };

  /** State */

  const [isOpen, setIsOpen] = useState(false);
  const [products, setProducts] = useState<IProduct[]>(productList);
  const [product, setProduct] = useState<IProduct>(defaultProductObj);
  const [tempColors, setTempColor] = useState<string[]>([]);
  const [errors, setErrors] = useState({
    title: "",
    description: "",
    imageURL: "",
    price: "",
  });
  console.log(tempColors);

  /** Handler */

  const closeModal = () => setIsOpen(false);

  const openModal = () => setIsOpen(true);

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setProduct({
      ...product,
      [name]: value,
    });
    setErrors({ ...errors, [name]: "" });
  };

  const onCancel = () => {
    setProduct(defaultProductObj);
    closeModal();
  };
  const submitHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const { title, description, price, imageURL } = product;

    const errors = productValidation({
      title,
      description,
      price,
      imageURL,
    });

    const hasErrorMsg =
      Object.values(errors).some((value) => value === "") &&
      Object.values(errors).every((value) => value === "");
    console.log(hasErrorMsg);
    if (!hasErrorMsg) {
      setErrors(errors);
      return;
    }
    setProducts((prev) => [
      { ...product, id: uuid(), colors: tempColors },
      ...prev,
    ]);
    setProduct(defaultProductObj);
    setTempColor([]);
    closeModal();
  };

  //** Renders
  const renderproductList = products.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));
  const rendrFormInputList = formInputsList.map((input) => (
    <div className="flex flex-col my-3" key={input.id}>
      <label
        htmlFor={input.id}
        className="mb-[2px] text-sm font-medium text-gray-700 "
      >
        {input.label}
      </label>
      <Input
        type="text"
        id={input.id}
        name={input.name}
        value={product[input.name]}
        onChange={onChangeHandler}
      />
      <ErrorMassage msg={errors[input.name]} />
    </div>
  ));
  const renderProductColors = colors.map((color) => (
    <CircelColor
      key={color}
      color={color}
      onClick={() => {
        if (tempColors.includes(color)) {
          setTempColor((prev) => prev.filter((item) => item !== color));
          return;
        }

        setTempColor((prev) => [...prev, color]);
      }}
    />
  ));

  return (
    <main className="container ">
      <Button
        className="block bg-indigo-700 hover:bg-indigo-800 mx-auto my-10 px-10 font-medium"
        onClick={openModal}
        width="w-fit"
      >
        {" "}
        Build Product
      </Button>
      <div className=" m-5 grid grid-cols-1 gap-2 md:gap-4 lg:gap-5 xl:gap-6 p-2 rounded-md md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
        {renderproductList}
      </div>
      <Modal isOpen={isOpen} closeModal={closeModal} title="ADD A NEW PRODUT">
        <form className="space-y-3" onSubmit={submitHandler}>
          {rendrFormInputList}
          <div className="flex items-center flex-wrap space-x-1">
            {renderProductColors}
          </div>
          <div className="felx items-center flex-wrap space-x-1">
            {tempColors.map((color) => (
              <span
                key={color}
                className="p-1 mr-1 mb-1 text-xs rounded-md text-white"
                style={{ backgroundColor: color }}
              >
                {color}
              </span>
            ))}
          </div>

          <div className="flex items-center space-x-1">
            {renderProductColors}
          </div>

          <div className="flex items-center space-x-3">
            <Button className="bg-indigo-700 hover:bg-indigo-800">
              {" "}
              Submit
            </Button>
            <Button
              className="bg-gray-400 hover:bg-gray-500"
              onClick={onCancel}
            >
              {" "}
              Cancel
            </Button>
          </div>
        </form>
      </Modal>
    </main>
  );
};
export default App;
