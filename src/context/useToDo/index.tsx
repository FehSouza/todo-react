import React, { createContext, Dispatch, useContext, useState } from 'react'
import { Color } from '../../styles/theme'

export const INITIAL_LIST: ListsProps = { name: 'All', id: 1, color: 'themeBlue', fixed: true }

export interface ListsProps {
  name: string
  id: number
  color: Color
  fixed: boolean
}

export interface TasksProps {
  task: string
  list: string
  id: number
  description: string
  date: Date
  completed: boolean
}

interface ToDoContextProps {
  lists: ListsProps[]
  setLists: Dispatch<React.SetStateAction<ListsProps[]>>
  listSelected: ListsProps
  setListSelected: Dispatch<React.SetStateAction<ListsProps>>
  showList: boolean
  setShowList: Dispatch<React.SetStateAction<boolean>>
  tasks: TasksProps[]
  setTasks: Dispatch<React.SetStateAction<TasksProps[]>>
  modalAddListOpen: boolean
  setModalAddListOpen: Dispatch<React.SetStateAction<boolean>>
  modalAddTaskOpen: boolean
  setModalAddTaskOpen: Dispatch<React.SetStateAction<boolean>>
  modalDeleteList: boolean
  setModalDeleteList: Dispatch<React.SetStateAction<boolean>>
  showDetails: boolean
  setShowDetails: Dispatch<React.SetStateAction<boolean>>
  closing: boolean
  setClosing: Dispatch<React.SetStateAction<boolean>>
  taskSelected: TasksProps | undefined
  setTaskSelected: Dispatch<React.SetStateAction<TasksProps | undefined>>
  valueSearch: string
  setValueSearch: React.Dispatch<React.SetStateAction<string>>
  infoDeleteList: {
    id: number
    name: string
  }
  setInfoDeleteList: React.Dispatch<
    React.SetStateAction<{
      id: number
      name: string
    }>
  >
  listHasTasks: boolean
  setListHasTasks: Dispatch<React.SetStateAction<boolean>>
}

interface ToDoProviderProps {
  children: React.ReactNode
}

const ToDoContext = createContext<ToDoContextProps>({} as ToDoContextProps)

export const ToDoProvider = ({ children }: ToDoProviderProps) => {
  const [lists, setLists] = useState<ListsProps[]>([INITIAL_LIST])
  const [listSelected, setListSelected] = useState<ListsProps>(INITIAL_LIST)
  const [showList, setShowList] = useState(true)
  const [tasks, setTasks] = useState<TasksProps[]>([])
  const [modalAddListOpen, setModalAddListOpen] = useState(false)
  const [modalAddTaskOpen, setModalAddTaskOpen] = useState(false)
  const [modalDeleteList, setModalDeleteList] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const [closing, setClosing] = useState(false)
  const [taskSelected, setTaskSelected] = useState<TasksProps>()
  const [valueSearch, setValueSearch] = useState('')
  const [infoDeleteList, setInfoDeleteList] = useState({ id: 0, name: '' })
  const [listHasTasks, setListHasTasks] = useState(false)

  return (
    <ToDoContext.Provider
      value={{
        lists,
        setLists,
        listSelected,
        setListSelected,
        showList,
        setShowList,
        tasks,
        setTasks,
        modalAddListOpen,
        setModalAddListOpen,
        modalAddTaskOpen,
        setModalAddTaskOpen,
        modalDeleteList,
        setModalDeleteList,
        showDetails,
        setShowDetails,
        closing,
        setClosing,
        taskSelected,
        setTaskSelected,
        valueSearch,
        setValueSearch,
        infoDeleteList,
        setInfoDeleteList,
        listHasTasks,
        setListHasTasks,
      }}
    >
      {children}
    </ToDoContext.Provider>
  )
}

export const useToDo = () => useContext(ToDoContext)
