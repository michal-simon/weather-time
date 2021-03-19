import { Optional } from '../../typings/standard-types'
import { AnimationPattern } from '../../typings/enum-types'
import { AnimationOptions } from '../../typings/types'

export type AnimationRecord = Record<AnimationPattern, AnimationOptions>

const animations: Readonly<AnimationRecord> = {
    'default': {
        animation: '',
        keyframes: '',
    },
    'grow-out-in': {
        animation: 'animation:grow-out-in 2s linear infinite alternate;',
        keyframes: `@keyframes grow-out-in{
                        0% {
                                box-shadow:0 2px 4px -2px rgba(0,0,0,.25);
                                transform:scale(.95);
                            }
                            100% {
                                box-shadow:0 0 4px 2px rgba(0,0,0,.25);
                                transform:scale(1);
                            }
                    }`,
    },
}

export const getAnimation = (value: Optional<AnimationPattern>): AnimationOptions => {
    return value ? animations[value] : animations[AnimationPattern.default]
}
