import {v4 as uuidv4} from 'uuid'
import {Component} from 'react'
import Tag from '../Tag'
import Task from '../Task'
import {
  Container,
  CreateTaskContainer,
  Heading,
  InputContainer,
  Label,
  Input,
  Select,
  Option,
  AddTaskContainer,
  AddTask,
  TasksContainer,
  TagsContainer,
  CustomHeading,
  TaskEmpty,
  EmptyTasksMsg,
  TasksView,
} from './styledComponents'

class Tasks extends Component {
  constructor(props) {
    super(props)
    const {tagsList} = this.props
    this.state = {
      selectedTagId: '',
      taskInput: '',
      activeTagId: tagsList[0].optionId,
      tasksList: [],
    }
  }

  changeTag = curSelectedTagId => {
    const {selectedTagId} = this.state

    if (selectedTagId === curSelectedTagId) {
      this.setState({selectedTagId: ''})
    } else {
      this.setState({selectedTagId: curSelectedTagId})
    }
  }

  onChangeTaskInput = event => this.setState({taskInput: event.target.value})

  onChangeActiveTag = event => this.setState({activeTagId: event.target.value})

  onClickAddTask = event => {
    event.preventDefault()
    const {activeTagId, taskInput, tasksList} = this.state
    const {tagsList} = this.props

    const newTask = {
      id: uuidv4(),
      activeTagId,
      taskInput,
    }

    this.setState({
      tasksList: [...tasksList, newTask],
      taskInput: '',
      activeTagId: tagsList[0].optionId,
    })
  }

  getFilteredTasks = () => {
    const {tasksList, selectedTagId} = this.state

    if (selectedTagId === '') {
      return tasksList
    }
    const filteredTasks = tasksList.filter(
      eachTask => eachTask.activeTagId === selectedTagId,
    )

    return filteredTasks
  }

  render() {
    const {tagsList} = this.props
    const {selectedTagId, taskInput, activeTagId, tasksList} = this.state
    const isTasksEmpty = tasksList.length === 0
    const filteredTasks = this.getFilteredTasks()

    return (
      <Container>
        <CreateTaskContainer onSubmit={this.onClickAddTask}>
          <Heading>Create a task!</Heading>
          <Label htmlFor="task">Task</Label>
          <InputContainer>
            <Input
              id="task"
              placeholder="Enter the task here"
              value={taskInput}
              onChange={this.onChangeTaskInput}
            />
          </InputContainer>
          <Label htmlFor="tags">Tags</Label>
          <InputContainer>
            <Select
              id="tags"
              value={activeTagId}
              onChange={this.onChangeActiveTag}
            >
              {tagsList.map(eachTag => (
                <Option key={eachTag.optionId} value={eachTag.optionId}>
                  {eachTag.displayText}
                </Option>
              ))}
            </Select>
          </InputContainer>
          <AddTaskContainer>
            <AddTask type="submit">Add Task</AddTask>
          </AddTaskContainer>
        </CreateTaskContainer>
        <TasksContainer>
          <CustomHeading>Tags</CustomHeading>
          <TagsContainer>
            {tagsList.map(eachTag => (
              <Tag
                key={eachTag.optionId}
                tagDetails={eachTag}
                changeTag={this.changeTag}
                isActive={eachTag.optionId === selectedTagId}
              />
            ))}
          </TagsContainer>
          <CustomHeading>Tasks</CustomHeading>
          {isTasksEmpty && (
            <TaskEmpty>
              <EmptyTasksMsg>No Tasks Added Yet</EmptyTasksMsg>
            </TaskEmpty>
          )}
          {!isTasksEmpty && (
            <TasksView>
              {filteredTasks.map(eachTask => (
                <Task key={eachTask.id} taskDetails={eachTask} />
              ))}
            </TasksView>
          )}
        </TasksContainer>
      </Container>
    )
  }
}

export default Tasks
