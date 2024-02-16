interface IProps {
  msg: string;
}
const ErrorMassage = ({ msg }: IProps) => {
  return msg ? (
    <span className="block text-red-700 font-semibold text-sm">{msg}</span>
  ) : null;
};
export default ErrorMassage;
