import {TaskInput, TagId, TaskItem} from './styledComponents'

const Task = props => {
  const {taskDetails} = props
  const {activeTagId, taskInput} = taskDetails

  return (
    <TaskItem>
      <TaskInput>{taskInput}</TaskInput>
      <TagId>{activeTagId}</TagId>
    </TaskItem>
  )
}

export default Task
