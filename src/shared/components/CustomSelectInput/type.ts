export interface SelectOption {
    label: string

    value: string | number

    icon?: React.ReactNode

    description?: string

    disabled?: boolean
}

export interface SelectInputProps {
    label?: string

    placeholder?: string

    value?: string | number

    options: SelectOption[]

    loading?: boolean

    disabled?: boolean

    error?: string

    title?: string

    onChange(value: string | number): void
}
