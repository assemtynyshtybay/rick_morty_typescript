import { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as fetchChars from '../store/reducers/fetchData'

export const useCharActions = () => {
    const dispatch = useDispatch()

    return useMemo(() => {
        return bindActionCreators(fetchChars, dispatch)
    }, [dispatch])
}
