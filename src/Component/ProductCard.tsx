import { IProduct } from "../interface";
import Image from "./Image";
import Button from "./ui/Button";
import { hSlicer, txtSlicer } from "./utils/function";

interface IProps {
  product: IProduct;
}

const ProductCard = ({ product }: IProps) => {
  const { title, imageURL, description, price, category } = product;
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
      <div className="flex items-center my-4 space-x-2">
        <span className="w-5 h-5 bg-indigo-500 rounded-full  cursor-pointer" />
        <span className="w-5 h-5 bg-red-600 rounded-full cursor-pointer" />
        <span className="w-5 h-5 bg-blue-600 rounded-full cursor-pointer" />
        <span className="w-5 h-5 bg-green-700 rounded-full cursor-pointer" />
        <span className="w-5 h-5 bg-yellow-400 rounded-full cursor-pointer" />
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
        <Button className="bg-indigo-700 hover:bg-indigo-800" width="w-full">
          EDIT
        </Button>

        <Button className="bg-red-700 ">DELETE</Button>
      </div>
    </div>
  );
};
export default ProductCard;
