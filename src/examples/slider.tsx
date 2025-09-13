import { Slider, useSlider } from "@arkyn/components";

type SliderExampleProps = {
  defaultValue?: number;
};

function SliderExample({ defaultValue = 0 }: SliderExampleProps) {
  const [value, setValue] = useSlider(defaultValue);
  return <Slider value={value} onChange={setValue} />;
}

export { SliderExample };
