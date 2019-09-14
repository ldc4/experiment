export const data = [
  {
    label: '一级 1',
    children: [
      {
        label: '二级 1-1',
        children: [
          {
            label: '三级 1-1-1'
          }
        ]
      }
    ]
  }
];

export function getData(L1 = 10, L2 = 10, L3 = 10) {
  let result = [];
  for(let i = 0; i < L1; i++) {
    let level1 = {
      id: `${i}`,
      label: `一级 ${i}`,
      children: []
    };
    for(let j = 0; j < L2; j++) {
      let level2 = {
        id: `${i}-${j}`,
        label: `二级 ${j}`,
        children: []
      }
      for(let k = 0; k < L3; k++) {
        let level3 = {
          id: `${i}-${j}-${k}`,
          label: `三级 ${k}`,
        }
        level2.children.push(level3);
      }
      level1.children.push(level2);
    }
    result.push(level1);
  }
  return result;
}