import { Dispatch, Fragment, KeyboardEvent, useState } from 'react'
import { FiSave } from 'react-icons/fi'
import { TbLetterT } from 'react-icons/tb'
import { InputAndButton } from '../../components'
import { Color } from '../../styles/theme'
import * as S from './styles'

interface ModalAddListProps {
  isOpen: boolean
  showList: boolean
  setModalAddListOpen: Dispatch<React.SetStateAction<boolean>>
}

const MOCK_COLORS_THEME: Color[] = [
  'themeBlue',
  'themePurple',
  'themePink',
  'themeOrange',
  'themeYellow',
  'themeGreen',
  'themeRed',
]

export const ModalAddList = ({ isOpen, setModalAddListOpen, showList }: ModalAddListProps) => {
  const [colorThemeSelected, setColorThemeSelected] = useState<Color>('themeBlue')

  const handleCloseModal = () => {
    setModalAddListOpen(false)
    setColorThemeSelected('themeBlue')
  }

  const handleCloseModalEsc = (event: KeyboardEvent<HTMLDivElement>) => {
    if (isOpen === true && event.key === 'Escape') handleCloseModal()
  }

  const handleThemeColor = (color: Color) => setColorThemeSelected(color)

  return (
    <Fragment>
      {isOpen && (
        <S.Modal onClick={handleCloseModal}>
          <S.Content
            showList={showList}
            tabIndex={0}
            onKeyDown={handleCloseModalEsc}
            onClick={(e) => e.stopPropagation()}
          >
            <S.Title>List title</S.Title>

            <InputAndButton
              inputIconLeft={TbLetterT}
              inputPlaceholder="Enter your title here..."
              color={'themeBlue'}
              buttonIconLeft={FiSave}
              marginTop={0.5}
            />

            <S.ThemesWrapper>
              {MOCK_COLORS_THEME.map((color) => (
                <S.Theme
                  key={color}
                  colorTheme={color}
                  colorThemeSelected={colorThemeSelected === color}
                  onClick={() => handleThemeColor(color)}
                >
                  <S.ThemeInternal colorTheme={color} />
                </S.Theme>
              ))}
            </S.ThemesWrapper>
          </S.Content>
        </S.Modal>
      )}
    </Fragment>
  )
}
