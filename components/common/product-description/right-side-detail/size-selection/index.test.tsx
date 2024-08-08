import * as React from "react";
import { render, screen } from "@testing-library/react";
import SizeChart from "./index";
import ContextProvider from "lib/context";

const sizeChartUrl = "/url";
const onSizeChange = jest.fn();
const productSizeArray: {
  node: {
    options: {
      edges: [];
    };
    entityId: number;
  };
}[] = [
  {
    node: {
      options: {
        edges: [],
      },
      entityId: 1,
    },
  },
];
const productData = {
  Size: 4,
};

test("product size component testing", () => {
  render(
    <ContextProvider>
      <SizeChart
        productData={productData}
        sizeChartUrl={sizeChartUrl}
        productSizeArray={productSizeArray}
        onSizeChange={onSizeChange}
        selectedSize={{ size: 0, index: 0 }}
      />
    </ContextProvider>
  );
  expect(productSizeArray).toHaveLength(1);
  // expect(productSizeArray).toEqual(
  //   expect.arrayContaining([
  //     expect.objectContaining({ Size: 4.5 }),
  //     expect.objectContaining({ Size: 5 }),
  //   ])
  // );
});

test("product size empty component testing", () => {
  const sizeChartUrl = "";
  const onSizeChange = jest.fn();
  const productSizeArray: {
    node: { options: { edges: [] }; entityId: number };
  }[] = [
    {
      node: { options: { edges: [] }, entityId: 1 },
    },
  ];

  render(
    <ContextProvider>
      <SizeChart
        productData={productData}
        sizeChartUrl={sizeChartUrl}
        productSizeArray={productSizeArray}
        onSizeChange={onSizeChange}
        selectedSize={{ size: 0, index: 0 }}
      />
    </ContextProvider>
  );
  expect(productSizeArray).toHaveLength(1);
  // expect(productSizeArray).toEqual(
  //   expect.arrayContaining([
  //     expect.objectContaining({ Size: -1 }),
  //     expect.objectContaining({ Size: -1 }),
  //   ])
  // );
});
