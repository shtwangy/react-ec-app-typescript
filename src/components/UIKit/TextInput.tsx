import React, { FC } from 'react'
import TextField from '@material-ui/core/TextField'

interface Props {
    fullWidth: boolean
    label: string
    multiline: boolean
    required: boolean
    rows: number
    value: string
    type: React.InputHTMLAttributes<unknown>['type']
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    variant: 'filled' | 'outlined' | 'standard'
}

const TextInput: FC<Props> = (props: Props) => {
    const {
        fullWidth,
        label,
        multiline,
        required,
        rows,
        value,
        type,
        onChange,
        variant
    } = props
    return (
        <TextField
            fullWidth={fullWidth}
            label={label}
            margin="dense"
            multiline={multiline}
            required={required}
            rows={rows}
            value={value}
            type={type}
            onChange={onChange}
            variant={variant}
        />
    )
}

export default TextInput
