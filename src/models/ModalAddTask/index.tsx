import { ChangeEvent, Dispatch, Fragment, KeyboardEvent, MouseEvent, useState } from 'react'
import { BsPencil } from 'react-icons/bs'
import { FiSave } from 'react-icons/fi'
import { DropdownModalAddTask, InputAndButton, TasksProps } from '../../components'
import { ListsProps } from '../../pages'
import { customStorage } from '../../utils/customStorage'
import * as S from './styles'

interface ModalAddTaskProps {
  isOpen: boolean
  setModalAddTaskOpen: Dispatch<React.SetStateAction<boolean>>
  showList: boolean
  lists: ListsProps[]
  tasks: TasksProps[]
  setTasks: Dispatch<React.SetStateAction<TasksProps[]>>
}

export const ModalAddTask = ({ isOpen, setModalAddTaskOpen, showList, lists, tasks, setTasks }: ModalAddTaskProps) => {
  const [showDropdownLists, setShowDropdownLists] = useState(false)
  const [titleTask, setTitleTask] = useState('')
  const [listSelectedNewTask, setListSelectedNewTask] = useState<ListsProps>()
  const [descriptionTask, setDescriptionTask] = useState('')
  const [errorInput, setErrorInput] = useState(false)
  const [errorTextArea, setErrorTextArea] = useState(false)
  const [errorButton, setErrorButton] = useState(false)

  const handleModalClose = () => {
    setShowDropdownLists(false)
    setModalAddTaskOpen(false)
    setTitleTask('')
    setListSelectedNewTask(undefined)
    setDescriptionTask('')
    setErrorInput(false)
    setErrorTextArea(false)
    setErrorButton(false)
  }

  const handleCloseModalEsc = (e: KeyboardEvent<HTMLDivElement>) => {
    if (isOpen === true && e.key === 'Escape') handleModalClose()
  }

  const handleToggleDropdown = (e: MouseEvent<HTMLButtonElement | HTMLDivElement>) => {
    e.stopPropagation()
    setShowDropdownLists(!showDropdownLists)
  }

  const handleClickContent = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
    setShowDropdownLists(false)
  }

  const handleTitleTask = (e: ChangeEvent<HTMLInputElement>) => setTitleTask(e.target.value)

  const handleDescriptionTask = (e: ChangeEvent<HTMLTextAreaElement>) => setDescriptionTask(e.target.value)

  const handleCreateTask = () => {
    titleTask.length > 3 ? setErrorInput(false) : setErrorInput(true)
    descriptionTask.length > 3 ? setErrorTextArea(false) : setErrorTextArea(true)
    listSelectedNewTask ? setErrorButton(false) : setErrorButton(true)

    if (titleTask.length <= 3 || !listSelectedNewTask || descriptionTask.length <= 3) return

    const newTask = [
      ...tasks,
      {
        task: titleTask,
        list: listSelectedNewTask.name,
        id: Math.random() * 9,
        description: descriptionTask,
        date: new Date(),
      },
    ]

    setTasks(newTask)
    customStorage.setItem('tasks', newTask)
    handleModalClose()
  }

  return (
    <Fragment>
      {isOpen && (
        <S.Modal onClick={handleModalClose}>
          <S.Content showList={showList} onClick={handleClickContent} onKeyDown={handleCloseModalEsc}>
            <InputAndButton
              inputIconLeft={BsPencil}
              inputPlaceholder="Title"
              onChangeInput={handleTitleTask}
              errorInput={errorInput}
              buttonText={listSelectedNewTask ? listSelectedNewTask.name : 'Select list'}
              onClickButton={handleToggleDropdown}
              errorButton={errorButton}
              size={1.25}
              marginTop={0}
              color={'themeBlue'}
            />

            {showDropdownLists && (
              <DropdownModalAddTask
                lists={lists}
                setListSelectedNewTask={setListSelectedNewTask}
                setErrorButton={setErrorButton}
                handleToggleDropdown={handleToggleDropdown}
              />
            )}

            <S.Description
              placeholder="Description"
              onChange={(e) => handleDescriptionTask(e)}
              errorTextArea={errorTextArea}
            />

            <S.ButtonAdd onClick={handleCreateTask}>
              <FiSave />
              Add
            </S.ButtonAdd>
          </S.Content>
        </S.Modal>
      )}
    </Fragment>
  )
}
