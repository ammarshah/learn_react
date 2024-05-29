import { FaRegHeart, FaHeart } from "react-icons/fa6";

interface Props {
  liked: boolean;
  onClick: () => void;
}

function LikeButton({ liked, onClick }: Props) {
  return liked ? (
    <FaHeart color="red" onClick={onClick} />
  ) : (
    <FaRegHeart onClick={onClick} />
  );
}

export default LikeButton;
