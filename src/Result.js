/* utils.jsの関数を読み込む */
import { hexToComplimentary } from "./utils";
import { Button, ButtonGroup } from "@chakra-ui/react";
export const Result = (props) => {
  /* 外から変数colorを受け取る */
  const color = props.color;
  return (
    /* 一つの要素しか返却できないので<></>で囲み一つにする */
    <>
      <h2>選択中の色： {color}</h2>
      <h2>補色: {hexToComplimentary(color)}</h2>
      <Button color={color} bg={hexToComplimentary(color)}>
        Button
      </Button>
    </>
  );
};
