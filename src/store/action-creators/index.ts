import * as UserActionCreactor from './user'
import * as TodoActionCreactor from './todo'

export default {
    ...UserActionCreactor,
    ...TodoActionCreactor
}