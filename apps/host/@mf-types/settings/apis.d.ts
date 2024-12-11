
    export type RemoteKeys = 'settings/RemoteEntry';
    type PackageType<T> = T extends 'settings/RemoteEntry' ? typeof import('settings/RemoteEntry') :any;