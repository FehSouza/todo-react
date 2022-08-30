import { ChangeEvent, Fragment, KeyboardEvent, MouseEvent, useState } from 'react'
import { BsPencil } from 'react-icons/bs'
import { FiSave } from 'react-icons/fi'
import { DropdownModalAddTask, InputAndButton } from '../../components'
import { ListsProps, useToDo } from '../../context'
import { customStorage } from '../../utils/customStorage'
import * as S from './styles'

export const ModalAddTask = () => {
  const { modalAddTaskOpen, setModalAddTaskOpen, tasks, setTasks, showList, listSelected } = useToDo()
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
    if (modalAddTaskOpen === true && e.key === 'Escape') handleModalClose()
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
    buttonListText !== 'Select list' ? setErrorButton(false) : setErrorButton(true)

    if (titleTask.length <= 3 || buttonListText === 'Select list' || descriptionTask.length <= 3) return

    const newTask = [
      ...tasks,
      {
        task: titleTask,
        list: buttonListText,
        id: Math.random() * 9,
        description: descriptionTask,
        date: new Date(),
        completed: false,
      },
    ]

    setTasks(newTask)
    customStorage.setItem('tasks', newTask)
    handleModalClose()
  }

  let buttonListText = 'Select list'

  if (listSelectedNewTask) {
    buttonListText = listSelectedNewTask?.name
  } else if (listSelected.name !== 'All') {
    buttonListText = listSelected.name
  }

  return (
    <Fragment>
      {modalAddTaskOpen && (
        <S.Modal onClick={handleModalClose}>
          <S.Content showList={showList} onClick={handleClickContent} onKeyDown={handleCloseModalEsc}>
            <InputAndButton
              inputIconLeft={BsPencil}
              inputPlaceholder="Title"
              onChangeInput={handleTitleTask}
              errorInput={errorInput}
              buttonText={buttonListText}
              onClickButton={handleToggleDropdown}
              errorButton={errorButton}
              size={1.25}
              marginTop={0}
              color={'themeBlue'}
            />

            {showDropdownLists && (
              <DropdownModalAddTask
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
