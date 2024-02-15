interface IProps {
  imageUrL: string;
  alt: string;
  className: string;
}
const Image = ({ imageUrL, alt, className }: IProps) => {
  return <img src={imageUrL} alt={alt} className={className} />;
};
export default Image;
