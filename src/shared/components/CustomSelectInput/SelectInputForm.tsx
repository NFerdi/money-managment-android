import React, { ForwardedRef } from "react"
import { Controller, Control, FieldValues, Path } from "react-hook-form"
import { SelectInputProps } from "./type"
import SelectInput, { SelectInputRef } from "./SelectInput"

interface FormSelectProps<T extends FieldValues> extends Omit<
    SelectInputProps,
    "value" | "onChange" | "error"
> {
    control: Control<T>

    name: Path<T>
    ref?: ForwardedRef<SelectInputRef>
}

export default function SelectInputForm<T extends FieldValues>({
    ref,
    control,
    name,
    ...props
}: FormSelectProps<T>) {
    return (
        <Controller
            control={control}
            name={name}
            render={({ field, fieldState }) => (
                <SelectInput
                    {...props}
                    value={field.value}
                    onChange={field.onChange}
                    error={fieldState.error?.message}
                    ref={ref}
                />
            )}
        />
    )
}
