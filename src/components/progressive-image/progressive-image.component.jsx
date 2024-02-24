import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  setImgSrc,
  selectProgressiveImageSelectors,
} from "../../store/progressive-image/progressive-image.slice";

import { StyledImage } from "../../styles/image/image.styles";

const ProgressiveImg = ({ placeholderSrc, src, ...props }) => {
  const { imgSrc } = useSelector(selectProgressiveImageSelectors);
  const dispatch = useDispatch();

  const customClass =
    placeholderSrc && imgSrc === placeholderSrc ? "loading" : "loaded";

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      dispatch(setImgSrc(src));
    };
  }, [src, dispatch, placeholderSrc]);

  return (
    <StyledImage
      {...{ src: imgSrc, ...props }}
      alt={props.alt || ""}
      className={`image ${customClass}`}
    />
  );
};
export default ProgressiveImg;
