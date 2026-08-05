import * as SecureStore from "expo-secure-store"

const TOKEN = "auth_token"

export const saveToken = async (token: string) => {
    await SecureStore.setItemAsync(TOKEN, token)
}

export const getToken = async () => {
    return await SecureStore.getItemAsync(TOKEN)
}

export const removeToken = async () => {
    await SecureStore.deleteItemAsync(TOKEN)
}
