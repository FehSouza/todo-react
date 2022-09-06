import { Dispatch } from 'react'
import { ListsProps } from '../context'

import { customStorage } from './customStorage'

type ordinationProps = {
  listsToSort: ListsProps[]
  updateLists: Dispatch<React.SetStateAction<ListsProps[]>>
  type?: string
}

export class Ordination {
  alphabeticalOrder({ listsToSort, updateLists, type }: ordinationProps) {
    const listsFixed = listsToSort.filter((list) => list.fixed)
    const listsNoFixed = listsToSort.filter((list) => !list.fixed)

    if (type === 'ASC') {
      listsNoFixed.sort((a, b) => {
        if (a.name.toLowerCase() > b.name.toLowerCase()) return 1
        if (a.name.toLowerCase() < b.name.toLowerCase()) return -1
        return 0
      })
    } else {
      listsNoFixed.sort((a, b) => {
        if (a.name.toLowerCase() < b.name.toLowerCase()) return 1
        if (a.name.toLowerCase() > b.name.toLowerCase()) return -1
        return 0
      })
    }

    const orderedList = [...listsFixed, ...listsNoFixed]

    customStorage.setItem('lists', orderedList)
    updateLists(orderedList)
  }

  ASC({ listsToSort, updateLists }: ordinationProps) {
    this.alphabeticalOrder({ listsToSort, updateLists, type: 'ASC' })
  }

  DESC({ listsToSort, updateLists }: ordinationProps) {
    this.alphabeticalOrder({ listsToSort, updateLists, type: 'DESC' })
  }
}

export const ordination = new Ordination()
