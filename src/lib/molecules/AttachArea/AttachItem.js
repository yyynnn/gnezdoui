/* eslint-disable no-magic-numbers */
import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'

import { theme } from 'theme'
import { Spacer } from 'lib/atoms/Spacer'
import { Text } from 'lib/atoms/Text'
import { Icon } from 'lib/atoms/Icon'

export const AttachItem = ({ file, onRemove, maxFileSize, imagesOnly, ...rest }) => {
  const [close, setClose] = useState(false)
  const [colorized, setColor] = useState(false)
  const [loaded, setLoad] = useState(true)
  const loadingTime = file.size / 100 >= 5000 ? 5000 : file.size / 100 <= 500 ? 300 : file.size / 100
  setTimeout(() => {
    setLoad(false)
  }, loadingTime + 100)
  const closeHandler = e => {
    e.preventDefault()
    e.stopPropagation()
    setClose(true)
    setColor(true)
    setTimeout(() => {
      onRemove(file)
    }, 400)
  }

  let fileDetailsOptions = {
    kb: {
      size: file.size / 1000,
      measure: 'КБ'
    },
    mb: {
      size: file.size / 1000000,
      measure: 'МБ'
    },
    gb: {
      size: file.size / 1000000000,
      measure: 'ГБ'
    }
  }

  const conditionalFileSize = file.size / 1000000 // equals a MB
  const fileDetail =
    conditionalFileSize < 1
      ? fileDetailsOptions.kb
      : conditionalFileSize >= 1
      ? fileDetailsOptions.mb
      : fileDetailsOptions.gb

  const fileType = file.type.length > 0 ? file.type.split('/')[1].split('+')[0] : 'xxx'
  const fileTypeIdentificator = file.type.length > 0 ? (fileType.split('').length <= 4 ? fileType : 'xxx') : 'xxx'
  const isFileTypeCorrect = imagesOnly
    ? fileTypeIdentificator.split('').length <= 4 && file.type.split('/')[0] === 'image'
    : fileTypeIdentificator.split('').length <= 4
  const errOptions = () => {
    if (file.size > maxFileSize) {
      return 'Превышен размер файла'
    } else if (isFileTypeCorrect === false) {
      return 'Неверный формат файла'
    } else {
      return 'Ошибка загрузки'
    }
  }

  return (
    <React.Fragment>
      <Spacer space={8} />
      <FileContent {...rest}>
        <PreviewIcon>
          <FileFormat size="sm" bold={true} colorized={colorized ? colorized : loaded}>
            {fileTypeIdentificator}
          </FileFormat>
          <img src={file.preview} alt="" />
        </PreviewIcon>
        <Spacer space={20} />
        <FileData>
          <StyledTextName colorized={colorized ? colorized : loaded}>{file.name}</StyledTextName>
          <LoaderAndSize>
            {loaded === false ? (
              close === false ? (
                <React.Fragment>
                  {file.dropStatus === 'rejected' ? <FileError size="sm">{errOptions()}</FileError> : ''}
                  <StyledTextSize size="sm">
                    {fileDetail.size.toFixed(0)} {fileDetail.measure}
                  </StyledTextSize>
                </React.Fragment>
              ) : (
                <StyledTextSize size="sm">Удален</StyledTextSize>
              )
            ) : (
              <LoaderWrapper>
                <Loader loadingTime={loadingTime} />
              </LoaderWrapper>
            )}
          </LoaderAndSize>
        </FileData>
        {loaded === false ? (
          <IconWrapper>
            <Icon
              type="close"
              fill={theme.colors.gray.g300}
              onClick={e => {
                closeHandler(e)
              }}
            />
          </IconWrapper>
        ) : (
          false
        )}
      </FileContent>
    </React.Fragment>
  )
}

const FileContent = styled.div`
  border-radius: ${theme.radiuses.basic}px;
  background-color: ${theme.colors.gray.g700};
  padding: 14px 22px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  z-index: ${theme.z_indexes.basic};
`

const LoaderAndSize = styled.div`
  min-height: 16px;
  display: flex;
  align-items: center;
`

const FileData = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const StyledTextSize = styled(Text)`
  color: ${theme.colors.gray.g300};
`

const StyledTextName = styled(Text)`
  color: ${({ colorized }) => (colorized ? theme.colors.gray.g300 : theme.colors.gray.primary)};
`

const IconWrapper = styled.div`
  cursor: pointer;
`

const Load = keyframes`
  0%  {
    width: 0;
  }

  40% {
      width: 70%;
  }

  95% {
    width: 95%;
  }

  100% {
    width: 100%;
  }
`

const Loader = styled.div`
  width: 0;
  background-color: ${theme.colors.green.primary};
  animation: ${Load} ${({ loadingTime }) => loadingTime}ms linear forwards;
  height: 100%;
  border-radius: ${theme.radiuses.basic}px;
`

const LoaderWrapper = styled.div`
  width: 100%;
  height: 8px;
  border-radius: ${theme.radiuses.basic}px;
  background-color: ${theme.colors.gray.g500};
`

const PreviewIcon = styled.div`
  position: relative;
`

const FileFormat = styled(Text)`
  position: absolute;
  left: -5px;
  top: 1px;
  color: ${({ colorized }) => (colorized ? theme.colors.gray.g300 : theme.colors.gray.secondary)};
  font-size: 9px;
`

const FileError = styled(Text)`
  color: ${theme.colors.orange.primary};
  margin-right: 8px;
`
