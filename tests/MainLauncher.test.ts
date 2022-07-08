import { MainLauncher } from "../src/MainLauncher";

describe("MainLauncher", () => {
  describe("create", () => {
    test.each([["1.0.0"], ["2.0.0"]])("should create launcher v%s", (version) => {
      const widget = MainLauncher.create();
      expect(widget.id).toEqual("aws_iframe_jupyter");
      expect(widget.title.label).toEqual("MLFlow");
      expect(widget.title.closable).toEqual(true);
      expect(widget.node).toMatchSnapshot();
    });

    test.each([["1.0.0"], ["2.0.0"]])("should create launcher v%s in CN region", (version) => {
      const widget = MainLauncher.create();
      expect(widget.id).toEqual("aws_iframe_jupyter");
      expect(widget.title.label).toEqual("MLFlow");
      expect(widget.title.closable).toEqual(true);
      expect(widget.node).toMatchSnapshot();
    });

    test.each([["1.0.0"], ["2.0.0"]])("should create launcher v%s with undefined region", (version) => {
      const widget = MainLauncher.create();
      expect(widget.id).toEqual("aws_iframe_jupyter");
      expect(widget.title.label).toEqual("MLFlow");
      expect(widget.title.closable).toEqual(true);
      expect(widget.node).toMatchSnapshot();
    });

    test.each([["1.0.0"], ["2.0.0"]])("should create launcher v%s with null region", (version) => {
      const widget = MainLauncher.create();
      expect(widget.id).toEqual("aws_iframe_jupyter");
      expect(widget.title.label).toEqual("MLFlow");
      expect(widget.title.closable).toEqual(true);
      expect(widget.node).toMatchSnapshot();
    });
  });
});
