import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { RootTabParamList } from './RootStackList'
import Ionicons from '@expo/vector-icons/Ionicons'
import HomeScreen from '../screens/HomeScreen'

const Tab = createBottomTabNavigator<RootTabParamList>()

function EmptyScreen() {
    return <View style={styles.emptyScreen} />
}

function RootNavigation() {
    return (
        <Tab.Navigator
            screenOptions={({route}) => ({
                headerShown: false,
                tabBarActiveTintColor: '#10b981',
                tabBarInactiveTintColor: '#94a3b8',
                tabBarStyle: {
                    position: 'absolute',
                    left: 16,
                    right: 16,
                    bottom: 16,
                    height: 72,
                    borderTopWidth: 0,
                    borderRadius: 24,
                    paddingTop: 8,
                    paddingBottom: 8,
                    backgroundColor: '#ffffff',
                    shadowColor: '#0f172a',
                    shadowOffset: { width: 0, height: 8 },
                    shadowOpacity: 0.12,
                    shadowRadius: 18,
                    elevation: 14,
                },
                tabBarLabelStyle: {
                    fontSize: 11,
                    fontWeight: '600',
                },
                tabBarHideOnKeyboard: true,
                tabBarIcon: ({focused, color, size}) => {
                    let iconName: React.ComponentProps<typeof Ionicons>['name'] = 'ellipse-outline'

                    if (route.name === 'HomeTab') iconName = focused ? 'home' : 'home-outline'
                    if (route.name === 'WalletTab') iconName = focused ? 'wallet' : 'wallet-outline'
                    if (route.name === 'TransactionTab') iconName = focused ? 'newspaper' : 'newspaper-outline'
                    if (route.name === 'BudgetTab') iconName = focused ? 'pie-chart' : 'pie-chart-outline'

                    return (
                        <Ionicons
                            name={iconName}
                            size={size}
                            color={color}
                        />
                    )
                }
            })}
        >
            <Tab.Screen
                name='HomeTab'
                component={HomeScreen}
                options={{ tabBarLabel: 'Home' }}
            />
            <Tab.Screen
                name='WalletTab'
                component={HomeScreen}
                options={{ tabBarLabel: 'Wallet' }}
            />
            <Tab.Screen
                name='AddActionTab'
                component={EmptyScreen}
                listeners={{
                    tabPress: (e) => {
                        e.preventDefault()
                    },
                }}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: () => null,
                    tabBarButton: () => (
                        <View style={styles.addButtonContainer}>
                            <TouchableOpacity
                                activeOpacity={0.8}
                                style={styles.addButton}
                            >
                                <Ionicons
                                    name='add'
                                    size={30}
                                    color='#ffffff'
                                />
                            </TouchableOpacity>
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name='TransactionTab'
                component={HomeScreen}
                options={{ tabBarLabel: 'Transaction' }}
            />
            <Tab.Screen
                name='BudgetTab'
                component={HomeScreen}
                options={{ tabBarLabel: 'Budget' }}
            />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    emptyScreen: {
        flex: 1,
    },
    addButtonContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    addButton: {
        marginTop: -56,
        height: 64,
        width: 64,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 999,
        backgroundColor: '#10b981',
        shadowColor: '#10b981',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.3,
        shadowRadius: 16,
        elevation: 14,
    },
})

export default RootNavigation
