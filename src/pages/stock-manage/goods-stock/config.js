export const users = [
  {
    id: "1111111",
    name: "张三",
  },
  {
    id: "2222222",
    name: "李四",
  },
  {
    id: "3333333",
    name: "王五",
  },
  {
    id: "4444444",
    name: "马六",
  },
  {
    id: "5555555",
    name: "陈七",
  },
];

export const getDifferentCode = (Arr, newArr) => {
  const different = {};
  for (let i = 0; i < newArr.length; i++) {
    if (newArr.split("")[i] !== Arr.split("")[i]) {
      different.code = newArr.split("")[i];
      different.index = i;
      break;
    }
  }
  return different;
};

export const getUserId = (html) => {
  return [...html.matchAll(/data-id="(.*?)"/g)].map((idArr) => idArr[1]);
};
