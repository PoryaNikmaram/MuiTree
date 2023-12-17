const treeData = [
  {
    id: 1,
    name: "Root",
    type: "folder",
    size: "10mb",
    children: [
      {
        id: 2,
        name: "Child 1",
        type: "folder",
        size: "5mb",
        children: [
          {
            id: 4,
            name: "Grandchild 1",
            type: "file",
            size: "2mb",
          },
          {
            id: 5,
            name: "Grandchild 2",
            type: "file",
            size: "3mb",
          },
        ],
      },
      {
        id: 3,
        name: "Child 2",
        type: "folder",
        size: "3mb",
        children: [
          {
            id: 6,
            name: "Grandchild 3",
            type: "file",
            size: "3mb",
          },
        ],
      },
    ],
  },
  {
    id: 7,
    name: "Root 2",
    type: "folder",
    size: "15mb",
    children: [
      {
        id: 8,
        name: "Child 3",
        type: "folder",
        size: "7mb",
        children: [
          {
            id: 9,
            name: "Grandchild 4",
            type: "file",
            size: "4mb",
          },
          {
            id: 10,
            name: "Grandchild 5",
            type: "file",
            size: "3mb",
          },
        ],
      },
      {
        id: 11,
        name: "Child 4",
        type: "folder",
        size: "8mb",
        children: [
          {
            id: 12,
            name: "Grandchild 6",
            type: "file",
            size: "8mb",
          },
        ],
      },
    ],
  },
  {
    id: 13,
    name: "Root 3",
    type: "folder",
    size: "20mb",
    children: [
      {
        id: 14,
        name: "Child 5",
        type: "folder",
        size: "10mb",
        children: [
          {
            id: 15,
            name: "Grandchild 7",
            type: "file",
            size: "5mb",
          },
          {
            id: 16,
            name: "Grandchild 8",
            type: "file",
            size: "5mb",
          },
        ],
      },
      {
        id: 17,
        name: "Child 6",
        type: "folder",
        size: "10mb",
        children: [
          {
            id: 18,
            name: "Grandchild 9",
            type: "file",
            size: "10mb",
          },
        ],
      },
    ],
  },
];

export default treeData;
