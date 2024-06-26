import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { RootState, AppDispatch } from 'src/redux/store'

type DispatchFunc = () => AppDispatch

export const useAppDispatch: DispatchFunc = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
