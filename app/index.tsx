import { Redirect } from "expo-router"

import React from "react"

export default function Index() {
    const isLogin = false

    if (!isLogin) return <Redirect href="/(auth)/login" />

    return <Redirect href="/(dashboard)/dashboard" />
}
