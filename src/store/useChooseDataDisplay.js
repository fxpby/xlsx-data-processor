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
      label: '下方数据展示',
    },
  ],
  setRadioOption: (id) =>
    set(() => ({
      currentRadio: id,
    })),
}))
