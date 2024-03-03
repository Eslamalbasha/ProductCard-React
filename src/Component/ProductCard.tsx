import { IProduct } from "../interface";
import Image from "./Image";
import Button from "./ui/Button";
import CircelColor from "./ui/CircelColor";
import { hSlicer, txtSlicer } from "./utils/function";

interface IProps {
  product: IProduct;
  setProductToEdit: (product: IProps) => void;
  openEditModal: () => void;
}

const ProductCard = ({ product, setProductToEdit, openEditModal }: IProps) => {
  const { title, imageURL, description, price, colors, category } = product;
  const renderProductColors = colors.map((color) => (
    <CircelColor key={color} color={color} />
  ));
  /** handler */
  const onEdit = () => {
    setProductToEdit(product);
    openEditModal();
  };
  return (
    <div className=" border border-gray-300 rounded-md p-2 flex-col max-w-sm md:max-w-lg mx-auto md:mx-0 ">
      <Image
        imageUrL={imageURL}
        alt={"Product Cars"}
        className="rounded-md mb-2"
      />
      <h3 className="text-lg font-semibold">{hSlicer(title)}</h3>
      <p className="text-sm text-gray-500 break-words">
        {txtSlicer(description)}
      </p>
      <div className="flex items-center flex-wrap space-x-1">
        {renderProductColors}
      </div>

      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold">{`${price}$`}</span>
        <Image
          imageUrL={category.imageURL}
          alt={category.name}
          className="w-10 h-10 rounded-full object-center"
        />
      </div>
      <div className="flex justify-between items-center  space-x-2 mt-5">
        <Button
          className="bg-indigo-700 hover:bg-indigo-800"
          width="w-full"
          onClick={onEdit}
        >
          EDIT
        </Button>

        <Button className="bg-red-700 ">DELETE</Button>
      </div>
    </div>
  );
};
export default ProductCard;
