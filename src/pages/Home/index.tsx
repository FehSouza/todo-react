import { useEffect, useState } from 'react'
import { TasksProps, ToDoListContainer } from '../../components'
import { ModalAddList, ModalAddTask } from '../../models'
import { Color } from '../../styles/theme'
import { customStorage } from '../../utils/customStorage'
import * as S from './styles'

export interface ListsProps {
  name: string
  id: number
  color: Color
  fixed?: boolean
}

export const INITIAL_LIST: ListsProps = { name: 'All', id: 1, color: 'themeBlue', fixed: true }

export const Home = () => {
  const [lists, setLists] = useState<ListsProps[]>([INITIAL_LIST])
  const [listSelected, setListSelected] = useState<ListsProps>(INITIAL_LIST)
  const [showList, setShowList] = useState(true)
  const [tasks, setTasks] = useState<TasksProps[]>([])
  const [modalAddListOpen, setModalAddListOpen] = useState(false)
  const [modalAddTaskOpen, setModalAddTaskOpen] = useState(false)

  useEffect(() => {
    const listsLocalStorage = customStorage.getItem('lists')
    const tasksLocalStorage = customStorage.getItem('tasks')
    if (listsLocalStorage) setLists(listsLocalStorage)
    if (tasksLocalStorage) setTasks(tasksLocalStorage)
  }, [])

  return (
    <S.Container>
      <ToDoListContainer
        setModalAddListOpen={setModalAddListOpen}
        setModalAddTaskOpen={setModalAddTaskOpen}
        showList={showList}
        setShowList={setShowList}
        lists={lists}
        setLists={setLists}
        listSelected={listSelected}
        setListSelected={setListSelected}
        tasks={tasks}
      />

      <ModalAddList
        isOpen={modalAddListOpen}
        setModalAddListOpen={setModalAddListOpen}
        showList={showList}
        lists={lists}
        setLists={setLists}
      />

      <ModalAddTask
        isOpen={modalAddTaskOpen}
        setModalAddTaskOpen={setModalAddTaskOpen}
        showList={showList}
        lists={lists}
        tasks={tasks}
        setTasks={setTasks}
      />
    </S.Container>
  )
}
