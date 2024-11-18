export type Recomendations = {
    uid: string,
    operationSystem: string,
    installationSteps: InstallationSteps[]
}

export type InstallationSteps = {
    id: number,
    description: string
}

export type State = {
    recomendations: Recomendations[]
}