import { create } from 'zustand'

export const useChooseDataDisplay = create((set) => ({
  currentRadio: 'download',
  radioOptions: [
    {
      id: 'download',
      label: '下载',
    },
    {
      id: 'display',
      label:
        '下方数据展示（数据量过大时可能会造成页面数据渲染卡顿，甚至浏览器卡死）',
    },
  ],
  setRadioOption: (id) =>
    set(() => ({
      currentRadio: id,
    })),
}))
