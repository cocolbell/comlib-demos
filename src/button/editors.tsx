export default {
  "@init"({ style }) {
    style.width = "fit-content";
    style.height = "auto";
  },
  "@resize": {
    options: ["width", "height"],
  },
  ":root": {
    style: [
      {
        options: ["font", "padding", "border", "background", "boxShadow"],
        target: ".mybricks-button",
      },
    ],
    items: [
      {
        title: "文字标题",
        type: "text",
        value: {
          get({ data }) {
            return data.text;
          },
          set({ data }, value: string) {
            data.text = value;
          },
        },
      },
      {}, //空对象可以用来分割配置项
      {
        title: "单击",
        type: "_Event",
        options: {
          outputId: "click",
        },
      },
    ],
  },
};
