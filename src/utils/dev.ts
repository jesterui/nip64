const DEV_MODE = process.env.NODE_ENV === 'development' && process.env.REACT_APP_DEV_MODE === 'true'

export const isDevMode = () => DEV_MODE
