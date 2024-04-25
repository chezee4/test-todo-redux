import { saveToLocalStorage, getFromLocalStorage } from 'src/utils/index'

describe('localStorage functions', () => {
  let mockLocalStorage: { [key: string]: string }

  beforeEach(() => {
    mockLocalStorage = {}
    Storage.prototype.setItem = jest.fn((key, value) => {
      mockLocalStorage[key] = value
    })
    Storage.prototype.getItem = jest.fn((key) => mockLocalStorage[key])
  })

  it('should save item to localStorage', () => {
    saveToLocalStorage('testKey', 'testValue')
    expect(localStorage.setItem).toHaveBeenCalledWith(
      'testKey',
      JSON.stringify('testValue')
    )
    expect(mockLocalStorage['testKey']).toBe(JSON.stringify('testValue'))
  })

  it('should get item from localStorage', () => {
    mockLocalStorage['testKey'] = JSON.stringify('testValue')
    const result = getFromLocalStorage<string>('testKey')
    expect(result).toEqual('testValue')
  })

  it('should return empty array if item not found in localStorage', () => {
    const result = getFromLocalStorage<string>('nonExistingKey')
    expect(result).toEqual([])
  })
})
