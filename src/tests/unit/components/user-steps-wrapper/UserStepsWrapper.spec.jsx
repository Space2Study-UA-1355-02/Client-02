import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import UserStepsWrapper from '~/components/user-steps-wrapper/UserStepsWrapper'
import DragAndDrop from '~/components/drag-and-drop/DragAndDrop'

vi.mock('~/redux/reducer', () => ({
  markFirstLoginComplete: vi.fn(() => ({ type: 'MOCK_ACTION' }))
}))
const mockEmitter = vi.fn()
const validationData = {
  maxFileSize: 10 * 1_000_000,
  filesTypes: ['image/jpeg', 'image/png'],
  fileSizeError: 'becomeTutor.photo.fileSizeError',
  typeError: 'becomeTutor.photo.typeError',
  maxQuantityFiles: 1
}
describe('UserStepsWrapper component', () => {
  it('should render first tab', () => {
    render(<UserStepsWrapper userRole='tutor' />)
    expect(screen.getAllByText(/General/i)).toBeInTheDocument()
  })
  it('should render second tab', async () => {
    render(<UserStepsWrapper userRole='tutor' />)
    const subjectsTab = screen.getAllByText(/subjects/i)
    await userEvent.click(subjectsTab)
    expect(screen.getAllByText(/Subjects/i)).toBeInTheDocument()
  })
  it('should open photo render error after add wrong file size', async() => {
    const largeFile = new File(['large content'], 'large-image.jpg', {type: 'image/jpeg'})
    largeFile.size = 20 * 1_000_000
    render(
    <DragAndDrop emitter={mockEmitter} validationData={validationData}>
        <p>Upload your profile photo</p>
    </DragAndDrop>
  })
})
