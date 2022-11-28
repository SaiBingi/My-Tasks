import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  font-family: 'Roboto';
`

export const CreateTaskContainer = styled.form`
  background-color: #1a171d;
  width: 40%;
  padding: 50px;
  padding-top: 60px;
  min-height: 100vh;
`

export const Heading = styled.h1`
  color: #f3aa4e;
  text-align: center;
  font-weight: 500;
  font-size: 35px;
  margin-bottom: 40px;
`

export const Label = styled.label`
  color: #f1f5f9;
  font-weight: 500;
  font-size: 16px;
`

export const InputContainer = styled.div`
  margin-top: 8px;
  border-radius: 3px;
  margin-bottom: 40px;
`

export const Input = styled.input`
  outline: none;
  border: none;
  width: 100%;
  padding: 11px 15px 11px 15px;
  font-weight: 500;
`

export const Select = styled.select`
  outline: none;
  border: none;
  width: 100%;
  padding: 11px 15px 11px 15px;
  font-weight: 500;
`

export const Option = styled.option`
  color: #000000;
`

export const AddTaskContainer = styled.div`
  text-align: center;
`

export const AddTask = styled.button`
  background-color: #f3aa4e;
  color: #f8f8f8;
  font-weight: 500;
  font-size: 15px;
  font-family: 'Roboto';
  padding: 12px 33px;
  border-radius: 8px;
  cursor: pointer;
`

export const TasksContainer = styled.div`
  background-color: #131213;
  width: 60%;
  padding-top: 60px;
  min-height: 100vh;
  padding-left: 20px;
  padding-right: 50px;
`

export const TagsContainer = styled.ul`
  padding: 0;
  list-style-type: none;
  display: flex;
`

export const CustomHeading = styled.h1`
  color: #f1f5f9;
  font-size: 29px;
  font-weight: 500;
`

export const TaskEmpty = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 200px;
`

export const EmptyTasksMsg = styled.p`
  color: #ffffff;
  font-size: 26px;
  text-align: center;
  font-weight: 500;
`

export const TasksView = styled.ul`
  padding: 0;
  list-style-type: none;
`
