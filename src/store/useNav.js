import { create } from 'zustand'
import Excel2Json from '../components/excel2json'
import Json2Excel from '../components/json2excel'
import Filter from '../components/filter'

export const useNav = create(() => ({
  navList: [
    {
      id: '1',
      label: 'excel => json',
      component: Excel2Json,
    },
    {
      id: '2',
      label: 'json => excel',
      component: Json2Excel,
    },
    {
      id: '3',
      label: '单文件筛选列处理',
      component: Filter,
    },
    {
      id: '4',
      label: '多文件筛选列处理',
      component: Filter,
    },
  ],
}))
