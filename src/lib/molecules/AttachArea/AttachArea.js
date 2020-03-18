/* eslint-disable no-magic-numbers */
import React, { useState, useEffect, useCallback } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { useDropzone } from 'react-dropzone'

import { AttachItem } from './AttachItem'

import { theme } from 'theme'
import { Spacer } from 'lib/atoms/Spacer'
import { Text } from 'lib/atoms/Text'

export const AttachArea = ({ maxFileSize, descriptionTip, enabled, imagesOnly, multiple, ...rest }) => {
  const [uploadedFiles, setFiles] = useState([])
  const [drag, setDrag] = useState(false)
  const s = ''
  const onDrop = useCallback(() => {
    // setting preview source
    setDrag(false)
  }, [])

  // general dropzone settings
  const { getRootProps, getInputProps } = useDropzone({
    accept: imagesOnly ? 'image/*' : '',
    multiple: multiple,
    noDrag: false,
    maxSize: maxFileSize,
    onDrop,
    getFilesFromEvent: event => fileGetter(event)
  })

  async function fileGetter(event) {
    const files = [...uploadedFiles]
    const fileList = event.dataTransfer ? event.dataTransfer.files : event.target.files
    for (let i = 0; i < fileList.length; i++) {
      const file = fileList.item(i)
      if (file.size > maxFileSize || (imagesOnly === true && file.type.split('/')[0] !== 'image')) {
        Object.defineProperty(file, 'dropStatus', {
          value: 'rejected'
        })
      } else {
        Object.defineProperty(file, 'dropStatus', {
          value: 'accepted'
        })
      }
      Object.assign(file, {
        preview: ''
      })
      const idx = Math.random()
        .toString(36)
        .substr(2, 5)
      Object.defineProperty(file, 'identificator', {
        value: idx
      })
      files.push(file)
      setFiles(files)
    }
    return files
  }

  const removeFile = file => {
    const newFiles = [...uploadedFiles]
    const AcceptedFileIndex = newFiles.indexOf(file)
    newFiles.splice(AcceptedFileIndex, 1)
    setFiles(newFiles)
  }

  // setting file block
  const thumbs = uploadedFiles.map(file => {
    return (
      <AttachItem
        key={file.identificator}
        file={file}
        maxFileSize={maxFileSize}
        onRemove={removeFile}
        imagesOnly={imagesOnly}
      />
    )
  })
  useEffect(() => {
    uploadedFiles.forEach(file => URL.revokeObjectURL(file.preview))
  }, [uploadedFiles])

  return (
    <React.Fragment>
      <Wrapper
        {...getRootProps({ className: 'dropzone' })}
        onDragOver={() => setDrag(true)}
        drag={drag}
        onDragLeave={() => setDrag(false)}
        enabled={enabled}
        {...rest}
      >
        <StyledTextLink>
          {drag === false ? (
            <span>
              <StyledSpan enabled={enabled}>Выберите файлы</StyledSpan> или перетащите их сюда
            </span>
          ) : (
            <span>Поместите файлы сюда</span>
          )}
        </StyledTextLink>
      </Wrapper>
      <Spacer space={4} />
      {descriptionTip ? (
        <UploadTip>Файлы объемом не более {maxFileSize / 1000000} МБ в форматах jpeg, jpg, png</UploadTip>
      ) : (
        false
      )}
      <InnerWrapper>
        <input {...getInputProps()} />

        {thumbs}
        <Spacer space={14} />
      </InnerWrapper>
    </React.Fragment>
  )
}

const Wrapper = styled.div`
  pointer-events: ${({ enabled }) => (enabled ? 'all' : 'none')};
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  cursor: pointer;
  border: 2px ${({ enabled }) => (enabled ? 'dashed' : 'hidden')} ${theme.colors.gray.g400};
  border-radius: ${theme.radiuses.basic}px;
  transition: ${theme.transitions.basic};
  min-height: 56px;
  padding-left: 24px;
  background-color: ${({ drag, enabled }) => (drag || !enabled ? theme.colors.gray.g700 : 'initial')};

  &:hover {
    background-color: ${theme.colors.gray.g700};
  }

  &:active {
    background-color: ${theme.colors.gray.g600};
  }

  &:focus {
    border: 2px solid ${theme.colors.gray.primary};
  }
`

const InnerWrapper = styled.div`
  width: 100%;
`

const StyledSpan = styled.span`
  color: ${({ enabled }) => (enabled ? theme.colors.blue.primary : theme.colors.gray.g300)};
`

const StyledTextLink = styled(Text)`
  color: ${theme.colors.gray.g300};
  width: 100%;
`

const UploadTip = styled(Text)`
  color: ${theme.colors.gray.g300};
`

AttachArea.propTypes = {
  enable: PropTypes.bool,
  maxFileSize: PropTypes.number,
  descriptionTip: PropTypes.bool,
  imagesOnly: PropTypes.bool,
  multiple: PropTypes.bool
}
